import { createSlice } from '@reduxjs/toolkit';
import { logOut } from 'redux/auth/authOperations';
import {
  fetchContacts,
  addContact,
  deleteContact,
} from 'redux/contacts/contactsOperations';

const handlePending = state => {
  state.isLoading = true;
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
  extraReducers:
    // builder =>
    //   builder
    //     .addCase(fetchContacts.fulfilled, (state, { payload }) => {
    //       state.items = payload;
    //     })
    //     .addCase(addContact.fulfilled, (state, { payload }) => {
    //       state.items.push(payload);
    //     })
    //     .addCase(deleteContact.fulfilled, (state, { payload }) => {
    //       const index = state.items.findIndex(
    //         Contact => Contact.id === payload.id
    //       );
    //       state.items.splice(index, 1);
    //     })
    //     .addCase(logOut.fulfilled, state => {
    //       state.items = [];
    //       state.error = null;
    //       state.isLoading = false;
    //     })
    //     .addMatcher(
    //       (fetchContacts.fulfilled,
    //       addContact.fulfilled,
    //       deleteContact.fulfilled),
    //       state => {
    //         state.isLoading = false;
    //         state.error = null;
    //       }
    //     )
    //     .addMatcher(
    //       (fetchContacts.rejected, addContact.rejected, deleteContact.rejected),
    //       (state, action) => {
    //         state.isLoading = false;
    //         state.error = action.payload;
    //       }
    //     )
    //     .addMatcher(
    //       (fetchContacts.pending, addContact.pending, deleteContact.pending),
    //       state => {
    //         state.isLoading = true;
    //       }
    //     ),
    {
      [fetchContacts.pending]: handlePending,
      [addContact.pending]: handlePending,
      [deleteContact.pending]: handlePending,
      [fetchContacts.rejected]: handleRejected,
      [addContact.rejected]: handleRejected,
      [deleteContact.rejected]: handleRejected,
      [fetchContacts.fulfilled](state, action) {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      },
      [addContact.fulfilled](state, action) {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      },
      [deleteContact.fulfilled](state, action) {
        state.isLoading = false;
        state.error = null;
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
