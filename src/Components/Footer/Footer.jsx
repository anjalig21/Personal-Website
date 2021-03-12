// dependancy/file imports
import React from 'react'
import FooterStyles from './FooterStyles'

const Footer = () => {
	// css import
	const classes = FooterStyles();

	return (
		<div className={classes.footer}>
			<div className={classes.textContainer}>
				<span>Created by&nbsp;</span>
				<span style={{ color: "#b5befa" }}>anjali&nbsp;</span>
				<span>with ♡ | &nbsp;&#169; 2021 All rights reserved</span>
			</div>
		</div>
	)
}

export default Footer
