var PrefixTreeParser = require('./../src/PrefixTreeParser');

test("test parse parse_number method", () => {

    let parser = new PrefixTreeParser(null, "៤២១៣សដសស");
    expect(parser.parse_number(0)).toBe('៤២១៣');

})