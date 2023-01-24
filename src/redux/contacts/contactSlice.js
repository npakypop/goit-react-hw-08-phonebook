import { createSlice } from '@reduxjs/toolkit';
import { logOut } from 'redux/auth/authOperations';
import {
  fetchContacts,
  addContact,
  deleteContact,
} from 'redux/contacts/contactsOperations';

const handlePending = state => {
  state.isLoading = true;
  //перенес обнуление ошибки из фулфилд в пендинг, так как при повторении одной и той же ошибки, ошибка в стейте не обнуляется и не срабатівает юзєффект и не показівается тост с ошибкой
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [addContact.pending]: handlePending,
    [deleteContact.pending]: handlePending,
    [fetchContacts.rejected]: handleRejected,
    [addContact.rejected]: handleRejected,
    [deleteContact.rejected]: handleRejected,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      //перенес обнуление ошибки в пендинг
      state.items = action.payload;
    },
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      //перенес обнуление ошибки в пендинг
      state.items.unshift(action.payload);
    },
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      //перенес обнуление ошибки в пендинг
      const index = state.items.findIndex(
        Contact => Contact.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
    [logOut.fulfilled](state) {
      state.items = [];
      state.error = null;
      state.isLoading = false;
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
