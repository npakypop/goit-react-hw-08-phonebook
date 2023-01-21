import { Section } from '../../components/Section/Section';
import { AddForm } from '../../components/AddForm/AddForm';
import { SearchForm } from '../../components/SearchForm/SearchForm';
import { ContactList } from '../../components/ContactList/ContactList';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/contactsOperations';
import { selectIsLoading, selectError } from 'redux/selectors';
import { useEffect } from 'react';

const Contacts = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
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
    </div>
  );
};

export default Contacts;
