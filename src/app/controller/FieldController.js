const Fields = require('../models/Fields');

class FieldController{
    
    async store(req, res) {
        /**
         * Stores field data.
         * Receive the code and field coordinates in the requisition, in addition to the id (if any) of the Farm to which it is associated.
         */
        try{
            const { fields, id_farm } = req.body;

            /**
             * Checking if the Field code already exists in the database.
             */
            for(var i=0; i<fields.length; i++){
                const response = await Fields.findOne(fields[i]);
                if(response)
                    return res.status(400).json({message: "Existing Field Code"});
            }
            /**
             * Saving the received data as parameters.
             */
            for(var i=0; i<fields.length; i++){
                const response = await Fields.create({ ...fields[i], id_farm });
                if(fields[i].associate)
                    var id = response.dataValues.id;
            }

            return res.status(201).json({ id });

        } catch(err){
            
            return res.status(404).json({ error: err.message })
        }
    }

    async filter(req, res) {
        /**
         * Search for a field by name and coordinates.
         */
        try{
            const { code } = req.params;
            /**
             * Searching.
             */
            const filterField = await Fields.findAll({ where: { code } });

            /**
             * Returns "Field not found!" if you have none.
             */
            if(filterField.length === 0)
                return res.status(200).json({ message: 'Field not found!' });

            return res.status(200).json(filterField);

        } catch(err){
            
            return res.status(404).json({ error: err.message });
        }
    }
}

module.exports = new FieldController();