import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthcontext } from "../context/AuthContext";

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthcontext();

  const signUp = async ({
    fullName,
    username,
    password,
    confirmPassword,
    gender,
  }) => {
    const success = handleInputErrors({
      fullName,
      username,
      password,
      confirmPassword,
      gender,
    });

    if (!success) return;
    setLoading(true);
    try {
      const response = await axios.post("/api/v1/auth/signup", {
        fullName,
        username,
        password,
        confirmPassword,
        gender,
      });

      const data = response.data;

      if (data.error) {
        throw new Error(data.error);
      }

      localStorage.setItem("chat-user", JSON.stringify(data.user));

      // context
      setAuthUser(data);
    } catch (error) {
      console.log("Error signing up: ", error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { signUp, loading };
};
export default useSignup;

function handleInputErrors({
  fullName,
  username,
  password,
  confirmPassword,
  gender,
}) {
  if (!fullName || !username || !password || !confirmPassword || !gender) {
    toast.error("Please fill all the fields");
    return false;
  }

  return true;
}
