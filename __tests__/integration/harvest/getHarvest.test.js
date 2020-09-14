const request = require('supertest');
const server = require('../../../src/server');
const HarvestController = require('../../../src/app/controller/HarvestController');

describe('Harvest Search', () => {
    test('Getting Harvest by Code', async () => {
        const today = new Date();

        const code = Date.now().toString();

        await HarvestController.store({ 
            code,
            start_date: today,
            end_date: new Date(
                today.getFullYear() + 1,
                today.getMonth(),
                today.getDate(),
            ),
        });

        await request(server).get(`/harvest/${code}`);

        return expect(200);
    })

    test('Obtaining Harvest by start and end date', async () => {
        const today = new Date();
        
        const start_date = today;
        const end_date = new Date(
            today.getFullYear() + 1,
            today.getMonth(),
            today.getDate(),
        )

        await request(server).get(`/harvest/${start_date}/${end_date}`);

        return expect(200);

    })
});