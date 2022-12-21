export const Contact = ({ name, number, id }) => {
  return (
    <li key={id}>
      <p>Name: {name}</p>
      <p>Phone: {number}</p>
      <button type="click">Delete contact</button>
    </li>
  );
};
