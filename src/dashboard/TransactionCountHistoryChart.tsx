import { Bar } from 'react-chartjs-2';
import { useAppSelector } from './../state/hooks'
import { selectTransactionCountHistory } from './../state/minima.selector'



const TransactionCountHistoryChart = () => {
    const transactionCountHistory = useAppSelector(selectTransactionCountHistory)

    // chart.js config
    const data: any = {
        labels: [],
        datasets: [{
            label: 'Transaction Count',
            data: [],
            fill: false,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgba(255, 99, 132, 0.2)',
        }]
    };

    const transactionCountData: any = transactionCountHistory.map((row: any) => {
        return row.data
    })
    const transactionCountDataLabels: any = transactionCountHistory.map((row: any) => row.label)

    data.datasets[0].data = transactionCountData
    data.labels = transactionCountDataLabels



    return (
        <>
            <div className='header'>
                <h1 className='title'>Transaction Count</h1>
            </div>
            <Bar data={data}/>
        </>
    );
}

export default TransactionCountHistoryChart