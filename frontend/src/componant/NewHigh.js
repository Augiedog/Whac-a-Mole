import React, { useState } from "react"
import axios from "axios";
import "./Modal.css";

const TimeStamp = () => {
  let newDate = new Date()
  let date = newDate.getDate()
  let month = newDate.getMonth() + 1
  let year = newDate.getFullYear()
  return `${month < 10 ? `0${month}` : `${month}`}${'/'}${date}${'/'}${year}`
}

function NewHigh({ setOpenModal, score }) {
  const [formData, setFormData] = useState({
    name: '',
    score: score,
    timeStamp: TimeStamp()
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setOpenModal(false)
    try {
      const response = await axios.post('/.netlify/functions/highScore', formData)
      if (response.status === 200) {
        console.log('Data submitted successfully')
      } else {
        console.error('Submission failed')
      }
    } catch (error) {
      console.error('Error:', error)
    }
  };
  console.log(formData, 'collected data')
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
          <h1>You set the new High Score</h1>
        </div>
        <div className="body">
          <p>Please enter your 3 digt initals</p>
          <form onSubmit={handleSubmit}>
            <input
              value={formData.name}
              name="name"
              maxlength="3"
              onChange={handleChange}
              placeholder="Enter Your Name"
              type="text"
              required></input>
            <button type="submit" id="submitBTN" >Submit</button>
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