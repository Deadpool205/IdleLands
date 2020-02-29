
export type GuildRecruitMode = 'Closed' | 'Apply' | 'Open';

export enum GuildResource {
  Astralium = 'astralium',
  Wood = 'wood',
  Clay = 'clay',
  Stone = 'stone',
  Gold = 'gold'
}

export enum GuildCrystal {
  Red = 'CrystalRed',
  Orange = 'CrystalOrange',
  Yellow = 'CrystalYellow',
  Green = 'CrystalGreen',
  Blue = 'CrystalBlue',
  Purple = 'CrystalPurple',
  Astral = 'CrystalAstral'
}

export enum GuildMemberTier {
  Member = 1,
  Moderator = 5,
  Leader = 10
}

export enum GuildBuilding {
  Academy = 'academy',
  GuildHall = 'guildhall',
  Mascot = 'mascot',
  Crier = 'upkept:crier',
  Tavern = 'person:tavern',
  Enchantress = 'person:enchantress',
  FortuneTeller = 'person:fortuneteller',
  Merchant = 'person:merchant',
  WitchDoctor = 'person:witchdoctor',
  FactoryScroll = 'factory:scroll',
  FactoryItem = 'factory:item',
  GeneratorWood = 'generator:wood',
  GeneratorStone = 'generator:stone',
  GeneratorClay = 'generator:clay',
  GeneratorAstralium = 'generator:astralium',
  GardenStrength = 'garden:str',
  GardenDexterity = 'garden:dex',
  GardenAgility = 'garden:agi',
  GardenConstitution = 'garden:con',
  GardenIntelligence = 'garden:int',
  GardenLuck = 'garden:luk',
  RaidPortal = 'active:raidportal'
}

export const GuildBuildingNames: { [key in GuildBuilding]: string } = {
  [GuildBuilding.Academy]: 'Academy',
  [GuildBuilding.GuildHall]: 'Guild Hall',
  [GuildBuilding.Mascot]: 'Mascot',
  [GuildBuilding.Crier]: 'Crier',
  [GuildBuilding.Tavern]: 'Tavern Keep',
  [GuildBuilding.Enchantress]: 'Enchantress',
  [GuildBuilding.FortuneTeller]: 'Fortune Teller',
  [GuildBuilding.Merchant]: 'Merchant',
  [GuildBuilding.WitchDoctor]: 'Witch Doctor',
  [GuildBuilding.FactoryScroll]: 'Scroll Factory',
  [GuildBuilding.FactoryItem]: 'Item Factory',
  [GuildBuilding.GeneratorWood]: 'Wood Generator',
  [GuildBuilding.GeneratorStone]: 'Stone Generator',
  [GuildBuilding.GeneratorClay]: 'Clay Generator',
  [GuildBuilding.GeneratorAstralium]: 'Astralium Generator',
  [GuildBuilding.GardenStrength]: 'Strength Garden',
  [GuildBuilding.GardenDexterity]: 'Dexterity Garden',
  [GuildBuilding.GardenAgility]: 'Agility Garden',
  [GuildBuilding.GardenConstitution]: 'Constitution Garden',
  [GuildBuilding.GardenIntelligence]: 'Intelligence Garden',
  [GuildBuilding.GardenLuck]: 'Luck Garden',
  [GuildBuilding.RaidPortal]: 'Raid Portal'
};

export const GuildBuildingLevelValues: { [key in GuildBuilding]: (level: number) => number } = {
  [GuildBuilding.Academy]: (level) => (level + 1) * 5,
  [GuildBuilding.GuildHall]: (level) => level,
  [GuildBuilding.Mascot]: (level) => 0,
  [GuildBuilding.Crier]: (level) => 0,
  [GuildBuilding.Tavern]: (level) => level,
  [GuildBuilding.Enchantress]: (level) => 1 + Math.floor(level / 20),
  [GuildBuilding.FortuneTeller]: (level) => level,
  [GuildBuilding.Merchant]: (level) => level * 3,
  [GuildBuilding.WitchDoctor]: (level) => Math.floor(level / 100),
  [GuildBuilding.FactoryScroll]: (level) => 3 * level,
  [GuildBuilding.FactoryItem]: (level) => 150 * level,
  [GuildBuilding.GeneratorWood]: (level) => level * 5,
  [GuildBuilding.GeneratorStone]: (level) => level * 5,
  [GuildBuilding.GeneratorClay]: (level) => level * 5,
  [GuildBuilding.GeneratorAstralium]: (level) => level * 5,
  [GuildBuilding.GardenStrength]: (level) => level * 10,
  [GuildBuilding.GardenDexterity]: (level) => level * 10,
  [GuildBuilding.GardenAgility]: (level) => level * 10,
  [GuildBuilding.GardenConstitution]: (level) => level * 10,
  [GuildBuilding.GardenIntelligence]: (level) => level * 10,
  [GuildBuilding.GardenLuck]: (level) => level * 5,
  [GuildBuilding.RaidPortal]: (level) => 100 + ((level - 1) * 50)
};

export const GuildBuildingDescs: { [key in GuildBuilding]: (level: number) => string } = {
  [GuildBuilding.Academy]: (level) => `Your guild can hold ${(level + 1) * 5} total members.`,
  [GuildBuilding.GuildHall]: (level) => `Your guild buildings can be a maximum of level ${level}.`,
  [GuildBuilding.Mascot]: (level) => `It's just for bragging rights.`,
  [GuildBuilding.Crier]: (level) => `You will periodically send messages notifying your guilds recruitment status.`,
  [GuildBuilding.Tavern]: (level) => `Your members' gambling events will cost more, but have higher DD odds/payoffs.`,
  [GuildBuilding.Enchantress]: (level) => `Your members' enchantment cap will increase by ${1 + Math.floor(level / 20)}.`,
  [GuildBuilding.FortuneTeller]: (level) => `Your members' providence events will increase in potency.`,
  [GuildBuilding.Merchant]: (level) => `Your members' merchant events will generate items with +${level * 3} item levels.`,
  [GuildBuilding.WitchDoctor]: (level) => `Your members' witch events will increase in potency by ${level}%.`,
  [GuildBuilding.FactoryScroll]: (level) => `Your guild will generate buff scrolls for all online members.`,
  [GuildBuilding.FactoryItem]: (level) => `Your guild will generate items with a max score of ${level * 50} for all online members.`,
  [GuildBuilding.GeneratorWood]: (level) => `Your guild will generate ${level * 5} wood per hour.`,
  [GuildBuilding.GeneratorStone]: (level) => `Your guild will generate ${level * 5} stone per hour.`,
  [GuildBuilding.GeneratorClay]: (level) => `Your guild will generate ${level * 5} clay per hour.`,
  [GuildBuilding.GeneratorAstralium]: (level) => `Your guild will generate ${level * 5} astralium per hour.`,
  [GuildBuilding.GardenStrength]: (level) => `Your guild will boost STR by ${level * 10} for all online members.`,
  [GuildBuilding.GardenDexterity]: (level) => `Your guild will boost DEX by ${level * 10} for all online members.`,
  [GuildBuilding.GardenAgility]: (level) => `Your guild will boost AGI by ${level * 10} for all online members.`,
  [GuildBuilding.GardenConstitution]: (level) => `Your guild will boost CON by ${level * 10} for all online members.`,
  [GuildBuilding.GardenIntelligence]: (level) => `Your guild will boost INT by ${level * 10} for all online members.`,
  [GuildBuilding.GardenLuck]: (level) => `Your guild will boost LUK by ${level * 5} for all online members.`,
  [GuildBuilding.RaidPortal]: (level) => `Your guild can encounter raid bosses up to level ${100 + ((level - 1) * 50)}.`
};

export const GuildBuildingUpgradeCosts: { [key in GuildBuilding]:
  (level: number) => { [res in GuildResource | GuildCrystal]?: number } } = {
  [GuildBuilding.Academy]:              (level) => (
    { [GuildResource.Gold]: Math.floor((level ** 2) * 1000000),
      [GuildResource.Clay]: level * 1000,
      [GuildResource.Stone]: level * 1000,
      [GuildResource.Wood]: level * 1000 }
  ),
  [GuildBuilding.GuildHall]:            (level) => (
    { [GuildResource.Clay]: level * 1000,
      [GuildResource.Stone]: level * 1000,
      [GuildResource.Wood]: level * 1000,
      [GuildResource.Gold]: level * 1000000 }
  ),
  [GuildBuilding.Mascot]:               (level) => (
    { [GuildResource.Gold]: level * 10000000 }
  ),
  [GuildBuilding.Crier]:                (level) => (
    { [GuildResource.Gold]: level * 1000000000 }
  ),
  [GuildBuilding.Tavern]:               (level) => (
    { [GuildResource.Gold]: level * 10000000,
      [GuildResource.Stone]: level * 100,
      [GuildResource.Wood]: level * 100,
      [GuildResource.Clay]: level * 100,
      [GuildCrystal.Orange]: 2 }
  ),
  [GuildBuilding.Enchantress]:          (level) => (
    { [GuildResource.Gold]: level * 50000000, [GuildResource.Clay]: level * 1000,
      [GuildCrystal.Purple]: 2 }
  ),
  [GuildBuilding.FortuneTeller]:        (level) => (
    { [GuildResource.Gold]: level * 100000000, [GuildResource.Astralium]: level * 1000,
      [GuildCrystal.Blue]: 2 }
  ),
  [GuildBuilding.Merchant]:             (level) => (
    { [GuildResource.Gold]: level * 25000000, [GuildResource.Wood]: level * 1000,
      [GuildCrystal.Yellow]: 2 }
  ),
  [GuildBuilding.WitchDoctor]:          (level) => (
    { [GuildResource.Gold]: level * 25000000, [GuildResource.Stone]: level * 1000,
      [GuildCrystal.Green]: 2 }
  ),
  [GuildBuilding.FactoryScroll]:        (level) => (
    { [GuildResource.Gold]: level * 10000000,
      [GuildResource.Clay]: level * 300,
      [GuildResource.Wood]: level * 1000,
      [GuildResource.Astralium]: Math.floor((level + 1) * ((level + 1) ** 1.5)),
      [GuildCrystal.Green]: 1,
      [GuildCrystal.Purple]: 1 }
  ),
  [GuildBuilding.FactoryItem]:          (level) => (
    { [GuildResource.Gold]: level * 10000000,
      [GuildResource.Clay]: level * 300,
      [GuildResource.Stone]: level * 1000,
      [GuildResource.Astralium]: Math.floor((level + 1) * ((level + 1) ** 1.5)),
      [GuildCrystal.Orange]: 1,
      [GuildCrystal.Yellow]: 1 }
  ),
  [GuildBuilding.GeneratorWood]:        (level) => (
    { [GuildResource.Gold]: level * 1000000,
      [GuildResource.Wood]: Math.floor((level + 3) ** 2),
      [GuildCrystal.Blue]: 5,
      [GuildCrystal.Purple]: 5 }
  ),
  [GuildBuilding.GeneratorStone]:       (level) => (
    { [GuildResource.Gold]: level * 1000000,
      [GuildResource.Stone]: Math.floor((level + 3) ** 2),
      [GuildCrystal.Red]: 5,
      [GuildCrystal.Yellow]: 5 }
  ),
  [GuildBuilding.GeneratorClay]:        (level) => (
    { [GuildResource.Gold]: level * 1000000,
      [GuildResource.Clay]: Math.floor((level + 3) ** 2),
      [GuildCrystal.Orange]: 5,
      [GuildCrystal.Green]: 5 }
  ),
  [GuildBuilding.GeneratorAstralium]:   (level) => (
    { [GuildResource.Gold]: level * 1000000,
      [GuildResource.Astralium]: Math.floor((level + 3) ** 2),
      [GuildCrystal.Astral]: 2 }
  ),
  [GuildBuilding.GardenStrength]:       (level) => (
    { [GuildResource.Gold]: level * 10000000, [GuildResource.Clay]: level * 500, [GuildResource.Stone]: level * 500,
      [GuildCrystal.Red]: 5 }
  ),
  [GuildBuilding.GardenDexterity]:      (level) => (
    { [GuildResource.Gold]: level * 10000000, [GuildResource.Wood]: level * 100,
      [GuildCrystal.Orange]: 5 }
  ),
  [GuildBuilding.GardenAgility]:        (level) => (
    { [GuildResource.Gold]: level * 10000000, [GuildResource.Clay]: level * 100,
      [GuildCrystal.Blue]: 5 }
  ),
  [GuildBuilding.GardenConstitution]:   (level) => (
    { [GuildResource.Gold]: level * 10000000, [GuildResource.Stone]: level * 100,
      [GuildCrystal.Yellow]: 5 }
  ),
  [GuildBuilding.GardenIntelligence]:   (level) => (
    { [GuildResource.Gold]: level * 10000000, [GuildResource.Clay]: level * 500, [GuildResource.Wood]: level * 500,
      [GuildCrystal.Purple]: 5 }
  ),
  [GuildBuilding.GardenLuck]:           (level) => (
    { [GuildResource.Gold]: level * 10000000,
      [GuildResource.Astralium]: level * 500,
      [GuildResource.Clay]: level * 100,
      [GuildResource.Stone]: level * 100,
      [GuildResource.Wood]: level * 100,
      [GuildCrystal.Green]: 5 }
  ),
  [GuildBuilding.RaidPortal]:           (level) => (
    { [GuildResource.Gold]: level * 1000000000,
      [GuildResource.Astralium]: level * 1000,
      [GuildCrystal.Astral]: 5 }
  )
};

export interface IGuildApplication {
  type: 'invite' | 'application';
  playerName: string;
  guildName: string;
}

export interface IGuildMember {
  name: string;
  level?: number;
  ascensionLevel?: number;
  profession?: string;
  lastOnline?: number;
  rank: GuildMemberTier;
}

export interface IGuild {
  name: string;
  tag: string;
  motd: string;
  createdAt: number;

  recruitment: GuildRecruitMode;

  taxes: { [key in GuildResource]?: number };
  resources: { [key in GuildResource]: number };
  crystals: { [key: string]: number };

  activeBuildings: { [key in GuildBuilding]?: boolean };
  buildingLevels: { [key in GuildBuilding]?: number };

  members: { [key: string]: IGuildMember };
  nextRaidAvailability: { [key: string]: number };

}

export enum GuildChannelOperation {

  // used when a guild is added
  Add,

  // used when a guild has a new member join
  AddMember,

  // used when a guild member is removed
  RemoveMember,

  // used when a guild needs to update a particular key and syndicate the change
  Update,

  // used when a guild is disbanded
  Remove,

  // used to give out items to guild members
  GiveItem,

  // used to give out scrolls to guild members
  GiveScroll,

  // used to collect all ICombatCharacters for a raid combat
  RequestRaidAssistance,

  // used when responding to RequestRaidAssistance
  GiveRaidAssistance,

  // used to share raid results with all involved players
  RaidResults
}

export const CalculateGuildLevel = (guild: IGuild) => {
  const totalLevel = Object.values(GuildBuilding).reduce((prev, cur) => {
    return prev + (guild.buildingLevels[cur] || 0);
  }, 0);

  const avgLevel = Math.floor(totalLevel / Object.values(GuildBuilding).length);
  if(avgLevel < 1) return 1;

  return avgLevel;
};
