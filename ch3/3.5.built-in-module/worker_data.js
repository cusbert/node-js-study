const {
    Worker, isMainThread, parentPort, workerData
} = require('worker_threads');

if (isMainThread) {
    const threads = new Set();
    threads.add(new Worker(__filename, {
       workerData: {start: 1} // start 로 1을 워커에서 보냄
    }));
   threads.add(new Worker(__filename, {
    workerData: {start: 2}  // start 로 2을 워커에서 보냄
    }));

    for(let worker of threads) {
        worker.on("message", message => console.log('from worker :', message));
        worker.on("exit", () => {
            threads.delete(worker);
            if(threads.size == 0) {
                console.log('done...'); 

            }
        });
    }
} else {
   const data = workerData;
   parentPort.postMessage(data.start + 100);
}