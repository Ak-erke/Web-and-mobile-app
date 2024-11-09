
let savedHeroes = []; 
let url = "https://akabab.github.io/superhero-api/api/all.json"; 
let heroImage = document.getElementById("hero-avatar"); 
let heroTitle = document.getElementById("hero-title"); 
let heroDescription = document.getElementById("hero-description");
async function fetchAllHeroes() { 
    try { 
        let response = await fetch(url); 
        let heroes = await response.json(); 
        savedHeroes = heroes; 
 
        let randomIndex = Math.floor(Math.random() * heroes.length); 
        let firstHero = heroes[randomIndex]; 
        console.log(firstHero); 
         
        heroTitle.innerText = firstHero.name; 
        heroDescription.innerText =firstHero.biography.firstAppearance;
 heroImage.setAttribute("src", firstHero.images.md);
}
catch (error) { 
        console.log(`Getting some error: ${error}`); 
    } 
}
 
document.addEventListener("DOMContentLoaded", fetchAllHeroes);