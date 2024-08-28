import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import GenderCheckbox from "../components/GenderCheckbox";
import Loader from "../components/Loader";
import useSignup from "../hooks/useSignup";
import toast from "react-hot-toast";

const Signup = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });
  const navigate = useNavigate();

  const handleCheckboxChange = (gender) => {
    setInputs({ ...inputs, gender });
  };

  const { loading, signUp } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await signUp(inputs);
      console.log(data);
      navigate("/");
      toast.success("Account created successfully");
    } catch (error) {
      console.log(error);
      // toast.error(error.message);
    }
  };

  if (loading) return <Loader />;

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-200">
          Sign up
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-medium leading-6 text-gray-300"
            >
              FullName
            </label>
            <div className="mt-2">
              <input
                value={inputs.fullName}
                onChange={(e) =>
                  setInputs({ ...inputs, fullName: e.target.value })
                }
                id="fullName"
                name="fullName"
                type="text"
                required
                autoComplete="email"
                className="block w-full bg-[#1d2432] rounded-md border-0 py-1.5 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium leading-6 text-gray-300"
            >
              Username
            </label>
            <div className="mt-2">
              <input
                value={inputs.username}
                onChange={(e) =>
                  setInputs({ ...inputs, username: e.target.value })
                }
                id="username"
                name="username"
                type="text"
                required
                className="block w-full bg-[#1d2432] rounded-md border-0 py-1.5 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-300"
              >
                Password
              </label>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-indigo-400 hover:text-indigo-500"
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                value={inputs.password}
                onChange={(e) =>
                  setInputs({ ...inputs, password: e.target.value })
                }
                id="password"
                name="password"
                type="password"
                required
                autoComplete="current-password"
                className="block w-full bg-[#1d2432] rounded-md border-0 py-1.5 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="confirm-password"
                className="block text-sm font-medium leading-6 text-gray-300"
              >
                Confirm Password
              </label>
            </div>
            <div className="mt-2">
              <input
                value={inputs.confirmPassword}
                onChange={(e) =>
                  setInputs({ ...inputs, confirmPassword: e.target.value })
                }
                id="password"
                name="password"
                type="password"
                required
                autoComplete="current-password"
                className="block w-full bg-[#1d2432] rounded-md border-0 py-1.5 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <GenderCheckbox
            onCheckboxChange={handleCheckboxChange}
            selectedGender={inputs.gender}
          />

          <div>
            <button type="submit" className="btn btn-primary w-full">
              Sign in
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Already have an account?
          <Link
            to={"/login"}
            className="font-semibold leading-6 text-indigo-400 hover:text-indigo-500"
          >
            {" "}
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
