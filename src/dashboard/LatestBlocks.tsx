
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/Inbox';
import { useAppSelector } from './../state/hooks'
import { selectDifficultyHistory } from './../state/minima.selector'
import BlockListItem from './BlockListItem';
import { selectLastTenBlocks } from './../state/minima.selector'


const LatestBlocks = () => {
    const myLatestBlocks = useAppSelector(selectLastTenBlocks)

    const blockItems = myLatestBlocks.map((block: any, i: number) => <BlockListItem name={block.header.block} key={i}></BlockListItem>)

    // pad block list
    const padBlockCount = 10 - blockItems.length
    for(let i=0; i<padBlockCount; i++) {
        blockItems.push(<BlockListItem name='..waiting for block' key={i+10}></BlockListItem>)
    }

    return (
        <>
            <div className='header'>
                <h1 className='title'>Latest Blocks</h1>
            </div>
            <List>
                {blockItems}
            </List>
        </>
    );
}

export default LatestBlocks