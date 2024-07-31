// I'm feeling confident, so I will complete the challenges.
const pronouns = ["the", "our"];
const adjectives = ["great", "big", "last"];
// The ending of my last two words intentionally are top level domains intentionally.
const nouns = ["jogger", "racoon", "ofus", "agario"];

// First challenge: Adding several types of extensions.
const topLevelDomains = ["com", "net", "us", "io", "org", "edu", "gov"];

for (let i = 0; i < pronouns.length; i++) {
    for (let j = 0; j < adjectives.length; j++) {
        for (let k = 0; k < nouns.length; k++) {
            for (let l = 0; l < topLevelDomains.length; l++) {
                let domainName = pronouns[i] + adjectives[j];
                // Second challenge: if the noun ends with a top level domain, do magic :D
                if (nouns[k].endsWith(topLevelDomains[l])) {
                    domainName += nouns[k].substring(0, nouns[k].length - topLevelDomains[l].length);
                } else {
                    domainName += nouns[k];
                }
                domainName += "." + topLevelDomains[l];
                console.log(domainName);
            }
        }
    }
}