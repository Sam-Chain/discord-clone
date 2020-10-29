import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    channelId: null,
    channelName: null,
  },
  reducers: {
    setChannelId: (state, action) => {
      state.app = action.payload.channelId;
    },
    setChannelName: (state, action) => {
      state.app = action.payload.channelName;
    },
  },
});

export const { setChannelId, setChannelName } = appSlice.actions;


export const selectChannelId = state => state.app.channelId;
export const selectChannelName = state => state.app.channelName;

export default appSlice.reducer;
