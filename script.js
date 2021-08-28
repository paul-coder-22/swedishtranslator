const errorText = "*Check Your Input ! You've not type anything"
const url = 'https://api.funtranslations.com/translate/pirate.json?text='
document.getElementById("btn").addEventListener("click", () => {
    let textValue = document.getElementById("text").value;
    if (textValue === '') {
        document.getElementById('text-converted').style.color = "red"
        document.getElementById('text-converted').innerHTML = errorText;
    } else {
        document.getElementById('text-converted').style.color = "black"
        let url = getTextUrl(textValue);
        fetch(url)
            .then(response => response.json())
            .then(json => document.getElementById('text-converted').innerText = json.contents.translated)
            .catch(e => console.log(e))
    }
});

function getTextUrl(textUrl) {
    return 'https://api.funtranslations.com/translate/pirate.json?text=' + textUrl;
}

/*
function errorHandles(error) {
    console.log("Something went wrong " + error);
    alert("something wrong with the server ! try after some thing.")
}
 function displaytext(textDisplay) {

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