import React, { useState } from "react";
import Data from "../Data";
import { Avatar, Modal, Rate } from "antd";
import { AntDesignOutlined } from "@ant-design/icons";
// import { createStyles, useTheme } from 'antd-style';
import Students from "../Component/Athletes/Students";

const Coach = () => {
  const location = window.location.href;
  const id = Number(location[location.length - 1]);
  console.log(Data.coachs[0].id);
  const selectedCoach = Data.coachs.filter((item) => item.id === id);
  console.log(selectedCoach);

  // const useStyle = createStyles(({ token }) => ({
  //   'my-modal-body': {
  //     background: token.blue1,
  //     padding: token.paddingSM,
  //   },
  //   'my-modal-mask': {
  //     boxShadow: `inset 0 0 15px #fff`,
  //   },
  //   'my-modal-header': {
  //     borderBottom: `1px dotted ${token.colorPrimary}`,
  //   },
  //   'my-modal-footer': {
  //     color: token.colorPrimary,
  //   },
  //   'my-modal-content': {
  //     border: '1px solid #333',
  //   },
  // }));

  const openImage = () => {
    setIsModalOpen(true);
  };

  console.log("KKKKKKKKKKK=" , selectedCoach[0].id);

  const [isModalOpen, setIsModalOpen] = useState(false);
  // const { styles } = useStyle();
  // const token = useTheme();

  return (
    <div className="coachpage">
      <Modal
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
        closable={false}
        destroyOnClose={true}
      >
        <Avatar size={300} icon={<img src={selectedCoach[0].bio.images} />} />
      </Modal>
      <div className="coach-image" onClick={openImage}>
        <Avatar size={180} icon={<img src={selectedCoach[0].bio.images} />} />
      </div>
      <Rate disabled defaultValue={selectedCoach[0].bio.score} />
      <div className="coach-information">
        <div className="coach-name">
          <span>نام :</span>
          <span className="a">{selectedCoach[0].bio.name}</span>
        </div>
        <div className="coach-age">
          <span>سن :</span>
          <span className="a">{selectedCoach[0].bio.age}</span>
        </div>
        <div className="coach-price">
          <span>قیمت برنامه :</span>
          <span className="a">{selectedCoach[0].bio.price}</span>
        </div>
      </div>
      <div className="students">
        <Students value={selectedCoach[0].students} coachId={selectedCoach[0].id} />
      </div>
    </div>
  );
};

export default Coach;
