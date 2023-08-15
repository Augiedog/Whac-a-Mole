import React, { useState } from "react"
import axios from "axios";
import { useEffect } from 'react'
import "./Modal.css";

const TimeStamp = () => {
  let newDate = new Date()
  let date = newDate.getDate()
  let month = newDate.getMonth() + 1
  let year = newDate.getFullYear()
  return `${month < 10 ? `0${month}` : `${month}`}${'/'}${date}${'/'}${year}`
}

function NewHigh({ setOpenModal, score }) {
  const [name, setName] = useState('')
  const [formData, setFormData] = useState({
    name: name,
    score: score,
    timeStamp: TimeStamp()
  })
  console.log(formData, 'collected data')
  let [error, setError] = useState(null)



  const handleChange = (e) => {
    const { name } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: setName,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/.netlify/functions/highScore', formData);
      if (response.status === 200) {
        console.log('Data submitted successfully');
        // You can perform further actions here, like displaying a success message.
      } else {
        console.error('Submission failed');
        // Handle error cases here, like displaying an error message.
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle network or other errors here.
    }
  };

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>"{score}" Is The New High Score</h1>
        </div>
        <div className="body">
          <form onSubmit={handleSubmit}>
            <input
              value={setName}
              onChange={handleChange}
              placeholder="Enter Your Name"
              type="text"
              required></input>
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="footer">
          {/* <button onClick={() => { setOpenModal(false) }}>Submit</button> */}
        </div>
      </div>
    </div>
  );
}

export default NewHigh;