const Cart=require('./../models/cart')
const newcart = async (req, res) => {
    try {
      // Extract the image object from the request body
        const { title, price, stock, category,sale,onsale,link,userid } = req.body;
        console.log(req.body)
  
        const cart = new Cart({
          title,
          price,
          stock,
          category,
          sale,
          onsale,
          link,
          userid
        });
  
        await cart.save();
  
        res.status(200).json({ message: 'Product added successfully', Cart: cart });
    } catch (error) {
      console.error('Error adding product:', error);
      res.status(500).json({ message: 'Internal server error', error: error });
    }
  };

exports.newcart=newcart