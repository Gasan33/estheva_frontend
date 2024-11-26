import { useState } from "react";
import "./services.scss";
import DataTable from "../../components/dataTable/DataTable";
import Add from "../../components/add/Add";
import { GridColDef } from "@mui/x-data-grid";
import { serviceRows } from "../../data";
import { useQuery } from "react-query";

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

const Services = () => {
    const [open, setOpen] = useState(false)

    const { isLoading, data } = useQuery({
        queryKey: ["allservices"],
        queryFn: () =>
            fetch("https://esthevapolyclinic.wuaze.com/api/v1/services",
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    }
                }
            ).then(
                (res) => {
                    res.json();
                    console.log(data);
                }

            ),

    });

    return (
        <div className="services">
            <div className="info">
                <h1>Services</h1>
                <button onClick={() => setOpen(true)}>Add New Service</button>
            </div>
            <DataTable slug="services" columns={columns} rows={serviceRows} />
            {open && <Add slug="service" columns={columns} setOpen={setOpen} />}
        </div>
    )
}

export default Services