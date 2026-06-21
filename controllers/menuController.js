const menu = require("../models/menuSchema.js");

const menuController = {
    home: (req, res) => {
        res.render("home");
    },

    getMenu: async (req, res) => {
        try {
            const allMenu = await menu.find();
            res.render("Food", { allMenu });
        } catch (err) {
            res.status(500).send(err.message);
        }
    },

    searchItem: async (req, res) => {
        try {
            const searchText = req.query.q;

            const items = await menu.find({
                foodName: {
                    $regex: searchText,
                    $options: "i"
                }
            });

            res.render("searchResults", { items });

        } catch (err) {
            res.status(500).send(err.message);
        }
    },

    sortByPrice: async (req, res) => {
        try {
            const order = req.query.order;
            let items;

            if (order === "asc") {
                items = await menu.find().sort({ price: 1 });
            } else {
                items = await menu.find().sort({ price: -1 });
            }

            res.render("Food", { allMenu: items });

        } catch (err) {
            res.status(500).send(err.message);
        }
    }
};

module.exports = menuController;