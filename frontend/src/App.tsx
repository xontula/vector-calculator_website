import "./css/App.css";
import { Navbar } from "./components/navbar";
import { ContentBody } from "./components/tables";

export function App() {
  return (
    <>
      <div className="center-content">
        <Navbar />
      </div>

      <div className="center-content">
        <ContentBody />
      </div>
    </>
  );
}
