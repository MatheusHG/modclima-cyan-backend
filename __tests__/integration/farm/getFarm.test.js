const request = require('supertest');
const server = require('../../../src/server');
const FarmController = require('../../../src/app/controller/FarmController');

describe('Farm Search', () => {
    test('Getting farms by name and code', async () => {
        const code = Date.now().toString();

        await FarmController.store({ 
            code, 
            name: 'TestFarm'
        });

        await request(server).get(`/farm/TestFarm/${code}`);

        return expect(200);
    })
});
