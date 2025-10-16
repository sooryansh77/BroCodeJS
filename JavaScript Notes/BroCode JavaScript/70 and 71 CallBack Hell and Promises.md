CallBack Hell is termed to the pyramid that is formed when trying to handle asynchronous code to execute in a synchronous manner using callbacks.

Nested callbacks create a view that is difficult to read and understand.

Promises are newer and clutter-free way of managing asynchronous code.

```js
// function task1(){
//     console.log("Task-1 Complete");
// }

// function task2(){
//     console.log("Task-2 Complete");
// }

// function task3(){
//     console.log("Task-3 Complete");
// }

// function task4(){
//     console.log("Task-4 Complete");
// }

// task1();
// task2();
// task3();
// task4();
// console.log("All Tasks Complete!");

// function task1(){
//     setTimeout(() =>{
//         console.log("Task-1 Complete")
//     }, 2000);
// }

// function task2(){
//     setTimeout(() =>{
//         console.log("Task-2 Complete")
//     }, 1000);
// }

// function task3(){
//     setTimeout(() =>{
//         console.log("Task-3 Complete")
//     }, 3000);
// }

// function task4(){
//     setTimeout(() =>{
//         console.log("Task-4 Complete")
//     }, 1500);
// }

// task1();
// task2();
// task3();
// task4();
// console.log("All Tasks Complete!");

function task1(callback){
    setTimeout(() =>{
        console.log("Task-1 Complete");
        callback();
    }
    , 2000);
    
}

function task2(callback){
    setTimeout(() =>{
        console.log("Task-2 Complete");
        callback();
    }
    , 1000);
    
}

function task3(callback){
    setTimeout(() =>{
        console.log("Task-3 Complete");
        callback();
    }
    , 3000);
    
}

function task4(callback){
    setTimeout(() =>{
        console.log("Task-4 Complete");
        callback();
    }
    , 1500);
    
}

task1(()=>{
    task2(()=>{
        task3(()=>{
            task4(()=>{
                console.log("All Tasks Complete!");
            })
        })
    })
})
```

Promises = An Object that manages asynchronous operations.
Wrap a Promise Object around {asynchronous code}
"I promise to return a value"
PENDING -> RESOLVED or REJECTED
new Promise((resolve, reject) => {asynchronous code})

DO THESE CHORES IN ORDER

1. WALK THE DOG
2. CLEAN THE KITCHEN
3. TAKE OUT TRASH

```js
//SYNTAX of PROMISE
function func1(){
	return new Promise((resolve, reject)=>{
		if(True)
			setTimeout(()=>{
			resolve("TASK");
			})
		else{
			reject("TASK FAILED");
		}
	})
}

function func2(){
 //similar another async code.
}

func1().then(value => {console.log(value); return func2()})
	   .catch(error => {console.error(error)});
```

we use method chaining using then function and promise returns a value which we can log to get the result.

If rejected the whole chain breaks and later tasks do not execute.

```js
function walkingDog(){
    return new Promise((resolve, reject)=>{
        const dogWalked = true;
        
        if(dogWalked){
            setTimeout(()=>{
                resolve("You walked the Dog. 🐕");
            }, 2000);
            
        }
        else{
            reject("You DIDN't walk the Dog.")
        }
    });
}

function cleanTheKitchen(){
    
    return new Promise((resolve, reject)=> {
        const kitchenCleaned = true;

        if(kitchenCleaned){
            setTimeout(()=>{
                resolve("You cleaned the kitchen 🍽️");
            }, 1500);
        }
        else{
            reject("You didn't clean the kitchen");
        }
    });
   
}

function TakeOutTheTrash(){
    
    return new Promise((resolve, reject)=>{
        trashTakenOut = true;

        if(trashTakenOut){
            setTimeout(()=>{
                resolve("You take out the trash.");
            },3000);
        }
        else{
            reject(console.log("You didn't took out the trash."));
        }
    });
    
}

walkingDog().then(value => {console.log(value); return cleanTheKitchen()})
          .then(value => {console.log(value); return TakeOutTheTrash()})
          .then(value => {console.log(value); console.log("You finished all the tasks 🥳");})
          
```

```
You walked the Dog. 🐕
You cleaned the kitchen 🍽️
You take out the trash.
You finished all the tasks 🥳
```