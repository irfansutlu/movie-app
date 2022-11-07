import React from "react";
import { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import auth from "../Auth/firebase";
import { UserContext } from "../context/AuthContext";
import { useContext } from "react";



function Login() {
  const [register, setRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, setUser } = useContext(UserContext);
  const provider = new GoogleAuthProvider();

  const singIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const userData = userCredential.user;
        setUser(userData)
        console.log(user)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const createAcc = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const userData = userCredential.user;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  
const googleAcc = ()=>{
  signInWithPopup(auth, provider)
  .then((result) => {
    // The signed-in user info.
    const userGoogle = result.user;
    setUser(userGoogle)
  })
  .catch((error) => {
    // Handle Errors here.
    console.log(error);
  });
}


  const handleSubmit = (e)=>{
    e.preventDefault()
    if(register){
      createAcc()
    }else{
      singIn()
    }
  }

  return (
    <div className="login">
      <div className="login-div">
        <form onSubmit={(e)=>handleSubmit(e)}>
          <h2>Login</h2>
          <label htmlFor="email">Email</label>
          <br />
          <input
            type="email"
            id="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input
            type="password"
            id="password"
            required
            onChange={(e) => setPassword(e.target.value)}
            minLength="6"
          />
          <br />
          <button type="submit">{register ? "Register" : "Login"}</button>
          <button onClick={() => setRegister(!register)}>
            {register ? "I have account" : "Create new account"}
          </button>
        </form>
        <button onClick={()=> googleAcc()}>Continue with Google</button>
      </div>
    </div>
  );
}

export default Login;
