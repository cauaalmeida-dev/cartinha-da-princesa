const mensagem = document.getElementById('mensagem');
const botaocarta = document.getElementById('botaocarta');



botaocarta.addEventListener('click', function () {
    mensagem.textContent = 'Mor, escrevi esse texto não só para tu ver, mas porque é algo que sempre senti por ti. Sempre irei te amar. Quero estar contigo em todos os momentos, não importa onde for. Nem que eu tenha que andar quilômetros para ficar ao teu lado, eu iria, porque não existe distância que me faça ficar longe de ti, nem alguém que consiga me afastar de ti.O que eu sinto por ti é algo muito maior do que tudo que já senti por qualquer outra coisa. Tu é muito especial para mim, e eu quero continuar vivendo momentos lindos contigo, construindo nossas lembranças, independentemente do que acontecer. É por tudo isso que eu te amo,  Minha princesa! ❤️'
});

const fotosCarta = document.getElementById('fotosCarta');
const imagens = [
    'fotos/amor.jpg',
    'fotos/foto2.jpg',
    'fotos/foto3.jpg',
    'fotos/foto1.jpg',
];

imagens.forEach(function (caminho) {
    const foto = document.createElement('img');
    foto.src = caminho;
    fotosCarta.appendChild(foto);
});

fotosCarta.style.display = 'block';