//Apagou o defaut app porque não gostamos de exportar os nossos componentes pela maneira. Fazemos um export function. Precisamos mudar uma coisa em main.jx. Precisamos colocar o app entre chaves. Podemos também usar arrow function. Sempre. SEMPRE. SEMPRE VAMOS RETORNAR SÓ UM ELEMENTO. Colocamos tudo em uma única div. O que podemos fazer é apagar o <div> </div> e deixar só <> </>. Chamamos isso de Fragmento. Também podemos colocar o <react.fragment></react.fragment>. O que parece mais bonitinho.
//Input defaut é o componente que criamos em input.js. Usando esse style-component, criamos uma classe aleatória. O que ajuda, porque por vezes criamos aplicações gigantescas. É impossível. 
//Vamos componentizar as coisas. Primeiro, criamos uma pasta para centralizar as nossas páginas. (pages > login). Lá, criamos um arquivo index.jsx e um style.js

import React from 'react'
import { Login } from './pages/login'
import { Header } from './components/header'
import { Alunos } from './pages/alunos'


export function App() {

	return (
		<>
		<Header/>
		<Alunos/>
		{/*<Login/>*/}
		</>
	)
}


