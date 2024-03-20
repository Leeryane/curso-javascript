function carregar() {
    var msg = document.getElementById('msg');
    var img = document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours(); 
    

msg.innerHTML = `Agora são ${hora} horas.`;
    if (hora >= 0 && hora < 12) { 
        //BOM DIA!
        img.src = 'foto-manha.png';
        document.body.style.background = '#fadd51';
        
        
    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE!
        img.src = 'foto-tarde.png';
        document.body.style.background = '#fcfbce';

    } else if (hora >= 18 && hora < 24 ) {
        // BOA NOITE!
        img.src = 'foto-noite.png';
        document.body.style.background = '#0c1416'
        
    }
}
