const FarmController = require('../../../src/app/controller/FarmController');
const FieldController = require('../../../src/app/controller/FieldController');

describe('Checking the different ways to save the Farm in the database', () => {
    test('Should be possible save a farm without field in the database', async () => {
        const farm = await FarmController.store({ 
            nome: Date.now().toString(),
            code: Date.now().toString()
        });
    
        return expect(farm).toMatchObject({
            id: expect.any(Number),
        });
    })

    test('It should be possible to save multiple fields associated with a Farm in the database', async () => {
        const farm = await FarmController.store({ 
            nome: Date.now().toString(),
            code: Date.now().toString()
        });

        const field = await FieldController.store({
            id_farm: farm.id,
            code: Date.now().toString(),
            latitude: Date.now().toString(),
            longitude: Date.now().toString()
        });

        return expect(field).toMatchObject({
            id: expect.any(Number),
        });
    })
});