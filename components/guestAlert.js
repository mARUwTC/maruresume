import ReactModal from 'react-modal';

import AlertStyles from "../styles/guestAlert.module.css";

function guestAlert({ isOpen, onClose }) {
  return (
    <ReactModal isOpen={isOpen} onRequestClose={onClose} className={AlertStyles.alertBg}>
      <div className={AlertStyles.alert}>
        <h2>Welcome to my page!</h2>
        <p>This is guest page. Please contact through me for detail page!</p>
        <button onClick={onClose}>Okay!</button>
      </div>
    </ReactModal>
  );
}

export default guestAlert;