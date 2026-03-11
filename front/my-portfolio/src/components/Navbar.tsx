import { AppBar, Toolbar, Typography, Switch, Box, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { Brightness4, Brightness7 } from '@mui/icons-material';

type Props = {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
};

export default function Navbar({ darkMode, setDarkMode }: Props) {
  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: '#1a1a2e',
        color: '#f5f5f5',
        boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
        zIndex: 1301,
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{ textDecoration: 'none', color: 'inherit', fontWeight: 'bold' }}
        >
          Ibtissam bellous
        </Typography>

        

      </Toolbar>
    </AppBar>
  );
}