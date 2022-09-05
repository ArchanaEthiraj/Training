import React, { useState } from "react";

function Login() {
  const [userName, setName] = useState("");
  const [nameerr, setNameError] = useState("");
  const [passerr, setPassError] = useState("");
  const [password, setPassword] = useState("");
  const [submit, setSubmit] = useState(false);
  // var mailformat = "/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/";

  const handleSubmit = () => {
    if (userName === "") {
      setNameError("Name should be mandatory");
    }else{
      setNameError("")
    }

    if (password === "") {
      setPassError("Password is mandatory");
    }else{
      setPassError("")
    }
    if(userName && password){
      setSubmit(true)
    }
    let late ={
      username : userName,
     password: password
    }
    fetch('http://54.174.247.198:9000/api/login', { 

    method: 'POST', 
    headers: {   'Content-Type': 'application/json'  }, 
    body: JSON.stringify(late)


  }).then(response => response.json())
  };

  return (
    <div>
      {!submit && (
        <div>
          <div>Register</div>
          <label>Name</label>
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            name="username"

          ></input>
          {nameerr === "" ? null : (
            <span
              style={{
                fontWeight: "bold",
                color: "red",
              }}
            >
              {nameerr}
            </span>
          )}
          <br />
          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
         {passerr === "" ? null:(
          <span style={{fontWeight:"bold", color:"red"}}>{passerr}</span>
         )}
          <br />
          <button onClick={handleSubmit}>Submit</button>
        </div>
      )}
      {submit && (
        <div>
          <div>Welcome:{userName}</div>
        </div>
      )}
    </div>
  );
}

export default Login;
