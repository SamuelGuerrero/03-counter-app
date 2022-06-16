import { getImagen } from "../../base/11-async-await"

describe('Pruebas con async-await y Fetch', () => { 
    
    test('Debe de retornar el url de la imágen', async() => { 
        const url = await getImagen()

        expect( url.includes('https://') ).toBe( true ) 
     })
 })