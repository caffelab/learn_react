import {takeEvery,put} from 'redux-saga/effects'
import {GET_INIT_LIST} from '../ActionType';
import { initListAction } from './ActionCreators';
import axios from 'axios';

function* getInitList(){
    try{
    const res = yield axios.get('http://127.0.0.7/user/api');
    const action = initListAction(res.data);
    yield put(action);
    }catch(e){
        console.log('找不到网址');
    }
}

function *sagas(){
    yield takeEvery(GET_INIT_LIST,getInitList);
}
export default sagas;