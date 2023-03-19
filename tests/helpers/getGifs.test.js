import { getGifs } from "../../src/helpers/getGifs"


describe('Pruebas en getGifs', () => {

    test('Debe devolver un array de GIFs', async() => {

        const gifs = await getGifs('React');
        
        expect ( gifs.length ).toBeGreaterThan(0);
        expect ( gifs[0] ).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String),
        });
    })

})