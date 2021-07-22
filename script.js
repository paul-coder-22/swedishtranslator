/**
* @FirstMethod
*/

document.getElementById("btn").addEventListener("click", () => {
    let textValue = document.getElementById("text").value;
    axios.get('https://api.funtranslations.com/translate/pirate.json?text=' + textValue)
        .then(res => renderTextDiv(res.data.contents.translated));
})


function renderTextDiv(text) {
    document.getElementById("text-converted").innerText = text;
}


