export const  crearCartaHTML =(carta,divCarta) =>{
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');
    divCarta.append( imgCarta );
}