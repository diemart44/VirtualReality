
window.addEventListener("DOMContentLoaded",function() {
    scene = document.querySelector("a-scene"); 
    rocket = document.querySelector("#rocket");
    pokemonball = document.querySelector("#pokemonball")
    loop();
})

function loop(){
    
    pokemonball.setAttribute("rotation",{x:1, y:0, z:0});
    
}