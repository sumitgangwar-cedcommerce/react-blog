import React, { Component } from 'react'

export class AddItem extends Component {

    // state = {
    //     inpvalue:''
    // }
    inputHandler =(event)=>{
        var inp = event.target.value
        // this.setState({
        //     inpvalue:inp
        // })
        this.props.inputItemName(inp)
    }
    addItemHandler = (event)=>{
        var inp = event.target.parentElement.childNodes[0].value
        this.props.addToArray(inp)
    }
  render() {
    return (
      <div className='addItem'>
        <input type='text' value={this.props.inpItem} onChange={this.inputHandler}/>
        <button onClick={this.addItemHandler}>{this.props.btnName}</button>
      </div>
    )
  }
}

export default AddItem