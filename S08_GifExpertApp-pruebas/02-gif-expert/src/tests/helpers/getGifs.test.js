//91 
import { getGifs } from '../../helpers/getGifs';

describe('Pruebas en getGifs />', ()=>{
  
    test('debe traer 10 elementos', async () =>{
      const gifs = await getGifs('One Punch');
      expect(gifs.length).toBe(5);
    })

    test('en caso de no enviarse categoría, el arreglo debe ser 0', async () =>{
      const gifs = await getGifs('');
      expect(gifs.length).toBe(0);
    })
})
