import MinEvent from './types/MinEvent'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';



const MinEventView = (props: {minEvent: MinEvent}) => {
    console.log('MinEventView props', props)
    return (
        <div>
            <h1>Minima Event View</h1>
            <h3>{props.minEvent.eventname}</h3>
            <Table>
                <TableBody>
                    <TableRow>
                        <TableCell>TxPowId</TableCell>
                        <TableCell>
                            <div>{props.minEvent.info.txpow.txpowid}</div>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Has Body</TableCell>
                        <TableCell>{props.minEvent.info.txpow.hasbody ? 'true' : 'false'}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Is Block</TableCell>
                        <TableCell>{props.minEvent.info.txpow.isblock ? 'true' : 'false'}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Is Transaction</TableCell>
                        <TableCell>{props.minEvent.info.txpow.istransaction ? 'true' : 'false'}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Size</TableCell>
                        <TableCell>{props.minEvent.info.txpow.size}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Super Block</TableCell>
                        <TableCell>{props.minEvent.info.txpow.superblock}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    )
}

export default MinEventView