const Field = require('../src/app/models/Field');
const Farm = require('../src/app/models/Farm');
const Harvest = require('../src/app/models/Harvest');
const Mill = require('../src/app/models/Mill');

(async () => {
  await Field.sync({ force: true });
  await Farm.sync({ force: true });
  await Harvest.sync({ force: true });
  await Mill.sync({ force: true });
})();