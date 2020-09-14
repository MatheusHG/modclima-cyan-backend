const HarvestController = require('../../../src/app/controller/HarvestController');
const FarmController = require('../../../src/app/controller/FarmController');

describe('Checking the different ways to save a Crop in the database', () => {
    test('Should be possible save a harvest without farm in the database', async () => {
        const harvest = await HarvestController.store({ 
                nome: Date.now().toString(),
                start_date: new Date,
                end_date: new Date
        });
        
        return expect(harvest).toMatchObject({
            id: expect.any(Number),
        });
    })
    test('It should be possible to save multiple farms associated with a Harvest in the database', async () => {
        const today = new Date();

        const harvest = await HarvestController.store({ 
            nome: Date.now().toString(),
            start_date: today,
            end_date: new Date(
                today.getFullYear() + 1,
                today.getMonth(),
                today.getDate(),
            ),
        });

        const farm = await FarmController.store({
            id_harvest: harvest.id,
            code: Date.now().toString(),
            name: Date.now().toString()
        });

        return expect(farm).toMatchObject({
            id: expect.any(Number),
        });
    })
})