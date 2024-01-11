//4.1
db.pizzaOrders.find({
    $and: [
      {quantity: {$lte: 5}},
      {credit_card_type: "mastercard"}
    ]
      })

//4.2
db.pizzaOrders.find({
    $and: [
      {quantity: {$lte: 5}},
      {size: "small"}
    ]
      })

//4.3
db.pizzaOrders.find({
    $and: [
      {quantity: {$lte: 5}},
      {size: "small"}
    ]
      })      