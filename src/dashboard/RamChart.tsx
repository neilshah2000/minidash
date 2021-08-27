import react from 'react';
import { Line } from 'react-chartjs-2';
import { useAppSelector } from './../state/hooks'
import { StatusHistory } from '../state/types/StatusHistory';
import { format } from 'date-fns'




const RamChart = () => {
    const statusHistory = useAppSelector(state => state.minima.statusHistory)

    // chart.js config
    const data: any = {
        labels: [],
        datasets: [{
            label: 'RAM',
            data: [],
            fill: false,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgba(255, 99, 132, 0.2)',
        }]
    };

    // add our ram data to chart.js config
    const ramData: any = []
    const ramDataLabels: any = []
    statusHistory.forEach((row: StatusHistory) => {
        ramData.push({
            x: row.time,
            y: row.ram
        })
        const dStr = format(row.time,'MMM dd, HH:mm:ss')
        ramDataLabels.push(dStr)
    })
    data.datasets[0].data = ramData
    data.labels = ramDataLabels



    return (
        <>
            <div className='header'>
                <h1 className='title'>Status Info - RAM</h1>
            </div>
            <Line data={data}/>
        </>
    );
}

export default RamChart