// src/redux/apiSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../config/axios';

// Tạo async thunk cho GET request (fetchData)
export const fetchData = createAsyncThunk(
  'api/fetchData',
  async (endpoint, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(endpoint); 
      return { endpoint, data: response.data };
    } catch (error) {
      return rejectWithValue({ endpoint, error: error.response ? error.response.data : error.message });
    }
  }
);

// Tạo async thunk cho POST request (createData)
export const createData = createAsyncThunk(
  'api/createData',
  async ({ endpoint, payload }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(endpoint, payload); // POST request
      return { endpoint, data: response.data };
    } catch (error) {
      return rejectWithValue({ endpoint, error: error.response ? error.response.data : error.message });
    }
  }
);

// Tạo async thunk cho PUT request (updateData)
export const updateData = createAsyncThunk(
  'api/updateData',
  async ({ endpoint, payload }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.put(endpoint, payload); // PUT request
      return { endpoint, data: response.data };
    } catch (error) {
      return rejectWithValue({ endpoint, error: error.response ? error.response.data : error.message });
    }
  }
);

// Tạo async thunk cho DELETE request (deleteData)
export const deleteData = createAsyncThunk(
  'api/deleteData',
  async ({ endpoint }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.delete(endpoint); // DELETE request
      return { endpoint, data: response.data };
    } catch (error) {
      return rejectWithValue({ endpoint, error: error.response ? error.response.data : error.message });
    }
  }
);

// Tạo slice để quản lý trạng thái API
const apiSlice = createSlice({
  name: 'api',
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    // Xử lý GET request
    builder
      .addCase(fetchData.pending, (state, action) => {
        const endpoint = action.meta.arg;
        state[endpoint] = { loading: true, data: null, error: null };
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        const { endpoint, data } = action.payload;
        state[endpoint] = { loading: false, data, error: null };
      })
      .addCase(fetchData.rejected, (state, action) => {
        const { endpoint, error } = action.payload;
        state[endpoint] = { loading: false, data: null, error };
      });

    // Xử lý POST request
    builder
      .addCase(createData.pending, (state, action) => {
        const endpoint = action.meta.arg.endpoint;
        state[endpoint] = { loading: true, data: null, error: null };
      })
      .addCase(createData.fulfilled, (state, action) => {
        const { endpoint, data } = action.payload;
        state[endpoint] = { loading: false, data, error: null };
      })
      .addCase(createData.rejected, (state, action) => {
        const { endpoint, error } = action.payload;
        state[endpoint] = { loading: false, data: null, error };
      });

    // Tương tự cho PUT và DELETE
    builder
      .addCase(updateData.pending, (state, action) => {
        const endpoint = action.meta.arg.endpoint;
        state[endpoint] = { loading: true, data: null, error: null };
      })
      .addCase(updateData.fulfilled, (state, action) => {
        const { endpoint, data } = action.payload;
        state[endpoint] = { loading: false, data, error: null };
      })
      .addCase(updateData.rejected, (state, action) => {
        const { endpoint, error } = action.payload;
        state[endpoint] = { loading: false, data: null, error };
      });

    builder
      .addCase(deleteData.pending, (state, action) => {
        const endpoint = action.meta.arg.endpoint;
        state[endpoint] = { loading: true, data: null, error: null };
      })
      .addCase(deleteData.fulfilled, (state, action) => {
        const { endpoint, data } = action.payload;
        state[endpoint] = { loading: false, data, error: null };
      })
      .addCase(deleteData.rejected, (state, action) => {
        const { endpoint, error } = action.payload;
        state[endpoint] = { loading: false, data: null, error };
      });
  },
});

export default apiSlice.reducer;
