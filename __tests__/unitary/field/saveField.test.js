const FieldController = require('../../../src/app/controller/FieldController');

describe('Saving the Field to the Database', () => {
    test('Saving the Field without any associated data', async () => {
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