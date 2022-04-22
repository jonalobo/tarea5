
function addProduct(req,res) {
    const {title,price,thumbnail} = req.body
    console.log(title)
}

module.exports = {
    addProduct
}