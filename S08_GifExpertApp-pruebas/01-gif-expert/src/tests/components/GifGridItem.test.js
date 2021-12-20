import React from 'react'
import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";
import PropTypes from "prop-types";

describe('Prruebas en <GifGridItem />', ()=>{
    const title = 'un título';
    const url = 'http://localhost:3000/algo.jpg'
    const wrapper = shallow(<GifGridItem title={title} url={url}/>)

    test('debe mostrar el componente correctamente', () =>{
        expect(wrapper).toMatchSnapshot();
    })

    test('debe tener un párrafo con el tile', ()=>{
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title)
    })

    test('debe tener la imagen al igual al url y alt de los props', ()=>{
        const img = wrapper.find('img');
        const {src, alt} = img.props();
        expect(url).toBe(src);
        expect(alt).toBe(title);
    })

    test('la imagen debe tener la class de animated fade in', ()=>{
        const div = wrapper.find('div');
        const {className} = div.props();
        expect(className.includes('animate__fadeIn')).toBe(true);
    })
})
