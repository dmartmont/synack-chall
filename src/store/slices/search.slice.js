import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  search: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState: INITIAL_STATE,
  reducers: {}
});

export default searchSlice.reducer;