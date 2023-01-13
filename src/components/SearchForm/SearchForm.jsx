import PropTypes from 'prop-types';
import { Title, Input } from './SearchForm.styled';

export const SearchForm = ({ filter, changeFilter }) => {
  return (
    <>
      <Title>SearchForm</Title>
      <Input
        onChange={event => changeFilter(event.target.value)}
        value={filter}
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
