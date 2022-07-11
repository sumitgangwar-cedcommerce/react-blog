import React, { Component } from 'react'

export class CompletedItem extends Component {
    deleteItemHandler =(event)=>{
        var item = event.target.parentElement.parentElement.childNodes[1].innerText
        // console.log(item)
        this.props.toDeleteItem(item)
    }
    moveToIncompleteHandler = (event)=>{
        event.preventDefault();
        var item = event.target.parentElement.childNodes[1].innerText
        this.props.toMoveItem(item)
    }
    editItemHandler = (event)=>{
        var item = event.target.parentElement.parentElement.childNodes[1].innerText
        this.props.toEditItem(item)
    }
  render() {
    return (
      <div className='incompleteItem'>
        <input type='checkbox' defaultChecked={true} onClick={this.moveToIncompleteHandler}/>
        <div className='item' style={{textDecorationLine: 'line-through'}}>{this.props.itemName}</div>
        <div className='btn'>
            <button onClick={this.editItemHandler}>Edit</button>
            <button onClick={this.deleteItemHandler}>Delete</button>
        </div>
      </div>
    )
  }
}

export default CompletedItem