import React                                                                   from 'react'
import { Box, createStyles, Divider, makeStyles, Theme, Typography, useTheme } from '@material-ui/core'
import { config }                                                              from '../../config'
import classNames                                                              from 'classnames'
import "./display.css"

const useStyles = makeStyles((theme:Theme)=>createStyles({
	root: {
		textAlign: "center"
	},
	font: {
		fontFamily: '"Lato","Microsoft YaHei UI",sans-serif'
	},
	title: {
		fontWeight: 100,
		marginBottom: theme.spacing(1)
	},
	sub: {
		fontWeight: 300,
		marginTop: theme.spacing(1),
		color: "#7c7c7c",
		wordSpacing: theme.spacing(1.5)
	},
	line: {
		marginRight: config.style.dividerLength,
		marginLeft: config.style.dividerLength
	}
}))

export default function Text() {
	const theme = useTheme();
	const classes = useStyles(theme);
	
	return (
		<Box component={"div"} id={"title"} className={classNames(classes.root,"text-root","MuiTypography-displayBlock")}>
			<Typography variant={"h1"} className={classNames(classes.title,classes.font,"text-title","MuiTypography-displayBlock")}>
				{config.info.title+" - "+config.info.owner}
			</Typography>
			{config.style.displayTitleDivider && (
				<Divider variant={"middle"} className={classes.line}/>
			)}
			<Typography variant={"body1"} className={classNames(classes.sub,classes.font,"MuiTypography-displayBlock")}>
				{config.info.describe}
			</Typography>
		</Box>
	)
}