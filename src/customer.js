var customerList = [];
const { category } = require("./category");

const addCustomer = (
  CustomerId,
  CustomerName,
  CustomerAge,
  CustomerAddress,
  CustomerContactNumber,
  Category
) => {
  // Write the Logic here
  customerList.filter((i) => i[0] == CustomerId).length == 0
    ? (customerList = [
        ...customerList,
        [
          CustomerId,
          CustomerName,
          CustomerAge,
          CustomerAddress,
          CustomerContactNumber,
          category(Category),
        ],
      ])
    : null;
};

const updateCustomer = (
  CustomerId,
  CustomerName,
  CustomerAge,
  CustomerAddress,
  CustomerContactNumber,
  Category
) => {
  // Write the Logic here
  let index = customerList.findIndex((i) => i[0] == CustomerId)
  customerList[index][1] = CustomerName;
  customerList[index][2] = CustomerAge;
  customerList[index][3] = CustomerAddress;
  customerList[index][4] = CustomerContactNumber;
  customerList[index][5] = category(Category);
};

const getAllCustomers = () => {
  // Write the Logic here
  return customerList;
};

module.exports = { addCustomer, updateCustomer, getAllCustomers };


// addCustomer("c001","Nina Sen",24,"Kolkata,West Bengal",910855748,category("EL"));
// console.log(customerList)

// updateCustomer("c001","Nina Dobrev",24,"Kolkata,West Bengal",910855748,category("EL"));
// console.log(customerList)