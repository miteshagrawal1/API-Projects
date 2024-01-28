async function checkgender(){
    let name = document.getElementById("input").value;
    let res = await fetch(`https://api.genderize.io/?name=${name}`)
    if(!res.ok){
        alert("Enter Correct Name!!!!")
    }
    let data = await res.json();

    console.log(data);
    document.getElementById("ans").innerHTML = data.gender.toUpperCase();
    document.getElementById("probability").innerHTML = data.probability;
    // document.getElementById("ans").innerHTML = `Predicted Gender is: ${data.gender} <br> Probability: ${data.probability}`
}