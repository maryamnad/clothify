const Cart=require('./../models/cart')
const newcart = async (req, res) => {
    try {
        const { _id, title, price, stock, category, sale, onsale, link, userid } = req.body;

        // Check if the item with the same clothid already exists in the cart
        let cartItem = await Cart.findOne({ clothid: _id, userid: userid });

        if (cartItem) {
            // If it exists, increase the stock by 1
            cartItem.stock += 1;
            await cartItem.save();
            res.status(200).json({ message: 'Product stock increased successfully', Cart: cartItem });
        } else {
            // If it doesn't exist, create a new cart entry
            cartItem = new Cart({
                clothid: _id,
                title,
                price,
                stock: 1,
                category,
                sale,
                onsale,
                link,
                userid
            });

            await cartItem.save();
            res.status(200).json({ message: 'Product added successfully', Cart: cartItem });
        }
    } catch (error) {
        console.error('Error adding product:', error);
        res.status(500).json({ message: 'Internal server error', error: error });
    }
};

const getcart = async (req, res) => {
    try {
        const userId = req.id;
        console.log(userId)

        // Fetch all cart items for the specified user
        const cartItems = await Cart.find({ userid: userId });

        // Return the cart items in the response
        res.status(200).json(cartItems);
        console.log(cartItems)
    } catch (error) {
        console.error('Error fetching cart items:', error);
        res.status(500).json({ message: 'Internal server error', error: error });
    }
};

exports.newcart=newcart;
exports.getcart=getcart;