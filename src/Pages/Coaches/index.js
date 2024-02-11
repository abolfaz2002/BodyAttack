import React from "react";
import Data from "../../Data";
import { Card } from "antd";
import { NavLink, useNavigate } from "react-router-dom";
const { Meta } = Card;

const Coaches = () => {

  return (
    <div className="coachpage">
      <h1>CoachPage</h1>
      <br />
      <br />
      <div className="coachs">
        {Data?.coachs?.map((item) => {
          return (
            <div className="coach">
              <NavLink to={`${item.id}/?name"abolfazl"`}>
                <Card
                  hoverable
                  style={{
                    width: 150,
                    maxHeight: 200,
                  }}
                  cover={
                    <img alt={`${item.bio.name}`} src={`${item.bio.images}`} />
                  }
                >

                  <Meta
                    title={`${item.bio.name}`}
                    description={`${item.bio.name}`}
                  />
                </Card>
              </NavLink>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Coaches;
