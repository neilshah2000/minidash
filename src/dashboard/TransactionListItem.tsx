
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import TransactionIcon from '@material-ui/icons/Payment';
import { useAppSelector } from './../state/hooks'
import { selectDifficultyHistory } from './../state/minima.selector'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      overflow: 'hidden',
      textOverflow: 'elipses'
    },
  }));


const TransactionListItem = (props: {name: string}) => {
    const classes = useStyles();

    return (
        <ListItem button>
            <ListItemIcon>
                <TransactionIcon />
            </ListItemIcon>
            <ListItemText className={classes.root}>{props.name}</ListItemText>
        </ListItem>
    );
}

export default TransactionListItem