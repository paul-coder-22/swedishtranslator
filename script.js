/**
* @FirstMethod
*/
/* document.getElementById("btn").addEventListener("click", () => {
    let textValue = document.getElementById("text").value;
    axios.get('https://api.funtranslations.com/translate/pirate.json?text=' + textValue)
        .then(res => {
            // console.log(res);
            console.log(res)
            renderTextDiv(res.data.contents.translated)
        }).catch(e => console.log(e))
}) */


/* function renderTextDiv(text) {
    console.log(text)
    document.getElementById("text-converted").innerText = text;
} */

/**
 * @secondOne 
 */
const url = 'https://api.funtranslations.com/translate/pirate.json?text='
document.getElementById("btn").addEventListener("click", () => {
    let textValue = document.getElementById("text").value;
    let url = getTextUrl(textValue);
    // fetch(url)
    //     .then(e => console.log(e.json()))
    //     // .then(v => displaytext(v.contents.translated))
    //     .then(json => {
    //         var translatedtext = json.contents.translated;
    //         console.log(translatedtext)
    //         document.getElementById('text-converted').innerText = translatedtext;
    //     })
    //     .catch(errorHandles)
    fetch(url)
        .then(response => response.json())
        .then(json => document.getElementById('text-converted').innerText = json.contents.translated)
        .catch(e => console.log(e))

});

function getTextUrl(textUrl) {
    return 'https://api.funtranslations.com/translate/pirate.json?text=' + textUrl;
}

function errorHandles(error) {
    console.log("Something went wrong " + error);
    alert("something wrong with the server ! try after some thing.")
}
/* function displaytext(textDisplay) {

    console.log(textDisplay.Contents)
    if (textDisplay.error) {
        const divBody = document.getElementById("text-converted");
        divBody.innerText = 'Wait Dude ! 🤍'
        divBody.style.backgroundColor = 'red'
    } else {
        const divBody = document.getElementById("text-converted");
        divBody.innerText = textDisplay.contents.translated;
        divBody.style.backgroundColor = 'yellow'
    }
}
 */