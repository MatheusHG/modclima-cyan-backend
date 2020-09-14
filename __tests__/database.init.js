const Moinho = require('../src/app/models/Moinhos');
const Colheita = require('../src/app/models/Colheitas');

(async () => {
    await Moinho.sync({ force: true });
    await Colheita.sync({ force: true });
})();