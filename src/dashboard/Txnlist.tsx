import { useAppSelector } from './../state/hooks'
import { selectTxnList } from './../state/minima.selector'



const Txnlist = () => {
    const txnList = useAppSelector(selectTxnList)

    console.log('txnList', txnList)

    return (
        <>
        </>
    );
}

export default Txnlist