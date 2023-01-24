import PropTypes from 'prop-types';
import { Box } from '@mui/material';

export const Section = ({ children }) => {
  return <Box sx={{ p: '20px 40px', position: 'relative' }}>{children}</Box>;
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
};
