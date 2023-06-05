import { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import IAxios from '../../interfaces/IAxios';
import MainAlert from '../Alert';
import './Form.scss'

export default function RegisterForm({ api }: IAxios) {
  const [formData, setFormData] = useState({
    nome: '',
    sobrenome: '',
    cpf: ''
  })
  
  const [alertMessage, setAlertMessage] = useState('')
  const [alertVariant, setAlertVariant] = useState('')

  useEffect(() => {
    if (alertMessage) {
      const timer = setTimeout(() => {
        setAlertMessage('')
        setAlertVariant('')
      }, 3000);

      return () => clearTimeout(timer)
    }
  }, [alertMessage])

  async function handleSubmit (e: React.FormEvent<HTMLFormElement>) : Promise<void> {
    e.preventDefault()

    try {
      await api.post('/users', formData);

      setFormData({
        nome: '',
        sobrenome: '',
        cpf: ''
      })

      setAlertMessage('Formulário enviado com sucesso!');
      setAlertVariant('success');
    } catch (error) {
      setAlertMessage('Ocorreu um erro ao enviar o formulário.')
      setAlertVariant('danger')
      console.error('Ocorreu um erro ao enviar seu formulário', error)
    }
  }

  function handleChange (e: React.ChangeEvent<HTMLInputElement>) : void  {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
      {alertMessage && (
        <MainAlert
          message={alertMessage}
          variant={alertVariant}
          onClose={() => setAlertMessage('')}
        />
      )}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formNome">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formSobrenome">
          <Form.Label>Sobrenome</Form.Label>
          <Form.Control
            type="text"
            name="sobrenome"
            value={formData.sobrenome}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formCpf">
          <Form.Label>CPF</Form.Label>
          <Form.Control
            type="text"
            name="cpf"
            value={formData.cpf}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Button 
          className='btn-bg-secondary my-3'
          type="submit"
        >
          Enviar
        </Button>
      </Form>
    </>
  );
};
