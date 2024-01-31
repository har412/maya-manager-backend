const mongoose = require('mongoose')

const incomeSchema = new mongoose.Schema(
    {
        amount: {
            type: Number,
            required: true,
            trim: true
        },
        category: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true
        },
    },
    {
        timestamps: true
    }
)

const Income = mongoose.model('income', incomeSchema)

module.exports = Income