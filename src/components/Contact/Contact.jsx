export const Contact = ({ name, number, id, onDeleteContact }) => {
  return (
    <li>
      <p>Name: {name}</p>
      <p>Phone: {number}</p>
      <button onClick={() => onDeleteContact(id)}>Delete contact</button>
    </li>
  );
};
