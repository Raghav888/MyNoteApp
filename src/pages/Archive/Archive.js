import { ArchiveData } from "../../components/ArchiveData/ArchiveData";
import { Navbar } from "../../components/NavBar/Navbar";

import { Sidebar } from "../../components/Sidebar/Sidebar";

export const Archive = () => {
  return (
    <div>
      <Navbar />
      <div className="main-box">
        <Sidebar name="Archive" />
        <ArchiveData />
      </div>
    </div>
  );
};
