import { useEffect, useState } from 'react';
import IAxios from '../interfaces/IAxios';
import IUser from '../interfaces/IUser';

export default function MainPage({ api }: IAxios) {
  const [allUsers, setAllUsers] = useState<IUser[] | null>(null);

  useEffect(() => {
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function fetchData () {
    try {
      const response = await api.get('/users')
      alert(response.data)
      setAllUsers(response.data)
    } catch (error) {
      console.error(error)
    }
  };

  return (
    <div className="App">
      {allUsers ? (
        <div>
          <h1>Dados da API:</h1>
          {allUsers.map((item: IUser, index: number) => (
            <div key={index}>
              <h2>Usuário {item.name}:</h2>
              <h2>sobrenome {item.surname}:</h2>
              <h2>cpf {item.cpf}:</h2>
            </div>
          ))}
        </div>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  )
}
