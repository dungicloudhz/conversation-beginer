/* Ngữ pháp nền tảng: Câu điều kiện loại 0, 1, 2 (If it rains, I will…; If I were you…). Hiển thị bởi grammar-lesson.js. */
window.A1_GRAMMAR = {
  icon: "🔀",
  short: "Câu điều kiện",
  hero: ["Câu điều kiện trong giao tiếp", "If it rains · If I were you · If I won"],
  desc: "Tiếng Việt chỉ cần “nếu … thì …” và không đổi động từ, nên người Việt hay nói “If it will rain, I will stay home” hoặc “If I am rich, I would…”. Tiếng Anh chọn **thì của động từ** theo mức độ thật: sự thật, chuyện có thể xảy ra, hay chuyện tưởng tượng. Học xong bài này, bạn sẽ khuyên bạn bè, nói kế hoạch “nếu trời mưa thì…” và mơ mộng “nếu tôi trúng xổ số…” một cách tự nhiên.",
  chips: ["Loại 0: sự thật", "Loại 1: có thể xảy ra", "Loại 2: tưởng tượng", "If I were you", "Luyện nói"],
  goal: [
    "Nói về sự thật và thói quen bằng **If / When + hiện tại đơn**: “When I am tired, I drink coffee.”",
    "Nói kế hoạch phụ thuộc vào thời tiết, thời gian, tiền bạc: “If it rains, we **will** stay at home.”",
    "Dùng **unless** thay cho “if … not”: “I will go **unless** it rains.”",
    "Đưa lời khuyên lịch sự bằng “**If I were you, I would** …” và trả lời câu hỏi “What would you do if…?”",
    "Kể giấc mơ, điều ước: “If I won the lottery, I **would** buy a house.” và “I wish I **could** speak English well.”"
  ],
  sections: [
    { nav: "🌡️ Loại 0: sự thật", title: "Câu điều kiện loại 0: sự thật và thói quen", sub: "Lúc nào điều kiện xảy ra thì kết quả cũng xảy ra",
      intro: [
        "Câu điều kiện có hai vế: **vế điều kiện** (bắt đầu bằng if, nghĩa là “nếu”) và **vế kết quả** (điều xảy ra sau đó). Loại 0 dùng khi kết quả **luôn luôn** xảy ra: sự thật khoa học, quy luật, hoặc thói quen của bạn.",
        "Điểm dễ nhớ: cả hai vế đều dùng **thì hiện tại đơn**. Ở loại này, **if** và **when** gần như cùng nghĩa: “mỗi khi”, “hễ mà”."
      ],
      formulas: [
        { f: "If + chủ ngữ + hiện tại đơn, chủ ngữ + hiện tại đơn",
          mean: "**hễ … thì luôn …**: một sự thật, một quy luật không thay đổi.",
          parts: [["If + hiện tại đơn", "vế điều kiện: If you heat water, If you mix red and blue…"], ["hiện tại đơn (vế kết quả)", "kết quả chắc chắn: it boils, you get purple. Nhớ thêm **-s / -es** với he / she / it."]],
          use: "giải thích sự thật, hướng dẫn cách dùng đồ vật, nói quy định ở nơi làm việc, trường học: “If you are late, the teacher marks you absent.”",
          note: "Người Việt hay thêm will vào vế kết quả: “If you heat ice, it **will** melt.” Câu này không sai hẳn nhưng nghe như một lần cụ thể. Nói về sự thật chung thì dùng hiện tại đơn ở **cả hai vế**: “it melts”.",
          ex: [["If you heat ice, it melts.", "Nếu bạn làm nóng đá, nó tan."], ["If you do not water plants, they die.", "Nếu không tưới cây, cây sẽ chết."], ["If it rains a lot in Saigon, the streets flood.", "Nếu Sài Gòn mưa to, đường phố bị ngập."], ["What happens if you press this button?", "Chuyện gì xảy ra nếu bạn bấm nút này?"]] },
        { f: "When / If + chủ ngữ + hiện tại đơn, chủ ngữ + hiện tại đơn (thói quen)",
          mean: "**mỗi khi … thì tôi thường …**: thói quen của bạn hoặc của người khác.",
          parts: [["When", "mỗi khi: chuyện xảy ra thường xuyên, chắc chắn sẽ có. When I am tired, I drink coffee."], ["If", "hễ mà: nghe nhẹ hơn, có lúc xảy ra, có lúc không. If I have free time, I read."], ["always / usually / often", "có thể thêm vào vế kết quả để nói rõ mức độ thường xuyên: I usually take a taxi."]],
          use: "kể về thói quen hằng ngày, sở thích, cách bạn xử lý tình huống: khi buồn, khi đói, khi rảnh, khi trời nóng.",
          note: "Tiếng Việt nói “Khi tôi mệt thì tôi uống cà phê”. Tiếng Anh **không dịch chữ “thì”**: không nói “When I am tired, then I drink coffee” trong câu ngắn hằng ngày. Chỉ cần dấu phẩy.",
          ex: [["When I am tired, I drink a cup of coffee.", "Khi mệt, tôi uống một cốc cà phê."], ["If I have free time, I usually watch films.", "Nếu có thời gian rảnh, tôi thường xem phim."], ["When my mother is sad, she cooks.", "Khi buồn, mẹ tôi nấu ăn."], ["I do not eat breakfast if I wake up late.", "Tôi không ăn sáng nếu dậy muộn."]] }
      ],
      mistakes: [
        ["If you heat water to 100 degrees, it will boils.", "If you heat water to 100 degrees, it boils.", "Sự thật chung dùng **hiện tại đơn** ở cả hai vế. Và sau will không bao giờ thêm -s."],
        ["When I am hungry, then I eat instant noodles.", "When I am hungry, I eat instant noodles.", "Không dịch chữ “thì”. Hai vế chỉ cần nối bằng **dấu phẩy**."],
        ["If my father is tired, he go to bed early.", "If my father is tired, he goes to bed early.", "Chủ ngữ là **he** nên động từ ở hiện tại đơn phải thêm **-es**: goes."]
      ],
      talk: { title: "TÌNH HUỐNG: NÓI VỀ THÓI QUEN KHI CĂNG THẲNG", turns: [
        ["A", "You look tired. What do you do when you feel stressed?", "Trông bạn mệt quá. Bạn làm gì khi thấy căng thẳng?"],
        ["B", "When I feel stressed, I go for a walk around the lake.", "Khi căng thẳng, mình đi dạo quanh hồ."],
        ["A", "That is a good idea. If I walk after dinner, I sleep better.", "Ý hay đấy. Nếu mình đi bộ sau bữa tối thì mình ngủ ngon hơn."],
        ["B", "Me too. But if it rains, I just listen to music at home.", "Mình cũng vậy. Nhưng nếu trời mưa thì mình chỉ ở nhà nghe nhạc."],
        ["A", "Music always helps. When I listen to old songs, I feel happy.", "Âm nhạc lúc nào cũng có ích. Khi nghe nhạc xưa, mình thấy vui."]
      ] },
      tip: "Loại 0 = **hiện tại + hiện tại**. Nếu thay **if** bằng **when** (mỗi khi) mà câu vẫn đúng nghĩa thì đó là loại 0." },

    { nav: "☔ Loại 1: có thể xảy ra", title: "Câu điều kiện loại 1: kế hoạch và khả năng thật", sub: "If it rains tomorrow, we will stay at home",
      intro: [
        "Loại 1 dùng khi bạn nói về **một tình huống cụ thể có thể xảy ra** ở hiện tại hoặc tương lai: ngày mai trời có thể mưa, bạn có thể được nghỉ, sếp có thể đồng ý. Đây là loại câu điều kiện bạn dùng **nhiều nhất** khi lên kế hoạch.",
        "Quy tắc vàng: vế có **if** dùng **hiện tại đơn**, dù đang nói về tương lai. Chỉ vế kết quả mới dùng **will / can / might**."
      ],
      formulas: [
        { f: "If + chủ ngữ + hiện tại đơn, chủ ngữ + will / can / might + động từ nguyên mẫu",
          mean: "**nếu … thì sẽ …**: một khả năng thật, có thể xảy ra.",
          parts: [["will", "**sẽ**: bạn khá chắc chắn về kết quả. If it rains, we will stay at home."], ["can", "**có thể, được phép**: nói về khả năng hoặc sự cho phép. If you finish early, you can go home."], ["might / may", "**có lẽ sẽ**: không chắc chắn, chỉ khoảng năm mươi phần trăm. If I have time, I might call you."], ["won’t (= will not)", "**sẽ không**: If you do not hurry, you won’t catch the bus."]],
          use: "lên kế hoạch phụ thuộc vào thời tiết, thời gian, tiền bạc; hứa hẹn (“If you help me, I will buy you lunch”); cảnh báo (“If you eat too much, you will feel sick”).",
          note: "Lỗi hay gặp nhất của người Việt: “If it **will rain**…”. Tiếng Việt nói “nếu ngày mai trời **sẽ** mưa” nghe vẫn được, nhưng tiếng Anh **không bao giờ** đặt will ngay sau if trong câu điều kiện. Viết “If it **rains** tomorrow”.",
          ex: [["If it rains tomorrow, we will stay at home.", "Nếu mai trời mưa, chúng tôi sẽ ở nhà."], ["If you finish early, you can leave.", "Nếu bạn làm xong sớm, bạn có thể về."], ["If I have time this weekend, I might visit my grandparents.", "Nếu cuối tuần có thời gian, có lẽ tôi sẽ về thăm ông bà."], ["If the traffic is bad, I won’t arrive on time.", "Nếu đường tắc, tôi sẽ không đến kịp giờ."]] },
        { f: "unless + chủ ngữ + hiện tại đơn = if + chủ ngữ + do / does not …",
          mean: "**trừ khi, nếu không**: unless đã mang nghĩa phủ định sẵn.",
          parts: [["unless", "= if … not. I will go unless it rains = I will go if it does not rain."], ["if … not", "cách nói dễ hơn, dùng được ở mọi nơi. Mới học thì có thể dùng cách này trước."]],
          use: "đặt điều kiện, cảnh báo, nhắc nhở: “Unless you hurry, you will be late.”, “I will not go unless you come with me.”",
          note: "Unless **đã có nghĩa “không”** sẵn, nên không thêm not phía sau: không nói “unless it **does not** rain” khi muốn nói “nếu trời không mưa”.",
          ex: [["I will go to the beach unless it rains.", "Tôi sẽ ra biển, trừ khi trời mưa."], ["Unless you hurry, you will miss the train.", "Nếu không nhanh lên, bạn sẽ lỡ tàu."], ["She will not come unless you invite her.", "Cô ấy sẽ không đến nếu bạn không mời."], ["We cannot start unless everyone is here.", "Chúng ta không thể bắt đầu nếu mọi người chưa đến đủ."]] },
        { f: "What will you do if + chủ ngữ + hiện tại đơn?",
          mean: "**Bạn sẽ làm gì nếu …?** hỏi về kế hoạch dự phòng.",
          parts: [["What will you do if…?", "hỏi kế hoạch: What will you do if it rains?"], ["Will you … if…?", "câu hỏi có hoặc không: Will you come if I invite Lan?"], ["What if…?", "cách hỏi ngắn trong lúc nói chuyện: What if it rains? (Nếu mưa thì sao?)"]],
          use: "khi lên kế hoạch cùng bạn bè, đồng nghiệp và muốn chuẩn bị phương án khác.",
          note: "Trong câu hỏi, will vẫn chỉ nằm ở **vế kết quả**: “What will you do if it **rains**?”, không nói “if it will rain”.",
          ex: [["What will you do if it rains on Saturday?", "Nếu thứ Bảy trời mưa thì bạn sẽ làm gì?"], ["Will you come to the party if I invite Lan?", "Nếu tôi mời Lan thì bạn có đến dự tiệc không?"], ["What if the restaurant is full?", "Nếu nhà hàng hết chỗ thì sao?"], ["If the restaurant is full, we will go to the café next door.", "Nếu nhà hàng hết chỗ, chúng ta sẽ sang quán cà phê bên cạnh."]] }
      ],
      mistakes: [
        ["If it will rain tomorrow, I will stay at home.", "If it rains tomorrow, I will stay at home.", "Vế có **if** dùng hiện tại đơn, kể cả khi nói về ngày mai. Will chỉ ở vế kết quả."],
        ["If I will have money, I buy a new phone.", "If I have money, I will buy a new phone.", "Đổi chỗ will: **if + hiện tại đơn**, vế kết quả mới có **will**."],
        ["Unless you do not study, you will fail.", "Unless you study, you will fail.", "**Unless** đã có nghĩa “nếu không”, thêm not nữa là phủ định hai lần."]
      ],
      talk: { title: "TÌNH HUỐNG: LÊN KẾ HOẠCH ĐI CHƠI CUỐI TUẦN", turns: [
        ["A", "Let’s go to Ba Vi on Sunday. What do you think?", "Chủ nhật mình đi Ba Vì đi. Bạn thấy sao?"],
        ["B", "Good idea! But what will we do if it rains?", "Ý hay! Nhưng nếu trời mưa thì mình làm gì?"],
        ["A", "If it rains, we will go to a museum in the city instead.", "Nếu mưa, mình sẽ đi bảo tàng trong thành phố thay vào đó."],
        ["B", "OK. If I finish my work on Saturday, I can drive.", "Được. Nếu thứ Bảy mình làm xong việc, mình có thể lái xe."],
        ["A", "Great. I will bring some food unless you want to eat there.", "Tuyệt. Mình sẽ mang đồ ăn, trừ khi bạn muốn ăn ở đó."],
        ["B", "No, let’s bring food. If we leave at seven, we will avoid the traffic.", "Không, mang đồ ăn đi. Nếu đi lúc bảy giờ, mình sẽ tránh được tắc đường."]
      ] },
      tip: "Nhớ câu thần chú: “**If** không đi với **will**.” Loại 1 = **hiện tại đơn + will**. Ngày mai, tuần sau, năm sau đều vậy." },

    { nav: "💭 Loại 2: tưởng tượng", title: "Câu điều kiện loại 2: tưởng tượng và lời khuyên", sub: "If I won the lottery… / If I were you…",
      intro: [
        "Loại 2 dùng khi bạn **tưởng tượng** một điều không có thật ở hiện tại, hoặc rất khó xảy ra: trúng xổ số, biết bay, là tổng thống, có thật nhiều thời gian. Động từ ở vế if lùi về **quá khứ đơn**, nhưng nghĩa vẫn là **hiện tại hoặc tương lai**. Thì quá khứ ở đây là tín hiệu “chuyện này không thật”.",
        "Cùng mẫu câu này, “**If I were you, I would…**” (nếu tôi là bạn, tôi sẽ…) là cách đưa lời khuyên nhẹ nhàng, lịch sự nhất mà người bản xứ hay dùng."
      ],
      formulas: [
        { f: "If + chủ ngữ + quá khứ đơn, chủ ngữ + would / could + động từ nguyên mẫu",
          mean: "**nếu (giả sử) … thì sẽ …**: điều không có thật bây giờ, hoặc khó xảy ra.",
          parts: [["quá khứ đơn sau if", "động từ quá khứ (cột thứ hai): If I had, If I won, If I lived, If she knew. Với be thì dùng **were**."], ["would", "**sẽ** (trong tưởng tượng): I would buy a house. Viết tắt: I’d."], ["could", "**có thể** (trong tưởng tượng): I could travel more."], ["would not / wouldn’t", "**sẽ không**: If I had a car, I wouldn’t take the bus."]],
          use: "kể ước mơ (“nếu tôi trúng xổ số…”), nói về hoàn cảnh khác với hiện tại (“If I lived near the sea…”), lý giải vì sao không làm được (“If I had time, I would help you.” = thật ra tôi không có thời gian).",
          note: "Người Việt dễ hiểu nhầm là đang nói quá khứ. “If I **had** a car” **không** có nghĩa “nếu hồi đó tôi có xe”, mà là “giả sử **bây giờ** tôi có xe” (thật ra tôi không có).",
          ex: [["If I won the lottery, I would buy a house for my parents.", "Nếu trúng xổ số, tôi sẽ mua nhà cho bố mẹ."], ["If I had more time, I could learn the guitar.", "Nếu có nhiều thời gian hơn, tôi có thể học đàn ghi-ta."], ["If I lived near the sea, I would swim every morning.", "Nếu sống gần biển, sáng nào tôi cũng sẽ bơi."], ["What would you do if you had a free month?", "Bạn sẽ làm gì nếu có một tháng rảnh rỗi?"]] },
        { f: "If I were you, I would (not) + động từ nguyên mẫu",
          mean: "**Nếu tôi là bạn, tôi sẽ …**: lời khuyên lịch sự, không ra lệnh.",
          parts: [["If I were you", "dùng **were** cho mọi chủ ngữ trong câu tưởng tượng: If I were, If he were. Trong lúc nói chuyện thân mật bạn có thể nghe “If I was you”, nhưng **were** là dạng chuẩn, nên học dạng này."], ["I would…", "lời khuyên làm: I would talk to your boss."], ["I wouldn’t…", "lời khuyên đừng làm: I wouldn’t buy that phone."]],
          use: "khi bạn bè, đồng nghiệp kể vấn đề và hỏi ý kiến bạn. Có thể bỏ vế if và chỉ nói “I would…” hoặc “I wouldn’t…” khi đã rõ đang khuyên.",
          note: "Người Việt hay khuyên bằng “You must…” hoặc “You should…” rất thẳng. “If I were you, I would…” mềm hơn vì bạn đặt mình vào vị trí người kia, không ra lệnh.",
          ex: [["If I were you, I would see a doctor.", "Nếu tôi là bạn, tôi sẽ đi khám bác sĩ."], ["If I were you, I wouldn’t buy that motorbike. It is too old.", "Nếu tôi là bạn, tôi sẽ không mua chiếc xe máy đó. Nó cũ quá."], ["What would you do if you were me?", "Nếu bạn là tôi thì bạn sẽ làm gì?"], ["If I were you, I would take the job in Da Nang.", "Nếu tôi là bạn, tôi sẽ nhận công việc ở Đà Nẵng."]] },
        { f: "I wish I could + động từ nguyên mẫu / I would like to + động từ nguyên mẫu",
          mean: "**Ước gì tôi có thể … / Tôi muốn …**: nói điều ước và mong muốn một cách nhẹ nhàng.",
          parts: [["I wish I could…", "**ước gì tôi có thể**: điều bạn không làm được bây giờ. I wish I could speak English fluently."], ["I would like to… (I’d like to…)", "**tôi muốn**: lịch sự hơn I want to. I would like to visit Japan one day."], ["I would love to…", "**tôi rất muốn**: nhiệt tình hơn, hay dùng để nhận lời mời."]],
          use: "kể ước mơ, từ chối khéo (“I wish I could come, but I have to work.”), gọi món, xin điều gì một cách lịch sự.",
          note: "“I wish I could come” là **từ chối** lịch sự (thật ra không đến được). Đừng hiểu nhầm là người ta đồng ý. Còn “I would love to come” mới là nhận lời.",
          ex: [["I wish I could speak English like you.", "Ước gì tôi nói tiếng Anh được như bạn."], ["I wish I could come, but I have to work late.", "Ước gì tôi đến được, nhưng tôi phải làm muộn."], ["I would like to visit Japan one day.", "Một ngày nào đó tôi muốn đi Nhật Bản."], ["Would you like to join us for dinner?", "Bạn có muốn ăn tối cùng chúng tôi không?"]] }
      ],
      mistakes: [
        ["If I am rich, I would travel around the world.", "If I were rich, I would travel around the world.", "Có **would** ở vế kết quả thì vế if phải lùi về quá khứ: **were**."],
        ["If I would have a lot of money, I would buy a car.", "If I had a lot of money, I would buy a car.", "Giống loại 1: **would không đứng sau if**. Vế if dùng quá khứ đơn: had."],
        ["If I were you, I will call her.", "If I were you, I would call her.", "Vế if là tưởng tượng (were) thì vế kết quả dùng **would**, không dùng will."]
      ],
      talk: { title: "TÌNH HUỐNG: XIN LỜI KHUYÊN VỀ CÔNG VIỆC", turns: [
        ["A", "I got a job offer in Saigon, but my family is in Hanoi. What would you do if you were me?", "Mình được mời làm ở Sài Gòn, nhưng gia đình ở Hà Nội. Nếu là mình thì bạn sẽ làm gì?"],
        ["B", "Is the salary better?", "Lương có cao hơn không?"],
        ["A", "Yes, much better. If I took it, I could save money for a house.", "Có, cao hơn nhiều. Nếu nhận, mình có thể tiết kiệm tiền mua nhà."],
        ["B", "Then if I were you, I would take it. You can fly home on holidays.", "Vậy nếu mình là bạn, mình sẽ nhận. Ngày lễ bạn có thể bay về nhà."],
        ["A", "You are right. I wish I could take my parents with me.", "Bạn nói đúng. Ước gì mình đưa được bố mẹ đi cùng."],
        ["B", "If they visited you, they would love Saigon!", "Nếu bố mẹ vào thăm, chắc chắn họ sẽ thích Sài Gòn!"]
      ] },
      tip: "Quá khứ sau if = **không có thật**. “If I **have** money” (có thể có thật) khác “If I **had** money” (thật ra tôi không có). Muốn khuyên ai, mở đầu bằng “**If I were you…**”." },

    { nav: "📌 Mệnh lệnh và dấu phẩy", title: "Câu mệnh lệnh với if, vị trí mệnh đề và dấu phẩy", sub: "If you see him, tell him… / Call me if you need help",
      intro: [
        "Vế kết quả không nhất thiết phải có will hay would. Khi muốn **nhờ, dặn dò, hướng dẫn** ai đó trong một tình huống có thể xảy ra, bạn dùng câu mệnh lệnh (động từ nguyên mẫu đứng đầu) ở vế kết quả.",
        "Hai vế của câu điều kiện có thể **đổi chỗ** cho nhau mà nghĩa không đổi. Chỉ cần nhớ quy tắc dấu phẩy: **if đứng đầu câu thì có dấu phẩy, if đứng giữa câu thì không**."
      ],
      formulas: [
        { f: "If + chủ ngữ + hiện tại đơn, động từ nguyên mẫu (câu mệnh lệnh)",
          mean: "**nếu … thì hãy / thì đừng …**: dặn dò, nhờ vả, hướng dẫn.",
          parts: [["động từ nguyên mẫu", "**hãy làm**: If you see him, tell him to call me."], ["do not / don’t + động từ nguyên mẫu", "**đừng làm**: If you feel sick, don’t go to work."], ["please", "thêm vào cho lịch sự: If you have any questions, please ask me."]],
          use: "dặn đồng nghiệp, người nhà, khách hàng; viết tin nhắn; hướng dẫn đường đi: “If you get lost, call me.”",
          note: "Không thêm will vào câu mệnh lệnh: không nói “If you see him, you will tell him” khi muốn nhờ. Câu đó nghe như đoán trước, không phải lời nhờ.",
          ex: [["If you see Nam, tell him to call me.", "Nếu gặp Nam, bảo cậu ấy gọi cho tôi nhé."], ["If you feel sick, don’t come to work tomorrow.", "Nếu thấy ốm, mai đừng đi làm."], ["If you have any questions, please send me an email.", "Nếu có câu hỏi gì, vui lòng gửi email cho tôi."], ["If you get lost, call me.", "Nếu bị lạc, gọi cho tôi nhé."]] },
        { f: "If + vế điều kiện, vế kết quả  /  vế kết quả + if + vế điều kiện",
          mean: "**hai vế đổi chỗ được**: nghĩa giống nhau, chỉ khác dấu phẩy.",
          parts: [["If … , …", "if đứng đầu: **có dấu phẩy** giữa hai vế. Nhấn mạnh điều kiện. If it rains, we will stay home."], ["… if …", "if đứng giữa: **không có dấu phẩy**. Nhấn mạnh kết quả. We will stay home if it rains."], ["unless / when", "theo cùng quy tắc: Unless you hurry, you will be late. / You will be late unless you hurry."]],
          use: "trong lúc nói, bạn có thể bắt đầu bằng ý quan trọng hơn. Câu trả lời ngắn thường đặt if ở cuối: “Sure, I will come if I finish early.”",
          note: "Đổi chỗ hai vế thì **thì của động từ đi theo vế**, không đổi: will vẫn ở vế kết quả, hiện tại đơn vẫn ở vế if. Không nói “We stay home if it will rain.”",
          ex: [["If I finish early, I will call you.", "Nếu xong sớm, tôi sẽ gọi cho bạn."], ["I will call you if I finish early.", "Tôi sẽ gọi cho bạn nếu xong sớm."], ["Call me if you need help.", "Gọi cho tôi nếu bạn cần giúp."], ["Would you go if they invited you?", "Bạn có đi không nếu họ mời bạn?"]] }
      ],
      mistakes: [
        ["If you see Lan you will tell her about the meeting.", "If you see Lan, tell her about the meeting.", "Muốn nhờ thì dùng **câu mệnh lệnh** (tell…). Và if đứng đầu câu thì cần **dấu phẩy**."],
        ["I will help you, if you need.", "I will help you if you need me.", "If đứng giữa câu thì **không** cần dấu phẩy. Need thường cần tân ngữ: need me, need help."],
        ["We will go out if it will be sunny.", "We will go out if it is sunny.", "Đổi chỗ hai vế nhưng vế if vẫn dùng **hiện tại đơn**."]
      ],
      talk: { title: "TÌNH HUỐNG: DẶN DÒ ĐỒNG NGHIỆP TRƯỚC KHI NGHỈ PHÉP", turns: [
        ["A", "I am on holiday next week. If the customer calls, please tell him I will reply on Monday.", "Tuần sau tôi nghỉ phép. Nếu khách gọi, nhờ bạn bảo anh ấy thứ Hai tôi sẽ trả lời."],
        ["B", "No problem. What if he needs the report?", "Không sao. Nếu anh ấy cần báo cáo thì sao?"],
        ["A", "If he needs it, send him the file in this folder.", "Nếu anh ấy cần, bạn gửi giúp tệp trong thư mục này."],
        ["B", "OK. And if there is a problem?", "Được. Còn nếu có vấn đề gì?"],
        ["A", "Send me a message if it is urgent. Don’t call me unless it is very serious.", "Nhắn tin cho tôi nếu gấp. Đừng gọi trừ khi rất nghiêm trọng."]
      ] },
      tip: "**If đầu câu → có phẩy. If giữa câu → không phẩy.** Muốn nhờ ai thì vế sau bắt đầu bằng động từ: “If you see him, **tell** him…”." },

    { nav: "⚖️ So sánh ba loại", title: "So sánh ba loại câu điều kiện: chọn loại nào?", sub: "Cùng một chuyện, khác nhau ở mức độ thật",
      intro: [
        "Cách chọn loại rất đơn giản: hãy tự hỏi “**Chuyện này thật đến mức nào?**” Luôn đúng thì dùng loại 0. Có thể xảy ra thì dùng loại 1. Không có thật, chỉ tưởng tượng thì dùng loại 2.",
        "Ở trình độ cao hơn còn có **câu điều kiện loại 3** (If I had known, I would have…) để nói về chuyện đã không xảy ra trong quá khứ. Bạn chưa cần học loại này: ba loại dưới đây đủ cho hầu hết các cuộc nói chuyện hằng ngày."
      ],
      table: { head: ["Loại", "Cấu trúc", "Dùng khi", "Ví dụ"], say: [3],
        rows: [
          ["Loại 0", "If / When + hiện tại đơn, hiện tại đơn", "sự thật, quy luật, thói quen: lúc nào cũng đúng", "If you heat ice, it melts."],
          ["Loại 1", "If + hiện tại đơn, will / can / might + động từ nguyên mẫu", "chuyện **có thể xảy ra** ở hiện tại hoặc tương lai", "If it rains, we will stay at home."],
          ["Loại 1 (mệnh lệnh)", "If + hiện tại đơn, động từ nguyên mẫu", "dặn dò, nhờ vả trong tình huống có thể xảy ra", "If you see him, tell him to call me."],
          ["Loại 2", "If + quá khứ đơn, would / could + động từ nguyên mẫu", "chuyện **tưởng tượng**, không có thật bây giờ, hoặc rất khó xảy ra; lời khuyên", "If I won the lottery, I would buy a house."]
        ] },
      formulas: [
        { f: "If I have… (loại 1)  ≠  If I had… (loại 2)",
          mean: "**cùng một chuyện, khác cách nhìn**: loại 1 là bạn nghĩ nó có thể xảy ra, loại 2 là bạn nghĩ nó khó hoặc không thể xảy ra.",
          parts: [["If I have time, I will help you.", "có thể tôi có thời gian (thật sự còn tùy). Nghe như một lời hứa."], ["If I had time, I would help you.", "thật ra tôi **không** có thời gian. Nghe như một lời từ chối khéo."], ["If I see her, I will…  /  If I saw a ghost, I would…", "gặp bạn là chuyện bình thường (loại 1); gặp ma là chuyện tưởng tượng (loại 2)."]],
          use: "khi người khác hỏi “Can you help me?”: trả lời loại 1 để hứa, trả lời loại 2 để từ chối nhẹ nhàng.",
          note: "Người Việt hay dùng loại 2 cho mọi câu “nếu”, vì thấy would nghe lịch sự. Nhưng nếu chuyện có thể xảy ra thật, dùng loại 1 sẽ rõ ràng hơn: “If I **get** the job, I **will** move to Hanoi.”",
          ex: [["If I have time tomorrow, I will help you move house.", "Nếu mai có thời gian, tôi sẽ giúp bạn chuyển nhà."], ["If I had time, I would help you, but I am very busy.", "Giá mà có thời gian thì tôi đã giúp bạn, nhưng tôi bận quá."], ["If I get the job, I will move to Hanoi.", "Nếu được nhận việc, tôi sẽ chuyển ra Hà Nội."], ["If I were a bird, I would fly home every day.", "Nếu tôi là chim, ngày nào tôi cũng bay về nhà."]] },
        { f: "When + hiện tại đơn, will …  ≠  If + hiện tại đơn, will …",
          mean: "**when = khi (chắc chắn sẽ xảy ra)**, **if = nếu (chưa chắc)**.",
          parts: [["When I get home, I will call you.", "chắc chắn tôi sẽ về nhà; chỉ chưa biết lúc nào."], ["If I get home early, I will call you.", "chưa chắc tôi về sớm."], ["as soon as", "**ngay khi**: cũng đi với hiện tại đơn. As soon as I arrive, I will text you."]],
          use: "hẹn gọi điện, nhắn tin, gặp nhau: “When I arrive at the airport, I will text you.”",
          note: "Tiếng Việt “khi” và “nếu” đôi khi dùng lẫn. Tiếng Anh phân biệt rõ: “**If** the sun rises tomorrow…” nghe rất lạ vì chắc chắn mặt trời sẽ mọc; phải nói “**When** the sun rises…”. Sau when và as soon as cũng **không dùng will**.",
          ex: [["When I get home, I will call you.", "Khi về đến nhà, tôi sẽ gọi cho bạn."], ["If I get home early, we can have dinner together.", "Nếu tôi về sớm, chúng ta có thể ăn tối cùng nhau."], ["As soon as I arrive in Da Lat, I will send you a photo.", "Ngay khi đến Đà Lạt, tôi sẽ gửi ảnh cho bạn."], ["Will you text me when you get there?", "Bạn đến nơi thì nhắn tôi nhé?"]] }
      ],
      mistakes: [
        ["If I will finish university, I will work abroad.", "When I finish university, I will work abroad.", "Chắc chắn sẽ tốt nghiệp thì dùng **when**, và sau when không dùng will."],
        ["If I have wings, I will fly to Paris.", "If I had wings, I would fly to Paris.", "Có cánh là chuyện **không thể có** nên dùng loại 2: had, would."]
      ],
      talk: { title: "TÌNH HUỐNG: TỪ CHỐI KHÉO VÀ HỨA HẸN", turns: [
        ["A", "Can you help me with my English homework tonight?", "Tối nay bạn giúp mình làm bài tập tiếng Anh được không?"],
        ["B", "Sorry, I have to work late. If I had time, I would help you.", "Xin lỗi, mình phải làm muộn. Nếu có thời gian thì mình đã giúp rồi."],
        ["A", "That is OK. What about tomorrow?", "Không sao. Thế còn ngày mai?"],
        ["B", "If I finish work early tomorrow, I will call you.", "Nếu mai mình xong việc sớm, mình sẽ gọi cho bạn."],
        ["A", "Thanks! When you call, I will send you the questions.", "Cảm ơn! Khi bạn gọi, mình sẽ gửi các câu hỏi cho bạn."]
      ] },
      tip: "Ba câu hỏi để chọn loại: **Luôn đúng?** → loại 0. **Có thể xảy ra?** → loại 1 (will). **Chỉ là tưởng tượng?** → loại 2 (would). Muốn ôn thì quá khứ, xem thêm trang Quá khứ đơn." }
  ],
  speak: [
    { q: "What do you do when you feel stressed?", vi: "Bạn làm gì khi thấy căng thẳng?", hint: "Loại 0, nói thói quen: **When I feel stressed, I + động từ hiện tại đơn …**",
      answers: [["When I feel stressed, I listen to music or go for a walk.", "Khi căng thẳng, tôi nghe nhạc hoặc đi dạo."], ["If I feel stressed, I call my best friend and we talk for a long time.", "Nếu căng thẳng, tôi gọi cho bạn thân và chúng tôi nói chuyện rất lâu."]] },
    { q: "What will you do this weekend if the weather is nice?", vi: "Cuối tuần này nếu thời tiết đẹp thì bạn sẽ làm gì?", hint: "Loại 1: **If the weather is nice, I will / might + động từ nguyên mẫu …**",
      answers: [["If the weather is nice, I will go cycling around West Lake.", "Nếu trời đẹp, tôi sẽ đạp xe quanh Hồ Tây."], ["If it is sunny, I might take my kids to the park.", "Nếu trời nắng, có lẽ tôi sẽ đưa con đi công viên."]] },
    { q: "And what will you do if it rains?", vi: "Còn nếu trời mưa thì bạn sẽ làm gì?", hint: "Loại 1, nhớ **if + hiện tại đơn** (if it rains), không phải if it will rain.",
      answers: [["If it rains, I will stay at home and watch a film.", "Nếu mưa, tôi sẽ ở nhà xem phim."], ["If it rains, we will go to a shopping mall instead.", "Nếu mưa, chúng tôi sẽ đi trung tâm mua sắm thay vào đó."]] },
    { q: "What would you do if you won the lottery?", vi: "Bạn sẽ làm gì nếu trúng xổ số?", hint: "Loại 2: **If I won the lottery, I would + động từ nguyên mẫu …** Kể hai hoặc ba việc.",
      answers: [["If I won the lottery, I would buy a big house for my parents.", "Nếu trúng xổ số, tôi sẽ mua một ngôi nhà to cho bố mẹ."], ["I would travel around the world, and I would give some money to poor children.", "Tôi sẽ đi du lịch vòng quanh thế giới, và tôi sẽ cho trẻ em nghèo một ít tiền."]] },
    { q: "My friend always borrows money and never pays it back. What would you do if you were me?", vi: "Bạn tôi lúc nào cũng mượn tiền mà không bao giờ trả. Nếu là tôi thì bạn sẽ làm gì?", hint: "Khuyên bằng **If I were you, I would / I wouldn’t + động từ nguyên mẫu …**",
      answers: [["If I were you, I would talk to him honestly.", "Nếu tôi là bạn, tôi sẽ nói chuyện thẳng thắn với anh ấy."], ["If I were you, I wouldn’t lend him money again.", "Nếu tôi là bạn, tôi sẽ không cho anh ấy mượn tiền nữa."]] },
    { q: "If you could live in any city in the world, where would you live?", vi: "Nếu được sống ở bất kỳ thành phố nào trên thế giới, bạn sẽ sống ở đâu?", hint: "Loại 2: **If I could live anywhere, I would live in … because …**",
      answers: [["If I could live anywhere, I would live in Da Nang because it is near the sea.", "Nếu được sống ở bất cứ đâu, tôi sẽ sống ở Đà Nẵng vì gần biển."], ["I would live in Tokyo. It is clean and the food is great.", "Tôi sẽ sống ở Tokyo. Thành phố sạch và đồ ăn rất ngon."]] },
    { q: "Can you come to my birthday party on Friday night?", vi: "Tối thứ Sáu bạn đến dự tiệc sinh nhật tôi được không?", hint: "Nhận lời có điều kiện bằng loại 1 (**I will come if…**), hoặc từ chối khéo bằng **I wish I could…, but…**",
      answers: [["Sure! I will come if I finish work before seven.", "Chắc chắn rồi! Tôi sẽ đến nếu làm xong trước bảy giờ."], ["I wish I could come, but I have to visit my grandmother.", "Ước gì tôi đến được, nhưng tôi phải đi thăm bà."]] },
    { q: "Your colleague is going out. What do you want to tell her if she sees the manager?", vi: "Đồng nghiệp của bạn sắp ra ngoài. Bạn muốn dặn gì nếu cô ấy gặp quản lý?", hint: "Câu mệnh lệnh với if: **If you see …, tell / ask him …**",
      answers: [["If you see the manager, please tell him I am in the meeting room.", "Nếu gặp quản lý, nhờ bạn bảo anh ấy là tôi đang ở phòng họp."], ["If you see him, ask him to sign this paper, please.", "Nếu gặp anh ấy, nhờ bạn bảo anh ấy ký giấy này nhé."]] }
  ],
  exercises: [
    { title: "Phần 1: Chia động từ trong ngoặc", items: [
      { q: "If you heat ice, it ___. (melt)", a: ["melts"], hint: "loại 0: sự thật" },
      { q: "When I am tired, I ___ a cup of coffee. (drink)", a: ["drink"], hint: "loại 0: thói quen" },
      { q: "If it rains tomorrow, we ___ at home. (stay)", a: ["will stay", "'ll stay"], hint: "loại 1: sẽ (khá chắc chắn)" },
      { q: "If she ___ the bus, she will be late for work. (miss)", a: ["misses"], hint: "loại 1: vế if, chủ ngữ she" },
      { q: "If you ___, you will miss the train. (not / hurry)", a: ["do not hurry", "don't hurry"], hint: "loại 1: vế if, dạng phủ định" },
      { q: "If I ___ a lot of money, I would travel around the world. (have)", a: ["had"], hint: "loại 2: tưởng tượng" },
      { q: "If I were you, I ___ see a doctor.", a: ["would", "'d"], hint: "dạng của will trong câu tưởng tượng" },
      { q: "If I ___ you, I would accept the job. (be)", a: ["were"], hint: "dạng chuẩn dùng cho mọi chủ ngữ" },
      { q: "If you see Nam, ___ him to call me. (tell)", a: ["tell"], hint: "câu mệnh lệnh: lời nhờ" },
      { q: "I will not go ___ you come with me.", a: ["unless"], hint: "trừ khi (một từ)" }
    ] },
    { title: "Phần 2: Chọn câu đúng", items: [
      { q: "“Nếu mai trời mưa, tôi sẽ ở nhà.”", options: ["If it will rain tomorrow, I will stay at home.", "If it rains tomorrow, I will stay at home.", "If it rains tomorrow, I stay at home tomorrow."], a: 1, why: "Loại 1: **if + hiện tại đơn**, vế kết quả dùng **will**. Không đặt will sau if." },
      { q: "Bạn không có xe hơi và đang tưởng tượng:", options: ["If I have a car, I will drive to work.", "If I had a car, I would drive to work.", "If I had a car, I will drive to work."], a: 1, why: "Chuyện không có thật bây giờ dùng loại 2: **had … would**." },
      { q: "Bạn muốn khuyên bạn mình đi ngủ sớm:", options: ["If I were you, I would go to bed early.", "If I am you, I would go to bed early.", "If I were you, I will go to bed early."], a: 0, why: "Lời khuyên: **If I were you, I would + động từ nguyên mẫu**." },
      { q: "Chọn câu dùng dấu phẩy đúng:", options: ["Call me, if you need help.", "If you need help call me.", "If you need help, call me."], a: 2, why: "**If đứng đầu câu** thì có dấu phẩy giữa hai vế; if đứng giữa câu thì không." },
      { q: "“Ước gì tôi đến được, nhưng tôi phải làm việc.”", options: ["I wish I can come, but I have to work.", "I wish I could come, but I have to work.", "I would like come, but I have to work."], a: 1, why: "Điều ước không làm được bây giờ: **I wish I could + động từ nguyên mẫu**." },
      { q: "“Tôi sẽ đi, trừ khi trời mưa.”", options: ["I will go unless it rains.", "I will go unless it does not rain.", "I will go unless it will rain."], a: 0, why: "**Unless** đã mang nghĩa “nếu không”, và đi với hiện tại đơn." },
      { q: "Chắc chắn bạn sẽ về nhà tối nay. Câu nào tự nhiên nhất?", options: ["If I get home, I will text you.", "When I get home, I will text you.", "When I will get home, I text you."], a: 1, why: "Chuyện chắc chắn xảy ra dùng **when**, và sau when dùng hiện tại đơn." },
      { q: "Chọn câu nói về sự thật chung:", options: ["If you mix red and blue, you get purple.", "If you mixed red and blue, you would get purple.", "If you will mix red and blue, you get purple."], a: 0, why: "Sự thật luôn đúng dùng loại 0: **hiện tại đơn ở cả hai vế**." }
    ] }
  ],
  vocab: [["if", "nếu"], ["when", "khi, mỗi khi"], ["unless", "trừ khi, nếu không"], ["as soon as", "ngay khi"], ["will / won’t", "sẽ / sẽ không"], ["might", "có lẽ sẽ"], ["would / wouldn’t", "sẽ / sẽ không (trong tưởng tượng)"], ["could", "có thể (trong tưởng tượng)"], ["If I were you, I would…", "Nếu tôi là bạn, tôi sẽ…"], ["What would you do if…?", "Bạn sẽ làm gì nếu…?"], ["What if…?", "Nếu … thì sao?"], ["I wish I could…", "Ước gì tôi có thể…"], ["I would like to…", "Tôi muốn… (lịch sự)"], ["win the lottery", "trúng xổ số"]],
  tips: [
    "Mỗi sáng xem dự báo thời tiết và nói một câu loại 1: “If it rains today, I will take a raincoat.”",
    "Tập một câu “**What would you do if…?**” mỗi ngày với bạn học: trúng xổ số, biết bay, được nghỉ một tháng… rồi trả lời bằng **would**.",
    "Khi bạn bè kể chuyện khó, thử khuyên bằng “**If I were you, I would…**” thay vì “You must…”.",
    "Mỗi lần định nói “if … will”, dừng lại và tự sửa: **if + hiện tại đơn**, will ở vế sau.",
    "Viết ba câu về thói quen bằng “**When I …, I …**” (khi buồn, khi đói, khi rảnh) và đọc to."
  ]
};
