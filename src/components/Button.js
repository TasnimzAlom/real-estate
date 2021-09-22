import { Link } from "react-router-dom";
import styled from "styled-components";

export const Button = styled(Link)`
// background: ${({ primary}) => (primary ? "#000": "CD853F" )}
background:#000;
white-sace:nowrap;
outline:none;
border:none;
min-width:100px;
max-width:200px;
cursor:pointer;
text-decoration:none;
transition: 0.3s;
justify-content:center;
align-items:center;
color:white;
// color:${({primary})=> (primary ? "#fff" : "#000")};
padding:${({big}) => (big ? "16px 40px" : "14px 24px")};
font-size: ${({big}) => (big ? "20px" : "14px")};
text-align:center;

&:hover {
    transform:translateY(-2px);
    color:red;
}



`;