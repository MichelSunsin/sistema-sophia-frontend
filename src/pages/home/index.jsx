import { useEffect, useState, useMemo } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useTable } from 'react-table'
import { toast } from 'react-toastify'

import { Wrapper, Content } from './styles'

const Home = () => {
  const history = useHistory()
  const [students, setStudents] = useState([])
  const tableColumns = useMemo(
    () => [
      {
        Header: 'Nome do aluno',
        accessor: 'nome',
      },
      {
        Header: 'Certidão de nascimento',
        accessor: 'certNasc',
      },
      {
        Header: 'Data de nascimento',
        accessor: 'dataNasc',
      },
    ],
    []
  )

  useEffect(() => {
    async function fetchStudents() {
      try {
        const response = await fetch('http://localhost:3001/api/students/list')
        const json = await response.json()
        setStudents(json)
      } catch (error) {}
    }

    fetchStudents()
  }, [])

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns: tableColumns, data: students })

  const handleExclusion = async (id) => {
    try {
      await fetch(`http://localhost:3001/students/${id}`, {
        method: 'DELETE',
      })
      setStudents((prevState) =>
        prevState.filter((student) => student.id !== id)
      )
      toast.success('Aluno removido com sucesso')
    } catch (error) {
      toast.error('Não foi possível remover o aluno')
    }
  }

  return (
    <Wrapper>
      <div className="header">
        <h2>Alunos cadastrados</h2>
      </div>
      {students.length > 0 ? (
        <Content>
          <table {...getTableProps()}>
            <thead className="table-header">
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th {...column.getHeaderProps()}>
                      {column.render('Header')}
                    </th>
                  ))}
                  <th colSpan={2}>Ações</th>
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map((row) => {
                prepareRow(row)
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => {
                      return (
                        <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                      )
                    })}
                    <td
                      className="action-edit"
                      role="button"
                      onClick={() =>
                        history.push(
                          `/studentDetails?matricula=${row.original.matricula}`
                        )
                      }
                    >
                      Editar
                    </td>
                    <td
                      className="action-remove"
                      role="button"
                      onClick={() => handleExclusion(row.original.matricula)}
                    >
                      Excluir
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </Content>
      ) : (
        <Content>
          <p
            style={{
              fontStyle: 'italic',
              textAlign: 'center',
              margin: '25px 0',
            }}
          >
            Ainda não há nenhum aluno cadastrado.{' '}
          </p>
          <Link to="studentDetails" style={{ textDecoration: 'underline' }}>
            Clique aqui
          </Link>{' '}
          para cadastrar um aluno!
        </Content>
      )}
    </Wrapper>
  )
}

export default Home
