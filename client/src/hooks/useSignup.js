import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

const useSignup = () => {
  const [loading, setLoading] = useState(false);

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

    console.log({
      fullName,
      username,
      password,
      confirmPassword,
      gender,
    });

    console.log({ success });

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

      console.log("Signup response: ", response);
      toast.success("Account created successfully");
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
