import ReactDom from 'react-dom/client';
import App from "./components/app.js";
import "./index.css"


const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<App/>)