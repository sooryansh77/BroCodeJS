

async function fetchData(){
    try{
        const pokemonSearch = document.getElementById("pokemonSearch").value;
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonSearch}`);

        if(!response.ok){
            throw new Error("Couldn't fetch resource");
        }

        const data = await response.json();
        const imageElement = document.getElementById("imageHolder");
        imageElement.src = data.sprites.front_default;
        imageElement.style.display = "block";
    }
    catch(error){
        console.error(error);
    }
}
