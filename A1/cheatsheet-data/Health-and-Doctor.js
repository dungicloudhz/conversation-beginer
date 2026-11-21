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
      items: [
        { f: "tooth → teeth, foot → feet",
          mean: "**số nhiều bất quy tắc** của hai bộ phận cơ thể: một cái răng là tooth, nhiều cái răng là teeth; một bàn chân là foot, hai bàn chân là feet.",
          parts: [
            ["tooth → teeth", "**răng**. Số ít tooth /tuːθ/, số nhiều đổi “oo” thành “ee”: teeth /tiːθ/. Không thêm -s."],
            ["foot → feet", "**bàn chân**. Số ít foot /fʊt/, số nhiều feet /fiːt/. Cũng đổi “oo” thành “ee”, không thêm -s."]
          ],
          use: "nói về răng hoặc chân khi đi khám, đi nha sĩ, kể bị đau. Dùng số ít khi chỉ một cái (a tooth, my left foot), số nhiều khi nói chung hoặc từ hai trở lên (my teeth, my feet). Động từ đi sau cũng đổi theo: my tooth **hurts**, my feet **hurt**.",
          note: "Người Việt hay nói “tooths”, “foots” theo quy tắc thêm -s. Mẹo nhớ: cả hai từ đều **đổi oo thành ee**. Chú ý thêm: một cái răng đau thường là **a toothache**, không nói “a teethache”.",
          ex: [
            ["I brush my teeth twice a day.", "Tôi đánh răng hai lần mỗi ngày."],
            ["One of my teeth hurts. I think it is this tooth.", "Một cái răng của tôi bị đau. Tôi nghĩ là cái răng này."],
            ["My feet are tired after the long walk.", "Chân tôi mỏi sau chuyến đi bộ dài."],
            ["Does your left foot hurt?", "Bàn chân trái của bạn có đau không?"]
          ] },
        { f: "my, your, his, her + bộ phận cơ thể",
          mean: "**bộ phận cơ thể của ai đó**. Tiếng Anh luôn nói rõ “của tôi, của bạn, của anh ấy, của cô ấy” trước bộ phận cơ thể.",
          parts: [
            ["my", "**của tôi**: my head, my back."],
            ["your", "**của bạn** (một người hoặc nhiều người): your arm, your eyes."],
            ["his", "**của anh ấy, ông ấy, cậu bé**: his leg, his knee."],
            ["her", "**của cô ấy, bà ấy, cô bé**: her stomach, her ear."]
          ],
          use: "mỗi khi nói chỗ nào đau, bị thương hoặc cần khám. Đặt my, your, his, her **ngay trước** tên bộ phận cơ thể, sau động từ hoặc ở đầu câu: I hurt **my** knee, **His** back hurts.",
          note: "Tiếng Việt nói “tôi đau chân”, không cần “của tôi”, nên người học hay bỏ hẳn hoặc dùng **the**. Câu “I hurt the leg” nghe như cái chân của ai khác. Cũng đừng nhầm **his** (nam) với **her** (nữ).",
          ex: [
            ["I cut my finger in the kitchen.", "Tôi bị đứt tay trong bếp."],
            ["Open your mouth, please.", "Bạn há miệng ra nhé."],
            ["He hurt his ankle when he played football.", "Anh ấy bị đau mắt cá chân khi đá bóng."],
            ["Her eyes are red. Does she have an allergy?", "Mắt cô ấy đỏ. Cô ấy có bị dị ứng không?"]
          ] }
      ],
      p: [
        "Một số bộ phận cơ thể có **số nhiều bất quy tắc**: tooth thành teeth, foot thành feet. Không có dạng “tooths” hay “foots”. Bạn cần nhớ vì khi đi khám rất hay nói đến răng và chân.",
        "Tiếng Việt nói “tôi đau chân”, không cần chữ “của tôi”. Nhưng tiếng Anh luôn đặt **tính từ sở hữu** (my, your, his, her) trước bộ phận cơ thể, không dùng the. Vì vậy nói I hurt my knee, không nói I hurt the knee.",
        "Chú ý cách đọc: chữ k trong **knee** /niː/ là âm câm, còn chữ ch trong **stomach** /ˈstʌmək/ đọc là /k/."
      ],
      ex: [["I hurt my leg.", "Tôi bị đau chân."], ["My feet are cold.", "Chân tôi bị lạnh."]]
    },
    { h: "have + a, the hoặc không mạo từ để nói bệnh",
      f: ["chủ ngữ + have hoặc has + a + bệnh đếm được", "have + the flu", "have + bệnh không đếm được (không có mạo từ)"],
      items: [
        { f: "chủ ngữ + have hoặc has + a + bệnh đếm được",
          mean: "**bị một bệnh thông thường**, như đau đầu, cảm lạnh, sốt, ho. Tiếng Anh nói mình “có” một cái bệnh.",
          parts: [
            ["have", "dùng với I, you, we, they: I **have** a cold."],
            ["has", "dùng với he, she, it hoặc một người: She **has** a fever, My son **has** a cough."],
            ["a", "mạo từ bắt buộc vì các bệnh này là danh từ đếm được: **a** headache, **a** sore throat, **a** runny nose."]
          ],
          use: "kể triệu chứng với bác sĩ, dược sĩ hoặc xin nghỉ học, nghỉ làm. Sau have hoặc has là **a + tên bệnh**. Câu phủ định dùng do not have hoặc does not have; câu hỏi dùng Do you have…? hoặc Does she have…?",
          note: "Đừng nói “I am headache” hay “I am fever”. Nhớ mẫu: **tôi bị = I have**. Và trong câu hỏi, câu phủ định có does thì quay về **have**: Does he have a fever? (không nói “Does he has”).",
          ex: [
            ["I have a sore throat and a runny nose.", "Tôi bị đau họng và sổ mũi."],
            ["My daughter has a fever.", "Con gái tôi bị sốt."],
            ["Do you have a cough?", "Bạn có bị ho không?"],
            ["He does not have a headache, but he feels tired.", "Anh ấy không bị đau đầu nhưng thấy mệt."]
          ] },
        { f: "have + the flu",
          mean: "**bị cúm**. Bệnh cúm là trường hợp đặc biệt: luôn đi với **the**, không dùng a.",
          parts: [
            ["have / has", "chia theo chủ ngữ như các bệnh khác: I have, she has."],
            ["the flu", "**bệnh cúm**. Luôn có the đứng trước, giống như một tên gọi cố định."]
          ],
          use: "khi nói mình hoặc ai đó bị cúm, nghĩ là bị cúm, hoặc hỏi người khác có bị cúm không. Thường đi với I think…, maybe… vì người bệnh chưa chắc chắn.",
          note: "Không nói “I have flu” hay “I have a flu” ở trình độ này; hãy luôn nói **the flu**. Phân biệt: **a cold** là cảm lạnh nhẹ, **the flu** là cúm, nặng hơn, thường có sốt và đau người.",
          ex: [
            ["I think I have the flu.", "Tôi nghĩ là tôi bị cúm."],
            ["My grandmother has the flu, so she is in bed.", "Bà tôi bị cúm nên đang nằm nghỉ."],
            ["Do you have the flu or just a cold?", "Bạn bị cúm hay chỉ cảm lạnh thôi?"],
            ["Half of my class has the flu this week.", "Tuần này một nửa lớp tôi bị cúm."]
          ] },
        { f: "have + bệnh không đếm được (không có mạo từ)",
          mean: "**bị một bệnh không đếm được**, như tiêu chảy, ngộ độc thực phẩm, hen suyễn. Những bệnh này không đi với a hay the.",
          parts: [
            ["diarrhea", "**tiêu chảy**. Không nói “a diarrhea”."],
            ["food poisoning", "**ngộ độc thực phẩm**. Không nói “a food poisoning”."],
            ["asthma", "**hen suyễn**, một bệnh lâu dài. Không nói “an asthma”."]
          ],
          use: "kể các bệnh này với bác sĩ hoặc khai trong phiếu khám. Sau have hoặc has đặt **thẳng tên bệnh**, không có mạo từ.",
          note: "Mẹo nhớ: bệnh nào nghe như một “cơn” đếm được (một cơn đau đầu, một trận ho) thì có **a**; bệnh là một tình trạng chung (tiêu chảy, hen suyễn) thì **không có mạo từ**. Khi không chắc, hãy học thuộc cả cụm.",
          ex: [
            ["I have diarrhea, so I cannot go to work today.", "Tôi bị tiêu chảy nên hôm nay không đi làm được."],
            ["I think he has food poisoning.", "Tôi nghĩ anh ấy bị ngộ độc thực phẩm."],
            ["My son has asthma, so he always carries an inhaler.", "Con trai tôi bị hen suyễn nên luôn mang theo bình xịt."],
            ["Does she have asthma?", "Cô ấy có bị hen suyễn không?"]
          ] }
      ],
      p: [
        "Tiếng Việt nói “tôi bị đau đầu”, nên người học hay dịch thành “I am headache”. Thực ra tiếng Anh coi bệnh là thứ mình **có**, vì vậy luôn dùng động từ **have**: I have a headache.",
        "Phần lớn bệnh thường gặp là danh từ đếm được nên cần **a**: a headache, a cold, a fever, a cough, a sore throat. Riêng bệnh cúm dùng **the**: the flu. Một số bệnh không đếm được thì không có mạo từ: diarrhea, food poisoning, asthma.",
        "Với chủ ngữ He, She hoặc một người (my dad), nhớ đổi have thành **has**: She has a cold. Đuôi **-ache** (đau âm ỉ) chỉ đi với vài bộ phận: head, stomach, tooth, back, ear."
      ],
      ex: [["I think I have the flu.", "Tôi nghĩ là tôi bị cúm."], ["My dad has a backache.", "Bố tôi bị đau lưng."]]
    },
    { h: "hurt, feel và have had … for hoặc since",
      f: ["bộ phận cơ thể số ít + hurts", "bộ phận cơ thể số nhiều + hurt", "feel + tính từ", "chủ ngữ + have had + bệnh + for + khoảng thời gian", "chủ ngữ + have had + bệnh + since + mốc thời gian"],
      items: [
        { f: "bộ phận cơ thể số ít + hurts",
          mean: "**(một bộ phận) bị đau**. Hurt ở đây là động từ chính, nghĩa là “đau”; chủ ngữ số ít nên thêm **-s**.",
          parts: [
            ["bộ phận cơ thể số ít", "một bộ phận: my head, my back, my stomach, my left knee."],
            ["hurts", "**đau**. Thêm -s vì chủ ngữ số ít, giống he works, she lives."]
          ],
          use: "nói chính xác chỗ nào đau khi bác sĩ hỏi Where does it hurt? Chủ ngữ là bộ phận cơ thể (có my, his, her phía trước), động từ hurts đứng ngay sau. Câu phủ định: My back **does not hurt**; câu hỏi: **Does** your head **hurt**?",
          note: "Không nói “My head is hurt” hay “My head is hurting a lot” cho người mới học; cách đơn giản và tự nhiên nhất là **My head hurts**. Trong câu có does thì bỏ -s: Does it hurt? (không nói “Does it hurts?”).",
          ex: [
            ["My stomach hurts after lunch.", "Tôi bị đau bụng sau bữa trưa."],
            ["His back hurts when he sits for a long time.", "Anh ấy đau lưng khi ngồi lâu."],
            ["Does your throat hurt?", "Họng bạn có đau không?"],
            ["My knee does not hurt now.", "Bây giờ đầu gối tôi không đau nữa."]
          ] },
        { f: "bộ phận cơ thể số nhiều + hurt",
          mean: "**(nhiều bộ phận hoặc một đôi) bị đau**. Chủ ngữ số nhiều nên động từ hurt **không thêm -s**.",
          parts: [
            ["bộ phận cơ thể số nhiều", "từ hai trở lên hoặc cả đôi: my eyes, my feet, my teeth, my legs, my ears."],
            ["hurt", "**đau**, giữ nguyên mẫu vì chủ ngữ số nhiều, giống they work."]
          ],
          use: "khi đau cả hai mắt, hai chân, nhiều cái răng… Câu phủ định dùng **do not hurt**, câu hỏi dùng **Do** your eyes **hurt**?",
          note: "Trước khi nói, hãy kiểm tra chủ ngữ là một hay nhiều: my foot **hurts** nhưng my feet **hurt**; my eye **hurts** nhưng my eyes **hurt**.",
          ex: [
            ["My eyes hurt because I use my phone too much.", "Mắt tôi đau vì tôi dùng điện thoại quá nhiều."],
            ["My legs hurt after the run.", "Chân tôi đau sau khi chạy bộ."],
            ["Do your ears hurt?", "Tai bạn có đau không?"],
            ["My teeth do not hurt, but my gums are red.", "Răng tôi không đau nhưng lợi bị đỏ."]
          ] },
        { f: "feel + tính từ",
          mean: "**cảm thấy (thế nào)**. Dùng để nói cảm giác của cả cơ thể, không chỉ một chỗ.",
          parts: [
            ["feel", "**cảm thấy**. Là động từ thường: I feel, she **feels**; phủ định I do not feel."],
            ["tính từ", "cảm giác: sick (ốm, buồn nôn), tired (mệt), dizzy (chóng mặt), weak (yếu), better (khỏe hơn), cold (lạnh)."]
          ],
          use: "trả lời câu hỏi How do you feel? hoặc How are you feeling? Sau feel đặt **ngay một tính từ**, không cần “am” hay “is”.",
          note: "Không nói “I am feel dizzy” vì đã có động từ feel thì không cần be. Phân biệt: **I feel sick** là thấy mệt, buồn nôn; **My stomach hurts** là đau một chỗ cụ thể.",
          ex: [
            ["I feel dizzy when I stand up.", "Tôi thấy chóng mặt khi đứng dậy."],
            ["She feels tired all the time.", "Cô ấy lúc nào cũng thấy mệt."],
            ["Do you feel better today?", "Hôm nay bạn thấy khỏe hơn chưa?"],
            ["I do not feel well, so I am going home.", "Tôi thấy không khỏe nên tôi về nhà."]
          ] },
        { f: "chủ ngữ + have had + bệnh + for + khoảng thời gian",
          mean: "**bị (bệnh) được bao lâu rồi** và vẫn còn bị đến bây giờ. For nói về **độ dài** của thời gian.",
          parts: [
            ["have had", "thì hiện tại hoàn thành của have: bắt đầu trong quá khứ, vẫn còn bây giờ. Với he, she dùng **has had**."],
            ["for", "**được, trong** + một khoảng thời gian: for two days, for a week, for three hours, for a long time."]
          ],
          use: "trả lời câu hỏi của bác sĩ How long have you had it? Đặt for + khoảng thời gian ở **cuối câu**. Khi nói thường rút gọn: I’ve had (I’ve = I have), she’s had (she’s = she has).",
          note: "Người Việt hay nói “I have a cough two days” hoặc “since two days”. Nhớ: có con số đếm khoảng thời gian (hai ngày, một tuần) thì dùng **for**.",
          ex: [
            ["I have had a headache for three hours.", "Tôi bị đau đầu ba tiếng rồi."],
            ["She has had a sore throat for a week.", "Cô ấy bị đau họng một tuần nay."],
            ["How long have you had this pain? For about two days.", "Bạn bị đau thế này bao lâu rồi? Khoảng hai ngày."],
            ["My son has had a runny nose for a long time.", "Con trai tôi bị sổ mũi lâu rồi."]
          ] },
        { f: "chủ ngữ + have had + bệnh + since + mốc thời gian",
          mean: "**bị (bệnh) từ (lúc nào)** đến bây giờ. Since nói về **điểm bắt đầu** của bệnh.",
          parts: [
            ["have had / has had", "giống mẫu trên: bệnh bắt đầu trong quá khứ và vẫn còn."],
            ["since", "**từ, kể từ** + một mốc thời gian: since Monday, since yesterday, since last week, since this morning, since 9 o’clock."]
          ],
          use: "khi bạn nhớ bệnh bắt đầu vào ngày nào, lúc nào. Since + mốc thời gian đặt ở cuối câu.",
          note: "Mẹo phân biệt: hỏi “bao lâu?” thì trả lời **for** (for two days); hỏi “từ khi nào?” thì trả lời **since** (since Monday). Không dùng “from Monday” trong mẫu này.",
          ex: [
            ["I have had a fever since yesterday.", "Tôi bị sốt từ hôm qua."],
            ["He has had a stomachache since this morning.", "Anh ấy bị đau bụng từ sáng nay."],
            ["We have had a cough since last week.", "Chúng tôi bị ho từ tuần trước."],
            ["Have you had this rash since Sunday?", "Bạn bị phát ban này từ Chủ nhật à?"]
          ] }
      ],
      p: [
        "Muốn nói chỗ nào đau, dùng **hurt** như một động từ bình thường: My head hurts (số ít nên thêm -s), My feet hurt (số nhiều nên không thêm). Không nói “My head is hurt”. Dùng **feel + tính từ** để nói cảm giác của cả người: I feel dizzy, không nói “I am feel dizzy”.",
        "Khi bác sĩ hỏi bị bao lâu rồi, bệnh bắt đầu trong quá khứ và **vẫn còn đến bây giờ**, nên dùng thì hiện tại hoàn thành: **have had** (have + quá khứ phân từ, tức cột thứ ba của động từ have). Không dùng thì hiện tại đơn “I have a cough since…”.",
        "Dùng **for** trước một khoảng thời gian (for two days, for a week). Dùng **since** trước một mốc thời gian (since Monday, since yesterday)."
      ],
      ex: [["I have had a cough for two days.", "Tôi bị ho hai ngày rồi."], ["I have had a fever since Monday.", "Tôi bị sốt từ thứ Hai."]]
    },
    { h: "should và should not để khuyên",
      f: ["chủ ngữ + should + động từ nguyên mẫu", "chủ ngữ + should not + động từ nguyên mẫu", "Should I + động từ nguyên mẫu?"],
      items: [
        { f: "chủ ngữ + should + động từ nguyên mẫu",
          mean: "**nên làm gì**. Dùng để đưa ra lời khuyên một cách nhẹ nhàng, không ép buộc.",
          parts: [
            ["should", "**nên**. Giống nhau với mọi chủ ngữ: I should, you should, he should (không thêm -s)."],
            ["động từ nguyên mẫu", "việc được khuyên làm: rest, drink, sleep, see, take."]
          ],
          use: "bác sĩ, dược sĩ, bạn bè khuyên người bệnh; hoặc bạn tự nói mình nên làm gì. Should đứng sau chủ ngữ, động từ nguyên mẫu đứng ngay sau should.",
          note: "Should là lời **khuyên**, nhẹ hơn **must** (bắt buộc). Không nói “should to rest”, “should resting” hay “he shoulds”.",
          ex: [
            ["You should drink a lot of water.", "Bạn nên uống nhiều nước."],
            ["You should stay in bed for a day or two.", "Bạn nên nằm nghỉ một hai ngày."],
            ["She should take this medicine after meals.", "Cô ấy nên uống thuốc này sau bữa ăn."],
            ["I think I should see a dentist.", "Tôi nghĩ tôi nên đi khám nha sĩ."]
          ] },
        { f: "chủ ngữ + should not + động từ nguyên mẫu",
          mean: "**không nên làm gì**. Lời khuyên tránh một việc có hại cho sức khỏe.",
          parts: [
            ["should not", "**không nên**. Khi nói thường rút gọn thành **shouldn’t** (shouldn’t = should not)."],
            ["động từ nguyên mẫu", "việc nên tránh: eat, drink, go out, lift, smoke."]
          ],
          use: "dặn người bệnh tránh đồ ăn, thức uống hay hoạt động nào đó. Not đứng ngay sau should, không cần do hay does.",
          note: "Không nói “don’t should” hay “should don’t”. Chỉ cần thêm **not** sau should.",
          ex: [
            ["You should not drink cold water.", "Bạn không nên uống nước lạnh."],
            ["He should not play football this week.", "Tuần này anh ấy không nên đá bóng."],
            ["You shouldn’t go to work with a fever.", "Bạn không nên đi làm khi đang sốt."],
            ["Children should not take this medicine.", "Trẻ em không nên uống thuốc này."]
          ] },
        { f: "Should I + động từ nguyên mẫu?",
          mean: "**Tôi có nên… không?** Dùng để xin lời khuyên.",
          parts: [
            ["Should", "đưa lên **đầu câu** để thành câu hỏi."],
            ["I", "chủ ngữ là người hỏi. Cũng có thể dùng we hoặc he: Should we…?, Should he…?"],
            ["động từ nguyên mẫu", "việc bạn đang phân vân: go, take, stop, come back."]
          ],
          use: "hỏi bác sĩ, dược sĩ khi chưa biết phải làm gì. Trả lời ngắn: **Yes, you should** hoặc **No, you should not**.",
          note: "Không nói “Do I should…?”. Có thể thêm từ để hỏi phía trước: **What should I** eat?, **When should I** come back?, **How often should I** take it?",
          ex: [
            ["Should I go to the hospital?", "Tôi có nên đi bệnh viện không?"],
            ["Should I take this before or after meals?", "Tôi nên uống thuốc này trước hay sau bữa ăn?"],
            ["Should I stop eating spicy food?", "Tôi có nên ngừng ăn đồ cay không?"],
            ["When should I come back? Next Monday.", "Khi nào tôi nên quay lại? Thứ Hai tuần sau."]
          ] }
      ],
      p: [
        "Bác sĩ, dược sĩ và bạn bè hay dùng **should** để khuyên nên làm gì, và **should not** (dạng rút gọn shouldn’t) để khuyên không nên làm gì. Khi muốn xin lời khuyên, bạn đảo should lên đầu: Should I stay home?",
        "Sau should luôn là **động từ nguyên mẫu**, không thêm to, không thêm -ing, không thêm -s. Vì vậy nói You should rest, không nói “You should to rest” hay “You should drinking water”."
      ],
      ex: [["You should see a doctor.", "Bạn nên đi khám bác sĩ."], ["You should not eat spicy food.", "Bạn không nên ăn đồ cay."]]
    },
    { h: "Nói tần suất uống thuốc: once, twice, three times a day",
      f: ["once, twice, three times + a day", "số viên + every + số giờ + hours", "for + số ngày"],
      items: [
        { f: "once, twice, three times + a day",
          mean: "**bao nhiêu lần một ngày**. Dùng để nói tần suất uống thuốc, ăn uống, tập luyện.",
          parts: [
            ["once", "**một lần**. Không nói “one time”."],
            ["twice", "**hai lần**. Không nói “two times” trong câu dặn thuốc."],
            ["three times, four times", "từ **ba lần trở lên**: số + times."],
            ["a day", "**mỗi ngày, một ngày**. Có thể đổi thành a week (mỗi tuần), a month (mỗi tháng)."]
          ],
          use: "trả lời câu hỏi How often should I take it? Cụm này thường đứng ở **cuối câu**, sau động từ và tên thuốc.",
          note: "Không nói “two times one day” hay “twice in a day”. Cấu trúc đúng là **số lần + a + đơn vị thời gian**: twice a day, once a week.",
          ex: [
            ["Take this tablet once a day.", "Uống viên này mỗi ngày một lần."],
            ["I take my medicine twice a day, in the morning and at night.", "Tôi uống thuốc ngày hai lần, buổi sáng và buổi tối."],
            ["Use the eye drops three times a day.", "Nhỏ thuốc mắt ngày ba lần."],
            ["How often should I take it? Twice a day.", "Tôi nên uống bao nhiêu lần? Ngày hai lần."]
          ] },
        { f: "số viên + every + số giờ + hours",
          mean: "**mỗi lần bao nhiêu viên, cách nhau bao nhiêu tiếng**. Every nghĩa là “cứ mỗi”.",
          parts: [
            ["số viên", "one tablet, two tablets, one capsule (viên nang), two spoons (hai thìa siro)."],
            ["every", "**cứ mỗi**. Đứng trước khoảng thời gian, không có in phía trước."],
            ["số giờ + hours", "khoảng cách giữa hai lần: every four hours, every six hours, every eight hours."]
          ],
          use: "nghe hoặc đọc hướng dẫn liều dùng chính xác. Thường đứng sau động từ take: Take **two tablets every six hours**.",
          note: "Không nói “in every six hours” hay “each six hours”. Phân biệt: **twice a day** là số lần trong ngày, **every twelve hours** là khoảng cách giữa hai lần.",
          ex: [
            ["Take one tablet every eight hours.", "Uống một viên mỗi tám tiếng."],
            ["Give him one spoon of syrup every six hours.", "Cho cháu uống một thìa siro mỗi sáu tiếng."],
            ["Should I take two tablets every four hours?", "Tôi có nên uống hai viên mỗi bốn tiếng không?"],
            ["Do not take more than two tablets every six hours.", "Đừng uống quá hai viên mỗi sáu tiếng."]
          ] },
        { f: "for + số ngày",
          mean: "**trong bao nhiêu ngày**: tổng thời gian phải dùng thuốc.",
          parts: [
            ["for", "**trong, suốt** + một khoảng thời gian."],
            ["số ngày", "three days, five days, a week, two weeks."]
          ],
          use: "trả lời câu hỏi How long should I take it for? For + số ngày thường đứng **cuối câu**, sau phần tần suất.",
          note: "Đây là for chỉ khoảng thời gian, giống for two days trong I have had a cough for two days. Không nói “in five days” vì in five days nghĩa là “năm ngày nữa”.",
          ex: [
            ["Take this medicine for five days.", "Uống thuốc này trong năm ngày."],
            ["Use the cream twice a day for a week.", "Bôi kem ngày hai lần trong một tuần."],
            ["How long should I take it for? For three days.", "Tôi nên uống trong bao lâu? Trong ba ngày."],
            ["Do not take painkillers for more than three days.", "Đừng uống thuốc giảm đau quá ba ngày."]
          ] }
      ],
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
