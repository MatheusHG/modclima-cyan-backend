const request = require('supertest');
const app = require('../../../src/server');
const { controllerMoinho } = require('../../../src/app/controller/MillController');

describe('Checking the ways to create Mill', () => {
  test('It must be possible to create a mill without harvesting', async () => {
    const response = await request(app)
      .post('/moinho')
      .send({
        nome: `${Date.now().toString()}`,
      })

    expect(201);
  });

  test('It must be possible to create a mill associated with several harvests', () => {
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