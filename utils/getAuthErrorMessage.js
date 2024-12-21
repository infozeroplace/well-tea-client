export const getAuthErrorMessage = (errors, fieldName) => {
  const error = errors[fieldName];
  console.log(error)
  if (!error) return "";
  switch (error.type) {
    case "required":
      return "This field is required";
    case "maxLength":
      return `Maximum 15 characters`;
    case "minLength":
      return `Minimum 3 characters`;
    case "pattern":
      return error.message || "Invalid format";
    default:
      return "Invalid input";
  }
};