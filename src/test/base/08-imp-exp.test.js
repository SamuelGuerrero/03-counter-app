import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe('Pruebas en funciones de Héroes', () => { 
    test('Debe retornar un héroe', () =>{
        const id = 1;
        const heroe = getHeroeById(id);

        const heroeData = heroes.find( h => heroe.id === id )
        expect( heroe ).toEqual(heroeData);
        
    });

    test('Debe retornar undefined si héroe no existe', () =>{
        const id = 10;
        const heroe = getHeroeById(id);

        expect( heroe ).toBe(undefined);
        
    });

    test('Debe retornar héroes de DC', () => { 
        const owner = 'DC';
        const someHeroes = getHeroesByOwner(owner);
        
        const someHeroesData = heroes.filter(h => h.owner == owner)
        expect(someHeroes).toEqual(someHeroesData)
     })

    test('Debe retornar 3 heroes de Marvel', () => { 
        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);

        expect( heroes.length ).toBe(2)
     })
 })