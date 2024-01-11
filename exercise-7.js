//7.1
db.pizzaOrders.deleteMany({
    customer_name: "jack"
},)

//7.2
db.pizzaOrders.find({
    customer_name: "jack"
},)