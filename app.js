
const form=document.querySelector("form");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const pokeName=document.querySelector("input").value;
    fetchData(pokeName);
})

async function fetchData(name){
    try{
        
        const response=await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        if(!response.ok){
            throw new Error("Could not fetch resource!");
        }

        const data=await response.json();
        const pokemonSprite=data.sprites.front_default;
        const img=document.getElementById("pokeimg");
        img.src=pokemonSprite;
        img.style.display="block";
    }catch(error){
        console.log(error);
    }
}
