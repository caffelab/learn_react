import {CHANGE_INPUT_VALUE,ADD_ITEM,DELETE_ITEM,INIT_ACTION_TYPE,GET_INIT_LIST} from '../ActionType';
//import axios from 'axios';

export const getInputChangeAction = (value)=>({
    type:CHANGE_INPUT_VALUE,
    value
});

export const getAddItemAction = (value)=>({
    type:ADD_ITEM,
    value
});

export const getDeleteItemAction = (index)=>({
    type:DELETE_ITEM,
    index
});

export const initListAction = (data)=>({
    type:INIT_ACTION_TYPE,
    data
});

/* export const getTodoList = ()=>{
    return (dispatch)=>{
        axios.get('http://127.0.0.7/user/api').then((res)=>{
            const data = res.data;
            const action = initListAction(data);
            dispatch(action);
            //const action = initListAction(data);
            //store.dispatch(action);
    });
    }
} */

export const getInitList = ()=>({
    type:GET_INIT_LIST
})