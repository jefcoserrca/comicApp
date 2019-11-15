import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataMarvelService {
heroes: any[] = [{
  aliases: [
      'Ant-Man',
      'Scott Lang'
  ],
  authors: [
      'David Michelinie',
      'John Byrne'
  ],
  description: 'Ant-Man (Scott Lang) is a fictional superhero appearing in American comic books published by Marvel Comics.',
  images: {
      background: 'http://x.annihil.us/u/prod/marvel/i/mg/6/b0/537ba0e6d1879.gif',
      thumbnail: 'http://i.annihil.us/u/prod/marvel/i/mg/e/20/52696868356a0/standard_xlarge.jpg'
  },
  name: 'Ant-Man (Scott Lang)',
  powers: [
      'A limited air supply',
      'Electronics expert',
      'Size manipulation',
      'Subatomic universes'
  ],
  ranking: {
      comicCount: 8,
      eventCount: 0,
      pageviewCount: 30941,
      serieCount: 4,
      storyCount: 7
  },
  secretIdentities: [
      'Scott Edward Harris Lang'
  ],
  species: ['human'],
  superName: 'Ant-Man',
  teams: [
      'Avengers',
      'Defenders',
      'Fantastic Four',
      'Future Foundation',
      'Heroes for Hire',
      'Stark Industries'
  ],
  urls: {
      marvel: 'http://marvel.com/characters/2/ant-man',
      wikipedia: 'https://en.wikipedia.org/wiki/Ant-Man_(Scott_Lang)'
  }
}, {
  aliases: [
      'Black Leopard',
      'Black Panther',
      'Luke Charles',
      'Mr. Okonkwo'
  ],
  authors: [
      'Jack Kirby',
      'Stan Lee'
  ],
  description: 'The Black Panther (T\'Challa) is a fictional superhero that appears in publications by Marvel Comics.',
  images: {
      background: 'http://i.annihil.us/u/prod/marvel/i/mg/b/d0/537ba240acbf8.gif',
      thumbnail: 'http://x.annihil.us/u/prod/marvel/i/mg/1/c0/537ba2bfd6bab/standard_xlarge.jpg'
  },
  name: 'Black Panther',
  partners: [
      'Storm'
  ],
  powers: [
      'Agility',
      'Boots',
      'Durability',
      'Equipment',
      'Genius-level intellect',
      'Gymnast',
      'Healing',
      'Inventor',
      'Martial artist',
      'Olympic-level strength',
      'Politician',
      'Reflexes',
      'Scientist',
      'Senses',
      'Skilled hunter',
      'Speed',
      'Stamina',
      'Strategist',
      'Superhuman senses',
      'Superhuman strength',
      'Tracker',
      'Trained acrobat',
      'Uniform',
      'Vibranium',
      'Wields',
      'Wields vibranium uniform'
  ],
  ranking: {
      comicCount: 320,
      eventCount: 13,
      pageviewCount: 109552,
      serieCount: 101,
      storyCount: 468
  },
  secretIdentities: [
      'T\'Challa'
  ],
  species: ['human'],
  superName: 'Black Panther',
  teams: [
      'Avengers',
      'Defenders',
      'Fantastic Force',
      'Fantastic Four',
      'Illuminati',
      'Ultimates',
      'Ultimates (2015 team)'
  ],
  urls: {
      marvel: 'http://marvel.com/characters/5/black_panther',
      wikipedia: 'https://en.wikipedia.org/wiki/Black_Panther_(comics)'
  }
}, {
  aliases: [
      'Belova',
      'Black Widow',
      'Pale Little Spider',
      'Rooskaya',
      'Super-Adaptoid',
      'Yelena',
      'Yelena Belova'
  ],
  authors: [
      'Devin Grayson',
      'Devin K. Grayson',
      'J. G. Jones'
  ],
  // tslint:disable-next-line:max-line-length
  description: 'Black Widow (Yelena Belova) is a fictional character, a spy in the Marvel Comics Universe and second modern-era character to use the name Black Widow.',
  images: {
      background: 'http://i.annihil.us/u/prod/marvel/i/mg/5/e0/537ba452ba274.gif',
      // tslint:disable-next-line:max-line-length
      thumbnail: 'https://pbs.twimg.com/media/DiNPDJFUwAAw1d9.jpg'
  },
  name: 'Black Widow (Yelena Belova)',
  partners: [],
  powers: [
      'Espionage training',
      'Extensive military',
      'Martial arts',
      'Peak athletic condition'
  ],
  ranking: {
      comicCount: 294,
      eventCount: 8,
      pageviewCount: 2718,
      serieCount: 125,
      storyCount: 307
  },
  secretIdentities: [
      'Yelena Belova'
  ],
  species: ['human'],
  superName: 'Black Widow',
  teams: [
      'A.I.M',
      'Advanced Idea Mechanics',
      'Russia',
      'Russian Federation',
      'S.H.I.E.L.D',
      'Vanguard'
  ],
  urls: {
      marvel: 'http://marvel.com/characters/6/black_widow',
      wikipedia: 'https://en.wikipedia.org/wiki/Black_Widow_(Yelena_Belova)'
  }
}, {
  aliases: [
      'Captain America',
      'Nomad',
      'Steve Rogers',
      'The Captain'
  ],
  authors: [
      'Jack Kirby',
      'Joe Simon'
  ],
  // tslint:disable-next-line:max-line-length
  description: 'Vowing to serve his country any way he could, young Steve Rogers took the super soldier serum to become America\'s one-man army. Fighting for the red, white and blue for over 60 years, Captain America is the living, breathing symbol of freedom and liberty.',
  images: {
      background: 'http://i.annihil.us/u/prod/marvel/i/mg/9/70/537ba5c73bf82.gif',
      thumbnail: 'http://i.annihil.us/u/prod/marvel/i/mg/3/50/537ba56d31087/standard_xlarge.jpg'
  },
  name: 'Captain America',
  partners: [
      'Black Widow',
      'Bucky (James Barnes)',
      'Bucky (Rick Jones)',
      'Bucky (Rikki Barnes)',
      'Demolition Man',
      'Falcon',
      'Free Spirit',
      'Jack Flag',
      'Nomad (Jack Monroe)',
      'Sharon Carter'
  ],
  powers: [
      'Enhanced mental faculties',
      'Expert marksman',
      'Expert tactician',
      'Field commander',
      'Hand-to-hand combatant',
      'Master martial artist',
      'Master tactician',
      'Peak physical condition',
      'Strategist',
      'Wields'
  ],
  ranking: {
    comicCount: 1411,
      eventCount: 19,
      pageviewCount: 89978,
      serieCount: 382,
      storyCount: 2326
  },
  secretIdentities: [
      'Steve',
      'Steve Rogers',
      'Steven Rogers'
  ],
  species: [],
  superName: 'Captain America',
  teams: ['Avengers',
      'All-Winners Squad',
      'Avengers Unity Division',
      'Illuminati',
      'Invaders',
      'Landau, Luckman, and Lake',
      'New Avengers',
      'Rebirth',
      'Redeemers',
      'S.H.I.E.L.D',
      'Secret Avengers',
      'Secret Defenders',
      'U.S. Army'
  ],
  urls: {
      marvel: 'http://marvel.com/characters/8/captain_america',
      wikipedia: 'https://en.wikipedia.org/wiki/Captain_America'
  }
}, {
  aliases: [
      'Captain Marvel'
  ],
  authors: [],
  description: 'Captain Marvel is the name of several fictional superheroes appearing in comic books published by Marvel Comics.',
  images: {
      background: 'http://i.annihil.us/u/prod/marvel/i/mg/9/b0/537ba62b68be9.gif',
      thumbnail: 'http://i.annihil.us/u/prod/marvel/i/mg/c/10/537ba5ff07aa4/standard_xlarge.jpg'
  },
  name: 'Captain Marvel',
  partners: [],
  powers: ['Flight', 'Energy Protection and absorption', 'speed', 'Superhuman strength', 'endurance and stamina'],
  ranking: {
      comicCount: 125,
      eventCount: 0,
  pageviewCount: 28685,
      serieCount: 0,
      storyCount: 0
  },
  secretIdentities: ['Carol Susan Jane Danvers'],
  species: ['Super Human'],
  superName: 'Captain Marvel',
  teams: ['Avengers'],
  urls: {
      marvel: 'http://marvel.com/characters/9/captain_marvel',
      wikipedia: 'https://en.wikipedia.org/wiki/Captain_Marvel_(Marvel_Comics)'
  }
}, {
  aliases: [
      'Deadpool',
      'El Mercenario Antiheroes',
      'Hulkpool',
      'Jack',
      'Johnny Silvini',
      'Merc with a Mouth',
      'Mithras',
      'Regenerating Degenerate',
      'Thom Cruz',
      'Wade T. Wilson',
      'Wade Wilson',
      'Wildcard',
      'Zenpool'
  ],
  authors: [
      'Fabian Nicieza',
      'Rob Liefeld'
  ],
  description: 'Deadpool (Wade Wilson) is a fictional antihero appearing in American comic books published by Marvel Comics.',
  images: {
      background: 'http://i.annihil.us/u/prod/marvel/i/mg/b/03/537ba78541492.gif',
      thumbnail: 'http://x.annihil.us/u/prod/marvel/i/mg/5/c0/537ba730e05e0/standard_xlarge.jpg'
  },
  name: 'Deadpool',
  partners: [
      'Agent X',
      'Agent of HYDRA',
      'Blind Al',
      'Bob',
      'Cable',
      'Copycat',
      'Domino',
      'Hellcow',
      'Mr. Tolliver',
      'Spider-Man',
      'Taskmaster',
      'Weasel'
  ],
  powers: [
      'A magic satchel',
      'Extended',
      'Extended longevity',
      'Healing factor',
      'Holographic disguise',
      'Longevity',
      'Magic satchel',
      'Marksman',
      'Martial artist',
      'Master',
      'Master martial artist',
      'Regenerative',
      'Swordsman'
  ],
  ranking: {
      comicCount: 402,
      eventCount: 9,
      pageviewCount: 257848,
      serieCount: 99,
      storyCount: 570
  },
  secretIdentities: [
      'Wade Winston Wilson'
  ],
  species: [
      'Mutate'
  ],
  superName: 'Deadpool',
  teams: [
      'Agency X',
      'Agent X',
      'Agent of Hydra',
      'Astonishing Avengers',
      'Avengers Unity Division',
      'Blind Al',
      'Bob',
      'Cable',
      'Code Red',
      'Copycat',
      'Deadpool',
      'Deadpool Corps',
      'Defenders',
      'Domino',
      'Frightful Four',
      'Genesis',
      'Great Lakes Avengers',
      'Great Lakes Initiative',
      'Heroes for Hire',
      'Kingpin',
      'Lake',
      'Landau',
      'Landau, Luckman, and Lake',
      'Luckman',
      'Maggia',
      'Mercs for Money',
      'S.H.I.E.L.D',
      'Secret Defenders',
      'Six Pack',
      'Taskmaster',
      'Thunderbolts',
      'Uncanny Avengers',
      'Weapon X',
      'Wolverine',
      'X-Force',
      'X-Men',
      'partners =Weasel'
  ],
  urls: {
      marvel: 'http://marvel.com/characters/12/deadpool',
      wikipedia: 'https://en.wikipedia.org/wiki/Deadpool'
  }
}, {
  aliases: [
      'Doctor',
      'Stephen Sanders',
      'Strange',
      'Vincent Stevens'
  ],
  authors: [
      'Steve Ditko'
  ],
  // tslint:disable-next-line:max-line-length
  description: 'Doctor Stephen Vincent Strange, best known under his alias Doctor Strange, is a fictional character appearing in American comic books published by Marvel Comics.',
  images: {
      background: '../../assets/DS.png',
      thumbnail: 'http://i.annihil.us/u/prod/marvel/i/mg/5/f0/5261a85a501fe/standard_xlarge.jpg'
  },
  name: 'Doctor Strange',
  partners: [],
  powers: [
      'Genius-level intellect',
      'Magic',
      'Mastery of',
      'Mastery of magic',
      'Medical science',
      'Trained in'
  ],
  ranking: {
      comicCount: 418,
      eventCount: 13,
      pageviewCount: 157376,
      serieCount: 125,
      storyCount: 568
  },
  secretIdentities: [
      'Stephen Vincent Strange'
  ],
  species: ['Human'],
  superName: 'Doctor Strange',
  teams: [
      'Defenders',
      'Illuminati',
      'Midnight Sons',
      'New Avengers',
      'The New Avengers',
      'The Order'
  ],
  urls: {
      marvel: null,
      wikipedia: 'https://en.wikipedia.org/wiki/Doctor_Strange'
  }
},
{
  aliases: [
      'Groot',
      'Monarch of Planet X'
  ],
  authors: [
      'Dick Ayers',
      'Jack Kirby',
      'Stan Lee'
  ],
  // tslint:disable-next-line:max-line-length
  description: 'Groot (also known as the Monarch of Planet X) is a fictional superhero that appears in comic books published by Marvel Comics.',
  images: {
      background: 'http://x.annihil.us/u/prod/marvel/i/mg/c/d0/538cda86a8b5f.gif',
      thumbnail: 'http://i.annihil.us/u/prod/marvel/i/mg/7/10/538caf1975d39/standard_xlarge.jpg'
  },
  name: 'Groot',
  partners: [],
  powers: [
      'Control trees',
      'Enhance his strength',
      'Rebuild self',
      'Regeneration',
      'Resistance to fire'
  ],
  ranking: {
      comicCount: 12,
      eventCount: 1,
      pageviewCount: 15343,
      serieCount: 4,
      storyCount: 12
  },
  secretIdentities: [
      'Groot'
  ],
  species: [
      'Flora colossus'
  ],
  superName: 'Groot',
  teams: [
      'Guardians of the Galaxy',
      'Guardians of the Galaxy (2008 team)',
      'Nick Fury\'s Howling Commandos',
      'S.H.I.E.L.D. Paranormal Containment Unit'
  ],
  urls: {
      marvel: 'http://marvel.com/characters/866/groot',
      wikipedia: 'https://en.wikipedia.org/wiki/Groot'
  }
},
{
  aliases: [
      'Bruce Banner',
      'David Banner',
      'Doc Green',
      'Green Scar',
      'Horsemen of Apocalypse',
      'Hulk',
      'Jade Giant',
      'Joe Fixit',
      'Sakaarson',
      'The Hulk',
      'The Incredible Hulk',
      'War',
      'World-Breaker'
  ],
  authors: [
      'Jack Kirby',
      'Stan Lee'
  ],
  // tslint:disable-next-line:max-line-length
  description: 'Caught in a gamma bomb explosion while trying to save the life of a teenager, Dr. Bruce Banner was transformed into the incredibly powerful creature called the Hulk. An all too often misunderstood hero, the angrier the Hulk gets, the stronger the Hulk gets.',
  images: {
      background: 'http://i.annihil.us/u/prod/marvel/i/mg/c/d0/537bafb19e9f4.gif',
      thumbnail: 'http://i.annihil.us/u/prod/marvel/i/mg/5/a0/538615ca33ab0/standard_xlarge.jpg'
  },
  name: 'Hulk',
  partners: [],
  powers: [
      'Durability',
      'Endurance',
      'Genius-level intellect',
      'Longevity',
      'Stamina'
  ],
  ranking: {
      comicCount: 1309,
      eventCount: 24,
      pageviewCount: 47858,
      serieCount: 314,
      storyCount: 1981
  },
  secretIdentities: [
      'Robert Bruce Banner'
  ],
  species: [
      'Mutate'
  ],
  superName: 'Hulk',
  teams: [
      'Avengers',
      'Defenders',
      'Fantastic Four',
      'Horsemen of Apocalypse',
      'Hulkbusters',
      'Illuminati',
      'Pantheon',
      'S.H.I.E.L.D',
      'Secret Avengers',
      'The Mighty Avengers',
      'The New Avengers',
      'The Order',
      'Titans Three',
      'Warbound'
  ],
  urls: {
      marvel: 'http://marvel.com/characters/25/hulk',
      wikipedia: 'https://en.wikipedia.org/wiki/Hulk_(comics)'
  }
},
{
  aliases: [
      'Iron Man',
      'The Invincible Iron Man',
      'Tony Stark'
  ],
  authors: [
      'Don Heck',
      'Jack Kirby',
      'Larry Lieber',
      'Stan Lee'
  ],
  // tslint:disable-next-line:max-line-length
  description: 'Wounded, captured and forced to build a weapon by his enemies, billionaire industrialist Tony Stark instead created an advanced suit of armor to save his life and escape captivity. Now with a new outlook on life, Tony uses his money and intelligence to make the world a safer, better place as Iron Man.',
  images: {
      background: 'http://x.annihil.us/u/prod/marvel/i/mg/c/90/537bb1f94fa4f.gif',
      thumbnail: 'http://i.annihil.us/u/prod/marvel/i/mg/6/a0/55b6a25e654e6/standard_xlarge.jpg'
  },
  name: 'Iron Man',
  partners: [
      'Pepper Potts',
      'Rescue',
      'War Machine'
  ],
  powers: [
      'Businessperson',
      'Cyberpathic',
      'Durability',
      'Energy repulsors',
      'Engineer',
      'Genius',
      'Genius-level intellect',
      'Life support',
      'Missile',
      'Missiles',
      'Powered armored suit',
      'Regenerative',
      'Regenerative life support',
      'Superhuman strength',
      'Via'
  ],
  ranking: {
      comicCount: 1980,
      eventCount: 24,
      pageviewCount: 133366,
      serieCount: 447,
      storyCount: 2903
  },
  secretIdentities: [
      'Anthony Edward Stark',
      'Tony'
  ],
  species: [
      'Human'
  ],
  superName: 'Iron Man',
  teams: [
      'Avengers',
      'Department of Defense',
      'Force Works',
      'Guardians of the Galaxy',
      'Guardians of the Galaxy (2008 team)',
      'Illuminati',
      'New Avengers',
      'S.H.I.E.L.D',
      'Stark Industries',
      'Stark Resilient',
      'The Mighty Avengers',
      'The New Avengers',
      'Thunderbolts',
      'United States Department of Defense',
      'West Coast Avengers'
  ],
  urls: {
      marvel: 'http://marvel.com/characters/29/iron_man',
      wikipedia: 'https://en.wikipedia.org/wiki/Iron_Man'
  }
}, {
  aliases: [
      'Rocket Raccoon'
  ],
  authors: [
      'Bill Mantlo',
      'Keith Giffen'
  ],
  // tslint:disable-next-line:max-line-length
  description: 'A genetically-engineered alien with a knack for big guns and fast ships, Rocket serves as the backbone of the Guardians of the Galaxy!',
  images: {
      background: 'http://x.annihil.us/u/prod/marvel/i/mg/6/30/537bc16b86c13.gif',
      thumbnail: 'http://i.annihil.us/u/prod/marvel/i/mg/6/60/537bc14068e5d/standard_xlarge.jpg'
  },
  name: 'Rocket Raccoon',
  partners: [],
  powers: [
      'Expert marksman',
      'Field commander',
      'Genius-level intellect',
      'Master tactician',
      'Sniper'
  ],
  ranking: {
      comicCount: 22,
      eventCount: 3,
      pageviewCount: 10841,
      serieCount: 10,
      storyCount: 21
  },
  secretIdentities: [],
  species: ['mutate'],
  superName: 'Rocket Raccoon',
  teams: [
      'Guardians of the Galaxy',
      'Guardians of the Galaxy (2008 team)'
  ],
  urls: {
      marvel: 'http://marvel.com/characters/47/rocket_raccoon',
      wikipedia: 'https://en.wikipedia.org/wiki/Rocket_Raccoon'
  }
}, {
  aliases: [
      'Ben Reilly',
      'Dusk',
      'Hornet',
      'Peter Parker',
      'Prodigy',
      'Ricochet',
      'Scarlet Spider',
      'Spider-Man',
      'Spiderman',
      'Spidey',
      'Tiger',
      'Wallcrawler',
      'Web-slinger',
      'Webhead'
  ],
  authors: [
      'Stan Lee',
      'Steve Ditko'
  ],
  // tslint:disable-next-line:max-line-length
  description: 'Bitten by a radioactive spider, high school student Peter Parker gained the speed, strength and powers of a spider. Adopting the name Spider-Man, Peter hoped to start a career using his new abilities. Taught that with great power comes great responsibility, Spidey has vowed to use his powers to help people.',
  images: {
      background: 'http://i.annihil.us/u/prod/marvel/i/mg/6/90/537ba2184e75f.gif',
      thumbnail: 'http://i.annihil.us/u/prod/marvel/i/mg/9/30/538cd33e15ab7/standard_xlarge.jpg'
  },
  name: 'Spider-Man',
  partners: [],
  powers: [
      'Agility',
      'Genius',
      'Genius-level intellect',
      'Precognitive',
      'Precognitive spider-sense',
      'Speed',
      'Spider-sense',
      'Superhuman strength'
  ],
  ranking: {
      comicCount: 2593,
      eventCount: 29,
      pageviewCount: 89463,
      serieCount: 537,
      storyCount: 4197
  },
  secretIdentities: [
      'Peter Benjamin Parker'
  ],
  species: [
      'Mutate'
  ],
  superName: 'Spider-Man',
  teams: [
      'Avengers',
      'Defenders',
      'Fantastic Four',
      'Future Foundation',
      'Heroes for Hire',
      'The New Avengers',
      'X-Mansion'
  ],
  urls: {
      marvel: 'http://marvel.com/characters/54/spider-man',
      wikipedia: 'https://en.wikipedia.org/wiki/Spider-Man'
  }
}, {
  aliases: [
      'Daniele Neri',
      'Don Blake',
      'Donald Blake',
      'Dr. Donald Blake',
      'Eric Masterson',
      'Jake Olson',
      'Odinson',
      'Siegfried',
      'Siegmund',
      'Sigurd Jarlson',
      'Thor',
      'Thor (Marel Comics)',
      'Thor Odinson'
  ],
  authors: [
      'Jack Kirby',
      'Larry Lieber',
      'Stan Lee'
  ],
  // tslint:disable-next-line:max-line-length
  description: 'As the Norse God of thunder and lightning, Thor wields one of the greatest weapons ever made, the enchanted hammer Mjolnir. While others have described Thor as an over-muscled, oafish imbecile, he\'s quite smart and compassionate.  He\'s self-assured, and he would never, ever stop fighting for a worthwhile cause.',
  images: {
      background: '../../assets/thor.png',
      thumbnail: 'http://i.annihil.us/u/prod/marvel/i/mg/d/d0/5269657a74350/standard_xlarge.jpg'
  },
  name: 'Thor',
  partners: [],
  powers: [
      'Abilities via',
      'Electric manipulation',
      'Endurance',
      'Flight',
      'Longevity',
      'Mjolnir',
      'Speed',
      'Superhuman strength',
      'Weather manipulation'
  ],
  ranking: {
      comicCount: 1247,
      eventCount: 21,
      pageviewCount: 32216,
      serieCount: 303,
      storyCount: 1961
  },
  secretIdentities: [
      'Thor Odinson'
  ],
  species: [
      'Asgardian'
  ],
  superName: 'Thor',
  teams: [
      'Avengers',
      'Avengers Unity Squad',
      'God Squad',
      'Thor Corps',
      'Uncanny Avengers',
      'Warriors Three'
  ],
  urls: {
    marvel: 'http://marvel.com/characters/1009664/thor/featured',
      wikipedi: 'https://en.wikipedia.org/wiki/Thor_(Marvel_Comics)'
  }
}
];

villanos = [{
    aliases: [
        'Benjamin Poindexter',
        'Bullseye',
        'Daredevil',
        'Hawkeye',
        'Leonard'
    ],
    authors: [
        'John Romita Sr.',
        'John Romita, Sr.',
        'Marv Wolfman'
    ],
    description: 'Bullseye is a fictional supervillain appearing in American comic books published by Marvel Comics.',
    images: {
        background: '../../assets/bullseye.png',
        thumbnail: 'http://i.annihil.us/u/prod/marvel/i/mg/6/30/539a08f322fd1/standard_xlarge.jpg'
    },
    name: 'Bullseye',
    powers: [
        'Adamantium',
        'Expert marksman',
        'Spinal column'
    ],
    ranking: {
        comicCount: 56,
        eventCount: 3,
        pageviewCount: 11927,
        serieCount: 28,
        storyCount: 51
    },
    secretIdentities: [
        'Lester'
    ],
    species: [],
    superName: 'Bullseye',
    teams: [
        'Dark Avengers',
        'Thunderbolts'
    ],
    urls: {
        marvel: 'http://marvel.com/characters/366/bullseye',
        wikipedia: 'https://en.wikipedia.org/wiki/Bullseye_(comics)'
    }
}, {
    aliases: [
        'Doctor Doom',
        'Dr. Doom',
        'Rabum Alal',
        'Victor von Doom'
    ],
    authors: [
        'Jack Kirby',
        'Stan Lee'
    ],
    description: 'Doctor Victor Von Doom is a fictional supervillain that appears in publications by Marvel Comics.',
    images: {
        background: '../../assets/doom.png',
        thumbnail: 'http://i.annihil.us/u/prod/marvel/i/mg/3/60/53176bb096d17/standard_xlarge.jpg'
    },
    name: 'Doctor Doom',
    partners: [],
    powers: [
        'Armor',
        'Durability',
        'Electrical manipulation',
        'Energy absorption',
        'Force blasts',
        'Force field generation',
        'Gauntlet scanners',
        'Genius-level intellect',
        'Hidden missiles',
        'Master of the dark arts',
        'Mind transferal',
        'Projection',
        'Rocket boots for flight',
        'Skilled scientist',
        'Sorcerer',
        'Superhuman strength',
        'Technopathy'
    ],
    ranking: {
        comicCount: 184,
        eventCount: 9,
        pageviewCount: 33061,
        serieCount: 105,
        storyCount: 185
    },
    secretIdentities: [
        'Dr. Victor Von Doom'
    ],
    species: [
        'Human'
    ],
    superName: 'Doctor Doom',
    teams: [
        'Astonishing Avengers',
        'Cabal',
        'Future Foundation',
        'Intelligencia',
        'Terrible Trio',
        'The Cabal'
    ],
    urls: {
        marvel: null,
        wikipedia: 'https://en.wikipedia.org/wiki/Doctor_Doom'
    }
}, {
    aliases: [
         'Devourer of Worlds',
         'Ashta',
        'Galactus',
        'God of Oblivion',
        'The Monster of all Worlds',
        'The Origin of Galactus',
        'The hunger that does not cease'
    ],
    authors: [
        'Jack Kirby',
        'Stan Lee'
    ],
    description: 'Galactus is a fictional character appearing in American comic books published by Marvel Comics.',
    images: {
        background: '../../assets/galactus.png',
        thumbnail: 'http://x.annihil.us/u/prod/marvel/i/mg/5/03/528d31a791308/standard_xlarge.jpg'
    },
    name: 'Galactus',
    partners: [],
    powers: [
        'Cosmic awareness',
        'Energy',
        'Life-force manipulation',
        'Matter',
        'Reality alteration',
        'Telekinesis',
        'Telepathy'
    ],
    ranking: {
        comicCount: 106,
        eventCount: 5,
        pageviewCount: 42290,
        serieCount: 50,
        storyCount: 101
    },
    secretIdentities: [
        'Galan'
    ],
    species: [],
    superName: 'Galactus',
    teams: [
        'God Squad',
        'Heralds of Galactus',
        'Ultimates'
    ],
    urls: {
        marvel: 'http://marvel.com/characters/751/galactus',
        wikipedia: 'https://en.wikipedia.org/wiki/Galactus'
    }
}, {
    aliases: [
        'Goblin King',
        'Green Goblin',
        'Iron Patriot',
        'Norman Osborn'
    ],
    authors: [
        'Stan Lee',
        'Steve Ditko'
    ],
    description: 'The Green Goblin is the alias of several supervillains appearing in American comic books published by Marvel Comics.',
    images: {
        background: 'http://x.annihil.us/u/prod/marvel/i/mg/3/90/5398a3e5255d1.gif',
        thumbnail: 'http://i.annihil.us/u/prod/marvel/i/mg/f/40/538cf0c2acdd9/standard_xlarge.jpg'
    },
    name: 'Green Goblin',
    partners: [],
    powers: ['Genius', 'Strong', 'Army'],
    ranking: {
        comicCount: 0,
        eventCount: 0,
        pageviewCount: 12238,
        serieCount: 0,
        storyCount: 0
    },
    secretIdentities: ['Harry Osborn'],
    species: ['Human'],
    superName: 'Green Goblin',
    teams: [],
    urls: {
        marvel: 'http://marvel.com/characters/852/green_goblin',
        wikipedia: 'https://en.wikipedia.org/wiki/Green_Goblin'
    }
}, {
    aliases: [
        'Harold Howard',
        'Harold Howard{{issue|date',
        'The Brainwasher',
        'The Kingpin',
        'Wilson Fisk'
    ],
    authors: [
        'John Romita Sr.',
        'John Romita, Sr.',
        'Stan Lee'
    ],
    // tslint:disable-next-line:max-line-length
    description: 'The Kingpin (real name Wilson Fisk) is a fictional supervillain appearing in American comic books published by Marvel Comics.',
    images: {
        background: '../../assets/kingpink.png',
        thumbnail: 'http://i.annihil.us/u/prod/marvel/i/mg/9/60/526034fb5aff7/standard_xlarge.jpg'
    },
    name: 'Kingpin',
    partners: [],
    powers: [
        'Durability',
        'Genius-level intellect',
        'Highly skilled planner',
        'Organizer',
        'Peak-level strength',
        'Tactician',
        'Wears kevlar armor'
    ],
    ranking: {
        comicCount: 102,
        eventCount: 4,
        pageviewCount: 38038,
        serieCount: 40,
        storyCount: 98
    },
    secretIdentities: [
        'Wilson Fisk'
    ],
    species: [],
    superName: 'Kingpin',
    teams: [
        'Emissaries of Evil',
        'HYDRA',
        'Hydra',
        'The Hand'
    ],
    urls: {
        marvel: 'http://marvel.com/characters/1150/kingpin',
        wikipedia: 'https://en.wikipedia.org/wiki/Kingpin_(comics)'
    }
}, {
    aliases: [
        'Ikol',
        'Loki',
        'Loki Laufeyson',
        'Loki Odinson',
        'Scarlet Witch',
        'Serrure'
    ],
    authors: [
        'Jack Kirby',
        'Larry Lieber',
        'Stan Lee'
    ],
    description: 'Loki is a fictional character that appears in American comic books published by Marvel Comics.',
    images: {
        background: 'http://i.annihil.us/u/prod/marvel/i/mg/3/80/537bb40a94729.gif',
        thumbnail: 'http://i.annihil.us/u/prod/marvel/i/mg/9/50/537bb3780cfd2/standard_xlarge.jpg'
    },
    name: 'Loki',
    partners: [],
    powers: [
        'Astral projection',
        'Durability',
        'Energy blasts',
        'Flight',
        'Illusion casting',
        'Longevity',
        'Magical powers',
        'Shapeshifting',
        'Strength',
        'Superhuman intelligence',
        'Telepathy',
        'Via'
    ],
    ranking: {
        comicCount: 194,
        eventCount: 7,
        pageviewCount: 17262,
        serieCount: 79,
        storyCount: 193
    },
    secretIdentities: [
        'Loki Laufeyson'
    ],
    species: [
        'Giants'
    ],
    superName: 'Loki',
    teams: [
        'Acts of Vengeance',
        'Astonishing Avengers',
        'Cabal',
        'Young Avengers'
    ],
    urls: {
        marvel: 'http://marvel.com/characters/33/loki',
        wikipedia: 'https://en.wikipedia.org/wiki/Loki_(comics)'
    }
}, {
    aliases: [
        'Erik Lehnsherr',
        'Erik Lensherr',
        'Erik the Red',
        'Magneto',
        'Magnus',
        'Max Eisenhardt',
        'Michael Xavier',
        'The Creator',
        'White King  of the Hellfire Club',
        'White Pilgrim'
    ],
    authors: [
        'Jack Kirby',
        'Stan Lee'
    ],
    // tslint:disable-next-line:max-line-length
    description: 'Magneto is a fictional character appearing in American comic books published by Marvel Comics, commonly in association with the X-Men.',
    images: {
        background: 'http://i.annihil.us/u/prod/marvel/i/mg/6/30/537bb51cc0937.gif',
        thumbnail: 'http://i.annihil.us/u/prod/marvel/i/mg/3/b0/5261a7e53f827/standard_xlarge.jpg'
    },
    name: 'Magneto',
    partners: [],
    powers: [
        'Magnetism',
        'Magnetism manipulation',
        'Manipulation'
    ],
    ranking: {
        comicCount: 252,
        eventCount: 16,
        pageviewCount: 31062,
        serieCount: 111,
        storyCount: 252
    },
    secretIdentities: [
        'Max Eisenhardt'
    ],
    species: [
        'Mutant'
    ],
    superName: 'Magneto',
    teams: [
        'Acolytes',
        'Brotherhood of Evil Mutants',
        'Brotherhood of Mutants',
        'Excalibur',
        'Hellfire Club',
        'New Mutants',
        'Savage Land Mutates',
        'The Twelve',
        'X-Men'
    ],
    urls: {
        marvel: 'http://marvel.com/characters/35/magneto',
        wikipedia: 'https://en.wikipedia.org/wiki/Magneto_(comics)'
    }
}, {
    aliases: [
        'Captain Nebula',
        'Ms. Peale',
        'Nebula'
    ],
    authors: [
        'John Buscema',
        'Roger Stern'
    ],
    description: 'Nebula is a fictional character, an alien supervillain appearing in the Marvel Comics universe.',
    images: {
        background: 'http://x.annihil.us/u/prod/marvel/i/mg/6/80/537bbe7d45119.gif',
        thumbnail: 'http://i.annihil.us/u/prod/marvel/i/mg/e/30/528d339973337/standard_xlarge.jpg'
    },
    name: 'Nebula',
    partners: [],
    powers: [],
    ranking: {
        comicCount: 8,
        eventCount: 0,
        pageviewCount: 11110,
        serieCount: 5,
        storyCount: 5
    },
    secretIdentities: [],
    species: [],
    superName: 'Nebula',
    teams: [],
    urls: {
        marvel: 'http://marvel.com/characters/40/nebula',
        wikipedia: 'https://en.wikipedia.org/wiki/Nebula_(comics)'
    }
}, {
    aliases: [
        'The Mad Titan',
        'Avatar of Death',
        'Thanos'

    ],
    authors: [
        'Jim Starlin'
    ],
    // tslint:disable-next-line:max-line-length
    description: 'The Mad Titan Thanos, a melancholy, brooding individual, consumed with the concept of death, sought out personal power and increased strength, endowing himself with cybernetic implants until he became more powerful than any of his brethren.',
    images: {
        background: 'http://x.annihil.us/u/prod/marvel/i/mg/2/50/537bc6be6cafc.gif',
        thumbnail: 'http://x.annihil.us/u/prod/marvel/i/mg/a/10/537bc68747ccf/standard_xlarge.jpg'
    },
    name: 'Thanos',
    partners: [],
    powers: [
        'Durability',
        'Endurance',
        'Energy manipulation',
        'Longevity',
        'Superhuman strength',
        'Telekinesis',
        'Teleportation'
    ],
    ranking: {
        comicCount: 75,
        eventCount: 4,
        pageviewCount: 66741,
        serieCount: 41,
        storyCount: 72
    },
    secretIdentities: [],
    species: [
        'Eternals'
    ],
    superName: 'Thanos',
    teams: [
        'Annihilation',
        'Annihilation Wave',
        'Cabal',
        'Cull Obsidian',
        'Cull Obsidian (The Black Order)',
        'Defenders',
        'Infinity Watch',
        'Secret Defenders'
    ],
    urls: {
        marvel: 'http://marvel.com/characters/58/thanos',
        wikipedia: 'https://en.wikipedia.org/wiki/Thanos'
    }
}, {
    aliases: [
        'Crimson Cowl',
        'Ultron',
        'Ultron-10',
        'Ultron-11',
        'Ultron-12',
        'Ultron-13',
        'Ultron-14',
        'Ultron-15',
        'Ultron-16',
        'Ultron-17',
        'Ultron-18',
        'Ultron-5',
        'Ultron-6',
        'Ultron-7',
        'Ultron-8',
        'Ultron-9'
    ],
    authors: [
        'John Buscema',
        'Roy Thomas'
    ],
    // tslint:disable-next-line:max-line-length
    description: 'Arguably the greatest and certainly the most horrific creation of scientific genius Dr. Henry Pym, Ultron is a criminally insane rogue sentient robot dedicated to conquest and the extermination of humanity.',
    images: {
        background: 'http://x.annihil.us/u/prod/marvel/i/mg/2/03/537bc81532433.gif',
        thumbnail: 'http://x.annihil.us/u/prod/marvel/i/mg/2/03/537bc76411307/standard_xlarge.jpg'
    },
    name: 'Ultron',
    partners: [],
    powers: [
        'Artificial intelligence',
        'Durability',
        'Energy blasts',
        'Flight',
        'Speed',
        'Stamina',
        'Superhuman strength'
    ],
    ranking: {
        comicCount: 53,
        eventCount: 6,
        pageviewCount: 29940,
        serieCount: 27,
        storyCount: 55
    },
    secretIdentities: [],
    species: [],
    superName: 'Ultron',
    teams: [
        'Ho Yinsen',
        'Lethal Legion',
        'Masters of Evil',
        'Phalanx',
        'Sons of Yinsen'
    ],
    urls: {
        marvel: 'http://marvel.com/characters/61/ultron',
        wikipedia: 'https://en.wikipedia.org/wiki/Ultron'
    }
}, {
    aliases: [
        'Alien Costume',
        'Spider-Man',
        'The Black Suit',
        'Venom'
    ],
    authors: [
        'David Michelinie',
        'Mike Zeck',
        'Randy Schueller',
        'Randy Schueller (original costume idea)',
        'Todd McFarlane'
    ],
    // tslint:disable-next-line:max-line-length
    description: 'Venom, or the Venom Symbiote, is a fictional supervillain appearing in American comic books published by Marvel Comics, commonly in association with Spider-Man.',
    images: {
        background: 'http://i.annihil.us/u/prod/marvel/i/mg/9/80/537bc8f0d2c57.gif',
        thumbnail: 'http://i.annihil.us/u/prod/marvel/i/mg/3/20/537bc8b154504/standard_xlarge.jpg'
    },
    name: 'Venom',
    partners: [],
    powers: [
        'Camouflage',
        'Invisibility',
        'Limited',
        'Limited shapeshifting',
        'Shapeshifting',
        'Spider-man',
        'Through'
    ],
    ranking: {
        comicCount: 0,
        eventCount: 0,
        pageviewCount: 21985,
        serieCount: 0,
        storyCount: 0
    },
    secretIdentities: [
        'Angelo Fortunato',
        'Ann Weying',
        'Eddie Brock',
        'Flash Thompson',
        'Mac Gargan',
        'Patricia Robertson',
        'Peter Parker',
        'Spider-Man'
    ],
    species: [
        'Symbiote'
    ],
    superName: 'Venom',
    teams: [
        'Spider-Man'
    ],
    urls: {
        marvel: 'http://marvel.com/characters/63/venom',
        wikipedia: 'https://en.wikipedia.org/wiki/Venom_(comics)'
    }
}];
  constructor() {
   }
}
