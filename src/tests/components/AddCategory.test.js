import React from 'react';
import { shallow } from "enzyme"
import { AddCategory } from "../../components/AddCategory"

describe('pruebas en el <AddCategory />', () => {

    const setCategories = ()=>{};
    const wrapper = shallow(<AddCategory setCategories={ setCategories }/>);

    test('el componente se renderiza correctamente', () => {

        expect( wrapper).toMatchSnapshot();

    });

    test('debe cambiar la caja de texto', () => {

        const input = wrapper.find('input');
        const value = 'Hola mundo';

        input.simulate('change', { target: { value } });

        expect( wrapper.find('p').text().trim()).toBe( value )
    })
})