/* Ngữ pháp nền tảng: Hiện tại đơn và hiện tại tiếp diễn. Hiển thị bởi grammar-lesson.js. */
window.A1_GRAMMAR = {
  icon: "🕒",
  short: "Hai thì hiện tại",
  hero: ["Hiện tại đơn và hiện tại tiếp diễn", "I work · I am working"],
  desc: "Tiếng Việt chỉ cần thêm “đang” hay “thường” vào trước động từ, động từ thì không đổi. Tiếng Anh có hai thì hiện tại: **hiện tại đơn** cho thói quen và sự thật (I work), **hiện tại tiếp diễn** cho việc đang diễn ra (I am working). Nắm chắc hai thì này, bạn kể được một ngày bình thường của mình và kể việc mình đang làm dạo này, hai chủ đề có mặt trong gần như mọi cuộc trò chuyện.",
  chips: ["Hiện tại đơn", "Hiện tại tiếp diễn", "Dấu hiệu nhận biết", "Động từ trạng thái", "What do you do?"],
  goal: [
    "Kể **thói quen hằng ngày** bằng hiện tại đơn, nhớ thêm **-s / -es** với he / she / it.",
    "Hỏi và phủ định đúng với **do / does**: Do you…? She doesn’t…",
    "Nói việc **đang làm lúc này** và **dạo này** bằng am / is / are + động từ thêm -ing.",
    "Chọn thì nhanh nhờ dấu hiệu: **every day, usually** hay **now, at the moment, this week**.",
    "Trả lời đúng **What do you do?** (nghề nghiệp) và **What are you doing?** (đang làm gì)."
  ],
  sections: [
    { nav: "🔁 Hiện tại đơn", title: "Hiện tại đơn: thói quen, sự thật, lịch trình", sub: "Những việc lặp đi lặp lại và những điều luôn đúng",
      intro: [
        "Hiện tại đơn **không** dùng cho việc đang xảy ra ngay lúc nói. Nó dùng cho việc **thường xuyên** (I drink coffee every morning), **sự thật** (The sun rises in the east, Hanoi has four seasons) và **lịch trình cố định** (The train leaves at seven).",
        "Điểm khó nhất với người Việt là chữ **-s / -es** sau he, she, it. Tiếng Việt không đổi động từ theo người, nên ta rất hay quên. Bảng dưới đây cho thấy chỉ có một hàng thay đổi."
      ],
      table: { head: ["Chủ ngữ", "Khẳng định", "Phủ định", "Câu hỏi"], say: [1, 2, 3],
        rows: [
          ["I / you / we / they", "I work.", "I do not work.", "Do you work?"],
          ["**he / she / it**", "She works.", "She does not work.", "Does she work?"],
          ["**he / she / it** (đuôi -o, -s, -sh, -ch, -x)", "He watches TV.", "He does not watch TV.", "Does he watch TV?"],
          ["**he / she / it** (phụ âm + y)", "She studies.", "She does not study.", "Does she study?"],
          ["**have** với he / she / it", "He has a car.", "He does not have a car.", "Does he have a car?"]
        ] },
      formulas: [
        { f: "chủ ngữ + động từ nguyên mẫu / động từ thêm -s, -es",
          mean: "**câu khẳng định**: nói một thói quen, một sự thật, một lịch trình.",
          parts: [["I / you / we / they + động từ nguyên mẫu", "I live in Da Nang. They play football on Sundays."], ["he / she / it + động từ thêm -s", "phần lớn động từ chỉ thêm **-s**: works, reads, likes."], ["thêm -es", "động từ tận cùng bằng **-o, -s, -sh, -ch, -x**: goes, does, misses, washes, watches, fixes."], ["phụ âm + y → -ies; bất quy tắc", "study → studies, fly → flies (nhưng play → plays). **have → has**."]],
          use: "giới thiệu bản thân (I work in a bank), kể một ngày bình thường, nói về gia đình (My father drives a taxi), nói giờ tàu xe, giờ mở cửa.",
          note: "Lỗi số một của người Việt: “My mother **cook** every day.” Cứ thấy chủ ngữ là **một người hoặc một vật** (my mother, Nam, the shop, it) thì động từ phải có **-s**: My mother **cooks** every day.",
          ex: [["I get up at six every morning.", "Sáng nào tôi cũng dậy lúc sáu giờ."], ["My sister teaches English at a primary school.", "Chị gái tôi dạy tiếng Anh ở trường tiểu học."], ["The bus leaves at 7:15.", "Xe buýt chạy lúc bảy giờ mười lăm."], ["Water boils at 100 degrees.", "Nước sôi ở 100 độ."]] },
        { f: "chủ ngữ + do / does + not + động từ nguyên mẫu; Do / Does + chủ ngữ + động từ nguyên mẫu…?",
          mean: "**câu phủ định và câu hỏi**: mượn trợ động từ do / does.",
          parts: [["do not / don’t", "với I, you, we, they: I don’t eat meat."], ["does not / doesn’t", "với he, she, it: He doesn’t drink beer."], ["Do / Does…? và trả lời ngắn", "Do you like spicy food? – Yes, I do. / No, I don’t. Does she live here? – Yes, she does."], ["Wh- + do / does + chủ ngữ…?", "Where do you work? What time does the shop open?"]],
          use: "hỏi về thói quen, sở thích, công việc của người mới quen; nói những việc mình không bao giờ làm.",
          note: "Khi đã có **does**, động từ chính **quay về nguyên mẫu**, không thêm -s nữa: “Does she **like**…?”, “He doesn’t **work**…”. Không nói “Does she likes” hay “He doesn’t works”. Cũng đừng bỏ do: “You like coffee?” chỉ dùng khi nói rất thân mật.",
          ex: [["Do you cook at home?", "Bạn có nấu ăn ở nhà không?"], ["My husband doesn’t like karaoke.", "Chồng tôi không thích hát karaoke."], ["What time does your class start?", "Lớp của bạn bắt đầu lúc mấy giờ?"], ["We don’t work on Sundays.", "Chủ nhật chúng tôi không làm việc."]] },
        { f: "chủ ngữ + always / usually / often / sometimes / never + động từ",
          mean: "**trạng từ tần suất**: cho biết việc đó xảy ra **thường xuyên đến mức nào**.",
          parts: [["always (100%) / usually (khoảng 80%)", "luôn luôn / thường thường: I always have breakfast."], ["often (khoảng 60%) / sometimes (khoảng 40%)", "hay / thỉnh thoảng: We sometimes eat out."], ["rarely (khoảng 10%) / never (0%)", "hiếm khi / không bao giờ: He never smokes. Never đã mang nghĩa phủ định, không thêm not."], ["How often…? / once a week, every day", "hỏi tần suất và trả lời bằng cụm thời gian đứng **cuối câu**."]],
          use: "kể thói quen chi tiết hơn: không chỉ “I go to the gym” mà “I **usually** go to the gym **three times a week**”.",
          note: "Vị trí: đứng **trước động từ thường** (I often walk) nhưng **sau động từ to be** (I am often late). Không nói “I go often to work by bus”.",
          ex: [["I usually take the bus to work.", "Tôi thường đi làm bằng xe buýt."], ["She is always on time.", "Cô ấy luôn đúng giờ."], ["How often do you visit your grandparents?", "Bạn có hay về thăm ông bà không?"], ["My father never drinks coffee after lunch.", "Bố tôi không bao giờ uống cà phê sau bữa trưa."]] }
      ],
      mistakes: [
        ["My mother cook dinner every day.", "My mother cooks dinner every day.", "Chủ ngữ là một người (my mother = she) nên động từ thêm **-s**."],
        ["Does she likes coffee?", "Does she like coffee?", "Đã có **does** thì động từ chính về **nguyên mẫu**."],
        ["I go always to school by bike.", "I always go to school by bike.", "Trạng từ tần suất đứng **trước động từ thường**."]
      ],
      talk: { title: "TÌNH HUỐNG: LÀM QUEN VỚI ĐỒNG NGHIỆP MỚI", turns: [
        ["A", "Where do you live, Hoa?", "Hoa sống ở đâu?"],
        ["B", "I live in Cau Giay. I usually ride my motorbike to work.", "Mình sống ở Cầu Giấy. Mình thường đi xe máy đi làm."],
        ["A", "Do you have lunch at the office?", "Bạn có ăn trưa ở văn phòng không?"],
        ["B", "Yes, I do. My husband cooks, and I bring a lunch box.", "Có. Chồng mình nấu, và mình mang theo hộp cơm."],
        ["A", "That’s nice. My wife doesn’t cook. We often eat out.", "Hay thật. Vợ mình không nấu ăn. Bọn mình hay ăn ngoài."]
      ] },
      tip: "Hiện tại đơn có “cái đuôi” **-s** ở he / she / it. Câu hỏi và phủ định thì đuôi đó **chạy sang does**: She works → Does she work? → She doesn’t work." },

    { nav: "▶️ Hiện tại tiếp diễn", title: "Hiện tại tiếp diễn: đang làm gì lúc này, dạo này", sub: "am / is / are + động từ thêm -ing",
      intro: [
        "Hiện tại tiếp diễn giống chữ **“đang”** trong tiếng Việt. Nó dùng cho việc **đang diễn ra ngay lúc nói** (I am cooking, call me later), việc **tạm thời trong giai đoạn này** (I am living with my aunt this month) và **kế hoạch đã hẹn** trong tương lai gần (I am meeting Lan tonight).",
        "Cấu trúc gồm **hai phần** và không được thiếu phần nào: động từ **to be** (am / is / are) và động từ **thêm -ing**."
      ],
      formulas: [
        { f: "chủ ngữ + am / is / are (+ not) + động từ thêm -ing",
          mean: "**đang làm, đang xảy ra**: khẳng định và phủ định.",
          parts: [["I am / I’m", "I am reading a book."], ["he / she / it is", "It is raining. She isn’t sleeping."], ["you / we / they are", "They are waiting for you. We aren’t working today."], ["cách thêm -ing", "phần lớn thêm -ing (eat → eating); bỏ **-e** câm (make → making); gấp đôi phụ âm cuối khi một nguyên âm + một phụ âm (run → running, sit → sitting); -ie → -ying (lie → lying)."]],
          use: "nghe điện thoại và giải thích mình đang làm gì; tả một bức ảnh; kể ai đó đang làm gì ở nhà.",
          note: "Người Việt hay quên **to be**: “I cooking now.” hoặc quên -ing: “I am cook.” Phải đủ hai phần: **I am cooking**.",
          ex: [["I am cooking dinner now. Can I call you back?", "Giờ mình đang nấu cơm. Mình gọi lại cho bạn sau được không?"], ["Look! It is raining.", "Nhìn kìa! Trời đang mưa."], ["The children are not sleeping. They are playing games.", "Bọn trẻ không ngủ. Chúng đang chơi điện tử."], ["My father is watching the football on TV.", "Bố tôi đang xem bóng đá trên ti vi."]] },
        { f: "Am / Is / Are + chủ ngữ + động từ thêm -ing…?",
          mean: "**câu hỏi**: hỏi ai đó có đang làm gì không, hoặc đang làm gì.",
          parts: [["Are you…? / Is she…?", "câu hỏi có / không: Are you working now? – Yes, I am. / No, I’m not."], ["What / Where / Why + am / is / are…?", "What are you doing? Where is he going?"], ["Who is + động từ thêm -ing?", "hỏi người làm: Who is singing?"]],
          use: "gọi điện hỏi thăm, nhắn tin hỏi bạn đang ở đâu, hỏi chuyện dạo này.",
          note: "Câu hỏi **không dùng do / does**: không nói “Do you watching TV?” mà là “**Are** you watching TV?”.",
          ex: [["What are you doing?", "Bạn đang làm gì vậy?"], ["Are you still working at the bank?", "Bạn vẫn đang làm ở ngân hàng à?"], ["Where is she going?", "Cô ấy đang đi đâu thế?"], ["Is it raining in Saigon?", "Ở Sài Gòn trời đang mưa à?"]] },
        { f: "Hiện tại tiếp diễn cho việc tạm thời và kế hoạch đã hẹn",
          mean: "**dạo này đang…** (tạm thời) và **sắp… (đã hẹn)** trong tương lai gần.",
          parts: [["this week / this month / these days", "việc tạm thời, không phải thói quen lâu dài: I am taking an English course this month."], ["tonight / tomorrow / on Friday", "kế hoạch đã sắp xếp, có hẹn giờ, hẹn người: I am meeting my boss tomorrow."], ["so sánh với hiện tại đơn", "I live in Hanoi (lâu dài) / I am living in Hue this year (tạm thời)."]],
          use: "kể chuyện dạo này (đang học, đang tìm việc, đang tập thể dục) và trả lời “What are you doing tonight?”.",
          note: "Phần kế hoạch chỉ nhắc ngắn ở đây. Cách nói về tương lai đầy đủ (will, be going to) có trong trang Bảng tra cứu ngữ pháp.",
          ex: [["I am learning to drive these days.", "Dạo này tôi đang học lái xe."], ["My brother is staying with us this week.", "Tuần này anh trai tôi đang ở cùng chúng tôi."], ["We are having dinner with my parents on Sunday.", "Chủ nhật chúng tôi ăn tối với bố mẹ."], ["Are you doing anything tonight?", "Tối nay bạn có làm gì không?"]] }
      ],
      mistakes: [
        ["I cooking now.", "I am cooking now.", "Thiếu **am**. Hiện tại tiếp diễn cần đủ to be + động từ thêm -ing."],
        ["Do you watching TV?", "Are you watching TV?", "Câu hỏi hiện tại tiếp diễn đảo **am / is / are**, không dùng do."],
        ["She is siting next to me.", "She is sitting next to me.", "sit có một nguyên âm + một phụ âm cuối nên **gấp đôi t**: sitting."]
      ],
      talk: { title: "TÌNH HUỐNG: GỌI ĐIỆN CHO BẠN", turns: [
        ["A", "Hi Minh! What are you doing?", "Chào Minh! Bạn đang làm gì đấy?"],
        ["B", "I am waiting for the bus. It is raining a lot.", "Mình đang đợi xe buýt. Trời đang mưa to lắm."],
        ["A", "Oh no. Are you going home?", "Ôi. Bạn đang về nhà à?"],
        ["B", "No, I am going to my English class. I am taking a course this month.", "Không, mình đang đi học tiếng Anh. Tháng này mình đang học một khóa."],
        ["A", "Great! We are having a party on Saturday. Can you come?", "Hay quá! Thứ Bảy bọn mình tổ chức tiệc. Bạn đến được không?"],
        ["B", "Sure! I am not working on Saturday.", "Được chứ! Thứ Bảy mình không làm việc."]
      ] },
      tip: "Hiện tại tiếp diễn = **“đang”** = luôn có **hai mảnh**: am / is / are + -ing. Thiếu một mảnh là sai." },

    { nav: "⚖️ So sánh hai thì", title: "So sánh hai thì theo dấu hiệu", sub: "every day hay now? usually hay at the moment?",
      intro: [
        "Cách nhanh nhất để chọn thì là nhìn **dấu hiệu thời gian** trong câu. Nhóm “thường xuyên” đi với hiện tại đơn, nhóm “lúc này, dạo này” đi với hiện tại tiếp diễn.",
        "Một câu có thể dùng cả hai thì: phần thói quen dùng hiện tại đơn, phần đang xảy ra dùng hiện tại tiếp diễn. “I **usually drink** tea, but today I **am drinking** coffee.”"
      ],
      table: { head: ["", "Hiện tại đơn", "Hiện tại tiếp diễn"],
        rows: [
          ["Ý nghĩa", "thói quen, sự thật, lịch trình, lâu dài", "đang xảy ra, tạm thời, kế hoạch đã hẹn"],
          ["Dấu hiệu", "every day / week, usually, always, often, sometimes, never, on Mondays, once a week", "now, right now, at the moment, today, this week, these days, Look!, Listen!"],
          ["Ví dụ", "I **work** in an office.", "I **am working** from home this week."],
          ["Câu hỏi", "**Do** you **work** on Saturdays?", "**Are** you **working** now?"],
          ["Tiếng Việt", "“thường”, “hay”, “hằng ngày”", "“đang”, “dạo này”"]
        ] },
      formulas: [
        { f: "every day / usually + hiện tại đơn ↔ now / at the moment + hiện tại tiếp diễn",
          mean: "**thói quen** đối lập với **việc đang diễn ra**.",
          parts: [["every day, usually, always, on Mondays", "→ hiện tại đơn: She **walks** to school every day."], ["now, right now, at the moment, Look!", "→ hiện tại tiếp diễn: She **is taking** a taxi now."], ["usually … but now / today", "ghép hai thì trong một câu để nói “bình thường thì…, nhưng hôm nay…”."]],
          use: "kể khác biệt giữa thói quen và hôm nay; giải thích vì sao hôm nay làm việc khác thường.",
          note: "Người Việt hay nói “I am usually go”. Usually là dấu hiệu của hiện tại đơn: “I usually **go**”. Ngược lại, có **now** thì không nói “I go now” khi muốn nói “tôi đang đi”.",
          ex: [["I usually have pho for breakfast, but today I am eating banh mi.", "Tôi thường ăn phở buổi sáng, nhưng hôm nay tôi đang ăn bánh mì."], ["He plays tennis every Sunday. He is playing now.", "Chủ nhật nào anh ấy cũng chơi quần vợt. Bây giờ anh ấy đang chơi."], ["Listen! Someone is knocking at the door.", "Nghe này! Có ai đang gõ cửa."], ["Do you usually work late?", "Bạn có hay làm muộn không?"]] },
        { f: "lâu dài (hiện tại đơn) ↔ tạm thời: this week, these days (hiện tại tiếp diễn)",
          mean: "**ổn định, lâu dài** đối lập với **chỉ trong giai đoạn này**.",
          parts: [["live / work / study (hiện tại đơn)", "nói chuyện lâu dài: I work for a travel company."], ["this week / this month / these days (hiện tại tiếp diễn)", "đang thay đổi, sẽ kết thúc: I am working on a big project this month."], ["at the moment", "có thể là “ngay lúc này” hoặc “trong giai đoạn này”: I am looking for a new job at the moment."]],
          use: "kể chuyện dạo này: đang học gì, đang làm dự án gì, đang ở tạm đâu, đang ăn kiêng.",
          note: "Câu hỏi “What are you doing these days?” là hỏi về **dạo này**, không phải lúc này. Trả lời bằng hiện tại tiếp diễn: “I am studying for an exam.”",
          ex: [["My parents live in Hai Phong.", "Bố mẹ tôi sống ở Hải Phòng."], ["I am staying at a hotel this week because they are painting my flat.", "Tuần này tôi ở khách sạn vì người ta đang sơn căn hộ của tôi."], ["She usually drives, but she is cycling to work these days.", "Cô ấy thường lái xe, nhưng dạo này cô ấy đạp xe đi làm."], ["Are you reading any good books at the moment?", "Dạo này bạn có đang đọc cuốn sách nào hay không?"]] }
      ],
      mistakes: [
        ["I am usually go to work by bus.", "I usually go to work by bus.", "Có **usually** là thói quen → hiện tại đơn, không cần am."],
        ["Look! The baby sleeps.", "Look! The baby is sleeping.", "**Look!** báo hiệu việc đang xảy ra → hiện tại tiếp diễn."],
        ["I live with my aunt this month because my house is under repair.", "I am living with my aunt this month because my house is under repair.", "**this month** và việc tạm thời → hiện tại tiếp diễn."]
      ],
      talk: { title: "TÌNH HUỐNG: GẶP LẠI BẠN CŨ", turns: [
        ["A", "Long time no see! Do you still work at the hotel?", "Lâu lắm không gặp! Bạn vẫn làm ở khách sạn à?"],
        ["B", "Yes, I do. But I am working in the restaurant this month.", "Ừ. Nhưng tháng này mình đang làm ở nhà hàng."],
        ["A", "Interesting! What do you usually do at the hotel?", "Hay nhỉ! Ở khách sạn bạn thường làm gì?"],
        ["B", "I usually work at reception. Now I am learning to make cocktails.", "Mình thường làm ở lễ tân. Giờ mình đang học pha cocktail."],
        ["A", "Cool. I am looking for a new job at the moment.", "Hay đấy. Dạo này mình đang tìm việc mới."]
      ] },
      tip: "Hỏi mình: “**thường**” hay “**đang**”? Thường → I work. Đang (lúc này hoặc dạo này) → I am working." },

    { nav: "🧠 Động từ trạng thái", title: "Động từ chỉ trạng thái: không dùng -ing", sub: "like, love, want, know, need, believe, understand, have (sở hữu)",
      intro: [
        "Có một nhóm động từ chỉ **cảm xúc, suy nghĩ, mong muốn, sở hữu**, không phải hành động. Chúng gọi là **động từ chỉ trạng thái** và **thường không dùng ở dạng -ing**, kể cả khi trong tiếng Việt ta nói “đang”.",
        "Tiếng Việt nói “Tôi đang cần tiền”, nhưng tiếng Anh nói “I **need** money”, không nói “I am needing money”."
      ],
      table: { head: ["Nhóm", "Động từ", "Ví dụ đúng"], say: [2],
        rows: [
          ["Thích, ghét", "like, love, hate, prefer", "I love this song."],
          ["Muốn, cần", "want, need", "She wants a new phone."],
          ["Suy nghĩ, hiểu biết", "know, believe, understand, remember, mean", "Do you understand me?"],
          ["Sở hữu", "have (có), own, belong", "He has two children."],
          ["Giác quan, vẻ ngoài", "see, hear, seem", "I hear music next door."]
        ] },
      formulas: [
        { f: "chủ ngữ + động từ chỉ trạng thái (hiện tại đơn), kể cả khi nói về lúc này",
          mean: "**thích, muốn, biết, cần, có** ngay bây giờ vẫn dùng **hiện tại đơn**.",
          parts: [["like / love / hate / want / need", "cảm xúc và mong muốn: I want a coffee now (không nói “I am wanting”)."], ["know / believe / understand / remember", "suy nghĩ: I don’t understand this word."], ["have (sở hữu, có)", "He has a new car. I have a headache."]],
          use: "nói mình đang muốn gì, cần gì, có hiểu không, có biết không, có gì, ngay trong cuộc trò chuyện.",
          note: "Mẹo kiểm tra: động từ đó có phải **một hành động nhìn thấy được** không? Ăn, chạy, nói, nấu là hành động → được dùng -ing. Thích, biết, cần, hiểu là trạng thái trong đầu → không dùng -ing.",
          ex: [["I need some help right now.", "Tôi cần giúp đỡ ngay bây giờ."], ["Do you know the answer?", "Bạn có biết đáp án không?"], ["She doesn’t believe me.", "Cô ấy không tin tôi."], ["We have a small house near the river.", "Chúng tôi có một ngôi nhà nhỏ gần sông."]] },
        { f: "have khi là hành động: having lunch, having a shower, having fun",
          mean: "**have** có hai nghĩa: “**có, sở hữu**” (không dùng -ing) và “**ăn, uống, tắm, trải qua**” (là hành động, được dùng -ing).",
          parts: [["have = có", "I have a sister. She has long hair. Không nói “I am having a sister”."], ["have breakfast / lunch / dinner / a coffee", "ăn, uống: We are having lunch now."], ["have a shower / a party / a good time / fun", "tắm, tổ chức tiệc, vui chơi: Are you having fun?"]],
          use: "nghe điện thoại: “Sorry, I am having dinner.” và hỏi thăm ở bữa tiệc: “Are you having a good time?”.",
          note: "Câu “I am having a headache” là sai; đau đầu là trạng thái nên nói “I **have** a headache”.",
          ex: [["I am having breakfast with my family.", "Tôi đang ăn sáng với gia đình."], ["Sorry, he is having a shower. Can he call you back?", "Xin lỗi, anh ấy đang tắm. Anh ấy gọi lại cho bạn được không?"], ["She has a cold today.", "Hôm nay cô ấy bị cảm."], ["Are you having a good time?", "Bạn chơi có vui không?"]] }
      ],
      mistakes: [
        ["I am wanting a glass of water.", "I want a glass of water.", "**want** là động từ trạng thái, không dùng -ing."],
        ["Are you understanding me?", "Do you understand me?", "**understand** là động từ trạng thái: dùng hiện tại đơn với **do**."],
        ["He is having two cars.", "He has two cars.", "**have** nghĩa là sở hữu thì không dùng -ing."]
      ],
      talk: { title: "TÌNH HUỐNG: Ở QUÁN CÀ PHÊ VỚI BẠN", turns: [
        ["A", "What do you want to drink?", "Bạn muốn uống gì?"],
        ["B", "I want an iced coffee. I need some energy today.", "Mình muốn một cà phê đá. Hôm nay mình cần tỉnh táo."],
        ["A", "Are you working late tonight?", "Tối nay bạn làm muộn à?"],
        ["B", "Yes. I have a big report, and I don’t understand some of the numbers.", "Ừ. Mình có một bản báo cáo lớn, và mình không hiểu vài con số."],
        ["A", "I know a lot about Excel. I can help you.", "Mình biết nhiều về Excel. Mình giúp bạn được."]
      ] },
      tip: "Nhớ câu thần chú: “I **like**, I **love**, I **want**, I **need**, I **know**, I **understand**, I **have**” – không bao giờ “-ing”. Riêng **have** khi là ăn, uống, tắm thì được -ing." },

    { nav: "❓ Do hay doing?", title: "What do you do? và What are you doing?", sub: "Hỏi nghề nghiệp hay hỏi đang làm gì",
      intro: [
        "Đây là hai câu hỏi trông gần giống nhau nhưng nghĩa **khác hẳn**, và bạn sẽ gặp cả hai ngay trong buổi làm quen đầu tiên. **What do you do?** (hiện tại đơn) hỏi về **công việc**, thứ bạn làm thường xuyên. **What are you doing?** (hiện tại tiếp diễn) hỏi **lúc này bạn đang làm gì**.",
        "Phần này cũng giúp bạn kể nối tiếp: nói công việc chính bằng hiện tại đơn, rồi kể việc đang làm dạo này bằng hiện tại tiếp diễn."
      ],
      formulas: [
        { f: "What do you do? – I am a… / I work in… / I work as…",
          mean: "**Bạn làm nghề gì?** câu hỏi về công việc, không phải về lúc này.",
          parts: [["What do you do? / What does he do?", "hỏi nghề của bạn, của người khác (does với he / she)."], ["I am a / an + nghề", "I am a nurse. She is an engineer."], ["I work in / at / for + nơi làm", "I work in a hospital. He works for a bank."], ["I am a student. I study…", "nếu còn đi học: I study economics."]],
          use: "buổi làm quen, phỏng vấn, nói chuyện với khách nước ngoài. Có thể hỏi thêm: Do you like your job?",
          note: "Đừng trả lời “What do you do?” bằng “I am sitting in a café”. Người hỏi muốn biết **nghề**. Và nhớ **a / an** trước tên nghề: “I am **a** teacher”, không nói “I am teacher”.",
          ex: [["What do you do? – I am an accountant.", "Bạn làm nghề gì? – Tôi là kế toán."], ["I work in a hospital. I am a nurse.", "Tôi làm ở bệnh viện. Tôi là y tá."], ["What does your father do?", "Bố bạn làm nghề gì?"], ["He doesn’t work. He is retired.", "Ông ấy không đi làm. Ông ấy nghỉ hưu rồi."]] },
        { f: "What are you doing? – I am + động từ thêm -ing",
          mean: "**Bạn đang làm gì?** hỏi việc đang diễn ra ngay lúc này hoặc dạo này.",
          parts: [["What are you doing (now)?", "lúc này: I am watching a film."], ["What are you doing these days?", "dạo này: I am preparing for my wedding."], ["What are you doing tonight / this weekend?", "kế hoạch đã hẹn: I am going to the cinema with Mai."]],
          use: "nhắn tin, gọi điện cho bạn bè, gặp lại người quen lâu ngày, rủ đi chơi.",
          note: "Câu trả lời phải dùng **hiện tại tiếp diễn**: “I am studying”, không trả lời “I study”.",
          ex: [["What are you doing? – I am cleaning my room.", "Bạn đang làm gì đấy? – Mình đang dọn phòng."], ["What is your brother doing these days?", "Dạo này anh trai bạn đang làm gì?"], ["He is studying for his driving test.", "Anh ấy đang ôn thi bằng lái."], ["What are you doing this weekend?", "Cuối tuần này bạn làm gì?"]] }
      ],
      mistakes: [
        ["What do you do? – I am cooking dinner.", "What do you do? – I am a chef.", "**What do you do?** hỏi nghề nghiệp, trả lời bằng nghề."],
        ["I am teacher.", "I am a teacher.", "Trước tên nghề số ít cần **a / an**."],
        ["What are you doing? – I watch TV.", "What are you doing? – I am watching TV.", "Câu hỏi hiện tại tiếp diễn thì trả lời bằng **am + động từ thêm -ing**."]
      ],
      talk: { title: "TÌNH HUỐNG: LÀM QUEN Ở LỚP TIẾNG ANH", turns: [
        ["A", "Hi, I am Lan. What do you do, Tuan?", "Chào, mình là Lan. Tuấn làm nghề gì?"],
        ["B", "I am a software developer. I work for a company in District 7.", "Mình là lập trình viên. Mình làm cho một công ty ở Quận 7."],
        ["A", "Do you like it?", "Bạn có thích công việc không?"],
        ["B", "Yes, I do. We are building a new app at the moment. What about you?", "Có. Giờ bọn mình đang làm một ứng dụng mới. Còn bạn?"],
        ["A", "I teach maths at a high school. These days I am learning English for a trip.", "Mình dạy toán ở trường cấp ba. Dạo này mình đang học tiếng Anh để đi du lịch."],
        ["B", "Great! Where are you going?", "Tuyệt! Bạn định đi đâu?"]
      ] },
      tip: "**do you do** = nghề (thường xuyên). **are you doing** = lúc này. Nghe thấy chữ **-ing** trong câu hỏi thì trả lời bằng **-ing**." }
  ],
  speak: [
    { q: "What do you do?", vi: "Bạn làm nghề gì?", hint: "Hiện tại đơn: **I am a / an + nghề** và **I work in / for…**",
      answers: [["I am a sales assistant. I work in a clothes shop in Hanoi.", "Tôi là nhân viên bán hàng. Tôi làm ở một cửa hàng quần áo ở Hà Nội."], ["I am a student. I study business at university.", "Tôi là sinh viên. Tôi học kinh doanh ở đại học."]] },
    { q: "What time do you usually get up?", vi: "Bạn thường dậy lúc mấy giờ?", hint: "Hiện tại đơn + trạng từ tần suất: **I usually get up at…**",
      answers: [["I usually get up at six. On Sundays I get up at eight.", "Tôi thường dậy lúc sáu giờ. Chủ nhật tôi dậy lúc tám giờ."], ["I always get up at 5:30 because I go running.", "Tôi luôn dậy lúc năm rưỡi vì tôi đi chạy bộ."]] },
    { q: "Tell me about your typical day.", vi: "Kể cho tôi về một ngày bình thường của bạn.", hint: "Nối các thói quen bằng hiện tại đơn: **I get up…, then I…, after that I…** Nhớ -s nếu nói về người khác.",
      answers: [["I get up at six, then I have breakfast. I take the bus to work and I finish at five.", "Tôi dậy lúc sáu giờ, rồi ăn sáng. Tôi đi xe buýt đi làm và tan làm lúc năm giờ."], ["I start work at eight. I usually have lunch with my colleagues, and in the evening I watch TV.", "Tôi bắt đầu làm lúc tám giờ. Tôi thường ăn trưa với đồng nghiệp, và buổi tối tôi xem ti vi."]] },
    { q: "Does anyone in your family cook every day?", vi: "Trong nhà bạn có ai nấu ăn hằng ngày không?", hint: "Nói về một người: **My mother cooks…** / **does / doesn’t**.",
      answers: [["Yes, my mother cooks every day. My father doesn’t cook at all.", "Có, mẹ tôi nấu ăn hằng ngày. Bố tôi hoàn toàn không nấu."], ["My wife usually cooks, but I cook on weekends.", "Vợ tôi thường nấu, nhưng cuối tuần tôi nấu."]] },
    { q: "What are you doing right now?", vi: "Bây giờ bạn đang làm gì?", hint: "Hiện tại tiếp diễn: **I am + động từ thêm -ing**.",
      answers: [["I am practising English with this website.", "Tôi đang luyện tiếng Anh với trang web này."], ["I am sitting in a café and drinking a coffee.", "Tôi đang ngồi ở quán cà phê và uống cà phê."]] },
    { q: "What are you doing these days? Are you learning anything new?", vi: "Dạo này bạn đang làm gì? Bạn có đang học gì mới không?", hint: "Việc tạm thời: **These days I am… / This month I am…**",
      answers: [["These days I am learning to cook Japanese food.", "Dạo này tôi đang học nấu món Nhật."], ["I am working on a big project this month, so I am very busy.", "Tháng này tôi đang làm một dự án lớn nên tôi rất bận."]] },
    { q: "Do you usually drink coffee or tea? What are you drinking today?", vi: "Bạn thường uống cà phê hay trà? Hôm nay bạn đang uống gì?", hint: "Ghép hai thì: **I usually drink…, but today I am drinking…**",
      answers: [["I usually drink tea, but today I am drinking coffee because I am tired.", "Tôi thường uống trà, nhưng hôm nay tôi đang uống cà phê vì tôi mệt."], ["I always drink coffee. Today I am having an iced coffee with milk.", "Tôi luôn uống cà phê. Hôm nay tôi đang uống cà phê sữa đá."]] },
    { q: "What do you want to do this weekend?", vi: "Cuối tuần này bạn muốn làm gì?", hint: "Động từ trạng thái **want / need** dùng hiện tại đơn; kế hoạch đã hẹn dùng **I am + động từ thêm -ing**.",
      answers: [["I want to relax. I am meeting my friends for dinner on Saturday.", "Tôi muốn nghỉ ngơi. Thứ Bảy tôi đi ăn tối với bạn bè."], ["I need to clean my flat, and I am visiting my grandmother on Sunday.", "Tôi cần dọn căn hộ, và Chủ nhật tôi đi thăm bà."]] }
  ],
  exercises: [
    { title: "Phần 1: Chia động từ trong ngoặc", items: [
      { q: "My brother ___ (work) in a bank.", a: ["works"], hint: "thói quen, he" },
      { q: "She ___ (watch) Korean dramas every evening.", a: ["watches"], hint: "đuôi -ch thêm -es" },
      { q: "Lan ___ (not / like) spicy food.", a: ["doesn't like", "does not like", "doesn’t like"], hint: "phủ định, she" },
      { q: "___ your father ___ (drive) to work? (gõ hai từ)", a: ["does drive", "does, drive"], hint: "câu hỏi, he" },
      { q: "Be quiet! The baby ___ (sleep).", a: ["is sleeping", "'s sleeping", "’s sleeping"], hint: "đang xảy ra" },
      { q: "I ___ (study) for an exam this week, so I am busy.", a: ["am studying", "'m studying", "’m studying"], hint: "tạm thời, this week" },
      { q: "Look! It ___ (rain).", a: ["is raining", "'s raining", "’s raining"], hint: "Look! báo hiệu đang xảy ra" },
      { q: "I ___ (need) your help right now.", a: ["need"], hint: "động từ trạng thái" },
      { q: "We ___ (not / work) today. It is a holiday.", a: ["are not working", "aren't working", "aren’t working", "'re not working", "’re not working"], hint: "today, hôm nay không làm" },
      { q: "He ___ (have) two sisters.", a: ["has"], hint: "have nghĩa là có" }
    ] },
    { title: "Phần 2: Chọn câu đúng", items: [
      { q: "Chọn câu đúng:", options: ["Does she likes coffee?", "Does she like coffee?", "Is she like coffee?"], a: 1, why: "Có **does** thì động từ về nguyên mẫu." },
      { q: "Chọn câu đúng:", options: ["I am usually go to bed at eleven.", "I usually go to bed at eleven.", "I go usually to bed at eleven."], a: 1, why: "Thói quen dùng hiện tại đơn; usually đứng **trước động từ thường**." },
      { q: "Chọn câu đúng:", options: ["I am knowing the answer.", "I know the answer.", "I knowing the answer."], a: 1, why: "**know** là động từ trạng thái, không dùng -ing." },
      { q: "“What do you do?” Câu trả lời phù hợp:", options: ["I am reading a book.", "I am a nurse.", "I do my homework."], a: 1, why: "What do you do? hỏi **nghề nghiệp**." },
      { q: "“What are you doing?” Câu trả lời phù hợp:", options: ["I am a teacher.", "I cook dinner.", "I am cooking dinner."], a: 2, why: "Hỏi bằng hiện tại tiếp diễn thì trả lời bằng **am + động từ thêm -ing**." },
      { q: "Chọn câu đúng:", options: ["Sorry, I am having a shower.", "Sorry, I am having a headache.", "Sorry, I having a shower."], a: 0, why: "have a shower là **hành động** nên được dùng -ing; headache là trạng thái (I have a headache)." },
      { q: "Chọn câu đúng:", options: ["Do you working now?", "Are you work now?", "Are you working now?"], a: 2, why: "Câu hỏi hiện tại tiếp diễn: **Are you + động từ thêm -ing**." },
      { q: "“Tôi thường uống trà, nhưng hôm nay tôi đang uống cà phê.”", options: ["I usually drink tea, but today I am drinking coffee.", "I am usually drinking tea, but today I drink coffee.", "I usually drinking tea, but today I drink coffee."], a: 0, why: "Thói quen → hiện tại đơn; hôm nay đang làm → hiện tại tiếp diễn." }
    ] }
  ],
  vocab: [["every day / usually / always / often", "dấu hiệu hiện tại đơn"], ["sometimes / rarely / never", "thỉnh thoảng / hiếm khi / không bao giờ"], ["now / right now / at the moment", "dấu hiệu hiện tại tiếp diễn"], ["this week / these days", "dạo này (tạm thời)"], ["Look! / Listen!", "nhìn kìa / nghe này (đang xảy ra)"], ["do / does / don’t / doesn’t", "trợ động từ của hiện tại đơn"], ["am / is / are + động từ thêm -ing", "đang"], ["works / watches / studies / has", "dạng -s, -es với he / she / it"], ["like / love / want / need", "động từ trạng thái: không -ing"], ["know / believe / understand", "động từ trạng thái: không -ing"], ["What do you do?", "bạn làm nghề gì?"], ["What are you doing?", "bạn đang làm gì?"]],
  tips: [
    "Mỗi tối nói to năm câu về ngày của bạn bằng hiện tại đơn: “I get up…, I go…, I have…”. Rồi kể lại về một người trong nhà và nhớ thêm **-s**.",
    "Khi đang làm việc nhà, tự nói to bằng hiện tại tiếp diễn: “I am washing the dishes. I am cleaning the table.”",
    "Mỗi khi nói “dạo này”, nghĩ ngay đến **I am + động từ thêm -ing**: “These days I am…”.",
    "Gom các động từ trạng thái (like, want, need, know, understand, have) thành một câu thuộc lòng để không bao giờ thêm -ing cho chúng.",
    "Tập trả lời liền hai câu: “What do you do?” (nghề) rồi “What are you doing these days?” (dạo này) như khi làm quen thật."
  ]
};
