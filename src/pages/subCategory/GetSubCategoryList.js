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
import { subCategoryColumns } from "../../dataTableColumns";

// import {
//   DELETE_CUSTOMER_BY_ID,
//   GET_CUSTOMERS_LIST,
//   UPDATE_CUSTOMER_BY_ID,
// } from "../../utils/config";
import ListHeader from "../../components/listHeader/ListHeader";
import SnackBar from "../../components/alert/SnackBar";
import Popup from "../../components/popup/Popup";

export default function GetSubCategoryList() {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("");
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [openPopup, setOpenPopup] = useState(false);

  var subCategory = {
    name: "",
  };
  useEffect(() => {
    getSubCategoryList();
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
              onClick={() => editSubCategory(params.row)}
            >
              <EditIcon fontSize="inherit" />
            </IconButton>
            <IconButton
              aria-label="delete"
              size="medium"
              onClick={() => deleteSubCategory(params.row._id)}
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

  const getSubCategoryList = () => {
    axios
      .get("https://summer-asia.herokuapp.com/subCategory/get_sub_categories")
      .then(function (response) {
        if (response.data.error) {
          console.log(response.data.error_msg);
        } else {
          setData(response.data.sub_categories);
        }
      })
      .catch(function (error) {
        console.log("error: " + error);
      });
  };
  const deleteSubCategory = (id) => {
    axios
      .delete("https://summer-asia.herokuapp.com/subCategory/" + id)
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
  const validation = () => {
    if (name.length === 0) {
      setOpen(true);
      setMessage("Some fields are missing");
      setSeverity("error");
    } else {
      updateCategory();
    }
  };
  const updateCategory = () => {
    subCategory = {
      name: name,
    };
    axios
      .patch("https://summer-asia.herokuapp.com/subCategory/" + id, subCategory)
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
        }
      })
      .catch(function (error) {
        console.log("error: " + error);
        setOpen(true);
        setMessage("error: " + error);
        setSeverity("error");
      });
  };
  const editSubCategory = (subCategory) => {
    setOpenPopup(true);
    setId(subCategory._id);
    setName(subCategory.name);
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
          header={"Category List"}
          firstButton={true}
          firstButtonText={"Add New Sub Category"}
        />
        <DataTable
          data={data}
          columns={subCategoryColumns.concat(actionColumn)}
          isForTransaction={false}
          loading={!data.length}
        />
        <Popup
          title="Sub Category Form"
          openPopup={openPopup}
          setOpenPopup={setOpenPopup}
        >
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12}>
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
