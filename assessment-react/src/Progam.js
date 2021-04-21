//Insert, Update and Delete using Set State and Find DOM Node
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

let arr=[],inp_val,upd_pos,upd_val="",del_pos;
class Program extends React.Component
{
    constructor()
    {
        super();
        this.state={
            values:[]    
        }
        this.AcceptValue=this.AcceptValue.bind(this);
        this.ButtonInsertHandler=this.ButtonInsertHandler.bind(this);
        this.ClearValue=this.ClearValue.bind(this);
        this.UpdatePosition=this.UpdatePosition.bind(this);
        this.UpdateValue=this.UpdateValue.bind(this);
        this.ButtonUpdateHandler=this.ButtonUpdateHandler.bind(this);
        this.DeletePosition=this.DeletePosition.bind(this);
        this.ButtonDeleteHandler=this.ButtonDeleteHandler.bind(this);
    }
    AcceptValue(e)
    {
        inp_val=e.target.value;
    }
    ButtonInsertHandler()
    {
        arr.push(inp_val+" ");
        this.setState({values:arr});
    }
    ClearValue()
    {
        ReactDOM.findDOMNode(this.refs.ref1).value="";
        ReactDOM.findDOMNode(this.refs.ref1).focus();
    }
    UpdatePosition(e)
    {
        upd_pos=parseInt(e.target.value);
    }
    UpdateValue(e)
    {
        upd_val=e.target.value+" ";
    }
    ButtonUpdateHandler()
    {
        arr=this.state.values.slice();
        arr[upd_pos]=upd_val;
        this.setState({values:arr});

        ReactDOM.findDOMNode(this.refs.ref2).value="";
        ReactDOM.findDOMNode(this.refs.ref3).value="";
    }
    DeletePosition(e)
    {
        del_pos=parseInt(e.target.value);
    }
    ButtonDeleteHandler()
    {
        if(del_pos>=0)
        {
        arr=this.state.values.slice();
        arr.splice(del_pos,1);
        this.setState({values:arr});
        del_pos=-1;
        }
        ReactDOM.findDOMNode(this.refs.ref4).value="";
    }
    render()
    {
        return(<div>
        <b><u>Insert</u></b><br/>
        <b>Enter Value: </b><input type="text" ref="ref1" onBlur={this.AcceptValue}/>&nbsp;&nbsp;
        <button onClick={this.ButtonInsertHandler}>Insert</button>&nbsp;&nbsp;
        <button onClick={this.ClearValue}>Clear</button><br/><br/>  
        <b><u>Update</u></b><br/>
        <b>Enter Position: </b><input type="text" ref="ref2" onBlur={this.UpdatePosition}/><br/><br/>
        <b>Enter Value: </b><input type="text" ref="ref3" onBlur={this.UpdateValue}/><br/><br/>
        <button onClick={this.ButtonUpdateHandler}>Update</button><br/><br/>
        <b><u>Delete</u></b><br/>
        <b>Enter Position: </b><input type="text" ref="ref4" onBlur={this.DeletePosition}/><br/><br/>
        <button onClick={this.ButtonDeleteHandler}>Delete</button><br/><br/>
        <b>{this.state.values}</b>
        </div>);
    }
}
export default Program