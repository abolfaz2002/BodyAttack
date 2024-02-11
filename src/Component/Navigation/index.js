import React, { useState } from "react";
import { NavLink, useNavigate, useNavigation } from "react-router-dom";
import { StyledCard } from "./style";
import { Spin } from "antd";

const Navigation = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleClick = (path) => {
    setTimeout(() => {
      navigate(path);
    }, 180);
  };

  const Items = [
    {
      title: "خانه",
      path: "",
      id: 1,
    },
    {
      title: "مربی ها",
      path: "coachs",
      id: 2,
    },
    {
      title: "آموزش",
      path: "learning",
      id: 3,
    },
  ];

  return (
    <StyledCard>
      <div className="navigation">
        <ul>
          <li>
            <NavLink to={""}>خانه</NavLink>
          </li>
          <li>
            <NavLink to={"coachs"}>مربی ها</NavLink>
          </li>
          <li>
            <NavLink to={"learning"}>آموزش</NavLink>
          </li>
          {/* <li>
            <link activeClassName="selected" onClick={handleClick}>
              {loading ? (
                <Spin size="small" /> // نمایش اسپینر در حین انجام عملیات
              ) : (
                "خانه"
              )}
            </link>
          </li>
          <li>
            <link activeClassName="selected" onClick={handleClick}>
              مربی ها
            </link>
          </li>
          <li>
            <link activeClassName="selected" onClick={handleClick}>
              آموزش
            </link>
          </li> */}
        </ul>
      </div>
    </StyledCard>
  );
};

export default Navigation;
