import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import { useEffect } from 'react';
// import { Section } from './Section/Section';
// import { AddForm } from './AddForm/AddForm';
// import { SearchForm } from './SearchForm/SearchForm';
// import { ContactList } from './ContactList/ContactList';
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchContacts } from 'redux/operations';
// import { selectIsLoading, selectError } from 'redux/selectors';

// import { Home } from '../pages/Home/Home';
// import { Contacts } from '../pages/Contacts/Contacts';
// import { LogIn } from '../pages/LogIn/LogIn';
// import { SignUp } from '../pages/SignUp/SignUp';
// import { Layout } from './Layout/Layout';

export const App = () => {
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return (
    <Routes>
      {/* <Route path="/" element={<Layout />}> */}
      <Route path="/" element={<div>home</div>} />
      <Route path="/signup" element={<div>signup</div>} />
      <Route path="/login" element={<div>login</div>} />
      <Route path="/contacts" element={<div>contacts</div>} />
      {/* <Route path="/movies/:movieId" element={<MovieCard />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route> */}
      {/* <Route path="*" element={<Home />} /> */}
      {/* </Route> */}
    </Routes>
  );
};

// <>
//   <Section>
//     <AddForm />
//   </Section>
//   <Section>
//     <SearchForm />
//   </Section>
//   <Section>
//     {isLoading && <p>Loading tasks...</p>}
//     {error && <p>{error}</p>}
//     <ContactList />
//   </Section>
// </>
