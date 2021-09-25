import React                                                                from 'react'
import { Box, createStyles, Link, makeStyles, Theme, Typography, useTheme } from '@material-ui/core'
import classNames                                                           from 'classnames'
import dayjs                                                                from 'dayjs'
import { config }                                                           from '../../config'
import Beian                                                                from './beian'

const useStyles = makeStyles((theme:Theme) => createStyles({
	root: {
		marginTop: theme.spacing(6)
	},
	font: {
		fontFamily: '"Lato","Microsoft YaHei UI",sans-serif',
		fontWeight: 300,
		color: "#7c7c7c"
	},
	copyright: {
		wordSpacing: theme.spacing(0.5)
	}
}))

export default function Copyright() {
	const theme = useTheme();
	const classes = useStyles(theme);
	
	const year = dayjs().year();
	const time = (year>2021)?("2021 - "+year):year;
	
	return (
		<Box component={"footer"} id={"footer"} className={classNames(classes.root,"MuiTypography-alignCenter","MuiTypography-gutterBottom","MuiTypography-displayBlock")}>
			<Beian/>
			<Typography variant={"body2"} className={classNames(classes.font,classes.copyright)}>
				{config.info.url && config.info.copyright && (
					<>
						{"Copyright © "+time+" "}
						<Link
							color={"primary"}
							href={config.info.url}
							underline={"none"}
						>
							{config.info.copyright}
						</Link>
						{" All Right Reserved."}
					</>
				)}
			</Typography>
		</Box>
	)
}