var category = function category(key) {
  
  // Write the Logic here
  let value = key == "pl" ? "Personal Loan" : key == "Vl" ? "Vehicle Loan" : key == "EL" ? "Education Loan" : "Home Loan"
 
  return value

  };
  
  module.exports = {
    category: category
  };