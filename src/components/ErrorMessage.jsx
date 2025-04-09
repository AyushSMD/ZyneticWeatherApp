import React from 'react';

function ErrorMessage({ message }) {
  return <p className="text-center text-red-500 mt-4">⚠️ {message}</p>;
}

export default ErrorMessage;