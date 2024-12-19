import { LoginSocialFacebook } from "reactjs-social-login";

export default function FacebookLoginButton({ onLogin }) {
  return (
    <LoginSocialFacebook
      appId="1298376301208578"
      onResolve={({ provider, data }) => {
       console.log(provider)
       console.log(data)
      }}
      onReject={(err) => {
        console.log(err);
      }}
    >
      Login
    </LoginSocialFacebook>
  );
}
