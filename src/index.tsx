import React                from 'react'
import ReactDOM                       from 'react-dom'
import { MuiThemeProvider, useTheme } from '@material-ui/core'

const theme = useTheme();

ReactDOM.render(
	<React.StrictMode>
		<MuiThemeProvider theme={theme}>
		
		</MuiThemeProvider>
	</React.StrictMode>,
	document.getElementById('root')
)