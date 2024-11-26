import { useState } from 'react';
import './categories.scss';
import DataTable from "../../components/dataTable/DataTable";
import Add from "../../components/add/Add";
import { GridColDef } from "@mui/x-data-grid";
import { serviceRows } from "../../data";


const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 60 },
    {
        field: 'img', headerName: 'Image', width: 56,
        renderCell: (params) => {
            return <img src={params.row.img} alt="" />
        },
    },
    {
        field: 'title',
        headerName: 'Title',
        type: "string",
        width: 250,
    },
    {
        field: 'price',
        headerName: 'Price',
        width: 100,
        type: "string"
    },
    {
        field: 'createdAt',
        headerName: 'Created At',
        width: 160,
        type: "string"
    },


];

const Categories = () => {
    const [open, setOpen] = useState(false)

    return (
        <div className='categories'>
            <div className="info">
                <h1>Categories</h1>
                <button onClick={() => setOpen(true)}>Add New Category</button>
            </div>
            <DataTable slug="categories" columns={columns} rows={serviceRows} />
            {open && <Add slug="category" columns={columns} setOpen={setOpen} />}
        </div>
    )
}

export default Categories