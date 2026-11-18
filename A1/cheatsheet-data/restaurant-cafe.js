/* Cheat sheet: Restaurant & Cafe (Giao tiếp ở nhà hàng và quán cà phê). Hiển thị bởi cheatsheet.js. */
window.A1_CHEAT = {
  goal: [
    "Bước vào quán và xin bàn bằng câu ngắn gọn **Table for two, please**, báo tên đã đặt bàn, chọn chỗ ngồi.",
    "Gọi món lịch sự bằng **I would like…**, **Can I have…?** và **I will have…** mà không cần câu dài.",
    "Gọi đồ ở quầy cà phê đủ size, nóng hoặc đá, loại sữa, mức đường, dùng tại quán hay mang đi.",
    "Nhờ phục vụ bằng **Could you…?** và nói rõ dị ứng hoặc chế độ ăn chay của mình.",
    "Phàn nàn nhẹ nhàng khi có sự cố, rồi xin hóa đơn, chia tiền và hỏi phí phục vụ."
  ],
  phrases: [
    { h: "Bước vào quán", rows: [
      ["Table for two, please.", "Cho tôi bàn hai người.", "Câu rút gọn bằng cụm danh từ, rất tự nhiên ở nhà hàng."],
      ["I have a reservation under Lan.", "Tôi đã đặt bàn dưới tên Lan."],
      ["Do you have a table by the window?", "Có bàn cạnh cửa sổ không?"],
      ["Can we sit outside?", "Chúng tôi ngồi ngoài trời được không?"],
      ["How long is the wait?", "Phải chờ bao lâu?"]
    ]},
    { h: "Xem thực đơn và gọi món", rows: [
      ["Not yet. We need a few more minutes.", "Chưa ạ, cho chúng tôi thêm vài phút."],
      ["I would like the chicken salad, please.", "Cho tôi món salad gà.", "Khi nói thường rút gọn: I’d like (I’d = I would)."],
      ["Can I have the beef noodle soup?", "Cho tôi một tô phở bò."],
      ["I will have the pasta.", "Tôi chọn món mì Ý.", "Dạng hay nói: I’ll have (I’ll = I will)."],
      ["What is in this dish?", "Món này có những gì?", "Dạng rút gọn: What’s in this dish? (What’s = What is)."]
    ]},
    { h: "Gọi đồ ở quầy cà phê", rows: [
      ["Can I get a latte, please?", "Cho tôi một ly latte."],
      ["A large iced coffee, please.", "Cho một ly cà phê đá size lớn."],
      ["Less sugar, please.", "Ít đường thôi nhé."],
      ["Do you have oat milk?", "Quán có sữa yến mạch không?"],
      ["Do you have Wi-Fi?", "Quán có Wi-Fi không?"]
    ]},
    { h: "Yêu cầu lịch sự và dị ứng", rows: [
      ["Could you bring some water, please?", "Bạn mang giúp tôi ít nước được không?"],
      ["Can I have the sauce on the side?", "Cho tôi nước sốt để riêng."],
      ["I am allergic to peanuts.", "Tôi bị dị ứng đậu phộng.", "Dạng rút gọn hay nói: I’m allergic (I’m = I am)."],
      ["I am vegetarian.", "Tôi ăn chay."],
      ["Is there any meat in it?", "Trong món đó có thịt không?"]
    ]},
    { h: "Trong bữa ăn và khi có sự cố", rows: [
      ["Excuse me, could I get a refill?", "Xin lỗi, cho tôi thêm một ly nữa."],
      ["Could I have a box for this?", "Cho tôi hộp để mang phần này về."],
      ["I think there is a mistake.", "Tôi nghĩ có nhầm lẫn.", "Dạng hay nói: there’s (there’s = there is)."],
      ["I did not order this.", "Tôi không gọi món này.", "Dạng rút gọn: I didn’t order this (didn’t = did not)."],
      ["We are still waiting for our drinks.", "Chúng tôi vẫn đang chờ đồ uống.", "Dạng rút gọn: We’re (We’re = We are)."]
    ]},
    { h: "Thanh toán", rows: [
      ["Could we have the bill, please?", "Cho chúng tôi xin hóa đơn.", "Người Mỹ nói the check thay cho the bill."],
      ["Can we split the bill?", "Chia hóa đơn ra được không?"],
      ["Is service included?", "Đã tính phí phục vụ chưa?"],
      ["Can I pay by card?", "Tôi trả bằng thẻ được không?"],
      ["Keep the change.", "Bạn giữ tiền thừa nhé."]
    ]}
  ],
  grammar: [
    { h: "Câu rút gọn khi vào quán, How many và How long",
      f: ["Table for + số người, please.", "How many + danh từ đếm được số nhiều?", "How long + is the wait?", "under + tên người đặt"],
      p: [
        "Ở nhà hàng, người ta thường nói rất ngắn bằng **cụm danh từ**, không cần động từ: Table for two, please. Câu này đầy đủ ý và hoàn toàn lịch sự nhờ chữ please.",
        "Nhân viên hỏi số người bằng **How many people?** vì people là danh từ đếm được. Muốn hỏi phải chờ bao lâu thì dùng **How long**.",
        "**Under + tên** nghĩa là đặt bàn dưới tên ai: I have a reservation under Lan."
      ],
      ex: [["Table for four, please.", "Cho tôi bàn bốn người."], ["How long is the wait?", "Phải chờ bao lâu?"]]
    },
    { h: "would like, Can I have và I will have",
      f: ["I would like + danh từ", "I would like to + động từ nguyên mẫu", "Would you like + danh từ?", "Can I have + món?", "I will have + món"],
      p: [
        "**I want a coffee** đúng ngữ pháp nhưng hơi thẳng khi nói với nhân viên. **I would like…** (thường nói I’d like) là cách gọi lịch sự, dùng được ở mọi nơi.",
        "**Can I have…?** thân mật, hay dùng ở quán bình dân và quán cà phê. Nhân viên mời bạn bằng **Would you like…?**.",
        "**I will have…** (thường nói I’ll have) dùng khi bạn vừa quyết định xong món mình chọn."
      ],
      ex: [["I would like a coffee, please.", "Cho tôi một ly cà phê."], ["I will have the soup.", "Tôi chọn món súp."]]
    },
    { h: "Danh từ đếm được và không đếm được khi gọi đồ",
      f: ["a / two + danh từ đếm được (thêm -s khi số nhiều)", "some / a cup of / a glass of + danh từ không đếm được", "How many / How much + danh từ"],
      p: [
        "Khi gọi ở quán, coffee được hiểu là “một ly” nên có thể đếm: **Two coffees, please**.",
        "Nước, trà, đường là danh từ **không đếm được**. Không nói “two waters” trong tình huống trang trọng; hãy nói **two glasses of water** hoặc **two bottles of water**.",
        "Hỏi số lượng thứ không đếm được thì dùng **How much**: How much sugar do you want?"
      ],
      ex: [["A cup of tea, please.", "Cho một tách trà."], ["Two glasses of water, please.", "Cho hai cốc nước."]]
    },
    { h: "Could you…? và Is there any…? Are there any…?",
      f: ["Could you + động từ nguyên mẫu?", "Is there any + danh từ không đếm được?", "Are there any + danh từ số nhiều?", "allergic to + danh từ"],
      p: [
        "**Could you…?** lịch sự hơn **Can you…?**, nên dùng khi nhờ nhân viên hoặc người lạ.",
        "Để hỏi trong món có thứ gì không, dùng **Is there any** với danh từ không đếm được (meat, milk) và **Are there any** với danh từ số nhiều (nuts, eggs). Câu này rất quan trọng khi bạn bị dị ứng.",
        "Dị ứng với thứ gì luôn đi với giới từ **to**: allergic to peanuts, không nói “allergic with”."
      ],
      ex: [["Are there any nuts in this?", "Món này có hạt không?"], ["Could we have another menu?", "Cho chúng tôi thêm một thực đơn nữa được không?"]]
    },
    { h: "too, not … enough và hiện tại tiếp diễn khi phàn nàn",
      f: ["too + tính từ (quá, theo nghĩa tiêu cực)", "not + tính từ + enough (chưa đủ)", "am / is / are + still + động từ thêm -ing"],
      p: [
        "**Too + tính từ** nghĩa là quá mức, không chấp nhận được: This is too salty. Còn **very** chỉ có nghĩa là “rất”, không mang ý phàn nàn.",
        "**Not + tính từ + enough** nghĩa là chưa đủ: It is not hot enough (chưa đủ nóng).",
        "Dùng **thì hiện tại tiếp diễn** cho việc vẫn đang diễn ra: We are still waiting. Nên mở đầu bằng **Excuse me** hoặc **I think…** để lời phàn nàn nghe nhẹ nhàng."
      ],
      ex: [["It is too spicy.", "Món này cay quá."], ["This soup is cold. Could you heat it up?", "Súp nguội rồi, hâm lại giúp tôi được không?"]]
    },
    { h: "Hỏi giá và hỏi đã bao gồm chưa",
      f: ["How much is / are + danh từ?", "It is + số tiền.", "Is + danh từ + included?"],
      p: [
        "Hỏi giá luôn dùng **How much**. Dùng **is** cho một món và **are** cho danh từ số nhiều.",
        "**Is … included?** là câu bị động đơn giản, nghĩa là “đã được tính vào chưa”. Hỏi câu này trước khi để lại tiền boa để tránh trả hai lần."
      ],
      ex: [["How much is this salad?", "Món salad này bao nhiêu tiền?"], ["Is tax included?", "Đã bao gồm thuế chưa?"]]
    }
  ],
  mistakes: [
    ["I want a coffee.", "I would like a coffee, please.", "I want nghe hơi thẳng với nhân viên; **I would like…, please** lịch sự hơn."],
    ["Table of two, please.", "Table for two, please.", "Số người đi với giới từ **for**."],
    ["Two water, please.", "Two glasses of water, please.", "Water không đếm được nên cần đơn vị **glasses of**."],
    ["I am allergic with peanuts.", "I am allergic to peanuts.", "Allergic luôn đi với **to**."],
    ["How many is this salad?", "How much is this salad?", "Hỏi giá luôn dùng **How much**."],
    ["This soup is very salty, I cannot eat it.", "This soup is too salty.", "Muốn phàn nàn là quá mức thì dùng **too**; very chỉ là “rất”."],
    ["Can you bring some water? (với người lạ)", "Could you bring some water, please?", "**Could you…, please?** lịch sự hơn khi nhờ nhân viên."]
  ],
  vocab: [
    ["reservation", "sự đặt bàn trước"], ["menu", "thực đơn"], ["starter", "món khai vị"], ["main course", "món chính"],
    ["side dish", "món ăn kèm"], ["dessert", "món tráng miệng"], ["today’s special", "món đặc biệt hôm nay"], ["dish", "món ăn"],
    ["size", "cỡ ly"], ["iced", "có đá"], ["oat milk", "sữa yến mạch"], ["for here / to go", "dùng tại quán / mang đi"],
    ["allergic to", "bị dị ứng với"], ["vegetarian", "người ăn chay, món chay"], ["refill", "rót thêm, thêm một ly"], ["box", "hộp mang đồ ăn về"],
    ["bill", "hóa đơn (người Mỹ nói check)"], ["split the bill", "chia hóa đơn"], ["service", "phí phục vụ"], ["cash or card", "tiền mặt hay thẻ"],
    ["crispy", "giòn"], ["tender", "mềm (thịt)"], ["bland", "nhạt nhẽo"], ["on the house", "quán tặng, miễn phí"]
  ],
  tips: [
    "Bắt đầu bằng câu ngắn nhất có thể: **Table for two, please** hoặc **A large iced coffee, please**; thêm please là đủ lịch sự.",
    "Mỗi ngày tập gọi 5 món bạn thích bằng **I would like…** (thường nói I’d like) cho đến khi nói không cần nghĩ.",
    "Nếu bạn bị dị ứng hoặc ăn chay, học thuộc một câu và nói ngay khi gọi món, ví dụ: “I am allergic to peanuts.” (thường nói I’m allergic).",
    "Khi có sự cố, mở đầu bằng **Excuse me** hoặc **I think…** rồi mới nêu vấn đề để giữ không khí dễ chịu.",
    "Mỗi ngày chọn 2 từ mới như crispy, tender và dùng thử trong một câu về món bạn vừa ăn."
  ]
};
