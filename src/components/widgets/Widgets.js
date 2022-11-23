import React from "react";
import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LocalMallRoundedIcon from '@mui/icons-material/LocalMallRounded';
import CurrencyExchangeRoundedIcon from '@mui/icons-material/CurrencyExchangeRounded';

export default function Widgets({ type }) {
  let data;
    let amount = 100;
    let diff = 20;
  switch (type) {
    case "leads":
      data = {
        title: "LEADS",
        isMoney: false,
        link: "See all leads",
        icon: <PersonOutlineOutlinedIcon className="icon"/>,
        value:20
      };
      break;
    case "jobs":
      data = {
        title: "JOBS",
        isMoney: false,
        link: "See all jobs",
        icon: <PersonOutlineOutlinedIcon className="icon"/>,
        value:10
      };
      break;
    case "expense":
      data = {
        title: "Expense",
        isMoney: true,
        link: "See all expenses",
        icon: <LocalMallRoundedIcon className="icon"/>,
        value:1200
      };
      break;
    case "payment":
      data = {
        title: "Payments",
        isMoney: true,
        link: "See all payments",
        icon: <CurrencyExchangeRoundedIcon className="icon" />,
        value:20000 

      };
      break;
    default:
      break;
  }
  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">{data.isMoney && "$"}{data.value}</span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage negative">
          <KeyboardArrowUpIcon />
          {diff}%
        </div>
        {data.icon}
      </div>
    </div>
  );
}
