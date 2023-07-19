const customerList='./custData.csv'
const csv=require('csvtojson')

const csvParser = async () => {
csv()
.fromFile(customerList)
.then((jsonObj)=>{
    /**
     * [
     * 	{a:"1", b:"2", c:"3"},
     * 	{a:"4", b:"5". c:"6"}
     * ]
     */ 
})

// Async / await usage
const jsonArray=await csv().fromFile(customerList);

const customers = jsonArray.map((customer) => {
    let newCustomer = {
        firstName: customer["First Name"],
        lastName: customer["Last Name"],
        email: customer["Email"],
        phoneNumber: customer["Phone Number"],
        lastOrder: customer["Last Order"],
        orderPrice: customer["Order Price"],
}
return newCustomer
}) 
console.log(customers)
return customers
}

csvParser();