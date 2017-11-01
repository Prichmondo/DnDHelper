const utils = require('../helpers/utils');

function character(
    _id,
    firstName,
    lastName,
    campaign,
    race,
    classes,
    createDate,
    skills
) {
    this._id = _id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.campaign = campaign;
    this.race = race;
    this.classes = classes;
    this.createDate = createDate;
    this.skill = skills;
}

character.map = (character) => {

    var characterResp = {}

    characterResp._id = character._id;
    characterResp.firstName = character.firstName;
    characterResp.lastName = character.lastName;
    characterResp.campaign = character.campaign;
    characterResp.race = character.race;
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