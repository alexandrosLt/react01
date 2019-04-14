import React from 'react'



class SingleMessage extends React.Component{
    constructor(props){
        super(props)
       
    }
    render(){
        
        let singleMessageObject = this.props.data
        
        
        return(
           
            <div  style ={ { float :  singleMessageObject.senderId == localStorage.getItem("id") ? "right" :"left" ,
                           backgroundColor : singleMessageObject.senderId==localStorage.getItem("id") ? "rgb(255, 0, 76)" :"lightgrey",
                           color: singleMessageObject.senderId==localStorage.getItem("id") ? "white" :"black",
                           display: singleMessageObject.text ==="" ? "none" : "inline-block",
                           fontFamily : "Mark Script , cursive",
                           
                           padding: "5px 20px",
                           wordWrap: "break-word",
                           margin: "5px 0",
                           borderRadius: "30px",
                           clear: "both",
                           maxWidth: "250px"

            }}>
                    
                    {singleMessageObject.text}
                    
            </div>
               
        )
    }
}
export  default SingleMessage 