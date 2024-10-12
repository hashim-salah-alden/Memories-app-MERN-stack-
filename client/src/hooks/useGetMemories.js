import { useEffect, useState } from "react";
import API from "../services/axios-global";
import useMemories from "../zustand/useMemories";
import toast from "react-hot-toast";

const useGetMemories = () => {
  const [loading, setLoading] = useState(false);
  const { memories, setMemories, setTotalPages, setCurrentPage, currentPage } =
    useMemories();
  useEffect(() => {
    const GetMemories = async () => {
      setLoading(true);
      try {
        const res = await API.get(`/api/memories?page=${currentPage}&limit=12`);

        if (res.error) {
          throw new Error(res.error);
        }
        setTotalPages(res.data.totalPages);
        setCurrentPage(res.data.currentPage);
        setMemories(res.data.data);
      } catch (error) {
        toast.error(error.response.data.error);
      } finally {
        setLoading(false);
      }
    };
    GetMemories();
  }, [setMemories, setTotalPages, setCurrentPage, currentPage]);

  return { loading, memories };
};

export default useGetMemories;
