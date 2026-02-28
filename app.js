const ENABLE_BOTTOM_MENU_V1 = true;

const STORAGE_KEYS = {
  content: "cancoach_content_v1",
  known: "cancoach_known_v1",
  streak: "cancoach_streak_v1",
  reviewed: "cancoach_reviewed_v1",
  prefs: "cancoach_prefs_v1",
  game: "cancoach_game_v1"
};

const USER_CORE_WORDS = [
  // Time
  { hanzi: "尋日", category: "time" },
  { hanzi: "今日", category: "time" },
  { hanzi: "聽日", category: "time" },
  { hanzi: "後天", category: "time" },
  { hanzi: "早啲", category: "time" },
  { hanzi: "之前", category: "time" },
  { hanzi: "而家", category: "time" },
  { hanzi: "之後", category: "time" },
  { hanzi: "稍後", category: "time" },
  { hanzi: "遲啲", category: "time" },
  { hanzi: "下次", category: "time" },
  { hanzi: "上次", category: "time" },
  { hanzi: "今次", category: "time" },
  { hanzi: "星期", category: "time" },
  { hanzi: "一日", category: "time" },
  { hanzi: "早上", category: "time" },
  { hanzi: "早晨", category: "time" },
  { hanzi: "中午", category: "time" },
  { hanzi: "下午", category: "time" },
  { hanzi: "下晝", category: "time" },
  { hanzi: "黃昏", category: "time" },
  { hanzi: "晚上", category: "time" },
  { hanzi: "嗰陣", category: "time" },
  // Numbers
  { hanzi: "零", category: "number" },
  { hanzi: "一", category: "number" },
  { hanzi: "二", category: "number" },
  { hanzi: "兩", category: "number" },
  { hanzi: "三", category: "number" },
  { hanzi: "四", category: "number" },
  { hanzi: "五", category: "number" },
  { hanzi: "六", category: "number" },
  { hanzi: "七", category: "number" },
  { hanzi: "八", category: "number" },
  { hanzi: "九", category: "number" },
  { hanzi: "十", category: "number" },
  { hanzi: "二十", category: "number" },
  { hanzi: "三十", category: "number" },
  { hanzi: "一百", category: "number" },
  { hanzi: "一千", category: "number" },
  { hanzi: "十二", category: "number" },
  { hanzi: "十五", category: "number" },
  { hanzi: "二十一", category: "number" },
  { hanzi: "三十五", category: "number" },
  { hanzi: "九十九", category: "number" },
  { hanzi: "二百五十", category: "number" },
  { hanzi: "半", category: "number" },
  // Location
  { hanzi: "呢度", category: "place" },
  { hanzi: "嗰度", category: "place" },
  { hanzi: "餐廳", category: "place" },
  { hanzi: "學校", category: "place" },
  { hanzi: "街", category: "place" },
  { hanzi: "市場", category: "place" },
  { hanzi: "公司", category: "place" },
  { hanzi: "酒店", category: "place" },
  { hanzi: "醫院", category: "place" },
  { hanzi: "藥房", category: "place" },
  { hanzi: "洗手間", category: "place" },
  { hanzi: "商店", category: "place" },
  // Subject
  { hanzi: "如果", category: "subject" },
  { hanzi: "我", category: "pronoun" },
  { hanzi: "你", category: "pronoun" },
  { hanzi: "佢", category: "pronoun" },
  { hanzi: "哋", category: "subject" },
  { hanzi: "位", category: "measure" },
  { hanzi: "呢個", category: "subject" },
  { hanzi: "嗰個", category: "subject" },
  { hanzi: "呢啲", category: "subject" },
  { hanzi: "嗰啲", category: "subject" },
  // Not / Be
  { hanzi: "唔", category: "grammar" },
  { hanzi: "係", category: "grammar" },
  { hanzi: "識", category: "verb" },
  { hanzi: "嘅", category: "grammar" },
  // Aux verbs
  { hanzi: "想", category: "verb" },
  { hanzi: "鍾意", category: "verb" },
  { hanzi: "喜歡", category: "verb" },
  { hanzi: "想要", category: "verb" },
  { hanzi: "必須", category: "grammar" },
  { hanzi: "要", category: "verb" },
  { hanzi: "應該", category: "grammar" },
  { hanzi: "會", category: "grammar" },
  { hanzi: "將會", category: "grammar" },
  { hanzi: "有", category: "verb" },
  { hanzi: "冇", category: "verb" },
  { hanzi: "有去過", category: "grammar" },
  // Adverbs
  { hanzi: "可以", category: "adverb" },
  { hanzi: "可能", category: "adverb" },
  { hanzi: "或者", category: "adverb" },
  { hanzi: "常常", category: "adverb" },
  { hanzi: "有時", category: "adverb" },
  { hanzi: "從來", category: "adverb" },
  { hanzi: "成日", category: "adverb" },
  { hanzi: "經常", category: "adverb" },
  { hanzi: "以前", category: "adverb" },
  { hanzi: "好多", category: "adverb" },
  { hanzi: "一啲", category: "adverb" },
  { hanzi: "咁", category: "adverb" },
  { hanzi: "仲", category: "adverb" },
  { hanzi: "已經", category: "adverb" },
  { hanzi: "再", category: "adverb" },
  { hanzi: "多次", category: "adverb" },
  { hanzi: "夠", category: "adverb" },
  { hanzi: "都", category: "adverb" },
  { hanzi: "就", category: "adverb" },
  // Verbs
  { hanzi: "反對", category: "verb" },
  { hanzi: "行", category: "verb" },
  { hanzi: "去", category: "verb" },
  { hanzi: "回", category: "verb" },
  { hanzi: "食", category: "verb" },
  { hanzi: "飲", category: "verb" },
  { hanzi: "加", category: "verb" },
  { hanzi: "味", category: "verb" },
  { hanzi: "聞", category: "verb" },
  { hanzi: "賣", category: "verb" },
  { hanzi: "買", category: "verb" },
  { hanzi: "笑", category: "verb" },
  { hanzi: "哭", category: "verb" },
  { hanzi: "喊", category: "verb" },
  { hanzi: "用", category: "verb" },
  { hanzi: "見", category: "verb" },
  { hanzi: "讀", category: "verb" },
  { hanzi: "寫", category: "verb" },
  { hanzi: "知", category: "verb" },
  { hanzi: "講", category: "verb" },
  { hanzi: "傾", category: "verb" },
  { hanzi: "搭", category: "verb" },
  { hanzi: "嚟", category: "verb" },
  { hanzi: "打", category: "verb" },
  { hanzi: "坐", category: "verb" },
  { hanzi: "站", category: "verb" },
  { hanzi: "把", category: "verb" },
  { hanzi: "揾", category: "verb" },
  { hanzi: "找", category: "verb" },
  { hanzi: "住", category: "verb" },
  { hanzi: "試", category: "verb" },
  { hanzi: "記", category: "verb" },
  { hanzi: "拉", category: "verb" },
  { hanzi: "推", category: "verb" },
  { hanzi: "睇", category: "verb" },
  { hanzi: "聽", category: "verb" },
  { hanzi: "收", category: "verb" },
  { hanzi: "畀", category: "verb" },
  { hanzi: "俾", category: "verb" },
  { hanzi: "入", category: "verb" },
  { hanzi: "離開", category: "verb" },
  { hanzi: "關", category: "verb" },
  { hanzi: "開", category: "verb" },
  { hanzi: "明白", category: "verb" },
  { hanzi: "停", category: "verb" },
  // Aspect marks
  { hanzi: "咗", category: "aspect" },
  { hanzi: "過", category: "aspect" },
  { hanzi: "完", category: "aspect" },
  { hanzi: "緊", category: "aspect" },
  { hanzi: "得", category: "aspect" },
  { hanzi: "到", category: "aspect" },
  { hanzi: "翻", category: "aspect" },
  { hanzi: "返", category: "aspect" },
  { hanzi: "囉", category: "aspect" },
  // Adjectives
  { hanzi: "平", category: "adjective" },
  { hanzi: "貴", category: "adjective" },
  { hanzi: "太貴啦", category: "adjective" },
  { hanzi: "靚", category: "adjective" },
  { hanzi: "醜", category: "adjective" },
  { hanzi: "難", category: "adjective" },
  { hanzi: "容易", category: "adjective" },
  { hanzi: "快", category: "adjective" },
  { hanzi: "慢", category: "adjective" },
  { hanzi: "熱", category: "adjective" },
  { hanzi: "凍", category: "adjective" },
  { hanzi: "暖", category: "adjective" },
  { hanzi: "大", category: "adjective" },
  { hanzi: "細", category: "adjective" },
  { hanzi: "新", category: "adjective" },
  { hanzi: "舊", category: "adjective" },
  { hanzi: "衰", category: "adjective" },
  { hanzi: "辣", category: "adjective" },
  { hanzi: "少", category: "adjective" },
  { hanzi: "攰", category: "adjective" },
  { hanzi: "累", category: "adjective" },
  { hanzi: "開心", category: "adjective" },
  { hanzi: "傷心", category: "adjective" },
  // Prepositions
  { hanzi: "上", category: "preposition" },
  { hanzi: "下", category: "preposition" },
  { hanzi: "入面", category: "preposition" },
  { hanzi: "外面", category: "preposition" },
  { hanzi: "近", category: "preposition" },
  { hanzi: "遠", category: "preposition" },
  { hanzi: "左", category: "preposition" },
  { hanzi: "右", category: "preposition" },
  { hanzi: "喺", category: "preposition" },
  { hanzi: "同", category: "preposition" },
  { hanzi: "由", category: "preposition" },
  { hanzi: "靠", category: "preposition" },
  { hanzi: "之間", category: "preposition" },
  { hanzi: "周圍", category: "preposition" },
  { hanzi: "前面", category: "preposition" },
  { hanzi: "後面", category: "preposition" },
  { hanzi: "橫過", category: "preposition" },
  { hanzi: "沿", category: "preposition" },
  { hanzi: "向", category: "preposition" },
  { hanzi: "穿過", category: "preposition" },
  { hanzi: "啲", category: "preposition" },
  // Conjunctions
  { hanzi: "並", category: "conjunction" },
  { hanzi: "但係", category: "conjunction" },
  { hanzi: "唔係", category: "conjunction" },
  { hanzi: "定", category: "conjunction" },
  { hanzi: "所以", category: "conjunction" },
  { hanzi: "除咗", category: "conjunction" },
  { hanzi: "同埋", category: "conjunction" },
  { hanzi: "因為", category: "conjunction" },
  { hanzi: "雖然", category: "conjunction" },
  { hanzi: "不過", category: "conjunction" },
  { hanzi: "直至", category: "conjunction" },
  { hanzi: "只要", category: "conjunction" },
  { hanzi: "一...就", category: "conjunction" },
  { hanzi: "就算", category: "conjunction" },
  // Measure words
  { hanzi: "個", category: "measure" },
  { hanzi: "張", category: "measure" },
  { hanzi: "件", category: "measure" },
  { hanzi: "支", category: "measure" },
  { hanzi: "本", category: "measure" },
  { hanzi: "部", category: "measure" },
  { hanzi: "條", category: "measure" },
  { hanzi: "塊", category: "measure" },
  { hanzi: "對", category: "measure" },
  { hanzi: "雙", category: "measure" },
  { hanzi: "間", category: "measure" },
  { hanzi: "杯", category: "measure" },
  { hanzi: "片", category: "measure" },
  { hanzi: "行", category: "measure" },
  { hanzi: "打", category: "measure" },
  { hanzi: "頂", category: "measure" },
  { hanzi: "棵", category: "measure" },
  { hanzi: "隻", category: "measure" },
  { hanzi: "架", category: "measure" },
  { hanzi: "篇", category: "measure" },
  { hanzi: "碗", category: "measure" },
  { hanzi: "粒", category: "measure" },
  { hanzi: "餐", category: "measure" },
  { hanzi: "份", category: "measure" },
  // Nouns
  { hanzi: "嘢", category: "noun" },
  { hanzi: "啲嘢", category: "noun" },
  { hanzi: "房間", category: "noun" },
  { hanzi: "桌子", category: "noun" },
  { hanzi: "椅子", category: "noun" },
  { hanzi: "公寓", category: "noun" },
  { hanzi: "廚房", category: "noun" },
  { hanzi: "客廳", category: "noun" },
  { hanzi: "睡房", category: "noun" },
  { hanzi: "臥室", category: "noun" },
  { hanzi: "浴室", category: "noun" },
  { hanzi: "陽台", category: "noun" },
  { hanzi: "門", category: "noun" },
  { hanzi: "窗", category: "noun" },
  { hanzi: "梳化", category: "noun" },
  { hanzi: "冰箱", category: "noun" },
  { hanzi: "爐頭", category: "noun" },
  { hanzi: "微波爐", category: "noun" },
  { hanzi: "洗衣機", category: "noun" },
  { hanzi: "乾衣機", category: "noun" },
  { hanzi: "書架", category: "noun" },
  { hanzi: "櫃子", category: "noun" },
  { hanzi: "燈", category: "noun" },
  { hanzi: "風扇", category: "noun" },
  { hanzi: "空調", category: "noun" },
  { hanzi: "地毯", category: "noun" },
  { hanzi: "窗簾", category: "noun" },
  { hanzi: "浴缸", category: "noun" },
  { hanzi: "淋浴", category: "noun" },
  { hanzi: "洗手盆", category: "noun" },
  { hanzi: "鏡子", category: "noun" },
  { hanzi: "床", category: "noun" },
  { hanzi: "號", category: "noun" },
  // Final particles
  { hanzi: "呀", category: "particle" },
  { hanzi: "吖", category: "particle" },
  { hanzi: "喇", category: "particle" },
  { hanzi: "啦", category: "particle" },
  { hanzi: "嘞", category: "particle" }
];

const STORY_EXTRA_WORDS = [
  { hanzi: "從前", category: "time", jyutping: "cong4 cin4", english: "once upon a time" },
  { hanzi: "狐狸", category: "noun", jyutping: "wu4 lei4", english: "fox" },
  { hanzi: "兔仔", category: "noun", jyutping: "tou3 zai2", english: "rabbit" },
  { hanzi: "森林", category: "place", jyutping: "sam1 lam4", english: "forest" },
  { hanzi: "聰明", category: "adjective", jyutping: "cung1 ming4", english: "smart" },
  { hanzi: "食物", category: "noun", jyutping: "sik6 mat6", english: "food" },
  { hanzi: "附近", category: "place", jyutping: "fu6 gan6", english: "nearby" },
  { hanzi: "懶惰", category: "adjective", jyutping: "laan5 do6", english: "lazy" },
  { hanzi: "瞓覺", category: "verb", jyutping: "fan3 gaau3", english: "sleep" },
  { hanzi: "樹", category: "noun", jyutping: "syu6", english: "tree" },
  { hanzi: "醒", category: "verb", jyutping: "seng2", english: "wake up" },
  { hanzi: "肥", category: "adjective", jyutping: "fei4", english: "fat" },
  { hanzi: "洞", category: "noun", jyutping: "dung6", english: "cave" },
  { hanzi: "驚", category: "adjective", jyutping: "geng1", english: "scared" },
  { hanzi: "蘋果", category: "noun", jyutping: "ping4 gwo2", english: "apple" },
  { hanzi: "清潔", category: "verb", jyutping: "cing1 git3", english: "clean / tidy" },
  { hanzi: "風雨", category: "noun", jyutping: "fung1 jyu5", english: "storm" },
  { hanzi: "壞", category: "adjective", jyutping: "waai6", english: "broken / bad" },
  { hanzi: "勤力", category: "adjective", jyutping: "kan4 lik6", english: "hardworking" },
  { hanzi: "善良", category: "adjective", jyutping: "sin6 loeng4", english: "kind" },
  { hanzi: "故事", category: "noun", jyutping: "gu3 si6", english: "story" },
  { hanzi: "阿明", category: "noun", jyutping: "aa3 ming4", english: "Ah Ming (name)" },
  { hanzi: "年輕", category: "adjective", jyutping: "nin4 hing1", english: "young" },
  { hanzi: "九龍", category: "place", jyutping: "gau2 lung4", english: "Kowloon" },
  { hanzi: "香港", category: "place", jyutping: "hoeng1 gong2", english: "Hong Kong" },
  { hanzi: "舊", category: "adjective", jyutping: "gau6", english: "old" },
  { hanzi: "街市", category: "place", jyutping: "gaai1 si5", english: "wet market" },
  { hanzi: "熱鬧", category: "adjective", jyutping: "jit6 naau6", english: "busy / lively" },
  { hanzi: "魚", category: "noun", jyutping: "jyu4", english: "fish" },
  { hanzi: "肉", category: "noun", jyutping: "juk6", english: "meat" },
  { hanzi: "味道", category: "noun", jyutping: "mei6 dou6", english: "smell / flavor" },
  { hanzi: "新鮮", category: "adjective", jyutping: "san1 sin1", english: "fresh" },
  { hanzi: "檔口", category: "noun", jyutping: "dong3 hau2", english: "stall" },
  { hanzi: "叫賣", category: "verb", jyutping: "giu3 maai6", english: "hawk / shout to sell" },
  { hanzi: "迷路", category: "verb", jyutping: "mai4 lou6", english: "get lost" },
  { hanzi: "四圍", category: "adverb", jyutping: "sei3 wai4", english: "all around" },
  { hanzi: "阿姨", category: "noun", jyutping: "aa3 ji4", english: "auntie" },
  { hanzi: "水果", category: "noun", jyutping: "seoi2 gwo2", english: "fruit" },
  { hanzi: "叔叔", category: "noun", jyutping: "suk1 suk1", english: "uncle" },
  { hanzi: "雞", category: "noun", jyutping: "gai1", english: "chicken" },
  { hanzi: "出口", category: "noun", jyutping: "ceot1 hau2", english: "exit" },
  { hanzi: "直行", category: "verb", jyutping: "zik6 haang4", english: "go straight" },
  { hanzi: "擔心", category: "adjective", jyutping: "daam1 sam1", english: "worried" },
  { hanzi: "辦法", category: "noun", jyutping: "baan6 faat3", english: "way / solution" },
  { hanzi: "收檔", category: "verb", jyutping: "sau1 dong3", english: "close stall" },
  { hanzi: "街燈", category: "noun", jyutping: "gaai1 dang1", english: "street light" },
  { hanzi: "舊式", category: "adjective", jyutping: "gau6 sik1", english: "old-style" },
  { hanzi: "的士", category: "noun", jyutping: "dik1 si6", english: "taxi" },
  { hanzi: "司機", category: "noun", jyutping: "si1 gei1", english: "driver" },
  { hanzi: "眼鏡", category: "noun", jyutping: "ngaan5 geng2", english: "glasses" },
  { hanzi: "油麻地", category: "place", jyutping: "jau4 maa4 dei6", english: "Yau Ma Tei" },
  { hanzi: "小巷", category: "noun", jyutping: "siu2 hong6", english: "small alley" },
  { hanzi: "經過", category: "verb", jyutping: "ging1 gwo3", english: "pass by" },
  { hanzi: "維多利亞港", category: "place", jyutping: "wai4 do1 lei6 aa3 gong2", english: "Victoria Harbour" },
  { hanzi: "放鬆", category: "verb", jyutping: "fong3 sung1", english: "relax" },
  { hanzi: "多謝", category: "verb", jyutping: "do1 ze6", english: "thank you" },
  { hanzi: "畀錢", category: "verb", jyutping: "bei2 cin4", english: "pay money" },
  { hanzi: "怕", category: "verb", jyutping: "paa3", english: "fear / be afraid" }
];

const CORE_WORD_SET = new Set(USER_CORE_WORDS.map((w) => normalizeHanzi(w.hanzi)));
const CORE_WORD_MEANINGS = {
  "尋日": "yesterday",
  "今日": "today",
  "聽日": "tomorrow",
  "後天": "the day after tomorrow",
  "早啲": "earlier",
  "之前": "before / earlier",
  "而家": "now",
  "之後": "after / later",
  "稍後": "later / in a while",
  "遲啲": "later",
  "下次": "next time",
  "上次": "last time",
  "今次": "this time",
  "星期": "week",
  "一日": "one day",
  "早上": "morning",
  "早晨": "good morning / early morning",
  "中午": "noon",
  "下午": "afternoon",
  "下晝": "afternoon",
  "黃昏": "dusk / sunset time",
  "晚上": "evening / night",
  "嗰陣": "then / at that time",
  "零": "zero",
  "一": "one",
  "二": "two",
  "兩": "two (before measure words)",
  "三": "three",
  "四": "four",
  "五": "five",
  "六": "six",
  "七": "seven",
  "八": "eight",
  "九": "nine",
  "十": "ten",
  "二十": "twenty",
  "三十": "thirty",
  "一百": "one hundred",
  "一千": "one thousand",
  "十二": "twelve",
  "十五": "fifteen",
  "二十一": "twenty-one",
  "三十五": "thirty-five",
  "九十九": "ninety-nine",
  "二百五十": "two hundred and fifty",
  "半": "half",
  "呢度": "here",
  "嗰度": "there",
  "餐廳": "restaurant",
  "學校": "school",
  "街": "street",
  "市場": "market",
  "公司": "company / office",
  "酒店": "hotel",
  "醫院": "hospital",
  "藥房": "pharmacy",
  "洗手間": "toilet / restroom",
  "商店": "shop / store",
  "如果": "if",
  "我": "I / me",
  "你": "you",
  "佢": "he / she / him / her",
  "哋": "(plural marker)",
  "位": "(polite measure word for people)",
  "呢個": "this one",
  "嗰個": "that one",
  "呢啲": "these",
  "嗰啲": "those",
  "唔": "not",
  "係": "to be / yes",
  "識": "to know (a skill/person) / can",
  "嘅": "(possessive / descriptive particle)",
  "想": "to want / to think",
  "鍾意": "to like",
  "喜歡": "to like",
  "想要": "to want",
  "必須": "must",
  "要": "need to / want to",
  "應該": "should",
  "會": "will / know how to",
  "將會": "will (future)",
  "有": "to have / there is",
  "冇": "to not have / there is not",
  "有去過": "have gone / have been",
  "可以": "can / may",
  "可能": "maybe / possible",
  "或者": "or / maybe",
  "常常": "often",
  "有時": "sometimes",
  "從來": "never / ever",
  "成日": "all day / always",
  "經常": "frequently",
  "以前": "before / in the past",
  "好多": "many / a lot",
  "一啲": "some / a little",
  "咁": "so / like this",
  "仲": "still / also",
  "已經": "already",
  "再": "again / then",
  "多次": "many times / again",
  "夠": "enough",
  "都": "also / all",
  "就": "then / right away",
  "反對": "to oppose",
  "行": "to walk / to go",
  "去": "to go",
  "回": "to return",
  "食": "to eat",
  "飲": "to drink",
  "加": "to add",
  "味": "taste / flavor",
  "聞": "to smell",
  "賣": "to sell",
  "買": "to buy",
  "笑": "to laugh / smile",
  "哭": "to cry",
  "喊": "to shout / to cry",
  "用": "to use",
  "見": "to see / meet",
  "讀": "to read / study",
  "寫": "to write",
  "知": "to know",
  "講": "to speak / say",
  "傾": "to chat",
  "搭": "to take (transport) / to match",
  "嚟": "to come",
  "打": "to hit / to make (a call)",
  "坐": "to sit",
  "站": "to stand",
  "把": "(classifier / particle \"ba\")",
  "揾": "to find / look for",
  "找": "to find / look for",
  "住": "to live / stay",
  "試": "to try",
  "記": "to remember / record",
  "拉": "to pull",
  "推": "to push",
  "睇": "to look / watch",
  "聽": "to listen / hear",
  "收": "to receive / collect",
  "畀": "to give / for",
  "俾": "to give / let",
  "入": "to enter",
  "離開": "to leave",
  "關": "to close / shut",
  "開": "to open / start",
  "明白": "to understand",
  "停": "to stop",
  "咗": "(completed action marker)",
  "過": "(experienced before marker)",
  "完": "finish / completed",
  "緊": "(ongoing action marker)",
  "得": "can / obtain / degree marker",
  "到": "arrive / reach",
  "翻": "again / return",
  "返": "return / back",
  "囉": "(final particle: obviousness / suggestion)",
  "平": "cheap / flat",
  "貴": "expensive",
  "太貴啦": "too expensive!",
  "靚": "beautiful / pretty",
  "醜": "ugly",
  "難": "difficult",
  "容易": "easy",
  "快": "fast",
  "慢": "slow",
  "熱": "hot",
  "凍": "cold",
  "暖": "warm",
  "大": "big",
  "細": "small",
  "新": "new",
  "舊": "old",
  "衰": "bad / unlucky",
  "辣": "spicy",
  "少": "few / little",
  "攰": "tired",
  "累": "tired",
  "開心": "happy",
  "傷心": "sad",
  "上": "on / above / up",
  "下": "under / below / down",
  "入面": "inside",
  "外面": "outside",
  "近": "near",
  "遠": "far",
  "左": "left",
  "右": "right",
  "到": "to / until / arrive",
  "喺": "at / in",
  "同": "with / and",
  "由": "from / by",
  "靠": "near / lean on",
  "之間": "between",
  "周圍": "around",
  "前面": "in front",
  "後面": "behind",
  "橫過": "across",
  "沿": "along",
  "向": "towards",
  "穿過": "go through",
  "啲": "(plural / some marker)",
  "並": "and / moreover",
  "但係": "but",
  "唔係": "is not / not",
  "定": "or (question form)",
  "所以": "therefore / so",
  "除咗": "except for / besides",
  "同埋": "and / as well as",
  "因為": "because",
  "雖然": "although",
  "不過": "however / but",
  "直至": "until",
  "只要": "as long as",
  "一...就": "as soon as ... then ...",
  "就算": "even if",
  "個": "(general measure word)",
  "張": "(measure word for flat objects)",
  "件": "(measure word for clothing/events)",
  "支": "(measure word for long objects)",
  "本": "(measure word for books)",
  "部": "(measure word for machines/films)",
  "條": "(measure word for long flexible things)",
  "塊": "(measure word for pieces/chunks)",
  "對": "(measure word for pairs)",
  "雙": "(measure word for pairs)",
  "間": "(measure word for rooms/shops)",
  "杯": "(measure word for cups)",
  "片": "(measure word for slices)",
  "行": "(row / line; measure usage)",
  "打": "(dozen, measure usage)",
  "頂": "(measure word for hats/roofs)",
  "棵": "(measure word for plants/trees)",
  "隻": "(measure word for animals/one of a pair)",
  "架": "(measure word for machines/vehicles)",
  "篇": "(measure word for essays/articles)",
  "碗": "(measure word for bowls)",
  "粒": "(measure word for small round items)",
  "餐": "(measure word for meals)",
  "份": "(portion / share)",
  "嘢": "thing / stuff",
  "啲嘢": "things / stuff",
  "房間": "room",
  "桌子": "table",
  "椅子": "chair",
  "公寓": "apartment",
  "廚房": "kitchen",
  "客廳": "living room",
  "睡房": "bedroom",
  "臥室": "bedroom",
  "浴室": "bathroom",
  "陽台": "balcony",
  "門": "door",
  "窗": "window",
  "梳化": "sofa",
  "冰箱": "fridge",
  "爐頭": "stove",
  "微波爐": "microwave",
  "洗衣機": "washing machine",
  "乾衣機": "dryer",
  "書架": "bookshelf",
  "櫃子": "cabinet",
  "燈": "light / lamp",
  "風扇": "fan",
  "空調": "air conditioner",
  "地毯": "carpet",
  "窗簾": "curtain",
  "浴缸": "bathtub",
  "淋浴": "shower",
  "洗手盆": "sink / wash basin",
  "鏡子": "mirror",
  "床": "bed",
  "號": "number",
  "呀": "(final particle)",
  "吖": "(final particle)",
  "喇": "(final particle)",
  "架": "(final particle)",
  "啦": "(final particle)",
  "嘞": "(final particle)"
};
const CORE_WORD_JYUTPING = {
  "尋日": "cam4 jat6",
  "今日": "gam1 jat6",
  "聽日": "ting1 jat6",
  "後天": "hau6 tin1",
  "早啲": "zou2 di1",
  "之前": "zi1 cin4",
  "而家": "ji4 gaa1",
  "之後": "zi1 hau6",
  "稍後": "saau1 hau6",
  "遲啲": "ci4 di1",
  "下次": "haa6 ci3",
  "上次": "soeng6 ci3",
  "今次": "gam1 ci3",
  "星期": "sing1 kei4",
  "一日": "jat1 jat6",
  "早上": "zou2 soeng6",
  "早晨": "zou2 san4",
  "中午": "zung1 ng5",
  "下午": "haa6 ng5",
  "下晝": "haa6 zau3",
  "黃昏": "wong4 fan1",
  "晚上": "maan5 soeng6",
  "嗰陣": "go2 zan6",
  "零": "ling4",
  "一": "jat1",
  "二": "ji6",
  "兩": "loeng5",
  "三": "saam1",
  "四": "sei3",
  "五": "ng5",
  "六": "luk6",
  "七": "cat1",
  "八": "baat3",
  "九": "gau2",
  "十": "sap6",
  "二十": "ji6 sap6",
  "三十": "saam1 sap6",
  "一百": "jat1 baak3",
  "一千": "jat1 cin1",
  "十二": "sap6 ji6",
  "十五": "sap6 ng5",
  "二十一": "ji6 sap6 jat1",
  "三十五": "saam1 sap6 ng5",
  "九十九": "gau2 sap6 gau2",
  "二百五十": "ji6 baak3 ng5 sap6",
  "半": "bun3",
  "呢度": "ni1 dou6",
  "嗰度": "go2 dou6",
  "餐廳": "caan1 teng1",
  "學校": "hok6 haau6",
  "街": "gaai1",
  "市場": "si5 coeng4",
  "公司": "gung1 si1",
  "酒店": "zau2 dim3",
  "醫院": "ji1 jyun2",
  "藥房": "joek6 fong4",
  "洗手間": "sai2 sau2 gaan1",
  "商店": "soeng1 dim3",
  "如果": "jyu4 gwo2",
  "我": "ngo5",
  "你": "nei5",
  "佢": "keoi5",
  "哋": "dei6",
  "位": "wai2",
  "呢個": "ni1 go3",
  "嗰個": "go2 go3",
  "呢啲": "ni1 di1",
  "嗰啲": "go2 di1",
  "唔": "m4",
  "係": "hai6",
  "識": "sik1",
  "嘅": "ge3",
  "想": "soeng2",
  "鍾意": "zung1 ji3",
  "喜歡": "hei2 fun1",
  "想要": "soeng2 jiu3",
  "必須": "bit1 seoi1",
  "要": "jiu3",
  "應該": "jing1 goi1",
  "會": "wui5",
  "將會": "zoeng1 wui5",
  "有": "jau5",
  "冇": "mou5",
  "可以": "ho2 ji5",
  "可能": "ho2 nang4",
  "或者": "waak6 ze2",
  "常常": "soeng4 soeng4",
  "有時": "jau5 si4",
  "從來": "cung4 loi4",
  "成日": "sing4 jat6",
  "經常": "ging1 soeng4",
  "以前": "ji5 cin4",
  "好多": "hou2 do1",
  "一啲": "jat1 di1",
  "咁": "gam3",
  "仲": "zung6",
  "已經": "ji5 ging1",
  "有去過": "jau5 heoi3 gwo3",
  "再": "zoi3",
  "多次": "do1 ci3",
  "夠": "gau3",
  "都": "dou1",
  "就": "zau6",
  "反對": "faan2 deoi3",
  "行": "haang4",
  "去": "heoi3",
  "回": "wui4",
  "食": "sik6",
  "飲": "jam2",
  "加": "gaa1",
  "味": "mei6",
  "聞": "man4",
  "賣": "maai6",
  "買": "maai5",
  "笑": "siu3",
  "哭": "huk1",
  "喊": "haam3",
  "用": "jung6",
  "見": "gin3",
  "讀": "duk6",
  "寫": "se2",
  "知": "zi1",
  "講": "gong2",
  "傾": "king1",
  "搭": "daap3",
  "嚟": "lai4",
  "打": "daa2",
  "坐": "co5",
  "站": "zaam6",
  "把": "baa2",
  "揾": "wan2",
  "找": "zaau2",
  "住": "zyu6",
  "試": "si3",
  "記": "gei3",
  "拉": "laai1",
  "推": "teoi1",
  "睇": "tai2",
  "聽": "teng1",
  "收": "sau1",
  "畀": "bei2",
  "俾": "bei2",
  "入": "jap6",
  "離開": "lei4 hoi1",
  "關": "gwaan1",
  "開": "hoi1",
  "明白": "ming4 baak6",
  "停": "ting4",
  "咗": "zo2",
  "過": "gwo3",
  "完": "jyun4",
  "緊": "gan2",
  "得": "dak1",
  "到": "dou3",
  "翻": "faan1",
  "返": "faan1",
  "囉": "lo1",
  "平": "peng4",
  "貴": "gwai3",
  "太貴啦": "taai3 gwai3 laa1",
  "靚": "leng3",
  "醜": "cau2",
  "難": "naan4",
  "容易": "jung4 ji6",
  "快": "faai3",
  "慢": "maan6",
  "熱": "jit6",
  "凍": "dung3",
  "暖": "nyun5",
  "大": "daai6",
  "細": "sai3",
  "新": "san1",
  "舊": "gau6",
  "衰": "seoi1",
  "辣": "laat6",
  "少": "siu2",
  "攰": "gui6",
  "累": "leoi6",
  "開心": "hoi1 sam1",
  "傷心": "soeng1 sam1",
  "上": "soeng6",
  "下": "haa6",
  "入面": "jap6 min6",
  "外面": "ngoi6 min6",
  "近": "gan6",
  "遠": "jyun5",
  "左": "zo2",
  "右": "jau6",
  "喺": "hai2",
  "同": "tung4",
  "由": "jau4",
  "靠": "kaau3",
  "之間": "zi1 gaan1",
  "周圍": "zau1 wai4",
  "前面": "cin4 min6",
  "後面": "hau6 min6",
  "橫過": "waang4 gwo3",
  "沿": "jyun4",
  "向": "hoeng3",
  "穿過": "cyun1 gwo3",
  "啲": "di1",
  "並": "bing6",
  "但係": "daan6 hai6",
  "唔係": "m4 hai6",
  "定": "ding6",
  "所以": "so2 ji5",
  "除咗": "ceoi4 zo2",
  "同埋": "tung4 maai4",
  "因為": "jan1 wai6",
  "雖然": "seoi1 jin4",
  "不過": "bat1 gwo3",
  "直至": "zik6 zi3",
  "只要": "zi2 jiu3",
  "就算": "zau6 syun3",
  "個": "go3",
  "張": "zoeng1",
  "件": "gin6",
  "支": "zi1",
  "本": "bun2",
  "部": "bou6",
  "條": "tiu4",
  "塊": "faai3",
  "對": "deoi3",
  "雙": "soeng1",
  "間": "gaan1",
  "杯": "bui1",
  "片": "pin3",
  "頂": "ding2",
  "棵": "fo1",
  "隻": "zek3",
  "架": "gaa3",
  "篇": "pin1",
  "碗": "wun2",
  "粒": "nap1",
  "餐": "caan1",
  "份": "fan6",
  "嘢": "je5",
  "啲嘢": "di1 je5",
  "房間": "fong4 gaan1",
  "桌子": "coek3 zi2",
  "椅子": "ji2 zi2",
  "公寓": "gung1 jyu6",
  "廚房": "cyu4 fong2",
  "客廳": "haak3 teng1",
  "睡房": "seoi6 fong2",
  "臥室": "ngo6 sat1",
  "浴室": "juk6 sat1",
  "陽台": "joeng4 toi4",
  "門": "mun4",
  "窗": "coeng1",
  "梳化": "so1 faa3",
  "冰箱": "bing1 soeng1",
  "爐頭": "lou4 tau4",
  "微波爐": "mei4 bo1 lou4",
  "洗衣機": "sai2 ji1 gei1",
  "乾衣機": "gon1 ji1 gei1",
  "書架": "syu1 gaa3",
  "櫃子": "gwai6 zi2",
  "燈": "dang1",
  "風扇": "fung1 sin3",
  "空調": "hung1 tiu4",
  "地毯": "dei6 taan2",
  "窗簾": "coeng1 lim4",
  "浴缸": "juk6 gong1",
  "淋浴": "lam4 juk6",
  "洗手盆": "sai2 sau2 pun4",
  "鏡子": "geng3 zi2",
  "床": "cong4",
  "號": "hou6",
  "呀": "aa3",
  "吖": "aa1",
  "喇": "laa3",
  "啦": "laa1",
  "嘞": "laak3"
};

const EXTRA_TOKEN_JYUTPING = {
  "幾點": "gei2 dim2",
  "幾": "gei2",
  "點": "dim2",
  "邊": "bin1",
  "邊度": "bin1 dou6",
  "巴士": "baa1 si2",
  "飛機": "fei1 gei1",
  "音樂": "jam1 ngok6",
  "電話": "din6 waa2",
  "功課": "gung1 fo3",
  "家務": "gaa1 mou6",
  "早餐": "zou2 caan1",
  "海鮮": "hoi2 sin1",
  "海邊": "hoi2 bin1",
  "天氣": "tin1 hei3",
  "機場": "gei1 coeng4",
  "日本": "jat6 bun2",
  "放假": "fong3 gaa3",
  "工作": "gung1 zok3",
  "計劃": "gai3 waak6",
  "旅行": "leoi5 hang4",
  "塞車": "sak1 ce1",
  "新菜": "san1 coi3",
  "辣嘢": "laat6 je5",
  "呢本書": "ni1 bun2 syu1",
  "呢首歌": "ni1 sau2 go1",
  "呢課": "ni1 fo3",
  "呢樣嘢": "ni1 joeng6 je5",
  "出門": "ceot1 mun4",
  "一齊": "jat1 cai4",
  "假期": "gaa3 kei4",
  "啱啱": "ngaam1 ngaam1",
  "頭先": "tau4 sin1",
  "休息": "jau1 sik1",
  "落雨": "lok6 jyu5",
  "塞車": "sak1 ce1",
  "工作": "gung1 zok3",
  "計劃": "gai3 waak6",
  "將來": "zoeng1 loi4",
  "更好": "gang3 hou2",
  "阿媽": "aa3 maa1",
  "阿哥": "aa3 go1",
  "細佬": "sai3 lou2",
  "兩個鐘": "loeng5 go3 zung1",
  "市場": "si5 coeng4",
  "市場買嘢": "si5 coeng4 maai5 je5",
  "巿場": "si5 coeng4",
  "煮飯": "zyu2 faan6",
  "返工": "faan1 gung1",
  "做緊": "zou6 gan2",
  "有時間": "jau5 si4 gaan3",
  "唔舒服": "m4 syu1 fuk6",
  "肚餓": "tou5 ngo6",
  "口渴": "hau2 hot3",
  "次": "ci3",
  "等": "dang2",
  "煮": "zyu2",
  "菜": "coi3",
  "出": "ceot1",
  "留": "lau4",
  "返工": "faan1 gung1",
  "進步": "zeon3 bou6",
  "每日": "mui5 jat6",
  "十分鐘": "sap6 fan1 zung1",
  "機票": "gei1 piu3",
  "大家": "daai6 gaa1",
  "好耐": "hou2 noi6",
  "改時間": "goi2 si4 gaan3",
  "避免": "bei6 min5",
  "即刻": "zik1 hak1",
  "得閒": "dak1 haan4",
  "搬屋": "bun1 uk1",
  "不如": "bat1 jyu4",
  "尋晚": "cam4 maan5",
  "帶": "daai3",
  "接": "zip3",
  "幫": "bong1",
  "訂": "ding3",
  "家務": "gaa1 mou6",
  "今晚": "gam1 maan5",
  "樣": "joeng6",
  "人": "jan4",
  "月": "jyut6",
  "車": "ce1",
  "度": "dou6",
  "偈": "gai2",
  "整": "zing2",
  "可": "ho2",
  "先": "sin1",
  "機": "gei1",
  "肯": "hang2",
  "練習": "lin6 zaap6",
  "改": "goi2",
  "時": "si4",
  "話": "waa6",
  "太": "taai3",
  "執": "zap1",
  "今": "gam1",
  "晚": "maan5",
  "搵": "wan2",
  "所": "so2",
  "未": "mei6",
  "嗰": "go2",
  "遲到": "ci4 dou3",
  "交通": "gaau1 tung1",
  "地鐵": "dei6 tit3",
  "自然": "zi6 jin4",
  "方便": "fong1 bin6",
  "預留": "jyu6 lau4",
  "預算": "jyu6 syun3",
  "安排": "on1 paai4",
  "行程": "hang4 cing4",
  "傾計": "king1 gai2",
  "專心": "zyun1 sam1",
  "發生": "faat3 sang1",
  "發音": "faat3 jam1",
  "準備": "zeon2 bei6",
  "收拾": "sau1 sap6",
  "洗碗": "sai2 wun2",
  "順便": "seon6 bin6",
  "另外": "ling6 ngoi6",
  "覆電郵": "fuk1 din6 jau4",
  "散步": "saan3 bou6",
  "保持": "bou2 ci4",
  "見面": "gin3 min6",
  "價錢": "gaa3 cin4",
  "聽力": "teng1 lik6",
  "句型": "geoi3 jing4",
  "確保": "kok3 bou2",
  "路線": "lou6 sin3",
  "日常": "jat6 soeng4",
  "並且": "bing6 ce2",
  "突然": "dat6 jin4",
  "越來越": "jyut6 loi4 jyut6",
  "午餐": "ng5 caan1",
  "大堂": "daai6 tong4",
  "跟住": "gan1 zyu6",
  "開始": "hoi1 ci2",
  "文件": "man4 gin2",
  "電郵": "din6 jau4",
  "兩程": "loeng5 cing4",
  "目的地": "muk6 dik1 dei6",
  "轉車": "zyun2 ce1",
  "調整": "tiu4 zing2",
  "早起身": "zou2 hei2 san1"
};

const EXTRA_TOKEN_MEANINGS = {
  "幾點": "what time",
  "幾": "how many / how much",
  "點": "dot / point / o'clock",
  "邊": "which / side",
  "邊度": "where",
  "功課": "homework",
  "電話": "phone",
  "巴士": "bus",
  "次": "time (occurrence)",
  "出門": "go out / leave home",
  "將來": "future",
  "一齊": "together",
  "煮": "cook",
  "等": "wait",
  "菜": "vegetables / dish",
  "落雨": "rain",
  "放假": "holiday / day off",
  "休息": "rest",
  "飛機": "plane",
  "音樂": "music",
  "搵": "look for",
  "肚餓": "hungry",
  "口渴": "thirsty",
  "旅行": "travel",
  "頭先": "just now",
  "阿媽": "mom",
  "阿哥": "older brother",
  "細佬": "younger brother",
  "機場": "airport",
  "工作": "work",
  "計劃": "plan",
  "市場": "market",
  "兩個鐘": "two hours",
  "假期": "holiday",
  "啱啱": "just now",
  "塞車": "traffic jam",
  "更好": "better",
  "有時間": "have time",
  "唔舒服": "feel unwell",
  "呢本書": "this book",
  "呢首歌": "this song",
  "呢課": "this lesson",
  "呢樣嘢": "this thing",
  "新菜": "new dishes",
  "辣嘢": "spicy food"
  ,
  "次": "time",
  "樣": "kind / type",
  "返工": "go to work",
  "做緊": "in the middle of doing",
  "出": "go out",
  "留": "stay",
  "市場買嘢": "buy things at the market",
  "今晚": "tonight",
  "帶": "bring / take",
  "人": "person / people",
  "月": "month",
  "機": "machine / plane (short)",
  "天氣": "weather",
  "海邊": "seaside",
  "煮飯": "cook",
  "車": "vehicle / car",
  "度": "place / measure word",
  "偈": "chat (as in 傾偈)",
  "日本": "Japan",
  "整": "make / prepare",
  "可": "can / possible",
  "接": "pick up / receive",
  "幫": "help",
  "訂": "book / reserve",
  "尋": "seek",
  "先": "first / then",
  "海鮮": "seafood",
  "肯": "willing",
  "練習": "practice",
  "每": "each / every",
  "日": "day",
  "十": "ten",
  "分": "minute / part",
  "鐘": "clock / hour (spoken)",
  "進步": "improve",
  "票": "ticket",
  "家": "home / family",
  "耐": "long time",
  "改": "change",
  "時": "time",
  "避": "avoid",
  "免": "avoid / exempt",
  "話": "say / speech",
  "即": "immediate",
  "刻": "moment",
  "閒": "free (as in free time)",
  "太": "too",
  "搬": "move",
  "屋": "house",
  "執": "tidy / pack",
  "所": "place / institute",
  "未": "not yet",
  "早餐": "breakfast",
  "嗰": "that",
  "不": "not",
  "如": "as / like",
  "每日": "every day",
  "十分鐘": "ten minutes",
  "機票": "flight ticket",
  "大家": "everyone",
  "好耐": "for a long time",
  "改時間": "change the schedule",
  "避免": "avoid",
  "即刻": "immediately",
  "得閒": "free / available",
  "搬屋": "move house",
  "不如": "how about",
  "尋晚": "last night"
  ,
  "家務": "housework",
  "今晚": "tonight",
  "樣": "kind / type",
  "今": "this / now",
  "晚": "late / evening",
  "遲到": "be late / arrive late",
  "交通": "transport / traffic",
  "地鐵": "MTR / metro",
  "自然": "natural / naturally",
  "方便": "convenient",
  "預留": "reserve (time/space)",
  "預算": "budget",
  "安排": "arrange / arrangement",
  "行程": "itinerary / schedule",
  "傾計": "chat",
  "專心": "focus / concentrate",
  "發生": "happen",
  "發音": "pronunciation",
  "準備": "prepare / get ready",
  "收拾": "tidy up / pack",
  "洗碗": "wash dishes",
  "順便": "on the way / by the way",
  "另外": "in addition / another",
  "覆電郵": "reply to email",
  "散步": "take a walk",
  "保持": "keep / maintain",
  "見面": "meet (face to face)",
  "價錢": "price",
  "聽力": "listening ability",
  "句型": "sentence pattern",
  "確保": "ensure / make sure",
  "路線": "route",
  "日常": "daily / everyday",
  "並且": "and / moreover",
  "突然": "suddenly",
  "越來越": "more and more",
  "午餐": "lunch",
  "大堂": "lobby",
  "跟住": "then / next",
  "開始": "start / begin",
  "文件": "document(s)",
  "電郵": "email",
  "兩程": "two segments / two legs",
  "目的地": "destination",
  "轉車": "transfer (transport)",
  "調整": "adjust",
  "早起身": "wake up early"
};

const DEFAULT_DATA = {
  words: [
    { id: "w1", hanzi: "我", jyutping: "ngo5", english: "I / me", category: "pronoun", example: "我學廣東話。" },
    { id: "w2", hanzi: "你", jyutping: "nei5", english: "you", category: "pronoun", example: "你好嗎？" },
    { id: "w3", hanzi: "佢", jyutping: "keoi5", english: "he / she", category: "pronoun", example: "佢喺香港。" },
    { id: "w4", hanzi: "我哋", jyutping: "ngo5 dei6", english: "we", category: "pronoun", example: "我哋去食飯。" },
    { id: "w5", hanzi: "你哋", jyutping: "nei5 dei6", english: "you all", category: "pronoun", example: "你哋學廣東話。" },
    { id: "w6", hanzi: "今日", jyutping: "gam1 jat6", english: "today", category: "time", example: "今日我好開心。" },
    { id: "w7", hanzi: "聽日", jyutping: "ting1 jat6", english: "tomorrow", category: "time", example: "聽日見。" },
    { id: "w8", hanzi: "而家", jyutping: "ji4 gaa1", english: "now", category: "time", example: "而家我去食飯。" },
    { id: "w9", hanzi: "係", jyutping: "hai6", english: "to be", category: "grammar", example: "我係學生。" },
    { id: "w10", hanzi: "喺", jyutping: "hai2", english: "at / in", category: "grammar", example: "我喺屋企。" },
    { id: "w11", hanzi: "有", jyutping: "jau5", english: "to have", category: "verb", example: "我有一本書。" },
    { id: "w12", hanzi: "冇", jyutping: "mou5", english: "not have", category: "verb", example: "我冇時間。" },
    { id: "w13", hanzi: "去", jyutping: "heoi3", english: "to go", category: "verb", example: "我去學校。" },
    { id: "w14", hanzi: "嚟", jyutping: "lai4", english: "to come", category: "verb", example: "你幾點嚟？" },
    { id: "w15", hanzi: "食", jyutping: "sik6", english: "to eat", category: "verb", example: "我食飯。" },
    { id: "w16", hanzi: "飲", jyutping: "jam2", english: "to drink", category: "verb", example: "我飲水。" },
    { id: "w17", hanzi: "買", jyutping: "maai5", english: "to buy", category: "verb", example: "我買咖啡。" },
    { id: "w18", hanzi: "睇", jyutping: "tai2", english: "to look / watch", category: "verb", example: "我睇書。" },
    { id: "w19", hanzi: "聽", jyutping: "teng1", english: "to listen", category: "verb", example: "我聽廣東話。" },
    { id: "w20", hanzi: "講", jyutping: "gong2", english: "to speak", category: "verb", example: "我講英文。" },
    { id: "w21", hanzi: "學", jyutping: "hok6", english: "to learn", category: "verb", example: "我學廣東話。" },
    { id: "w22", hanzi: "做", jyutping: "zou6", english: "to do", category: "verb", example: "你做咩呀？" },
    { id: "w23", hanzi: "想", jyutping: "soeng2", english: "to want", category: "verb", example: "我想飲茶。" },
    { id: "w24", hanzi: "鍾意", jyutping: "zung1 ji3", english: "to like", category: "verb", example: "我鍾意咖啡。" },
    { id: "w25", hanzi: "好", jyutping: "hou2", english: "good", category: "adjective", example: "呢個好好。" },
    { id: "w26", hanzi: "水", jyutping: "seoi2", english: "water", category: "drink", example: "我飲水。" },
    { id: "w27", hanzi: "茶", jyutping: "caa4", english: "tea", category: "drink", example: "我想飲茶。" },
    { id: "w28", hanzi: "咖啡", jyutping: "gaa3 fe1", english: "coffee", category: "drink", example: "我鍾意咖啡。" },
    { id: "w29", hanzi: "飯", jyutping: "faan6", english: "rice / meal", category: "food", example: "我食飯。" },
    { id: "w30", hanzi: "書", jyutping: "syu1", english: "book", category: "noun", example: "我睇書。" },
    { id: "w31", hanzi: "朋友", jyutping: "pang4 jau5", english: "friend", category: "noun", example: "佢係我朋友。" },
    { id: "w32", hanzi: "名", jyutping: "meng2", english: "name", category: "noun", example: "你叫咩名？" },
    { id: "w33", hanzi: "廣東話", jyutping: "gwong2 dung1 waa2", english: "Cantonese", category: "language", example: "我學廣東話。" },
    { id: "w34", hanzi: "英文", jyutping: "jing1 man4", english: "English", category: "language", example: "我講英文。" },
    { id: "w35", hanzi: "屋企", jyutping: "uk1 kei2", english: "home", category: "place", example: "我喺屋企。" },
    { id: "w36", hanzi: "香港", jyutping: "hoeng1 gong2", english: "Hong Kong", category: "place", example: "我喺香港。" },
    { id: "w37", hanzi: "學校", jyutping: "hok6 haau6", english: "school", category: "place", example: "我去學校。" },
    { id: "w38", hanzi: "早晨", jyutping: "zou2 san4", english: "good morning", category: "courtesy", example: "早晨，你好。" },
    { id: "w39", hanzi: "多謝", jyutping: "do1 ze6", english: "thank you", category: "courtesy", example: "多謝你。" },
    { id: "w40", hanzi: "唔該", jyutping: "m4 goi1", english: "please / thanks", category: "courtesy", example: "唔該晒。" },
    { id: "w41", hanzi: "對唔住", jyutping: "deoi3 m4 zyu6", english: "sorry", category: "courtesy", example: "對唔住，我遲到。" },
    { id: "w42", hanzi: "咩", jyutping: "me1", english: "what", category: "question", example: "你做咩呀？" },
    { id: "w43", hanzi: "邊個", jyutping: "bin1 go3", english: "who", category: "question", example: "佢係邊個？" },
    { id: "w44", hanzi: "幾多", jyutping: "gei2 do1", english: "how many / how much", category: "question", example: "幾多錢呀？" },
    { id: "w45", hanzi: "點樣", jyutping: "dim2 joeng6", english: "how", category: "question", example: "點樣講？" },
    { id: "w46", hanzi: "點解", jyutping: "dim2 gaai2", english: "why", category: "question", example: "點解唔去？" },
    { id: "w47", hanzi: "一", jyutping: "jat1", english: "one", category: "number", example: "一杯茶。" },
    { id: "w48", hanzi: "二", jyutping: "ji6", english: "two", category: "number", example: "二杯水。" },
    { id: "w49", hanzi: "三", jyutping: "saam1", english: "three", category: "number", example: "三個朋友。" }
  ],
  patterns: [
    {
      id: "p1",
      formula: "Subject + Verb + Object",
      slots: [
        { key: "subject", label: "Subject", categories: ["pronoun"] },
        { key: "verb", label: "Verb", categories: ["verb"] },
        { key: "object", label: "Object", categories: ["food", "drink", "noun", "language"] }
      ]
    },
    {
      id: "p2",
      formula: "Subject + 係 + Noun/Role",
      fixed: ["係"],
      slots: [
        { key: "subject", label: "Subject", categories: ["pronoun"] },
        { key: "role", label: "Noun", categories: ["noun", "language", "place"] }
      ]
    },
    {
      id: "p3",
      formula: "Subject + 喺 + Place",
      fixed: ["喺"],
      slots: [
        { key: "subject", label: "Subject", categories: ["pronoun"] },
        { key: "place", label: "Place", categories: ["place"] }
      ]
    },
    {
      id: "p4",
      formula: "Time + Subject + 想 + Verb + Object",
      fixed: ["想"],
      slots: [
        { key: "time", label: "Time", categories: ["time"] },
        { key: "subject", label: "Subject", categories: ["pronoun"] },
        { key: "verb", label: "Verb", categories: ["verb"] },
        { key: "object", label: "Object", categories: ["food", "drink", "noun", "language"] }
      ]
    }
  ],
  quiz: [
    { hanzi: "我學廣東話。", jyutping: "ngo5 hok6 gwong2 dung1 waa2", english: "I learn Cantonese." },
    { hanzi: "我想飲茶。", jyutping: "ngo5 soeng2 jam2 caa4", english: "I want to drink tea." },
    { hanzi: "你喺香港。", jyutping: "nei5 hai2 hoeng1 gong2", english: "You are in Hong Kong." },
    { hanzi: "我哋去食飯。", jyutping: "ngo5 dei6 heoi3 sik6 faan6", english: "We go eat a meal." },
    { hanzi: "佢係我朋友。", jyutping: "keoi5 hai6 ngo5 pang4 jau5", english: "He/She is my friend." },
    { hanzi: "而家我飲水。", jyutping: "ji4 gaa1 ngo5 jam2 seoi2", english: "Now I drink water." },
    { hanzi: "今日我睇書。", jyutping: "gam1 jat6 ngo5 tai2 syu1", english: "Today I read a book." },
    { hanzi: "你講英文。", jyutping: "nei5 gong2 jing1 man4", english: "You speak English." }
  ]
};

const SLANG_SEARCH_ENTRIES = [
  { id: "slang_1", hanzi: "食咗飯未", jyutping: "sik6 zo2 faan6 mei6", english: "Have you eaten yet? (common greeting)", mandarin_hanzi: "你吃饭了吗", pinyin: "ni3 chi1 fan4 le ma", mandarin_english: "Have you eaten?" , category: "slang" },
  { id: "slang_2", hanzi: "冇問題", jyutping: "mou5 man6 tai4", english: "No problem", mandarin_hanzi: "没问题", pinyin: "mei2 wen4 ti2", mandarin_english: "No problem", category: "slang" },
  { id: "slang_3", hanzi: "唔該晒", jyutping: "m4 goi1 saai3", english: "Thanks a lot", mandarin_hanzi: "非常感谢", pinyin: "fei1 chang2 gan3 xie4", mandarin_english: "Many thanks", category: "slang" },
  { id: "slang_4", hanzi: "得閒", jyutping: "dak1 haan4", english: "free / available", mandarin_hanzi: "有空", pinyin: "you3 kong4", mandarin_english: "free (have time)", category: "slang" },
  { id: "slang_5", hanzi: "唔使客氣", jyutping: "m4 sai2 haak3 hei3", english: "don't mention it / you're welcome", mandarin_hanzi: "不用客气", pinyin: "bu2 yong4 ke4 qi", mandarin_english: "you're welcome", category: "slang" },
  { id: "slang_6", hanzi: "搞掂", jyutping: "gaau2 dim6", english: "done / fixed / handled", mandarin_hanzi: "搞定", pinyin: "gao3 ding4", mandarin_english: "sorted out", category: "slang" },
  { id: "slang_7", hanzi: "好正", jyutping: "hou2 zing3", english: "awesome / excellent", mandarin_hanzi: "很棒", pinyin: "hen3 bang4", mandarin_english: "great", category: "slang" },
  { id: "slang_8", hanzi: "唔知喎", jyutping: "m4 zi1 wo3", english: "I really don't know", mandarin_hanzi: "我不知道啊", pinyin: "wo3 bu4 zhi1 dao4 a", mandarin_english: "I don't know", category: "slang" },
  { id: "slang_9", hanzi: "慢慢嚟", jyutping: "maan6 maan2 lai4", english: "take it easy / no rush", mandarin_hanzi: "慢慢来", pinyin: "man4 man4 lai2", mandarin_english: "take your time", category: "slang" },
  { id: "slang_10", hanzi: "掂呀", jyutping: "dim6 aa3", english: "it's good / works", mandarin_hanzi: "行啊", pinyin: "xing2 a", mandarin_english: "it works", category: "slang" }
];

const SENTENCE_BANK = [
  { id: "s1", level: 1, tense: "present", theme: "daily", hanzi: "我食飯。", jyutping: "ngo5 sik6 faan6", english: "I eat a meal." },
  { id: "s2", level: 1, tense: "present", theme: "daily", hanzi: "你飲水。", jyutping: "nei5 jam2 seoi2", english: "You drink water." },
  { id: "s3", level: 1, tense: "present", theme: "home", hanzi: "佢喺屋企。", jyutping: "keoi5 hai2 uk1 kei2", english: "He/She is at home." },
  { id: "s4", level: 1, tense: "present", theme: "friends", hanzi: "我哋講廣東話。", jyutping: "ngo5 dei6 gong2 gwong2 dung1 waa2", english: "We speak Cantonese." },
  { id: "s5", level: 1, tense: "present", theme: "daily", hanzi: "今日我好開心。", jyutping: "gam1 jat6 ngo5 hou2 hoi1 sam1", english: "Today I am happy." },
  { id: "s6", level: 2, tense: "present", theme: "travel", hanzi: "而家我去餐廳食飯。", jyutping: "ji4 gaa1 ngo5 heoi3 caan1 teng1 sik6 faan6", english: "Now I go to a restaurant to eat." },
  { id: "s7", level: 2, tense: "present", theme: "friends", hanzi: "你想唔想飲茶呀？", jyutping: "nei5 soeng2 m4 soeng2 jam2 caa4 aa3", english: "Do you want to drink tea?" },
  { id: "s8", level: 2, tense: "present", theme: "home", hanzi: "我喺客廳睇書。", jyutping: "ngo5 hai2 haak3 teng1 tai2 syu1", english: "I read in the living room." },
  { id: "s9", level: 2, tense: "present", theme: "daily", hanzi: "佢經常搭車返工。", jyutping: "keoi5 ging1 soeng4 daap3 ce1 faan1 gung1", english: "He/She often takes transport to work." },
  { id: "s10", level: 2, tense: "present", theme: "friends", hanzi: "我同朋友喺街度傾偈。", jyutping: "ngo5 tung4 pang4 jau5 hai2 gaai1 dou6 king1 gai2", english: "I chat with friends on the street." },
  { id: "s11", level: 3, tense: "past", theme: "daily", hanzi: "尋日我買咗好多嘢。", jyutping: "cam4 jat6 ngo5 maai5 zo2 hou2 do1 je5", english: "Yesterday I bought many things." },
  { id: "s12", level: 3, tense: "past", theme: "travel", hanzi: "上次我哋去過香港。", jyutping: "soeng6 ci3 ngo5 dei6 heoi3 gwo3 hoeng1 gong2", english: "Last time we went to Hong Kong." },
  { id: "s13", level: 3, tense: "past", theme: "home", hanzi: "頭先我喺廚房煮完飯。", jyutping: "tau4 sin1 ngo5 hai2 cyu4 fong2 zyu2 jyun4 faan6", english: "Just now I finished cooking in the kitchen." },
  { id: "s14", level: 3, tense: "future", theme: "travel", hanzi: "聽日我會去市場買菜。", jyutping: "ting1 jat6 ngo5 wui5 heoi3 si5 coeng4 maai5 coi3", english: "Tomorrow I will go to the market to buy vegetables." },
  { id: "s15", level: 3, tense: "future", theme: "holiday", hanzi: "下次假期我想去日本旅行。", jyutping: "haa6 ci3 gaa3 kei4 ngo5 soeng2 heoi3 jat6 bun2 leoi5 hang4", english: "Next holiday I want to travel to Japan." },
  { id: "s16", level: 3, tense: "future", theme: "friends", hanzi: "今晚我哋會同朋友食飯。", jyutping: "gam1 maan5 ngo5 dei6 wui5 tung4 pang4 jau5 sik6 faan6", english: "Tonight we will eat with friends." },
  { id: "s17", level: 3, tense: "present", theme: "home", hanzi: "我阿媽而家喺廚房整晚餐。", jyutping: "ngo5 aa3 maa1 ji4 gaa1 hai2 cyu4 fong2 zing2 maan5 caan1", english: "My mom is preparing dinner in the kitchen now." },
  { id: "s18", level: 3, tense: "present", theme: "daily", hanzi: "你可唔可以再講多次？", jyutping: "nei5 ho2 m4 ho2 ji5 zoi3 gong2 do1 ci3", english: "Can you say it one more time?" },
  { id: "s19", level: 4, tense: "past", theme: "friends", hanzi: "上星期我同朋友喺餐廳傾咗兩個鐘。", jyutping: "soeng6 sing1 kei4 ngo5 tung4 pang4 jau5 hai2 caan1 teng1 king1 zo2 loeng5 go3 zung1", english: "Last week I chatted with friends at a restaurant for two hours." },
  { id: "s20", level: 4, tense: "future", theme: "travel", hanzi: "遲啲我會帶屋企人去機場接朋友。", jyutping: "ci4 di1 ngo5 wui5 daai3 uk1 kei2 jan4 heoi3 gei1 coeng4 zip3 pang4 jau5", english: "Later I will take my family to the airport to pick up a friend." },
  { id: "s21", level: 4, tense: "present", theme: "home", hanzi: "如果你攰，我可以幫你做家務。", jyutping: "jyu4 gwo2 nei5 gui6, ngo5 ho2 ji5 bong1 nei5 zou6 gaa1 mou6", english: "If you are tired, I can help you do housework." },
  { id: "s22", level: 4, tense: "present", theme: "daily", hanzi: "雖然今日落雨，不過我仲係要返工。", jyutping: "seoi1 jin4 gam1 jat6 lok6 jyu5, bat1 gwo3 ngo5 zung6 hai6 jiu3 faan1 gung1", english: "Although it's raining today, I still need to go to work." },
  { id: "s23", level: 4, tense: "future", theme: "holiday", hanzi: "如果平啲，我哋下個月就訂酒店。", jyutping: "jyu4 gwo2 peng4 di1, ngo5 dei6 haa6 go3 jyut6 zau6 ding3 zau2 dim3", english: "If it's cheaper, we'll book the hotel next month." },
  { id: "s24", level: 4, tense: "past", theme: "home", hanzi: "尋晚我細佬做完功課先打機。", jyutping: "cam4 maan5 ngo5 sai3 lou2 zou6 jyun4 gung1 fo3 sin1 daa2 gei1", english: "Last night my younger brother played games only after finishing homework." },
  { id: "s25", level: 5, tense: "conditional", theme: "travel", hanzi: "如果聽日天氣好，我哋就會去海邊行下再食海鮮。", jyutping: "jyu4 gwo2 ting1 jat6 tin1 hei3 hou2, ngo5 dei6 zau6 wui5 heoi3 hoi2 bin1 haang4 haa5 zoi3 sik6 hoi2 sin1", english: "If the weather is good tomorrow, we'll walk by the sea and then eat seafood." },
  { id: "s26", level: 5, tense: "conditional", theme: "home", hanzi: "如果你早啲返到屋企，我就同你一齊煮飯。", jyutping: "jyu4 gwo2 nei5 zou2 di1 faan1 dou3 uk1 kei2, ngo5 zau6 tung4 nei5 jat1 cai4 zyu2 faan6", english: "If you get home earlier, I'll cook with you." },
  { id: "s27", level: 5, tense: "conditional", theme: "friends", hanzi: "只要你肯練習，每日講十分鐘廣東話，你一定會進步。", jyutping: "zi2 jiu3 nei5 hang2 lin6 zaap6, mui5 jat6 gong2 sap6 fan1 zung1 gwong2 dung1 waa2, nei5 jat1 ding6 wui5 zeon3 bou6", english: "As long as you practice and speak Cantonese for ten minutes every day, you will improve." },
  { id: "s28", level: 5, tense: "conditional", theme: "holiday", hanzi: "就算機票貴，我都想同屋企人去旅行，因為大家好耐冇一齊放假。", jyutping: "zau6 syun3 gei1 piu3 gwai3, ngo5 dou1 soeng2 tung4 uk1 kei2 jan4 heoi3 leoi5 hang4, jan1 wai6 daai6 gaa1 hou2 noi6 mou5 jat1 cai4 fong3 gaa3", english: "Even if flights are expensive, I still want to travel with my family because we haven't had a holiday together for a long time." },
  { id: "s29", level: 5, tense: "future", theme: "daily", hanzi: "如果公司之後改咗時間，我會早啲出門，避免塞車。", jyutping: "jyu4 gwo2 gung1 si1 zi1 hau6 goi2 zo2 si4 gaan3, ngo5 wui5 zou2 di1 ceot1 mun4, bei6 min5 sak1 ce1", english: "If the company changes the schedule later, I will leave earlier to avoid traffic." },
  { id: "s30", level: 5, tense: "past", theme: "friends", hanzi: "頭先朋友打畀我，話佢喺醫院等緊我，所以我即刻離開公司。", jyutping: "tau4 sin1 pang4 jau5 daa2 bei2 ngo5, waa6 keoi5 hai2 ji1 jyun2 dang2 gan2 ngo5, so2 ji5 ngo5 zik1 hak1 lei4 hoi1 gung1 si1", english: "A friend called me just now and said they were waiting at the hospital, so I left the office immediately." },
  { id: "s31", level: 1, tense: "past", theme: "daily", hanzi: "我食咗飯。", jyutping: "ngo5 sik6 zo2 faan6", english: "I ate a meal." },
  { id: "s32", level: 1, tense: "past", theme: "home", hanzi: "你返咗屋企。", jyutping: "nei5 faan1 zo2 uk1 kei2", english: "You went back home." },
  { id: "s33", level: 1, tense: "future", theme: "daily", hanzi: "我會飲水。", jyutping: "ngo5 wui5 jam2 seoi2", english: "I will drink water." },
  { id: "s34", level: 1, tense: "future", theme: "travel", hanzi: "我會去學校。", jyutping: "ngo5 wui5 heoi3 hok6 haau6", english: "I will go to school." },
  { id: "s35", level: 1, tense: "present", theme: "home", hanzi: "我喺廚房。", jyutping: "ngo5 hai2 cyu4 fong2", english: "I am in the kitchen." },
  { id: "s36", level: 1, tense: "present", theme: "friends", hanzi: "佢係我朋友。", jyutping: "keoi5 hai6 ngo5 pang4 jau5", english: "He/She is my friend." },
  { id: "s37", level: 2, tense: "past", theme: "friends", hanzi: "尋日我見咗朋友。", jyutping: "cam4 jat6 ngo5 gin3 zo2 pang4 jau5", english: "Yesterday I met a friend." },
  { id: "s38", level: 2, tense: "past", theme: "home", hanzi: "我啱啱寫完功課。", jyutping: "ngo5 ngaam1 ngaam1 se2 jyun4 gung1 fo3", english: "I just finished homework." },
  { id: "s39", level: 2, tense: "future", theme: "home", hanzi: "今晚我會喺屋企煮飯。", jyutping: "gam1 maan5 ngo5 wui5 hai2 uk1 kei2 zyu2 faan6", english: "Tonight I will cook at home." },
  { id: "s40", level: 2, tense: "future", theme: "friends", hanzi: "下次我會同你飲茶。", jyutping: "haa6 ci3 ngo5 wui5 tung4 nei5 jam2 caa4", english: "Next time I will drink tea with you." },
  { id: "s41", level: 2, tense: "present", theme: "travel", hanzi: "我而家喺商店買嘢。", jyutping: "ngo5 ji4 gaa1 hai2 soeng1 dim3 maai5 je5", english: "I am buying things at the shop now." },
  { id: "s42", level: 2, tense: "present", theme: "daily", hanzi: "你今日做咩呀？", jyutping: "nei5 gam1 jat6 zou6 me1 aa3", english: "What are you doing today?" },
  { id: "s43", level: 3, tense: "past", theme: "travel", hanzi: "上次去旅行，我哋住咗三晚酒店。", jyutping: "soeng6 ci3 heoi3 leoi5 hang4, ngo5 dei6 zyu6 zo2 saam1 maan5 zau2 dim3", english: "Last trip, we stayed in a hotel for three nights." },
  { id: "s44", level: 3, tense: "future", theme: "daily", hanzi: "聽日早上我會早啲出門返工。", jyutping: "ting1 jat6 zou2 soeng6 ngo5 wui5 zou2 di1 ceot1 mun4 faan1 gung1", english: "Tomorrow morning I will leave earlier for work." },
  { id: "s45", level: 3, tense: "conditional", theme: "friends", hanzi: "如果你得閒，我哋就一齊食飯。", jyutping: "jyu4 gwo2 nei5 dak1 haan4, ngo5 dei6 zau6 jat1 cai4 sik6 faan6", english: "If you are free, we'll eat together." },
  { id: "s46", level: 4, tense: "past", theme: "holiday", hanzi: "上個月我哋去咗海邊，不過天氣太凍，所以早啲返酒店。", jyutping: "soeng6 go3 jyut6 ngo5 dei6 heoi3 zo2 hoi2 bin1, bat1 gwo3 tin1 hei3 taai3 dung3, so2 ji5 zou2 di1 faan1 zau2 dim3", english: "Last month we went to the beach, but it was too cold, so we returned to the hotel early." },
  { id: "s47", level: 4, tense: "future", theme: "home", hanzi: "如果之後你要搬屋，我可以同你一齊執嘢。", jyutping: "jyu4 gwo2 zi1 hau6 nei5 jiu3 bun1 uk1, ngo5 ho2 ji5 tung4 nei5 jat1 cai4 zap1 je5", english: "If you need to move later, I can help you pack." },
  { id: "s48", level: 5, tense: "conditional", theme: "daily", hanzi: "如果我今個星期做完所有工作，我就會同朋友計劃下次旅行。", jyutping: "jyu4 gwo2 ngo5 gam1 go3 sing1 kei4 zou6 jyun4 so2 jau5 gung1 zok3, ngo5 zau6 wui5 tung4 pang4 jau5 gai3 waak6 haa6 ci3 leoi5 hang4", english: "If I finish all my work this week, I will plan the next trip with friends." },
  { id: "s49", level: 1, tense: "past", theme: "daily", hanzi: "我買咗水。", jyutping: "ngo5 maai5 zo2 seoi2", english: "I bought water." },
  { id: "s50", level: 1, tense: "past", theme: "home", hanzi: "佢返咗屋企。", jyutping: "keoi5 faan1 zo2 uk1 kei2", english: "He/She went back home." },
  { id: "s51", level: 2, tense: "past", theme: "travel", hanzi: "我去過香港。", jyutping: "ngo5 heoi3 gwo3 hoeng1 gong2", english: "I have been to Hong Kong." },
  { id: "s52", level: 2, tense: "past", theme: "friends", hanzi: "你見過佢未？", jyutping: "nei5 gin3 gwo3 keoi5 mei6", english: "Have you met him/her before?" },
  { id: "s53", level: 2, tense: "past", theme: "daily", hanzi: "我做完功課。", jyutping: "ngo5 zou6 jyun4 gung1 fo3", english: "I finished homework." },
  { id: "s54", level: 2, tense: "past", theme: "home", hanzi: "我哋食完飯喇。", jyutping: "ngo5 dei6 sik6 jyun4 faan6 laa3", english: "We finished eating." },
  { id: "s55", level: 1, tense: "present", theme: "daily", hanzi: "我食緊飯。", jyutping: "ngo5 sik6 gan2 faan6", english: "I am eating." },
  { id: "s56", level: 1, tense: "present", theme: "friends", hanzi: "佢講緊電話。", jyutping: "keoi5 gong2 gan2 din6 waa2", english: "He/She is talking on the phone." },
  { id: "s57", level: 2, tense: "present", theme: "travel", hanzi: "我哋等緊巴士。", jyutping: "ngo5 dei6 dang2 gan2 baa1 si2", english: "We are waiting for the bus." },
  { id: "s58", level: 2, tense: "present", theme: "home", hanzi: "門開住。", jyutping: "mun4 hoi1 zyu6", english: "The door is left open." },
  { id: "s59", level: 2, tense: "present", theme: "home", hanzi: "阿哥住喺香港。", jyutping: "aa3 go1 zyu6 hai2 hoeng1 gong2", english: "My older brother lives in Hong Kong." },
  { id: "s60", level: 3, tense: "past", theme: "daily", hanzi: "我已經食咗早餐。", jyutping: "ngo5 ji5 ging1 sik6 zo2 zou2 caan1", english: "I already ate breakfast." },
  { id: "s61", level: 3, tense: "past", theme: "friends", hanzi: "我以前聽過呢首歌。", jyutping: "ngo5 ji5 cin4 teng1 gwo3 ni1 sau2 go1", english: "I have heard this song before." },
  { id: "s62", level: 3, tense: "past", theme: "home", hanzi: "我啱啱飲完茶。", jyutping: "ngo5 ngaam1 ngaam1 jam2 jyun4 caa4", english: "I just finished drinking tea." },
  { id: "s63", level: 3, tense: "future", theme: "daily", hanzi: "我將會再試一次。", jyutping: "ngo5 zoeng1 wui5 zoi3 si3 jat1 ci3", english: "I will try one more time." },
  { id: "s64", level: 4, tense: "conditional", theme: "home", hanzi: "如果你仲做緊嘢，我就等你食飯。", jyutping: "jyu4 gwo2 nei5 zung6 zou6 gan2 je5, ngo5 zau6 dang2 nei5 sik6 faan6", english: "If you are still working, I will wait for you to eat." },
  { id: "s65", level: 4, tense: "past", theme: "travel", hanzi: "我哋去完市場之後，就返酒店休息。", jyutping: "ngo5 dei6 heoi3 jyun4 si5 coeng4 zi1 hau6, zau6 faan1 zau2 dim3 jau1 sik1", english: "After we finished going to the market, we returned to the hotel to rest." },
  { id: "s66", level: 5, tense: "conditional", theme: "friends", hanzi: "如果你之前去過嗰間餐廳，不如今晚帶我去試下。", jyutping: "jyu4 gwo2 nei5 zi1 cin4 heoi3 gwo3 go2 gaan1 caan1 teng1, bat1 jyu4 gam1 maan5 daai3 ngo5 heoi3 si3 haa5", english: "If you've been to that restaurant before, why not take me there tonight to try it." }
];

const ASPECT_MARKERS = {
  "咗": { role: "past", label: "completed action (past)" },
  "過": { role: "past", label: "experience in the past" },
  "完": { role: "past", label: "finished/completed" },
  "緊": { role: "prog", label: "ongoing action (-ing)" },
  "住": { role: "prog", label: "continuous state" },
  "會": { role: "future", label: "future marker (will)" },
  "將會": { role: "future", label: "future marker (going to/will)" },
  "已經": { role: "past", label: "already" },
  "了": { role: "past", label: "completed action (Mandarin)" },
  "过": { role: "past", label: "experience in Mandarin" },
  "着": { role: "prog", label: "continuous state (Mandarin)" },
  "在": { role: "prog", label: "ongoing action marker (Mandarin)" },
  "会": { role: "future", label: "future marker (Mandarin)" },
  "将会": { role: "future", label: "future marker (Mandarin)" },
  "已经": { role: "past", label: "already (Mandarin)" }
};

const GRAMMAR_MARKER_DETAILS = {
  "咗": {
    core: "Completed/perfective marker for finished events.",
    pattern: "Verb + 咗",
    use: "Use when the action is completed at a specific time or as a finished event.",
    contrast: "Compared with 過: 咗 = completed event; 過 = life experience.",
    extra: "咗 can also appear sentence-finally in change-of-state contexts."
  },
  "過": {
    core: "Experiential marker: have done before.",
    pattern: "Verb + 過",
    use: "Use for past experience, not one single finished event in time.",
    contrast: "Compared with 咗: 過 = experience; 咗 = completed event.",
    extra: "過 is also an independent verb meaning pass/cross in other contexts."
  },
  "完": {
    core: "Resultative complement meaning finish/completion.",
    pattern: "Verb + 完",
    use: "Use to emphasize full completion of the action.",
    contrast: "Often combines with 咗 in speech when both completion and past are expressed.",
    extra: "完 can also be an independent verb (to finish)."
  },
  "緊": {
    core: "Progressive marker for ongoing action (-ing).",
    pattern: "Verb + 緊",
    use: "Use for actions happening right now/in progress.",
    contrast: "Compared with 住: 緊 = active ongoing action; 住 = maintained state.",
    extra: "Less natural with stative verbs in many contexts."
  },
  "住": {
    core: "Durative marker for sustained state/condition.",
    pattern: "Verb + 住",
    use: "Use when the result/state continues.",
    contrast: "Compared with 緊: 住 often highlights maintained condition rather than active process.",
    extra: "住 is also a full verb meaning live/stay (e.g., 住喺香港)."
  },
  "會": {
    core: "Modal: future prediction/intention ('will').",
    pattern: "會 + Verb",
    use: "Use for likely future actions, predictions, or planned intention.",
    contrast: "Compared with 將會: 會 is more neutral/common in conversation.",
    extra: "會 can also mean know how to/can (ability), depending on context."
  },
  "將會": {
    core: "Future marker with stronger/formal future framing.",
    pattern: "將會 + Verb",
    use: "Use for explicit future events, plans, announcements, and formal tone.",
    contrast: "Compared with 會: 將會 sounds more formal and less conversational.",
    extra: "In daily speech, many speakers prefer 會."
  },
  "已經": {
    core: "Adverb meaning already.",
    pattern: "已經 + Verb phrase (often with 咗 after the verb)",
    use: "Use to show the action/state happened earlier than expected.",
    contrast: "Compared with just 咗: 已經 adds an 'already' nuance.",
    extra: "Can appear without 咗 in some contexts."
  },
  "了": {
    core: "Mandarin completion/change marker.",
    pattern: "Verb + 了 / sentence-final 了",
    use: "Marks completion or change of state depending on position.",
    contrast: "Closest compare with Cantonese 咗 in many completed-event contexts.",
    extra: "Position changes nuance, so check the whole sentence."
  },
  "过": {
    core: "Mandarin experiential marker (have done before).",
    pattern: "Verb + 过",
    use: "Use for life experience, not one specific finished moment.",
    contrast: "Comparable to Cantonese 過 for experience.",
    extra: "Often appears with time expressions like 以前/before."
  },
  "着": {
    core: "Mandarin durative marker for continuing state.",
    pattern: "Verb + 着",
    use: "Use when a state/result remains in effect.",
    contrast: "Roughly parallels Cantonese 住 in many contexts.",
    extra: "Common with posture and placement verbs."
  },
  "在": {
    core: "Mandarin progressive marker before verb.",
    pattern: "在 + Verb",
    use: "Use for action in progress now.",
    contrast: "Comparable to Cantonese Verb + 緊.",
    extra: "Note: 在 is also a preposition/location verb."
  },
  "会": {
    core: "Mandarin future/ability modal.",
    pattern: "Subject + 会 + Verb",
    use: "Use for future likelihood or learned ability.",
    contrast: "Comparable to Cantonese 會 by context.",
    extra: "Meaning depends on context (ability vs future)."
  },
  "将会": {
    core: "Mandarin explicit future marker.",
    pattern: "Subject + 将会 + Verb",
    use: "Use in clear future statements, often more formal.",
    contrast: "Directly parallels Cantonese 將會.",
    extra: "Can sound formal in very casual talk."
  },
  "已经": {
    core: "Mandarin adverb meaning already.",
    pattern: "已经 + Verb",
    use: "Marks completion/state already true.",
    contrast: "Comparable to Cantonese 已經.",
    extra: "Often combines with 了 for completion emphasis."
  }
};

const GENERATED_SENTENCES = buildGeneratedAspectSentences();
const GENERATED_FUTURE_SENTENCES = buildGeneratedFutureSentences();
const GENERATED_CONDITIONAL_SENTENCES = buildGeneratedConditionalSentences();
const GENERATED_QUESTION_SENTENCES = buildGeneratedQuestionSentences();
const GENERATED_LEVEL3_SENTENCES = buildGeneratedLevel3ExpandedSentences();
const GENERATED_LEVEL4_LONG_SENTENCES = buildGeneratedLevel4LongSentences();
const ALL_SENTENCES = SENTENCE_BANK
  .concat(GENERATED_SENTENCES)
  .concat(GENERATED_FUTURE_SENTENCES)
  .concat(GENERATED_CONDITIONAL_SENTENCES)
  .concat(GENERATED_LEVEL3_SENTENCES)
  .concat(GENERATED_LEVEL4_LONG_SENTENCES)
  .concat(GENERATED_QUESTION_SENTENCES)
  .map((s) => ({ ...s, english: normalizeEnglishSentence(s.english) }));

const REAL_NOISE_URLS = {
  "real-market": [
    "audio/wet-market-1.mp3",
    "audio/wet-market-2.mp3"
  ],
  "real-radio": [
    "audio/radio-chatter-1.mp3",
    "audio/radio-chatter-2.mp3",
    "https://www.bigsoundbank.com/UPLOAD/mp3/3515.mp3",
    "https://www.bigsoundbank.com/UPLOAD/mp3/3516.mp3"
  ]
};

const BASE_TONE_PAIR_BANK = [
  { id: "t1", level: 1, a: { hanzi: "買", jyutping: "maai5", english: "buy" }, b: { hanzi: "賣", jyutping: "maai6", english: "sell" } },
  { id: "t2", level: 1, a: { hanzi: "識", jyutping: "sik1", english: "know (a skill/person)" }, b: { hanzi: "食", jyutping: "sik6", english: "eat" } },
  { id: "t3", level: 1, a: { hanzi: "早", jyutping: "zou2", english: "early" }, b: { hanzi: "做", jyutping: "zou6", english: "do / make" } },
  { id: "t4", level: 2, a: { hanzi: "試", jyutping: "si3", english: "try" }, b: { hanzi: "事", jyutping: "si6", english: "matter / thing" } },
  { id: "t5", level: 2, a: { hanzi: "時", jyutping: "si4", english: "time" }, b: { hanzi: "市", jyutping: "si5", english: "market / city" } },
  { id: "t6", level: 2, a: { hanzi: "到", jyutping: "dou3", english: "arrive" }, b: { hanzi: "刀", jyutping: "dou1", english: "knife" } },
  { id: "t7", level: 3, a: { hanzi: "先", jyutping: "sin1", english: "first" }, b: { hanzi: "線", jyutping: "sin3", english: "line / wire" } },
  { id: "t8", level: 3, a: { hanzi: "手", jyutping: "sau2", english: "hand" }, b: { hanzi: "受", jyutping: "sau6", english: "receive / suffer" } },
  { id: "t9", level: 4, a: { hanzi: "豬", jyutping: "zyu1", english: "pig" }, b: { hanzi: "住", jyutping: "zyu6", english: "live / stay" } },
  { id: "t10", level: 4, a: { hanzi: "姓", jyutping: "sing3", english: "surname" }, b: { hanzi: "醒", jyutping: "sing2", english: "awake / clear-headed" } },
  { id: "t11", level: 5, a: { hanzi: "詩", jyutping: "si1", english: "poem" }, b: { hanzi: "史", jyutping: "si2", english: "history" } },
  { id: "t12", level: 5, a: { hanzi: "富", jyutping: "fu3", english: "rich" }, b: { hanzi: "苦", jyutping: "fu2", english: "bitter / hardship" } }
];

const EXTRA_TONE_PAIR_BANK = [
  { id: "t13", level: 1, a: { hanzi: "巴", jyutping: "baa1", english: "bar / bus (short sound)" }, b: { hanzi: "把", jyutping: "baa2", english: "to hold / classifier" } },
  { id: "t14", level: 1, a: { hanzi: "班", jyutping: "baan1", english: "class / team" }, b: { hanzi: "版", jyutping: "baan2", english: "edition / version" } },
  { id: "t15", level: 1, a: { hanzi: "燈", jyutping: "dang1", english: "lamp / light" }, b: { hanzi: "等", jyutping: "dang2", english: "wait" } },
  { id: "t16", level: 1, a: { hanzi: "東", jyutping: "dung1", english: "east" }, b: { hanzi: "懂", jyutping: "dung2", english: "understand" } },
  { id: "t17", level: 1, a: { hanzi: "高", jyutping: "gou1", english: "tall / high" }, b: { hanzi: "稿", jyutping: "gou2", english: "draft / manuscript" } },
  { id: "t18", level: 1, a: { hanzi: "官", jyutping: "gun1", english: "official" }, b: { hanzi: "管", jyutping: "gun2", english: "manage / tube" } },
  { id: "t19", level: 1, a: { hanzi: "花", jyutping: "faa1", english: "flower" }, b: { hanzi: "化", jyutping: "faa3", english: "change / transform" } },
  { id: "t20", level: 1, a: { hanzi: "開", jyutping: "hoi1", english: "open" }, b: { hanzi: "海", jyutping: "hoi2", english: "sea" } },
  { id: "t21", level: 2, a: { hanzi: "詩", jyutping: "si1", english: "poem" }, b: { hanzi: "試", jyutping: "si3", english: "try / test" } },
  { id: "t22", level: 2, a: { hanzi: "師", jyutping: "si1", english: "teacher / master" }, b: { hanzi: "時", jyutping: "si4", english: "time" } },
  { id: "t23", level: 2, a: { hanzi: "市", jyutping: "si5", english: "market / city" }, b: { hanzi: "事", jyutping: "si6", english: "matter / thing" } },
  { id: "t24", level: 2, a: { hanzi: "收", jyutping: "sau1", english: "receive / collect" }, b: { hanzi: "守", jyutping: "sau2", english: "guard / keep" } },
  { id: "t25", level: 2, a: { hanzi: "九", jyutping: "gau2", english: "nine" }, b: { hanzi: "救", jyutping: "gau3", english: "save / rescue" } },
  { id: "t26", level: 2, a: { hanzi: "米", jyutping: "mai5", english: "rice" }, b: { hanzi: "迷", jyutping: "mai4", english: "become fascinated / lost" } },
  { id: "t27", level: 2, a: { hanzi: "車", jyutping: "ce1", english: "car / vehicle" }, b: { hanzi: "扯", jyutping: "ce2", english: "pull / tug" } },
  { id: "t28", level: 3, a: { hanzi: "書", jyutping: "syu1", english: "book" }, b: { hanzi: "薯", jyutping: "syu4", english: "potato" } },
  { id: "t29", level: 3, a: { hanzi: "心", jyutping: "sam1", english: "heart / mind" }, b: { hanzi: "審", jyutping: "sam2", english: "examine" } },
  { id: "t30", level: 3, a: { hanzi: "精", jyutping: "zing1", english: "spirit / refined" }, b: { hanzi: "整", jyutping: "zing2", english: "fix / make" } },
  { id: "t31", level: 3, a: { hanzi: "紙", jyutping: "zi2", english: "paper" }, b: { hanzi: "字", jyutping: "zi6", english: "character / word" } },
  { id: "t32", level: 3, a: { hanzi: "邊", jyutping: "bin1", english: "side / which" }, b: { hanzi: "變", jyutping: "bin3", english: "change" } },
  { id: "t33", level: 4, a: { hanzi: "清", jyutping: "cing1", english: "clear" }, b: { hanzi: "請", jyutping: "cing2", english: "please / invite" } },
  { id: "t34", level: 4, a: { hanzi: "天", jyutping: "tin1", english: "sky / day" }, b: { hanzi: "填", jyutping: "tin4", english: "fill in" } },
  { id: "t35", level: 4, a: { hanzi: "講", jyutping: "gong2", english: "speak" }, b: { hanzi: "鋼", jyutping: "gong3", english: "steel" } },
  { id: "t36", level: 4, a: { hanzi: "口", jyutping: "hau2", english: "mouth" }, b: { hanzi: "後", jyutping: "hau6", english: "after / behind" } }
];

const TONE_PAIR_BANK = BASE_TONE_PAIR_BANK.concat(EXTRA_TONE_PAIR_BANK);

const BASE_TONE_SENTENCE_BANK = [
  {
    id: "ts1",
    level: 3,
    a: { hanzi: "我想買菜。", jyutping: "ngo5 soeng2 maai5 coi3", english: "I want to buy vegetables." },
    b: { hanzi: "我想賣菜。", jyutping: "ngo5 soeng2 maai6 coi3", english: "I want to sell vegetables." }
  },
  {
    id: "ts2",
    level: 3,
    a: { hanzi: "佢識游水。", jyutping: "keoi5 sik1 jau4 seoi2", english: "He/She knows how to swim." },
    b: { hanzi: "佢食宵夜。", jyutping: "keoi5 sik6 siu1 je6", english: "He/She eats a late-night snack." }
  },
  {
    id: "ts3",
    level: 4,
    a: { hanzi: "我住喺呢度。", jyutping: "ngo5 zyu6 hai2 ni1 dou6", english: "I live here." },
    b: { hanzi: "嗰隻豬好大。", jyutping: "go2 zek3 zyu1 hou2 daai6", english: "That pig is very big." }
  },
  {
    id: "ts4",
    level: 4,
    a: { hanzi: "你姓咩？", jyutping: "nei5 sing3 me1", english: "What is your surname?" },
    b: { hanzi: "我啱啱醒。", jyutping: "ngo5 ngaam1 ngaam1 sing2", english: "I just woke up." }
  },
  {
    id: "ts5",
    level: 5,
    a: { hanzi: "佢讀呢首詩。", jyutping: "keoi5 duk6 ni1 sau2 si1", english: "He/She reads this poem." },
    b: { hanzi: "佢讀香港史。", jyutping: "keoi5 duk6 hoeng1 gong2 si2", english: "He/She studies Hong Kong history." }
  },
  {
    id: "ts6",
    level: 5,
    a: { hanzi: "佢好富有。", jyutping: "keoi5 hou2 fu3 jau5", english: "He/She is wealthy." },
    b: { hanzi: "呢杯咖啡好苦。", jyutping: "ni1 bui1 gaa3 fe1 hou2 fu2", english: "This coffee is very bitter." }
  }
];

const EXTRA_TONE_SENTENCE_BANK = [
  { id: "ts7", level: 3, a: { hanzi: "我開門。", jyutping: "ngo5 hoi1 mun4", english: "I open the door." }, b: { hanzi: "我去海邊。", jyutping: "ngo5 heoi3 hoi2 bin1", english: "I go to the seaside." } },
  { id: "ts8", level: 3, a: { hanzi: "我等你。", jyutping: "ngo5 dang2 nei5", english: "I wait for you." }, b: { hanzi: "我開燈。", jyutping: "ngo5 hoi1 dang1", english: "I turn on the light." } },
  { id: "ts9", level: 3, a: { hanzi: "我想試。", jyutping: "ngo5 soeng2 si3", english: "I want to try." }, b: { hanzi: "我寫詩。", jyutping: "ngo5 se2 si1", english: "I write poems." } },
  { id: "ts10", level: 3, a: { hanzi: "你去市埸。", jyutping: "nei5 heoi3 si5 coeng4", english: "You go to the market." }, b: { hanzi: "呢件事好難。", jyutping: "ni1 gin6 si6 hou2 naan4", english: "This matter is hard." } },
  { id: "ts11", level: 3, a: { hanzi: "我收信。", jyutping: "ngo5 sau1 seon3", english: "I receive mail." }, b: { hanzi: "我守門。", jyutping: "ngo5 sau2 mun4", english: "I guard the door." } },
  { id: "ts12", level: 3, a: { hanzi: "我有米。", jyutping: "ngo5 jau5 mai5", english: "I have rice." }, b: { hanzi: "我唔係迷路。", jyutping: "ngo5 m4 hai6 mai4 lou6", english: "I am not lost." } },
  { id: "ts13", level: 4, a: { hanzi: "我識整嘢。", jyutping: "ngo5 sik1 zing2 je5", english: "I know how to fix things." }, b: { hanzi: "佢好精。", jyutping: "keoi5 hou2 zing1", english: "He/She is very sharp." } },
  { id: "ts14", level: 4, a: { hanzi: "呢張紙好薄。", jyutping: "ni1 zoeng1 zi2 hou2 bok6", english: "This paper is thin." }, b: { hanzi: "呢個字好難。", jyutping: "ni1 go3 zi6 hou2 naan4", english: "This character is hard." } },
  { id: "ts15", level: 4, a: { hanzi: "你喺邊度？", jyutping: "nei5 hai2 bin1 dou6", english: "Where are you?" }, b: { hanzi: "計劃變咗。", jyutping: "gai3 waak6 bin3 zo2", english: "The plan changed." } },
  { id: "ts16", level: 4, a: { hanzi: "你可以請佢。", jyutping: "nei5 ho2 ji5 cing2 keoi5", english: "You can invite him/her." }, b: { hanzi: "啲水好清。", jyutping: "di1 seoi2 hou2 cing1", english: "The water is very clear." } },
  { id: "ts17", level: 5, a: { hanzi: "你要填表。", jyutping: "nei5 jiu3 tin4 biu2", english: "You need to fill in the form." }, b: { hanzi: "今天天氣好。", jyutping: "gam1 tin1 tin1 hei3 hou2", english: "The weather is good today." } },
  { id: "ts18", level: 5, a: { hanzi: "佢講中文。", jyutping: "keoi5 gong2 zung1 man4", english: "He/She speaks Chinese." }, b: { hanzi: "呢塊鋼好重。", jyutping: "ni1 faai3 gong3 hou2 zung6", english: "This steel piece is heavy." } }
];

const TONE_SENTENCE_BANK = BASE_TONE_SENTENCE_BANK.concat(EXTRA_TONE_SENTENCE_BANK);

function defaultMission() {
  return { listens: 0, tones: 0, patterns: 0, hanzi: 0, targets: { listens: 10, tones: 5, patterns: 3, hanzi: 3 }, awarded: false };
}

function defaultGameState() {
  return {
    date: todayString(),
    xp: 0,
    combo: 0,
    bestCombo: 0,
    mistakes: [],
    fixMode: false,
    mission: defaultMission(),
    boss: { active: false, index: 0, score: 0, questions: [], current: null },
    hanzi: { active: false, index: 0, score: 0, questions: [], current: null }
  };
}

function normalizeGameState(input) {
  const base = defaultGameState();
  const safe = input && typeof input === "object" ? input : {};
  const missionIn = safe.mission && typeof safe.mission === "object" ? safe.mission : {};
  const targetsIn = missionIn.targets && typeof missionIn.targets === "object" ? missionIn.targets : {};
  return {
    date: typeof safe.date === "string" ? safe.date : base.date,
    xp: Number(safe.xp) || 0,
    combo: Number(safe.combo) || 0,
    bestCombo: Number(safe.bestCombo) || 0,
    mistakes: Array.isArray(safe.mistakes) ? safe.mistakes.filter((m) => typeof m === "string") : [],
    fixMode: !!safe.fixMode,
    mission: {
      listens: Number(missionIn.listens) || 0,
      tones: Number(missionIn.tones) || 0,
      patterns: Number(missionIn.patterns) || 0,
      hanzi: Number(missionIn.hanzi) || 0,
      targets: {
        listens: Number(targetsIn.listens) || base.mission.targets.listens,
        tones: Number(targetsIn.tones) || base.mission.targets.tones,
        patterns: Number(targetsIn.patterns) || base.mission.targets.patterns,
        hanzi: Number(targetsIn.hanzi) || base.mission.targets.hanzi
      },
      awarded: !!missionIn.awarded
    },
    boss: {
      active: !!(safe.boss && safe.boss.active),
      index: Number(safe.boss?.index) || 0,
      score: Number(safe.boss?.score) || 0,
      questions: Array.isArray(safe.boss?.questions) ? safe.boss.questions : [],
      current: safe.boss?.current || null
    },
    hanzi: {
      active: !!(safe.hanzi && safe.hanzi.active),
      index: Number(safe.hanzi?.index) || 0,
      score: Number(safe.hanzi?.score) || 0,
      questions: Array.isArray(safe.hanzi?.questions) ? safe.hanzi.questions : [],
      current: safe.hanzi?.current || null
    }
  };
}

const state = {
  content: loadContent(),
  known: new Set(loadJson(STORAGE_KEYS.known, [])),
  reviewed: loadJson(STORAGE_KEYS.reviewed, { date: todayString(), count: 0 }),
  streak: loadJson(STORAGE_KEYS.streak, { lastDate: null, days: 0 }),
  prefs: loadJson(STORAGE_KEYS.prefs, {
    level: 1,
    tense: "mixed",
    wordFilter: "mixed",
    theme: "mixed",
    questionLevel: "basic",
    questionTense: "mixed",
    questionTheme: "mixed",
    uiTheme: "classic",
    languageMode: "cantonese",
    controlsCollapsed: false,
    toneExerciseMode: "word",
    showJyutping: true,
    showEnglish: true,
    miniStoryShowJyutping: true,
    miniStoryShowEnglish: true,
    miniStoryLens: true,
    toneShowJyutping: false,
    toneShowEnglish: false,
    showGrammarLens: false,
    voiceURI: "auto",
    voiceRate: 0.9,
    audioNoiseOn: false,
    audioNoiseLevel: 0.25,
    audioNoiseType: "white",
    analyticsConsent: "unknown"
  }),
  availableVoices: [],
  rotation: { words: [], patternSentences: [], quizSentences: [], questionSentences: [], tonePairs: [], exerciseSentences: [] },
  currentWord: null,
  currentSentence: null,
  currentPatternAnalysis: null,
  currentQuestion: null,
  currentPattern: null,
  patternSelections: {},
  currentQuiz: null,
  currentQuizAnalysis: null,
  currentQuestionAnalysis: null,
  currentTonePair: null,
  currentExercise: null,
  currentStory: null,
  currentStoryAnalyses: [],
  currentMiniStory: null,
  currentMiniStoryAnalyses: [],
  currentMiniStoryChunkTexts: [],
  supplementalSearchWords: [],
  currentToneKind: "word",
  currentToneSide: null,
  storyTab: "dialogs",
  bookTab: "grammar",
  bookToneTab: "tones",
  bookWritingTab: "writing",
  searchTab: "standard",
  toneLabelMap: { a: "a", b: "b" },
  toneScore: { correct: 0, total: 0 },
  quizDisplay: { hanzi: false, jyutping: false, english: false, lens: false },
  game: normalizeGameState(loadJson(STORAGE_KEYS.game, defaultGameState()))
};
setRuntimeWordsForLookup(state.content?.words || []);

const els = {
  appTitle: byId("appTitle"),
  tabs: [...document.querySelectorAll(".tab")],
  bottomNav: byId("bottomNav"),
  bottomTabs: [...document.querySelectorAll(".bottom-nav-btn")],
  openUserPanel: byId("openUserPanel"),
  userPanel: byId("userPanel"),
  closeUserPanel: byId("closeUserPanel"),
  closeUserPanelBackdrop: byId("closeUserPanelBackdrop"),
  userPanelVersion: byId("userPanelVersion"),
  changeEmailBtn: byId("changeEmailBtn"),
  upgradeAccountBtn: byId("upgradeAccountBtn"),
  userLanguageMode: byId("userLanguageMode"),
  changePasswordBtn: byId("changePasswordBtn"),
  logOutBtn: byId("logOutBtn"),
  clearCacheBtn: byId("clearCacheBtn"),
  openTermsBtn: byId("openTermsBtn"),
  openAboutBtn: byId("openAboutBtn"),
  userPanelMsg: byId("userPanelMsg"),
  openSettingsFromUser: byId("openSettingsFromUser"),
  openContentFromUser: byId("openContentFromUser"),
  infoModal: byId("infoModal"),
  closeInfoModal: byId("closeInfoModal"),
  infoModalTitle: byId("infoModalTitle"),
  infoModalBody: byId("infoModalBody"),
  storyTabs: [...document.querySelectorAll(".stories-nav-btn")],
  storyPanels: [...document.querySelectorAll(".stories-subpanel")],
  bookTabs: [...document.querySelectorAll(".book-top-tabs .book-nav-btn")],
  bookPartTabs: [...document.querySelectorAll(".book-part-btn")],
  bookToneTabs: [...document.querySelectorAll(".book-tone-btn")],
  bookWritingTabs: [...document.querySelectorAll(".book-writing-btn")],
  bookPanels: [...document.querySelectorAll(".book-subpanel")],
  bookTonePanels: [...document.querySelectorAll(".book-tone-panel")],
  bookWritingPanels: [...document.querySelectorAll(".book-writing-panel")],
  storyOfDayLabel: byId("storyOfDayLabel"),
  storyOfDayMeta: byId("storyOfDayMeta"),
  storyOfDayLines: byId("storyOfDayLines"),
  storyTapHint: byId("storyTapHint"),
  playStoryAudio: byId("playStoryAudio"),
  miniStorySelect: byId("miniStorySelect"),
  miniStoryMeta: byId("miniStoryMeta"),
  miniStoryLines: byId("miniStoryLines"),
  miniStoryTapHint: byId("miniStoryTapHint"),
  playMiniStoryAudio: byId("playMiniStoryAudio"),
  toggleMiniStoryJyutping: byId("toggleMiniStoryJyutping"),
  toggleMiniStoryEnglish: byId("toggleMiniStoryEnglish"),
  toggleMiniStoryLens: byId("toggleMiniStoryLens"),
  panels: [...document.querySelectorAll(".panel")],
  wordCategory: byId("wordCategory"),
  wordHanzi: byId("wordHanzi"),
  wordJyutping: byId("wordJyutping"),
  wordEnglish: byId("wordEnglish"),
  wordLiteral: byId("wordLiteral"),
  wordExample: byId("wordExample"),
  revealExample: byId("revealExample"),
  globalLevel: byId("globalLevel"),
  globalTense: byId("globalTense"),
  globalTheme: byId("globalTheme"),
  globalLevelWrap: byId("globalLevelWrap"),
  globalTenseWrap: byId("globalTenseWrap"),
  wordFilter: byId("wordFilter"),
  wordFilterWrap: byId("wordFilterWrap"),
  globalThemeWrap: byId("globalThemeWrap"),
  questionLevel: byId("questionLevel"),
  questionTense: byId("questionTense"),
  questionTheme: byId("questionTheme"),
  questionLevelWrap: byId("questionLevelWrap"),
  questionTenseWrap: byId("questionTenseWrap"),
  questionThemeWrap: byId("questionThemeWrap"),
  toneModeWrap: byId("toneModeWrap"),
  audioVoice: byId("audioVoice"),
  audioRate: byId("audioRate"),
  audioRateValue: byId("audioRateValue"),
  audioNoiseOn: byId("audioNoiseOn"),
  audioNoiseType: byId("audioNoiseType"),
  audioNoiseLevel: byId("audioNoiseLevel"),
  audioNoiseValue: byId("audioNoiseValue"),
  toneExerciseMode: byId("toneExerciseMode"),
  themeStyle: byId("themeStyle"),
  languageMode: byId("languageMode"),
  testVoice: byId("testVoice"),
  applyControls: byId("applyControls"),
  controlsCard: document.querySelector(".controls-card"),
  toggleControlsCard: byId("toggleControlsCard"),
  toggleGrammarLens: byId("toggleGrammarLens"),
  controlsMessage: byId("controlsMessage"),
  toggleWordJyutping: byId("toggleWordJyutping"),
  toggleWordEnglish: byId("toggleWordEnglish"),
  newPattern: byId("newPattern"),
  togglePatternJyutping: byId("togglePatternJyutping"),
  togglePatternEnglish: byId("togglePatternEnglish"),
  patternLensText: byId("patternLensText"),
  patternJpText: byId("patternJpText"),
  questionJpText: byId("questionJpText"),
  wordJpText: byId("wordJpText"),
  patternEnText: byId("patternEnText"),
  patternNextText: byId("patternNextText"),
  toggleQuizJyutping: byId("toggleQuizJyutping"),
  toggleQuizEnglish: byId("toggleQuizEnglish"),
  toggleQuizGrammarLens: byId("toggleQuizGrammarLens"),
  toggleToneJyutping: byId("toggleToneJyutping"),
  toggleToneEnglish: byId("toggleToneEnglish"),
  toggleQuestionGrammarLens: byId("toggleQuestionGrammarLens"),
  knownWords: byId("knownWords"),
  reviewedWords: byId("reviewedWords"),
  toggleKnownList: byId("toggleKnownList"),
  knownListWrap: byId("knownListWrap"),
  knownListMeta: byId("knownListMeta"),
  knownList: byId("knownList"),
  clearKnownList: byId("clearKnownList"),
  streakBadge: byId("streakBadge"),
  patternFormula: byId("patternFormula"),
  slotGrid: byId("slotGrid"),
  patternHanzi: byId("patternHanzi"),
  patternJyutping: byId("patternJyutping"),
  patternEnglish: byId("patternEnglish"),
  patternLiteral: byId("patternLiteral"),
  patternGrammarNotes: byId("patternGrammarNotes"),
  quizHanzi: byId("quizHanzi"),
  quizJyutping: byId("quizJyutping"),
  quizEnglish: byId("quizEnglish"),
  quizLiteral: byId("quizLiteral"),
  questionFormula: byId("questionFormula"),
  questionHanzi: byId("questionHanzi"),
  questionJyutping: byId("questionJyutping"),
  questionEnglish: byId("questionEnglish"),
  questionLiteral: byId("questionLiteral"),
  quizGrammarNotes: byId("quizGrammarNotes"),
  quizChoices: byId("quizChoices"),
  quizFeedback: byId("quizFeedback"),
  toggleQuestionJyutping: byId("toggleQuestionJyutping"),
  toggleQuestionEnglish: byId("toggleQuestionEnglish"),
  toneLabel: byId("toneLabel"),
  tonePrompt: byId("tonePrompt"),
  toneHanzi: byId("toneHanzi"),
  toneJyutping: byId("toneJyutping"),
  toneEnglish: byId("toneEnglish"),
  toneChoices: byId("toneChoices"),
  toneFeedback: byId("toneFeedback"),
  toneScore: byId("toneScore"),
  exercisePrompt: byId("exercisePrompt"),
  exerciseBuilt: byId("exerciseBuilt"),
  exerciseSelected: byId("exerciseSelected"),
  exerciseTokenBank: byId("exerciseTokenBank"),
  exerciseFeedback: byId("exerciseFeedback"),
  openFunLoop: byId("openFunLoop"),
  closeFunLoop: byId("closeFunLoop"),
  funModal: byId("funModal"),
  openSettings: byId("openSettings"),
  closeSettings: byId("closeSettings"),
  settingsModal: byId("settingsModal"),
  analyticsConsentModal: byId("analyticsConsentModal"),
  acceptAnalyticsBtn: byId("acceptAnalyticsBtn"),
  declineAnalyticsBtn: byId("declineAnalyticsBtn"),
  analyticsConsentSelect: byId("analyticsConsentSelect"),
  analyticsConsentNote: byId("analyticsConsentNote"),
  grammarModal: byId("grammarModal"),
  closeGrammarModal: byId("closeGrammarModal"),
  grammarModalTitle: byId("grammarModalTitle"),
  grammarModalBody: byId("grammarModalBody"),
  xpLine: byId("xpLine"),
  comboLine: byId("comboLine"),
  missionListens: byId("missionListens"),
  missionTones: byId("missionTones"),
  missionPatterns: byId("missionPatterns"),
  missionHanzi: byId("missionHanzi"),
  missionGoal: byId("missionGoal"),
  mistakeCount: byId("mistakeCount"),
  toggleFixMode: byId("toggleFixMode"),
  startBoss: byId("startBoss"),
  funFeedback: byId("funFeedback"),
  bossWrap: byId("bossWrap"),
  bossProgress: byId("bossProgress"),
  bossPrompt: byId("bossPrompt"),
  bossChoices: byId("bossChoices"),
  bossPlayAudio: byId("bossPlayAudio"),
  bossSkip: byId("bossSkip"),
  fxLayer: byId("fxLayer"),
  contentMessage: byId("contentMessage"),
  searchInput: byId("searchInput"),
  searchTabs: [...document.querySelectorAll(".search-nav-btn")],
  searchModeMeta: byId("searchModeMeta"),
  runSearch: byId("runSearch"),
  clearSearch: byId("clearSearch"),
  searchHint: byId("searchHint"),
  searchResults: byId("searchResults")
};

const speechNoise = {
  ctx: null,
  source: null,
  gain: null,
  ambientEl: null,
  stopTimer: null,
  playId: 0
};
let bossAdvanceTimer = null;
let layoutResizeObserver = null;
const softResizeHeights = new WeakMap();
const modalCloseTimers = new WeakMap();
let storyBankCache = null;
const miniStoryPlayer = { token: 0, lineIndex: 0, chunkIndex: 0, active: false, paused: false };
var AUTO_TOKEN_JYUTPING = Object.create(null);
let tokenizerVocabularyCache = null;
var runtimeWordsForLookup = [];

function invalidateTokenizerVocabularyCache() {
  tokenizerVocabularyCache = null;
}

function setRuntimeWordsForLookup(words) {
  runtimeWordsForLookup = Array.isArray(words) ? words : [];
}

function getRuntimeWordsForLookup() {
  return Array.isArray(runtimeWordsForLookup) ? runtimeWordsForLookup : [];
}

function normalizeRomanSyllables(romanInput) {
  const cleaned = String(romanInput || "")
    .replace(/[，。！？、,.!?/:"'“”‘’]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  return cleaned ? cleaned.split(" ") : [];
}

function isAsciiWordToken(token) {
  return /^[A-Za-z0-9]+$/.test(String(token || ""));
}

function tokenCharCountForRoman(token) {
  if (isAsciiWordToken(token)) return 1;
  return Array.from(String(token || "")).length;
}

function inferTokenRomanMapFromSentence(hanziInput, romanInput) {
  const map = Object.create(null);
  const tokens = tokenizeSentence(hanziInput).filter((token) => !isPunctuation(token));
  const syllables = normalizeRomanSyllables(romanInput);
  if (!tokens.length || !syllables.length) return map;

  let cursor = 0;
  tokens.forEach((token) => {
    if (cursor >= syllables.length) return;
    const take = tokenCharCountForRoman(token);
    const slice = syllables.slice(cursor, cursor + take);
    if (!slice.length) return;
    const roman = cleanLiteral(slice.join(" "));
    if (roman) map[normalizeHanzi(token)] = roman;
    cursor += take;
  });
  return map;
}

function refreshAutoTokenJyutpingMap() {
  if (!AUTO_TOKEN_JYUTPING || typeof AUTO_TOKEN_JYUTPING !== "object") {
    AUTO_TOKEN_JYUTPING = Object.create(null);
  }
  Object.keys(AUTO_TOKEN_JYUTPING).forEach((key) => delete AUTO_TOKEN_JYUTPING[key]);

  const sources = [];
  const words = state.content?.words || [];
  words.forEach((word) => {
    if (!word?.hanzi || !word?.jyutping || word.jyutping === "to-confirm") return;
    AUTO_TOKEN_JYUTPING[normalizeHanzi(word.hanzi)] = cleanLiteral(word.jyutping);
  });

  sources.push(...(state.content?.patterns || []));
  sources.push(...(state.content?.quiz || []));
  MINI_STORY_LIBRARY.forEach((story) => {
    (story?.lines || []).forEach((line) => sources.push(line));
  });

  sources.forEach((entry) => {
    const hanzi = String(entry?.hanzi || "").trim();
    const roman = String(entry?.jyutping || "").trim();
    if (!hanzi || !roman) return;
    const inferred = inferTokenRomanMapFromSentence(hanzi, roman);
    Object.keys(inferred).forEach((token) => {
      if (!AUTO_TOKEN_JYUTPING[token]) AUTO_TOKEN_JYUTPING[token] = inferred[token];
    });
  });
}

function rebuildSupplementalSearchWords() {
  const baseWords = state.content?.words || [];
  const known = new Set(baseWords.map((w) => normalizeHanzi(w.hanzi)).filter(Boolean));
  const seen = new Set();
  const out = [];
  const sources = []
    .concat(state.content?.patterns || [])
    .concat(state.content?.quiz || []);
  MINI_STORY_LIBRARY.forEach((story) => {
    (story?.lines || []).forEach((line) => sources.push(line));
  });

  sources.forEach((sentence) => {
    const tokens = tokenizeSentence(sentence?.hanzi || "");
    tokens.forEach((token) => {
      const key = normalizeHanzi(token);
      if (!key || isPunctuation(token) || isAsciiWordToken(token) || known.has(key) || seen.has(key)) return;
      const roman = jyutpingForToken(token);
      const meaning = literalForToken(token);
      if ((!roman || roman === token || roman === "to-confirm") && (!meaning || meaning === token)) return;
      out.push({
        id: `sup_${out.length + 1}`,
        hanzi: token,
        jyutping: roman && roman !== token ? roman : "",
        english: meaning && meaning !== token ? meaning : "word",
        category: "extra"
      });
      seen.add(key);
      if (out.length >= 300) return;
    });
  });
  state.supplementalSearchWords = out;
}

function enrichWordCoverage() {
  let changed = false;
  (state.content?.words || []).forEach((word) => {
    const key = normalizeHanzi(word.hanzi);
    if (!key) return;
    if (isMissingJyutping(word.jyutping) || word.jyutping === "to-confirm") {
      const roman = jyutpingForToken(key);
      if (roman && roman !== key && roman !== "to-confirm") {
        word.jyutping = roman;
        changed = true;
      }
    }
    if (isMissingMeaning(word.english)) {
      const meaning = literalForToken(key);
      if (meaning && meaning !== key) {
        word.english = meaning;
        changed = true;
      }
    }
  });
  if (changed) saveJson(STORAGE_KEYS.content, state.content);
}

function refreshLexiconCoverage() {
  setRuntimeWordsForLookup(state.content?.words || []);
  invalidateTokenizerVocabularyCache();
  refreshAutoTokenJyutpingMap();
  enrichWordCoverage();
  rebuildSupplementalSearchWords();
}

function initializeApp() {
  state.prefs.questionTheme = normalizeQuestionType(state.prefs.questionTheme);
  let prefsChanged = false;
  if (typeof state.prefs.miniStoryShowJyutping !== "boolean") {
    state.prefs.miniStoryShowJyutping = true;
    prefsChanged = true;
  }
  if (typeof state.prefs.miniStoryShowEnglish !== "boolean") {
    state.prefs.miniStoryShowEnglish = true;
    prefsChanged = true;
  }
  if (typeof state.prefs.miniStoryLens !== "boolean") {
    state.prefs.miniStoryLens = true;
    prefsChanged = true;
  }
  const consent = normalizeAnalyticsConsent(state.prefs.analyticsConsent);
  if (state.prefs.analyticsConsent !== consent) {
    state.prefs.analyticsConsent = consent;
    prefsChanged = true;
  }
  if (prefsChanged) saveJson(STORAGE_KEYS.prefs, state.prefs);
  configureBottomMenu();
  bindUI();
  ensureDailyGameState();
  syncControlValues();
  renderAppTitle();
  initVoiceControls();
  applyTheme(state.prefs.uiTheme || "classic");
  setControlsCollapsed(!!state.prefs.controlsCollapsed);
  applyVisibilityPrefs();
  setControlsMode("words");
  rollWord();
  rollPattern();
  rollQuiz();
  rollQuestion();
  rollTonePair();
  rollExercise();
  renderStoryOfDay();
  renderMiniStory();
  refreshStats();
  renderKnownList();
  switchSearchTab(state.searchTab || "standard");
  refreshGameUI();
  registerServiceWorker();
  initSoftLayoutTransitions();
  maybeShowAnalyticsConsentModal();
  setTimeout(() => {
    try {
      refreshLexiconCoverage();
      if (state.currentWord) renderWordCard();
      renderMiniStory();
      if (els.searchInput && String(els.searchInput.value || "").trim()) runWordSearch();
    } catch (err) {
      console.warn("Lexicon refresh skipped:", err);
    }
  }, 0);
}

function bindUI() {
  els.tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      if (!tab.dataset.tab) return;
      switchTab(tab.dataset.tab);
    });
  });
  els.bottomTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      if (!tab.dataset.bottomTab) return;
      switchTab(tab.dataset.bottomTab);
    });
  });
  if (els.openUserPanel) {
    els.openUserPanel.addEventListener("click", () => openUserSidePanel());
  }
  if (els.closeUserPanel) {
    els.closeUserPanel.addEventListener("click", () => closeUserSidePanel());
  }
  if (els.closeUserPanelBackdrop) {
    els.closeUserPanelBackdrop.addEventListener("click", () => closeUserSidePanel());
  }
  if (els.openSettingsFromUser && els.settingsModal) {
    els.openSettingsFromUser.addEventListener("click", () => {
      closeUserSidePanel();
      syncControlValues();
      openModalAnimated(els.settingsModal);
    });
  }
  if (els.openContentFromUser) {
    els.openContentFromUser.addEventListener("click", () => {
      closeUserSidePanel();
      switchTab("settings");
    });
  }
  if (els.userLanguageMode) {
    els.userLanguageMode.addEventListener("change", () => {
      const nextMode = normalizeLanguageMode(els.userLanguageMode.value);
      state.prefs.languageMode = nextMode;
      if (els.languageMode) els.languageMode.value = nextMode;
      saveJson(STORAGE_KEYS.prefs, state.prefs);
      applyVisibilityPrefs();
      renderAppTitle();
      renderWordCard();
      renderPatternSentence();
      renderQuizGrammar();
      renderQuestionSentence();
      renderTonePair();
      renderKnownList();
      renderStoryOfDay();
      if (els.searchInput && String(els.searchInput.value || "").trim()) runWordSearch();
      else renderSearchHint();
    });
  }
  if (els.changeEmailBtn && els.userPanelMsg) {
    els.changeEmailBtn.addEventListener("click", () => {
      els.userPanelMsg.textContent = "Email change/update requires backend auth. We can enable it in next phase.";
    });
  }
  if (els.upgradeAccountBtn && els.userPanelMsg) {
    els.upgradeAccountBtn.addEventListener("click", () => {
      els.userPanelMsg.textContent = "Upgrade flow requires store/backend billing setup. We can wire it next phase.";
    });
  }
  if (els.changePasswordBtn && els.userPanelMsg) {
    els.changePasswordBtn.addEventListener("click", () => {
      els.userPanelMsg.textContent = "Password change/reset requires backend auth. We can enable it in next phase.";
    });
  }
  if (els.logOutBtn && els.userPanelMsg) {
    els.logOutBtn.addEventListener("click", () => {
      els.userPanelMsg.textContent = "Logged off (demo mode).";
      closeUserSidePanel();
    });
  }
  if (els.clearCacheBtn && els.userPanelMsg) {
    els.clearCacheBtn.addEventListener("click", async () => {
      try {
        els.userPanelMsg.textContent = "Clearing app cache...";
        if ("caches" in window) {
          const cacheKeys = await caches.keys();
          await Promise.all(cacheKeys.map((key) => caches.delete(key)));
        }
        if ("serviceWorker" in navigator) {
          const regs = await navigator.serviceWorker.getRegistrations();
          await Promise.all(regs.map((reg) => reg.unregister().catch(() => false)));
        }
        els.userPanelMsg.textContent = "Cache cleared. Reloading...";
        window.setTimeout(() => window.location.reload(), 240);
      } catch {
        els.userPanelMsg.textContent = "Could not clear cache. Please refresh once manually.";
      }
    });
  }
  if (els.openTermsBtn) {
    els.openTermsBtn.addEventListener("click", () => {
      closeUserSidePanel();
      window.setTimeout(() => showInfoModal("terms"), 170);
    });
  }
  if (els.openAboutBtn) {
    els.openAboutBtn.addEventListener("click", () => {
      closeUserSidePanel();
      window.setTimeout(() => showInfoModal("about"), 170);
    });
  }
  if (els.closeInfoModal && els.infoModal) {
    els.closeInfoModal.addEventListener("click", () => closeModalAnimated(els.infoModal));
  }
  if (els.infoModal) {
    els.infoModal.addEventListener("click", (event) => {
      if (event.target === els.infoModal) closeModalAnimated(els.infoModal);
    });
  }
  els.storyTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const nextTab = String(tab.dataset.storyTab || "").trim();
      if (!nextTab) return;
      switchStoryTab(nextTab);
    });
  });
  els.bookTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const nextTab = String(tab.dataset.bookTab || "").trim();
      if (!nextTab) return;
      switchBookTab(nextTab);
    });
  });
  els.bookPartTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const nextTab = String(tab.dataset.bookTab || "").trim();
      if (!nextTab) return;
      switchBookTab(nextTab);
    });
  });
  els.bookToneTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const nextTab = String(tab.dataset.bookToneTab || "").trim();
      if (!nextTab) return;
      switchBookToneTab(nextTab);
    });
  });
  els.bookWritingTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const nextTab = String(tab.dataset.bookWritingTab || "").trim();
      if (!nextTab) return;
      switchBookWritingTab(nextTab);
    });
  });
  els.searchTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const nextTab = String(tab.dataset.searchTab || "").trim();
      if (!nextTab) return;
      switchSearchTab(nextTab);
    });
  });
  if (els.playStoryAudio) {
    els.playStoryAudio.addEventListener("click", () => {
      if (!state.currentStory || !Array.isArray(state.currentStory.lines)) return;
      const speechText = state.currentStory.lines.map((line) => line.hanzi).filter(Boolean).join("。");
      if (speechText) {
        incrementMission("listens", 1);
        speak(speechText);
      }
    });
  }
  if (els.storyOfDayLines) {
    els.storyOfDayLines.addEventListener("click", (event) => {
      const tokenEl = event.target?.closest?.(".tok-clickable");
      if (!tokenEl) return;
      const lineWrap = tokenEl.closest("[data-story-line]");
      const lineIndex = Number(lineWrap?.dataset.storyLine);
      const tokenIndex = Number(tokenEl.dataset.idx);
      if (!Number.isFinite(lineIndex) || !Number.isFinite(tokenIndex)) return;
      const analysis = state.currentStoryAnalyses?.[lineIndex];
      if (!analysis) return;
      openGrammarInfoFromAnalysis(analysis, tokenIndex);
    });
  }
  if (els.miniStorySelect) {
    els.miniStorySelect.addEventListener("change", () => {
      stopMiniStoryPlayback();
      renderMiniStory();
    });
  }
  if (els.playMiniStoryAudio) {
    els.playMiniStoryAudio.addEventListener("click", () => {
      toggleMiniStoryPlayback();
    });
  }
  if (els.toggleMiniStoryJyutping) {
    els.toggleMiniStoryJyutping.addEventListener("click", () => {
      state.prefs.miniStoryShowJyutping = !state.prefs.miniStoryShowJyutping;
      saveJson(STORAGE_KEYS.prefs, state.prefs);
      renderMiniStory();
    });
  }
  if (els.toggleMiniStoryEnglish) {
    els.toggleMiniStoryEnglish.addEventListener("click", () => {
      state.prefs.miniStoryShowEnglish = !state.prefs.miniStoryShowEnglish;
      saveJson(STORAGE_KEYS.prefs, state.prefs);
      applyMiniStoryVisibility();
    });
  }
  if (els.toggleMiniStoryLens) {
    els.toggleMiniStoryLens.addEventListener("click", () => {
      state.prefs.miniStoryLens = !state.prefs.miniStoryLens;
      saveJson(STORAGE_KEYS.prefs, state.prefs);
      renderMiniStory();
    });
  }
  if (els.miniStoryLines) {
    els.miniStoryLines.addEventListener("click", (event) => {
      const tokenEl = event.target?.closest?.(".tok-clickable");
      if (!tokenEl) return;
      const lineWrap = tokenEl.closest("[data-mini-story-line]");
      const lineIndex = Number(lineWrap?.dataset.miniStoryLine);
      const tokenIndex = Number(tokenEl.dataset.idx);
      if (!Number.isFinite(lineIndex) || !Number.isFinite(tokenIndex)) return;
      const analysis = state.currentMiniStoryAnalyses?.[lineIndex];
      if (!analysis) return;
      openGrammarInfoFromAnalysis(analysis, tokenIndex);
    });
  }
  if (els.openFunLoop && els.funModal) {
    els.openFunLoop.addEventListener("click", () => {
      ensureDailyGameState();
      refreshGameUI();
      openModalAnimated(els.funModal);
    });
  }
  if (els.closeFunLoop && els.funModal) {
    els.closeFunLoop.addEventListener("click", () => closeModalAnimated(els.funModal));
  }
  if (els.funModal) {
    els.funModal.addEventListener("click", (event) => {
      if (event.target === els.funModal) closeModalAnimated(els.funModal);
    });
  }
  if (els.openSettings && els.settingsModal) {
    els.openSettings.addEventListener("click", () => {
      syncControlValues();
      openModalAnimated(els.settingsModal);
    });
  }
  if (els.closeSettings && els.settingsModal) {
    els.closeSettings.addEventListener("click", () => closeModalAnimated(els.settingsModal));
  }
  if (els.settingsModal) {
    els.settingsModal.addEventListener("click", (event) => {
      if (event.target === els.settingsModal) closeModalAnimated(els.settingsModal);
    });
  }
  if (els.acceptAnalyticsBtn) {
    els.acceptAnalyticsBtn.addEventListener("click", () => {
      setAnalyticsConsent("accepted", { closePrompt: true });
    });
  }
  if (els.declineAnalyticsBtn) {
    els.declineAnalyticsBtn.addEventListener("click", () => {
      setAnalyticsConsent("declined", { closePrompt: true });
    });
  }
  if (els.analyticsConsentSelect) {
    els.analyticsConsentSelect.addEventListener("change", () => {
      setAnalyticsConsent(els.analyticsConsentSelect.value, { closePrompt: false });
    });
  }
  if (els.closeGrammarModal && els.grammarModal) {
    els.closeGrammarModal.addEventListener("click", () => closeModalAnimated(els.grammarModal));
  }
  if (els.grammarModal) {
    els.grammarModal.addEventListener("click", (event) => {
      if (event.target === els.grammarModal) closeModalAnimated(els.grammarModal);
    });
  }
  if (els.runSearch) {
    els.runSearch.addEventListener("click", () => {
      runWordSearch();
    });
  }
  if (els.searchInput) {
    els.searchInput.addEventListener("keydown", (event) => {
      if (event.key !== "Enter") return;
      event.preventDefault();
      runWordSearch();
    });
  }
  if (els.clearSearch) {
    els.clearSearch.addEventListener("click", () => {
      if (els.searchInput) els.searchInput.value = "";
      renderSearchHint();
      if (els.searchInput) els.searchInput.focus();
    });
  }
  if (els.searchResults) {
    els.searchResults.addEventListener("click", (event) => {
      const playBtn = event.target?.closest?.(".search-play-btn");
      if (!playBtn) return;
      const wordId = String(playBtn.dataset.wordId || "").trim();
      if (!wordId) return;
      const targetWord = (state.content?.words || []).find((w) => String(w.id) === wordId);
      if (!targetWord) return;
      incrementMission("listens", 1);
      speak(localizedSpeechText(targetWord));
    });
  }

  byId("nextWord").addEventListener("click", () => {
    markReviewed();
    rollWord();
  });

  byId("playWordAudio").addEventListener("click", () => {
    if (state.currentWord) speak(localizedSpeechText(state.currentWord));
  });

  els.revealExample.addEventListener("click", () => {
    if (els.wordExample.textContent) {
      els.wordExample.textContent = "";
      els.revealExample.textContent = "Show example";
      return;
    }
    const exampleHanzi = buildWordExample(state.currentWord);
    const exampleEnglish = buildWordExampleEnglish(state.currentWord, exampleHanzi);
    els.wordExample.textContent = `${exampleHanzi} | ${exampleEnglish}`;
    els.revealExample.textContent = "Hide example";
  });

  byId("markKnown").addEventListener("click", () => {
    if (!state.currentWord) return;
    state.known.add(state.currentWord.id);
    saveJson(STORAGE_KEYS.known, [...state.known]);
    markReviewed();
    refreshStats();
    renderKnownList();
    rollWord();
  });

  if (els.knownList) {
    els.knownList.addEventListener("click", (event) => {
      const btn = event.target?.closest?.(".known-remove-btn");
      if (!btn) return;
      const wordId = String(btn.dataset.wordId || "").trim();
      if (!wordId || !state.known.has(wordId)) return;
      state.known.delete(wordId);
      saveJson(STORAGE_KEYS.known, [...state.known]);
      refreshStats();
      renderKnownList();
    });
  }

  if (els.clearKnownList) {
    els.clearKnownList.addEventListener("click", () => {
      if (!state.known.size) return;
      state.known.clear();
      saveJson(STORAGE_KEYS.known, [...state.known]);
      refreshStats();
      renderKnownList();
    });
  }

  if (els.toggleKnownList && els.knownListWrap) {
    els.toggleKnownList.addEventListener("click", () => {
      const hidden = els.knownListWrap.classList.contains("hidden");
      if (hidden) {
        renderKnownList();
        openKnownListAnimated();
        els.toggleKnownList.textContent = "Hide known list";
      } else {
        closeKnownListAnimated();
        els.toggleKnownList.textContent = "Show known list";
      }
    });
  }

  byId("newPattern").addEventListener("click", rollPattern);
  if (els.patternHanzi) {
    els.patternHanzi.addEventListener("click", (event) => {
      if (!state.prefs.showGrammarLens) return;
      const target = event.target?.closest?.(".tok-clickable");
      if (!target) return;
      const idx = Number(target.dataset.idx);
      if (!Number.isFinite(idx)) return;
      openPatternGrammarInfo(idx);
    });
  }
  if (els.quizHanzi) {
    els.quizHanzi.addEventListener("click", (event) => {
      if (!state.quizDisplay.lens) return;
      const target = event.target?.closest?.(".tok-clickable");
      if (!target) return;
      const idx = Number(target.dataset.idx);
      if (!Number.isFinite(idx)) return;
      openGrammarInfoFromAnalysis(state.currentQuizAnalysis, idx);
    });
  }
  if (els.questionHanzi) {
    els.questionHanzi.addEventListener("click", (event) => {
      if (!state.prefs.showGrammarLens) return;
      const target = event.target?.closest?.(".tok-clickable");
      if (!target) return;
      const idx = Number(target.dataset.idx);
      if (!Number.isFinite(idx)) return;
      openGrammarInfoFromAnalysis(state.currentQuestionAnalysis, idx);
    });
  }

  byId("playPatternAudio").addEventListener("click", () => {
    const built = buildPatternSentence();
    incrementMission("patterns", 1);
    speak(built.speechText || built.analysisHanzi || built.hanzi);
  });

  byId("playQuizAudio").addEventListener("click", () => {
    if (state.currentQuiz) {
      incrementMission("listens", 1);
      speak(localizedSpeechText(state.currentQuiz));
    }
  });

  const showQuizTextBtn = byId("showQuizText");
  if (showQuizTextBtn) {
    showQuizTextBtn.addEventListener("click", () => {
      state.quizDisplay.hanzi = !state.quizDisplay.hanzi;
      renderQuizGrammar();
      applyQuizVisibility();
    });
  }

  els.toggleWordJyutping.addEventListener("click", () => togglePref("showJyutping"));
  els.toggleWordEnglish.addEventListener("click", () => togglePref("showEnglish"));
  els.togglePatternJyutping.addEventListener("click", () => {
    togglePref("showJyutping");
    renderPatternSentence();
  });
  els.togglePatternEnglish.addEventListener("click", () => togglePref("showEnglish"));
  if (els.toggleQuizJyutping) {
    els.toggleQuizJyutping.addEventListener("click", () => {
      state.quizDisplay.jyutping = !state.quizDisplay.jyutping;
      renderQuizGrammar();
      applyQuizVisibility();
    });
  }
  if (els.toggleQuizEnglish) {
    els.toggleQuizEnglish.addEventListener("click", () => {
      state.quizDisplay.english = !state.quizDisplay.english;
      applyQuizVisibility();
    });
  }
  if (els.toggleQuizGrammarLens) {
    els.toggleQuizGrammarLens.addEventListener("click", () => {
      state.quizDisplay.lens = !state.quizDisplay.lens;
      renderQuizGrammar();
      applyQuizVisibility();
    });
  }
  if (els.toggleToneJyutping) {
    els.toggleToneJyutping.addEventListener("click", () => {
      state.prefs.toneShowJyutping = !state.prefs.toneShowJyutping;
      saveJson(STORAGE_KEYS.prefs, state.prefs);
      applyToneVisibility();
    });
  }
  if (els.toggleToneEnglish) {
    els.toggleToneEnglish.addEventListener("click", () => {
      state.prefs.toneShowEnglish = !state.prefs.toneShowEnglish;
      saveJson(STORAGE_KEYS.prefs, state.prefs);
      applyToneVisibility();
    });
  }
  if (els.toneExerciseMode) {
    els.toneExerciseMode.addEventListener("change", () => {
      markControlsDirty();
    });
  }

  byId("nextQuiz").addEventListener("click", rollQuiz);
  if (byId("nextQuestion")) byId("nextQuestion").addEventListener("click", rollQuestion);
  if (byId("playQuestionAudio")) {
    byId("playQuestionAudio").addEventListener("click", () => {
      if (!state.currentQuestion) return;
      incrementMission("listens", 1);
      speak(localizedSpeechText(state.currentQuestion));
    });
  }
  if (els.questionLevel) {
    els.questionLevel.addEventListener("change", () => {
      markControlsDirty();
    });
  }
  if (els.questionTense) {
    els.questionTense.addEventListener("change", () => {
      markControlsDirty();
    });
  }
  if (els.questionTheme) {
    els.questionTheme.addEventListener("change", () => {
      markControlsDirty();
    });
  }
  if (els.toggleQuestionJyutping) {
    els.toggleQuestionJyutping.addEventListener("click", () => togglePref("showJyutping"));
  }
  if (els.toggleQuestionEnglish) {
    els.toggleQuestionEnglish.addEventListener("click", () => togglePref("showEnglish"));
  }
  if (byId("nextTone")) byId("nextTone").addEventListener("click", rollTonePair);
  if (byId("playToneA")) byId("playToneA").addEventListener("click", () => { incrementMission("listens", 1); playToneClip("a"); });
  if (byId("playToneB")) byId("playToneB").addEventListener("click", () => { incrementMission("listens", 1); playToneClip("b"); });
  if (byId("playToneRandom")) byId("playToneRandom").addEventListener("click", () => { incrementMission("listens", 1); playToneClip("random"); });
  if (byId("nextExercise")) byId("nextExercise").addEventListener("click", rollExercise);
  if (byId("playExerciseAudio")) {
    byId("playExerciseAudio").addEventListener("click", () => {
      if (!state.currentExercise?.sentence) return;
      incrementMission("listens", 1);
      speak(localizedSpeechText(state.currentExercise.sentence));
    });
  }
  if (byId("clearExercise")) byId("clearExercise").addEventListener("click", clearExerciseSelection);
  if (byId("checkExercise")) byId("checkExercise").addEventListener("click", checkExerciseAnswer);
  if (els.toggleFixMode) {
    els.toggleFixMode.addEventListener("click", () => {
      state.game.fixMode = !state.game.fixMode;
      saveGameState();
      refreshGameUI();
      rollQuiz();
      rollTonePair();
    });
  }
  if (els.startBoss) els.startBoss.addEventListener("click", startBossChallenge);
  if (els.bossSkip) {
    els.bossSkip.addEventListener("click", () => {
      if (!state.game.boss.active) return;
      if (bossAdvanceTimer) {
        clearTimeout(bossAdvanceTimer);
        bossAdvanceTimer = null;
      }
      queueBossAdvance(0);
    });
  }
  if (els.bossPlayAudio) {
    els.bossPlayAudio.addEventListener("click", () => {
      const q = state.game.boss.current;
      if (!q) return;
      if (q.type === "hanzi") {
        if (els.funFeedback) els.funFeedback.textContent = "Hanzi step has no audio. Choose the meaning.";
        return;
      }
      incrementMission("listens", 1);
      if (q.type === "quiz") speak(localizedSpeechText(q.sentence));
      if (q.type === "tone") speak(localizedSpeechText(q.item));
    });
  }

  els.globalLevel.addEventListener("change", markControlsDirty);
  els.globalTense.addEventListener("change", markControlsDirty);
  if (els.wordFilter) els.wordFilter.addEventListener("change", markControlsDirty);
  els.globalTheme.addEventListener("change", markControlsDirty);
  if (els.themeStyle) {
    els.themeStyle.addEventListener("change", () => {
      state.prefs.uiTheme = els.themeStyle.value || "classic";
      saveJson(STORAGE_KEYS.prefs, state.prefs);
      applyTheme(state.prefs.uiTheme);
    });
  }
  if (els.languageMode) {
    els.languageMode.addEventListener("change", () => {
      state.prefs.languageMode = normalizeLanguageMode(els.languageMode.value);
      saveJson(STORAGE_KEYS.prefs, state.prefs);
      renderAppTitle();
      renderWordCard();
      renderPatternSentence();
      renderQuizGrammar();
      renderQuestionSentence();
      renderTonePair();
      rollExercise();
      renderKnownList();
      if (els.searchInput && String(els.searchInput.value || "").trim()) runWordSearch();
      else renderSearchHint();
    });
  }
  updateAnalyticsConsentUI();
  els.audioVoice.addEventListener("change", () => {
    state.prefs.voiceURI = els.audioVoice.value || "auto";
    saveJson(STORAGE_KEYS.prefs, state.prefs);
  });
  els.audioRate.addEventListener("input", () => {
    state.prefs.voiceRate = Number(els.audioRate.value) || 0.9;
    saveJson(STORAGE_KEYS.prefs, state.prefs);
    els.audioRateValue.textContent = `${state.prefs.voiceRate.toFixed(2)}x`;
  });
  if (els.audioNoiseOn) {
    els.audioNoiseOn.addEventListener("change", () => {
      state.prefs.audioNoiseOn = els.audioNoiseOn.value === "on";
      saveJson(STORAGE_KEYS.prefs, state.prefs);
      if (!state.prefs.audioNoiseOn) stopSpeechNoise();
    });
  }
  if (els.audioNoiseType) {
    els.audioNoiseType.addEventListener("change", () => {
      state.prefs.audioNoiseType = els.audioNoiseType.value || "white";
      saveJson(STORAGE_KEYS.prefs, state.prefs);
      if (speechNoise.source || speechNoise.ambientEl) {
        startSpeechNoise();
      }
    });
  }
  if (els.audioNoiseLevel) {
    els.audioNoiseLevel.addEventListener("input", () => {
      state.prefs.audioNoiseLevel = Number(els.audioNoiseLevel.value) || 0.25;
      saveJson(STORAGE_KEYS.prefs, state.prefs);
      if (els.audioNoiseValue) els.audioNoiseValue.textContent = state.prefs.audioNoiseLevel.toFixed(2);
      if (speechNoise.gain) speechNoise.gain.gain.value = computeNoiseGain();
      if (speechNoise.ambientEl) {
        speechNoise.ambientEl.volume = Math.max(0.03, Math.min(0.95, computeNoiseGain() / 2));
      }
    });
  }
  els.testVoice.addEventListener("click", () => {
    const mode = normalizeLanguageMode(state.prefs.languageMode);
    const sample = mode === "mandarin"
      ? "你好，我们现在开始练习中文。"
      : "你好，我哋而家開始練習廣東話。";
    speak(sample);
  });
  els.applyControls.addEventListener("click", applyGlobalControls);
  if (els.toggleControlsCard) {
    els.toggleControlsCard.addEventListener("click", () => {
      const next = !state.prefs.controlsCollapsed;
      state.prefs.controlsCollapsed = next;
      saveJson(STORAGE_KEYS.prefs, state.prefs);
      setControlsCollapsed(next);
    });
  }
  els.toggleGrammarLens.addEventListener("click", toggleGrammarLensState);
  if (els.toggleQuestionGrammarLens) {
    els.toggleQuestionGrammarLens.addEventListener("click", toggleGrammarLensState);
  }

  byId("importFile").addEventListener("change", importDataFile);

  byId("exportData").addEventListener("click", () => {
    const blob = new Blob([JSON.stringify(state.content, null, 2)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "cantonese-content.json";
    a.click();
    URL.revokeObjectURL(a.href);
  });

  byId("resetData").addEventListener("click", () => {
    localStorage.removeItem(STORAGE_KEYS.content);
    state.content = normalizeContent(deepClone(DEFAULT_DATA));
    setRuntimeWordsForLookup(state.content?.words || []);
    refreshLexiconCoverage();
    els.contentMessage.textContent = "Reset complete. Built-in words loaded.";
    resetRotations();
    rollWord();
    rollPattern();
    rollQuiz();
    rollQuestion();
    rollTonePair();
    rollExercise();
    refreshStats();
    renderKnownList();
    if (els.searchInput && String(els.searchInput.value || "").trim()) runWordSearch();
    else renderSearchHint();
  });
}

function markControlsDirty() {
  applyGlobalControls();
}

function applyGlobalControls() {
  const prevLevel = normalizePracticeLevel(state.prefs.level);
  const prevTense = state.prefs.tense || "mixed";
  const prevWordFilter = state.prefs.wordFilter || "mixed";
  const prevTheme = state.prefs.theme || "mixed";
  const prevLanguageMode = normalizeLanguageMode(state.prefs.languageMode);
  const prevToneMode = state.prefs.toneExerciseMode || "word";
  const prevQLevel = state.prefs.questionLevel || "basic";
  const prevQTense = state.prefs.questionTense || "mixed";
  const prevQTheme = normalizeQuestionType(state.prefs.questionTheme);
  state.prefs.level = normalizePracticeLevel(els.globalLevel.value);
  state.prefs.tense = els.globalTense.value;
  state.prefs.wordFilter = els.wordFilter?.value || "mixed";
  state.prefs.theme = els.globalTheme.value;
  state.prefs.questionLevel = els.questionLevel?.value || "basic";
  state.prefs.questionTense = els.questionTense?.value || "mixed";
  state.prefs.questionTheme = normalizeQuestionType(els.questionTheme?.value || state.prefs.questionTheme);
  state.prefs.uiTheme = els.themeStyle?.value || "classic";
  state.prefs.languageMode = normalizeLanguageMode(els.languageMode?.value || state.prefs.languageMode);
  state.prefs.toneExerciseMode = els.toneExerciseMode?.value || "word";
  state.prefs.audioNoiseOn = (els.audioNoiseOn?.value || "off") === "on";
  state.prefs.audioNoiseLevel = Number(els.audioNoiseLevel?.value || 0.25) || 0.25;
  state.prefs.audioNoiseType = els.audioNoiseType?.value || "white";
  saveJson(STORAGE_KEYS.prefs, state.prefs);
  applyTheme(state.prefs.uiTheme);
  const coreChanged = prevLevel !== state.prefs.level
    || prevTense !== state.prefs.tense
    || prevWordFilter !== state.prefs.wordFilter
    || prevTheme !== state.prefs.theme;
  const languageModeChanged = prevLanguageMode !== normalizeLanguageMode(state.prefs.languageMode);
  const toneModeChanged = prevToneMode !== state.prefs.toneExerciseMode;
  const questionChanged = prevQLevel !== state.prefs.questionLevel
    || prevQTense !== state.prefs.questionTense
    || prevQTheme !== state.prefs.questionTheme;

  if (coreChanged) {
    resetRotations();
    rollWord();
    rollPattern();
    rollQuiz();
    rollTonePair();
    rollQuestion();
    rollExercise();
  } else if (toneModeChanged) {
    state.rotation.tonePairs = [];
    rollTonePair();
  }
  if (!coreChanged && questionChanged) {
    state.rotation.questionSentences = [];
    rollQuestion();
  }
  if (!coreChanged && !questionChanged && !toneModeChanged && languageModeChanged) {
    renderWordCard();
    renderPatternSentence();
    renderQuizGrammar();
    renderQuestionSentence();
    renderTonePair();
    rollExercise();
    renderKnownList();
    if (els.searchInput && String(els.searchInput.value || "").trim()) runWordSearch();
    else renderSearchHint();
  }
}

function switchTab(tabName) {
  const targetPanelId = `panel-${tabName}`;
  const panelExists = els.panels.some((panel) => panel.id === targetPanelId);
  if (!panelExists) return;
  if (els.userPanel && !els.userPanel.classList.contains("hidden")) {
    closeUserSidePanel(160);
  }
  els.tabs.forEach((tab) => tab.classList.toggle("is-active", tab.dataset.tab === tabName));
  syncBottomTabState(tabName);
  els.panels.forEach((panel) => panel.classList.toggle("is-active", panel.id === targetPanelId));
  document.body.classList.toggle("stories-mode", tabName === "stories");
  document.body.classList.toggle("book-mode", tabName === "book");
  document.body.classList.toggle("search-mode", tabName === "search");
  document.body.classList.toggle("settings-mode", tabName === "settings");
  setControlsMode(tabName);
  if (tabName !== "stories") {
    stopMiniStoryPlayback();
  }
  if (tabName === "stories") {
    switchStoryTab(state.storyTab || "dialogs");
  }
  if (tabName === "book") {
    switchBookTab(state.bookTab || "grammar");
  }
  if (tabName === "search") {
    if (!els.searchResults || !String(els.searchResults.innerHTML || "").trim()) {
      renderSearchHint();
    }
    if (els.searchInput) {
      setTimeout(() => {
        els.searchInput.focus();
      }, 0);
    }
  }
  if (tabName === "patterns" && state.currentSentence) {
    renderPatternSentence();
  }
  if (tabName === "exercises") {
    if (state.currentExercise) renderExercise();
    else rollExercise();
  }
}

function syncBottomTabState(tabName) {
  let activeGroup = "learn";
  if (tabName === "book") activeGroup = "book";
  if (tabName === "stories") activeGroup = "stories";
  if (tabName === "search") activeGroup = "search";
  if (tabName === "settings") activeGroup = "home";
  els.bottomTabs.forEach((tab) => {
    const group = String(tab.dataset.bottomGroup || tab.dataset.bottomTab || "").trim();
    if (!group) {
      tab.classList.remove("is-active");
      return;
    }
    tab.classList.toggle("is-active", group === activeGroup);
  });
}

function configureBottomMenu() {
  const enabled = !!ENABLE_BOTTOM_MENU_V1;
  document.body.classList.toggle("bottom-nav-enabled", enabled);
  if (els.bottomNav) {
    els.bottomNav.classList.toggle("hidden", !enabled);
  }
  syncBottomTabState("words");
}

function switchStoryTab(tabName) {
  const safeName = String(tabName || "").trim() || "dialogs";
  const panelId = `stories-${safeName}`;
  const hasPanel = els.storyPanels.some((panel) => panel.id === panelId);
  if (!hasPanel) return;
  state.storyTab = safeName;
  els.storyTabs.forEach((tab) => tab.classList.toggle("is-active", tab.dataset.storyTab === safeName));
  els.storyPanels.forEach((panel) => panel.classList.toggle("is-active", panel.id === panelId));
  if (safeName !== "dialogs") {
    stopMiniStoryPlayback();
  }
  if (safeName === "curiosities") {
    renderStoryOfDay();
  } else if (safeName === "dialogs") {
    renderMiniStory();
  }
}

function switchBookTab(tabName) {
  const safeName = String(tabName || "").trim() || "grammar";
  const panelId = `book-${safeName}`;
  const hasPanel = els.bookPanels.some((panel) => panel.id === panelId);
  if (!hasPanel) return;
  state.bookTab = safeName;
  const topActive = safeName === "grammar2" ? "grammar" : safeName;
  els.bookTabs.forEach((tab) => tab.classList.toggle("is-active", tab.dataset.bookTab === topActive));
  els.bookPartTabs.forEach((tab) => tab.classList.toggle("is-active", tab.dataset.bookTab === safeName));
  els.bookPanels.forEach((panel) => panel.classList.toggle("is-active", panel.id === panelId));
  if (safeName === "tones") {
    switchBookToneTab(state.bookToneTab || "tones");
  } else if (safeName === "writing") {
    switchBookWritingTab(state.bookWritingTab || "writing");
  }
}

function switchBookToneTab(tabName) {
  const safeName = String(tabName || "").trim() === "sounds" ? "sounds" : "tones";
  const panelId = `book-tone-${safeName}`;
  const hasPanel = els.bookTonePanels.some((panel) => panel.id === panelId);
  if (!hasPanel) return;
  state.bookToneTab = safeName;
  els.bookToneTabs.forEach((tab) => tab.classList.toggle("is-active", tab.dataset.bookToneTab === safeName));
  els.bookTonePanels.forEach((panel) => panel.classList.toggle("is-active", panel.id === panelId));
}

function switchBookWritingTab(tabName) {
  const safeName = String(tabName || "").trim() === "traditional" ? "traditional" : "writing";
  const panelId = `book-writing-${safeName}`;
  const hasPanel = els.bookWritingPanels.some((panel) => panel.id === panelId);
  if (!hasPanel) return;
  state.bookWritingTab = safeName;
  els.bookWritingTabs.forEach((tab) => tab.classList.toggle("is-active", tab.dataset.bookWritingTab === safeName));
  els.bookWritingPanels.forEach((panel) => panel.classList.toggle("is-active", panel.id === panelId));
}

function switchSearchTab(tabName) {
  const safeName = String(tabName || "").trim() === "slang" ? "slang" : "standard";
  state.searchTab = safeName;
  els.searchTabs.forEach((tab) => tab.classList.toggle("is-active", tab.dataset.searchTab === safeName));
  if (els.searchModeMeta) {
    els.searchModeMeta.textContent = safeName === "slang"
      ? "Cantonese slang and colloquial expressions."
      : "Standard Cantonese vocabulary search.";
  }
  if (els.searchInput && String(els.searchInput.value || "").trim()) runWordSearch();
  else renderSearchHint();
}

const MINI_STORY_LIBRARY = [
  {
    id: "fox_rabbit_easy",
    level: "easy",
    title: "Fox and Rabbit",
    lines: [
      {
        hanzi: "從前，有一隻狐狸住喺森林入面。佢好聰明，成日搵食物。有一隻兔仔住喺附近。兔仔好懶惰，唔鍾意工作，只想瞓覺同食野。",
        jyutping: "cong4 cin4, jau5 jat1 zek3 wu4 lei4 zyu6 hai2 sam1 lam4 jap6 min6. keoi5 hou2 cung1 ming4, sing4 jat6 wan2 sik6 mat6. jau5 jat1 zek3 tou3 zai2 zyu6 hai2 fu6 gan6. tou3 zai2 hou2 laan5 do6, m4 zung1 ji3 gung1 zok3, zi2 soeng2 fan3 gaau3 tung4 sik6 je5.",
        english: "Once upon a time, a fox lived in the forest. He was smart and always searched for food. A rabbit lived nearby. The rabbit was lazy and only wanted to sleep and eat."
      },
      {
        hanzi: "有一日，狐狸見到兔仔喺樹下瞓緊覺。狐狸諗：「呢隻兔仔好肥，好好食！」狐狸走過去，話：「兔仔，醒啦！森林有大party，大家一齊玩！」",
        jyutping: "jau5 jat1 jat6, wu4 lei4 gin3 dou2 tou3 zai2 hai2 syu6 haa5 fan3 gan2 gaau3. wu4 lei4 nam2: \"ni1 zek3 tou3 zai2 hou2 fei4, hou2 hou2 sik6!\" wu4 lei4 zau2 gwo3 heoi3, waa6: \"tou3 zai2, seng2 laa1! sam1 lam4 jau5 daai6 party, daai6 gaa1 jat1 cai4 waan2!\"",
        english: "One day, the fox saw the rabbit sleeping under a tree. He thought, \"This rabbit is fat and delicious!\" Then he said, \"Rabbit, wake up! There is a big party in the forest!\""
      },
      {
        hanzi: "兔仔醒咗，問：「party喺邊度？」狐狸話：「跟住我嚟啦！」兔仔跟狐狸走，但狐狸帶佢去一個洞。洞入面係狐狸嘅屋企。",
        jyutping: "tou3 zai2 seng2 zo2, man6: \"party hai2 bin1 dou6?\" wu4 lei4 waa6: \"gan1 zyu6 ngo5 lai4 laa1!\" tou3 zai2 gan1 wu4 lei4 zau2, daan6 wu4 lei4 daai3 keoi5 heoi3 jat1 go3 dung6. dung6 jap6 min6 hai6 wu4 lei4 ge3 uk1 kei5.",
        english: "The rabbit woke up and asked where the party was. The fox said, \"Follow me.\" The rabbit followed him into a cave, which was actually the fox's home."
      },
      {
        hanzi: "兔仔驚咗，話：「你想食我呀？」狐狸笑笑，話：「係呀，但如果你幫我做野，我唔食你。」兔仔諗諗，話：「好，我幫你。」",
        jyutping: "tou3 zai2 geng1 zo2, waa6: \"nei5 soeng2 sik6 ngo5 aa3?\" wu4 lei4 siu3 siu3, waa6: \"hai6 aa3, daan6 jyu4 gwo2 nei5 bong1 ngo5 zou6 je5, ngo5 m4 sik6 nei5.\" tou3 zai2 nam2 nam2, waa6: \"hou2, ngo5 bong1 nei5.\"",
        english: "The rabbit was scared and asked, \"Do you want to eat me?\" The fox said, \"Yes, but if you help me, I won't eat you.\" The rabbit agreed."
      },
      {
        hanzi: "從嗰日起，兔仔開始工作。佢幫狐狸搵蘋果、菜，同埋清潔屋企。狐狸教兔仔點樣快手搵食物。兔仔學到好多，唔再懶惰。",
        jyutping: "cong4 go2 jat6 hei2, tou3 zai2 hoi1 ci2 gung1 zok3. keoi5 bong1 wu4 lei4 wan2 ping4 gwo2, coi3, tung4 maai4 cing1 git3 uk1 kei5. wu4 lei4 gaau3 tou3 zai2 dim2 joeng2 faai3 sau2 wan2 sik6 mat6. tou3 zai2 hok6 dou3 hou2 do1, m4 zoi3 laan5 do6.",
        english: "From that day, the rabbit started working. He helped find apples and vegetables and cleaned the house. The fox taught him to find food quickly. The rabbit learned a lot and stopped being lazy."
      },
      {
        hanzi: "一日，森林有大風雨。兔仔嘅屋壞咗。狐狸話：「嚟我屋企住啦。」兔仔好開心，因為佢哋變咗朋友。",
        jyutping: "jat1 jat6, sam1 lam4 jau5 daai6 fung1 jyu5. tou3 zai2 ge3 uk1 waai6 zo2. wu4 lei4 waa6: \"lai4 ngo5 uk1 kei5 zyu6 laa1.\" tou3 zai2 hou2 hoi1 sam1, jan1 wai6 keoi5 dei6 bin3 zo2 pang4 jau5.",
        english: "One day, a big storm hit the forest and the rabbit's home broke. The fox said, \"Come live at my home.\" The rabbit was happy because they became friends."
      },
      {
        hanzi: "最後，狐狸同兔仔一齊生活。兔仔變得勤力，狐狸變得善良。大家快樂咁過日子。故事完。",
        jyutping: "zeoi3 hau6, wu4 lei4 tung4 tou3 zai2 jat1 cai4 sang1 wut6. tou3 zai2 bin3 dak1 kan4 lik6, wu4 lei4 bin3 dak1 sin6 loeng4. daai6 gaa1 faai3 lok6 gam2 gwo3 jat6 zi2. gu3 si6 jyun4.",
        english: "Finally, the fox and rabbit lived together. The rabbit became hardworking and the fox became kind. They lived happily ever after. The end."
      }
    ]
  },
  {
    id: "wet_market_advanced",
    level: "advanced",
    title: "Getting Lost in Old Hong Kong Wet Market",
    lines: [
      {
        hanzi: "阿明係一個年輕人，住喺九龍。有一日，佢去舊香港嘅街市買野。街市好熱鬧，人多車多，賣魚賣菜賣肉，好多味道。",
        jyutping: "aa3 ming4 hai6 jat1 go3 nin4 hing1 jan4, zyu6 hai2 gau2 lung4. jau5 jat1 jat6, keoi5 heoi3 gau6 hoeng1 gong2 ge3 gaai1 si5 maai5 je5. gaai1 si5 hou2 jit6 naau6, jan4 do1 ce1 do1, maai6 jyu4 maai6 coi3 maai6 juk6, hou2 do1 mei6 dou6.",
        english: "Ah Ming was a young man living in Kowloon. One day he went to an old Hong Kong wet market to buy things. The market was busy, noisy, and full of smells."
      },
      {
        hanzi: "阿明想買新鮮魚同埋菜。佢行入街市，見到好多檔口。有人叫賣：「新鮮魚嚟啦！」阿明買咗條魚，之後想買菜。但街市好大，佢轉左轉右，就迷路咗。",
        jyutping: "aa3 ming4 soeng2 maai5 san1 sin1 jyu4 tung4 maai4 coi3. keoi5 haang4 jap6 gaai1 si5, gin3 dou3 hou2 do1 dong3 hau2. jau5 jan4 giu3 maai6: \"san1 sin1 jyu4 lai4 laa1!\" aa3 ming4 maai5 zo2 tiu4 jyu4, zi1 hau6 soeng2 maai5 coi3. daan6 gaai1 si5 hou2 daai6, keoi5 zyun2 zo2 zyun2 jau6, zau6 mai4 lou6 zo2.",
        english: "Ah Ming wanted fresh fish and vegetables. He entered and saw many stalls. People shouted, \"Fresh fish!\" He bought a fish, then got lost while turning around the big market."
      },
      {
        hanzi: "佢四圍望，見到好多阿姨賣水果，同埋叔叔賣雞。佢問一個阿姨：「街市出口喺邊？」阿姨話：「直行轉右啦。」但阿明跟住行，仲係迷路。",
        jyutping: "keoi5 sei3 wai4 mong6, gin3 dou3 hou2 do1 aa3 ji4 maai6 seoi2 gwo2, tung4 maai4 suk1 suk1 maai6 gai1. keoi5 man6 jat1 go3 aa3 ji4: \"gaai1 si5 ceot1 hau2 hai2 bin1?\" aa3 ji4 waa6: \"zik6 haang4 zyun2 jau6 laa1.\" daan6 aa3 ming4 gan1 zyu6 haang4, zung6 hai6 mai4 lou6.",
        english: "He looked around and saw aunties selling fruit and uncles selling chicken. He asked where the exit was. She said, \"Go straight and turn right,\" but he still got lost."
      },
      {
        hanzi: "天開始黑，阿明好擔心。佢電話冇電，冇辦法call朋友。街市人開始少，檔口收檔。阿明行出街市，見到舊香港嘅街燈，好舊式。",
        jyutping: "tin1 hoi1 ci2 hak1, aa3 ming4 hou2 daam1 sam1. keoi5 din6 waa2 mou5 din6, mou5 baan6 faat3 call pang4 jau5. gaai1 si5 jan4 hoi1 ci2 siu2, dong3 hau2 sau1 dong3. aa3 ming4 haang4 ceot1 gaai1 si5, gin3 dou3 gau6 hoeng1 gong2 ge3 gaai1 dang1, hou2 gau6 sik1.",
        english: "It started getting dark and Ah Ming became worried. His phone battery was dead, so he could not call friends. Stalls started closing, and he saw old-style street lights outside."
      },
      {
        hanzi: "佢行咗陣，見到一架的士。的士司機係個阿叔，戴眼鏡。阿明上車，話：「我想返九龍屋企，但唔知路。」司機問：「你住邊度？」阿明話：「油麻地。」",
        jyutping: "keoi5 haang4 zo2 zan6, gin3 dou3 jat1 gaa3 dik1 si6. dik1 si6 si1 gei1 hai6 go3 aa3 suk1, daai3 ngaan5 geng2. aa3 ming4 soeng5 ce1, waa6: \"ngo5 soeng2 faan1 gau2 lung4 uk1 kei5, daan6 m4 zi1 lou6.\" si1 gei1 man6: \"nei5 zyu6 bin1 dou6?\" aa3 ming4 waa6: \"jau4 maa4 dei6.\"",
        english: "After walking for a while, he found a taxi. The driver was an older man with glasses. Ah Ming said he wanted to go home but did not know the way. He said he lived in Yau Ma Tei."
      },
      {
        hanzi: "司機笑笑，話：「好，我知路。但舊香港路好亂，有好多小巷。」車開咗，經過維多利亞港，見到舊船同埋大樓。阿明問：「點解舊香港咁多街市？」司機話：「因為以前人鍾意新鮮野，街市係生活一部份。」",
        jyutping: "si1 gei1 siu3 siu3, waa6: \"hou2, ngo5 zi1 lou6. daan6 gau6 hoeng1 gong2 lou6 hou2 lyun6, jau5 hou2 do1 siu2 hong6.\" ce1 hoi1 zo2, ging1 gwo3 wai4 do1 lei6 aa3 gong2, gin3 dou3 gau6 syun4 tung4 maai4 daai6 lau4. aa3 ming4 man6: \"dim2 gaai2 gau6 hoeng1 gong2 gam3 do1 gaai1 si5?\" si1 gei1 waa6: \"jan1 wai6 ji5 cin4 jan4 zung1 ji3 san1 sin1 je5, gaai1 si5 hai6 sang1 wut6 jat1 bou6 fan6.\"",
        english: "The driver smiled and said he knew the way, but old Hong Kong roads were confusing with many small alleys. They passed Victoria Harbour. Ah Ming asked why there were so many markets. The driver said markets were a key part of life."
      },
      {
        hanzi: "途中，車塞咗陣。司機話：「舊香港交通亂，但有味道。」阿明點頭，開始放鬆。最後，車到咗油麻地。阿明多謝司機，畀錢下車。",
        jyutping: "tou4 zung1, ce1 sak1 zo2 zan6. si1 gei1 waa6: \"gau6 hoeng1 gong2 gaau1 tung1 lyun6, daan6 jau5 mei6 dou6.\" aa3 ming4 dim2 tau4, hoi1 ci2 fong3 sung1. zeoi3 hau6, ce1 dou3 zo2 jau4 maa4 dei6. aa3 ming4 do1 ze6 si1 gei1, bei2 cin4 haa6 ce1.",
        english: "They got stuck in traffic for a bit. The driver said old Hong Kong traffic was chaotic but full of character. Ah Ming relaxed. Finally they arrived in Yau Ma Tei."
      },
      {
        hanzi: "返到屋企，阿明諗起呢件事，好開心。佢學到舊香港嘅生活，唔再怕迷路。故事完。",
        jyutping: "faan1 dou3 uk1 kei5, aa3 ming4 nam2 hei2 ni1 gin6 si6, hou2 hoi1 sam1. keoi5 hok6 dou3 gau6 hoeng1 gong2 ge3 sang1 wut6, m4 zoi3 paa3 mai4 lou6. gu3 si6 jyun4.",
        english: "Back home, Ah Ming thought about the experience and felt happy. He learned about old Hong Kong life and was no longer afraid of getting lost. The end."
      }
    ]
  }
];

function normalizeMiniStoryId(inputId) {
  const id = String(inputId || "").trim();
  if (MINI_STORY_LIBRARY.some((story) => story.id === id)) return id;
  return MINI_STORY_LIBRARY[0]?.id || "";
}

function getMiniStoryById(inputId) {
  const id = normalizeMiniStoryId(inputId);
  return MINI_STORY_LIBRARY.find((story) => story.id === id) || MINI_STORY_LIBRARY[0] || null;
}

function storyThemeLabel(theme) {
  const map = {
    daily: "Daily Life",
    home: "Home",
    friends: "Friends",
    travel: "Travel",
    holiday: "Holiday"
  };
  return map[theme] || "Daily Life";
}

function dayNumberFromIso(dateIso) {
  const value = String(dateIso || todayString());
  const parsed = new Date(`${value}T00:00:00Z`).getTime();
  if (!Number.isFinite(parsed)) return Math.floor(Date.now() / 86400000);
  return Math.floor(parsed / 86400000);
}

function getStoryOfDayBank() {
  if (Array.isArray(storyBankCache) && storyBankCache.length) return storyBankCache;
  const themes = ["daily", "home", "friends", "travel", "holiday"];
  const bank = [];

  themes.forEach((theme) => {
    const pool = (ALL_SENTENCES || [])
      .filter((s) => s.theme === theme && Number(s.level) <= 3)
      .sort((a, b) => String(a.id || "").localeCompare(String(b.id || "")));
    if (pool.length < 3) return;
    const storyCount = Math.min(6, Math.floor(pool.length / 3));
    for (let i = 0; i < storyCount; i += 1) {
      const start = (i * 3) % pool.length;
      const lines = [pool[start], pool[(start + 1) % pool.length], pool[(start + 2) % pool.length]].map((s) => ({
        hanzi: String(s.hanzi || "").trim(),
        jyutping: String(s.jyutping || "").trim(),
        english: normalizeEnglishSentence(s.english || "")
      }));
      bank.push({
        id: `story_${theme}_${i + 1}`,
        title: `${storyThemeLabel(theme)} Story ${i + 1}`,
        theme,
        lines
      });
    }
  });

  if (!bank.length) {
    bank.push({
      id: "story_fallback",
      title: "Daily Story",
      theme: "daily",
      lines: [
        { hanzi: "今日我哋去市場買嘢。", jyutping: "gam1 jat6 ngo5 dei6 heoi3 si5 coeng4 maai5 je5", english: "Today we go to the market to buy things." },
        { hanzi: "之後我哋去餐廳食嘢。", jyutping: "zi1 hau6 ngo5 dei6 heoi3 caan1 teng1 sik6 je5", english: "After that, we go to a restaurant to eat." },
        { hanzi: "晚上我哋回酒店休息。", jyutping: "maan5 soeng6 ngo5 dei6 wui4 zau2 dim3 jau1 sik1", english: "In the evening, we return to the hotel to rest." }
      ]
    });
  }

  storyBankCache = bank;
  return storyBankCache;
}

function getStoryOfDay() {
  const bank = getStoryOfDayBank();
  if (!bank.length) return null;
  const idx = ((dayNumberFromIso(todayString()) % bank.length) + bank.length) % bank.length;
  return bank[idx];
}

function renderStoryOfDay() {
  if (!els.storyOfDayLines) return;
  const story = getStoryOfDay();
  if (!story || !Array.isArray(story.lines) || !story.lines.length) {
    els.storyOfDayLines.innerHTML = "<p class=\"example\">No story available.</p>";
    if (els.storyOfDayMeta) els.storyOfDayMeta.textContent = "";
    return;
  }

  state.currentStory = story;
  state.currentStoryAnalyses = story.lines.map((line) => analyzeSentence({ hanzi: line.hanzi, jyutping: line.jyutping }));

  if (els.storyOfDayLabel) els.storyOfDayLabel.textContent = `Story of the day · ${todayString()}`;
  if (els.storyOfDayMeta) {
    els.storyOfDayMeta.textContent = `${story.title} · ${storyThemeLabel(story.theme)}`;
  }

  const html = story.lines.map((line, lineIndex) => {
    const analysis = state.currentStoryAnalyses[lineIndex];
    const annotatedHanzi = String(analysis?.annotatedHanzi || escapeHtml(line.hanzi || "-"))
      .replace(/data-idx="(\d+)"/g, `data-idx="$1" data-story-line="${lineIndex}"`);
    const annotatedJyutping = analysis?.annotatedJyutping || escapeHtml(line.jyutping || "-");
    const literalHtml = analysis?.literalHtml || escapeHtml(analysis?.literal || "");
    const english = normalizeEnglishSentence(line.english || "-");
    return `<article class="story-line-block">
      <p class="hanzi story-hanzi-line" data-story-line="${lineIndex}">${annotatedHanzi}</p>
      <p class="jyutping story-jyutping-line">${annotatedJyutping}</p>
      <p class="english story-english-line">${escapeHtml(english)}</p>
      <p class="literal story-literal-line">Literal: ${literalHtml}</p>
    </article>`;
  }).join("");

  els.storyOfDayLines.innerHTML = html;
  if (els.storyTapHint) {
    els.storyTapHint.textContent = "Tap any highlighted Hanzi to open quick explanation.";
  }
}

function renderMiniStory() {
  if (!els.miniStoryLines) return;
  stopMiniStoryPlayback();
  const nextId = normalizeMiniStoryId(els.miniStorySelect?.value || state.currentMiniStory?.id);
  const story = getMiniStoryById(nextId);
  if (!story || !Array.isArray(story.lines) || !story.lines.length) {
    els.miniStoryLines.innerHTML = "<p class=\"example\">No mini story available.</p>";
    if (els.miniStoryMeta) els.miniStoryMeta.textContent = "";
    state.currentMiniStoryChunkTexts = [];
    return;
  }

  state.currentMiniStory = story;
  state.currentMiniStoryAnalyses = story.lines.map((line) => analyzeSentence({ hanzi: line.hanzi, jyutping: line.jyutping }));
  if (els.miniStorySelect) els.miniStorySelect.value = story.id;
  if (els.miniStoryMeta) {
    const levelLabel = story.level === "advanced" ? "Advanced" : "Easy";
    els.miniStoryMeta.textContent = `${story.title} · ${levelLabel}`;
  }

  const showJp = state.prefs.miniStoryShowJyutping !== false;
  const showLens = state.prefs.miniStoryLens !== false;
  const chunkTextsByLine = [];
  const html = story.lines.map((line, lineIndex) => {
    const analysis = state.currentMiniStoryAnalyses[lineIndex];
    const lineRender = buildMiniStoryLineRender(line, analysis, lineIndex, showLens, showJp);
    const hanziHtml = lineRender.html;
    chunkTextsByLine[lineIndex] = lineRender.chunkTexts;
    const literalHtml = showLens
      ? (analysis?.literalHtml || escapeHtml(analysis?.literal || ""))
      : escapeHtml(analysis?.literal || "");
    const english = normalizeEnglishSentence(line.english || "-");
    const hanziClass = `hanzi story-hanzi-line ${showJp ? "pattern-ruby" : ""}`.trim();
    return `<article class="story-line-block mini-story-line-block">
      <p class="${hanziClass}" data-mini-story-line="${lineIndex}">${hanziHtml}</p>
      <p class="english story-english-line">${escapeHtml(english)}</p>
      <p class="literal story-literal-line">Literal: ${literalHtml}</p>
    </article>`;
  }).join("");

  state.currentMiniStoryChunkTexts = chunkTextsByLine;
  els.miniStoryLines.innerHTML = html;
  if (els.miniStoryTapHint) {
    els.miniStoryTapHint.textContent = "Tap any highlighted Hanzi to open quick explanation.";
  }
  applyMiniStoryVisibility();
}

function splitMiniStoryTokenChunks(tokens) {
  const out = [];
  let current = [];
  tokens.forEach((token, idx) => {
    current.push({ token, idx });
    if (/^[，,。！？.!?；;、]$/.test(token)) {
      out.push(current);
      current = [];
    }
  });
  if (current.length) out.push(current);
  return out.filter((chunk) => chunk.some((item) => !isPunctuation(item.token)));
}

function miniStoryTokenClass(meta, mapIndex) {
  const markerRole = meta?.marker?.role || "";
  const isVerb = !!meta?.isVerb;
  let cls = `tok tok-map-${mapIndex % 8}`;
  if (markerRole === "past") cls += " tok-past";
  if (markerRole === "prog") cls += " tok-prog";
  if (markerRole === "future") cls += " tok-future";
  if (isVerb) cls += " tok-verb";
  cls += " tok-clickable";
  return { cls, role: markerRole || (isVerb ? "verb" : "") };
}

function miniStoryTokenRoman(token, lineTokenRomanMap) {
  const key = normalizeHanzi(token);
  const base = jyutpingForToken(token);
  if (base && base !== token && base !== "to-confirm") return base;
  if (lineTokenRomanMap && lineTokenRomanMap[key]) return lineTokenRomanMap[key];
  return "";
}

function miniStoryTokenHtml(token, idx, analysis, showLens, showJp, mapState, lineIndex, lineTokenRomanMap) {
  if (isPunctuation(token)) return escapeHtml(token);
  const meta = analysis?.tokenMeta?.[idx] || null;
  const tokenRoman = miniStoryTokenRoman(token, lineTokenRomanMap);
  const tokenHtml = showJp ? buildRubyByCharacter(token, tokenRoman) : escapeHtml(token);
  if (showLens) {
    const nextMap = mapState.value;
    mapState.value += 1;
    const classInfo = miniStoryTokenClass(meta, nextMap);
    const dataAttrs = ` data-idx="${idx}" data-mini-story-line="${lineIndex}" data-token="${escapeAttr(token)}" data-role="${escapeAttr(classInfo.role)}"`;
    return `<span class="${classInfo.cls}"${dataAttrs}>${tokenHtml}</span>`;
  }
  return tokenHtml;
}

function buildMiniStoryLineRender(line, analysis, lineIndex, showLens, showJp) {
  const tokens = Array.isArray(analysis?.tokens) && analysis.tokens.length
    ? analysis.tokens
    : tokenizeSentence(line?.hanzi || "");
  const lineTokenRomanMap = inferTokenRomanMapFromSentence(line?.hanzi || "", line?.jyutping || "");
  const chunks = splitMiniStoryTokenChunks(tokens);
  const mapState = { value: 0 };
  const html = chunks.map((chunk, chunkIndex) => {
    const chunkHtml = chunk
      .map((item) => miniStoryTokenHtml(item.token, item.idx, analysis, showLens, showJp, mapState, lineIndex, lineTokenRomanMap))
      .join("");
    return `<span class="mini-story-hanzi-chunk" data-mini-story-line="${lineIndex}" data-mini-story-chunk="${chunkIndex}">${chunkHtml}</span>`;
  }).join("");
  const chunkTexts = chunks
    .map((chunk) => chunk.map((item) => item.token).join("").trim())
    .filter(Boolean);
  return { html: html || escapeHtml(line?.hanzi || "-"), chunkTexts };
}

function applyMiniStoryVisibility() {
  const showEn = state.prefs.miniStoryShowEnglish !== false;
  const showJp = state.prefs.miniStoryShowJyutping !== false;
  const showLens = state.prefs.miniStoryLens !== false;
  if (els.miniStoryLines) {
    els.miniStoryLines.querySelectorAll(".story-english-line, .story-literal-line").forEach((node) => {
      node.classList.toggle("hidden", !showEn);
    });
  }
  if (els.miniStoryTapHint) {
    els.miniStoryTapHint.textContent = showLens
      ? "Tap any highlighted Hanzi to open quick explanation."
      : "Lens is off. Turn it on to see token-level grammar framing.";
  }
  setMiniToggle(els.toggleMiniStoryJyutping, showJp, romanToggleIcon(), romanToggleLabelState(true), romanToggleLabelState(false));
  setMiniToggle(els.toggleMiniStoryEnglish, showEn, "EN", "English on", "English off");
  setMiniToggle(els.toggleMiniStoryLens, showLens, "◎", "Lens on", "Lens off");
  updateMiniStoryPlayButton();
}

function updateMiniStoryPlayButton() {
  if (!els.playMiniStoryAudio) return;
  const isActive = !!miniStoryPlayer.active;
  const isPaused = !!miniStoryPlayer.paused;
  const isPlaying = isActive && !isPaused;
  els.playMiniStoryAudio.textContent = isPlaying ? "❚❚" : "▶";
  els.playMiniStoryAudio.setAttribute(
    "aria-label",
    isPlaying ? "Pause mini story audio" : (isActive ? "Resume mini story audio" : "Play mini story audio")
  );
  els.playMiniStoryAudio.classList.toggle("is-paused", isPaused);
}

function setMiniStorySpeakingChunk(lineIndex, chunkIndex) {
  if (!els.miniStoryLines) return;
  els.miniStoryLines.querySelectorAll(".mini-story-hanzi-chunk.is-speaking").forEach((node) => {
    node.classList.remove("is-speaking");
  });
  const chunkEl = els.miniStoryLines.querySelector(
    `.mini-story-hanzi-chunk[data-mini-story-line="${lineIndex}"][data-mini-story-chunk="${chunkIndex}"]`
  );
  if (chunkEl) chunkEl.classList.add("is-speaking");
  els.miniStoryLines.querySelectorAll(".mini-story-line-block").forEach((block, idx) => {
    block.classList.toggle("is-speaking", idx === lineIndex);
  });
}

function clearMiniStorySpeakingChunk() {
  if (!els.miniStoryLines) return;
  els.miniStoryLines.querySelectorAll(".mini-story-hanzi-chunk.is-speaking").forEach((node) => {
    node.classList.remove("is-speaking");
  });
  els.miniStoryLines.querySelectorAll(".mini-story-line-block.is-speaking").forEach((node) => {
    node.classList.remove("is-speaking");
  });
}

function stopMiniStoryPlayback() {
  miniStoryPlayer.token += 1;
  miniStoryPlayer.active = false;
  miniStoryPlayer.paused = false;
  miniStoryPlayer.lineIndex = 0;
  miniStoryPlayer.chunkIndex = 0;
  try {
    if (window.speechSynthesis?.speaking || window.speechSynthesis?.paused) {
      window.speechSynthesis.cancel();
    }
  } catch {}
  stopSpeechNoise();
  clearMiniStorySpeakingChunk();
  updateMiniStoryPlayButton();
}

function startMiniStoryPlayback() {
  if (!state.currentMiniStory || !Array.isArray(state.currentMiniStory.lines) || !state.currentMiniStory.lines.length) return;
  miniStoryPlayer.token += 1;
  try {
    if (window.speechSynthesis?.speaking || window.speechSynthesis?.paused) {
      window.speechSynthesis.cancel();
    }
  } catch {}
  stopSpeechNoise();
  clearMiniStorySpeakingChunk();
  miniStoryPlayer.active = true;
  miniStoryPlayer.paused = false;
  miniStoryPlayer.lineIndex = 0;
  miniStoryPlayer.chunkIndex = 0;
  const playToken = miniStoryPlayer.token;
  updateMiniStoryPlayButton();
  speakMiniStoryChunk(playToken);
}

function toggleMiniStoryPlayback() {
  if (!miniStoryPlayer.active) {
    startMiniStoryPlayback();
    return;
  }
  const synth = window.speechSynthesis;
  if (!synth) return;
  if (synth.paused || miniStoryPlayer.paused) {
    miniStoryPlayer.paused = false;
    synth.resume();
    startSpeechNoise();
    updateMiniStoryPlayButton();
    return;
  }
  if (synth.speaking) {
    miniStoryPlayer.paused = true;
    synth.pause();
    stopSpeechNoise();
    updateMiniStoryPlayButton();
    return;
  }
  miniStoryPlayer.paused = false;
  updateMiniStoryPlayButton();
  speakMiniStoryChunk(miniStoryPlayer.token);
}

function currentMiniStoryChunk() {
  const chunkMap = Array.isArray(state.currentMiniStoryChunkTexts) ? state.currentMiniStoryChunkTexts : [];
  while (miniStoryPlayer.lineIndex < chunkMap.length) {
    const chunks = Array.isArray(chunkMap[miniStoryPlayer.lineIndex]) ? chunkMap[miniStoryPlayer.lineIndex] : [];
    while (miniStoryPlayer.chunkIndex < chunks.length) {
      const text = String(chunks[miniStoryPlayer.chunkIndex] || "").trim();
      if (text) {
        return {
          lineIndex: miniStoryPlayer.lineIndex,
          chunkIndex: miniStoryPlayer.chunkIndex,
          text
        };
      }
      miniStoryPlayer.chunkIndex += 1;
    }
    miniStoryPlayer.lineIndex += 1;
    miniStoryPlayer.chunkIndex = 0;
  }
  return null;
}

function speakMiniStoryChunk(playToken) {
  if (!miniStoryPlayer.active || playToken !== miniStoryPlayer.token) return;
  const nextChunk = currentMiniStoryChunk();
  if (!nextChunk) {
    stopMiniStoryPlayback();
    return;
  }

  const text = nextChunk.text;
  if (!text) {
    miniStoryPlayer.chunkIndex += 1;
    speakMiniStoryChunk(playToken);
    return;
  }

  setMiniStorySpeakingChunk(nextChunk.lineIndex, nextChunk.chunkIndex);
  const utterance = new SpeechSynthesisUtterance(text);
  const voices = (state.availableVoices && state.availableVoices.length)
    ? state.availableVoices
    : (window.speechSynthesis?.getVoices?.() || []);
  const selected = selectVoiceForSpeech(voices);
  const mode = normalizeLanguageMode(state.prefs.languageMode);
  utterance.lang = selected?.lang || (mode === "mandarin" ? "zh-CN" : "zh-HK");
  if (selected) utterance.voice = selected;
  utterance.rate = Math.min(1.2, Math.max(0.6, Number(state.prefs.voiceRate) || 0.9));
  utterance.pitch = 1;
  utterance.onstart = () => {
    if (playToken !== miniStoryPlayer.token) return;
    incrementMission("listens", 1);
    startSpeechNoise();
  };
  utterance.onend = () => {
    if (playToken !== miniStoryPlayer.token) return;
    stopSpeechNoise();
    if (miniStoryPlayer.paused) return;
    miniStoryPlayer.chunkIndex += 1;
    speakMiniStoryChunk(playToken);
  };
  utterance.onerror = () => {
    if (playToken !== miniStoryPlayer.token) return;
    stopSpeechNoise();
    if (miniStoryPlayer.paused) return;
    miniStoryPlayer.chunkIndex += 1;
    speakMiniStoryChunk(playToken);
  };
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
}

function openUserSidePanel() {
  if (!els.userPanel) return;
  renderUserPanel();
  if (modalCloseTimers.has(els.userPanel)) {
    clearTimeout(modalCloseTimers.get(els.userPanel));
    modalCloseTimers.delete(els.userPanel);
  }
  els.userPanel.classList.remove("hidden", "is-closing");
  els.userPanel.setAttribute("aria-hidden", "false");
  requestAnimationFrame(() => {
    els.userPanel.classList.add("is-open");
  });
}

function closeUserSidePanel(duration = 230) {
  if (!els.userPanel || els.userPanel.classList.contains("hidden")) return;
  if (modalCloseTimers.has(els.userPanel)) {
    clearTimeout(modalCloseTimers.get(els.userPanel));
    modalCloseTimers.delete(els.userPanel);
  }
  els.userPanel.classList.remove("is-open");
  els.userPanel.classList.add("is-closing");
  const timerId = setTimeout(() => {
    els.userPanel.classList.add("hidden");
    els.userPanel.classList.remove("is-closing");
    els.userPanel.setAttribute("aria-hidden", "true");
    modalCloseTimers.delete(els.userPanel);
  }, duration);
  modalCloseTimers.set(els.userPanel, timerId);
}

function renderUserPanel() {
  if (els.userPanelVersion) {
    const appVer = document.querySelector(".version-tag")?.textContent || "v?";
    els.userPanelVersion.textContent = appVer;
  }
  if (els.userLanguageMode) {
    els.userLanguageMode.value = normalizeLanguageMode(state.prefs.languageMode);
  }
}

function showInfoModal(kind) {
  if (!els.infoModal || !els.infoModalTitle || !els.infoModalBody) return;
  const type = String(kind || "").trim();
  if (type === "about") {
    els.infoModalTitle.textContent = "About Us";
    els.infoModalBody.innerHTML = [
      "<p><strong>Canton+Mand Coach</strong> helps learners practice practical Cantonese with optional Mandarin comparison.</p>",
      "<p>Focus: listening, daily sentence flow, tone contrast, and clear structure with literal + natural meaning.</p>",
      "<p>Built for short daily sessions and real Hong Kong conversation use.</p>"
    ].join("");
  } else {
    els.infoModalTitle.textContent = "Terms of Use";
    els.infoModalBody.innerHTML = [
      "<p>By using this app, you agree to use it for lawful learning purposes only.</p>",
      "<p>Learning content is for educational support and may contain updates over time; always verify critical usage with trusted sources.</p>",
      "<p>Your local settings and progress can be stored on your device. Do not share sensitive personal data in public areas of the app.</p>",
      "<p>Features and access levels (free/premium/pro) may change as the product evolves.</p>"
    ].join("");
  }
  openModalAnimated(els.infoModal);
}

function setControlsMode(tabName) {
  const hideControls = tabName === "stories" || tabName === "book" || tabName === "search" || tabName === "settings";
  if (els.controlsCard) {
    els.controlsCard.classList.toggle("hidden", hideControls);
  }
  if (hideControls) return;

  const isQuestions = tabName === "questions";
  const isWords = tabName === "words";
  const isTones = tabName === "tones";
  [els.globalLevelWrap, els.globalTenseWrap, els.globalThemeWrap].forEach((node) => {
    if (node) node.classList.toggle("hidden", isQuestions || isTones || isWords);
  });
  if (els.wordFilterWrap) {
    els.wordFilterWrap.classList.toggle("hidden", !isWords || isQuestions);
  }
  if (els.toneModeWrap) {
    els.toneModeWrap.classList.toggle("hidden", !isTones);
  }
  if (els.globalTenseWrap) {
    els.globalTenseWrap.classList.toggle("hidden", isWords || isQuestions || isTones);
  }
  [els.questionLevelWrap, els.questionTenseWrap, els.questionThemeWrap].forEach((node) => {
    if (node) node.classList.toggle("hidden", !isQuestions);
  });

  if (els.globalLevelWrap) {
    els.globalLevelWrap.classList.toggle("inactive-control", isWords || isTones);
  }
  if (els.globalThemeWrap) {
    els.globalThemeWrap.classList.toggle("inactive-control", isWords || isTones);
  }
  if (els.globalTenseWrap) {
    els.globalTenseWrap.classList.toggle("inactive-control", isTones);
  }
  if (els.wordFilterWrap) {
    els.wordFilterWrap.classList.toggle("inactive-control", isTones || !isWords);
  }
  if (els.globalLevel) els.globalLevel.disabled = isWords || isTones;
  if (els.globalTheme) els.globalTheme.disabled = isWords || isTones;
  if (els.globalTense) els.globalTense.disabled = isTones;
  if (els.wordFilter) els.wordFilter.disabled = !isWords || isTones;
  if (els.toneExerciseMode) els.toneExerciseMode.disabled = !isTones;

  // Controls apply immediately on change, so no status message is needed here.
}

function normalizeSearchText(value) {
  const raw = String(value || "").toLowerCase().trim();
  if (!raw) return "";
  const normalized = raw.normalize ? raw.normalize("NFD").replace(/[\u0300-\u036f]/g, "") : raw;
  return normalized.replace(/\s+/g, " ").trim();
}

function scoreSearchField(queryNorm, queryCompact, value, weight = 1) {
  const fieldNorm = normalizeSearchText(value);
  if (!fieldNorm) return 0;
  const fieldCompact = fieldNorm.replace(/\s+/g, "");
  let score = 0;
  if (fieldNorm === queryNorm || fieldCompact === queryCompact) score += 140 * weight;
  if (fieldNorm.startsWith(queryNorm) || fieldCompact.startsWith(queryCompact)) score += 90 * weight;
  if (fieldNorm.includes(queryNorm) || fieldCompact.includes(queryCompact)) score += 45 * weight;
  return score;
}

function uniqueWordsByHanzi(words) {
  const out = [];
  const seen = new Set();
  (words || []).forEach((word) => {
    const key = normalizeHanzi(word?.hanzi);
    if (!key || seen.has(key)) return;
    seen.add(key);
    out.push(word);
  });
  return out;
}

function getWordSearchMatches(query, mode = "standard") {
  const queryNorm = normalizeSearchText(query);
  if (!queryNorm) return [];
  const queryCompact = queryNorm.replace(/\s+/g, "");
  const out = [];
  const allWords = (state.content?.words || []).concat(state.supplementalSearchWords || []);
  const useSlang = String(mode || "").trim() === "slang";
  const customSlang = allWords.filter((w) => String(w.category || "").toLowerCase() === "slang");
  const words = useSlang
    ? uniqueWordsByHanzi(SLANG_SEARCH_ENTRIES.concat(customSlang))
    : allWords.filter((w) => String(w.category || "").toLowerCase() !== "slang");

  words.forEach((word) => {
    const localized = localizeEntry(word);
    const fields = [
      { v: word.hanzi, w: 2.2 },
      { v: word.jyutping, w: 2.2 },
      { v: word.english, w: 2.4 },
      { v: word.mandarin_hanzi, w: 2.0 },
      { v: word.pinyin, w: 2.0 },
      { v: word.mandarin_english, w: 2.0 },
      { v: localized.cantonese?.hanzi, w: 2.2 },
      { v: localized.cantonese?.roman, w: 2.2 },
      { v: localized.cantonese?.english, w: 2.3 },
      { v: localized.mandarin?.hanzi, w: 2.0 },
      { v: localized.mandarin?.roman, w: 2.0 },
      { v: localized.mandarin?.english, w: 2.0 },
      { v: word.category, w: 0.8 }
    ];

    const score = fields.reduce((sum, field) => sum + scoreSearchField(queryNorm, queryCompact, field.v, field.w), 0);
    if (score <= 0) return;
    out.push({ word, score });
  });

  return out
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      const la = wordLevel(a.word);
      const lb = wordLevel(b.word);
      if (la !== lb) return la - lb;
      return String(a.word.hanzi || "").localeCompare(String(b.word.hanzi || ""));
    })
    .slice(0, 30)
    .map((entry) => entry.word);
}

function renderSearchHint() {
  if (!els.searchResults) return;
  const mode = normalizeLanguageMode(state.prefs.languageMode);
  const searchMode = state.searchTab === "slang" ? "slang" : "standard";
  if (els.searchHint) {
    if (searchMode === "slang") {
      els.searchHint.textContent = mode === "mandarin"
        ? "Try: 搞掂, 好正, 冇問題, 唔知喎."
        : "Try: 搞掂, 好正, 冇問題, 唔知喎.";
    } else {
      els.searchHint.textContent = mode === "mandarin"
        ? "Try: tomorrow, 明天, ming2 tian1, half."
        : "Try: tomorrow, 聽日, ting1 jat6, half.";
    }
  }
  els.searchResults.innerHTML = "<p class=\"example\">Type a word and press Search.</p>";
}

function runWordSearch() {
  if (!els.searchInput || !els.searchResults) return;
  const query = String(els.searchInput.value || "").trim();
  if (!query) {
    renderSearchHint();
    return;
  }

  const matches = getWordSearchMatches(query, state.searchTab);
  if (!matches.length) {
    els.searchResults.innerHTML = `<p class="example">No matches for “${escapeHtml(query)}”. Try English, Hanzi, Jyutping, or Pinyin.</p>`;
    return;
  }

  const mode = normalizeLanguageMode(state.prefs.languageMode);
  const html = matches.map((word) => {
    const localized = localizeEntry(word);
    let hanziText = localized.display.hanzi || "-";
    let romanText = localized.display.roman || "-";
    let englishText = localized.display.english || "-";
    if (mode === "compare") {
      hanziText = `粵: ${localized.cantonese.hanzi || "-"}\n普: ${localized.mandarin.hanzi || "-"}`;
      romanText = `粵: ${localized.cantonese.roman || "-"}\n普: ${localized.mandarin.roman || "-"}`;
      englishText = (localized.cantonese.english && localized.mandarin.english && localized.cantonese.english !== localized.mandarin.english)
        ? `C: ${localized.cantonese.english}\nM: ${localized.mandarin.english}`
        : (localized.cantonese.english || localized.mandarin.english || "-");
    }
    return `<article class="search-item">
      <div class="search-main">
        <p class="chip search-chip">${escapeHtml(word.category || "word")}</p>
        <p class="hanzi ${mode === "compare" ? "compare-lines" : ""}">${escapeHtml(hanziText)}</p>
        <p class="jyutping ${mode === "compare" ? "compare-lines" : ""}">${escapeHtml(romanText)}</p>
        <p class="english ${mode === "compare" ? "compare-lines" : ""}">${escapeHtml(englishText)}</p>
      </div>
      <div class="actions search-actions">
        <button class="search-play-btn play-icon-btn" type="button" data-word-id="${escapeAttr(word.id)}" aria-label="Play pronunciation">▶</button>
      </div>
    </article>`;
  }).join("");

  els.searchResults.innerHTML = html;
}

function rollWord() {
  const wordFilter = state.prefs.wordFilter || "mixed";
  const wordsAll = (state.content.words || []);
  const words = wordFilter === "mixed"
    ? wordsAll
    : wordsAll.filter((w) => wordMatchesFilter(w, wordFilter));
  if (!words.length) {
    state.currentWord = null;
    els.wordCategory.textContent = "No match";
    els.wordHanzi.textContent = "-";
    els.wordJyutping.textContent = "-";
    els.wordEnglish.textContent = "-";
    if (els.wordLiteral) {
      els.wordLiteral.textContent = "";
      els.wordLiteral.classList.add("hidden");
    }
    els.wordExample.textContent = "No words in this filter.";
    applyVisibilityPrefs();
    refreshStats();
    return;
  }

  const unknown = words.filter((w) => !state.known.has(w.id));
  const coreUnknown = unknown.filter((w) => CORE_WORD_SET.has(normalizeHanzi(w.hanzi)));
  const coreAll = words.filter((w) => CORE_WORD_SET.has(normalizeHanzi(w.hanzi)));
  const pool = coreUnknown.length ? coreUnknown : (unknown.length ? unknown : (coreAll.length ? coreAll : words));
  state.currentWord = takeFromRotation("words", pool, (w) => w.id);

  els.wordCategory.textContent = state.currentWord.category || "word";
  renderWordCard();
  els.wordExample.textContent = "";
  els.revealExample.textContent = "Show example";
  els.revealExample.classList.remove("hidden");
  applyVisibilityPrefs();
  refreshStats();
}

function renderWordCard() {
  if (!state.currentWord) return;
  const word = state.currentWord;
  const localized = localizeEntry(word);
  const showRuby = !!state.prefs.showJyutping;
  if (localized.isCompare) {
    const cantoHanzi = showRuby
      ? buildRubyByCharacter(localized.cantonese.hanzi, localized.cantonese.roman)
      : escapeHtml(localized.cantonese.hanzi || "-");
    const mandoHanzi = showRuby
      ? buildRubyByCharacter(localized.mandarin.hanzi, localized.mandarin.roman)
      : escapeHtml(localized.mandarin.hanzi || "-");
    els.wordHanzi.innerHTML = buildCompareLabeledLine(cantoHanzi, mandoHanzi);
    els.wordJyutping.textContent = localized.display.roman || "-";
  } else {
    els.wordHanzi.textContent = localized.display.hanzi || "-";
    els.wordJyutping.textContent = localized.display.roman || "-";
  }
  els.wordHanzi.classList.toggle("pattern-ruby", showRuby && localized.isCompare);
  els.wordEnglish.textContent = localized.display.english || "-";
  els.wordHanzi.classList.toggle("compare-lines", localized.isCompare);
  els.wordJyutping.classList.toggle("compare-lines", localized.isCompare);
  els.wordEnglish.classList.toggle("compare-lines", localized.isCompare);
  if (els.wordLiteral) {
    els.wordLiteral.textContent = "";
    els.wordLiteral.classList.add("hidden");
  }
}

function rollPattern() {
  const pool = getFilteredSentences();
  if (!pool.length) return;
  state.currentSentence = takeFromRotation("patternSentences", pool, (s) => s.id);
  renderPatternControls();
  renderPatternSentence();
}

function renderPatternControls() {
  const sentence = state.currentSentence;
  els.patternFormula.textContent = `Level ${uiLevelFromSentenceLevel(sentence.level)} · ${sentence.tense} · ${sentence.theme}`;
  els.slotGrid.innerHTML = "";
}

function renderPatternSentence() {
  const built = buildPatternSentence();
  const analysis = analyzeSentence({ hanzi: built.analysisHanzi, jyutping: built.analysisJyutping });
  state.currentPatternAnalysis = analysis;
  const showRuby = !!state.prefs.showJyutping;
  const isCompare = !!built.isCompare;

  if (isCompare) {
    const localized = localizeEntry(state.currentSentence);
    const cantoHanzi = state.prefs.showGrammarLens
      ? (showRuby ? analysis.annotatedRubyHanzi : analysis.annotatedHanzi)
      : (showRuby
        ? (analysis.rubyHanzi || buildRubyByCharacter(localized.cantonese.hanzi, localized.cantonese.roman))
        : escapeHtml(localized.cantonese.hanzi || "-"));
    const mandoHanzi = showRuby
      ? buildRubyByCharacter(localized.mandarin.hanzi, localized.mandarin.roman)
      : escapeHtml(localized.mandarin.hanzi || "-");
    els.patternHanzi.innerHTML = buildCompareLabeledLine(cantoHanzi, mandoHanzi);
    els.patternJyutping.textContent = "";
    els.patternEnglish.textContent = built.english;
    els.patternHanzi.classList.toggle("pattern-ruby", showRuby);
    els.patternHanzi.classList.add("compare-lines");
    els.patternJyutping.classList.add("compare-lines");
    els.patternEnglish.classList.add("compare-lines");
    if (state.prefs.showGrammarLens) {
      const cantoNotes = analysis.notes.length
        ? analysis.notes.map((note) => `<div class="grammar-note">${note}</div>`).join("")
        : `<div class="grammar-note">No tense/aspect marker detected in Cantonese line.</div>`;
      els.patternGrammarNotes.innerHTML = `<div class="grammar-note">Compare mode: lens currently applies to Cantonese line.</div>${cantoNotes}`;
      els.patternLiteral.innerHTML = `Literal (Canto): ${analysis.literalHtml || escapeHtml(analysis.literal)}`;
    } else {
      els.patternGrammarNotes.innerHTML = "";
      els.patternLiteral.textContent = `Literal (Canto): ${analysis.literal}`;
    }
    applyVisibilityPrefs();
    return;
  }

  els.patternHanzi.classList.remove("compare-lines");
  els.patternJyutping.classList.remove("compare-lines");
  els.patternEnglish.classList.remove("compare-lines");

  if (state.prefs.showGrammarLens) {
    els.patternHanzi.innerHTML = showRuby ? analysis.annotatedRubyHanzi : analysis.annotatedHanzi;
    els.patternJyutping.innerHTML = analysis.annotatedJyutping;
    els.patternGrammarNotes.innerHTML = analysis.notes.length
      ? analysis.notes.map((note) => `<div class="grammar-note">${note}</div>`).join("")
      : `<div class="grammar-note">No tense/aspect marker detected in this sentence.</div>`;
    els.patternLiteral.innerHTML = `Literal: ${analysis.literalHtml || escapeHtml(analysis.literal)}`;
  } else {
    if (showRuby) {
      els.patternHanzi.innerHTML = analysis.rubyHanzi || escapeHtml(built.hanzi);
    } else {
      els.patternHanzi.textContent = built.hanzi;
    }
    els.patternJyutping.textContent = built.jyutping;
    els.patternGrammarNotes.innerHTML = "";
    els.patternLiteral.textContent = `Literal: ${analysis.literal}`;
  }
  els.patternHanzi.classList.toggle("pattern-ruby", showRuby);
  els.patternEnglish.textContent = built.english;
  applyVisibilityPrefs();
  if (showRuby) els.patternJyutping.classList.add("hidden");
}

function openPatternGrammarInfo(tokenIndex) {
  openGrammarInfoFromAnalysis(state.currentPatternAnalysis, tokenIndex);
}

function openGrammarInfoFromAnalysis(analysis, tokenIndex) {
  if (!els.grammarModal || !els.grammarModalBody || !els.grammarModalTitle) return;
  const meta = analysis?.tokenMeta?.[tokenIndex];
  if (!meta) return;

  const token = meta.token || "";
  const tokenJyutping = jyutpingForToken(token);
  const normalizedToken = normalizeHanzi(token);
  const byWord = (state.content?.words || []).find((w) => normalizeHanzi(w.hanzi) === normalizedToken);
  const tokenMeaning = byWord?.english || literalForToken(token);
  const roleLabelMap = { past: "Past marker", prog: "Progressive marker", future: "Future marker" };
  const marker = meta.marker || null;
  const isVerb = !!meta.isVerb;
  const linkedVerb = Number.isFinite(meta.linkedVerbIndex) && meta.linkedVerbIndex >= 0
    ? (analysis.tokens?.[meta.linkedVerbIndex] || "")
    : "";
  const linkedVerbJyutping = linkedVerb ? jyutpingForToken(linkedVerb) : "";

  let title = `Grammar Info · ${token}`;
  const chunks = [
    `<div class="grammar-hero">
      <div class="grammar-hero-hanzi">${escapeHtml(token || "-")}</div>
      <div class="grammar-hero-jyutping">${escapeHtml(tokenJyutping || "-")}</div>
    </div>`
  ];

  if (marker) {
    const details = GRAMMAR_MARKER_DETAILS[token] || {};
    title = `${roleLabelMap[marker.role] || "Grammar marker"} · ${token}`;
    chunks.push(`<div class="grammar-row"><span class="grammar-label">Core</span><p>${escapeHtml(details.core || marker.label)}</p></div>`);
    chunks.push(`<div class="grammar-row"><span class="grammar-label">Pattern</span><p>${escapeHtml(details.pattern || "See this sentence pattern.")}</p></div>`);
    chunks.push(`<div class="grammar-row"><span class="grammar-label">Use</span><p>${escapeHtml(details.use || "Use in this tense/aspect context.")}</p></div>`);
    if (details.contrast) {
      chunks.push(`<div class="grammar-row"><span class="grammar-label">Contrast</span><p>${escapeHtml(details.contrast)}</p></div>`);
    }
    if (details.extra) {
      chunks.push(`<div class="grammar-row"><span class="grammar-label">Also</span><p>${escapeHtml(details.extra)}</p></div>`);
    }
    if (linkedVerb) {
      chunks.push(
        `<div class="grammar-row">
          <span class="grammar-label">Linked Verb</span>
          <p><span class="chip">${escapeHtml(linkedVerb)}</span> <span class="grammar-inline-jp">${escapeHtml(linkedVerbJyutping || "-")}</span></p>
        </div>`
      );
    }
  } else if (isVerb) {
    title = `Verb Focus · ${token}`;
    const linkedMarkers = (analysis.tokenMeta || [])
      .filter((entry) => entry?.marker && entry.linkedVerbIndex === tokenIndex)
      .map((entry) => entry.token)
      .filter(Boolean);
    chunks.push(`<div class="grammar-row"><span class="grammar-label">Role</span><p>Main action verb in this sentence.</p></div>`);
    chunks.push(`<div class="grammar-row"><span class="grammar-label">Use</span><p>Read nearby markers to know if it is past, progressive, future, or experiential.</p></div>`);
    chunks.push(`<div class="grammar-row"><span class="grammar-label">Also</span><p>Some verbs can act as full verbs or auxiliaries depending on context.</p></div>`);
    if (linkedMarkers.length) {
      chunks.push(`<div class="grammar-row"><span class="grammar-label">Linked Marker(s)</span><p>${linkedMarkers.map((m) => `<span class="chip">${escapeHtml(m)}</span>`).join(" ")}</p></div>`);
    } else {
      chunks.push("<div class=\"grammar-row\"><span class=\"grammar-label\">Linked Marker(s)</span><p>None in this sentence.</p></div>");
    }
  } else {
    title = `Token Info · ${token}`;
    chunks.push(`<div class="grammar-row"><span class="grammar-label">Meaning</span><p>${escapeHtml(String(tokenMeaning || token))}</p></div>`);
    chunks.push(`<div class="grammar-row"><span class="grammar-label">Role</span><p>${escapeHtml(byWord?.category || "word/token in this sentence")}</p></div>`);
    chunks.push("<div class=\"grammar-row\"><span class=\"grammar-label\">Use</span><p>This token is not a tense/aspect marker. Use it as normal sentence vocabulary here.</p></div>");
  }

  els.grammarModalTitle.textContent = title;
  els.grammarModalBody.innerHTML = chunks.join("");
  openModalAnimated(els.grammarModal);
}

function buildPatternSentence() {
  if (!state.currentSentence) {
    return {
      hanzi: "",
      jyutping: "",
      english: "",
      analysisHanzi: "",
      analysisJyutping: "",
      speechText: ""
    };
  }
  const localized = localizeEntry(state.currentSentence);
  return {
    hanzi: localized.display.hanzi,
    jyutping: localized.display.roman,
    english: localized.display.english,
    analysisHanzi: localized.analysis.hanzi || localized.cantonese.hanzi,
    analysisJyutping: localized.analysis.roman || localized.cantonese.roman,
    speechText: localized.speechText,
    mode: localized.mode,
    isCompare: localized.isCompare
  };
}

function rollQuiz() {
  const quiz = state.game.fixMode ? getFixQuizPool() : getFilteredSentences();
  if (!quiz.length) return;
  state.currentQuiz = takeFromRotation("quizSentences", quiz, (q) => q.id);
  const localized = localizeEntry(state.currentQuiz);
  const correctAnswer = localized.answerEnglish || state.currentQuiz.english;
  els.quizFeedback.textContent = "";
  els.quizFeedback.className = "feedback";
  els.quizHanzi.textContent = localized.display.hanzi;
  els.quizJyutping.textContent = localized.display.roman;
  els.quizEnglish.textContent = localized.display.english;
  state.quizDisplay.hanzi = false;
  state.quizDisplay.jyutping = false;
  state.quizDisplay.english = false;
  state.quizDisplay.lens = false;
  renderQuizGrammar();
  applyQuizVisibility();

  const distractors = shuffle(
    Array.from(new Set(
      quiz
        .filter((item) => item.id !== state.currentQuiz.id)
        .map((item) => localizeEntry(item).answerEnglish || item.english)
        .filter((text) => text && text !== correctAnswer)
    ))
  ).slice(0, 3);
  if (distractors.length < 3) {
    pickDistractors(state.currentQuiz.id, correctAnswer, 3).forEach((d) => {
      if (!d || d === correctAnswer || distractors.includes(d)) return;
      distractors.push(d);
    });
  }
  const answers = [correctAnswer, ...distractors.slice(0, 3)];
  shuffle(answers);
  els.quizChoices.innerHTML = "";
  answers.forEach((text) => {
    const btn = document.createElement("button");
    btn.className = "choice";
    btn.textContent = text;
    btn.addEventListener("click", () => {
      const ok = text === correctAnswer;
      els.quizFeedback.textContent = ok ? "Correct" : `Not quite. Correct: ${correctAnswer}`;
      els.quizFeedback.className = `feedback ${ok ? "ok" : "bad"}`;
      const buttons = [...els.quizChoices.querySelectorAll("button")];
      buttons.forEach((button) => {
        button.disabled = true;
        if (button.textContent === correctAnswer) button.classList.add("is-correct");
      });
      if (!ok) btn.classList.add("is-wrong");
      else btn.classList.add("is-correct");
      handleQuizResult(ok, state.currentQuiz);
      markReviewed();
    });
    els.quizChoices.appendChild(btn);
  });
}

function renderQuizGrammar() {
  if (!state.currentQuiz) return;
  const localized = localizeEntry(state.currentQuiz);
  const analysis = analyzeSentence({ hanzi: localized.analysis.hanzi, jyutping: localized.analysis.roman });
  state.currentQuizAnalysis = analysis;
  const showRuby = !!state.quizDisplay.jyutping;
  if (localized.isCompare) {
    const cantoHanzi = state.quizDisplay.lens
      ? (showRuby ? analysis.annotatedRubyHanzi : analysis.annotatedHanzi)
      : (showRuby
        ? (analysis.rubyHanzi || buildRubyByCharacter(localized.cantonese.hanzi, localized.cantonese.roman))
        : escapeHtml(localized.cantonese.hanzi || "-"));
    const mandoHanzi = showRuby
      ? buildRubyByCharacter(localized.mandarin.hanzi, localized.mandarin.roman)
      : escapeHtml(localized.mandarin.hanzi || "-");
    els.quizHanzi.innerHTML = buildCompareLabeledLine(cantoHanzi, mandoHanzi);
    els.quizJyutping.textContent = "";
    els.quizEnglish.textContent = localized.display.english;
    els.quizHanzi.classList.toggle("pattern-ruby", showRuby);
    els.quizHanzi.classList.add("compare-lines");
    els.quizJyutping.classList.add("compare-lines");
    els.quizEnglish.classList.add("compare-lines");
    if (state.quizDisplay.lens) {
      els.quizGrammarNotes.innerHTML = `<div class="grammar-note">Compare mode: grammar lens uses Cantonese reference.</div>`;
      els.quizLiteral.textContent = `Literal (Canto): ${analysis.literal}`;
    } else {
      els.quizGrammarNotes.innerHTML = "";
      els.quizLiteral.textContent = `Literal (Canto): ${analysis.literal}`;
    }
    return;
  }

  els.quizHanzi.classList.remove("compare-lines");
  els.quizJyutping.classList.remove("compare-lines");
  els.quizEnglish.classList.remove("compare-lines");

  if (state.quizDisplay.lens) {
    els.quizHanzi.innerHTML = showRuby ? analysis.annotatedRubyHanzi : analysis.annotatedHanzi;
    els.quizJyutping.innerHTML = analysis.annotatedJyutping;
    els.quizGrammarNotes.innerHTML = analysis.notes.length
      ? analysis.notes.map((note) => `<div class="grammar-note">${note}</div>`).join("")
      : `<div class="grammar-note">No tense/aspect marker detected in this sentence.</div>`;
    els.quizLiteral.innerHTML = `Literal: ${analysis.literalHtml || escapeHtml(analysis.literal)}`;
  } else {
    if (showRuby) {
      els.quizHanzi.innerHTML = analysis.rubyHanzi || escapeHtml(localized.display.hanzi);
    } else {
      els.quizHanzi.textContent = localized.display.hanzi;
    }
    els.quizJyutping.textContent = localized.display.roman;
    els.quizGrammarNotes.innerHTML = "";
    els.quizLiteral.textContent = `Literal: ${analysis.literal}`;
  }
  els.quizEnglish.textContent = localized.display.english;
  els.quizHanzi.classList.toggle("pattern-ruby", showRuby);
}

function renderQuestionSentence() {
  if (!state.currentQuestion || !els.questionHanzi) return;
  const localized = localizeEntry(state.currentQuestion);
  const analysis = analyzeSentence({ hanzi: localized.analysis.hanzi, jyutping: localized.analysis.roman });
  state.currentQuestionAnalysis = analysis;
  const showRuby = !!state.prefs.showJyutping;
  if (localized.isCompare) {
    const cantoHanzi = state.prefs.showGrammarLens
      ? (showRuby ? analysis.annotatedRubyHanzi : analysis.annotatedHanzi)
      : (showRuby
        ? (analysis.rubyHanzi || buildRubyByCharacter(localized.cantonese.hanzi, localized.cantonese.roman))
        : escapeHtml(localized.cantonese.hanzi || "-"));
    const mandoHanzi = showRuby
      ? buildRubyByCharacter(localized.mandarin.hanzi || "-", localized.mandarin.roman)
      : escapeHtml(localized.mandarin.hanzi || "-");
    els.questionHanzi.innerHTML = buildCompareLabeledLine(cantoHanzi, mandoHanzi);
    els.questionJyutping.textContent = "";
    els.questionEnglish.textContent = localized.display.english;
    els.questionLiteral.innerHTML = state.prefs.showGrammarLens
      ? `Literal (Canto): ${analysis.literalHtml || escapeHtml(analysis.literal)}`
      : `Literal (Canto): ${escapeHtml(analysis.literal)}`;
    els.questionHanzi.classList.toggle("pattern-ruby", showRuby);
    els.questionHanzi.classList.add("compare-lines");
    els.questionJyutping.classList.add("compare-lines");
    els.questionEnglish.classList.add("compare-lines");
    applyVisibilityPrefs();
    return;
  }

  els.questionHanzi.classList.remove("compare-lines");
  els.questionJyutping.classList.remove("compare-lines");
  els.questionEnglish.classList.remove("compare-lines");

  if (state.prefs.showGrammarLens) {
    els.questionHanzi.innerHTML = showRuby ? analysis.annotatedRubyHanzi : analysis.annotatedHanzi;
    els.questionJyutping.innerHTML = analysis.annotatedJyutping || escapeHtml(localized.display.roman);
    els.questionEnglish.textContent = localized.display.english;
    els.questionLiteral.innerHTML = `Literal: ${analysis.literalHtml || escapeHtml(analysis.literal)}`;
  } else {
    if (showRuby) {
      els.questionHanzi.innerHTML = analysis.rubyHanzi || escapeHtml(localized.display.hanzi);
    } else {
      els.questionHanzi.textContent = localized.display.hanzi;
    }
    els.questionJyutping.textContent = localized.display.roman;
    els.questionEnglish.textContent = localized.display.english;
    els.questionLiteral.textContent = `Literal: ${analysis.literal}`;
  }
  els.questionHanzi.classList.toggle("pattern-ruby", showRuby);
  applyVisibilityPrefs();
}

function rollQuestion() {
  if (!els.questionHanzi) return;
  const pool = getFilteredQuestionSentences();
  if (!pool.length) return;
  state.currentQuestion = takeFromRotation("questionSentences", pool, (q) => q.id);
  const modeLabel = (state.prefs.questionLevel || "basic") === "advanced" ? "Advanced Questions" : "Basic Questions";
  els.questionFormula.textContent = `${modeLabel} · ${state.currentQuestion.tense} · ${state.currentQuestion.theme}`;
  renderQuestionSentence();
}

function getExerciseSentencePool() {
  const pool = getFilteredSentences();
  return pool.filter((sentence) => {
    const localized = localizeEntry(sentence);
    const tokens = tokenizeSentence(localized.analysis.hanzi).filter((token) => !isPunctuation(token));
    return tokens.length >= 3;
  });
}

function rollExercise() {
  if (!els.exercisePrompt || !els.exerciseTokenBank || !els.exerciseBuilt) return;
  const pool = getExerciseSentencePool();
  if (!pool.length) {
    state.currentExercise = null;
    renderExercise();
    return;
  }
  const sentence = takeFromRotation("exerciseSentences", pool, (s) => s.id);
  const localized = localizeEntry(sentence);
  const analysis = analyzeSentence({ hanzi: localized.analysis.hanzi, jyutping: localized.analysis.roman });
  const targetTokens = (analysis.tokens || []).filter((token) => !isPunctuation(token));
  const tiles = targetTokens.map((token, idx) => ({
    uid: `${sentence.id || "ex"}-${idx}-${Math.random().toString(36).slice(2, 8)}`,
    token
  }));
  state.currentExercise = {
    sentence,
    localized,
    targetTokens,
    selected: [],
    available: shuffle(tiles.slice()),
    feedback: "",
    feedbackClass: "feedback",
    solved: false
  };
  renderExercise();
}

function renderExercise() {
  if (!els.exercisePrompt || !els.exerciseBuilt || !els.exerciseTokenBank || !els.exerciseSelected || !els.exerciseFeedback) return;
  if (!state.currentExercise) {
    els.exercisePrompt.textContent = "No sentence available for this filter.";
    els.exerciseBuilt.textContent = "-";
    els.exerciseSelected.innerHTML = "";
    els.exerciseTokenBank.innerHTML = "";
    els.exerciseFeedback.textContent = "";
    els.exerciseFeedback.className = "feedback";
    return;
  }

  const ex = state.currentExercise;
  const promptText = ex.localized?.answerEnglish || ex.localized?.display?.english || ex.sentence?.english || "";
  els.exercisePrompt.textContent = `Build: ${promptText}`;
  els.exerciseBuilt.textContent = ex.selected.map((tile) => tile.token).join("") || "…";

  els.exerciseSelected.innerHTML = "";
  ex.selected.forEach((tile, idx) => {
    const btn = document.createElement("button");
    btn.className = "exercise-chip selected";
    btn.textContent = tile.token;
    btn.addEventListener("click", () => {
      ex.selected.splice(idx, 1);
      ex.available.push(tile);
      ex.feedback = "";
      ex.feedbackClass = "feedback";
      renderExercise();
    });
    els.exerciseSelected.appendChild(btn);
  });

  els.exerciseTokenBank.innerHTML = "";
  ex.available.forEach((tile) => {
    const btn = document.createElement("button");
    btn.className = "exercise-chip";
    btn.textContent = tile.token;
    btn.addEventListener("click", () => {
      const pos = ex.available.findIndex((entry) => entry.uid === tile.uid);
      if (pos < 0) return;
      const [picked] = ex.available.splice(pos, 1);
      ex.selected.push(picked);
      ex.feedback = "";
      ex.feedbackClass = "feedback";
      renderExercise();
    });
    els.exerciseTokenBank.appendChild(btn);
  });

  els.exerciseFeedback.textContent = ex.feedback || "";
  els.exerciseFeedback.className = ex.feedbackClass || "feedback";
}

function clearExerciseSelection() {
  if (!state.currentExercise) return;
  const ex = state.currentExercise;
  ex.available = shuffle(ex.available.concat(ex.selected));
  ex.selected = [];
  ex.feedback = "";
  ex.feedbackClass = "feedback";
  renderExercise();
}

function checkExerciseAnswer() {
  if (!state.currentExercise) return;
  const ex = state.currentExercise;
  const selectedTokens = ex.selected.map((tile) => tile.token);
  const targetTokens = ex.targetTokens || [];
  const sameLength = selectedTokens.length === targetTokens.length;
  const sameOrder = sameLength && selectedTokens.every((token, idx) => token === targetTokens[idx]);
  if (sameOrder) {
    ex.feedback = "Correct";
    ex.feedbackClass = "feedback ok";
    if (!ex.solved) {
      ex.solved = true;
      markReviewed();
      incrementMission("patterns", 1);
    }
  } else {
    ex.feedback = `Not yet. Correct: ${targetTokens.join("")}`;
    ex.feedbackClass = "feedback bad";
  }
  renderExercise();
}

function rollTonePair() {
  if (!els.toneLabel || !els.toneChoices) return;
  let mode = resolveToneExerciseMode();
  let pool = mode === "sentence" ? getFilteredToneSentencePairs() : getFilteredTonePairs();
  if (state.game.fixMode) {
    const fixTone = getFixTonePool();
    if (fixTone.pool.length) {
      mode = fixTone.mode;
      pool = fixTone.pool;
    }
  }
  if (!pool.length) return;
  state.currentToneKind = mode;
  state.currentTonePair = takeFromRotation("tonePairs", pool, (pair) => pair.id);
  state.currentToneSide = null;
  state.toneLabelMap = randomUnit() < 0.5 ? { a: "a", b: "b" } : { a: "b", b: "a" };
  state.prefs.toneShowJyutping = false;
  state.prefs.toneShowEnglish = false;
  saveJson(STORAGE_KEYS.prefs, state.prefs);
  renderTonePair();
  renderToneChoices();
}

function renderTonePair() {
  const pair = state.currentTonePair;
  if (!pair || !els.toneLabel || !els.tonePrompt) return;
  const toneA = toneItemForLabel("a");
  const toneB = toneItemForLabel("b");
  const toneALocal = localizeEntry(toneA);
  const toneBLocal = localizeEntry(toneB);
  const showToneJp = !!state.prefs.toneShowJyutping;
  const toneAHanzi = showToneJp
    ? (analyzeSentence({ hanzi: toneALocal.analysis.hanzi, jyutping: toneALocal.analysis.roman }).rubyHanzi || escapeHtml(toneALocal.display.hanzi))
    : escapeHtml(toneALocal.display.hanzi);
  const toneBHanzi = showToneJp
    ? (analyzeSentence({ hanzi: toneBLocal.analysis.hanzi, jyutping: toneBLocal.analysis.roman }).rubyHanzi || escapeHtml(toneBLocal.display.hanzi))
    : escapeHtml(toneBLocal.display.hanzi);
  const modeLabel = state.currentToneKind === "sentence" ? "Sentence tones" : "Word tones";
  els.toneLabel.textContent = `${modeLabel} drill`;
  els.toneHanzi.innerHTML = `A: ${toneAHanzi}   B: ${toneBHanzi}`;
  els.toneHanzi.classList.toggle("pattern-ruby", showToneJp);
  els.toneJyutping.textContent = `A: ${toneChoiceLabel(toneA)}   B: ${toneChoiceLabel(toneB)}`;
  els.toneEnglish.textContent = `A: ${toneALocal.display.english}   B: ${toneBLocal.display.english}`;
  els.toneJyutping.classList.toggle("compare-lines", toneALocal.isCompare || toneBLocal.isCompare);
  els.toneEnglish.classList.toggle("compare-lines", toneALocal.isCompare || toneBLocal.isCompare);
  els.toneFeedback.textContent = "";
  els.toneFeedback.className = "feedback";
  els.tonePrompt.textContent = state.currentToneKind === "sentence"
    ? "Step 1: Play A, B, or Random. Step 2: Choose the Jyutping sentence you heard."
    : "Step 1: Play A, B, or Random. Step 2: Choose the Jyutping you heard.";
  applyToneVisibility();
  updateToneScore();
}

function renderToneChoices() {
  const pair = state.currentTonePair;
  if (!pair || !els.toneChoices) return;
  const toneA = toneItemForLabel("a");
  const toneB = toneItemForLabel("b");
  const labelA = toneChoiceLabel(toneA);
  const labelB = toneChoiceLabel(toneB);
  const options = [labelA, labelB];
  const selected = normalizePracticeLevel(state.prefs.level);
  if (state.currentToneKind === "word" && selected !== 1) {
    const extra = makeThirdToneVariantLabel(labelA, labelB);
    if (extra) options.push(extra);
  }
  shuffle(options);
  els.toneChoices.innerHTML = "";
  options.forEach((option) => {
    const btn = document.createElement("button");
    btn.className = "choice";
    btn.textContent = option;
    btn.addEventListener("click", () => checkToneAnswer(option, btn));
    els.toneChoices.appendChild(btn);
  });
}

function makeThirdToneVariantLabel(labelA, labelB) {
  const leftPart = (label) => String(label || "").split("/")[0].trim();
  const parseTone = (syllable) => {
    const m = String(syllable || "").match(/^(.+?)([1-6])$/);
    if (!m) return null;
    return { base: m[1], tone: Number(m[2]) };
  };

  const a = String(labelA || "").trim();
  const b = String(labelB || "").trim();
  if (!a || !b) return "";

  const parsedA = parseTone(leftPart(a));
  const parsedB = parseTone(leftPart(b));
  if (!parsedA) return "";

  const tonesInUse = new Set([parsedA.tone]);
  if (parsedB && parsedB.base === parsedA.base) tonesInUse.add(parsedB.tone);

  const candidates = [1, 2, 3, 4, 5, 6].filter((tone) => !tonesInUse.has(tone));
  if (!candidates.length) return "";
  const newTone = candidates[randomInt(candidates.length)];
  const thirdLeft = `${parsedA.base}${newTone}`;

  let out = thirdLeft;
  if (a.includes("/")) {
    const rightSide = a.split("/").slice(1).join("/").trim();
    out = rightSide ? `${thirdLeft} / ${rightSide}` : thirdLeft;
  }

  if (out === a || out === b) return "";
  return out;
}

function checkToneAnswer(selected, clickedBtn) {
  const pair = state.currentTonePair;
  if (!pair || !els.toneFeedback) return;
  if (!state.currentToneSide) {
    els.toneFeedback.textContent = "Play A, B, or Random first.";
    els.toneFeedback.className = "feedback bad";
    return;
  }
  const target = toneItemForLabel(state.currentToneSide);
  const expected = toneChoiceLabel(target);
  const localizedTarget = localizeEntry(target);
  const ok = selected === expected;
  state.toneScore.total += 1;
  if (ok) state.toneScore.correct += 1;
  els.toneFeedback.textContent = ok
    ? "Correct"
    : `Not quite. Clip was: ${localizedTarget.display.hanzi} (${expected}) = ${localizedTarget.display.english}`;
  els.toneFeedback.className = `feedback ${ok ? "ok" : "bad"}`;
  const buttons = [...els.toneChoices.querySelectorAll("button")];
  buttons.forEach((button) => {
    button.disabled = true;
    if (button.textContent === expected) button.classList.add("is-correct");
  });
  if (!ok && clickedBtn) clickedBtn.classList.add("is-wrong");
  else if (ok && clickedBtn) clickedBtn.classList.add("is-correct");
  handleToneResult(ok, state.currentTonePair, state.currentToneKind);
  if (ok) incrementMission("tones", 1);
  markReviewed();
  updateToneScore();
}

function updateToneScore() {
  if (!els.toneScore) return;
  els.toneScore.textContent = `Tone score: ${state.toneScore.correct} / ${state.toneScore.total}`;
}

function playToneClip(which) {
  const pair = state.currentTonePair;
  if (!pair) return;
  const answerType = state.currentToneKind === "sentence" ? "Jyutping sentence" : "Jyutping";
  if (which === "a") {
    state.currentToneSide = "a";
    els.tonePrompt.textContent = `You played A. Choose the ${answerType} for A.`;
    speak(localizedSpeechText(toneItemForLabel("a")));
    return;
  }
  if (which === "b") {
    state.currentToneSide = "b";
    els.tonePrompt.textContent = `You played B. Choose the ${answerType} for B.`;
    speak(localizedSpeechText(toneItemForLabel("b")));
    return;
  }
  state.currentToneSide = randomUnit() < 0.5 ? "a" : "b";
  els.tonePrompt.textContent = `You played Random. Choose the ${answerType} for the random clip.`;
  speak(localizedSpeechText(toneItemForLabel(state.currentToneSide)));
}

function toneItemForLabel(label) {
  const pair = state.currentTonePair;
  if (!pair) return null;
  const mappedKey = state.toneLabelMap?.[label] || label;
  return pair[mappedKey];
}

function wordsByCategories(categories) {
  const words = state.content.words || [];
  const selected = words.filter((w) => categories.includes(w.category));
  return selected.length ? selected : words;
}

function wordById(id) {
  return (state.content.words || []).find((w) => w.id === id);
}

function pickDistractors(correctId, correctEnglish, amount) {
  const pool = getFilteredSentences()
    .filter((q) => q.id !== correctId)
    .map((q) => q.english)
    .filter((en) => en !== correctEnglish);
  shuffle(pool);
  return pool.slice(0, amount);
}

function getFilteredTonePairs() {
  return TONE_PAIR_BANK.slice();
}

function getFilteredToneSentencePairs() {
  return TONE_SENTENCE_BANK.slice();
}

function resolveToneExerciseMode() {
  const mode = state.prefs.toneExerciseMode || "word";
  if (mode === "sentence") return "sentence";
  return "word";
}

function ensureDailyGameState() {
  state.game = normalizeGameState(state.game);
  const today = todayString();
  if (state.game.date === today) return;
  state.game.date = today;
  state.game.mission = defaultMission();
  state.game.combo = 0;
  state.game.boss = { active: false, index: 0, score: 0, questions: [], current: null };
  state.game.hanzi = { active: false, index: 0, score: 0, questions: [], current: null };
  saveGameState();
}

function saveGameState() {
  saveJson(STORAGE_KEYS.game, state.game);
}

function currentLevelFromXp() {
  return Math.floor((Number(state.game.xp) || 0) / 100) + 1;
}

function incrementMission(key, amount) {
  ensureDailyGameState();
  if (!state.game.mission || !Object.prototype.hasOwnProperty.call(state.game.mission, key)) return;
  state.game.mission[key] += amount;
  maybeRewardMission();
  saveGameState();
  refreshGameUI();
}

function maybeRewardMission() {
  const m = state.game.mission;
  const done = m.listens >= m.targets.listens
    && m.tones >= m.targets.tones
    && m.patterns >= m.targets.patterns
    && m.hanzi >= m.targets.hanzi;
  if (done && !m.awarded) {
    m.awarded = true;
    awardXp(50, "Daily mission complete: +50 XP");
  }
}

function awardXp(amount, note = "") {
  state.game.xp += amount;
  state.game.level = currentLevelFromXp();
  if (note && els.funFeedback) els.funFeedback.textContent = note;
  saveGameState();
  refreshGameUI();
}

function addMistake(key) {
  if (!key) return;
  if (!state.game.mistakes.includes(key)) state.game.mistakes.push(key);
  saveGameState();
  refreshGameUI();
}

function clearMistake(key) {
  const idx = state.game.mistakes.indexOf(key);
  if (idx >= 0) state.game.mistakes.splice(idx, 1);
  saveGameState();
  refreshGameUI();
}

function handleQuizResult(ok, quizItem) {
  const key = `quiz:${quizItem.id}`;
  if (ok) {
    state.game.combo += 1;
    state.game.bestCombo = Math.max(state.game.bestCombo, state.game.combo);
    awardXp(10 + Math.min(10, state.game.combo), state.game.combo % 5 === 0 ? `Combo x${state.game.combo}!` : "");
    clearMistake(key);
  } else {
    state.game.combo = 0;
    addMistake(key);
    if (els.funFeedback) els.funFeedback.textContent = "Saved to Mistake Bank.";
  }
  saveGameState();
  refreshGameUI();
}

function handleToneResult(ok, tonePair, toneKind) {
  const prefix = toneKind === "sentence" ? "tonesentence" : "toneword";
  const key = `${prefix}:${tonePair.id}`;
  if (ok) {
    state.game.combo += 1;
    state.game.bestCombo = Math.max(state.game.bestCombo, state.game.combo);
    awardXp(12 + Math.min(10, state.game.combo), state.game.combo % 5 === 0 ? `Combo x${state.game.combo}!` : "");
    clearMistake(key);
  } else {
    state.game.combo = 0;
    addMistake(key);
    if (els.funFeedback) els.funFeedback.textContent = "Tone mistake saved.";
  }
  saveGameState();
  refreshGameUI();
}

function getFixQuizPool() {
  const ids = state.game.mistakes
    .filter((m) => m.startsWith("quiz:"))
    .map((m) => m.split(":")[1]);
  const pool = ALL_SENTENCES.filter((s) => ids.includes(s.id));
  return pool.length ? pool : getFilteredSentences();
}

function getFixTonePool() {
  const wordIds = state.game.mistakes.filter((m) => m.startsWith("toneword:")).map((m) => m.split(":")[1]);
  const sentenceIds = state.game.mistakes.filter((m) => m.startsWith("tonesentence:")).map((m) => m.split(":")[1]);
  const wordPool = TONE_PAIR_BANK.filter((p) => wordIds.includes(p.id));
  const sentencePool = TONE_SENTENCE_BANK.filter((p) => sentenceIds.includes(p.id));
  if (sentencePool.length) return { mode: "sentence", pool: sentencePool };
  if (wordPool.length) return { mode: "word", pool: wordPool };
  return { mode: resolveToneExerciseMode(), pool: [] };
}

function refreshGameUI() {
  if (!els.xpLine) return;
  ensureDailyGameState();
  const lvl = currentLevelFromXp();
  els.xpLine.textContent = `XP: ${state.game.xp} (practice points) · Level ${lvl}`;
  els.comboLine.textContent = `Combo: x${state.game.combo} (correct in a row)`;
  els.mistakeCount.textContent = `Mistakes saved: ${state.game.mistakes.length}`;
  els.toggleFixMode.textContent = `Fix Mistakes: ${state.game.fixMode ? "On" : "Off"}`;
  const m = state.game.mission;
  els.missionListens.textContent = `Listen: ${m.listens} / ${m.targets.listens}`;
  els.missionTones.textContent = `Tone wins: ${m.tones} / ${m.targets.tones}`;
  els.missionPatterns.textContent = `Sentence drills: ${m.patterns} / ${m.targets.patterns}`;
  if (els.missionHanzi) els.missionHanzi.textContent = `Hanzi tests: ${m.hanzi} / ${m.targets.hanzi}`;
  if (els.missionGoal) {
    const doneCount = Number(m.listens >= m.targets.listens)
      + Number(m.tones >= m.targets.tones)
      + Number(m.patterns >= m.targets.patterns)
      + Number(m.hanzi >= m.targets.hanzi);
    const pct = Math.round((doneCount / 4) * 100);
    els.missionGoal.textContent = `Goal today: complete all 4 targets, then pass Boss (4/5). Progress: ${doneCount}/4 (${pct}%).`;
  }
}

function startBossChallenge() {
  const quizPool = getFilteredSentences();
  const tonePool = getFilteredTonePairs();
  const level = normalizePracticeLevel(state.prefs.level);
  const hanziPool = (state.content.words || [])
    .filter((w) => wordLevel(w) <= effectiveWordLevel(level))
    .filter((w) => !!String(w.hanzi || "").trim() && !!String(w.english || "").trim());
  if (!quizPool.length || !tonePool.length || !hanziPool.length) return;
  const questions = [];
  const qPick = shuffle(quizPool.slice()).slice(0, 2);
  qPick.forEach((sentence) => {
    questions.push({
      type: "quiz",
      sentence,
      choices: shuffle([sentence.english, ...pickDistractors(sentence.id, sentence.english, 3)])
    });
  });
  const tPick = shuffle(tonePool.slice()).slice(0, 2);
  tPick.forEach((pair) => {
    const side = randomUnit() < 0.5 ? "a" : "b";
    const target = pair[side];
    questions.push({
      type: "tone",
      item: target,
      pair,
      side,
      choices: shuffle([pair.a.jyutping, pair.b.jyutping])
    });
  });
  const hanziWord = shuffle(hanziPool.slice())[0];
  const hanziDistractors = shuffle(hanziPool.filter((w) => w.id !== hanziWord.id).map((w) => w.english)).slice(0, 3);
  questions.push({
    type: "hanzi",
    hanzi: hanziWord.hanzi,
    correct: hanziWord.english,
    choices: shuffle([hanziWord.english, ...hanziDistractors])
  });
  state.game.boss = { active: true, index: 0, score: 0, questions: shuffle(questions), current: null, locked: false };
  if (els.funFeedback) els.funFeedback.textContent = "";
  nextBossQuestion();
}

function nextBossQuestion() {
  if (!state.game.boss.active) return;
  if (bossAdvanceTimer) {
    clearTimeout(bossAdvanceTimer);
    bossAdvanceTimer = null;
  }
  const b = state.game.boss;
  if (b.index >= b.questions.length) {
    finishBossChallenge();
    return;
  }
  b.current = b.questions[b.index];
  b.locked = false;
  renderBossQuestion();
}

function renderBossQuestion() {
  const b = state.game.boss;
  if (!b.active || !b.current) return;
  els.bossWrap.classList.remove("hidden");
  els.bossProgress.textContent = `Boss ${b.index + 1}/${b.questions.length} · Score ${b.score}`;
  els.bossPrompt.classList.remove("hanzi-focus");
  if (b.current.type === "quiz") {
    els.bossPrompt.textContent = "Boss: listen and pick the correct English.";
    if (els.funFeedback) els.funFeedback.textContent = "";
  } else if (b.current.type === "tone") {
    els.bossPrompt.textContent = "Boss: listen and pick the correct Jyutping.";
    if (els.funFeedback) els.funFeedback.textContent = "";
  } else {
    els.bossPrompt.textContent = b.current.hanzi;
    els.bossPrompt.classList.add("hanzi-focus");
    if (els.funFeedback) els.funFeedback.textContent = "Boss Hanzi round: choose the English meaning.";
  }
  els.bossChoices.innerHTML = "";
  b.current.choices.forEach((choice) => {
    const btn = document.createElement("button");
    btn.className = "choice";
    btn.textContent = choice;
    btn.addEventListener("click", () => answerBossQuestion(choice, btn));
    els.bossChoices.appendChild(btn);
  });
}

function answerBossQuestion(choice, btn) {
  const b = state.game.boss;
  if (!b.active || !b.current) return;
  if (b.locked) return;
  b.locked = true;
  try {
    const correct = b.current.type === "quiz"
      ? b.current.sentence.english
      : (b.current.type === "tone" ? b.current.item.jyutping : b.current.correct);
    const ok = choice === correct;
    const buttons = [...els.bossChoices.querySelectorAll("button")];
    buttons.forEach((button) => {
      button.disabled = true;
      if (button.textContent === correct) button.classList.add("is-correct");
    });
    if (!ok) btn.classList.add("is-wrong");
    else btn.classList.add("is-correct");
    if (ok) {
      b.score += 1;
      if (b.current.type === "tone") incrementMission("tones", 1);
      if (b.current.type === "hanzi") incrementMission("hanzi", 1);
    }
  } finally {
    queueBossAdvance(900);
  }
}

function queueBossAdvance(delayMs = 900) {
  if (bossAdvanceTimer) clearTimeout(bossAdvanceTimer);
  bossAdvanceTimer = setTimeout(() => {
    bossAdvanceTimer = null;
    const b = state.game.boss;
    if (!b || !b.active) return;
    b.index += 1;
    nextBossQuestion();
  }, Math.max(0, Number(delayMs) || 0));
}

function finishBossChallenge() {
  const b = state.game.boss;
  const pass = b.score >= 4;
  awardXp(pass ? 80 : 20, pass ? `Boss passed (${b.score}/5)! +80 XP` : `Boss done (${b.score}/5). +20 XP`);
  if (pass) playConfettiBurst();
  else playFailStorm();
  b.active = false;
  b.current = null;
  b.locked = false;
  els.bossWrap.classList.add("hidden");
  saveGameState();
  refreshGameUI();
}

function playConfettiBurst() {
  if (!els.fxLayer) return;
  playHappyChime();
  const colors = ["#ff3d7f", "#ff8a00", "#ffd166", "#06d6a0", "#4cc9f0", "#f72585"];
  for (let i = 0; i < 60; i += 1) {
    const p = document.createElement("span");
    p.className = "confetti-piece";
    p.style.left = `${randomUnit() * 100}%`;
    p.style.animationDelay = `${randomInt(180)}ms`;
    p.style.background = colors[randomInt(colors.length)];
    p.style.transform = `translateY(-8vh) rotate(${randomInt(180)}deg)`;
    els.fxLayer.appendChild(p);
    setTimeout(() => p.remove(), 1800);
  }
}

function playFailStorm() {
  if (!els.fxLayer) return;
  const flash = document.createElement("div");
  flash.className = "lightning-flash";
  els.fxLayer.appendChild(flash);
  setTimeout(() => flash.remove(), 500);
  playThunderSound();
}

function playThunderSound() {
  const AudioCtx = window.AudioContext || window.webkitAudioContext;
  if (!AudioCtx) return;
  if (!speechNoise.ctx) speechNoise.ctx = new AudioCtx();
  const ctx = speechNoise.ctx;
  if (ctx.state === "suspended") {
    ctx.resume().then(() => playThunderSound()).catch(() => {});
    return;
  }
  const now = ctx.currentTime;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = "triangle";
  osc.frequency.setValueAtTime(110, now);
  osc.frequency.exponentialRampToValueAtTime(44, now + 0.75);
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(0.16, now + 0.03);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.9);
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start(now);
  osc.stop(now + 0.95);
}

function playHappyChime() {
  const AudioCtx = window.AudioContext || window.webkitAudioContext;
  if (!AudioCtx) return;
  if (!speechNoise.ctx) speechNoise.ctx = new AudioCtx();
  const ctx = speechNoise.ctx;
  if (ctx.state === "suspended") {
    ctx.resume().then(() => playHappyChime()).catch(() => {});
    return;
  }
  const now = ctx.currentTime;
  const notes = [523.25, 659.25, 783.99];
  notes.forEach((freq, idx) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, now + idx * 0.12);
    gain.gain.setValueAtTime(0.0001, now + idx * 0.12);
    gain.gain.exponentialRampToValueAtTime(0.05, now + idx * 0.12 + 0.03);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.12 + 0.28);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now + idx * 0.12);
    osc.stop(now + idx * 0.12 + 0.3);
  });
}

function markReviewed() {
  const today = todayString();
  if (state.reviewed.date !== today) {
    state.reviewed.date = today;
    state.reviewed.count = 0;
  }
  state.reviewed.count += 1;
  saveJson(STORAGE_KEYS.reviewed, state.reviewed);

  if (state.streak.lastDate !== today) {
    const yesterday = addDays(today, -1);
    state.streak.days = state.streak.lastDate === yesterday ? state.streak.days + 1 : 1;
    state.streak.lastDate = today;
    saveJson(STORAGE_KEYS.streak, state.streak);
  }

  refreshStats();
}

function refreshStats() {
  els.knownWords.textContent = `Known words: ${state.known.size}`;
  const reviewedCount = state.reviewed.date === todayString() ? state.reviewed.count : 0;
  els.reviewedWords.textContent = `Reviewed today: ${reviewedCount}`;
  els.streakBadge.textContent = `🔥 ${state.streak.days}${ordinalSuffix(state.streak.days)}-Day`;
  renderUserPanel();
}

function renderKnownList() {
  if (!els.knownList || !els.knownListMeta) return;
  const items = (state.content.words || [])
    .filter((w) => state.known.has(w.id))
    .sort((a, b) => String(a.hanzi || "").localeCompare(String(b.hanzi || ""), "zh-Hant"));
  els.knownList.innerHTML = "";
  if (!items.length) {
    els.knownListMeta.textContent = "No words marked yet.";
    if (els.clearKnownList) els.clearKnownList.disabled = true;
    return;
  }
  if (els.clearKnownList) els.clearKnownList.disabled = false;
  els.knownListMeta.textContent = `${items.length} words marked as known.`;
  items.forEach((w) => {
    const localized = localizeEntry(w);
    const rowClass = localized.isCompare ? "known-item compare-lines" : "known-item";
    const row = document.createElement("div");
    row.className = rowClass;
    row.innerHTML = `<p class="hanzi">${escapeHtml(localized.display.hanzi || "-")}</p><p class="jyutping">${escapeHtml(localized.display.roman || "-")}</p><p class="english">${escapeHtml(localized.display.english || "-")}</p><button class="known-remove-btn" type="button" data-word-id="${escapeAttr(w.id)}" aria-label="Remove from known list">✕</button>`;
    els.knownList.appendChild(row);
  });
}

function speak(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  const playId = Date.now() + randomUnit();
  speechNoise.playId = playId;
  if (speechNoise.stopTimer) {
    clearTimeout(speechNoise.stopTimer);
    speechNoise.stopTimer = null;
  }
  const voices = (state.availableVoices && state.availableVoices.length)
    ? state.availableVoices
    : window.speechSynthesis.getVoices();
  const selected = selectVoiceForSpeech(voices);
  const mode = normalizeLanguageMode(state.prefs.languageMode);
  utterance.lang = selected?.lang || (mode === "mandarin" ? "zh-CN" : "zh-HK");
  if (selected) utterance.voice = selected;
  utterance.rate = Math.min(1.2, Math.max(0.6, Number(state.prefs.voiceRate) || 0.9));
  utterance.pitch = 1;
  utterance.onstart = () => {
    if (speechNoise.playId === playId) startSpeechNoise();
    const chars = String(text || "").length;
    const approxMs = Math.max(1500, Math.min(10000, Math.round((chars / Math.max(0.6, utterance.rate)) * 170)));
    speechNoise.stopTimer = setTimeout(() => {
      if (speechNoise.playId === playId) stopSpeechNoise();
    }, approxMs + 500);
  };
  utterance.onend = () => {
    if (speechNoise.playId === playId) stopSpeechNoise();
    if (speechNoise.stopTimer) {
      clearTimeout(speechNoise.stopTimer);
      speechNoise.stopTimer = null;
    }
  };
  utterance.onerror = () => {
    if (speechNoise.playId === playId) stopSpeechNoise();
    if (speechNoise.stopTimer) {
      clearTimeout(speechNoise.stopTimer);
      speechNoise.stopTimer = null;
    }
  };
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
}

function startSpeechNoise() {
  if (!state.prefs.audioNoiseOn) return;
  const type = String(state.prefs.audioNoiseType || "white");
  if (type.startsWith("real-")) {
    startRealNoise(type);
    return;
  }
  const AudioCtx = window.AudioContext || window.webkitAudioContext;
  if (!AudioCtx) return;

  if (!speechNoise.ctx) {
    speechNoise.ctx = new AudioCtx();
  }
  if (speechNoise.ctx.state === "suspended") {
    speechNoise.ctx.resume().then(() => startSpeechNoise()).catch(() => {});
    return;
  }

  stopSpeechNoise();

  const frameCount = speechNoise.ctx.sampleRate;
  const buffer = speechNoise.ctx.createBuffer(1, frameCount, speechNoise.ctx.sampleRate);
  const data = buffer.getChannelData(0);
  fillNoiseBuffer(data, type, speechNoise.ctx.sampleRate);

  const source = speechNoise.ctx.createBufferSource();
  source.buffer = buffer;
  source.loop = true;

  const gain = speechNoise.ctx.createGain();
  gain.gain.value = computeNoiseGain();

  source.connect(gain);
  gain.connect(speechNoise.ctx.destination);
  source.start();

  speechNoise.source = source;
  speechNoise.gain = gain;
}

function computeNoiseGain() {
  const base = Math.max(0.05, Math.min(0.8, Number(state.prefs.audioNoiseLevel) || 0.25));
  const boostByType = {
    white: 1.2,
    radio: 1.6,
    street: 2.2,
    people: 2.7,
    "real-market": 1.4,
    "real-radio": 1.25
  };
  const boost = boostByType[state.prefs.audioNoiseType] || 1.2;
  return Math.min(1.8, base * boost);
}

function fillNoiseBuffer(data, noiseType, sampleRate) {
  let last = 0;
  let brown = 0;
  const humA = 2 * Math.PI * 50 / sampleRate;
  const humB = 2 * Math.PI * 120 / sampleRate;
  const type = String(noiseType || "white");

  for (let i = 0; i < data.length; i += 1) {
    const white = Math.random() * 2 - 1;
    const pink = 0.98 * last + 0.02 * white;
    last = pink;
    brown = (brown + 0.02 * white) / 1.02;

    if (type === "street") {
      const rumble = 0.55 * Math.sin(i * humA) + 0.32 * Math.sin(i * humB);
      const horn = (Math.sin(i * (2 * Math.PI * 620 / sampleRate)) * (Math.random() > 0.9992 ? 1 : 0)) * 0.8;
      data[i] = (pink * 0.7) + (brown * 0.35) + (rumble * 0.25) + horn;
      continue;
    }

    if (type === "radio") {
      const hiss = white * 0.45;
      const staticBurst = (Math.random() > 0.995 ? (Math.random() * 2 - 1) : 0) * 0.8;
      const hum = 0.08 * Math.sin(i * humA);
      data[i] = hiss + staticBurst + hum;
      continue;
    }

    if (type === "people") {
      const chatterGate = (Math.sin(i * (2 * Math.PI * 3.1 / sampleRate)) + 1) / 2;
      const formantA = Math.sin(i * (2 * Math.PI * 260 / sampleRate));
      const formantB = Math.sin(i * (2 * Math.PI * 380 / sampleRate));
      const chatter = pink * (0.3 + chatterGate * 0.9) + formantA * 0.12 + formantB * 0.09;
      const crowd = brown * 0.45;
      data[i] = chatter + crowd;
      continue;
    }

    data[i] = white;
  }
}

function stopSpeechNoise() {
  if (speechNoise.stopTimer) {
    clearTimeout(speechNoise.stopTimer);
    speechNoise.stopTimer = null;
  }
  if (speechNoise.ambientEl) {
    try {
      speechNoise.ambientEl.pause();
      speechNoise.ambientEl.currentTime = 0;
    } catch {}
    speechNoise.ambientEl = null;
  }
  if (speechNoise.source) {
    try { speechNoise.source.stop(); } catch {}
    try { speechNoise.source.disconnect(); } catch {}
    speechNoise.source = null;
  }
  if (speechNoise.gain) {
    try { speechNoise.gain.disconnect(); } catch {}
    speechNoise.gain = null;
  }
}

function startRealNoise(type) {
  stopSpeechNoise();
  const urls = REAL_NOISE_URLS[type] || REAL_NOISE_URLS["real-market"];
  const url = urls[randomInt(urls.length)] || urls[0];
  if (!url) {
    startSyntheticNoiseFallback(type);
    return;
  }
  const el = new Audio(url);
  el.loop = true;
  el.preload = "auto";
  el.playsInline = true;
  el.volume = Math.max(0.03, Math.min(0.95, computeNoiseGain() / 2));
  el.onerror = () => {
    if (speechNoise.ambientEl === el) speechNoise.ambientEl = null;
    startSyntheticNoiseFallback(type);
  };
  el.onstalled = () => {
    if (speechNoise.ambientEl === el) speechNoise.ambientEl = null;
    startSyntheticNoiseFallback(type);
  };
  speechNoise.ambientEl = el;
  el.play().catch(() => {
    if (speechNoise.ambientEl === el) speechNoise.ambientEl = null;
    startSyntheticNoiseFallback(type);
  });
}

function startSyntheticNoiseFallback(realType) {
  const mapped = realType === "real-radio" ? "radio" : "street";
  state.prefs.audioNoiseType = mapped;
  startSpeechNoise();
  state.prefs.audioNoiseType = realType;
}

function selectVoiceForSpeech(voices) {
  if (!voices || !voices.length) return null;
  if (state.prefs.voiceURI && state.prefs.voiceURI !== "auto") {
    const exact = voices.find((v) => v.voiceURI === state.prefs.voiceURI);
    if (exact) return exact;
  }
  const mode = normalizeLanguageMode(state.prefs.languageMode);
  if (mode === "mandarin") {
    return voices.find((v) => /mandarin|putonghua|guoyu/i.test(`${v.lang} ${v.name}`))
      || voices.find((v) => /^zh-cn$/i.test(v.lang))
      || voices.find((v) => /^zh-tw$/i.test(v.lang))
      || voices.find((v) => /^zh/i.test(v.lang))
      || voices[0];
  }
  return voices.find((v) => /yue|cantonese/i.test(`${v.lang} ${v.name}`))
    || voices.find((v) => /^zh-hk$/i.test(v.lang))
    || voices.find((v) => /^yue/i.test(v.lang))
    || voices.find((v) => /^zh/i.test(v.lang))
    || voices[0];
}

function importDataFile(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const imported = JSON.parse(String(reader.result));
      const checked = normalizeContent(imported);
      state.content = checked;
      setRuntimeWordsForLookup(state.content?.words || []);
      saveJson(STORAGE_KEYS.content, checked);
      refreshLexiconCoverage();
      els.contentMessage.textContent = "Import successful. New learning set loaded.";
      resetRotations();
      rollWord();
      rollPattern();
      rollQuiz();
      rollQuestion();
      rollExercise();
      renderKnownList();
      if (els.searchInput && String(els.searchInput.value || "").trim()) runWordSearch();
      else renderSearchHint();
    } catch (err) {
      els.contentMessage.textContent = "Import failed. Please use valid JSON format.";
    }
  };
  reader.readAsText(file);
}

function loadContent() {
  const stored = loadJson(STORAGE_KEYS.content, null);
  return stored ? normalizeContent(stored) : normalizeContent(deepClone(DEFAULT_DATA));
}

function normalizeContent(input) {
  const source = input && typeof input === "object" ? input : {};
  const clean = {
    words: Array.isArray(source.words) ? source.words : deepClone(DEFAULT_DATA.words),
    patterns: Array.isArray(source.patterns) && source.patterns.length ? source.patterns : deepClone(DEFAULT_DATA.patterns),
    quiz: Array.isArray(source.quiz) && source.quiz.length ? source.quiz : deepClone(DEFAULT_DATA.quiz)
  };
  clean.words = ensureCoreWords(clean.words)
    .map((word, idx) => normalizeLocalizedWordEntry(word, idx));
  clean.patterns = clean.patterns
    .map((sentence, idx) => normalizeLocalizedSentenceEntry(sentence, idx, "p"));
  clean.quiz = clean.quiz
    .map((sentence, idx) => normalizeLocalizedSentenceEntry(sentence, idx, "q"));
  return clean;
}

function ensureCoreWords(words) {
  const safeWords = Array.isArray(words) ? words.slice() : [];
  const seen = new Set();
  let nextId = safeWords.length + 1000;

  safeWords.forEach((word) => {
    if (isMissingMeaning(word.english)) {
      word.english = meaningForWord(word.hanzi, word.category);
    }
    if (isMissingJyutping(word.jyutping)) {
      word.jyutping = jyutpingForWord(word.hanzi);
    }
    seen.add(normalizeHanzi(word.hanzi));
  });

  const requiredWords = USER_CORE_WORDS.concat(STORY_EXTRA_WORDS);
  requiredWords.forEach((entry) => {
    const key = normalizeHanzi(entry.hanzi);
    if (!key || seen.has(key)) return;
    safeWords.push({
      id: `core_${nextId++}`,
      hanzi: entry.hanzi,
      jyutping: String(entry.jyutping || jyutpingForWord(entry.hanzi)).trim(),
      english: String(entry.english || meaningForWord(entry.hanzi, entry.category)).trim(),
      category: entry.category,
      example: ""
    });
    seen.add(key);
  });

  return safeWords;
}

function normalizeHanzi(value) {
  return String(value || "").replace(/\s+/g, "").trim();
}

function normalizeLanguageMode(value) {
  const mode = String(value || "").toLowerCase().trim();
  if (mode === "mandarin" || mode === "compare") return mode;
  return "cantonese";
}

const QUESTION_TYPE_FILTERS = new Set([
  "mixed",
  "who",
  "where",
  "when",
  "how",
  "how_much",
  "which",
  "what",
  "why",
  "yes_no"
]);

function normalizeQuestionType(value) {
  const raw = String(value || "").toLowerCase().trim();
  return QUESTION_TYPE_FILTERS.has(raw) ? raw : "mixed";
}

const TRAD_TO_SIMP_CHAR_MAP = {
  "萬": "万",
  "與": "与",
  "專": "专",
  "業": "业",
  "東": "东",
  "絲": "丝",
  "丟": "丢",
  "兩": "两",
  "嚴": "严",
  "個": "个",
  "中": "中",
  "義": "义",
  "之": "之",
  "樂": "乐",
  "習": "习",
  "書": "书",
  "買": "买",
  "賣": "卖",
  "亂": "乱",
  "乾": "干",
  "了": "了",
  "亞": "亚",
  "親": "亲",
  "們": "们",
  "傳": "传",
  "來": "来",
  "價": "价",
  "傷": "伤",
  "傾": "倾",
  "僅": "仅",
  "儀": "仪",
  "儲": "储",
  "兒": "儿",
  "興": "兴",
  "內": "内",
  "寫": "写",
  "凍": "冻",
  "處": "处",
  "劃": "划",
  "劇": "剧",
  "醫": "医",
  "區": "区",
  "單": "单",
  "厲": "厉",
  "參": "参",
  "雙": "双",
  "變": "变",
  "發": "发",
  "嗎": "吗",
  "啟": "启",
  "喪": "丧",
  "圍": "围",
  "國": "国",
  "圖": "图",
  "圓": "圆",
  "場": "场",
  "壓": "压",
  "壞": "坏",
  "夠": "够",
  "夢": "梦",
  "頭": "头",
  "學": "学",
  "實": "实",
  "對": "对",
  "將": "将",
  "專": "专",
  "尋": "寻",
  "導": "导",
  "層": "层",
  "歲": "岁",
  "嶺": "岭",
  "巿": "市",
  "幣": "币",
  "幫": "帮",
  "幾": "几",
  "庫": "库",
  "廚": "厨",
  "廳": "厅",
  "廣": "广",
  "應": "应",
  "彈": "弹",
  "當": "当",
  "後": "后",
  "徑": "径",
  "從": "从",
  "復": "复",
  "德": "德",
  "態": "态",
  "總": "总",
  "戀": "恋",
  "戲": "戏",
  "戶": "户",
  "拋": "抛",
  "挾": "挟",
  "揀": "拣",
  "揚": "扬",
  "換": "换",
  "揾": "找",
  "搖": "摇",
  "擇": "择",
  "攝": "摄",
  "攣": "挛",
  "攤": "摊",
  "數": "数",
  "敵": "敌",
  "斷": "断",
  "時": "时",
  "晝": "昼",
  "暈": "晕",
  "曆": "历",
  "曉": "晓",
  "書": "书",
  "會": "会",
  "櫃": "柜",
  "權": "权",
  "條": "条",
  "來": "来",
  "東": "东",
  "樓": "楼",
  "樣": "样",
  "樞": "枢",
  "機": "机",
  "檔": "档",
  "檢": "检",
  "櫥": "橱",
  "歡": "欢",
  "歲": "岁",
  "歷": "历",
  "氣": "气",
  "漢": "汉",
  "燈": "灯",
  "爐": "炉",
  "牆": "墙",
  "狀": "状",
  "獲": "获",
  "現": "现",
  "環": "环",
  "畫": "画",
  "當": "当",
  "發": "发",
  "皺": "皱",
  "盡": "尽",
  "監": "监",
  "盤": "盘",
  "確": "确",
  "碼": "码",
  "礙": "碍",
  "禮": "礼",
  "種": "种",
  "稱": "称",
  "穩": "稳",
  "窩": "窝",
  "簾": "帘",
  "籠": "笼",
  "簡": "简",
  "簽": "签",
  "籌": "筹",
  "糾": "纠",
  "結": "结",
  "經": "经",
  "緊": "紧",
  "綠": "绿",
  "網": "网",
  "總": "总",
  "練": "练",
  "繼": "继",
  "續": "续",
  "罐": "罐",
  "聲": "声",
  "聰": "聪",
  "聽": "听",
  "聯": "联",
  "腦": "脑",
  "腳": "脚",
  "臥": "卧",
  "舊": "旧",
  "艙": "舱",
  "藝": "艺",
  "藥": "药",
  "號": "号",
  "處": "处",
  "話": "话",
  "該": "该",
  "詢": "询",
  "語": "语",
  "說": "说",
  "請": "请",
  "讀": "读",
  "誰": "谁",
  "譯": "译",
  "變": "变",
  "讓": "让",
  "論": "论",
  "講": "讲",
  "貓": "猫",
  "貴": "贵",
  "賬": "账",
  "費": "费",
  "贊": "赞",
  "趕": "赶",
  "較": "较",
  "輕": "轻",
  "轉": "转",
  "車": "车",
  "軟": "软",
  "辦": "办",
  "過": "过",
  "這": "这",
  "還": "还",
  "邊": "边",
  "鄉": "乡",
  "郵": "邮",
  "醜": "丑",
  "醫": "医",
  "針": "针",
  "鈴": "铃",
  "鉛": "铅",
  "銷": "销",
  "鋼": "钢",
  "錄": "录",
  "錢": "钱",
  "鍾": "钟",
  "鏡": "镜",
  "關": "关",
  "開": "开",
  "陣": "阵",
  "陰": "阴",
  "陽": "阳",
  "際": "际",
  "險": "险",
  "雖": "虽",
  "難": "难",
  "電": "电",
  "靈": "灵",
  "靚": "靓",
  "靜": "静",
  "響": "响",
  "頁": "页",
  "頂": "顶",
  "順": "顺",
  "類": "类",
  "風": "风",
  "飛": "飞",
  "飯": "饭",
  "館": "馆",
  "馬": "马",
  "驗": "验",
  "驚": "惊",
  "體": "体"
};

function toSimplified(text) {
  return Array.from(String(text || "")).map((ch) => TRAD_TO_SIMP_CHAR_MAP[ch] || ch).join("");
}

const MANDARIN_TOKEN_MAP = {
  "我": "我",
  "你": "你",
  "佢": "他",
  "我哋": "我们",
  "你哋": "你们",
  "佢哋": "他们",
  "哋": "们",
  "呢個": "这个",
  "嗰個": "那个",
  "呢啲": "这些",
  "嗰啲": "那些",
  "呢度": "这里",
  "嗰度": "那里",
  "邊度": "哪里",
  "而家": "现在",
  "今日": "今天",
  "尋日": "昨天",
  "聽日": "明天",
  "零": "零",
  "一": "一",
  "二": "二",
  "兩": "两",
  "三": "三",
  "四": "四",
  "五": "五",
  "六": "六",
  "七": "七",
  "八": "八",
  "九": "九",
  "十": "十",
  "十二": "十二",
  "十五": "十五",
  "二十": "二十",
  "二十一": "二十一",
  "三十": "三十",
  "三十五": "三十五",
  "九十九": "九十九",
  "一百": "一百",
  "二百五十": "二百五十",
  "一千": "一千",
  "半": "半",
  "巴士": "公交车",
  "咩": "什么",
  "邊個": "谁",
  "幾多": "多少",
  "點樣": "怎么样",
  "點解": "为什么",
  "屋企": "家里",
  "早晨": "早上",
  "多謝": "谢谢",
  "唔該": "劳驾",
  "對唔住": "对不起",
  "廣東話": "广东话",
  "英文": "英语",
  "早啲": "早一点",
  "稍後": "稍后",
  "遲啲": "晚一点",
  "下晝": "下午",
  "嗰陣": "那阵",
  "一啲": "一些",
  "咁": "这样",
  "仲": "还",
  "多次": "再次",
  "夠": "够",
  "太貴啦": "太贵了",
  "開心": "开心",
  "傷心": "伤心",
  "入面": "里面",
  "外面": "外面",
  "周圍": "周围",
  "橫過": "横过",
  "穿過": "穿过",
  "除咗": "除了",
  "一...就": "一...就",
  "並": "并",
  "啲": "些",
  "俾": "给",
  "畀": "给",
  "房間": "房间",
  "浴室": "浴室",
  "爐頭": "炉头",
  "地毯": "地毯",
  "浴缸": "浴缸",
  "淋浴": "淋浴",
  "洗手盆": "洗手盆",
  "喇": "啦",
  "囉": "啰",
  "嘞": "了",
  "吖": "啊",
  "餐廳": "餐厅",
  "學校": "学校",
  "市場": "市场",
  "醫院": "医院",
  "藥房": "药房",
  "洗手間": "洗手间",
  "梳化": "沙发",
  "廚房": "厨房",
  "客廳": "客厅",
  "睡房": "卧室",
  "臥室": "卧室",
  "陽台": "阳台",
  "門": "门",
  "窗簾": "窗帘",
  "微波爐": "微波炉",
  "洗衣機": "洗衣机",
  "乾衣機": "干衣机",
  "書架": "书架",
  "櫃子": "柜子",
  "燈": "灯",
  "風扇": "风扇",
  "空調": "空调",
  "鏡子": "镜子",
  "嘢": "东西",
  "啲嘢": "东西",
  "號": "号",
  "攰": "累",
  "凍": "冷",
  "靚": "漂亮",
  "醜": "丑",
  "衰": "糟",
  "唔係": "不是",
  "有去過": "去过",
  "下次": "下次",
  "上次": "上次",
  "今次": "这次",
  "喺": "在",
  "唔": "不",
  "係": "是",
  "嘅": "的",
  "咗": "了",
  "緊": "在",
  "過": "过",
  "住": "着",
  "返": "回",
  "翻": "回",
  "嚟": "来",
  "食": "吃",
  "飲": "喝",
  "睇": "看",
  "聽": "听",
  "講": "说",
  "傾": "聊",
  "揾": "找",
  "冇": "没有",
  "鍾意": "喜欢",
  "但係": "但是",
  "同埋": "和",
  "同": "和",
  "之前": "之前",
  "之後": "之后",
  "將會": "将会",
  "會": "会",
  "想": "想",
  "要": "要",
  "如果": "如果",
  "所以": "所以",
  "因為": "因为"
};

const MANDARIN_PINYIN_MAP = {
  "我": "wo3",
  "你": "ni3",
  "他": "ta1",
  "我们": "wo3 men",
  "你们": "ni3 men",
  "他们": "ta1 men",
  "们": "men",
  "这个": "zhe4 ge",
  "那个": "na4 ge",
  "这些": "zhe4 xie1",
  "那些": "na4 xie1",
  "这里": "zhe4 li3",
  "那里": "na4 li3",
  "哪里": "na3 li3",
  "现在": "xian4 zai4",
  "今天": "jin1 tian1",
  "昨天": "zuo2 tian1",
  "明天": "ming2 tian1",
  "零": "ling2",
  "一": "yi1",
  "二": "er4",
  "两": "liang3",
  "三": "san1",
  "四": "si4",
  "五": "wu3",
  "六": "liu4",
  "七": "qi1",
  "八": "ba1",
  "九": "jiu3",
  "十": "shi2",
  "十二": "shi2 er4",
  "十五": "shi2 wu3",
  "二十": "er4 shi2",
  "二十一": "er4 shi2 yi1",
  "三十": "san1 shi2",
  "三十五": "san1 shi2 wu3",
  "九十九": "jiu3 shi2 jiu3",
  "一百": "yi1 bai3",
  "二百五十": "er4 bai3 wu3 shi2",
  "一千": "yi1 qian1",
  "半": "ban4",
  "什么": "shen2 me",
  "谁": "shei2",
  "多少": "duo1 shao3",
  "怎么样": "zen3 me yang4",
  "为什么": "wei4 shen2 me",
  "家里": "jia1 li3",
  "早上": "zao3 shang4",
  "谢谢": "xie4 xie",
  "劳驾": "lao2 jia4",
  "对不起": "dui4 bu4 qi3",
  "广东话": "guang3 dong1 hua4",
  "英语": "ying1 yu3",
  "早一点": "zao3 yi4 dian3",
  "稍后": "shao1 hou4",
  "晚一点": "wan3 yi4 dian3",
  "那阵": "na4 zhen4",
  "一些": "yi4 xie1",
  "这样": "zhe4 yang4",
  "还": "hai2",
  "再次": "zai4 ci4",
  "够": "gou4",
  "太贵了": "tai4 gui4 le",
  "开心": "kai1 xin1",
  "伤心": "shang1 xin1",
  "里面": "li3 mian4",
  "周围": "zhou1 wei2",
  "横过": "heng2 guo4",
  "穿过": "chuan1 guo4",
  "除了": "chu2 le",
  "并": "bing4",
  "些": "xie1",
  "给": "gei3",
  "房间": "fang2 jian1",
  "炉头": "lu2 tou2",
  "地毯": "di4 tan3",
  "浴缸": "yu4 gang1",
  "淋浴": "lin2 yu4",
  "洗手盆": "xi3 shou3 pen2",
  "啊": "a",
  "啰": "luo",
  "公交车": "gong1 jiao1 che1",
  "餐厅": "can1 ting1",
  "学校": "xue2 xiao4",
  "市场": "shi4 chang3",
  "医院": "yi1 yuan4",
  "药房": "yao4 fang2",
  "洗手间": "xi3 shou3 jian1",
  "沙发": "sha1 fa1",
  "厨房": "chu2 fang2",
  "客厅": "ke4 ting1",
  "卧室": "wo4 shi4",
  "阳台": "yang2 tai2",
  "门": "men2",
  "窗帘": "chuang1 lian2",
  "微波炉": "wei1 bo1 lu2",
  "洗衣机": "xi3 yi1 ji1",
  "干衣机": "gan1 yi1 ji1",
  "书架": "shu1 jia4",
  "柜子": "gui4 zi",
  "灯": "deng1",
  "风扇": "feng1 shan4",
  "空调": "kong1 tiao2",
  "镜子": "jing4 zi",
  "东西": "dong1 xi",
  "号": "hao4",
  "累": "lei4",
  "冷": "leng3",
  "漂亮": "piao4 liang",
  "丑": "chou3",
  "糟": "zao1",
  "不是": "bu4 shi4",
  "去过": "qu4 guo4",
  "在": "zai4",
  "不": "bu4",
  "是": "shi4",
  "的": "de",
  "了": "le",
  "过": "guo4",
  "着": "zhe",
  "回": "hui2",
  "来": "lai2",
  "吃": "chi1",
  "喝": "he1",
  "看": "kan4",
  "听": "ting1",
  "说": "shuo1",
  "聊": "liao2",
  "找": "zhao3",
  "没有": "mei2 you3",
  "喜欢": "xi3 huan1",
  "但是": "dan4 shi4",
  "和": "he2",
  "之前": "zhi1 qian2",
  "之后": "zhi1 hou4",
  "将会": "jiang1 hui4",
  "会": "hui4",
  "想": "xiang3",
  "要": "yao4",
  "如果": "ru2 guo3",
  "所以": "suo3 yi3",
  "因为": "yin1 wei4",
  "吗": "ma",
  "呢": "ne"
};

const MANDARIN_CHAR_MAP = {
  "佢": "他",
  "哋": "们",
  "喺": "在",
  "唔": "不",
  "嘅": "的",
  "咗": "了",
  "緊": "在",
  "過": "过",
  "住": "着",
  "返": "回",
  "翻": "回",
  "嚟": "来",
  "食": "吃",
  "飲": "喝",
  "睇": "看",
  "聽": "听",
  "講": "说",
  "傾": "聊",
  "揾": "找",
  "冇": "没",
  "鍾": "钟",
  "鍾意": "喜欢",
  "將": "将"
};

const MANDARIN_CHAR_PINYIN_MAP = {
  "有": "you3",
  "去": "qu4",
  "买": "mai3",
  "學": "xue2",
  "学": "xue2",
  "做": "zuo4",
  "好": "hao3",
  "水": "shui3",
  "茶": "cha2",
  "咖": "ka1",
  "啡": "fei1",
  "饭": "fan4",
  "飯": "fan4",
  "书": "shu1",
  "書": "shu1",
  "朋": "peng2",
  "友": "you3",
  "名": "ming2",
  "广": "guang3",
  "廣": "guang3",
  "东": "dong1",
  "東": "dong1",
  "话": "hua4",
  "話": "hua4",
  "英": "ying1",
  "文": "wen2",
  "屋": "wu1",
  "企": "qi3",
  "香": "xiang1",
  "港": "gang3",
  "早": "zao3",
  "晨": "chen2",
  "多": "duo1",
  "谢": "xie4",
  "謝": "xie4",
  "唔": "wu2",
  "该": "gai1",
  "該": "gai1",
  "对": "dui4",
  "對": "dui4",
  "住": "zhu4",
  "边": "bian1",
  "邊": "bian1",
  "个": "ge4",
  "個": "ge4",
  "几": "ji3",
  "幾": "ji3",
  "点": "dian3",
  "點": "dian3",
  "样": "yang4",
  "樣": "yang4",
  "解": "jie3",
  "一": "yi1",
  "二": "er4",
  "兩": "liang3",
  "两": "liang3",
  "三": "san1",
  "四": "si4",
  "五": "wu3",
  "六": "liu4",
  "七": "qi1",
  "八": "ba1",
  "九": "jiu3",
  "零": "ling2",
  "百": "bai3",
  "千": "qian1",
  "半": "ban4",
  "后": "hou4",
  "後": "hou4",
  "天": "tian1",
  "啲": "xie1",
  "稍": "shao1",
  "迟": "chi2",
  "遲": "chi2",
  "下": "xia4",
  "次": "ci4",
  "上": "shang4",
  "今": "jin1",
  "星": "xing1",
  "期": "qi1",
  "日": "ri4",
  "中": "zhong1",
  "午": "wu3",
  "晝": "zhou4",
  "黄": "huang2",
  "黃": "huang2",
  "昏": "hun1",
  "晚": "wan3",
  "嗰": "na4",
  "阵": "zhen4",
  "陣": "zhen4",
  "街": "jie1",
  "公": "gong1",
  "司": "si1",
  "酒": "jiu3",
  "店": "dian4",
  "商": "shang1",
  "位": "wei4",
  "识": "shi2",
  "識": "shi2",
  "想": "xiang3",
  "必": "bi4",
  "须": "xu1",
  "須": "xu1",
  "应": "ying1",
  "應": "ying1",
  "可": "ke3",
  "以": "yi3",
  "能": "neng2",
  "或": "huo4",
  "者": "zhe3",
  "常": "chang2",
  "时": "shi2",
  "時": "shi2",
  "从": "cong2",
  "從": "cong2",
  "来": "lai2",
  "來": "lai2",
  "成": "cheng2",
  "经": "jing1",
  "經": "jing1",
  "前": "qian2",
  "很": "hen3",
  "些": "xie1",
  "这": "zhe4",
  "這": "zhe4",
  "还": "hai2",
  "還": "hai2",
  "已": "yi3",
  "再": "zai4",
  "够": "gou4",
  "都": "dou1",
  "就": "jiu4",
  "反": "fan3",
  "行": "xing2",
  "加": "jia1",
  "味": "wei4",
  "闻": "wen2",
  "聞": "wen2",
  "卖": "mai4",
  "賣": "mai4",
  "笑": "xiao4",
  "哭": "ku1",
  "喊": "han3",
  "用": "yong4",
  "见": "jian4",
  "見": "jian4",
  "读": "du2",
  "讀": "du2",
  "写": "xie3",
  "寫": "xie3",
  "知": "zhi1",
  "搭": "da1",
  "打": "da3",
  "坐": "zuo4",
  "站": "zhan4",
  "把": "ba3",
  "试": "shi4",
  "試": "shi4",
  "记": "ji4",
  "記": "ji4",
  "拉": "la1",
  "推": "tui1",
  "收": "shou1",
  "畀": "gei3",
  "俾": "gei3",
  "入": "ru4",
  "离": "li2",
  "離": "li2",
  "开": "kai1",
  "開": "kai1",
  "关": "guan1",
  "關": "guan1",
  "明": "ming2",
  "白": "bai2",
  "停": "ting2",
  "完": "wan2",
  "得": "de2",
  "到": "dao4",
  "囉": "luo",
  "平": "ping2",
  "贵": "gui4",
  "貴": "gui4",
  "太": "tai4",
  "啦": "la",
  "喇": "la",
  "难": "nan2",
  "難": "nan2",
  "容": "rong2",
  "易": "yi4",
  "快": "kuai4",
  "慢": "man4",
  "热": "re4",
  "熱": "re4",
  "暖": "nuan3",
  "大": "da4",
  "细": "xi4",
  "細": "xi4",
  "新": "xin1",
  "旧": "jiu4",
  "舊": "jiu4",
  "辣": "la4",
  "少": "shao3",
  "伤": "shang1",
  "傷": "shang1",
  "心": "xin1",
  "面": "mian4",
  "外": "wai4",
  "近": "jin4",
  "远": "yuan3",
  "遠": "yuan3",
  "左": "zuo3",
  "右": "you4",
  "由": "you2",
  "靠": "kao4",
  "之": "zhi1",
  "间": "jian1",
  "間": "jian1",
  "周": "zhou1",
  "围": "wei2",
  "圍": "wei2",
  "横": "heng2",
  "橫": "heng2",
  "沿": "yan2",
  "向": "xiang4",
  "穿": "chuan1",
  "并": "bing4",
  "並": "bing4",
  "定": "ding4",
  "除": "chu2",
  "咗": "le",
  "虽": "sui1",
  "雖": "sui1",
  "然": "ran2",
  "不": "bu4",
  "过": "guo4",
  "直": "zhi2",
  "至": "zhi4",
  "只": "zhi3",
  "要": "yao4",
  "算": "suan4",
  "张": "zhang1",
  "張": "zhang1",
  "件": "jian4",
  "支": "zhi1",
  "本": "ben3",
  "部": "bu4",
  "条": "tiao2",
  "條": "tiao2",
  "块": "kuai4",
  "塊": "kuai4",
  "双": "shuang1",
  "雙": "shuang1",
  "杯": "bei1",
  "片": "pian4",
  "顶": "ding3",
  "頂": "ding3",
  "棵": "ke1",
  "隻": "zhi1",
  "架": "jia4",
  "篇": "pian1",
  "碗": "wan3",
  "粒": "li4",
  "餐": "can1",
  "份": "fen4",
  "房": "fang2",
  "桌": "zhuo1",
  "椅": "yi3",
  "子": "zi3",
  "寓": "yu4",
  "浴": "yu4",
  "室": "shi4",
  "窗": "chuang1",
  "冰": "bing1",
  "箱": "xiang1",
  "炉": "lu2",
  "爐": "lu2",
  "头": "tou2",
  "頭": "tou2",
  "地": "di4",
  "毯": "tan3",
  "缸": "gang1",
  "淋": "lin2",
  "洗": "xi3",
  "手": "shou3",
  "盆": "pen2",
  "床": "chuang2",
  "呀": "ya",
  "吖": "a",
  "嘞": "le"
};

function mapTokenToMandarinHanzi(token) {
  if (isPunctuation(token)) return token;
  const normalized = normalizeHanzi(token);
  if (MANDARIN_TOKEN_MAP[normalized]) return toSimplified(MANDARIN_TOKEN_MAP[normalized]);
  let converted = "";
  for (const ch of normalized) {
    converted += MANDARIN_CHAR_MAP[ch] || ch;
  }
  return toSimplified(converted || normalized);
}

function mapTokenToMandarinPinyin(cantoToken, mandarinToken) {
  if (isPunctuation(cantoToken)) return cantoToken;
  const cNorm = normalizeHanzi(cantoToken);
  const mNorm = normalizeHanzi(mandarinToken);
  if (MANDARIN_PINYIN_MAP[mNorm]) return MANDARIN_PINYIN_MAP[mNorm];
  if (MANDARIN_PINYIN_MAP[cNorm]) return MANDARIN_PINYIN_MAP[cNorm];
  if (mNorm) {
    const chars = Array.from(mNorm).map((ch) => {
      if (isPunctuation(ch)) return ch;
      return MANDARIN_CHAR_PINYIN_MAP[ch] || ch;
    });
    const merged = cleanLiteral(chars.join(" "));
    if (merged) return merged;
  }
  return "";
}

function deriveMandarinFromCantonese(item) {
  const hanzi = String(item?.hanzi || "").trim();
  if (!hanzi) return { hanzi: "", roman: "" };
  const tokens = tokenizeSentence(hanzi);
  const mappedHanziTokens = tokens.map((token) => mapTokenToMandarinHanzi(token));
  const mappedRomanTokens = tokens.map((token, idx) => mapTokenToMandarinPinyin(token, mappedHanziTokens[idx]));
  const mappedHanzi = cleanLiteral(mappedHanziTokens.join(" "));
  const mappedRoman = cleanLiteral(mappedRomanTokens.filter(Boolean).join(" "));
  return { hanzi: mappedHanzi || hanzi, roman: mappedRoman };
}

function readLocalizedField(item, keys) {
  if (!item || typeof item !== "object") return "";
  for (let i = 0; i < keys.length; i += 1) {
    const raw = item[keys[i]];
    if (raw === null || raw === undefined) continue;
    const text = String(raw).trim();
    if (text) return text;
  }
  return "";
}

function localizeEntry(item) {
  const source = item && typeof item === "object" ? item : {};
  const cantoHanzi = String(source.hanzi || "").trim();
  const cantoRoman = String(source.jyutping || "").trim();
  const cantoEnglish = String(source.english || "").trim();
  const fallbackMandarin = deriveMandarinFromCantonese(source);
  const rawMandarinHanzi = readLocalizedField(source, ["mandarin_hanzi", "mandarinHanzi"]) || fallbackMandarin.hanzi || cantoHanzi;
  const mandarinHanzi = toSimplified(rawMandarinHanzi);
  const mandarinRoman = readLocalizedField(source, ["pinyin", "mandarin_pinyin", "mandarinPinyin"]) || fallbackMandarin.roman || "";
  const mandarinEnglish = readLocalizedField(source, ["mandarin_english", "mandarinEnglish"]) || cantoEnglish;
  const intentId = readLocalizedField(source, ["intent_id", "intentId"]);
  const mode = normalizeLanguageMode(state?.prefs?.languageMode);

  const localized = {
    mode,
    isCompare: mode === "compare",
    intentId,
    cantonese: { hanzi: cantoHanzi, roman: cantoRoman, english: cantoEnglish },
    mandarin: { hanzi: mandarinHanzi, roman: mandarinRoman, english: mandarinEnglish },
    display: { hanzi: cantoHanzi, roman: cantoRoman, english: cantoEnglish },
    analysis: { hanzi: cantoHanzi, roman: cantoRoman },
    answerEnglish: cantoEnglish,
    speechText: cantoHanzi
  };

  if (mode === "mandarin") {
    localized.display = {
      hanzi: mandarinHanzi || cantoHanzi,
      roman: mandarinRoman || cantoRoman,
      english: mandarinEnglish || cantoEnglish
    };
    localized.analysis = {
      hanzi: localized.display.hanzi,
      roman: localized.display.roman
    };
    localized.answerEnglish = localized.display.english;
    localized.speechText = localized.display.hanzi || cantoHanzi;
    return localized;
  }

  if (mode === "compare") {
    localized.display = {
      hanzi: `粵: ${cantoHanzi || "-"}\n普: ${mandarinHanzi || "-"}`,
      roman: `粵: ${cantoRoman || "-"}\n普: ${mandarinRoman || "-"}`,
      english: cantoEnglish && mandarinEnglish && cantoEnglish !== mandarinEnglish
        ? `C: ${cantoEnglish}\nM: ${mandarinEnglish}`
        : (cantoEnglish || mandarinEnglish)
    };
    localized.analysis = { hanzi: cantoHanzi, roman: cantoRoman };
    localized.answerEnglish = cantoEnglish || mandarinEnglish;
    localized.speechText = cantoHanzi || mandarinHanzi;
    return localized;
  }

  return localized;
}

function localizedSpeechText(item) {
  const localized = localizeEntry(item);
  return localized.speechText || localized.cantonese?.hanzi || "";
}

function buildCompareLabeledLine(cantoHtml, mandarinHtml) {
  return `<span class="compare-prefix">粵:</span> ${cantoHtml || "-"}<br><span class="compare-prefix">普:</span> ${mandarinHtml || "-"}`;
}

function buildRubyByCharacter(hanziInput, romanInput) {
  const hanzi = String(hanziInput || "");
  const romanRaw = String(romanInput || "")
    .replace(/[，。！？、,.!?/]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  const syllables = romanRaw ? romanRaw.split(" ") : [];
  let syllableIdx = 0;
  const out = [];
  for (const ch of Array.from(hanzi)) {
    if (/\s/.test(ch)) continue;
    if (isPunctuation(ch)) {
      out.push(escapeHtml(ch));
      continue;
    }
    const syllable = syllables[syllableIdx] || "";
    if (syllable) syllableIdx += 1;
    out.push(`<ruby><rb>${escapeHtml(ch)}</rb>${syllable ? `<rt>${escapeHtml(syllable)}</rt>` : ""}</ruby>`);
  }
  return out.join("");
}

function toneChoiceLabel(item) {
  const localized = localizeEntry(item);
  if (localized.mode === "mandarin") {
    return localized.mandarin.roman || localized.cantonese.roman || "-";
  }
  if (localized.mode === "compare") {
    return `${localized.cantonese.roman || "-"} / ${localized.mandarin.roman || "-"}`;
  }
  return localized.cantonese.roman || localized.display.roman || "-";
}

function romanToggleIcon() {
  const mode = normalizeLanguageMode(state?.prefs?.languageMode);
  if (mode === "mandarin") return "拼";
  if (mode === "compare") return "粵/拼";
  return "粵";
}

function romanToggleLabelState(isOn) {
  const mode = normalizeLanguageMode(state?.prefs?.languageMode);
  if (mode === "mandarin") return isOn ? "Pinyin on" : "Pinyin off";
  if (mode === "compare") return isOn ? "Romanization on" : "Romanization off";
  return isOn ? "Jyutping on" : "Jyutping off";
}

function appTitleForMode(modeInput) {
  const mode = normalizeLanguageMode(modeInput);
  if (mode === "mandarin") return "Mandarin Coach";
  if (mode === "compare") return "Canton+Mand Coach";
  return "Cantonese Coach";
}

function renderAppTitle() {
  const nextTitle = appTitleForMode(state?.prefs?.languageMode);
  if (els.appTitle) els.appTitle.textContent = nextTitle;
  document.title = nextTitle;
}

function normalizeLocalizedWordEntry(word, idx) {
  const safe = word && typeof word === "object" ? { ...word } : {};
  return {
    ...safe,
    id: String(safe.id || `w_${idx + 1}`),
    hanzi: String(safe.hanzi || "").trim(),
    jyutping: String(safe.jyutping || "").trim(),
    english: String(safe.english || "").trim(),
    mandarin_hanzi: readLocalizedField(safe, ["mandarin_hanzi", "mandarinHanzi"]),
    pinyin: readLocalizedField(safe, ["pinyin", "mandarin_pinyin", "mandarinPinyin"]),
    mandarin_english: readLocalizedField(safe, ["mandarin_english", "mandarinEnglish"]),
    intent_id: readLocalizedField(safe, ["intent_id", "intentId"])
  };
}

function normalizeLocalizedSentenceEntry(sentence, idx, fallbackIdPrefix) {
  const safe = sentence && typeof sentence === "object" ? { ...sentence } : {};
  return {
    ...safe,
    id: String(safe.id || `${fallbackIdPrefix}_${idx + 1}`),
    hanzi: String(safe.hanzi || "").trim(),
    jyutping: String(safe.jyutping || "").trim(),
    english: normalizeEnglishSentence(safe.english || ""),
    mandarin_hanzi: readLocalizedField(safe, ["mandarin_hanzi", "mandarinHanzi"]),
    pinyin: readLocalizedField(safe, ["pinyin", "mandarin_pinyin", "mandarinPinyin"]),
    mandarin_english: readLocalizedField(safe, ["mandarin_english", "mandarinEnglish"]),
    intent_id: readLocalizedField(safe, ["intent_id", "intentId"])
  };
}

function isMissingMeaning(english) {
  const value = String(english || "").trim();
  return !value || /^\[.*\]$/.test(value);
}

function lookupMeaningExact(hanzi) {
  const key = normalizeHanzi(hanzi);
  const byWord = getRuntimeWordsForLookup().find((w) => normalizeHanzi(w.hanzi) === key);
  if (byWord?.english) return String(byWord.english).split("/")[0].trim();
  if (EXTRA_TOKEN_MEANINGS[key]) return EXTRA_TOKEN_MEANINGS[key];
  if (CORE_WORD_MEANINGS[key]) return CORE_WORD_MEANINGS[key];
  return "";
}

function lookupJyutpingExact(hanzi) {
  const key = normalizeHanzi(hanzi);
  const byWord = getRuntimeWordsForLookup().find((w) => normalizeHanzi(w.hanzi) === key);
  if (byWord?.jyutping && byWord.jyutping !== "to-confirm") return cleanLiteral(byWord.jyutping);
  if (EXTRA_TOKEN_JYUTPING[key]) return cleanLiteral(EXTRA_TOKEN_JYUTPING[key]);
  if (AUTO_TOKEN_JYUTPING && AUTO_TOKEN_JYUTPING[key]) return cleanLiteral(AUTO_TOKEN_JYUTPING[key]);
  if (CORE_WORD_JYUTPING[key]) return cleanLiteral(CORE_WORD_JYUTPING[key]);
  return "";
}

function composeMeaningFromChars(hanzi) {
  const chars = Array.from(String(hanzi || "").trim()).filter((ch) => !isPunctuation(ch));
  if (!chars.length || chars.length < 2) return "";
  const parts = [];
  for (let i = 0; i < chars.length; i += 1) {
    const meaning = lookupMeaningExact(chars[i]);
    if (!meaning) return "";
    parts.push(String(meaning).split("/")[0].trim());
  }
  return cleanLiteral(parts.join(" "));
}

function composeJyutpingFromChars(hanzi) {
  const chars = Array.from(String(hanzi || "").trim()).filter((ch) => !isPunctuation(ch));
  if (!chars.length || chars.length < 2) return "";
  const parts = [];
  for (let i = 0; i < chars.length; i += 1) {
    const roman = lookupJyutpingExact(chars[i]);
    if (!roman || roman === chars[i] || roman === "to-confirm") return "";
    parts.push(roman);
  }
  return cleanLiteral(parts.join(" "));
}

function meaningForWord(hanzi, category) {
  const key = normalizeHanzi(hanzi);
  const exact = lookupMeaningExact(key);
  if (exact) return exact;
  const derived = composeMeaningFromChars(key);
  if (derived) return derived;
  return category ? `${category} term` : "word";
}

function isMissingJyutping(jyutping) {
  return !String(jyutping || "").trim();
}

function jyutpingForWord(hanzi) {
  const key = normalizeHanzi(hanzi);
  const exact = lookupJyutpingExact(key);
  if (exact) return exact;
  const derived = composeJyutpingFromChars(key);
  if (derived) return derived;
  return "to-confirm";
}

function syncControlValues() {
  els.globalLevel.value = String(normalizePracticeLevel(state.prefs.level));
  els.globalTense.value = state.prefs.tense || "mixed";
  if (els.wordFilter) els.wordFilter.value = state.prefs.wordFilter || "mixed";
  els.globalTheme.value = state.prefs.theme || "mixed";
  if (els.questionLevel) els.questionLevel.value = state.prefs.questionLevel || "basic";
  if (els.questionTense) els.questionTense.value = state.prefs.questionTense || "mixed";
  if (els.questionTheme) els.questionTheme.value = normalizeQuestionType(state.prefs.questionTheme);
  if (els.toneExerciseMode) els.toneExerciseMode.value = state.prefs.toneExerciseMode || "word";
  if (els.themeStyle) els.themeStyle.value = state.prefs.uiTheme || "classic";
  if (els.languageMode) els.languageMode.value = normalizeLanguageMode(state.prefs.languageMode);
  els.audioRate.value = String(state.prefs.voiceRate || 0.9);
  els.audioRateValue.textContent = `${Number(state.prefs.voiceRate || 0.9).toFixed(2)}x`;
  if (els.audioNoiseOn) els.audioNoiseOn.value = state.prefs.audioNoiseOn ? "on" : "off";
  if (els.audioNoiseType) els.audioNoiseType.value = state.prefs.audioNoiseType || "white";
  if (els.audioNoiseLevel) els.audioNoiseLevel.value = String(state.prefs.audioNoiseLevel || 0.25);
  if (els.audioNoiseValue) els.audioNoiseValue.textContent = Number(state.prefs.audioNoiseLevel || 0.25).toFixed(2);
  updateAnalyticsConsentUI();
}

function initVoiceControls() {
  refreshVoiceOptions();
  if (window.speechSynthesis) {
    window.speechSynthesis.onvoiceschanged = refreshVoiceOptions;
  }
}

function isRelevantLearningVoice(voice) {
  const lang = String(voice?.lang || "").toLowerCase();
  const name = String(voice?.name || "").toLowerCase();
  const sig = `${lang} ${name}`;
  if (!sig.trim()) return false;

  if (/^zh/.test(lang) || /^yue/.test(lang)) return true;
  if (/cantonese|mandarin|putonghua|guoyu|chinese/.test(name)) return true;
  if (/\byue\b|\bcmn\b|zh-hk|zh-mo|zh-yue|zh-cn|zh-sg|zh-tw|zh-hans|zh-hant/.test(sig)) return true;
  return false;
}

function refreshVoiceOptions() {
  const voices = window.speechSynthesis?.getVoices?.() || [];
  const relevantVoices = voices.filter((v) => isRelevantLearningVoice(v));
  const pickerVoices = relevantVoices.length ? relevantVoices : voices;
  state.availableVoices = pickerVoices.slice();
  const current = state.prefs.voiceURI || "auto";
  els.audioVoice.innerHTML = "";

  const auto = document.createElement("option");
  auto.value = "auto";
  auto.textContent = "Auto (best Cantonese/Mandarin)";
  els.audioVoice.appendChild(auto);

  pickerVoices
    .sort((a, b) => `${a.lang} ${a.name}`.localeCompare(`${b.lang} ${b.name}`))
    .forEach((v) => {
      const option = document.createElement("option");
      option.value = v.voiceURI;
      option.textContent = `${v.name} (${v.lang})`;
      els.audioVoice.appendChild(option);
    });

  const hasCurrent = current === "auto" || pickerVoices.some((v) => v.voiceURI === current);
  els.audioVoice.value = hasCurrent ? current : "auto";
  if (!hasCurrent) {
    state.prefs.voiceURI = "auto";
    saveJson(STORAGE_KEYS.prefs, state.prefs);
  }
}

function setMiniToggle(btn, isOn, iconText, onLabel, offLabel) {
  if (!btn) return;
  btn.classList.add("pattern-mini-btn", "pattern-toggle-btn");
  btn.classList.toggle("is-on", !!isOn);
  btn.classList.toggle("is-off", !isOn);
  btn.setAttribute("aria-pressed", isOn ? "true" : "false");
  btn.textContent = iconText;
  btn.setAttribute("aria-label", isOn ? onLabel : offLabel);
}

function applyVisibilityPrefs() {
  const showJp = !!state.prefs.showJyutping;
  const showEn = !!state.prefs.showEnglish;
  const showLens = !!state.prefs.showGrammarLens;
  const languageMode = normalizeLanguageMode(state.prefs.languageMode);
  const inlineRubyCompare = languageMode === "compare";

  els.wordJyutping.classList.toggle("hidden", inlineRubyCompare || !showJp);
  els.patternJyutping.classList.toggle("hidden", inlineRubyCompare || !showJp);
  if (els.questionJyutping) {
    els.questionJyutping.classList.toggle("hidden", inlineRubyCompare || !showJp);
  }

  els.wordEnglish.classList.toggle("hidden", !showEn);
  if (els.wordLiteral) {
    const hasLiteral = !!String(els.wordLiteral.textContent || "").trim();
    els.wordLiteral.classList.toggle("hidden", !showEn || !hasLiteral);
  }
  els.patternEnglish.classList.toggle("hidden", !showEn);
  els.patternLiteral.classList.toggle("hidden", !showEn && !showLens);
  if (els.questionEnglish) els.questionEnglish.classList.toggle("hidden", !showEn);
  if (els.questionLiteral) els.questionLiteral.classList.toggle("hidden", !showEn && !showLens);

  setMiniToggle(els.toggleWordJyutping, showJp, romanToggleIcon(), romanToggleLabelState(true), romanToggleLabelState(false));
  setMiniToggle(els.toggleQuestionJyutping, showJp, romanToggleIcon(), romanToggleLabelState(true), romanToggleLabelState(false));
  setMiniToggle(els.toggleWordEnglish, showEn, "EN", "English on", "English off");
  setMiniToggle(els.toggleQuestionEnglish, showEn, "EN", "English on", "English off");
  renderPatternActionButtons(showJp, showEn, showLens);
  setMiniToggle(els.toggleQuestionGrammarLens, showLens, "◎", "Lens on", "Lens off");
  applyToneVisibility();
  applyMiniStoryVisibility();
}

function applyQuizVisibility() {
  const showHanzi = !!state.quizDisplay.hanzi;
  const showJp = !!state.quizDisplay.jyutping;
  const showEn = !!state.quizDisplay.english;
  const showLens = !!state.quizDisplay.lens;
  const languageMode = normalizeLanguageMode(state.prefs.languageMode);

  if (els.quizHanzi) els.quizHanzi.classList.toggle("hidden", !showHanzi);
  if (els.quizJyutping) {
    const hideQuizRomanLine = languageMode === "compare" || !showJp;
    els.quizJyutping.classList.toggle("hidden", hideQuizRomanLine);
  }
  if (els.quizEnglish) els.quizEnglish.classList.toggle("hidden", !showEn);
  if (els.quizLiteral) els.quizLiteral.classList.toggle("hidden", !showEn && !showLens);
  if (els.quizGrammarNotes) els.quizGrammarNotes.classList.toggle("hidden", !showLens);
  setMiniToggle(els.toggleQuizGrammarLens, showLens, "◎", "Lens on", "Lens off");
  setMiniToggle(els.toggleQuizJyutping, showJp, romanToggleIcon(), romanToggleLabelState(true), romanToggleLabelState(false));
  setMiniToggle(els.toggleQuizEnglish, showEn, "EN", "English on", "English off");
  setMiniToggle(byId("showQuizText"), showHanzi, "字", "Hanzi on", "Hanzi off");
}

function renderPatternActionButtons(showJp, showEn, showLens) {
  if (els.newPattern) {
    els.newPattern.classList.add("pattern-next-btn");
    els.newPattern.textContent = "↗";
  }
  if (els.patternNextText) {
    els.patternNextText.textContent = "Next";
  }
  setMiniToggle(els.toggleGrammarLens, showLens, "◎", "Lens on", "Lens off");
  setMiniToggle(els.togglePatternJyutping, showJp, romanToggleIcon(), romanToggleLabelState(true), romanToggleLabelState(false));
  setMiniToggle(els.togglePatternEnglish, showEn, "EN", "English on", "English off");

  if (els.patternLensText) els.patternLensText.textContent = "Lens";
  if (els.patternJpText) {
    const mode = normalizeLanguageMode(state.prefs.languageMode);
    els.patternJpText.textContent = mode === "mandarin" ? "Pinyin" : (mode === "compare" ? "Roman" : "Jyutping");
  }
  if (els.wordJpText) {
    const mode = normalizeLanguageMode(state.prefs.languageMode);
    els.wordJpText.textContent = mode === "mandarin" ? "Pinyin" : (mode === "compare" ? "Roman" : "Jyutping");
  }
  if (els.questionJpText) {
    const mode = normalizeLanguageMode(state.prefs.languageMode);
    els.questionJpText.textContent = mode === "mandarin" ? "Pinyin" : (mode === "compare" ? "Roman" : "Jyutping");
  }
  if (els.patternEnText) els.patternEnText.textContent = "English";
  renderAppTitle();
}

function toggleGrammarLensState() {
  state.prefs.showGrammarLens = !state.prefs.showGrammarLens;
  saveJson(STORAGE_KEYS.prefs, state.prefs);
  applyVisibilityPrefs();
  renderPatternSentence();
  renderQuizGrammar();
  renderQuestionSentence();
}

function applyToneVisibility() {
  if (!els.toneJyutping || !els.toneEnglish) return;
  const showToneJp = !!state.prefs.toneShowJyutping;
  const showToneEn = !!state.prefs.toneShowEnglish;
  els.toneJyutping.classList.add("hidden");
  els.toneEnglish.classList.toggle("hidden", !showToneEn);
  setMiniToggle(els.toggleToneJyutping, showToneJp, romanToggleIcon(), romanToggleLabelState(true), romanToggleLabelState(false));
  setMiniToggle(els.toggleToneEnglish, showToneEn, "EN", "English on", "English off");
}

function applyTheme(themeName) {
  const normalized = String(themeName || "classic");
  if (normalized === "classic") {
    document.body.removeAttribute("data-theme");
    return;
  }
  document.body.setAttribute("data-theme", normalized);
}

function normalizeAnalyticsConsent(value) {
  const raw = String(value ?? "").trim().toLowerCase();
  if (raw === "accepted" || raw === "on" || raw === "true" || raw === "yes") return "accepted";
  if (raw === "declined" || raw === "off" || raw === "false" || raw === "no") return "declined";
  return "unknown";
}

function updateAnalyticsConsentUI() {
  const consent = normalizeAnalyticsConsent(state?.prefs?.analyticsConsent);
  if (els.analyticsConsentSelect) {
    els.analyticsConsentSelect.value = consent === "accepted" ? "accepted" : "declined";
  }
  if (els.analyticsConsentNote) {
    if (consent === "accepted") {
      els.analyticsConsentNote.textContent = "Anonymous analytics is ON. No email/account identity is sent.";
    } else if (consent === "declined") {
      els.analyticsConsentNote.textContent = "Analytics is OFF. You can enable it anytime.";
    } else {
      els.analyticsConsentNote.textContent = "Not decided yet. Analytics stays OFF until you accept.";
    }
  }
}

function setAnalyticsConsent(nextValue, options = {}) {
  const normalized = normalizeAnalyticsConsent(nextValue) === "accepted" ? "accepted" : "declined";
  state.prefs.analyticsConsent = normalized;
  saveJson(STORAGE_KEYS.prefs, state.prefs);
  updateAnalyticsConsentUI();
  if (options.closePrompt !== false && els.analyticsConsentModal) {
    closeModalAnimated(els.analyticsConsentModal);
  }
}

function maybeShowAnalyticsConsentModal() {
  if (!els.analyticsConsentModal) return;
  if (normalizeAnalyticsConsent(state?.prefs?.analyticsConsent) !== "unknown") return;
  openModalAnimated(els.analyticsConsentModal);
}

function setControlsCollapsed(collapsed) {
  if (!els.controlsCard || !els.toggleControlsCard) return;
  els.controlsCard.classList.toggle("is-collapsed", collapsed);
  els.toggleControlsCard.textContent = collapsed ? "›" : "⌄";
}

function openModalAnimated(modalEl) {
  if (!modalEl) return;
  const existing = modalCloseTimers.get(modalEl);
  if (existing) {
    clearTimeout(existing);
    modalCloseTimers.delete(modalEl);
  }
  modalEl.classList.remove("hidden", "is-closing");
  requestAnimationFrame(() => {
    modalEl.classList.add("is-open");
  });
}

function closeModalAnimated(modalEl, duration = 270) {
  if (!modalEl) return;
  const existing = modalCloseTimers.get(modalEl);
  if (existing) clearTimeout(existing);
  modalEl.classList.remove("is-open");
  modalEl.classList.add("is-closing");
  const timer = setTimeout(() => {
    modalEl.classList.add("hidden");
    modalEl.classList.remove("is-closing");
    modalCloseTimers.delete(modalEl);
  }, duration);
  modalCloseTimers.set(modalEl, timer);
}

function openKnownListAnimated() {
  if (!els.knownListWrap) return;
  const existing = modalCloseTimers.get(els.knownListWrap);
  if (existing) {
    clearTimeout(existing);
    modalCloseTimers.delete(els.knownListWrap);
  }
  els.knownListWrap.classList.remove("hidden", "is-closing");
  requestAnimationFrame(() => {
    els.knownListWrap.classList.add("is-open");
  });
}

function closeKnownListAnimated(duration = 240) {
  if (!els.knownListWrap) return;
  const existing = modalCloseTimers.get(els.knownListWrap);
  if (existing) clearTimeout(existing);
  els.knownListWrap.classList.remove("is-open");
  els.knownListWrap.classList.add("is-closing");
  const timer = setTimeout(() => {
    if (!els.knownListWrap) return;
    els.knownListWrap.classList.add("hidden");
    els.knownListWrap.classList.remove("is-closing");
    modalCloseTimers.delete(els.knownListWrap);
  }, duration);
  modalCloseTimers.set(els.knownListWrap, timer);
}

function initSoftLayoutTransitions() {
  if (!window.ResizeObserver || layoutResizeObserver) return;
  const targets = [
    document.querySelector("#panel-words .card"),
    document.querySelector("#panel-patterns .card"),
    document.querySelector("#panel-listening .card"),
    document.querySelector("#panel-questions .card"),
    document.querySelector("#panel-exercises .card")
  ].filter(Boolean);
  if (!targets.length) return;

  layoutResizeObserver = new ResizeObserver((entries) => {
    entries.forEach((entry) => {
      const el = entry.target;
      const panel = el.closest(".panel");
      const isActivePanel = !panel || panel.classList.contains("is-active");
      const nextHeight = Math.round(entry.contentRect.height);
      const prevHeight = softResizeHeights.get(el) ?? nextHeight;

      if (!isActivePanel || nextHeight <= 0 || prevHeight <= 0 || Math.abs(nextHeight - prevHeight) < 6) {
        softResizeHeights.set(el, nextHeight);
        return;
      }
      if (el.dataset.resizing === "1") {
        softResizeHeights.set(el, nextHeight);
        return;
      }

      el.dataset.resizing = "1";
      el.style.height = `${prevHeight}px`;
      el.style.overflow = "hidden";
      el.style.transition = "height 210ms cubic-bezier(0.22, 0.61, 0.36, 1)";

      requestAnimationFrame(() => {
        el.style.height = `${nextHeight}px`;
      });

      const finish = () => {
        el.style.height = "";
        el.style.overflow = "";
        el.style.transition = "";
        delete el.dataset.resizing;
        softResizeHeights.set(el, nextHeight);
      };

      el.addEventListener("transitionend", finish, { once: true });
    });
  });

  targets.forEach((el) => {
    softResizeHeights.set(el, Math.round(el.getBoundingClientRect().height));
    layoutResizeObserver.observe(el);
  });
}

function ordinalSuffix(n) {
  const v = Math.abs(Number(n) || 0);
  const mod100 = v % 100;
  if (mod100 >= 11 && mod100 <= 13) return "th";
  const mod10 = v % 10;
  if (mod10 === 1) return "st";
  if (mod10 === 2) return "nd";
  if (mod10 === 3) return "rd";
  return "th";
}

function togglePref(prefKey) {
  state.prefs[prefKey] = !state.prefs[prefKey];
  saveJson(STORAGE_KEYS.prefs, state.prefs);
  applyVisibilityPrefs();
  if (state.currentSentence) renderPatternSentence();
  if (state.currentQuestion) renderQuestionSentence();
}

function resetRotations() {
  state.rotation = { words: [], patternSentences: [], quizSentences: [], questionSentences: [], tonePairs: [], exerciseSentences: [] };
}

function takeFromRotation(key, pool, getId) {
  if (!pool.length) return null;
  let queue = state.rotation[key] || [];
  const ids = pool.map(getId);
  queue = queue.filter((id) => ids.includes(id));
  if (!queue.length) queue = shuffle(ids.slice());
  const id = queue.shift();
  state.rotation[key] = queue;
  return pool.find((item) => getId(item) === id) || pool[randomInt(pool.length)];
}

function getFilteredSentences() {
  const level = normalizePracticeLevel(state.prefs.level);
  const tense = state.prefs.tense || "mixed";
  const theme = state.prefs.theme || "mixed";
  let pool = ALL_SENTENCES.filter((s) => (
    sentenceMatchesSelectedLevel(s.level, level)
    && (tense === "mixed" || s.tense === tense)
    && (theme === "mixed" || s.theme === theme)
  ));
  if (!pool.length) {
    pool = ALL_SENTENCES.filter((s) => sentenceMatchesSelectedLevel(s.level, level) && (tense === "mixed" || s.tense === tense));
  }
  if (!pool.length) {
    pool = ALL_SENTENCES.filter((s) => sentenceMatchesSelectedLevel(s.level, level));
  }
  if (level === 3) {
    pool = pool.filter((s) => sentenceComplexityScore(s) >= 10);
  }
  if (level === 4) {
    pool = pool.filter((s) => sentenceComplexityScore(s) >= 14);
  }
  return pool;
}

function sentenceComplexityScore(sentence) {
  const hanzi = String(sentence?.hanzi || "");
  const base = tokenizeSentence(hanzi).filter((t) => !isPunctuation(t)).length;
  const bonus = /，|；|,/.test(hanzi) ? 3 : 0;
  return base + bonus;
}

function isQuestionSentence(sentence) {
  const h = String(sentence?.hanzi || "");
  const e = String(sentence?.english || "");
  return /[？?]/.test(h) || /[？?]/.test(e) || /咩|未|邊度|邊個|點|幾時/.test(h);
}

function getQuestionSentencePool(mode = "basic") {
  const internalLevel = mode === "advanced" ? 7 : 6;
  const exact = ALL_SENTENCES.filter((s) => s.level === internalLevel && isQuestionSentence(s));
  if (exact.length) return exact;
  const fallback = ALL_SENTENCES.filter((s) => s.level >= 6 && isQuestionSentence(s));
  if (fallback.length) return fallback;
  return ALL_SENTENCES.filter((s) => isQuestionSentence(s));
}

function getFilteredQuestionSentences() {
  const mode = state.prefs.questionLevel || "basic";
  const tense = state.prefs.questionTense || "mixed";
  const qType = normalizeQuestionType(state.prefs.questionTheme);
  const base = getQuestionSentencePool(mode);
  let pool = base.filter((s) => (
    (tense === "mixed" || s.tense === tense)
    && (qType === "mixed" || getQuestionType(s) === qType)
  ));
  if (!pool.length && qType !== "mixed") {
    pool = base.filter((s) => getQuestionType(s) === qType);
  }
  if (!pool.length) {
    pool = base.filter((s) => tense === "mixed" || s.tense === tense);
  }
  if (!pool.length) {
    pool = base;
  }
  return pool;
}

function getQuestionType(sentence) {
  const h = String(sentence?.hanzi || "");
  const j = String(sentence?.jyutping || "");
  const e = String(sentence?.english || "").toLowerCase();
  const text = `${h} ${j}`.replace(/\s+/g, "");

  if (/點解|為咩|为何|为什么/.test(text) || /\bwhy\b/.test(e)) return "why";
  if (/幾多|幾錢|幾耐|几多|多少钱|多少/.test(text) || /\bhow much\b|\bhow many\b/.test(e)) return "how_much";
  if (/幾時|幾點|几时|几点|何時|什么时候/.test(text) || /\bwhen\b|\bwhat time\b/.test(e)) return "when";
  if (/邊度|邊到|喺邊|係邊|哪里|哪裡|在哪/.test(text) || /\bwhere\b/.test(e)) return "where";
  if (/同邊個|係邊個|系边个/.test(text) || /\bwho\b/.test(e)) return "who";
  if (/邊個|边个|誰|谁/.test(text)) return "who";
  if (/邊一|邊啲|哪一|哪些|哪個|哪个/.test(text) || /\bwhich\b/.test(e)) return "which";
  if (/點樣|點做|如何|怎样|怎么/.test(text) || /\bhow\b/.test(e)) return "how";
  if (/咩|乜|什麼|什么/.test(text) || /\bwhat\b/.test(e)) return "what";
  if (/係咪|會唔會|有冇|有無|可唔可以|得唔得|吗|嗎|未/.test(text) || /[？?]/.test(h)) return "yes_no";
  return "mixed";
}

function wordMatchesFilter(word, selectedFilter) {
  if (!word || selectedFilter === "mixed") return true;
  const key = normalizeHanzi(word.hanzi);
  const category = String(word.category || "").toLowerCase();

  const markerMap = {
    past_markers: new Set(["咗", "過", "完", "已經", "尋日", "上次", "之前"]),
    future_markers: new Set(["會", "將會", "聽日", "後天", "下次", "之後", "稍後", "遲啲"]),
    present_markers: new Set(["緊", "住", "而家", "今日"]),
    conditional_markers: new Set(["如果", "只要", "就算", "一...就", "因為", "所以"])
  };
  if (markerMap[selectedFilter]) return markerMap[selectedFilter].has(key);

  const categoryMap = {
    verb: new Set(["verb"]),
    verbs: new Set(["verb"]),
    noun: new Set(["noun", "food", "drink", "language"]),
    nouns: new Set(["noun", "food", "drink", "language"]),
    time: new Set(["time"]),
    grammar: new Set(["grammar"]),
    adjective: new Set(["adjective"]),
    adjectives: new Set(["adjective"]),
    adverb: new Set(["adverb"]),
    adverbs: new Set(["adverb"]),
    number: new Set(["number"]),
    numbers: new Set(["number"]),
    pronoun: new Set(["pronoun"]),
    pronouns: new Set(["pronoun"]),
    place: new Set(["place"]),
    places: new Set(["place"]),
    conjunction: new Set(["conjunction"]),
    conjunctions: new Set(["conjunction"]),
    preposition: new Set(["preposition"]),
    prepositions: new Set(["preposition"]),
    measure_word: new Set(["measure"]),
    measure: new Set(["measure"]),
    measure_words: new Set(["measure"]),
    particle: new Set(["particle", "final-particle"]),
    particles: new Set(["particle", "final-particle"]),
    aspect_marker: new Set(["aspect"]),
    aspect: new Set(["aspect"]),
    aspect_markers: new Set(["aspect"])
  };
  if (categoryMap[selectedFilter]) return categoryMap[selectedFilter].has(category);

  return false;
}

function buildWordExample(word) {
  if (!word) return "";
  if (word.example) return word.example;
  const key = normalizeHanzi(word.hanzi);
  const fromSentence = ALL_SENTENCES.find((s) => normalizeHanzi(s.hanzi).includes(key));
  if (fromSentence) return fromSentence.hanzi;
  if (word.category === "time") return `${word.hanzi}我學廣東話。`;
  if (word.category === "number") {
    if (key === "半") return "半杯水。";
    return `我有${word.hanzi}個朋友。`;
  }
  if (word.category === "verb") return `我${word.hanzi}。`;
  if (word.category === "adjective") return `呢個好${word.hanzi}。`;
  if (word.category === "place") return `我喺${word.hanzi}。`;
  return `我喺屋企見到${word.hanzi}。`;
}

function buildWordExampleEnglish(word, exampleHanzi) {
  if (!word) return "";
  const localized = localizeEntry(word);
  const wordMeaning = localized.answerEnglish || word.english || "this word";
  const key = normalizeHanzi(word.hanzi);
  const exact = ALL_SENTENCES.find((s) => normalizeHanzi(s.hanzi) === normalizeHanzi(exampleHanzi));
  if (exact?.english) return exact.english;
  const fromSentence = ALL_SENTENCES.find((s) => normalizeHanzi(s.hanzi).includes(key));
  if (fromSentence?.english) return fromSentence.english;
  if (word.example) {
    const fromExampleSentence = ALL_SENTENCES.find((s) => normalizeHanzi(s.hanzi) === normalizeHanzi(word.example));
    if (fromExampleSentence?.english) return fromExampleSentence.english;
  }
  if (word.category === "time") return `At ${wordMeaning || "this time"}, I study Cantonese.`;
  if (word.category === "number") {
    if (key === "半") return "Half a cup of water.";
    return `I have ${wordMeaning || "this number"} friends.`;
  }
  if (word.category === "verb") return `I ${wordMeaning || "do this action"}.`;
  if (word.category === "adjective") return `This is very ${wordMeaning || "good"}.`;
  if (word.category === "place") return `I am at ${wordMeaning || "this place"}.`;
  return `I can see ${wordMeaning || "this word"} at home.`;
}

function wordLevel(word) {
  const category = String(word?.category || "").toLowerCase();
  const low = new Set(["pronoun", "time", "grammar", "courtesy", "question", "number"]);
  const mid = new Set(["verb", "noun", "adjective", "place", "food", "drink", "language"]);
  const high = new Set(["aspect", "measure", "preposition", "conjunction", "adverb", "particle"]);
  let level = 3;
  if (low.has(category)) level = 1;
  if (mid.has(category)) level = 2;
  if (high.has(category)) level = 3;
  const len = normalizeHanzi(word?.hanzi).length;
  if (len >= 4) level += 2;
  else if (len >= 3) level += 1;
  return Math.min(level, 7);
}

function buildGeneratedAspectSentences() {
  const subjects = [
    { h: "我", j: "ngo5", e: "I" },
    { h: "你", j: "nei5", e: "You" },
    { h: "佢", j: "keoi5", e: "He/She" },
    { h: "我哋", j: "ngo5 dei6", e: "We" },
    { h: "你哋", j: "nei5 dei6", e: "You all" }
  ];

  const zo2Templates = [
    { vH: "食", vJ: "sik6", past: "ate", oH: "飯", oJ: "faan6", oE: "a meal", theme: "daily" },
    { vH: "飲", vJ: "jam2", past: "drank", oH: "水", oJ: "seoi2", oE: "water", theme: "daily" },
    { vH: "買", vJ: "maai5", past: "bought", oH: "嘢", oJ: "je5", oE: "things", theme: "travel" },
    { vH: "睇", vJ: "tai2", past: "read", oH: "書", oJ: "syu1", oE: "a book", theme: "home" },
    { vH: "寫", vJ: "se2", past: "wrote", oH: "功課", oJ: "gung1 fo3", oE: "homework", theme: "home" },
    { vH: "聽", vJ: "teng1", past: "listened to", oH: "廣東話", oJ: "gwong2 dung1 waa2", oE: "Cantonese", theme: "daily" },
    { vH: "見", vJ: "gin3", past: "met", oH: "朋友", oJ: "pang4 jau5", oE: "a friend", theme: "friends" },
    { vH: "去", vJ: "heoi3", past: "went to", oH: "餐廳", oJ: "caan1 teng1", oE: "a restaurant", theme: "travel" },
    { vH: "返", vJ: "faan1", past: "returned to", oH: "屋企", oJ: "uk1 kei2", oE: "home", theme: "home" },
    { vH: "搭", vJ: "daap3", past: "took", oH: "巴士", oJ: "baa1 si2", oE: "the bus", theme: "travel" }
  ];

  const gwo3Templates = [
    { vH: "去", vJ: "heoi3", exp: "been to", oH: "香港", oJ: "hoeng1 gong2", oE: "Hong Kong", theme: "travel" },
    { vH: "食", vJ: "sik6", exp: "tried", oH: "辣嘢", oJ: "laat6 je5", oE: "spicy food", theme: "daily" },
    { vH: "飲", vJ: "jam2", exp: "tried", oH: "咖啡", oJ: "gaa3 fe1", oE: "coffee", theme: "daily" },
    { vH: "見", vJ: "gin3", exp: "met", oH: "佢", oJ: "keoi5", oE: "him/her", theme: "friends" },
    { vH: "讀", vJ: "duk6", exp: "read", oH: "呢本書", oJ: "ni1 bun2 syu1", oE: "this book", theme: "home" },
    { vH: "聽", vJ: "teng1", exp: "heard", oH: "呢首歌", oJ: "ni1 sau2 go1", oE: "this song", theme: "friends" },
    { vH: "搭", vJ: "daap3", exp: "taken", oH: "飛機", oJ: "fei1 gei1", oE: "a plane", theme: "travel" },
    { vH: "住", vJ: "zyu6", exp: "stayed at", oH: "酒店", oJ: "zau2 dim3", oE: "a hotel", theme: "holiday" },
    { vH: "行", vJ: "haang4", exp: "walked around", oH: "市場", oJ: "si5 coeng4", oE: "the market", theme: "travel" },
    { vH: "試", vJ: "si3", exp: "tried", oH: "新菜", oJ: "san1 coi3", oE: "new dishes", theme: "holiday" }
  ];

  const jyunTemplates = [
    { vH: "食", vJ: "sik6", fin: "finished eating", oH: "飯", oJ: "faan6", oE: "", theme: "daily" },
    { vH: "飲", vJ: "jam2", fin: "finished drinking", oH: "茶", oJ: "caa4", oE: "", theme: "daily" },
    { vH: "寫", vJ: "se2", fin: "finished writing", oH: "功課", oJ: "gung1 fo3", oE: "", theme: "home" },
    { vH: "睇", vJ: "tai2", fin: "finished reading", oH: "呢本書", oJ: "ni1 bun2 syu1", oE: "", theme: "home" },
    { vH: "收", vJ: "sau1", fin: "finished packing", oH: "啲嘢", oJ: "di1 je5", oE: "", theme: "travel" },
    { vH: "做", vJ: "zou6", fin: "finished doing", oH: "家務", oJ: "gaa1 mou6", oE: "", theme: "home" },
    { vH: "買", vJ: "maai5", fin: "finished buying", oH: "菜", oJ: "coi3", oE: "", theme: "daily" },
    { vH: "聽", vJ: "teng1", fin: "finished listening to", oH: "呢課", oJ: "ni1 fo3", oE: "", theme: "daily" },
    { vH: "講", vJ: "gong2", fin: "finished speaking on", oH: "電話", oJ: "din6 waa2", oE: "", theme: "friends" },
    { vH: "試", vJ: "si3", fin: "finished trying", oH: "呢樣嘢", oJ: "ni1 joeng6 je5", oE: "", theme: "holiday" }
  ];

  const ganTemplates = [
    { vH: "食", vJ: "sik6", ing: "eating", oH: "飯", oJ: "faan6", oE: "a meal", theme: "daily" },
    { vH: "飲", vJ: "jam2", ing: "drinking", oH: "茶", oJ: "caa4", oE: "tea", theme: "daily" },
    { vH: "睇", vJ: "tai2", ing: "reading", oH: "書", oJ: "syu1", oE: "a book", theme: "home" },
    { vH: "聽", vJ: "teng1", ing: "listening to", oH: "音樂", oJ: "jam1 ngok6", oE: "music", theme: "friends" },
    { vH: "講", vJ: "gong2", ing: "talking on", oH: "電話", oJ: "din6 waa2", oE: "the phone", theme: "friends" },
    { vH: "行", vJ: "haang4", ing: "walking on", oH: "街", oJ: "gaai1", oE: "the street", theme: "travel" },
    { vH: "等", vJ: "dang2", ing: "waiting for", oH: "巴士", oJ: "baa1 si2", oE: "the bus", theme: "travel" },
    { vH: "做", vJ: "zou6", ing: "doing", oH: "功課", oJ: "gung1 fo3", oE: "homework", theme: "home" },
    { vH: "煮", vJ: "zyu2", ing: "cooking", oH: "飯", oJ: "faan6", oE: "food", theme: "home" },
    { vH: "搵", vJ: "wan2", ing: "looking for", oH: "朋友", oJ: "pang4 jau5", oE: "a friend", theme: "friends" }
  ];

  const out = [];
  let idCounter = 1000;

  function addZo2Examples() {
    for (let level = 1; level <= 5; level += 1) {
      zo2Templates.forEach((tpl) => {
        subjects.forEach((sub) => {
          out.push({
            id: `g${idCounter++}`,
            level,
            tense: "past",
            theme: tpl.theme,
            hanzi: `${sub.h}${tpl.vH}咗${tpl.oH}。`,
            jyutping: `${sub.j} ${tpl.vJ} zo2 ${tpl.oJ}`,
            english: `${sub.e} ${tpl.past} ${tpl.oE}.`
          });
        });
      });
    }
  }

  function addGwo3Examples() {
    for (let level = 1; level <= 5; level += 1) {
      gwo3Templates.forEach((tpl) => {
        subjects.forEach((sub) => {
          out.push({
            id: `g${idCounter++}`,
            level,
            tense: "past",
            theme: tpl.theme,
            hanzi: `${sub.h}${tpl.vH}過${tpl.oH}。`,
            jyutping: `${sub.j} ${tpl.vJ} gwo3 ${tpl.oJ}`,
            english: `${sub.e} ${haveVerb(sub.e)} ${tpl.exp} ${tpl.oE} before.`
          });
        });
      });
    }
  }

  function addJyunExamples() {
    for (let level = 1; level <= 5; level += 1) {
      jyunTemplates.forEach((tpl) => {
        subjects.forEach((sub) => {
          out.push({
            id: `g${idCounter++}`,
            level,
            tense: "past",
            theme: tpl.theme,
            hanzi: `${sub.h}${tpl.vH}完${tpl.oH}。`,
            jyutping: `${sub.j} ${tpl.vJ} jyun4 ${tpl.oJ}`,
            english: `${sub.e} ${tpl.fin} ${tpl.oE}`.trim() + "."
          });
        });
      });
    }
  }

  function addGanExamples() {
    for (let level = 1; level <= 5; level += 1) {
      ganTemplates.forEach((tpl) => {
        subjects.forEach((sub) => {
          out.push({
            id: `g${idCounter++}`,
            level,
            tense: "present",
            theme: tpl.theme,
            hanzi: `${sub.h}${tpl.vH}緊${tpl.oH}。`,
            jyutping: `${sub.j} ${tpl.vJ} gan2 ${tpl.oJ}`,
            english: `${sub.e} ${beVerb(sub.e)} ${tpl.ing} ${tpl.oE}.`
          });
        });
      });
    }
  }

  addZo2Examples();
  addGwo3Examples();
  addJyunExamples();
  addGanExamples();
  return out;
}

function beVerb(subjectEnglish) {
  if (subjectEnglish === "I") return "am";
  if (subjectEnglish === "He/She") return "is";
  return "are";
}

function haveVerb(subjectEnglish) {
  if (subjectEnglish === "He/She") return "has";
  return "have";
}

function buildGeneratedFutureSentences() {
  const subjects = [
    { h: "我", j: "ngo5", e: "I" },
    { h: "你", j: "nei5", e: "You" },
    { h: "佢", j: "keoi5", e: "He/She" },
    { h: "我哋", j: "ngo5 dei6", e: "We" },
    { h: "你哋", j: "nei5 dei6", e: "You all" }
  ];
  const prefixes = {
    1: { h: "", j: "", e: "" },
    2: { h: "聽日", j: "ting1 jat6", e: "Tomorrow" },
    3: { h: "之後", j: "zi1 hau6", e: "Later" },
    4: { h: "下次", j: "haa6 ci3", e: "Next time" },
    5: { h: "將來", j: "zoeng1 loi4", e: "In the future" }
  };
  const templates = [
    { vH: "食", vJ: "sik6", vE: "eat", oH: "飯", oJ: "faan6", oE: "a meal", theme: "daily" },
    { vH: "飲", vJ: "jam2", vE: "drink", oH: "茶", oJ: "caa4", oE: "tea", theme: "daily" },
    { vH: "買", vJ: "maai5", vE: "buy", oH: "嘢", oJ: "je5", oE: "things", theme: "travel" },
    { vH: "睇", vJ: "tai2", vE: "read", oH: "書", oJ: "syu1", oE: "a book", theme: "home" },
    { vH: "聽", vJ: "teng1", vE: "listen to", oH: "廣東話", oJ: "gwong2 dung1 waa2", oE: "Cantonese", theme: "daily" },
    { vH: "講", vJ: "gong2", vE: "speak", oH: "英文", oJ: "jing1 man4", oE: "English", theme: "friends" },
    { vH: "去", vJ: "heoi3", vE: "go to", oH: "餐廳", oJ: "caan1 teng1", oE: "a restaurant", theme: "travel" },
    { vH: "返", vJ: "faan1", vE: "return to", oH: "屋企", oJ: "uk1 kei2", oE: "home", theme: "home" },
    { vH: "見", vJ: "gin3", vE: "meet", oH: "朋友", oJ: "pang4 jau5", oE: "a friend", theme: "friends" },
    { vH: "學", vJ: "hok6", vE: "learn", oH: "廣東話", oJ: "gwong2 dung1 waa2", oE: "Cantonese", theme: "daily" }
  ];
  const out = [];
  let idCounter = 3000;
  for (let level = 1; level <= 5; level += 1) {
    const p = prefixes[level];
    templates.forEach((tpl) => {
      subjects.forEach((sub) => {
        const hanzi = `${p.h}${sub.h}會${tpl.vH}${tpl.oH}。`;
        const jyutping = `${p.j ? `${p.j} ` : ""}${sub.j} wui5 ${tpl.vJ} ${tpl.oJ}`.trim();
        const english = `${p.e ? `${p.e}, ` : ""}${sub.e} will ${tpl.vE} ${tpl.oE}.`;
        out.push({
          id: `gf${idCounter++}`,
          level,
          tense: "future",
          theme: tpl.theme,
          hanzi,
          jyutping,
          english
        });
      });
    });
  }
  return out;
}

function buildGeneratedConditionalSentences() {
  const subjects = [
    { h: "我", j: "ngo5", e: "I" },
    { h: "你", j: "nei5", e: "you" },
    { h: "佢", j: "keoi5", e: "he/she" },
    { h: "我哋", j: "ngo5 dei6", e: "we" },
    { h: "你哋", j: "nei5 dei6", e: "you all" }
  ];
  const templates = [
    { cH: "有時間", cJ: "jau5 si4 gaan3", cE: "have time", rH: "學廣東話", rJ: "hok6 gwong2 dung1 waa2", rE: "study Cantonese", theme: "daily" },
    { cH: "唔舒服", cJ: "m4 syu1 fuk6", cE: "feel unwell", rH: "早啲休息", rJ: "zou2 di1 jau1 sik1", rE: "rest earlier", theme: "home" },
    { cH: "肚餓", cJ: "tou5 ngo6", cE: "are hungry", rH: "去食飯", rJ: "heoi3 sik6 faan6", rE: "go eat", theme: "daily" },
    { cH: "口渴", cJ: "hau2 hot3", cE: "are thirsty", rH: "飲水", rJ: "jam2 seoi2", rE: "drink water", theme: "daily" },
    { cH: "想出街", cJ: "soeng2 ceot1 gaai1", cE: "want to go out", rH: "打畀朋友", rJ: "daa2 bei2 pang4 jau5", rE: "call a friend", theme: "friends" },
    { cH: "要返工", cJ: "jiu3 faan1 gung1", cE: "need to work", rH: "早啲出門", rJ: "zou2 di1 ceot1 mun4", rE: "leave earlier", theme: "daily" },
    { cH: "落雨", cJ: "lok6 jyu5", cE: "see rain", rH: "留喺屋企", rJ: "lau4 hai2 uk1 kei2", rE: "stay at home", theme: "home" },
    { cH: "做完功課", cJ: "zou6 jyun4 gung1 fo3", cE: "finish homework", rH: "睇書", rJ: "tai2 syu1", rE: "read", theme: "home" },
    { cH: "見到朋友", cJ: "gin3 dou2 pang4 jau5", cE: "meet friends", rH: "一齊飲茶", rJ: "jat1 cai4 jam2 caa4", rE: "drink tea together", theme: "friends" },
    { cH: "聽日放假", cJ: "ting1 jat6 fong3 gaa3", cE: "have a holiday tomorrow", rH: "去市場買嘢", rJ: "heoi3 si5 coeng4 maai5 je5", rE: "go to the market to buy things", theme: "holiday" }
  ];

  const out = [];
  let idCounter = 5000;
  for (let level = 1; level <= 5; level += 1) {
    templates.forEach((tpl) => {
      subjects.forEach((sub) => {
        const modalH = level >= 3 ? "就會" : "就";
        const modalJ = level >= 3 ? "zau6 wui5" : "zau6";
        const modalE = level >= 3 ? "will" : "";
        const tailH = level >= 5 ? "，因為咁樣會更好" : (level >= 4 ? "，之後再試一次" : "");
        const tailJ = level >= 5 ? ", jan1 wai6 gam3 joeng6 wui5 gang3 hou2" : (level >= 4 ? ", zi1 hau6 zoi3 si3 jat1 ci3" : "");
        const tailE = level >= 5 ? " because that is better" : (level >= 4 ? " and then try one more time" : "");
        const hanzi = `如果${sub.h}${tpl.cH}，${sub.h}${modalH}${tpl.rH}${tailH}。`;
        const jyutping = `jyu4 gwo2 ${sub.j} ${tpl.cJ}, ${sub.j} ${modalJ} ${tpl.rJ}${tailJ}`.trim();
        const english = `If ${sub.e} ${tpl.cE}, ${sub.e} ${modalE ? `${modalE} ` : ""}${tpl.rE}${tailE}.`
          .replace(/\s+/g, " ")
          .trim();
        out.push({
          id: `gc${idCounter++}`,
          level,
          tense: "conditional",
          theme: tpl.theme,
          hanzi,
          jyutping,
          english
        });
      });
    });
  }
  return out;
}

function buildGeneratedQuestionSentences() {
  const subjects = [
    { h: "你", j: "nei5", e: "you", be: "are", has: "have", pastBe: "were" },
    { h: "佢", j: "keoi5", e: "he/she", be: "is", has: "has", pastBe: "was" },
    { h: "你哋", j: "nei5 dei6", e: "you all", be: "are", has: "have", pastBe: "were" },
    { h: "我哋", j: "ngo5 dei6", e: "we", be: "are", has: "have", pastBe: "were" },
    { h: "你朋友", j: "nei5 pang4 jau5", e: "your friend", be: "is", has: "has", pastBe: "was" }
  ];
  const basicTemplates = [
    {
      tense: "present",
      theme: "daily",
      h: "而家做咩呀？",
      j: "ji4 gaa1 zou6 me1 aa3",
      en: (sub) => `What ${sub.be} ${sub.e} doing now?`
    },
    {
      tense: "present",
      theme: "home",
      h: "而家喺邊度呀？",
      j: "ji4 gaa1 hai2 bin1 dou6 aa3",
      en: (sub) => `Where ${sub.be} ${sub.e} now?`
    },
    {
      tense: "present",
      theme: "friends",
      h: "而家同邊個一齊呀？",
      j: "ji4 gaa1 tung4 bin1 go3 jat1 cai4 aa3",
      en: (sub) => `Who ${sub.be} ${sub.e} with now?`
    },
    {
      tense: "present",
      theme: "daily",
      h: "今日幾點返屋企呀？",
      j: "gam1 jat6 gei2 dim2 faan1 uk1 kei2 aa3",
      en: (sub) => `What time ${sub.be} ${sub.e} going home today?`
    },
    {
      tense: "past",
      theme: "daily",
      h: "尋日食咗咩呀？",
      j: "cam4 jat6 sik6 zo2 me1 aa3",
      en: (sub) => `What did ${sub.e} eat yesterday?`
    },
    {
      tense: "past",
      theme: "friends",
      h: "尋日同邊個一齊呀？",
      j: "cam4 jat6 tung4 bin1 go3 jat1 cai4 aa3",
      en: (sub) => `Who ${sub.pastBe} ${sub.e} with yesterday?`
    },
    {
      tense: "past",
      theme: "travel",
      h: "尋日去咗邊度呀？",
      j: "cam4 jat6 heoi3 zo2 bin1 dou6 aa3",
      en: (sub) => `Where did ${sub.e} go yesterday?`
    },
    {
      tense: "past",
      theme: "daily",
      h: "之前見過佢未呀？",
      j: "zi1 cin4 gin3 gwo3 keoi5 mei6 aa3",
      en: (sub) => `${capitalizeFirst(sub.has)} ${sub.e} met him/her before?`
    },
    {
      tense: "future",
      theme: "daily",
      h: "聽日幾點出門呀？",
      j: "ting1 jat6 gei2 dim2 ceot1 mun4 aa3",
      en: (sub) => `What time will ${sub.e} go out tomorrow?`
    },
    {
      tense: "future",
      theme: "travel",
      h: "聽日會去邊度呀？",
      j: "ting1 jat6 wui5 heoi3 bin1 dou6 aa3",
      en: (sub) => `Where will ${sub.e} go tomorrow?`
    },
    {
      tense: "future",
      theme: "home",
      h: "今晚會唔會喺屋企食飯呀？",
      j: "gam1 maan5 wui5 m4 wui5 hai2 uk1 kei2 sik6 faan6 aa3",
      en: (sub) => `Will ${sub.e} eat at home tonight?`
    }
  ];
  const advancedTemplates = [
    {
      tense: "conditional",
      theme: "daily",
      h: "如果聽日早上落大雨，仲會唔會照常返工呀？",
      j: "jyu4 gwo2 ting1 jat6 zou2 soeng6 lok6 daai6 jyu5, zung6 wui5 m4 wui5 ziu3 soeng4 faan1 gung1 aa3",
      en: (sub) => `If it rains heavily tomorrow morning, will ${sub.e} still go to work as usual?`
    },
    {
      tense: "conditional",
      theme: "travel",
      h: "如果班機延誤，會點樣改行程呀？",
      j: "jyu4 gwo2 baan1 gei1 jin4 ng6, wui5 dim2 joeng6 goi2 hang4 cing4 aa3",
      en: (sub) => `If the flight is delayed, how will ${sub.e} change the itinerary?`
    },
    {
      tense: "future",
      theme: "holiday",
      h: "下次去旅行之前，會唔會先訂好酒店同交通呀？",
      j: "haa6 ci3 heoi3 leoi5 hang4 zi1 cin4, wui5 m4 wui5 sin1 deng6 hou2 zau2 dim3 tung4 gaau1 tung1 aa3",
      en: (sub) => `Before the next trip, will ${sub.e} book the hotel and transport in advance?`
    },
    {
      tense: "past",
      theme: "friends",
      h: "之前見面嗰陣，傾咗幾耐計呀？",
      j: "zi1 cin4 gin3 min6 go2 zan6, king1 zo2 gei2 noi6 gai2 aa3",
      en: (sub) => `When ${sub.e} met before, how long did ${sub.e} chat?`
    },
    {
      tense: "present",
      theme: "home",
      h: "而家屋企咁嘈，仲可唔可以專心讀書呀？",
      j: "ji4 gaa1 uk1 kei2 gam3 cou4, zung6 ho2 m4 ho2 ji5 zyun1 sam1 duk6 syu1 aa3",
      en: (sub) => `With the house so noisy now, can ${sub.e} still focus on studying?`
    },
    {
      tense: "conditional",
      theme: "friends",
      h: "如果朋友突然改時間，會唔會等佢哋呀？",
      j: "jyu4 gwo2 pang4 jau5 dat6 jin4 goi2 si4 gaan3, wui5 m4 wui5 dang2 keoi5 dei6 aa3",
      en: (sub) => `If your friends suddenly change the time, will ${sub.e} wait for them?`
    }
  ];
  const out = [];
  let idCounter = 7000;
  basicTemplates.forEach((tpl) => {
    subjects.forEach((sub) => {
      out.push({
        id: `gq${idCounter++}`,
        level: 6,
        tense: tpl.tense,
        theme: tpl.theme,
        hanzi: `${sub.h}${tpl.h}`,
        jyutping: `${sub.j} ${tpl.j}`.trim(),
        english: tpl.en(sub)
      });
    });
  });
  advancedTemplates.forEach((tpl) => {
    subjects.forEach((sub) => {
      out.push({
        id: `gq${idCounter++}`,
        level: 7,
        tense: tpl.tense,
        theme: tpl.theme,
        hanzi: `${sub.h}${tpl.h}`,
        jyutping: `${sub.j} ${tpl.j}`.trim(),
        english: tpl.en(sub)
      });
    });
  });
  return out;
}

function buildGeneratedLevel3ExpandedSentences() {
  const subjects = [
    { h: "我", j: "ngo5", e: "I" },
    { h: "你", j: "nei5", e: "you" },
    { h: "佢", j: "keoi5", e: "he/she" },
    { h: "我哋", j: "ngo5 dei6", e: "we" },
    { h: "你哋", j: "nei5 dei6", e: "you all" }
  ];
  const mediumTemplates = {
    present: [
      { theme: "daily", h: "而家喺公司做緊嘢，之後先食午餐。", j: "ji4 gaa1 hai2 gung1 si1 zou6 gan2 je5, zi1 hau6 sin1 sik6 ng5 caan1", e: "are working at the office now, then will eat lunch." },
      { theme: "home", h: "而家喺屋企執緊房，等陣先休息。", j: "ji4 gaa1 hai2 uk1 kei2 zap1 gan2 fong2, dang2 zan6 sin1 jau1 sik1", e: "are tidying the room at home now, then will rest." },
      { theme: "friends", h: "而家同朋友傾緊計，仲想再聽多次。", j: "ji4 gaa1 tung4 pang4 jau5 king1 gan2 gai2, zung6 soeng2 zoi3 teng1 do1 ci3", e: "are chatting with friends now and still want to hear it again." },
      { theme: "travel", h: "而家喺街度等緊車，準備去市場買嘢。", j: "ji4 gaa1 hai2 gaai1 dou6 dang2 gan2 ce1, zeon2 bei6 heoi3 si5 coeng4 maai5 je5", e: "are waiting for transport on the street now, getting ready to go to the market." },
      { theme: "holiday", h: "而家喺酒店樓下食早餐，之後會去海邊行下。", j: "ji4 gaa1 hai2 zau2 dim3 lau4 haa6 sik6 zou2 caan1, zi1 hau6 wui5 heoi3 hoi2 bin1 haang4 haa5", e: "are having breakfast downstairs at the hotel now, then will walk by the sea." }
    ],
    past: [
      { theme: "daily", h: "尋日喺公司做完工作之後，先返屋企休息。", j: "cam4 jat6 hai2 gung1 si1 zou6 jyun4 gung1 zok3 zi1 hau6, sin1 faan1 uk1 kei2 jau1 sik1", e: "finished work at the office yesterday, then went home to rest." },
      { theme: "home", h: "頭先喺廚房煮完飯，跟住即刻洗碗。", j: "tau4 sin1 hai2 cyu4 fong2 zyu2 jyun4 faan6, gan1 zyu6 zik1 hak1 sai2 wun2", e: "finished cooking in the kitchen just now, then washed the dishes right away." },
      { theme: "friends", h: "上次同朋友食完飯之後，仲一齊行咗一陣。", j: "soeng6 ci3 tung4 pang4 jau5 sik6 jyun4 faan6 zi1 hau6, zung6 jat1 cai4 haang4 zo2 jat1 zan6", e: "finished eating with friends last time and then still walked together for a while." },
      { theme: "travel", h: "上星期去咗市場買菜，返到屋企先開始煮飯。", j: "soeng6 sing1 kei4 heoi3 zo2 si5 coeng4 maai5 coi3, faan1 dou3 uk1 kei2 sin1 hoi1 ci2 zyu2 faan6", e: "went to the market to buy vegetables last week, then started cooking after getting home." },
      { theme: "holiday", h: "假期嗰陣住過海邊酒店，所以而家仲記得嗰間房。", j: "gaa3 kei4 go2 zan6 zyu6 gwo3 hoi2 bin1 zau2 dim3, so2 ji5 ji4 gaa1 zung6 gei3 dak1 go2 gaan1 fong2", e: "stayed at a seaside hotel during the holiday, so still remember that room now." }
    ],
    future: [
      { theme: "daily", h: "聽日會早啲出門返工，避免塞車同遲到。", j: "ting1 jat6 wui5 zou2 di1 ceot1 mun4 faan1 gung1, bei6 min5 sak1 ce1 tung4 ci4 dou3", e: "will leave earlier for work tomorrow to avoid traffic and being late." },
      { theme: "home", h: "今晚會先做完家務，再同屋企人一齊食飯。", j: "gam1 maan5 wui5 sin1 zou6 jyun4 gaa1 mou6, zoi3 tung4 uk1 kei2 jan4 jat1 cai4 sik6 faan6", e: "will finish housework first tonight, then eat with family." },
      { theme: "friends", h: "下次會同朋友去新餐廳，順便試幾款新菜。", j: "haa6 ci3 wui5 tung4 pang4 jau5 heoi3 san1 caan1 teng1, seon6 bin6 si3 gei2 fun2 san1 coi3", e: "will go to a new restaurant with friends next time and try a few new dishes." },
      { theme: "travel", h: "遲啲會坐巴士去機場，接朋友再一齊返酒店。", j: "ci4 di1 wui5 co5 baa1 si2 heoi3 gei1 coeng4, zip3 pang4 jau5 zoi3 jat1 cai4 faan1 zau2 dim3", e: "will take a bus to the airport later, pick up a friend, then return to the hotel together." },
      { theme: "holiday", h: "下個月會安排假期，預早訂機票同酒店。", j: "haa6 go3 jyut6 wui5 on1 paai4 gaa3 kei4, jyu6 zou2 deng6 gei1 piu3 tung4 zau2 dim3", e: "will arrange the holiday next month and book flights and hotel early." }
    ],
    conditional: [
      { theme: "daily", h: "如果之後改時間，我就會再調整行程同工作。", j: "jyu4 gwo2 zi1 hau6 goi2 si4 gaan3, ngo5 zau6 wui5 zoi3 tiu4 zing2 hang4 cing4 tung4 gung1 zok3", e: "if the time changes later, then will adjust the schedule and work again." },
      { theme: "home", h: "如果今晚落雨，我哋就留喺屋企睇書同聽歌。", j: "jyu4 gwo2 gam1 maan5 lok6 jyu5, ngo5 dei6 zau6 lau4 hai2 uk1 kei2 tai2 syu1 tung4 teng1 go1", e: "if it rains tonight, then we will stay home reading and listening to music." },
      { theme: "friends", h: "如果朋友遲到，我會喺餐廳等佢再點菜。", j: "jyu4 gwo2 pang4 jau5 ci4 dou3, ngo5 wui5 hai2 caan1 teng1 dang2 keoi5 zoi3 dim2 coi3", e: "if a friend is late, I will wait at the restaurant and order later." },
      { theme: "travel", h: "如果交通唔方便，我哋就改搭巴士去市場。", j: "jyu4 gwo2 gaau1 tung1 m4 fong1 bin6, ngo5 dei6 zau6 goi2 daap3 baa1 si2 heoi3 si5 coeng4", e: "if transport is inconvenient, then we will switch to the bus to the market." },
      { theme: "holiday", h: "如果酒店太貴，我哋就搵另一間近地鐵嘅。", j: "jyu4 gwo2 zau2 dim3 taai3 gwai3, ngo5 dei6 zau6 wan2 ling6 jat1 gaan1 gan6 dei6 tit3 ge3", e: "if the hotel is too expensive, then we will find another one near the MTR." }
    ]
  };
  const out = [];
  let idCounter = 8100;
  Object.keys(mediumTemplates).forEach((tense) => {
    mediumTemplates[tense].forEach((tpl) => {
      subjects.forEach((sub) => {
        out.push({
          id: `gm3${idCounter++}`,
          level: 4,
          tense,
          theme: tpl.theme,
          hanzi: `${sub.h}${tpl.h}`,
          jyutping: `${sub.j} ${tpl.j}`.trim(),
          english: `${capitalizeFirst(sub.e)} ${tpl.e}`.replace(/\s+/g, " ").trim()
        });
      });
    });
  });
  return out;
}

function buildGeneratedLevel4LongSentences() {
  const subjects = [
    { h: "我", j: "ngo5", e: "I", be: "am", have: "have" },
    { h: "你", j: "nei5", e: "you", be: "are", have: "have" },
    { h: "佢", j: "keoi5", e: "he/she", be: "is", have: "has" },
    { h: "我哋", j: "ngo5 dei6", e: "we", be: "are", have: "have" },
    { h: "你哋", j: "nei5 dei6", e: "you all", be: "are", have: "have" }
  ];
  const longTemplates = {
    present: [
      { theme: "daily", h: "而家喺公司開會，之後仲要整理文件同覆電郵。", j: "ji4 gaa1 hai2 gung1 si1 hoi1 wui2, zi1 hau6 zung6 jiu3 zing2 lei5 man4 gin2 tung4 fuk1 din6 jau4", e: "are in a meeting at the office now, and still need to organize documents and reply to emails." },
      { theme: "home", h: "而家喺屋企煮緊飯，仲一邊聽廣東話一邊記新詞。", j: "ji4 gaa1 hai2 uk1 kei2 zyu2 gan2 faan6, zung6 jat1 bin1 teng1 gwong2 dung1 waa2 jat1 bin1 gei3 san1 ci4", e: "are cooking at home now while listening to Cantonese and memorizing new words." },
      { theme: "friends", h: "而家同朋友喺餐廳傾緊計，順便計劃下次一齊去旅行。", j: "ji4 gaa1 tung4 pang4 jau5 hai2 caan1 teng1 king1 gan2 gai2, seon6 bin6 gai3 waak6 haa6 ci3 jat1 cai4 heoi3 leoi5 hang4", e: "are chatting with friends at a restaurant now, and at the same time planning the next trip together." },
      { theme: "travel", h: "而家喺地鐵站等緊車，因為之後要轉兩程先到目的地。", j: "ji4 gaa1 hai2 dei6 tit3 zaam6 dang2 gan2 ce1, jan1 wai6 zi1 hau6 jiu3 zyun2 loeng5 cing4 sin1 dou3 muk6 dik1 dei6", e: "are waiting at the MTR station now because later need to transfer twice before arriving." },
      { theme: "holiday", h: "而家喺酒店大堂等朋友，之後會去海邊散步再食晚飯。", j: "ji4 gaa1 hai2 zau2 dim3 daai6 tong4 dang2 pang4 jau5, zi1 hau6 wui5 heoi3 hoi2 bin1 saan3 bou6 zoi3 sik6 maan5 faan6", e: "are waiting for friends in the hotel lobby now, then will walk by the sea and have dinner." },
      { theme: "daily", h: "而家雖然有啲攰，不過仲係保持練習，因為想快啲講得自然。", j: "ji4 gaa1 seoi1 jin4 jau5 di1 gui6, bat1 gwo3 zung6 hai6 bou2 ci4 lin6 zaap6, jan1 wai6 soeng2 faai3 di1 gong2 dak1 zi6 jin4", e: "are a little tired now, but still keep practicing because want to speak more naturally soon." }
    ],
    past: [
      { theme: "daily", h: "尋日做完所有工作之後，仲留咗喺公司一陣先返屋企。", j: "cam4 jat6 zou6 jyun4 so2 jau5 gung1 zok3 zi1 hau6, zung6 lau4 zo2 hai2 gung1 si1 jat1 zan6 sin1 faan1 uk1 kei2", e: "finished all work yesterday, and still stayed at the office for a while before going home." },
      { theme: "home", h: "尋晚喺廚房煮完飯之後，又同屋企人一齊收拾同洗碗。", j: "cam4 maan5 hai2 cyu4 fong2 zyu2 jyun4 faan6 zi1 hau6, jau6 tung4 uk1 kei2 jan4 jat1 cai4 sau1 sap6 tung4 sai2 wun2", e: "finished cooking in the kitchen last night, and then tidied up and washed dishes with family." },
      { theme: "friends", h: "上星期同朋友傾咗好耐計，最後先決定下次去邊度見面。", j: "soeng6 sing1 kei4 tung4 pang4 jau5 king1 zo2 hou2 noi6 gai2, zeoi3 hau6 sin1 kyut3 ding6 haa6 ci3 heoi3 bin1 dou6 gin3 min6", e: "chatted with friends for a long time last week, and only at the end decided where to meet next time." },
      { theme: "travel", h: "之前去過幾個市場，比較完價錢先買到又平又新鮮嘅菜。", j: "zi1 cin4 heoi3 gwo3 gei2 go3 si5 coeng4, bei2 gaau3 jyun4 gaa3 cin4 sin1 maai5 dou3 jau6 peng4 jau6 san1 sin1 ge3 coi3", e: "visited several markets before, and only after comparing prices bought vegetables that were cheap and fresh." },
      { theme: "holiday", h: "假期嗰陣住咗喺海邊酒店三晚，每朝都早起身去散步。", j: "gaa3 kei4 go2 zan6 zyu6 zo2 hai2 hoi2 bin1 zau2 dim3 saam1 maan5, mui5 ziu1 dou1 zou2 hei2 san1 heoi3 saan3 bou6", e: "stayed at a seaside hotel for three nights during the holiday, and went for a walk early every morning." },
      { theme: "daily", h: "啱啱試過新學習方法之後，發現記詞同聽力都明顯快咗。", j: "ngaam1 ngaam1 si3 gwo3 san1 hok6 zaap6 fong1 faat3 zi1 hau6, faat3 jin6 gei3 ci4 tung4 teng1 lik6 dou1 ming4 hin2 faai3 zo2", e: "after just trying a new study method, found that vocabulary and listening both improved clearly." }
    ],
    future: [
      { theme: "daily", h: "聽日會先完成手上工作，再留十分鐘專心練習聽力同發音。", j: "ting1 jat6 wui5 sin1 jyun4 sing4 sau2 soeng6 gung1 zok3, zoi3 lau4 sap6 fan1 zung1 zyun1 sam1 lin6 zaap6 teng1 lik6 tung4 faat3 jam1", e: "will finish current work first tomorrow, then keep ten minutes to focus on listening and pronunciation practice." },
      { theme: "home", h: "今晚會同屋企人一齊食飯，之後再用廣東話講返今日發生嘅事。", j: "gam1 maan5 wui5 tung4 uk1 kei2 jan4 jat1 cai4 sik6 faan6, zi1 hau6 zoi3 jung6 gwong2 dung1 waa2 gong2 faan1 gam1 jat6 faat3 sang1 ge3 si6", e: "will eat with family tonight, and afterwards retell what happened today in Cantonese." },
      { theme: "friends", h: "下次見朋友之前會準備幾句自然對白，等傾計時可以即刻用到。", j: "haa6 ci3 gin3 pang4 jau5 zi1 cin4 wui5 zeon2 bei6 gei2 geoi3 zi6 jin4 deoi3 baak6, dang2 king1 gai2 si4 ho2 ji5 zik1 hak1 jung6 dou3", e: "before seeing friends next time, will prepare a few natural lines so can use them immediately while chatting." },
      { theme: "travel", h: "遲啲會早啲去車站，預留時間買飛同確認轉車路線。", j: "ci4 di1 wui5 zou2 di1 heoi3 ce1 zaam6, jyu6 lau4 si4 gaan3 maai5 fei1 tung4 kuk1 jing6 zyun2 ce1 lou6 sin3", e: "will go to the station earlier later, leaving time to buy tickets and confirm transfer routes." },
      { theme: "holiday", h: "下個月放假之前會訂好機票酒店，同時安排每日學習時間。", j: "haa6 go3 jyut6 fong3 gaa3 zi1 cin4 wui5 deng6 hou2 gei1 piu3 zau2 dim3, tung4 si4 on1 paai4 mui5 jat6 hok6 zaap6 si4 gaan3", e: "before next month’s holiday, will book flights and hotel, and also arrange daily study time." },
      { theme: "daily", h: "之後會持續記錄常見句型，並且每晚用三分鐘快速覆習一次。", j: "zi1 hau6 wui5 ci4 zuk6 gei3 luk6 soeng4 gin3 geoi3 jing4, bing6 ce2 mui5 maan5 jung6 saam1 fan1 zung1 faai3 suk1 fuk1 zaap6 jat1 ci3", e: "will continue recording common sentence patterns later, and review them quickly every night for three minutes." }
    ],
    conditional: [
      { theme: "daily", h: "如果明日開會時間再改，我就會提早出門並且先通知同事安排。", j: "jyu4 gwo2 ming4 jat6 hoi1 wui2 si4 gaan3 zoi3 goi2, ngo5 zau6 wui5 tai4 zou2 ceot1 mun4 bing6 ce2 sin1 tung1 zi1 tung4 si6 on1 paai4", e: "if the meeting time changes again tomorrow, then will leave earlier and inform colleagues first." },
      { theme: "home", h: "如果今晚太攰，我哋就會留喺屋企簡單食飯，之後早啲休息。", j: "jyu4 gwo2 gam1 maan5 taai3 gui6, ngo5 dei6 zau6 wui5 lau4 hai2 uk1 kei2 gaan2 daan1 sik6 faan6, zi1 hau6 zou2 di1 jau1 sik1", e: "if tonight is too tiring, then we will stay home for a simple meal and rest early afterwards." },
      { theme: "friends", h: "如果朋友突然改地點，我會即刻查路線，確保唔會再遲到。", j: "jyu4 gwo2 pang4 jau5 dat6 jin4 goi2 dei6 dim2, ngo5 wui5 zik1 hak1 caa4 lou6 sin3, kok3 bou2 m4 wui5 zoi3 ci4 dou3", e: "if friends suddenly change the location, I will check the route immediately to make sure not to be late again." },
      { theme: "travel", h: "如果交通塞車好嚴重，我哋就改搭地鐵，仲會預多二十分鐘。", j: "jyu4 gwo2 gaau1 tung1 sak1 ce1 hou2 jim4 zung6, ngo5 dei6 zau6 goi2 daap3 dei6 tit3, zung6 wui5 jyu6 do1 ji6 sap6 fan1 zung1", e: "if traffic jams are severe, then we will switch to the MTR and still allow twenty extra minutes." },
      { theme: "holiday", h: "如果酒店價格再升，我哋就會轉去另一區，兼顧預算同交通方便。", j: "jyu4 gwo2 zau2 dim3 gaa3 gaak3 zoi3 sing1, ngo5 dei6 zau6 wui5 zyun2 heoi3 ling6 jat1 keoi1, gim1 gu3 jyu6 syun3 tung4 gaau1 tung1 fong1 bin6", e: "if hotel prices rise again, then we will move to another area to balance budget and transport convenience." },
      { theme: "daily", h: "如果我哋每日都肯練習十分鐘，講廣東話時就會越來越自然流利。", j: "jyu4 gwo2 ngo5 dei6 mui5 jat6 dou1 hang2 lin6 zaap6 sap6 fan1 zung1, gong2 gwong2 dung1 waa2 si4 zau6 wui5 jyut6 loi4 jyut6 zi6 jin4 lau4 lei6", e: "if we practice ten minutes every day, speaking Cantonese will become more and more natural and fluent." }
    ]
  };
  const out = [];
  let idCounter = 9200;
  Object.keys(longTemplates).forEach((tense) => {
    longTemplates[tense].forEach((tpl) => {
      subjects.forEach((sub) => {
        out.push({
          id: `gm4${idCounter++}`,
          level: 5,
          tense,
          theme: tpl.theme,
          hanzi: `${sub.h}${tpl.h}`,
          jyutping: `${sub.j} ${tpl.j}`.trim(),
          english: `${capitalizeFirst(sub.e)} ${tpl.e}`.replace(/\s+/g, " ").trim()
        });
      });
    });
  });
  return out;
}

function analyzeSentence(sentenceInput) {
  const hanzi = typeof sentenceInput === "string" ? sentenceInput : (sentenceInput?.hanzi || "");
  const originalJyutping = typeof sentenceInput === "string" ? "" : (sentenceInput?.jyutping || "");
  const tokens = tokenizeSentence(hanzi);
  const notes = [];
  const literalParts = [];
  const literalHtmlParts = [];
  const markerByIndex = {};
  const linkedVerbByMarker = {};
  const classByIndex = {};
  let mapIndex = 0;

  tokens.forEach((token, idx) => {
    const marker = ASPECT_MARKERS[token];
    if (!marker) return;
    markerByIndex[idx] = marker;
    const verbIndex = findPreviousVerbIndex(tokens, idx);
    linkedVerbByMarker[idx] = verbIndex;
    if (verbIndex >= 0) {
      notes.push(`Marker <strong>${token}</strong> = ${marker.label}, linked to verb <strong>${tokens[verbIndex]}</strong>.`);
    } else {
      notes.push(`Marker <strong>${token}</strong> = ${marker.label}.`);
    }
  });

  const tokenMeta = tokens.map((token, idx) => {
    const marker = markerByIndex[idx] || null;
    const isVerb = !isPunctuation(token) && isVerbToken(token);
    return {
      token,
      marker,
      isVerb,
      linkedVerbIndex: Number.isFinite(linkedVerbByMarker[idx]) ? linkedVerbByMarker[idx] : -1
    };
  });

  const annotated = tokens.map((token, idx) => {
    if (isPunctuation(token)) {
      literalParts.push(token);
      return escapeHtml(token);
    }

    const marker = tokenMeta[idx]?.marker || null;
    const isVerb = !!tokenMeta[idx]?.isVerb;
    const mapClass = `tok-map-${mapIndex % 8}`;
    mapIndex += 1;
    let cls = `tok ${mapClass}`;
    const role = marker?.role;
    if (role === "past") cls += " tok-past";
    if (role === "prog") cls += " tok-prog";
    if (role === "future") cls += " tok-future";
    if (isVerb) cls += " tok-verb";
    cls += " tok-clickable";
    classByIndex[idx] = cls;
    const dataAttrs = ` data-idx="${idx}" data-token="${escapeAttr(token)}" data-role="${escapeAttr(role || (isVerb ? "verb" : ""))}"`;

    const literal = literalForToken(token);
    literalParts.push(literal);
    literalHtmlParts.push(`<span class="${cls} tok-gloss">${escapeHtml(literal)}</span>`);
    return `<span class="${cls}"${dataAttrs}>${escapeHtml(token)}</span>`;
  });

  const annotatedJyutping = buildAnnotatedJyutping(tokens, classByIndex, originalJyutping);
  const rubyHanzi = buildRubyHanzi(tokens, classByIndex, tokenMeta, false);
  const annotatedRubyHanzi = buildRubyHanzi(tokens, classByIndex, tokenMeta, true);

  return {
    annotatedHanzi: annotated.join(""),
    annotatedJyutping,
    rubyHanzi,
    annotatedRubyHanzi,
    literal: cleanLiteral(literalParts.join(" ")),
    literalHtml: literalHtmlParts.join(" "),
    notes,
    tokens,
    tokenMeta
  };
}

function tokenizeSentence(hanzi) {
  const input = String(hanzi || "");
  const vocabulary = getTokenizerVocabulary();
  const tokens = [];
  let i = 0;
  while (i < input.length) {
    const char = input[i];
    if (/\s/.test(char)) {
      i += 1;
      continue;
    }
    if (/[A-Za-z0-9]/.test(char)) {
      let j = i + 1;
      while (j < input.length && /[A-Za-z0-9]/.test(input[j])) j += 1;
      tokens.push(input.slice(i, j));
      i = j;
      continue;
    }
    if (isPunctuation(char)) {
      tokens.push(char);
      i += 1;
      continue;
    }
    let match = "";
    for (let j = 0; j < vocabulary.length; j += 1) {
      const candidate = vocabulary[j];
      if (candidate && input.startsWith(candidate, i)) {
        match = candidate;
        break;
      }
    }
    if (match) {
      tokens.push(match);
      i += match.length;
    } else {
      tokens.push(char);
      i += 1;
    }
  }
  return tokens;
}

function getTokenizerVocabulary() {
  if (Array.isArray(tokenizerVocabularyCache) && tokenizerVocabularyCache.length) {
    return tokenizerVocabularyCache;
  }
  const words = (state.content?.words || []).map((w) => normalizeHanzi(w.hanzi)).filter(Boolean);
  const extras = Object.keys(ASPECT_MARKERS)
    .concat(Object.keys(EXTRA_TOKEN_JYUTPING))
    .concat(Object.keys(EXTRA_TOKEN_MEANINGS))
    .concat([
    "已經", "將會", "唔係", "一齊", "啱啱", "之前", "之後", "不過", "因為", "所以"
  ]);
  tokenizerVocabularyCache = Array.from(new Set(words.concat(extras))).sort((a, b) => b.length - a.length);
  return tokenizerVocabularyCache;
}

function isPunctuation(token) {
  return /^[，。！？、,.!?]$/.test(token);
}

function isVerbToken(token) {
  const normalized = normalizeHanzi(token);
  const directVerb = (state.content?.words || []).find((w) => normalizeHanzi(w.hanzi) === normalized && w.category === "verb");
  if (directVerb) return true;
  return new Set(["係", "喺", "要", "想", "會", "將會", "有", "冇"]).has(normalized);
}

function findPreviousVerbIndex(tokens, markerIndex) {
  for (let i = markerIndex - 1; i >= 0; i -= 1) {
    if (isVerbToken(tokens[i])) return i;
  }
  return -1;
}

function literalForToken(token) {
  const normalized = normalizeHanzi(token);
  if (ASPECT_MARKERS[normalized]) return `[${ASPECT_MARKERS[normalized].label}]`;
  const exact = lookupMeaningExact(normalized);
  if (exact) return exact;
  const derived = composeMeaningFromChars(normalized);
  if (derived) return derived;
  return normalized;
}

function jyutpingForToken(token) {
  const normalized = normalizeHanzi(token);
  if (isPunctuation(normalized)) return normalized;
  const exact = lookupJyutpingExact(normalized);
  if (exact) return exact;
  const derived = composeJyutpingFromChars(normalized);
  if (derived) return derived;
  return normalized;
}

function buildAnnotatedJyutping(tokens, classByIndex, baseJyutping) {
  if (!Array.isArray(tokens) || !tokens.length) return escapeHtml(baseJyutping || "");
  const parts = [];
  let hasAtLeastOneMapped = false;
  let hasUnknownToken = false;
  tokens.forEach((token, idx) => {
    if (isPunctuation(token)) {
      parts.push(escapeHtml(token));
      return;
    }
    const jp = jyutpingForToken(token);
    if (!jp || jp === token || jp === "to-confirm") {
      hasUnknownToken = true;
      parts.push(escapeHtml(token));
      return;
    }
    const cls = `${classByIndex[idx] || "tok"} tok-jp`;
    parts.push(`<span class="${cls}">${escapeHtml(jp)}</span>`);
    hasAtLeastOneMapped = true;
  });
  if (hasUnknownToken && baseJyutping) return escapeHtml(baseJyutping);
  if (!hasAtLeastOneMapped) return escapeHtml(baseJyutping || "");
  return cleanLiteral(parts.join(" "));
}

function buildRubyHanzi(tokens, classByIndex, tokenMeta, useAnnotatedClasses) {
  if (!Array.isArray(tokens) || !tokens.length) return "";
  const parts = [];
  tokens.forEach((token, idx) => {
    if (isPunctuation(token)) {
      parts.push(escapeHtml(token));
      return;
    }
    const jp = jyutpingForToken(token);
    const showRt = jp && jp !== "to-confirm" && jp !== token;
    const ruby = `<ruby><rb>${escapeHtml(token)}</rb>${showRt ? `<rt>${escapeHtml(jp)}</rt>` : ""}</ruby>`;
    if (!useAnnotatedClasses) {
      parts.push(ruby);
      return;
    }
    const cls = classByIndex[idx] || "tok";
    const role = tokenMeta[idx]?.marker?.role || (tokenMeta[idx]?.isVerb ? "verb" : "");
    const dataAttrs = ` data-idx="${idx}" data-token="${escapeAttr(token)}" data-role="${escapeAttr(role)}"`;
    parts.push(`<span class="${cls}"${dataAttrs}>${ruby}</span>`);
  });
  return parts.join("");
}

function cleanLiteral(text) {
  return text
    .replace(/\s+([，。！？,.!?])/g, "$1")
    .replace(/\s+/g, " ")
    .trim();
}

function normalizeEnglishSentence(textInput) {
  let text = String(textInput || "").replace(/\s+/g, " ").trim();
  const replacements = [
    [/\bHe\/She are\b/g, "He/She is"],
    [/\bhe\/she are\b/g, "he/she is"],
    [/\bHe\/She have\b/g, "He/She has"],
    [/\bhe\/she have\b/g, "he/she has"],
    [/\bHe\/She were\b/g, "He/She was"],
    [/\bhe\/she were\b/g, "he/she was"],
    [/\bWhen he\/she met before, how long did you chat\?/gi, "When he/she met before, how long did he/she chat?"],
    [/\bWhen your friend met before, how long did you chat\?/gi, "When your friend met before, how long did your friend chat?"]
  ];
  replacements.forEach(([pattern, replacement]) => {
    text = text.replace(pattern, replacement);
  });
  return text;
}

function capitalizeFirst(value) {
  const text = String(value || "");
  if (!text) return text;
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function normalizePracticeLevel(value) {
  if (String(value) === "mixed") return "mixed";
  let n = Number(value) || 1;
  n = Math.max(1, Math.min(4, n));
  return n;
}

function sentenceMatchesSelectedLevel(sentenceLevel, selectedLevel) {
  if (selectedLevel === "mixed") return true;
  if (selectedLevel === 1) return sentenceLevel === 1 || sentenceLevel === 2;
  if (selectedLevel === 2) return sentenceLevel === 3;
  if (selectedLevel === 3) return sentenceLevel === 4;
  if (selectedLevel === 4) return sentenceLevel === 5;
  return sentenceLevel === 1 || sentenceLevel === 2;
}

function effectiveWordLevel(selectedLevel) {
  if (selectedLevel === "mixed") return 7;
  if (selectedLevel === 1) return 2;
  if (selectedLevel === 2) return 3;
  if (selectedLevel === 3) return 4;
  return 5;
}

function effectiveToneLevel(selectedLevel) {
  if (selectedLevel === "mixed") return 5;
  if (selectedLevel === 1) return 2;
  if (selectedLevel === 2) return 3;
  if (selectedLevel === 3) return 4;
  return 5;
}

function uiLevelFromSentenceLevel(sentenceLevel) {
  if (sentenceLevel <= 2) return 1;
  if (sentenceLevel === 3) return 2;
  if (sentenceLevel === 4) return 3;
  return 4;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function escapeAttr(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./service-worker.js").catch(() => {});
  }
}

function byId(id) {
  return document.getElementById(id);
}

function loadJson(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function saveJson(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function deepClone(v) {
  return JSON.parse(JSON.stringify(v));
}

function todayString() {
  return new Date().toISOString().slice(0, 10);
}

function addDays(dateString, delta) {
  const d = new Date(dateString + "T12:00:00");
  d.setDate(d.getDate() + delta);
  return d.toISOString().slice(0, 10);
}

function randomUnit() {
  if (window.crypto?.getRandomValues) {
    const arr = new Uint32Array(1);
    window.crypto.getRandomValues(arr);
    return arr[0] / 4294967296;
  }
  return Math.random();
}

function randomInt(max) {
  const n = Math.floor(randomUnit() * Math.max(1, max));
  return Math.min(Math.max(0, n), Math.max(0, max - 1));
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = randomInt(i + 1);
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

initializeApp();
