import React from 'react'
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('pruebas en  <GirdGifItem/>>', ()=>{


    const title = 'Titulo';
    const url = 'https://localhost/algo.jpg'
    const wrapper = shallow( <GifGridItem title={ title } url={ url }/>)

    test('Debe mostrar el componente correctamente', () => { 

        expect( wrapper).toMatchSnapshot(); 

     });

    test('debe tener un parrafo con el titulo', ()=>{

        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe( title )

    })
    
    test('debe tener la imagen igual al url y alt de los props', ()=>{

        const img = wrapper.find('img');
        //console.log(img.props())
        expect( img.prop('src')).toBe(url)
        expect( img.prop('alt')).toBe(title)
        
    })
});