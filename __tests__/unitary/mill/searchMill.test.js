const MillController = require('../../../src/app/controller/MillController');

describe('Search of the Mill in the database', () => {
    test('Searching Mill by name', async () => {
        const code = Date.now().toString();
        
        await MillController.store({ 
            name: code
        });
        
        await MillController.filter({ name: code });

        return expect(200);
    })
})