const container = document.querySelector(".container");
const baseURL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

for (let i = 1; i < 152; i++) {
    const pokemonDiv = document.createElement("div");
    pokemonDiv.classList.add("pokemon")
    const pokemonNum = document.createElement("span");
    const img = document.createElement("img");

    img.src = `${baseURL}${i}.png`;
    pokemonNum.innerText = `#${i}`;
    container.appendChild(pokemonDiv);
    pokemonDiv.appendChild(img);
    pokemonDiv.appendChild(pokemonNum);
}