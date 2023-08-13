import React, { useState } from 'react';

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null; // Don't render anything if the modal is closed
  }

  return (
    <div className="modal">
      <div className="newHighScore">
        <h2>You Have set the a new High Score</h2>
        <p>the Score Form to collect the name of player goes here</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

const NewHigh = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
console.log(props, 'new high props')
  return (
    <div>
      <button onClick={handleOpenModal}>Open Modal</button>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default NewHigh;