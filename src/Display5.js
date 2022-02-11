import React , {Component} from "react";
class Display extends Component{
     constructor(){
         super();
         this.state = {
             mail : "",
             pass : "",
             msg : "",
         };
     }
     onSubmitHandler = (event)=>{
         event.preventDefault();
        //   console.log(event.target.mail.value);
        //   console.log(event.target.pass.value);
          let {mail , pass} = event.target;
        //   console.log(mail , pass);
        //   console.log(event.target.name)
          if(!mail.value || !pass.value){
            //   alert("Enter Credentials");
              this.setState({msg : "Enter Credentials"})
          }
          else if(pass.value.length < 7){
              this.setState({msg : "Password must contain atlest 7 characters   "})
          }
          else{
              this.setState({mail : mail.value , pass : pass.value , msg : "Success" })
          }
     }
     render(){
         return(
             <>
              <h1>Sign Up form</h1>
              <h4>{this.state.msg}</h4>
              <form onSubmit={this.onSubmitHandler} className = "form form-striped">
                  <div>
                      <label htmlFor="email">Email</label>
                      <input  type="email" id="email" name="mail" defaultValue={this.state.mail}></input>
                  </div>
                  <div>
                      <label >password</label>
                      <input type="password" id="password" name="pass" defaultValue={this.state.pass}></input>
                  </div>
                  <button type="submit">Submit</button>
              </form>
             </>
         )
     }
}
export default Display;