const models = require('../models');
const Product = models.Product;
const { getHost } = require('../utils/ip');

Product.create({
    name: 'Amnesia Haze',
    species: 'CBD',
    price: 18,
    preview: `${getHost()}/uploads/avatars/seed-product-1.jpg`,
    stock: 20,
    companyId: 1
})
.then((response) => { console.log(response); })
.catch((error) => { console.log(error); })