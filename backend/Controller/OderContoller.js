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
            }
            // Create a new order document in the database
            const order = new Order(orderData);
            return order.save();
          });
      
          // Wait for all orders to be saved
          const orders = await Promise.all(orderPromises);
          req.body.userid=orders[0].userid
          console.log("Id",req.body.userid)
          next();
      
          // Log the saved orders (for debugging purposes)
          console.log('Saved Orders:', orders);
      
          res.status(200).json({ message: 'Orders saved successfully' });
        } catch (error) {
          console.error('Error saving orders:', error);
          res.status(500).json({ message: 'Error saving orders' });
        }
        
        

        

        
        

};

const getorder= async (req, res) => {
  try {
    const data = await Order.find();
    res.json(data);
    console.log("Done")
  } catch (err) {
    console.error(err); // Print any errors to the console for debugging
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const getuserorder= async (req, res) => {
  try {
    const id=req.id
    const data = await Order.find({userid:id});
    res.json(data);
    console.log("Done")
  } catch (err) {
    console.error(err); // Print any errors to the console for debugging
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const updateorder=async(req,res)=>
{
  try {
    const id=req.params._id
    console.log("Id",id)
    const user = await Order.findById(id);
    user.status=req.body.status
    console.log(req.body.status)
    const updatedUser = await user.save();
   
    res.json(updatedUser);
    console.log("Done")
  } catch (err) {
    console.error(err); // Print any errors to the console for debugging
    res.status(500).json({ message: "Internal Server Error" });
  }
}

exports.neworder = neworder;
exports.getorder = getorder;
exports.getuserorder = getuserorder;
exports.updateorder=updateorder