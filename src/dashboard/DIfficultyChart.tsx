import { Line } from 'react-chartjs-2';
import { useAppSelector } from './../state/hooks'
import { selectDifficultyHistory } from './../state/minima.selector'



const DifficultyChart = () => {
    const difficultyHistory = useAppSelector(selectDifficultyHistory)

    // chart.js config
    const data: any = {
        labels: [],
        datasets: [{
            label: 'Difficulty',
            data: [],
            fill: false,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgba(255, 99, 132, 0.2)',
        }]
    };

    const difficultyData: any = difficultyHistory.map((row: any) => {
        return { x: row.x, y: row.y }
    })
    const difficultyDataLabels: any = difficultyHistory.map((row: any) => row.label)

    data.datasets[0].data = difficultyData
    data.labels = difficultyDataLabels



    return (
        <>
            <div className='header'>
                <h1 className='title'>Difficulty</h1>
            </div>
            <Line data={data}/>
        </>
    );
}

export default DifficultyChart