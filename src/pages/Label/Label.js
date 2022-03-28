import { LabelData } from "../../components/LabelData/LabelData";
import { Navbar } from "../../components/NavBar/Navbar";

import { Sidebar } from "../../components/Sidebar/Sidebar";

export const Label = () => {
  return (
    <div>
      <Navbar />
      <div className="main-box">
        <Sidebar name="Labels" />
        <LabelData />
      </div>
    </div>
  );
};
