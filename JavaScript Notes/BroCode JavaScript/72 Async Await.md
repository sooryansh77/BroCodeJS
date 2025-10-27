Async/Await = 
Async - makes a function return a promise  [[70 and 71 CallBack Hell and Promises]]
Await - makes an async function wait for a promise

Allows you write asynchronous code in a synchronous manner
Async doesn't have resolve or reject parameters
Everything after Await is placed in an event queue

```js
function walkDog(){
    return new Promise((resolve, reject)=>{
        const dogWalked = true;
        if(dogWalked){
            setTimeout(()=>{
            resolve("You are walking Dog. 🐶");
            }, 1500);
        }
        else{
            reject("You DIDN'T walked the Dog.")
        }
        
    })
}

function cooking(){
    return new Promise((resolve, reject)=>{
        const cooked = true;
        
        if(cooked){
        setTimeout(()=>{
            resolve("You are making Cookie 🍪");
            }, 1000);  
        }
        else{
            reject("You didn't made the Cookie.");
        }
    })
}

function bathing(){
    return new Promise((resolve, reject)=>{
        const bathed = true;
        if(bathed){
            setTimeout(()=>{
                resolve("You are taking Shower. 🚿");
            }, 500);
        }
        else{
            reject("You didn't showered.")
        }
    })
}

async function activities(){
   try{
        const dog = await walkDog();
        console.log(dog);
        const cookie = await cooking();
        console.log(cookie);
        const bathed = await bathing();
        console.log(bathed);
   }
   catch(error){
        console.error(error);
   }
}

activities();
```

If a function is manually returning a promise, making that function async is useless.
Await is only used if you want to pause async function and make it wait for any promises.

In this case, we have only made the activities function as async not the above functions because they are already returning a promise manually either resolve or reject. And moreover making the activities() function async made it wait for the completion of each asynchronous function called inside it for their respective promises thus synchronizing asynchronous functions. Async/Awaits is the most modern way of dealing with asynchronous functions.