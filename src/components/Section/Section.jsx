import PropTypes from 'prop-types';
export const Section = ({ title, children }) => {
  return (
    <>
      <h1>{title}</h1>
      {children}
    </>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element,
};
