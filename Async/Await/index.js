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
        const cooked = false;
        
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