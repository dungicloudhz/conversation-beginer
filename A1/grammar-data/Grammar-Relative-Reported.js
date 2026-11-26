/* Ngữ pháp nền tảng: Mô tả bằng who / which / that / where / whose và kể lại lời nói (say, tell, asked me to…). Hiển thị bởi grammar-lesson.js. */
window.A1_GRAMMAR = {
  icon: "🗨️",
  short: "Who, which và kể lại lời nói",
  hero: ["Mô tả và kể lại lời nói", "the man who · the place where · She said that…"],
  desc: "Tiếng Việt dùng một chữ “mà” (người **mà**, cái **mà**, nơi **mà**) cho mọi trường hợp, còn tiếng Anh chọn **who** cho người, **which** cho vật, **where** cho nơi chốn. Khi kể lại lời người khác, tiếng Việt chỉ cần “Cô ấy bảo là…”, nhưng tiếng Anh phải chọn **say** hay **tell** và thường lùi thì. Học xong bài này, bạn có thể mô tả cả khi quên tên (“the thing which you use to…”) và kể lại cho người khác điều ai đó đã nói.",
  chips: ["who · which · that", "where · whose", "Mô tả khi quên tên", "say và tell", "Kể lại câu hỏi, lời nhờ"],
  goal: [
    "Mô tả người, đồ vật bằng **who / which / that**: “the woman **who** works at the bank”, “the bag **which** I bought”.",
    "Mô tả nơi chốn và chủ sở hữu bằng **where / whose**: “the café **where** we met”, “my friend **whose** father is a doctor”.",
    "Nói được khi **quên tên** một người, một đồ vật, một nơi: “It is a thing **which** you use to open bottles.”",
    "Chọn đúng **say** hay **tell** và lùi thì khi kể lại: “She **told me** she **was** busy.”",
    "Kể lại câu hỏi và lời nhờ: “He **asked me where I lived**.”, “My boss **asked me to call** him.”"
  ],
  sections: [
    { nav: "👥 who · which · that", title: "Mệnh đề quan hệ với who, which, that", sub: "Người thì who, vật thì which, cả hai đều dùng được that",
      intro: [
        "**Mệnh đề quan hệ** là một cụm nhỏ đứng **ngay sau danh từ** để nói rõ bạn đang nói về người nào, cái nào. Tiếng Việt: “cô gái **mà** sống cạnh nhà tôi”. Tiếng Anh: “the girl **who** lives next to me”.",
        "Bài này chỉ học loại **xác định**: thông tin cần thiết để biết đó là ai, cái gì. Loại này **không có dấu phẩy**. (Loại có dấu phẩy để thêm thông tin phụ, bạn sẽ học ở trình độ cao hơn.)"
      ],
      table: { head: ["Từ", "Thay cho", "Ví dụ", "Nghĩa"], say: [0, 2],
        rows: [
          ["who", "người", "the man who called you", "người đàn ông đã gọi cho bạn"],
          ["which", "vật, con vật", "the phone which I bought", "cái điện thoại tôi đã mua"],
          ["that", "người **hoặc** vật (thân mật, rất hay dùng khi nói)", "the film that we watched", "bộ phim chúng ta đã xem"],
          ["where", "nơi chốn", "the restaurant where we met", "nhà hàng nơi chúng ta gặp nhau"],
          ["whose", "của ai (sở hữu)", "the boy whose bike was stolen", "cậu bé bị mất trộm xe đạp"]
        ] },
      formulas: [
        { f: "danh từ chỉ người + who / that + động từ …",
          mean: "**người mà …**: nói rõ bạn đang nói về **người nào**.",
          parts: [["who", "chỉ dùng cho người. Lựa chọn an toàn nhất cho người."], ["that", "dùng cho người cũng được, nghe thân mật hơn: the girl that I met."], ["động từ sau who", "chia theo danh từ đứng trước: the man who **lives**…, the people who **live**…"]],
          use: "giới thiệu, chỉ người trong đám đông, kể về đồng nghiệp, hàng xóm: “Do you know the man who is talking to Lan?”",
          note: "Người Việt hay bỏ who vì tiếng Việt có thể nói “người đàn ông sống cạnh nhà tôi”. Tiếng Anh **phải có who** khi nó làm chủ ngữ: không nói “the man lives next door is a doctor”.",
          ex: [["The man who lives next door is a doctor.", "Người đàn ông sống cạnh nhà tôi là bác sĩ."], ["I have a friend who speaks Japanese.", "Tôi có một người bạn nói được tiếng Nhật."], ["She is the teacher that helped me a lot.", "Cô ấy là giáo viên đã giúp tôi rất nhiều."], ["Do you know anyone who can fix computers?", "Bạn có biết ai sửa được máy tính không?"]] },
        { f: "danh từ chỉ vật + which / that + …",
          mean: "**cái mà …**: nói rõ bạn đang nói về **đồ vật, con vật nào**.",
          parts: [["which", "dùng cho vật, con vật. Nghe hơi trang trọng hơn that một chút."], ["that", "dùng cho vật, là cách người bản xứ nói **nhiều nhất** khi nói chuyện."], ["who", "**không** dùng cho vật. Không nói “the phone who…”."]],
          use: "mua sắm, tìm đồ, khen chê đồ vật, nói về phim, sách, món ăn: “the dress which is in the window”, “the song that you sent me”.",
          note: "Sau which / that **không nhắc lại** đại từ: không nói “the phone which I bought **it**”. Từ which đã thay cho “it” rồi.",
          ex: [["I like the dress which is in the window.", "Tôi thích chiếc váy đang bày trong tủ kính."], ["This is the phone that I bought last week.", "Đây là cái điện thoại tôi mua tuần trước."], ["Where is the book which was on the table?", "Quyển sách để trên bàn đâu rồi?"], ["We do not have a car that is big enough for six people.", "Chúng tôi không có xe nào đủ rộng cho sáu người."]] }
      ],
      mistakes: [
        ["The woman works at the bank is my aunt.", "The woman who works at the bank is my aunt.", "Cụm “works at the bank” mô tả người phụ nữ, nên phải có **who** nối vào."],
        ["I lost the umbrella who you gave me.", "I lost the umbrella which you gave me.", "Cái ô là đồ vật nên dùng **which** hoặc **that**, không dùng who."],
        ["This is the phone which I bought it yesterday.", "This is the phone which I bought yesterday.", "**which** đã thay cho “the phone”, không thêm **it** nữa."]
      ],
      talk: { title: "TÌNH HUỐNG: CHỈ NGƯỜI Ở BỮA TIỆC CÔNG TY", turns: [
        ["A", "Who is the woman who is talking to the boss?", "Người phụ nữ đang nói chuyện với sếp là ai thế?"],
        ["B", "That is Hoa. She is the new manager who started last week.", "Đó là chị Hoa. Chị ấy là quản lý mới, bắt đầu làm từ tuần trước."],
        ["A", "And the man that is wearing a red tie?", "Còn người đàn ông đeo cà vạt đỏ?"],
        ["B", "He is a customer who works for a Japanese company.", "Anh ấy là khách hàng làm cho một công ty Nhật."],
        ["A", "By the way, the cake which you brought is delicious!", "À mà cái bánh bạn mang đến ngon quá!"]
      ] },
      tip: "**Who** = người, **which** = vật, **that** = cả hai. Không chắc thì cứ dùng **that**, gần như lúc nào cũng đúng với loại không dấu phẩy." },

    { nav: "📍 where · whose", title: "where cho nơi chốn, whose cho sở hữu", sub: "the café where we met / my friend whose father is a pilot",
      intro: [
        "**where** nối thêm thông tin về một **nơi chốn**: nơi mà ai đó làm gì. **whose** nghĩa là “**của người đó / của cái đó**”, đứng giữa hai danh từ để nói ai sở hữu cái gì.",
        "Hai từ này giúp bạn kể chuyện quê nhà, chỗ làm, quán ăn quen và giới thiệu bạn bè mà không cần nói nhiều câu ngắn rời rạc."
      ],
      formulas: [
        { f: "danh từ chỉ nơi chốn + where + chủ ngữ + động từ …",
          mean: "**nơi mà …**: mô tả chuyện xảy ra ở một nơi.",
          parts: [["where", "thay cho “ở đó” (there / in it). Sau where là một câu đầy đủ: where **I was born**."], ["which / that + giới từ", "cách khác, dài hơn: the town **which** I grew up **in**. Mới học thì dùng where cho dễ."], ["the place where", "khi không nhớ tên nơi đó: the place where you buy stamps."]],
          use: "kể về quê hương, trường cũ, quán ăn, nơi làm việc: “This is the street where I grew up.”",
          note: "Sau where phải có **chủ ngữ và động từ**. Nếu phía sau chỉ có động từ, dùng which / that: “the restaurant **which** is near my house” (không nói “where is near my house”).",
          ex: [["This is the café where we first met.", "Đây là quán cà phê nơi chúng ta gặp nhau lần đầu."], ["Hue is the city where I was born.", "Huế là thành phố nơi tôi sinh ra."], ["Do you know a shop where I can buy a cheap SIM card?", "Bạn có biết cửa hàng nào tôi có thể mua sim rẻ không?"], ["The office where I work is on the tenth floor.", "Văn phòng nơi tôi làm việc ở tầng mười."]] },
        { f: "danh từ + whose + danh từ + động từ …",
          mean: "**người mà (cái gì đó) của họ …**: nói về thứ mà người hoặc vật đó sở hữu.",
          parts: [["whose", "= his / her / their / its trong câu mô tả: my friend **whose** father is a pilot = my friend; **his** father is a pilot."], ["whose + danh từ", "phía sau whose **luôn có một danh từ**: whose car, whose mother, whose name."]],
          use: "giới thiệu bạn bè, đồng nghiệp bằng một đặc điểm của gia đình, đồ vật: “the girl whose brother plays for the national team”.",
          note: "Người Việt hay nói “my friend **who his** father…” vì dịch từng chữ. Chỉ cần **whose**, không thêm his / her. Và nhớ: whose (của ai) khác who’s (= who is).",
          ex: [["I have a friend whose father is a pilot.", "Tôi có một người bạn có bố là phi công."], ["She is the girl whose bag was stolen on the bus.", "Cô ấy là cô gái bị mất túi trên xe buýt."], ["That is the man whose dog bit me.", "Đó là người đàn ông có con chó đã cắn tôi."], ["Do you know the student whose phone is on the desk?", "Bạn có biết học sinh nào để điện thoại trên bàn không?"]] }
      ],
      mistakes: [
        ["This is the restaurant where is very famous.", "This is the restaurant which is very famous.", "Sau **where** cần chủ ngữ và động từ. Ở đây phía sau chỉ có động từ “is”, nên dùng **which / that**."],
        ["I have a friend who his mother is a singer.", "I have a friend whose mother is a singer.", "“Mà mẹ của bạn ấy” chỉ cần **whose**, không viết who his."],
        ["That is the house where I lived there as a child.", "That is the house where I lived as a child.", "**where** đã có nghĩa “ở đó”, không thêm there."]
      ],
      talk: { title: "TÌNH HUỐNG: DẪN BẠN ĐI THĂM QUÊ", turns: [
        ["A", "This is the village where my grandparents live.", "Đây là ngôi làng nơi ông bà mình sống."],
        ["B", "It is beautiful! What is that building?", "Đẹp quá! Tòa nhà kia là gì vậy?"],
        ["A", "That is the school where my father studied.", "Đó là ngôi trường bố mình đã học."],
        ["B", "And who is that boy?", "Còn cậu bé kia là ai?"],
        ["A", "He is my cousin whose dog follows him everywhere. Look!", "Đó là em họ mình, con chó của nó đi theo nó khắp nơi. Nhìn kìa!"]
      ] },
      tip: "**where** = “nơi mà” + một câu đầy đủ. **whose** = “mà … của người đó” + danh từ. Đọc to: “the place **where I** …”, “the man **whose car** …”." },

    { nav: "🔍 Bỏ that, mô tả khi quên tên", title: "Khi nào bỏ được that / who, và cách mô tả khi quên tên", sub: "the book (that) I bought / It is a thing which you use to…",
      intro: [
        "Khi nói chuyện, người bản xứ rất hay **bỏ who / which / that**: “the book I bought”, “the man I met”. Bạn cần biết quy tắc này để **nghe hiểu**, và có thể dùng để nói nhanh hơn.",
        "Mệnh đề quan hệ còn là “cứu cánh” khi bạn **quên tên** một đồ vật, một người, một nơi. Thay vì im lặng, hãy mô tả: “the thing which…”, “the person who…”, “the place where…”."
      ],
      formulas: [
        { f: "danh từ + (that / who / which) + chủ ngữ + động từ",
          mean: "**bỏ được who / which / that** khi phía sau nó **có một chủ ngữ khác** (nó làm tân ngữ).",
          parts: [["the book (that) I bought", "phía sau có chủ ngữ **I** nên bỏ được that: the book I bought."], ["the man (who) we met", "phía sau có chủ ngữ **we**, bỏ được who: the man we met."], ["the man who lives here", "phía sau là động từ **lives** ngay, **không bỏ được** who."]],
          use: "khi nói nhanh và tự nhiên: “Is this the song you like?”, “The food we ate was great.”",
          note: "Cách kiểm tra: che who / which / that lại. Nếu phía sau còn **chủ ngữ + động từ** (I bought, we met) thì bỏ được. Nếu phía sau chỉ còn động từ (lives, works) thì **phải giữ**.",
          ex: [["The book I bought yesterday is very interesting.", "Quyển sách tôi mua hôm qua rất hay."], ["Is this the song you like?", "Đây có phải bài hát bạn thích không?"], ["The people we met in Hoi An were very friendly.", "Những người chúng tôi gặp ở Hội An rất thân thiện."], ["I did not like the food they served.", "Tôi không thích đồ ăn họ phục vụ."]] },
        { f: "It is a thing / a person / a place + which / who / where …",
          mean: "**mô tả để người khác đoán ra** khi bạn không nhớ hoặc không biết tên.",
          parts: [["a thing which / that you use to + động từ nguyên mẫu", "đồ vật: It is a thing which you use to open bottles."], ["a person who + động từ", "người, nghề nghiệp: a person who repairs cars."], ["a place where + chủ ngữ + động từ", "nơi chốn: a place where you can borrow books."], ["the stuff which / something that", "chất liệu, đồ ăn, thứ không đếm được: the stuff that you put on rice."]],
          use: "khi đi chợ, đi hiệu thuốc, gặp từ khó trong lúc nói chuyện; sau đó hỏi “What is it called?” (Nó gọi là gì?).",
          note: "Người Việt hay im lặng hoặc chuyển sang tiếng Việt khi quên từ. Hãy luyện thói quen mô tả, người nghe gần như luôn đoán ra và nói tên giúp bạn.",
          ex: [["I need the thing which you use to open bottles. What is it called?", "Tôi cần cái dùng để mở chai. Nó gọi là gì nhỉ?"], ["It is a person who checks your eyes.", "Đó là người khám mắt cho bạn."], ["Is there a place where I can change money near here?", "Gần đây có chỗ nào đổi tiền được không?"], ["I forgot the name of the actor who was in that film.", "Tôi quên tên nam diễn viên đóng phim đó."]] }
      ],
      mistakes: [
        ["The man lives next door is friendly.", "The man who lives next door is friendly.", "Phía sau là động từ **lives** ngay, nên **không bỏ được** who."],
        ["I need a thing for open the door.", "I need the thing which you use to open the door.", "Mô tả công dụng: **a thing which you use to + động từ nguyên mẫu**, hoặc a thing **for opening** doors."]
      ],
      talk: { title: "TÌNH HUỐNG: QUÊN TÊN ĐỒ VẬT Ở HIỆU THUỐC", turns: [
        ["A", "Hello. I need the thing which you put on a small cut. I forgot the name.", "Chào chị. Tôi cần cái dùng để dán lên vết đứt nhỏ. Tôi quên tên rồi."],
        ["B", "Oh, a plaster? Here you are.", "À, băng dán cá nhân à? Của anh đây."],
        ["A", "Yes, thank you! And I need the medicine my doctor gave me last time.", "Đúng rồi, cảm ơn chị! Và tôi cần loại thuốc bác sĩ kê cho tôi lần trước."],
        ["B", "Do you have the paper he wrote?", "Anh có tờ giấy bác sĩ viết không?"],
        ["A", "No, but it is the one which helps with headaches.", "Không, nhưng đó là loại giúp giảm đau đầu."]
      ] },
      tip: "Quên từ? Dùng ba khung: “**a thing which** you use to…”, “**a person who**…”, “**a place where**…”. Rồi hỏi: “What is it called?”" },

    { nav: "💬 say và tell", title: "Kể lại lời nói: say và tell, lùi thì", sub: "She said (that) she was tired / She told me (that) she was tired",
      intro: [
        "Khi kể lại cho người khác điều ai đó đã nói, tiếng Anh dùng **say** hoặc **tell** (quá khứ: **said**, **told**). Điểm khác nhau lớn nhất: **tell** luôn cần **người nghe** phía sau (tell me, told her), còn **say** thì không.",
        "Vì lời nói đã xảy ra trong quá khứ, động từ trong câu kể lại thường **lùi một bậc về quá khứ**: am → was, will → would, can → could. Bảng dưới đây là những lần lùi bạn hay dùng nhất."
      ],
      table: { head: ["Lời nói thật", "Kể lại", "Ví dụ lời nói", "Ví dụ kể lại"], say: [2, 3],
        rows: [
          ["am / is", "was", "“I am tired.”", "She said she was tired."],
          ["are", "were", "“We are late.”", "They said they were late."],
          ["hiện tại đơn (like, works)", "quá khứ đơn (liked, worked)", "“I like pho.”", "He said he liked pho."],
          ["will", "would", "“I will call you.”", "He said he would call me."],
          ["can", "could", "“I can help.”", "She said she could help."],
          ["do not / does not", "did not", "“I do not know.”", "He said he did not know."]
        ] },
      formulas: [
        { f: "chủ ngữ + said (that) + câu đã lùi thì",
          mean: "**(ai đó) nói rằng …**: không cần nói ai là người nghe.",
          parts: [["said (that)", "that có thể bỏ khi nói: She said she was busy."], ["said to + người", "nếu muốn thêm người nghe sau say thì phải có **to**: He said to me… (ít dùng hơn told me)."], ["said “…”", "dẫn nguyên câu trong ngoặc kép: She said, “I am busy.”"]],
          use: "kể lại lời của bạn bè, sếp, bác sĩ, tin tức: “The doctor said I needed more rest.”",
          note: "Đừng quên **đổi đại từ** theo người kể: Lan nói “**I** am tired” → “Lan said **she** was tired”. Nếu điều đó **vẫn còn đúng** và bạn kể lại ngay, không lùi thì cũng được: “He said he likes pho.” Mới học thì cứ lùi thì cho an toàn.",
          ex: [["Lan said she was tired.", "Lan nói cô ấy mệt."], ["The doctor said I needed more rest.", "Bác sĩ nói tôi cần nghỉ ngơi nhiều hơn."], ["My boss said the meeting would start at nine.", "Sếp tôi nói cuộc họp sẽ bắt đầu lúc chín giờ."], ["He said he did not like spicy food.", "Anh ấy nói anh ấy không thích đồ cay."]] },
        { f: "chủ ngữ + told + người + (that) + câu đã lùi thì",
          mean: "**(ai đó) bảo / nói với (ai) rằng …**: tell luôn có **người nghe** ngay sau.",
          parts: [["told me / told him / told us", "người nghe đứng **ngay sau told**, không có to: She told me…"], ["tell + người + something", "tell me the truth, tell her a story, tell them the news."], ["say + something", "say hello, say sorry, say yes, say something: những cụm này đi với say."]],
          use: "khi muốn nói rõ ai đã nghe lời đó: “Minh told me he was moving to Da Nang.”",
          note: "Lỗi rất phổ biến: “She said **me**…” hoặc “She told **to me**…”. Nhớ cặp: **say something**, **tell someone something**. Tiếng Việt “nói với tôi” làm người Việt muốn thêm to sau tell.",
          ex: [["Minh told me he was moving to Da Nang.", "Minh bảo tôi là cậu ấy sắp chuyển vào Đà Nẵng."], ["She told us that the shop was closed.", "Cô ấy bảo chúng tôi là cửa hàng đóng cửa rồi."], ["Did he tell you the news?", "Anh ấy có báo tin cho bạn chưa?"], ["I told my mother I would be home late.", "Tôi bảo mẹ là tôi sẽ về muộn."]] }
      ],
      mistakes: [
        ["She said me that she was busy.", "She told me that she was busy.", "Có người nghe (me) ngay sau thì dùng **told**, không dùng said."],
        ["He told to me the truth.", "He told me the truth.", "Sau **tell** đặt người nghe ngay, **không có to**."],
        ["Nam said he will come tomorrow.", "Nam said he would come tomorrow.", "Kể lại lời nói đã qua thì lùi **will → would**."]
      ],
      talk: { title: "TÌNH HUỐNG: KỂ LẠI CUỘC GỌI CỦA BẠN", turns: [
        ["A", "Did Linh call you this morning?", "Sáng nay Linh có gọi cho bạn không?"],
        ["B", "Yes. She told me she was sick.", "Có. Cô ấy bảo mình là cô ấy bị ốm."],
        ["A", "Oh no. Is she coming to class tonight?", "Ôi. Tối nay cô ấy có đi học không?"],
        ["B", "She said she could not come. She said she would rest at home.", "Cô ấy nói không đến được. Cô ấy nói sẽ nghỉ ở nhà."],
        ["A", "Please tell her I hope she feels better soon.", "Nhờ bạn bảo cô ấy là mình mong cô ấy sớm khỏe."]
      ] },
      tip: "**tell** luôn có “ai” đi kèm: **tell me, told her**. **say** thì không: **say that, said hello**. Kể lại thì lùi một bậc: **am → was, will → would, can → could**." },

    { nav: "❓ Kể lại câu hỏi, lời nhờ", title: "Kể lại câu hỏi và lời nhờ", sub: "She asked me where I lived / He asked me to call him",
      intro: [
        "Khi kể lại một **câu hỏi**, bạn dùng **asked** và đưa câu hỏi về **trật tự câu kể**: chủ ngữ đứng trước động từ, không có do / does / did, không có dấu hỏi.",
        "Khi kể lại một **lời nhờ, lời dặn, mệnh lệnh**, bạn dùng **asked / told + người + to + động từ nguyên mẫu**. Đây là mẫu câu rất hay dùng khi chuyển lời ở nơi làm việc và trong gia đình."
      ],
      formulas: [
        { f: "asked (me) + từ để hỏi + chủ ngữ + động từ (đã lùi thì)",
          mean: "**(ai đó) hỏi tôi … ở đâu / khi nào / tại sao …**: kể lại câu hỏi có từ để hỏi.",
          parts: [["where / what / when / why / how", "giữ nguyên từ để hỏi: “Where **do you live**?” → She asked me where **I lived**."], ["chủ ngữ + động từ", "đổi về trật tự câu kể: chủ ngữ đứng trước, **bỏ do / does / did**."], ["wanted to know", "cách nói khác của asked: He wanted to know what time it was."]],
          use: "kể lại phỏng vấn xin việc, cuộc nói chuyện với người lạ, câu hỏi của sếp, của khách hàng.",
          note: "Người Việt hay giữ nguyên trật tự câu hỏi: “She asked me where **did I live**.” Câu kể lại **không còn là câu hỏi**, nên không đảo, không có did, không có dấu hỏi.",
          ex: [["She asked me where I lived.", "Cô ấy hỏi tôi sống ở đâu."], ["The interviewer asked me why I wanted the job.", "Người phỏng vấn hỏi tôi tại sao muốn công việc này."], ["My mother asked me what time I would come home.", "Mẹ hỏi tôi mấy giờ về nhà."], ["He asked me how old I was.", "Anh ấy hỏi tôi bao nhiêu tuổi."]] },
        { f: "asked (me) + if / whether + chủ ngữ + động từ (đã lùi thì)",
          mean: "**(ai đó) hỏi tôi có … không**: kể lại câu hỏi có hoặc không.",
          parts: [["if", "nghĩa là “có … không”, dùng nhiều nhất: “Are you free?” → He asked me **if I was** free."], ["whether", "cùng nghĩa if, nghe trang trọng hơn một chút."]],
          use: "chuyển lời hỏi về lịch hẹn, ý kiến, sự đồng ý: “She asked if we could meet on Friday.”",
          note: "Câu hỏi có hoặc không **không có từ để hỏi**, nên bạn phải **thêm if**. Không nói “He asked me was I free.”",
          ex: [["He asked me if I was free on Saturday.", "Anh ấy hỏi tôi thứ Bảy có rảnh không."], ["She asked if we could meet on Friday.", "Cô ấy hỏi chúng ta có thể gặp vào thứ Sáu không."], ["My friend asked me if I liked the film.", "Bạn tôi hỏi tôi có thích bộ phim không."], ["The waiter asked us whether we wanted some water.", "Người phục vụ hỏi chúng tôi có muốn uống nước không."]] },
        { f: "asked / told + người + (not) to + động từ nguyên mẫu",
          mean: "**(ai đó) nhờ / bảo tôi (đừng) làm gì**: kể lại lời nhờ và lời dặn.",
          parts: [["asked me to…", "**nhờ**, lịch sự: “Can you call me?” → He asked me to call him."], ["told me to…", "**bảo, dặn**, mạnh hơn: “Wait here.” → She told me to wait."], ["told me not to…", "**dặn đừng**: “Don’t be late.” → He told me not to be late. **not** đứng trước to."]],
          use: "chuyển lời của sếp, của bác sĩ, của bố mẹ: “The doctor told me to drink more water.”",
          note: "Người Việt hay viết “He told me **don’t** be late” vì dịch thẳng. Phải đổi thành **not to**: “He told me **not to** be late.”",
          ex: [["My boss asked me to call him after lunch.", "Sếp nhờ tôi gọi cho ông ấy sau bữa trưa."], ["The guard told us to wait outside.", "Bác bảo vệ bảo chúng tôi đợi ở ngoài."], ["The doctor told me to drink more water.", "Bác sĩ dặn tôi uống nhiều nước hơn."], ["My mother told me not to come home late.", "Mẹ dặn tôi đừng về muộn."]] }
      ],
      mistakes: [
        ["She asked me where did I live.", "She asked me where I lived.", "Kể lại câu hỏi thì dùng **trật tự câu kể**: chủ ngữ + động từ, bỏ did."],
        ["He asked me was I hungry.", "He asked me if I was hungry.", "Câu hỏi có hoặc không phải thêm **if**, và chủ ngữ đứng trước động từ."],
        ["The teacher told us don’t talk.", "The teacher told us not to talk.", "Lời dặn “đừng” kể lại bằng **told + người + not to + động từ nguyên mẫu**."]
      ],
      talk: { title: "TÌNH HUỐNG: KỂ VỀ BUỔI PHỎNG VẤN XIN VIỆC", turns: [
        ["A", "How was your job interview?", "Buổi phỏng vấn của bạn thế nào?"],
        ["B", "Good, I think. They asked me why I wanted to work there.", "Mình nghĩ là ổn. Họ hỏi mình tại sao muốn làm ở đó."],
        ["A", "What else did they ask?", "Họ còn hỏi gì nữa?"],
        ["B", "They asked me if I could speak English, and the manager asked me to introduce myself in English.", "Họ hỏi mình có nói được tiếng Anh không, và quản lý nhờ mình tự giới thiệu bằng tiếng Anh."],
        ["A", "Did they say when they would call you?", "Họ có nói khi nào gọi cho bạn không?"],
        ["B", "They told me to wait for an email next week.", "Họ bảo mình chờ email vào tuần sau."]
      ] },
      tip: "Kể lại câu hỏi = **asked + (từ để hỏi hoặc if) + câu kể**. Kể lại lời nhờ = **asked / told + người + to + động từ**. Ôn cách đặt câu hỏi thật ở trang Câu hỏi." }
  ],
  speak: [
    { q: "Can you describe a person who is very important to you?", vi: "Bạn mô tả một người rất quan trọng với bạn được không?", hint: "Dùng **a person who …** hoặc **someone whose …**: My mother is a person who…",
      answers: [["My mother is a person who always helps other people.", "Mẹ tôi là người luôn giúp đỡ người khác."], ["My best friend is someone who makes me laugh every day.", "Bạn thân tôi là người làm tôi cười mỗi ngày."]] },
    { q: "Tell me about the place where you grew up.", vi: "Kể cho tôi về nơi bạn lớn lên.", hint: "Dùng **the place / the town where I …** và **which** cho đồ vật, công trình.",
      answers: [["I grew up in a small town where everyone knows each other.", "Tôi lớn lên ở một thị trấn nhỏ nơi mọi người đều quen nhau."], ["It is a village which is famous for its rice fields.", "Đó là một ngôi làng nổi tiếng với những cánh đồng lúa."]] },
    { q: "What is something that you use every day?", vi: "Thứ gì bạn dùng mỗi ngày?", hint: "Dùng **something that / a thing which I use to …**",
      answers: [["My phone is something that I use all the time.", "Điện thoại là thứ tôi dùng suốt ngày."], ["My motorbike is the thing which I use to go to work.", "Xe máy là thứ tôi dùng để đi làm."]] },
    { q: "Oh, I forgot the word. What do you call the person who cuts hair?", vi: "Ôi, tôi quên từ rồi. Người cắt tóc gọi là gì nhỉ?", hint: "Trả lời rồi tự hỏi lại một từ bạn hay quên bằng **a person who / a thing which / a place where …**",
      answers: [["It is a hairdresser. And what do you call the place where you buy medicine?", "Là hairdresser. Còn nơi mua thuốc gọi là gì nhỉ?"], ["A barber! I always forget the name of the thing which you use to dry your hair.", "Barber! Tôi luôn quên tên cái dùng để sấy tóc."]] },
    { q: "Do you have a friend whose job is interesting?", vi: "Bạn có người bạn nào có công việc thú vị không?", hint: "Dùng **I have a friend whose job / father / house …**",
      answers: [["Yes, I have a friend whose job is to test video games.", "Có, tôi có một người bạn có công việc là thử trò chơi điện tử."], ["I have a cousin whose husband is a chef in a big hotel.", "Tôi có một chị họ có chồng là đầu bếp ở một khách sạn lớn."]] },
    { q: "What did your boss or teacher say to you yesterday?", vi: "Hôm qua sếp hoặc giáo viên đã nói gì với bạn?", hint: "Kể lại bằng **He / She said (that) …** hoặc **told me (that) …**, nhớ lùi thì.",
      answers: [["My teacher said my pronunciation was better.", "Giáo viên nói phát âm của tôi đã tốt hơn."], ["My boss told me the meeting would be on Thursday.", "Sếp bảo tôi cuộc họp sẽ vào thứ Năm."]] },
    { q: "What questions did people ask you when you first met them?", vi: "Khi mới gặp, người ta đã hỏi bạn những câu gì?", hint: "Kể lại câu hỏi: **They asked me where / what / how … + chủ ngữ + động từ** hoặc **asked me if …**",
      answers: [["They asked me where I worked and how old I was.", "Họ hỏi tôi làm ở đâu và bao nhiêu tuổi."], ["Someone asked me if I was married.", "Có người hỏi tôi đã kết hôn chưa."]] },
    { q: "What did your parents often tell you to do when you were a child?", vi: "Hồi nhỏ bố mẹ hay dặn bạn làm gì?", hint: "Dùng **told me to / told me not to + động từ nguyên mẫu**.",
      answers: [["My mother told me to study hard and to help my sister.", "Mẹ dặn tôi học chăm và giúp em gái."], ["My father told me not to play outside after dark.", "Bố dặn tôi không chơi ngoài trời khi trời tối."]] }
  ],
  exercises: [
    { title: "Phần 1: Điền who, which, where hoặc whose", items: [
      { q: "The man ___ lives next door is a doctor.", a: ["who", "that"], hint: "người" },
      { q: "This is the phone ___ I bought last week.", a: ["which", "that"], hint: "vật" },
      { q: "Hue is the city ___ I was born.", a: ["where"], hint: "nơi chốn" },
      { q: "I have a friend ___ father is a pilot.", a: ["whose"], hint: "của bạn ấy" },
      { q: "Is there a shop ___ I can buy a SIM card?", a: ["where"], hint: "nơi mà tôi có thể mua" },
      { q: "She is the girl ___ bag was stolen.", a: ["whose"], hint: "túi của cô ấy" },
      { q: "A dentist is a person ___ looks after your teeth.", a: ["who", "that"], hint: "người" }
    ] },
    { title: "Phần 2: Điền say, tell hoặc lùi thì", items: [
      { q: "She ___ me that she was busy. (say / tell, quá khứ)", a: ["told"], hint: "có người nghe ngay phía sau" },
      { q: "He ___ that he liked Vietnamese coffee. (say / tell, quá khứ)", a: ["said"], hint: "không có người nghe phía sau" },
      { q: "“I will call you.” → Nam said he ___ call me.", a: ["would", "'d"], hint: "will lùi thì" },
      { q: "“I can swim.” → Lan said she ___ swim.", a: ["could"], hint: "can lùi thì" },
      { q: "“I am tired.” → Minh said he ___ tired.", a: ["was"], hint: "am lùi thì" },
      { q: "“Don’t be late.” → My boss told me ___ be late.", a: ["not to"], hint: "hai từ" }
    ] },
    { title: "Phần 3: Chọn câu đúng", items: [
      { q: "“Cô ấy hỏi tôi sống ở đâu.”", options: ["She asked me where did I live.", "She asked me where I lived.", "She asked me where do I live."], a: 1, why: "Kể lại câu hỏi dùng **trật tự câu kể**: where + chủ ngữ + động từ, không có did." },
      { q: "“Anh ấy hỏi tôi có rảnh không.”", options: ["He asked me if I was free.", "He asked me was I free.", "He asked me that I was free."], a: 0, why: "Câu hỏi có hoặc không kể lại bằng **asked + if + chủ ngữ + động từ**." },
      { q: "“Sếp nhờ tôi gọi cho ông ấy.”", options: ["My boss asked me call him.", "My boss asked me calling him.", "My boss asked me to call him."], a: 2, why: "Kể lại lời nhờ: **asked + người + to + động từ nguyên mẫu**." },
      { q: "Chọn câu đúng:", options: ["The restaurant where is near my house is cheap.", "The restaurant which is near my house is cheap.", "The restaurant who is near my house is cheap."], a: 1, why: "Phía sau chỉ có động từ “is” nên dùng **which / that**; where cần chủ ngữ phía sau, who chỉ dùng cho người." },
      { q: "Câu nào **không** bỏ được who / that?", options: ["The man (who) we met was friendly.", "The book (that) I bought is good.", "The woman (who) works here is kind."], a: 2, why: "Sau who là động từ **works** ngay (who làm chủ ngữ) nên phải giữ who." }
    ] }
  ],
  vocab: [["who", "người mà (thay cho người)"], ["which", "cái mà (thay cho vật)"], ["that", "người mà, cái mà (cả người và vật)"], ["where", "nơi mà"], ["whose", "mà … của người đó"], ["a thing which you use to…", "cái dùng để…"], ["the place where…", "nơi mà…"], ["What is it called?", "Nó gọi là gì?"], ["say / said", "nói (không cần người nghe)"], ["tell / told + người", "bảo, nói với ai"], ["asked me if…", "hỏi tôi có … không"], ["asked me to…", "nhờ tôi làm…"], ["told me not to…", "dặn tôi đừng…"]],
  tips: [
    "Chơi trò đoán từ với bạn học: một người mô tả bằng “**It is a thing which… / a person who… / a place where…**”, người kia đoán tên.",
    "Mỗi tối kể lại một câu ai đó đã nói với bạn trong ngày: “My colleague **told me** she **was** going to Da Lat.”",
    "Khi xem ảnh trong điện thoại, chỉ vào từng người và nói: “This is my friend **who**… / **whose**…”, “This is the café **where**…”.",
    "Mỗi lần định nói “**said me**”, đổi ngay thành “**told me**”.",
    "Kể lại một cuộc phỏng vấn hoặc cuộc gọi bằng ba câu: **asked me where…, asked me if…, told me to…**"
  ]
};