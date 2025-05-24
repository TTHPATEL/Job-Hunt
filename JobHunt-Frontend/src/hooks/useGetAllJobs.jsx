import { setAllJobs } from "@/redux/jobSlice";
import { JOB_API_ENDPOINT } from "@/utils/data";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const useGetAllJobs = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const searchedQuery = useSelector((store) => store.jobs.searchedQuery);
  const { user } = useSelector((store) => store.auth);

  useEffect(() => {
    const fetchAllJobs = async () => {
      setLoading(true);
      setError(null);
      try {
        const endpoint = user
          ? `${JOB_API_ENDPOINT}/get?keyword=${searchedQuery}`
          : `${JOB_API_ENDPOINT}/public/get?keyword=${searchedQuery}`;

        const res = await axios.get(endpoint, {
          withCredentials: user ? true : false,
        });
        // console.log("API Response: ", res.data);
        if (res.data.status) {
          dispatch(setAllJobs(res.data.jobs));
        } else {
          setError("Failed to fetch jobs.");
        }
      } catch (error) {
        console.error("Fetch Error:", error);
        setError(error.message || "An error occurred.");
      } finally {
        setLoading(false);
      }
    };
    fetchAllJobs();
  }, [dispatch]);
  return { loading, error };
};

export default useGetAllJobs;
