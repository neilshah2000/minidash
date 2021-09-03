
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/Inbox';
import { useAppSelector } from '../state/hooks'
import { selectDifficultyHistory } from '../state/minima.selector'



const LatestTransactions = () => {




    return (
        <>
            <div className='header'>
                <h1 className='title'>Latest Transactions</h1>
            </div>
            <List>
                <ListItem button>
                    <ListItemIcon>
                        <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Inbox" />
                </ListItem>
            </List>
        </>
    );
}

export default LatestTransactions