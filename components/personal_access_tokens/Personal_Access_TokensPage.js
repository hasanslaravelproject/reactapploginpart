import PageTemplate from "../templates/Template";
import Personal_Access_TokensTable from "./Personal_Access_TokensTable";
import React from "react";

const Personal_Access_TokensPage = (props) => {
    return(
    <PageTemplate title="Personal_Access_Tokens List">
        <Personal_Access_TokensTable/>
    </PageTemplate>)
}
export default Personal_Access_TokensPage;
