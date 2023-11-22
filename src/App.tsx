import { useEffect, useState } from 'react';
import './App.css';
import api, { IDataRequest, IDataResponse } from './provider/api';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Link, useNavigate } from 'react-router-dom';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete'

function App() {
  const [clientes, setClientes] = useState<any>([]);
  const navigate = useNavigate();

  const colunas: GridColDef[] = [
    {
      field: 'id',
      headerName: 'ID'
    },
    {
      field: 'nome',
      headerName: 'Nome'
    },
    {
      field: 'sobreNome',
      headerName: 'Sobrenome'
    },
    {
      field: 'dataNascimento',
      headerName: 'Data de Nascimento',
      width: 150

    },
    {
      field: 'email',
      headerName: 'E-mail'
    },
    {
      field: 'telefone',
      headerName: 'Telefone'
    },
    {
      field: "actions",
      headerName: "",
      renderCell: (params) =>
        <>
          <IconButton
            size='small'
            onClick={() => {
              deletarRegistro(Number(params.id))
            }}
          >
            <DeleteIcon color='error' />
          </IconButton>
        </>
    }
  ]

  const carregarClientes = async () => {
    const request: IDataRequest = {
      url: "/clientes/"
    }

    const response: IDataResponse = await api.get(request);
    if (response.statusCode === 200) {
      setClientes(response.data)
    }
  };

  useEffect(() => {
    carregarClientes();
  }, []);

  const deletarRegistro = async (id: number) => {
    const request: IDataRequest = {
      url: `/clientes/${id}`
    }

    const response: IDataResponse = await api.delete(request);
    if (response.statusCode === 200) {
      alert(`Registro ${id} deletado com sucesso`)
      carregarClientes();
    }
  }

  return (
    <div>
      <button onClick={() => { carregarClientes() }}>
        Carregar
      </button>

      <Link to={'/criarCliente'}>
        Criar Cliente
      </Link>

      <div>
        <DataGrid
          rows={clientes}
          columns={colunas}
          pageSizeOptions={[5, 4, 15]}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5
              }
            }
          }}
          onRowDoubleClick={(param) => {
            navigate(`/criarCliente/${param.id}`)
          }}
        />
      </div>
    </div>
  );
}

export default App;
