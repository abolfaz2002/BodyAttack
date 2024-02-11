import styled from "styled-components";
import { Card } from 'antd';
export const StyledHome = styled.div`
.sectionList{
    display: flex; 
    justify-content: space-around;
    flex-wrap: wrap;
}
`;

export const StyledCard = styled(Card)`
min-width: 240px;
max-width: 290px;
margin: 20px;
`;