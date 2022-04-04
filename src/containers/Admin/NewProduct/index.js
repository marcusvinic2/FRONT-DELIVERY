import React, { useEffect, useState } from 'react'

import api from '../../../services/api'

import { Container, Label, Input, ButtonStyles, LabelUpload } from './styles'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'

import ReactSelect from 'react-select'
import { useForm } from 'react-hook-form'

function NewProduct(){

	const [filename, setFileName] = useState(null)
	const [categories, setCategories] = useState([])

	const { register, handleSubmit } = useForm()
	const onSubmit = data => console.log(data)

	useEffect(() => {
		async function loadCategories(){
			const { data } = await api.get('categories')
			setCategories(data)
		}

		loadCategories()
	}, [])

	return (
		<Container>
			<form noValidate>
				<Label>Nome</Label>
				<Input type="text" {...register('name')} />

				<Label>Preço</Label>
				<Input type="number" {...register('price')} />

				<LabelUpload>
					{filename ? filename : (
							<>
								<CloudUploadIcon />
								 Imagem do produto
							</>
						)}	

						<input 
						type="file" 
						accept="image/png, imagem/jpeg"
						{...register('file')}
						onChange={value => {
							setFileName(value.target.files[0]?.name)
						}}
						/>
				</LabelUpload>

				<ReactSelect
					options={categories}
					getOptionLabel={ cat => cat.name }
					getOptionValue={ cat => cat.id }
					placeholder="Escolher categoria"
				 />
					
				<ButtonStyles>Adicionar Produto</ButtonStyles>
			</form>
		</Container>
	)
}

export default NewProduct