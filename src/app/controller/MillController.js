const Mills = require('../models/Mills');

/**
 * Controller that manages the registration and search for the "Harvest".
 * 
 * @param name, name of the Mill.
 */

class MillController{
       
    async store(req, res) {
        /**
         * Stores mill data.
         * Receive the name of the Mill as a parameter in the request.
         */
        try{
            const { name } = req.body;

            /**
             * Saving the received data as parameters.
             */
            const mill = await Mills.create({ name });
            /**
             * Getting the Mill ID
             */
            const id = mill.dataValues.id
            
            /**
             * @return the mill id.
             */
            return res.status(201).json({ id });

        } catch(err){
            return res.status(404).json({ error: err.message })
        }
    }

    async filter(req, res) {
        /**
         * Search for a Mill by name.
         */
        try{
            const { name } = req.params;

            /**
             * Searching.
             */
            const filterMill = await Mills.findAll({ where: { name } });

            /**
             * @return the search data performed.
             */
            return res.status(200).json(filterMill);

        } catch(err){
            
            return res.status(400).json({ error: err.message });
        }
    }

}

module.exports = new MillController();