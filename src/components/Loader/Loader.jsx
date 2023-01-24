import { Box } from '@mui/material';
import { ThreeDots } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: '115px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}
    >
      <ThreeDots
        height="25"
        width="50"
        radius="9"
        color="#021526"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </Box>
  );
};
