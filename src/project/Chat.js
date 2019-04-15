import React from 'react'
import SingleMessage from './SingleMessage'
import {box ,searchbox,box2} from './styling'






class Chat extends React.Component{
    constructor(props){
        super(props)
        this.state ={
          messages : []
        }
    }
   
   
    componentDidMount(){
        var objDiv = document.getElementById("scrollText");
        objDiv.scrollTop = objDiv.scrollHeight;
       }

    componentDidUpdate(){
      

       var objDiv = document.getElementById("scrollText");
       objDiv.scrollTop = objDiv.scrollHeight;
    }
    
     render(){
        let listOfMsges = this.props.messagesForChat.map((e)=> <SingleMessage  key = {e.id} data = {e} />)
        return(
              <div className ="col-6"  style = {box2} >
                <div id = "scrollText" style ={box} >
                  {listOfMsges}
                </div >
                <div  >
                  <input style ={searchbox}
                        id ="inp"
                        placeholder="Type your message  " 
                        //style = {{width : "80%" , height :""}} 
                        onKeyPress = {this.props.funk2}/>
                </div>
              </div>
    )
  }
    
}
export default Chat 
