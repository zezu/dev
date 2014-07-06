$.views.converters({
    ensureUrl: function (value) {
        return (value ? "../images/" + value : "../images/icon-noimage.png");
    },
    priceAlert: function (value) {
        return (value < 1000 ? "1 Day Special!" : "Sale Price");
        //<small>{{: (listPrice > salePrice) ? "Reduced" : "On sale"}}</small>
    }
});
