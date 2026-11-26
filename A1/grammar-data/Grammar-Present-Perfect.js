/* Ngữ pháp nền tảng: Hiện tại hoàn thành (have / has + quá khứ phân từ, ever, just, already, yet, for, since). Hiển thị bởi grammar-lesson.js. */
window.A1_GRAMMAR = {
  icon: "✅",
  short: "Hiện tại hoàn thành",
  hero: ["Hiện tại hoàn thành: đã từng, vừa xong, đến nay", "have been · has eaten · just · yet · since"],
  desc: "Tiếng Việt chỉ có một chữ “đã” cho mọi việc trong quá khứ, nên người Việt hay dùng quá khứ đơn ở mọi nơi. Tiếng Anh tách ra: khi việc trong quá khứ **còn liên quan đến bây giờ** (trải nghiệm của bạn, việc vừa xong, việc kéo dài đến nay) thì dùng **have / has + quá khứ phân từ**. Đây là thì bạn gặp ngay trong những câu làm quen đầu tiên: “Have you ever been to Vietnam?”, “How long have you lived here?”.",
  chips: ["have / has + quá khứ phân từ", "Đã từng: ever, never", "Vừa xong: just, already, yet", "Đến nay: for, since", "So với quá khứ đơn"],
  goal: [
    "Nói câu khẳng định, phủ định, câu hỏi với **have / has + quá khứ phân từ** và dùng tự nhiên dạng rút gọn **I’ve, she’s, haven’t**.",
    "Hỏi và kể trải nghiệm: “**Have you ever** tried phở?” – “Yes, I have. / No, I **have never** tried it.”",
    "Báo việc vừa xong hoặc chưa xong với **just, already, yet** và đặt chúng đúng chỗ trong câu.",
    "Nói mình đã sống, đã làm việc, đã học bao lâu với **for, since** và hỏi lại “**How long have you…?**”.",
    "Chuyển đúng sang **quá khứ đơn** khi kể chi tiết: “Have you seen it?” – “Yes, I **saw** it last week.”"
  ],
  sections: [
    { nav: "🧱 Cấu trúc", title: "Cấu trúc: have / has + quá khứ phân từ", sub: "Hai phần ghép lại: trợ động từ have / has và động từ ở cột thứ ba",
      intro: [
        "Thì hiện tại hoàn thành luôn có **hai phần**: trợ động từ **have** hoặc **has** (chia theo chủ ngữ), rồi **quá khứ phân từ** (cột thứ ba trong bảng động từ bất quy tắc). Với động từ có quy tắc, quá khứ phân từ giống hệt dạng quá khứ: worked, lived, visited.",
        "Động từ bất quy tắc thì phải học thuộc cột thứ ba. Bảng dưới là những động từ bạn dùng nhiều nhất khi nói chuyện bằng thì này. Hãy đọc to theo hàng ngang: go, went, gone."
      ],
      table: { head: ["Động từ nguyên mẫu", "Quá khứ (cột thứ hai)", "Quá khứ phân từ (cột thứ ba)", "Nghĩa"], say: [0, 1, 2],
        rows: [
          ["be", "was / were", "been", "là, ở, đến (một nơi)"],
          ["go", "went", "gone", "đi"],
          ["see", "saw", "seen", "nhìn thấy, xem"],
          ["eat", "ate", "eaten", "ăn"],
          ["do", "did", "done", "làm"],
          ["have", "had", "had", "có, ăn, uống"],
          ["try", "tried", "tried", "thử"],
          ["meet", "met", "met", "gặp"],
          ["finish", "finished", "finished", "hoàn thành, xong"],
          ["live", "lived", "lived", "sống"],
          ["work", "worked", "worked", "làm việc"],
          ["know", "knew", "known", "biết, quen"]
        ] },
      formulas: [
        { f: "chủ ngữ + have / has + quá khứ phân từ",
          mean: "**câu khẳng định**: đã làm việc gì đó, và việc ấy còn liên quan đến bây giờ.",
          parts: [["I / you / we / they + have", "I have finished, they have lived. Rút gọn: **I’ve, you’ve, we’ve, they’ve**."], ["he / she / it + has", "she has eaten, it has started. Rút gọn: **he’s, she’s, it’s**."], ["quá khứ phân từ", "động từ có quy tắc thêm **-ed** (worked); động từ bất quy tắc dùng cột thứ ba (gone, seen, eaten)."]],
          use: "kể trải nghiệm, báo tin vừa xảy ra, nói việc kéo dài đến nay. Khi nói chuyện, người bản xứ gần như luôn dùng dạng rút gọn **I’ve, she’s**.",
          note: "**she’s** có hai nghĩa: she is hoặc she has. Nhìn từ phía sau: “She’s tired” (she is + tính từ), “She’s finished” (she has + quá khứ phân từ). Và đừng quên have: “I finished” là quá khứ đơn; muốn báo việc đã xong và còn liên quan đến bây giờ, nói “I **have** finished.”",
          ex: [["I have lived in Saigon for five years.", "Tôi đã sống ở Sài Gòn được năm năm."], ["She’s visited Da Nang three times.", "Cô ấy đã đến Đà Nẵng ba lần."], ["We’ve met before, at Lan’s party.", "Chúng ta đã gặp nhau rồi, ở bữa tiệc của Lan."], ["My brother has found a new job.", "Anh trai tôi đã tìm được việc mới."]] },
        { f: "chủ ngữ + have not (haven’t) / has not (hasn’t) + quá khứ phân từ",
          mean: "**câu phủ định**: chưa làm, chưa từng làm (tính đến bây giờ).",
          parts: [["have not = haven’t", "đi với I, you, we, they: I haven’t seen that film."], ["has not = hasn’t", "đi với he, she, it: She hasn’t called me."], ["never", "**chưa bao giờ**, thay cho not: I have never been to Japan. Không dùng cả not và never cùng lúc."]],
          use: "nói việc chưa xảy ra cho đến lúc này: chưa ăn, chưa xem, chưa xong. Rất hay dùng để từ chối nhẹ nhàng hoặc giải thích: “Sorry, I haven’t read your message.”",
          note: "Phủ định đặt not sau have / has, động từ chính **vẫn ở dạng quá khứ phân từ**. Không nói “I haven’t see” hay “I didn’t have seen”.",
          ex: [["I haven’t eaten lunch.", "Tôi chưa ăn trưa."], ["He has not finished the report.", "Anh ấy chưa làm xong báo cáo."], ["We haven’t met his new girlfriend.", "Chúng tôi chưa gặp bạn gái mới của anh ấy."], ["My parents have never travelled by plane.", "Bố mẹ tôi chưa bao giờ đi máy bay."]] },
        { f: "Have / Has + chủ ngữ + quá khứ phân từ …?",
          mean: "**câu hỏi**: đưa have / has lên trước chủ ngữ.",
          parts: [["Have you / they …?", "Have you finished? Have they arrived?"], ["Has he / she / it …?", "Has she called? Has the film started?"], ["Trả lời ngắn", "Yes, I have. / No, I haven’t. — Yes, she has. / No, she hasn’t. Lặp lại have / has, không lặp lại động từ chính."], ["What / Where + have you …?", "câu hỏi có từ để hỏi: What have you done? Where have you been?"]],
          use: "hỏi thăm tiến độ, hỏi trải nghiệm, hỏi tin tức: “Have you finished?”, “Has Nam arrived?”, “Where have you been?” (Bạn đi đâu nãy giờ?).",
          note: "Người Việt hay hỏi bằng do / did: “Did you ever go to Hue?” Câu tự nhiên là “**Have** you ever **been** to Hue?” Và trả lời ngắn là “Yes, I **have**”, không phải “Yes, I did”.",
          ex: [["Have you finished your homework?", "Con làm bài tập xong chưa?"], ["Yes, I have. / No, I haven’t.", "Xong rồi ạ. / Chưa ạ."], ["Has the bus left?", "Xe buýt đi rồi à?"], ["Where have you been? I called you twice.", "Bạn đi đâu nãy giờ vậy? Tôi gọi bạn hai lần rồi."]] }
      ],
      mistakes: [
        ["She have finished her work.", "She has finished her work.", "**she** đi với **has**, không đi với have."],
        ["I have saw that film.", "I have seen that film.", "Sau have / has phải là **quá khứ phân từ (cột thứ ba)**: seen, không phải saw."],
        ["Have you eat breakfast?", "Have you eaten breakfast?", "Câu hỏi vẫn cần **quá khứ phân từ** sau chủ ngữ: eaten."]
      ],
      talk: { title: "TÌNH HUỐNG: ĐỒNG NGHIỆP HỎI TIẾN ĐỘ", turns: [
        ["A", "Hi Minh. Have you finished the sales report?", "Chào Minh. Anh làm xong báo cáo doanh số chưa?"],
        ["B", "Not yet, sorry. I’ve written the first part, but I haven’t checked the numbers.", "Chưa, xin lỗi chị. Tôi đã viết xong phần đầu, nhưng chưa kiểm tra số liệu."],
        ["A", "That’s OK. Has Lan sent you her data?", "Không sao. Lan đã gửi dữ liệu cho anh chưa?"],
        ["B", "Yes, she has. She’s sent everything this morning.", "Rồi chị. Sáng nay cô ấy gửi hết rồi."],
        ["A", "Great. Where have you put the file?", "Tốt. Anh để tệp ở đâu?"],
        ["B", "I’ve put it in the team folder. I’ll finish it before lunch.", "Tôi để trong thư mục chung của nhóm. Tôi sẽ làm xong trước bữa trưa."]
      ] },
      tip: "Nghĩ thì này như **hai mảnh ghép**: mảnh “have / has” cho biết ai, mảnh “cột thứ ba” cho biết việc gì. Thiếu một mảnh là sai: “I seen” thiếu have, “I have saw” sai mảnh thứ hai." },

    { nav: "🌍 Trải nghiệm", title: "Trải nghiệm: Have you ever…? I have never…", sub: "Đã từng hay chưa từng, trong cả cuộc đời đến bây giờ",
      intro: [
        "Khi hỏi “Bạn đã từng … chưa?”, ta không quan tâm việc đó xảy ra **lúc nào**, chỉ quan tâm **có hay không** trong cả cuộc đời tính đến bây giờ. Đó là lúc dùng hiện tại hoàn thành với **ever** (đã từng bao giờ) và **never** (chưa bao giờ).",
        "Đây là chủ đề làm quen phổ biến nhất: món ăn đã thử, nơi đã đến, việc đã làm. Một câu hỏi “Have you ever…?” có thể mở ra cả một cuộc trò chuyện."
      ],
      formulas: [
        { f: "Have you ever + quá khứ phân từ …?",
          mean: "**Bạn đã bao giờ … chưa?** hỏi về trải nghiệm trong cả cuộc đời.",
          parts: [["ever", "**đã từng, bao giờ**: đứng giữa chủ ngữ và quá khứ phân từ, chủ yếu trong câu hỏi."], ["Yes, I have.", "trả lời ngắn khi đã từng; có thể nói thêm “Yes, once.” (một lần), “Yes, twice.” (hai lần), “Yes, many times.”"], ["No, I haven’t. / No, never.", "trả lời khi chưa từng."], ["How many times have you …?", "hỏi **bao nhiêu lần**: How many times have you been to Hanoi?"]],
          use: "làm quen, tìm chủ đề nói chuyện, gợi ý món ăn hay nơi đi chơi. Sau câu trả lời, người ta thường hỏi tiếp bằng **quá khứ đơn**: “When did you go? Did you like it?”",
          note: "Không dùng ever trong câu khẳng định thông thường: không nói “I have ever been to Hue.” Câu khẳng định chỉ cần “I **have been** to Hue.”",
          ex: [["Have you ever tried durian?", "Bạn đã bao giờ ăn thử sầu riêng chưa?"], ["Yes, I have. I love it!", "Rồi. Tôi rất thích!"], ["Has your father ever worked abroad?", "Bố bạn đã từng làm việc ở nước ngoài chưa?"], ["How many times have you moved house?", "Bạn đã chuyển nhà bao nhiêu lần rồi?"]] },
        { f: "chủ ngữ + have / has + never + quá khứ phân từ",
          mean: "**chưa bao giờ**: trong cả cuộc đời đến giờ, việc đó chưa xảy ra lần nào.",
          parts: [["never", "đứng giữa have / has và quá khứ phân từ: I have **never** seen snow."], ["have never = chưa bao giờ", "never đã mang nghĩa phủ định, nên **không thêm not**."], ["not … yet", "chưa (nhưng có thể sắp làm), xem phần sau. never mạnh hơn: chưa từng một lần nào."]],
          use: "kể những điều mình chưa trải qua và thường nói thêm mong muốn: “I have never been to Japan, but I want to go.”",
          note: "Người Việt hay dịch từng chữ “tôi chưa bao giờ đi” thành “I never go” (hiện tại đơn, nghĩa là “tôi không bao giờ đi”). Muốn nói chưa từng, dùng **I have never been**.",
          ex: [["I have never seen snow.", "Tôi chưa bao giờ nhìn thấy tuyết."], ["She’s never eaten sushi.", "Cô ấy chưa bao giờ ăn sushi."], ["We have never been abroad.", "Chúng tôi chưa bao giờ ra nước ngoài."], ["Have you never used this app? It is very easy.", "Bạn chưa dùng ứng dụng này bao giờ à? Nó rất dễ."]] },
        { f: "have / has been to … và have / has gone to …",
          mean: "**been to**: đã đến một nơi **và đã về rồi**. **gone to**: đã đi đến đó **và bây giờ vẫn đang ở đó** (chưa về).",
          parts: [["have been to + nơi chốn", "đã từng đến (đã về): I have been to Da Lat twice."], ["has gone to + nơi chốn", "đã đi, giờ không có ở đây: Lan has gone to Da Lat. She will come back on Monday."], ["Have you ever been to …?", "câu hỏi trải nghiệm du lịch luôn dùng **been**, không dùng gone."]],
          use: "kể chuyện du lịch (been) và giải thích ai đó vắng mặt (gone): “Where is Nam?” – “He’s gone to the bank.”",
          note: "Nói “I have gone to Hue” là sai về ý, vì bạn đang đứng đây nói chuyện thì bạn chưa thể vẫn ở Huế. Khi kể về **chính mình**, hầu như luôn dùng **been**.",
          ex: [["I have been to Phu Quoc. It was beautiful.", "Tôi đã đến Phú Quốc rồi. Ở đó đẹp lắm."], ["Have you ever been to Singapore?", "Bạn đã bao giờ đến Singapore chưa?"], ["My boss isn’t here. She has gone to a meeting.", "Sếp tôi không có ở đây. Chị ấy đi họp rồi."], ["They have never been to the north of Vietnam.", "Họ chưa bao giờ đến miền Bắc Việt Nam."]] }
      ],
      mistakes: [
        ["Did you ever go to Hanoi?", "Have you ever been to Hanoi?", "Hỏi trải nghiệm trong cả cuộc đời thì dùng **Have you ever + quá khứ phân từ**, với nơi chốn dùng **been to**."],
        ["I have not never tried it.", "I have never tried it.", "**never** đã là phủ định, không thêm not."],
        ["I have gone to Da Lat three times.", "I have been to Da Lat three times.", "Bạn đã đi và đã về nên dùng **been to**; gone to nghĩa là vẫn đang ở đó."]
      ],
      talk: { title: "TÌNH HUỐNG: LÀM QUEN VỚI BẠN NƯỚC NGOÀI", turns: [
        ["A", "Have you ever been to Vietnam before?", "Bạn đã từng đến Việt Nam trước đây chưa?"],
        ["B", "No, never. This is my first time. Have you ever been to Australia?", "Chưa, chưa bao giờ. Đây là lần đầu. Bạn đã bao giờ đến Úc chưa?"],
        ["A", "Yes, I have. I went to Sydney in 2019 for a conference.", "Rồi. Mình đi Sydney năm 2019 để dự hội thảo."],
        ["B", "Nice! So, have you tried bún chả? Everyone talks about it.", "Hay quá! À, bạn đã ăn bún chả chưa? Ai cũng nhắc đến món đó."],
        ["A", "Of course, I’m from Hanoi! I’ve eaten it hundreds of times.", "Tất nhiên rồi, mình là người Hà Nội mà! Mình ăn hàng trăm lần rồi."],
        ["B", "I have never tried it. Can you show me a good place?", "Mình chưa ăn bao giờ. Bạn chỉ mình một quán ngon được không?"]
      ] },
      tip: "Hỏi **Have you ever…?** để mở chuyện, trả lời **Yes, I have / No, never**, rồi chuyển sang **quá khứ đơn** để kể chi tiết (When did you go?). Du lịch về rồi là **been**, đi chưa về là **gone**." },

    { nav: "⚡ Vừa xong", title: "Vừa xong và kết quả: just, already, yet", sub: "Việc vừa xảy ra, đã xong sớm hơn dự kiến, hay vẫn chưa xong",
      intro: [
        "Nhiều khi ta báo một việc vừa xảy ra mà **kết quả còn thấy được bây giờ**: “Tôi làm mất chìa khóa rồi” (bây giờ không vào nhà được), “Mưa vừa tạnh” (bây giờ đi được). Tiếng Anh dùng hiện tại hoàn thành cho những tin như vậy.",
        "Ba từ hay đi kèm là **just** (vừa mới), **already** (đã … rồi) và **yet** (chưa / … chưa?). Điều quan trọng nhất là **vị trí** của chúng: just và already đứng giữa, yet đứng cuối câu."
      ],
      table: { head: ["Từ", "Nghĩa", "Loại câu", "Vị trí", "Ví dụ"], say: [4],
        rows: [
          ["just", "vừa mới", "khẳng định", "giữa have / has và quá khứ phân từ", "I have just arrived."],
          ["already", "đã … rồi (sớm hơn mong đợi)", "khẳng định (và câu hỏi ngạc nhiên)", "giữa have / has và quá khứ phân từ", "She has already paid."],
          ["yet (phủ định)", "chưa", "phủ định", "cuối câu", "I haven’t finished yet."],
          ["yet (câu hỏi)", "… chưa?", "câu hỏi", "cuối câu", "Have you eaten yet?"]
        ] },
      formulas: [
        { f: "chủ ngữ + have / has + just + quá khứ phân từ",
          mean: "**vừa mới**: việc xảy ra cách đây rất ít, một vài phút hoặc vài giờ.",
          parts: [["just", "đứng **giữa** have / has và quá khứ phân từ: I’ve **just** finished."], ["I’ve just …", "dạng rút gọn rất hay dùng khi báo tin: I’ve just got home. I’ve just heard the news."]],
          use: "báo tin mới, giải thích tình huống hiện tại: “I can’t talk now, I’ve just arrived at the office.”",
          note: "Người Việt hay đặt just ở đầu hoặc cuối câu theo tiếng Việt (“Vừa mới…”): “Just I have arrived.” Vị trí đúng là **sau have / has**.",
          ex: [["I’ve just got home.", "Tôi vừa về đến nhà."], ["The film has just started.", "Phim vừa mới bắt đầu."], ["She has just had a baby.", "Cô ấy vừa sinh em bé."], ["Have you just woken up?", "Bạn vừa mới ngủ dậy à?"]] },
        { f: "chủ ngữ + have / has + already + quá khứ phân từ",
          mean: "**đã … rồi**: việc đã xong, thường **sớm hơn** người nghe nghĩ.",
          parts: [["already (giữa câu)", "vị trí thường gặp nhất: I have **already** paid."], ["already (cuối câu)", "cũng được, nghe nhấn mạnh hơn: I’ve paid already."], ["Have you already …?", "câu hỏi tỏ ý **ngạc nhiên**: Bạn đã … rồi á? Câu hỏi bình thường dùng yet."]],
          use: "từ chối lời đề nghị vì việc đã xong (“No, thanks. I’ve already eaten.”), báo đã làm việc ai đó nhờ.",
          note: "already dùng trong câu **khẳng định**. Câu phủ định không dùng already: không nói “I haven’t already finished”, nói “I haven’t finished **yet**”.",
          ex: [["No, thanks. I’ve already eaten.", "Thôi, cảm ơn. Tôi ăn rồi."], ["Don’t worry, I have already booked the tickets.", "Đừng lo, tôi đã đặt vé rồi."], ["He has already left the office.", "Anh ấy đã rời văn phòng rồi."], ["Have you already finished? That was fast!", "Bạn xong rồi á? Nhanh thế!"]] },
        { f: "… haven’t / hasn’t + quá khứ phân từ … yet — Have you … yet?",
          mean: "**chưa** (trong câu phủ định) và **… chưa?** (trong câu hỏi): việc được mong đợi nhưng tính đến giờ chưa xảy ra.",
          parts: [["not … yet", "**chưa**: I haven’t finished **yet**. yet đứng **cuối câu**."], ["Have you … yet?", "**… chưa?**: Have you called her **yet**? Cách hỏi tiến độ thông thường."], ["Not yet.", "câu trả lời ngắn rất tự nhiên: **Chưa.**"]],
          use: "hỏi và trả lời về tiến độ công việc, việc nhà, chuẩn bị chuyến đi: “Have you packed yet?” – “Not yet.”",
          note: "Câu “Bạn ăn cơm chưa?” của người Việt dịch đúng là “Have you eaten **yet**?” Không nói “You eat yet?” (thiếu trợ động từ, sai dạng động từ). Người Mỹ đôi khi nói “Did you eat yet?”, nhưng ở trình độ này hãy dùng cách chuẩn với **have**.",
          ex: [["Have you eaten yet?", "Bạn ăn cơm chưa?"], ["Not yet. I’m very hungry.", "Chưa. Tôi đói lắm."], ["The package hasn’t arrived yet.", "Gói hàng vẫn chưa đến."], ["Has your sister found a flat yet?", "Chị gái bạn tìm được căn hộ chưa?"]] }
      ],
      mistakes: [
        ["I have finished yet my homework.", "I have already finished my homework.", "Câu khẳng định dùng **already** (giữa câu); **yet** chỉ dùng trong phủ định và câu hỏi, đứng cuối câu."],
        ["I haven’t yet eaten lunch.", "I haven’t eaten lunch yet.", "Khi nói chuyện, **yet** đứng **cuối câu**."],
        ["She just has left.", "She has just left.", "**just** đứng sau has, trước quá khứ phân từ."]
      ],
      talk: { title: "TÌNH HUỐNG: CHUẨN BỊ ĐI DU LỊCH CÙNG NHAU", turns: [
        ["A", "We leave tomorrow morning. Have you packed yet?", "Sáng mai mình đi rồi. Bạn xếp đồ chưa?"],
        ["B", "Not yet. I’ve just got home from work.", "Chưa. Mình vừa đi làm về."],
        ["A", "OK. I’ve already booked the taxi to the airport.", "Được. Mình đặt taxi ra sân bay rồi."],
        ["B", "Great! Has Huong sent you the hotel address?", "Tuyệt! Hương đã gửi địa chỉ khách sạn cho bạn chưa?"],
        ["A", "Yes, she has. She’s just sent it.", "Rồi. Cô ấy vừa gửi xong."],
        ["B", "Perfect. I’ll pack tonight.", "Hoàn hảo. Tối nay mình xếp đồ."]
      ] },
      tip: "**just** và **already** đứng **giữa** (sau have / has), **yet** đứng **cuối**. Nhớ câu “Ăn cơm chưa?” = “Have you eaten **yet**?” – “Rồi, ăn rồi.” = “Yes, I’ve **already** eaten.”" },

    { nav: "⏳ Đến nay", title: "Kéo dài đến nay: for, since, How long…?", sub: "Việc bắt đầu trong quá khứ và bây giờ vẫn còn tiếp diễn",
      intro: [
        "Tiếng Việt nói “Tôi sống ở đây **năm năm rồi**” bằng thì hiện tại. Người Việt vì thế hay nói “I live here for five years”, câu này sai. Khi việc **bắt đầu trong quá khứ và bây giờ vẫn còn**, tiếng Anh dùng hiện tại hoàn thành: “I **have lived** here for five years.”",
        "Có hai từ để nói thời gian: **for** + một khoảng thời gian (bao lâu), và **since** + một mốc thời gian (từ khi nào). Câu hỏi tương ứng là **How long have you…?**"
      ],
      table: { head: ["for + khoảng thời gian (bao lâu)", "since + mốc thời gian (từ khi nào)"], say: [0, 1],
        rows: [
          ["for two hours", "since 9 o’clock"],
          ["for three days", "since Monday"],
          ["for six months", "since March"],
          ["for ten years", "since 2015"],
          ["for a long time", "since I was a child"]
        ] },
      formulas: [
        { f: "chủ ngữ + have / has + quá khứ phân từ + for + khoảng thời gian",
          mean: "**đã … được (bao lâu)**: đếm độ dài từ lúc bắt đầu đến bây giờ.",
          parts: [["for", "đi với **khoảng thời gian**: for two years, for a week, for a long time."], ["have lived / have worked / have known", "các động từ hay dùng nhất: sống, làm việc, quen biết, học."], ["have been + nơi chốn / tính từ", "đã ở đâu, đã như thế nào được bao lâu: I have been here for an hour. We have been married for ten years."]],
          use: "giới thiệu bản thân khi làm quen hoặc phỏng vấn: bạn sống ở thành phố này, làm công ty này, học tiếng Anh được bao lâu.",
          note: "Câu “I live here for five years” và “I am here for an hour” đều sai khi ý là “đến giờ đã được”. Phải dùng **have lived, have been**. Cũng không dùng quá khứ đơn nếu bạn vẫn còn đang sống ở đó.",
          ex: [["I have lived in Hanoi for ten years.", "Tôi đã sống ở Hà Nội được mười năm."], ["She has worked at this hospital for three years.", "Cô ấy đã làm ở bệnh viện này được ba năm."], ["We have known each other for a long time.", "Chúng tôi quen nhau lâu rồi."], ["I haven’t seen my grandparents for six months.", "Đã sáu tháng rồi tôi không gặp ông bà."]] },
        { f: "chủ ngữ + have / has + quá khứ phân từ + since + mốc thời gian",
          mean: "**đã … từ (khi nào)**: nói thời điểm việc bắt đầu, việc đó vẫn kéo dài đến nay.",
          parts: [["since + mốc", "since 2020, since Monday, since last summer, since 8 a.m."], ["since + câu quá khứ đơn", "since I was a student, since we moved here. Phần sau since dùng **quá khứ đơn**."], ["for và since", "**for** trả lời “bao lâu?”, **since** trả lời “từ khi nào?”. Cùng một ý: for three years = since 2023 (nếu bây giờ là 2026)."]],
          use: "kể về công việc, nơi ở, sở thích: “I have played the guitar since I was twelve.”",
          note: "Người Việt hay dùng “from” theo chữ “từ”: “I have worked here from 2020.” Với ý kéo dài đến nay, dùng **since 2020**.",
          ex: [["I have worked here since 2021.", "Tôi làm ở đây từ năm 2021."], ["He has been in the meeting since 9 o’clock.", "Anh ấy họp từ 9 giờ đến giờ."], ["They have lived in Da Nang since they got married.", "Họ sống ở Đà Nẵng từ khi kết hôn."], ["I haven’t eaten anything since breakfast.", "Từ bữa sáng đến giờ tôi chưa ăn gì."]] },
        { f: "How long have / has + chủ ngữ + quá khứ phân từ …?",
          mean: "**… được bao lâu rồi?** hỏi độ dài của một việc vẫn đang tiếp diễn.",
          parts: [["How long have you …?", "How long have you lived here? How long have you worked there?"], ["How long has he / she …?", "How long has she been a teacher?"], ["Trả lời", "**For** + khoảng thời gian (For two years.) hoặc **Since** + mốc (Since 2024.)."]],
          use: "câu hỏi rất hay gặp khi làm quen, hỏi về công việc và nơi ở; sau đó hỏi tiếp “Do you like it?”",
          note: "Đừng hỏi “How long do you live here?” (nghe như hỏi bạn **sẽ** sống ở đây bao lâu) hay “How long did you live here?” (nghe như bạn đã chuyển đi rồi). Hỏi việc vẫn đang tiếp diễn: **How long have you lived here?**",
          ex: [["How long have you lived in Saigon?", "Bạn sống ở Sài Gòn bao lâu rồi?"], ["For about six years.", "Khoảng sáu năm."], ["How long has your sister been a nurse?", "Chị bạn làm y tá được bao lâu rồi?"], ["Since 2018. She loves her job.", "Từ năm 2018. Chị ấy rất yêu công việc của mình."]] }
      ],
      mistakes: [
        ["I live in Hanoi for five years.", "I have lived in Hanoi for five years.", "Việc bắt đầu trong quá khứ và vẫn tiếp diễn → **have lived**, không dùng hiện tại đơn."],
        ["She has worked here since three years.", "She has worked here for three years.", "Khoảng thời gian (three years) đi với **for**; mốc thời gian mới đi với since."],
        ["How long do you work at this company?", "How long have you worked at this company?", "Hỏi việc kéo dài đến nay dùng **How long have you + quá khứ phân từ**."]
      ],
      talk: { title: "TÌNH HUỐNG: PHỎNG VẤN XIN VIỆC", turns: [
        ["A", "So, tell me about your experience. How long have you worked in sales?", "Vậy hãy kể về kinh nghiệm của bạn. Bạn làm kinh doanh được bao lâu rồi?"],
        ["B", "I have worked in sales for six years.", "Tôi đã làm kinh doanh được sáu năm."],
        ["A", "And how long have you been at your current company?", "Còn bạn ở công ty hiện tại được bao lâu rồi?"],
        ["B", "Since 2022. Before that, I worked at a bank for two years.", "Từ năm 2022. Trước đó tôi làm ở ngân hàng hai năm."],
        ["A", "I see. Have you ever managed a team?", "Tôi hiểu rồi. Bạn đã bao giờ quản lý một nhóm chưa?"],
        ["B", "Yes, I have. I’ve managed a team of five people since last year.", "Rồi ạ. Từ năm ngoái tôi quản lý một nhóm năm người."]
      ] },
      tip: "**for** = bao lâu (một con số đếm được: two years, a week); **since** = từ khi nào (một điểm trên lịch: 2020, Monday, I was a child). Câu “before that, I worked…” dùng quá khứ đơn vì việc đó đã **kết thúc**." },

    { nav: "⚖️ So với quá khứ đơn", title: "Hiện tại hoàn thành hay quá khứ đơn?", sub: "Có thời gian cụ thể đã qua thì dùng quá khứ đơn",
      intro: [
        "Cả hai thì đều nói về quá khứ. Khác nhau ở chỗ: **hiện tại hoàn thành** không nói rõ lúc nào, chỉ quan tâm kết quả hoặc trải nghiệm **đến bây giờ**. **Quá khứ đơn** gắn với một **thời điểm cụ thể đã kết thúc**: yesterday, last week, in 2019, two days ago.",
        "Trong một cuộc trò chuyện thật, hai thì này đi liền nhau: câu mở đầu bằng hiện tại hoàn thành, các câu kể chi tiết bằng quá khứ đơn. Xem thêm trang **Quá khứ đơn** để ôn động từ bất quy tắc."
      ],
      table: { head: ["", "Hiện tại hoàn thành", "Quá khứ đơn"], say: [],
        rows: [
          ["Thời gian", "không nói rõ, hoặc kéo dài đến nay", "thời điểm cụ thể đã kết thúc"],
          ["Từ đi kèm", "ever, never, just, already, yet, for, since, so far, this week", "yesterday, last week / month / year, … ago, in 2020, when I was young"],
          ["Câu hỏi", "Have you seen the new film?", "When did you see it?"],
          ["Câu trả lời", "Yes, I have.", "I saw it last Sunday."]
        ] },
      formulas: [
        { f: "Have you …? (mở đầu) → When / Where did you …? (chi tiết)",
          mean: "**mở đầu bằng hiện tại hoàn thành, kể tiếp bằng quá khứ đơn**: cách nói chuyện tự nhiên nhất.",
          parts: [["Have you (ever) + quá khứ phân từ?", "hỏi có hay không, chưa cần biết khi nào."], ["When / Where / Who … did you + động từ nguyên mẫu?", "khi đã biết là có, hỏi chi tiết: thời gian, địa điểm, với ai."], ["Yes, I have. I + động từ quá khứ (cột thứ hai) …", "trả lời: xác nhận bằng have, kể tiếp bằng quá khứ đơn."]],
          use: "mọi cuộc trò chuyện về phim ảnh, món ăn, du lịch, tin tức: hỏi trải nghiệm trước, rồi kể chuyện.",
          note: "Sau “Yes, I have” mà bạn nói ra thời gian cụ thể thì phải chuyển sang quá khứ đơn: “Yes, I have. I **saw** it last week.” Không nói “I have seen it last week.”",
          ex: [["Have you seen the new Doraemon film?", "Bạn đã xem phim Doraemon mới chưa?"], ["Yes, I have. I saw it last weekend.", "Rồi. Tôi xem cuối tuần trước."], ["Who did you go with?", "Bạn đi xem với ai?"], ["I went with my cousins. It was really funny.", "Tôi đi với mấy anh chị họ. Phim vui lắm."]] },
        { f: "Không dùng hiện tại hoàn thành với yesterday / last … / … ago / in + năm đã qua",
          mean: "**có thời gian cụ thể đã kết thúc → bắt buộc dùng quá khứ đơn.**",
          parts: [["yesterday, last night, last year", "quá khứ đơn: I called her yesterday."], ["… ago", "quá khứ đơn: She left two hours ago."], ["When …?", "câu hỏi When luôn dùng quá khứ đơn: When did you arrive? (không nói When have you arrived?)"], ["this week, today, this year", "khoảng thời gian **chưa kết thúc** nên dùng được hiện tại hoàn thành: I have drunk three coffees today."]],
          use: "kiểm tra lại câu trước khi nói: có từ chỉ thời điểm đã qua không? Có thì dùng quá khứ đơn.",
          note: "Đây là lỗi người Việt mắc nhiều nhất với thì này: “I have met him yesterday.” Chữ yesterday là tín hiệu dùng **quá khứ đơn**: “I **met** him yesterday.”",
          ex: [["I met him yesterday.", "Tôi gặp anh ấy hôm qua."], ["We moved here three years ago.", "Chúng tôi chuyển đến đây ba năm trước."], ["When did you start this job?", "Bạn bắt đầu công việc này khi nào?"], ["I have had three cups of coffee today.", "Hôm nay tôi đã uống ba cốc cà phê rồi."]] },
        { f: "chủ ngữ + have / has + quá khứ phân từ (còn đến nay) và chủ ngữ + động từ quá khứ (đã kết thúc)",
          mean: "**còn liên quan đến bây giờ hay đã kết thúc hẳn?** cùng một việc, đổi thì là đổi nghĩa.",
          parts: [["I have lived in Hue for two years.", "vẫn đang sống ở Huế."], ["I lived in Hue for two years.", "đã từng sống hai năm, **bây giờ không còn sống ở đó**."], ["I have lost my keys.", "mất chìa khóa, **bây giờ vẫn chưa tìm thấy**."], ["I lost my keys last week.", "chỉ kể chuyện tuần trước, có thể đã tìm lại được."]],
          use: "khi kể về công việc cũ, nơi ở cũ (quá khứ đơn) và hiện tại (hiện tại hoàn thành): “I worked at a bank for two years. Now I have worked here for six months.”",
          note: "Người Việt hay dùng quá khứ đơn cho việc vẫn đang tiếp diễn: “I worked here for three years” khiến người nghe tưởng bạn **đã nghỉ việc**.",
          ex: [["I have worked here for three years.", "Tôi làm ở đây được ba năm rồi (vẫn đang làm)."], ["I worked in Japan for two years.", "Tôi từng làm ở Nhật hai năm (giờ không còn)."], ["Oh no, I’ve lost my wallet!", "Ôi không, tôi làm mất ví rồi!"], ["My grandfather lived in Hue all his life.", "Ông tôi sống cả đời ở Huế (ông đã mất)."]] }
      ],
      mistakes: [
        ["I have seen him yesterday.", "I saw him yesterday.", "Có **yesterday** (thời điểm đã qua) thì dùng **quá khứ đơn**."],
        ["When have you arrived?", "When did you arrive?", "Câu hỏi **When** luôn dùng quá khứ đơn."],
        ["Yes, I have. I have gone there in 2019.", "Yes, I have. I went there in 2019.", "Có năm cụ thể **in 2019** nên kể bằng quá khứ đơn **went**."]
      ],
      talk: { title: "TÌNH HUỐNG: NÓI CHUYỆN VỀ NHÀ HÀNG MỚI", turns: [
        ["A", "Have you been to the new pizza place on Le Loi Street?", "Bạn đã đến quán pizza mới trên đường Lê Lợi chưa?"],
        ["B", "Yes, I have. I went there with my colleagues last Friday.", "Rồi. Mình đi với đồng nghiệp thứ Sáu tuần trước."],
        ["A", "Really? What did you order?", "Thật à? Bạn gọi món gì?"],
        ["B", "We ordered a big seafood pizza. It was delicious, but quite expensive.", "Bọn mình gọi một cái pizza hải sản to. Ngon lắm nhưng hơi đắt."],
        ["A", "I haven’t been there yet. Maybe I’ll go this weekend.", "Mình chưa đến đó. Có lẽ cuối tuần này mình sẽ đi."]
      ] },
      tip: "Hỏi mình một câu: **“Có nói lúc nào không?”** Có thời điểm đã qua (yesterday, last…, ago, in 2019, When…?) → quá khứ đơn. Không nói lúc nào, hoặc kéo dài đến nay → hiện tại hoàn thành." }
  ],
  speak: [
    { q: "How long have you lived in your city?", vi: "Bạn sống ở thành phố của bạn bao lâu rồi?", hint: "Dùng **I have lived in … for + khoảng thời gian** hoặc **since + mốc**. Nếu đã chuyển đến, thêm một câu quá khứ đơn: I moved here in…",
      answers: [["I have lived in Hanoi all my life. I was born here.", "Tôi sống ở Hà Nội cả đời. Tôi sinh ra ở đây."], ["I have lived in Saigon for seven years. I moved here for university.", "Tôi sống ở Sài Gòn được bảy năm. Tôi chuyển đến đây để học đại học."], ["I have lived in Da Nang since 2020.", "Tôi sống ở Đà Nẵng từ năm 2020."]] },
    { q: "What do you do, and how long have you worked there?", vi: "Bạn làm nghề gì, và bạn làm ở đó bao lâu rồi?", hint: "Nghề nghiệp dùng hiện tại đơn (**I am a… / I work at…**), thời gian dùng **I have worked there for / since…**",
      answers: [["I am an accountant. I have worked at a small company for three years.", "Tôi là kế toán. Tôi làm ở một công ty nhỏ được ba năm."], ["I work in a hotel. I have been there since last March.", "Tôi làm ở khách sạn. Tôi làm ở đó từ tháng Ba năm ngoái."]] },
    { q: "Have you ever been abroad?", vi: "Bạn đã bao giờ ra nước ngoài chưa?", hint: "Trả lời **Yes, I have / No, I haven’t**, rồi kể chi tiết bằng **quá khứ đơn**: I went to … in … / I have never been abroad, but I want to go to…",
      answers: [["Yes, I have. I went to Thailand in 2023. It was my first trip abroad.", "Rồi. Tôi đi Thái Lan năm 2023. Đó là chuyến đi nước ngoài đầu tiên của tôi."], ["No, I haven’t. I have never been abroad, but I really want to visit Korea.", "Chưa. Tôi chưa bao giờ ra nước ngoài, nhưng tôi rất muốn đi Hàn Quốc."]] },
    { q: "What is the most interesting food you have ever tried?", vi: "Món ăn thú vị nhất mà bạn từng thử là gì?", hint: "Dùng **The most … I have ever tried is…** rồi nói bạn ăn ở đâu, khi nào bằng quá khứ đơn.",
      answers: [["The most interesting food I have ever tried is snake. I ate it in Le Mat village.", "Món thú vị nhất tôi từng ăn là thịt rắn. Tôi ăn ở làng Lệ Mật."], ["I have tried balut. It looked strange, but it tasted good.", "Tôi đã ăn trứng vịt lộn. Trông thì lạ nhưng vị ngon."]] },
    { q: "Have you eaten yet today? What have you had?", vi: "Hôm nay bạn ăn gì chưa? Bạn đã ăn những gì rồi?", hint: "Dùng **Yes, I’ve already… / Not yet** và **I have had / I have eaten …** (today chưa kết thúc).",
      answers: [["Yes, I’ve already had breakfast. I have had a bowl of phở and an iced coffee.", "Rồi, tôi ăn sáng rồi. Tôi đã ăn một bát phở và uống một cốc cà phê đá."], ["Not yet. I haven’t had time. I’m very hungry!", "Chưa. Tôi chưa có thời gian. Tôi đói quá!"]] },
    { q: "Have you seen any good films recently?", vi: "Gần đây bạn có xem bộ phim nào hay không?", hint: "Mở đầu bằng **I have seen / I haven’t seen…**, rồi kể bằng quá khứ đơn: **I saw it last…, It was…**",
      answers: [["Yes, I have. I saw a Korean film last Saturday. It was very sad.", "Có. Thứ Bảy tuần trước tôi xem một phim Hàn. Phim rất buồn."], ["No, I haven’t. I have been very busy this month.", "Không. Tháng này tôi bận quá."]] },
    { q: "How long have you studied English? Have you ever talked to a foreigner?", vi: "Bạn học tiếng Anh bao lâu rồi? Bạn đã bao giờ nói chuyện với người nước ngoài chưa?", hint: "Dùng **I have studied English for / since…** và **Yes, I have… / No, I have never…**",
      answers: [["I have studied English for two years. Yes, I have talked to tourists in the Old Quarter.", "Tôi học tiếng Anh được hai năm. Có, tôi đã nói chuyện với khách du lịch ở phố cổ."], ["I have studied English since I was ten, but I have never talked to a foreigner.", "Tôi học tiếng Anh từ năm mười tuổi, nhưng tôi chưa bao giờ nói chuyện với người nước ngoài."]] },
    { q: "What have you done this week?", vi: "Tuần này bạn đã làm được những gì?", hint: "this week chưa kết thúc nên dùng **I have + quá khứ phân từ**; thêm **just / already / not … yet**.",
      answers: [["I have finished a big project, and I have already been to the gym twice.", "Tôi đã làm xong một dự án lớn, và tôi đã đi tập gym hai lần rồi."], ["I have just started a new course. I haven’t done my homework yet!", "Tôi vừa bắt đầu một khóa học mới. Tôi chưa làm bài tập về nhà!"]] }
  ],
  exercises: [
    { title: "Phần 1: Chia động từ trong ngoặc ở thì hiện tại hoàn thành", items: [
      { q: "I ___ (live) in Hanoi for ten years.", a: ["have lived", "'ve lived"], hint: "đã sống" },
      { q: "She ___ (finish) her homework.", a: ["has finished", "'s finished"], hint: "đã làm xong" },
      { q: "We ___ (not see) that film yet.", a: ["have not seen", "haven't seen"], hint: "chưa xem" },
      { q: "___ you ever ___ (eat) durian?", a: ["have eaten", "have, eaten"], hint: "gõ hai từ, cách nhau bởi dấu cách" },
      { q: "My father ___ (never / be) to Saigon.", a: ["has never been", "'s never been"], hint: "chưa bao giờ đến" },
      { q: "They ___ (just / arrive) at the airport.", a: ["have just arrived", "'ve just arrived"], hint: "vừa mới đến" },
      { q: "He ___ (not call) me since Monday.", a: ["has not called", "hasn't called"], hint: "không gọi" }
    ] },
    { title: "Phần 2: Điền for, since, just, already hoặc yet", items: [
      { q: "I have worked here ___ 2020.", a: ["since"], hint: "mốc thời gian" },
      { q: "We have known each other ___ six years.", a: ["for"], hint: "khoảng thời gian" },
      { q: "Have you finished your report ___?", a: ["yet"], hint: "câu hỏi: … chưa?" },
      { q: "No, thanks. I have ___ eaten. (đã ăn rồi)", a: ["already"], hint: "đã … rồi" },
      { q: "The rain has ___ stopped. We can go now. (vừa mới tạnh)", a: ["just"], hint: "vừa mới" }
    ] },
    { title: "Phần 3: Chọn câu đúng", items: [
      { q: "“Tôi đã gặp anh ấy hôm qua.”", options: ["I have met him yesterday.", "I met him yesterday.", "I have meet him yesterday."], a: 1, why: "Có **yesterday** (thời điểm đã qua) → **quá khứ đơn**: met." },
      { q: "Lan không có ở văn phòng. Cô ấy đi ngân hàng rồi, chưa về.", options: ["She has been to the bank.", "She has gone to the bank.", "She went to the bank yesterday."], a: 1, why: "Đi và **vẫn đang ở đó** → **has gone to**." },
      { q: "Hỏi người bạn mới quen đã sống ở thành phố này bao lâu.", options: ["How long do you live here?", "How long did you live here?", "How long have you lived here?"], a: 2, why: "Việc kéo dài đến nay → **How long have you + quá khứ phân từ**." },
      { q: "Chọn câu đúng:", options: ["I have never been to Japan.", "I have not never been to Japan.", "I never have been to Japan yesterday."], a: 0, why: "**never** đứng giữa have và quá khứ phân từ, không thêm not." },
      { q: "“Have you ever tried bánh xèo?” — Trả lời đúng:", options: ["Yes, I did.", "Yes, I have.", "Yes, I tried."], a: 1, why: "Trả lời ngắn lặp lại trợ động từ **have**." },
      { q: "Chọn câu đúng:", options: ["When have you arrived in Hue?", "When did you arrive in Hue?", "When you have arrived in Hue?"], a: 1, why: "Câu hỏi **When** luôn dùng **quá khứ đơn**." }
    ] }
  ],
  vocab: [["have / has + quá khứ phân từ", "đã (còn liên quan đến bây giờ)"], ["I’ve / she’s / haven’t / hasn’t", "dạng rút gọn"], ["Have you ever …?", "Bạn đã bao giờ … chưa?"], ["never", "chưa bao giờ"], ["been to / gone to", "đã đến (đã về) / đã đi (chưa về)"], ["just", "vừa mới"], ["already", "đã … rồi"], ["yet", "chưa / … chưa?"], ["Not yet.", "Chưa."], ["for + khoảng thời gian", "được (bao lâu)"], ["since + mốc thời gian", "từ (khi nào)"], ["How long have you …?", "Bạn … được bao lâu rồi?"], ["so far", "cho đến giờ"], ["once / twice / three times", "một lần / hai lần / ba lần"]],
  tips: [
    "Học động từ bất quy tắc theo bộ ba và đọc to: **go, went, gone; see, saw, seen; eat, ate, eaten**. Cột thứ ba chính là thứ bạn cần cho thì này.",
    "Mỗi ngày viết ba câu “**I have never …**” về những việc bạn chưa làm, rồi hỏi một người bạn “**Have you ever …?**” với cùng ý đó.",
    "Chuẩn bị sẵn câu giới thiệu: “I have lived in … for … years. I have worked at … since …” và nói to cho đến khi trôi chảy.",
    "Khi nghe câu hỏi có **When**, hoặc khi bạn định nói **yesterday, last, ago**, tự nhắc mình: chuyển sang **quá khứ đơn**.",
    "Thay câu “Ăn cơm chưa?” hằng ngày bằng tiếng Anh: “**Have you eaten yet?**” – “**Yes, I’ve already eaten.** / **Not yet.**”"
  ]
};