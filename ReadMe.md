# Order Management API

## Overview

This is a simple RESTful API for managing orders. It allows users to:

- Place an order by providing product details.
- Retrieve the summary of an order by its unique ID.
- Calculate the total revenue from all placed orders.

Additionally, the API applies dynamic discounts based on order amount and quantity:

- **10% discount** if the order amount exceeds ₹10,000.
- **₹500 flat discount** if the order contains more than 5 items.

The data is stored in-memory, with no  database used.

## Core Features:

1. **Place an Order**: Accepts order details (product name, quantity, price ) and generates a unique order ID.
2. **Get Order Summary**: Retrieves the details of an order using its unique ID.
3. **Calculate Total Revenue**: Calculates and returns the total revenue from all orders.

### Discount Logic:

- **10% Discount**: Applied when the total order amount (quantity × price) exceeds ₹10,000.
- **Additional ₹500 Discount**: Applied if the order contains more than 5 items.
- Both discounts are applied cumulatively and are reflected in the order summary.

## Setup and Usage

### Prerequisites:

- **Node.js** and **npm** (Node Package Manager) installed on your machine.

### Steps to Set Up the Application:

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

## File Structure

├── src/
│   ├-─ controllers/
│   │   └── orderController.js
│   ├── models/
│   │   └── orderModel.js
│   ├── routes/
│   │   └── orderRoutes.js
│   ├── server.js

├── package.json
├── README.md
└── .gitignore
