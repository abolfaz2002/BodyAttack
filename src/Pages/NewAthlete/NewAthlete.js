import React from "react";
import { Card } from 'antd';
import { useNavigate } from 'react-router-dom';
import SimpleApp from "../../Utils/Assets/images/Simple.jpg";
import Eat from "../../Utils/Assets/images/eat.jpg";
const { Meta } = Card;

const NewAthlete = () => {

    const navigate = useNavigate();

    const sectionList = [
        {
            title: "مبتدی ها",
            description: "بیا برنامتو بردار برو",
            src: SimpleApp,
            alt: "مبتدی ها",
            path: "newathlete"
        },
        {
            title: "اصول کلی تغذیه",
            description: "باید و نبایدای تغذیه",
            src: Eat,
            alt: "اصول کلی تغذیه",
            path: "learning"
        },
    ];

    const clickHandler = (path) => {
        navigate(path);
    }

    return (<div className="newathlate">
        <h3>بالاخره شنبه تو هم رسید!</h3>
        <div className="lowlevel-learn">
            {sectionList.map((item) => {
                return (
                    <Card
                        hoverable
                        onClick={() => clickHandler(item.path)}
                        style={{
                            minWidth: 240,
                            margin: 20,
                        }}
                        cover={<img alt={item.alt} src={item.src} />}
                    >
                        <Meta title={item.title} description={item.description} />
                    </Card>
                )
            })}
        </div>
    </div>)
}

export default NewAthlete;