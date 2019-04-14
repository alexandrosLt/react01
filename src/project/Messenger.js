import React  from 'react'
import Chat from './Chat'
import Profil from './Profil'
import Contacts from './Contacts'
import userlist from './userlist'





class Messenger extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            listOfmessages : [],
            currentContact : {},
            currentContactId : null,
            listOfContacts : [],
            isLoading : false
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleClick2 = this.handleClick2.bind(this)
    }
    


    handleClick(e){
        if(e.key==='Enter'){
         let inputValue = document.getElementById("inp").value
 
 
         window.$.ajax({
           url: 'http://localhost:8080/api/messages/send_msg',
           dataType: 'json',                       
           type: 'POST' ,
           data :{
              senderId : localStorage.getItem("id"),
              receiverId : this.state.currentContact.id,
              text : inputValue
           }
   
  
       }).then(json => {   
                 
                  this.setState({listOfmessages : json,
                                 isLoading :false
                  })
                  
        });
          
         
         let prevMessages = this.state.listOfmessages
          prevMessages.push({id :3 , text : inputValue,senderId : localStorage.getItem("id")} )
  
        
  
         this.setState({
           messages : prevMessages
         })
         document.getElementById("inp").value = ""
        }
       
     }
   
    handleClick2(e){
        let fullnameFromClickedDiv = e.target.innerText;
        let userId = e.target.attributes[0].value
        let filteredList = this.state.listOfContacts.filter((element)=>element.firstName+element.lastName ===fullnameFromClickedDiv);
       
        let u = filteredList[0];
        this.setState({currentContact : u});
        console.log(this.state.currentContact)
         //second ajax call to fill the list of messages
         let tok = localStorage.getItem("token");
          window.$.ajax({
              url: 'http://localhost:8080/api/messages/get_messages_between',
              dataType: 'json',                       
              type: 'GET' ,
              data :{
                 token : tok,
                 receiverId : userId
              }
      
     
          }).then(json => {   
                     let minima = {text:"start a conversation" }
                     if(json===undefined){this.setState({listOfmessages : [minima]})}
                     else{ this.setState({listOfmessages : json,currentContactId :userId,
                        isLoading :false
         })}
       });


        
    }
    componentDidMount(){
        //First ajax call to fill the list of contacts
            this.setState({isLoading :true})
            window.$.ajax({
                url: 'http://localhost:8080/api/profile/developers',
                dataType: 'json',                       
                type: 'GET'         
                
            }).done( (json) => {
               
                this.setState({listOfContacts : json ,
                              currentContact : json[0] ,
                              isLoading : false})
            });
           
            

        
    }
    
    render(){
        
        
        return(
            
            <div className = "container-fluid row " >
              
                  <Contacts lista = {this.state.listOfContacts} funk = {this.handleClick2}/>
                  <Chat  user = {this.state.currentContact} messagesForChat = {this.state.listOfmessages} funk2 = {this.handleClick}/>
                  <Profil user = {this.state.currentContact}/>
            </div>
            
        )
    }
    
}
export default Messenger ;