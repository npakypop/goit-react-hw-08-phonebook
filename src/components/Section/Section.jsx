import PropTypes from 'prop-types';
import { Wrapper } from './Section.styled.js';
import { Box } from '@mui/material';

export const Section = ({ children }) => {
  return <Box sx={{ p: '20px 40px' }}>{children}</Box>;
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
};
