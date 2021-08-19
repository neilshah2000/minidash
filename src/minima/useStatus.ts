import { Minima } from 'minima';
import { useState, useEffect } from 'react'


export const useStatus = () => {

    const [status, setStatus] = useState({})

    // console.log('useStatu')

    // Minima.init(function(msg){
    //     console.log('init', msg.event)
    // })

    // console.log(Minima)

    useEffect(() => {
        console.log('CALLING MINIMA INIT')
        Minima.init((something) => {
            console.log('minima init complete', something)
            Minima.cmd('status', (respJSON: any)=> {
                const status = respJSON;
                setStatus(status)
            })
        })
    },[])


    return { status };

}