import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import api, { IDataRequest, IDataResponse } from './provider/api';

function App() {
  const [clientes, setClientes] = useState<any>([]);

  const carregarClientes = async () => {
    const request: IDataRequest = {
      url: "/clientes/"
    }

    const response: IDataResponse = await api.get(request);
    if (response.statusCode === 200) {
      setClientes(response.data)
    }
  };

  return (
    <div>
      <button onClick={() => { carregarClientes() }}>
        Carregar
      </button>
    </div>
  );
}

export default App;
