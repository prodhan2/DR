const defaultImageUrl = 'https://i.postimg.cc/CxJsYLhW/profile.png';

const studentData = [
  {
    name: 'Sujan Prodhan',
    image: 'https://studylib.net/flashcards/cardimage2/52762d4f/567/7567313_face.jpeg',
    blood: 'A+',
    upazila: 'Dhaka',
    college: 'Example College',
    school: 'Example School',
    department: 'Computer Science',
    email: 'sujan@example.com',
    hall: 'Example Hall',
    phone: '+1234567890',
    session: '2021-2022'
  },
  {
    name: "Joni Chandra Roy",
    email: "joniroy278@gmail.com",
    phone: "01780883314",
    department: "CST",
    session: "2022-23",
    hall: "Rahamatunnesa hall",
    blood: "B+"
  },
  {
    name: "Md.Shihab",
    email: "mdshihab9586@gmail.com",
    phone: "01792931063",
    department: "CST",
    session: "2022-23",
    hall: "নেই",
    blood: "A+"
  },
  {
    name: "MD Rubayed Hossen",
    email: "mdrubayedhossen05@gmail.com",
    phone: "01749675102",
    department: "Marketing",
    session: "2022-23",
    hall: "নেই",
    blood: "A+"
  },
  {
    name: "গীতিকা রানী রায়",
    email: "CLICK MAIL",
    phone: "01325046585",
    department: "IER",
    session: "2022-23",
    hall: "Rahamatunnesa hall",
    blood: "B+"
  },
  {
    name: "Sowrov kumar",
    email: "CLICK EMAIL",
    phone: "01745475087",
    department: "Marketing",
    session: "2021-22",
    hall: "নেই",
    blood: "B+"
  },
  {
    name: "Fayed hassan",
    email: "fayedhasan1000@gmail.com",
    phone: "01304653768",
    department: "CSE",
    session: "2021-22",
    hall: "N/A",
    blood: "B+"
  },
  {
    name: "Minhajul Islam Limon",
    email: "CLICK EMAIL",
    phone: "1744906958",
    department: "Applied Math",
    session: "2021-22",
    hall: "Shahid Samsuzzoha hall",
    blood: "A+"
  },
  {
    name: "Erfan Ahamed Asif",
    email: "CLICK EMAIL",
    phone: "1403468677",
    department: "Chemistry",
    session: "2021-22",
    hall: "N/A",
    blood: "B+"
  },
  {
    name: "kamlesh Roy",
    email: "",
    phone: "1786923018",
    department: "statistics",
    session: "2021-22",
    hall: "kamlesh roy jason",
    blood: "AB+"
  },
  {
    name: "মোঃসুজন প্রধান",
    email: "CLICK EMAIL",
    phone: "01902383808",
    department: "CSE",
    session: "2020-21",
    hall: "সৈয়দ আমীর আলী হল",
    blood: "B+"
  },
  {
    name: "মো: শাহরিয়ার ফয়সাল",
    email: "CLICK EMAIL",
    phone: "01723577602",
    department: "APPLIED MATH",
    session: "2020-21",
    hall: "মাদার বখশ",
    blood: "O+"
  },
  {
    name: "Md. Labib Aman",
    email: "CLICK EMAIL",
    phone: "01773512404",
    department: "IER",
    session: "2020-21",
    hall: "Motihar",
    blood: "A+"
  },
  {
    name: "Tajnur Borno",
    email: "CLICK EMAIL",
    phone: "01792251778",
    department: "AAE",
    session: "2020-21",
    hall: "Bangamata",
    blood: "B+"
  },
  {
    name: "Fahad Ul  Borshon",
    email: "CLICK EMAIL",
    phone: "01744582760",
    department: "Chemistry",
    session: "2020-21",
    hall: "Saheed Habibur Rahman Hall",
    blood: "O+"
  },
  {
    name: "Mostafizur  Emon",
    email: "CLICK EMAIL",
    phone: "01870711247",
    department: "Statistics",
    session: "2020-21",
    hall: "Ziya hall",
    blood: "O+"
  },
  {
    name: "ইয়ামান ইসলাম ইমন",
    email: "CLICK EMAIL",
    phone: "01407336505",
    department: "MBBS",
    session: "2020-21",
    hall: "Blank",
    blood: "O+"
  },
  {
    name: "Shakila Sharmin Jui",
    email: "CLICK EMAIL",
    phone: "01615235868",
    department: "ICE",
    session: "2020-21",
    hall: "Rohomutunnessa",
    blood: "O+"
  },
  {
    name: "মোঃআল-মেহেদী",
    email: "CLICK EMAIL",
    phone: "01701501846",
    department: "ফার্মেসী বিভাগ",
    session: "2019-20",
    hall: "শের এ বাংলা হল",
    blood: "B+"
  },
  {
    name: "Roni Dev Sharma",
    email: "CLICK EMAIL",
    phone: "01822087104",
    department: "IR",
    session: "2019-20",
    hall: "Matihar hall",
    blood: "AB+"
  },
  {
    name: "preeti afrin nishi",
    email: "CLICK EMAIL",
    phone: "01701997602",
    department: "Marketing",
    session: "2019-20",
    hall: "Rahamtunnesa hall",
    blood: "O+"
  },
  {
    name: "Jawad Ul Basir",
    email: "CLICK EMAIL",
    phone: "01717678090",
    department: "পদার্থবিজ্ঞান",
    session: "2019-20",
    hall: "মতিহার হল",
    blood: "O-"
  },
  {
    name: "মো: হেমায়েত উল্লাহ",
    email: "CLICK EMAIL",
    phone: "01789346277",
    department: "ইসলামের ইতিহাস",
    session: "2019-20",
    hall: "মাদারবখশ হল",
    blood: "O+"
  },
  {
    name: "Rakib Israque Roky",
    email: "CLICK EMAIL",
    phone: "01761659710",
    department: "GEB",
    session: "2018-19",
    hall: "Madar Bux Hall",
    blood: "O+"
  },
  {
    name: "দিপু রায়",
    email: "CLICK EMAIL",
    phone: "01770717223",
    department: "প্রাণিবিদ্যা",
    session: "2018-19",
    hall: "শেরেবাংলা",
    blood: "A+"
  },
  {
    name: "Ringku pal",
    email: "CLICK EMAIL",
    phone: "01741085313",
    department: "Philosophy",
    session: "2018-19",
    hall: "Matihar hall",
    blood: "AB+"
  },
  {
    name: "Raju Islam",
    email: "CLICK EMAIL",
    phone: "1717824905",
    department: "Political Science",
    session: "2018-19",
    hall: "N/A",
    blood: "B+"
  },
  {
    name: "চন্দন চন্দ্র রায়",
    email: "CLICK EMAIL",
    phone: "01717221723",
    department: "ফলিত গণিত",
    session: "2017-18",
    hall: "জিয়াউর রহমান হল",
    blood: "O+"
  },
  {
    name: "প্রীতি রায়",
    email: "CLICK EMAIL",
    phone: "01774462236",
    department: "সাংস্কৃতিক জীবন ও সুসংস্কৃত সম্পর্কিত অধ্যয়ন",
    session: "2017-18",
    hall: "নেই",
    blood: "AB+"
  },
  {
    name: "অনিক রায়",
    email: "CLICK EMAIL",
    phone: "0178853497",
    department: "পরিসংখ্যান",
    session: "2017-18",
    hall: "মাটি নাহার হল",
    blood: "B+"
  },
  {
    name: "Rohan Hossain",
    email: "CLICK EMAIL",
    phone: "01794516620",
    department: "History",
    session: "2017-18",
    hall: "Hannah hall",
    blood: "AB+"
  } 
 
  // Add more students as needed
];


studentData.forEach(student => {
  if (!student.image || student.image.trim() === '') {
      student.image = defaultImageUrl;
  }
});