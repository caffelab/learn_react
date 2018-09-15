import React,{Fragment} from 'react';
import {connect} from 'react-redux';

const TodoList = (props)=>{
    
        const {inputValue,changeInputValue,list,handleClick,handleDelete} = props;
        return (
            <Fragment>
                <input value={inputValue} onChange={changeInputValue}/>
                <button onClick={handleClick}>提交</button>
                <ul>
                {
                list.map((item,index)=>{
                    return <li key={index} onClick={handleDelete}>{item}</li>
                    })
                }
                </ul>
            </Fragment>
        );
}
const mapStateToProps = (state)=>{
    return {
        inputValue:state.inputValue,
        list:state.list
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        changeInputValue(e){
            const action = {
                type:'type_input_value',
                value:e.target.value
            }
            dispatch(action);
        },
        handleClick(){
            const action = {
                type:'add_item'
            }
            dispatch(action);
        },
        handleDelete(index){
            const action={
                type:'delete_item',
                index
            }
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);