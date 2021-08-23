import Status from './types/Status'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';



const StatusView = (props: {status: Status}) => {
    console.log('status props', props)
    return (
        <div>
            <h1>Minima Status</h1>
            <Table>
                <TableBody>
                    <TableRow>
                        <TableCell>Automine</TableCell>
                        <TableCell>
                            <div>{props.status.automine ? 'true' : 'false'}</div>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Cascade</TableCell>
                        <TableCell>{props.status.cascade}</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>Chain Length</TableCell>
                        <TableCell>
                            <div>{props.status.chainlength}</div>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Chain Weight</TableCell>
                        <TableCell>{props.status.chainweight}</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>Conf</TableCell>
                        <TableCell>
                            <div>{props.status.conf}</div>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Connections</TableCell>
                        <TableCell>{props.status.connections}</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>Difficulty</TableCell>
                        <TableCell>
                            <div>{props.status.difficulty}</div>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Host</TableCell>
                        <TableCell>{props.status.host}</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>Last Block</TableCell>
                        <TableCell>
                            <div>{props.status.lastblock}</div>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Last Time</TableCell>
                        <TableCell>{props.status.lasttime}</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>Mempool Coins</TableCell>
                        <TableCell>
                            <div>{props.status.mempoolcoins}</div>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Mempool Transactions</TableCell>
                        <TableCell>{props.status.mempooltxn}</TableCell>
                    </TableRow>
                    

                    <TableRow>
                        <TableCell>Mini Dapp Server</TableCell>
                        <TableCell>
                            <div>{props.status.minidappserver}</div>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Minima Port</TableCell>
                        <TableCell>{props.status.minimaport}</TableCell>
                    </TableRow>
                    

                    <TableRow>
                        <TableCell>Ram</TableCell>
                        <TableCell>
                            <div>{props.status.ram}</div>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Root</TableCell>
                        <TableCell>{props.status.root}</TableCell>
                    </TableRow>
                    
                    <TableRow>
                        <TableCell>RPC Port</TableCell>
                        <TableCell>
                            <div>{props.status.rpcport}</div>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Time</TableCell>
                        <TableCell>{props.status.time}</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>Tip</TableCell>
                        <TableCell>
                            <div>{props.status.tip}</div>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Total</TableCell>
                        <TableCell>{props.status.total}</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>Tx POW DB</TableCell>
                        <TableCell>
                            <div>{props.status.txpowdb}</div>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Uptime</TableCell>
                        <TableCell>{props.status.uptime}</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>Version</TableCell>
                        <TableCell>
                            <div>{props.status.version}</div>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Web Socket Port</TableCell>
                        <TableCell>{props.status.websocketport}</TableCell>
                    </TableRow>
                    
                </TableBody>
            </Table>
        </div>
    )
}

export default StatusView