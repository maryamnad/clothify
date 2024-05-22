const Order=require("./../models/order")
const neworder = async (req, res, next) => {
    try {
        const { paymentMethod,cardNumber,expiryDate,cvv,nameOnCard,products} = req.body;
        console.log("Req: ",req.body)

        // if (paymentmethod=="online")
        // {

        // }
        console.log("products",products)

        const orderPromises = products.map(async (product) => {
            const { clothid, title, price, stock, category, sale, onsale, link, userid } = product;
            console.log("product",product)
            console.log("title:",title)
            const orderData = {
                clothid,
                title,
                price,
                stock,
                category,
                sale,
                onsale,
                link,
                userid,
                date: new Date(),
                status: "paid",
                mode: paymentMethod
            };
            console.log(orderData)
            // Create a new order document in the database
            const order = new Order(orderData);
            return order.save();
          });
      
          // Wait for all orders to be saved
          const orders = await Promise.all(orderPromises);
      
          // Log the saved orders (for debugging purposes)
          console.log('Saved Orders:', orders);
      
          res.status(200).json({ message: 'Orders saved successfully' });
        } catch (error) {
          console.error('Error saving orders:', error);
          res.status(500).json({ message: 'Error saving orders' });
        }
        

        

        
        

};

exports.neworder = neworder;