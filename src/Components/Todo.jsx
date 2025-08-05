import { useState } from "react";

import Modal from "./Modal";
import Backdrop from "./Backdrop";

const Todo = ({ title, text, eniola }) => {
  const [showModal, setShowModal] = useState(false);

  // function deleteHandler() {
  //   setShowModal(true);
  //   console.log("Yes! You just clicked me😁");
  // }

  const deleteHandler = () => {
    setShowModal(true);
    console.log("Yes! You just clicked the Delete Button😁");
  };

  const cancelHandler = () => {
    setShowModal(false);
    console.log("Canceled clicked!😁");
  };

  return (
    <div className="bg-white mb-6 pt-6 md:pt-8 pb-5 md:pb-6 rounded-xl px-8 shadow-md">
      <h2 className="mb-10 hover:bg-pink-400 hover:block text-4xl md:text-5xl">
        {title}
      </h2>
      <div className="flex justify-between items-center text-2xl md:text-3xl">
        <div>
          <u>{text}</u>
        </div>
        <button
          onClick={deleteHandler}
          className="py-2 px-6 bg-pink-800 text-white font-normal shadow-lg rounded-lg cursor-pointer"
        >
          {eniola}
        </button>
      </div>
      {/* {showModal ? <Modal /> : null} */}
      {showModal && <Modal raymond={cancelHandler} />}
      {showModal && <Backdrop />}
    </div>
  );
};

export default Todo;
