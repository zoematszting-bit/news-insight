// 文章數據 —— 每日 07:00 cron 由 ZCode 自動更新
// 新增文章：unshift 到陣列最前
const ARTICLES = [
  {
    id: "2026-09-11-openai-chatgpt-finance",
    board: "ai",
    title: "OpenAI 推出金融服務版 ChatGPT：垂直行業 Agent 產品嘅教科書示範",
    date: "2026-09-11",
    tags: ["商業參考", "產品靈感"],
    sources: [
      { org: "Fortune", title: "OpenAI courts Wall Street with ChatGPT for Financial Services, developed with Morgan Stanley", date: "2026-09-10", url: "https://fortune.com/2026/09/10/openai-courts-wall-street-with-chatgpt-for-financial-services-developed-with-morgan-stanley/" },
      { org: "Bloomberg", title: "OpenAI Debuts ChatGPT for Financial Services, an Investment Banker Tool", date: "2026-09-10", url: "https://www.bloomberg.com/news/articles/2026-09-10/openai-debuts-chatgpt-for-financial-services-an-investment-banker-tool" },
      { org: "OpenAI 官方", title: "ChatGPT for Financial Services 發佈公告", date: "2026-09-10", url: "https://openai.com/news/" }
    ],
    verifiedDate: "2026-09-11",
    summaryShort: "OpenAI 9月10日推出金融業專用 ChatGPT（GPT-6 Astra），Morgan Stanley 參與設計，約50個MCP數據連接器＋企業級權限，定價未公佈。",
    summary: "OpenAI 9月10日推出「ChatGPT for Financial Services」——金融業專用版ChatGPT，行最新GPT-6 Astra型號，由Morgan Stanley同Evercore參與設計核心功能。產品可連接銀行現有嘅Bloomberg、FactSet訂閱，預載Daloopa、PitchBook、Crunchbase、LSEG News等數據，經MCP協議提供約50個連接器，輸出附詳細引用；可生成PowerPoint、Excel同網頁儀表板；設「投入度切換」控制token消耗同輸出品質；企業級私隱配SAML SSO、SCIM、角色權限同數據保留設定。需要ChatGPT Enterprise帳戶＋資格審核先可以購買，定價未公佈。",
    coreAnalysis: "呢係「通用模型→垂直行業產品」轉向嘅教科書案例，成條產品公式可以直接抄：①揀高付費能力行業（金融）②同龍頭客戶共同設計（Morgan Stanley、Evercore——負責人明講目標係「銀行真係會用，唔係demo好睇」）③用數據連接做護城河（50個MCP連接器＋引用輸出）④用企業權限做門檻（Enterprise＋資格審核＝銷售主導定價，所以先唔公佈價）。我手上嘅產品線全部可以套呢條公式檢視：學費追蹤已經係垂直場景（補習社）；考試系統嘅「垂直版」就係ACO/PSII專用。",
    dims: [
      {
        title: "5️⃣ 商業參考庫",
        body: "產品形態：通用AI加行業皮唔夠——要有行業數據管道（訂閱駁接）先行業化。\n定價模式：唔公佈定價＋資格審核＝大客銷售主導，同自助訂閱係兩個世界。\n競爭格局：Anthropic 2025年7月已出過金融分析版Claude——垂直化係全行業共同方向，先做唔夠，要連接器生態深。"
      },
      {
        title: "1️⃣ 產品功能升級靈感",
        body: "三個可以直接偷嘅設計：\n①「effort toggle」——用同一個掣平衡成本同品質，我嘅內容Agent都可以加（簡單稿低投入、深度稿高投入）\n②引用輸出係打擊幻覺嘅產品級解法，新聞網站嘅分析應該行同一條路\n③MCP連接器係Agent課程階段4嘅現成教材——OpenAI用50個連接器將「AI工具」變成「工作台」"
      }
    ],
    actions: [
      "Agent課程學Function Calling／MCP嗰課，用呢單做案例作業",
      "用「行業版公式」（行業＋龍頭共設＋數據連接＋企業門檻）檢視自己6個產品，邊個最有可能行呢條路",
      "留意香港金融界採用情況——同綠色周「綠色金融科技」線匯合，係香港AI落地主戰場"
    ]
  },
  {
    id: "2026-09-07-hk-green-week-2026",
    board: "policy",
    title: "第三屆香港綠色周今日開幕：施政報告前九日嘅政策風向標",
    date: "2026-09-07",
    tags: ["公務員考試", "商業參考"],
    sources: [
      { org: "香港綠色周官方網站", title: "主要日程（2026年9月7日至11日）", date: "2026-09", url: "https://www.hkgreenweek.hk/sc/main-programme.html" },
      { org: "香港金融管理局", title: "HKMA 綠色周金融主題活動專頁", date: "2026-09", url: "https://www.hkma.gov.hk/gb_chi/key-functions/international-financial-centre/hkma-green-week/" }
    ],
    verifiedDate: "2026-09-07",
    summaryShort: "第三屆香港綠色周9月7-11日舉行，焦點係綠色金融同綠色金融科技；完結五日後就係施政報告——政策風向標。",
    summary: "第三屆「香港綠色周」9月7至11日舉行，主題「賦能未來 · 共築可持續發展」，由香港金融管理局等多家機構主辦，匯聚金融、商業、科技及學術界探討綠色轉型。焦點活動包括9月7日開幕日香港綠色金融協會第九屆年度論壇（「融匯共進：亞洲引航轉型與可持續韌性」），以及9月11日金管局主辦嘅「2026綠色金融科技研討會」（「更智慧金融成就綠色轉型」），銀行、科技、投資者同場交流綠色金融科技方案。",
    coreAnalysis: "時間點係關鍵：綠色週完結五日後就係9月16日五年規劃＋施政報告——綠色周實質係施政報告前嘅政策風向標。綠色金融、轉型融資、可持續披露呢啲議題喺綠色周被高調討論，好大機會喺施政報告以政策措施形式延續。財金系統（金管局、證監會）同環境生態局相關崗位尤其中要跟；其他部門公務員至少要識呢組關鍵詞，因為綠色轉型係跨部門議題（基建、採購、披露要求都會滲入各部門）。",
    dims: [
      {
        title: "2️⃣ 考試面試：對招聘、面試題、崗位需求嘅變化",
        body: "面試時事題如果問到「你點睇香港可持續發展方向」，今屆綠色周提供咗最新、最具體嘅答案素材：亞洲綠色轉型融資樞紐定位、綠色金融科技應用、公私營協作。\n備考策略：記住「綠色金融科技（Green FinTech）」呢個詞——同時連住綠色政策同科技兩條線，面試用得着之餘，亦係9月16日施政報告嘅對照閱讀點。"
      },
      {
        title: "3️⃣ 市場變化、付費機會、創業方向",
        body: "綠色金融科技研討會匯聚「科技人才＋潛在用戶＋投資者」——呢個組合本身係市場訊號：ESG數據處理、披露自動化、碳核算工具係香港金融業嘅剛需軟件市場。\n對AI產品開發者：合規驅動嘅B2B工具（自動化披露報告、ESG數據管道）係「法規紅利」型市場——政策一旦強制披露，需求即刻由可選變必選。"
      }
    ],
    actions: [
      "9月11日（週五）留意綠色金融科技研討會新聞摘要——揀1-2個案例記入面試素材夾",
      "9月16日施政報告出爐時對照：綠色議題佔幾多篇幅——呢個對照係一個「預測追蹤」練習",
      "產品觀察：ESG披露自動化係「法規紅利」市場樣本，記入商業參考庫"
    ]
  },
  {
    id: "2026-09-06-po-toi-chau-booking",
    board: "social",
    title: "破邊洲段預約制首日：1,800 人預約只得一半到場——公共空間人數管理嘅活教材",
    date: "2026-09-06",
    tags: ["執行難點"],
    sources: [
      { org: "郊野樂行 hiking.gov.hk（漁護署官方預約網）", title: "「萬宜地質步道—破邊洲段」預約到訪安排", date: "2026-08-24起", url: "https://www.hiking.gov.hk/ppcbooking" },
      { org: "HK01", title: "破邊洲預約制首日｜漁護署：全日有1,800人預算 僅一半人到訪入場", date: "2026-09-05", url: "https://www.hk01.com/article/60387161" },
      { org: "政府新聞公報", title: "破邊洲段九月試行預約到訪安排", date: "2026-08-21", url: "https://www.info.gov.hk/gia/general/202608/21/P2026082100328.htm" }
    ],
    verifiedDate: "2026-09-06",
    summaryShort: "破邊洲段9月起試行預約制（每日2,000名額），首日1,800人預約僅一半到場，漁護署將檢討配額及收費。",
    summary: "漁護署由9月5日起在西貢萬宜地質步道破邊洲段試行預約制：9月至10月的週末及假期朝9晚5進入該段須預約，每日名額2,000人，先到先得、試行期免費、實名登記。首日約1,800人預約，實際只有約一半人到場。署方表示會全面檢討配額及收費可行性。預約制只限破邊洲段，東壩其他範圍及時段外到訪毋須預約；逢週一上午11時放新一週名額。",
    coreAnalysis: "呢個係香港少有以「預約制」管理郊野公園人流嘅試點——市民從此去熱門行山路線要識玩「放票遊戲」（逢週一11時搶位）。對前線部門：入口要派職員核對身份證明文件，即場人士有剩餘名額可即場網上預約後入場——前線執行複雜度即刻上升。對政策觀察者：no-show率50%係最重要數據——免費資源被搶爆但搶咗唔用，下一步自然引導向收費/罰則設計。",
    dims: [
      {
        title: "1️⃣ 前線執行：政策出台後新增嘅工作流程與職責",
        body: "執行鏈包含：網上實名預約系統＋現場職員核證身份證＋即場補約通道＋時段外自由進出。呢四樣嘢加埋，前線工作量同判斷位都增加（點核證、點處理冒名、點分流即場人士）。呢個模式如果試行成功，好可能推廣到其他爆滿嘅自然景點——前線部門值得預早研究。"
      },
      {
        title: "4️⃣ 資源調配、服務目標與潛在執行難點",
        body: "難點一：no-show 50%——名額用咗但人冇嚟，真正想去嘅人反而約唔到；解法通常係逾期不到場收費或計入黑名單。\n難點二：收費檢討——免費預約變收費，會引發「郊野公園應否收費」嘅價值爭議。\n難點三：只管一段唔管全域，人潮可能只係轉移到毋須預約嘅東壩其他位置，而非真正減少。"
      }
    ],
    actions: [
      "想去破邊洲：逢週一上午11時喺郊野樂行網站搶名額；即場補約有機會（首日一半no-show）",
      "政策觀察：留意檢討結果——「免費預約→收費/罰則」係公共資源管理經典演化路徑",
      "產品人視角：「配額＋實名＋時段」三件套由私人訂位走入公共管理——自己產品嘅預約功能可參考同一套no-show思維"
    ]
  },
  {
    id: "2026-09-05-care-worker-quota-r10",
    board: "social",
    title: "院舍輸入護理員第十輪申請 9月10日截止：800 新配額背後嘅安老人手現實",
    date: "2026-09-05",
    tags: ["執行難點"],
    sources: [
      { org: "社會福利署（計劃專頁）", title: "「院舍輸入護理員特別計劃」第十輪申請安排", date: "2026-08（2026年9月公告）", url: "https://www.swd.gov.hk/tc/pubsvc/elderly/cat_ms_ita/ssicwrch/index.html" },
      { org: "勞工處", title: "輸入護理員簡介會安排（9月7日及10月13日場次）", date: "2026-09", url: "https://www.labour.gov.hk/tc/news/Briefing_for_Imported_Care_Workers.htm" }
    ],
    verifiedDate: "2026-09-05",
    summaryShort: "社署第十輪院舍輸入護理員申請9月10日截止，800個新配額；新安排包括住宿費扣除上限20%、殘疾僱員1:1替代配額。",
    summary: "社會福利署「院舍輸入護理員特別計劃」第十輪申請8月28日開始、9月10日下午5時截止，提供約800個輸入護理員新配額，安老院、殘疾人士院舍及護養院均可經配額管理系統電子申請，同時處理現職護理員續約配額。計劃2023年推出以來配額上限已提高至15,000個。新一輪有新安排：2026年7月起住宿費扣除上限調至工資20%，殘疾僱員可以1:1比例替代外勞配額。勞工處9月7日及10月13日設輸入護理員簡介會（抵港八星期內強制出席）。",
    coreAnalysis: "院舍人手係香港老齡化最貼身嘅民生議題——家人住緊院舍嘅家庭，直接感受到人手夠唔夠、照顧質素穩唔穩定。輸入護理員政策係「補洞」措施：本地冇足夠人願意做，唯有輸入。對市民：認識呢個計劃有助理解院舍收費同服務水平背後嘅人手結構；對相關行業：呢個係持續進行嘅制度，唔係一次性。",
    dims: [
      {
        title: "1️⃣ 前線執行：新增嘅工作流程與職責",
        body: "計劃嘅執行鏈牽涉至少三個部門：社署（配額審批，截止後約2個月完成）、勞工處（本地招聘規定——申請前30日內要連續刊登招聘廣告14日；簡介會）、入境處（簽證）。呢條跨部門流程正正係「輸入勞工政策」嘅標準執行模板——申請者要同時滿足本地招聘先行、配額審批、抵港簡介三重要求。"
      },
      {
        title: "4️⃣ 資源調配、服務目標與潛在執行難點",
        body: "亮點安排係「殘疾僱員1:1替代配額」——聘一位本地殘疾僱員可以替代一個外勞配額，係少有咁直接嘅共融就業誘因。\n執行難點：800個配額相對院舍業缺口係杯水車薪；本地招聘廣告要求變相加長申請週期；住宿費扣除上限20%保障咗輸入護理員收入，但院舍成本壓力仍在。"
      }
    ],
    actions: [
      "認識安老院／殘疾院舍營運者：第九輪趕唔切，留意第十一輪（12月公佈詳情、2027年1月接受申請）",
      "屋企有長者考慮入院舍：人手配額多寡係評估院舍質素嘅其中一個客觀指標",
      "理解「本地招聘先行＋配額審批＋強制簡介會」呢條輸入勞工執行鏈——政策執行嘅教科書案例"
    ]
  },
  {
    id: "2026-09-05-five-year-plan-preview",
    board: "policy",
    title: "香港首份五年規劃＋施政報告 9月16日同日公佈：重新定義政府工作方式嘅一日",
    date: "2026-09-05",
    tags: ["公務員考試", "執行難點"],
    sources: [
      { org: "政府新聞公報", title: "行政長官於九月十六日出席立法會特別會議發表《香港第一個五年規劃》及《施政報告》", date: "2026-08-26", url: "https://www.info.gov.hk/gia/general/202608/26/P2026082600405.htm" },
      { org: "政府新聞網 news.gov.hk", title: "香港首份五年規劃相關報道", date: "2026-08-26", url: "https://www.news.gov.hk/chi/2026/08/20260826/20260826_163631_258.html" }
    ],
    verifiedDate: "2026-09-05",
    summaryShort: "9月16日立法會特別會議將同日發表香港首份五年規劃（2026-2030）＋施政報告，17日設答問會。",
    summary: "政府新聞公報（8月26日）確認：行政長官李家超將於9月16日在立法會特別會議上，先後發表《香港特別行政區經濟和社會發展第一個五年規劃（2026—2030）》同《行政長官2026年施政報告》——香港歷史上首次有「五年規劃」呢類中長期發展藍圖。當日下午設記者會，傍晚出席電視論壇節目；9月17日再出席立法會「行政長官互動交流答問會」。規劃全文以官方公報為準，覆蓋經濟同社會發展範疇。",
    coreAnalysis: "呢一日係成個政府體系嘅「年度重新對錶日」。首份五年規劃代表施政由「一年一份報告」轉向「五年框架＋年度落實」——之後各部門嘅資源申請、措施設計、KPI都要對返呢份規劃嘅方向。對前線公務員：未來一年嘅新措施會一批批嚟，理解規劃框架＝提前掌握部門工作重心。對考生：施政報告係面試時事題最大單一來源，而今年加咗五年規劃做背景板，深咗一層。",
    dims: [
      {
        title: "2️⃣ 考試面試：對招聘、面試題、崗位需求嘅變化",
        body: "施政報告發表後1-3個月係公務員招聘同面試高峰期嘅背景期——面試官鍾意問「你點睇最新施政報告嘅XX措施」。\n今年備考策略：9月16日下午睇官方全文摘要（唔使睇晒），記住5個關鍵詞；9月17答問會睇新聞摘錄，知邊啲議題有爭議。規劃係新事物，面試提到「五年規劃同施政報告嘅關係」已經係加分位。"
      },
      {
        title: "4️⃣ 資源調配、服務目標與潛在執行難點",
        body: "五年規劃嘅意義係「約束性」：定咗方向，各局就要交得出對應嘅措施同指標。執行難點喺跨部門協調——規劃講願景容易，落地下嚟每個局嘅資源爭奪、優先次序排序先係真正考驗。呢個都係前線公務員未來一年會感受到嘅實際變化：新項目多咗，跨部門文件多咗。"
      }
    ],
    actions: [
      "日曆標記9月16日（下午記者會）＋9月17日（答問會）——呢兩日係未來一年時事素材嘅源頭",
      "9月16日當日自動化會出深度拆解（已加入更新計劃）",
      "知識夾「公職面試素材」開個「五年規劃」位，之後剪存關鍵措施"
    ]
  },
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
