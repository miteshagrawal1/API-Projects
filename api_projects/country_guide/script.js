async function searchinfo(){
    let input = document.getElementById("input").value;
    let img = document.getElementById("img");
    let capital = document.getElementById("capital");
    let population = document.getElementById("population");
    let continent = document.getElementById("continent");
    let res = await fetch(`https://restcountries.com/v3.1/name/${input}?fullText=true`)
    if(!res.ok){
        alert("Enter valid data!!!");
    }
    let data = await res.json();
    
    console.log(data)
    img.src = data[0].flags.png;
    capital.innerHTML = data[0].capital;
    population.innerHTML = data[0].population.toLocaleString("en-US");
    continent.innerHTML = data[0].continents[0];
}