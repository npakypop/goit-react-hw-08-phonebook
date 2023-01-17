import PropTypes from 'prop-types';
import { Title, Input } from './SearchForm.styled';
import { useSelector, useDispatch } from 'react-redux';
import { filterContacts } from 'redux/filter/filterSlice';

export const SearchForm = () => {
  const dispatch = useDispatch();

  const filterValue = useSelector(state => state.filter.filter);
  const changeFilter = value => {
    dispatch(filterContacts(value));
  };
  return (
    <>
      <Title>SearchForm</Title>
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
