export const validatedFormData = (email, Password) => {
  const emailValidate =
    /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
  const PasswordValidate =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
      Password
    );
  if (!emailValidate) return "Email is not valid";
  if (!PasswordValidate) return "Password is not valid";
  return null;
};
