import Cookies from "js-cookie";

const useCookie = () => {
  const handleSetCookie = (name, value, option = {}) =>
    Cookies.set(name, value, option);

  const handleRemoveCookie = (name, option = {}) =>
    Cookies.remove(name, option);

  const handleGetCookie = (name, option = {}) => Cookies.get(name, option);

  return { handleSetCookie, handleRemoveCookie, handleGetCookie };
};

export default useCookie;
