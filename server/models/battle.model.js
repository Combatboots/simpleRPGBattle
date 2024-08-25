import {model, Schema} from "mongoose"

const BattleSchema = new Schema(
    {
        "name": {
            "type": String,
            "required": [true, "Character must have a name!"],
            "minlength": [3, "Name must be at least 3 characters long!"],
            "maxlength": [250, "Name can not exceed 240 characters!"]
        },
        "warrior": {
            "type": Boolean
        },
        "mage": {
            "type": Boolean
        },
        "rogue": {
            "type": Boolean
        },
    },
    {
        "timestamps": true
    }
)

const Battle = model("Battle", BattleSchema)

export default Battle