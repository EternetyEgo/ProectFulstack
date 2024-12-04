import React, { useEffect, useState } from "react";
import axios from "axios";
import { api } from "../api/api";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

export default function Login() {
  const [value, setValue] = useState({
    name: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [data, setData] = useState([]);
  const navigate = useNavigate(); // Use navigate for redirection

  const notify = () => toast("Siz websitedan ro'yxatdan o'tdingiz");

  const handlePost = async () => {
    axios.post(`${api}api/new-register/create`, {
      name: value.name,
      password: value.password,
    })
      .then((res) => {
        notify();
        setTimeout(() => {
          navigate("/");
        }, 3000);
      })
      .catch((err) => {
        navigate("/sign")
      });
  };


  return (
    <div className="form">
      <h2>Ro'yxatdan O'tish</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}

      <div className="group">
        <input
          type="text"
          className="input"
          placeholder="Name"
          onChange={(e) => setValue({ ...value, name: e.target.value })}
          value={value.name}
        />
        <input
          type="password"
          className="input"
          placeholder="Password"
          onChange={(e) => setValue({ ...value, password: e.target.value })}
          value={value.password}
        />
        <button onClick={handlePost} className="login">Submit</button>
      </div>

      <div>
        <ToastContainer />
      </div>
    </div>
  );
}
