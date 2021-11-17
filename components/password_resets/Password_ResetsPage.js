import PageTemplate from "../templates/Template";
import Password_ResetsTable from "./Password_ResetsTable";
import React from "react";

const Password_ResetsPage = (props) => {
    return(
    <PageTemplate title="Password_Resets List">
        <Password_ResetsTable/>
    </PageTemplate>)
}
export default Password_ResetsPage;
