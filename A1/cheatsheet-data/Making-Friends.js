/* Cheat sheet: Making Friends (Kết bạn, giữ bạn). Hiển thị bởi cheatsheet.js. */
window.A1_CHEAT = {
  goal: [
    "Rủ bạn đi chơi bằng bốn cách: **Do you want to…?**, **Would you like to…?**, **Let’s…** và **How about…?**",
    "Nhận lời thật nhiệt tình và từ chối khéo theo công thức cảm ơn, lý do, hẹn lần khác.",
    "Nhắn tin kiểu bạn bè, hỏi bạn đang làm gì bằng thì hiện tại tiếp diễn và hiểu các từ viết tắt phổ biến.",
    "Kể về bạn thân: quen nhau thế nào, làm bạn bao lâu (**for / since**), bạn ấy là người như thế nào.",
    "Hỏi thăm, chúc mừng và an ủi bạn bè, dùng câu cảm thán **How…!** và **What a…!**"
  ],
  phrases: [
    { h: "Rủ đi chơi", rows: [
      ["Are you free this Saturday?", "Thứ Bảy này bạn rảnh không?", "Hỏi câu này trước để biết bạn có thời gian rồi mới rủ."],
      ["Do you want to grab a coffee after class?", "Tan học đi cà phê không?", "Cách rủ thân mật, dùng với bạn bè cùng tuổi."],
      ["Would you like to come to my birthday party?", "Bạn có muốn đến dự sinh nhật mình không?", "Lịch sự hơn Do you want to."],
      ["Let’s go to the night market tonight!", "Tối nay đi chợ đêm đi!", "Let’s = Let us; khi rủ rê luôn dùng dạng rút gọn Let’s."],
      ["How about seeing a movie on Sunday?", "Chủ nhật đi xem phim thì sao?"]
    ]},
    { h: "Nhận lời và từ chối khéo", rows: [
      ["Sure! Sounds great. What time should we meet?", "Được chứ! Nghe hay đấy. Mấy giờ mình gặp nhau?"],
      ["I would love to!", "Mình rất muốn đi!", "Khi nói luôn rút gọn: I’d love to! (I’d = I would)."],
      ["I would love to, but I have to work late.", "Mình rất muốn, nhưng mình phải làm muộn.", "Dạng rút gọn: I’d love to, but…"],
      ["Sorry, I cannot. I already have plans.", "Xin lỗi, mình không đi được. Mình có hẹn rồi.", "Khi nói thường dùng I can’t (can’t = cannot)."],
      ["Maybe another time? Thanks for asking, though!", "Để lần khác nhé? Dù sao cũng cảm ơn đã rủ nhé!"]
    ]},
    { h: "Nhắn tin với bạn bè", rows: [
      ["Hey! What are you up to?", "Ê! Đang làm gì đấy?"],
      ["Nothing much. Just chilling at home.", "Không có gì. Đang nằm nhà thôi."],
      ["I am on my way!", "Mình đang trên đường đến!", "Khi nhắn thường viết I’m on my way hoặc viết tắt omw."],
      ["Running five minutes late, sorry!", "Trễ năm phút nhé, xin lỗi!"],
      ["Had so much fun today. Thanks!", "Hôm nay vui quá. Cảm ơn nhé!"]
    ]},
    { h: "Kể về bạn thân", rows: [
      ["My best friend is called Ha.", "Bạn thân nhất của tôi tên là Hà."],
      ["We met in high school.", "Bọn tôi quen nhau hồi cấp ba."],
      ["We have been friends for ten years.", "Bọn tôi làm bạn được mười năm rồi.", "Khi nói thường rút gọn: We’ve been friends (We’ve = We have)."],
      ["She is really funny and always there for me.", "Cô ấy rất vui tính và lúc nào cũng ở bên tôi."],
      ["We do not see each other often, but we text every day.", "Bọn tôi ít gặp nhưng ngày nào cũng nhắn tin."]
    ]},
    { h: "Hỏi thăm, chúc mừng, an ủi", rows: [
      ["How have you been? / What is new with you?", "Dạo này bạn thế nào? / Có gì mới không?", "Thường nói What’s new with you? (What’s = What is)."],
      ["How did your interview go?", "Buổi phỏng vấn của bạn thế nào rồi?"],
      ["Congratulations! I am so happy for you!", "Chúc mừng! Mình mừng cho bạn quá!"],
      ["I am sorry to hear that. Hope you feel better soon.", "Mình rất tiếc khi nghe vậy. Mong bạn sớm khỏe lại."],
      ["Do not worry. Let me know if you need anything.", "Đừng lo. Cần gì cứ nói mình nhé.", "Khi nói thường dùng Don’t worry (Don’t = Do not)."]
    ]}
  ],
  grammar: [
    { h: "Bốn cách rủ rê và dạng động từ theo sau",
      f: ["Do you want to + động từ nguyên mẫu?", "Would you like to + động từ nguyên mẫu?", "Let’s + động từ nguyên mẫu", "How about / What about + động từ thêm -ing?"],
      items: [
        { f: "Do you want to + động từ nguyên mẫu?",
          mean: "**bạn có muốn… không?** Cách rủ rê **thân mật**, thẳng thắn, dùng với bạn bè đã quen.",
          parts: [
            ["Do you want", "**bạn có muốn**. Want là muốn, mang sắc thái tự nhiên, không khách sáo."],
            ["to + động từ nguyên mẫu", "việc bạn rủ người kia làm: to get coffee, to play tennis."],
            ["Do you wanna…?", "cách đọc nối rất nhanh của người bản xứ (want to → wanna). Chỉ nên nghe hiểu, không nên viết."]
          ],
          use: "nhắn tin hoặc nói trực tiếp với bạn bè, bạn cùng lớp, đồng nghiệp thân để rủ đi chơi, đi ăn.",
          note: "Không bỏ **to**: “Do you want go?” là sai. Với người mới quen hoặc người lớn tuổi, nên đổi sang **Would you like to** cho lịch sự.",
          ex: [
            ["Do you want to get bubble tea after class?", "Tan học bạn có muốn đi uống trà sữa không?"],
            ["Do you want to play badminton this Sunday?", "Chủ nhật này bạn có muốn chơi cầu lông không?"],
            ["Do you want to come to my place for dinner?", "Bạn có muốn đến nhà mình ăn tối không?"],
            ["Do you want to study together for the test?", "Bạn có muốn học cùng nhau để ôn thi không?"]
          ] },
        { f: "Would you like to + động từ nguyên mẫu?",
          mean: "**bạn có muốn… không?** Nghĩa giống Do you want to, nhưng **lịch sự và nhẹ nhàng hơn**, giống lời mời.",
          parts: [
            ["Would you like", "**bạn có muốn**, cách hỏi lịch sự. Would làm câu mềm hơn want."],
            ["to + động từ nguyên mẫu", "việc bạn mời người kia làm: to join us, to come to my party."],
            ["Trả lời", "Đồng ý: Yes, I would love to. (thường nói I’d love to) Từ chối: I would love to, but…"]
          ],
          use: "mời người mới quen, đồng nghiệp, người lớn tuổi, hoặc mời đến một sự kiện như tiệc sinh nhật, bữa tối.",
          note: "Đừng nhầm **Would you like to + động từ** (mời làm gì) với **Do you like + động từ thêm -ing** (hỏi sở thích). “Would you like to dance?” là lời mời nhảy, còn “Do you like dancing?” là hỏi bạn có thích nhảy không.",
          ex: [
            ["Would you like to join our book club?", "Bạn có muốn tham gia câu lạc bộ sách của bọn mình không?"],
            ["Would you like to come to my birthday party on Saturday?", "Bạn có muốn đến dự tiệc sinh nhật mình vào thứ Bảy không?"],
            ["Would you like to have coffee with us after work?", "Bạn có muốn uống cà phê với bọn mình sau giờ làm không?"],
            ["Would you like to sit here?", "Bạn có muốn ngồi đây không?"]
          ] },
        { f: "Let’s + động từ nguyên mẫu",
          mean: "**chúng ta hãy… đi, mình cùng… nhé**. Rủ **cả hai cùng làm**, câu khẳng định chứ không phải câu hỏi.",
          parts: [
            ["Let’s", "= Let us, **chúng ta hãy**. Người bản xứ luôn dùng dạng rút gọn Let’s khi rủ rê."],
            ["động từ nguyên mẫu", "đứng ngay sau Let’s, **không có to**, không thêm -ing: Let’s go, Let’s eat."],
            ["Let’s not", "dạng phủ định: **đừng… nhé**. Let’s not go there."]
          ],
          use: "dùng khi bạn đã muốn làm và đề nghị người kia cùng làm, thường giữa bạn bè, nhóm đồng nghiệp.",
          note: "Không nói “Let’s to go” hay “Let’s going”. Câu đáp đồng ý thường là **Sure!**, **Good idea!** hoặc **OK, let’s do it.**",
          ex: [
            ["Let’s meet at the coffee shop at three.", "Mình gặp nhau ở quán cà phê lúc ba giờ nhé."],
            ["Let’s take a photo together!", "Mình chụp chung một tấm ảnh đi!"],
            ["Let’s go to the night market this weekend.", "Cuối tuần này đi chợ đêm đi."],
            ["It is raining. Let’s not go out.", "Trời đang mưa. Mình đừng ra ngoài nhé."]
          ] },
        { f: "How about / What about + động từ thêm -ing?",
          mean: "**hay là… nhé? … thì sao?** Đưa ra một **gợi ý nhẹ nhàng**, để người kia cân nhắc.",
          parts: [
            ["How about", "**hay là…, … thì sao?** Thường dùng để gợi ý một hoạt động."],
            ["What about", "nghĩa gần như giống How about, dùng thay thế được trong lời gợi ý."],
            ["động từ thêm -ing", "vì about là giới từ, động từ phía sau phải thêm **-ing**: How about watching a movie?"],
            ["danh từ", "cũng có thể đặt danh từ hoặc thời gian sau about: How about Friday? What about pizza?"]
          ],
          use: "gợi ý hoạt động, thời gian hoặc địa điểm, nhất là khi đang bàn kế hoạch hoặc khi lời rủ đầu tiên chưa được nhận.",
          note: "Lỗi hay gặp: “How about go to the cinema?”. Sau about phải là động từ thêm -ing: **How about going to the cinema?**",
          ex: [
            ["How about going for a walk in the park?", "Hay là mình đi dạo trong công viên nhé?"],
            ["What about having dinner at that new restaurant?", "Ăn tối ở nhà hàng mới đó thì sao?"],
            ["I am busy on Saturday. How about Sunday?", "Thứ Bảy mình bận. Chủ nhật thì sao?"],
            ["How about inviting Nam, too?", "Hay là mời cả Nam nữa?"]
          ] }
      ],
      p: [
        "**Do you want to** thân mật, dùng với bạn bè. **Would you like to** lịch sự hơn, hợp khi rủ người mới quen hoặc mời đến sự kiện. **Let’s** dùng khi bạn rủ cả hai cùng làm. **How about** mang tính gợi ý nhẹ nhàng.",
        "Lỗi hay gặp nhất là dạng động từ: sau **want to** và **would like to** phải có **to + động từ nguyên mẫu**, còn sau **How about** phải dùng **động từ thêm -ing** vì about là giới từ."
      ],
      ex: [["How about having lunch together?", "Mình ăn trưa cùng nhau nhé?"], ["Would you like to join us for dinner?", "Bạn có muốn ăn tối cùng bọn mình không?"]]
    },
    { h: "Nhận lời và từ chối: I would love to, have to, kế hoạch đã có",
      f: ["I would love to, but + lý do", "have to + động từ nguyên mẫu", "chủ ngữ + am / is / are + động từ thêm -ing (kế hoạch đã chốt)"],
      items: [
        { f: "I would love to, but + lý do",
          mean: "**mình rất muốn, nhưng…**. Cách từ chối lời mời **khéo léo**, cho người kia thấy bạn thật sự muốn đi.",
          parts: [
            ["I would love to", "**mình rất muốn**. Khi nói thường rút gọn thành **I’d love to**. Đứng một mình nghĩa là nhận lời."],
            ["but", "**nhưng**, chuyển sang lời từ chối."],
            ["lý do", "một câu ngắn nói vì sao không đi được: I am busy, I have to work."]
          ],
          use: "trả lời câu mời Would you like to…? hoặc Do you want to…?. Nên kết thúc bằng một gợi ý khác: Maybe next time? How about Sunday?",
          note: "Sau I would love to **không cần lặp lại động từ**: nói “I would love to”, không cần “I would love to go to the party”. Không bỏ **to** ở cuối: “I would love, but…” là sai.",
          ex: [
            ["I would love to, but I have class tonight.", "Mình rất muốn, nhưng tối nay mình có lớp."],
            ["I’d love to, but I am not feeling well today.", "Mình rất muốn, nhưng hôm nay mình không khỏe."],
            ["I would love to, but I am visiting my grandparents. Maybe next week?", "Mình rất muốn, nhưng mình đi thăm ông bà. Tuần sau nhé?"],
            ["Would you like to come? Yes, I’d love to!", "Bạn có muốn đến không? Có, mình rất muốn!"]
          ] },
        { f: "have to + động từ nguyên mẫu",
          mean: "**phải làm gì đó**, vì bắt buộc hoặc vì hoàn cảnh, không phải vì mình thích.",
          parts: [
            ["have to", "dùng với I, you, we, they."],
            ["has to", "dùng với he, she, it: She has to work late."],
            ["do not have to", "**không cần, không bắt buộc**: I do not have to work tomorrow (thường nói don’t have to)."]
          ],
          use: "đưa ra lý do từ chối lời mời hoặc giải thích vì sao phải về sớm. Sau have to là động từ nguyên mẫu.",
          note: "Không nói “I must to go” hay “I have go”. Khi nói, have to thường đọc là “háp tu”. **do not have to** nghĩa là không cần, khác hẳn “không được phép”.",
          ex: [
            ["Sorry, I have to go home early tonight.", "Xin lỗi, tối nay mình phải về nhà sớm."],
            ["My friend has to work this Saturday.", "Bạn mình phải làm việc vào thứ Bảy này."],
            ["We have to finish our project by Friday.", "Bọn mình phải hoàn thành dự án trước thứ Sáu."],
            ["You do not have to bring anything. Just come!", "Bạn không cần mang gì đâu. Cứ đến thôi!"]
          ] },
        { f: "chủ ngữ + am / is / are + động từ thêm -ing (kế hoạch đã chốt)",
          mean: "**sẽ làm gì** trong tương lai gần, khi kế hoạch **đã được sắp xếp, hẹn trước**.",
          parts: [
            ["am / is / are", "chia theo chủ ngữ: I am, she is, we are."],
            ["động từ thêm -ing", "việc đã lên lịch: meeting, having, going, visiting."],
            ["mốc thời gian", "thường có thời gian tương lai đi kèm: tonight, tomorrow, this weekend, on Saturday."]
          ],
          use: "nói về lịch hẹn đã chốt để giải thích lý do bận, hoặc hỏi người kia đã có kế hoạch gì chưa: Are you doing anything on Friday?",
          note: "Có mốc thời gian tương lai thì câu này nói về **kế hoạch**, không phải việc đang làm lúc này. Đây là cách người bản xứ hay dùng nhất để kể lịch hẹn, tự nhiên hơn will.",
          ex: [
            ["I am meeting my cousin on Saturday.", "Thứ Bảy mình gặp em họ."],
            ["She is flying to Da Nang tomorrow morning.", "Sáng mai cô ấy bay đi Đà Nẵng."],
            ["We are having a party next Friday. Can you come?", "Thứ Sáu tuần sau bọn mình tổ chức tiệc. Bạn đến được không?"],
            ["Are you doing anything this weekend?", "Cuối tuần này bạn có kế hoạch gì không?"]
          ] }
      ],
      p: [
        "**I would love to** (thường nói I’d love to) không cần lặp lại động từ phía sau; chỉ nói I’d love to là đủ và tự nhiên. Thêm **but** để chuyển sang lời từ chối mà vẫn cho thấy bạn thật sự muốn đi.",
        "Dùng **have to + động từ nguyên mẫu** để nói lý do bắt buộc (I have to study for an exam). Dùng **thì hiện tại tiếp diễn** cho kế hoạch đã hẹn trước (I am meeting my cousin on Saturday).",
        "Từ chối khéo theo ba bước: **cảm ơn hoặc tiếc + lý do + gợi ý lần khác**. Chỉ nói “No. I busy.” sẽ nghe cộc lốc và còn sai ngữ pháp."
      ],
      ex: [["I would love to, but I am busy this weekend. Maybe next time?", "Mình rất muốn, nhưng cuối tuần này mình bận. Để lần sau nhé?"], ["I have to finish a report tonight.", "Tối nay mình phải làm xong báo cáo."]]
    },
    { h: "Thì hiện tại tiếp diễn: đang làm gì và sắp làm gì",
      f: ["chủ ngữ + am / is / are + động từ thêm -ing", "What are you doing + now / tonight?"],
      items: [
        { f: "chủ ngữ + am / is / are + động từ thêm -ing",
          mean: "**ai đó đang làm gì** ngay lúc nói (thì hiện tại tiếp diễn).",
          parts: [
            ["am", "đi với I: I am cooking."],
            ["is", "đi với he, she, it và một người: My sister is sleeping."],
            ["are", "đi với you, we, they và nhiều người: They are playing games."],
            ["động từ thêm -ing", "việc đang diễn ra. Động từ tận cùng -e thì bỏ e (make → making); một số động từ gấp đôi phụ âm cuối (run → running, sit → sitting)."]
          ],
          use: "kể việc đang làm khi nhắn tin hoặc gọi điện cho bạn, thường đi với now, right now, at the moment.",
          note: "Phải có **am / is / are**: “I watching TV” là thiếu be. Không dùng hiện tại đơn (I watch TV) để nói việc đang làm lúc này.",
          ex: [
            ["I am waiting for you at the bus stop.", "Mình đang đợi bạn ở trạm xe buýt."],
            ["My roommate is cooking dinner right now.", "Bạn cùng phòng mình đang nấu bữa tối."],
            ["We are not studying. We are playing games.", "Bọn mình không học. Bọn mình đang chơi game."],
            ["Is Lan sleeping? Her phone is off.", "Lan đang ngủ à? Điện thoại cô ấy tắt máy."]
          ] },
        { f: "What are you doing + now / tonight?",
          mean: "**bạn đang làm gì?** (với now) hoặc **bạn định làm gì?** (với tonight, tomorrow, this weekend).",
          parts: [
            ["now", "**bây giờ**: hỏi việc người kia **đang làm** ngay lúc này."],
            ["tonight", "**tối nay**: hỏi **kế hoạch** sắp tới. Có thể thay bằng tomorrow, this weekend, on Saturday."],
            ["What are you doing", "từ để hỏi What + are + you + doing. Trả lời: I am + động từ thêm -ing."]
          ],
          use: "mở đầu tin nhắn với bạn bè, hoặc hỏi trước khi rủ đi chơi: What are you doing tonight? Do you want to see a movie?",
          note: "**What do you do?** hỏi về **nghề nghiệp**, hoàn toàn khác **What are you doing?** (đang làm gì). Đừng dùng lẫn hai câu này.",
          ex: [
            ["What are you doing now? I am having lunch.", "Bạn đang làm gì đấy? Mình đang ăn trưa."],
            ["What are you doing tonight? Nothing special.", "Tối nay bạn làm gì? Không có gì đặc biệt."],
            ["What are you doing this weekend? I am going to the beach.", "Cuối tuần này bạn làm gì? Mình đi biển."],
            ["What is Minh doing now? He is playing football.", "Minh đang làm gì vậy? Cậu ấy đang đá bóng."]
          ] }
      ],
      p: [
        "Khi nhắn tin hỏi bạn **đang** làm gì ngay lúc này, dùng thì hiện tại tiếp diễn: What are you doing now? I am watching TV. Không dùng hiện tại đơn (What do you do now?) vì câu đó hỏi về nghề nghiệp hoặc thói quen.",
        "Thì này cũng dùng cho **kế hoạch sắp tới đã chốt**: What are you doing tonight? I am having dinner with Lan."
      ],
      ex: [["I am watching a movie. What are you doing?", "Mình đang xem phim. Bạn đang làm gì?"], ["We are going to karaoke tonight.", "Tối nay bọn mình đi hát karaoke."]]
    },
    { h: "Hiện tại hoàn thành với for / since và câu hỏi What is she like?",
      f: ["have / has been friends + for + khoảng thời gian", "have / has known + người + since + mốc thời gian", "What is she like? → tính cách", "What does she look like? → ngoại hình"],
      items: [
        { f: "have / has been friends + for + khoảng thời gian",
          mean: "**đã làm bạn với nhau được bao lâu**: tình bạn bắt đầu trong quá khứ và **vẫn còn đến bây giờ**.",
          parts: [
            ["have been", "dùng với I, you, we, they: We have been friends."],
            ["has been", "dùng với he, she, it: She has been my best friend."],
            ["for", "**được, trong** một khoảng thời gian: for two years, for a long time, for six months."]
          ],
          use: "kể về một tình bạn lâu năm. Câu hỏi tương ứng: **How long have you been friends?**",
          note: "Không dùng hiện tại đơn như tiếng Việt: “We are friends for ten years” là sai. Phải nói **We have been friends for ten years**. Khi nói thường rút gọn: We’ve been, She’s been.",
          ex: [
            ["Lan and I have been friends for twelve years.", "Lan và tôi làm bạn được mười hai năm rồi."],
            ["He has been my best friend for a long time.", "Anh ấy là bạn thân nhất của tôi đã lâu rồi."],
            ["How long have you been friends?", "Các bạn làm bạn với nhau bao lâu rồi?"],
            ["We have not been friends for very long, only a few months.", "Chúng tôi làm bạn chưa lâu, mới vài tháng thôi."]
          ] },
        { f: "have / has known + người + since + mốc thời gian",
          mean: "**đã quen biết ai đó từ khi nào**: bắt đầu quen tại một thời điểm trong quá khứ và vẫn quen đến bây giờ.",
          parts: [
            ["have known / has known", "known là quá khứ phân từ (cột thứ ba của động từ) của know (biết, quen). has dùng với he, she, it."],
            ["since", "**từ, kể từ** một **mốc thời gian**: since 2020, since high school, since we were kids."],
            ["for", "nếu muốn nói khoảng thời gian thì thay since bằng for: I have known her for five years."]
          ],
          use: "nói bạn quen ai từ lúc nào. Câu hỏi: **How long have you known him?**",
          note: "Mẹo nhớ: **since + một điểm** trên lịch (năm, ngày, sự kiện), **for + một đoạn** thời gian (số năm, số tháng). Không nói “since five years”.",
          ex: [
            ["I have known Minh since primary school.", "Tôi quen Minh từ hồi tiểu học."],
            ["She has known her roommate since 2022.", "Cô ấy quen bạn cùng phòng từ năm 2022."],
            ["We have known each other since our first day at work.", "Chúng tôi quen nhau từ ngày đầu tiên đi làm."],
            ["How long have you known Anna? For about three years.", "Bạn quen Anna bao lâu rồi? Khoảng ba năm."]
          ] },
        { f: "What is she like? → tính cách",
          mean: "**cô ấy là người như thế nào?** Câu hỏi về **tính cách** của một người.",
          parts: [
            ["like", "ở đây là giới từ, nghĩa là **giống như, như thế nào**, không phải động từ “thích”."],
            ["is she", "có thể đổi chủ ngữ: What is he like? What are your new friends like?"],
            ["Trả lời", "be + tính từ tính cách: She is kind, funny and very friendly."]
          ],
          use: "hỏi khi bạn của bạn kể về một người mới quen, bạn mới, đồng nghiệp mới.",
          note: "Đừng trả lời bằng sở thích: câu hỏi không có nghĩa là “Cô ấy thích gì?”. Muốn hỏi sở thích thì nói **What does she like?**",
          ex: [
            ["What is your new roommate like? He is quiet but nice.", "Bạn cùng phòng mới của bạn thế nào? Cậu ấy ít nói nhưng tốt bụng."],
            ["What is Anna like? She is very funny.", "Anna là người thế nào? Cô ấy rất vui tính."],
            ["What are your classmates like?", "Các bạn cùng lớp của bạn thế nào?"],
            ["What is he like? He is shy at first, but he is really friendly.", "Anh ấy là người thế nào? Lúc đầu thì nhút nhát, nhưng thực ra rất thân thiện."]
          ] },
        { f: "What does she look like? → ngoại hình",
          mean: "**trông cô ấy như thế nào?** Câu hỏi về **ngoại hình**: cao thấp, tóc, mắt, dáng người.",
          parts: [
            ["does … look", "look là động từ thường nên cần does (với he, she) hoặc do (với you, they): What do they look like?"],
            ["like", "giới từ: **trông như thế nào**."],
            ["Trả lời", "She is + tính từ (tall, short, slim) hoặc She has + danh từ (long hair, brown eyes)."]
          ],
          use: "hỏi khi bạn sắp gặp một người chưa từng thấy, hoặc khi muốn hình dung về người bạn đang được kể.",
          note: "Câu trả lời **không lặp lại like**: nói “She is tall”, không nói “She looks like tall”. **look like + danh từ** chỉ dùng khi so sánh giống ai: She looks like her mother.",
          ex: [
            ["What does your best friend look like? She has short hair and glasses.", "Bạn thân của bạn trông thế nào? Cô ấy tóc ngắn và đeo kính."],
            ["What does he look like? He is tall and thin.", "Anh ấy trông thế nào? Anh ấy cao và gầy."],
            ["What do your new neighbors look like?", "Hàng xóm mới của bạn trông thế nào?"],
            ["I do not know what she looks like. Can you send me a photo?", "Mình không biết cô ấy trông thế nào. Bạn gửi mình ảnh được không?"]
          ] }
      ],
      p: [
        "Muốn nói tình bạn **bắt đầu trong quá khứ và vẫn còn đến bây giờ**, dùng thì hiện tại hoàn thành, không dùng hiện tại đơn. **For** đi với khoảng thời gian (for ten years), **since** đi với mốc thời gian (since 2019).",
        "**What is she like?** hỏi về tính cách (She is friendly and funny). **What does she look like?** hỏi về ngoại hình (She is tall with long hair). Chữ like ở đây nghĩa là “như thế nào”, không phải “thích”."
      ],
      ex: [["We have been friends for five years.", "Bọn tôi làm bạn được năm năm rồi."], ["I have known him since 2019.", "Tôi quen anh ấy từ năm 2019."]]
    },
    { h: "Câu cảm thán để chúc mừng và an ủi",
      f: ["That is + tính từ!", "How + tính từ!", "What a / an + tính từ + danh từ!"],
      items: [
        { f: "That is + tính từ!",
          mean: "**thật là…, tuyệt quá / tiếc quá!** Câu phản ứng nhanh khi nghe một tin vui hoặc tin buồn.",
          parts: [
            ["That", "**điều đó**, chỉ tin hoặc chuyện người kia vừa kể."],
            ["is", "khi nói gần như luôn rút gọn: **That’s**."],
            ["tính từ vui", "great, amazing, wonderful, awesome: chúc mừng tin vui."],
            ["tính từ buồn", "too bad, terrible, awful: an ủi khi nghe tin buồn."]
          ],
          use: "đáp lại ngay sau khi bạn kể tin, có thể nối thêm một câu chúc hoặc hỏi tiếp: That is great! Congratulations!",
          note: "Có thể thêm **so** hoặc **really** trước tính từ để nhấn mạnh: That is so cool! Đừng nói “It is great” khi phản ứng với tin vừa nghe; người bản xứ dùng **That’s great**.",
          ex: [
            ["I passed my driving test! That is amazing!", "Mình đỗ bằng lái rồi! Tuyệt quá!"],
            ["My cat is sick. Oh, that is terrible.", "Mèo của mình bị ốm. Ôi, tội quá."],
            ["I got a new job! That’s wonderful! Congratulations!", "Mình có việc mới rồi! Tuyệt vời! Chúc mừng bạn!"],
            ["I cannot come to your party. That’s too bad.", "Mình không đến dự tiệc của bạn được. Tiếc quá."]
          ] },
        { f: "How + tính từ!",
          mean: "**…quá! …thật!** Câu cảm thán ngắn, thể hiện cảm xúc mạnh với điều vừa nghe hoặc vừa thấy.",
          parts: [
            ["How", "ở đây không phải câu hỏi mà mang nghĩa **thật là, quá**."],
            ["tính từ", "đứng một mình ngay sau How, không có danh từ: How nice! How sad! How lucky!"]
          ],
          use: "phản ứng ngắn gọn khi bạn bè kể chuyện. Cuối câu dùng dấu chấm than, giọng xuống ở cuối chứ không lên giọng như câu hỏi.",
          note: "**How** chỉ đi với tính từ, không đi với danh từ: nói “How beautiful!”, nhưng “What a beautiful day!”. Không nói “How a nice idea!”.",
          ex: [
            ["You are going to Japan? How exciting!", "Bạn sắp đi Nhật à? Thích quá!"],
            ["She lost her phone again. How annoying!", "Cô ấy lại mất điện thoại. Bực thật!"],
            ["He made this cake for you? How sweet!", "Anh ấy làm cái bánh này cho bạn à? Dễ thương quá!"],
            ["You won the game! How lucky!", "Bạn thắng rồi! May mắn thật!"]
          ] },
        { f: "What a / an + tính từ + danh từ!",
          mean: "**thật là một… !** Câu cảm thán dùng khi có **danh từ số ít**, nhấn mạnh tính chất của sự việc hay người đó.",
          parts: [
            ["What a", "dùng khi từ ngay sau bắt đầu bằng âm phụ âm: What a great idea!"],
            ["What an", "dùng khi từ ngay sau bắt đầu bằng âm nguyên âm: What an amazing trip!"],
            ["tính từ", "có thể bỏ: What a shame! What a surprise!"],
            ["danh từ", "danh từ số ít đếm được. Với danh từ số nhiều thì bỏ a / an: What nice people!"]
          ],
          use: "khen một ý tưởng, một món quà, một ngày đẹp hoặc bày tỏ tiếc nuối khi nghe chuyện của bạn bè.",
          note: "Không quên **a / an** với danh từ số ít: nói “What a nice day!”, không nói “What nice day!”. Câu này dùng danh từ, còn How chỉ dùng tính từ.",
          ex: [
            ["What a beautiful photo!", "Bức ảnh đẹp quá!"],
            ["What an interesting story!", "Câu chuyện thú vị thật!"],
            ["You remembered my birthday? What a nice surprise!", "Bạn nhớ sinh nhật mình à? Thật là bất ngờ dễ thương!"],
            ["The concert is cancelled? What a pity!", "Buổi hòa nhạc bị hủy à? Tiếc thật!"]
          ] }
      ],
      p: [
        "Câu cảm thán giúp bạn phản ứng nhanh và thể hiện cảm xúc khi nghe tin vui hoặc tin buồn của bạn bè: That is amazing! That is too bad.",
        "**How** đi với **tính từ đứng một mình** (How exciting!), còn **What a / an** đi với **danh từ** (What a great idea!). Không đổi chỗ cho nhau."
      ],
      ex: [["How exciting!", "Thú vị quá!"], ["What a shame!", "Tiếc thật!"]]
    }
  ],
  mistakes: [
    ["How about go to the cinema?", "How about going to the cinema?", "Sau **How about** dùng **động từ thêm -ing**."],
    ["Do you want go?", "Do you want to go?", "Sau **want** phải có **to** trước động từ nguyên mẫu."],
    ["No. I busy.", "I would love to, but I am busy this weekend. Maybe next time?", "Thiếu động từ **be** và nghe cộc lốc; hãy từ chối kèm lời tiếc và hẹn lại."],
    ["What do you do now? I watch TV.", "What are you doing now? I am watching TV.", "Việc đang xảy ra lúc nói dùng **thì hiện tại tiếp diễn**."],
    ["We are friends since ten years.", "We have been friends for ten years.", "Chuyện kéo dài đến hiện tại dùng **hiện tại hoàn thành**; khoảng thời gian đi với **for**."],
    ["What exciting!", "How exciting!", "Tính từ đứng một mình đi với **How**."],
    ["How a nice day!", "What a nice day!", "Có danh từ (day) thì dùng **What a**."]
  ],
  vocab: [
    ["grab a coffee", "đi cà phê"], ["hang out", "đi chơi"], ["be free", "rảnh"], ["make plans", "lên kế hoạch"],
    ["best friend", "bạn thân nhất"], ["close friend", "bạn thân"], ["funny", "vui tính, hài hước"], ["kind", "tốt bụng"],
    ["reliable", "đáng tin cậy"], ["talkative", "nói nhiều"], ["generous", "hào phóng"], ["honest", "trung thực, thẳng thắn"],
    ["get along with", "hòa hợp với"], ["fall out with", "giận nhau, cãi nhau với"], ["make up", "làm lành"], ["drift apart", "dần xa cách"],
    ["catch up", "hàn huyên, ôn chuyện"], ["count on", "tin cậy, trông cậy vào"], ["go way back", "quen nhau từ lâu lắm"], ["click", "hợp nhau ngay"],
    ["my treat", "để mình bao"], ["take a rain check", "hẹn dịp khác"], ["congratulations", "chúc mừng"], ["disappointed", "thất vọng, buồn"]
  ],
  tips: [
    "Khi từ chối, luôn đi đủ ba bước: **cảm ơn hoặc tiếc + lý do + gợi ý lần khác**. Ví dụ: “Thanks! I would love to, but I am visiting my parents. How about next Friday?”",
    "Kiểm tra dạng động từ khi rủ: **want to / would like to + động từ nguyên mẫu**, nhưng **How about + động từ thêm -ing**.",
    "Từ viết tắt khi nhắn tin như omw (on my way), idk (I do not know), btw (by the way), tbh (to be honest) chỉ dùng với bạn thân; với thầy cô, sếp hay người mới quen hãy viết đầy đủ.",
    "Tình bạn được xây bằng những lần hỏi lại: vài ngày sau khi bạn kể về buổi phỏng vấn hay kỳ thi, hãy nhắn **How did it go?**",
    "Thu âm một phút kể về bạn thân nhất: tên, quen nhau ở đâu, làm bạn bao lâu (**for / since**) và ba tính từ tả tính cách."
  ]
};
