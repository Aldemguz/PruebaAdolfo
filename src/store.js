import {createStore} from "redux";


const initialState = {
    'data':[
        {
            'tittle': "primer paso",
            'subtittle': "texto con subtitulo",
            'image':"https://images.performgroup.com/di/library/GOAL/f3/4/lionel-messi-barcelona-2019-20_16ks0znl58amk1kfrldq3l5sj3.jpg?t=1572064900&quality=60&w=1600",
            'content':"esto es un content"
        },
        {
            'tittle': "segundo paso",
            'subtittle': "segundo texto con subtitulo",
            'image':"https://assets.trome.pe/files/article_multimedia/uploads/2017/07/05/595d56b599d4a.jpeg"
        },
        {
            'tittle': "tercer paso",
            'subtittle': "tercer texto con subtitulo",
            'content': "este es otro content"
        }, 
        
    ],
    step: 0
    

}

const reducerWizard = ( state = initialState , action) => {
    console.log(action)
    if(action.type === "PASAR_SIGUIENTE"){ 
        return { 
            ...state,
            step: state.step+1
        }
    }
    if(action.type === "PASAR_ATRAS"){
        return {...state,
            step: state.step-1
        }
    }
    return state
}


export default createStore(reducerWizard,window.REDUX_DEVTOOLS_EXTENSION && window.REDUX_DEVTOOLS_EXTENSION())