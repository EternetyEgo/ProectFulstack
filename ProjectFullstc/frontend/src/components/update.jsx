import axios from 'axios';
import React, { useState } from 'react'
import { api } from '../api/api';
import { useParams } from 'react-router-dom';

export default function Update() {
  const [value, setValue] = useState({
    name: "",
    lastName: "",
    age: "",
    job: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [idData, setIdData] = useState([]);
  const { id } = useParams()


  const handleUpdate = () => {
    axios.post(`${api}api/new-register/update-data`, {
      "name": `${value.name}`,
      "lastName": `${value.lastName}`,
      "age": `${value.lastName}`,
      "job": `${value.job}`,
      "password": `${value.password}`,
    })
      .then((res) => {
        navigate('/login')
      })
      .catch((err) => {
        console.log(err);
      });
  }

    axios.get(`${api}api/new-register/:${id}`)
      .then((res) => {
        setIdData(res.data)
        console.log(res.data);
        
      })


  return (
    <div className="form">
      <h2>Malumotni yangilash</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}

      {idData.map((item, i) => (
        <div className="group">
          <input
            type="text"
            className="input"
            placeholder="Name"
            onChange={(e) => setValue({ ...value, name: e.target.value })}
            value={item.name}
          />
          <input
            type="text"
            className="input"
            placeholder="LastName"
            onChange={(e) => setValue({ ...value, lastName: e.target.value })}
            value={item.lastName}
          />
          <input
            type="text"
            className="input"
            placeholder="Age"
            onChange={(e) => setValue({ ...value, age: e.target.value })}
            value={item.age}
          />
          <input
            type="text"
            className="input"
            placeholder="Job"
            onChange={(e) => setValue({ ...value, job: e.target.value })}
            value={item.job}
          />
          <input
            type="text"
            className="input"
            placeholder="Password"
            onChange={(e) => setValue({ ...value, password: e.target.value })}
            value={item.password}
          />
          <button onClick={handleUpdate} className="login">Submit</button>
        </div>
      ))}
    </div>
  )
}
