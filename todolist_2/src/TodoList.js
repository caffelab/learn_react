import React,{Component,Fragment} from 'react';
import store from './store';
import 'antd/dist/antd.css';
import {Input,Button,List} from 'antd';

class TodoList extends Component{
    constructor(props){
        super(props);
        this.state = store.getState();
        this.handleStoreChange = this.handleStoreChange.bind(this);
        store.subscribe(this.handleStoreChange);
    }

    handleStoreChange(){
        this.setState(store.getStore());
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
                    <Button type="primary">添加</Button>
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