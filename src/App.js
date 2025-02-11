import { BrowserRouter, Link } from "react-router-dom";
import { Router } from "./router/Route";
import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link exact path="/">
          Home
        </Link>
        <br />
        <Link to="/page1">Page1</Link>
        <br />
        <Link to="/page2">Page2</Link>
      </div>
      <Router />
    </BrowserRouter>
  );
}
