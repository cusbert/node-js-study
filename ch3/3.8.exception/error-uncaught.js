process.on('uncaughtException', (err) => {
  console.error('uncaughtException!!!', err);
});

setInterval(() => {
  throw new Error('서버를 고장내주마');
}, 1000);

setInterval(() => {
  console.log("end");
}, 2000);