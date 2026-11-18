/* Cheat sheet: Shopping (Đi mua sắm). Hiển thị bởi cheatsheet.js. */
window.A1_CHEAT = {
  goal: [
    "Gọi đúng tên các loại cửa hàng và các món quần áo, phụ kiện thường gặp.",
    "Trả lời nhân viên bán hàng và hỏi món mình cần một cách lịch sự.",
    "Chọn cỡ, chọn màu, xin thử đồ và nói đồ có vừa hay không.",
    "Hỏi giá, đọc giá tiền bằng tiếng Anh và mặc cả nhẹ nhàng ở chợ.",
    "Thanh toán bằng tiền mặt, thẻ hoặc chuyển khoản; xin hóa đơn, đổi hàng và trả hàng."
  ],
  phrases: [
    { h: "Khi nhân viên hỏi và khi bạn tìm hàng", rows: [
      ["Can I help you?", "Tôi giúp gì được cho anh chị?", "Câu nhân viên hay hỏi đầu tiên, bạn cần nghe hiểu ngay."],
      ["I am just looking, thanks.", "Tôi chỉ xem thôi, cảm ơn.", "Người bản xứ nói I’m just looking, thanks. (I’m = I am). Đây là cách từ chối lịch sự khi chưa muốn mua."],
      ["I am looking for a jacket.", "Tôi đang tìm một cái áo khoác.", "Dạng rút gọn: I’m looking for… (I’m = I am)."],
      ["Do you sell phone chargers?", "Ở đây có bán sạc điện thoại không?"],
      ["Where can I find the shoes?", "Giày ở khu nào vậy?"]
    ]},
    { h: "Chọn cỡ, màu và thử đồ", rows: [
      ["What size are you?", "Anh chị mặc cỡ nào?"],
      ["I am a medium.", "Tôi mặc cỡ M.", "Dạng rút gọn: I’m a medium. Nhớ có chữ **a** trước small, medium, large."],
      ["Do you have this in black?", "Cái này có màu đen không?"],
      ["Can I try it on? Where is the fitting room?", "Tôi mặc thử được không? Phòng thử đồ ở đâu?"],
      ["It is too big. Do you have a smaller size?", "Rộng quá. Có cỡ nhỏ hơn không?", "Dạng rút gọn: It’s too big. (It’s = It is)."]
    ]},
    { h: "Hỏi giá và mặc cả ở chợ", rows: [
      ["How much is this? How much are these?", "Cái này bao nhiêu tiền? Mấy cái này bao nhiêu tiền?"],
      ["It is two hundred thousand dong.", "Hai trăm nghìn đồng.", "Người bán thường nói It’s… (It’s = It is)."],
      ["Is it on sale?", "Cái này có đang giảm giá không?"],
      ["That is a bit expensive. Can you give me a discount?", "Hơi đắt một chút. Bớt cho tôi một chút được không?", "Dạng rút gọn: That’s = That is."],
      ["How about one hundred fifty thousand?", "Một trăm năm mươi nghìn được không?"]
    ]},
    { h: "Thanh toán ở quầy", rows: [
      ["I will take it.", "Tôi lấy cái này.", "Người bản xứ gần như luôn nói I’ll take it. (I’ll = I will). Với món số nhiều nói I’ll take them."],
      ["Can I pay by card?", "Tôi trả bằng thẻ được không?"],
      ["Can I pay by bank transfer?", "Tôi chuyển khoản được không?"],
      ["Could I have the receipt, please?", "Cho tôi xin hóa đơn."]
    ]},
    { h: "Đổi hàng và trả hàng", rows: [
      ["I bought this yesterday.", "Tôi mua cái này hôm qua."],
      ["It does not fit.", "Nó không vừa.", "Dạng rút gọn: It doesn’t fit. (doesn’t = does not)."],
      ["Can I exchange it for a bigger size?", "Tôi đổi sang cỡ lớn hơn được không?"],
      ["Can I get a refund?", "Tôi được hoàn tiền không?"]
    ]},
    { h: "Nói cho tự nhiên hơn", rows: [
      ["I will think about it.", "Để tôi suy nghĩ thêm.", "Thường nói I’ll think about it (I’ll = I will). Đây là cách từ chối nhẹ nhàng, người bán sẽ không ép thêm."],
      ["It is not really my style.", "Không hợp gu tôi lắm.", "Dạng rút gọn: It’s not really my style."],
      ["Does it suit me?", "Cái này có hợp với tôi không?"],
      ["Only ninety thousand? That is a bargain!", "Chỉ chín mươi nghìn thôi à? Món hời quá!", "Dạng rút gọn: That’s a bargain!"]
    ]}
  ],
  grammar: [
    { h: "this / that / these / those để chỉ món đồ gần hay xa",
      f: ["this / that + danh từ số ít", "these / those + danh từ số nhiều", "these / those + are"],
      p: [
        "Khi đứng trong cửa hàng, bạn luôn phải chỉ vào món đồ. Dùng **this** cho một món ở gần, **that** cho một món ở xa. Dùng **these** cho nhiều món ở gần, **those** cho nhiều món ở xa.",
        "Một số món luôn ở dạng số nhiều vì có hai ống quần hoặc hai chiếc: **jeans, trousers, shorts, shoes, glasses**. Những từ này luôn đi với **these / those**, động từ **are** và đại từ **them**, dù bạn chỉ mua một cái quần hay một đôi giày."
      ],
      ex: [["I like this bag.", "Tôi thích cái túi này."], ["These jeans are nice.", "Cái quần bò này đẹp."]]
    },
    { h: "one / ones để không lặp lại tên món đồ",
      f: ["the + tính từ + one (thay cho một món)", "tính từ + ones (thay cho nhiều món)"],
      p: [
        "Khi đã nói tên món đồ rồi, người bản xứ không lặp lại tên đó lần thứ hai mà thay bằng **one** (một món) hoặc **ones** (nhiều món). Câu nghe gọn và tự nhiên hơn.",
        "Thường dùng **one / ones** khi so sánh hai lựa chọn về màu hoặc cỡ, ví dụ cái màu đỏ và cái màu xanh."
      ],
      ex: [["I do not like the red one. Can I see the blue one?", "Tôi không thích cái màu đỏ. Cho tôi xem cái màu xanh được không?"], ["These shoes are too small. Do you have bigger ones?", "Đôi giày này nhỏ quá. Có đôi lớn hơn không?"]]
    },
    { h: "So sánh hơn để xin cỡ khác, giá khác",
      f: ["tính từ ngắn + -er", "more + tính từ dài", "a + tính từ so sánh hơn + size / one"],
      p: [
        "Khi đồ không vừa hoặc quá đắt, bạn cần xin món “lớn hơn, nhỏ hơn, rẻ hơn”. Với tính từ ngắn (một âm tiết), thêm **-er**: small → smaller, cheap → cheaper. Tính từ kết thúc bằng một nguyên âm và một phụ âm thì gấp đôi phụ âm cuối: big → bigger.",
        "Với tính từ dài, đặt **more** phía trước: expensive → more expensive. Một số tính từ bất quy tắc phải học thuộc: good → better.",
        "Không dùng “more small” vì small là tính từ ngắn; phải nói **smaller**."
      ],
      ex: [["Do you have a cheaper one?", "Có cái nào rẻ hơn không?"], ["This one is more expensive.", "Cái này đắt hơn."]]
    },
    { h: "How much is / How much are để hỏi giá",
      f: ["How much is + this / that / danh từ số ít?", "How much are + these / those / danh từ số nhiều?"],
      p: [
        "Động từ trong câu hỏi giá phải hợp với món đồ: một món dùng **is**, nhiều món hoặc món luôn số nhiều (jeans, shoes, sandals) dùng **are**.",
        "Khi đọc giá, sau con số thì **hundred, thousand, million** không thêm -s: two hundred thousand dong, không phải “two hundreds thousands”. Lý do là con số phía trước đã cho biết số lượng rồi."
      ],
      ex: [["How much is this dress?", "Cái váy này bao nhiêu tiền?"], ["How much are those sandals?", "Đôi dép kia bao nhiêu tiền?"]]
    },
    { h: "I will (I’ll) + động từ nguyên mẫu và it / them khi quyết định mua",
      f: ["I will + động từ nguyên mẫu", "I will take it (một món)", "I will take them (nhiều món, món số nhiều)"],
      p: [
        "Dùng **will** cho quyết định vừa đưa ra ngay lúc nói, ví dụ khi vừa thử đồ xong và quyết định mua. Khi nói thường rút gọn thành **I’ll** (I’ll = I will). Không nói “I take it” vì câu đó thiếu ý “quyết định ngay bây giờ”.",
        "Dùng **it** thay cho một món, dùng **them** thay cho nhiều món hoặc món luôn ở dạng số nhiều như jeans, shoes."
      ],
      ex: [["It fits well. I will take it.", "Vừa lắm. Tôi lấy cái này."], ["I like these shoes. I will take them.", "Tôi thích đôi giày này. Tôi lấy đôi này."]]
    }
  ],
  mistakes: [
    ["This jeans is nice.", "These jeans are nice.", "Jeans luôn là số nhiều nên đi với **these** và **are**."],
    ["I like the black bag, not the white bag.", "I like the black bag, not the white one.", "Dùng **one** thay cho tên món đã nhắc để câu không bị lặp."],
    ["Do you have more small size?", "Do you have a smaller size?", "Small là tính từ ngắn nên thêm **-er**, không dùng “more”; nhớ có chữ **a** trước size."],
    ["How much is these shoes?", "How much are these shoes?", "Shoes là số nhiều nên dùng **are**."],
    ["It is two hundreds thousands dong.", "It is two hundred thousand dong.", "Sau con số, **hundred** và **thousand** không thêm -s."],
    ["I like these shoes. I take it.", "I like these shoes. I will take them.", "Quyết định ngay lúc nói dùng **will**; shoes số nhiều nên dùng **them**, không dùng it."],
    ["No. Expensive. I do not buy.", "It is a bit out of my budget. I will think about it, thanks.", "Câu cụt nghe thô lỗ. Từ chối mềm mỏng bằng **I’ll think about it** (I’ll = I will)."]
  ],
  vocab: [
    ["supermarket", "siêu thị"], ["shopping mall", "trung tâm thương mại"], ["market", "chợ"], ["convenience store", "cửa hàng tiện lợi"],
    ["clothes shop", "cửa hàng quần áo"], ["shirt", "áo sơ mi"], ["jeans", "quần bò (luôn số nhiều)"], ["shoes", "giày (luôn số nhiều)"],
    ["jacket", "áo khoác"], ["size", "cỡ"], ["small / medium / large", "cỡ S / cỡ M / cỡ L"], ["fitting room", "phòng thử đồ"],
    ["try on", "mặc thử"], ["fit", "vừa (về kích cỡ)"], ["price", "giá"], ["discount", "sự giảm giá"],
    ["on sale", "đang giảm giá"], ["cash", "tiền mặt"], ["card", "thẻ"], ["bank transfer", "chuyển khoản"],
    ["receipt", "hóa đơn"], ["exchange", "đổi hàng"], ["refund", "hoàn tiền"], ["out of stock", "hết hàng"]
  ],
  tips: [
    "Khi nhân viên hỏi mà bạn chưa muốn mua, chỉ cần mỉm cười và nói **I’m just looking, thanks** (I’m = I am).",
    "Trước khi hỏi giá, nhìn món đồ là một hay nhiều để chọn **How much is** hay **How much are**.",
    "Mặc cả là bình thường ở chợ, nhưng ở siêu thị và trung tâm thương mại giá thường cố định, nên hỏi **Is it on sale?** thay vì xin bớt.",
    "Đọc to mười giá tiền mỗi ngày, ví dụ “one hundred and twenty thousand dong”, để nghe giá không bị bất ngờ.",
    "Thu âm một phút đóng vai mua một món đồ từ lúc bước vào cửa hàng đến lúc trả tiền, dùng đủ this / these, one, so sánh hơn và I’ll take it."
  ]
};
