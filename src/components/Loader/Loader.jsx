import { Box } from '@mui/material';
import { Oval, ThreeDots } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <Box sx={{ position: 'absolute' }}>
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
      {/* <Oval
        height={20}
        width={20}
        color="#BF3F92"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#BEBEBE"
        strokeWidth={2}
        strokeWidthSecondary={2}
      /> */}
    </Box>
  );
};
