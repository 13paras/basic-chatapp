import { useState } from "react";
import { useAuthcontext } from "../context/AuthContext";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
  const { setAuthUser } = useAuthcontext();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const login = async ({ username, password }) => {
    const checkInput = handleInputErrors({ username, password });

    if (!checkInput) return;

    setLoading(true);
    try {
      const response = await axios.post("/api/v1/auth/login", {
        username,
        password,
      });

      const data = response.data;
      if (data.error) {
        throw new Error(data.error);
      }

      localStorage.setItem("chat-user", JSON.stringify(data.user));

      // context
      setAuthUser(data);
      toast.success("Login successful");
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, login };
};
export default useLogin;

function handleInputErrors({ username, password }) {
  if (!username || !password) {
    return false;
  }
  return true;
}
