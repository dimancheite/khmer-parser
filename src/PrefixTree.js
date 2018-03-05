class PrefixTree
{
    constructor(words) 
    {
        this.nodes = {};

        for(let i = 0; i < words.length; i++)
            this.add(words[i]);
    }

    add(word) 
    {
        let parent = this.nodes;
        for(let i = 0; i < word.length; i++) {
            // if the node has not been created, create
            if (!parent.hasOwnProperty(word[i]))
                parent[word[i]] = { 
                    final: i === word.length - 1, 
                    sub: { }
                };

            // continue
            let current = parent[word[i]];
            current.final |= i === word.length - 1;
            parent = current.sub;
        }
    }
}

module.exports = PrefixTree;