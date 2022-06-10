import { getGifs } from '../../helpers/getGifs'

describe('pruebas en helpers/getGifs.js', () => {

    test('debe traer 10 elementos', async() => {

        const gifs = await getGifs('Barcelona');
        expect(gifs.length).toBe(10);

    });

    test('debe arrojar un arreglo vacio', async() => {

        const gifs = await getGifs('');
        expect(gifs.length).toBe(0);

    })
});