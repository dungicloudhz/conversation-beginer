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
      p: [
        "**Do you want to** thân mật, dùng với bạn bè. **Would you like to** lịch sự hơn, hợp khi rủ người mới quen hoặc mời đến sự kiện. **Let’s** dùng khi bạn rủ cả hai cùng làm. **How about** mang tính gợi ý nhẹ nhàng.",
        "Lỗi hay gặp nhất là dạng động từ: sau **want to** và **would like to** phải có **to + động từ nguyên mẫu**, còn sau **How about** phải dùng **động từ thêm -ing** vì about là giới từ."
      ],
      ex: [["How about having lunch together?", "Mình ăn trưa cùng nhau nhé?"], ["Would you like to join us for dinner?", "Bạn có muốn ăn tối cùng bọn mình không?"]]
    },
    { h: "Nhận lời và từ chối: I would love to, have to, kế hoạch đã có",
      f: ["I would love to, but + lý do", "have to + động từ nguyên mẫu", "chủ ngữ + am / is / are + động từ thêm -ing (kế hoạch đã chốt)"],
      p: [
        "**I would love to** (thường nói I’d love to) không cần lặp lại động từ phía sau; chỉ nói I’d love to là đủ và tự nhiên. Thêm **but** để chuyển sang lời từ chối mà vẫn cho thấy bạn thật sự muốn đi.",
        "Dùng **have to + động từ nguyên mẫu** để nói lý do bắt buộc (I have to study for an exam). Dùng **thì hiện tại tiếp diễn** cho kế hoạch đã hẹn trước (I am meeting my cousin on Saturday).",
        "Từ chối khéo theo ba bước: **cảm ơn hoặc tiếc + lý do + gợi ý lần khác**. Chỉ nói “No. I busy.” sẽ nghe cộc lốc và còn sai ngữ pháp."
      ],
      ex: [["I would love to, but I am busy this weekend. Maybe next time?", "Mình rất muốn, nhưng cuối tuần này mình bận. Để lần sau nhé?"], ["I have to finish a report tonight.", "Tối nay mình phải làm xong báo cáo."]]
    },
    { h: "Thì hiện tại tiếp diễn: đang làm gì và sắp làm gì",
      f: ["chủ ngữ + am / is / are + động từ thêm -ing", "What are you doing + now / tonight?"],
      p: [
        "Khi nhắn tin hỏi bạn **đang** làm gì ngay lúc này, dùng thì hiện tại tiếp diễn: What are you doing now? I am watching TV. Không dùng hiện tại đơn (What do you do now?) vì câu đó hỏi về nghề nghiệp hoặc thói quen.",
        "Thì này cũng dùng cho **kế hoạch sắp tới đã chốt**: What are you doing tonight? I am having dinner with Lan."
      ],
      ex: [["I am watching a movie. What are you doing?", "Mình đang xem phim. Bạn đang làm gì?"], ["We are going to karaoke tonight.", "Tối nay bọn mình đi hát karaoke."]]
    },
    { h: "Hiện tại hoàn thành với for / since và câu hỏi What is she like?",
      f: ["have / has been friends + for + khoảng thời gian", "have / has known + người + since + mốc thời gian", "What is she like? → tính cách", "What does she look like? → ngoại hình"],
      p: [
        "Muốn nói tình bạn **bắt đầu trong quá khứ và vẫn còn đến bây giờ**, dùng thì hiện tại hoàn thành, không dùng hiện tại đơn. **For** đi với khoảng thời gian (for ten years), **since** đi với mốc thời gian (since 2019).",
        "**What is she like?** hỏi về tính cách (She is friendly and funny). **What does she look like?** hỏi về ngoại hình (She is tall with long hair). Chữ like ở đây nghĩa là “như thế nào”, không phải “thích”."
      ],
      ex: [["We have been friends for five years.", "Bọn tôi làm bạn được năm năm rồi."], ["I have known him since 2019.", "Tôi quen anh ấy từ năm 2019."]]
    },
    { h: "Câu cảm thán để chúc mừng và an ủi",
      f: ["That is + tính từ!", "How + tính từ!", "What a / an + tính từ + danh từ!"],
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
