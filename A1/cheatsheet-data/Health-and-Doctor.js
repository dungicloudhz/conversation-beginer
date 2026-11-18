/* Cheat sheet: Health & Doctor (Sức khỏe và đi khám bác sĩ). Hiển thị bởi cheatsheet.js. */
window.A1_CHEAT = {
  goal: [
    "Gọi tên các bộ phận cơ thể để chỉ đúng chỗ đau, nhớ số nhiều bất quy tắc như teeth và feet.",
    "Nói các bệnh thường gặp bằng mẫu **I have a headache**, dùng đúng a, the hoặc không mạo từ.",
    "Tả triệu chứng: đau ở đâu (My knee hurts), cảm thấy thế nào (I feel dizzy) và bị bao lâu rồi (for, since).",
    "Đặt lịch khám, trả lời các câu hỏi quen thuộc của bác sĩ và hiểu lời khuyên với **should**.",
    "Mua thuốc ở hiệu thuốc, hỏi cách dùng (once a day, twice a day) và hỏi về tác dụng phụ."
  ],
  phrases: [
    { h: "Nói mình bị bệnh gì", rows: [
      ["I have a headache.", "Tôi bị đau đầu."],
      ["I have a sore throat and a fever.", "Tôi bị đau họng và sốt."],
      ["I think I have the flu.", "Tôi nghĩ là tôi bị cúm.", "Bệnh cúm luôn đi với **the**: the flu."],
      ["I have a runny nose and a bad cough.", "Tôi bị sổ mũi và ho nặng."],
      ["I am feeling a bit under the weather.", "Tôi thấy hơi khó ở, không được khỏe.", "Thành ngữ nhẹ nhàng, hay dùng khi báo với đồng nghiệp. Khi nói thường rút gọn: I’m (I’m = I am)."]
    ]},
    { h: "Tả triệu chứng", rows: [
      ["My knee hurts.", "Đầu gối tôi đau."],
      ["It hurts when I swallow.", "Nuốt thì đau."],
      ["I feel dizzy.", "Tôi thấy chóng mặt."],
      ["I cannot sleep. I keep coughing.", "Tôi không ngủ được. Tôi ho suốt.", "Dạng rút gọn: can’t (can’t = cannot)."],
      ["I threw up twice last night.", "Tối qua tôi nôn hai lần."]
    ]},
    { h: "Nói bị bao lâu và nặng thế nào", rows: [
      ["I have had a fever for two days.", "Tôi bị sốt hai ngày rồi.", "Khi nói thường rút gọn: I’ve had (I’ve = I have)."],
      ["I have had it since yesterday.", "Tôi bị từ hôm qua."],
      ["It started this morning.", "Bắt đầu từ sáng nay."],
      ["It is getting worse.", "Đang nặng hơn.", "Dạng rút gọn: It’s getting worse (It’s = It is). Ngược lại là It is getting better."],
      ["The pain is about seven out of ten.", "Mức đau khoảng 7 trên 10."]
    ]},
    { h: "Ở phòng khám bác sĩ", rows: [
      ["I would like to make an appointment with a doctor.", "Tôi muốn đặt lịch khám bác sĩ.", "Khi nói thường rút gọn: I’d like (I’d = I would)."],
      ["What seems to be the problem?", "Anh hoặc chị bị sao vậy?", "Câu bác sĩ hay hỏi đầu tiên."],
      ["How long have you had it? — Since Tuesday.", "Bị bao lâu rồi? — Từ thứ Ba."],
      ["Do you have any allergies? — Yes, I am allergic to penicillin.", "Có dị ứng gì không? — Có, tôi dị ứng với penicillin."],
      ["You should get some rest and drink lots of water.", "Anh hoặc chị nên nghỉ ngơi và uống nhiều nước."]
    ]},
    { h: "Ở hiệu thuốc", rows: [
      ["Do you have anything for a headache?", "Có thuốc gì trị đau đầu không?"],
      ["Can I buy this without a prescription?", "Thuốc này mua không cần đơn được không?"],
      ["How often should I take it?", "Uống bao lâu một lần?"],
      ["Should I take it before or after meals?", "Uống trước hay sau bữa ăn?"],
      ["Are there any side effects?", "Có tác dụng phụ gì không?"]
    ]},
    { h: "Hỏi thăm, xin nghỉ ốm và khẩn cấp", rows: [
      ["Are you okay? You do not look well.", "Bạn ổn không? Trông bạn không khỏe.", "Dạng rút gọn: don’t (don’t = do not)."],
      ["I am sorry, but I am sick today. I have a high fever.", "Em xin lỗi, hôm nay em bị ốm. Em sốt cao.", "Dùng để nhắn xin nghỉ ốm với sếp."],
      ["Get well soon!", "Mau khỏe nhé!"],
      ["Call an ambulance! It is an emergency.", "Gọi cấp cứu! Đây là trường hợp khẩn cấp.", "Số cấp cứu ở Việt Nam là 115, ở Mỹ là 911, ở Anh là 999."]
    ]}
  ],
  grammar: [
    { h: "Số nhiều bất quy tắc và “my” trước bộ phận cơ thể",
      f: ["tooth → teeth, foot → feet", "my, your, his, her + bộ phận cơ thể"],
      p: [
        "Một số bộ phận cơ thể có **số nhiều bất quy tắc**: tooth thành teeth, foot thành feet. Không có dạng “tooths” hay “foots”. Bạn cần nhớ vì khi đi khám rất hay nói đến răng và chân.",
        "Tiếng Việt nói “tôi đau chân”, không cần chữ “của tôi”. Nhưng tiếng Anh luôn đặt **tính từ sở hữu** (my, your, his, her) trước bộ phận cơ thể, không dùng the. Vì vậy nói I hurt my knee, không nói I hurt the knee.",
        "Chú ý cách đọc: chữ k trong **knee** /niː/ là âm câm, còn chữ ch trong **stomach** /ˈstʌmək/ đọc là /k/."
      ],
      ex: [["I hurt my leg.", "Tôi bị đau chân."], ["My feet are cold.", "Chân tôi bị lạnh."]]
    },
    { h: "have + a, the hoặc không mạo từ để nói bệnh",
      f: ["chủ ngữ + have hoặc has + a + bệnh đếm được", "have + the flu", "have + bệnh không đếm được (không có mạo từ)"],
      p: [
        "Tiếng Việt nói “tôi bị đau đầu”, nên người học hay dịch thành “I am headache”. Thực ra tiếng Anh coi bệnh là thứ mình **có**, vì vậy luôn dùng động từ **have**: I have a headache.",
        "Phần lớn bệnh thường gặp là danh từ đếm được nên cần **a**: a headache, a cold, a fever, a cough, a sore throat. Riêng bệnh cúm dùng **the**: the flu. Một số bệnh không đếm được thì không có mạo từ: diarrhea, food poisoning, asthma.",
        "Với chủ ngữ He, She hoặc một người (my dad), nhớ đổi have thành **has**: She has a cold. Đuôi **-ache** (đau âm ỉ) chỉ đi với vài bộ phận: head, stomach, tooth, back, ear."
      ],
      ex: [["I think I have the flu.", "Tôi nghĩ là tôi bị cúm."], ["My dad has a backache.", "Bố tôi bị đau lưng."]]
    },
    { h: "hurt, feel và have had … for hoặc since",
      f: ["bộ phận cơ thể số ít + hurts", "bộ phận cơ thể số nhiều + hurt", "feel + tính từ", "chủ ngữ + have had + bệnh + for + khoảng thời gian", "chủ ngữ + have had + bệnh + since + mốc thời gian"],
      p: [
        "Muốn nói chỗ nào đau, dùng **hurt** như một động từ bình thường: My head hurts (số ít nên thêm -s), My feet hurt (số nhiều nên không thêm). Không nói “My head is hurt”. Dùng **feel + tính từ** để nói cảm giác của cả người: I feel dizzy, không nói “I am feel dizzy”.",
        "Khi bác sĩ hỏi bị bao lâu rồi, bệnh bắt đầu trong quá khứ và **vẫn còn đến bây giờ**, nên dùng thì hiện tại hoàn thành: **have had** (have + quá khứ phân từ, tức cột thứ ba của động từ have). Không dùng thì hiện tại đơn “I have a cough since…”.",
        "Dùng **for** trước một khoảng thời gian (for two days, for a week). Dùng **since** trước một mốc thời gian (since Monday, since yesterday)."
      ],
      ex: [["I have had a cough for two days.", "Tôi bị ho hai ngày rồi."], ["I have had a fever since Monday.", "Tôi bị sốt từ thứ Hai."]]
    },
    { h: "should và should not để khuyên",
      f: ["chủ ngữ + should + động từ nguyên mẫu", "chủ ngữ + should not + động từ nguyên mẫu", "Should I + động từ nguyên mẫu?"],
      p: [
        "Bác sĩ, dược sĩ và bạn bè hay dùng **should** để khuyên nên làm gì, và **should not** (dạng rút gọn shouldn’t) để khuyên không nên làm gì. Khi muốn xin lời khuyên, bạn đảo should lên đầu: Should I stay home?",
        "Sau should luôn là **động từ nguyên mẫu**, không thêm to, không thêm -ing, không thêm -s. Vì vậy nói You should rest, không nói “You should to rest” hay “You should drinking water”."
      ],
      ex: [["You should see a doctor.", "Bạn nên đi khám bác sĩ."], ["You should not eat spicy food.", "Bạn không nên ăn đồ cay."]]
    },
    { h: "Nói tần suất uống thuốc: once, twice, three times a day",
      f: ["once, twice, three times + a day", "số viên + every + số giờ + hours", "for + số ngày"],
      p: [
        "Để nói bao nhiêu lần trong một ngày, dùng **once** (một lần), **twice** (hai lần), từ ba lần trở lên thì dùng **số + times**, rồi thêm **a day**. Không nói “two times one day”.",
        "Muốn nói cách nhau bao lâu, dùng **every**: every six hours, không thêm “in” phía trước. Muốn nói uống trong bao lâu, dùng **for**: for five days.",
        "Ba câu hỏi nên nhớ khi mua thuốc: How often should I take it? How many tablets should I take? How long should I take it for? Liều lượng trong bài chỉ là ví dụ để luyện tiếng Anh; khi dùng thuốc thật hãy làm theo hướng dẫn của bác sĩ hoặc dược sĩ."
      ],
      ex: [["Take it twice a day.", "Uống ngày hai lần."], ["Take one tablet every six hours for five days.", "Uống một viên mỗi sáu tiếng, trong năm ngày."]]
    }
  ],
  mistakes: [
    ["I am headache.", "I have a headache.", "Tiếng Anh coi bệnh là thứ mình **có**, nên dùng **have**, không dùng “am”, và cần mạo từ **a**."],
    ["I have flu. He have a cold.", "I have the flu. He has a cold.", "Bệnh cúm luôn đi với **the**; chủ ngữ He hoặc She thì đổi have thành **has**."],
    ["I hurt the leg. My two foots are cold.", "I hurt my leg. My feet are cold.", "Trước bộ phận cơ thể dùng **my**, không dùng the; số nhiều của foot là **feet**."],
    ["My head is hurt.", "My head hurts.", "Hurt ở đây là động từ chính, chủ ngữ số ít nên thêm **-s**; không dùng “is”."],
    ["I have a cough since two days.", "I have had a cough for two days.", "Bệnh kéo dài đến bây giờ dùng **have had**; trước khoảng thời gian dùng **for**, trước mốc thời gian mới dùng since."],
    ["You should to rest. You should drinking water.", "You should rest. You should drink water.", "Sau **should** luôn là động từ nguyên mẫu, không có to và không thêm -ing."],
    ["Take two times one day.", "Take it twice a day.", "Hai lần là **twice**, và “một ngày” trong câu tần suất là **a day**."]
  ],
  vocab: [
    ["head", "đầu"], ["throat", "họng"], ["tooth / teeth", "răng (một cái / nhiều cái)"], ["stomach", "bụng, dạ dày"],
    ["back", "lưng"], ["knee", "đầu gối"], ["ankle", "mắt cá chân"], ["foot / feet", "bàn chân (một bàn / hai bàn)"],
    ["a headache", "đau đầu"], ["a sore throat", "đau họng"], ["a fever", "sốt"], ["a cough", "ho"],
    ["a cold", "cảm lạnh"], ["the flu", "cúm"], ["a runny nose", "sổ mũi"], ["dizzy", "chóng mặt"],
    ["hurt", "đau, làm đau"], ["appointment", "lịch hẹn khám"], ["allergy", "dị ứng"], ["prescription", "đơn thuốc"],
    ["pharmacy", "hiệu thuốc"], ["painkiller", "thuốc giảm đau"], ["cough syrup", "siro ho"], ["side effects", "tác dụng phụ"]
  ],
  tips: [
    "Chỉ vào từng bộ phận trên người mình và nói to tên tiếng Anh, nhất là những từ dễ sai như **teeth**, **feet**, **knee** (k câm) và **stomach**.",
    "Trước khi đi khám, chuẩn bị sẵn ba ý bác sĩ nào cũng hỏi: **đau ở đâu**, **từ khi nào** và **nặng thế nào** (thang điểm từ 1 đến 10).",
    "Luyện năm câu theo mẫu **I have had … for …** và **I have had … since …** cho đến khi nói không cần nghĩ; dạng rút gọn khi nói là I’ve had (I’ve = I have).",
    "Ở hiệu thuốc, luôn hỏi đủ ba câu: How often should I take it? Should I take it before or after meals? Are there any side effects? Sau đó làm theo đúng hướng dẫn trên hộp và lời dặn của dược sĩ.",
    "Học thuộc câu khẩn cấp **Call an ambulance!** và nhớ số cấp cứu: 115 ở Việt Nam, 911 ở Mỹ, 999 ở Anh."
  ]
};
