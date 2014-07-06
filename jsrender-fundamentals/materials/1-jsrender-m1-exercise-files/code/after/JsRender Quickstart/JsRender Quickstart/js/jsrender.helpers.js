$.views.helpers({
    getHtml: function (selector) {
        return $(selector).html();
    },
    isActive: function (num) {
        var view = this;
        return view.data.metadata.currentDemo === num ? "active" : "";
    },
    toUpperCase: function (value) {
        return value.toUpperCase();
    },
    not: function (value) {
        return !value;
    },
    concat: function () {
        return "".concat.apply("", arguments) + "top";
    },
    listSeparator: function () {
        var view = this;
        var text = "";
        if (view.index === view.parent.data.length - 2) {
            text = " and";
        } else if (view.index < view.parent.data.length - 2) {
            text = ",";
        }
        return text;
    }
});
