const {
    Worker, isMainThread, parentPort, workerData
} = require('worker_threads');

const min = 2;

let primes = [];

function findPrimes(start, range) {
    let isPrime = true;
    let end = start + range;

    for(let i = start; i < end; i ++) {
        for(let j = min; j < Math.sqrt(end); j++) {
            if(i != j && i%j === 0) {
                isPrime = false;
                break;
            }
        }
        if(isPrime) {
            primes.push(i);
        }
        isPrime = true;
    }
}

if(isMainThread) {
    const max = 100000;
    const threadCount = 8;
    const threads = new Set();
    const range = Math.ceil((max - min) / threadCount);
    let start = min;

    console.time("prime");
    for(let i = 0; i < threadCount -1; i ++) {
        const workerStart = start;
        threads.add(new Worker(__filename, {
            workerData: { start: workerStart, range } // start 로 workerStart을 워커에서 보냄
        }));
        start += range;
    }

    threads.add(new Worker(__filename, {
        workerData: { start, range: range + ((max - min + 1) % threadCount) } // start 로 workerStart을 워커에서 보냄
    }));

    for(let worker of threads) {
        worker.on('error', (err) => {
            throw err;
        });
        worker.on("exit", () => {
            threads.delete(worker);
            if(threads.size == 0) {
                console.timeEnd('prime');
                console.log(primes.length);
            }
        });
        worker.on("message", message => {
            primes = primes.concat(message);
        });
    }
} else {
    findPrimes(workerData.start, workerData.range);
    parentPort.postMessage(primes);

}
