import styled from "styled-components";

export const StyledCard = styled.div`
.navigation{
    background-color: gray;
    width: 100vw;
    position: fixed;
    bottom: -10px;
    z-index: 10;
    border-radius: 10px;
    color: #7679af
}
.navigation ul{
    display: flex;
    justify-content: space-between;
    direction: rtl;
    padding: 0;
}
.navigation ul li{
    width: 30vw;
    text-decoration: none;
    list-style-type: none;
    cursor: default;
}
.navigation ul li link:focus{
    color: black;
    font-weight: bold;
}
.selected:fucus{
    color: black;
    font-weight: bold;
}
`;