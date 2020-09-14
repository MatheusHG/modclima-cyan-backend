const FarmController = require('../../../src/app/controller/FarmController');

describe('Search of the Mill in the database', () => {
    test('Searching Moinho by name', async () => {
        const code = Date.now().toString();
        
        await FarmController.store({ 
            code: code,
            name: 'MillTest'
        });
        await FarmController.filter({ name: 'MillTest' });

        return expect(200);
    })
})