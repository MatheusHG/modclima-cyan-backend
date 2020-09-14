const MillController = require('../../../src/app/controller/MillController');
const HarvestController = require('../../../src/app/controller/HarvestController');

describe('Checking the different ways to save the Mill in the database', () => {
    test('Should be possible save a mill without harvest in the database', async () => {
        const mill = await MillController.store({ 
            nome: Date.now().toString() 
        });
        
        return expect(mill).toMatchObject({
            id: expect.any(Number),
        });
    });

    test('It should be possible to save multiple crops associated with a mill in the database', async () => {
        const mill = await MillController.store({
            name: Date.now().toString(),
        });

        const harvest = await HarvestController.store({
            id_mill: mill.id,
            code: Date.now().toString(),
            start_date: new Date(),
            end_date: new Date(),
        });
    
        return expect(harvest).toMatchObject({
            id: expect.any(Number),
        });
    });
});