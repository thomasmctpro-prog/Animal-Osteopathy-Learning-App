import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Debug helper
window.onerror = function (message, source, lineno, colno, error) {
  const errorMsg = `Error: ${message}\nSource: ${source}\nLine: ${lineno}:${colno}`;
  console.error(errorMsg);
  // Show error on screen for "white screen" debugging
  const errorDiv = document.createElement('div');
  errorDiv.style.position = 'fixed';
  errorDiv.style.top = '0';
  errorDiv.style.left = '0';
  errorDiv.style.width = '100%';
  errorDiv.style.backgroundColor = 'red';
  errorDiv.style.color = 'white';
  errorDiv.style.padding = '20px';
  errorDiv.style.zIndex = '9999';
  errorDiv.innerText = errorMsg;
  document.body.appendChild(errorDiv);
};

console.log("App starting...");

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
