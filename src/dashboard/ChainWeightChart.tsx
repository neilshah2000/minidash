import { Line } from 'react-chartjs-2';
import { useAppSelector } from './../state/hooks'
import { selectChainWeightHistory } from './../state/minima.selector'



const ChainWeightChart = () => {
    const chainWeightHistory = useAppSelector(selectChainWeightHistory)

    // chart.js config
    const data: any = {
        labels: [],
        datasets: [{
            label: 'Chain Weight',
            data: [],
            fill: false,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgba(255, 99, 132, 0.2)',
        }]
    };

    const chainWeightData: any = chainWeightHistory.map((row: any) => {
        return { x: row.x, y: row.y }
    })
    const chainWeightDataLabels: any = chainWeightHistory.map((row: any) => row.label)

    data.datasets[0].data = chainWeightData
    data.labels = chainWeightDataLabels



    return (
        <>
            <div className='header'>
                <h1 className='title'>Chain Weight</h1>
            </div>
            <Line data={data}/>
        </>
    );
}

export default ChainWeightChart