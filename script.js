let colorSelector = document.getElementById("colorSelector"); 
colorSelector.onchange = function () {
    console.log(colorSelector.value);
    document.getElementById("colorBox").style = `background-color: ${colorSelector.value};`;
}

function toggleDarkMode(){
    
}