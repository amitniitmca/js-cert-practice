const promise1 = new Promise((resolve, reject) => setTimeout(resolve, 1000, 'promise one'));
const promise2 = new Promise((resolve, reject) => setTimeout(resolve, 2000, 'promise two'));
const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 1500, 'promise three'));
const promise4 = new Promise((resolve, reject) => setTimeout(reject, 500, 'promise four error'));

Promise.all([promise1, promise2, promise3])
.then(valueArray => console.log(valueArray));

Promise.allSettled([promise1, promise2, promise3, promise4])
.then(valueArray => console.log(valueArray));

Promise.race([promise1, promise2, promise3, promise4]) 
.then(valueArray => console.log(valueArray));

Promise.any([promise1, promise2, promise3, promise4]) 
.then(valueArray => console.log(valueArray));
