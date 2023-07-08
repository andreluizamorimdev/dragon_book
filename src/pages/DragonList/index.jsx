import React from 'react';

const DragonList = () => {
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
          <tr>
            <td>
              <img
                alt="Hydra Dragon 3"
                src="https://dci-static-s1.socialpointgames.com/static/dragoncity/mobile/ui/dragons/ui_1023_dragon_cool_fire_b_1.png"
              />
            </td>
            <td>Dragão 1</td>
            <td>Fogo</td>
            <td>100</td>
            <td>80</td>
          </tr>
          <tr>
            <td>
              <img
                alt="Hydra Dragon 3"
                src="  https://dci-static-s1.socialpointgames.com/static/dragoncity/mobile/ui/dragons/ui_1104_dragon_fireice_b_1.png"
              />
            </td>
            <td>Dragão 2</td>
            <td>Água</td>
            <td>90</td>
            <td>95</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DragonList;