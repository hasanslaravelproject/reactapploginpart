import PageTemplate from "../templates/Template";
import StudentsTable from "./StudentsTable";
import React from "react";

const StudentsPage = (props) => {
    return(
    <PageTemplate title="Students List">
        <StudentsTable/>
    </PageTemplate>)
}
export default StudentsPage;
