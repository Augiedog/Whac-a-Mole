import React, { useState } from "react"
import axios from "axios"
import "./Modal.css"

function NewHigh({ setOpenModal, score }) {
  const [formData, setFormData] = useState({
    name: '',
    score: score,
    timeStamp: new Date()
  })

  // handle Change needs toUpperCase()
  const handleChange = (e) => {
    const { name, value } = e.target
    // this.setState(value.toUpperCase())
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
        console.log('Record saved successfully')
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
          {/* remove this button */}
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            Close
          </button>
        </div>
        <div className="title">
          <h1>You set the new High Score</h1>
        </div>
        <div className="body">
          <p>Please enter your 3 digit initials</p>
          <form onSubmit={handleSubmit}>
            <input
              value={formData.name}
              name="name"
              maxLength="3"
              size="3"
              onChange={handleChange}
              placeholder="Your Name"
              type="text"
              required></input>
            <button type="submit" id="submitBTN" >Submit</button>
          </form>
        </div>
        <div className="footer">
        </div>
      </div>
    </div>
  );
}

export default NewHigh;