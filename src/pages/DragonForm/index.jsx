import React, { useState } from 'react';

const DragonForm = () => {

  const [name, setName] = useState('')
  const [url, setUrl] = useState('')
  const [ataque, setAtaque] = useState(0)
  const [defesa, setDefesa] = useState(0)
  const [tipo, setTipo] = useState('')

  /*
  const [dragon, setDragon] = useState({
    name: '',
    url: '',
    ataque: 0
  })
  */

  const handleSubmit = (event) => {
    event.preventDefault()

    fetch('http://localhost:3000/dragoes', {
      method: 'POST',
      body: JSON.stringify({
        name: name,
        url: url,
        ataque: ataque,
        defesa: defesa,
        tipo: tipo
      }),
      headers: {
        'Content-type': 'application/json'
      }
    })
    .then(() => {
        alert('cadastrado com sucesso')
    })
    .catch(() => {
      alert('Erro ao cadastrar')
    })
  }

  return (
    <div className="card">
      <h2>Cadastro de Dragão</h2>
      <form onSubmit={handleSubmit}>
        <img src={url} width={100} />
        <div className="form-group">
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="imageUrl">URL da Imagem:</label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            value={url}
            onChange={(event) => setUrl(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="attackPower">Poder de Ataque:</label>
          <input
            type="number"
            id="attackPower"
            name="attackPower"
            required
            value={ataque}
            onChange={(event) => setAtaque(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="defense">Defesa:</label>
          <input
            type="number"
            id="defense"
            name="defense"
            required
            value={defesa}
            onChange={(event) => setDefesa(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="element">Elemento:</label>
          <select
            id="element"
            name="element"
            required
            value={tipo}
            onChange={(event) => setTipo(event.target.value)}
          >
            <option value="">Selecione um elemento</option>
            <option value="Fogo">Fogo</option>
            <option value="Água">Água</option>
            <option value="Terra">Terra</option>
            <option value="Ar">Ar</option>
          </select>
        </div>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default DragonForm;