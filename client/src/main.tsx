import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Add additional global styles
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color: #1a8d5f;
    --secondary-color: #105d3e;
    --accent-color: #f5a623;
    --light-green: #e9f7f0;
    --medium-green: #d3ede2;
    --dark-text: #333;
    --light-text: #666;
    --white: #fff;
    scroll-behavior: smooth;
  }
  
  body {
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    padding: 0;
    background: #f9f9f9;
    color: var(--dark-text);
    line-height: 1.6;
  }
  
  .timeline-dot::after {
    content: '';
    position: absolute;
    left: -43px;
    top: 20px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: #1a8d5f;
    border: 4px solid #e9f7f0;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }

  .timeline-line::before {
    content: "";
    position: absolute;
    left: 14px;
    top: 0;
    height: 100%;
    width: 2px;
    background: #d3ede2;
  }

  .priority-dot::before {
    content: "";
    position: absolute;
    left: -20px;
    top: 10px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #1a8d5f;
  }
  
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

createRoot(document.getElementById("root")!).render(
  <>
    <GlobalStyles />
    <App />
  </>
);
