import React                          from 'react'
import ReactDOM                                    from 'react-dom'
import { createTheme, MuiThemeProvider} from '@material-ui/core'
import App                                         from './app'
import "./style.css"

const theme = createTheme({
	props: {
		MuiTypography: {
			variantMapping: {
				h1: 'span',
				h2: 'span',
				h3: 'span',
				h4: 'span',
				h5: 'p',
				h6: 'p',
				subtitle1: 'span',
				subtitle2: 'span',
				body1: 'span',
				body2: 'span',
			},
		},
	},
});

export interface Config {
	info: {
		title:string,
		owner:string,
		describe:string,
		copyright:string,
		url:string,
		beian:string
	},
	style: {
		displayTitleDivider:boolean,
		dividerLength:string
	}
}

ReactDOM.render(
	<React.StrictMode>
		<MuiThemeProvider theme={theme}>
			<App/>
		</MuiThemeProvider>
	</React.StrictMode>,
	document.getElementById('root')
)