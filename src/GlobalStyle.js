import { createGlobalStyle } from "styled-components";

import Italianno  from '../src/assets/fonts/Italianno-Regular.ttf'

export default createGlobalStyle`
@font-face {
    font-family:Italianno;
    src: url(${Italianno}) ;
}
body{
    font-family:'Italianno';
    margin:0;
    padding:0;
    box-sizing:border-box;
}`

