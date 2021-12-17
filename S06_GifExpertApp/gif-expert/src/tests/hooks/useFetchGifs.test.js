// 99
import { useFetchGifs } from "../../hooks/useFetchGifs";
import {renderHook} from '@testing-library/react-hooks'


describe('Pruebas en el hook useFetchGifs', ()=>{
    test('debe retornar el estado inicial', async ()=>{
        const {result, waitForNextUpdate} = renderHook(()=> useFetchGifs('One Punch'));
        const {data, loading} = result.current;
        
        await waitForNextUpdate();

        expect(data).toEqual([]);
        expect(loading).toBe(true);
    })

    test('Debe retornar un array de imágenes y el loading en falso', async ()=>{
        const {result, waitForNextUpdate} = renderHook(()=> useFetchGifs('One Punch'));
        
        await waitForNextUpdate();
        const {data, loading} = result.current;
        

        expect(data.length).toBe(5);
        expect(loading).toBe(false);
    })
})
