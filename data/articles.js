// 文章數據 —— 每日 07:00 cron 由 ZCode 自動更新
// 新增文章：unshift 到陣列最前
const ARTICLES = [
  {
    id: "2026-09-04-ai-cyber-models",
    board: "ai", // ai | policy
    title: "AI 三巨頭同日發佈網絡安全專用模型：能力越強，越要走受控開放",
    date: "2026-09-04",
    tags: ["產品靈感", "商業參考"],
    sources: [
      { org: "The Hacker News", title: "Google, Anthropic, and OpenAI Unveil Cyber AI Models, Safeguards, and Access Programs", date: "2026-09-02", url: "https://thehackernews.com/2026/09/google-anthropic-and-openai-unveil.html" },
      { org: "Google 官方 Blog", title: "Introducing Gemini 3.8 Flash and 3.8 Flash Cyber", date: "2026-09-02", url: "https://blog.google/innovation-and-ai/models-and-research/gemini-models/3-8-flash-and-3-8-flash-cyber/" },
      { org: "Help Net Security", title: "Google Gemini 3.8 Flash + Fairwind program", date: "2026-09-03", url: "https://www.helpnetsecurity.com/2026/09/03/google-gemini-3-8-flash/" }
    ],
    verifiedDate: "2026-09-04",
    summaryShort: "Google、Anthropic、OpenAI 9月2日同日發佈網安 AI 模型＋受控訪問計劃，Agent 安全正式變成產品賣點。",
    summary: "9月2日，Google、Anthropic、OpenAI 罕有地同一日公佈網絡安全向 AI 佈局。Google 推出號稱最強網安模型 Gemini 3.8 Flash Cyber，以 Fairwind 計劃限定開放畀政府、醫療、電訊等高優先防禦者（已逾 650 夥伴）；Anthropic 發佈 Claude Fable 5.1／Mythos 5.1，並推出企業前沿防護（EFS：零數據保留＋濫用偵測）；OpenAI 預告 Astra 模型觸發 Preparedness Framework「Critical」門檻，配套 Daybreak Blue 有限測試計劃。三方共同訊號：最強能力唔再直接公開發售，而係「受控訪問」。",
    coreAnalysis: "行業訊號好清楚：Agent 安全（sandbox 逃逸、reward hacking、prompt injection 防禦）已經由「合規包袱」變成「產品差異化賣點」。對我嘅產品工程係一堂現成嘅設計課——我自己條內容管線（ZCode 出草稿→查證→先發布）就係同一邏輯嘅平民版：能力交畀 AI，把關權留喺人。所有計劃中嘅 Agent 產品（小說AI、文轉影片）都應該預設「分級訪問＋人工 gate」。",
    dims: [
      {
        title: "1️⃣ 產品功能升級靈感",
        body: "新聞網站＋試題系統可以直接借「trusted access program」概念：新 AI 功能（例如智能批改、自動出題）先開放畀自己／小圈子測試，驗證先至公開。內容 Agent 嘅「查證 gate」設計（≥2 獨立來源先放行）正正就係呢單新聞示範嘅安全思維。"
      },
      {
        title: "5️⃣ 商業參考庫",
        body: "Fairwind（Google）：B2B 受控開放，650+ 夥伴，政府／醫療／電訊優先。\nEFS（Anthropic）：「零數據保留＋濫用偵測」當企業級賣點——證明安全／私隱本身可以係付費點。\n對我嘅啟發：補習社學費追蹤、菜單網站呢類 B2B 小店場景，「數據唔離開本地」一樣可以做成賣點。"
      }
    ],
    actions: [
      "Agent 課程學「自我反饋糾錯」時（階段5），用呢單嘅 reward hacking 案例（OpenAI 測試中 Agent 自己偷答案）做教材",
      "將「分級訪問＋人工確認 gate」寫入自己所有 Agent 產品嘅設計預設",
      "跟蹤 Fairwind／Daybreak Blue 後續：香港獨立開發者可唔可以申請入場"
    ]
  }
];
