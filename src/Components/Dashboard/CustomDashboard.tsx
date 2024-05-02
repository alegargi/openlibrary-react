
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import DashboardMenu from './DashboardMenu';
import { capitalizeFirstChar } from '../Utils/Functions';


const AppBar = styled(MuiAppBar)<MuiAppBarProps>(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  // marginLeft: 240,
  width: '100%',
}));

export default function CustomDashboard() {
  console.log("CustomDashboard", location.pathname)
  return (
<>
    <Box sx={{ display: 'flex' }}>
      <AppBar position="absolute">
        <Toolbar
          sx={{
            pr: '24px',
          }}
        >
          <DashboardMenu />
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1 }}
            marginLeft={5}
          >
            {/* uso op ternario poichè sulla home non avrò una location da mostrare / */}
            {/* uso lo slice per rimuovere carattere */}
            {location.pathname === "/" ? "Dashboard" : capitalizeFirstChar(location.pathname.slice(1)) }
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          px: [1],
        }}
      >
      </Toolbar>
      <Toolbar />
    </Box>
</>
  );
}