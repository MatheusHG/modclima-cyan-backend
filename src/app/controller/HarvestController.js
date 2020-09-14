const Harvests = require('../models/Harvests');

/**
 * Controller that manages the registration and search for the "Harvest".
 * 
 * @param fields, receiving one or several harvests.
 * @param id_mill, Mill ID to which the Harvest will be associated.
 */

class HarvestController{
    
    async store(req, res) {
        /**
         * Stores harvest data.
         * Receive the code, start and end date of the harvest in the request, in addition to the id (if any) of the Mill to which it is associated.
         */
        try{
            const { harvests, id_mill } = req.body;

            /**
             * Saving the received data as parameters.
             */
            for(var i=0; i<harvests.length; i++){
                const response = await Harvests.create({ ...harvests[i], id_mill });
                if(harvests[i].associate)
                    var id = response.dataValues.id;
            }

            /**
             * @return the Harvest id.
             */
            return res.status(201).json({ id });

        } catch(err){
            return res.status(404).json({ error: err.message })
        }
    }

    async filterCod(req, res) {
        /**
         * Search for a Harvest by code.
         */
        try{
            const { code } = req.params;

            /**
             * Searching.
             */
            const filterHarvest = await Harvests.findAll({ where: { code } })

            /**
             * Returns "Harvest not found!" if you have none.
             */
            if(filterHarvest.length === 0)
                return res.status(200).json({ message: 'Harvest not found!' });

            /**
             * @return the search data performed.
             */
            return res.status(200).json(filterHarvest)

        } catch(err){

            return res.status(404).json({ error: err.message })
        }
    }

    async filterDate(req, res) {
        /**
         * Search for a Harvest by the start and end date.
         */
        try{
            const { start_date, end_date } = req.params;
            
            /**
             * Searching.
             */
            const filterHarvest = await Harvests.findAll({ where: { start_date, end_date } })
            
            /**
             * Returns "Harvest not found!" if you have none.
             */
            if(filterHarvest.length === 0)
                return res.status(200).json({ message: 'Harvest not found!' });

            /**
             * @return the search data performed.
             */
            return res.status(200).json(filterHarvest)

        } catch(err){
            return res.status(404).json({ error: err.message })
        }
    }
}

module.exports = new HarvestController();