import { AnimatePresence, motion } from "framer-motion";
import { FaCirclePlus } from "react-icons/fa6";
import AddMemoryForm from "./AddMemory";

import useMemories from "../../zustand/useMemories";

const AddMemory = ({ currentId, setCurrentId }) => {
  const {isOpen, setIsOpen} = useMemories();
  return (
    <div className="flex justify-center items-center w-24 h-24 fixed right-8 bottom-8  ">
      <button
        onClick={() => setIsOpen(true)}
        className="bg-[#1f3395] text-white font-medium px-4 py-2 rounded hover:opacity-90 transition-opacity"
      >
      <FaCirclePlus size={30}/>

      </button>
      <SpringModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        currentId={currentId}
        setCurrentId={setCurrentId}
      />
    </div>
  );
};

const SpringModal = ({
  isOpen,
  setIsOpen,
  currentId,
  setCurrentId,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="flex flex-col items-center justify-center bg-[#1f3395] text-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden "
          >
            <AddMemoryForm
              currentId={currentId}
              setCurrentId={setCurrentId}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AddMemory;
