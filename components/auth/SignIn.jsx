import useCookie from "@/hooks/useCookie";
import useToast from "@/hooks/useToast";
import { useSignInMutation } from "@/services/features/auth/authApi";
import { setAuth } from "@/services/features/auth/authSlice";
import { useAppDispatch } from "@/services/hook";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Spinner } from "@nextui-org/react";

const SignIn = ({ showForm }) => {
  const { handleSuccess, handleError } = useToast();
  const { handleGetCookie, handleSetCookie } = useCookie();

  const dispatch = useAppDispatch();
  const router = useRouter();
  const searchParams = useSearchParams();
  const search = searchParams.get("redirect");

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const [signIn, { data, error, isLoading }] = useSignInMutation();

  useEffect(() => {
    if (data) {
      handleSetCookie("authToken", data?.data?.refreshToken, {
        expires: 7,
        secure: true,
        sameSite: "None",
      });

      dispatch(setAuth(data?.data));

      handleSuccess(data?.message);

      return router.push(search || "/");
    }

    if (error) {
      handleError(error?.data?.message);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, error]);

  const handleInput = (field, value) =>
    setCredentials((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async (e) => {
    e.preventDefault();

    const options = {
      data: credentials,
    };

    await signIn(options);
  };

  return (
    <div
      className={`${
        showForm === "sign-in"
          ? "block translate-x-0 opacity-1"
          : "hidden translate-x-[100%] opacity-0"
      }`}
    >
      <h4 className="text-2xl font-semibold text-center mb-2">Sign In</h4>
      <form onSubmit={handleSubmit} className="gap-3">
        <input
          className="w-full border border-gray-400 p-2 rounded-lg mb-2"
          type="text"
          placeholder="Email Address"
          onChange={(e) => handleInput("email", e.target.value)}
        />
        <input
          className="w-full border border-gray-400 p-2 rounded-lg mb-4"
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
      <div className="text-right">
        <Link href="/forgotpassword" className="underline">
          Forgot Password?
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
