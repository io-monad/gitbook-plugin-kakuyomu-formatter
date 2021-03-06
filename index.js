var CONFIG_KEY = "options.pluginsConfig.kakuyomuFormatter.";

var PARA_REGEXP = /([^\n])\n(?!\n)/g;
var PARA_REPLACE = "$1\n\n";

var DOTS_REGEXP = /(^|[^|｜])《《([^\n]+?)》》/g;
var DOTS_REPLACE = "$1*$2*";

var KANJI = "(?:[々〇〻\\u3400-\\u9FFF\\uF900-\\uFAFF]|[\\uD840-\\uD87F][\\uDC00-\\uDFFF])";
var RUBY_1 = "(" + KANJI + "{1,20})《([^\\n》]{1,50})》";
var RUBY_2 = "[|｜]([^\\n《|｜]{1,20}?)《([^\\n》]{1,50})》";
var RUBY_REGEXP = new RegExp(RUBY_1 + "|" + RUBY_2, "g");
var RUBY_REPLACE = "<ruby><rb>$1$3</rb><rp>（</rp><rt>$2$4</rt><rp>）</rp></ruby>";

var ESCAPE_REGEXP = /[|｜]《/g;
var ESCAPE_REPLACE = "《";

module.exports = {
    website: {
        assets: "./assets",
        css: ["website.css"]
    },
    ebook: {
        assets: "./assets",
        css: ["ebook.css"]
    },

    hooks: {
        "page:before": function (page) {
            if (this.config.get(CONFIG_KEY + "paragraph", true)) {
                page.content = page.content.replace(PARA_REGEXP, PARA_REPLACE);
            }
            if (this.config.get(CONFIG_KEY + "ruby", true)) {
                page.content = page.content
                    .replace(DOTS_REGEXP, DOTS_REPLACE)
                    .replace(RUBY_REGEXP, RUBY_REPLACE)
                    .replace(ESCAPE_REGEXP, ESCAPE_REPLACE);
            }
            return page;
        }
    }
};
