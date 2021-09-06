import { useState }  from 'react';
import { useAppDispatch } from './../state/hooks'
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

import { Minima } from 'minima';
import RamChart from './RamChart';
import ChainSpeedChart from './ChainSpeedChart';
import ChainWeightChart from './ChainWeightChart';
import DifficultyChart from './DIfficultyChart';
import TransactionCountHistoryChart from './TransactionCountHistoryChart'
import LatestBlocks from './LatestBlocks';
import LatestTransactions from './LatestTransactions';
import CurrentChainData from './CurrentChainData'



function DashboardContent() {
  const dispatch = useAppDispatch()
  const [open, setOpen] = useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };


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

            <Grid item xs={12} md={12} lg={12}>
              <Paper>
                <CurrentChainData></CurrentChainData>
              </Paper>
            </Grid>

            <Grid item xs={12} md={6} lg={6}>
              <Paper>
                <LatestBlocks></LatestBlocks>
              </Paper>
            </Grid>

            <Grid item xs={12} md={6} lg={6}>
              <Paper>
                <LatestTransactions></LatestTransactions>
              </Paper>
            </Grid>

            <Grid item xs={12} md={12} lg={12}>
              <Paper>
                <RamChart></RamChart>
              </Paper>
            </Grid>
            
            <Grid item xs={12} md={6} lg={6}>
              <Paper>
                <ChainSpeedChart></ChainSpeedChart>
              </Paper>
            </Grid>

            <Grid item xs={12} md={6} lg={6}>
              <Paper>
                <ChainWeightChart></ChainWeightChart>
              </Paper>
            </Grid>

            <Grid item xs={12} md={12} lg={12}>
              <Paper>
                <DifficultyChart></DifficultyChart>
              </Paper>
            </Grid>

            <Grid item xs={12} md={12} lg={12}>
              <Paper>
                <TransactionCountHistoryChart></TransactionCountHistoryChart>
              </Paper>
            </Grid>

          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

export default DashboardContent;
