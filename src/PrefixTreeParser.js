class PrefixTreeParser
{

    constructor(tree, text)
    {
        this.seek = 0;
        this.tree = tree;
        this.text = text;

        // Incomplete letter. No word should be ended with these characters
        this.incompleted = "្៍័៏៌ឹឺេែួុូីិោៅឿៀាាំៃះ៉់".split('');

        // Number letter
        this.number = "0123456789០១២៣៤៥៦៧៨៩".split('');

        // English letter
        this.english_letter = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
    }

    parse()
    {
        let leftover = '';          // hold all the letters that not yet match
        let start = this.seek;      // pointer on our current reading position
        let result = [];            // hold all the valid words

        while(start < this.text.length) {
            let c = this.text[start];
            let word = '';

            // If it is number, we will parse the number, 
            // else parse from our tree
            if (this.is_number(c)) word = this.parse_number(start);
            else if (this.is_english(c)) word = this.parse_english(start);
            else word = this.parse_tree(start);

            let length = word.length;
            if (length === 0) {
                leftover += c;
                start++;
                continue;
            }

            if (start + length < this.text.length && 
                this.is_incomplete(this.text[start + length])) {
                leftover += word;
            } else {
                result.push(word);
            }

            start += length;
        }

        return result;
    }

    parse_number(start)
    {
        let result = "";
        while (start < this.text.length) {
            if (this.is_number( this.text[start] )) 
                result += this.text[start++];
            else return result;
        }
        return "";
    }

    parse_english(start)
    {
        let result = "";
        while(start < this.text.length) {
            let c = this.text[start];
            if (this.is_english(c) || this.is_number(c)) {
                result += c; start++;
            }
            else return result;
        }
        return "";
    }

    parse_tree(start)
    {
        let parent = this.tree.nodes;
        let word = "";
        let matched = [];

        while (start < this.text.length) {
            let c = this.text[start];
            word += c;

            if (parent.hasOwnProperty(c)) {
                if (parent[c].final)
                    if (start + 1 < this.text.length && !this.is_incomplete(this.text[start + 1]))
                        matched.push(word);
                parent = parent[c].sub;
            } else break;

            start++;
        }

        if (matched.length === 0) return "";
        return matched[matched.length - 1];
    }

    is_incomplete(char)
    {
        return this.incompleted.includes(char);
    }

    is_number(char)
    {
        return this.number.includes(char);
    }

    is_english(char)
    {
        return this.english_letter.includes(char);
    }

}

module.exports = PrefixTreeParser;