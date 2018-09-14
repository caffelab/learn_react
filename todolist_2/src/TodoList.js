import React,{Component,Fragment} from 'react';
import store from './store';
import 'antd/dist/antd.css';
import axios from 'axios';
import {getAddItemAction,getInputChangeAction,getDeleteItemAction} from './store/ActionCreators';
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
        axios.get().then(()=>{
            
        })
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