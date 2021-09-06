
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/Inbox';
import { useAppSelector } from '../state/hooks'
import { selectDifficultyHistory } from '../state/minima.selector'
import TransactionListItem from './TransactionListItem'
import { selectLastTenTransactions } from './../state/minima.selector'



const LatestTransactions = () => {
    const myLatestTransactions = useAppSelector(selectLastTenTransactions)

    const transactionItems = myLatestTransactions.map((transaction: any, i: number) => <TransactionListItem name={transaction} key={i}></TransactionListItem>)

    // pad block list
    const padBlockCount = 10 - transactionItems.length
    for(let i=0; i<padBlockCount; i++) {
        transactionItems.push(<TransactionListItem name='..waiting for transaction' key={i+10}></TransactionListItem>)
    }



    return (
        <>
            <div className='header'>
                <h1 className='title'>Latest Transactions</h1>
            </div>
            <List>
                {transactionItems}
            </List>
        </>
    );
}

export default LatestTransactions