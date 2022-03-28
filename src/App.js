import "./App.css";

import { Route, Routes } from "react-router";
import { Home } from "./pages/Home/Home";
import { Label } from "./pages/Label/Label";
import { Archive } from "./pages/Archive/Archive";
import { Trash } from "./pages/Trash/Trash";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/label" element={<Label />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/trash" element={<Trash />} />
      </Routes>
    </div>
  );
}

export default App;
