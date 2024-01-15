db.pizzaOrders.find({
  $and: [{ quantity: { $lt: 5 } }, { credit_card_type: "mastercard" }],
});

db.pizzaOrders.find({
  $and: [
    { quantity: { $lte: 5 } },
    { quantity: { $gte: 1 } },
    { size: "small" },
  ],
});

db.pizzaOrders.find({
  $and: [
    { quantity: { $gt: 10 } },
    { $nor: [{ credit_card_type: "mastercard" }] },
  ],
});
