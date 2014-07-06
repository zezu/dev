// registers custom tags
$.views.tags({
    createStars: function (rating) {
        var tag = this,
            ratingArray = [],
            defaultMax = 5,
            max = tag.props.max ? tag.props.max : defaultMax;
        for (var i = 1; i <= max; i++) {
            ratingArray.push(i <= rating ? "rating fullStar" : "rating emptyStar");
        }
        var htmlString = "";
        if (tag.tmpl) {
            // use the content, or the template passed in with tmpl property
            htmlString = tag.renderContent(ratingArray);
            //htmlString = $(tag.tmpl).render(ratingArray); //alternative
        } else {
            // compiles and registers it with a name
            if (!$.render.compiledRatingTmpl) {
                //console.log("creating compiledRatingTmpl: " + rating);
                $.templates("compiledRatingTmpl", "<span class='{{:#data}}'></span>");
            }
//            else {
//                console.log("compiledRatingTmpl exists: " + rating);
//            }
            // use the compiled named template
            htmlString = $.render.compiledRatingTmpl(ratingArray);
        }
        return htmlString;
    },
    trimText: function (text) {
        var ret = "", 
            tag = this;
        if (tag.props.max) {
            var maxChars = isNaN(tag.props.max) || tag.props.max === '' || tag.props.max === null ? 0 : tag.props.max;
            ret = text.substring(0, maxChars - 1) + " ...";
        }
        else {
            ret = text;
        }
        return ret;
    },
    sort: function (array) {
        var ret = "",
            tag = this;
        if (tag.props.reverse) {
            for (var i = array.length; i; i--) {
                ret += tag.renderContent(array[i - 1]);
                //ret += tag.tmpl.render(array[i - 1]);
            }
        }
        else {
            // Render in original order
            ret += tag.renderContent(array);
            //ret += tag.tmpl.render(array);
        }
        return ret;
    },
    get: function (value) {
        var tag = this;
        return value || tag.props.defaultValue;
    },
    yesNo: function (value) {
        var tag = this;
        return value ? tag.props.yes : tag.props.no;
    }
});
