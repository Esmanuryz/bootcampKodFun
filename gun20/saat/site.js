//@import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');

//bu tarz bir ifade ile de yapilabilir (font-family).
function SaatiGoster() {
    const zaman = new Date();
    const divSaat = document.getElementById("saat");
    divSaat.textContent = zaman.toLocaleTimeString("tr");
}

SaatiGoster();


//her 1000ms de bir bu metodu cagirir.

setInterval(SaatiGoster, 1000);

