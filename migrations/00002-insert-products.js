// Insert products into database
exports.up = async sql => {
  sql`
    INSERT INTO products (name, img, price, description) VALUES
      ('Lachs Sakko', '/sakko.jpg', 112, 'About looking confident...show the world you can rock this terrific blazer. In case you are wondering, we just might have some fitting shoes to complete your look.')
      
  `;
};

// Remove products from database
exports.down = async sql => {
  sql`
    DELETE FROM products
      WHERE name IN ('Sakko')
  `;
};
