import React from 'react'
import { shallow } from "enzyme";
import { AddCategory } from '../../components/AddCategory';
import '@testing-library/jest-dom'

describe('Pruebas en <AddCategory />', ()=>{
    const setCategories = jest.fn(); 
    let wrapper = shallow (<AddCategory setCategories={setCategories}/>);

    beforeEach(()=>{
        jest.clearAllMocks();
        wrapper = shallow (<AddCategory setCategories={setCategories}/>);
    })

    test('debe mostrar el componente correctamente', () =>{
        expect(wrapper).toMatchSnapshot();
        
    })
    
    test('debe cambiar la caja de texto', () =>{
        const input = wrapper.find('input');
        const value = 'Value del evento';
        // 93 segundo argumento es el evento
        input.simulate('change',  {target: {value}});
        // 
        console.log(input)

    })

    test('No debe postear la info on submit', ()=>{
        wrapper.find('form').simulate('submit', {preventDefault(){}})
        expect(setCategories).not.toHaveBeenCalled();
    })

    test('debe llamar el setCategories y limpiar la caja de texto', () => {
        // Simular el inputChange
        const value = 'Valor de pruebas';
        wrapper.find('input').simulate('change', {
            target: {value}
        })
        // Simular el submit
        wrapper.find('form').simulate('submit', {preventDefault(){}})

        // Llamar al setCategories
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));

        // El value del input vuelva a estar vacío
        expect(wrapper.find('input').prop('value')).toBe('')
    })
    

})

