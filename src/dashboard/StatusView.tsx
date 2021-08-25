import Status from './types/Status'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { useStatus } from './../minima/useStatus'


const StatusView = () => {
    const myStatus = useStatus();
    console.log(myStatus)
    const status: Status = myStatus.status


    return (
        <div>
            <h1>Minima Status</h1>
            <Table>
                <TableBody>
                    <TableRow>
                        <TableCell>Automine</TableCell>
                        <TableCell>
                            <div>{status.automine ? 'true' : 'false'}</div>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Cascade</TableCell>
                        <TableCell>{status.cascade}</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>Chain Length</TableCell>
                        <TableCell>
                            <div>{status.chainlength}</div>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Chain Weight</TableCell>
                        <TableCell>{status.chainweight}</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>Conf</TableCell>
                        <TableCell>
                            <div>{status.conf}</div>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Connections</TableCell>
                        <TableCell>{status.connections}</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>Difficulty</TableCell>
                        <TableCell>
                            <div>{status.difficulty}</div>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Host</TableCell>
                        <TableCell>{status.host}</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>Last Block</TableCell>
                        <TableCell>
                            <div>{status.lastblock}</div>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Last Time</TableCell>
                        <TableCell>{status.lasttime}</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>Mempool Coins</TableCell>
                        <TableCell>
                            <div>{status.mempoolcoins}</div>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Mempool Transactions</TableCell>
                        <TableCell>{status.mempooltxn}</TableCell>
                    </TableRow>
                    

                    <TableRow>
                        <TableCell>Mini Dapp Server</TableCell>
                        <TableCell>
                            <div>{status.minidappserver}</div>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Minima Port</TableCell>
                        <TableCell>{status.minimaport}</TableCell>
                    </TableRow>
                    

                    <TableRow>
                        <TableCell>Ram</TableCell>
                        <TableCell>
                            <div>{status.ram}</div>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Root</TableCell>
                        <TableCell>{status.root}</TableCell>
                    </TableRow>
                    
                    <TableRow>
                        <TableCell>RPC Port</TableCell>
                        <TableCell>
                            <div>{status.rpcport}</div>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Time</TableCell>
                        <TableCell>{status.time}</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>Tip</TableCell>
                        <TableCell>
                            <div>{status.tip}</div>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Total</TableCell>
                        <TableCell>{status.total}</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>Tx POW DB</TableCell>
                        <TableCell>
                            <div>{status.txpowdb}</div>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Uptime</TableCell>
                        <TableCell>{status.uptime}</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>Version</TableCell>
                        <TableCell>
                            <div>{status.version}</div>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Web Socket Port</TableCell>
                        <TableCell>{status.websocketport}</TableCell>
                    </TableRow>
                    
                </TableBody>
            </Table>
        </div>
    )
}

export default StatusView