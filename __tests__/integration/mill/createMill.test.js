const request = require('supertest');
const app = require('../../../src/server');
const { controllerMoinho } = require('../../../src/app/controller/MillController');

describe('Verificando as formas de criar Moinho', () => {
  test('Deve ser possível criar um moinho sem colheita', async () => {
    const response = await request(app)
      .post('/moinho')
      .send({
        nome: `${Date.now().toString()}`,
      })

    expect(201);
  });

  test('Deve ser possível criar um moinho associado a várias colheitas', () => {
    const moinho = await controllerMoinho.store({
      nome: `${Date.now().toString()}`
    });

    const response = await request(app)
      .post('/colheita')
      .send({
        id_moinhos: moinho.id,
        colheitas: 
        [
          {
            codigo: Date.now().toString(),
            data_inicio: new Date(),
            data_fim: new Date()	
          }
        ]
      })
      
    expect(201);
  })

});