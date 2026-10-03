"use client";

import { ChevronsUpDownIcon, SearchIcon } from "lucide-react";
import { Button } from "@/registry/default/ui/button";
import {
  Combobox,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxPopup,
  ComboboxTrigger,
  ComboboxValue,
} from "@/registry/default/ui/combobox";

interface Country {
  code: string;
  value: string | null;
  continent: string;
  label: string;
}

const countries: Country[] = [
  { code: "", continent: "", label: "اختر البلد", value: null },
  { code: "af", continent: "آسيا", label: "أفغانستان", value: "afghanistan" },
  { code: "al", continent: "أوروبا", label: "ألبانيا", value: "albania" },
  { code: "dz", continent: "أفريقيا", label: "الجزائر", value: "algeria" },
  { code: "ad", continent: "أوروبا", label: "أندورا", value: "andorra" },
  { code: "ao", continent: "أفريقيا", label: "أنغولا", value: "angola" },
  {
    code: "ar",
    continent: "أمريكا الجنوبية",
    label: "الأرجنتين",
    value: "argentina",
  },
  { code: "am", continent: "آسيا", label: "أرمينيا", value: "armenia" },
  {
    code: "au",
    continent: "أوقيانوسيا",
    label: "أستراليا",
    value: "australia",
  },
  { code: "at", continent: "أوروبا", label: "النمسا", value: "austria" },
  { code: "az", continent: "آسيا", label: "أذربيجان", value: "azerbaijan" },
  {
    code: "bs",
    continent: "أمريكا الشمالية",
    label: "جزر البهاما",
    value: "bahamas",
  },
  { code: "bh", continent: "آسيا", label: "البحرين", value: "bahrain" },
  { code: "bd", continent: "آسيا", label: "بنغلاديش", value: "bangladesh" },
  {
    code: "bb",
    continent: "أمريكا الشمالية",
    label: "بربادوس",
    value: "barbados",
  },
  { code: "by", continent: "أوروبا", label: "بيلاروسيا", value: "belarus" },
  { code: "be", continent: "أوروبا", label: "بلجيكا", value: "belgium" },
  { code: "bz", continent: "أمريكا الشمالية", label: "بليز", value: "belize" },
  { code: "bj", continent: "أفريقيا", label: "بنين", value: "benin" },
  { code: "bt", continent: "آسيا", label: "بوتان", value: "bhutan" },
  {
    code: "bo",
    continent: "أمريكا الجنوبية",
    label: "بوليفيا",
    value: "bolivia",
  },
  {
    code: "ba",
    continent: "أوروبا",
    label: "البوسنة والهرسك",
    value: "bosnia-and-herzegovina",
  },
  { code: "bw", continent: "أفريقيا", label: "بوتسوانا", value: "botswana" },
  {
    code: "br",
    continent: "أمريكا الجنوبية",
    label: "البرازيل",
    value: "brazil",
  },
  { code: "bn", continent: "آسيا", label: "بروني", value: "brunei" },
  { code: "bg", continent: "أوروبا", label: "بلغاريا", value: "bulgaria" },
  {
    code: "bf",
    continent: "أفريقيا",
    label: "بوركينا فاسو",
    value: "burkina-faso",
  },
  { code: "bi", continent: "أفريقيا", label: "بوروندي", value: "burundi" },
  { code: "kh", continent: "آسيا", label: "كمبوديا", value: "cambodia" },
  { code: "cm", continent: "أفريقيا", label: "الكاميرون", value: "cameroon" },
  { code: "ca", continent: "أمريكا الشمالية", label: "كندا", value: "canada" },
  {
    code: "cv",
    continent: "أفريقيا",
    label: "الرأس الأخضر",
    value: "cape-verde",
  },
  {
    code: "cf",
    continent: "أفريقيا",
    label: "جمهورية أفريقيا الوسطى",
    value: "central-african-republic",
  },
  { code: "td", continent: "أفريقيا", label: "تشاد", value: "chad" },
  { code: "cl", continent: "أمريكا الجنوبية", label: "شيلي", value: "chile" },
  { code: "cn", continent: "آسيا", label: "الصين", value: "china" },
  {
    code: "co",
    continent: "أمريكا الجنوبية",
    label: "كولومبيا",
    value: "colombia",
  },
  {
    code: "km",
    continent: "أفريقيا",
    label: "جزر القمر القمر",
    value: "comoros",
  },
  { code: "cg", continent: "أفريقيا", label: "الكونغو", value: "congo" },
  {
    code: "cr",
    continent: "أمريكا الشمالية",
    label: "كوستاريكا",
    value: "costa-rica",
  },
  { code: "hr", continent: "أوروبا", label: "كرواتيا", value: "croatia" },
  { code: "cu", continent: "أمريكا الشمالية", label: "كوبا", value: "cuba" },
  { code: "cy", continent: "آسيا", label: "قبرص", value: "cyprus" },
  {
    code: "cz",
    continent: "أوروبا",
    label: "جمهورية التشيك",
    value: "czech-republic",
  },
  { code: "dk", continent: "أوروبا", label: "الدنمارك", value: "denmark" },
  { code: "dj", continent: "أفريقيا", label: "جيبوتي", value: "djibouti" },
  {
    code: "dm",
    continent: "أمريكا الشمالية",
    label: "دومينيكا",
    value: "dominica",
  },
  {
    code: "do",
    continent: "أمريكا الشمالية",
    label: "جمهورية الدومينيكان",
    value: "dominican-republic",
  },
  {
    code: "ec",
    continent: "أمريكا الجنوبية",
    label: "إكوادور",
    value: "ecuador",
  },
  { code: "eg", continent: "أفريقيا", label: "مصر", value: "egypt" },
  {
    code: "sv",
    continent: "أمريكا الشمالية",
    label: "السلفادور",
    value: "el-salvador",
  },
  {
    code: "gq",
    continent: "أفريقيا",
    label: "غينيا الاستوائية",
    value: "equatorial-guinea",
  },
  { code: "er", continent: "أفريقيا", label: "إريتريا", value: "eritrea" },
  { code: "ee", continent: "أوروبا", label: "إستونيا", value: "estonia" },
  { code: "et", continent: "أفريقيا", label: "إثيوبيا", value: "ethiopia" },
  { code: "fj", continent: "أوقيانوسيا", label: "فيجي", value: "fiji" },
  { code: "fi", continent: "أوروبا", label: "فنلندا", value: "finland" },
  { code: "fr", continent: "أوروبا", label: "فرنسا", value: "france" },
  { code: "ga", continent: "أفريقيا", label: "غابون", value: "gabon" },
  { code: "gm", continent: "أفريقيا", label: "غامبيا", value: "gambia" },
  { code: "ge", continent: "آسيا", label: "جورجيا", value: "georgia" },
  { code: "de", continent: "أوروبا", label: "ألمانيا", value: "germany" },
  { code: "gh", continent: "أفريقيا", label: "غانا", value: "ghana" },
  { code: "gr", continent: "أوروبا", label: "اليونان", value: "greece" },
  {
    code: "gd",
    continent: "أمريكا الشمالية",
    label: "غرينادا",
    value: "grenada",
  },
  {
    code: "gt",
    continent: "أمريكا الشمالية",
    label: "غواتيمالا",
    value: "guatemala",
  },
  { code: "gn", continent: "أفريقيا", label: "غينيا", value: "guinea" },
  {
    code: "gw",
    continent: "أفريقيا",
    label: "غينيا - بيساو",
    value: "guinea-bissau",
  },
  { code: "gy", continent: "أمريكا الجنوبية", label: "غي", value: "guyana" },
  { code: "ht", continent: "أمريكا الشمالية", label: "هايتي", value: "haiti" },
  {
    code: "hn",
    continent: "أمريكا الشمالية",
    label: "هندوراس",
    value: "honduras",
  },
  { code: "hu", continent: "أوروبا", label: "المجر", value: "hungary" },
  { code: "is", continent: "أوروبا", label: "آيسلندا", value: "iceland" },
  { code: "in", continent: "آسيا", label: "الهند", value: "india" },
  { code: "id", continent: "آسيا", label: "إندونيسيا", value: "indonesia" },
  { code: "ir", continent: "آسيا", label: "إيران", value: "iran" },
  { code: "iq", continent: "آسيا", label: "العراق", value: "iraq" },
  { code: "ie", continent: "أوروبا", label: "أيرلندا", value: "ireland" },
  { code: "il", continent: "آسيا", label: "إسرائيل", value: "israel" },
  { code: "it", continent: "أوروبا", label: "إيطاليا", value: "italy" },
  {
    code: "jm",
    continent: "أمريكا الشمالية",
    label: "جامايكا",
    value: "jamaica",
  },
  { code: "jp", continent: "آسيا", label: "اليابان", value: "japan" },
  { code: "jo", continent: "آسيا", label: "الأردن", value: "jordan" },
  { code: "kz", continent: "آسيا", label: "كازاخستان", value: "kazakhstan" },
  { code: "ke", continent: "أفريقيا", label: "كينيا", value: "kenya" },
  { code: "kw", continent: "آسيا", label: "الكويت", value: "kuwait" },
  {
    code: "kg",
    continent: "آسيا",
    label: "قر قر قرغيزستان",
    value: "kyrgyzstan",
  },
  { code: "la", continent: "آسيا", label: "لاوس", value: "laos" },
  { code: "lv", continent: "أوروبا", label: "لاتفيا", value: "latvia" },
  { code: "lb", continent: "آسيا", label: "لبنان", value: "lebanon" },
  { code: "ls", continent: "أفريقيا", label: "ليسوتو", value: "lesotho" },
  { code: "lr", continent: "أفريقيا", label: "ليبريا", value: "liberia" },
  { code: "ly", continent: "أفريقيا", label: "ليبيا", value: "libya" },
  {
    code: "li",
    continent: "أوروبا",
    label: "ليختنشتاين",
    value: "liechtenstein",
  },
  { code: "lt", continent: "أوروبا", label: "ليتوانيا", value: "lithuania" },
  { code: "lu", continent: "أوروبا", label: "لوكسمبورغ", value: "luxembourg" },
  { code: "mg", continent: "أفريقيا", label: "مدغشقر", value: "madagascar" },
  {
    code: "mw",
    continent: "أفريقيا",
    label: "مل مل مل مل مل ملاوي",
    value: "malawi",
  },
  { code: "my", continent: "آسيا", label: "ماليزيا", value: "malaysia" },
  { code: "mv", continent: "آسيا", label: "جزر المالديف", value: "maldives" },
  { code: "ml", continent: "أفريقيا", label: "مالي", value: "mali" },
  { code: "mt", continent: "أوروبا", label: "مالطا", value: "malta" },
  {
    code: "mh",
    continent: "أوقيانوسيا",
    label: "جزر مارشال",
    value: "marshall-islands",
  },
  { code: "mr", continent: "أفريقيا", label: "موريتانيا", value: "mauritania" },
  { code: "mu", continent: "أفريقيا", label: "موريشيوس", value: "mauritius" },
  {
    code: "mx",
    continent: "أمريكا الشمالية",
    label: "المكسيك",
    value: "mexico",
  },
  {
    code: "fm",
    continent: "أوقيانوسيا",
    label: "ميكرونيزيا",
    value: "micronesia",
  },
  { code: "md", continent: "أوروبا", label: "مولدوفا", value: "moldova" },
  { code: "mc", continent: "أوروبا", label: "موناكو", value: "monaco" },
  { code: "mn", continent: "آسيا", label: "منغوليا", value: "mongolia" },
  {
    code: "me",
    continent: "أوروبا",
    label: "الجبل الأسود",
    value: "montenegro",
  },
  { code: "ma", continent: "أفريقيا", label: "المغرب", value: "morocco" },
  { code: "mz", continent: "أفريقيا", label: "موزمبيق", value: "mozambique" },
  { code: "mm", continent: "آسيا", label: "ميانمار", value: "myanmar" },
  { code: "na", continent: "أفريقيا", label: "ناميبيا", value: "namibia" },
  { code: "nr", continent: "أوقيانوسيا", label: "ناورو", value: "nauru" },
  { code: "np", continent: "آسيا", label: "نيبال", value: "nepal" },
  {
    code: "nl",
    continent: "أوروبا",
    label: "هولندا",
    value: "netherlands",
  },
  {
    code: "nz",
    continent: "أوقيانوسيا",
    label: "نيوزيلندا",
    value: "new-zealand",
  },
  {
    code: "ni",
    continent: "أمريكا الشمالية",
    label: "نيكاراغوا",
    value: "nicaragua",
  },
  { code: "ne", continent: "أفريقيا", label: "النيجر", value: "niger" },
  { code: "ng", continent: "أفريقيا", label: "نيجيريا", value: "nigeria" },
  {
    code: "kp",
    continent: "آسيا",
    label: "كوريا الشمالية",
    value: "north-korea",
  },
  {
    code: "mk",
    continent: "أوروبا",
    label: "مقدونيا الشمالية",
    value: "north-macedonia",
  },
  { code: "no", continent: "أوروبا", label: "النرويج", value: "norway" },
  { code: "om", continent: "آسيا", label: "سلطنة عمان عمان", value: "oman" },
  { code: "pk", continent: "آسيا", label: "باكستان", value: "pakistan" },
  { code: "pw", continent: "أوقيانوسيا", label: "بالاو", value: "palau" },
  { code: "ps", continent: "آسيا", label: "فلسطين", value: "palestine" },
  { code: "pa", continent: "أمريكا الشمالية", label: "بنما", value: "panama" },
  {
    code: "pg",
    continent: "أوقيانوسيا",
    label: "بابوا غينيا الجديدة",
    value: "papua-new-guinea",
  },
  {
    code: "py",
    continent: "أمريكا الجنوبية",
    label: "باراجواي باراغواي",
    value: "paraguay",
  },
  { code: "pe", continent: "أمريكا الجنوبية", label: "بيرو", value: "peru" },
  { code: "ph", continent: "آسيا", label: "الفلبين", value: "philippines" },
  { code: "pl", continent: "أوروبا", label: "بولندا", value: "poland" },
  { code: "pt", continent: "أوروبا", label: "البرتغال", value: "portugal" },
  { code: "qa", continent: "آسيا", label: "قطر", value: "qatar" },
  { code: "ro", continent: "أوروبا", label: "رومانيا", value: "romania" },
  { code: "ru", continent: "أوروبا", label: "روسيا", value: "russia" },
  { code: "rw", continent: "أفريقيا", label: "رواندا", value: "rwanda" },
  { code: "ws", continent: "أوقيانوسيا", label: "ساموا", value: "samoa" },
  { code: "sm", continent: "أوروبا", label: "سان مارينو", value: "san-marino" },
  {
    code: "sa",
    continent: "آسيا",
    label: "المملكة العربية السعودية",
    value: "saudi-arabia",
  },
  { code: "sn", continent: "أفريقيا", label: "السنغال", value: "senegal" },
  { code: "rs", continent: "أوروبا", label: "صربيا", value: "serbia" },
  { code: "sc", continent: "أفريقيا", label: "سيشيل", value: "seychelles" },
  {
    code: "sl",
    continent: "أفريقيا",
    label: "سيراليون",
    value: "sierra-leone",
  },
  { code: "sg", continent: "آسيا", label: "الرياض", value: "singapore" },
  { code: "sk", continent: "أوروبا", label: "سلوفاكيا", value: "slovakia" },
  { code: "si", continent: "أوروبا", label: "سلوفينيا", value: "slovenia" },
  {
    code: "sb",
    continent: "أوقيانوسيا",
    label: "جزر سليمان",
    value: "solomon-islands",
  },
  { code: "so", continent: "أفريقيا", label: "الصومال", value: "somalia" },
  {
    code: "za",
    continent: "أفريقيا",
    label: "جنوب أفريقيا",
    value: "south-africa",
  },
  {
    code: "kr",
    continent: "آسيا",
    label: "كوريا الجنوبية",
    value: "south-korea",
  },
  {
    code: "ss",
    continent: "أفريقيا",
    label: "جنوب السودان",
    value: "south-sudan",
  },
  { code: "es", continent: "أوروبا", label: "إسبانيا", value: "spain" },
  { code: "lk", continent: "آسيا", label: "سريلانكا", value: "sri-lanka" },
  { code: "sd", continent: "أفريقيا", label: "السودان", value: "sudan" },
  {
    code: "sr",
    continent: "أمريكا الجنوبية",
    label: "سورينام",
    value: "suriname",
  },
  { code: "se", continent: "أوروبا", label: "السويد", value: "sweden" },
  {
    code: "ch",
    continent: "أوروبا",
    label: "سويسرا",
    value: "switzerland",
  },
  { code: "sy", continent: "آسيا", label: "سوريا", value: "syria" },
  { code: "tw", continent: "آسيا", label: "تايوان", value: "taiwan" },
  { code: "tj", continent: "آسيا", label: "طا", value: "tajikistan" },
  { code: "tz", continent: "أفريقيا", label: "تنزانيا", value: "tanzania" },
  { code: "th", continent: "آسيا", label: "تايلاند", value: "thailand" },
  {
    code: "tl",
    continent: "آسيا",
    label: "تيمور - ليشتي",
    value: "timor-leste",
  },
  { code: "tg", continent: "أفريقيا", label: "توغووغو", value: "togo" },
  { code: "to", continent: "أوقيانوسيا", label: "تونغا", value: "tonga" },
  {
    code: "tt",
    continent: "أمريكا الشمالية",
    label: "ترينيداد وتوباغو",
    value: "trinidad-and-tobago",
  },
  { code: "tn", continent: "أفريقيا", label: "تونس", value: "tunisia" },
  { code: "tr", continent: "آسيا", label: "تركيا", value: "turkey" },
  {
    code: "tm",
    continent: "آسيا",
    label: "ترك تركمانستان تركمانستان",
    value: "turkmenistan",
  },
  { code: "tv", continent: "أوقيانوسيا", label: "توفالو", value: "tuvalu" },
  { code: "ug", continent: "أفريقيا", label: "أوغندا", value: "uganda" },
  { code: "ua", continent: "أوروبا", label: "أوكرانيا", value: "ukraine" },
  {
    code: "ae",
    continent: "آسيا",
    label: "الإمارات العربية المتحدة",
    value: "united-arab-emirates",
  },
  {
    code: "gb",
    continent: "أوروبا",
    label: "المملكة المتحدة",
    value: "united-kingdom",
  },
  {
    code: "us",
    continent: "أمريكا الشمالية",
    label: "الولايات المتحدة الأمريكية",
    value: "united-states",
  },
  {
    code: "uy",
    continent: "أمريكا الجنوبية",
    label: "أوروغواي",
    value: "uruguay",
  },
  { code: "uz", continent: "آسيا", label: "أوزبكستان", value: "uzbekistan" },
  { code: "vu", continent: "أوقيانوسيا", label: "فانواتو", value: "vanuatu" },
  {
    code: "va",
    continent: "أوروبا",
    label: "الفاتيكان",
    value: "vatican-city",
  },
  {
    code: "ve",
    continent: "أمريكا الجنوبية",
    label: "فنزويلا",
    value: "venezuela",
  },
  { code: "vn", continent: "آسيا", label: "فيتنام", value: "vietnam" },
  { code: "ye", continent: "آسيا", label: "اليمن", value: "yemen" },
  { code: "zm", continent: "أفريقيا", label: "زامبيا", value: "zambia" },
  { code: "zw", continent: "أفريقيا", label: "زيمبابوي", value: "zimbabwe" },
];

export default function Particle() {
  return (
    <Combobox defaultValue={countries[0]} items={countries}>
      <ComboboxTrigger
        render={
          <Button
            className="w-full justify-between font-normal"
            variant="outline"
          />
        }
      >
        <ComboboxValue />
        <ChevronsUpDownIcon className="-me-1!" />
      </ComboboxTrigger>
      <ComboboxPopup aria-label="اختر البلد">
        <div className="border-b p-2">
          <ComboboxInput
            className="rounded-md before:rounded-[calc(var(--radius-md)-1px)]"
            placeholder="مثلا المملكة المتحدة"
            showTrigger={false}
            startAddon={<SearchIcon />}
          />
        </div>
        <ComboboxEmpty>لم يتم العثور على أي بلد.</ComboboxEmpty>
        <ComboboxList>
          {(country: Country) => (
            <ComboboxItem key={country.code} value={country}>
              {country.label}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxPopup>
    </Combobox>
  );
}
