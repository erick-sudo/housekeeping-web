import {
  HomeMiniOutlined,
  QuestionAnswerOutlined,
  RoomServiceOutlined,
} from "@mui/icons-material";
import { Button } from "@mui/material";
import React, { useContext } from "react";
import AppName from "../common/AppName";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
const styles = {
  submit: {
    margin: "3px 0px 2px",
    backgroundColor: "rgb(71, 3, 131)",
    "&:hover": {
      backgroundColor: "rgb(148, 77, 211)",
    },
  },
};

const nalLinks = [
  {
    name: "Home",
    path: "/",
    icon: <HomeMiniOutlined />,
  },
  {
    name: "Services",
    path: "/dashboard/services",
    icon: <RoomServiceOutlined />,
  },
  {
    name: "About Us",
    path: "/about",
    icon: <QuestionAnswerOutlined />,
  },
];

function TopNavigationBar() {
  const navigate = useNavigate();
  const { userInfo, logout } = useContext(AppContext);

  return (
    <div className="flex px-4 py-2 container items-center">
      <div className="flex grow">
        <AppName />
      </div>
      <div className="flex items-center gap-4 px-4">
        {nalLinks.map((nalLink, idx) => {
          return (
            <Button
              onClick={() => navigate(nalLink.path)}
              key={idx}
              variant="info"
              className=""
              sx={{ textTransform: "none" }}
            >
              {nalLink.name}
            </Button>
          );
        })}
      </div>
      {userInfo ? (
        <button
          onClick={() => logout()}
          className="px-4 ring-2 rounded ring-purple-700 text-purple-700 hover:bg-purple-700 hover:text-[#fff] duration-300"
        >
          Logout
        </button>
      ) : (
        <button
          onClick={() => navigate("/login")}
          className="px-4 ring-2 rounded ring-purple-700 text-purple-700 hover:bg-purple-700 hover:text-[#fff] duration-300"
        >
          Login
        </button>
      )}
    </div>
  );
}

export default TopNavigationBar;
