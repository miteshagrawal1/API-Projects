  // async function getmeaning(){
    //     let word = document.getElementById("input").value;
    //     let response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    //     let data = await response.json();


    //     console.log(data);
    //     // console.log(data[0].phonetic);
    // }
    let word
    let audio;
    async function getmeaning() {
        word = document.getElementById("input").value;
        let res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        if(!res.ok){
            alert("Enter Correct Word!!!");
        }
        let data = await res.json();

        console.log(data)
        document.getElementById("meaning").innerHTML = data[0].meanings[0].definitions[0].definition;
        document.getElementById("phonetic").innerHTML = data[0].phonetic;
        document.getElementById("altmean").addEventListener("click",()=>{
            document.getElementById("meaning").innerHTML = data[0].meanings[1].definitions[0].definition;  
        })
    }

    // function getmeaning(){
    //         word = document.getElementById("input").value;
    //         fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    //         .then((re)=>{
    //             return re.json();
    //         })
    //         .then((data)=>{
    //             console.log(data);
    //             document.getElementById("meaning").innerHTML = (data[0].meanings[0].definitions[0].definition);
    //         })
    //         .catch((error)=>{
    //             document.write(error);
    //         })
    //     }