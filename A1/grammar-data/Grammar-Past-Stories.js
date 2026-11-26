/* Ngữ pháp nền tảng: Kể chuyện quá khứ (was / were + -ing, when, while, used to, từ nối). Hiển thị bởi grammar-lesson.js. */
window.A1_GRAMMAR = {
  icon: "📖",
  short: "Kể chuyện quá khứ",
  hero: ["Kể chuyện quá khứ thật sinh động", "was doing · when · while · used to"],
  desc: "Khi kể chuyện bằng tiếng Việt, ta chỉ cần nói “lúc đó tôi **đang**…”, “hồi xưa tôi **hay**…”. Tiếng Anh có cấu trúc riêng cho từng ý: **was / were + động từ thêm -ing** cho việc đang diễn ra, **when / while** để nối hai hành động, **used to** cho thói quen ngày xưa. Nắm được chúng, câu chuyện của bạn sẽ có bối cảnh, có diễn biến và nghe sống động hơn hẳn.",
  chips: ["Quá khứ tiếp diễn", "when và while", "Đơn hay tiếp diễn", "used to", "Từ nối kể chuyện"],
  goal: [
    "Nói mình **đang làm gì** vào một thời điểm trong quá khứ: “At eight o’clock I was cooking dinner.”",
    "Kể một việc bị cắt ngang bằng **when** và **while**: “I was walking home when it started to rain.”",
    "Chọn đúng **quá khứ đơn** hay **quá khứ tiếp diễn** khi kể chuyện.",
    "Kể về tuổi thơ và những thói quen đã thay đổi bằng **used to** và **didn’t use to**.",
    "Kể một câu chuyện ngắn có đầu có đuôi với **first, then, after that, suddenly, finally**."
  ],
  sections: [
    { nav: "🎞️ Quá khứ tiếp diễn", title: "Quá khứ tiếp diễn: was / were + động từ thêm -ing", sub: "Lúc đó tôi đang làm gì?",
      intro: [
        "Quá khứ tiếp diễn diễn tả một việc **đang diễn ra** tại một thời điểm trong quá khứ, giống “lúc đó tôi **đang** …” trong tiếng Việt. Nó không cho biết việc đó đã xong hay chưa, mà vẽ ra **khung cảnh** lúc đó.",
        "Công thức chỉ gồm hai phần: **was / were** (đã học ở bài Quá khứ đơn) + **động từ thêm -ing**. Chính tả thêm -ing giống thì hiện tại tiếp diễn: make → making (bỏ e), sit → sitting (gấp đôi phụ âm)."
      ],
      table: { head: ["Chủ ngữ", "Khẳng định", "Phủ định", "Câu hỏi"], say: [1, 2, 3],
        rows: [
          ["I", "I was cooking.", "I wasn’t cooking.", "Was I talking too fast?"],
          ["he / she / it", "She was reading.", "She wasn’t reading.", "Was she reading?"],
          ["you", "You were laughing.", "You weren’t laughing.", "Were you sleeping?"],
          ["we", "We were walking.", "We weren’t walking.", "Were we driving too fast?"],
          ["they", "They were playing.", "They weren’t playing.", "Were they playing?"]
        ] },
      formulas: [
        { f: "chủ ngữ + was / were + động từ thêm -ing",
          mean: "**đang làm gì** tại một thời điểm trong quá khứ.",
          parts: [["was + động từ thêm -ing", "đi với I, he, she, it: I was watching, she was cooking."], ["were + động từ thêm -ing", "đi với you, we, they: they were sleeping, we were working."], ["at eight o’clock last night / at that time / all morning", "các mốc thời gian hay đi kèm: lúc tám giờ tối qua, lúc đó, suốt buổi sáng."]],
          use: "trả lời câu hỏi “Lúc đó bạn đang làm gì?”, hoặc tả khung cảnh mở đầu câu chuyện: “It was raining. People were running.”",
          note: "Người Việt hay quên **was / were**: “At nine I watching TV.” Phải có đủ hai phần: “I **was** watch**ing** TV.”",
          ex: [["At eight o’clock last night, I was cooking dinner.", "Lúc tám giờ tối qua, tôi đang nấu bữa tối."], ["My children were doing their homework.", "Các con tôi đang làm bài tập về nhà."], ["It was raining all morning yesterday.", "Hôm qua trời mưa suốt buổi sáng."], ["We were living in Da Nang at that time.", "Lúc đó chúng tôi đang sống ở Đà Nẵng."]] },
        { f: "wasn’t / weren’t + động từ thêm -ing — Was / Were + chủ ngữ + động từ thêm -ing?",
          mean: "**lúc đó không đang làm gì / lúc đó có đang làm … không?**",
          parts: [["wasn’t / weren’t + động từ thêm -ing", "phủ định: I wasn’t sleeping. I was just resting."], ["Was / Were + chủ ngữ + động từ thêm -ing?", "câu hỏi có hoặc không: Were you driving? Trả lời: Yes, I was. / No, I wasn’t."], ["What were you doing …?", "câu hỏi thông tin quen thuộc nhất: Lúc … bạn đang làm gì?"]],
          use: "hỏi về một thời điểm cụ thể: “What were you doing at ten last night?”, hoặc khi gọi điện mà người kia không nghe máy.",
          note: "Trả lời ngắn dùng was / were, không dùng did: “Were you working?” – “Yes, I **was**.” Câu hỏi cũng không dùng did: không nói “What did you doing?”.",
          ex: [["What were you doing at ten o’clock last night?", "Lúc mười giờ tối qua bạn đang làm gì?"], ["I was watching a film with my sister.", "Tôi đang xem phim với chị gái."], ["Were you sleeping? I called you twice.", "Bạn đang ngủ à? Tôi gọi bạn hai lần."], ["No, I wasn’t sleeping. I was in the shower.", "Không, tôi không ngủ. Tôi đang tắm."]] }
      ],
      mistakes: [
        ["At nine I watching TV.", "At nine I was watching TV.", "Quá khứ tiếp diễn cần đủ **was / were** + động từ thêm -ing."],
        ["They was playing football.", "They were playing football.", "**they** đi với **were**."],
        ["What did you doing at eight o’clock?", "What were you doing at eight o’clock?", "Câu hỏi quá khứ tiếp diễn dùng **were**, không dùng did."]
      ],
      talk: { title: "TÌNH HUỐNG: GỌI ĐIỆN MÀ KHÔNG AI NGHE MÁY", turns: [
        ["A", "I called you three times last night. What were you doing?", "Tối qua mình gọi bạn ba lần. Bạn đang làm gì thế?"],
        ["B", "Sorry! I was taking a shower, and then I was helping my son with his homework.", "Xin lỗi nhé! Mình đang tắm, rồi sau đó mình đang giúp con trai làm bài tập."],
        ["A", "At ten o’clock too?", "Cả lúc mười giờ cũng thế à?"],
        ["B", "At ten I was sleeping on the sofa. I was very tired.", "Lúc mười giờ mình đang ngủ trên ghế sofa. Mình mệt lắm."],
        ["A", "Ah, that is why you didn’t answer!", "À, thảo nào bạn không nghe máy!"],
        ["B", "Yes. Was it something important?", "Ừ. Có chuyện gì quan trọng không?"]
      ] },
      tip: "Quá khứ tiếp diễn giống **một tấm ảnh chụp**: đúng thời điểm đó, ai đang làm gì. Câu hỏi chìa khóa: “What **were** you do**ing**?”" },

    { nav: "🔗 when và while", title: "when và while: nối hai hành động", sub: "Đang làm việc này thì việc kia xảy ra",
      intro: [
        "Khi kể chuyện, ta hay có **một hành động dài** đang diễn ra (quá khứ tiếp diễn) thì **một hành động ngắn** chen vào cắt ngang (quá khứ đơn). Ví dụ: “Tôi **đang đi bộ** về nhà thì trời **đổ mưa**.”",
        "Hai từ nối dùng cho tình huống này là **when** (khi, thì) và **while** (trong khi). Mẹo chung: **when** thường đứng trước hành động ngắn, **while** đứng trước hành động dài."
      ],
      formulas: [
        { f: "quá khứ tiếp diễn + when + quá khứ đơn",
          mean: "**đang … thì …**: hành động dài bị hành động ngắn cắt ngang.",
          parts: [["quá khứ tiếp diễn (was / were + động từ thêm -ing)", "hành động dài, đang diễn ra: I was cooking."], ["when + quá khứ đơn", "hành động ngắn, xảy ra bất ngờ: when the phone rang."]],
          use: "kể sự cố, chuyện bất ngờ: mất đồ, gặp người quen, trời mưa, mất điện.",
          note: "Không dùng quá khứ tiếp diễn cho hành động ngắn: “when the phone **was ringing**” nghe như chuông reo rất lâu. Hành động ngắn dùng quá khứ đơn: “when the phone **rang**”.",
          ex: [["I was cooking when the phone rang.", "Tôi đang nấu ăn thì điện thoại reo."], ["We were having dinner when the lights went out.", "Chúng tôi đang ăn tối thì mất điện."], ["She was walking to work when she saw an old friend.", "Cô ấy đang đi bộ đi làm thì gặp một người bạn cũ."], ["Were you driving when the accident happened?", "Bạn có đang lái xe lúc tai nạn xảy ra không?"]] },
        { f: "While + quá khứ tiếp diễn, quá khứ đơn",
          mean: "**trong khi đang … thì …**: cùng ý cắt ngang, nhưng nhấn mạnh hành động dài.",
          parts: [["while + hành động dài", "While I was waiting for the bus, …"], ["dấu phẩy", "khi while hoặc when đứng **đầu câu**, đặt dấu phẩy sau vế thứ nhất."], ["quá khứ đơn", "hành động ngắn: … it started to rain."]],
          use: "mở đầu câu chuyện bằng bối cảnh: “While I was travelling in Thailand, I lost my passport.”",
          note: "**while** đi với hành động dài (was / were + động từ thêm -ing). Không nói “While the phone rang”; hãy nói “**When** the phone rang”.",
          ex: [["While I was waiting for the bus, it started to rain.", "Trong khi tôi đang đợi xe buýt thì trời bắt đầu mưa."], ["While we were shopping, someone took my wallet.", "Trong lúc chúng tôi đang mua sắm thì có người lấy mất ví của tôi."], ["I met my husband while I was studying in Saigon.", "Tôi gặp chồng tôi khi đang học ở Sài Gòn."], ["While she was cleaning the room, she found an old photo.", "Trong khi dọn phòng, cô ấy tìm thấy một tấm ảnh cũ."]] },
        { f: "While + quá khứ tiếp diễn, quá khứ tiếp diễn",
          mean: "**trong khi … thì …** (cùng lúc): hai hành động dài diễn ra song song.",
          parts: [["vế thứ nhất: was / were + động từ thêm -ing", "While I was cooking, …"], ["vế thứ hai: was / were + động từ thêm -ing", "… my husband was watching TV."]],
          use: "tả khung cảnh nhiều người cùng làm những việc khác nhau: ở nhà, ở quán, ở lớp.",
          note: "Ở đây không có hành động nào cắt ngang, nên **cả hai vế** đều dùng quá khứ tiếp diễn.",
          ex: [["While I was cooking, my husband was watching TV.", "Trong khi tôi nấu ăn thì chồng tôi xem ti vi."], ["While the teacher was talking, the students were taking notes.", "Trong khi cô giáo giảng bài, học sinh ghi chép."], ["My mother was reading while my father was sleeping.", "Mẹ tôi đọc sách trong khi bố tôi ngủ."], ["What were you doing while your friends were playing games?", "Bạn đang làm gì trong khi các bạn của bạn chơi trò chơi?"]] }
      ],
      mistakes: [
        ["I cooked when the phone was ringing.", "I was cooking when the phone rang.", "Hành động dài (nấu ăn) dùng quá khứ tiếp diễn; hành động ngắn (chuông reo) dùng quá khứ đơn."],
        ["While I walked home, I was seeing an accident.", "While I was walking home, I saw an accident.", "Sau **while** là hành động dài (was walking); việc nhìn thấy tai nạn xảy ra nhanh nên dùng quá khứ đơn (saw)."],
        ["I was sleeping, the phone rang.", "I was sleeping when the phone rang.", "Hai vế cần từ nối **when**, không chỉ dùng dấu phẩy."]
      ],
      talk: { title: "TÌNH HUỐNG: KỂ CHUYỆN BỊ MẤT VÍ", turns: [
        ["A", "You look upset. What happened?", "Trông bạn buồn thế. Có chuyện gì vậy?"],
        ["B", "I lost my wallet this morning.", "Sáng nay mình bị mất ví."],
        ["A", "Oh no! How did it happen?", "Ôi không! Sao lại thế?"],
        ["B", "I was getting off the bus when someone pushed me. After that, I couldn’t find my wallet.", "Mình đang xuống xe buýt thì có người xô mình. Sau đó mình không tìm thấy ví nữa."],
        ["A", "Were you holding your bag?", "Lúc đó bạn có đang cầm túi không?"],
        ["B", "No, I wasn’t. While I was talking on the phone, my bag was open behind me.", "Không. Trong khi mình đang nói chuyện điện thoại, túi của mình mở toang ở phía sau."]
      ] },
      tip: "**when + hành động ngắn, while + hành động dài**. Hình dung một đường kẻ dài (đang làm) bị một dấu chấm (chuyện bất ngờ) cắt ngang." },

    { nav: "⚖️ Đơn hay tiếp diễn", title: "Quá khứ đơn hay quá khứ tiếp diễn?", sub: "Bối cảnh dùng tiếp diễn, sự việc chính dùng quá khứ đơn",
      intro: [
        "Khi kể chuyện, hai thì này đi cùng nhau: **quá khứ tiếp diễn** vẽ khung cảnh (lúc đó đang thế nào), **quá khứ đơn** kể các sự việc chính (rồi chuyện gì xảy ra, tiếp theo là gì).",
        "Bảng dưới giúp bạn tự hỏi đúng câu trước khi chọn thì."
      ],
      table: { head: ["Câu hỏi để chọn", "Quá khứ đơn", "Quá khứ tiếp diễn"], say: [],
        rows: [
          ["Hành động thế nào?", "đã xong, trọn vẹn", "đang diễn ra, chưa biết đã xong chưa"],
          ["Vai trò trong câu chuyện", "sự việc chính, nối tiếp nhau", "bối cảnh, khung cảnh"],
          ["Ngắn hay dài?", "thường ngắn: rang, saw, arrived", "thường dài: was raining, were walking"],
          ["Ví dụ", "I read a book yesterday. (đọc xong)", "I was reading a book at nine. (đang đọc dở)"]
        ] },
      formulas: [
        { f: "quá khứ đơn, quá khứ đơn, quá khứ đơn",
          mean: "**làm việc này, rồi làm việc kia**: chuỗi hành động đã xong, theo thứ tự.",
          parts: [["các động từ quá khứ đơn liên tiếp", "I got up, had a shower and went out."], ["and / then", "nối các hành động trong chuỗi."]],
          use: "kể diễn biến chính: buổi sáng của bạn, các bước trong một chuyến đi.",
          note: "Đừng dùng quá khứ tiếp diễn cho chuỗi việc nối tiếp: “I was getting up, I was having a shower” nghe rất lạ. Việc này xong mới đến việc kia: dùng quá khứ đơn.",
          ex: [["I woke up at six, made coffee and read the news.", "Tôi dậy lúc sáu giờ, pha cà phê và đọc tin tức."], ["We arrived at the hotel, left our bags and went to the beach.", "Chúng tôi đến khách sạn, để hành lý lại và đi ra biển."], ["He opened the door, looked around and smiled.", "Anh ấy mở cửa, nhìn quanh và mỉm cười."], ["I didn’t stop for lunch. I finished the report and went home.", "Tôi không nghỉ ăn trưa. Tôi làm xong báo cáo rồi về nhà."]] },
        { f: "quá khứ tiếp diễn (bối cảnh) + quá khứ đơn (sự việc)",
          mean: "**khung cảnh lúc đó** rồi đến **chuyện xảy ra**.",
          parts: [["bối cảnh: was / were + động từ thêm -ing", "It was raining. People were hurrying home."], ["sự việc: quá khứ đơn", "A small dog ran into the road."]],
          use: "mở đầu câu chuyện cho hấp dẫn: thời tiết, nơi chốn, mọi người đang làm gì, rồi mới đến chuyện chính.",
          note: "Nếu kể toàn bằng quá khứ đơn, câu chuyện vẫn đúng nhưng thiếu không khí. Thêm một hai câu quá khứ tiếp diễn ở đầu sẽ giúp người nghe “nhìn thấy” cảnh.",
          ex: [["The sun was shining, and the children were playing in the park.", "Mặt trời đang chiếu sáng, và bọn trẻ đang chơi trong công viên."], ["Everyone was laughing when the boss came in.", "Mọi người đang cười thì sếp bước vào."], ["We were sitting in a café when we heard a loud noise.", "Chúng tôi đang ngồi ở quán cà phê thì nghe thấy một tiếng động lớn."], ["Was it raining when you left the office?", "Lúc bạn rời văn phòng trời có đang mưa không?"]] },
        { f: "know, like, want, need, have (sở hữu): không thêm -ing",
          mean: "**động từ chỉ trạng thái** (suy nghĩ, cảm xúc, sở hữu) dùng quá khứ đơn, kể cả khi trạng thái đó kéo dài.",
          parts: [["know, understand, remember", "biết, hiểu, nhớ."], ["like, love, hate, want, need", "thích, yêu, ghét, muốn, cần."], ["have (= có, sở hữu)", "I had a small bike. Nhưng have với nghĩa **ăn, uống** thì được thêm -ing: I was having lunch."]],
          use: "nói suy nghĩ, cảm xúc của bạn trong câu chuyện: I didn’t know what to do. I wanted to cry.",
          note: "Không nói “I was knowing the answer”; nói “I **knew** the answer.” Không nói “I was wanting”; nói “I **wanted**.”",
          ex: [["I didn’t know the answer.", "Tôi không biết câu trả lời."], ["At that time, we wanted a bigger house.", "Lúc đó chúng tôi muốn một ngôi nhà to hơn."], ["I was having lunch when you called.", "Tôi đang ăn trưa thì bạn gọi."], ["Did you understand the teacher?", "Bạn có hiểu cô giáo nói gì không?"]] }
      ],
      mistakes: [
        ["Yesterday I was going to the market, I was buying fish and I was cooking dinner.", "Yesterday I went to the market, bought fish and cooked dinner.", "Chuỗi việc nối tiếp nhau, việc nào cũng đã xong, nên dùng **quá khứ đơn**."],
        ["I was knowing the answer.", "I knew the answer.", "**know** là động từ chỉ trạng thái, không thêm -ing."],
        ["When I arrived, it rained and everyone waited outside.", "When I arrived, it was raining and everyone was waiting outside.", "Mưa và chờ đợi là **bối cảnh** đang diễn ra lúc tôi đến, nên dùng quá khứ tiếp diễn."]
      ],
      talk: { title: "TÌNH HUỐNG: KỂ CHUYỆN GẶP NGƯỜI NỔI TIẾNG", turns: [
        ["A", "Guess who I saw yesterday!", "Đoán xem hôm qua mình gặp ai nào!"],
        ["B", "Who?", "Ai thế?"],
        ["A", "A famous singer! I was sitting in a café in District 1, and she walked in.", "Một ca sĩ nổi tiếng! Mình đang ngồi ở một quán cà phê ở Quận 1 thì cô ấy bước vào."],
        ["B", "Really? What was she doing there?", "Thật á? Cô ấy làm gì ở đó?"],
        ["A", "She was having coffee with a friend. I wanted a photo, but I didn’t ask.", "Cô ấy đang uống cà phê với bạn. Mình muốn xin chụp ảnh nhưng không dám hỏi."],
        ["B", "Oh, you should ask next time!", "Ôi, lần sau bạn nên hỏi đi!"]
      ] },
      tip: "Tự hỏi: “Lúc đó **đang** diễn ra?” → was / were + động từ thêm -ing. “Rồi **chuyện gì xảy ra**?” → quá khứ đơn." },

    { nav: "🧒 used to", title: "used to: ngày xưa từng, nay không còn", sub: "Kể về tuổi thơ và những thói quen đã thay đổi",
      intro: [
        "Tiếng Việt nói “hồi xưa tôi hay…”, “ngày trước tôi từng…”. Tiếng Anh dùng **used to + động từ nguyên mẫu** cho thói quen hoặc trạng thái trong quá khứ mà **bây giờ không còn nữa**.",
        "used to rất hữu ích khi kể về tuổi thơ, quê hương, hay so sánh cuộc sống trước đây và bây giờ. Dạng này giống nhau cho mọi chủ ngữ: I used to, she used to, they used to."
      ],
      formulas: [
        { f: "chủ ngữ + used to + động từ nguyên mẫu",
          mean: "**ngày xưa từng / hồi trước hay** làm gì, nay không còn.",
          parts: [["used to + động từ hành động", "thói quen cũ: I used to walk to school."], ["used to + be / live / have", "trạng thái cũ: I used to have long hair. There used to be a market here."], ["mọi chủ ngữ", "cùng một dạng: I used to, he used to, we used to."]],
          use: "kể tuổi thơ, so sánh xưa và nay; thường đi kèm một câu về hiện tại: “I used to live in the countryside. Now I live in Hanoi.”",
          note: "Đọc là /ˈjuːstə/ (“diu-xtơ”), chữ d gần như không đọc. Không dùng used to cho việc chỉ xảy ra **một lần**: không nói “I used to go to Japan in 2019”; nói “I **went** to Japan in 2019.”",
          ex: [["I used to play in the rice fields with my friends.", "Hồi xưa tôi hay chơi ngoài đồng lúa với bạn bè."], ["My father used to smoke, but he stopped.", "Bố tôi từng hút thuốc, nhưng ông đã bỏ rồi."], ["We used to live near the river.", "Ngày trước chúng tôi sống gần sông."], ["There used to be a cinema on this street.", "Trước đây trên phố này có một rạp chiếu phim."]] },
        { f: "chủ ngữ + didn’t use to + động từ nguyên mẫu",
          mean: "**ngày xưa không …** (nhưng bây giờ thì có).",
          parts: [["didn’t use to", "phủ định khi nói chuyện: did đã là quá khứ nên **bỏ chữ d**: use to, không phải used to."], ["did not use to", "dạng đầy đủ, dùng khi viết hoặc muốn nhấn mạnh."]],
          use: "kể sự thay đổi của bản thân: “I didn’t use to like vegetables, but now I love them.” Phía sau thường có **but now …**.",
          note: "Bỏ chữ d sau did, giống như mọi động từ khác sau did: didn’t **use** to (giống didn’t **go**).",
          ex: [["I didn’t use to like coffee.", "Ngày xưa tôi không thích cà phê."], ["She didn’t use to speak English, but now she speaks it well.", "Trước đây cô ấy không nói được tiếng Anh, nhưng giờ cô ấy nói rất giỏi."], ["We didn’t use to have a car.", "Ngày xưa nhà tôi không có ô tô."], ["My son did not use to read books, but now he reads every night.", "Trước đây con trai tôi không đọc sách, nhưng giờ tối nào cháu cũng đọc."]] },
        { f: "Did + chủ ngữ + use to + động từ nguyên mẫu …?",
          mean: "**hồi trước bạn có hay … không?**",
          parts: [["Did you use to …?", "câu hỏi có hoặc không: Did you use to play games?"], ["What / Where did you use to …?", "hỏi thông tin: Where did you use to live?"], ["Yes, I did. / No, I didn’t.", "trả lời ngắn."]],
          use: "hỏi về tuổi thơ, về quá khứ của ai đó khi làm quen, rồi kể lại chuyện của mình.",
          note: "Sau Did cũng **bỏ chữ d**: Did you **use** to …? (không phải Did you used to …?).",
          ex: [["Did you use to walk to school?", "Hồi trước bạn có đi bộ đến trường không?"], ["Yes, I did. It took thirty minutes.", "Có. Mất ba mươi phút."], ["What did you use to do after school?", "Hồi xưa tan học bạn hay làm gì?"], ["Where did your family use to live?", "Ngày trước gia đình bạn sống ở đâu?"]] }
      ],
      mistakes: [
        ["I use to play football when I was young.", "I used to play football when I was young.", "Câu khẳng định viết **used** to (có d)."],
        ["Did you used to live here?", "Did you use to live here?", "Sau **did** bỏ chữ d: **use** to."],
        ["I used to go to Da Lat last year.", "I went to Da Lat last year.", "Việc xảy ra một lần, có mốc cụ thể thì dùng **quá khứ đơn**; used to dành cho thói quen lặp lại."]
      ],
      talk: { title: "TÌNH HUỐNG: NÓI CHUYỆN VỀ TUỔI THƠ", turns: [
        ["A", "Where did you use to live when you were a child?", "Hồi nhỏ bạn sống ở đâu?"],
        ["B", "I used to live in a small village in Thai Binh.", "Mình sống ở một ngôi làng nhỏ ở Thái Bình."],
        ["A", "What did you use to do after school?", "Tan học bạn hay làm gì?"],
        ["B", "I used to fly kites and swim in the river with my cousins.", "Mình hay thả diều và bơi ở sông với mấy anh chị em họ."],
        ["A", "That sounds fun. Did you use to help your parents?", "Nghe vui quá. Bạn có hay giúp bố mẹ không?"],
        ["B", "Yes, I did. I used to feed the chickens every morning. I didn’t use to like it, but now I miss it!", "Có. Sáng nào mình cũng cho gà ăn. Hồi đó mình không thích, nhưng giờ lại thấy nhớ!"]
      ] },
      tip: "**used to** = “hồi xưa hay, giờ hết rồi”. Câu khẳng định có **d** (used to); sau **did** thì bỏ d (didn’t use to, Did you use to…?)." },

    { nav: "🧵 Từ nối kể chuyện", title: "Từ nối khi kể chuyện", sub: "first, then, after that, suddenly, finally: câu chuyện có đầu có đuôi",
      intro: [
        "Một câu chuyện hay cần **trình tự rõ ràng**: mở đầu, diễn biến, chuyện bất ngờ, kết thúc. Từ nối giúp người nghe theo kịp, và cho bạn thêm thời gian nghĩ câu tiếp theo.",
        "Hầu hết các từ nối này đứng **đầu câu**; khi viết, đặt dấu phẩy ngay sau chúng."
      ],
      table: { head: ["Từ nối", "Nghĩa", "Dùng ở đâu trong câu chuyện"], say: [0],
        rows: [
          ["One day / Last summer", "Một hôm / Mùa hè năm ngoái", "mở đầu câu chuyện"],
          ["First", "Đầu tiên", "việc thứ nhất"],
          ["Then", "Rồi, sau đó", "việc tiếp theo, nối nhanh"],
          ["After that", "Sau đó, tiếp theo", "việc tiếp theo, tách rõ hơn"],
          ["Suddenly", "Bỗng nhiên, đột nhiên", "chuyện bất ngờ"],
          ["Luckily / Unfortunately", "May mắn là / Không may là", "cảm xúc của người kể về sự việc"],
          ["Finally / In the end", "Cuối cùng", "kết thúc câu chuyện"]
        ] },
      formulas: [
        { f: "First, … Then, … After that, … Finally, …",
          mean: "**đầu tiên, rồi, sau đó, cuối cùng**: sắp xếp các việc theo thứ tự.",
          parts: [["First", "việc đầu tiên."], ["Then / After that", "việc tiếp theo; dùng xen kẽ để không lặp lại. Then nối nhanh, After that tách rõ hơn."], ["Finally", "việc cuối cùng trong chuỗi."]],
          use: "kể một ngày, một chuyến đi, hoặc hướng dẫn cách nấu một món ăn. Mỗi từ nối mở đầu một câu ngắn bằng quá khứ đơn.",
          note: "Người Việt hay lặp “and then, and then, and then…” mãi. Hãy luân phiên **then, after that, later** và cắt thành câu ngắn.",
          ex: [["First, we had breakfast at the hotel.", "Đầu tiên, chúng tôi ăn sáng ở khách sạn."], ["Then we took a boat around the bay.", "Rồi chúng tôi đi thuyền quanh vịnh."], ["After that, we visited a cave.", "Sau đó, chúng tôi đi thăm một hang động."], ["Finally, we went back to Hanoi in the evening.", "Cuối cùng, buổi tối chúng tôi quay về Hà Nội."]] },
        { f: "Suddenly, + quá khứ đơn",
          mean: "**bỗng nhiên, đột nhiên**: báo hiệu chuyện bất ngờ, điểm hấp dẫn của câu chuyện.",
          parts: [["Suddenly", "đứng đầu câu, theo sau là quá khứ đơn: Suddenly, the lights went out."], ["Luckily / Unfortunately", "may mắn là / không may là: thêm cảm xúc của người kể."]],
          use: "ngay sau đoạn bối cảnh dùng quá khứ tiếp diễn: “We were sleeping. Suddenly, we heard a loud noise.”",
          note: "Sau suddenly dùng **quá khứ đơn** vì đó là việc xảy ra nhanh: “Suddenly, it **started** to rain” (không nói “Suddenly, it was starting to rain”).",
          ex: [["We were watching TV. Suddenly, the lights went out.", "Chúng tôi đang xem ti vi. Bỗng nhiên mất điện."], ["Suddenly, a cat jumped onto the table.", "Đột nhiên một con mèo nhảy lên bàn."], ["Unfortunately, we didn’t have an umbrella.", "Không may là chúng tôi không mang ô."], ["Luckily, a kind man helped us.", "May mắn là có một người đàn ông tốt bụng giúp chúng tôi."]] },
        { f: "Finally / In the end + quá khứ đơn",
          mean: "**cuối cùng**: kết thúc câu chuyện.",
          parts: [["Finally", "việc cuối trong chuỗi, hoặc “cuối cùng thì cũng” sau khi chờ lâu: Finally, the bus came."], ["In the end", "kết cục của cả câu chuyện, nhất là sau nhiều khó khăn: In the end, we had a great time."]],
          use: "câu cuối của câu chuyện; thường kèm cảm nhận: “It was a great day.” “I will never forget it.”",
          note: "**In the end** (cuối cùng, rốt cuộc) khác **at the end of** (vào đoạn cuối của …): at the end of the film = ở cuối bộ phim.",
          ex: [["Finally, the bus came after an hour.", "Cuối cùng xe buýt cũng đến sau một tiếng."], ["In the end, we found a small hotel near the beach.", "Rốt cuộc chúng tôi tìm được một khách sạn nhỏ gần biển."], ["In the end, it was the best day of the trip.", "Cuối cùng, đó lại là ngày tuyệt nhất của chuyến đi."], ["Did you finally find your keys?", "Cuối cùng bạn có tìm thấy chìa khóa không?"]] }
      ],
      mistakes: [
        ["And then I went home and then I cooked and then I slept.", "Then I went home. After that, I cooked dinner. Finally, I went to bed.", "Cắt thành câu ngắn và đổi từ nối: **then, after that, finally**."],
        ["Suddenly, it was starting to rain.", "Suddenly, it started to rain.", "Sau **suddenly** là việc xảy ra nhanh nên dùng quá khứ đơn."],
        ["At the end, we found the hotel.", "In the end, we found the hotel.", "“Rốt cuộc, cuối cùng” là **in the end**; at the end of dùng cho “đoạn cuối của” một việc."]
      ],
      talk: { title: "TÌNH HUỐNG: KỂ VỀ CHUYẾN ĐI HÀ GIANG", turns: [
        ["A", "Tell me about your trip to Ha Giang.", "Kể cho mình nghe về chuyến đi Hà Giang đi."],
        ["B", "Well, first, we took a night bus from Hanoi. Then we rented motorbikes in the morning.", "Ừ, đầu tiên bọn mình đi xe khách đêm từ Hà Nội. Rồi sáng hôm sau bọn mình thuê xe máy."],
        ["A", "Was the road dangerous?", "Đường có nguy hiểm không?"],
        ["B", "A bit. We were riding up a mountain when suddenly, it started to rain very heavily.", "Hơi hơi. Bọn mình đang chạy xe lên núi thì bỗng nhiên trời mưa rất to."],
        ["A", "Oh no! What did you do?", "Ôi không! Thế các bạn làm gì?"],
        ["B", "Luckily, we found a small café. After that, the sun came out. In the end, it was the best trip of my life.", "May mà bọn mình tìm được một quán cà phê nhỏ. Sau đó trời nắng lên. Rốt cuộc đó là chuyến đi tuyệt nhất đời mình."]
      ] },
      tip: "Khung kể chuyện năm bước: **One day** (mở đầu) → **First / Then** (diễn biến) → **Suddenly** (bất ngờ) → **Luckily / Unfortunately** (cảm xúc) → **In the end** (kết thúc)." }
  ],
  speak: [
    { q: "What were you doing at eight o’clock last night?", vi: "Lúc tám giờ tối qua bạn đang làm gì?", hint: "Dùng **I was + động từ thêm -ing**: At eight, I was …",
      answers: [["At eight, I was having dinner with my family.", "Lúc tám giờ, tôi đang ăn tối với gia đình."], ["I was watching a football match on TV.", "Tôi đang xem một trận bóng đá trên ti vi."]] },
    { q: "What were you doing this time last year?", vi: "Giờ này năm ngoái bạn đang làm gì?", hint: "**This time last year, I was + động từ thêm -ing …** (working at…, studying at…, living in…).",
      answers: [["This time last year, I was working at a bank in Saigon.", "Giờ này năm ngoái, tôi đang làm ở một ngân hàng ở Sài Gòn."], ["I was studying for my final exams.", "Tôi đang ôn thi cuối kỳ."]] },
    { q: "Tell me about a time something surprising happened to you.", vi: "Kể về một lần có chuyện bất ngờ xảy ra với bạn.", hint: "**I was … when …** hoặc **While I was …, …**, rồi thêm **Suddenly** và **In the end**.",
      answers: [["I was waiting for a taxi when I saw my old teacher. We had coffee together.", "Tôi đang đợi taxi thì gặp cô giáo cũ. Chúng tôi đi uống cà phê cùng nhau."], ["While I was walking in the park, it suddenly started to rain. In the end, I got very wet!", "Trong khi tôi đang đi dạo trong công viên thì trời bỗng đổ mưa. Rốt cuộc tôi ướt hết!"]] },
    { q: "Where did you use to live when you were a child?", vi: "Hồi nhỏ bạn sống ở đâu?", hint: "**I used to live in …** rồi so sánh với bây giờ: **Now I live in …**",
      answers: [["I used to live in a small town in Nam Dinh. Now I live in Hanoi.", "Hồi nhỏ tôi sống ở một thị trấn nhỏ ở Nam Định. Giờ tôi sống ở Hà Nội."], ["I used to live with my grandparents in the countryside.", "Tôi từng sống với ông bà ở quê."]] },
    { q: "What did you use to do after school?", vi: "Hồi xưa tan học bạn hay làm gì?", hint: "**I used to + động từ nguyên mẫu** và **with + bạn bè / anh chị em**.",
      answers: [["I used to play football with my friends.", "Tôi hay đá bóng với bạn bè."], ["I used to help my mother sell vegetables at the market.", "Tôi hay giúp mẹ bán rau ở chợ."]] },
    { q: "Is there anything you didn’t use to like, but you like now?", vi: "Có thứ gì ngày xưa bạn không thích mà giờ lại thích không?", hint: "**I didn’t use to like …, but now I …**",
      answers: [["I didn’t use to like vegetables, but now I eat them every day.", "Ngày xưa tôi không thích rau, nhưng giờ ngày nào tôi cũng ăn."], ["I didn’t use to like reading, but now I read before bed.", "Trước đây tôi không thích đọc sách, nhưng giờ tôi đọc trước khi ngủ."]] },
    { q: "Tell me about your best trip. What happened?", vi: "Kể về chuyến đi tuyệt nhất của bạn. Chuyện gì đã xảy ra?", hint: "Kể theo thứ tự: **First, … Then, … After that, … In the end, …** bằng quá khứ đơn.",
      answers: [["First, we flew to Da Nang. Then we went to Hoi An. After that, we swam at My Khe beach. In the end, we didn’t want to go home!", "Đầu tiên, chúng tôi bay đến Đà Nẵng. Rồi chúng tôi đi Hội An. Sau đó, chúng tôi bơi ở biển Mỹ Khê. Cuối cùng, chẳng ai muốn về nhà!"]] },
    { q: "How did you meet your best friend?", vi: "Bạn gặp bạn thân của mình như thế nào?", hint: "**We met while I was + động từ thêm -ing …** hoặc **We met when …**",
      answers: [["We met while I was studying at university. We were in the same class.", "Chúng tôi gặp nhau khi tôi đang học đại học. Chúng tôi học cùng lớp."], ["We met when I moved to a new school. She sat next to me.", "Chúng tôi gặp nhau khi tôi chuyển sang trường mới. Cô ấy ngồi cạnh tôi."]] }
  ],
  exercises: [
    { title: "Phần 1: Điền was / were + động từ thêm -ing", items: [
      { q: "At nine o’clock last night, I ___ (watch) TV.", a: ["was watching"] },
      { q: "The children ___ (play) in the garden all afternoon.", a: ["were playing"] },
      { q: "What ___ you ___ (do) at ten o’clock last night?", a: ["were doing"], hint: "gõ hai từ, cách nhau bởi dấu cách" },
      { q: "She ___ (not / sleep). She was reading.", a: ["wasn't sleeping", "was not sleeping"] },
      { q: "While we ___ (have) dinner, the lights went out.", a: ["were having"] }
    ] },
    { title: "Phần 2: Quá khứ đơn, quá khứ tiếp diễn hay used to? Điền dạng đúng", items: [
      { q: "I was walking home when I ___ (see) an accident.", a: ["saw"] },
      { q: "While my mother ___ (cook), my father was cleaning the house.", a: ["was cooking"] },
      { q: "Sorry, I didn’t hear you. I ___ (listen) to music.", a: ["was listening"] },
      { q: "When I was a child, I ___ play football every afternoon. Now I don’t.", a: ["used to"], hint: "hai từ, cấu trúc ở phần 4: ngày xưa hay, nay không còn" },
      { q: "Did you ___ to live in the countryside?", a: ["use"], hint: "một từ" },
      { q: "I didn’t ___ like vegetables, but now I love them.", a: ["use to"], hint: "hai từ: ngày xưa không" }
    ] },
    { title: "Phần 3: Chọn câu đúng", items: [
      { q: "Chọn câu đúng:", options: ["I cooked when the phone was ringing.", "I was cooking when the phone rang.", "I was cooking while the phone rang."], a: 1, why: "Hành động dài dùng quá khứ tiếp diễn (was cooking); hành động ngắn sau **when** dùng quá khứ đơn (rang)." },
      { q: "“Hồi nhỏ tôi hay đi bộ đến trường.”", options: ["I use to walk to school when I was a child.", "I used to walk to school when I was a child.", "I was used to walk to school when I was a child."], a: 1, why: "Thói quen ngày xưa: **used to + động từ nguyên mẫu**." },
      { q: "“We were sleeping. ___, we heard a loud noise.”", options: ["Finally", "Suddenly", "First"], a: 1, why: "Chuyện bất ngờ cắt ngang dùng **Suddenly**." },
      { q: "“Rốt cuộc (sau nhiều khó khăn), chúng tôi tìm được khách sạn.”", options: ["At the end, we found the hotel.", "In the end, we found the hotel.", "In the end, we were finding the hotel."], a: 1, why: "“Rốt cuộc” là **In the end**, theo sau là quá khứ đơn." },
      { q: "Chọn câu đúng:", options: ["I was knowing the answer.", "I knew the answer.", "I was know the answer."], a: 1, why: "**know** là động từ chỉ trạng thái, không thêm -ing." },
      { q: "Chọn câu hỏi đúng:", options: ["What did you doing at ten?", "What were you doing at ten?", "What you were doing at ten?"], a: 1, why: "Câu hỏi quá khứ tiếp diễn: **What were you doing …?**" }
    ] }
  ],
  vocab: [["was / were + động từ thêm -ing", "đang làm gì (trong quá khứ)"], ["What were you doing?", "Lúc đó bạn đang làm gì?"], ["when", "khi, thì (trước hành động ngắn)"], ["while", "trong khi (trước hành động dài)"], ["used to", "ngày xưa hay, từng"], ["didn’t use to", "ngày xưa không"], ["Did you use to …?", "Hồi trước bạn có hay … không?"], ["one day", "một hôm"], ["first", "đầu tiên"], ["then / after that", "rồi, sau đó"], ["suddenly", "bỗng nhiên, đột nhiên"], ["luckily / unfortunately", "may mắn là / không may là"], ["finally / in the end", "cuối cùng, rốt cuộc"]],
  tips: [
    "Tối nào cũng tự hỏi: “What **was** I **doing** at eight this morning? At noon? At six?” rồi trả lời to bằng quá khứ tiếp diễn.",
    "Mỗi tuần kể một câu chuyện ngắn theo khung **One day → Then → Suddenly → In the end**, ghi âm lại và nghe xem mình đã dùng đúng thì chưa.",
    "Xem ảnh cũ của gia đình và nói 3 câu với **used to**: “I **used to** have long hair. We **used to** live in…”",
    "Khi kể chuyện bị cắt ngang, nhớ công thức: **đang + when + bất ngờ** (I was cooking **when** the phone rang).",
    "Thay thói quen nói “and then… and then…” bằng **then, after that, later**, và dừng câu thường xuyên hơn."
  ]
};