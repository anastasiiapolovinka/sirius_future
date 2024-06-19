import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser: (state, action) => {
      state.value = {...action.payload, name: "Михаил"};
    },
    logoutUser: (state) => {
      state.value = null;
    }
  },
})

export const { updateUser, logoutUser } = userSlice.actions

export default userSlice.reducer