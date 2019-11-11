import React from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import WorksGridItems from "./sub/ProjectGridItems";
import { desktopApps, others, webApps } from '../vars/projectItems'


const styles = theme => ({
    root: {
        flexGrow: 1,
    },
});

const Projects = (props) => (
    <Grid>
        <WorksGridItems name='Desktop Apps/Scripts' list={desktopApps} margins={1} />
        <WorksGridItems name='Web Apps' list={webApps} margins={1} />
        <WorksGridItems name='Others' list={others} margins={2} />
    </Grid>
);

Projects.propTypes = {};

export default withStyles(styles)(Projects);