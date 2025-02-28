import { FaApple } from "react-icons/fa";

export default function AppleLoginButton({ onGoogleLogin }) {
  return (
    <button type="button" onClick={onGoogleLogin}>
      <FaApple size={30} />
    </button>
  );
}
