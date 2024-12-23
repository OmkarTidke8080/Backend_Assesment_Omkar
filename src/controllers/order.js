let orders = [];

//  New Order API
export const order = (req, res) => {
  const { product_Name, quantity, price } = req.body;

  if (!product_Name || !quantity || !price) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const order = {
    id: orders.length + 1,
    product_Name,
    quantity,
    price,
    total: quantity * price,
  };

  orders.push(order);
  res.status(201).json(order);
};

// get All Orders
export const getAllOrders = (req, res) => {
  res.status(200).json(orders);
};



// get total revenue
export const totalRevenue = (req, res) => {
  let sum = 0;

  for (let i = 0; i < orders.length; i++) {
    sum += orders[i].price * orders[i].quantity; 
  }

  res.status(200).json({ totalRevenue: sum });
};
