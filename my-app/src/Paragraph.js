 import {ThemeContext} from './index'
 import {useContext} from  'react'
 function Paragraph(){
     const theme =useContext(ThemeContext)
     console.log("theme ",theme);
     return <p className={theme}>
         ascasdasdasdasdasdasdasda
     </p>
 }
 export default Paragraph