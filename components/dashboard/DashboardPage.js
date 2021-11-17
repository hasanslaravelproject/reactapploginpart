import PageTemplate from "../templates/Template";
import React from "react";
import Grid from "@material-ui/core/Grid";
import DashCard from "./DashboardCard"

const DashboardPage = () => {

    return(
    <PageTemplate title="Dashboard">
    <Grid container direction="row"  justify="center" alignItems="center">
    <DashCard pagename='failed_jobs'/>
<DashCard pagename='migrations'/>
<DashCard pagename='password_resets'/>
<DashCard pagename='personal_access_tokens'/>
<DashCard pagename='students'/>
<DashCard pagename='users'/>

    
    
    
    </Grid>
    </PageTemplate>)
}
export default DashboardPage;

