import { Section } from '../../components/Section/Section';
import { AddForm } from '../../components/AddForm/AddForm';
import { SearchForm } from '../../components/SearchForm/SearchForm';
import { ContactList } from '../../components/ContactList/ContactList';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/contactsOperations';
import { selectIsLoading, selectError } from 'redux/selectors';
import { useEffect } from 'react';
import { Container } from '@mui/material';
import { Loader } from 'components/Loader/Loader';
import toast, { Toaster } from 'react-hot-toast';

const Contacts = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  useEffect(() => {
    if (error !== null) {
      toast.error(`${error}`);
    }
  }, [error]);

  return (
    <Container sx={{ display: 'flex', justifyContent: 'start', gap: '40px' }}>
      <Section>
        <AddForm />
      </Section>
      <Section>
        <SearchForm />
        {isLoading && <Loader />}
        <ContactList />
        <Toaster />
      </Section>
    </Container>
  );
};

export default Contacts;
