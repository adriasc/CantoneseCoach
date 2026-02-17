const STORAGE_KEYS = {
  content: "cancoach_content_v1",
  known: "cancoach_known_v1",
  streak: "cancoach_streak_v1",
  reviewed: "cancoach_reviewed_v1"
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
  { hanzi: "巿場", category: "place" },
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
  { hanzi: "有去過會", category: "grammar" },
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

const state = {
  content: loadContent(),
  known: new Set(loadJson(STORAGE_KEYS.known, [])),
  reviewed: loadJson(STORAGE_KEYS.reviewed, { date: todayString(), count: 0 }),
  streak: loadJson(STORAGE_KEYS.streak, { lastDate: null, days: 0 }),
  currentWord: null,
  currentPattern: null,
  patternSelections: {},
  currentQuiz: null
};

const els = {
  tabs: [...document.querySelectorAll(".tab")],
  panels: [...document.querySelectorAll(".panel")],
  wordCategory: byId("wordCategory"),
  wordHanzi: byId("wordHanzi"),
  wordJyutping: byId("wordJyutping"),
  wordEnglish: byId("wordEnglish"),
  wordExample: byId("wordExample"),
  knownWords: byId("knownWords"),
  reviewedWords: byId("reviewedWords"),
  streakBadge: byId("streakBadge"),
  patternFormula: byId("patternFormula"),
  slotGrid: byId("slotGrid"),
  patternHanzi: byId("patternHanzi"),
  patternJyutping: byId("patternJyutping"),
  patternEnglish: byId("patternEnglish"),
  quizHanzi: byId("quizHanzi"),
  quizChoices: byId("quizChoices"),
  quizFeedback: byId("quizFeedback"),
  contentMessage: byId("contentMessage")
};

bindUI();
rollWord();
rollPattern();
rollQuiz();
refreshStats();
registerServiceWorker();

function bindUI() {
  els.tabs.forEach((tab) => {
    tab.addEventListener("click", () => switchTab(tab.dataset.tab));
  });

  byId("nextWord").addEventListener("click", () => {
    markReviewed();
    rollWord();
  });

  byId("playWordAudio").addEventListener("click", () => {
    if (state.currentWord) speak(state.currentWord.hanzi);
  });

  byId("revealExample").addEventListener("click", () => {
    els.wordExample.textContent = state.currentWord?.example || "";
  });

  byId("markKnown").addEventListener("click", () => {
    if (!state.currentWord) return;
    state.known.add(state.currentWord.id);
    saveJson(STORAGE_KEYS.known, [...state.known]);
    markReviewed();
    refreshStats();
    rollWord();
  });

  byId("newPattern").addEventListener("click", rollPattern);

  byId("playPatternAudio").addEventListener("click", () => {
    const built = buildPatternSentence();
    speak(built.hanzi);
  });

  byId("playQuizAudio").addEventListener("click", () => {
    if (state.currentQuiz) speak(state.currentQuiz.hanzi);
  });

  byId("showQuizText").addEventListener("click", () => {
    els.quizHanzi.classList.remove("hidden");
  });

  byId("nextQuiz").addEventListener("click", rollQuiz);

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
    rollWord();
    rollPattern();
    rollQuiz();
    refreshStats();
  });
}

function switchTab(tabName) {
  els.tabs.forEach((tab) => tab.classList.toggle("is-active", tab.dataset.tab === tabName));
  els.panels.forEach((panel) => panel.classList.toggle("is-active", panel.id === `panel-${tabName}`));
}

function rollWord() {
  const words = state.content.words || [];
  if (!words.length) return;

  const unknown = words.filter((w) => !state.known.has(w.id));
  const coreUnknown = unknown.filter((w) => CORE_WORD_SET.has(normalizeHanzi(w.hanzi)));
  const coreAll = words.filter((w) => CORE_WORD_SET.has(normalizeHanzi(w.hanzi)));
  const pool = coreUnknown.length ? coreUnknown : (unknown.length ? unknown : (coreAll.length ? coreAll : words));
  state.currentWord = pool[Math.floor(Math.random() * pool.length)];

  els.wordCategory.textContent = state.currentWord.category || "word";
  els.wordHanzi.textContent = state.currentWord.hanzi || "-";
  els.wordJyutping.textContent = state.currentWord.jyutping || "-";
  els.wordEnglish.textContent = state.currentWord.english || "-";
  els.wordExample.textContent = "";
  refreshStats();
}

function rollPattern() {
  const patterns = state.content.patterns || [];
  if (!patterns.length) return;

  state.currentPattern = patterns[Math.floor(Math.random() * patterns.length)];
  state.patternSelections = {};
  renderPatternControls();
  renderPatternSentence();
}

function renderPatternControls() {
  const pattern = state.currentPattern;
  els.patternFormula.textContent = pattern.formula || "";
  els.slotGrid.innerHTML = "";

  pattern.slots.forEach((slot) => {
    const options = wordsByCategories(slot.categories);
    const first = options[0] || state.content.words[0];
    state.patternSelections[slot.key] = first?.id || "";

    const wrap = document.createElement("div");
    const label = document.createElement("label");
    label.textContent = slot.label;
    const select = document.createElement("select");
    select.dataset.slot = slot.key;

    options.forEach((word) => {
      const opt = document.createElement("option");
      opt.value = word.id;
      opt.textContent = `${word.hanzi} (${word.jyutping})`;
      select.appendChild(opt);
    });

    select.addEventListener("change", (e) => {
      state.patternSelections[slot.key] = e.target.value;
      renderPatternSentence();
    });

    wrap.appendChild(label);
    wrap.appendChild(select);
    els.slotGrid.appendChild(wrap);
  });
}

function renderPatternSentence() {
  const built = buildPatternSentence();
  els.patternHanzi.textContent = built.hanzi;
  els.patternJyutping.textContent = built.jyutping;
  els.patternEnglish.textContent = built.english;
}

function buildPatternSentence() {
  if (!state.currentPattern) return { hanzi: "", jyutping: "", english: "" };
  const parts = [];

  state.currentPattern.slots.forEach((slot, idx) => {
    const selected = wordById(state.patternSelections[slot.key]) || wordsByCategories(slot.categories)[0];
    if (selected) {
      parts.push(selected);
    }
    if (state.currentPattern.fixed && state.currentPattern.fixed[idx]) {
      const fixedHanzi = state.currentPattern.fixed[idx];
      const fixedWord = state.content.words.find((w) => w.hanzi === fixedHanzi);
      parts.push(fixedWord || { hanzi: fixedHanzi, jyutping: fixedHanzi, english: fixedHanzi });
    }
  });

  return {
    hanzi: `${parts.map((p) => p.hanzi).join("")}。`,
    jyutping: parts.map((p) => p.jyutping).join(" "),
    english: parts.map((p) => p.english).join(" ")
  };
}

function rollQuiz() {
  const quiz = state.content.quiz || [];
  if (!quiz.length) return;
  state.currentQuiz = quiz[Math.floor(Math.random() * quiz.length)];
  els.quizFeedback.textContent = "";
  els.quizFeedback.className = "feedback";
  els.quizHanzi.textContent = state.currentQuiz.hanzi;
  els.quizHanzi.classList.add("hidden");

  const answers = [state.currentQuiz.english, ...pickDistractors(state.currentQuiz.english, 2)];
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
      markReviewed();
    });
    els.quizChoices.appendChild(btn);
  });
}

function wordsByCategories(categories) {
  const words = state.content.words || [];
  const selected = words.filter((w) => categories.includes(w.category));
  return selected.length ? selected : words;
}

function wordById(id) {
  return (state.content.words || []).find((w) => w.id === id);
}

function pickDistractors(correct, amount) {
  const pool = (state.content.quiz || [])
    .map((q) => q.english)
    .filter((en) => en !== correct);
  shuffle(pool);
  return pool.slice(0, amount);
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

function speak(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "zh-HK";
  const voices = window.speechSynthesis.getVoices();
  const preferred = voices.find((v) => /yue|cantonese/i.test(v.lang + v.name))
    || voices.find((v) => v.lang.toLowerCase().includes("zh-hk"))
    || voices.find((v) => v.lang.toLowerCase().startsWith("zh"));
  if (preferred) utterance.voice = preferred;
  utterance.rate = 0.88;
  utterance.pitch = 1;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
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
      rollWord();
      rollPattern();
      rollQuiz();
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
    seen.add(normalizeHanzi(word.hanzi));
  });

  USER_CORE_WORDS.forEach((entry) => {
    const key = normalizeHanzi(entry.hanzi);
    if (!key || seen.has(key)) return;
    safeWords.push({
      id: `core_${nextId++}`,
      hanzi: entry.hanzi,
      jyutping: "",
      english: `[${entry.category}]`,
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

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
