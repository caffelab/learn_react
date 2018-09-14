import React,{Component} from 'react';
import store from './store';
import 'antd/dist/antd.css';

import {getAddItemAction,getInputChangeAction,getDeleteItemAction,getInitList} from './store/ActionCreators';
import TodoListUI from './TodoListUI';

class TodoList extends Component{
    constructor(props){
        super(props);
        this.state = store.getState();
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        store.subscribe(this.handleStoreChange);
    }

    handleBtnClick(e){
        const action = getAddItemAction(this.state.inputValue);
        store.dispatch(action);
    }

    handleStoreChange(){
        this.setState(store.getState());
    }

    handleInputChange(e){
        const action = getInputChangeAction(e.target.value);
        store.dispatch(action);
    }

    handleDelete(index){
        const action=getDeleteItemAction(index);
        store.dispatch(action);
    }

    componentDidMount(){
        const action = getInitList();
        store.dispatch(action);
       //const action = getTodoList();
        //store.dispatch(action);
       // console.log(action);
        /* axios.get('http://127.0.0.7/user/api').then((res)=>{
            const data = res.data;
            const action = initListAction(data);
            store.dispatch(action);
        }) */
    }

    render(){
        return <TodoListUI
            inputValue = {this.state.inputValue}
            handleInputChange = {this.handleInputChange}
            handleBtnClick = {this.handleBtnClick}
            list = {this.state.list}
            handleDelete = {this.handleDelete}
        />;
    }
}

export default TodoList;