import React from 'react'
import { ContainerLogin, FormLogin, Logo} from './style'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

export const FormularioLogin = () => {
	return (
		<ContainerLogin>
			<Logo> 
			<svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" fill="black" viewBox="0 0 256 256"><path d="M248,120h-8V88a16,16,0,0,0-16-16H208V64a16,16,0,0,0-16-16H168a16,16,0,0,0-16,16v56H104V64A16,16,0,0,0,88,48H64A16,16,0,0,0,48,64v8H32A16,16,0,0,0,16,88v32H8a8,8,0,0,0,0,16h8v32a16,16,0,0,0,16,16H48v8a16,16,0,0,0,16,16H88a16,16,0,0,0,16-16V136h48v56a16,16,0,0,0,16,16h24a16,16,0,0,0,16-16v-8h16a16,16,0,0,0,16-16V136h8a8,8,0,0,0,0-16ZM32,168V88H48v80Zm56,24H64V64H88V192Zm104,0H168V64h24V175.82c0,.06,0,.12,0,.18s0,.12,0,.18V192Zm32-24H208V88h16Z"></path>
			</svg>
			Academia Coderhouse
		 </Logo>
			<div>
				<FormLogin>
					<label> E-mail </label>
					<Input type="email" name="email" placeholder="digite o seu email aí, cuzão"/> {/* agora isso aqui virou um parâmetro, não uma propriedade. É um input customizado */}
					<label> Senha </label>
					<Input type="password" name="senha" placeholder="digite a sua senha, ou você esqueceu? Seu lixo"/>
					{/*Podemos entender melhor como funciona o conceito de children se aplicarmos ele ao botão de login. Em UI criamos uma nova pasta button com os mesmos arquivos (index.jsx e style.js)*/}
					<Button>Entrar</Button>
				</FormLogin>
			</div>
		</ContainerLogin>
		
	)
}