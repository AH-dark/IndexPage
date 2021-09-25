import React                                                                from 'react'
import { Box, createStyles, Link, makeStyles, Theme, Typography, useTheme } from '@material-ui/core'
import { config }                                                           from '../../config'
import classNames                                                           from 'classnames'

const useStyles = makeStyles((theme:Theme)=>createStyles({
	root: {
		color: "#757575",
		marginBottom: theme.spacing(0.5)
	},
	text: {
		letterSpacing: theme.spacing(0.25)
	}
}))

export default function Beian() {
	const beian = config.info.beian;
	const theme = useTheme();
	const classes = useStyles(theme);
	
	if(beian) {
		return (
			<Box component={"div"} id={"beian"} className={classes.root}>
				<Typography component={"p"} variant={"body2"} className={classNames(classes.text)}>
					{"备案号："}
					<Link
						color={"primary"}
						underline={"none"}
						href={"//beian.miit.gov.cn"}
					>
						{beian}
					</Link>
				</Typography>
			</Box>
		)
	} else {
		return (
			<></>
		)
	}
}