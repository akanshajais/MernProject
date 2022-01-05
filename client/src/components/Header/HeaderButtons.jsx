import {  Box, Button, colors, makeStyles, Typography } from '@material-ui/core';

const useStyle = makeStyles(
    {
        login:{
            background:'#ffffff',
            colors:'#74BDCB',
            textTransform:'none',
            fontWeight:600,
            borderRadius:2,
            padding: '5px 40px'
        },
        wrapper:{
            margin:'0 5% 0 auto',
            display:'flex',
            '& > *':{
                marginRight: 50
            }
        }
    }
)

const HeaderButtons = () => {
    const classes= useStyle();
    return(
        <Box className={classes.wrapper}>
            <Button variant="contained" className={classes.login}>LOGIN</Button>
            <Typography>Products</Typography>
            <Box>
                <Typography>Cart</Typography>
            </Box>
        </Box>

    )
}
export default HeaderButtons;