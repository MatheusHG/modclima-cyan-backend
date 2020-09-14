const FieldController = require('../../../src/app/controller/FieldController');

describe('Search of the Field in the database', () => {
    test('Searching Field by Code', async () => {
        const code = Date.now().toString();
        
        await FieldController.store({ 
            code: code,
            latitude: '-7.23072',
            longitude: '-35.8817'
        });
        
        await FieldController.filter({ code: code });

        return expect(200);
    })
})