var PrefixTreeParser = require('./../src/PrefixTreeParser');
var PrefixTree       = require('./../src/PrefixTree');

test("test only word in dictionary method", () => {

    let tree = new PrefixTree(["រំលឹក", "នៅ", "សុខ", "អ្នក", "រំ", "រឿង", "ចាស់", "របស់", "លឹក"]);
    let parser = new PrefixTreeParser(tree, "នៅសុខៗអ្នកនិពន្ធ កៅ សីហា រំលឹករឿងចាស់ បង្ហោះវីដេអូ របស់ប៊ុត សីហា");

    expect(parser.parse()).toEqual(["នៅ", "សុខ", "អ្នក", "រំលឹក", "រឿង", "ចាស់", "របស់"]);
})


test("parse mixing with number", () => {

    let tree = new PrefixTree(["ចិត្ត", "ស្លុត", "រៀងរាល់", "ស្ថានភាព", "ជំងឺ", "ថ្ងៃ"]);
    let parser = new PrefixTreeParser(tree, "ស្លុតចិត្ត! ពេលដឹងស្ថានភាពជំងឺ យូ ឌីស្កូ ត្រូវធ្វើបែបនេះ រៀងរាល់៣ថ្ងៃម្តង");

    expect(parser.parse()).toEqual(["ស្លុត", "ចិត្ត", "ស្ថានភាព", "ជំងឺ", "រៀងរាល់", "៣", "ថ្ងៃ"]);
})

test("parse mixing with english word and number", () => {
    let tree = new PrefixTree(["សហភាព", "អឺរ៉ុប", "ខែ", "ទាំងនោះ", "ពួក", "ចេញ"]);
    let parser = new PrefixTreeParser(
        tree, 
        "សហភាពអឺរ៉ុបបានផ្ដល់ពេល៣ខែឲ្យFacebook Google Twitter " + 
        "និងក្រុមហ៊ុនអ៊ិនធឺណេតមួយចំនួនទៀតដើម្បីបង្ហាញថាក្រុមហ៊ុនទាំងនោះ" + 
        "កំពុងលុបការឃោសនារបស់ពួកជ្រុលនិយមលឿនជាងបច្ចុប្បន្ន បើមិនដូច្នេះទេ" + 
        " គេនឹងចេញច្បាប់ដើម្បីចាប់បង្ខំឲ្យធ្វើ។"
    );

    expect(parser.parse()).toEqual(["សហភាព", "អឺរ៉ុប", "៣", "ខែ", "Facebook", "Google", "Twitter", "ទាំងនោះ", "ពួក", "ចេញ"]);
});