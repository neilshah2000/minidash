
import { Card } from "@material-ui/core";
import { CardContent } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { selectStatus } from './../state/minima.selector'
import { useAppSelector } from '../state/hooks'



const CurrentChainData = () => {
    const currentStatus = useAppSelector(selectStatus)

    return (
        <Card>
            <CardContent>
                <Grid container>
                    <Grid item lg={3}>
                        <Typography variant="h6">Version</Typography>
                        <Typography variant="h5">{currentStatus ? currentStatus.version : ''}</Typography>
                    </Grid>
                    <Grid item lg={3}>
                        <Typography variant="h6">Ram</Typography>
                        <Typography variant="h5">{currentStatus ? currentStatus.ram : ''}</Typography>
                    </Grid>
                    <Grid item lg={3}>
                        <Typography variant="h6">Difficulty</Typography>
                        <Typography variant="h5">{currentStatus ? parseInt(currentStatus.difficulty, 16) : ''}</Typography>
                    </Grid>
                    <Grid item lg={3}>
                        <Typography variant="h6">Mempool Transactions</Typography>
                        <Typography variant="h5">{currentStatus ? currentStatus.mempooltxn : ''}</Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}

export default CurrentChainData