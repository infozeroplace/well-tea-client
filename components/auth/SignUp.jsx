import useCookie from "@/hooks/useCookie";
import useToast from "@/hooks/useToast";
import { useSignUpMutation } from "@/services/features/auth/authApi";
import { setAuth } from "@/services/features/auth/authSlice";
import { useAppDispatch } from "@/services/hook";
import { Spinner } from "@nextui-org/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const SignUp = ({ showForm }) => {
  const { handleSuccess, handleError } = useToast();
  const { handleGetCookie, handleSetCookie } = useCookie();

  const dispatch = useAppDispatch();
  const router = useRouter();
  const searchParams = useSearchParams();
  const search = searchParams.get("redirect");

  const [credentials, setCredentials] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [signUp, { data, error, isLoading }] = useSignUpMutation();

  useEffect(() => {
    if (data) {
      handleSetCookie("authToken", data?.data?.refreshToken, {
        expires: 7,
        secure: true,
        sameSite: "None",
      });

      dispatch(setAuth(data?.data));

      handleSuccess(data?.message);

      window.location.href = search || "/";
    }

    if (error) {
      handleError(error?.data?.message);
    }
  }, [data, error]);

  const handleInput = (field, value) =>
    setCredentials((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async (e) => {
    e.preventDefault();

    const options = {
      data: credentials,
    };

    await signUp(options);
  };

  return (
    <div
      className={`${
        showForm === "sign-up"
          ? "block translate-x-0 opacity-1"
          : "hidden translate-x-[100%] opacity-0"
      }`}
    >
      <h4 className="text-2xl font-semibold text-center mb-2">
        Create Account
      </h4>
      <form onSubmit={handleSubmit} className="gap-3">
        <div className="flex justify-between gap-2 mb-2">
          <input
            className="w-full border border-gray-400 p-2 rounded-lg"
            type="text"
            placeholder="First Name"
            onChange={(e) => handleInput("firstName", e.target.value)}
          />
          <input
            className="w-full border border-gray-400 p-2 rounded-lg"
            type="text"
            placeholder="Last Name"
            onChange={(e) => handleInput("lastName", e.target.value)}
          />
        </div>
        <input
          className="w-full border border-gray-400 p-2 rounded-lg mb-2"
          type="text"
          placeholder="Email"
          onChange={(e) => handleInput("email", e.target.value)}
        />
        <input
          className="w-full border border-gray-400 p-2 rounded-lg mb-2"
          type="password"
          placeholder="Password"
          onChange={(e) => handleInput("password", e.target.value)}
        />
        <button
          type="submit"
          className="text-center text-white w-full bg-teagreen-600 p-2 rounded-full flex justify-center items-center gap-2"
        >
          {isLoading ? <Spinner /> : <span>Submit</span>}
        </button>
      </form>
      <h4 className="text-xl font-semibold text-center my-4">Or</h4>
      <div className="flex justify-center gap-2">
        <div>Logos</div>
        <div>Logos</div>
        <div>Logos</div>
      </div>
    </div>
  );
};

export default SignUp;
