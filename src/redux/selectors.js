export const selectItems = state => state.contacts.contacts.items;

export const selectFilterValue = state => state.filter.filter;

export const selectError = state => state.contacts.contacts.error;

export const selectIsLoading = state => state.contacts.contacts.isLoading;
