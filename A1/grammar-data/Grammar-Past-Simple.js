/* Ngữ pháp nền tảng: Quá khứ đơn (was / were, -ed, động từ bất quy tắc, did). Hiển thị bởi grammar-lesson.js. */
window.A1_GRAMMAR = {
  icon: "⏮️",
  short: "Quá khứ đơn",
  hero: ["Quá khứ đơn: kể việc đã xảy ra", "was · were · worked · went · did"],
  desc: "Tiếng Việt chỉ cần thêm “hôm qua” hay “đã” là thành quá khứ, động từ giữ nguyên. Tiếng Anh thì **động từ phải đổi dạng**: is thành **was**, work thành **worked**, go thành **went**. Đây là thì bạn dùng nhiều nhất khi kể về cuối tuần, chuyến đi hay một ngày vừa qua, nên nắm chắc nó là bạn kể chuyện được ngay.",
  chips: ["was / were", "Động từ thêm -ed", "Động từ bất quy tắc", "did not và Did…?", "Dấu hiệu thời gian"],
  goal: [
    "Kể cảm xúc, thời tiết, nơi chốn trong quá khứ với **was / were**: “The trip was great. We were in Da Lat.”",
    "Thêm **-ed** đúng chính tả và đọc đúng ba cách /t/, /d/, /ɪd/: worked, played, wanted.",
    "Dùng tự nhiên khoảng 30 **động từ bất quy tắc** thường gặp: went, ate, bought, saw…",
    "Hỏi và trả lời về quá khứ với **Did…?**, **What did you do…?** và nói phủ định với **didn’t + động từ nguyên mẫu**.",
    "Kể lại cuối tuần, chuyến đi, ngày hôm qua với **yesterday, last…, … ago, in 2020**."
  ],
  sections: [
    { nav: "🕰️ was / were", title: "was / were: quá khứ của động từ to be", sub: "Đã là, đã ở, đã cảm thấy: am / is thành was, are thành were",
      intro: [
        "Ở hiện tại ta có am, is, are. Sang quá khứ chỉ còn hai dạng: **was** và **were**. Chúng dùng để nói một người, một vật **đã như thế nào, đã ở đâu**: mệt, vui, đắt, ở nhà, ở Huế.",
        "was / were tự làm câu phủ định (thêm not) và câu hỏi (đảo lên trước chủ ngữ), **không cần did**. Hãy đọc to bảng dưới theo hàng ngang."
      ],
      table: { head: ["Chủ ngữ", "Khẳng định", "Phủ định (đầy đủ)", "Phủ định (rút gọn)", "Câu hỏi"], say: [1, 2, 3, 4],
        rows: [
          ["I", "I was at home.", "I was not at home.", "I wasn’t at home.", "Was I late?"],
          ["he / she / it", "She was busy.", "She was not busy.", "She wasn’t busy.", "Was she busy?"],
          ["you", "You were right.", "You were not right.", "You weren’t right.", "Were you at home?"],
          ["we", "We were happy.", "We were not happy.", "We weren’t happy.", "Were we late?"],
          ["they", "They were at work.", "They were not at work.", "They weren’t at work.", "Were they at work?"]
        ] },
      formulas: [
        { f: "chủ ngữ + was / were + tính từ / danh từ / nơi chốn",
          mean: "**đã là, đã ở, đã (cảm thấy)**: quá khứ của am / is / are.",
          parts: [["was", "đi với **I, he, she, it** và một người, một vật: I was, my mother was, the film was."], ["were", "đi với **you, we, they** và nhiều người, nhiều vật: you were, we were, my parents were."]],
          use: "nói về cảm xúc, thời tiết, nơi chốn, tính chất trong quá khứ. Phía sau là tính từ (tired, great, cheap), danh từ (a student, a teacher) hoặc nơi chốn (at home, in Hue).",
          note: "Người Việt hay quên động từ to be khi kể: “Yesterday I very tired.” Câu tiếng Anh phải có **was**: “Yesterday I **was** very tired.”",
          ex: [["The weather was beautiful yesterday.", "Hôm qua thời tiết rất đẹp."], ["My parents were in Hue last week.", "Tuần trước bố mẹ tôi ở Huế."], ["I was a student in 2015.", "Năm 2015 tôi là sinh viên."], ["The food was cheap and delicious.", "Đồ ăn rẻ và ngon."]] },
        { f: "chủ ngữ + was not (wasn’t) / were not (weren’t)",
          mean: "**đã không, không phải là, không ở** trong quá khứ.",
          parts: [["was not = wasn’t", "đi với I, he, she, it: I wasn’t hungry, the hotel wasn’t clean."], ["were not = weren’t", "đi với you, we, they: we weren’t late, they weren’t at home."]],
          use: "phủ nhận hoặc giải thích lý do: “I wasn’t at home, so I didn’t hear the phone.” Khi nói chuyện, dạng rút gọn **wasn’t, weren’t** tự nhiên hơn.",
          note: "Không thêm did vào câu có was / were: không nói “I didn’t was at home”. was và were tự làm phủ định bằng **not**.",
          ex: [["I wasn’t hungry, so I didn’t eat.", "Tôi không đói nên tôi không ăn."], ["The hotel was not very clean.", "Khách sạn không sạch lắm."], ["We weren’t late. We were early!", "Chúng tôi không muộn. Chúng tôi còn đến sớm!"], ["My friends weren’t at the party.", "Các bạn tôi không có mặt ở bữa tiệc."]] },
        { f: "Was / Were + chủ ngữ …? — How / Where + was / were …?",
          mean: "**câu hỏi** với was / were: đưa was / were lên trước chủ ngữ.",
          parts: [["Was / Were + chủ ngữ …?", "câu hỏi có hoặc không. Trả lời ngắn: Yes, I was. / No, it wasn’t."], ["How was …?", "hỏi cảm nhận: How was your weekend? How was the trip?"], ["Where were you …?", "hỏi nơi chốn: Where were you last night?"]],
          use: "mở đầu câu chuyện. “How was your weekend?” là câu người bản xứ hỏi nhau mỗi sáng thứ Hai; trả lời bằng “It was…” rồi kể tiếp.",
          note: "Trả lời ngắn lặp lại was / were, không dùng did: “Were you busy?” – “Yes, I **was**.” (không nói “Yes, I did.”).",
          ex: [["How was your weekend?", "Cuối tuần của bạn thế nào?"], ["Were you at work yesterday?", "Hôm qua bạn có đi làm không?"], ["No, I wasn’t. I was at home.", "Không. Tôi ở nhà."], ["Where were you last night?", "Tối qua bạn ở đâu?"]] }
      ],
      mistakes: [
        ["Yesterday I very tired.", "Yesterday I was very tired.", "Câu tiếng Anh cần động từ; trước tính từ (tired) phải có **was**."],
        ["We was at the beach.", "We were at the beach.", "**we** đi với **were**, không đi với was."],
        ["I didn’t was at home.", "I wasn’t at home.", "was / were tự làm phủ định bằng **not**, không dùng did."]
      ],
      talk: { title: "TÌNH HUỐNG: SÁNG THỨ HAI Ở VĂN PHÒNG", turns: [
        ["A", "Good morning! How was your weekend?", "Chào buổi sáng! Cuối tuần của bạn thế nào?"],
        ["B", "It was great, thanks. I was in Vung Tau with my family.", "Tuyệt lắm, cảm ơn bạn. Mình ở Vũng Tàu với gia đình."],
        ["A", "Really? Was the weather nice?", "Thật à? Thời tiết có đẹp không?"],
        ["B", "Yes, it was sunny, and the beach wasn’t crowded. How about you?", "Có, trời nắng và bãi biển không đông. Còn bạn thì sao?"],
        ["A", "My weekend wasn’t very interesting. I was at home because I was sick.", "Cuối tuần của mình không thú vị lắm. Mình ở nhà vì bị ốm."],
        ["B", "Oh no! Are you OK now?", "Ôi không! Giờ bạn ổn chưa?"]
      ] },
      tip: "**was** đi với một người, một vật (I, he, she, it); **were** đi với you và số nhiều (we, they). Đọc to: “I was, you were, he was, we were, they were.”" },

    { nav: "✏️ Động từ thêm -ed", title: "Động từ có quy tắc: thêm -ed", sub: "Viết đúng chính tả và đọc đúng ba cách /t/, /d/, /ɪd/",
      intro: [
        "Phần lớn động từ tiếng Anh chuyển sang quá khứ bằng cách thêm **-ed**: work → worked, visit → visited. Dạng này **giống nhau cho mọi chủ ngữ**: I worked, she worked, they worked. Không còn chuyện thêm -s cho he / she như ở hiện tại.",
        "Có hai việc cần học: **viết** đúng (bốn quy tắc chính tả trong công thức 1) và **đọc** đúng đuôi -ed (ba cách đọc trong bảng). Người Việt hay nuốt mất âm cuối, khiến người nghe tưởng mình đang nói ở hiện tại."
      ],
      table: { head: ["Cách đọc -ed", "Khi động từ tận cùng bằng âm", "Ví dụ", "Nghĩa"], say: [2],
        rows: [
          ["/t/", "âm vô thanh (không rung cổ họng): /p/, /k/, /f/, /s/, /ʃ/ (sh), /tʃ/ (ch)", "stopped, worked, laughed, missed, washed, watched", "dừng, làm việc, cười, nhớ, rửa, xem"],
          ["/d/", "nguyên âm và âm hữu thanh (rung cổ họng): /b/, /g/, /v/, /z/, /m/, /n/, /l/, /r/", "played, lived, called, cleaned, opened, enjoyed", "chơi, sống, gọi, lau dọn, mở, thích thú"],
          ["/ɪd/", "chỉ âm /t/ và /d/", "wanted, visited, waited, needed, decided, started", "muốn, thăm, đợi, cần, quyết định, bắt đầu"]
        ] },
      formulas: [
        { f: "chủ ngữ + động từ thêm -ed",
          mean: "**đã làm** một việc (động từ có quy tắc); một dạng cho mọi chủ ngữ.",
          parts: [["thêm -ed", "hầu hết động từ: work → worked, help → helped, play → played (trước y là nguyên âm a, e, o thì giữ nguyên y)."], ["thêm -d", "động từ tận cùng bằng **e**: live → lived, like → liked, dance → danced."], ["y → ied", "trước y là **phụ âm**: study → studied, try → tried, carry → carried."], ["gấp đôi phụ âm + ed", "động từ một âm tiết tận cùng bằng **phụ âm + nguyên âm + phụ âm**: stop → stopped, plan → planned, shop → shopped. Không gấp đôi w, x, y: fix → fixed, snow → snowed."]],
          use: "kể những việc đã làm xong: I cooked dinner, I watched a film, we walked around the lake. Thường đi kèm một mốc thời gian: yesterday, last week.",
          note: "Người Việt hay quên đuôi -ed khi nói nhanh: “Yesterday I watch TV.” Có “yesterday” rồi vẫn phải đổi động từ: “Yesterday I watch**ed** TV.”",
          ex: [["I worked late yesterday.", "Hôm qua tôi làm việc muộn."], ["We visited Ha Long Bay last summer.", "Mùa hè năm ngoái chúng tôi đi thăm vịnh Hạ Long."], ["She studied English at university.", "Cô ấy học tiếng Anh ở trường đại học."], ["The bus stopped in front of my house.", "Xe buýt dừng trước nhà tôi."]] },
        { f: "đuôi -ed: đọc /t/, /d/ hay /ɪd/",
          mean: "**ba cách đọc** đuôi -ed, chọn theo **âm cuối** của động từ nguyên mẫu, không theo chữ cái cuối.",
          parts: [["/t/", "sau âm vô thanh: worked, watched, liked (like viết bằng e nhưng âm cuối là /k/)."], ["/d/", "sau nguyên âm và âm hữu thanh: played, lived, cleaned."], ["/ɪd/", "chỉ sau /t/ và /d/: wanted, needed. Đây là trường hợp **duy nhất** đuôi -ed thành một âm tiết riêng."]],
          use: "khi đọc to câu kể chuyện. Với /t/ và /d/, không đọc thành “ét” hay “đờ”; chỉ bật nhẹ âm cuối và nối sang từ sau: worked_at, played_a game.",
          note: "Lỗi phổ biến là đọc mọi đuôi -ed thành “ít”: “work-ít”, “play-ít”. Chỉ thêm âm tiết /ɪd/ khi động từ tận cùng bằng âm t hoặc d.",
          ex: [["I watched a film and laughed a lot.", "Tôi xem phim và cười rất nhiều."], ["We played badminton and cleaned the house.", "Chúng tôi chơi cầu lông và dọn nhà."], ["They wanted to visit their grandparents.", "Họ muốn đi thăm ông bà."], ["I needed a rest, so I stayed at home.", "Tôi cần nghỉ ngơi nên tôi ở nhà."]] }
      ],
      mistakes: [
        ["Yesterday I watch TV all evening.", "Yesterday I watched TV all evening.", "Có mốc quá khứ (yesterday) thì động từ phải thêm **-ed**."],
        ["She studyed hard for the test.", "She studied hard for the test.", "Trước y là phụ âm d nên đổi **y → ied**."],
        ["We stoped at a café.", "We stopped at a café.", "stop có một âm tiết, tận cùng phụ âm + nguyên âm + phụ âm nên **gấp đôi p**."]
      ],
      talk: { title: "TÌNH HUỐNG: HỎI THĂM NGÀY HÔM QUA", turns: [
        ["A", "You look tired. Did you work late yesterday?", "Trông bạn mệt quá. Hôm qua bạn làm muộn à?"],
        ["B", "Yes, I worked until nine. Then I walked home.", "Ừ, mình làm đến chín giờ. Rồi mình đi bộ về nhà."],
        ["A", "Nine o’clock? Why so late?", "Chín giờ á? Sao muộn thế?"],
        ["B", "We needed to finish a report. My boss wanted it this morning.", "Bọn mình cần làm xong một bản báo cáo. Sếp muốn có nó sáng nay."],
        ["A", "I hope you rested after that.", "Mong là sau đó bạn được nghỉ ngơi."],
        ["B", "Not really. I watched a film and stayed up late!", "Không hẳn. Mình xem phim rồi thức khuya!"]
      ] },
      tip: "Đọc to ba từ mẫu mỗi ngày: work**ed** /t/, play**ed** /d/, want**ed** /ɪd/. Chỉ động từ tận cùng bằng âm t hoặc d mới thêm âm “ɪd”." },

    { nav: "🔀 Động từ bất quy tắc", title: "Động từ bất quy tắc thường gặp", sub: "go → went, eat → ate: không thêm -ed, phải học thuộc",
      intro: [
        "Một nhóm động từ không thêm -ed mà **đổi hẳn dạng**: go → went, eat → ate, buy → bought. Đây lại chính là những động từ dùng nhiều nhất khi kể chuyện, nên phải học thuộc.",
        "Cách học: đọc to theo cặp “go, went”, “eat, ate” và đặt mỗi động từ vào một câu về chính bạn. Bảng dưới có 34 động từ thường gặp nhất; cột thứ hai là dạng quá khứ, giống nhau cho mọi chủ ngữ."
      ],
      table: { head: ["Nguyên mẫu", "Quá khứ", "Nghĩa"], say: [0, 1],
        rows: [
          ["go", "went", "đi"],
          ["come", "came", "đến"],
          ["get", "got", "nhận, lấy, đến nơi (get up = thức dậy)"],
          ["have", "had", "có; ăn, uống (have lunch)"],
          ["do", "did", "làm"],
          ["make", "made", "làm ra, nấu"],
          ["take", "took", "cầm đi; đi (xe); chụp (ảnh)"],
          ["see", "saw", "nhìn thấy, xem"],
          ["eat", "ate", "ăn"],
          ["drink", "drank", "uống"],
          ["buy", "bought", "mua"],
          ["bring", "brought", "mang đến"],
          ["think", "thought", "nghĩ"],
          ["teach", "taught", "dạy"],
          ["say", "said", "nói"],
          ["tell", "told", "kể, bảo"],
          ["give", "gave", "cho, tặng"],
          ["find", "found", "tìm thấy"],
          ["leave", "left", "rời đi, để quên"],
          ["meet", "met", "gặp"],
          ["sleep", "slept", "ngủ"],
          ["feel", "felt", "cảm thấy"],
          ["know", "knew", "biết"],
          ["write", "wrote", "viết"],
          ["read", "read", "đọc (quá khứ viết giống hệt nhưng đọc là /red/)"],
          ["speak", "spoke", "nói (một ngôn ngữ), phát biểu"],
          ["sit", "sat", "ngồi"],
          ["swim", "swam", "bơi"],
          ["put", "put", "đặt, để"],
          ["pay", "paid", "trả tiền"],
          ["spend", "spent", "tiêu (tiền), dành (thời gian)"],
          ["lose", "lost", "làm mất; thua"],
          ["forget", "forgot", "quên"],
          ["wear", "wore", "mặc, đội, đeo"]
        ] },
      formulas: [
        { f: "chủ ngữ + động từ quá khứ (cột thứ hai)",
          mean: "**đã làm**: dùng dạng ở cột thứ hai của bảng, giống nhau cho mọi chủ ngữ.",
          parts: [["went, ate, saw, bought…", "dùng đúng dạng quá khứ trong bảng, không thêm -ed."], ["I / you / he / she / we / they", "cùng một dạng: I went, she went, they went."]],
          use: "kể các việc trong ngày, chuyến đi, bữa ăn: I got up at six, had breakfast and went to work.",
          note: "Không thêm -ed vào động từ bất quy tắc: “goed”, “buyed”, “eated” đều sai. Cũng không gộp cả hai: “wented” cũng sai.",
          ex: [["I went to Da Nang last month.", "Tháng trước tôi đi Đà Nẵng."], ["We ate pho for breakfast.", "Chúng tôi ăn phở vào bữa sáng."], ["She bought a new dress for the party.", "Cô ấy mua một chiếc váy mới để đi tiệc."], ["My father taught me how to swim.", "Bố tôi dạy tôi bơi."]] },
        { f: "học động từ bất quy tắc theo nhóm",
          mean: "**chia thành nhóm có cách đổi giống nhau** để nhớ nhanh hơn học từng từ riêng lẻ.",
          parts: [["không đổi", "put → put, cut → cut, cost → cost, read → read (nhưng đọc là /red/)."], ["đổi i thành a", "drink → drank, swim → swam, sing → sang, begin → began, sit → sat."], ["đuôi -ought / -aught", "buy → bought, bring → brought, think → thought, teach → taught, catch → caught. Cả hai đuôi đều đọc là /ɔːt/."], ["đổi thành đuôi -t", "sleep → slept, feel → felt, leave → left, spend → spent, lose → lost."]],
          use: "khi ôn bảng: mỗi ngày học một nhóm, đọc to cả nhóm rồi đặt câu.",
          note: "**bought** (đã mua) và **brought** (đã mang) chỉ khác một chữ r, rất dễ nhầm. “I **bought** a cake” là tôi mua bánh; “I **brought** a cake” là tôi mang bánh đến.",
          ex: [["The ticket cost two hundred thousand dong.", "Vé có giá hai trăm nghìn đồng."], ["I drank too much coffee and slept badly.", "Tôi uống quá nhiều cà phê và ngủ không ngon."], ["I thought the test was easy.", "Tôi đã nghĩ bài kiểm tra dễ."], ["She left her phone in the taxi.", "Cô ấy để quên điện thoại trên taxi."]] }
      ],
      mistakes: [
        ["Last week I goed to Hue.", "Last week I went to Hue.", "go là động từ bất quy tắc: quá khứ là **went**."],
        ["I buyed a jacket yesterday.", "I bought a jacket yesterday.", "buy → **bought**, không thêm -ed."],
        ["We eated seafood in Nha Trang.", "We ate seafood in Nha Trang.", "eat → **ate**."]
      ],
      talk: { title: "TÌNH HUỐNG: KỂ VỀ CHUYẾN ĐI ĐÀ LẠT", turns: [
        ["A", "I heard you went to Da Lat. How was it?", "Nghe nói bạn đi Đà Lạt. Thế nào?"],
        ["B", "It was wonderful! We took the night bus and got there at six in the morning.", "Tuyệt lắm! Bọn mình đi xe khách đêm và đến nơi lúc sáu giờ sáng."],
        ["A", "What did you do there?", "Ở đó các bạn làm gì?"],
        ["B", "We saw the flower gardens, drank hot soy milk and bought some strawberries.", "Bọn mình đi xem vườn hoa, uống sữa đậu nành nóng và mua ít dâu tây."],
        ["A", "Sounds lovely. Did you take many photos?", "Nghe thích quá. Bạn có chụp nhiều ảnh không?"],
        ["B", "Yes, I took hundreds! I felt very relaxed there.", "Có, mình chụp cả trăm tấm! Ở đó mình thấy rất thư thái."]
      ] },
      tip: "Mỗi ngày chọn 5 động từ trong bảng, đọc to theo cặp “go, went; eat, ate…” rồi nói một câu về hôm qua với từng từ: “I went to work. I ate noodles.”" },

    { nav: "❓ did not và Did…?", title: "Câu phủ định và câu hỏi với did", sub: "did đã là quá khứ, nên động từ chính trở về nguyên mẫu",
      intro: [
        "Khi phủ định hoặc hỏi ở quá khứ đơn, tiếng Anh dùng trợ động từ **did**. Điều quan trọng nhất: **did đã mang nghĩa quá khứ rồi, nên động từ chính trở về dạng nguyên mẫu**.",
        "Quy tắc này đúng cho cả động từ có quy tắc và bất quy tắc: I went → I did not **go**; she bought → Did she **buy**? Chỉ có was / were (phần 1) là không dùng did."
      ],
      table: { head: ["Động từ", "Khẳng định", "Phủ định", "Câu hỏi", "Trả lời ngắn"], say: [1, 2, 3, 4],
        rows: [
          ["work (có quy tắc)", "I worked.", "I didn’t work.", "Did you work?", "Yes, I did. / No, I didn’t."],
          ["go (bất quy tắc)", "She went.", "She didn’t go.", "Did she go?", "Yes, she did. / No, she didn’t."],
          ["eat (bất quy tắc)", "They ate.", "They didn’t eat.", "Did they eat?", "Yes, they did. / No, they didn’t."]
        ] },
      formulas: [
        { f: "chủ ngữ + did not (didn’t) + động từ nguyên mẫu",
          mean: "**đã không, không có** làm gì trong quá khứ.",
          parts: [["did not", "dạng đầy đủ, dùng khi viết hoặc khi muốn nhấn mạnh: I did **not** say that!"], ["didn’t", "dạng rút gọn, dùng khi nói chuyện hằng ngày."], ["động từ nguyên mẫu", "go, buy, work: không đổi sang went, bought, worked nữa."]],
          use: "kể việc không làm và giải thích lý do: “I didn’t go out because it rained.” Phía sau thường có because.",
          note: "Lỗi kinh điển: “I didn’t went.” Đã có **did** thì động từ chính không chia quá khứ nữa: “I didn’t **go**.”",
          ex: [["I didn’t sleep well last night.", "Tối qua tôi ngủ không ngon."], ["We did not go to the beach because it rained.", "Chúng tôi không đi biển vì trời mưa."], ["She didn’t buy anything at the market.", "Cô ấy không mua gì ở chợ."], ["My brother didn’t call me yesterday.", "Hôm qua anh trai tôi không gọi cho tôi."]] },
        { f: "Did + chủ ngữ + động từ nguyên mẫu …?",
          mean: "**có … không?** câu hỏi có hoặc không về quá khứ.",
          parts: [["Did you / he / they …?", "một chữ did cho mọi chủ ngữ."], ["Yes, … did.", "trả lời có: Yes, I did. Yes, she did."], ["No, … didn’t.", "trả lời không: No, I didn’t. No, they didn’t."]],
          use: "hỏi thăm, kiểm tra thông tin: Did you have lunch? Did you sleep well? Did you enjoy the trip? Trả lời ngắn xong nên nói thêm một câu để cuộc trò chuyện tiếp tục.",
          note: "Câu với tính từ dùng was / were, không dùng did: “**Were** you tired?” chứ không phải “Did you tired?”. Có động từ hành động (go, eat, watch) thì mới dùng did.",
          ex: [["Did you have breakfast this morning?", "Sáng nay bạn ăn sáng chưa?"], ["Yes, I did. I had a bowl of pho.", "Rồi. Tôi ăn một bát phở."], ["Did your sister enjoy the film?", "Chị gái bạn có thích bộ phim không?"], ["No, she didn’t. She thought it was boring.", "Không. Chị ấy thấy nó chán."]] },
        { f: "từ để hỏi + did + chủ ngữ + động từ nguyên mẫu …?",
          mean: "**hỏi thông tin**: làm gì, ở đâu, với ai, khi nào, tại sao trong quá khứ.",
          parts: [["What did … do?", "làm gì: What did you do last weekend?"], ["Where did … go?", "đi đâu: Where did you go on holiday?"], ["Who did … go with?", "đi với ai: Who did you go with?"], ["When / Why / How long did …?", "khi nào / tại sao / bao lâu."]],
          use: "hỏi để người kia kể thêm, nhất là ngay sau câu “How was your weekend?”.",
          note: "Người Việt hay bỏ did vì tiếng Việt hỏi “Bạn đã đi đâu?”: “Where you went?” Phải có **did** và động từ nguyên mẫu: “Where **did** you **go**?”",
          ex: [["What did you do last weekend?", "Cuối tuần trước bạn làm gì?"], ["Where did you go on holiday?", "Kỳ nghỉ bạn đi đâu?"], ["Who did you have dinner with?", "Bạn ăn tối với ai?"], ["Why did you leave so early?", "Sao bạn về sớm thế?"]] }
      ],
      mistakes: [
        ["I didn’t went to work yesterday.", "I didn’t go to work yesterday.", "Sau **didn’t** dùng động từ nguyên mẫu **go**."],
        ["Where you went last night?", "Where did you go last night?", "Câu hỏi thông tin cần **did** trước chủ ngữ và động từ nguyên mẫu."],
        ["Did you watched the match?", "Did you watch the match?", "**Did** đã là quá khứ, nên watch giữ nguyên mẫu."]
      ],
      talk: { title: "TÌNH HUỐNG: HỎI VỀ KỲ NGHỈ", turns: [
        ["A", "Did you go anywhere during the holiday?", "Kỳ nghỉ vừa rồi bạn có đi đâu không?"],
        ["B", "Yes, I did. I went back to my hometown in Nghe An.", "Có. Mình về quê ở Nghệ An."],
        ["A", "Nice! What did you do there?", "Hay quá! Ở đó bạn làm gì?"],
        ["B", "I visited my grandparents and helped my mother in the garden.", "Mình thăm ông bà và giúp mẹ làm vườn."],
        ["A", "Did you go to the beach?", "Bạn có đi biển không?"],
        ["B", "No, I didn’t. It was too cold, but I ate a lot of good food!", "Không. Trời lạnh quá, nhưng mình được ăn nhiều món ngon!"]
      ] },
      tip: "Một câu chỉ cần **một** dấu hiệu quá khứ: nếu đã có **did** thì động từ phía sau để nguyên mẫu (did … go, không phải did … went)." },

    { nav: "📅 Dấu hiệu thời gian", title: "Dấu hiệu thời gian của quá khứ đơn", sub: "yesterday, last…, … ago, in 2020: nghe thấy là đổi động từ",
      intro: [
        "Dấu hiệu thời gian cho người nghe biết chuyện xảy ra khi nào, và nhắc bạn **phải dùng quá khứ đơn**. Chúng thường đứng cuối câu, hoặc đầu câu khi bạn muốn mở đầu câu chuyện: “Last summer, we went to Phu Quoc.”"
      ],
      table: { head: ["Dấu hiệu", "Ví dụ", "Nghĩa"], say: [1],
        rows: [
          ["yesterday", "yesterday, yesterday morning, yesterday afternoon", "hôm qua, sáng hôm qua, chiều hôm qua"],
          ["last + thời gian", "last night, last week, last month, last year, last Sunday", "tối qua, tuần trước, tháng trước, năm ngoái, Chủ nhật tuần trước"],
          ["khoảng thời gian + ago", "two days ago, a week ago, ten years ago", "hai ngày trước, một tuần trước, mười năm trước"],
          ["in / on / at + mốc thời gian", "in 2020, in May, on Monday, on my birthday, at seven o’clock", "năm 2020, tháng Năm, thứ Hai, vào sinh nhật tôi, lúc bảy giờ"],
          ["when + quá khứ đơn", "when I was a child, when I lived in Saigon", "khi tôi còn nhỏ, khi tôi sống ở Sài Gòn"]
        ] },
      formulas: [
        { f: "yesterday / last + thời gian",
          mean: "**hôm qua / … trước**: những mốc gần đây nhất.",
          parts: [["yesterday", "hôm qua; ghép được với morning, afternoon, evening: yesterday morning."], ["last night", "tối qua, đêm qua. **Không nói** “yesterday night”."], ["last week / month / year / Monday / summer", "tuần trước, tháng trước, năm ngoái, thứ Hai tuần trước, mùa hè năm ngoái."]],
          use: "kể chuyện gần đây: cuối tuần, tối qua, tháng trước. Hỏi lại: “What did you do last night?”",
          note: "Không thêm **the** hay **in** trước last khi nói “tuần trước”: không nói “the last week” hay “in last week”, chỉ cần **last week**.",
          ex: [["I met my old classmates yesterday.", "Hôm qua tôi gặp các bạn học cũ."], ["What did you do last night?", "Tối qua bạn làm gì?"], ["We moved to a new flat last month.", "Tháng trước chúng tôi chuyển đến căn hộ mới."], ["I didn’t go to the gym last week.", "Tuần trước tôi không đi tập thể dục."]] },
        { f: "khoảng thời gian + ago",
          mean: "**cách đây …**: đếm lùi từ bây giờ.",
          parts: [["two hours ago", "hai tiếng trước."], ["three days ago / a week ago", "ba ngày trước / một tuần trước."], ["a long time ago", "lâu lắm rồi."]],
          use: "nói một việc xảy ra cách đây bao lâu; ago luôn đứng **sau** khoảng thời gian. Hỏi: “How long ago did you …?”",
          note: "Tiếng Việt nói “cách đây hai năm” nên người Việt hay nói “ago two years”. Đúng là **two years ago**.",
          ex: [["I started this job two years ago.", "Tôi bắt đầu công việc này cách đây hai năm."], ["She called me ten minutes ago.", "Cô ấy gọi cho tôi mười phút trước."], ["How long ago did you move to Hanoi?", "Bạn chuyển đến Hà Nội cách đây bao lâu?"], ["I didn’t have a smartphone ten years ago.", "Mười năm trước tôi không có điện thoại thông minh."]] },
        { f: "in / on / at + mốc thời gian",
          mean: "**vào năm, tháng, ngày, giờ** cụ thể.",
          parts: [["in", "năm, tháng, mùa: in 2020, in March, in the summer."], ["on", "ngày, thứ: on Monday, on 2nd September, on my birthday."], ["at", "giờ: at six o’clock, at noon, at night."]],
          use: "kể các mốc quan trọng trong đời: “I finished university in 2018.” “I met my wife on Valentine’s Day.”",
          note: "Năm luôn dùng **in**: in 2020, không nói on 2020 hay at 2020.",
          ex: [["I finished university in 2018.", "Tôi tốt nghiệp đại học năm 2018."], ["We got married in May.", "Chúng tôi cưới vào tháng Năm."], ["Did you work on Sunday?", "Chủ nhật bạn có làm việc không?"], ["The train left at seven o’clock.", "Tàu chạy lúc bảy giờ."]] }
      ],
      mistakes: [
        ["I met him yesterday night.", "I met him last night.", "“Tối qua” là **last night**; không nói yesterday night."],
        ["I moved to Hanoi ago three years.", "I moved to Hanoi three years ago.", "**ago** đứng sau khoảng thời gian."],
        ["I graduated on 2020.", "I graduated in 2020.", "Năm dùng giới từ **in**."]
      ],
      talk: { title: "TÌNH HUỐNG: LÀM QUEN VỚI ĐỒNG NGHIỆP MỚI", turns: [
        ["A", "When did you start working here?", "Bạn bắt đầu làm ở đây từ khi nào?"],
        ["B", "I started two months ago, in September.", "Mình bắt đầu cách đây hai tháng, vào tháng Chín."],
        ["A", "Where did you work before that?", "Trước đó bạn làm ở đâu?"],
        ["B", "I worked at a hotel in Saigon. I moved to Hanoi last year.", "Mình làm ở một khách sạn ở Sài Gòn. Năm ngoái mình chuyển ra Hà Nội."],
        ["A", "Was it difficult at first?", "Lúc đầu có khó khăn không?"],
        ["B", "A little. The winter was very cold, but I loved the food!", "Một chút. Mùa đông lạnh lắm, nhưng mình rất thích đồ ăn ở đây!"]
      ] },
      tip: "Ba từ báo hiệu quá khứ: **yesterday, last, ago**. Nghe hoặc nói một trong ba từ này là động từ phải đổi sang quá khứ." }
  ],
  speak: [
    { q: "How was your weekend?", vi: "Cuối tuần của bạn thế nào?", hint: "Mở đầu bằng **It was + tính từ**, rồi kể 2–3 việc bằng động từ quá khứ: It was great. I went…, I watched…",
      answers: [["It was relaxing. I slept late, cleaned my room and watched a film.", "Thư thái lắm. Tôi ngủ dậy muộn, dọn phòng và xem một bộ phim."], ["It was busy. I visited my parents and helped my mother cook.", "Bận lắm. Tôi về thăm bố mẹ và giúp mẹ nấu ăn."]] },
    { q: "What did you do yesterday evening?", vi: "Tối hôm qua bạn làm gì?", hint: "Kể theo thứ tự bằng **động từ quá khứ**: I got home at…, I cooked…, then I…",
      answers: [["I got home at six, cooked dinner and played with my kids.", "Tôi về nhà lúc sáu giờ, nấu bữa tối và chơi với các con."], ["I went to the gym, and then I had dinner with a friend.", "Tôi đi tập thể dục, rồi ăn tối với một người bạn."]] },
    { q: "Where did you go on your last holiday?", vi: "Kỳ nghỉ gần nhất bạn đi đâu?", hint: "**I went to … with … + last year / two months ago**, rồi thêm một câu với **was**: It was beautiful.",
      answers: [["I went to Phu Quoc with my family last summer. The beach was beautiful.", "Mùa hè năm ngoái tôi đi Phú Quốc với gia đình. Bãi biển rất đẹp."], ["I didn’t go anywhere. I stayed at home and rested.", "Tôi không đi đâu cả. Tôi ở nhà nghỉ ngơi."]] },
    { q: "What did you have for breakfast this morning?", vi: "Sáng nay bạn ăn sáng món gì?", hint: "**I had / I ate …**; nếu không ăn: **I didn’t have breakfast because …**",
      answers: [["I had a bowl of pho and a glass of iced tea.", "Tôi ăn một bát phở và uống một cốc trà đá."], ["I didn’t have breakfast because I got up late.", "Tôi không ăn sáng vì dậy muộn."]] },
    { q: "Did you sleep well last night?", vi: "Tối qua bạn ngủ có ngon không?", hint: "Trả lời ngắn **Yes, I did. / No, I didn’t.** rồi thêm lý do bằng quá khứ đơn.",
      answers: [["Yes, I did. I went to bed early.", "Có. Tôi đi ngủ sớm."], ["No, I didn’t. My neighbour’s dog barked all night.", "Không. Con chó nhà hàng xóm sủa cả đêm."]] },
    { q: "When did you start learning English?", vi: "Bạn bắt đầu học tiếng Anh từ khi nào?", hint: "**I started … + … ago / in + năm / when I was …**",
      answers: [["I started learning English three months ago.", "Tôi bắt đầu học tiếng Anh cách đây ba tháng."], ["I started in 2010, when I was in secondary school.", "Tôi bắt đầu năm 2010, khi tôi học cấp hai."]] },
    { q: "Where were you at this time yesterday?", vi: "Giờ này hôm qua bạn ở đâu?", hint: "Dùng **I was at / in …** và thêm một việc bạn đã làm.",
      answers: [["I was at the office. I had a long meeting.", "Tôi ở văn phòng. Tôi có một cuộc họp dài."], ["I was at home with my family.", "Tôi ở nhà với gia đình."]] },
    { q: "What was the last thing you bought?", vi: "Món đồ gần nhất bạn mua là gì?", hint: "**The last thing I bought was … I bought it … ago. It cost …**",
      answers: [["The last thing I bought was a pair of shoes. I bought them two days ago. They cost five hundred thousand dong.", "Món gần nhất tôi mua là một đôi giày. Tôi mua cách đây hai ngày. Đôi giày giá năm trăm nghìn đồng."]] }
  ],
  exercises: [
    { title: "Phần 1: was hay were? Điền vào chỗ trống", items: [
      { q: "I ___ very tired yesterday.", a: ["was"], hint: "đã (cảm thấy)" },
      { q: "My parents ___ in Hue last week.", a: ["were"], hint: "đã ở" },
      { q: "___ you at home last night?", a: ["were"], hint: "câu hỏi" },
      { q: "The film ___ boring, so I left early.", a: ["was"], hint: "đã là" },
      { q: "We ___ late. We arrived at eight, before the class started.", a: ["weren't", "were not"], hint: "dạng phủ định" }
    ] },
    { title: "Phần 2: Viết dạng quá khứ đơn của động từ trong ngoặc", items: [
      { q: "Yesterday I ___ (study) English for two hours.", a: ["studied"] },
      { q: "The bus ___ (stop) near the market.", a: ["stopped"] },
      { q: "We ___ (go) to Ha Long Bay two years ago.", a: ["went"] },
      { q: "She ___ (buy) a new phone last month.", a: ["bought"] },
      { q: "I ___ (not / watch) the football match last night.", a: ["didn't watch", "did not watch"] },
      { q: "___ you ___ (enjoy) the party on Saturday?", a: ["did enjoy"], hint: "gõ hai từ, cách nhau bởi dấu cách" },
      { q: "Where ___ you ___ (have) lunch yesterday?", a: ["did have"], hint: "gõ hai từ, cách nhau bởi dấu cách" }
    ] },
    { title: "Phần 3: Chọn câu đúng", items: [
      { q: "Chọn câu đúng:", options: ["I didn’t went to school yesterday.", "I didn’t go to school yesterday.", "I not went to school yesterday."], a: 1, why: "Sau **didn’t** dùng động từ nguyên mẫu **go**." },
      { q: "“Tối qua tôi xem phim.”", options: ["I watched a film yesterday night.", "I watched a film last night.", "I watched a film the last night."], a: 1, why: "“Tối qua” là **last night**." },
      { q: "“Tôi chuyển đến Sài Gòn cách đây ba năm.”", options: ["I moved to Saigon ago three years.", "I moved to Saigon three years ago.", "I moved to Saigon before three years."], a: 1, why: "**ago** đứng sau khoảng thời gian: three years ago." },
      { q: "Đuôi -ed trong “wanted” đọc là:", options: ["/t/", "/d/", "/ɪd/"], a: 2, why: "want tận cùng bằng âm /t/ nên đuôi -ed đọc là **/ɪd/**." },
      { q: "Đuôi -ed trong “watched” đọc là:", options: ["/t/", "/d/", "/ɪd/"], a: 0, why: "watch tận cùng bằng âm vô thanh /tʃ/ nên đuôi -ed đọc là **/t/**." },
      { q: "Chọn câu hỏi đúng:", options: ["Did you tired after the trip?", "Were you tired after the trip?", "Was you tired after the trip?"], a: 1, why: "Trước tính từ (tired) dùng **were** với you, không dùng did." }
    ] }
  ],
  vocab: [["was / were", "đã là, đã ở (quá khứ của am, is, are)"], ["did / didn’t", "trợ động từ quá khứ cho câu hỏi và câu phủ định"], ["work → worked", "thêm -ed (động từ có quy tắc)"], ["study → studied", "phụ âm + y → ied"], ["stop → stopped", "gấp đôi phụ âm rồi thêm -ed"], ["go → went", "đi"], ["eat → ate", "ăn"], ["buy → bought", "mua"], ["see → saw", "nhìn thấy, xem"], ["have → had", "có, ăn, uống"], ["yesterday", "hôm qua"], ["last night / last week", "tối qua / tuần trước"], ["two days ago", "hai ngày trước"], ["in 2020", "vào năm 2020"]],
  tips: [
    "Tối nào cũng kể to 3 câu về ngày hôm nay bằng quá khứ đơn: “Today I **got up** at six. I **went** to work. I **had** rice for lunch.”",
    "Học động từ bất quy tắc theo nhóm (bought, brought, thought, taught…), mỗi ngày một nhóm, đọc to theo cặp “buy, bought”.",
    "Khi nghe ai nói “yesterday, last, ago”, tự kiểm tra động từ của mình đã đổi sang quá khứ chưa.",
    "Luyện đọc đuôi -ed bằng ba từ mẫu: work**ed** /t/, play**ed** /d/, want**ed** /ɪd/. Ghi âm lại để nghe xem mình có nuốt mất âm cuối không.",
    "Mỗi sáng thứ Hai, tự hỏi và tự trả lời: “How **was** your weekend? What **did** you **do**?” như đang nói với đồng nghiệp."
  ]
};