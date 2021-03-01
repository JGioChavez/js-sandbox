let colorSelector = document.getElementById("colorSelector"); 
colorSelector.onchange = function () {
    console.log(colorSelector.value);
    document.getElementById("colorBox").style = `background-color: ${colorSelector.value};`;
}

function toggleDarkMode(){
    let content = document.getElementById("content")
    content.classList.toggle("dark-mode")
}

function teleport(){
    console.log("teleport")
    let runaway = document.getElementById("runaway")
    runaway.innerText = "Something else"
}