/* Cheat sheet: Family (Nói về gia đình). Hiển thị bởi cheatsheet.js. */
window.A1_CHEAT = {
  goal: [
    "Gọi đúng tên các thành viên trong gia đình và phân biệt anh, chị, em bằng **older / younger**.",
    "Nói gia đình có mấy người và gồm những ai bằng **There are…** và **I have…**",
    "Tả tuổi, nghề nghiệp, ngoại hình và tính cách của người thân, nhớ thêm **-s** khi nói về he hoặc she.",
    "Hỏi và trả lời về gia đình người khác: How many…?, What does your father do?, Do you have any…?",
    "Kể những việc cả nhà hay làm cùng nhau bằng trạng từ tần suất và giới từ thời gian, rồi ghép thành bài nói 40 giây."
  ],
  phrases: [
    { h: "Giới thiệu người trong ảnh", rows: [
      ["This is my mother. Her name is Hoa.", "Đây là mẹ tôi. Tên mẹ tôi là Hoa."],
      ["These are my grandparents.", "Đây là ông bà tôi.", "Dùng **These are** vì có nhiều người."],
      ["This is my older sister, Mai.", "Đây là chị gái tôi, Mai.", "Tiếng Anh không có từ riêng cho anh, chị, em; thêm older hoặc younger để nói rõ."],
      ["My father’s name is Nam.", "Tên bố tôi là Nam.", "Dấu ’s nghĩa là “của”: my father’s name = tên của bố tôi."]
    ]},
    { h: "Gia đình có mấy người", rows: [
      ["There are four people in my family.", "Gia đình tôi có bốn người."],
      ["I have one older brother and one younger sister.", "Tôi có một anh trai và một em gái."],
      ["I do not have any brothers or sisters. I am an only child.", "Tôi không có anh chị em. Tôi là con một.", "Khi nói thường rút gọn: I don’t have any… I’m an only child."],
      ["I live with my parents.", "Tôi sống cùng bố mẹ."],
      ["My grandparents live in the countryside.", "Ông bà tôi sống ở quê."]
    ]},
    { h: "Tả người thân", rows: [
      ["My father is fifty years old. He is a driver.", "Bố tôi năm mươi tuổi. Bố tôi là tài xế."],
      ["My sister works in a hospital.", "Chị gái tôi làm việc ở bệnh viện.", "Chủ ngữ là một người (my sister) nên works có **-s**."],
      ["My sister has long black hair.", "Chị tôi có mái tóc đen dài."],
      ["My mother is kind and hard-working.", "Mẹ tôi tốt bụng và chăm chỉ."],
      ["My father is a little quiet, but he is very caring.", "Bố tôi hơi ít nói nhưng rất quan tâm mọi người."]
    ]},
    { h: "Hỏi về gia đình người khác", rows: [
      ["How many people are there in your family?", "Gia đình bạn có mấy người?"],
      ["Do you have any brothers or sisters?", "Bạn có anh chị em không?"],
      ["Who do you live with?", "Bạn sống với ai?"],
      ["What does your father do?", "Bố bạn làm nghề gì?"],
      ["How old is your sister?", "Chị gái bạn bao nhiêu tuổi?"]
    ]},
    { h: "Sinh hoạt cùng gia đình", rows: [
      ["We have dinner together every evening.", "Cả nhà ăn tối cùng nhau mỗi tối."],
      ["My mother cooks and my father washes the dishes.", "Mẹ nấu ăn còn bố rửa bát."],
      ["On Sundays, we visit my grandparents.", "Chủ nhật, cả nhà đi thăm ông bà."],
      ["We usually watch TV after dinner.", "Chúng tôi thường xem ti vi sau bữa tối."],
      ["We go on a trip once a year.", "Mỗi năm cả nhà đi chơi xa một lần."]
    ]}
  ],
  grammar: [
    { h: "Sở hữu cách ’s, số nhiều và This is / These are",
      f: ["tên hoặc người + ’s + danh từ", "danh từ số nhiều + ’ + danh từ", "This is + một người · These are + nhiều người"],
      p: [
        "Tiếng Việt nói “mẹ của Lan”, tiếng Anh đảo lại thành **Lan’s mother**: người sở hữu đứng trước, thêm **’s**. Nếu người sở hữu là danh từ số nhiều đã có -s thì chỉ thêm dấu **’**: my parents’ house.",
        "Hầu hết danh từ thêm -s để thành số nhiều (sister → sisters), nhưng một số từ bất quy tắc phải học thuộc: child → children, man → men, woman → women, person → people.",
        "Khi chỉ vào ảnh để giới thiệu, dùng **This is** cho một người và **These are** cho nhiều người. Parents luôn là hai người nên phải nói These are my parents."
      ],
      ex: [["Lan’s mother is a nurse.", "Mẹ của Lan là y tá."], ["These are my children.", "Đây là các con tôi."]]
    },
    { h: "have / has và There is / There are",
      f: ["I, you, we, they + have", "he, she, it + has", "do not / does not have + any + danh từ số nhiều", "There is + a / one + danh từ · There are + số + danh từ số nhiều"],
      p: [
        "Dùng **has** khi chủ ngữ là he, she, it (một người); các chủ ngữ còn lại dùng **have**. Trong câu phủ định đã có does not thì động từ quay về **have**: She does not have a sister.",
        "Câu phủ định nói “không có ai” dùng **do not have any** + danh từ số nhiều: I do not have any brothers. Không nói “I have not brother”.",
        "Để nói gia đình có bao nhiêu người, người bản xứ dùng **There are + số + people in my family** thay vì dịch từng chữ “My family has four person”. Câu hỏi tương ứng là How many people are there in your family?"
      ],
      ex: [["She has two brothers.", "Cô ấy có hai anh trai."], ["There are five people in my family.", "Gia đình tôi có năm người."]]
    },
    { h: "be + tính từ và động từ thêm -s ở ngôi thứ ba",
      f: ["chủ ngữ + am / is / are + tính từ", "tính từ + danh từ (long hair)", "he, she + động từ thêm -s hoặc -es"],
      p: [
        "Tính từ tả tính cách, ngoại hình đứng **sau be** (My parents are kind) hoặc **trước danh từ** (She has long hair). Tính từ không bao giờ thêm -s, kể cả khi nói về nhiều người.",
        "Khi kể về một người thân bằng thì hiện tại đơn, động từ phải thêm **-s**: He works, She cooks. Động từ tận cùng -o, -ch, -sh, -s, -x thêm **-es** (teaches, watches). Phụ âm + y thì đổi thành **-ies** (studies). Have đổi thành **has**."
      ],
      ex: [["My mother teaches English.", "Mẹ tôi dạy tiếng Anh."], ["My sister studies medicine.", "Chị tôi học ngành y."]]
    },
    { h: "So sánh hơn và look like / take after",
      f: ["tính từ ngắn + -er + than", "more + tính từ dài + than", "look like + người (giống ngoại hình)", "take after + người (giống tính cách)"],
      p: [
        "Dùng so sánh hơn để nói ai lớn hơn, cao hơn ai trong nhà. Tính từ ngắn thêm **-er** (taller, older, younger); tính từ dài dùng **more** (more outgoing). Muốn nói hơn bao nhiêu tuổi, đặt số năm trước: two years younger than my sister.",
        "**look like** nói về giống nhau ở **ngoại hình**, còn **take after** nói về giống nhau ở **tính cách** (thường là con giống bố mẹ)."
      ],
      ex: [["My brother is taller than me.", "Anh tôi cao hơn tôi."], ["I look like my mother, but I take after my father.", "Tôi giống mẹ về ngoại hình, nhưng tính cách lại giống bố."]]
    },
    { h: "Câu hỏi về gia đình và trả lời ngắn",
      f: ["Is / Are + chủ ngữ + …?", "Do / Does + chủ ngữ + động từ nguyên mẫu?", "Từ để hỏi + do / does + chủ ngữ + động từ nguyên mẫu?", "How many + danh từ số nhiều + do you have?"],
      p: [
        "Khi hỏi nghề của người thân, dùng **What does + người + do?** Sau does, động từ luôn ở nguyên mẫu: Does she have a sister? (không nói “Does she has”).",
        "**Who** hỏi người (Who do you live with?), **What** hỏi nghề hoặc việc, **How old** hỏi tuổi, **How many** hỏi số lượng.",
        "Trả lời ngắn bằng trợ động từ, không cần nhắc lại cả câu: Yes, I do. No, he does not (thường nói No, he doesn’t). Yes, she is."
      ],
      ex: [["What does your mother do?", "Mẹ bạn làm nghề gì?"], ["Does your sister live with you? Yes, she does.", "Chị bạn có sống cùng bạn không? Có."]]
    },
    { h: "Trạng từ tần suất, giới từ thời gian, with và together",
      f: ["chủ ngữ + always / usually / sometimes + động từ thường", "on + thứ hoặc ngày · at + giờ · in + buổi, tháng, năm", "with + me / him / her / us / them", "once / twice / three times + a week / a month / a year"],
      p: [
        "Trạng từ tần suất đứng **trước động từ thường** nhưng **sau be**: We always eat together, nhưng My mother is never late.",
        "Giới từ thời gian: **on** Sundays, **at** seven o’clock, **in** the evening. Lưu ý nói in the evening, không nói “at the evening”.",
        "**with** nghĩa là “cùng với ai”, và đại từ phía sau phải ở dạng tân ngữ (with him, with us). **together** nghĩa là “cùng nhau”, đứng cuối câu."
      ],
      ex: [["We visit my grandparents twice a month.", "Chúng tôi thăm ông bà mỗi tháng hai lần."], ["She lives with us.", "Bà ấy sống cùng chúng tôi."]]
    }
  ],
  mistakes: [
    ["My family has four person.", "There are four people in my family.", "Dùng **There are + số + people**; person số nhiều là **people**."],
    ["I have two sister.", "I have two sisters.", "Từ hai trở lên thì danh từ phải ở **số nhiều**."],
    ["I have not brother.", "I do not have any brothers.", "Phủ định của have dùng **do not have any** + danh từ số nhiều."],
    ["She have two brothers.", "She has two brothers.", "Chủ ngữ she đi với **has**."],
    ["This is my parent.", "These are my parents.", "Bố mẹ là hai người nên dùng **These are** và **parents**."],
    ["Your father does what? / Does he works?", "What does your father do? / Does he work?", "Từ để hỏi đứng đầu câu; sau **does** động từ ở **nguyên mẫu**."],
    ["I play football with he. / We eat at the evening.", "I play football with him. / We eat in the evening.", "Sau **with** dùng tân ngữ (him); buổi trong ngày đi với **in**."]
  ],
  vocab: [
    ["grandfather", "ông"], ["grandmother", "bà"], ["parents", "bố mẹ"], ["father / mother", "bố / mẹ"],
    ["uncle", "chú, bác, cậu"], ["aunt", "cô, dì, mợ, thím"], ["brother", "anh trai hoặc em trai"], ["sister", "chị gái hoặc em gái"],
    ["cousin", "anh chị em họ"], ["husband / wife", "chồng / vợ"], ["son / daughter", "con trai / con gái"], ["children", "các con (số nhiều của child)"],
    ["niece / nephew", "cháu gái / cháu trai"], ["only child", "con một"], ["older / younger", "lớn tuổi hơn / nhỏ tuổi hơn"], ["single / married", "độc thân / đã kết hôn"],
    ["retired", "đã nghỉ hưu"], ["kind", "tốt bụng"], ["hard-working", "chăm chỉ"], ["caring", "biết quan tâm"],
    ["cheerful", "vui vẻ"], ["helpful", "hay giúp đỡ"], ["do housework", "làm việc nhà"], ["countryside", "nông thôn, quê"]
  ],
  tips: [
    "Dùng ảnh gia đình thật khi luyện nói: chỉ vào từng người và nói **This is my…** hoặc **These are my…**",
    "Mỗi khi nói về một người thân, tự kiểm tra hai thứ: **has** thay cho have và động từ có **-s** (She works, He teaches).",
    "Học thuộc trình tự bài nói 40 giây: **Số người → Thành viên → Mô tả → Sinh hoạt → Kết** (I love my family very much).",
    "Khi người khác kể về gia đình, phản hồi bằng **Oh, really?** hoặc **What a lovely family!** rồi hỏi thêm một câu ngắn như Do you see them often?",
    "Viết bốn câu về sinh hoạt gia đình, mỗi câu có một trạng từ tần suất (always, usually, sometimes) và một giới từ thời gian (on, at, in)."
  ]
};
