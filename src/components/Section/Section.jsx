import PropTypes from 'prop-types';
import { Wrapper } from './Section.styled.js';

export const Section = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

// Section.propTypes = {
//   title: PropTypes.string,
//   children: PropTypes.element,
// };
