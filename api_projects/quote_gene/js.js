let para = document.getElementById("para");
let author = document.getElementById("author");
async function genequote() {
    // fetch("https://api.quotable.io/random")
    //     .then((a) => {
    //         return a.json();
    //     }).then((data) => {
    //         para.innerHTML = data.content;
    //         author.innerHTML = data.author;
    //         console.log(data);
    //     })

    let res = await fetch("https://api.quotable.io/random");
    if (!res.ok) {
        alert("Retry....")
    }
    let data = await res.json();
    para.innerHTML = data.content;
    author.innerHTML = data.author;
}