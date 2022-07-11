import React, { Component } from 'react'
import AddItem from './AddItem'
import CompletedItems from './CompletedItems'
import IncompleteItems from './IncompleteItems'

export class Todo extends Component {

    state ={
        inputArray:['go shop','play'],
        completedItemsArray:['see the doctor'],
        chkbox:true,
        inp:'',
        btnname:'Add',
        incompleteLength:1,
        indexOfIncomplete:0,
        status:'incomplete'
    }
    creatingArray = (val)=>{
        if(this.state.status==='incomplete')
        if(this.state.incompleteLength===1){
        var arr = [...this.state.inputArray,val]
        var arr1 = [...this.state.completedItemsArray]
        }
        else {
            arr1 = [...this.state.completedItemsArray]
            arr =[...this.state.inputArray]
            var index = this.state.indexOfIncomplete
            arr.splice(index,0,val)
        }
        if(this.state.status==='completed'){
            arr = [...this.state.inputArray]
            arr1 = [...this.state.completedItemsArray]
            index = this.state.indexOfIncomplete
            arr1.splice(index,0,val)
        }
        this.setState({
            inputArray:arr,
            inp:'',
            btnname:'Add',
            incompleteLength:1,
            completedItemsArray:arr1
        })
    }
    deleting = (val)=>{
        var arr = [...this.state.inputArray]
        arr = arr.filter((item)=>{
            return item !== val
        })
        this.setState({
            inputArray:arr
        })
    }
    deletingCompleted = (val)=>{
        var arr1 = [...this.state.completedItemsArray]
        arr1 = arr1.filter((item)=>{
            return item != val
        })
        this.setState({
            completedItemsArray:arr1
        })
    }
    moving = (val)=>{
        this.deleting(val)
        var arr1 = [...this.state.completedItemsArray,val]
        this.setState({
            completedItemsArray:arr1,
            chkbox:false
        })
    }
    movingFromCompleted =(val)=>{
        this.deletingCompleted(val)
        var arr = [...this.state.inputArray,val]
        this.setState({
            inputArray:arr,
            chkbox:false
        })
    }
    toInput = (val)=>{
        this.deleting(val)
        var arr = [...this.state.inputArray]
        var index = arr.indexOf(val)
        this.setState({
            inp:val,
            btnname:'Update',
            indexOfIncomplete:index,
            incompleteLength:0,
            status:'incomplete'
        })
    }
    toInput1 =(val)=>{
        this.deletingCompleted(val)
        var arr = [...this.state.completedItemsArray]
        var index = arr.indexOf(val)
        this.setState({
            inp:val,
            btnname:'Update',
            indexOfIncomplete:index,
            status:'completed'
        })
    }
    input = (val)=>{
        this.setState({
            inp:val
        })
    }
  render() {
    return (
      <div className='todo'>
        <h1>TODO</h1>
        <hr />
        <AddItem addToArray = {this.creatingArray}
        inputItemName={this.input}
        inpItem={this.state.inp}
        btnName={this.state.btnname}/>
        <IncompleteItems tick={this.state.chkbox}
        toIncomplete = {this.state.inputArray}
        deleteIncompleteItem = {this.deleting}
        moveToCompleted = {this.moving}
        moveIncompleteItem ={this.toInput}/>
        <CompletedItems toCompleted = {this.state.completedItemsArray}
        deleteCompletedItem={this.deletingCompleted}
        moveToIncomplete={this.movingFromCompleted}
        moveCompletedItem={this.toInput1}/>
      </div>
    )
  }
}

export default Todo