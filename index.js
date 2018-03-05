var PrefixTreeParser = require('./src/PrefixTreeParser');
var PrefixTree       = require('./src/PrefixTree');

class KhmerParser
{
    constructor(words)
    {
        this.tree = new PrefixTree(words);
    }

    parse(text)
    {
        let parser = new PrefixTreeParser(this.tree, text);
        return parser.parse();
    }

}