import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock( '../../src/hooks/useFetchGifs' ); //Hace un mock completo de ese path

describe('Pruebas en GifGrid', () => {

    test('Debe de mostrar el loading incialmente', () => {

        useFetchGifs.mockReturnValue( {
            images: [],
            isLoading: true,
        } );

        const category = 'SMITE';

        render( <GifGrid category = { category } /> );
        
        expect( screen.getByText( 'Cargando...' ) );
        expect( screen.getByText( category ) );

    });

    test('Debe de mostrar items cuando se cargan las imágenes useFetchGifs', () => {

        const category = 'SMITE';
        const gifs = [
            {
                id:'ABC',
                title:'SMITE',
                url:'https://localhost.smite.jpg'
            },
            {
                id:'DEF',
                title:'LoL',
                url:'https://localhost.smite.jpg'
            }
        ]

        useFetchGifs.mockReturnValue( {
            images: gifs,
            isLoading: true,
        } );

        render( <GifGrid category = { category } /> );   
        
        expect ( screen.getAllByRole( 'img' ).length ).toBe(2);

    });

})