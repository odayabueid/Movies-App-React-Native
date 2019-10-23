const initialState ={
    name:"Oday Ismail Sami Abueid",
    counter:1
}

const reducer =(state = initialState , action)=>{
    if(action.type === 'INCREM'){
        return{
            ...state,
            counter:state.counter+1
        }
    }

    return state
}

export default reducer