//Criamos aqui um componente. É um carinha que 
import styled from "styled-components";

export const InputDefaut = styled.input``

export const ContainerLogin = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

export const FormLogin = styled.form`
	display: flex;
	width: 500px;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	color: black;

	label {
		color: black;
		font-size: 18px;
	}
`
export const Logo = styled.span `
	display: flex;
	align-items: center;
	gap: 16px;
	font-size: 36px;
	color: black;

`