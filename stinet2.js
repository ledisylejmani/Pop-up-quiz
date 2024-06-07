function showImage(stina) {
    let foto = document.querySelector("#foto");
    
    let linkuImazhit = '';

    // Vendosni adresat e imazheve për secilën stinë
    if (stina === 'Vjeshta') {
        linkuImazhit = 'img/vjeshta.jpg';
    } else if (stina === 'Dimri') {
        linkuImazhit = 'img/dimri.jpg';
    } else if (stina === 'Pranvera') {
        linkuImazhit = 'img/pranvera.jpg';
    } else if (stina === 'Vera') {
        linkuImazhit = 'img/vera.jpg';
    } else if (stina === 'Seasons') {
        linkuImazhit = 'img/allseasons.jpg'; // nëse stina nuk gjendet, shfaqni një imazh default
    }
    
    foto.innerHTML = '';

    let img = document.createElement("img");
    img.src = linkuImazhit;
        
    foto.appendChild(img);

    // Fshi klasën active nga të gjitha lidhjet që nuk janë aktive
    let stinat = document.querySelectorAll("#stinat a "); 
    
    stinat.forEach(function (element) {
        if (element.innerHTML.toLowerCase() !== stina) {
            element.classList.remove("active");
        }
    });

    var stinaAktive = document.querySelector("#stinat a[href='#'][onclick=\"showImage('" + stina + "')\"]");
    stinaAktive.classList.toggle("active");

    
}


