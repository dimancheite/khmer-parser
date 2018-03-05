# Khmer Parser

[![Build Status](https://travis-ci.org/Khmerload/khmer-parser.svg?branch=master)](https://travis-ci.org/Khmerload/khmer-parser)

Parsing Khmer words using Khmer dictionary.

### Example

```javascript
var KhmerParser = require('khmer-parser');
var dict = ["សហភាព", "អឺរ៉ុប", "ខែ", "ទាំងនោះ", "ពួក", "ចេញ"];

var parser = new KhmerParser(dict);
parser.parse(
    "សហភាពអឺរ៉ុបបានផ្ដល់ពេល៣ខែឲ្យFacebook Google Twitter " + 
    "និងក្រុមហ៊ុនអ៊ិនធឺណេតមួយចំនួនទៀតដើម្បីបង្ហាញថាក្រុមហ៊ុនទាំងនោះ" + 
    "កំពុងលុបការឃោសនារបស់ពួកជ្រុលនិយមលឿនជាងបច្ចុប្បន្ន បើមិនដូច្នេះទេ" + 
    " គេនឹងចេញច្បាប់ដើម្បីចាប់បង្ខំឲ្យធ្វើ។"
);
// ["សហភាព", "អឺរ៉ុប", "៣", "ខែ", "Facebook", "Google", "Twitter", "ទាំងនោះ", "ពួក", "ចេញ"]
```
