import { render, screen } from "@testing-library/react"
import { GifApp } from "../src/GifApp"


describe('Pruebas en GifApp', () => {
    /*

    */
    test('Debe de hacer match con el snapshot', () => {

        const { container } = render( <GifApp /> );

        expect ( container ).toMatchSnapshot();        

    })
})