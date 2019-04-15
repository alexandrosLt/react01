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
    backgroundColor : "lightblue"
   
  
  }
  let box2 = {
    padding: "0px"
  }
 
  
export  {box, searchbox ,box2};