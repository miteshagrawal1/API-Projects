let meme = document.getElementById("meme");
    function genememe() {
        fetch("https://api.memegen.link/images/")
            .then((a) => {
                return a.json();
            })
            .then((data) => {
                // console.log(data.data.url)
                let index = Math.floor(Math.random() * data.length);
                console.log(data[index].url);
                meme.src = data[index].url;
            })
            .catch((error) => {
                console.error("error msg: ", error);
            })
    }