import CounterApp from '../CounterApp';
import '@testing-library/jest-dom'
import React from 'react'
import { shallow } from "enzyme";
import { click } from '@testing-library/user-event/dist/click';

describe('Pruebas para el archivo <CounterApp/>', () => { 

    //Con beforeEach aseguramos que inicializamos la instrucción
    // del argumento antes de cada test.

    let wrapper = shallow(<CounterApp/>)

    beforeEach( () =>{
        wrapper = shallow(<CounterApp/>);
    });

    test('Debe de motrar <CounterApp/> correctamente', () => { 
        
        expect( wrapper ).toMatchSnapshot();

    });
    
    test('Debe retornar un 100', () => { 

        const wrapper = shallow(
            <CounterApp value={100}/>
        );

        const valorDado = wrapper.find('h2').text().trim();

        expect( valorDado ).toBe('100');

    });

    test('Debe de incrementar con el botón +1', () => { 
        
        //const wrapper = shallow(<CounterApp/>)

        wrapper.find('button').at(0).simulate('click');

        const counterText = wrapper.find('h2').text().trim();

        expect( counterText ).toBe('11');

    });

    test('Debe de decrementar el botón con -1', () => { 

        wrapper.find('button').at(2).simulate('click');

        const counterText = wrapper.find('h2').text().trim();

        expect( counterText ).toBe('9');

    });

    test('Debe colocar el valor por defecto con el botón reset', () => { 
        
        const wrapper = shallow(<CounterApp value={100}/>);

        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');
        const counterText = wrapper.find('h2').text().trim();

        expect( counterText ).toBe("100")

    });
});