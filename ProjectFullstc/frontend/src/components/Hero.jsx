import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { api } from '../api/api';
import { Link, useParams } from 'react-router-dom';

export default function Hero() {
  const [data, setData] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${api}api/new-register/all`);
        setData(response.data.message);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    await axios.post(`${api}api/new-register/delete-data/${id}`)
    await axios.get(`${api}api/new-register/all`).then((res) => {
      setData(res.data.message)
    })
    .catch((err) => {
      console.log(err.message);
    })    
  };


  return (
    <div>
      <table className="hero-table">
        <thead>
          <tr>
            <th>Ism</th>
            <th>Familiya</th>
            <th>Yoshi</th>
            <th>Ish</th>
            <th>Delete</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => (
            <tr key={i}>
              <td>{item.name}</td>
              <td>{item.lastName}</td>
              <td>{item.age}</td>
              <td>{item.job}</td>
              <td>
                <button className="delete" onClick={() => handleDelete(item._id)}>Delete</button>
              </td>
              <td>
              <Link to={`/update/${item._id}`}><button className="update">Update</button></Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Link to='/sign'><button className='user'>User qo'shish</button></Link>
    </div>
  );
}
