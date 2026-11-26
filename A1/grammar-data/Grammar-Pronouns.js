/* Ngữ pháp nền tảng: Đại từ (I, me, my, mine, myself). Hiển thị bởi grammar-lesson.js. */
window.A1_GRAMMAR = {
  icon: "👤",
  short: "Đại từ",
  hero: ["Đại từ trong giao tiếp", "I · me · my · mine · myself"],
  desc: "Tiếng Việt dùng “tôi” ở mọi vị trí trong câu, nhưng tiếng Anh đổi dạng theo vị trí: **I** khi làm chủ ngữ, **me** khi đứng sau động từ, **my** trước danh từ, **mine** khi đứng một mình. Học xong bài này, bạn sẽ hết nói “Give it to she” hay “This is my”, và nói chuyện về người khác tự nhiên hơn.",
  chips: ["Chủ ngữ và tân ngữ", "Sở hữu", "Phản thân", "Không lặp lại tên", "Luyện nói"],
  goal: [
    "Chọn đúng **I hay me**, **he hay him**, **they hay them** theo vị trí trong câu.",
    "Phân biệt **my** (đứng trước danh từ) và **mine** (đứng một mình): “my bag” và “It is mine”.",
    "Hỏi và trả lời “Whose … is this?” khi tìm chủ nhân của đồ vật.",
    "Dùng **myself, yourself** khi tự làm một việc.",
    "Dùng **it, them, one** để không phải nhắc lại tên người, tên vật khi kể chuyện."
  ],
  sections: [
    { nav: "👤 Chủ ngữ và tân ngữ", title: "Đại từ chủ ngữ và đại từ tân ngữ", sub: "I làm việc, còn me nhận việc: chọn theo vị trí trong câu",
      intro: [
        "Mỗi người trong câu có hai dạng. **Đại từ chủ ngữ** đứng trước động từ, là người làm hành động. **Đại từ tân ngữ** đứng sau động từ hoặc sau giới từ (to, for, with, at…), là người nhận hành động.",
        "Bảng dưới đây là xương sống của cả bài. Hãy đọc to từng hàng theo chiều ngang: I, me, my, mine, myself."
      ],
      table: { head: ["Chủ ngữ", "Tân ngữ", "Tính từ sở hữu", "Đại từ sở hữu", "Phản thân", "Nghĩa"], say: [0, 1, 2, 3, 4],
        rows: [
          ["I", "me", "my", "mine", "myself", "tôi"],
          ["you", "you", "your", "yours", "yourself", "bạn (một người)"],
          ["he", "him", "his", "his", "himself", "anh ấy, ông ấy"],
          ["she", "her", "her", "hers", "herself", "cô ấy, bà ấy"],
          ["it", "it", "its", "(không dùng)", "itself", "nó (vật, con vật)"],
          ["we", "us", "our", "ours", "ourselves", "chúng tôi, chúng ta"],
          ["you", "you", "your", "yours", "yourselves", "các bạn"],
          ["they", "them", "their", "theirs", "themselves", "họ, chúng nó"]
        ] },
      formulas: [
        { f: "Đại từ chủ ngữ + động từ",
          mean: "**người làm hành động**: đứng đầu câu, trước động từ.",
          parts: [["I / you / we / they", "đi với động từ nguyên mẫu ở thì hiện tại đơn: I work, they live."], ["he / she / it", "động từ thêm **-s / -es** ở thì hiện tại đơn: he works, she watches."]],
          use: "mọi câu kể về việc ai đó làm. Câu tiếng Anh **luôn cần chủ ngữ**, kể cả khi tiếng Việt bỏ đi (“Đi rồi.” → “He has gone.”).",
          note: "Tiếng Việt hay bỏ chủ ngữ: “Thích lắm!” Nhưng tiếng Anh phải nói đủ: “**I** like it a lot!”",
          ex: [["I live in Hanoi.", "Tôi sống ở Hà Nội."], ["She works at a bank.", "Cô ấy làm ở ngân hàng."], ["We are classmates.", "Chúng tôi là bạn cùng lớp."], ["Do they speak English?", "Họ có nói tiếng Anh không?"]] },
        { f: "động từ / giới từ + đại từ tân ngữ",
          mean: "**người nhận hành động**: đứng sau động từ (call, help, love…) hoặc sau giới từ (to, for, with, at…).",
          parts: [["me / him / her / us / them", "dạng đổi khác hẳn chủ ngữ, phải học thuộc."], ["you / it", "giống hệt dạng chủ ngữ, không đổi."]],
          use: "sau các động từ như call, help, tell, ask, meet, love, give và sau mọi giới từ: with me, for her, to them, at us.",
          note: "Đây là lỗi hay gặp nhất: “Call **I**” hay “with **she**”. Mẹo: nếu đứng **sau** động từ hoặc giới từ thì dùng dạng tân ngữ.",
          ex: [["Can you help me?", "Bạn giúp tôi được không?"], ["I will call him tonight.", "Tối nay tôi sẽ gọi cho anh ấy."], ["Do you want to come with us?", "Bạn có muốn đi cùng chúng tôi không?"], ["I gave them my phone number.", "Tôi đã cho họ số điện thoại của tôi."]] }
      ],
      mistakes: [
        ["Me and my sister like coffee.", "My sister and I like coffee.", "Ở vị trí chủ ngữ dùng **I**, và lịch sự thì nhắc người khác trước, mình sau."],
        ["Please call I later.", "Please call me later.", "Sau động từ call phải dùng đại từ tân ngữ **me**."],
        ["I went to the cinema with she.", "I went to the cinema with her.", "Sau giới từ with dùng dạng tân ngữ **her**."]
      ],
      talk: { title: "TÌNH HUỐNG: HẸN ĐI CHƠI CÙNG BẠN", turns: [
        ["A", "Are you free on Saturday? We are going to the beach.", "Thứ Bảy bạn rảnh không? Bọn mình định đi biển."],
        ["B", "Who is going with you?", "Ai đi cùng các bạn thế?"],
        ["A", "Lan and her brother. You know him, right?", "Lan và anh trai cô ấy. Bạn biết anh ấy mà, đúng không?"],
        ["B", "Yes, I met him last month. I would love to come with you.", "Ừ, mình gặp anh ấy tháng trước rồi. Mình rất muốn đi cùng các bạn."],
        ["A", "Great! I will send them a message and tell them.", "Tuyệt! Mình sẽ nhắn tin báo cho họ."]
      ] },
      tip: "Hỏi “Ai làm?” thì là chủ ngữ (I, he, she, they). Hỏi “Làm gì ai? Với ai? Cho ai?” thì là tân ngữ (me, him, her, them)." },

    { nav: "🏷️ Sở hữu", title: "Sở hữu: my và mine, Whose…?", sub: "Của tôi đứng trước danh từ, hay đứng một mình?",
      intro: ["Tiếng Việt nói “cái túi **của tôi**” và “cái này **của tôi**” bằng cùng một từ. Tiếng Anh tách làm hai: **my** khi phía sau có danh từ, **mine** khi đứng một mình, không có danh từ theo sau."],
      formulas: [
        { f: "my / your / his / her / its / our / their + danh từ",
          mean: "**của tôi, của bạn, của anh ấy…** đứng **trước** một danh từ.",
          parts: [["my, your, our, their", "của tôi, của bạn, của chúng tôi, của họ."], ["his / her", "của anh ấy / của cô ấy: chọn theo **người sở hữu**, không theo đồ vật. “Her brother” là anh trai **của cô ấy**."], ["its", "của nó (vật, con vật). Không có dấu phẩy trên: its, khác với it’s = it is."]],
          use: "giới thiệu gia đình, đồ đạc, công việc: my mother, her job, their house. Phía sau **bắt buộc** có danh từ.",
          note: "Người Việt hay nhầm his và her vì tiếng Việt không phân biệt. Hỏi lại: đồ này của ai? Của đàn ông thì **his**, của phụ nữ thì **her**.",
          ex: [["This is my brother, Minh.", "Đây là anh trai tôi, Minh."], ["Her husband is a doctor.", "Chồng cô ấy là bác sĩ."], ["What is your phone number?", "Số điện thoại của bạn là gì?"], ["The dog is eating its food.", "Con chó đang ăn đồ ăn của nó."]] },
        { f: "mine / yours / his / hers / ours / theirs (đứng một mình)",
          mean: "**cái của tôi, cái của bạn…** thay cho cả cụm “tính từ sở hữu + danh từ” đã rõ, để không nhắc lại danh từ.",
          parts: [["mine", "= my + danh từ: “This bag is mine” = “This is my bag”."], ["yours / hers / ours / theirs", "thêm **-s** vào your, her, our, their."], ["his", "giữ nguyên dạng his."]],
          use: "khi danh từ đã được nhắc hoặc đã rõ, thường ở cuối câu: “Is this yours?”, “Mine is blue.”",
          note: "Không nói “This is my.” và không thêm danh từ sau mine (không nói “mine bag”).",
          ex: [["Is this umbrella yours?", "Cái ô này có phải của bạn không?"], ["No, it is not mine. Mine is red.", "Không, không phải của tôi. Cái của tôi màu đỏ."], ["That seat is hers.", "Ghế đó là của cô ấy."], ["Their house is big, but ours is small.", "Nhà họ to, còn nhà chúng tôi nhỏ."]] },
        { f: "Whose + danh từ + is this / are these?",
          mean: "**… này là của ai?** dùng để hỏi chủ nhân của một đồ vật.",
          parts: [["Whose … is this?", "hỏi một vật."], ["Whose … are these?", "hỏi nhiều vật."], ["It is + tên + ’s / It is mine", "cách trả lời."]],
          use: "khi thấy đồ để quên, khi dọn dẹp, khi phân chia đồ đạc.",
          note: "Whose (của ai) đọc giống who’s (= who is) nhưng nghĩa khác hẳn. “Who’s this?” là “Đây là ai?”.",
          ex: [["Whose phone is this?", "Điện thoại này của ai vậy?"], ["It is Nam’s.", "Của Nam."], ["Whose shoes are these?", "Đôi giày này của ai?"], ["They are mine. Thank you!", "Của tôi. Cảm ơn bạn!"]] }
      ],
      mistakes: [
        ["This is my.", "This is mine.", "Không có danh từ phía sau thì dùng **mine**."],
        ["Lan loves his mother.", "Lan loves her mother.", "Lan là nữ nên mẹ **của cô ấy** là **her** mother. His/her chọn theo người sở hữu."],
        ["The cat is cleaning it’s paws.", "The cat is cleaning its paws.", "**its** (của nó) không có dấu phẩy trên; it’s = it is."]
      ],
      talk: { title: "TÌNH HUỐNG: ĐỒ ĐỂ QUÊN TRONG LỚP", turns: [
        ["A", "Whose jacket is this? Is it yours?", "Áo khoác này của ai thế? Của bạn à?"],
        ["B", "No, it is not mine. Mine is black.", "Không, không phải của mình. Áo của mình màu đen."],
        ["A", "Maybe it is Linh’s. She always wears a blue jacket.", "Có lẽ của Linh. Cô ấy hay mặc áo khoác xanh."],
        ["B", "Yes, it is hers. I will give it to her tomorrow.", "Đúng, của cô ấy đấy. Mai mình sẽ đưa cho cô ấy."]
      ] },
      tip: "**my + danh từ**, còn **mine = my + danh từ** gộp lại. Thấy phía sau trống không thì dùng mine." },

    { nav: "🪞 Phản thân", title: "Đại từ phản thân: myself, yourself…", sub: "Tự mình làm, tự làm cho mình",
      intro: ["Đại từ phản thân dùng khi **người làm và người nhận là một**, hoặc để nhấn mạnh “tự mình làm, không ai giúp”."],
      formulas: [
        { f: "chủ ngữ + động từ + myself / yourself / himself…",
          mean: "**tự … chính mình**: người làm hành động cũng là người nhận hành động.",
          parts: [["myself / yourself / himself / herself / itself", "số ít: thêm **-self**."], ["ourselves / yourselves / themselves", "số nhiều: thêm **-selves**."]],
          use: "với các động từ như hurt (làm đau), cut (cắt), enjoy (tận hưởng), introduce (giới thiệu), look at (nhìn).",
          note: "“Enjoy yourself!” nghĩa là “Chơi vui nhé!”, một câu chúc rất hay dùng.",
          ex: [["Let me introduce myself. I am Hoa.", "Cho phép tôi tự giới thiệu. Tôi là Hoa."], ["Be careful! Do not hurt yourself.", "Cẩn thận! Đừng để bị đau."], ["Enjoy yourselves at the party!", "Chúc các bạn đi tiệc vui nhé!"], ["He looked at himself in the mirror.", "Anh ấy nhìn mình trong gương."]] },
        { f: "by myself / by yourself… = một mình, tự mình",
          mean: "**một mình, không có ai đi cùng hoặc giúp đỡ**.",
          parts: [["by myself", "một mình tôi (= alone)."], ["myself (cuối câu)", "nhấn mạnh tự tay làm: I made this cake myself."]],
          use: "kể việc tự làm, tự đi, tự sống: live by myself, travel by myself, fix it myself.",
          ex: [["I live by myself in a small flat.", "Tôi sống một mình trong một căn hộ nhỏ."], ["Did you cook this yourself?", "Bạn tự nấu món này à?"], ["She travelled to Da Lat by herself.", "Cô ấy đi Đà Lạt một mình."], ["We painted the room ourselves.", "Chúng tôi tự sơn căn phòng."]] }
      ],
      mistakes: [
        ["I introduce me.", "Let me introduce myself.", "Người làm và người nhận là một nên dùng **myself**."],
        ["He lives by his self.", "He lives by himself.", "Dạng đúng là **himself**, không có “his self”."]
      ],
      talk: { title: "TÌNH HUỐNG: LÀM QUEN Ở BỮA TIỆC", turns: [
        ["A", "Hi! Let me introduce myself. I am Tuan.", "Chào bạn! Mình tự giới thiệu nhé. Mình là Tuấn."],
        ["B", "Nice to meet you, Tuan. Did you come here by yourself?", "Rất vui được gặp bạn, Tuấn. Bạn đến đây một mình à?"],
        ["A", "Yes. My friends are busy tonight. Are you enjoying yourself?", "Ừ. Tối nay bạn mình bận. Bạn chơi có vui không?"],
        ["B", "Yes, very much! The food is great. I made the cake myself.", "Vui lắm! Đồ ăn ngon. Bánh ngọt là mình tự làm đấy."]
      ] },
      tip: "Số ít thêm **-self**, số nhiều thêm **-selves**. Chỉ hai từ đặc biệt: him**self** (không phải hisself) và them**selves** (không phải theirselves)." },

    { nav: "🔁 Không lặp lại tên", title: "it, them, one: không lặp lại tên người, tên vật", sub: "Nói tự nhiên như người bản xứ khi kể chuyện",
      intro: ["Khi kể chuyện, người bản xứ không nhắc đi nhắc lại một danh từ. Sau lần đầu, họ thay bằng đại từ. Tiếng Việt cũng có cách này nhưng thường lặp tên nhiều hơn."],
      formulas: [
        { f: "it / them thay cho vật đã nhắc",
          mean: "**nó / chúng** thay cho một vật (it) hoặc nhiều vật (them) vừa nói tới.",
          parts: [["it", "một vật: I bought a book. **It** is interesting."], ["they / them", "nhiều vật: they khi làm chủ ngữ, them khi đứng sau động từ."]],
          use: "kể chuyện mua sắm, ăn uống, khen chê đồ vật.",
          ex: [["I bought a new phone. I love it.", "Tôi mua điện thoại mới. Tôi rất thích nó."], ["These shoes are nice. Can I try them on?", "Đôi giày này đẹp. Tôi thử được không?"], ["Where are my keys? I cannot find them.", "Chìa khóa của tôi đâu rồi? Tôi không tìm thấy."], ["The soup is cold. Can you heat it up?", "Súp nguội rồi. Bạn hâm nóng lại giúp được không?"]] },
        { f: "one / ones thay cho danh từ đếm được",
          mean: "**cái / những cái** cùng loại, khi chọn giữa nhiều món.",
          parts: [["one", "một cái: the red one, a bigger one."], ["ones", "nhiều cái: the black ones."]],
          use: "khi chọn lựa, so sánh: “Which one?”, “I will take the blue one.”",
          note: "it chỉ **đúng cái đó**; one chỉ **một cái cùng loại**. “I lost my pen. I need to buy a new **one**.” (một cây bút khác).",
          ex: [["Which one do you like?", "Bạn thích cái nào?"], ["I will take the small one.", "Tôi lấy cái nhỏ."], ["These cups are dirty. Can I have clean ones?", "Mấy cái cốc này bẩn. Cho tôi cốc sạch được không?"], ["My bike is old. I want a new one.", "Xe đạp của tôi cũ rồi. Tôi muốn một chiếc mới."]] }
      ],
      mistakes: [
        ["I bought a book. The book is interesting. I like the book.", "I bought a book. It is interesting. I like it.", "Sau lần nhắc đầu tiên, thay bằng **it** để câu tự nhiên hơn."],
        ["I lost my umbrella, so I bought it again.", "I lost my umbrella, so I bought a new one.", "Mua một cái **khác** cùng loại thì dùng **one**, không dùng it."]
      ],
      talk: { title: "TÌNH HUỐNG: CHỌN QUÀ CHO BẠN", turns: [
        ["A", "I want to buy a scarf for my mother. Which one is better?", "Mình muốn mua khăn cho mẹ. Cái nào đẹp hơn?"],
        ["B", "I like the green one. Your mother loves green, right?", "Mình thích cái màu xanh lá. Mẹ bạn thích màu xanh lá mà, đúng không?"],
        ["A", "Yes, she does. But it is a bit expensive.", "Đúng vậy. Nhưng cái đó hơi đắt."],
        ["B", "Then look at these ones. They are cheaper.", "Vậy xem mấy cái này đi. Chúng rẻ hơn."],
        ["A", "Perfect. I will take this one. She will love it.", "Hoàn hảo. Mình lấy cái này. Mẹ sẽ thích lắm."]
      ] },
      tip: "**it** = đúng cái đó; **one** = một cái giống thế. Mất cái nào thì “find **it**”, mua cái khác thì “buy a new **one**”." }
  ],
  speak: [
    { q: "Who do you live with?", vi: "Bạn sống cùng ai?", hint: "Dùng **with + tân ngữ** hoặc **by myself**: I live with my parents. / I live by myself.",
      answers: [["I live with my parents and my younger brother.", "Tôi sống với bố mẹ và em trai."], ["I live by myself in a small apartment.", "Tôi sống một mình trong một căn hộ nhỏ."]] },
    { q: "Tell me about your best friend. What is his or her name?", vi: "Kể về bạn thân của bạn. Bạn ấy tên gì?", hint: "Chọn đúng **his / her** theo bạn của bạn là nam hay nữ, rồi dùng **he / she** ở các câu sau.",
      answers: [["Her name is Mai. She is kind, and I often call her on weekends.", "Bạn ấy tên Mai. Cô ấy tốt bụng, và cuối tuần tôi hay gọi cho cô ấy."], ["His name is Duc. He is funny. We play football together.", "Bạn ấy tên Đức. Cậu ấy vui tính. Chúng tôi chơi bóng cùng nhau."]] },
    { q: "Whose phone is this? Is it yours?", vi: "Điện thoại này của ai? Của bạn à?", hint: "Trả lời bằng **mine / yours / hers** hoặc **tên + ’s**.",
      answers: [["Yes, it is mine. Thank you!", "Đúng rồi, của tôi. Cảm ơn bạn!"], ["No, it is not mine. I think it is Lan’s.", "Không, không phải của tôi. Tôi nghĩ là của Lan."]] },
    { q: "Do you usually cook by yourself?", vi: "Bạn có hay tự nấu ăn không?", hint: "Dùng **by myself** hoặc **myself**, và **for + tân ngữ** (for my family, for them).",
      answers: [["Yes, I usually cook by myself. I cook for my family on Sundays.", "Có, tôi thường tự nấu. Chủ nhật tôi nấu cho cả nhà."], ["Not really. My mother cooks for us.", "Không hẳn. Mẹ tôi nấu cho chúng tôi."]] },
    { q: "What did you buy last week? Do you like it?", vi: "Tuần trước bạn mua gì? Bạn có thích nó không?", hint: "Nhắc tên đồ vật một lần, sau đó dùng **it** hoặc **them**.",
      answers: [["I bought a pair of shoes. I like them because they are comfortable.", "Tôi mua một đôi giày. Tôi thích chúng vì đi rất êm."], ["I bought a new bag. I love it!", "Tôi mua một chiếc túi mới. Tôi rất thích nó!"]] },
    { q: "Can you introduce yourself in two sentences?", vi: "Bạn tự giới thiệu trong hai câu được không?", hint: "Bắt đầu bằng **Let me introduce myself**, rồi dùng **I / my**.",
      answers: [["Let me introduce myself. I am Nam, and my job is teaching English.", "Cho phép tôi tự giới thiệu. Tôi là Nam, công việc của tôi là dạy tiếng Anh."]] }
  ],
  exercises: [
    { title: "Phần 1: Điền đại từ đúng", items: [
      { q: "Can you help ___? I am lost.", a: ["me"], hint: "tôi" },
      { q: "___ is my sister. ___ name is Linh.", a: ["she her", "she, her"], hint: "gõ hai từ, cách nhau bởi dấu cách" },
      { q: "This is not my pen. Is it ___?", a: ["yours"], hint: "của bạn" },
      { q: "I called Nam, but ___ did not answer.", a: ["he"], hint: "anh ấy" },
      { q: "We are going to the park. Do you want to come with ___?", a: ["us"], hint: "chúng tôi" },
      { q: "The children are hungry. Please give ___ some bread.", a: ["them"], hint: "chúng nó" },
      { q: "Let me introduce ___.", a: ["myself"], hint: "chính tôi" },
      { q: "The dog wagged ___ tail.", a: ["its"], hint: "của nó" }
    ] },
    { title: "Phần 2: Chọn câu đúng", items: [
      { q: "Chọn câu đúng:", options: ["Me and Lan are friends.", "Lan and I are friends.", "Lan and me are friends."], a: 1, why: "Ở vị trí chủ ngữ dùng **I**, và nhắc người khác trước." },
      { q: "“Cái túi này của tôi.”", options: ["This bag is my.", "This bag is mine.", "This bag is me."], a: 1, why: "Đứng một mình dùng **mine**." },
      { q: "Chị Hoa yêu chồng của chị ấy.", options: ["Hoa loves his husband.", "Hoa loves her husband.", "Hoa loves she husband."], a: 1, why: "Chồng **của chị ấy** (Hoa là nữ) → **her** husband." },
      { q: "Tôi làm mất bút, tôi cần mua một cây khác.", options: ["I need to buy it.", "I need to buy a new one.", "I need to buy them."], a: 1, why: "Một cái khác cùng loại dùng **one**." },
      { q: "Chọn câu hỏi đúng:", options: ["Who’s bag is this?", "Whose bag is this?", "Whose is bag this?"], a: 1, why: "Hỏi của ai dùng **Whose + danh từ**; who’s = who is." },
      { q: "Anh ấy sống một mình.", options: ["He lives by hisself.", "He lives by himself.", "He lives by him."], a: 1, why: "Dạng đúng là **himself**." }
    ] }
  ],
  vocab: [["I / me / my / mine / myself", "tôi"], ["you / your / yours / yourself", "bạn"], ["he / him / his / himself", "anh ấy"], ["she / her / hers / herself", "cô ấy"], ["it / its / itself", "nó"], ["we / us / our / ours / ourselves", "chúng tôi"], ["they / them / their / theirs / themselves", "họ"], ["whose", "của ai"], ["by myself", "một mình"], ["one / ones", "cái / những cái (cùng loại)"]],
  tips: [
    "Đọc to bảng đại từ theo hàng ngang mỗi sáng: **I, me, my, mine, myself**; **he, him, his, his, himself**… như đọc bảng cửu chương.",
    "Khi kể về một người bạn, cố ý chuyển từ tên sang **he / she**, và sang **him / her** khi người đó đứng sau động từ.",
    "Nhìn đồ vật quanh nhà và nói: “This is **my** phone. It is **mine**. That is **my sister’s** bag. It is **hers**.”",
    "Mỗi lần định nói “Me and…” ở đầu câu, dừng lại và đổi thành “… **and I**”."
  ]
};