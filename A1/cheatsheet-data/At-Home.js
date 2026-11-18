/* Cheat sheet: At Home (Ở nhà, nói gì). Hiển thị bởi cheatsheet.js. */
window.A1_CHEAT = {
  goal: [
    "Gọi tên các loại nhà, các phòng và những đồ đạc quen thuộc trong từng phòng.",
    "Giới thiệu ngôi nhà của bạn bằng There is và There are.",
    "Nói đồ vật nằm ở đâu bằng in, on, under, next to, behind.",
    "Nhờ người trong nhà làm việc và đề nghị giúp đỡ bằng Can you, Could you, Shall I.",
    "Đón khách lịch sự từ lúc mời vào, mời đồ uống, dẫn đi xem nhà đến lúc chào tạm biệt."
  ],
  phrases: [
    { h: "Giới thiệu nhà của bạn", rows: [
      ["Where do you live? — I live in an apartment in Cau Giay.", "Bạn sống ở đâu? — Tôi sống ở một căn hộ ở Cầu Giấy."],
      ["I live with my parents and my younger brother.", "Tôi sống với bố mẹ và em trai."],
      ["It has two bedrooms and one bathroom.", "Nhà có hai phòng ngủ và một phòng tắm."],
      ["My room is small but very cozy.", "Phòng tôi nhỏ nhưng rất ấm cúng."],
      ["What is your home like?", "Nhà bạn thế nào?", "Thường nói rút gọn: What’s your home like? (What’s = What is)."]
    ]},
    { h: "Tìm đồ trong nhà", rows: [
      ["Where are my keys?", "Chìa khóa của tôi đâu?", "keys là số nhiều nên dùng **are**."],
      ["They are on the table next to the door.", "Trên bàn cạnh cửa ấy.", "Dạng rút gọn: They’re (They’re = They are)."],
      ["The milk is in the fridge.", "Sữa ở trong tủ lạnh."],
      ["The cat is under the table.", "Con mèo ở dưới gầm bàn."],
      ["The picture is on the wall.", "Bức tranh ở trên tường."]
    ]},
    { h: "Nhờ việc và đề nghị giúp", rows: [
      ["Can you take out the trash?", "Bạn đổ rác giúp được không?"],
      ["Could you turn off the light, please?", "Bạn tắt đèn giúp tôi được không?"],
      ["Please close the window. It is cold.", "Đóng cửa sổ giúp nhé. Lạnh quá.", "Dạng rút gọn: It’s cold (It’s = It is)."],
      ["Shall I wash the dishes?", "Để tôi rửa bát nhé?"],
      ["I will do the laundry today.", "Hôm nay tôi giặt đồ cho.", "Khi nói thường rút gọn: I’ll (I’ll = I will)."]
    ]},
    { h: "Chủ nhà đón khách", rows: [
      ["Hi! Come in, please.", "Chào bạn! Mời vào."],
      ["You can leave your shoes here.", "Bạn để giày ở đây nhé."],
      ["Please have a seat.", "Mời bạn ngồi."],
      ["Would you like something to drink?", "Bạn uống gì không?"],
      ["Let me show you around.", "Để tôi dẫn bạn đi xem nhà.", "Let me là cụm cố định, nghĩa là “để tôi”."]
    ]},
    { h: "Khách đến chơi", rows: [
      ["Thanks for having me.", "Cảm ơn đã mời tôi đến."],
      ["Should I take off my shoes?", "Tôi có cần cởi giày không?"],
      ["What a lovely home!", "Nhà đẹp quá!"],
      ["Can I use your bathroom?", "Tôi dùng nhà vệ sinh được không?"],
      ["I should get going. Thanks for everything!", "Tôi phải về rồi. Cảm ơn vì tất cả nhé!"]
    ]}
  ],
  grammar: [
    { h: "There is và There are để nói trong nhà có gì",
      f: ["There is + a hoặc an + danh từ số ít", "There are + số đếm hoặc some + danh từ số nhiều", "Is there…? / Are there any…?", "There is not / There are not"],
      p: [
        "Khi muốn nói “ở đâu đó **có** cái gì”, tiếng Anh dùng **There is / There are**, không dùng “have”. Người Việt hay nói “My house have two bedroom” vì dịch từng chữ “nhà tôi có”.",
        "Dùng **There is** với một thứ (There is a big kitchen) và **There are** với nhiều thứ (There are three bedrooms). Danh từ số nhiều phải thêm **-s**.",
        "Muốn hỏi thì đảo is hoặc are lên đầu: Is there a balcony? Trả lời ngắn: Yes, there is. / No, there is not (rút gọn: there isn’t)."
      ],
      ex: [["There are two bedrooms in my house.", "Nhà tôi có hai phòng ngủ."], ["Is there a balcony? — Yes, there is.", "Có ban công không? — Có."]]
    },
    { h: "Giới từ chỉ vị trí: in, on, under, next to, behind",
      f: ["in + không gian bên trong", "on + bề mặt, kể cả tường", "under / next to / behind + đồ vật"],
      p: [
        "**in** nghĩa là bên trong một không gian có vách bao quanh: in the drawer, in the fridge. **on** nghĩa là nằm trên một bề mặt: on the table.",
        "Bức tường cũng được xem là một bề mặt, nên tranh và đồng hồ treo tường dùng **on the wall**, không dùng “in the wall”.",
        "Ba giới từ khác hay dùng trong nhà: **under** (dưới gầm), **next to** (bên cạnh), **behind** (phía sau). Câu trả lời luôn có dạng: đồ vật + is hoặc are + giới từ + the + đồ đạc."
      ],
      ex: [["The clock is on the wall.", "Đồng hồ ở trên tường."], ["My bag is behind the door.", "Túi của tôi ở sau cánh cửa."]]
    },
    { h: "Sở hữu cách ’s và tính từ sở hữu",
      f: ["tên người + ’s + đồ vật", "danh từ số nhiều tận cùng bằng -s + ’ + đồ vật", "my / your / his / her / our / their + danh từ"],
      p: [
        "Tiếng Việt nói “phòng **của** chị tôi”, nhưng tiếng Anh đặt người sở hữu **trước** và thêm **’s**: my sister’s room. Không nói “room of my sister”.",
        "Nếu người sở hữu là danh từ số nhiều đã có đuôi -s, chỉ thêm dấu **’**: my parents’ bedroom.",
        "Khi không nêu tên, dùng tính từ sở hữu my, your, his, her, our, their đứng trước danh từ: Our kitchen is small."
      ],
      ex: [["This is Lan’s room.", "Đây là phòng của Lan."], ["My parents’ bedroom is upstairs.", "Phòng ngủ của bố mẹ tôi ở trên tầng."]]
    },
    { h: "Nhờ vả và đề nghị: Can you, Could you, Shall I, I will",
      f: ["Can you + động từ nguyên mẫu?", "Could you + động từ nguyên mẫu, please?", "Shall I + động từ nguyên mẫu?", "I will + động từ nguyên mẫu"],
      p: [
        "**Can you…?** dùng để nhờ người thân, bạn bè một cách thân mật. **Could you…, please?** lịch sự hơn, dùng với người lớn tuổi hoặc người chưa thân.",
        "**Shall I…?** dùng khi bạn hỏi xem mình có nên giúp không (Để tôi… nhé?). **I will** (rút gọn I’ll) dùng khi bạn tự nhận làm ngay lúc đó.",
        "Sau can, could, shall, will luôn là **động từ nguyên mẫu không có to**. Nhớ thêm: dùng **turn on / turn off** cho đồ điện (đèn, quạt, điều hòa), còn cửa thì dùng **open / close**."
      ],
      ex: [["Could you pass me the remote, please?", "Bạn đưa giúp tôi cái điều khiển được không?"], ["Shall I make some tea?", "Để tôi pha trà nhé?"]]
    },
    { h: "Would you like…? để mời khách",
      f: ["Would you like + danh từ?", "Would you like to + động từ nguyên mẫu?"],
      p: [
        "Khi mời khách, **Would you like…?** lịch sự hơn nhiều so với “Do you want…?”. Câu “You want drink?” nghe rất cộc.",
        "Mời một món thì dùng **danh từ** (Would you like some tea?). Mời làm một việc thì dùng **to + động từ nguyên mẫu** (Would you like to stay for dinner?).",
        "Trả lời: **Yes, please.** hoặc **No, thank you. I am fine.**"
      ],
      ex: [["Would you like some tea? — Yes, please.", "Bạn uống trà không? — Có, cảm ơn."], ["Would you like to stay for dinner?", "Bạn ở lại ăn tối nhé?"]]
    }
  ],
  mistakes: [
    ["My house have two bedroom.", "There are two bedrooms in my house.", "Nói “có” cái gì ở đâu thì dùng **There are**; danh từ số nhiều phải thêm **-s**."],
    ["The clock is in the wall.", "The clock is on the wall.", "Tường là một bề mặt nên dùng **on**."],
    ["This is room of my sister.", "This is my sister’s room.", "Dùng sở hữu cách **’s** và đặt người sở hữu lên trước."],
    ["Can you to close the door?", "Can you close the door?", "Sau **can** là động từ nguyên mẫu, không có “to”."],
    ["You want drink?", "Would you like something to drink?", "Mời khách dùng **Would you like…?** cho lịch sự."],
    ["Can you open the light?", "Can you turn on the light?", "Đồ dùng điện dùng **turn on / turn off**; open và close chỉ dùng cho cửa."],
    ["I am going to house.", "I am going home.", "**home** là nơi bạn thuộc về và không cần “to”; house chỉ là ngôi nhà, công trình."]
  ],
  vocab: [
    ["house", "nhà riêng"], ["apartment", "căn hộ"], ["townhouse", "nhà phố, nhà ống"], ["living room", "phòng khách"],
    ["bedroom", "phòng ngủ"], ["kitchen", "bếp"], ["bathroom", "phòng tắm"], ["balcony", "ban công"],
    ["sofa", "ghế sofa"], ["wardrobe", "tủ quần áo"], ["fridge", "tủ lạnh"], ["sink", "bồn rửa"],
    ["rice cooker", "nồi cơm điện"], ["washing machine", "máy giặt"], ["towel", "khăn tắm"], ["drawer", "ngăn kéo"],
    ["cozy", "ấm cúng"], ["bright", "sáng sủa"], ["quiet", "yên tĩnh"], ["noisy", "ồn ào"],
    ["take out the trash", "đổ rác"], ["turn off", "tắt (đồ điện)"], ["landlord", "chủ nhà cho thuê"], ["roommate", "bạn cùng phòng"]
  ],
  tips: [
    "Đi một vòng quanh nhà, chỉ vào từng phòng và từng món đồ rồi gọi tên bằng tiếng Anh.",
    "Mỗi khi tìm đồ, hỏi bằng tiếng Anh “Where is my phone?” và tự trả lời bằng in, on, under, next to.",
    "Nhớ: **house** là ngôi nhà (công trình), **home** là nơi bạn thuộc về. Nói “I am going home” (rút gọn: I’m going home).",
    "Khi có khách, dùng ngay các cụm thân thiện: **Make yourself at home.** (Cứ tự nhiên như ở nhà) và **Help yourself to some fruit.**",
    "Thu âm một phút dẫn một người bạn “đi xem nhà”, dùng There is, There are và các giới từ vị trí."
  ]
};
