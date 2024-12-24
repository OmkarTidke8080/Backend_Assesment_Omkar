let orders = [];

// Create  Order
export const order = (req, res) => {
  const { products } = req.body;

  if (!products || !Array.isArray(products) || products.length === 0) {
    return res
      .status(400)
      .json({ error: "Products are required and must be an array" });
  }

  let totalAmount = 0;
  let discount = 0;

  products.forEach((product) => {
    if (!product.product_Name || !product.quantity || !product.price) {
      return res.status(400).json({
        error: "Each product must have a product_Name, quantity, and price",
      });
    }

    totalAmount += product.quantity * product.price;
  });

  // discount based on price exceeding 10000
  if (totalAmount > 10000) {
    discount += totalAmount * 0.1;
  }

  // discount based on more than 5 items
  if (products.length > 5) {
    discount += 500;
  }

  const finalAmount = totalAmount - discount;

  // Create an order object
  const order = {
    id: orders.length + 1,
    products,
    totalAmount,
    discount,
    finalAmount,
  };

  orders.push(order);

  res.status(201).json(order);
};

// Get All Orders
export const getAllOrders = (req, res) => {
  if (orders.length > 0) {
    res.status(200).json(orders);
  } else {
    res.status(200).json({
      message: "No orders available.",
    });
  }
};

// get total revenue
export const totalRevenue = (req, res) => {
  let sum = 0;

  orders.forEach((order) => {
    order.products.forEach((product) => {
      sum += product.price * product.quantity;
    });
  });

  res.status(200).json({ totalRevenue: sum });
};
