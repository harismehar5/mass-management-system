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
  const [data, setData] = useState([
    {
      _id: "6351522e6eabf8471c790bb1",
      name: "Customer A",
      phone: "+923007459694",
      address: "Gujranwala, Pakistan",
      opening_balance: 1200,
      status: true,
      __v: 0,
      cash: [
        {
          amount: "1000",
          cash_type: "Cash In",
          description: "Recieved By Nabeel",
          payment_medium: "Bank Transfer",
          submit_date: "2022-09-05T19:00:00.000Z",
          _id: "635788570f39df1d616a92ca",
          updatedAt: "2022-10-25T06:55:19.418Z",
          createdAt: "2022-10-25T06:55:19.418Z",
        },
        {
          amount: "1000",
          cash_type: "Cash In",
          description: "Recieved By Khawar",
          payment_medium: "Jazz Cash",
          submit_date: "2022-09-05T19:00:00.000Z",
          _id: "6357886b0f39df1d616a92cc",
          updatedAt: "2022-10-25T06:55:39.193Z",
          createdAt: "2022-10-25T06:55:39.193Z",
        },
        {
          amount: "1000",
          cash_type: "Cash Out",
          description: "Recieved By Amer",
          payment_medium: "Cash",
          submit_date: "2022-10-24T19:00:00.000Z",
          _id: "63579707d94e5595ab332957",
          updatedAt: "2022-10-25T07:57:59.523Z",
          createdAt: "2022-10-25T07:57:59.523Z",
        },
        {
          amount: "1200",
          cash_type: "Cash In",
          description: "Meezan bank",
          payment_medium: "By Hand",
          submit_date: "2022-11-16T00:00:00.000Z",
          _id: "6374d31618e744fa4d03fdd2",
          updatedAt: "2022-11-16T12:09:58.239Z",
          createdAt: "2022-11-16T12:09:58.239Z",
        },
        {
          amount: "1200",
          cash_type: "Cash In",
          description: "Meezan bank",
          payment_medium: "Bank Transfer",
          submit_date: "2022-11-16T00:00:00.000Z",
          _id: "6374d35118e744fa4d04010f",
          updatedAt: "2022-11-16T12:10:57.820Z",
          createdAt: "2022-11-16T12:10:57.820Z",
        },
      ],
    },
    {
      _id: "635154846eabf8471c790bb9",
      name: "Customer B",
      phone: "+923007459694",
      address: "Gujranwala",
      opening_balance: 1000,
      status: true,
      __v: 0,
      cash: [
        {
          amount: "1000",
          cash_type: "Cash In",
          description: "Recieved By Khawar",
          payment_medium: "By Hand",
          submit_date: "2022-10-23T19:00:00.000Z",
          _id: "6357973fd94e5595ab33295f",
          updatedAt: "2022-10-25T07:58:55.900Z",
          createdAt: "2022-10-25T07:58:55.900Z",
        },
        {
          amount: "1000",
          cash_type: "Cash Out",
          description: "Recieved By Aman",
          payment_medium: "Cash",
          submit_date: "2022-10-25T19:00:00.000Z",
          _id: "63579753d94e5595ab332961",
          updatedAt: "2022-10-25T07:59:15.326Z",
          createdAt: "2022-10-25T07:59:15.326Z",
        },
      ],
    },
    {
      _id: "6358e9c951ec6998fa022749",
      name: "khawar",
      phone: "03159007817",
      address: "bagban pora",
      opening_balance: 1000,
      status: true,
      __v: 0,
    },
    {
      _id: "635e76d3be44ef65892302aa",
      name: "Ahmed Bilal",
      phone: "03035445578",
      address: "Gujranwala",
      opening_balance: 1000,
      status: true,
      __v: 0,
      cash: [
        {
          amount: "1100",
          cash_type: "Cash Out",
          description: "Rasheed's Account",
          payment_medium: "Jazz Cash/Easy Paisa ",
          submit_date: "2022-11-16T00:00:00.000Z",
          _id: "6374d4b018e744fa4d0417ad",
          updatedAt: "2022-11-16T12:16:48.840Z",
          createdAt: "2022-11-16T12:16:48.840Z",
        },
      ],
    },
    {
      _id: "637c86df03deaeb5b023566b",
      name: "Customer C",
      phone: "+923154823242",
      address: "Lahore",
      opening_balance: 26000,
      status: true,
      __v: 0,
    },
  ]);
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
    // getCustomersList();
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
      .get("https://summer-asia.herokuapp.com/customer/")
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
      .patch("https://summer-asia.herokuapp.com/customer" + id, customer)
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
