import { useEffect, useState } from 'react';
import IAxios from '../../interfaces/IAxios';
import IUser from '../../interfaces/IUser';
import { Table } from 'react-bootstrap';
import './MainPage.scss'

export default function MainPage({ api }: IAxios) {
  const [allUsers, setAllUsers] = useState<IUser[] | null>(null);

  useEffect(() => {
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function fetchData () {
    try {
      const response = await api.get('/users')

      setAllUsers(response.data)
    } catch (error) {
      console.error(error)
    }
  };

  return (
    <>
      {allUsers ? (
        <div className="container table-responsive">
          <h1 className='main-title mt-4 mb-4'>
            Usuários
          </h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Nome</th>
              <th>Sobrenome</th>
              <th>CPF</th>
            </tr>
          </thead>
          <tbody>
          {allUsers.map((item: IUser, index: number) => (
            <tr key={index}>
              <td>{index}</td>
              <td>Usuário {item.name}</td>
              <td>sobrenome {item.surname}</td>
              <td>cpf {item.cpf}</td>
            </tr>
          ))}
          </tbody>
        </Table>
      </div>
      ) : (
        <p>Carregando...</p>
      )}
    </>
  )
}
