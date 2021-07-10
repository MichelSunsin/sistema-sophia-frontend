import { useEffect, useCallback } from 'react'
import { toast } from 'react-toastify'
import { useForm } from 'react-hook-form'
import queryString from 'query-string'

import Button from 'components/button'

import { Wrapper, Content } from './styles'

const StudentDetails = (props) => {
  const { id } = queryString.parse(props.location.search)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()

  const fetchStudent = useCallback(
    async (id) => {
      try {
        const response = await fetch(`http://localhost:3001/students/${id}`)
        const json = await response.json()
        reset(json)
      } catch (error) {
        toast.error('Não foi possível buscar o aluno')
      }
    },
    [reset]
  )

  useEffect(() => {
    if (id) {
      fetchStudent(id)
    }
  }, [id, fetchStudent])

  const onSubmit = async (data) => {
    const url = id
      ? `http://localhost:3001/students/${id}`
      : 'http://localhost:3001/students'
    const verb = id ? 'PUT' : 'POST'

    try {
      await fetch(url, {
        method: verb,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      toast.success(
        `Registro ${id ? 'atualizado' : 'realizado'} com sucesso!`,
        {
          position: 'top-center',
        }
      )
    } catch (error) {
      toast.error('Falha ao cadastrar aluno', { position: 'top-center' })
    }
  }

  return (
    <Wrapper id={id}>
      <div className="header">
        <h2>Cadastro de Aluno</h2>
      </div>
      <Content>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <label htmlFor="nome">Nome do aluno</label>
            <input id="nome" {...register('nome', { required: true })} />
            {errors.nome && <span>Nome é obrigatório</span>}
          </div>
          <div className="form-control">
            <label htmlFor="certNasc">Certidão de nascimento</label>
            <input
              id="certNasc"
              {...register('certNasc', { required: true })}
            />
            {errors.certNasc && (
              <span>Certidão de nascimento é obrigatório</span>
            )}
          </div>
          <div className="form-control">
            <label htmlFor="dataNasc">Data de nascimento</label>
            <input
              id="dataNasc"
              type="date"
              {...register('dataNasc', { required: true })}
            />
            {errors.dataNasc && <span>Data de nascimento é obrigatório</span>}
          </div>
          <Button type="submit">Cadastrar aluno</Button>
        </form>
      </Content>
    </Wrapper>
  )
}

export default StudentDetails
