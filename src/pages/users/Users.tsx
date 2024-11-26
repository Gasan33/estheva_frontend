import { GridColDef } from "@mui/x-data-grid";
import DataTable from "../../components/dataTable/DataTable";
import "./users.scss";
// import { userRows } from "../../data";
import { useState } from "react";
import Add from "../../components/add/Add";
import { useQuery } from "react-query";

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 60 },
    {
        field: 'img', headerName: 'Avatar', width: 56,
        renderCell: (params) => {
            return <img src={params.row.img || "/noavatar.png"} alt="" />
        },
    },


    {
        field: 'firstName',
        headerName: 'First name',
        width: 100,
        editable: true,
        type: "string"
    },
    {
        field: 'lastName',
        headerName: 'Last name',
        width: 100,
        editable: true,
        type: "string"
    },
    {
        field: 'email',
        headerName: 'Email',
        width: 160,
        editable: true,
        type: "string"
    },
    {
        field: 'phone',
        headerName: 'Phone',
        // type: 'number',
        width: 160,
        editable: true,
        type: "string"
    },
    {
        field: 'createdAt',
        headerName: 'Created At',
        width: 160,
        type: "string"
    },
    {
        field: 'verfied', headerName: 'Verfied', width: 90,
        type: "boolean"
    },


];

const Users = () => {
    const [open, setOpen] = useState(false)

    // TEST THE API

    const { isLoading, data } = useQuery({
        queryKey: ["allusers"],
        queryFn: () =>
            fetch("http://localhost:8800/api/users").then(
                (res) => res.json()
            ),
    });

    return (
        <div className="users">
            <div className="info">
                <h1>Users</h1>
                <button onClick={() => setOpen(true)}>Add New User</button>
            </div>
            {/* <DataTable slug="users" columns={columns} rows={userRows} /> */}
            {isLoading ? (
                "Loading..."
            ) : (
                <DataTable slug="users" columns={columns} rows={data} />
            )}
            {open && <Add slug="user" columns={columns} setOpen={setOpen} />}
        </div>
    )
}

export default Users


