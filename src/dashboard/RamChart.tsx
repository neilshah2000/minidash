import react from 'react';
import { Line } from 'react-chartjs-2';
import { useAppSelector } from './../state/hooks'
import { selectRamHistory } from './../state/minima.selector'




const RamChart = () => {
    const ramHistory = useAppSelector(selectRamHistory)

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
    const ramData: any = ramHistory.map((row: any) => {
        return { x: row.x, y: row.y }
    })
    const ramDataLabels: any = ramHistory.map((row: any) => row.label)
    data.datasets[0].data = ramData
    data.labels = ramDataLabels



    return (
        <>
            <div className='header'>
                <h1 className='title'>RAM</h1>
            </div>
            <Line data={data}/>
        </>
    );
}

export default RamChart