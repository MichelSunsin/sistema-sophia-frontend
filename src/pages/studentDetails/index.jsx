import { useEffect, useCallback } from 'react'
import { toast } from 'react-toastify'
import { useForm } from 'react-hook-form'
import queryString from 'query-string'

import Button from 'components/button'

import { Wrapper, Content, SideContent } from './styles'

const StudentDetails = (props) => {
  const { matricula } = queryString.parse(props.location.search)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()

  const fetchStudent = useCallback(
    async (matricula) => {
      try {
        const response = await fetch(
          `http://localhost:3001/api/students/${matricula}`
        )

        const json = await response.json()
        reset(json)
      } catch (error) {
        toast.error('Não foi possível buscar o aluno')
      }
    },
    [reset]
  )

  useEffect(() => {
    if (matricula) {
      fetchStudent(matricula)
    }
  }, [matricula, fetchStudent])

  const onSubmit = async (data) => {
    console.log(data)
    const url = matricula
      ? `http://localhost:3001/api/students/${matricula}`
      : 'http://localhost:3001/api/students'
    const verb = matricula ? 'PUT' : 'POST'

    try {
      await fetch(url, {
        method: verb,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      toast.success(
        `Registro ${matricula ? 'atualizado' : 'realizado'} com sucesso!`,
        {
          position: 'top-center',
        }
      )
    } catch (error) {
      toast.error('Falha ao cadastrar aluno', { position: 'top-center' })
    }
  }

  return (
    <Wrapper id={matricula}>
      <Content>
        <div className="header">
          <h2>Cadastro de Aluno</h2>
        </div>
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
          <div className="form-control">
            <label htmlFor="turno">Turno</label>
            <select id="turno" {...register('turno', { required: true })}>
              <option value="manhã">Manhã</option>
              <option value="tarde">Tarde</option>
            </select>
            {errors.dataNasc && <span>Turno é obrigatório</span>}
          </div>
          <div className="form-control">
            <label htmlFor="turma">Turma</label>
            <input
              id="turma"
              type="text"
              {...register('turma', { required: true })}
            />
            {errors.turma && <span>Turma é obrigatório</span>}
          </div>
          <div className="form-control">
            <label htmlFor="ano">Ano</label>
            <input
              id="ano"
              type="text"
              placeholder="Ex: 2021"
              {...register('ano', { required: true })}
            />
            {errors.dataNasc && <span>Data de nascimento é obrigatório</span>}
          </div>
          <Button type="submit">
            {matricula ? 'Atualizar aluno' : 'Cadastrar aluno'}
          </Button>
        </form>
      </Content>
      {matricula && (
        <SideContent>
          <ul>
            <li className="active">Cadastro de aluno</li>
            <li>Endereço</li>
            <li>Responsáveis</li>
          </ul>
        </SideContent>
      )}
    </Wrapper>
  )
}

export default StudentDetails
