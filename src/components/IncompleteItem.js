import React, { Component } from 'react'

export class IncompleteItem extends Component {
    state ={
        chkbox:false
    }

    deleteItemHandler =(event)=>{
        var item = event.target.parentElement.parentElement.childNodes[1].innerText
        // console.log(item)
        this.props.toDeleteItem(item)
    }
    moveToCompleteHandler =(event)=>{
        event.preventDefault();
        this.setState({
            chkbox:false
        })
        var item = event.target.parentElement.childNodes[1].innerText
        // alert(item)
        this.props.toMoveItem(item)
    }
    editItemHandler =(event)=>{
        var item = event.target.parentElement.parentElement.childNodes[1].innerText
        this.props.toEditItem(item)
    }
  render() {
    return (
      <div className='incompleteItem'>
        <input type='checkbox' defaultChecked={false} onClick={this.moveToCompleteHandler}/>
        <div className='item'>{this.props.itemName}</div>
        <div className='btn'>
            <button onClick={this.editItemHandler}>Edit</button>
            <button onClick={this.deleteItemHandler}>Delete</button>
        </div>
      </div>
    )
  }
}

export default IncompleteItem