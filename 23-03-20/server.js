const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(express.static('public'));

app.post('/checkout', (req, res) => {
    const { name, surname, address, paymentMethod, deliveryMethod } = req.body;

    fs.readFile('database.json', (err, data) => {
        if (err) {
            console.log(err);
            res.status(500).send('Error: could not save order data.');
        } else {
            let orders = JSON.parse(data);
            orders.push({
                name,
                surname,
                address,
                paymentMethod,
                deliveryMethod,
                products: cart
            });
            fs.writeFile('database.json', JSON.stringify(orders), (err) => {
                if (err) {
                    console.log(err);
                    res.status(500).send('Error: could not save order data.');
                } else {
                    cart = [];
                    res.send('Order placed successfully!');
                }
            });
        }
    });
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
