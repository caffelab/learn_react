import {CHANGE_INPUT_VALUE,ADD_ITEM,DELETE_ITEM} from '../ActionType';
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
})