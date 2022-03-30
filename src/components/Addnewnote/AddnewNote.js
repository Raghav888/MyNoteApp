import { useState } from "react";
import { InputBox } from "../InputBox/InputBox";
export const AddnewNote = () => {
  const [openinputbox, setinputbox] = useState(false);
  return (
    <div>
      <button
        className="mantra-button mantra-primary-btn note-button"
        onClick={() => setinputbox(true)}
      >
        Create New Note
      </button>
      {openinputbox && <InputBox closeinputbox={setinputbox} />}
    </div>
  );
};
