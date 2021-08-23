import * as React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Button from '@material-ui/core/Button';

import MinEventView from './MinEventView'
import MinEvent from './types/MinEvent'
import StatusView from './StatusView'
import Status from './types/Status'
import { useStatus } from './../minima/useStatus'
import { Minima } from 'minima';



function DashboardContent() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const myStatus = useStatus();
  console.log(myStatus)
  const status: Status = myStatus.status
  const initEvent: MinEvent = myStatus.initEvent

  const onButtonClick = () => {
    console.log('BUTTON CLICKED!!')
    Minima.sql('SELECT * FROM txpowlist;', (res) => {
      console.log(res);
    })
  }


  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar>
        <Toolbar>
          <IconButton onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
          <Typography>
            Dashboard
          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>

      <Box>
        <Toolbar />
        
        <Container>

          <Grid container spacing={3}>
            <Grid item xs={12} md={8} lg={9}>
              <Button onClick={onButtonClick} variant="contained" color="primary">Call SQL</Button>
            </Grid>
            
            <Grid item xs={12} md={8} lg={9}>
              <Paper>
                <MinEventView minEvent={initEvent}></MinEventView>
              </Paper>
            </Grid>

            <Grid item xs={12} md={4} lg={3}>
              <Paper>
                <StatusView status={status}></StatusView>
              </Paper>
            </Grid>

          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

export default DashboardContent;
