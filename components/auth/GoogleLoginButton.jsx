import { FcGoogle } from "react-icons/fc";

export default function GoogleLoginButton({ onLogin }) {
  return (
    <button type="button" onClick={onLogin}>
      <FcGoogle size={30} />
    </button>
  );
}
