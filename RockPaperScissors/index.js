const buttons = document.querySelectorAll(".myButton");

buttons.forEach(button => {
    button.classList.add("enabled");

    button.addEventListener("click", event=>{
        if(event.target.classList.contains("disabled")){
            event.target.textContent += "🤬";
        }
        else{
            event.target.classList.replace("enabled","disabled");
        }
    })


    button.addEventListener("mouseover", event => {
        event.target.classList.toggle("hover");
    })

    button.addEventListener("mouseout", event => {
        event.target.classList.toggle("hover");
    })


})