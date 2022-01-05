import {AppBar, Toolbar, makeStyles} from  '@material-ui/core';
import Search from '@material-ui/icons/Search';
import logo from '../../images/xtel.png';
import HeaderButtons from './HeaderButtons';



const useStyle = makeStyles({
   header:{
     background: '#74BDCB',
     height: 55
   },
   logo:{
    width: 120,
    height:40,
    marginLeft:'12%'

  }

})

const Header = () => {
  const classes = useStyle();

    return( 
     <AppBar className={classes.header}>
       <Toolbar>
         <img src={logo} className={classes.logo} />
         <Search />
         <HeaderButtons />
       </Toolbar>
       
        </AppBar>
          
    )
   
}
export default Header;