//3.1
db.pizzaOrders.find({
}).sort({ total_price: -1})

//3.2
db.pizzaOrders.find({
}).sort({ created_at: 1})