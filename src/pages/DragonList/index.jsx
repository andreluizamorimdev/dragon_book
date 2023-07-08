import React, { useEffect, useState } from 'react';

const DragonList = () => {

  const [dragoes, setDragoes] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/dragoes')
      .then(async (response) => {
        const data = await response.json()
        setDragoes(data)
      })
  }, [])

  return (
    <div className="card-list">
      <h2>Tabela de Dragões</h2>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Elemento</th>
            <th>Poder de Ataque</th>
            <th>Defesa</th>
          </tr>
        </thead>
        <tbody>
          {
            dragoes.map(dragao => (
              <tr key={dragao.id}>
                <td>
                  <img
                    alt="Hydra Dragon 3"
                    src={dragao.url}
                  />
                </td>
                <td>{dragao.name}</td>
                <td>{dragao.tipo}</td>
                <td>{dragao.ataque}</td>
                <td>{dragao.defesa}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default DragonList;