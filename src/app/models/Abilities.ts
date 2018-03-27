export interface IAbilities {
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number
}

export interface IAbilityModifiers {
    temporary: number;
    calculated: number;
    calculated_details?: string[];
    total: number;
    modifier: number
}

export interface IAbilitiesCharacter extends IAbilities {
    strength_modifiers?: IAbilityModifiers;
    dexterity_modifiers?: IAbilityModifiers;
    constitution_modifiers?: IAbilityModifiers;
    intelligence_modifiers?: IAbilityModifiers;
    wisdom_modifiers?: IAbilityModifiers;
    charisma_modifiers?: IAbilityModifiers
}
