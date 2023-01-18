import PropTypes from 'prop-types';
import { Title, Input } from './SearchForm.styled';
import { useSelector, useDispatch } from 'react-redux';
import { filterContacts } from 'redux/filter/filterSlice';
import { selectFilterValue } from 'redux/selectors';

export const SearchForm = () => {
  const filterValue = useSelector(selectFilterValue);
  const dispatch = useDispatch();

  const changeFilter = value => {
    dispatch(filterContacts(value));
  };
  return (
    <>
      <Title>Search</Title>
      <Input
        onChange={event => changeFilter(event.target.value)}
        value={filterValue}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </>
  );
};

SearchForm.propTypes = {
  changeFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};
