/**
* @FirstMethod
*/

/* document.getElementById("btn").addEventListener("click", () => {
    let textValue = document.getElementById("text").value;
    axios.get('https://api.funtranslations.com/translate/pirate.json?text=' + textValue)
        .then(res => renderTextDiv(res.data.contents.translated));
})


function renderTextDiv(text) {
    document.getElementById("text-converted").innerText = text;
} */


/** 
 * @SecondMethod
 * @Without @catchcall @catchERROR
 */

const url = 'https://api.funtranslations.com/translate/pirate.json?text='
document.getElementById("btn").addEventListener("click", () => {
    let textValue = document.getElementById("text").value;
    fetch(getTextUrl(textValue))
        .then(e => e.json())
        // .then(v => displaytext(v.contents.translated))
        .then(v => displaytext(v))
    // .catch(e => displaytext(e))

});

function getTextUrl(textUrl) {
    return url + textUrl;
}

function displaytext(textDisplay) {
    console.log(textDisplay)
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
