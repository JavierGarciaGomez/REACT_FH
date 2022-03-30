import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';
import heroes from '../../data/heroes';


describe('Pruebas en funciones de Héroes', () => {

    test('debe de retornar un héroe por id', () => {
        const id = 3;
        const hero =     {
            id: 3,
            name: 'Superman',
            owner: 'DC'
        };

        const fetchedHero = getHeroeById(id);
        expect(fetchedHero).toEqual(hero);
    });    


    test('debe de retornar un undefined si Héroe no existe', () => {
        
        const id = 10;
        const heroe = getHeroeById( id );

        expect( heroe ).toBe( undefined );

    });

    test('debe retornar un arreglo con los héroes de DC', () => {
        const dcHeroes = [{
            id: 1,
            name: 'Batman',
            owner: 'DC'
        },
        {
            id: 3,
            name: 'Superman',
            owner: 'DC'
        },
        {
            id: 4,
            name: 'Flash',
            owner: 'DC'
        },];

        const fetchedHeros = getHeroesByOwner('DC');
        expect(dcHeroes).toEqual(fetchedHeros);
    })

    test('debe validar el length de los héroes de Marvel', () => {
        const fetchedHeros = getHeroesByOwner('Marvel');
        expect(fetchedHeros.length).toBe(2);
    })    
    

})
