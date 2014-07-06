var my = my || {};
my.utils = (function () {
    var 
        formatTemplatePath = function (name) {
            return "../templates/_" + name + ".tmpl.html";
        },
        renderStructure = function (item) {
            renderExtTmpl({ name: "portlet.header", selector: "#header", data: item.data });
            renderExtTmpl({ name: "portlet.nav", selector: "#nav", data: item.data });
            renderExtTmpl({ name: "portlet.code", selector: ".codePortlet", data: item.data });
            //renderExtTmpl({ name: "portlet.breadcrumb", selector: "#breadcrumb", data: item.data });
            prettyPrint();
        },
        renderExtTmpl = function (item) {
            var file = formatTemplatePath(item.name);
            $.get(file, null, function (template) {
                var tmpl = $.templates(template);
                var htmlString = tmpl.render(item.data);
                if (item.selector) {
                    $(item.selector).html(htmlString);
                }
                return htmlString;
            });
        };
    return {
        formatTemplatePath: formatTemplatePath,
        renderExtTmpl: renderExtTmpl,
        renderStructure: renderStructure
    };
})();

