import { Contact } from '../Contact/Contact';

export const ContactList = ({ contacts }) => {
  return (
    <>
      <h2>Contacts</h2>
      <ul>
        {contacts.map(({ id, name, number }) => (
          <Contact key={id} name={name} number={number} /> // почему сюда нельзя передать обьект целяком а потом в контакт его деструтриризовать
        ))}
      </ul>
    </>
  );
};
