import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import SignupForm from '../auth/SignUpForm';


function SignupFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button id='signup-modal-main-page'
        onClick={() => setShowModal(true)}>Sign Up</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <SignupForm />
        </Modal>
      )}
    </>
  );
}

export default SignupFormModal;
