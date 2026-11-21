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
      items: [
        { f: "Would you like to + động từ nguyên mẫu?",
          mean: "**Bạn có muốn… không?** Đây là câu **mời** lịch sự, hỏi người kia có muốn làm việc đó lần này không.",
          parts: [
            ["Would", "làm câu hỏi lịch sự hơn do (would = sẽ, mang sắc thái nhẹ nhàng)."],
            ["you", "người được mời; có thể thay bằng tên hoặc he, she."],
            ["like to", "muốn; **phải có to** trước động từ."],
            ["động từ nguyên mẫu", "việc được mời làm: come, join, have dinner, watch."]
          ],
          use: "mời ai đó đến tiệc, đi ăn, đi chơi. Đặt thêm nơi chốn và thời gian ở cuối câu: Would you like to come to my house on Friday?",
          note: "Đừng nhầm với **Would you like + danh từ?** (mời một thứ, ví dụ Would you like some tea?). Khi mời làm một việc thì phải có **to + động từ**.",
          ex: [
            ["Would you like to have dinner with us on Friday?", "Tối thứ Sáu bạn có muốn ăn tối với chúng mình không?"],
            ["Would you like to join our picnic?", "Bạn có muốn tham gia buổi dã ngoại của chúng mình không?"],
            ["Would your sister like to come too?", "Em gái bạn có muốn đến cùng không?"],
            ["Would you like to watch a movie at my place?", "Bạn có muốn đến nhà mình xem phim không?"]
          ] },
        { f: "Do you like + động từ thêm -ing?",
          mean: "**Bạn có thích… không?** Đây là câu **hỏi sở thích chung**, không phải lời mời.",
          parts: [
            ["Do", "trợ động từ của thì hiện tại đơn; với he, she dùng Does."],
            ["like", "thích (nói chung, lâu dài)."],
            ["động từ thêm -ing", "hoạt động: dancing, going to parties, singing karaoke."]
          ],
          use: "tìm hiểu sở thích của người khác trước khi mời. Trả lời ngắn: Yes, I do. / No, I do not (No, I don’t).",
          note: "Nếu muốn rủ, đừng hỏi “Do you like to come to my party?”. Hãy hỏi trước **Do you like karaoke?**, rồi mời bằng **Would you like to come?**",
          ex: [
            ["Do you like singing karaoke?", "Bạn có thích hát karaoke không?"],
            ["Does your boyfriend like going to parties?", "Bạn trai bạn có thích đi tiệc không?"],
            ["Do you like dancing? — Yes, I love it!", "Bạn có thích nhảy không? — Có, mình mê lắm!"],
            ["Do they like playing board games?", "Họ có thích chơi board game không?"]
          ] },
        { f: "chủ ngữ + am, is, are + động từ thêm -ing + thời gian",
          mean: "**báo một sự kiện đã lên kế hoạch** trong tương lai gần (dùng thì hiện tại tiếp diễn).",
          parts: [
            ["am, is, are", "chia theo chủ ngữ: I am, she is, we are."],
            ["động từ thêm -ing", "việc đã sắp xếp: having, throwing (tổ chức), celebrating, inviting."],
            ["thời gian", "thời điểm trong tương lai: on Saturday, next Sunday, tonight."]
          ],
          use: "mở đầu lời mời bằng cách thông báo sự kiện, sau đó mới hỏi Would you like to come?",
          note: "Cách này tự nhiên hơn will vì mọi thứ đã được chuẩn bị. **have a party** nghĩa là tổ chức tiệc, không phải “có tiệc” của người khác.",
          ex: [
            ["I am having a small party on Saturday night.", "Tối thứ Bảy mình tổ chức một bữa tiệc nhỏ."],
            ["We are celebrating my mom’s birthday next Sunday.", "Chủ Nhật tới nhà mình mừng sinh nhật mẹ."],
            ["My company is having a year-end party on Friday.", "Thứ Sáu công ty mình tổ chức tiệc cuối năm."],
            ["Are you doing anything this Saturday?", "Thứ Bảy này bạn có bận gì không?"]
          ] }
      ],
      p: [
        "**Would you like to…?** là câu **mời**, hỏi người kia có muốn làm việc đó lần này không: Would you like to come to my party? Sau like phải có **to** rồi mới đến động từ nguyên mẫu.",
        "**Do you like…?** chỉ là câu **hỏi sở thích chung**: Do you like going to parties? Nếu dùng câu này để mời, người nghe sẽ hiểu là bạn đang hỏi họ có thích tiệc tùng nói chung không.",
        "Khi báo một sự kiện đã lên kế hoạch, dùng **thì hiện tại tiếp diễn**: I am having a party on Saturday. Cách này tự nhiên hơn will vì mọi thứ đã được sắp xếp."
      ],
      ex: [["Would you like to come to my birthday party?", "Bạn có muốn đến dự tiệc sinh nhật của mình không?"], ["We are having a housewarming party next Sunday.", "Chủ Nhật tới nhà mình có tiệc tân gia."]]
    },
    { h: "Should I…? để xin lời khuyên, Is it okay if I…? để xin phép",
      f: ["Should I + động từ nguyên mẫu?", "Is it okay if I + động từ ở thì hiện tại đơn?"],
      items: [
        { f: "Should I + động từ nguyên mẫu?",
          mean: "**Tôi có nên… không?** Dùng để **xin lời khuyên** từ chủ nhà hoặc người mời.",
          parts: [
            ["Should", "nên; đứng đầu câu để hỏi."],
            ["I", "người hỏi; có thể dùng we khi đi theo nhóm."],
            ["động từ nguyên mẫu", "động từ đứng ngay sau, **không có to**: bring, wear, come."]
          ],
          use: "hỏi chủ nhà cần mang gì, mặc gì, đến lúc mấy giờ. Có thể thêm từ để hỏi phía trước: What should I bring? What time should I come?",
          note: "Không nói “Should I to bring…?”. Khi hỏi mang gì, dùng **anything**: Should I bring anything?",
          ex: [
            ["Should I bring some drinks?", "Mình có nên mang đồ uống không?"],
            ["What should I wear to the party?", "Mình nên mặc gì đi dự tiệc?"],
            ["What time should we arrive?", "Chúng mình nên đến lúc mấy giờ?"],
            ["Should I bring a dish to share?", "Mình có nên mang một món ăn đến góp không?"]
          ] },
        { f: "Is it okay if I + động từ ở thì hiện tại đơn?",
          mean: "**Mình… có được không?** Dùng để **xin phép** làm một việc một cách lịch sự.",
          parts: [
            ["Is it okay", "có ổn không, có được không (thân mật, phổ biến)."],
            ["if I", "nếu tôi; có thể thay bằng if we."],
            ["động từ ở thì hiện tại đơn", "việc xin phép làm: come, leave, bring. Không dùng will dù là việc tương lai."]
          ],
          use: "xin phép trước khi đến dự: đến muộn, dẫn bạn theo, về sớm. Trả lời: Sure! / Of course! / No problem!",
          note: "Không nói “Is it okay if I will come late?”. Sau if chỉ dùng **thì hiện tại đơn**. Lịch sự hơn có thể nói **Is it all right if I…?**",
          ex: [
            ["Is it okay if I come at eight?", "Mình đến lúc tám giờ có được không?"],
            ["Is it okay if I leave a bit early?", "Mình về sớm một chút có được không?"],
            ["Is it okay if we bring our kids?", "Chúng mình dẫn con theo có được không?"],
            ["Is it okay if I park in front of your house?", "Mình đỗ xe trước nhà bạn có được không?"]
          ] }
      ],
      p: [
        "Dùng **Should I…?** khi bạn muốn chủ nhà khuyên mình nên làm gì: Should I bring anything? Sau should là động từ nguyên mẫu, không có to.",
        "Dùng **Is it okay if I…?** khi bạn xin phép làm một việc: Is it okay if I come a bit late? Vế sau if dùng **thì hiện tại đơn**, không dùng will, dù việc đó xảy ra trong tương lai.",
        "Trong câu hỏi về việc mang gì, dùng **anything** (bất cứ thứ gì) chứ không dùng something, vì bạn chưa biết có cần mang hay không."
      ],
      ex: [["Should I bring a gift?", "Tôi có nên mang quà không?"], ["Is it okay if I bring my boyfriend?", "Mình dẫn bạn trai theo được không?"]]
    },
    { h: "I’d love to: dừng ở chữ “to”",
      f: ["I’d love to.", "I’d love to + động từ nguyên mẫu", "Thanks for + động từ thêm -ing"],
      items: [
        { f: "I’d love to.",
          mean: "**Mình rất muốn!** Câu trả lời ngắn để **nhận lời mời** một cách vui vẻ.",
          parts: [
            ["I’d", "dạng rút gọn của **I would**."],
            ["love to", "rất muốn; câu dừng ngay ở **to** vì động từ đã có trong câu mời."]
          ],
          use: "đáp lại câu mời Would you like to…? Thường đi kèm Yes và một lời cảm ơn: Yes, I’d love to. Thanks!",
          note: "Không được bỏ to và nói “I’d love.” hay “Yes, I love.”. Nghe thiếu và sai.",
          ex: [
            ["Would you like to come to my party? — I’d love to.", "Bạn có muốn đến tiệc của mình không? — Mình rất muốn."],
            ["Do you want to join us for lunch? — Yes, I’d love to!", "Bạn có muốn ăn trưa cùng chúng mình không? — Có, mình rất muốn!"],
            ["Would you like to go hiking on Sunday? — I’d love to. Thanks!", "Chủ Nhật bạn có muốn đi leo núi không? — Mình rất muốn. Cảm ơn nhé!"],
            ["Would you like to watch the match with us? — Oh, I’d love to.", "Bạn có muốn xem trận đấu với chúng mình không? — Ôi, mình rất muốn."]
          ] },
        { f: "I’d love to + động từ nguyên mẫu",
          mean: "**Mình rất muốn làm việc đó**. Câu nhận lời đầy đủ, nói rõ việc mình muốn làm.",
          parts: [
            ["I’d love to", "rất muốn (dạng đầy đủ: I would love to)."],
            ["động từ nguyên mẫu", "việc muốn làm: come, join, see, try."]
          ],
          use: "nhận lời và nhắc lại việc đó, hoặc tự nói mong muốn của mình. Có thể dùng **I’d like to** (muốn) với mức độ nhẹ hơn.",
          note: "Khác với **I love + động từ thêm -ing** (sở thích chung): I love dancing = mình mê nhảy; I’d love to dance = mình rất muốn nhảy (lần này).",
          ex: [
            ["I’d love to come to your wedding.", "Mình rất muốn đến dự đám cưới của bạn."],
            ["I’d love to meet your family.", "Mình rất muốn gặp gia đình bạn."],
            ["I’d love to try your homemade cake.", "Mình rất muốn ăn thử bánh bạn tự làm."],
            ["She’d love to join the trip.", "Cô ấy rất muốn tham gia chuyến đi."]
          ] },
        { f: "Thanks for + động từ thêm -ing",
          mean: "**Cảm ơn vì đã…**: cảm ơn ai đó vì một việc họ đã làm cho mình.",
          parts: [
            ["Thanks", "cảm ơn (thân mật); trang trọng hơn là Thank you."],
            ["for", "giới từ chỉ lý do cảm ơn."],
            ["động từ thêm -ing", "việc người kia làm: inviting, asking, coming, helping."]
          ],
          use: "cảm ơn khi nhận lời mời, khi khách đến, hoặc khi được giúp. Sau for cũng có thể là danh từ: Thanks for the invitation.",
          note: "Không nói “Thanks for invite me” hay “Thanks for to invite me”. Sau giới từ for, động từ **luôn thêm -ing**.",
          ex: [
            ["Thanks for asking me!", "Cảm ơn đã rủ mình!"],
            ["Thanks for coming to my party.", "Cảm ơn bạn đã đến dự tiệc của mình."],
            ["Thanks for helping me with the food.", "Cảm ơn bạn đã giúp mình chuẩn bị đồ ăn."],
            ["Thanks for the invitation. I will be there.", "Cảm ơn lời mời. Mình sẽ có mặt."]
          ] }
      ],
      p: [
        "**I’d love to** là dạng rút gọn của I would love to, nghĩa là “mình rất muốn”. Khi trả lời ngắn, chỉ cần dừng ở **to**, vì động từ (come, join) đã có trong câu mời nên không cần lặp lại. Không được bỏ chữ to và nói “I’d love.”",
        "Muốn nói đầy đủ thì thêm động từ nguyên mẫu sau to: I’d love to come.",
        "Sau giới từ **for** động từ phải thêm **-ing**, nên nói Thanks for inviting me, không nói “Thanks for invite me”."
      ],
      ex: [["Would you like to come? — Yes, I’d love to.", "Bạn có muốn đến không? — Có, mình rất muốn."], ["Thanks for inviting me.", "Cảm ơn đã mời mình."]]
    },
    { h: "I’m afraid và I wish I could để từ chối nhẹ nhàng",
      f: ["I am afraid + chủ ngữ + động từ", "I wish I could + động từ nguyên mẫu", "Unfortunately, + mệnh đề"],
      items: [
        { f: "I am afraid + chủ ngữ + động từ",
          mean: "**E là…, rất tiếc là…**: làm cho lời từ chối hoặc tin không vui nghe **nhẹ nhàng, lịch sự** hơn.",
          parts: [
            ["I am afraid", "e là (không phải nghĩa “sợ”); khi nói thường rút gọn thành I’m afraid."],
            ["chủ ngữ + động từ", "một mệnh đề đầy đủ phía sau: I cannot come, I have plans, I am busy."],
            ["I am afraid not", "câu trả lời ngắn: e là không."]
          ],
          use: "đặt ở đầu câu từ chối. Thường kèm lời cảm ơn và lý do ngắn: Thanks, but I’m afraid I have to work.",
          note: "Không bỏ chủ ngữ: nói **I’m afraid I can’t come**, không nói “I’m afraid can’t come”.",
          ex: [
            ["I am afraid I have to work on Saturday.", "E là thứ Bảy mình phải đi làm."],
            ["I’m afraid I already have plans that evening.", "E là tối đó mình có hẹn rồi."],
            ["I am afraid my wife cannot come.", "E là vợ mình không đến được."],
            ["Can you come on Friday? — I’m afraid not.", "Thứ Sáu bạn đến được không? — E là không."]
          ] },
        { f: "I wish I could + động từ nguyên mẫu",
          mean: "**Ước gì mình… được**: tiếc vì muốn làm nhưng thực tế **không thể**.",
          parts: [
            ["I wish", "tôi ước."],
            ["I could", "tôi có thể; bắt buộc dùng **could** (không dùng can) vì đây là điều ước trái với thực tế."],
            ["động từ nguyên mẫu", "việc mình muốn làm: come, join, go."]
          ],
          use: "từ chối một cách ấm áp, cho người mời thấy bạn thật sự muốn đi. Thường đi với but + lý do: I wish I could, but I am busy.",
          note: "Có thể dừng ngay ở **I wish I could.** khi trả lời ngắn. Không nói “I wish I can”.",
          ex: [
            ["I wish I could come, but I am visiting my parents.", "Ước gì mình đến được, nhưng mình phải về thăm bố mẹ."],
            ["I wish I could join you, but I have an exam on Monday.", "Ước gì mình đi cùng được, nhưng thứ Hai mình có bài thi."],
            ["Would you like to come? — I wish I could!", "Bạn có muốn đến không? — Ước gì mình đến được!"],
            ["I wish I could stay longer.", "Ước gì mình ở lại lâu hơn được."]
          ] },
        { f: "Unfortunately, + mệnh đề",
          mean: "**Thật không may, rất tiếc là…**: báo tin không vui hoặc từ chối một cách lịch sự.",
          parts: [
            ["Unfortunately", "thật không may, rất tiếc; trang trọng hơn I’m afraid một chút."],
            ["dấu phẩy", "đặt sau Unfortunately khi đứng đầu câu."],
            ["mệnh đề", "một câu đầy đủ có chủ ngữ và động từ: I cannot make it."]
          ],
          use: "dùng khi từ chối trong tin nhắn, email hoặc khi nói chuyện lịch sự. Thường đứng đầu câu.",
          note: "Không dùng Unfortunately một mình như một câu trả lời. Sau nó luôn là một mệnh đề đầy đủ.",
          ex: [
            ["Unfortunately, I cannot make it on Sunday.", "Rất tiếc, Chủ Nhật mình không đến được."],
            ["Unfortunately, my flight is on the same day.", "Thật không may, chuyến bay của mình lại cùng ngày."],
            ["Unfortunately, we are busy that weekend.", "Rất tiếc, cuối tuần đó chúng mình bận."],
            ["Thanks for the invitation. Unfortunately, I will be away.", "Cảm ơn lời mời. Rất tiếc là mình sẽ đi vắng."]
          ] }
      ],
      p: [
        "**I’m afraid** (I am afraid) ở đây không có nghĩa là “sợ” mà là “e là”, dùng để làm lời từ chối hoặc tin không vui **nhẹ nhàng hơn**. Phía sau phải có đủ một mệnh đề có chủ ngữ: I’m afraid I can’t come, không nói “I’m afraid can’t come”.",
        "**I wish I could** nghĩa là “ước gì mình làm được” nhưng thực tế không thể. Vì là điều ước trái với thực tế, phải dùng **could**, không dùng can.",
        "Người bản xứ hiếm khi chỉ nói “No, I can’t.” vì nghe cộc. Hãy cảm ơn ở đầu, nêu lý do ngắn và chúc ở cuối; câu I already have plans là đủ lịch sự, không cần kể chi tiết."
      ],
      ex: [["I’m afraid I can’t make it.", "E là mình không đến được. (dạng đầy đủ: I am afraid I cannot make it)"], ["I wish I could join you.", "Ước gì mình đi cùng các bạn được."]]
    },
    { h: "How about…? để đề xuất và Thanks for having me khi ra về",
      f: ["How about + danh từ?", "How about + động từ thêm -ing?", "Thanks for having me."],
      items: [
        { f: "How about + danh từ?",
          mean: "**… thì sao? … được không?** Đề xuất **một lựa chọn khác** (ngày, giờ, nơi chốn).",
          parts: [
            ["How about", "thế còn… thì sao; thân mật, dùng nhiều khi nói."],
            ["danh từ", "ngày, giờ, nơi chốn hoặc món ăn: Sunday, seven o’clock, the café, pizza."]
          ],
          use: "đề xuất thay thế khi không đi được ngày người kia đưa ra. Thường thêm **instead** (thay vào đó) ở cuối.",
          note: "Có thể dùng **What about…?** với nghĩa tương tự. Câu trả lời: Sounds good! / That works for me.",
          ex: [
            ["I am busy on Friday. How about Saturday?", "Thứ Sáu mình bận. Thứ Bảy thì sao?"],
            ["How about seven o’clock?", "Bảy giờ được không?"],
            ["How about the new café near the park?", "Quán cà phê mới gần công viên thì sao?"],
            ["How about pizza instead?", "Thay vào đó ăn pizza thì sao?"]
          ] },
        { f: "How about + động từ thêm -ing?",
          mean: "**Hay là mình… đi?** Đề xuất **làm một việc** khác.",
          parts: [
            ["How about", "thế còn… thì sao."],
            ["động từ thêm -ing", "việc đề xuất: meeting, going, having, watching."]
          ],
          use: "gợi ý một hoạt động hoặc kế hoạch mới. Sau How about là động từ thêm -ing vì about là giới từ.",
          note: "Không nói “How about meet next week?”. Phải thêm **-ing**: How about meeting next week? Cách khác cùng nghĩa: **Why don’t we + động từ nguyên mẫu?**",
          ex: [
            ["How about meeting next week instead?", "Hay là tuần sau mình gặp nhau?"],
            ["How about having lunch together on Monday?", "Hay là thứ Hai mình ăn trưa cùng nhau?"],
            ["How about going to the cinema after dinner?", "Ăn tối xong đi xem phim thì sao?"],
            ["How about watching the game at my house?", "Hay là xem trận đấu ở nhà mình?"]
          ] },
        { f: "Thanks for having me.",
          mean: "**Cảm ơn đã tiếp đãi mình**: câu khách nói với chủ nhà **lúc ra về**.",
          parts: [
            ["Thanks for", "cảm ơn vì."],
            ["having me", "đã có mình ở đây, đã đón tiếp mình (have someone over = mời ai đến nhà). Đi theo nhóm thì nói having us."]
          ],
          use: "nói khi chào tạm biệt sau bữa tiệc hoặc bữa ăn ở nhà người khác. Thường kèm lời khen: I had a great time! / The food was delicious!",
          note: "Lúc nhận lời mời nói **Thanks for inviting me**; lúc ra về nói **Thanks for having me**. Chủ nhà đáp lại: Thanks for coming!",
          ex: [
            ["Thanks for having me. The food was delicious!", "Cảm ơn đã tiếp đãi. Đồ ăn ngon lắm!"],
            ["Thanks for having us. We had a wonderful evening.", "Cảm ơn đã tiếp đãi chúng mình. Một buổi tối tuyệt vời."],
            ["I should go now. Thanks for having me!", "Mình phải về đây. Cảm ơn đã tiếp đãi nhé!"],
            ["Thanks for having me. — Thanks for coming!", "Cảm ơn đã tiếp đãi. — Cảm ơn bạn đã đến!"]
          ] }
      ],
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
