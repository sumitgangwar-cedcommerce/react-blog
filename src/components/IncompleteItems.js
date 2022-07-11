import React, { Component } from 'react'
import IncompleteItem from './IncompleteItem'

export class IncompleteItems extends Component {

    toDelte = (val)=>{
       this.props.deleteIncompleteItem(val)
    }
    toMove = (val)=>{
        // alert(val)
        this.props.moveToCompleted(val)
    }
    toEdit =(val)=>{
        this.props.moveIncompleteItem(val)
    }
  render() {
    return (
      <div>
        <h1>Incomplete</h1>
        <hr />
        {
            this.props.toIncomplete.map((item)=> <IncompleteItem itemName={item}
            toDeleteItem={this.toDelte}
            toMoveItem={this.toMove}
            toEditItem={this.toEdit}
            tic={this.props.tick}/>)
        }
      </div>
    )
  }
}

export default IncompleteItems