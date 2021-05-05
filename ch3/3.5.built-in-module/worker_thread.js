const {
    Worker, isMainThread, parentPort
} = require('worker_threads');

// 부모 스레드에서 동작하는지 or 자식 스레드에서 동작하는지
if (isMainThread) {
    const worker = new Worker(__filename); // 1. 부모가 워커 생성
    worker.on("message", message => console.log('from worker :', message)); //6. 자식으로부터 메세지 받음
    worker.on("exit", () => console.log('worker exit:')); // 8. 자식과의 통신 종료
    worker.postMessage("ping"); // 2. 워커에게 메세지 보냄
} else {
    parentPort.on("message", (value) => { //4. 부모로 부터 매세지 받음
        console.log('from parent :', value); 
        parentPort.postMessage("pong"); // 5. 부모에게 메시지 보냄
        parentPort.close(); // 7. 부모와 통신 종료
    });
}