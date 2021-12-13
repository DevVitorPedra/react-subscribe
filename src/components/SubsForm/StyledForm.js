import styled from "styled-components";

export const StyledFormBG = styled.form`
height:60% auto;
min-height:150px;
width:90%;
opacity:.9;
background: rgba( 2, 2, 2, 0.25 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 8px );
-webkit-backdrop-filter: blur( 8px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
gap:20px;
`
export const StyledInput = styled.input`
    width:80%;
    height:20px;
    border-top:none;
    color:white;
    border-left:none;
    border-right:none;
    border-bottom:0.7px solid white;
    background: transparent;
    color:white;
    :focus{
      outline:none;
    border-bottom:2px solid white;
    }
    text-align:center;

`
export const StyledFormBtn = styled.button`
    width:50%;
    height:20px;
    background-color:rgba( 31, 38, 135, 1 );
    border-radius:12px;
    outline:none;
    color:white;
    z-index:100;
`