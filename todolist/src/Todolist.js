import React,{Component,Fragment} from 'react';
import './style.css';
import TodoItem from './TodoItem'
class Todolist extends Component{

    constructor(props){
        super(props);
        this.state = {
            inputValue:'',
            list:[]
        }
         this.handleBtnClick = this.handleBtnClick.bind(this);
         this.handleInputChange = this.handleInputChange.bind(this);
         this.handleItemDelete = this.handleItemDelete.bind(this);
    }

    handleInputChange(e){
      const value = e.target.value;
        this.setState({
            inputValue:value
        })
    }

    handleBtnClick(){
      
        this.setState((prevState)=>({
            list:[...prevState.list,prevState.inputValue],
            inputValue:''
        }))
    }

    handleItemDelete(index){
        //immutable
        //state不允许做任何的改变
        const list = [...this.state.list];
        list.splice(index,1);
        this.setState(()=>({
          list
        }))
       
    }

    getListItem(){
      return this.state.list.map((item,index)=>{
          return(
            <TodoItem index={index} item={item} deleteItem = {this.handleItemDelete}/>
          )
      });
    }
    render(){
        return (
            <Fragment>
                <div>
                    {/*这是一个注释*/}
                    <label htmlFor="insertArea">输入内容</label>
                    <input 
                        id = 'insertArea'
                        className="input"
                        value={this.state.inputValue}
                        onChange={this.handleInputChange}
                        />
                    <button onClick={this.handleBtnClick}>提交</button>
                </div>
                <ul>
                    {this.getListItem()}
                </ul>
            </Fragment>
            
        )
    }
}

export default Todolist
