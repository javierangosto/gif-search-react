import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"


const category = 'SMITE';

describe('Pruebas en el hook useFetchGifs', () => {

    test('Debe devolver el estado inicial', () => {        

       const { result } = renderHook( () => useFetchGifs ( category ) );

       const { images, isLoading } = result.current;

       expect ( images.length ).toBe(0);
       expect ( isLoading ).toBeTruthy();

     })

     test('Dene devolver un array de imagenes y isLoading = false', async() => {

        const { result } = renderHook( () => useFetchGifs ( category ) );
        
        await waitFor( () => {
            expect ( result.current.images.length ).toBeGreaterThan(0);
        });

        expect ( result.current.isLoading ).toBeFalsy();

     })

})