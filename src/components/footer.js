import React from 'react'
import { Grid } from '@material-ui/core';
import "../CSS/footer.css";

const Footer = () => {
    return (
        <Grid className="footer" container>
            <Grid className = "footerCont" item xs={12}>
                <span className = "textFooter"> Created by </span>
                <span className = "textFooterName">anjali</span>
                <span className = "textFooter" > with ♡ | &#169;</span>
                <span className = "textFooter" > 2020 All rights reserved.</span>
            </Grid>
        </Grid>
    )
}

export default Footer
