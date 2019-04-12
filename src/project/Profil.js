import React from 'react' 
import maria from '../onotherOne/images/maria.jpg'
import sotos  from '../onotherOne/images/sotos.jpg'
import alex from '../onotherOne/images/alex.jpg'
import xristina from '../onotherOne/images/xristina.jpg'
import nikos from '../onotherOne/images/nikos.jpg'
import maik from '../onotherOne/images/maik.jpg'
import userlist from './userlist'

class Profil extends React.Component{
    constructor(props){
        super(props)
        this.state = {
           user :{},
           isLoading :false

        }
       
      
    }
    componentDidMount(){
        console.log('compdid mount profil')
      
        
        
    }
   
  
    
    render(){
       
        console.log('stin render profil o user', this.props.user)
        let x = [null,maik,nikos,alex,sotos,xristina,maria]
        
        return(
            <div className="card" style={{width: "18rem",padding : 12 ,margin :10, boxShadow :" 10px 10px 5px grey"}}>
                 <img src={x[this.props.user.id]} className="card-img-top" alt="..."  style = {{height :200 , width : 250  }}/>  
               <div className="card-body">
                   <h3 className="card-title">{this.props.user.lastName}{this.props.user.firstName}</h3>
                     Languages : <ul>{userlist[1].programmingLanguages.map((e)=><li>{e}</li>)}</ul>
                     Skills :  <ul>{userlist[1].skills.map((e)=><li>{e}</li>)}</ul>
              
               </div>
            </div>
        )
    }
    
}
export default Profil ;