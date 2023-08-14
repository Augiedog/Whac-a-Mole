import React from "react";
import { useEffect } from 'react'
import "./Modal.css";

function NewHigh({ setOpenModal, score }) {
  console.log(score, 'where are you')
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
          <p>the form to collect players name && attach to score, with button on bottom to submit</p>
        </div>
        <div className="footer">
          <button onClick={() => {setOpenModal(false)}}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default NewHigh;