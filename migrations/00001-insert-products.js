// Insert products into database
exports.up = async sql => {
  sql`
    INSERT INTO products (name, img, price, description) VALUES
      ('Razor', '/razor1.jpg', 11, 'Show off your freshly shaved face with our 100% vegan razors. They are made by completely sustainable means. No animals were hurt, maybe some robots, but definitely no animals!'),
      ('Versatility Sneakers', '/af1.jpg', 100, 'What are those??! Improve your life with these allround sneakers. Wear them with your jeans, sweatpants or even a suit. These shoes will never make you look bad, only you can make them look bad!'),
      ('Screen Cleaner', '/screenCleaner.jpg', 7, 'Seemingly nobody likes a smudgy screen, whether it be your laptop or smartphone. Or your glasses. Just like your face, keep your screen clean and make it easy to look at!'),
      ('Electric Razor', '/electricRazor.jpg', 70, 'You are afraid that a cleanly shaved face will catapult you back into puberty, then worry no more. Give your face a clean haircut, just like the one on top of your head. Top it off with our soothing oils for your holy beard.')
  `;
};

// Remove products from database
exports.down = async sql => {
  sql`
    DELETE FROM products
      WHERE name IN ('Razor', 'Versatility Sneakers', 'Screen Cleaner', 'Electric Razor')
  `;
};
