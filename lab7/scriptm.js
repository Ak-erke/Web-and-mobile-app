document.addEventListener("DOMContentLoaded", async () => {
    const url = "https://akabab.github.io/superhero-api/api/all.json";
    const heroImage = document.getElementById("hero-avatar");
    const heroTitle = document.getElementById("hero-title");
    const heroDescription = document.getElementById("hero-description");

    try {
        const response = await fetch(url);
        const heroes = await response.json();
        const randomHero = heroes[Math.floor(Math.random() * heroes.length)];
        
        heroTitle.textContent = randomHero.name;
        heroDescription.textContent = randomHero.biography.firstAppearance || "Unknown appearance";
        heroImage.src = randomHero.images.md;
    } 
    
    catch (error) {
        console.error("Error fetching heroes:", error);
    }
});
