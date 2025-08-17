

import React from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Box, Card, CardContent, Typography, Button, BottomNavigation, BottomNavigationAction, Avatar, Container } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import PaymentIcon from '@mui/icons-material/Payment';


const mockPayments = [
  { month: 'June 2025', amount: 1200, status: 'Paid' },
  { month: 'July 2025', amount: 1200, status: 'Paid' },
];
const currentDue = { month: 'August 2025', amount: 1200, status: 'Due' };




function App() {
  const [navValue, setNavValue] = React.useState(0);
  return (
    <Container maxWidth="sm" disableGutters sx={{ bgcolor: '#f7f8fa', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', px: 0 }}>
      <Box sx={{ pt: 3, pb: 10 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
          <Avatar src={reactLogo} sx={{ width: 48, height: 48, mr: 1 }} />
          <Typography variant="h5" fontWeight={700}>Maintenance Summary</Typography>
        </Box>
        <Card sx={{ mb: 3, borderRadius: 3, boxShadow: 2 }}>
          <CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <PaymentIcon color="primary" />
              <Typography variant="h6" sx={{ ml: 1 }}>Past Payments</Typography>
            </Box>
            <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
              {mockPayments.map((p, idx) => (
                <Box component="li" key={idx} sx={{ display: 'grid', gridTemplateColumns: '1fr 80px 1fr', alignItems: 'center', mb: 1, fontSize: 16 }}>
                  <Typography sx={{ textAlign: 'left' }}>{p.month}</Typography>
                  <Typography sx={{ color: 'green', fontWeight: 500, textAlign: 'center' }}>{p.status}</Typography>
                  <Typography sx={{ fontWeight: 600, textAlign: 'right' }}>₹{p.amount}</Typography>
                </Box>
              ))}
            </Box>
          </CardContent>
        </Card>
        <Card sx={{ mb: 3, borderRadius: 3, boxShadow: 2 }}>
          <CardContent>
            <Typography variant="h6" sx={{ mb: 2 }}>Current Due</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', bgcolor: '#ffeaea', p: 1.5, borderRadius: 2, fontSize: 16 }}>
              <Typography>{currentDue.month}</Typography>
              <Typography sx={{ color: 'red', fontWeight: 500 }}>{currentDue.status}</Typography>
              <Typography sx={{ fontWeight: 600 }}>₹{currentDue.amount}</Typography>
            </Box>
          </CardContent>
        </Card>
        <Box sx={{ textAlign: 'center', mt: 2 }}>
          <Button variant="contained" color="primary" size="large" sx={{ borderRadius: 2, fontWeight: 'bold', fontSize: 18, boxShadow: 2 }}>
            Make Payment
          </Button>
        </Box>
      </Box>
      <BottomNavigation
        value={navValue}
        onChange={(event, newValue) => setNavValue(newValue)}
        showLabels
        sx={{ position: 'fixed', left: 0, bottom: 0, width: '100%', borderTop: '1px solid #eee', boxShadow: 2 }}
      >
        <BottomNavigationAction label="Profile" icon={<AccountCircleIcon />} />
        <BottomNavigationAction label="Settings" icon={<SettingsIcon />} />
      </BottomNavigation>
    </Container>
  );
}

export default App
