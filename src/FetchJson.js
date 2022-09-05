import React, { useEffect, useState } from "react";
import axios from "axios";

function FetchJson() {
  const [data, setData] = useState([]);
  const [order, setOrder] = useState("");

  useEffect(() => {
    // axios.get("https://gorest.co.in/public/v2/users")
    // .then(res => { 
    // setData(res.data)
    // })
    fetch("https://gorest.co.in/public/v2/users")
      .then((response) => response.json())
      .then((todo) => setData(todo));
  }, []);

  const handleSubmit = (e) => {
    // const content = { order };
    fetch("https://gorest.co.in/public/v2/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body:{name:e.data.data.name}
    }).then(() => {
      console.log("new title added");
    });
  };
  return (
    <div>
      <h4>FetchJson</h4>
      <form>
        <label>Name</label>
        <input
          type="text"
          name= "name"
          placeholder="Name"           
          onChange={(e) => setOrder(e.target.value)}
        />
        <button onClick={handleSubmit}>Add Name</button>
        {data.map((son) => (
          <div key={son.id}>{son.name}</div>
        ))}
      </form>
    </div>
  );
}

export default FetchJson;
