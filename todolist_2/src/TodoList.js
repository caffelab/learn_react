import React,{Component,Fragment} from 'react';
import store from './store';
import 'antd/dist/antd.css';
import {Input,Button,List} from 'antd';

class TodoList extends Component{
    constructor(props){
        super(props);
        this.state = store.getState();
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        store.subscribe(this.handleStoreChange);
    }

    handleBtnClick(e){
        const action = {
            type:'add_list',
            value:this.state.inputValue
        }
        store.dispatch(action);
    }

    handleStoreChange(){
        this.setState(store.getState());
    }

    handleInputChange(e){
        const action = {
            type:'change_input_value',
            value:e.target.value
        }
        store.dispatch(action);
    }
    render(){
        return(
            <Fragment>
                <div style={{marginTop:'10px'}}>
                    <Input placeholder="Todo info" style={{width:300}} value={this.state.inputValue} onChange={this.handleInputChange.bind(this)}/>
                    <Button type="primary" onClick={this.handleBtnClick}>添加</Button>
                </div>
                <List
                    style={{marginTop:"10px",width:'300px'}}
                    bordered
                    dataSource={this.state.list}
                    renderItem={item => (<List.Item>{item}</List.Item>)}
                    />
            </Fragment>
        );
    }
}

export default TodoList;