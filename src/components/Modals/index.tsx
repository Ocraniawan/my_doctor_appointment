import React, { useState, useEffect } from "react";

interface ModalProps {
  isOpen: boolean | false;
  title: string;
  messages: string;
  handleModal: any;
  isConfirm?: boolean | false;
  handleConfirm?: any;
}

export default function Modals(props: ModalProps) {
  const [isopen, setIsopen] = useState(false);

  const handleClose = () => {
    props.handleModal(false);
    setIsopen(false);
  };

  const handleConfirm = () => {
    props.handleConfirm();
  };

  useEffect(() => {
    setIsopen(props.isOpen);
  }, [props]);

  return (
    <div
      className={`fixed left-0 top-0 right-0 bottom-0 bg-black bg-opacity-25 flex items-center justify-center z-20 ${
        isopen ? "flex" : "hidden"
      }`}
      onClick={handleClose}
    >
      <div className="bg-white md:w-[500px] p-8 rounded-xl text-center">
        <div className="font-bold text-2xl mb-2">{props.title}</div>
        <hr />
        <div className="text-base py-4 text-gray-700 font-medium w-2/3 inline-grid">
          <p>{props.messages}</p>
        </div>
        <div className="flex justify-center">
          <button
            onClick={handleConfirm}
            className={`my-1 bg-primary text-white w-1/2 py-2 rounded-2xl mx-2 ${
              props.isConfirm ? "block" : "hidden"
            }`}
          >
            Yes
          </button>
          <button
            onClick={handleClose}
            className="my-1 bg-white text-primary border border-primary w-1/2 py-2 rounded-2xl mx-2"
          >
            {props.isConfirm ? "Cancel" : "OK"}
          </button>
        </div>
      </div>
    </div>
  );
}
