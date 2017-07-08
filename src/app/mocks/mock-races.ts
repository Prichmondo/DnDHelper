import { Race, Size, IAbilities } from '../models/race';

export const RACES: Race[] = [
    {name: "Human", type: "Humanoid", size: Size.Medium, abilitiesModifiers: {strength: 0, dexterity: 0, constitution: 0, intelligence: 0, wisdom: 0, charisma:0}},
    {name: "Elf", type: "Humanoid", size: Size.Medium, abilitiesModifiers: {strength: 0, dexterity: 2, constitution: -2, intelligence: 0, wisdom: 0, charisma:0}},
    {name: "Dwarf", type: "Humanoid", size: Size.Medium, abilitiesModifiers: {strength: 2, dexterity: -2, constitution: 2, intelligence: 0, wisdom: 0, charisma:-2}},
    {name: "Ogre", type: "Giant", size: Size.Large, abilitiesModifiers: {strength: 4, dexterity: -2, constitution: 2, intelligence: -4, wisdom: -2, charisma:0}},
]