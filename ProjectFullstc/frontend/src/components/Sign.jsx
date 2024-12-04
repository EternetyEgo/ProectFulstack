import React, { useEffect, useState } from "react";
import axios from "axios";
import { api } from "../api/api";
import { useNavigate } from "react-router-dom";

// Kirsih 
export default function Login() {
  const [value, setValue] = useState({
    name: "",
    lastName: "",
    age: "",
    job: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate('')

  const handlePost = async () => {
    axios.post(`${api}api/new-register/create`, {
        "name": `${value.name}`,
        "lastName": `${value.lastName}`,
        "age": `${value.lastName}`,
        "job": `${value.job}`,
        "password": `${value.password}`,
      })
      .then((res) => {
        navigate('/login')
        localStorage.setItem('name', value.name)
        localStorage.setItem('password', value.password)

      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="form">
      <h2>Ro'yhatdan O'tish</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}

      <div className="group">
        <input
          type="text"
          className="input"
          placeholder="Name"
          onChange={(e) => setValue({ ...value, name: e.target.value })}
          value={value.name}
        />
        <input
          type="text"
          className="input"
          placeholder="LastName"
          onChange={(e) => setValue({ ...value, lastName: e.target.value })}
          value={value.lastName}
        />
        <input
          type="text"
          className="input"
          placeholder="Age"
          onChange={(e) => setValue({ ...value, age: e.target.value })}
          value={value.age}
        />
        <input
          type="text"
          className="input"
          placeholder="Job"
          onChange={(e) => setValue({ ...value, job: e.target.value })}
          value={value.job}
        />
        <input
          type="text"
          className="input"
          placeholder="Password"
          onChange={(e) => setValue({ ...value, password: e.target.value })}
          value={value.password}
        />
        <button onClick={handlePost} className="login">Submit</button>
      </div>
    </div>
  )
}
