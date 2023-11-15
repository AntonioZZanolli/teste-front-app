import { Button, TextField } from '@mui/material';
import './index.css'
import { useState } from 'react';
import { IDataRequest } from '../../provider/api';

const CriarClientePage = () => {
    const [nome, setNome] = useState<string>('');
    const [sobreNome, setSobreNome] = useState<string>('');
    const [dataNascimento, setDataNascimento] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [telefone, setTelefone] = useState<string>('');

    const enviarCliente = () => {
        const request: IDataRequest = {
            url: "/clientes/",
            data: {
                nome,
                sobreNome,
                dataNascimento,
                email,
                telefone
            }
        }
    }

    return (
        <div className="body">
            <div className="box">
                <div className='box-input'>
                    <TextField
                        variant='outlined'
                        label='Nome'
                        fullWidth
                        onChange={(t) => {
                            setNome(t.target.value);
                        }}
                    />
                </div>
                <div className="box-input">
                    <TextField
                        variant='outlined'
                        label='Sobrenome'
                        fullWidth
                        onChange={(t) => {
                            setSobreNome(t.target.value);
                        }}
                    />
                </div>
                <div className="box-input">
                    <TextField
                        variant='outlined'
                        label='Data de Nascimento'
                        fullWidth
                        onChange={(t) => {
                            setDataNascimento(t.target.value)
                        }}
                    />
                </div>
                <div className="box-input">
                    <TextField
                        variant='outlined'
                        label='E-mail'
                        fullWidth
                        onChange={(t) => {
                            setEmail(t.target.value)
                        }}
                    />
                </div>
                <div className="box-input">
                    <TextField
                        variant='outlined'
                        label='Telefone'
                        fullWidth
                        onChange={(t) => {
                            setTelefone(t.target.value)
                        }}
                    />
                </div>

                <div className='box-input'>
                    <Button variant='contained' fullWidth onClick={() => { enviarCliente() }}>Enviar Cliente</Button>
                </div>
            </div>
        </div>
    );
}

export default CriarClientePage;    