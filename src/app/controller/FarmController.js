const Farms = require('../models/Farms');

/**
 * Controller that manages the registration and search for the "Farm".
 * 
 * @param farms, receiving one or several farms.
 * @param id_harvest, Harvest id to whom the farm will be associated.
 */
class FarmController{
    async store(req, res) {
        /**
         * Stores Farm data.
         * Receiving in the requisition the code and name of the Farm, in addition to the id (if any) of the Harvest to which it is associated.
         */
        try{
            const { farms, id_harvest } = req.body;
            /**
             * Checking if the Farm code already exists in the database.
             */
            for(var i=0; i<farms.length; i++){
                const response = await Farms.findOne(farms[i]);
                if(response)
                    return res.status(400).json({message: "Existing Farm Code"});
            }
            /**
             * Saving the received data as parameters.
             */
            for(var i=0; i<farms.length; i++){
                const response = await Farms.create({ ...farms[i], id_harvest });
                if(farms[i].associate)
                    var id = response.dataValues.id;
            }
            /**
             * @return the farm id.
             */
            return res.status(201).json({ id });

        } catch(err){
            
            return res.status(404).json({ error: err.message });
        }
    }

    async filter(req, res) {
        /**
         * Search for a farm by name and code.
         */
        try{
            const { name, code } = req.params;
            /**
             * Searching.
             */
            const filterFarm = await Farms.findAll({ where: { name, code } });
            
            /**
             * Returns a "Farm not found!" if you don't have any.
             */
            if(filterFarm.length === 0)
                return res.status(200).json({ message: 'Farm not found!' });

            /**
             * @return the search data performed.
             */
            return res.status(200).json(filterFarm);

        } catch(err){
            return res.status(404).json({ error: err.message })
        }
    }
}

module.exports = new FarmController();