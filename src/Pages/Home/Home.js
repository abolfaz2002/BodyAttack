import React from "react";
import { Card } from 'antd';
import coach from "../../Utils/Assets/images/coach.jpg";
import learning from "../../Utils/Assets/images/آموزش حرکات.jpg";
import newathlete from "../../Utils/Assets/images/new.jpg";
import { useNavigate } from 'react-router-dom';
import { StyledCard, StyledHome } from "./style";
const { Meta } = Card;

const Home = () => {
    const navigate = useNavigate();

    const clickHandler = (path) => {
        navigate(path);
    }

    const sectionList = [
        {
            title: "مبتدی ها",
            description: "مبتدی هستی بیا اینجا",
            src: newathlete,
            alt: "مبتدی ها",
            path: "newathlete"
        },
        {
            title: "آموزش حرکات",
            description: "!بپا اشتباه نزنی",
            src: learning,
            alt: "آموزش حرکات",
            path: "learning"
        },
        {
            title: "مربی ها",
            description: "مربی خودتو پیدا کن",
            src: coach,
            alt: "مربی ها",
            path: "coachs"
        },
    ]

    return (
        <StyledHome>
            <h1>
                بادی اتک
            </h1>
            <div className="sectionList">
                {sectionList.map((item) => {
                    return (
                        <StyledCard
                            hoverable
                            onClick={() => clickHandler(item.path)}
                            style={{
                                minWidth: 240,
                                margin: 20,
                            }}
                            cover={<img alt={item.alt} src={item.src} />}
                        >
                            <Meta title={item.title} description={item.description} />
                        </StyledCard>
                    )
                })}
            </div>
        </StyledHome>
    )
};

export default Home;