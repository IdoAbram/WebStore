const Article = require('../models/article');

const index = (req, res) => {
    res.render("../views/articles", { articles: Article.getArticles() });
}

module.exports = {
    index
};