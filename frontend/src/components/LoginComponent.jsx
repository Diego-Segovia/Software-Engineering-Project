import  React, {useState} from 'react';
import LoginForm from './LoginForm'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Login.css';

function LoginComponent() {

  const adminUser = {
    email: "adamwest252@gmail.com",
    password: "Newpassword12",
  }

  const [user, setUser] = useState({name:"", email:""});
  const [error, setError] = useState("");

  const Login = details => {
  
    console.log(details);

    if(details.email == adminUser.email && details.password == adminUser.password){
      alert("congrats you are log in");
      setUser({
        name: details.name,
        email:details.email
      })
    }else{
      alert("Sorry try again");
    }
  }

  const Logout = () => {
    alert("You have log out :(")
    console.log("Logout");
    setUser({
      name:"",
      email:""
    })
  }

// if user email does not equal nothing (?)then render a welcome screen
  return (
   
    <div className="LoginComponent">
      
 
      {(user.email != "") ? (
        <div className='welcome'> 
        <h2> Welcome , <span>{user.name}</span></h2>
        <button onClick={Logout}>Logout</button>
        </div>
      ): (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
}

export default LoginComponent;
