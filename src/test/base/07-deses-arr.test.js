import { retornaArreglo } from "../../base/07-deses-arr"

describe('Pruebas en desestructuración', () => {
    test('Debe retornar un string y un número', () => { 
        const [letras, numeros] = retornaArreglo();
        
        expect( letras ).toEqual('ABC');
        expect( typeof letras ).toBe('string')

        expect( numeros ).toBe(123);
        expect( typeof numeros ).toBe('number')

     })
})