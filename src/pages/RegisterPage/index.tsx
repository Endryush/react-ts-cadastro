import IAxios from '../../interfaces/IAxios';
import RegisterForm from '../../components/Form';

export default function RegisterPage({ api }: IAxios) {
  return (
    <div className='container col-md-4'>
      <h1 className='main-title mt-4 mb-4'>
        Usuários
      </h1>
      <RegisterForm api={api} />
    </div>
  )
}
