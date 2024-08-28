import { useNavigate } from "react-router-dom";
import { useAuthcontext } from "../context/AuthContext";
import axios from "axios";
import { useState } from "react";

const useLogout = () => {
  const { setAuthUser } = useAuthcontext();
  const [loading, setLoading] = useState();
  const navigate = useNavigate();
  const logout = async () => {
    setLoading(true);
    try {
      const response = await axios.post("/api/v1/auth/logout");
      const data = response.data;
      if (data.error) {
        throw new Error(data.error);
      }
      localStorage.removeItem("chat-user");
      setAuthUser(null);
      navigate("/login");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return { logout, loading };
};
export default useLogout;
