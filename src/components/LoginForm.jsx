import React, {useState} from "react"
import Button from 'react-bootstrap/Button';

function LoginForm ({Login, error}) {

    const [details, setDetails] = useState({name:"", email:"", password:""});

    const submitHandler = e => {
        e.preventDefault();
        
        //Login() function that we pass as a prop, pass through the details
        Login(details);
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="form-inner">
                <h2>Login</h2>
                {/*Error!*/}
               
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" onChange={e => setDetails({...details, email:e.target.value})} value={details.email}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" onChange={e => setDetails({...details, password:e.target.value})} value={details.password} />
                </div>
                <input type="submit" value="LOGIN"  />
               
               
                <Button variant="info" size="sm" className=" bottomButton" href="https://www.youtube.com">Librarian</Button>{''}
                <Button variant="info" size="sm" className=" bottomButton" href="https://www.youtube.com">New User</Button>{''}

            </div>
        </form>
    )
}

export default LoginForm