const HarvestController = require('../../../src/app/controller/HarvestController');

describe('Search of the Harvest in the database', () => {
    test('Searching Harvest by Code', async () => {
        const code = Date.now().toString();
        
        await HarvestController.store({ 
            code: code,
            start_date: '-7.23072',
            end_date: '-35.8817'
        });
        
        await HarvestController.filter({ code: code });

        return expect(200);
    })

    test('Searching Harvest by start and end date', async () => {
        const today = new Date();

        const code = Date.now().toString();
        
        await HarvestController.store({ 
            code: code,
            start_date: today,
            end_date: "01/12/2021"
        });
        
        await HarvestController.filter({ start_end: today, end_date: "01/12/2021" });

        return expect(200);
    })
})