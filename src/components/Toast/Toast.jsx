import React, { useEffect } from 'react';

export default function Toast({ message, type = 'info', onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const bgColor = {
    success: '#4caf50',
    error: '#f44336',
    info: '#2196f3',
  }[type];

  return (
    <div style={{
      position: 'fixed',
      bottom: 20,
      right: 20,
      backgroundColor: bgColor,
      color: '#fff',
      padding: '12px 20px',
      borderRadius: 4,
      boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
      zIndex: 1000,
      fontWeight: 'bold',
      userSelect: 'none',
    }}>
      {message}
    </div>
  );
}
