import { Navbar } from "../../components/NavBar/Navbar";
import { Note } from "../../components/Note/Note";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import "./home.css";
export const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="main-box">
        <Sidebar />
        <Note />
      </div>
    </div>
  );
};
