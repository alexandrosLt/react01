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
            listOfContacts : [],
            isLoading : false
        }
        this.handleClick2 = this.handleClick2.bind(this)
    }
   
    handleClick2(e){
        this.setState({isLoading : true})
       //allazw to current contact kai fernw ta antistoixa mnmata
        console.log('clicked on Contact')
        let fullnameFromClickedDiv = e.target.innerText;
        
       
        this.state.listOfContacts.map((e)=> console.log(e.lastName + e.firstName))
        let filteredList = this.state.listOfContacts.filter((element)=>element.firstName+element.lastName ===fullnameFromClickedDiv);
       
        let u = filteredList[0];
        
        this.setState({currentContact : u});
        console.log('o u einai ',u)

         //second ajax call to fill the list of messages
         let tok = localStorage.getItem("token");
         console.log('current contact gia to call',this.state.currentContact)
         console.log('current contactid gia to call',this.state.currentContact.id)
         window.$.ajax({
              url: 'http://localhost:8080/api/messages/get_messages_between',
              dataType: 'json',                       
              type: 'GET' ,
              data :{
                 token : tok,
                 receiverId : this.state.currentContact.id
              }
      
     
          }).then(json => {   
                     let minima = {text:"start a conversation" }
                     if(json===undefined){this.setState({listOfmessages : [minima]})}
                     else{ this.setState({listOfmessages : json,
                        isLoading :false
         })}
                     console.log('to json sto call tou clic',json)
                    
                     console.log('thisstatelistofmsges sto messenger',this.state.listOfmessages)
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
                console.log("Fetched users");
                console.log(json);
                
                this.setState({listOfContacts : json ,
                              currentContact : json[0] ,
                              isLoading : false})
                console.log(this.state.listOfContacts)
               
                
            });
           
            

        
    }
    
    render(){
        
        
        return(
            
            <div className = "container-fluid row " >
              
                  <Contacts lista = {this.state.listOfContacts} funk = {this.handleClick2}/>
                  <Chat  user = {this.state.currentContact} messagesForChat = {this.state.listOfmessages}/>
                  <Profil user = {this.state.currentContact}/>
            </div>
            
        )
    }
    
}
export default Messenger ;