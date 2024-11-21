const db = require("./app/models"); 
const products = [
  // Beds
  {
    product_name: "Classic Bed",
    description: "A comfortable and stylish wooden bed for your home.",
    img: "../imgs/product_images/bed1_product.avif",
    quantity_available: 10,
    price: 200,
    quantity_cart: 0,
    category: "Beds",
  },
  {
    product_name: "Modern Bed",
    description: "A sleek, modern design bed.",
    img: "../imgs/product_images/bed2_product.avif",
    quantity_available: 5,
    price: 300,
    quantity_cart: 0,
    category: "Beds",
  },

  // Furniture
  {
    product_name: "Modern Couch",
    description: "A stylish Couch for your home or workspace.",
    img: "../imgs/product_images/Furniture1_product.avif",
    quantity_available: 15,
    price: 50,
    quantity_cart: 0,
    category: "Furniture",
  },
  {
    product_name: "Wooden Chair",
    description: "A durable wooden chair for your home or office.",
    img: "../imgs/product_images/Furniture2_product.avif",
    quantity_available: 7,
    price: 150,
    quantity_cart: 0,
    category: "Furniture",
  },

  // Decoration
  {
    product_name: "Modern Vase",
    description: "Beautiful Vase to enhance your home decor.",
    img: "../imgs/product_images/Decoration1_product.avif",
    quantity_available: 20,
    price: 100,
    quantity_cart: 0,
    category: "Decoration",
  },
  {
    product_name: "Elegant Vase",
    description: "Elegant vase for flowers and home decoration.",
    img: "../imgs/product_images/Decoration2_product.avif",
    quantity_available: 12,
    price: 70,
    quantity_cart: 0,
    category: "Decoration",
  },

  // Storage
  {
    product_name: "Shelf",
    description: "A multi-purpose shelf for storage and display.",
    img: "../imgs/product_images/Storage1_product.avif",
    quantity_available: 8,
    price: 40,
    quantity_cart: 0,
    category: "Storage",
  },
  {
    product_name: "Storage Box",
    description: "A large storage box to organize your belongings.",
    img: "../imgs/product_images/Storage2_product.avif",
    quantity_available: 6,
    price: 120,
    quantity_cart: 0,
    category: "Storage",
  },

  // Home
  {
    product_name: "Classic Bed",
    description: "A comfortable and stylish wooden bed for your home.",
    img: "../imgs/product_images/bed1_product.avif",
    quantity_available: 10,
    price: 200,
    quantity_cart: 0,
    category: "Home",
  },
  {
    product_name: "Modern Couch",
    description: "A stylish Couch for your home or workspace.",
    img: "../imgs/product_images/Furniture1_product.avif",
    quantity_available: 15,
    price: 50,
    quantity_cart: 0,
    category: "Home",
  },
  {
    product_name: "Modern Vase",
    description: "Beautiful Vase to enhance your home decor.",
    img: "../imgs/product_images/Decoration1_product.avif",
    quantity_available: 20,
    price: 100,
    quantity_cart: 0,
    category: "Home",
  },
  {
    product_name: "Shelf",
    description: "A multi-purpose shelf for storage and display.",
    img: "../imgs/product_images/Storage1_product.avif",
    quantity_available: 8,
    price: 40,
    quantity_cart: 0,
    category: "Home",
  },
];

const seedProducts = async () => {
  try {
    await db.sequelize.sync(); // Ensure the database schema is ready

    // Delete all existing products
    await db.products.destroy({ where: {}, truncate: true });
    console.log("Existing products cleared from the database.");

    // Insert new products
    await db.products.bulkCreate(products);
    console.log("New products have been added to the database!");

    process.exit(); // Exit the script
  } catch (error) {
    console.error("Error seeding products:", error);
    process.exit(1); // Exit with an error
  }
};

seedProducts();
