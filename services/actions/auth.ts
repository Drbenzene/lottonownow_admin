import APICall from "../apiCall";

const loginAdmin = async (payload: any) => {
  const response = await APICall("auth/admin/login", "POST", payload);
  return response;
};

const authServices = {
  loginAdmin,
};

export default authServices;
