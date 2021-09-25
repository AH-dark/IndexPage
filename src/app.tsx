import React                                                    from 'react'
import { Container, createStyles, makeStyles, Theme, useTheme } from '@material-ui/core'
import Text                                                     from './component/Text'
import { config }                                               from './config'
import Copyright                                                from './component/Copyright'

const useStyles = makeStyles((theme:Theme)=>createStyles({
	root: {
		fontFamily: '"Lato","Microsoft YaHei UI",sans-serif'
	}
}))

export default function App() {
	const theme = useTheme();
	const classes = useStyles(theme);
	
	document.title = config.info.title+" - "+config.info.owner;
	
	return (
		<>
			<main>
				<Container component={"div"} className={classes.root} maxWidth={"lg"}>
					<Text/>
					<Copyright/>
				</Container>
			</main>
		</>
	)
}