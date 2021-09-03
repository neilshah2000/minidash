
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/Inbox';
import { useAppSelector } from './../state/hooks'
import { selectDifficultyHistory } from './../state/minima.selector'



const BlockListItem = (props: {name: string}) => {


    return (
        <ListItem button>
            <ListItemIcon>
                <InboxIcon />
            </ListItemIcon>
            <ListItemText>{props.name}</ListItemText>
        </ListItem>
    );
}

export default BlockListItem