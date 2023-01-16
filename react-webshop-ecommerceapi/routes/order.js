const router = require("express").Router()
const Order = require("../models/Order")
const { verifyTokenAndAuthorization, verifyTokenAndAdmin, verifyToken } = require("./verifyToken")

//CREATE
router.post("/", verifyToken, async (req, res) => {
    const newOrder = new Order(req.body)

    try {
        const savedOrder = await newOrder.save()
        res.status(200).json(savedOrder)
    } catch (err) {
        res.status(500).json(err)
    }
})

//UPDATE
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        const updatedOrder = Order.findByIdAndUpdate(req.params.id,
            {
                $set: req.body
            },
            { new: true } //Makes it so it shows the newly updated order
        )
        res.status(200).json(updatedOrder)    
    } catch (err) {
        res.status(500).json(err)   
    }
})

//DELETE
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        await Order.findByIdAndDelete(req.params.id)
        res.status(200).json("Order has been deleted...")        
    } catch (err) {
     res.status(500).json(err)
    }
})

//GET USER ORDERS
router.get("/find/:userId", verifyTokenAndAuthorization, async (req, res) => {
    try {
        const orders = await Order.find({ userId: req.params.userId })
        res.status(200).json(orders) 
    } catch (err) {
        res.status(500).json(err)
    }
})

//GET ALL
router.get("/", verifyTokenAndAdmin, async (req, res) => {
    try {
        const orders = await Order.find()
        res.status(200).json(orders)    
    } catch (err) {
        res.status(500).json(err)
    }
})

//GET MONTHLY INCOME
router.get("/income", verifyTokenAndAdmin, async (req, res) => {
    const date = new Date()
    const lastMonth = new Date(date.setMonth(date.getMonth() -1))
    const previousMonth = new Date(date.setMonth(lastMonth.getMonth() -1)) //for example lets say its now september first then lastmonth will be august first and previousmonth will be july first

    console.log(lastMonth);
    console.log(previousMonth);

    try {
        const income = await Order.aggregate([
            { $match: { createdAt: { $gte: previousMonth } } }, //Basically last 2 months
            {
                $project: {
                    month: { $month: "$createdAt" },
                    sales: "$amount" // amount from an order
                }
            },
            {
                $group: {
                    _id: "$month",
                    total: { $sum: "$sales"} // total of all amounts of all orders combined from the last 2 months: _id: 1 = last month, _id: 2 = the month before that
                }
            }
        ])
        res.status(200).json(income)
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router