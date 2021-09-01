import { Line } from 'react-chartjs-2';
import { useAppSelector } from './../state/hooks'
import { selectChainSpeedHistory } from './../state/minima.selector'



const ChainSpeedChart = () => {
    const chainSpeedHistory = useAppSelector(selectChainSpeedHistory)

    // chart.js config
    const data: any = {
        labels: [],
        datasets: [{
            label: 'Chain Speed',
            data: [],
            fill: false,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgba(255, 99, 132, 0.2)',
        }]
    };

    const chainSpeedData: any = chainSpeedHistory.map((row: any) => {
        return { x: row.x, y: row.y }
    })
    const chainSpeedDataLabels: any = chainSpeedHistory.map((row: any) => row.label)

    data.datasets[0].data = chainSpeedData
    data.labels = chainSpeedDataLabels



    return (
        <>
            <div className='header'>
                <h1 className='title'>Chain Speed</h1>
            </div>
            <Line data={data}/>
        </>
    );
}

export default ChainSpeedChart