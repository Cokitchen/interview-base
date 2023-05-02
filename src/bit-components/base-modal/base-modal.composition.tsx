import React, { useState } from 'react';
import { BaseModal } from './base-modal';
import { ReactComponent as Icon } from './icon.svg';

const Footer = () => <div>This should appear in the footer section</div>;

export const BasicBaseModal = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <button onClick={() => setShow(true)}>Open Modal</button>
      <BaseModal
        show={show}
        title="Confirm Rejection*"
        description="Any reason why you are rejecting this order?"
        onClose={() => setShow(false)}
        titleIcon={<Icon />}
        hasBackButton
        onBackButton={() => console.log('back button press')}
        titleIconColor="danger"
        footer={<Footer />}
      >
        This is the content of the modal
      </BaseModal>
    </>
  );
};
