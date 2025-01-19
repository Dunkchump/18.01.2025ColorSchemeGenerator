const btn = document.getElementById("btn"),
      colorInput = document.getElementById("color"),
      typePalet = document.getElementById("typePalet"),
      paletDiv = document.getElementById("palet");

btn.addEventListener("click", function(){
    console.log(colorInput.value)
    const hexColor = colorInput.value.substring(1);
    fetch(`https://www.thecolorapi.com/scheme?hex=${hexColor}&mode=${typePalet.value}&count=5`)
        .then(res => res.json())
        .then(data => {
            const colors = data.colors.map(color => color.hex.value);
            paletDiv.querySelectorAll('.color').forEach((div, i) => {
                div.style.backgroundColor = colors[i];
                
            });
            paletDiv.querySelectorAll('.colorr').forEach((div, i) => {
                div.style.backgroundColor = "#1F2937";
                div.textContent = colors[i];
            });
        });
})


