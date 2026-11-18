/* Cheat sheet: Invitations (Mời, nhận lời và từ chối). Hiển thị bởi cheatsheet.js. */
window.A1_CHEAT = {
  goal: [
    "Mời người khác đến một sự kiện ở ba mức: thân mật, lịch sự và trang trọng.",
    "Hỏi chi tiết trước khi nhận lời: mấy giờ, ở đâu, nên mang gì, mặc gì, có được dẫn bạn theo không.",
    "Nhận lời vui vẻ bằng **I’d love to** và cảm ơn bằng **Thanks for inviting me**.",
    "Từ chối lịch sự theo công thức bốn bước: cảm ơn, tiếc, nêu lý do, chúc hoặc hẹn dịp khác.",
    "Hẹn trả lời sau, đề xuất ngày khác và dùng đúng các câu của chủ nhà và khách khi đến dự."
  ],
  phrases: [
    { h: "Mời theo mức độ thân quen", rows: [
      ["I am having a party on Saturday. Do you want to come?", "Thứ Bảy mình có tiệc. Bạn đến không?", "Dùng với bạn thân. Khi nói thường rút gọn: I’m having (I’m = I am). Bạn bè rất thân còn nói Wanna come? (wanna = want to), chỉ dùng khi nói chuyện suồng sã."],
      ["Are you free on Friday? Come over for dinner!", "Thứ Sáu bạn rảnh không? Qua nhà mình ăn tối nhé!", "Dùng với bạn thân."],
      ["Would you like to come to my birthday party?", "Bạn có muốn đến dự tiệc sinh nhật của mình không?", "Lịch sự, dùng với đồng nghiệp và người quen."],
      ["We are having a housewarming party. We would love you to come.", "Nhà mình có tiệc tân gia. Bọn mình rất mong bạn đến.", "Dạng rút gọn: We’re (We are), We’d (We would)."],
      ["We would be delighted if you could join us for our wedding.", "Chúng tôi rất hân hạnh nếu bạn có thể đến dự đám cưới của chúng tôi.", "Trang trọng, dùng cho đám cưới và thiệp mời."]
    ]},
    { h: "Hỏi chi tiết về sự kiện", rows: [
      ["When is it? What time does it start?", "Khi nào vậy? Mấy giờ bắt đầu?"],
      ["Should I bring anything?", "Tôi có nên mang gì không?"],
      ["What should I wear? Is there a dress code?", "Nên mặc gì? Có quy định trang phục không?"],
      ["Who else is coming?", "Còn ai đến nữa?"],
      ["Is it okay if I bring a friend?", "Tôi dẫn theo một người bạn được không?"]
    ]},
    { h: "Chủ nhà trả lời câu hỏi của khách", rows: [
      ["It starts at seven, but come whenever you like.", "Bảy giờ bắt đầu, nhưng bạn đến lúc nào cũng được."],
      ["Just bring yourself!", "Cứ đến người không là được!"],
      ["Something casual is fine.", "Mặc thoải mái là được."],
      ["Of course! The more, the merrier.", "Tất nhiên! Càng đông càng vui."]
    ]},
    { h: "Nhận lời", rows: [
      ["Sounds great! Count me in.", "Nghe hay đấy! Tính cả mình nhé.", "Thân mật."],
      ["Sure, I will be there!", "Được, mình sẽ đến!", "Dạng rút gọn: I’ll (I’ll = I will)."],
      ["I’d love to! Thanks for inviting me.", "Rất sẵn lòng! Cảm ơn đã mời mình.", "I’d = I would. Câu trả lời ngắn này gần như luôn nói ở dạng rút gọn."],
      ["That is very kind of you. I would be happy to come.", "Bạn thật chu đáo. Mình rất vui được đến.", "Dạng rút gọn: That’s, I’d be happy."],
      ["Thank you for the kind invitation. I would be delighted to attend.", "Cảm ơn lời mời. Tôi rất hân hạnh được tham dự.", "Trang trọng, dùng khi trả lời thiệp mời."]
    ]},
    { h: "Từ chối lịch sự", rows: [
      ["Thanks so much for inviting me, but I am afraid I cannot make it.", "Cảm ơn bạn đã mời, nhưng e là mình không đến được.", "Khi nói thường rút gọn: I’m afraid I can’t make it (I’m = I am, can’t = cannot)."],
      ["I am going on a business trip that week.", "Tuần đó mình đi công tác."],
      ["I wish I could, but I already have plans.", "Ước gì mình đi được, nhưng mình có hẹn rồi."],
      ["Unfortunately, I am busy that evening.", "Tiếc là tối đó mình bận."],
      ["Have a great time! Let’s catch up soon.", "Chơi vui nhé! Sớm gặp lại nhau nhé.", "Let’s = Let us, nhưng luôn nói ở dạng rút gọn."]
    ]},
    { h: "Chưa chắc, đổi ngày và khi đến dự", rows: [
      ["Let me check my schedule and get back to you.", "Để mình xem lịch rồi trả lời bạn."],
      ["Saturday is difficult. How about Sunday instead?", "Thứ Bảy khó. Chủ Nhật thay thế được không?"],
      ["Come in! I am so glad you could make it.", "Vào đi! Rất vui vì bạn đến được.", "Chủ nhà nói. Dạng rút gọn: I’m so glad."],
      ["Make yourself at home. Help yourself to some food.", "Cứ tự nhiên như ở nhà. Cứ tự nhiên lấy đồ ăn nhé.", "Chủ nhà nói."],
      ["Thanks for having me. I had a great time.", "Cảm ơn đã tiếp đãi. Mình chơi rất vui.", "Khách nói khi ra về."]
    ]}
  ],
  grammar: [
    { h: "Would you like to + động từ khác Do you like + động từ thêm -ing",
      f: ["Would you like to + động từ nguyên mẫu?", "Do you like + động từ thêm -ing?", "chủ ngữ + am, is, are + động từ thêm -ing + thời gian"],
      p: [
        "**Would you like to…?** là câu **mời**, hỏi người kia có muốn làm việc đó lần này không: Would you like to come to my party? Sau like phải có **to** rồi mới đến động từ nguyên mẫu.",
        "**Do you like…?** chỉ là câu **hỏi sở thích chung**: Do you like going to parties? Nếu dùng câu này để mời, người nghe sẽ hiểu là bạn đang hỏi họ có thích tiệc tùng nói chung không.",
        "Khi báo một sự kiện đã lên kế hoạch, dùng **thì hiện tại tiếp diễn**: I am having a party on Saturday. Cách này tự nhiên hơn will vì mọi thứ đã được sắp xếp."
      ],
      ex: [["Would you like to come to my birthday party?", "Bạn có muốn đến dự tiệc sinh nhật của mình không?"], ["We are having a housewarming party next Sunday.", "Chủ Nhật tới nhà mình có tiệc tân gia."]]
    },
    { h: "Should I…? để xin lời khuyên, Is it okay if I…? để xin phép",
      f: ["Should I + động từ nguyên mẫu?", "Is it okay if I + động từ ở thì hiện tại đơn?"],
      p: [
        "Dùng **Should I…?** khi bạn muốn chủ nhà khuyên mình nên làm gì: Should I bring anything? Sau should là động từ nguyên mẫu, không có to.",
        "Dùng **Is it okay if I…?** khi bạn xin phép làm một việc: Is it okay if I come a bit late? Vế sau if dùng **thì hiện tại đơn**, không dùng will, dù việc đó xảy ra trong tương lai.",
        "Trong câu hỏi về việc mang gì, dùng **anything** (bất cứ thứ gì) chứ không dùng something, vì bạn chưa biết có cần mang hay không."
      ],
      ex: [["Should I bring a gift?", "Tôi có nên mang quà không?"], ["Is it okay if I bring my boyfriend?", "Mình dẫn bạn trai theo được không?"]]
    },
    { h: "I’d love to: dừng ở chữ “to”",
      f: ["I’d love to.", "I’d love to + động từ nguyên mẫu", "Thanks for + động từ thêm -ing"],
      p: [
        "**I’d love to** là dạng rút gọn của I would love to, nghĩa là “mình rất muốn”. Khi trả lời ngắn, chỉ cần dừng ở **to**, vì động từ (come, join) đã có trong câu mời nên không cần lặp lại. Không được bỏ chữ to và nói “I’d love.”",
        "Muốn nói đầy đủ thì thêm động từ nguyên mẫu sau to: I’d love to come.",
        "Sau giới từ **for** động từ phải thêm **-ing**, nên nói Thanks for inviting me, không nói “Thanks for invite me”."
      ],
      ex: [["Would you like to come? — Yes, I’d love to.", "Bạn có muốn đến không? — Có, mình rất muốn."], ["Thanks for inviting me.", "Cảm ơn đã mời mình."]]
    },
    { h: "I’m afraid và I wish I could để từ chối nhẹ nhàng",
      f: ["I am afraid + chủ ngữ + động từ", "I wish I could + động từ nguyên mẫu", "Unfortunately, + mệnh đề"],
      p: [
        "**I’m afraid** (I am afraid) ở đây không có nghĩa là “sợ” mà là “e là”, dùng để làm lời từ chối hoặc tin không vui **nhẹ nhàng hơn**. Phía sau phải có đủ một mệnh đề có chủ ngữ: I’m afraid I can’t come, không nói “I’m afraid can’t come”.",
        "**I wish I could** nghĩa là “ước gì mình làm được” nhưng thực tế không thể. Vì là điều ước trái với thực tế, phải dùng **could**, không dùng can.",
        "Người bản xứ hiếm khi chỉ nói “No, I can’t.” vì nghe cộc. Hãy cảm ơn ở đầu, nêu lý do ngắn và chúc ở cuối; câu I already have plans là đủ lịch sự, không cần kể chi tiết."
      ],
      ex: [["I’m afraid I can’t make it.", "E là mình không đến được. (dạng đầy đủ: I am afraid I cannot make it)"], ["I wish I could join you.", "Ước gì mình đi cùng các bạn được."]]
    },
    { h: "How about…? để đề xuất và Thanks for having me khi ra về",
      f: ["How about + danh từ?", "How about + động từ thêm -ing?", "Thanks for having me."],
      p: [
        "Khi không đi được ngày chủ nhà đề nghị, dùng **How about…?** để đề xuất cách khác. Sau How about là một **danh từ** (How about Sunday?) hoặc **động từ thêm -ing** (How about meeting next week?), không dùng động từ nguyên mẫu.",
        "Lúc nhận lời mời, khách nói Thanks for inviting me. Nhưng **khi ra về**, khách nói **Thanks for having me** (cảm ơn đã tiếp đãi), vì lúc này bạn cảm ơn cả buổi được đón tiếp chứ không chỉ lời mời."
      ],
      ex: [["Saturday is difficult. How about Sunday instead?", "Thứ Bảy khó. Chủ Nhật thay thế được không?"], ["Thanks for having me. I had a great time!", "Cảm ơn đã tiếp đãi. Mình chơi rất vui!"]]
    }
  ],
  mistakes: [
    ["Would you like come to my party?", "Would you like to come to my party?", "Sau **Would you like** phải có **to** trước động từ nguyên mẫu."],
    ["Do you like to come my party?", "Would you like to come to my party?", "**Do you like** là hỏi sở thích chung, không phải lời mời; và come phải đi với **to** trước địa điểm."],
    ["Should I to bring something?", "Should I bring anything?", "Sau **should** là động từ nguyên mẫu không có to; câu hỏi dùng **anything**."],
    ["Is it okay if I will come late?", "Is it okay if I come late?", "Vế sau **if** dùng thì hiện tại đơn, không dùng will."],
    ["Yes, I’d love. Thanks for invite me.", "Yes, I’d love to. Thanks for inviting me.", "Câu trả lời ngắn phải giữ chữ **to**; sau **for** động từ thêm **-ing**. (I’d = I would)"],
    ["I’m afraid can’t come. I wish I can come.", "I’m afraid I can’t come. I wish I could come.", "Sau I’m afraid cần đủ **chủ ngữ**; sau I wish dùng **could**. (I’m = I am, can’t = cannot)"],
    ["How about meet on Sunday?", "How about meeting on Sunday?", "Sau **How about** dùng danh từ hoặc động từ thêm **-ing**."]
  ],
  vocab: [
    ["invite", "mời"], ["invitation", "lời mời, thiệp mời"], ["birthday party", "tiệc sinh nhật"], ["housewarming party", "tiệc tân gia"],
    ["dinner party", "bữa tối mời khách ở nhà"], ["wedding", "đám cưới"], ["farewell party", "tiệc chia tay"], ["year-end party", "tiệc tất niên"],
    ["free", "rảnh"], ["busy", "bận"], ["plans", "kế hoạch, hẹn trước"], ["dress code", "quy định trang phục"],
    ["casual", "thoải mái, không trang trọng"], ["bring", "mang theo"], ["join", "tham gia, đi cùng"], ["attend", "tham dự"],
    ["make it", "đến được"], ["count me in", "tính cả mình"], ["unfortunately", "thật tiếc là"], ["schedule", "lịch làm việc"],
    ["host / guest", "chủ nhà / khách"], ["RSVP", "vui lòng phản hồi có đến hay không"], ["a plus-one", "người đi cùng"], ["take a rain check", "hẹn dịp khác"]
  ],
  tips: [
    "Luyện cùng một lời mời ở ba mức: thân mật (Are you free on Friday?), lịch sự (**Would you like to…?**) và trang trọng (We would be delighted if you could join us).",
    "Khi từ chối, nhớ công thức bốn bước: **cảm ơn**, **tiếc** (I’m afraid I can’t make it, dạng đầy đủ: I am afraid I cannot make it), **lý do ngắn**, **lời chúc**.",
    "Trả lời ngắn lời mời bằng **I’d love to** (I would love to) và nhớ dừng ở chữ to, không nói “I’d love.”",
    "Khi ra về, đổi Thanks for inviting me thành **Thanks for having me** để cảm ơn chủ nhà đã tiếp đãi.",
    "Với thiệp mời có chữ **RSVP**, hãy trả lời trước hạn kể cả khi bạn không đến, để chủ nhà chuẩn bị đồ ăn và chỗ ngồi."
  ]
};
