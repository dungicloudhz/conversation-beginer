/* Cheat sheet: English Communication Toolkit (Đặt câu giao tiếp: cụm từ, giới từ, liên từ, cụm động từ). Hiển thị bởi cheatsheet.js. */
window.A1_CHEAT = {
  goal: [
    "Đặt câu đúng thứ tự **Ai – Làm gì – Cái gì – Ở đâu – Khi nào** và chọn đúng thì: hiện tại đơn, hiện tại tiếp diễn, quá khứ đơn, going to.",
    "Dùng các cụm từ giao tiếp theo chức năng: chào hỏi, cảm ơn, nhờ vả, nêu ý kiến, hỏi lại, mời và từ chối khéo.",
    "Dùng đúng giới từ thời gian **at / on / in**, giới từ nơi chốn và các cụm cố định như good at, interested in, listen to.",
    "Nối hai ý bằng liên từ **and, but, so, because, although, when, if** và đặt dấu phẩy đúng chỗ.",
    "Dùng các cụm động từ thông dụng (wake up, turn off, look after, hang out) và biết đặt tân ngữ đúng chỗ: **turn it off**."
  ],
  phrases: [
    { h: "Chào hỏi và bắt chuyện", rows: [
      ["Long time no see! What have you been up to?", "Lâu rồi không gặp! Dạo này bạn làm gì?"],
      ["How is it going?", "Dạo này thế nào?", "Khi nói luôn rút gọn: How’s it going? (How’s = How is). Cách hỏi thân mật."],
      ["Not bad, thanks. And you?", "Cũng ổn, cảm ơn. Còn bạn?"],
      ["Thanks a lot. I really appreciate it.", "Cảm ơn nhiều. Tôi thật sự trân trọng."],
      ["I am sorry for being late.", "Xin lỗi vì tôi đến muộn.", "Khi nói thường dùng I’m sorry (I’m = I am)."]
    ]},
    { h: "Nhờ vả và đề nghị giúp", rows: [
      ["Could you help me with this?", "Bạn giúp tôi việc này được không?", "Could lịch sự hơn Can, hợp khi nhờ người lạ."],
      ["Would you mind opening the window?", "Phiền bạn mở cửa sổ giúp được không?"],
      ["Could you tell me where the station is?", "Bạn chỉ giúp tôi nhà ga ở đâu được không?"],
      ["Do you need a hand? / Let me help you with that.", "Bạn có cần giúp một tay không? / Để tôi giúp bạn việc đó."],
      ["Why do we not have lunch together?", "Sao mình không ăn trưa cùng nhau nhỉ?", "Câu rủ này luôn nói ở dạng rút gọn: Why don’t we have lunch together? (don’t = do not)."]
    ]},
    { h: "Nêu ý kiến, đồng ý, phản đối", rows: [
      ["I think it is a good idea.", "Tôi nghĩ đó là ý hay.", "Khi nói thường rút gọn: it’s = it is."],
      ["In my opinion, we should start early.", "Theo tôi, ta nên bắt đầu sớm."],
      ["I agree with you.", "Tôi đồng ý với bạn."],
      ["I am not sure about that.", "Tôi không chắc về điều đó."],
      ["I see your point, but I think it is too expensive.", "Tôi hiểu ý bạn, nhưng tôi thấy nó quá đắt.", "Phản đối lịch sự: công nhận ý người kia trước rồi mới dùng **but**."]
    ]},
    { h: "Hỏi lại và cứu nguy khi bí từ", rows: [
      ["Sorry, could you say that again?", "Xin lỗi, bạn nói lại được không?"],
      ["Could you speak more slowly, please?", "Bạn nói chậm hơn được không?"],
      ["What do you mean by that?", "Ý bạn là gì?"],
      ["How do you say “cụm động từ” in English?", "“Cụm động từ” nói tiếng Anh thế nào?"],
      ["Let me think for a second. / How can I put it?", "Để tôi nghĩ một chút. / Nói sao nhỉ?"]
    ]},
    { h: "Hẹn gặp, mời và từ chối khéo", rows: [
      ["Are you free on Saturday? Let’s hang out and catch up.", "Thứ Bảy bạn rảnh không? Mình đi chơi và hàn huyên nhé.", "Let’s = Let us; khi rủ luôn dùng dạng rút gọn."],
      ["Would you like to join us for dinner?", "Bạn có muốn ăn tối cùng chúng tôi không?"],
      ["I would love to, but I have to work.", "Tôi rất muốn nhưng tôi phải làm việc.", "Khi nói thường rút gọn: I’d love to (I’d = I would)."],
      ["I can pick you up at three.", "Tôi có thể đón bạn lúc ba giờ."],
      ["I am looking forward to it.", "Tôi rất mong chờ điều đó."]
    ]}
  ],
  grammar: [
    { h: "Khung câu nền tảng và thứ tự các phần trong câu",
      f: ["chủ ngữ + am / is / are + tính từ, danh từ hoặc nơi chốn", "chủ ngữ + động từ + tân ngữ + nơi chốn + thời gian", "chủ ngữ + do not / does not + động từ nguyên mẫu", "Từ để hỏi + do / does + chủ ngữ + động từ nguyên mẫu?"],
      items: [
        { f: "chủ ngữ + am / is / are + tính từ, danh từ hoặc nơi chốn",
          mean: "**ai đó là gì, như thế nào, hoặc đang ở đâu**. Động từ be nối chủ ngữ với phần mô tả.",
          parts: [
            ["am", "chỉ đi với **I**: I am tired."],
            ["is", "đi với **he, she, it** và một người, một vật: She is a nurse, The bank is near here."],
            ["are", "đi với **you, we, they** và danh từ số nhiều: They are at home."],
            ["tính từ / danh từ / nơi chốn", "phần mô tả: tính từ (happy, busy), danh từ (a teacher), nơi chốn (at work, in Hanoi)."]
          ],
          use: "dùng để giới thiệu, mô tả cảm xúc, tính chất, nghề nghiệp, vị trí. Câu không có động từ thường nào khác thì phải có be.",
          note: "Tiếng Việt nói “Tôi mệt”, “Cô ấy ở nhà” không cần chữ “là”, nhưng tiếng Anh **bắt buộc** có be: I **am** tired, She **is** at home.",
          ex: [
            ["I am very hungry.", "Tôi rất đói."],
            ["My father is a doctor.", "Bố tôi là bác sĩ."],
            ["The children are in the garden.", "Bọn trẻ đang ở trong vườn."],
            ["Is your office near here?", "Văn phòng của bạn có gần đây không?"]
          ] },
        { f: "chủ ngữ + động từ + tân ngữ + nơi chốn + thời gian",
          mean: "**thứ tự chuẩn của một câu có động từ thường**: Ai – Làm gì – Cái gì – Ở đâu – Khi nào.",
          parts: [
            ["chủ ngữ", "người hoặc vật làm hành động: I, my sister, the teacher."],
            ["động từ", "hành động: eat, buy, watch."],
            ["tân ngữ", "người hoặc vật nhận hành động: rice, a book, TV."],
            ["nơi chốn", "ở đâu: at home, in the park."],
            ["thời gian", "khi nào, đứng **cuối câu**: every day, yesterday, at night."]
          ],
          use: "dùng khi muốn kể một việc đầy đủ thông tin. Có thể bỏ phần nào không cần, nhưng các phần còn lại vẫn giữ đúng thứ tự.",
          note: "Người Việt hay đặt thời gian giữa câu (“I yesterday went…”). Hãy nhớ: **nơi chốn trước, thời gian sau**, đều ở cuối câu. Muốn nhấn mạnh thì có thể đưa thời gian lên đầu câu.",
          ex: [
            ["I watch films at home on Friday nights.", "Tôi xem phim ở nhà vào các tối thứ Sáu."],
            ["She bought a dress at the market yesterday.", "Hôm qua cô ấy mua một chiếc váy ở chợ."],
            ["We play football in the park every Sunday.", "Chúng tôi chơi bóng đá ở công viên mỗi Chủ nhật."],
            ["Do you eat breakfast at work in the morning?", "Buổi sáng bạn có ăn sáng ở chỗ làm không?"]
          ] },
        { f: "chủ ngữ + do not / does not + động từ nguyên mẫu",
          mean: "**ai đó không làm việc gì** (câu phủ định với động từ thường ở hiện tại).",
          parts: [
            ["do not", "đi với **I, you, we, they**. Rút gọn là don’t."],
            ["does not", "đi với **he, she, it** và một người. Rút gọn là doesn’t."],
            ["động từ nguyên mẫu", "động từ chính giữ nguyên, **không thêm -s**: does not like, không nói “does not likes”."]
          ],
          use: "dùng để nói thói quen, sở thích, sự thật **không** đúng. Đặt do not / does not ngay trước động từ chính.",
          note: "Không nói “I not like” hay “She no work”. Với câu có be thì chỉ thêm not sau be: I am not busy (không dùng do).",
          ex: [
            ["I do not eat meat.", "Tôi không ăn thịt."],
            ["My brother does not drive a car.", "Anh trai tôi không lái ô tô."],
            ["We do not work on Sundays.", "Chúng tôi không làm việc vào Chủ nhật."],
            ["She does not speak French.", "Cô ấy không nói tiếng Pháp."]
          ] },
        { f: "Từ để hỏi + do / does + chủ ngữ + động từ nguyên mẫu?",
          mean: "**câu hỏi lấy thông tin** (ở đâu, khi nào, cái gì...) với động từ thường ở hiện tại.",
          parts: [
            ["Từ để hỏi", "What (cái gì), Where (ở đâu), When (khi nào), Why (tại sao), How (thế nào), Who (ai)."],
            ["do", "đi với I, you, we, they."],
            ["does", "đi với he, she, it; sau does động từ chính về nguyên mẫu."]
          ],
          use: "dùng khi muốn người kia trả lời bằng thông tin, không chỉ Yes hay No. Từ để hỏi luôn đứng đầu câu.",
          note: "Không bỏ do / does: nói Where **do** you work?, không nói “Where you work?”. Không nói “Where does she works?”.",
          ex: [
            ["What do you do on weekends?", "Cuối tuần bạn làm gì?"],
            ["Where does your sister work?", "Chị gái bạn làm việc ở đâu?"],
            ["Why do you study English?", "Tại sao bạn học tiếng Anh?"],
            ["How does he go to school?", "Cậu ấy đi học bằng gì?"]
          ] }
      ],
      p: [
        "Mọi câu tiếng Anh đều xây từ **chủ ngữ + động từ + phần còn lại**. Cụm từ, giới từ, liên từ và cụm động từ chỉ là những mảnh ghép gắn thêm vào khung này.",
        "Quy tắc vàng về thứ tự: **Ai – Làm gì – Cho ai hoặc cái gì – Ở đâu – Khi nào**. Nơi chốn đứng trước thời gian: I met my friend at the cafe yesterday.",
        "Muốn nói câu dài mà vẫn đúng, hãy thêm từng mảnh một: I study. → I study English. → I study English at night. → I study English at night because I work in the day."
      ],
      ex: [["We usually have lunch in the office at noon.", "Chúng tôi thường ăn trưa ở văn phòng vào buổi trưa."], ["He does not like spicy food.", "Anh ấy không thích đồ cay."]]
    },
    { h: "Bốn thì hay dùng nhất khi giao tiếp",
      f: ["Hiện tại đơn: chủ ngữ + động từ (thêm -s hoặc -es với he, she, it)", "Hiện tại tiếp diễn: chủ ngữ + am / is / are + động từ thêm -ing", "Quá khứ đơn: chủ ngữ + động từ thêm -ed hoặc dạng quá khứ bất quy tắc", "Tương lai gần: chủ ngữ + am / is / are + going to + động từ nguyên mẫu"],
      items: [
        { f: "Hiện tại đơn: chủ ngữ + động từ (thêm -s hoặc -es với he, she, it)",
          mean: "**thói quen, việc lặp lại và sự thật** luôn đúng. Ví dụ: tôi đi làm mỗi ngày, mặt trời mọc ở hướng đông.",
          parts: [
            ["I / you / we / they + động từ", "động từ giữ nguyên: I live, they work."],
            ["he / she / it + động từ thêm -s", "thêm -s: she works, he likes."],
            ["thêm -es", "với động từ tận cùng -o, -sh, -ch, -x: go → goes, watch → watches."]
          ],
          use: "dùng với các từ như every day, usually, always, on Mondays. Kể về công việc, sở thích, lịch trình cố định.",
          note: "Lỗi hay gặp nhất là quên -s: nói She **works** in a bank, không nói “She work”.",
          ex: [
            ["I drink tea every morning.", "Sáng nào tôi cũng uống trà."],
            ["She teaches English at a school.", "Cô ấy dạy tiếng Anh ở một trường học."],
            ["The shop opens at eight.", "Cửa hàng mở cửa lúc tám giờ."],
            ["Does your brother live in Hanoi?", "Anh trai bạn có sống ở Hà Nội không?"]
          ] },
        { f: "Hiện tại tiếp diễn: chủ ngữ + am / is / are + động từ thêm -ing",
          mean: "**việc đang xảy ra ngay lúc nói**, hoặc **kế hoạch gần đã sắp xếp**.",
          parts: [
            ["am / is / are", "chia theo chủ ngữ: I am, she is, they are. Không được bỏ."],
            ["động từ thêm -ing", "hành động đang diễn ra: eating, working, raining."],
            ["now / at the moment", "từ hay đi kèm khi nói việc đang xảy ra."]
          ],
          use: "dùng khi nói việc bạn đang làm lúc này (I am cooking), hoặc lịch hẹn sắp tới đã chốt (I am meeting Lan tomorrow).",
          note: "Không bỏ be: nói I **am** working, không nói “I working”. Không dùng thì này cho thói quen: nói I work every day.",
          ex: [
            ["I am cooking dinner now.", "Bây giờ tôi đang nấu bữa tối."],
            ["It is raining outside.", "Bên ngoài trời đang mưa."],
            ["They are watching a football match.", "Họ đang xem một trận bóng đá."],
            ["Are you working at the moment?", "Lúc này bạn có đang làm việc không?"]
          ] },
        { f: "Quá khứ đơn: chủ ngữ + động từ thêm -ed hoặc dạng quá khứ bất quy tắc",
          mean: "**việc đã xảy ra và đã kết thúc** trong quá khứ.",
          parts: [
            ["động từ thêm -ed", "động từ có quy tắc: work → worked, visit → visited, call → called."],
            ["quá khứ bất quy tắc", "phải học thuộc: go → went, eat → ate, buy → bought, see → saw."],
            ["did not + động từ nguyên mẫu", "câu phủ định: I did not go. Câu hỏi: Did you go?"]
          ],
          use: "dùng với các mốc quá khứ: yesterday, last week, two days ago, in 2020. Kể lại chuyện đã xảy ra.",
          note: "Sau did và did not, động từ trở về nguyên mẫu: Did you **see** him?, không nói “Did you saw him?”.",
          ex: [
            ["I visited my grandmother last weekend.", "Cuối tuần trước tôi đến thăm bà."],
            ["We went to the beach yesterday.", "Hôm qua chúng tôi đi biển."],
            ["She did not eat breakfast this morning.", "Sáng nay cô ấy không ăn sáng."],
            ["Did you buy a new phone?", "Bạn đã mua điện thoại mới à?"]
          ] },
        { f: "Tương lai gần: chủ ngữ + am / is / are + going to + động từ nguyên mẫu",
          mean: "**dự định sẽ làm** một việc trong tương lai, đã quyết định từ trước.",
          parts: [
            ["am / is / are", "chia theo chủ ngữ."],
            ["going to", "**sắp, định**; đi liền như một cụm."],
            ["động từ nguyên mẫu", "việc định làm: visit, buy, study."]
          ],
          use: "dùng khi nói kế hoạch, dự định: tối nay, cuối tuần này, năm sau. Cũng dùng khi thấy rõ điều gì sắp xảy ra (Look, it is going to rain).",
          note: "Không nói “I going to” (thiếu be) hay “I am going to went”. Khi nói nhanh, going to nghe như “gonna”, nhưng khi viết hãy viết đầy đủ.",
          ex: [
            ["I am going to visit my parents this weekend.", "Cuối tuần này tôi định về thăm bố mẹ."],
            ["She is going to learn to drive.", "Cô ấy định học lái xe."],
            ["We are not going to stay at a hotel.", "Chúng tôi sẽ không ở khách sạn."],
            ["Are you going to watch the match tonight?", "Tối nay bạn có định xem trận đấu không?"]
          ] }
      ],
      p: [
        "**Hiện tại đơn** cho thói quen và sự thật (I walk to work every day). **Hiện tại tiếp diễn** cho việc đang xảy ra hoặc kế hoạch gần (I am waiting for the bus). **Quá khứ đơn** cho việc đã xong (I called him last night). **Going to** cho dự định (I am going to visit my aunt).",
        "Không ghép am, is, are với động từ nguyên mẫu: nói I go to school, không nói “I am go to school”. Sau **did / did not**, động từ trở về nguyên mẫu: I did not go out last night.",
        "Học thuộc các động từ quá khứ bất quy tắc hay gặp: go → went, have → had, see → saw, buy → bought, meet → met."
      ],
      ex: [["I am waiting for the bus.", "Tôi đang đợi xe buýt."], ["I called him last night.", "Tối qua tôi đã gọi cho anh ấy."]]
    },
    { h: "Cụm từ giao tiếp và dạng động từ theo sau",
      f: ["Could you / Can you + động từ nguyên mẫu (+ please)?", "Would you mind + động từ thêm -ing?", "Let’s / Why don’t we + động từ nguyên mẫu", "I would like to / I would love to + động từ nguyên mẫu", "Could you tell me / Do you know + từ để hỏi + chủ ngữ + động từ?", "I am looking forward to + động từ thêm -ing hoặc danh từ"],
      items: [
        { f: "Could you / Can you + động từ nguyên mẫu (+ please)?",
          mean: "**bạn có thể… được không?** Cách nhờ người khác làm giúp một việc.",
          parts: [
            ["Can you", "thân mật, dùng với bạn bè, người nhà, đồng nghiệp quen."],
            ["Could you", "**lịch sự hơn**, dùng với người lạ, khách hàng, cấp trên."],
            ["please", "thêm ở cuối câu hoặc sau you để lời nhờ nhẹ nhàng hơn."]
          ],
          use: "dùng khi nhờ vả, yêu cầu. Sau Could you / Can you là động từ nguyên mẫu, không có to.",
          note: "Could ở đây **không** mang nghĩa quá khứ, chỉ để lịch sự hơn. Không nói “Can you to help me?”.",
          ex: [
            ["Can you pass me the salt?", "Bạn đưa mình lọ muối được không?"],
            ["Could you open the window, please?", "Anh mở cửa sổ giúp tôi được không?"],
            ["Could you help me with my bag?", "Bạn giúp tôi xách túi được không?"],
            ["Can you call me later?", "Lát nữa bạn gọi cho mình được không?"]
          ] },
        { f: "Would you mind + động từ thêm -ing?",
          mean: "**bạn có phiền… không?** Cách nhờ rất lịch sự, nhẹ nhàng.",
          parts: [
            ["Would you mind", "nghĩa đen là “bạn có thấy phiền không”. Lịch sự hơn Could you."],
            ["động từ thêm -ing", "việc bạn nhờ: waiting, closing, speaking."]
          ],
          use: "dùng khi nhờ người lạ hoặc nhờ việc có thể làm họ hơi bất tiện. Sau mind **bắt buộc** là động từ thêm -ing.",
          note: "Câu trả lời đồng ý là **No, not at all** hoặc **Of course not** (nghĩa là không phiền gì). Trả lời “Yes” lại có nghĩa là có phiền đấy!",
          ex: [
            ["Would you mind closing the door?", "Phiền bạn đóng cửa giúp được không?"],
            ["Would you mind speaking more slowly?", "Phiền anh nói chậm hơn được không?"],
            ["Would you mind taking a photo of us?", "Phiền bạn chụp giúp chúng tôi một tấm ảnh được không?"],
            ["“Would you mind waiting here?” “No, not at all.”", "“Phiền bạn đợi ở đây được không?” “Không phiền gì đâu.”"]
          ] },
        { f: "Let’s / Why don’t we + động từ nguyên mẫu",
          mean: "**chúng ta hãy… / sao chúng ta không… nhỉ?** Cách rủ rê, gợi ý cùng làm.",
          parts: [
            ["Let’s", "rút gọn của Let us. Gợi ý trực tiếp, vui vẻ: Let’s go!"],
            ["Why don’t we", "gợi ý nhẹ nhàng hơn, dạng câu hỏi, để người kia dễ từ chối."],
            ["Let’s not", "rủ **không** làm gì: Let’s not wait."]
          ],
          use: "dùng khi rủ bạn bè, gia đình, đồng nghiệp cùng làm một việc. Sau cả hai là động từ nguyên mẫu, không có to.",
          note: "Không nói “Let’s to go” hay “Let’s going”. Why don’t we là câu hỏi nên cuối câu có dấu chấm hỏi.",
          ex: [
            ["Let’s have lunch together.", "Mình cùng ăn trưa nhé."],
            ["Why don’t we take a taxi?", "Sao chúng ta không đi taxi nhỉ?"],
            ["Let’s not stay up too late.", "Đừng thức khuya quá nhé."],
            ["Why don’t we meet at the cafe?", "Sao mình không gặp nhau ở quán cà phê nhỉ?"]
          ] },
        { f: "I would like to / I would love to + động từ nguyên mẫu",
          mean: "**tôi muốn… / tôi rất muốn…** Cách nói mong muốn lịch sự hơn I want.",
          parts: [
            ["I would like to", "**tôi muốn**, lịch sự, dùng khi gọi món, đặt chỗ, đề nghị. Rút gọn là I’d like to."],
            ["I would love to", "**tôi rất muốn**, mạnh và nhiệt tình hơn; hay dùng để nhận lời mời."],
            ["Would you like to…?", "câu hỏi mời: bạn có muốn… không?"]
          ],
          use: "dùng trong nhà hàng, cửa hàng, công việc, hoặc khi nhận lời mời. Sau to là động từ nguyên mẫu.",
          note: "I want nghe hơi thẳng, có khi thiếu lịch sự với người lạ. Đáp lời mời: **I would love to!** (rất muốn) hoặc I would love to, but… (từ chối khéo).",
          ex: [
            ["I would like to book a table for two.", "Tôi muốn đặt một bàn cho hai người."],
            ["I would love to come to your party!", "Mình rất muốn đến dự tiệc của bạn!"],
            ["I would like to ask a question.", "Tôi muốn hỏi một câu."],
            ["Would you like to join us?", "Bạn có muốn tham gia cùng chúng tôi không?"]
          ] },
        { f: "Could you tell me / Do you know + từ để hỏi + chủ ngữ + động từ?",
          mean: "**bạn có thể cho tôi biết… / bạn có biết…?** Cách hỏi thông tin **gián tiếp**, lịch sự hơn hỏi thẳng.",
          parts: [
            ["Could you tell me", "lịch sự, hợp khi hỏi người lạ, nhân viên."],
            ["Do you know", "thân mật hơn một chút, dùng khi không chắc người kia biết câu trả lời."],
            ["từ để hỏi + chủ ngữ + động từ", "phần sau giữ **thứ tự câu kể**: where the bank is, what time it starts."]
          ],
          use: "dùng khi hỏi đường, hỏi giờ, hỏi giá với người lạ. Phần câu hỏi bên trong **không đảo** và không dùng do / does.",
          note: "Nói Could you tell me where the station **is**?, không nói “where is the station”. Nói Do you know what time **she arrives**?, không nói “what time does she arrive”.",
          ex: [
            ["Could you tell me where the toilet is?", "Bạn có thể cho tôi biết nhà vệ sinh ở đâu không?"],
            ["Do you know what time the shop closes?", "Bạn có biết mấy giờ cửa hàng đóng cửa không?"],
            ["Could you tell me how much this costs?", "Bạn cho tôi biết cái này giá bao nhiêu được không?"],
            ["Do you know where he works?", "Bạn có biết anh ấy làm việc ở đâu không?"]
          ] },
        { f: "I am looking forward to + động từ thêm -ing hoặc danh từ",
          mean: "**tôi rất mong chờ** điều gì đó sắp tới.",
          parts: [
            ["look forward to", "mong chờ, háo hức. **to** ở đây là giới từ."],
            ["+ động từ thêm -ing", "mong được làm gì: to seeing you, to meeting you."],
            ["+ danh từ", "mong chờ một sự kiện: to the weekend, to your visit."]
          ],
          use: "hay dùng ở **cuối email** hoặc cuối cuộc nói chuyện, khi sắp gặp nhau hay sắp có sự kiện vui.",
          note: "Lỗi rất phổ biến: “I am looking forward to see you”. Phải nói to **seeing** you, vì to là giới từ.",
          ex: [
            ["I am looking forward to seeing you.", "Mình rất mong được gặp bạn."],
            ["We are looking forward to the holiday.", "Chúng tôi rất mong chờ kỳ nghỉ."],
            ["I am looking forward to working with you.", "Tôi rất mong được làm việc cùng anh."],
            ["She is looking forward to her birthday party.", "Cô ấy đang rất mong chờ bữa tiệc sinh nhật."]
          ] }
      ],
      p: [
        "Mỗi cụm mở đầu đi với một dạng động từ cố định, nên hãy học cả cụm. Lỗi hay gặp nhất: **Would you mind** phải theo sau là **động từ thêm -ing** (Would you mind waiting?), không dùng to.",
        "Khi câu hỏi nằm bên trong một câu khác (Could you tell me…, Do you know…), phần sau **không đảo** động từ lên trước chủ ngữ: Could you tell me where the bank is? Không nói “where is the bank”.",
        "Trong **look forward to**, chữ to là giới từ nên theo sau là động từ thêm -ing: I am looking forward to meeting you."
      ],
      ex: [["Would you mind waiting a moment?", "Phiền bạn đợi một chút được không?"], ["Do you know where she lives?", "Bạn có biết cô ấy sống ở đâu không?"]]
    },
    { h: "Giới từ thời gian, nơi chốn và cụm giới từ cố định",
      f: ["at + giờ, thời điểm · on + thứ, ngày · in + buổi, tháng, năm", "for + khoảng thời gian · since + mốc thời gian", "giới từ + danh từ, đại từ tân ngữ hoặc động từ thêm -ing", "tính từ hoặc động từ + giới từ cố định (good at, interested in, listen to)"],
      items: [
        { f: "at + giờ, thời điểm · on + thứ, ngày · in + buổi, tháng, năm",
          mean: "**ba giới từ chỉ thời gian**, chọn theo độ dài: at cho một điểm, on cho một ngày, in cho khoảng dài.",
          parts: [
            ["at", "**một điểm thời gian**: at 7 o’clock, at noon, at night, at the weekend."],
            ["on", "**một ngày**: on Monday, on 5 May, on my birthday."],
            ["in", "**khoảng dài**: in the morning, in July, in 2025, in summer."]
          ],
          use: "đặt trước mốc thời gian, thường ở cuối câu. Nhớ từ nhỏ đến lớn: at (giờ) → on (ngày) → in (tháng, năm).",
          note: "Ngoại lệ dễ nhầm: in the morning nhưng **at night**; in the afternoon nhưng **on** Monday afternoon (vì có ngày cụ thể).",
          ex: [
            ["The class starts at nine o’clock.", "Lớp học bắt đầu lúc chín giờ."],
            ["I have an English lesson on Tuesday.", "Tôi có buổi học tiếng Anh vào thứ Ba."],
            ["We go to the beach in summer.", "Chúng tôi đi biển vào mùa hè."],
            ["Do you work on Saturday mornings?", "Bạn có làm việc vào sáng thứ Bảy không?"]
          ] },
        { f: "for + khoảng thời gian · since + mốc thời gian",
          mean: "**trong bao lâu** (for) và **từ khi nào** (since).",
          parts: [
            ["for", "đi với **khoảng thời gian**: for two hours, for three years, for a long time."],
            ["since", "đi với **mốc bắt đầu**: since 2020, since Monday, since I was a child."]
          ],
          use: "thường dùng với thì hiện tại hoàn thành (I have lived here for five years) để nói việc bắt đầu trong quá khứ và vẫn còn đến nay. for cũng dùng được với các thì khác.",
          note: "Mẹo: đếm được bao lâu thì dùng **for**; chỉ ra được ngày bắt đầu thì dùng **since**. Không nói “since three years”.",
          ex: [
            ["I waited for the bus for twenty minutes.", "Tôi đã đợi xe buýt hai mươi phút."],
            ["She has worked here since 2022.", "Cô ấy làm ở đây từ năm 2022."],
            ["We have known each other for ten years.", "Chúng tôi quen nhau đã mười năm."],
            ["I have not seen him since Monday.", "Tôi không gặp anh ấy từ thứ Hai."]
          ] },
        { f: "giới từ + danh từ, đại từ tân ngữ hoặc động từ thêm -ing",
          mean: "**sau giới từ** (in, on, at, for, with, about, of...) chỉ có ba loại từ: danh từ, đại từ tân ngữ, hoặc động từ thêm -ing.",
          parts: [
            ["+ danh từ", "with my friend, about the trip."],
            ["+ đại từ tân ngữ", "me, you, him, her, it, us, them: for me, with her (không nói “with she”)."],
            ["+ động từ thêm -ing", "before leaving, after eating, without saying."]
          ],
          use: "áp dụng mỗi khi có giới từ đứng trước một động từ hoặc một người. Đây là quy tắc chung, dùng được ở mọi chủ đề.",
          note: "Không nói “before go” hay “for help me”; nói before **going**, for **helping** me. Không nói “with I”, nói with **me**.",
          ex: [
            ["Please come with me.", "Hãy đi cùng tôi."],
            ["Wash your hands before eating.", "Hãy rửa tay trước khi ăn."],
            ["This gift is for her.", "Món quà này dành cho cô ấy."],
            ["He left without saying goodbye.", "Anh ấy rời đi mà không chào tạm biệt."]
          ] },
        { f: "tính từ hoặc động từ + giới từ cố định (good at, interested in, listen to)",
          mean: "**một số tính từ và động từ luôn đi với một giới từ nhất định**, phải học thuộc cả cụm.",
          parts: [
            ["good at", "giỏi về: good at maths."],
            ["interested in", "quan tâm đến: interested in music."],
            ["afraid of", "sợ: afraid of dogs."],
            ["listen to", "nghe (chủ động lắng nghe): listen to music."],
            ["wait for", "đợi: wait for the bus."]
          ],
          use: "dùng cụm cố định, sau giới từ là danh từ, đại từ tân ngữ hoặc động từ thêm -ing.",
          note: "Không bỏ giới từ: nói listen **to** music, không nói “listen music”; nói wait **for** me, không nói “wait me”.",
          ex: [
            ["My son is good at drawing.", "Con trai tôi vẽ giỏi."],
            ["Are you afraid of dogs?", "Bạn có sợ chó không?"],
            ["I listen to the radio in the car.", "Tôi nghe đài trong ô tô."],
            ["Please wait for me at the door.", "Hãy đợi tôi ở cửa nhé."]
          ] }
      ],
      p: [
        "Mẹo nhớ: **AT** là một điểm (at 7 o’clock, at home), **ON** là một bề mặt hoặc một ngày (on Monday, on the table), **IN** là một không gian hoặc khoảng thời gian dài (in July, in Hanoi).",
        "Không dùng giới từ trước **tomorrow, yesterday, today, next week, last year, every day**: I will go tomorrow, không nói “go on tomorrow”.",
        "Sau giới từ là danh từ, đại từ tân ngữ (me, him, her, us, them) hoặc **động từ thêm -ing**, không dùng to + động từ: I am good at cooking. Các cặp tính từ hoặc động từ đi với giới từ (interested in, afraid of, wait for, listen to) phải học thuộc cả cụm."
      ],
      ex: [["See you on Monday at seven o’clock.", "Hẹn gặp bạn vào thứ Hai lúc bảy giờ."], ["I am interested in music, and I listen to it every night.", "Tôi quan tâm đến âm nhạc và tối nào cũng nghe nhạc."]]
    },
    { h: "Liên từ, từ nối và dấu phẩy",
      f: ["Câu 1, + but / so + Câu 2", "Kết quả + because + lý do", "Although / Because / When / If + chủ ngữ + động từ, + chủ ngữ + động từ", "Câu 1. However, + Câu 2."],
      items: [
        { f: "Câu 1, + but / so + Câu 2",
          mean: "**nối hai câu thành một**: but cho ý trái ngược, so cho kết quả.",
          parts: [
            ["but", "**nhưng**: câu sau trái với điều câu trước gợi ra."],
            ["so", "**nên, vì vậy**: câu sau là kết quả của câu trước."],
            ["dấu phẩy", "thường đặt trước but và so khi hai câu khá dài."]
          ],
          use: "dùng ở giữa hai câu đầy đủ. but và so không đứng đầu câu thứ nhất.",
          note: "Đã dùng so thì không dùng because cùng lúc: không nói “Because I was tired, so I slept”.",
          ex: [
            ["I like coffee, but my wife likes tea.", "Tôi thích cà phê, nhưng vợ tôi thích trà."],
            ["It was raining, so we stayed at home.", "Trời mưa nên chúng tôi ở nhà."],
            ["The bag is nice, but it is too expensive.", "Cái túi đẹp nhưng đắt quá."],
            ["I missed the bus, so I took a taxi.", "Tôi lỡ xe buýt nên đi taxi."]
          ] },
        { f: "Kết quả + because + lý do",
          mean: "**…vì…**: câu đầu là sự việc, phần sau because giải thích lý do.",
          parts: [
            ["because", "**vì, bởi vì**; theo sau là một câu đầy đủ có chủ ngữ và động từ."],
            ["because of", "**vì**, nhưng theo sau là danh từ: because of the rain."]
          ],
          use: "dùng khi trả lời câu hỏi Why, hoặc giải thích lý do. Khi because đứng giữa câu thì không cần dấu phẩy.",
          note: "Không nói “because the rain”; nói because **it rained** hoặc because **of** the rain.",
          ex: [
            ["I am tired because I worked late.", "Tôi mệt vì làm việc muộn."],
            ["She is happy because she passed the test.", "Cô ấy vui vì thi đỗ."],
            ["We stayed inside because of the storm.", "Chúng tôi ở trong nhà vì cơn bão."],
            ["I study English because I want a better job.", "Tôi học tiếng Anh vì muốn có công việc tốt hơn."]
          ] },
        { f: "Although / Because / When / If + chủ ngữ + động từ, + chủ ngữ + động từ",
          mean: "**mệnh đề phụ đứng đầu câu**, sau đó là dấu phẩy rồi đến mệnh đề chính.",
          parts: [
            ["Although", "**mặc dù**: nhượng bộ. Không dùng thêm but ở vế sau."],
            ["Because", "**vì**: lý do. Không dùng thêm so ở vế sau."],
            ["When", "**khi**: thời điểm."],
            ["If", "**nếu**: điều kiện."]
          ],
          use: "đặt mệnh đề phụ lên đầu câu khi muốn nhấn mạnh hoàn cảnh. Có dấu phẩy ngăn cách hai vế; nếu đổi chỗ (mệnh đề phụ ra sau) thì bỏ dấu phẩy.",
          note: "Nói về tương lai sau When và If vẫn dùng hiện tại đơn: If it **rains** tomorrow, we will stay home (không nói “If it will rain”).",
          ex: [
            ["Although he is young, he is very wise.", "Mặc dù còn trẻ, anh ấy rất khôn ngoan."],
            ["Because the shop was closed, we went home.", "Vì cửa hàng đóng cửa nên chúng tôi về nhà."],
            ["When I was a child, I lived in the countryside.", "Khi còn nhỏ, tôi sống ở quê."],
            ["If you are hungry, there is bread in the kitchen.", "Nếu bạn đói thì có bánh mì trong bếp."]
          ] },
        { f: "Câu 1. However, + Câu 2.",
          mean: "**Tuy nhiên**: nối hai câu riêng biệt có ý trái ngược, nghe trang trọng hơn but.",
          parts: [
            ["However", "**tuy nhiên**; đứng **đầu câu thứ hai**, sau dấu chấm."],
            ["dấu phẩy sau However", "bắt buộc có dấu phẩy ngay sau however."]
          ],
          use: "hay dùng khi viết email, bài viết, hoặc khi nói trang trọng. Trong nói chuyện hằng ngày người ta dùng but nhiều hơn.",
          note: "Không dùng however như but ở giữa một câu: không viết “I like it, however it is expensive”. Hãy tách: I like it. However, it is expensive.",
          ex: [
            ["The hotel was nice. However, it was far from the beach.", "Khách sạn đẹp. Tuy nhiên, nó xa biển."],
            ["I studied hard. However, I did not pass.", "Tôi đã học chăm. Tuy nhiên, tôi không đỗ."],
            ["The food is cheap. However, the service is slow.", "Đồ ăn rẻ. Tuy nhiên, phục vụ chậm."],
            ["She is busy. However, she always helps us.", "Cô ấy bận. Tuy nhiên, cô ấy luôn giúp chúng tôi."]
          ] }
      ],
      p: [
        "**and** thêm ý, **but** đối lập, **or** lựa chọn, **so** kết quả, **because** lý do, **although** nhượng bộ. Tiếng Việt nói “mặc dù… nhưng…” và “vì… nên…” đủ hai vế, còn tiếng Anh **chỉ dùng một trong hai**: although hoặc but, because hoặc so.",
        "Mệnh đề phụ (although, because, when, if) đứng **đầu câu** thì có dấu phẩy; đứng **cuối câu** thì không cần. **However** là từ nối giữa hai câu: đặt sau dấu chấm và có dấu phẩy theo sau.",
        "Sau **when, if, before, after, while**, khi nói về tương lai vẫn dùng **thì hiện tại đơn**: When I arrive, I will call you."
      ],
      ex: [["Although it was cold, we went out.", "Mặc dù trời lạnh, chúng tôi vẫn ra ngoài."], ["If it rains, we will stay at home.", "Nếu trời mưa, chúng tôi sẽ ở nhà."]]
    },
    { h: "Cụm động từ: tách được hay không tách được?",
      f: ["Không có tân ngữ: động từ + tiểu từ (I wake up early)", "Tách được: động từ + tân ngữ + tiểu từ hoặc động từ + tiểu từ + tân ngữ; tân ngữ là đại từ thì bắt buộc tách (turn it off)", "Không tách được: động từ + tiểu từ + tân ngữ, luôn đi liền nhau (look after her)"],
      items: [
        { f: "Không có tân ngữ: động từ + tiểu từ (I wake up early)",
          mean: "**cụm động từ đứng một mình**, không cần người hay vật nào theo sau.",
          parts: [
            ["wake up", "thức dậy."],
            ["get up", "ra khỏi giường."],
            ["sit down", "ngồi xuống."],
            ["go out", "ra ngoài, đi chơi."],
            ["come back", "quay lại."]
          ],
          use: "dùng như một động từ thường; chia thì ở từ đầu tiên (wakes up, woke up). Sau cụm có thể thêm thời gian hoặc nơi chốn.",
          note: "Không thêm tân ngữ vào giữa: nói I woke up at six, không nói “I woke me up”.",
          ex: [
            ["She gets up at six every day.", "Ngày nào cô ấy cũng dậy lúc sáu giờ."],
            ["Please sit down.", "Mời bạn ngồi."],
            ["We went out last night.", "Tối qua chúng tôi đi chơi."],
            ["When does he come back?", "Khi nào anh ấy quay lại?"]
          ] },
        { f: "Tách được: động từ + tân ngữ + tiểu từ hoặc động từ + tiểu từ + tân ngữ; tân ngữ là đại từ thì bắt buộc tách (turn it off)",
          mean: "**cụm động từ có thể đặt tân ngữ ở giữa hoặc ở sau**. Nếu tân ngữ là đại từ (it, them, him) thì phải đặt ở giữa.",
          parts: [
            ["turn on / turn off", "bật / tắt (đèn, máy)."],
            ["put on / take off", "mặc vào / cởi ra (quần áo, giày)."],
            ["pick up", "nhặt lên, đón (ai đó)."],
            ["fill in", "điền (vào mẫu đơn)."]
          ],
          use: "với danh từ có thể nói cả hai cách: turn off the TV hoặc turn the TV off. Với đại từ chỉ có một cách: turn **it** off.",
          note: "Không nói “turn off it” hay “pick up her”. Phải nói turn **it** off, pick **her** up.",
          ex: [
            ["Put your coat on. It is cold.", "Mặc áo khoác vào. Trời lạnh đấy."],
            ["Can you pick me up at the station?", "Bạn đón mình ở ga được không?"],
            ["Please fill in this form.", "Xin hãy điền vào mẫu đơn này."],
            ["The TV is loud. Turn it off, please.", "Tivi to quá. Tắt nó đi nhé."]
          ] },
        { f: "Không tách được: động từ + tiểu từ + tân ngữ, luôn đi liền nhau (look after her)",
          mean: "**cụm động từ luôn đi liền**, tân ngữ (kể cả đại từ) luôn đứng **sau** cả cụm.",
          parts: [
            ["look after", "chăm sóc, trông nom."],
            ["look for", "tìm kiếm."],
            ["get on / get off", "lên / xuống (xe buýt, tàu)."],
            ["get along with", "hòa hợp với ai."]
          ],
          use: "dùng như một khối không tách rời; chỉ chia thì ở từ đầu tiên (looked for, gets on).",
          note: "Không nói “look her after”; nói look after **her**. Cách nhớ: nếu không chắc, hãy học cả câu mẫu cho mỗi cụm.",
          ex: [
            ["I am looking for my keys.", "Tôi đang tìm chìa khóa."],
            ["My mother looks after my baby.", "Mẹ tôi trông em bé của tôi."],
            ["We get off the bus here.", "Chúng ta xuống xe buýt ở đây."],
            ["Do you get along with your boss?", "Bạn có hòa hợp với sếp không?"]
          ] }
      ],
      p: [
        "Cụm động từ là động từ + tiểu từ (up, off, out, on, in, back…). Nghĩa thường khác hẳn từng từ riêng lẻ, nên hãy học cả cụm cùng một câu mẫu.",
        "Với cụm **tách được** (turn on, turn off, put on, take off, pick up, fill in, hand in, give up), nếu tân ngữ là đại từ như it, them, me thì **bắt buộc** đặt đại từ vào giữa: Turn it off, Pick it up. Với cụm **không tách được** (look after, look for, get along with, run out of, deal with), tân ngữ luôn đứng sau.",
        "Chia thì ở **từ đầu tiên** của cụm: She gets up at six. He gave up smoking."
      ],
      ex: [["It is dark. Please turn the light on.", "Trời tối rồi. Bật đèn lên đi."], ["Can you look after my dog?", "Bạn trông con chó giúp tôi được không?"]]
    }
  ],
  mistakes: [
    ["I am go to school every day.", "I go to school every day.", "Hiện tại đơn không cần **am**; am chỉ đi với động từ thêm -ing hoặc tính từ, danh từ."],
    ["Would you mind to wait?", "Would you mind waiting?", "Sau **Would you mind** dùng **động từ thêm -ing**."],
    ["Could you tell me where is the bank?", "Could you tell me where the bank is?", "Câu hỏi nằm trong câu khác thì **không đảo** động từ lên trước chủ ngữ."],
    ["I am interested on music. / I listen music.", "I am interested in music. / I listen to music.", "Học thuộc cả cụm giới từ cố định: **interested in**, **listen to**."],
    ["See you in Monday. / I will go on tomorrow.", "See you on Monday. / I will go tomorrow.", "Thứ trong tuần đi với **on**; không dùng giới từ trước tomorrow."],
    ["Although it was cold, but we went out.", "Although it was cold, we went out.", "Tiếng Anh chỉ dùng **although** hoặc **but**, không dùng cả hai."],
    ["Turn off it.", "Turn it off.", "Cụm tách được mà tân ngữ là **đại từ** thì đại từ phải đứng giữa."]
  ],
  vocab: [
    ["next to", "bên cạnh"], ["between", "ở giữa"], ["opposite", "đối diện"], ["in front of", "phía trước"],
    ["through", "xuyên qua"], ["across", "băng qua"], ["although", "mặc dù"], ["however", "tuy nhiên"],
    ["unless", "trừ khi"], ["while", "trong khi"], ["wake up", "thức giấc"], ["turn on / turn off", "bật / tắt"],
    ["put on / take off", "mặc vào / cởi ra"], ["hang out", "đi chơi, tụ tập"], ["catch up", "hàn huyên, cập nhật tin tức"], ["pick up", "đón ai, nhặt lên"],
    ["look after", "chăm sóc, trông nom"], ["look for", "tìm kiếm"], ["look forward to", "mong chờ"], ["figure out", "tìm ra, hiểu ra"],
    ["hand in", "nộp bài"], ["run out of", "hết (thời gian, tiền)"], ["give up", "bỏ cuộc"], ["deal with", "xử lý, giải quyết"]
  ],
  tips: [
    "Nâng cấp câu theo công thức: **câu đơn → thêm giới từ (nơi, giờ) → thêm liên từ và ý thứ hai → thay động từ đơn bằng cụm động từ**.",
    "Học cụm từ theo chức năng: muốn nhờ thì nói **Could you…?**, muốn rủ thì nói **Let’s…** hoặc **Why don’t we…?**, muốn từ chối thì nói **I would love to, but…**",
    "Mỗi ngày chỉ học ba cụm động từ, mỗi cụm đặt hai câu về chính cuộc sống của bạn rồi đọc to năm lần.",
    "Khi bí từ, đừng im lặng: dùng **How can I put it?**, **What I mean is…** hoặc **How do you say… in English?** để có thêm thời gian.",
    "Kể bài “Một ngày của tôi” trong 40 giây, cố dùng đủ bốn loại mảnh ghép: cụm từ giao tiếp, giới từ, liên từ và cụm động từ.",
    "Đừng học thuộc danh sách; câu nào gắn với chuyện thật của chính bạn sẽ nhớ lâu hơn rất nhiều."
  ]
};
