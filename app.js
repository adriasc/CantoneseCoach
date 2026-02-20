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
  "嗰": "go2"
};

const EXTRA_TOKEN_MEANINGS = {
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
  "晚": "late / evening"
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
  "已經": { role: "past", label: "already" }
};

const GENERATED_SENTENCES = buildGeneratedAspectSentences();
const GENERATED_FUTURE_SENTENCES = buildGeneratedFutureSentences();
const GENERATED_CONDITIONAL_SENTENCES = buildGeneratedConditionalSentences();
const GENERATED_QUESTION_SENTENCES = buildGeneratedQuestionSentences();
const ALL_SENTENCES = SENTENCE_BANK
  .concat(GENERATED_SENTENCES)
  .concat(GENERATED_FUTURE_SENTENCES)
  .concat(GENERATED_CONDITIONAL_SENTENCES)
  .concat(GENERATED_QUESTION_SENTENCES);

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
    theme: "mixed",
    questionLevel: "basic",
    questionTense: "mixed",
    questionTheme: "mixed",
    uiTheme: "classic",
    controlsCollapsed: false,
    toneExerciseMode: "word",
    showJyutping: true,
    showEnglish: true,
    toneShowJyutping: false,
    toneShowEnglish: false,
    showGrammarLens: false,
    voiceURI: "auto",
    voiceRate: 0.9,
    audioNoiseOn: false,
    audioNoiseLevel: 0.25,
    audioNoiseType: "white"
  }),
  availableVoices: [],
  rotation: { words: [], patternSentences: [], quizSentences: [], questionSentences: [], tonePairs: [] },
  currentWord: null,
  currentSentence: null,
  currentQuestion: null,
  currentPattern: null,
  patternSelections: {},
  currentQuiz: null,
  currentTonePair: null,
  currentToneKind: "word",
  currentToneSide: null,
  toneLabelMap: { a: "a", b: "b" },
  toneScore: { correct: 0, total: 0 },
  game: normalizeGameState(loadJson(STORAGE_KEYS.game, defaultGameState()))
};

const els = {
  tabs: [...document.querySelectorAll(".tab")],
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
  globalThemeWrap: byId("globalThemeWrap"),
  questionLevel: byId("questionLevel"),
  questionTense: byId("questionTense"),
  questionTheme: byId("questionTheme"),
  questionLevelWrap: byId("questionLevelWrap"),
  questionTenseWrap: byId("questionTenseWrap"),
  questionThemeWrap: byId("questionThemeWrap"),
  audioVoice: byId("audioVoice"),
  audioRate: byId("audioRate"),
  audioRateValue: byId("audioRateValue"),
  audioNoiseOn: byId("audioNoiseOn"),
  audioNoiseType: byId("audioNoiseType"),
  audioNoiseLevel: byId("audioNoiseLevel"),
  audioNoiseValue: byId("audioNoiseValue"),
  toneExerciseMode: byId("toneExerciseMode"),
  themeStyle: byId("themeStyle"),
  testVoice: byId("testVoice"),
  applyControls: byId("applyControls"),
  controlsCard: document.querySelector(".controls-card"),
  toggleControlsCard: byId("toggleControlsCard"),
  toggleGrammarLens: byId("toggleGrammarLens"),
  controlsMessage: byId("controlsMessage"),
  toggleWordJyutping: byId("toggleWordJyutping"),
  toggleWordEnglish: byId("toggleWordEnglish"),
  togglePatternJyutping: byId("togglePatternJyutping"),
  togglePatternEnglish: byId("togglePatternEnglish"),
  toggleQuizJyutping: byId("toggleQuizJyutping"),
  toggleQuizEnglish: byId("toggleQuizEnglish"),
  toggleToneJyutping: byId("toggleToneJyutping"),
  toggleToneEnglish: byId("toggleToneEnglish"),
  knownWords: byId("knownWords"),
  reviewedWords: byId("reviewedWords"),
  toggleKnownList: byId("toggleKnownList"),
  knownListWrap: byId("knownListWrap"),
  knownListMeta: byId("knownListMeta"),
  knownList: byId("knownList"),
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
  openFunLoop: byId("openFunLoop"),
  closeFunLoop: byId("closeFunLoop"),
  funModal: byId("funModal"),
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
  contentMessage: byId("contentMessage")
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

bindUI();
ensureDailyGameState();
syncControlValues();
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
refreshStats();
renderKnownList();
refreshGameUI();
registerServiceWorker();

function bindUI() {
  els.tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      if (!tab.dataset.tab) return;
      switchTab(tab.dataset.tab);
    });
  });
  if (els.openFunLoop && els.funModal) {
    els.openFunLoop.addEventListener("click", () => {
      ensureDailyGameState();
      refreshGameUI();
      els.funModal.classList.remove("hidden");
    });
  }
  if (els.closeFunLoop && els.funModal) {
    els.closeFunLoop.addEventListener("click", () => els.funModal.classList.add("hidden"));
  }
  if (els.funModal) {
    els.funModal.addEventListener("click", (event) => {
      if (event.target === els.funModal) els.funModal.classList.add("hidden");
    });
  }

  byId("nextWord").addEventListener("click", () => {
    markReviewed();
    rollWord();
  });

  byId("playWordAudio").addEventListener("click", () => {
    if (state.currentWord) speak(state.currentWord.hanzi);
  });

  els.revealExample.addEventListener("click", () => {
    if (els.wordExample.textContent) {
      els.wordExample.textContent = "";
      els.revealExample.textContent = "Show example";
      return;
    }
    els.wordExample.textContent = buildWordExample(state.currentWord);
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

  if (els.toggleKnownList && els.knownListWrap) {
    els.toggleKnownList.addEventListener("click", () => {
      const hidden = els.knownListWrap.classList.contains("hidden");
      els.knownListWrap.classList.toggle("hidden", !hidden);
      els.toggleKnownList.textContent = hidden ? "Hide known list" : "Show known list";
      if (hidden) renderKnownList();
    });
  }

  byId("newPattern").addEventListener("click", rollPattern);

  byId("playPatternAudio").addEventListener("click", () => {
    const built = buildPatternSentence();
    incrementMission("patterns", 1);
    speak(built.hanzi);
  });

  byId("playQuizAudio").addEventListener("click", () => {
    if (state.currentQuiz) {
      incrementMission("listens", 1);
      speak(state.currentQuiz.hanzi);
    }
  });

  byId("showQuizText").addEventListener("click", () => {
    const isHidden = els.quizHanzi.classList.contains("hidden");
    els.quizHanzi.classList.toggle("hidden", !isHidden);
    byId("showQuizText").textContent = isHidden ? "Hide Chinese" : "Show Chinese";
  });

  els.toggleWordJyutping.addEventListener("click", () => togglePref("showJyutping"));
  els.toggleWordEnglish.addEventListener("click", () => togglePref("showEnglish"));
  els.togglePatternJyutping.addEventListener("click", () => togglePref("showJyutping"));
  els.togglePatternEnglish.addEventListener("click", () => togglePref("showEnglish"));
  els.toggleQuizJyutping.addEventListener("click", () => togglePref("showJyutping"));
  els.toggleQuizEnglish.addEventListener("click", () => togglePref("showEnglish"));
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
      state.prefs.toneExerciseMode = els.toneExerciseMode.value || "word";
      saveJson(STORAGE_KEYS.prefs, state.prefs);
      resetRotations();
      rollTonePair();
    });
  }

  byId("nextQuiz").addEventListener("click", rollQuiz);
  if (byId("nextQuestion")) byId("nextQuestion").addEventListener("click", rollQuestion);
  if (byId("playQuestionAudio")) {
    byId("playQuestionAudio").addEventListener("click", () => {
      if (!state.currentQuestion) return;
      incrementMission("listens", 1);
      speak(state.currentQuestion.hanzi);
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
      if (q.type === "quiz") speak(q.sentence.hanzi);
      if (q.type === "tone") speak(q.item.hanzi);
    });
  }

  els.globalLevel.addEventListener("change", markControlsDirty);
  els.globalTense.addEventListener("change", markControlsDirty);
  els.globalTheme.addEventListener("change", markControlsDirty);
  if (els.themeStyle) els.themeStyle.addEventListener("change", markControlsDirty);
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
    speak("你好，我哋而家開始練習廣東話。");
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
  els.toggleGrammarLens.addEventListener("click", () => {
    state.prefs.showGrammarLens = !state.prefs.showGrammarLens;
    saveJson(STORAGE_KEYS.prefs, state.prefs);
    applyVisibilityPrefs();
    renderPatternSentence();
    renderQuizGrammar();
  });

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
    els.contentMessage.textContent = "Reset complete. Built-in words loaded.";
    resetRotations();
    rollWord();
    rollPattern();
    rollQuiz();
    rollQuestion();
    rollTonePair();
    refreshStats();
    renderKnownList();
  });
}

function markControlsDirty() {
  els.controlsMessage.textContent = "Pending changes. Press Apply Settings.";
  els.controlsMessage.classList.remove("applied");
  els.controlsMessage.classList.add("pending");
}

function applyGlobalControls() {
  const prevLevel = normalizePracticeLevel(state.prefs.level);
  const prevTense = state.prefs.tense || "mixed";
  const prevTheme = state.prefs.theme || "mixed";
  const prevToneMode = state.prefs.toneExerciseMode || "word";
  const prevQLevel = state.prefs.questionLevel || "basic";
  const prevQTense = state.prefs.questionTense || "mixed";
  const prevQTheme = state.prefs.questionTheme || "mixed";
  state.prefs.level = normalizePracticeLevel(els.globalLevel.value);
  state.prefs.tense = els.globalTense.value;
  state.prefs.theme = els.globalTheme.value;
  state.prefs.questionLevel = els.questionLevel?.value || "basic";
  state.prefs.questionTense = els.questionTense?.value || "mixed";
  state.prefs.questionTheme = els.questionTheme?.value || "mixed";
  state.prefs.uiTheme = els.themeStyle?.value || "classic";
  state.prefs.toneExerciseMode = els.toneExerciseMode?.value || "word";
  state.prefs.audioNoiseOn = (els.audioNoiseOn?.value || "off") === "on";
  state.prefs.audioNoiseLevel = Number(els.audioNoiseLevel?.value || 0.25) || 0.25;
  state.prefs.audioNoiseType = els.audioNoiseType?.value || "white";
  saveJson(STORAGE_KEYS.prefs, state.prefs);
  applyTheme(state.prefs.uiTheme);
  const coreChanged = prevLevel !== state.prefs.level
    || prevTense !== state.prefs.tense
    || prevTheme !== state.prefs.theme;
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
  } else if (toneModeChanged) {
    state.rotation.tonePairs = [];
    rollTonePair();
  }
  if (!coreChanged && questionChanged) {
    state.rotation.questionSentences = [];
    rollQuestion();
  }
  els.controlsMessage.textContent = "Settings applied.";
  els.controlsMessage.classList.remove("pending");
  els.controlsMessage.classList.add("applied");
}

function switchTab(tabName) {
  els.tabs.forEach((tab) => tab.classList.toggle("is-active", tab.dataset.tab === tabName));
  els.panels.forEach((panel) => panel.classList.toggle("is-active", panel.id === `panel-${tabName}`));
  setControlsMode(tabName);
}

function setControlsMode(tabName) {
  const isQuestions = tabName === "questions";
  [els.globalLevelWrap, els.globalTenseWrap, els.globalThemeWrap].forEach((node) => {
    if (node) node.classList.toggle("hidden", isQuestions);
  });
  [els.questionLevelWrap, els.questionTenseWrap, els.questionThemeWrap].forEach((node) => {
    if (node) node.classList.toggle("hidden", !isQuestions);
  });
}

function rollWord() {
  const level = normalizePracticeLevel(state.prefs.level);
  const words = (state.content.words || []).filter((w) => wordLevel(w) <= effectiveWordLevel(level));
  if (!words.length) return;

  const unknown = words.filter((w) => !state.known.has(w.id));
  const coreUnknown = unknown.filter((w) => CORE_WORD_SET.has(normalizeHanzi(w.hanzi)));
  const coreAll = words.filter((w) => CORE_WORD_SET.has(normalizeHanzi(w.hanzi)));
  const pool = coreUnknown.length ? coreUnknown : (unknown.length ? unknown : (coreAll.length ? coreAll : words));
  state.currentWord = takeFromRotation("words", pool, (w) => w.id);

  els.wordCategory.textContent = state.currentWord.category || "word";
  els.wordHanzi.textContent = state.currentWord.hanzi || "-";
  els.wordJyutping.textContent = state.currentWord.jyutping || "-";
  els.wordEnglish.textContent = state.currentWord.english || "-";
  if (els.wordLiteral) {
    els.wordLiteral.textContent = "";
    els.wordLiteral.classList.add("hidden");
  }
  els.wordExample.textContent = "";
  els.revealExample.textContent = "Show example";
  els.revealExample.classList.remove("hidden");
  applyVisibilityPrefs();
  refreshStats();
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
  const analysis = analyzeSentence({ hanzi: built.hanzi, jyutping: built.jyutping });
  if (state.prefs.showGrammarLens) {
    els.patternHanzi.innerHTML = analysis.annotatedHanzi;
    els.patternJyutping.innerHTML = analysis.annotatedJyutping;
    els.patternGrammarNotes.innerHTML = analysis.notes.length
      ? analysis.notes.map((note) => `<div class="grammar-note">${note}</div>`).join("")
      : `<div class="grammar-note">No tense/aspect marker detected in this sentence.</div>`;
  } else {
    els.patternHanzi.textContent = built.hanzi;
    els.patternJyutping.textContent = built.jyutping;
    els.patternGrammarNotes.innerHTML = "";
  }
  els.patternEnglish.textContent = built.english;
  els.patternLiteral.textContent = `Literal: ${analysis.literal}`;
  applyVisibilityPrefs();
}

function buildPatternSentence() {
  if (!state.currentSentence) return { hanzi: "", jyutping: "", english: "" };
  return {
    hanzi: state.currentSentence.hanzi,
    jyutping: state.currentSentence.jyutping,
    english: state.currentSentence.english
  };
}

function rollQuiz() {
  const quiz = state.game.fixMode ? getFixQuizPool() : getFilteredSentences();
  if (!quiz.length) return;
  state.currentQuiz = takeFromRotation("quizSentences", quiz, (q) => q.id);
  els.quizFeedback.textContent = "";
  els.quizFeedback.className = "feedback";
  els.quizHanzi.textContent = state.currentQuiz.hanzi;
  els.quizJyutping.textContent = state.currentQuiz.jyutping;
  els.quizEnglish.textContent = state.currentQuiz.english;
  els.quizHanzi.classList.add("hidden");
  byId("showQuizText").textContent = "Show Chinese";
  applyVisibilityPrefs();
  renderQuizGrammar();

  const answers = [state.currentQuiz.english, ...pickDistractors(state.currentQuiz.id, state.currentQuiz.english, 3)];
  shuffle(answers);
  els.quizChoices.innerHTML = "";
  answers.forEach((text) => {
    const btn = document.createElement("button");
    btn.className = "choice";
    btn.textContent = text;
    btn.addEventListener("click", () => {
      const ok = text === state.currentQuiz.english;
      els.quizFeedback.textContent = ok ? "Correct" : `Not quite. Correct: ${state.currentQuiz.english}`;
      els.quizFeedback.className = `feedback ${ok ? "ok" : "bad"}`;
      const buttons = [...els.quizChoices.querySelectorAll("button")];
      buttons.forEach((button) => {
        button.disabled = true;
        if (button.textContent === state.currentQuiz.english) button.classList.add("is-correct");
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
  const analysis = analyzeSentence({ hanzi: state.currentQuiz.hanzi, jyutping: state.currentQuiz.jyutping });
  if (state.prefs.showGrammarLens) {
    els.quizHanzi.innerHTML = analysis.annotatedHanzi;
    els.quizJyutping.innerHTML = analysis.annotatedJyutping;
    els.quizGrammarNotes.innerHTML = analysis.notes.length
      ? analysis.notes.map((note) => `<div class="grammar-note">${note}</div>`).join("")
      : `<div class="grammar-note">No tense/aspect marker detected in this sentence.</div>`;
  } else {
    els.quizHanzi.textContent = state.currentQuiz.hanzi;
    els.quizJyutping.textContent = state.currentQuiz.jyutping;
    els.quizGrammarNotes.innerHTML = "";
  }
  els.quizLiteral.textContent = `Literal: ${analysis.literal}`;
}

function rollQuestion() {
  if (!els.questionHanzi) return;
  const pool = getFilteredQuestionSentences();
  if (!pool.length) return;
  state.currentQuestion = takeFromRotation("questionSentences", pool, (q) => q.id);
  const analysis = analyzeSentence({ hanzi: state.currentQuestion.hanzi, jyutping: state.currentQuestion.jyutping });
  const modeLabel = (state.prefs.questionLevel || "basic") === "advanced" ? "Advanced Questions" : "Basic Questions";
  els.questionFormula.textContent = `${modeLabel} · ${state.currentQuestion.tense} · ${state.currentQuestion.theme}`;
  els.questionHanzi.textContent = state.currentQuestion.hanzi;
  els.questionJyutping.textContent = state.currentQuestion.jyutping;
  els.questionEnglish.textContent = state.currentQuestion.english;
  els.questionLiteral.textContent = `Literal: ${analysis.literal}`;
  applyVisibilityPrefs();
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
  const modeLabel = state.currentToneKind === "sentence" ? "Sentence tones" : "Word tones";
  els.toneLabel.textContent = `Level ${pair.level} · ${modeLabel} · ${toneA.jyutping} / ${toneB.jyutping}`;
  els.toneHanzi.textContent = `A: ${toneA.hanzi}   B: ${toneB.hanzi}`;
  els.toneJyutping.textContent = `A: ${toneA.jyutping}   B: ${toneB.jyutping}`;
  els.toneEnglish.textContent = `A: ${toneA.english}   B: ${toneB.english}`;
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
  const options = state.currentToneKind === "sentence"
    ? [toneA.jyutping, toneB.jyutping]
    : [toneA.jyutping, toneB.jyutping];
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

function checkToneAnswer(selected, clickedBtn) {
  const pair = state.currentTonePair;
  if (!pair || !els.toneFeedback) return;
  if (!state.currentToneSide) {
    els.toneFeedback.textContent = "Play A, B, or Random first.";
    els.toneFeedback.className = "feedback bad";
    return;
  }
  const target = toneItemForLabel(state.currentToneSide);
  const expected = target.jyutping;
  const ok = selected === expected;
  state.toneScore.total += 1;
  if (ok) state.toneScore.correct += 1;
  els.toneFeedback.textContent = ok
    ? "Correct"
    : `Not quite. Clip was: ${target.hanzi} (${target.jyutping}) = ${target.english}`;
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
    speak(toneItemForLabel("a").hanzi);
    return;
  }
  if (which === "b") {
    state.currentToneSide = "b";
    els.tonePrompt.textContent = `You played B. Choose the ${answerType} for B.`;
    speak(toneItemForLabel("b").hanzi);
    return;
  }
  state.currentToneSide = randomUnit() < 0.5 ? "a" : "b";
  els.tonePrompt.textContent = `You played Random. Choose the ${answerType} for the random clip.`;
  speak(toneItemForLabel(state.currentToneSide).hanzi);
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
  const level = effectiveToneLevel(normalizePracticeLevel(state.prefs.level));
  const pool = TONE_PAIR_BANK.filter((pair) => pair.level <= level);
  return pool.length ? pool : TONE_PAIR_BANK.slice(0, 3);
}

function getFilteredToneSentencePairs() {
  const level = effectiveToneLevel(normalizePracticeLevel(state.prefs.level));
  const pool = TONE_SENTENCE_BANK.filter((pair) => pair.level <= level && pair.level >= 3);
  return pool.length ? pool : [];
}

function resolveToneExerciseMode() {
  const mode = state.prefs.toneExerciseMode || "word";
  const level = effectiveToneLevel(normalizePracticeLevel(state.prefs.level));
  if (mode === "sentence" && level >= 3) return "sentence";
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
  els.streakBadge.textContent = `Streak: ${state.streak.days} day${state.streak.days === 1 ? "" : "s"}`;
}

function renderKnownList() {
  if (!els.knownList || !els.knownListMeta) return;
  const items = (state.content.words || [])
    .filter((w) => state.known.has(w.id))
    .sort((a, b) => String(a.hanzi || "").localeCompare(String(b.hanzi || ""), "zh-Hant"));
  els.knownList.innerHTML = "";
  if (!items.length) {
    els.knownListMeta.textContent = "No words marked yet.";
    return;
  }
  els.knownListMeta.textContent = `${items.length} words marked as known.`;
  items.forEach((w) => {
    const row = document.createElement("div");
    row.className = "known-item";
    row.innerHTML = `<p class="hanzi">${escapeHtml(w.hanzi || "-")}</p><p class="jyutping">${escapeHtml(w.jyutping || "-")}</p><p class="english">${escapeHtml(w.english || "-")}</p>`;
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
  utterance.lang = selected?.lang || "zh-HK";
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
      saveJson(STORAGE_KEYS.content, checked);
      els.contentMessage.textContent = "Import successful. New learning set loaded.";
      resetRotations();
      rollWord();
      rollPattern();
      rollQuiz();
      rollQuestion();
      renderKnownList();
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
  const clean = {
    words: Array.isArray(input.words) ? input.words : deepClone(DEFAULT_DATA.words),
    patterns: Array.isArray(input.patterns) && input.patterns.length ? input.patterns : deepClone(DEFAULT_DATA.patterns),
    quiz: Array.isArray(input.quiz) && input.quiz.length ? input.quiz : deepClone(DEFAULT_DATA.quiz)
  };
  clean.words = ensureCoreWords(clean.words);
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

  USER_CORE_WORDS.forEach((entry) => {
    const key = normalizeHanzi(entry.hanzi);
    if (!key || seen.has(key)) return;
    safeWords.push({
      id: `core_${nextId++}`,
      hanzi: entry.hanzi,
      jyutping: jyutpingForWord(entry.hanzi),
      english: meaningForWord(entry.hanzi, entry.category),
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

function isMissingMeaning(english) {
  const value = String(english || "").trim();
  return !value || /^\[.*\]$/.test(value);
}

function meaningForWord(hanzi, category) {
  const key = normalizeHanzi(hanzi);
  if (CORE_WORD_MEANINGS[key]) return CORE_WORD_MEANINGS[key];
  return category ? `${category} term` : "word";
}

function isMissingJyutping(jyutping) {
  return !String(jyutping || "").trim();
}

function jyutpingForWord(hanzi) {
  const key = normalizeHanzi(hanzi);
  return CORE_WORD_JYUTPING[key] || "to-confirm";
}

function syncControlValues() {
  els.globalLevel.value = String(normalizePracticeLevel(state.prefs.level));
  els.globalTense.value = state.prefs.tense || "mixed";
  els.globalTheme.value = state.prefs.theme || "mixed";
  if (els.questionLevel) els.questionLevel.value = state.prefs.questionLevel || "basic";
  if (els.questionTense) els.questionTense.value = state.prefs.questionTense || "mixed";
  if (els.questionTheme) els.questionTheme.value = state.prefs.questionTheme || "mixed";
  if (els.toneExerciseMode) els.toneExerciseMode.value = state.prefs.toneExerciseMode || "word";
  if (els.themeStyle) els.themeStyle.value = state.prefs.uiTheme || "classic";
  els.audioRate.value = String(state.prefs.voiceRate || 0.9);
  els.audioRateValue.textContent = `${Number(state.prefs.voiceRate || 0.9).toFixed(2)}x`;
  if (els.audioNoiseOn) els.audioNoiseOn.value = state.prefs.audioNoiseOn ? "on" : "off";
  if (els.audioNoiseType) els.audioNoiseType.value = state.prefs.audioNoiseType || "white";
  if (els.audioNoiseLevel) els.audioNoiseLevel.value = String(state.prefs.audioNoiseLevel || 0.25);
  if (els.audioNoiseValue) els.audioNoiseValue.textContent = Number(state.prefs.audioNoiseLevel || 0.25).toFixed(2);
}

function initVoiceControls() {
  refreshVoiceOptions();
  if (window.speechSynthesis) {
    window.speechSynthesis.onvoiceschanged = refreshVoiceOptions;
  }
}

function refreshVoiceOptions() {
  const voices = window.speechSynthesis?.getVoices?.() || [];
  state.availableVoices = voices.slice();
  const current = state.prefs.voiceURI || "auto";
  els.audioVoice.innerHTML = "";

  const auto = document.createElement("option");
  auto.value = "auto";
  auto.textContent = "Auto (best Cantonese)";
  els.audioVoice.appendChild(auto);

  voices
    .sort((a, b) => `${a.lang} ${a.name}`.localeCompare(`${b.lang} ${b.name}`))
    .forEach((v) => {
      const option = document.createElement("option");
      option.value = v.voiceURI;
      option.textContent = `${v.name} (${v.lang})`;
      els.audioVoice.appendChild(option);
    });

  const hasCurrent = current === "auto" || voices.some((v) => v.voiceURI === current);
  els.audioVoice.value = hasCurrent ? current : "auto";
  if (!hasCurrent) {
    state.prefs.voiceURI = "auto";
    saveJson(STORAGE_KEYS.prefs, state.prefs);
  }
}

function applyVisibilityPrefs() {
  const showJp = !!state.prefs.showJyutping;
  const showEn = !!state.prefs.showEnglish;

  els.wordJyutping.classList.toggle("hidden", !showJp);
  els.patternJyutping.classList.toggle("hidden", !showJp);
  els.quizJyutping.classList.toggle("hidden", !showJp);
  if (els.questionJyutping) els.questionJyutping.classList.toggle("hidden", !showJp);

  els.wordEnglish.classList.toggle("hidden", !showEn);
  if (els.wordLiteral) {
    const hasLiteral = !!String(els.wordLiteral.textContent || "").trim();
    els.wordLiteral.classList.toggle("hidden", !showEn || !hasLiteral);
  }
  els.patternEnglish.classList.toggle("hidden", !showEn);
  els.quizEnglish.classList.toggle("hidden", !showEn);
  els.patternLiteral.classList.toggle("hidden", !showEn);
  els.quizLiteral.classList.toggle("hidden", !showEn);
  if (els.questionEnglish) els.questionEnglish.classList.toggle("hidden", !showEn);
  if (els.questionLiteral) els.questionLiteral.classList.toggle("hidden", !showEn);

  els.toggleWordJyutping.textContent = showJp ? "Hide Jyutping" : "Show Jyutping";
  els.togglePatternJyutping.textContent = showJp ? "Hide Jyutping" : "Show Jyutping";
  els.toggleQuizJyutping.textContent = showJp ? "Hide Jyutping" : "Show Jyutping";
  if (els.toggleQuestionJyutping) els.toggleQuestionJyutping.textContent = showJp ? "Hide Jyutping" : "Show Jyutping";
  els.toggleWordEnglish.textContent = showEn ? "Hide English" : "Show English";
  els.togglePatternEnglish.textContent = showEn ? "Hide English" : "Show English";
  els.toggleQuizEnglish.textContent = showEn ? "Hide English" : "Show English";
  if (els.toggleQuestionEnglish) els.toggleQuestionEnglish.textContent = showEn ? "Hide English" : "Show English";
  els.toggleGrammarLens.textContent = state.prefs.showGrammarLens ? "Grammar Lens: On" : "Grammar Lens: Off";
  applyToneVisibility();
}

function applyToneVisibility() {
  if (!els.toneJyutping || !els.toneEnglish) return;
  const showToneJp = !!state.prefs.toneShowJyutping;
  const showToneEn = !!state.prefs.toneShowEnglish;
  els.toneJyutping.classList.toggle("hidden", !showToneJp);
  els.toneEnglish.classList.toggle("hidden", !showToneEn);
  if (els.toggleToneJyutping) {
    els.toggleToneJyutping.textContent = showToneJp ? "Hide Jyutping" : "Show Jyutping";
  }
  if (els.toggleToneEnglish) {
    els.toggleToneEnglish.textContent = showToneEn ? "Hide English" : "Show English";
  }
}

function applyTheme(themeName) {
  const normalized = String(themeName || "classic");
  if (normalized === "classic") {
    document.body.removeAttribute("data-theme");
    return;
  }
  document.body.setAttribute("data-theme", normalized);
}

function setControlsCollapsed(collapsed) {
  if (!els.controlsCard || !els.toggleControlsCard) return;
  els.controlsCard.classList.toggle("is-collapsed", collapsed);
  els.toggleControlsCard.textContent = collapsed ? "Show ▼" : "Hide ▲";
}

function togglePref(prefKey) {
  state.prefs[prefKey] = !state.prefs[prefKey];
  saveJson(STORAGE_KEYS.prefs, state.prefs);
  applyVisibilityPrefs();
}

function resetRotations() {
  state.rotation = { words: [], patternSentences: [], quizSentences: [], questionSentences: [], tonePairs: [] };
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
  return pool;
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
  const theme = state.prefs.questionTheme || "mixed";
  const base = getQuestionSentencePool(mode);
  let pool = base.filter((s) => (
    (tense === "mixed" || s.tense === tense)
    && (theme === "mixed" || s.theme === theme)
  ));
  if (!pool.length) {
    pool = base.filter((s) => tense === "mixed" || s.tense === tense);
  }
  if (!pool.length) {
    pool = base;
  }
  return pool;
}

function buildWordExample(word) {
  if (!word) return "";
  if (word.example) return word.example;
  const key = normalizeHanzi(word.hanzi);
  const fromSentence = ALL_SENTENCES.find((s) => normalizeHanzi(s.hanzi).includes(key));
  if (fromSentence) return fromSentence.hanzi;
  if (word.category === "time") return `${word.hanzi}我學廣東話。`;
  if (word.category === "verb") return `我${word.hanzi}。`;
  if (word.category === "adjective") return `呢個好${word.hanzi}。`;
  if (word.category === "place") return `我喺${word.hanzi}。`;
  return `${word.hanzi}。`;
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
    { h: "你", j: "nei5", e: "you", be: "are", do: "do", has: "have" },
    { h: "佢", j: "keoi5", e: "he/she", be: "is", do: "does", has: "has" },
    { h: "你哋", j: "nei5 dei6", e: "you all", be: "are", do: "do", has: "have" },
    { h: "我哋", j: "ngo5 dei6", e: "we", be: "are", do: "do", has: "have" },
    { h: "你朋友", j: "nei5 pang4 jau5", e: "your friend", be: "is", do: "does", has: "has" }
  ];
  const basicTemplates = [
    {
      tense: "present",
      theme: "daily",
      h: "而家食緊飯呀？",
      j: "ji4 gaa1 sik6 gan2 faan6 aa3",
      en: (sub) => `${capitalizeFirst(sub.be)} ${sub.e} eating now?`
    },
    {
      tense: "present",
      theme: "home",
      h: "喺屋企做咩呀？",
      j: "hai2 uk1 kei2 zou6 me1 aa3",
      en: (sub) => `What ${sub.be} ${sub.e} doing at home?`
    },
    {
      tense: "present",
      theme: "friends",
      h: "而家同邊個傾緊計呀？",
      j: "ji4 gaa1 tung4 bin1 go3 king1 gan2 gai2 aa3",
      en: (sub) => `Who ${sub.be} ${sub.e} chatting with now?`
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
      theme: "travel",
      h: "上次去咗邊度呀？",
      j: "soeng6 ci3 heoi3 zo2 bin1 dou6 aa3",
      en: (sub) => `Where did ${sub.e} go last time?`
    },
    {
      tense: "past",
      theme: "friends",
      h: "見過佢未呀？",
      j: "gin3 gwo3 keoi5 mei6 aa3",
      en: (sub) => `${capitalizeFirst(sub.has)} ${sub.e} met him/her before?`
    },
    {
      tense: "future",
      theme: "daily",
      h: "聽日會唔會返工呀？",
      j: "ting1 jat6 wui5 m4 wui5 faan1 gung1 aa3",
      en: (sub) => `Will ${sub.e} go to work tomorrow?`
    },
    {
      tense: "future",
      theme: "holiday",
      h: "下次會唔會去旅行呀？",
      j: "haa6 ci3 wui5 m4 wui5 heoi3 leoi5 hang4 aa3",
      en: (sub) => `Will ${sub.e} travel next time?`
    },
    {
      tense: "future",
      theme: "home",
      h: "今晚會唔會煮飯呀？",
      j: "gam1 maan5 wui5 m4 wui5 zyu2 faan6 aa3",
      en: (sub) => `Will ${sub.e} cook tonight?`
    },
    {
      tense: "conditional",
      theme: "friends",
      h: "如果落雨，仲會唔會出街呀？",
      j: "jyu4 gwo2 lok6 jyu5, zung6 wui5 m4 wui5 ceot1 gaai1 aa3",
      en: (sub) => `If it rains, will ${sub.e} still go out?`
    },
    {
      tense: "conditional",
      theme: "travel",
      h: "如果有平機票，會去邊度呀？",
      j: "jyu4 gwo2 jau5 peng4 gei1 piu3, wui5 heoi3 bin1 dou6 aa3",
      en: (sub) => `If there are cheap tickets, where will ${sub.e} go?`
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
      en: (sub) => `When ${sub.e} met before, how long did you chat?`
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

function analyzeSentence(sentenceInput) {
  const hanzi = typeof sentenceInput === "string" ? sentenceInput : (sentenceInput?.hanzi || "");
  const originalJyutping = typeof sentenceInput === "string" ? "" : (sentenceInput?.jyutping || "");
  const tokens = tokenizeSentence(hanzi);
  const notes = [];
  const literalParts = [];
  const markerByIndex = {};

  tokens.forEach((token, idx) => {
    const marker = ASPECT_MARKERS[token];
    if (!marker) return;
    markerByIndex[idx] = marker;
    const verbIndex = findPreviousVerbIndex(tokens, idx);
    if (verbIndex >= 0) {
      notes.push(`Marker <strong>${token}</strong> = ${marker.label}, linked to verb <strong>${tokens[verbIndex]}</strong>.`);
    } else {
      notes.push(`Marker <strong>${token}</strong> = ${marker.label}.`);
    }
  });

  const annotated = tokens.map((token, idx) => {
    if (isPunctuation(token)) {
      literalParts.push(token);
      return escapeHtml(token);
    }

    const marker = markerByIndex[idx];
    const isVerb = isVerbToken(token);
    let cls = "tok";
    const role = marker?.role;
    if (role === "past") cls += " tok-past";
    if (role === "prog") cls += " tok-prog";
    if (role === "future") cls += " tok-future";
    if (isVerb) cls += " tok-verb";

    literalParts.push(literalForToken(token));
    return `<span class="${cls}">${escapeHtml(token)}</span>`;
  });

  const highlights = [];
  tokens.forEach((token, idx) => {
    if (isPunctuation(token)) return;
    const marker = markerByIndex[idx];
    const isVerb = isVerbToken(token);
    const jp = jyutpingForToken(token);
    if (!jp || jp === token || jp === "to-confirm") return;
    const classes = ["tok", "tok-jp"];
    if (isVerb) classes.push("tok-verb");
    if (marker?.role === "past") classes.push("tok-past");
    if (marker?.role === "prog") classes.push("tok-prog");
    if (marker?.role === "future") classes.push("tok-future");
    highlights.push({ jp, cls: classes.join(" ") });
  });
  const annotatedJyutping = highlightJyutpingLine(originalJyutping, highlights);

  return {
    annotatedHanzi: annotated.join(""),
    annotatedJyutping,
    literal: cleanLiteral(literalParts.join(" ")),
    notes
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
  const words = (state.content?.words || []).map((w) => normalizeHanzi(w.hanzi)).filter(Boolean);
  const extras = Object.keys(ASPECT_MARKERS)
    .concat(Object.keys(EXTRA_TOKEN_JYUTPING))
    .concat(Object.keys(EXTRA_TOKEN_MEANINGS))
    .concat([
    "已經", "將會", "唔係", "一齊", "啱啱", "之前", "之後", "不過", "因為", "所以"
  ]);
  const vocab = Array.from(new Set(words.concat(extras))).sort((a, b) => b.length - a.length);
  return vocab;
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
  const byWord = (state.content?.words || []).find((w) => normalizeHanzi(w.hanzi) === normalized);
  if (byWord?.english) {
    return String(byWord.english).split("/")[0].trim();
  }
  if (EXTRA_TOKEN_MEANINGS[normalized]) return EXTRA_TOKEN_MEANINGS[normalized];
  if (CORE_WORD_MEANINGS[normalized]) return CORE_WORD_MEANINGS[normalized];
  return normalized;
}

function jyutpingForToken(token) {
  const normalized = normalizeHanzi(token);
  if (isPunctuation(normalized)) return normalized;
  const byWord = (state.content?.words || []).find((w) => normalizeHanzi(w.hanzi) === normalized);
  if (byWord?.jyutping && byWord.jyutping !== "to-confirm") return byWord.jyutping;
  if (EXTRA_TOKEN_JYUTPING[normalized]) return EXTRA_TOKEN_JYUTPING[normalized];
  if (CORE_WORD_JYUTPING[normalized]) return CORE_WORD_JYUTPING[normalized];
  return normalized;
}

function highlightJyutpingLine(baseJyutping, highlights) {
  if (!baseJyutping) return "";
  let out = escapeHtml(baseJyutping);
  const used = new Set();
  highlights.forEach((h, idx) => {
    const key = `${h.jp}|${h.cls}`;
    const count = used.has(key) ? 2 : 1;
    used.add(key);
    out = wrapNthOccurrence(out, escapeHtml(h.jp), `<span class="${h.cls}">`, "</span>", count);
  });
  return out;
}

function wrapNthOccurrence(text, needle, open, close, n) {
  if (!needle) return text;
  let from = 0;
  let found = -1;
  for (let i = 0; i < n; i += 1) {
    found = text.indexOf(needle, from);
    if (found < 0) return text;
    from = found + needle.length;
  }
  return text.slice(0, found) + open + needle + close + text.slice(found + needle.length);
}

function cleanLiteral(text) {
  return text
    .replace(/\s+([，。！？,.!?])/g, "$1")
    .replace(/\s+/g, " ")
    .trim();
}

function capitalizeFirst(value) {
  const text = String(value || "");
  if (!text) return text;
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function normalizePracticeLevel(value) {
  let n = Number(value) || 1;
  n = Math.max(1, Math.min(4, n));
  return n;
}

function sentenceMatchesSelectedLevel(sentenceLevel, selectedLevel) {
  if (selectedLevel === 1) return sentenceLevel === 1 || sentenceLevel === 2;
  if (selectedLevel === 2) return sentenceLevel === 3;
  if (selectedLevel === 3) return sentenceLevel === 4;
  if (selectedLevel === 4) return sentenceLevel === 5;
  return sentenceLevel === 1 || sentenceLevel === 2;
}

function effectiveWordLevel(selectedLevel) {
  if (selectedLevel === 1) return 2;
  if (selectedLevel === 2) return 3;
  if (selectedLevel === 3) return 4;
  return 5;
}

function effectiveToneLevel(selectedLevel) {
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
