import PrimeraApp from "../PrimeraApp";
import '@testing-library/jest-dom'
import React from 'react'
import { shallow } from "enzyme";

describe('Pruebas en <PrimeraApp/>', () => { 
    
    /*test('Debe mostrar el mensaje "Hola soy Samuel"', () => { 
        const saludo = 'Hola soy Samuel';
        
        const {getByText} = render( <PrimeraApp saludo={saludo}/>)
        
        expect( getByText(saludo) ).toBeInTheDocument();
    });*/

    test('Debe de motrar <PrimeraApp/> correctamente', () => { 
        const saludo = 'Hola soy Samuel'
        const wrapper = shallow( <PrimeraApp saludo={saludo} /> ) 

        expect( wrapper ).toMatchSnapshot();
    });

    test('Debe de mostrar el subtítulo enviado por props', () => { 
        
        const saludo = 'Hola soy Samuel';
        const subTitulo = 'Soy un subtítulo'

        const wrapper = shallow( 
            <PrimeraApp 
                saludo={saludo} 
                subtitulo={subTitulo}
            /> 
        ); 

        const textoParrafo = wrapper.find('p').text();
        console.log(textoParrafo)
        
        expect( textoParrafo ).toBe(subTitulo)

     })
});