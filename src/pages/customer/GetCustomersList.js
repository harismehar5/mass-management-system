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
import { userColumns } from "../../dataTableColumns";

// import {
//   DELETE_CUSTOMER_BY_ID,
//   GET_CUSTOMERS_LIST,
//   UPDATE_CUSTOMER_BY_ID,
// } from "../../utils/config";
import ListHeader from "../../components/listHeader/ListHeader";
import SnackBar from "../../components/alert/SnackBar";
import Popup from "../../components/popup/Popup";

export default function GetCustomersList() {
  const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(false);
  const [openPopup, setOpenPopup] = useState(false);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [openingBalance, setOpeningBalance] = useState("");
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("");
  var customer = {
    name: "",
    phone: "",
    address: "",
    opening_balance: "",
  };
  useEffect(() => {
    getCustomersList();
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
            <IconButton
              aria-label="edit"
              size="medium"
              onClick={() => editCustomer(params.row)}
            >
              <EditIcon fontSize="inherit" />
            </IconButton>
            <IconButton
              aria-label="delete"
              size="medium"
              onClick={() => deleteCustomer(params.row._id)}
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

  const getCustomersList = () => {
    // setLoading(true);
    axios
      .get("https://summer-asia.herokuapp.com/customer/get_customers")
      .then(function (response) {
        if (response.data.error) {
          console.log(response.data.error_msg);
          // setLoading(false);
        } else {
          setData(response.data.customers);
          // setLoading(false);
        }
      })
      .catch(function (error) {
        // setLoading(false);
        console.log("error: " + error);
      });
  };
  const deleteCustomer = (id) => {
    axios
      .delete("https://summer-asia.herokuapp.com/customer/" + id)
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
  const updateCustomer = () => {
    customer = {
      name: name,
      phone: phone,
      address: address,
      opening_balance: openingBalance,
    };
    axios
      .patch("https://summer-asia.herokuapp.com/customer/" + id, customer)
      .then(function (response) {
        if (response.data.error) {
          console.log(response.data.error_msg);
          setOpen(true);
          setMessage(response.data.error_msg);
          setSeverity("error");
        } else {
          console.log(response);
          setOpen(true);
          setMessage(response.data.success_msg);
          setSeverity("success");
          setOpenPopup(false);
          setId("");
          setName("");
          setPhone("");
          setAddress("");
          setOpeningBalance("");
        }
      })
      .catch(function (error) {
        console.log("error: " + error);
        setOpen(true);
        setMessage("error: " + error);
        setSeverity("error");
      });
  };

  const validation = () => {
    if (
      name.length === 0 ||
      phone.length === 0 ||
      address.length === 0 ||
      openingBalance.length === 0
    ) {
      setOpen(true);
      setMessage("Some fields are missing");
      setSeverity("error");
    } else {
      updateCustomer();
    }
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  const editCustomer = (customer) => {
    setOpenPopup(true);
    setId(customer._id);
    setName(customer.name);
    setPhone(customer.phone);
    setAddress(customer.address);
    setOpeningBalance(customer.opening_balance);
  };
  return (
    <div className="list">
      {/* <Sidebar /> */}
      <div className="list-container">
        {/* <Navbar /> */}
        <ListHeader
          header={"Customers List"}
          firstButton={true}
          firstButtonText={"Add New Customer"}
        />
        <DataTable
          data={data}
          columns={userColumns.concat(actionColumn)}
          // loading={!data.length}
          isForTransaction={false}
        />
        <Popup
          title="Customer Form"
          openPopup={openPopup}
          setOpenPopup={setOpenPopup}
        >
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="name"
                name="name"
                label="Name"
                fullWidth
                autoComplete="given-name"
                variant="outlined"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="phone"
                name="phone"
                label="Phone"
                fullWidth
                autoComplete="shipping address-line1"
                variant="outlined"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="address"
                name="address"
                label="Address"
                fullWidth
                autoComplete="shipping address-line2"
                variant="outlined"
                value={address}
                onChange={(event) => setAddress(event.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="openingBalance"
                name="openingBalance"
                label="Opening Balance"
                fullWidth
                autoComplete="shipping address-level2"
                variant="outlined"
                value={openingBalance}
                onChange={(event) => setOpeningBalance(event.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              {/* <FormControlLabel
                control={
                  <Checkbox color="secondary" name="status" value="false" />
                }
                label="Status"
                value={status}
                onChange={(event) => setStatus(event.target.value)}
              /> */}
            </Grid>
            <Grid item xs={12} sm={12}>
              <Grid
                justifyContent={"flex-end"}
                container
                spacing={1}
                direction={"row"}
              >
                <Grid item>
                  <Button
                    variant="contained"
                    size="medium"
                    color="success"
                    onClick={() => validation()}
                  >
                    Save
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="contained" size="medium" color="error">
                    Cancel
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Popup>
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
