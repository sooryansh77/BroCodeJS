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
          