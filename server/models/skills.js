var commons = require('./commons');

var skill = {
    skillId:{
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    modifier: commons.abilities,
    trainedOnly: {
        type: Boolean,
        default: false
    },
    synergies: []
}

var CharacterSkill = {
    skill: String,
    classSkill: true,
    ranks: Number
}

var skills = {
    appraise            : { id: "appraise",             name:"appraise",            modifier: "Int",  trainedOnly: false,   synergies: [] },
    balance             : { id: "balance",              name:"balance",             modifier: "Dex",  trainedOnly: false,   synergies: [] },
    bluff               : { id: "bluff",                name:"bluff",               modifier: "Cha",  trainedOnly: false,   synergies: [] },
    climb               : { id: "climb",                name:"climb",               modifier: "Str",  trainedOnly: false,   synergies: [] },
    concentration       : { id: "concentration",        name:"concentration",       modifier: "Con",  trainedOnly: false,   synergies: [] },
    
    craft               : { id: "craft",                name:"craft",               modifier: "Int",  trainedOnly: false,   synergies: [] },
    
    decipherScript      : { id: "decipherScript",       name:"decipher script",     modifier: "Int",  trainedOnly: false,   synergies: [] },
    diplomacy           : { id: "diplomacy",            name:"diplomacy",           modifier: "Cha",  trainedOnly: false,   synergies: [] },
    disableDevice       : { id: "disableDevice",        name:"disable device",      modifier: "Int",  trainedOnly: false,   synergies: [] },
    disguise            : { id: "disguise",             name:"disguise",            modifier: "Cha",  trainedOnly: false,   synergies: [] },
    escapeArtist        : { id: "escapeArtist",         name:"escape artist",       modifier: "Dex",  trainedOnly: false,   synergies: [] },
    forgery             : { id: "forgery",              name:"forgery",             modifier: "Int",  trainedOnly: false,   synergies: [] },
    gatherInformation   : { id: "gatherInformation",    name:"gather information",  modifier: "Cha",  trainedOnly: false,   synergies: [] },
    handleAnimal        : { id: "handleAnimal",         name:"handle animal",       modifier: "Cha",  trainedOnly: false,   synergies: [] },
    heal                : { id: "heal",                 name:"heal",                modifier: "Wis",  trainedOnly: false,   synergies: [] },
    hide                : { id: "hide",                 name:"hide",                modifier: "Dex",  trainedOnly: false,   synergies: [] },
    intimidate          : { id: "intimidate",           name:"intimidate",          modifier: "Cha",  trainedOnly: false,   synergies: [] },
    jump                : { id: "jump",                 name:"jump",                modifier: "Str",  trainedOnly: false,   synergies: [] },
    
    knowledgeArcana         : { id: "knowledgeArcana",          name:"knowledge (Arcana)",        modifier: "Int",  trainedOnly: false,   synergies: [] }, 
    knowledgeArchitecture   : { id: "knowledgeArchitecture",    name:"knowledge (Architecture)",  modifier: "Int",  trainedOnly: false,   synergies: [] }, 
    knowledgeDungeon        : { id: "knowledgeDungeon",         name:"knowledge (Dungeon)",       modifier: "Int",  trainedOnly: false,   synergies: [] }, 
    knowledgeGeography      : { id: "knowledgeGeography",       name:"knowledge (Geography)",     modifier: "Int",  trainedOnly: false,   synergies: [] }, 
    knowledgeHistory        : { id: "knowledgeHistory",         name:"knowledge (History)",       modifier: "Int",  trainedOnly: false,   synergies: [] }, 
    knowledgeLocal          : { id: "knowledgeLocal",           name:"knowledge (Local)",         modifier: "Int",  trainedOnly: false,   synergies: [] }, 
    knowledgeNature         : { id: "knowledgeNature",          name:"knowledge (Nature)",        modifier: "Int",  trainedOnly: false,   synergies: [] }, 
    knowledgeNobility       : { id: "knowledgeNobility",        name:"knowledge (Nobility)",      modifier: "Int",  trainedOnly: false,   synergies: [] }, 
    knowledgeReligion       : { id: "knowledgeReligion",        name:"knowledge (Religion)",      modifier: "Int",  trainedOnly: false,   synergies: [] }, 
    knowledgePlanes         : { id: "knowledgePlanes",          name:"knowledge (Planes)",        modifier: "Int",  trainedOnly: false,   synergies: [] }, 
    
    listen              : { id: "listen",               name:"listen",              modifier: "Wis",  trainedOnly: false,   synergies: [] },
    moveSilently        : { id: "moveSilently",         name:"move silently",       modifier: "Dex",  trainedOnly: false,   synergies: [] },
    openLock            : { id: "openLock",             name:"openLock",            modifier: "Dex",  trainedOnly: true,    synergies: [] },
    
    perform             : { id: "perform",              name:"perform",             modifier: "Cha",  trainedOnly: false,   synergies: [] },
    
    profession          : { id: "profession",           name:"profession",          modifier: "Int",  trainedOnly: false,   synergies: [] },
    
    ride                : { id: "ride",                 name:"ride",                modifier: "Dex",  trainedOnly: false,   synergies: [] },
    search              : { id: "search",               name:"search",              modifier: "Int",  trainedOnly: false,   synergies: [] },
    senseMotive         : { id: "senseMotive",          name:"sense motive",        modifier: "Wis",  trainedOnly: false,   synergies: [] },
    sleightOfHand       : { id: "sleightOfHand",        name:"sleight of hand",     modifier: "Dex",  trainedOnly: false,   synergies: [] },
    speakLanguage       : { id: "speakLanguage",        name:"speak language",      modifier: "Int",  trainedOnly: false,   synergies: [] },
    spellcraft          : { id: "spellcraft",           name:"spellcraft",          modifier: "Int",  trainedOnly: false,   synergies: [] },
    spot                : { id: "spot",                 name:"spot",                modifier: "Wis",  trainedOnly: false,   synergies: [] },
    survival            : { id: "survival",             name:"survival",            modifier: "Wis",  trainedOnly: false,   synergies: [] },
    swim                : { id: "swim",                 name:"swim",                modifier: "Str",  trainedOnly: false,   synergies: [] },
    tumble              : { id: "tumble",               name:"tumble",              modifier: "Dex",  trainedOnly: false,   synergies: [] },
    useMagicDevice      : { id: "useMagicDevice",       name:"use magic device",    modifier: "Cha",  trainedOnly: true,    synergies: [] },
    UseRope             : { id: "UseRope",              name:"Use rope",            modifier: "Dex",  trainedOnly: false,   synergies: [] },
};

module.exports = abilitiesSchema;