import MaterialTable from "material-table";
import React, { useEffect, useState } from "react";
import tableIcons from "../templates/TableIcons";
import getColumns from "./UsersColumns";
import Edit from "@material-ui/icons/Edit";
import { Switch } from "@material-ui/core";
import { withRouter } from "react-router";
import { AddBox } from "@material-ui/icons";
import { deleteUsers, getUsers } from "../../repo/usersRepo";
import { Loading } from "../templates/Loading";
/*
Documentation on developing the Material-Table can be found at https://material-table.com/
*/
const UsersTable = (props) => {
    const history = props.history;
    const [columns, setColumns] = useState(getColumns({}));
    const [loading, setLoading] = useState(false);
    //Here we call delete
    const handleRowDelete = (oldData, resolve) => {
        setLoading(true);
        deleteUsers(oldData.id)
            .then((res) => {
                resolve();
                setLoading(false);
            })
            .catch((error) => {
                resolve();
                setLoading(false);
            });
    };

    return (
        <div>
            <MaterialTable
                minRows={20}
                title="Users Data"
                columns={columns}
                data={async (query) => {
                    setLoading(true);
                    const res = await getUsers(
                        query.page,
                        query.pageSize,
                        query.search
                    );
                    console.log("res", res);
                    setLoading(false);
                    return {
                        data: res.data,
                        page: query.page,
                        totalCount: parseInt(res.meta.total),
                    };
                }}
                options={{
                    sorting: true,
                    actionsColumnIndex: -1,
                    pageSize: 20,
                    toolbar: true,
                    paging: true,
                }}
                actions={[
                    {
                        icon: () => <Edit />,
                        tooltip: "Edit",
                        onClick: (event, rowData) => {
                            history.push({
                                pathname: `/users/update/${rowData.id}`,
                                user: rowData,
                            });
                        },
                    },
                    {
                        icon: () => (
                            <AddBox variant="contained" color="secondary" />
                        ),
                        tooltip: "Add New",
                        // This makes add button to appear in table toolbar instead for each row
                        isFreeAction: true,
                        onClick: (event, rowData) => {
                            history.push("/users/add");
                        },
                    },
                ]}
                icons={tableIcons}
                editable={{
                    onRowDelete: (oldData) =>
                        new Promise((resolve) => {
                            handleRowDelete(oldData, resolve);
                        }),
                }}
            />
        </div>
    );
};
export default withRouter(UsersTable);
