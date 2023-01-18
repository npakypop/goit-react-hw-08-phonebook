import React from 'react';
import { useEffect } from 'react';
import { Section } from './Section/Section';
import { AddForm } from './AddForm/AddForm';
import { SearchForm } from './SearchForm/SearchForm';
import { ContactList } from './ContactList/ContactList';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { selectIsLoading, selectError } from 'redux/selectors';

export const App = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Section>
        <AddForm />
      </Section>
      <Section>
        <SearchForm />
      </Section>
      <Section>
        {isLoading && <p>Loading tasks...</p>}
        {error && <p>{error}</p>}
        <ContactList />
      </Section>
    </>
  );
};
