

const sounds = [ // CREAMOS EL ARREGLO DE LOS IDS
    'Chicken',
    'Horse',
    'Lion',
    'Dog',
    'Cat',
    'Elephant'
];


sounds.forEach((sound) => { // ITERAMOS TODO EL ARREGLO X CADA UNO DE ELOS
    const btn = document.createElement('button'); // CREAMOS UNA CONSTANTE Y UN BOTON POR CADA UNO
    btn.classList.add('btn'); // LE AGREAGAMOS LA CLASE BTN

    btn.innerText = sound; // LE AGREGAMOS EL TEXTO AL BOTON

    btn.addEventListener('click',() => { // ESCUCHAMOS POR CLICK EN EL BOTON
        stopSongs();
       document.getElementById(sound).play();
    })

    document.getElementById('buttons').appendChild(btn);
});

function stopSongs() {
    sounds.forEach((sound => {
        const song =document.getElementById(sound);

        song.pause();
        song.currentTime= 0;
    }))
}