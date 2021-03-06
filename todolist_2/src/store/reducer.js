import {CHANGE_INPUT_VALUE,ADD_ITEM,DELETE_ITEM, INIT_ACTION_TYPE} from '../ActionType'
const defaultState = {
    inputValue:'',
    list:[]
}
export default (state = defaultState,action)=>{
    if(action.type===CHANGE_INPUT_VALUE){
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }
    if(action.type===ADD_ITEM){
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
        return newState;
    }
    if(action.type===DELETE_ITEM){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index,1);
        return newState;
    }

    if(action.type === INIT_ACTION_TYPE){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list = action.data;
        console.log(action.data);
        return newState;
    }
    return state;
}