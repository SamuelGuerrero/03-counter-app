import {getSaludo} from '../../base/02-template-string'
import '@testing-library/jest-dom'

describe('Pruebas en 02-template-string.js', () => {
    test('getSaludo debe de retornar Hola Samuel', () => { 
        const nombre = 'Samuel'

        const saludo = getSaludo(nombre);
        console.log(saludo);
        expect(saludo).toBe('Hola '+nombre+'!');
     })

     //getSaludo debe retornar Hola Carlos! Si no hay argumento nombre

    test('getSaludo debe retornar Hola Carlos! Si no hay argumento nombre', () => { 
        const saludo = getSaludo();

        expect(saludo).toBe('Hola Carlos!');
     })
});