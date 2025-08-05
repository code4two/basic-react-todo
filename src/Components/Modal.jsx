const Modal = ({ raymond }) => {
  return (
    <div className="z-30 inset-0 fixed items-center justify-center flex">
      <div className="bg-white font-medium text-2xl rounded-md pb-6 pt-4 px-45">
        <p className="text-center pt-4">Are you sure?🤷🏻‍♂️</p>
        <div className="mt-6 flex gap-10">
          <button
            onClick={raymond}
            className="py-2 px-6 text-pink-800 border-1 border-pink-800 bg-white shadow-lg rounded-lg cursor-pointer"
          >
            Cancel
          </button>
          <button className="py-2 px-6 bg-gray-400 opacity-60 text-white shadow-lg rounded-lg cursor-pointer">
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
