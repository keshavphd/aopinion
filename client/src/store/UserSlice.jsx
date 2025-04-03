import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
  _id: "",
  age: "",
  dateOfBirth: "",
  email: "",
  firstname: "",
  gender: "",
  lastname: "",
  mobile: "",
  numberofsurvey: "",
  surveycompleted: "",
  amountearned: "",
  createdAt :""
};
const userSlice = createSlice({
  name: "user",
  initialState: initialValue,
  reducers: {
    setUserDetails: (state, action) => {
      state.firstname = action.payload?.firstname;
      state.email = action.payload?.email;
      state.id = action.payload?._id;
      state.lastname = action.payload?.lastname;
      state.mobile = action.payload?.mobile;
      state.age = action.payload?.age;
      state.gender = action.payload?.gender;
      state.dateOfBirth = action.payload?.dateOfBirth;
      state.numberofsurvey = action.payload?.numberofsurvey;
      state.surveycompleted = action.payload?.surveycompleted;
      state.createdAt = action.payload?.createdAt;
      state.amountearned = action.payload?.amountearned;
    },
    updateProfile: (state, action) => {
      state.firstname = action.payload?.firstname;
      state.lastname = action.payload?.lastname;
      state.mobile = action.payload?.mobile;
      state.email = action.payload?.email;
      state.password = action.payload?.password;
    },
    logout: (state, action) => {
      state.firstname = "";
      state.email = "";
      state.id = "";
      state.lastname = "";
      state.mobile = "";
      state.age = "";
      state.gender = "";
      state.dateOfBirth = "";
      state.numberofsurvey = "";
      state.surveycompleted = "";
      state.amountearned = "";
      state.createdAt = ""
    },
  },
});

export const { setUserDetails, logout, updateProfile } = userSlice.actions;

export default userSlice.reducer;
