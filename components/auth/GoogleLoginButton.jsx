import { FcGoogle } from "react-icons/fc";
import CustomButton from "../UI/CustomButton";

export default function GoogleLoginButton({ onGoogleLogin }) {
  return (
    <div>
      <CustomButton
        type="button"
        onClick={onGoogleLogin}
        className="flex items-center justify-center gap-2 border w-full py-2.5 duration-1000 rounded-full hover:border-brand__black__color"
      >
        <FcGoogle size={25} />
        <span>Sign in with Google</span>
      </CustomButton>
      <div className="text-center my-0.5 flex items-center gap-x-2">
        <div className="w-full border-t"></div>
        <div>Or</div>
        <div className="w-full border-t"></div>
      </div>
    </div>
  );
}