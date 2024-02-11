import React from "react";
import { Avatar, List, Skeleton } from "antd";
import { useNavigate, useSearchParams } from "react-router-dom";

const Students = ({ value, coachId }) => {
  const navigate = useNavigate();
  const StudentClickHandler = (id) => {
    navigate(`/athlete/${id}?ids=${id}&coachId=${coachId}`);
  };

  return (
    <List
      className="demo-loadmore-list"
      itemLayout="horizontal"
      dataSource={value}
      renderItem={(item) => (
        <List.Item actions={[<a key="list-loadmore-edit">دنبال کردن</a>]}>
          <Skeleton avatar title={false} loading={item.loading} active>
            <List.Item.Meta
              onClick={() => StudentClickHandler(item.id)}
              avatar={
                <Avatar
                  size={50}
                  src={
                    "data:image/jpeg;base64,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"
                  }
                />
              }
              title={<a>{item?.name}</a>}
              description={`${item?.age} ساله`}
            />
          </Skeleton>
        </List.Item>
      )}
    />
  );
};

export default Students;
