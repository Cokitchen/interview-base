import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { DEFAULT_TOAST_OPTIONS, ToastMessage } from './toast';

export const BasicToast = () => {
  return (
    <div style={{ minWidth: '800px', minHeight: '400px' }}>
      <button
        onClick={() =>
          toast(
            <ToastMessage
              message="my alert"
              type="warn"
              onClose={() => alert('I was closed')}
            />
          )
        }
      >
        Alert!
      </button>
      <ToastContainer {...DEFAULT_TOAST_OPTIONS} />
    </div>
  );
};
