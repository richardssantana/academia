import React from "react"
import { Lista } from "../../components/lista"
import { ModalCadastroDeAluno } from "../../components/modalcadastrodealuno"

export const Alunos = () => {
	return (
		<div>
			<div>
			<h1>Alunos</h1>
			</div>
			<div>
			<input type="search" placeholder='procure por um corno' />
			<ModalCadastroDeAluno/>
			</div>
			<div>
				<Lista name1="Bianca" name2="Caio" name3="Caique"/>
			</div>
		</div>
	)
}