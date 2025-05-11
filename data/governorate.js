const data = [
  {
    id: 1,
    name_en: "Cairo",
    name_ar: "القاهرة",
    postal_code: "11511",
    cities: [
      {
        id: 1,
        name_en: "Cairo",
        name_ar: "القاهرة",
      },
      {
        id: 2,
        name_en: "Helwan",
        name_ar: "حلوان",
      },
      {
        id: 3,
        name_en: "New Cairo",
        name_ar: "القاهرة الجديدة",
      },
      {
        id: 4,
        name_en: "Nasr City",
        name_ar: "مدينة نصر",
      },
      {
        id: 5,
        name_en: "Maadi",
        name_ar: "المعادي",
      },
    ],
  },
  {
    id: 2,
    name_en: "Alexandria",
    name_ar: "الإسكندرية",
    postal_code: "21500",
    cities: [
      {
        id: 1,
        name_en: "Alexandria",
        name_ar: "الإسكندرية",
      },
      {
        id: 2,
        name_en: "Borg El Arab",
        name_ar: "برج العرب",
      },
      {
        id: 3,
        name_en: "Abu Qir",
        name_ar: "أبو قير",
      },
      {
        id: 4,
        name_en: "El Montaza",
        name_ar: "المنتزه",
      },
    ],
  },
  {
    id: 3,
    name_en: "Giza",
    name_ar: "الجيزة",
    postal_code: "12511",
    cities: [
      {
        id: 1,
        name_en: "Giza",
        name_ar: "الجيزة",
      },
      {
        id: 2,
        name_en: "6th of October",
        name_ar: "السادس من أكتوبر",
      },
      {
        id: 3,
        name_en: "Sheikh Zayed",
        name_ar: "الشيخ زايد",
      },
      {
        id: 4,
        name_en: "Dokki",
        name_ar: "الدقي",
      },
      {
        id: 5,
        name_en: "Imbaba",
        name_ar: "إمبابة",
      },
    ],
  },
  {
    id: 4,
    name_en: "Dakahlia",
    name_ar: "الدقهلية",
    postal_code: "35511",
    cities: [
      {
        id: 1,
        name_en: "Mansoura",
        name_ar: "المنصورة",
      },
      {
        id: 2,
        name_en: "Talkha",
        name_ar: "طلخا",
      },
      {
        id: 3,
        name_en: "Mit Ghamr",
        name_ar: "ميت غمر",
      },
      {
        id: 4,
        name_en: "Aga",
        name_ar: "أجا",
      },
    ],
  },
  {
    id: 5,
    name_en: "Beheira",
    name_ar: "البحيرة",
    postal_code: "22511",
    cities: [
      {
        id: 1,
        name_en: "Damanhur",
        name_ar: "دمنهور",
      },
      {
        id: 2,
        name_en: "Kafr El Dawwar",
        name_ar: "كفر الدوار",
      },
      {
        id: 3,
        name_en: "Rashid",
        name_ar: "رشيد",
      },
      {
        id: 4,
        name_en: "Abu El Matamir",
        name_ar: "أبو المطامير",
      },
    ],
  },
  {
    id: 6,
    name_en: "Qalyubia",
    name_ar: "القليوبية",
    postal_code: "13621",
    cities: [
      {
        id: 1,
        name_en: "Banha",
        name_ar: "بنها",
      },
      {
        id: 2,
        name_en: "Qalyub",
        name_ar: "قليوب",
      },
      {
        id: 3,
        name_en: "Shubra El Kheima",
        name_ar: "شبرا الخيمة",
      },
      {
        id: 4,
        name_en: "El Khanka",
        name_ar: "الخانكة",
      },
    ],
  },
  {
    id: 7,
    name_en: "Gharbia",
    name_ar: "الغربية",
    postal_code: "31737",
    cities: [
      {
        id: 1,
        name_en: "Tanta",
        name_ar: "طنطا",
      },
      {
        id: 2,
        name_en: "El Mahalla El Kubra",
        name_ar: "المحلة الكبرى",
      },
      {
        id: 3,
        name_en: "Kafr El Zayat",
        name_ar: "كفر الزيات",
      },
      {
        id: 4,
        name_en: "Zefta",
        name_ar: "زفتى",
      },
    ],
  },
  {
    id: 8,
    name_en: "Port Said",
    name_ar: "بورسعيد",
    postal_code: "42511",
    cities: [
      {
        id: 1,
        name_en: "Port Said",
        name_ar: "بورسعيد",
      },
      {
        id: 2,
        name_en: "Port Fuad",
        name_ar: "بور فؤاد",
      },
    ],
  },
  {
    id: 9,
    name_en: "Suez",
    name_ar: "السويس",
    postal_code: "43511",
    cities: [
      {
        id: 1,
        name_en: "Suez",
        name_ar: "السويس",
      },
      {
        id: 2,
        name_en: "Arbaeen",
        name_ar: "الأربعين",
      },
    ],
  },
  {
    id: 10,
    name_en: "Ismailia",
    name_ar: "الإسماعيلية",
    postal_code: "41511",
    cities: [
      {
        id: 1,
        name_en: "Ismailia",
        name_ar: "الإسماعيلية",
      },
      {
        id: 2,
        name_en: "Fayed",
        name_ar: "فايد",
      },
      {
        id: 3,
        name_en: "Qantara",
        name_ar: "القنطرة",
      },
    ],
  },
  {
    id: 11,
    name_en: "Sharqia",
    name_ar: "الشرقية",
    postal_code: "44511",
    cities: [
      {
        id: 1,
        name_en: "Zagazig",
        name_ar: "الزقازيق",
      },
      {
        id: 2,
        name_en: "10th of Ramadan",
        name_ar: "العاشر من رمضان",
      },
      {
        id: 3,
        name_en: "Bilbeis",
        name_ar: "بلبيس",
      },
      {
        id: 4,
        name_en: "Abu Hammad",
        name_ar: "أبو حماد",
      },
    ],
  },
  {
    id: 12,
    name_en: "Monufia",
    name_ar: "المنوفية",
    postal_code: "32511",
    cities: [
      {
        id: 1,
        name_en: "Shibin El Kom",
        name_ar: "شبين الكوم",
      },
      {
        id: 2,
        name_en: "Sadat City",
        name_ar: "مدينة السادات",
      },
      {
        id: 3,
        name_en: "Menouf",
        name_ar: "منوف",
      },
      {
        id: 4,
        name_en: "Ashmoun",
        name_ar: "أشمون",
      },
    ],
  },
  {
    id: 13,
    name_en: "Minya",
    name_ar: "المنيا",
    postal_code: "61511",
    cities: [
      {
        id: 1,
        name_en: "Minya",
        name_ar: "المنيا",
      },
      {
        id: 2,
        name_en: "New Minya",
        name_ar: "المنيا الجديدة",
      },
      {
        id: 3,
        name_en: "Malawi",
        name_ar: "ملوي",
      },
      {
        id: 4,
        name_en: "Beni Mazar",
        name_ar: "بني مزار",
      },
    ],
  },
  {
    id: 14,
    name_en: "Asyut",
    name_ar: "أسيوط",
    postal_code: "71511",
    cities: [
      {
        id: 1,
        name_en: "Asyut",
        name_ar: "أسيوط",
      },
      {
        id: 2,
        name_en: "New Asyut",
        name_ar: "أسيوط الجديدة",
      },
      {
        id: 3,
        name_en: "Abnub",
        name_ar: "أبنوب",
      },
      {
        id: 4,
        name_en: "El Qusiya",
        name_ar: "القوصية",
      },
    ],
  },
  {
    id: 15,
    name_en: "Sohag",
    name_ar: "سوهاج",
    postal_code: "82511",
    cities: [
      {
        id: 1,
        name_en: "Sohag",
        name_ar: "سوهاج",
      },
      {
        id: 2,
        name_en: "New Sohag",
        name_ar: "سوهاج الجديدة",
      },
      {
        id: 3,
        name_en: "Akhmim",
        name_ar: "أخميم",
      },
      {
        id: 4,
        name_en: "Gerga",
        name_ar: "جرجا",
      },
    ],
  },
  {
    id: 16,
    name_en: "Qena",
    name_ar: "قنا",
    postal_code: "83511",
    cities: [
      {
        id: 1,
        name_en: "Qena",
        name_ar: "قنا",
      },
      {
        id: 2,
        name_en: "New Qena",
        name_ar: "قنا الجديدة",
      },
      {
        id: 3,
        name_en: "Nag Hammadi",
        name_ar: "نجع حمادي",
      },
      {
        id: 4,
        name_en: "Dishna",
        name_ar: "دشنا",
      },
    ],
  },
  {
    id: 17,
    name_en: "Aswan",
    name_ar: "أسوان",
    postal_code: "81511",
    cities: [
      {
        id: 1,
        name_en: "Aswan",
        name_ar: "أسوان",
      },
      {
        id: 2,
        name_en: "New Aswan",
        name_ar: "أسوان الجديدة",
      },
      {
        id: 3,
        name_en: "Kom Ombo",
        name_ar: "كوم أمبو",
      },
      {
        id: 4,
        name_en: "Edfu",
        name_ar: "إدفو",
      },
    ],
  },
  {
    id: 18,
    name_en: "Luxor",
    name_ar: "الأقصر",
    postal_code: "85511",
    cities: [
      {
        id: 1,
        name_en: "Luxor",
        name_ar: "الأقصر",
      },
      {
        id: 2,
        name_en: "New Luxor",
        name_ar: "الأقصر الجديدة",
      },
      {
        id: 3,
        name_en: "El Karnak",
        name_ar: "الكرنك",
      },
      {
        id: 4,
        name_en: "Armant",
        name_ar: "أرمنت",
      },
    ],
  },
  {
    id: 19,
    name_en: "Red Sea",
    name_ar: "البحر الأحمر",
    postal_code: "84511",
    cities: [
      {
        id: 1,
        name_en: "Hurghada",
        name_ar: "الغردقة",
      },
      {
        id: 2,
        name_en: "Safaga",
        name_ar: "سفاجا",
      },
      {
        id: 3,
        name_en: "El Gouna",
        name_ar: "الجونة",
      },
      {
        id: 4,
        name_en: "Marsa Alam",
        name_ar: "مرسى علم",
      },
    ],
  },
  {
    id: 20,
    name_en: "New Valley",
    name_ar: "الوادي الجديد",
    postal_code: "72511",
    cities: [
      {
        id: 1,
        name_en: "Kharga",
        name_ar: "الخارجة",
      },
      {
        id: 2,
        name_en: "Dakhla",
        name_ar: "الداخلة",
      },
      {
        id: 3,
        name_en: "Farafra",
        name_ar: "فرافرة",
      },
    ],
  },
  {
    id: 21,
    name_en: "Matrouh",
    name_ar: "مطروح",
    postal_code: "51511",
    cities: [
      {
        id: 1,
        name_en: "Marsa Matrouh",
        name_ar: "مرسى مطروح",
      },
      {
        id: 2,
        name_en: "El Alamein",
        name_ar: "العلمين",
      },
      {
        id: 3,
        name_en: "Siwa",
        name_ar: "سيوة",
      },
    ],
  },
  {
    id: 22,
    name_en: "North Sinai",
    name_ar: "شمال سيناء",
    postal_code: "45511",
    cities: [
      {
        id: 1,
        name_en: "Arish",
        name_ar: "العريش",
      },
      {
        id: 2,
        name_en: "Sheikh Zuweid",
        name_ar: "الشيخ زويد",
      },
      {
        id: 3,
        name_en: "Rafah",
        name_ar: "رفح",
      },
    ],
  },
  {
    id: 23,
    name_en: "South Sinai",
    name_ar: "جنوب سيناء",
    postal_code: "46511",
    cities: [
      {
        id: 1,
        name_en: "Sharm El Sheikh",
        name_ar: "شرم الشيخ",
      },
      {
        id: 2,
        name_en: "Dahab",
        name_ar: "دهب",
      },
      {
        id: 3,
        name_en: "Saint Catherine",
        name_ar: "سانت كاترين",
      },
      {
        id: 4,
        name_en: "Nuweiba",
        name_ar: "نويبع",
      },
    ],
  },
  {
    id: 24,
    name_en: "Damietta",
    name_ar: "دمياط",
    postal_code: "34511",
    cities: [
      {
        id: 1,
        name_en: "Damietta",
        name_ar: "دمياط",
      },
      {
        id: 2,
        name_en: "New Damietta",
        name_ar: "دمياط الجديدة",
      },
      {
        id: 3,
        name_en: "Ras El Bar",
        name_ar: "رأس البر",
      },
    ],
  },
  {
    id: 25,
    name_en: "Kafr El Sheikh",
    name_ar: "كفر الشيخ",
    postal_code: "33511",
    cities: [
      {
        id: 1,
        name_en: "Kafr El Sheikh",
        name_ar: "كفر الشيخ",
      },
      {
        id: 2,
        name_en: "Desouk",
        name_ar: "دسوق",
      },
      {
        id: 3,
        name_en: "Fuwa",
        name_ar: "فوه",
      },
      {
        id: 4,
        name_en: "Bila",
        name_ar: "بيلا",
      },
    ],
  },
  {
    id: 26,
    name_en: "Faiyum",
    name_ar: "الفيوم",
    postal_code: "63511",
    cities: [
      {
        id: 1,
        name_en: "Faiyum",
        name_ar: "الفيوم",
      },
      {
        id: 2,
        name_en: "New Faiyum",
        name_ar: "الفيوم الجديدة",
      },
      {
        id: 3,
        name_en: "Tamiya",
        name_ar: "طامية",
      },
    ],
  },
  {
    id: 27,
    name_en: "Beni Suef",
    name_ar: "بني سويف",
    postal_code: "62511",
    cities: [
      {
        id: 1,
        name_en: "Beni Suef",
        name_ar: "بني سويف",
      },
      {
        id: 2,
        name_en: "New Beni Suef",
        name_ar: "بني سويف الجديدة",
      },
      {
        id: 3,
        name_en: "El Wasta",
        name_ar: "الواسطى",
      },
    ],
  },
];

export default data;
