import React from 'react';
import './contact.css'
class Contact extends React.Component{
    sendReq=()=>{
var name=document.getElementsByClassName("name")[0].value;
var msg=document.getElementsByTagName("textarea")[0].value;
if(msg.length===0 || name.length===0){
    alert("you must fill both the feilds");
}
else{
    msg="feedback from "+name+":\n"+msg;
    var xhttp=new XMLHttpRequest();
    xhttp.open("GET",encodeURI("https://api.telegram.org/bot1615595580:AAEoUHfmuuMukkWfRib3zTa7OVCGMYOtmk8/sendMessage?chat_id=-1001262147694&text="+msg),true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send();
  document.getElementsByClassName("name")[0].value="";
document.getElementsByTagName("textarea")[0].value="";
alert("thank you for your feedback !");
}
    }
    fun=()=>{
        
    }
    render(){
        return(
            <section>
            <code className="clr">Contact US</code>
            <code className="clr">Want to leave a feedback or want a book which you can't find?
                feel free to contact us
            </code>
            <textarea placeholder="Enter your message" onChange={this.fun}></textarea>
            
            <input type="text" className="name" placeholder="Full Name"  onChange={this.fun}/>
            
            <button className="send" onClick={this.sendReq}>send</button>
            </section>

        )
    }
}
export default Contact;
