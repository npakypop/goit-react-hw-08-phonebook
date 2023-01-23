import { Container, TextField, Typography } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { filterContacts } from 'redux/filter/filterSlice';
import { selectFilterValue, selectItems } from 'redux/selectors';

export const SearchForm = () => {
  const filterValue = useSelector(selectFilterValue);
  const dispatch = useDispatch();
  const items = useSelector(selectItems);

  const changeFilter = value => {
    dispatch(filterContacts(value));
  };
  return (
    <Container>
      <Typography component="h2" sx={{ mb: '10px', fontSize: '20px' }}>
        Search
      </Typography>
      <TextField
        disabled={items.length <= 0 && true}
        id="outlined-basic"
        label="Search"
        variant="outlined"
        color="secondary"
        onChange={event => changeFilter(event.target.value)}
        value={filterValue}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      />
    </Container>
  );
};
