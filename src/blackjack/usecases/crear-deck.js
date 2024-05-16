import { shuffle } from "underscore";
// Esta función crea un nuevo deck

/**
 *  crearDeck
 *  @param {array<string>} tiposDeCarta Ejemplo : ['C','D','H','S']
 *  @param {array<string>} tiposEspeciales
 *  @returns {array<string>} retorna un nuevo deck
 */

export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    if(!tiposDeCarta || tiposDeCarta.lengt===0) throw new Error('Tipo de carta es obligatorio y tener al menos un valor')

    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = shuffle( deck );
    console.log( deck );
    return deck;
}

