import React, { Component } from 'react'
import CompletedItem from './CompletedItem'

export class CompletedItems extends Component {
    toDelete = (val)=>{
        this.props.deleteCompletedItem(val)
    }
    toMove = (val)=>{
        this.props.moveToIncomplete(val)
    }
    toEdit =(val)=>{
        this.props.moveCompletedItem(val)
    }
  render() {
    return (
      <div>
        <h1>Completed</h1>
        <hr />
        {
            this.props.toCompleted.map((item)=> <CompletedItem itemName={item}
            toDeleteItem={this.toDelete}
            toMoveItem={this.toMove}
            toEditItem={this.toEdit}/>)
        }
      </div>
    )
  }
}

export default CompletedItems