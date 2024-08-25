import Battle from "../models/battle.model.js";

const battleController = {

    getAllChars: async (req, res) => {
        try {
            const allChars = await Battle.find()
            res.json(allChars)
        }
        catch (error) {
            console.log(error)
            res.status(400).json(error)
        }
    },

    getCharById: async (req, res) => {
        try {
            const oneChar= await Battle.findById(req.params.id)
            res.json(oneChar)
        }
        catch (error) {
            console.log(error)
            res.status(400).json(error)
        }
    },

    createChar: async (req, res) => {
        try {
            const newChar = await Battle.create(req.body)
            res.json(newChar)
        }
        catch (error) {
            console.log(error)
            res.status(400).json(error)
        }
    },

    updateChar: async (req, res) => {
        const options = {
            new: true,
            runValidators: true
        }
        try {
            const updatedChar = await Battle.findByIdAndUpdate(req.params.id, req.body, options)
            res.json(updatedChar)
        }
        catch (error) {
            console.log(error)
            res.status(400).json(error)
        }
    },

    deleteChar: async (req, res) => {
        try {
            const deletedChar = await Battle.findByIdAndDelete(req.params.id)
            res.json(deletedChar)
        }
        catch (error) {
            console.log(error)
            res.status(400).json(error)
        }
    },
    
}

export default battleController