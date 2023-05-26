const mongoose = require("mongoose")

async function main() {
    try {
        await mongoose.connect(
            "mongodb+srv://samiralemos2016:<password>@clustersam.hoeyguw.mongodb.net/?retryWrites=true&w=majority"
        )
        console.log("CONECTADO AO SERVIDOR")
    } catch (error) {
        console.log("Erro: ", error)
    }

}

module.exports = main