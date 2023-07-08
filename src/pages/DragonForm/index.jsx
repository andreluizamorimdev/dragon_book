import React from 'react';

const DragonForm = () => {

  return (
    <div className="card">
      <h2>Cadastro de Dragão</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            name="name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="imageUrl">URL da Imagem:</label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
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
          />
        </div>
        <div className="form-group">
          <label htmlFor="defense">Defesa:</label>
          <input
            type="number"
            id="defense"
            name="defense"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="element">Elemento:</label>
          <select
            id="element"
            name="element"
            required
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