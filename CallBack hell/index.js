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