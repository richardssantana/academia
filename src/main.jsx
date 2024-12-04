// A maior parte do nosso acesso vai vir do arquivo main. No main, chamamos o App.jsx, que é um componente. 

import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import { ThemeProvider } from 'styled-components'
import { defautTheme } from './styles/theme/defaut'
import { GlobalStyle } from './styles/global'
import "@radix-ui/themes/styles.css"
import { Theme } from '@radix-ui/themes'

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<ThemeProvider theme={defautTheme}>
			<GlobalStyle />
				<Theme>
					<App />
				</Theme>
		</ThemeProvider>
	</StrictMode>
)
