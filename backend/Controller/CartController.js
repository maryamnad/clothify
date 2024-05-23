const Cart=require('./../models/cart')
const newcart = async (req, res,next) => {
    try {
        const { _id, title, price, stock, category, sale, onsale, link, userid } = req.body;
        console.log(_id)
        clothid=String(_id)
        console.log(clothid)
        
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
                clothid,
                title,
                price,
                stock: 1,
                category,
                sale,
                onsale,
                link,
                userid
            });
            console.log(cartItem)

            await cartItem.save();
            
            res.status(200).json({ message: 'Product added successfully', Cart: cartItem });
        }
        req.body=cartItem
    } catch (error) {
        console.error('Error adding product:', error);
        res.status(500).json({ message: 'Internal server error', error: error });
    }
    next()
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

const deleteCart = async (req, res,next) => {
    try {
        const productId = req.params._id;
        console.log(productId)

        const cartItem = await Cart.findByIdAndDelete(productId)
        req.body=cartItem
        res.status(200).json({ message: 'Product removed from cart successfully' });
    } catch (error) {
        console.error('Error removing product from cart:', error);
        res.status(500).json({ message: 'Internal server error', error: error });
    }
    next();
};

const increaseCartQuantity = async (req, res,next) => {
    try {
        const productId = req.params._id;
        console.log(productId)

        const cartItem = await Cart.findById(productId)

        if (cartItem) {
            cartItem.stock += 1;
            await cartItem.save();
            res.status(200).json({ message: 'Product quantity increased successfully', Cart: cartItem });
        } else {
            res.status(404).json({ message: 'Product not found in cart' });
        }
        req.body=cartItem
    } catch (error) {
        console.error('Error increasing product quantity:', error);
        res.status(500).json({ message: 'Internal server error', error: error });
    }
    
    next()
};

const decreaseCartQuantity = async (req, res,next) => {
    try {
        const productId = req.params._id;
        console.log(productId)

        const cartItem = await Cart.findById(productId)

        if (cartItem) {
            if (cartItem.stock > 1) {
                cartItem.stock -= 1;
                await cartItem.save();
                req.body=cartItem
                res.status(200).json({ message: 'Product quantity decreased successfully', Cart: cartItem });
            } else {
                await Cart.findByIdAndDelete(productId);
                res.status(200).json({ message: 'Product removed from cart as quantity is zero', Cart: cartItem });
            }
        } else {
            res.status(404).json({ message: 'Product not found in cart' });
        }
        req.body=cartItem
    } catch (error) {
        console.error('Error decreasing product quantity:', error);
        res.status(500).json({ message: 'Internal server error', error: error });
    }
    
    
    next();
};

const clearCart = async (req, res) => {
    try {
        const userId = req.body.userid;
        console.log("UserId: ",req.body.userid);

        // Find all cart items that match the user ID and delete them
        const result = await Cart.deleteMany({ userid: userId });
        console.log("Result: ",result)

        // res.status(200).json({ message: 'All products removed from cart successfully', result: result });
    } catch (error) {
        console.error('Error removing products from cart:', error);
        // res.status(500).json({ message: 'Internal server error', error: error });
    }
};

exports.clearCart = clearCart;
exports.newcart = newcart;
exports.getcart = getcart;
exports.deleteCart = deleteCart;
exports.increaseCartQuantity = increaseCartQuantity;
exports.decreaseCartQuantity = decreaseCartQuantity;