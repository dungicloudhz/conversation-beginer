/* Cheat sheet: Clothes (Nói về quần áo). Hiển thị bởi cheatsheet.js. */
window.A1_CHEAT = {
  goal: [
    "Gọi tên quần áo, giày dép và phụ kiện, dùng đúng a pair of với quần, giày, tất.",
    "Mô tả quần áo bằng màu, họa tiết, chất liệu theo đúng thứ tự tính từ.",
    "Nói hôm nay bạn đang mặc gì và thường mặc gì, phân biệt wear, put on, take off.",
    "Khuyên người khác nên mặc gì theo thời tiết và theo dịp bằng should.",
    "Khen trang phục của người khác và phân biệt fit, suit, go with."
  ],
  phrases: [
    { h: "Nói hôm nay mặc gì", rows: [
      ["What are you wearing today?", "Hôm nay bạn mặc gì?"],
      ["I am wearing a white shirt and black trousers.", "Tôi đang mặc áo sơ mi trắng và quần âu đen.", "Khi nói thường rút gọn: I’m wearing (I’m = I am)."],
      ["She is wearing a yellow dress.", "Cô ấy đang mặc váy vàng.", "Dạng rút gọn: She’s (She’s = She is)."],
      ["He is the man in the blue jacket.", "Anh ấy là người mặc áo khoác xanh.", "Dùng **the + người + in the + màu + món đồ** để chỉ ai đó trong đám đông."],
      ["I usually wear a uniform to work.", "Tôi thường mặc đồng phục đi làm."]
    ]},
    { h: "Mặc vào, cởi ra, thay đồ", rows: [
      ["Put on your jacket. It is cold.", "Mặc áo khoác vào. Trời lạnh đấy.", "Dạng rút gọn: It’s cold (It’s = It is)."],
      ["Please take off your shoes.", "Vui lòng cởi giày ra."],
      ["I get dressed after breakfast.", "Tôi mặc quần áo sau bữa sáng."],
      ["I need to change before the party.", "Tôi cần thay đồ trước khi đi tiệc."]
    ]},
    { h: "Mặc theo thời tiết và theo dịp", rows: [
      ["When it is hot, I wear shorts.", "Trời nóng, tôi mặc quần đùi."],
      ["When it rains, I wear a raincoat.", "Trời mưa, tôi mặc áo mưa."],
      ["What should I wear to the party?", "Tôi nên mặc gì đi tiệc?"],
      ["You should wear something comfortable.", "Bạn nên mặc đồ gì thoải mái."],
      ["You should not wear shorts to the temple.", "Bạn không nên mặc quần đùi đi chùa.", "Khi nói thường rút gọn: shouldn’t (shouldn’t = should not)."]
    ]},
    { h: "Khen trang phục", rows: [
      ["I like your shirt!", "Mình thích áo của bạn!"],
      ["You look great today.", "Hôm nay trông bạn đẹp lắm."],
      ["That color suits you.", "Màu đó hợp với bạn."],
      ["Your bag goes well with your shoes.", "Túi của bạn hợp với đôi giày."],
      ["Where did you get it? — Thank you! It was a gift.", "Bạn mua ở đâu vậy? — Cảm ơn! Đó là quà được tặng."]
    ]},
    { h: "Mô tả màu, họa tiết và chất liệu", rows: [
      ["My favorite color is light blue.", "Màu tôi thích nhất là xanh nhạt."],
      ["a white cotton T-shirt", "một cái áo phông cotton trắng", "Màu đứng trước chất liệu."],
      ["a nice big blue striped shirt", "một cái áo sơ mi kẻ sọc màu xanh, cỡ to, rất đẹp"],
      ["Is it silk? — No, it is cotton.", "Có phải lụa không? — Không, cotton thôi.", "Dạng rút gọn: it’s cotton (it’s = it is)."]
    ]}
  ],
  grammar: [
    { h: "a pair of cho đồ có hai phần",
      f: ["a pair of + danh từ số nhiều", "two pairs of + danh từ số nhiều"],
      p: [
        "Quần (jeans, trousers, shorts), giày (shoes, sneakers), tất (socks) và kính (glasses) có hai ống hoặc hai chiếc, nên trong tiếng Anh chúng **luôn ở dạng số nhiều** và đi với động từ số nhiều: My new shoes are very comfortable.",
        "Muốn đếm, không nói “a jean” hay “one sock” mà dùng **a pair of** (một chiếc quần, một đôi giày) hoặc **two pairs of**. Lúc này chữ pair mới là chữ được đếm.",
        "Tương tự, **clothes** (quần áo) luôn là số nhiều. Muốn nói một món, dùng **a piece of clothing** hoặc gọi đúng tên món đó."
      ],
      ex: [["I need a pair of socks.", "Tôi cần một đôi tất."], ["She has three pairs of jeans.", "Cô ấy có ba chiếc quần bò."]]
    },
    { h: "Thứ tự tính từ trước danh từ",
      f: ["ý kiến → kích cỡ → màu → họa tiết hoặc chất liệu → món đồ"],
      p: [
        "Tiếng Việt đặt tính từ **sau** danh từ (áo sơ mi trắng), còn tiếng Anh đặt tính từ **trước** danh từ (a white shirt). Khi có nhiều tính từ, chúng phải theo một thứ tự cố định thì người bản xứ mới thấy tự nhiên.",
        "Thứ tự là: **ý kiến** (beautiful, nice) → **kích cỡ** (long, big) → **màu** (red) → **họa tiết hoặc chất liệu** (striped, silk) → **món đồ**. Ví dụ: a beautiful long red silk dress.",
        "Chất liệu (cotton, silk, wool, leather) luôn đứng sát món đồ nhất, nên nói a white cotton shirt chứ không nói a cotton white shirt."
      ],
      ex: [["a beautiful long red silk dress", "một chiếc váy lụa đỏ dài rất đẹp"], ["comfortable black leather shoes", "đôi giày da đen thoải mái"]]
    },
    { h: "wear, put on, take off, get dressed",
      f: ["wear + món đồ (trạng thái đang mặc)", "put on + món đồ (hành động mặc vào)", "take off + món đồ (hành động cởi ra)"],
      p: [
        "**wear** chỉ **trạng thái** đang mặc hoặc hay mặc: I usually wear jeans. **put on** chỉ **hành động** mặc vào trong một khoảnh khắc: Put on your jacket. Người Việt hay dùng wear cho cả hai nghĩa.",
        "**take off** là cởi ra (giày, áo khoác, mũ). **get dressed** là mặc quần áo nói chung để chuẩn bị đi đâu đó, không cần nêu món đồ. **change** là thay đồ."
      ],
      ex: [["Put on your jacket. It is cold.", "Mặc áo khoác vào. Trời lạnh đấy."], ["Please take off your shoes.", "Vui lòng cởi giày ra."]]
    },
    { h: "Hiện tại đơn và hiện tại tiếp diễn với wear",
      f: ["chủ ngữ + wear hoặc wears (thói quen)", "chủ ngữ + am / is / are + wearing (ngay lúc này)"],
      p: [
        "Nói về thói quen, việc mặc thường ngày, dùng **thì hiện tại đơn**: I usually wear sneakers. Với he, she nhớ thêm -s: She wears a uniform.",
        "Nói về trang phục **ngay lúc này**, hôm nay, dùng **thì hiện tại tiếp diễn**: Today I am wearing sandals. Khi có các từ như Look!, now, today thì gần như luôn dùng wearing."
      ],
      ex: [["I usually wear sneakers.", "Tôi thường đi giày thể thao."], ["Look! She is wearing a beautiful dress.", "Nhìn kìa! Cô ấy đang mặc một chiếc váy đẹp."]]
    },
    { h: "should và should not để khuyên nên mặc gì",
      f: ["chủ ngữ + should + động từ nguyên mẫu", "chủ ngữ + should not + động từ nguyên mẫu", "What should I wear to + nơi chốn hoặc dịp?"],
      p: [
        "**should** dùng để đưa ra lời khuyên nhẹ nhàng: “nên”. **should not** (rút gọn shouldn’t) là “không nên”. Rất hữu ích khi bạn bè hỏi nên mặc gì đi tiệc, đi phỏng vấn hay đi chùa.",
        "Sau should luôn là **động từ nguyên mẫu không có to**. Không nói “should to wear”.",
        "Muốn hỏi xin lời khuyên, đảo should lên trước chủ ngữ: What should I wear to the party?"
      ],
      ex: [["You should wear a hat in the sun.", "Bạn nên đội mũ khi ra nắng."], ["You should bring a warm coat.", "Bạn nên mang áo khoác ấm."]]
    },
    { h: "fit, suit và go with",
      f: ["món đồ + fit + người (vừa kích cỡ)", "màu hoặc kiểu + suit + người (hợp với người)", "món đồ + go with + món đồ khác (hợp với nhau)"],
      p: [
        "Ba từ này đều dịch là “vừa” hoặc “hợp” nên người Việt hay dùng lẫn. **fit** chỉ nói về **kích cỡ**: These jeans fit me perfectly (vừa khít).",
        "**suit** nói về việc màu sắc hoặc kiểu dáng **hợp với người** mặc: Red really suits you. Vì thế khen màu thì dùng suit, không dùng fit.",
        "**go with** (hoặc match) nói một món đồ **hợp với món đồ khác**: This belt goes with your shoes."
      ],
      ex: [["These jeans fit me perfectly.", "Chiếc quần bò này vừa khít với tôi."], ["It goes well with your white sneakers.", "Nó hợp với đôi giày trắng của bạn."]]
    }
  ],
  mistakes: [
    ["I bought a new jean.", "I bought a new pair of jeans.", "jeans luôn số nhiều; muốn đếm dùng **a pair of**."],
    ["a cotton white shirt", "a white cotton shirt", "Màu đứng **trước** chất liệu; chất liệu đứng sát món đồ."],
    ["Look! She wears a beautiful dress now.", "Look! She is wearing a beautiful dress.", "Trang phục ngay lúc này dùng **thì hiện tại tiếp diễn**."],
    ["You should to wear a coat.", "You should wear a coat.", "Sau **should** là động từ nguyên mẫu, không có to."],
    ["This color fits you.", "This color suits you.", "Hợp màu hoặc hợp kiểu dùng **suit**; fit chỉ nói về kích cỡ."],
    ["Wear your jacket. It is cold.", "Put on your jacket. It is cold.", "Hành động mặc vào dùng **put on**; wear chỉ trạng thái đang mặc."],
    ["Your clothes is beautiful.", "I love your outfit!", "**clothes** luôn số nhiều (clothes are); khen cả bộ đồ thì dùng **outfit** nghe tự nhiên hơn."]
  ],
  vocab: [
    ["T-shirt", "áo phông"], ["shirt", "áo sơ mi"], ["jacket", "áo khoác"], ["coat", "áo khoác dày"],
    ["jeans", "quần bò"], ["trousers", "quần dài, quần âu"], ["dress", "váy liền"], ["skirt", "chân váy"],
    ["shorts", "quần đùi"], ["sneakers", "giày thể thao"], ["socks", "tất"], ["scarf", "khăn quàng"],
    ["striped", "kẻ sọc"], ["checked", "kẻ ô caro"], ["plain", "trơn, một màu"], ["cotton", "vải bông"],
    ["silk", "lụa"], ["leather", "da"], ["casual", "thường ngày, thoải mái"], ["formal", "trang trọng"],
    ["tight", "chật, bó"], ["loose", "rộng, thùng thình"], ["outfit", "bộ trang phục"], ["uniform", "đồng phục"]
  ],
  tips: [
    "Mở tủ quần áo và gọi tên từng món bằng tiếng Anh, nhớ nói “a pair of” với quần, giày, tất.",
    "Mỗi sáng nói một câu “Today I am wearing…” (rút gọn: Today I’m wearing…) với đủ màu và chất liệu.",
    "Khi khen, nói cả ba ý: “I love your outfit! That green really suits you, and it goes well with your bag.”",
    "Học các câu tự nhiên như **It is not really my style** (không hợp gu tôi lắm; rút gọn: It’s not) và **Does this look okay on me?**",
    "Thu âm một phút mô tả bộ đồ bạn thích nhất và bạn mặc nó vào dịp nào."
  ]
};
