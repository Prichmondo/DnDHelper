const utils = require('../helpers/utils');

function character(
    _id,
    firstName,
    lastName,
    campaign,
    race,
    abilities,
    classes,
    createDate,
    skills
) {
    this._id = _id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.campaign = campaign;
    this.race = race;
    this.abilities = abilities;
    this.classes = classes;
    this.createDate = createDate;
    this.skill = skills;
}

character.map = (character) => {

    var characterResp = {}

    characterResp._id = character._id;
    characterResp.name = character.name;
    characterResp.campaign = character.campaign;
    characterResp.race = character.race;
    characterResp.alignment = character.alignment;
    characterResp.deity = character.deity;
    characterResp.size = character.size;
    characterResp.age = character.age;
    characterResp.gender = character.gender;
    characterResp.height = character.height;
    characterResp.weight = character.weight;
    characterResp.eyes = character.eyes;
    characterResp.heir = character.heir;
    characterResp.skin = character.skin;
    characterResp.abilities = character.abilities;
    characterResp.classes = character.classes;
    characterResp.createDate = character.createDate;
    characterResp.skills = utils.arrayToObject(character.skills, (item, i) => {
        if(item.skill)
            return item.skill.name
        
        return "skill" + i;
    });

    return characterResp;
}

module.exports = character;