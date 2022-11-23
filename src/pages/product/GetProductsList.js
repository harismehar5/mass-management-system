import React, { useEffect, useState } from "react";
import axios from "axios";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

// import "./styles.scss";
import DataTable from "../../components/dataTable/DataTable";
// import Sidebar from "../../components/sidebar/SideBar";
// import Navbar from "../../components/navbar/Navbar";
import { productColumns } from "../../dataTableColumns";

// import {
//   DELETE_CUSTOMER_BY_ID,
//   GET_CUSTOMERS_LIST,
//   UPDATE_CUSTOMER_BY_ID,
// } from "../../utils/config";
import ListHeader from "../../components/listHeader/ListHeader";
import SnackBar from "../../components/alert/SnackBar";
import Popup from "../../components/popup/Popup";

export default function GetProductsList() {
    const [data, setData] = useState( [
        {
            "_id": "633bdb3cc629d9c21a646faa",
            "name": "Product B",
            "price": 100,
            "quantity": 14,
            "status": true,
            "stock_log": [],
            "__v": 0
        },
        {
            "_id": "63515dc46eabf8471c790bcc",
            "name": "Product B",
            "price": 1200,
            "quantity": 20,
            "status": true,
            "stock_log": [],
            "__v": 0
        }
    ]);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("");
  useEffect(() => {
    // getStockList();
  }, [data]);

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 250,
      renderCell: (params) => {
        return (
          <div className="cell-action">
            {/* <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="view-button">View</div>
            </Link> */}
            {/* <Button
              size="small"
              variant="contained"
              startIcon={<RemoveRedEyeOutlinedIcon />}
            >
              View
            </Button> */}
            <IconButton aria-label="delete" size="medium">
              <EditIcon fontSize="inherit" />
            </IconButton>
            <IconButton
              aria-label="delete"
              size="medium"
              onClick={() => deleteProduct(params.row._id)}
            >
              <DeleteIcon fontSize="inherit" />
            </IconButton>
            {/* <div
              className="delete-button"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div> */}
          </div>
        );
      },
    },
  ];

  const getStockList = () => {
    axios
      .get("https://summer-asia.herokuapp.com/product/get_products")
      .then(function (response) {
        if (response.data.error) {
          console.log(response.data.error_msg);
        } else {
          setData(response.data.products);
        }
      })
      .catch(function (error) {
        console.log("error: " + error);
      });
  };
  const deleteProduct = (id) => {
    axios
      .delete("https://summer-asia.herokuapp.com/product/" + id)
      .then(function (response) {
        if (response.data.error) {
          console.log(response.data.error_msg);
          setOpen(true);
          setMessage(response.data.error_msg);
          setSeverity("error");
        } else {
          setOpen(true);
          setMessage(response.data.success_msg);
          setSeverity("success");
        }
      })
      .catch(function (error) {
        console.log("error: " + error);
        setOpen(true);
        setMessage(error);
        setSeverity("error");
      });
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  return (
    <div className="list">
      {/* <Sidebar /> */}
      <div className="list-container">
        {/* <Navbar /> */}
        <ListHeader
          header={"Products List"}
          firstButton={true}
          firstButtonText={"Add New Product"}
        />
        <DataTable
          data={data}
          columns={productColumns.concat(actionColumn)}
          isForTransaction={false}
          loading={!data.length}
        />
        <SnackBar
          open={open}
          severity={severity}
          message={message}
          handleClose={handleClose}
        />
      </div>
    </div>
  );
}
