import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts } from 'redux/operations';
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    // contacts: [],
    contacts: {
      items: [],
      isLoading: false,
      error: null,
    },
    filter: '',
  },
  // reducers: {
  //   addContact(state, { payload }) {
  //     state.contacts = [...state.contacts, payload];
  //   },
  //   deleteContact(state, { payload }) {
  //     state.contacts = state.contacts.filter(contact => contact.id !== payload);
  //   },
  // },
  //==============================================================
  // reducers: {
  //   fetchingInProgress(state) {
  //     state.contacts.isLoading = true;
  //   },
  //   fetchingSuccess(state, action) {
  //     state.contacts.isLoading = false;
  //     state.contacts.error = null;
  //     state.contacts.items = action.payload;
  //   },
  //   fetchingError(state, action) {
  //     state.contacts.isLoading = false;
  //     state.contacts.error = action.payload;
  //   },
  // },
  //==================================================================
  extraReducers: {
    [fetchContacts.pending](state, action) {
      state.contacts.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items = action.payload;
    },
    [fetchContacts.rejected](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    },
  },
});

// export const { addContact, deleteContact } = contactsSlice.actions;
export const { fetchingInProgress, fetchingSuccess, fetchingError } =
  contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
