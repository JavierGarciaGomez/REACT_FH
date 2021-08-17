import React from 'react'
import { shallow } from "enzyme";
import '@testing-library/jest-dom'
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
// para fingir cualquier llamada a este archivo
jest.mock('../../hooks/useFetchGifs')

describe('Pruebas en <GifGrid />', ()=>{
    const category = 'Godfather';
    

    test('debe mostrar el componente correctamente', () =>{
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        })
        const wrapper = shallow (<GifGrid category={category}/>);
    
        expect(wrapper).toMatchSnapshot();
        
    })
    test('debe mostrar ítems cando se cargan imágenes useFetchGifs', () =>{
        const gifs = [{
            id: 'abc',
            url: 'https://localhost/cualquiera.jpg',
            title: 'el titulo'
        }, {
            id: 'def',
            url: 'https://localhost/cualquiera.jpg',
            title: 'el titulo'
        }]
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        })
        const wrapper = shallow (<GifGrid category={category}/>);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length)
        
    })
    

})

