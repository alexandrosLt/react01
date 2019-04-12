import React from 'react'
import SingleMessage from './SingleMessage'
import messagesData from './messagesData'


let box2 = {
  padding: "0px"
}

let box = {
    boxShadow :" 10px 10px 5px grey",
    boxSizing: "borderBox",
    position: "relative",
    width: "100%",
    border: "1px solid rgba(0,0,0, .3)",
     
    padding: 20,
    paddingBottom: "70px",
    maxHeight: "calc(100vh - 46px)",
    minHeight : "calc(100vh - 46px)",
    overflowY: "scroll",
    
    
}
let searchbox = {
  display: "inline-block",
  boxSizing: "borderBox",
  position: "absolute",
  bottom: 0,
  left: 0,
  width: "100%",
  height: "50px",
  border: "1px solid rgba(0,0,0, .3)",
  padding: "5px 10px",
  backgroundColor : "lightgrey"
 

}


class Chat extends React.Component{
    constructor(props){
        super(props)
        this.state ={
          messages : [],

        }
       this.handleClick = this.handleClick.bind(this)
    }
   
     
    
     //insert message from enter 
    handleClick(e){
       if(e.key==='Enter'){
        let inputValue = document.getElementById("inp").value


        window.$.ajax({
          url: 'http://localhost:8080/api/messages/send_msg',
          dataType: 'json',                       
          type: 'POST' ,
          data :{
             senderId : localStorage.getItem("id"),
             receiverId : this.props.user.id,
             text : inputValue
          }
  
 
      }).then(json => {   
                 console.log('to json sto call tou clic',json)
                 this.setState({listOfmessages : json,
                                isLoading :false
                 })
                 console.log('thisstatelistofmsges sto messenger',this.state.listOfmessages)
       });
         
        
        let prevMessages = this.state.messages
         prevMessages.push({id :4 , text : inputValue,sender : "admin"})
 
        console.log("prevmessages : ",prevMessages,"input value :",inputValue)
 
        this.setState({
          messages : prevMessages
        })
        document.getElementById("inp").value = ""
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
      
      
    
    let listOfMsges = this.props.messagesForChat.map((e)=> <SingleMessage  key = {e.id} data = {e}/>)
    
    console.log('this.props.messagesforchat',this.props.messagesForChat)
  
        


    
    
     
     
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
                     onKeyPress = {this.handleClick}
               />
             
                                
                
               </div>
            

  
        </div>
    )
  }
    
}
export default Chat 
