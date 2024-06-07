
import {FETCH_BUTTON_CLICKED} from './types'

export const fetchPosts = ()=>{
    return{
        type: FETCH_BUTTON_CLICKED,
        payload:[
            {
                userId: 1,
                id: 2,
                title: 'Test 01',
                body: 'jhaksdkjdhaldjalkdalkdklajdlk'
            },
            {
                userId: 1,
                id: 2,
                title: 'Test 02',
                body: 'jhaksdkjdffsdsslajdlk'
            }
        ]
    }
}