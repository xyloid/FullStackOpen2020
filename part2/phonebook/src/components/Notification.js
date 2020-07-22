import React from 'react';
import '../index.css';

const Notification = ({ message, className }) => {
  if (message == null) {
    return null;
  }
  return <p className={`${className}`}>{message}</p>;
};

export default Notification;
