//1.1
db.pizzaOrders.findOne(
    { customer_name: "Cherlyn" }
  )
//1.2
db.pizzaOrders.find(
    { credit_card_type: "mastercard" }
  )  
//1.3
db.pizzaOrders.find(
    { size: "small" }
  ).limit(5)
