let joke = document.getElementById("joke");
    let category = document.getElementById("category");
    let btn = document.getElementById("btn");

    // function jokegene(){
    //     fetch("https://v2.jokeapi.dev/joke/Any?type=single")
    //     .then((a)=>{
    //         return a.json();
    //     }).then((data)=>{
    //         joke.innerHTML = data.joke;
    //         category.innerHTML = data.category;
    //     })
    // }

    function jokegene(){
        fetch("https://v2.jokeapi.dev/joke/Any?type=single")
        .then((a)=>{
            return a.json();
        }).then((data)=>{
            joke.innerHTML = data.joke;
            category.innerHTML = data.category;
            console.log(data)
        })
    }