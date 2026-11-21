/* Ngữ pháp nền tảng: to + động từ hay động từ thêm -ing (want to go, enjoy cooking). Hiển thị bởi grammar-lesson.js. */
window.A1_GRAMMAR = {
  icon: "🔗",
  short: "To hay -ing",
  hero: ["Hai động từ đi liền nhau", "want to go · enjoy cooking · ask me to help"],
  desc: "Tiếng Việt chỉ cần đặt hai động từ cạnh nhau: “muốn đi”, “thích nấu ăn”, “nhờ tôi giúp”. Tiếng Anh thì động từ đứng trước **quyết định** động từ đứng sau có dạng gì: **want to go** nhưng **enjoy going**. Học xong bài này, bạn sẽ hết nói “I want go” hay “I enjoy to cook”, và nói về kế hoạch, sở thích, lời nhờ vả, lời rủ rê một cách tự nhiên.",
  chips: ["want to do", "enjoy doing", "Đổi nghĩa", "Sau giới từ", "Nhờ ai làm gì"],
  goal: [
    "Nói về **kế hoạch và mong muốn**: I want to…, I am planning to…, I hope to…",
    "Nói về **sở thích và thói quen**: I enjoy…, I can’t stand…, I feel like… + động từ thêm -ing.",
    "Phân biệt **stop to do / stop doing**, **remember to do / remember doing**, **try to do / try doing**.",
    "Rủ rê bằng **How about + động từ thêm -ing?** và cảm ơn bằng **Thank you for + động từ thêm -ing**.",
    "Nhờ vả, kể về việc người khác bảo mình làm: **ask someone to**, **tell someone to**, **let me**, **make me**."
  ],
  sections: [
    { nav: "➡️ to + động từ", title: "Động từ + to + động từ nguyên mẫu", sub: "want to, need to, decide to: nói về kế hoạch và mong muốn",
      intro: [
        "Khi hai động từ đi liền nhau, động từ thứ hai có hai dạng chính: **to + động từ nguyên mẫu** (to go, to eat) hoặc **động từ thêm -ing** (going, eating). Không có quy tắc tuyệt đối, nhưng có một cách nhớ rất hữu ích: nhóm **to** thường nói về việc **hướng tới tương lai** (muốn làm, định làm, hứa sẽ làm), còn nhóm **-ing** thường nói về việc **đã, đang có thật** (thích làm, làm xong, ngừng làm).",
        "Bảng dưới đây là bản đồ của cả bài. Hãy quay lại xem nó mỗi khi bạn không chắc nên dùng dạng nào."
      ],
      table: { head: ["Mẫu câu", "Các động từ hay gặp", "Ví dụ"], say: [2],
        rows: [
          ["động từ + **to** + động từ nguyên mẫu", "want, need, would like, decide, plan, hope, try, learn, forget, agree, promise", "I want to travel to Da Nang."],
          ["động từ + **động từ thêm -ing**", "enjoy, finish, mind, stop, keep, practise, avoid, suggest, can’t stand, feel like", "I enjoy cooking for my family."],
          ["dùng **cả hai**, nghĩa gần như không đổi", "like, love, hate, start, begin", "It started raining. It started to rain."],
          ["dùng cả hai nhưng **đổi nghĩa**", "stop, remember, forget, try", "Remember to lock the door."],
          ["giới từ + **động từ thêm -ing**", "good at, interested in, thank you for, before, after, How about", "Thank you for helping me."],
          ["động từ + người + **to** + động từ nguyên mẫu", "want, would like, ask, tell, help", "My mother wants me to call her."],
          ["make / let + người + động từ nguyên mẫu (không có to)", "make, let, help", "My boss let me go home early."]
        ] },
      formulas: [
        { f: "want / need / would like + to + động từ nguyên mẫu",
          mean: "**muốn làm, cần làm, muốn làm (lịch sự)**: nói điều mình mong muốn hoặc cần làm.",
          parts: [["want to", "muốn: nói thẳng, dùng với bạn bè, gia đình. I want to sleep."], ["would like to", "muốn: **lịch sự hơn**, dùng khi gọi món, nói với người lạ, sếp. I would like to book a table."], ["need to", "cần phải: việc quan trọng, bắt buộc. I need to finish this report."]],
          use: "nói mong muốn, gọi món, đặt chỗ, xin phép. Câu hỏi rủ rê rất hay dùng: **Would you like to + động từ nguyên mẫu?** (Bạn có muốn… không?).",
          note: "Người Việt hay bỏ **to**: “I want go.” Hãy nhớ want, need, would like luôn kéo theo **to**. Và “would like” khác “like”: I would like **to** go (tôi muốn đi), I like going (tôi thích đi).",
          ex: [["I want to learn English for my job.", "Tôi muốn học tiếng Anh cho công việc."], ["I would like to book a table for two, please.", "Tôi muốn đặt một bàn cho hai người."], ["Would you like to have dinner with us?", "Bạn có muốn ăn tối cùng chúng tôi không?"], ["You do not need to bring anything.", "Bạn không cần mang gì đâu."]] },
        { f: "decide / plan / hope / promise / agree + to + động từ nguyên mẫu",
          mean: "**quyết định, định, hy vọng, hứa, đồng ý làm** một việc trong tương lai.",
          parts: [["decide to", "quyết định (vừa chọn xong): We decided to stay home."], ["plan to / be planning to", "lên kế hoạch, dự định: I am planning to visit Hue."], ["hope to", "hy vọng: I hope to see you soon."], ["promise to", "hứa: He promised to call me."], ["agree to", "đồng ý làm: She agreed to help us."]],
          use: "kể về kế hoạch cho cuối tuần, kỳ nghỉ, năm tới; kể lại lời hứa của ai đó. Đây là nhóm động từ “nhìn về phía trước” nên đi với **to**.",
          note: "Không nói “I hope seeing you” hay “He promised calling”. Nhóm nhìn về tương lai thì dùng **to**.",
          ex: [["We decided to go to Ha Long Bay next month.", "Chúng tôi quyết định tháng sau đi vịnh Hạ Long."], ["I am planning to buy a motorbike.", "Tôi đang định mua một chiếc xe máy."], ["Are you hoping to get a new job this year?", "Bạn có hy vọng tìm được việc mới trong năm nay không?"], ["He promised not to be late again.", "Anh ấy hứa sẽ không đến muộn nữa."]] },
        { f: "try / learn / forget + to + động từ nguyên mẫu",
          mean: "**cố gắng làm, học cách làm, quên làm** một việc.",
          parts: [["try to", "cố gắng (việc khó): I try to speak English every day."], ["learn to", "học để biết làm: She is learning to drive."], ["forget to", "quên chưa làm việc cần làm: I forgot to buy milk."]],
          use: "kể về nỗ lực học tập, kỹ năng mới, và xin lỗi vì quên việc gì đó.",
          note: "Phủ định đặt **not** trước to: “Try **not to** be late.” (Cố đừng đến muộn), không nói “Try to not”. Hai động từ try và forget còn dùng được với -ing nhưng nghĩa khác, xem Phần 3.",
          ex: [["I try to go to bed before eleven.", "Tôi cố gắng đi ngủ trước mười một giờ."], ["My son is learning to swim.", "Con trai tôi đang học bơi."], ["Sorry, I forgot to send you the photos.", "Xin lỗi, tôi quên gửi ảnh cho bạn."], ["Did you learn to cook from your mother?", "Bạn học nấu ăn từ mẹ à?"]] }
      ],
      mistakes: [
        ["I want go to the beach.", "I want to go to the beach.", "Sau **want** luôn có **to** trước động từ nguyên mẫu."],
        ["I would like going home now.", "I would like to go home now.", "**would like** đi với **to + động từ nguyên mẫu**, khác với like."],
        ["We decided staying at home.", "We decided to stay at home.", "**decide** là động từ nhìn về tương lai nên đi với **to**."]
      ],
      talk: { title: "TÌNH HUỐNG: NÓI VỀ KẾ HOẠCH NGHỈ LỄ", turns: [
        ["A", "Do you have any plans for the holiday?", "Bạn có kế hoạch gì cho kỳ nghỉ lễ không?"],
        ["B", "Yes, I am planning to visit my grandparents in Nam Dinh.", "Có, mình định về thăm ông bà ở Nam Định."],
        ["A", "That sounds nice. I want to go to Da Lat, but the tickets are expensive.", "Nghe hay đấy. Mình muốn đi Đà Lạt, nhưng vé đắt quá."],
        ["B", "You need to book early. I hope to see you before the holiday.", "Bạn cần đặt sớm. Mình hy vọng gặp bạn trước kỳ nghỉ."],
        ["A", "Me too. Would you like to have coffee on Friday?", "Mình cũng vậy. Thứ Sáu bạn có muốn đi cà phê không?"]
      ] },
      tip: "Nghĩ đến mũi tên chỉ về **tương lai**: muốn, cần, định, hy vọng, hứa, quyết định → đều là việc **chưa làm**, nên dùng **to**." },

    { nav: "🔄 động từ + -ing", title: "Động từ + động từ thêm -ing", sub: "enjoy cooking, finish working: nói về sở thích và thói quen",
      intro: [
        "Nhóm động từ này đi với **động từ thêm -ing**. Nhiều động từ trong nhóm nói về việc **đang có thật hoặc đã làm**: thích việc mình đang làm (enjoy), làm xong (finish), ngừng làm (stop), cứ tiếp tục làm (keep), luyện tập (practise).",
        "Không có mẹo nào đúng cho mọi động từ, nên hãy học thuộc danh sách mười động từ trong bảng ở Phần 1 bằng những câu nói về chính bạn."
      ],
      formulas: [
        { f: "enjoy / can’t stand / feel like / mind + động từ thêm -ing",
          mean: "**thích, rất ghét, đang muốn, phiền** làm một việc: nói về cảm xúc với một hoạt động.",
          parts: [["enjoy", "thích, tận hưởng: I enjoy reading in the evening."], ["can’t stand", "**rất ghét**, không chịu nổi: I can’t stand waiting in traffic."], ["feel like", "**đang muốn** (ngay lúc này): I feel like eating pho."], ["mind", "phiền, ngại; dùng trong câu hỏi lịch sự và câu phủ định: Do you mind opening the window?"]],
          use: "nói về sở thích, than phiền, nói điều mình muốn làm ngay bây giờ, và nhờ vả lịch sự với **Do you mind + động từ thêm -ing?** (Bạn có phiền… không?).",
          note: "Trả lời “Do you mind…?” hơi ngược: muốn nói **đồng ý giúp** thì trả lời “**No**, not at all.” (Không phiền gì cả). Và “I feel like…” không phải “tôi cảm thấy giống” mà là “tôi đang muốn…”.",
          ex: [["I really enjoy cooking for my family.", "Tôi rất thích nấu ăn cho gia đình."], ["My sister can’t stand getting up early.", "Em gái tôi rất ghét dậy sớm."], ["I do not feel like going out tonight.", "Tối nay tôi không muốn ra ngoài."], ["Do you mind closing the door?", "Bạn có phiền đóng cửa giúp không?"]] },
        { f: "finish / stop / keep / practise + động từ thêm -ing",
          mean: "**làm xong, ngừng, cứ tiếp tục, luyện tập** một việc: nói về quá trình của một hoạt động.",
          parts: [["finish", "làm xong: I finished cleaning the kitchen."], ["stop", "ngừng hẳn việc đang làm: Stop talking, please."], ["keep", "cứ tiếp tục, cứ lặp lại (thường là việc gây khó chịu): My phone keeps ringing."], ["practise", "luyện tập: I practise speaking English with my friend."]],
          use: "kể về công việc trong ngày, thói quen học tập, việc gì cứ lặp đi lặp lại.",
          note: "**practise** (Anh-Anh) và **practice** (Anh-Mỹ) đều đúng. Không nói “practise to speak”.",
          ex: [["What time do you usually finish working?", "Bạn thường làm xong việc lúc mấy giờ?"], ["Please stop playing games and do your homework.", "Đừng chơi điện tử nữa, làm bài tập về nhà đi."], ["It keeps raining in Hanoi this week.", "Tuần này Hà Nội cứ mưa mãi."], ["I practise listening every morning on the bus.", "Sáng nào tôi cũng luyện nghe trên xe buýt."]] },
        { f: "avoid / suggest + động từ thêm -ing",
          mean: "**tránh làm, gợi ý làm** một việc.",
          parts: [["avoid", "tránh: I avoid eating late at night."], ["suggest", "gợi ý, đề xuất cùng làm: She suggested taking a taxi."]],
          use: "đưa lời khuyên về sức khỏe, đề xuất cách làm khi đi chơi, đi làm.",
          note: "Không nói “suggest to go”. Sau **suggest** dùng động từ thêm -ing: “I suggest going by train.”",
          ex: [["I try to avoid driving in the rush hour.", "Tôi cố tránh lái xe vào giờ cao điểm."], ["The doctor suggested drinking more water.", "Bác sĩ khuyên uống nhiều nước hơn."], ["Why do you avoid answering my question?", "Sao bạn cứ tránh trả lời câu hỏi của tôi?"], ["I suggest meeting at the coffee shop near the lake.", "Tôi gợi ý gặp nhau ở quán cà phê gần hồ."]] }
      ],
      mistakes: [
        ["I enjoy to cook.", "I enjoy cooking.", "Sau **enjoy** luôn dùng động từ thêm -ing."],
        ["Have you finished to eat?", "Have you finished eating?", "Sau **finish** dùng động từ thêm -ing."],
        ["She suggested to go by bus.", "She suggested going by bus.", "Sau **suggest** dùng động từ thêm -ing, không dùng to."]
      ],
      talk: { title: "TÌNH HUỐNG: TRÒ CHUYỆN VỀ SỞ THÍCH", turns: [
        ["A", "What do you enjoy doing after work?", "Sau giờ làm bạn thích làm gì?"],
        ["B", "I enjoy cooking. But I can’t stand washing the dishes!", "Mình thích nấu ăn. Nhưng mình ghét rửa bát lắm!"],
        ["A", "Me too. I am trying to practise playing the guitar.", "Mình cũng thế. Mình đang cố luyện chơi ghi-ta."],
        ["B", "Great! Keep practising. Do you feel like playing a song for us?", "Hay quá! Cứ luyện tiếp nhé. Bạn có muốn chơi một bài cho bọn mình nghe không?"],
        ["A", "Maybe next time. I have not finished learning it yet.", "Để lần sau nhé. Mình học bài đó chưa xong."]
      ] },
      tip: "Học thuộc theo câu về bản thân: “I **enjoy** reading, I **can’t stand** waiting, I **feel like** sleeping, I **keep** forgetting, I **finish** working at six.”" },

    { nav: "⚖️ Cả hai và đổi nghĩa", title: "Động từ dùng được cả hai dạng", sub: "like, love, start: không đổi nghĩa; stop, remember, try: đổi nghĩa",
      intro: [
        "Một số động từ đi được với cả **to + động từ nguyên mẫu** và **động từ thêm -ing**. Với **like, love, hate, start, begin**, nghĩa gần như không đổi, bạn chọn dạng nào cũng được.",
        "Nhưng với **stop, remember, forget, try**, đổi dạng là **đổi nghĩa**. Mẹo chung: **to** = việc làm **sau**, **-ing** = việc đã làm **trước** hoặc việc đang làm."
      ],
      formulas: [
        { f: "like / love / hate / start / begin + to + động từ nguyên mẫu HOẶC động từ thêm -ing",
          mean: "**thích, yêu, ghét, bắt đầu** làm việc gì: hai dạng gần như cùng nghĩa.",
          parts: [["like / love / hate", "I like swimming = I like to swim. Khi nói sở thích chung, dạng **-ing** phổ biến hơn trong tiếng Anh-Anh."], ["start / begin", "It started raining = It started to rain. begin trang trọng hơn start một chút."], ["would like / would love", "**chỉ dùng to**: I would love to come. (khác hẳn love)"]],
          use: "nói sở thích, kể lúc một việc bắt đầu: bắt đầu mưa, bắt đầu học, bắt đầu làm việc.",
          note: "Đừng nhầm **I like cooking** (tôi thích nấu ăn, nói chung) với **I would like to cook** (tôi muốn nấu, lúc này). Khi được mời, trả lời “**I would love to!**”, không nói “I love to!”.",
          ex: [["I love listening to music on the bus.", "Tôi rất thích nghe nhạc trên xe buýt."], ["My father hates waiting in long queues.", "Bố tôi ghét phải xếp hàng dài."], ["When did you start learning English?", "Bạn bắt đầu học tiếng Anh từ khi nào?"], ["It began to rain at five o’clock.", "Trời bắt đầu mưa lúc năm giờ."]] },
        { f: "stop to do / stop doing",
          mean: "**stop to do** = dừng lại **để** làm việc khác; **stop doing** = **bỏ, ngừng hẳn** việc đang làm.",
          parts: [["stop + động từ thêm -ing", "ngừng việc đang làm: He stopped smoking. (Anh ấy bỏ thuốc lá.)"], ["stop + to + động từ nguyên mẫu", "dừng việc đang làm **để làm việc khác**: He stopped to smoke. (Anh ấy dừng lại để hút thuốc.)"]],
          use: "kể chuyện đi đường (dừng lại để mua nước, để chụp ảnh), nói về thói quen đã bỏ.",
          note: "Hai câu trên nghĩa **ngược nhau**. Hỏi: dừng lại **để làm gì**? Có mục đích thì dùng **to**.",
          ex: [["My father stopped smoking two years ago.", "Bố tôi bỏ thuốc lá hai năm trước."], ["We stopped to buy some water on the way.", "Chúng tôi dừng lại mua nước trên đường đi."], ["Please stop talking. The film is starting.", "Làm ơn đừng nói chuyện nữa. Phim bắt đầu rồi."], ["Why did you stop to take photos there?", "Sao bạn dừng lại chụp ảnh ở đó?"]] },
        { f: "remember / forget to do — remember / forget doing; try to do — try doing",
          mean: "**to** = việc **cần làm sau**; **-ing** = **việc đã làm** trong quá khứ (với remember, forget) hoặc **thử làm** (với try).",
          parts: [["remember to do", "nhớ **phải** làm (việc chưa làm): Remember to call your mum."], ["remember doing", "nhớ **đã** làm (kỷ niệm): I remember meeting you in 2020."], ["forget to do", "quên chưa làm: I forgot to lock the door."], ["forget doing", "quên là mình đã làm, thường dùng với **never**: I will never forget visiting Sa Pa."], ["try to do / try doing", "**try to** = cố gắng (việc khó); **try doing** = thử làm xem có hiệu quả không: Try drinking warm water."]],
          use: "nhắc nhở người khác, kể kỷ niệm, đưa lời khuyên.",
          note: "Ở trình độ này, hãy nhớ hai câu mẫu: “**Remember to** do your homework.” (nhắc việc phải làm) và “I **remember visiting** Hue as a child.” (kỷ niệm).",
          ex: [["Remember to take your umbrella. It is going to rain.", "Nhớ mang ô nhé. Trời sắp mưa đấy."], ["I remember meeting her at a wedding.", "Tôi nhớ đã gặp cô ấy ở một đám cưới."], ["I tried to open the window, but it was stuck.", "Tôi cố mở cửa sổ, nhưng nó bị kẹt."], ["Can’t sleep? Try reading a book before bed.", "Không ngủ được à? Thử đọc sách trước khi ngủ xem."]] }
      ],
      mistakes: [
        ["Remember locking the door when you go out.", "Remember to lock the door when you go out.", "Nhắc việc **phải làm** sau này thì dùng **remember to**."],
        ["I would love going with you.", "I would love to go with you.", "**would love / would like** chỉ đi với **to**."],
        ["We stopped buying some coffee on the way.", "We stopped to buy some coffee on the way.", "Dừng lại **để** mua cà phê là mục đích, nên dùng **stop to**."]
      ],
      talk: { title: "TÌNH HUỐNG: KỂ VỀ CHUYẾN ĐI XE MÁY", turns: [
        ["A", "How was your trip to Ninh Binh?", "Chuyến đi Ninh Bình của bạn thế nào?"],
        ["B", "Great! We stopped to take photos many times. I love riding in the countryside.", "Tuyệt lắm! Bọn mình dừng lại chụp ảnh nhiều lần. Mình rất thích chạy xe ở vùng quê."],
        ["A", "Did you remember to bring a raincoat?", "Bạn có nhớ mang áo mưa không?"],
        ["B", "No, I forgot to bring it! It started raining in the afternoon.", "Không, mình quên mang! Buổi chiều trời bắt đầu mưa."],
        ["A", "Next time, try checking the weather app before you go.", "Lần sau thử xem ứng dụng thời tiết trước khi đi nhé."]
      ] },
      tip: "**to** nhìn về **phía trước** (việc sắp làm), **-ing** nhìn về **phía sau** hoặc vào **chính việc đó** (việc đã làm, đang làm). Remember **to** call = chưa gọi; remember call**ing** = đã gọi rồi." },

    { nav: "📍 Sau giới từ", title: "Sau giới từ luôn là động từ thêm -ing", sub: "good at cooking, thank you for helping, How about going…?",
      intro: [
        "Đây là quy tắc **không có ngoại lệ** ở trình độ này: nếu phía trước là một **giới từ** (at, in, for, about, of, before, after, without…) thì động từ phía sau phải thêm **-ing**.",
        "Quy tắc này giúp bạn khen ngợi (good at), nói về sở thích (interested in), cảm ơn (thank you for), kể thứ tự việc làm (before, after) và rủ rê (How about…?)."
      ],
      formulas: [
        { f: "tính từ + giới từ + động từ thêm -ing",
          mean: "**giỏi làm gì, thích tìm hiểu gì, chán làm gì…**: nói về khả năng và sở thích.",
          parts: [["good at / bad at", "giỏi / kém về: She is good at drawing."], ["interested in", "quan tâm, thích tìm hiểu: I am interested in learning Japanese."], ["tired of", "chán, mệt mỏi vì: I am tired of eating instant noodles."], ["worried about", "lo lắng về: He is worried about losing his job."]],
          use: "giới thiệu bản thân, nói về điểm mạnh, điểm yếu trong buổi phỏng vấn, nói về điều làm mình chán hoặc lo lắng.",
          note: "Người Việt hay nói “I am good at cook”. Sau **at, in, of, about** phải là **cooking**, hoặc một danh từ: good at English.",
          ex: [["I am good at cooking Vietnamese food.", "Tôi giỏi nấu món ăn Việt Nam."], ["Are you interested in joining our football team?", "Bạn có muốn tham gia đội bóng của chúng tôi không?"], ["I am not very good at speaking in public.", "Tôi không giỏi nói trước đám đông lắm."], ["She is tired of working at the weekend.", "Cô ấy chán phải làm việc vào cuối tuần."]] },
        { f: "Thank you for / before / after / without + động từ thêm -ing",
          mean: "**cảm ơn vì đã…, trước khi…, sau khi…, mà không…**",
          parts: [["Thank you for", "cảm ơn vì đã làm: Thank you for inviting me."], ["before", "trước khi: Wash your hands before eating."], ["after", "sau khi: After finishing work, I go to the gym."], ["without", "mà không: He left without saying goodbye."]],
          use: "cảm ơn, kể thứ tự các việc trong ngày, đưa lời dặn dò.",
          note: "Với before và after, bạn cũng có thể dùng cả mệnh đề: “before **I eat**”. Nhưng nếu không có chủ ngữ thì **phải** dùng -ing, không nói “before eat”.",
          ex: [["Thank you for helping me with my homework.", "Cảm ơn bạn đã giúp tôi làm bài tập."], ["I always drink a glass of water before going to bed.", "Tôi luôn uống một cốc nước trước khi đi ngủ."], ["What do you do after finishing work?", "Bạn làm gì sau khi tan làm?"], ["Please do not leave without telling me.", "Đừng đi mà không báo tôi nhé."]] },
        { f: "How about / What about + động từ thêm -ing?",
          mean: "**… thì sao? / hay là mình… đi?**: rủ rê, gợi ý một cách thân mật.",
          parts: [["How about + động từ thêm -ing?", "rủ rê, gợi ý: How about going to the cinema?"], ["Why don’t we + động từ nguyên mẫu?", "cùng nghĩa nhưng **không có -ing**: Why don’t we go to the cinema?"], ["Let’s + động từ nguyên mẫu", "rủ trực tiếp: Let’s go to the cinema."]],
          use: "rủ bạn đi chơi, gợi ý món ăn, địa điểm, giờ hẹn.",
          note: "Đừng trộn ba mẫu với nhau: không nói “How about go…?” hay “Let’s going”. **How about** đi với **-ing**; **Why don’t we** và **Let’s** đi với động từ nguyên mẫu.",
          ex: [["How about eating bun cha for lunch?", "Trưa nay ăn bún chả nhé?"], ["What about meeting at seven instead?", "Hay là gặp nhau lúc bảy giờ?"], ["I am bored. How about watching a film?", "Chán quá. Hay mình xem phim đi?"], ["How about inviting Lan too?", "Rủ cả Lan nữa thì sao?"]] }
      ],
      mistakes: [
        ["Thank you for help me.", "Thank you for helping me.", "**for** là giới từ, nên phía sau là động từ thêm -ing."],
        ["How about go to the park?", "How about going to the park?", "Sau **How about** dùng động từ thêm -ing."],
        ["I am interested in learn Korean.", "I am interested in learning Korean.", "Sau giới từ **in** dùng động từ thêm -ing."]
      ],
      talk: { title: "TÌNH HUỐNG: RỦ ĐỒNG NGHIỆP ĐI ĂN", turns: [
        ["A", "Thank you for helping me with the report yesterday.", "Cảm ơn bạn hôm qua đã giúp mình làm báo cáo."],
        ["B", "No problem. You are good at writing reports, too.", "Không có gì. Bạn cũng giỏi viết báo cáo mà."],
        ["A", "How about having lunch together today? I will pay.", "Hôm nay mình đi ăn trưa cùng nhau nhé? Mình mời."],
        ["B", "Sure! But I need to finish this email before going out.", "Được thôi! Nhưng mình cần viết xong email này trước khi ra ngoài."],
        ["A", "OK. After eating, how about getting some coffee?", "Được. Ăn xong mình đi uống cà phê nhé?"]
      ] },
      tip: "Thấy **giới từ** (at, in, for, about, of, before, after, without) đứng trước thì động từ phía sau **chắc chắn** thêm -ing. Đây là quy tắc dễ nhất của bài." },

    { nav: "🙋 Nhờ ai làm gì", title: "Động từ + người + to + động từ nguyên mẫu, và make / let", sub: "ask me to help, tell him to wait, let me go, make me laugh",
      intro: [
        "Khi muốn nói **ai đó muốn, nhờ, bảo người khác** làm việc gì, ta đặt người đó (dùng **đại từ tân ngữ**: me, him, her, us, them) giữa hai động từ: **ask him to help**.",
        "Riêng **make** (bắt, khiến) và **let** (cho phép, để) thì phía sau **không có to**: let me go, make me laugh."
      ],
      formulas: [
        { f: "want / would like / ask / tell + người + to + động từ nguyên mẫu",
          mean: "**muốn ai làm gì, nhờ ai làm gì, bảo ai làm gì**.",
          parts: [["want someone to", "muốn người khác làm: My mother wants me to come home early."], ["would like someone to", "muốn (lịch sự): I would like you to meet my wife."], ["ask someone to", "**nhờ, đề nghị** (lịch sự): I asked him to help me."], ["tell someone to", "**bảo, dặn** (mạnh hơn, như ra lệnh): The teacher told us to be quiet."]],
          use: "kể lại lời nhờ vả, lời dặn của sếp, thầy cô, bố mẹ; giới thiệu người này với người kia.",
          note: "Người Việt hay nói “I want **that you** come” hoặc “I want **you come**”. Đúng là “I want **you to come**”. Phủ định đặt **not** trước to: “She told me **not to** worry.”",
          ex: [["My boss asked me to work on Saturday.", "Sếp nhờ tôi làm việc vào thứ Bảy."], ["Do you want me to help you?", "Bạn có muốn tôi giúp không?"], ["The doctor told my father to stop smoking.", "Bác sĩ bảo bố tôi bỏ thuốc lá."], ["She told me not to worry.", "Cô ấy bảo tôi đừng lo."]] },
        { f: "make / let + người + động từ nguyên mẫu (không có to)",
          mean: "**make** = bắt, khiến ai làm gì; **let** = cho phép, để ai làm gì.",
          parts: [["make someone do", "bắt buộc hoặc khiến: My mother made me clean my room. That film made me cry."], ["let someone do", "cho phép: My parents let me travel alone."], ["Let me + động từ nguyên mẫu", "đề nghị giúp, xin phép: Let me help you. Let me think."], ["help someone (to) do", "giúp ai làm gì, **có hoặc không có to đều đúng**: He helped me (to) carry the bags."]],
          use: "kể về luật lệ trong gia đình, công ty; đề nghị giúp đỡ bằng **Let me…**; nói điều gì khiến mình vui, buồn.",
          note: "Không nói “make me to do” hay “let me to go”. Sau **make** và **let** là động từ nguyên mẫu **không có to**.",
          ex: [["Let me carry that bag for you.", "Để tôi xách cái túi đó giúp bạn."], ["My boss let me go home early yesterday.", "Hôm qua sếp cho tôi về sớm."], ["Funny films always make me laugh.", "Phim hài lúc nào cũng làm tôi cười."], ["Can you help me find my keys?", "Bạn giúp tôi tìm chìa khóa được không?"]] }
      ],
      mistakes: [
        ["I want you help me.", "I want you to help me.", "Sau **want + người** phải có **to**."],
        ["My mother made me to wash the dishes.", "My mother made me wash the dishes.", "Sau **make + người** dùng động từ nguyên mẫu **không có to**."],
        ["Let me to explain.", "Let me explain.", "Sau **let + người** không dùng to."]
      ],
      talk: { title: "TÌNH HUỐNG: NHỜ BẠN CÙNG PHÒNG", turns: [
        ["A", "Can I ask you to do me a favour?", "Mình nhờ bạn một việc được không?"],
        ["B", "Sure. What do you want me to do?", "Được chứ. Bạn muốn mình làm gì?"],
        ["A", "My mother is visiting tomorrow. She asked me to clean the flat, but I have to work.", "Mai mẹ mình đến chơi. Mẹ dặn mình dọn nhà, nhưng mình phải đi làm."],
        ["B", "Let me help you. I can clean the kitchen.", "Để mình giúp. Mình dọn bếp cho."],
        ["A", "Thank you so much! Let me buy you dinner tonight.", "Cảm ơn bạn nhiều! Tối nay để mình mời bạn ăn tối nhé."]
      ] },
      tip: "Hầu hết động từ: **người + to** (ask me **to** help). Chỉ hai bạn đặc biệt bỏ to: **make** và **let** (let me help). **help** thì dễ tính, có to hay không đều được." }
  ],
  speak: [
    { q: "What do you want to do this weekend?", vi: "Cuối tuần này bạn muốn làm gì?", hint: "Dùng **want to / am planning to / would like to + động từ nguyên mẫu**: I want to…",
      answers: [["I want to sleep late and then visit my parents.", "Tôi muốn ngủ dậy muộn rồi về thăm bố mẹ."], ["I am planning to go to Ba Vi with my friends.", "Tôi định đi Ba Vì với bạn bè."]] },
    { q: "What do you enjoy doing in your free time?", vi: "Lúc rảnh bạn thích làm gì?", hint: "Dùng **enjoy / love / like + động từ thêm -ing**: I enjoy… and I love…",
      answers: [["I enjoy reading and I love cooking for my friends.", "Tôi thích đọc sách và rất thích nấu ăn cho bạn bè."], ["I enjoy playing badminton in the park near my house.", "Tôi thích chơi cầu lông ở công viên gần nhà."]] },
    { q: "Is there anything you can’t stand doing?", vi: "Có việc gì bạn rất ghét phải làm không?", hint: "Dùng **I can’t stand / I hate + động từ thêm -ing**.",
      answers: [["I can’t stand waiting in traffic jams.", "Tôi rất ghét phải chờ khi tắc đường."], ["I hate getting up early on Sundays.", "Tôi ghét phải dậy sớm vào Chủ nhật."]] },
    { q: "What are you good at?", vi: "Bạn giỏi việc gì?", hint: "Dùng **good at + động từ thêm -ing** (hoặc danh từ). Có thể thêm **not very good at**.",
      answers: [["I am good at cooking, but I am not very good at singing.", "Tôi nấu ăn giỏi, nhưng hát không hay lắm."], ["I am good at fixing computers.", "Tôi giỏi sửa máy tính."]] },
    { q: "I am bored. Do you have any ideas?", vi: "Chán quá. Bạn có ý tưởng gì không?", hint: "Rủ rê bằng **How about + động từ thêm -ing?** hoặc **Why don’t we + động từ nguyên mẫu?**",
      answers: [["How about going for a walk around the lake?", "Hay mình đi dạo quanh hồ đi?"], ["Why don’t we watch a film at my place?", "Sao mình không xem phim ở nhà mình nhỉ?"]] },
    { q: "When did you start learning English? Why?", vi: "Bạn bắt đầu học tiếng Anh khi nào? Vì sao?", hint: "Dùng **start + động từ thêm -ing** và **want / need to + động từ nguyên mẫu**.",
      answers: [["I started learning English last year because I want to get a better job.", "Tôi bắt đầu học tiếng Anh năm ngoái vì tôi muốn có công việc tốt hơn."], ["I started learning at school, but now I need to use it for travelling.", "Tôi bắt đầu học ở trường, nhưng giờ tôi cần dùng nó để đi du lịch."]] },
    { q: "What do your parents often ask you to do?", vi: "Bố mẹ hay nhờ hoặc dặn bạn làm gì?", hint: "Dùng **ask / tell / want + me + to + động từ nguyên mẫu**.",
      answers: [["My mother often asks me to call her every evening.", "Mẹ tôi hay dặn tôi gọi điện cho mẹ mỗi tối."], ["My father always tells me not to drive too fast.", "Bố tôi luôn dặn tôi đừng lái xe quá nhanh."]] },
    { q: "Do your parents let you stay out late?", vi: "Bố mẹ có cho bạn đi chơi về muộn không?", hint: "Dùng **let me + động từ nguyên mẫu** hoặc **make me + động từ nguyên mẫu** (không có to).",
      answers: [["Yes, they let me stay out until eleven.", "Có, bố mẹ cho tôi đi đến mười một giờ."], ["No, they make me come home before ten.", "Không, bố mẹ bắt tôi về nhà trước mười giờ."]] }
  ],
  exercises: [
    { title: "Phần 1: Điền dạng đúng của động từ trong ngoặc", items: [
      { q: "I want ___ a new phone.", a: ["to buy"], hint: "buy" },
      { q: "She really enjoys ___ for her family.", a: ["cooking"], hint: "cook" },
      { q: "We decided ___ at home because it was raining.", a: ["to stay"], hint: "stay" },
      { q: "Have you finished ___ your report?", a: ["writing"], hint: "write" },
      { q: "Thank you for ___ me.", a: ["helping"], hint: "help" },
      { q: "How about ___ pho for dinner?", a: ["eating", "having"], hint: "eat" },
      { q: "My boss asked me ___ late on Friday.", a: ["to work"], hint: "work" },
      { q: "I would like ___ a table for four, please.", a: ["to book"], hint: "book" },
      { q: "My father stopped ___ two years ago. Now he is healthier.", a: ["smoking"], hint: "smoke" },
      { q: "I am not very good at ___ English.", a: ["speaking"], hint: "speak" }
    ] },
    { title: "Phần 2: Chọn câu đúng", items: [
      { q: "“Nhớ khóa cửa khi ra ngoài nhé.”", options: ["Remember locking the door when you go out.", "Remember to lock the door when you go out.", "Remember lock the door when you go out."], a: 1, why: "Nhắc việc **phải làm sau này** dùng **remember to + động từ nguyên mẫu**." },
      { q: "Chọn câu đúng:", options: ["My parents let me travel alone.", "My parents let me to travel alone.", "My parents let me travelling alone."], a: 0, why: "Sau **let + người** dùng động từ nguyên mẫu **không có to**." },
      { q: "“Chúng tôi dừng lại để mua nước.”", options: ["We stopped buying some water.", "We stopped buy some water.", "We stopped to buy some water."], a: 2, why: "Dừng lại **để** làm việc khác dùng **stop to**. “Stopped buying” là bỏ hẳn việc mua." },
      { q: "Chọn câu đúng:", options: ["I want you come to my party.", "I want you to come to my party.", "I want that you come to my party."], a: 1, why: "Mẫu đúng: **want + người + to + động từ nguyên mẫu**." },
      { q: "Bạn được mời đi ăn tối và muốn nhận lời:", options: ["I would love to.", "I would love going.", "I love to going."], a: 0, why: "**would love** chỉ đi với **to**: “I would love to.”" },
      { q: "Chọn câu đúng:", options: ["She suggested to take a taxi.", "She suggested taking a taxi.", "She suggested take a taxi."], a: 1, why: "Sau **suggest** dùng động từ thêm -ing." }
    ] },
    { title: "Phần 3: Hoàn thành câu nói", items: [
      { q: "Do you mind ___ the window? It is cold.", a: ["closing", "shutting"], hint: "close" },
      { q: "That sad film made me ___.", a: ["cry"], hint: "cry" },
      { q: "I do not feel like ___ out tonight. I am tired.", a: ["going"], hint: "go" },
      { q: "The teacher told us ___ quiet.", a: ["to be"], hint: "be" }
    ] }
  ],
  vocab: [["want / need / would like to + động từ nguyên mẫu", "muốn / cần / muốn (lịch sự) làm"], ["decide / plan / hope to", "quyết định / định / hy vọng làm"], ["promise / agree to", "hứa / đồng ý làm"], ["enjoy + động từ thêm -ing", "thích làm"], ["can’t stand + động từ thêm -ing", "rất ghét làm"], ["feel like + động từ thêm -ing", "đang muốn làm"], ["finish / keep / practise + động từ thêm -ing", "làm xong / cứ làm / luyện làm"], ["avoid / suggest + động từ thêm -ing", "tránh / gợi ý làm"], ["stop to do / stop doing", "dừng lại để làm / bỏ hẳn việc"], ["remember to do / remember doing", "nhớ phải làm / nhớ đã làm"], ["try to do / try doing", "cố gắng làm / thử làm"], ["good at / interested in + động từ thêm -ing", "giỏi / quan tâm đến"], ["How about + động từ thêm -ing?", "hay là mình… đi?"], ["ask / tell someone to · let / make someone", "nhờ / bảo ai làm · cho phép / bắt ai làm"]],
  tips: [
    "Mỗi tối nói ba câu về ngày mai bằng nhóm **to**: “Tomorrow I **want to**…, I **need to**…, I **am planning to**…”",
    "Viết danh sách sở thích của bạn bằng nhóm **-ing**: “I **enjoy**…, I **can’t stand**…, I **am good at**…” rồi đọc to.",
    "Mỗi lần cảm ơn ai, cố nói thêm lý do: “Thank you for **helping** me / **waiting** for me / **inviting** me.”",
    "Khi rủ bạn đi đâu, luyện nói cả ba cách: “**How about going**…?”, “**Why don’t we go**…?”, “**Let’s go**…”",
    "Kể lại lời dặn của bố mẹ, sếp mỗi ngày: “My boss **asked me to**…”, “My mum **told me not to**…”"
  ]
};
