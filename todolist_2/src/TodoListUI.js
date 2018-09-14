import React,{Component,Fragment} from 'react';
import {Input,Button,List} from 'antd';

//无状态组件
const TodoListUI = (props)=>{
    return (
        <Fragment>
            <div style={{marginTop:'10px'}}>
                <Input placeholder="Todo info" style={{width:300}} value={props.inputValue} onChange={props.handleInputChange}/>
                <Button type="primary" onClick={props.handleBtnClick}>添加</Button>
            </div>
            <List
                style={{marginTop:"10px",width:'300px'}}
                bordered
                dataSource={props.list}
                renderItem={(item,index) => (<List.Item onClick={(index)=>{props.handleDelete(index)}}>{item}</List.Item>)}
                
                />
        </Fragment>
    );
}

/* class TodoListUI extends Component{
    render(){
        return (
            <Fragment>
                <div style={{marginTop:'10px'}}>
                    <Input placeholder="Todo info" style={{width:300}} value={this.props.inputValue} onChange={this.props.handleInputChange}/>
                    <Button type="primary" onClick={this.props.handleBtnClick}>添加</Button>
                </div>
                <List
                    style={{marginTop:"10px",width:'300px'}}
                    bordered
                    dataSource={this.props.list}
                    renderItem={(item,index) => (<List.Item onClick={(index)=>{this.props.handleDelete(index)}}>{item}</List.Item>)}
                    
                    />
            </Fragment>
        );
    }
} */

export default TodoListUI;