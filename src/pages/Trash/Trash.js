import { Navbar } from "../../components/NavBar/Navbar";

import { Sidebar } from "../../components/Sidebar/Sidebar";
import { TrashData } from "../../components/TrashData/TrashData";

export const Trash = () => {
  return (
    <div>
      <Navbar />
      <div className="main-box">
        <Sidebar name="Trash" />
        <TrashData />
      </div>
    </div>
  );
};
