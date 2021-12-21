import styled from "styled-components";
import BG from '../../assets/images/barbershop.jpg'


export const StyledBackground = styled.div`
height:100vh;
width:100vw;
background-image:url(${BG});
background-size:cover;

display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
gap:20px;
`