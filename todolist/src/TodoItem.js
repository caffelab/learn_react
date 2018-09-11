import React,{Component,Fragment} from 'react';
class TodoItem extends Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.props.deleteItem(this.props.index);
    }
    render(){
        return(
            <Fragment>
                <li key={this.props.index} onClick={this.handleClick} deleteItem={this.props.deleteItem}>{this.props.item}</li>
            </Fragment>
        );
    }
}
export default TodoItem;;