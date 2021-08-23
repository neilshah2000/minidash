import { Minima } from 'minima';
import { useState, useEffect } from 'react'
import Info from './../dashboard/types/Info'
import TxPow from './../dashboard/types/TxPow'
import MinEvent from './../dashboard/types/MinEvent'
import Status from './../dashboard/types/Status'


export const useStatus = () => {

    const [status, setStatus] = useState(new Status(false))
    const [initEvent, setInitEvent] = useState(new MinEvent('-', new Info(new TxPow('', false, false, false, 0, 0))))

    // console.log('useStatu')

    // Minima.init(function(msg){
    //     console.log('init', msg.event)
    // })

    // console.log(Minima)

    useEffect(() => {
        console.log('CALLING MINIMA INIT')
        Minima.init((msg) => {
            console.log('minima init complete', msg)
            if (msg.event === 'connected') {
                console.log('MINIMA CONNECTION EVENT')
            } else {
                console.log('setting init event', msg)
                setInitEvent(new MinEvent(msg.event, new Info(new TxPow(
                    msg.info.txpow.txpowid,
                    msg.info.txpow.hasbody,
                    msg.info.txpow.isblock,
                    msg.info.txpow.istransaction,
                    msg.info.txpow.size,
                    msg.info.txpow.superblock
                ))))
            }

            Minima.cmd('status', (respJSON: any)=> {
                const status = respJSON.response;
                const mStatus = new Status(status.automine, status.cascade, status.chainlength, status.chainspeed, status.chainweight, status.conf, status.connections, status.difficulty, status.host, status.lastblock, status.lasttime, status.mempoolcoins, status.mempooltxn, status.minidappserver, status.minimaport, status.ram, status.root, status.rpcport, status.time, status.tip, status.total, status.txpowdb, status.uptime, status.version, status.websocketport)
                setStatus(mStatus)
            })
        })
    },[])


    return {
        status,
        initEvent
    };

}