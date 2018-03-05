var PrefixTreeParser = require('./../src/PrefixTreeParser');

test("test parse is_incomplete method", () => {

    let parser = new PrefixTreeParser(null, "");

    expect(parser.is_incomplete('១')).toBe(false);
    expect(parser.is_incomplete('្')).toBe(true);
    expect(parser.is_incomplete('២')).toBe(false);

})