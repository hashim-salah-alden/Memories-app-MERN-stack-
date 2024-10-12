import { create } from "zustand";

const useMemories = create((set) => ({
  memories: [],
  setMemories: (memories) => set({ memories }),
  displayedMemories: [],
  setDisplayedMemories: (displayedMemories) => set({ displayedMemories }),
  totalPages: 1,
  setTotalPages: (totalPages) => set({ totalPages }),
  currentPage: 1,
  setCurrentPage: (currentPage) => set({ currentPage }),
  isOpen: false,
  setIsOpen : (isOpen) => set({ isOpen}),
  deleteMemory: (id) => set((state) => ({
    memories: state.memories.filter((memory) => memory._id !== id)
  })),
}));

export default useMemories;

