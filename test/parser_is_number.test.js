var PrefixTreeParser = require('./../src/PrefixTreeParser');

test("test parse is_number method", () => {

    let parser = new PrefixTreeParser(null, "");

    expect(parser.is_number('១')).toBe(true);
    expect(parser.is_number('2')).toBe(true);
    expect(parser.is_number('5')).toBe(true);
    expect(parser.is_number('A')).toBe(false);
    expect(parser.is_number('២')).toBe(true);
    expect(parser.is_number('ក')).toBe(false);

})