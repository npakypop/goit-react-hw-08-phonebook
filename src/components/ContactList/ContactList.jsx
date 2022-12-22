import { Contact } from '../Contact/Contact';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <>
      <h2>Contacts</h2>
      <ul>
        {contacts.map(({ id, name, number }) => (
          // <li key={id}>
          //   <p>Name: {name}</p>
          //   <p>Phone: {number}</p>
          //   <button onClick={() => onDeleteContact(id)}>Delete contact</button>
          // </li>
          <Contact
            key={id}
            id={id}
            name={name}
            number={number}
            onDeleteContact={onDeleteContact}
          /> // почему сюда нельзя передать обьект целяком а потом в контакт его деструтриризовать
        ))}
      </ul>
    </>
  );
};
