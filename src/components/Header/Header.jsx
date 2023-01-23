// import { Container, Toolbar } from '@mui/material';
// import Bar from '@mui/material/AppBar';
import { AppBar, Container } from '@mui/material';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/selectors';

export const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <AppBar component="header" position="relative" sx={{ pb: '30px', pt: 2 }}>
      <Container
        position="relative"
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Container>
    </AppBar>
    // <Bar position="static">
    //   <Container
    //     maxWidth="lg"
    //     sx={{
    //       textTransform: 'uppercase',
    //       mt: '16px',
    //       mb: '16px',
    //     }}
    //   >
    //     <Toolbar
    //       sx={{
    //         justifyContent: 'space-between',
    //         flexWrap: 'wrap',
    //       }}
    //     >
    //       <Navigation />
    //       {isLoggedIn ? <UserMenu /> : <AuthNav />}
    //     </Toolbar>
    //   </Container>
    // </Bar>
  );
};
