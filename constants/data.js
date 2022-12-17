const prayerDetails = [
    {
      image: require("../assets/images/sajda1.jpg"),
      text: "Fajr",
      bg: '#c1dad4',
      desc: 'Dawn Prayer',
    },
    {
      image: require("../assets/images/julus1.jpg"),
      text: "Zuhr",
      bg: '#fffaf6',
      desc: 'Afternoon Prayer',
    },
    {
      image: require("../assets/images/julusSide.jpg"),
      text: "Asr",
      bg: '#ffe1c9',
      desc: 'After Midday',
    },
    {
      image: require("../assets/images/julusW.jpg"),
      text: "Maghrib",
      bg: '#f9e7db',
      desc: 'After sunset',
    },
    {
      image: require("../assets/images/julus2.jpg"),
      text: "Isha",
      bg: '#f9e7db',
      desc: 'Nighttime',
    },
  ];

const prayerParts = {
  fajr: [{
    primaryText: '2 Sunnat',
    secondaryText: "Emphasized or Mu'akkadah"
  },
  {
    primaryText: '2 Farz',
    secondaryText: 'Mandatory'
  }
  ],
  zuhr: [{
    primaryText: '4 Sunnat',
    secondaryText: "Emphasized or Mu'akkadah",
  },{
    primaryText: '4 Faraz',
    secondaryText: 'Mandatory',
  },{
    primaryText: '2 Sunnat',
    secondaryText: "Emphasized or Mu'akkadah",
  },{
    primaryText: '2 Nafl',
    secondaryText: 'Mustahab',
  }],
  asr: [{
    primaryText: '4 Sunnat',
    secondaryText: ''
  },
  {
    primaryText: '4 Farz',
    secondaryText: 'Mandatory'
  }
  ],
  maghrib: [{
    primaryText: '3 Faraz',
    secondaryText: 'Mandatory',
  },{
    primaryText: '2 Sunnat',
    secondaryText: "Emphasized or Mu'akkadah",
  },{
    primaryText: '2 Nafl',
    secondaryText: 'Mustahab',
  }],
  isha: [{
    primaryText: '4 Sunnat',
    secondaryText: "Ghair Mu'akkadah",
  },{
    primaryText: '4 Faraz',
    secondaryText: 'Mandatory',
  },{
    primaryText: '2 Sunnat',
    secondaryText: "Emphasized or Mu'akkadah",
  },{
    primaryText: '2 Nafl',
    secondaryText: 'Mustahab',
  },{
    primaryText: '3 Witr',
    secondaryText: 'Wajib',
  },{
    primaryText: '2 Nafl',
    secondaryText: 'Mustahab',
  }
  ]
};

const commonQiyam = {
  audio: '',
  image: '',
  description: [

  ]
}

const qiyam = [
  {
    audio: require('../assets/audios/fatiha.mp3'),
    image: '',
    description: [

    ]
  }
]

const prayerRukn = {
    takbeer: {
        audio: [require('../assets/audios/takbeer.mp3')],
        img: require("../assets/images/takbeer.jpeg"),
        description: [
            'Intention (it is a determination in the heart that you are performing a particular Salah; not to be uttered).',
            'Face the direction of the Qiblah (Sacred House in Makkah Known as Ka’bah). Raise your hands to the level of the shoulders, or earlobes, and say',
            'ALLAHU AKBAR',
        ],
        title: 'Takbeer',
    },
    qiyyam: {
        title: 'Qiyyam',
        audio: [require('../assets/audios/sana.mp3'), require('../assets/audios/fatiha.mp3')],
        img: require("../assets/images/qiyam.jpeg"),
        description: ['Recite the Opening Invocation (du’aa) for Salah',
         'سبحانَكَ اللهمَ وبِحَمدِكَ تَباركَ اسمُكَ وتَعالَى جَدُّكَ ولا إلَهَ غيرُك', 
        'Recitation of Soorat Al-Faatiha (Opening Chapter of the Qur’an): Must be recited in every unit of prayer (Rak’ah). Begin by utter the following with a low voice:',
        'أعوذُ باللهِ منَ الشَّيطانِ الرَّجيم *** بسم الله الرحمن الرحيم',
        'Then you Must recite the Faatiha in every Rak’ah, pausing after each verse (aayah):',
         'At the end, you must say Aameen .',
        'You must recite Any other Surah of Quran after then'],
    },
    rukoo: {
        audio: [require('../assets/audios/ruku.mp3')],
        img:  require('../assets/images/dua.jpg'),
        description: ['Bow down and say ‘Allahu Akbar’ meaning ‘Allah is the Greatest’, placing your hands on your knees, with your back straight. Rest at this position, called Ruku (bowing), and say', 'Subhaana Rabbiy-al-Adheem’ three times at least. This means ‘Glory be to my Lord, the Great’.'],
        title: 'Rukoo'
    },
    sajda: {
      audio: [require('../assets/audios/sajda.mp3')],
      img: require('../assets/images/sajda.jpg'),
      description: ['Bow down and say ‘Allahu Akbar’ meaning ‘Allah is the Greatest’, called Sajda',
    'Say at least three times, ‘Subhaana Rabbiy-al-Aalaa’ - ‘Glory be to my Lord, the Highest’.'],
      title: 'Sajda'

    },
    // jalsa:{

    // },
    // tashood: {

    // },
    // salam: {

    // }

}


  export { prayerDetails, prayerParts, prayerRukn };
