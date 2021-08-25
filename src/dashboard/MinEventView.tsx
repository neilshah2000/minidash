import MinEvent from './types/MinEvent'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { useStatus } from './../minima/useStatus'




const MinEventView = () => {
    const myStatus = useStatus();
    console.log(myStatus)
    const initEvent: MinEvent = myStatus.initEvent


    return (
        <div>
            <h1>Minima Event View</h1>
            <h3>{initEvent.eventname}</h3>
            <Table>
                <TableBody>
                    <TableRow>
                        <TableCell>TxPowId</TableCell>
                        <TableCell>
                            <div>{initEvent.info.txpow.txpowid}</div>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Has Body</TableCell>
                        <TableCell>{initEvent.info.txpow.hasbody ? 'true' : 'false'}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Is Block</TableCell>
                        <TableCell>{initEvent.info.txpow.isblock ? 'true' : 'false'}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Is Transaction</TableCell>
                        <TableCell>{initEvent.info.txpow.istransaction ? 'true' : 'false'}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Size</TableCell>
                        <TableCell>{initEvent.info.txpow.size}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Super Block</TableCell>
                        <TableCell>{initEvent.info.txpow.superblock}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    )
}

export default MinEventView