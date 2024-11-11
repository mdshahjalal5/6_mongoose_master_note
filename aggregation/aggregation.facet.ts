// ! create multiple pipelines 

// ! lookup_orders 
// * lookup can access data from different collection by referencing 
let lookup_orders = {
  _id: ObjectId("61409ffe847e54c55a9ebcc8"),
  customerId: ObjectId("6140499d2b30ecb8ad816889"),
  orderDate: ISODate("2021-09-08T10:00:00.000Z"),
  total: 150,
};

let lookup_customers = {
  _id: ObjectId("6140499d2b30ecb8ad816889"),
  name: "John Doe",
  email: "johndoe@example.com",
  address: "123 Main St",
};

// ! here inside lookup_order we can customer document
db.lookup_orders.aggregate([
  {
    $lookup: {
      from: "lookup_customers",//! collection from which we want to get data 
      localField: "customerId", // ? local field and foreign field create reference 
      foreignField: "_id",
      as: "customer", // ? we get the customer object inside customer field 
    },
  },
]);

// ? output

{
	"_id" : ObjectId("61409ffe847e54c55a9ebcc8"),
	"customerId" : ObjectId("6140499d2b30ecb8ad816889"),
	"orderDate" : ISODate("2021-09-08T16:00:00.000+06:00"),
	"total" : 150,
	"customer" : {
		"_id" : ObjectId("6140499d2b30ecb8ad816889"),
		"name" : "John Doe",
		"email" : "johndoe@example.com",
		"address" : "123 Main St"
	}
}
