/* Cheat sheet: Ordering Drinks (Gọi đồ uống). Hiển thị bởi cheatsheet.js. */
window.A1_CHEAT = {
  goal: [
    "Gọi tên các loại cà phê, trà ở quán quốc tế và giải thích được đồ uống Việt Nam như cà phê sữa đá, bạc xỉu, nước mía.",
    "Hiểu nhanh các câu nhân viên hay hỏi: size nào, nóng hay đá, dùng ở đây hay mang đi.",
    "Gọi một ly đúng ý theo thứ tự **size, nóng hoặc đá, tên đồ uống, with + sữa, đường, đá, topping**.",
    "Gọi đồ ở quán bar, mời bạn bè và từ chối rượu bia một cách lịch sự.",
    "Trả tiền, xin ống hút, nắp ly và báo nhầm đồ uống bằng **I ordered…, but…**."
  ],
  phrases: [
    { h: "Câu nhân viên hay hỏi", rows: [
      ["Hi! What can I get you?", "Chào bạn! Bạn dùng gì ạ?"],
      ["What size would you like?", "Bạn lấy size nào?"],
      ["Hot or iced?", "Nóng hay đá?"],
      ["For here or to go?", "Dùng ở đây hay mang đi?", "Người Anh hay nói to take away thay cho to go."],
      ["Can I get a name for the order?", "Cho mình xin tên để gọi khi có đồ nhé?"]
    ]},
    { h: "Gọi đồ ở quầy", rows: [
      ["Can I get a medium latte, please?", "Cho mình một ly latte size vừa."],
      ["I will have an iced americano.", "Mình lấy một ly americano đá.", "Khi gọi đồ người ta nói I’ll have (I’ll = I will)."],
      ["What is the most popular drink here?", "Ở đây món nào bán chạy nhất?", "Dạng rút gọn: What’s (What’s = What is)."],
      ["Is it very sweet?", "Món đó có ngọt lắm không?"],
      ["To go, please. The name is Linh.", "Mang đi nhé. Tên mình là Linh."]
    ]},
    { h: "Tùy chỉnh ly của bạn", rows: [
      ["Could I get that with oat milk?", "Cho mình dùng sữa yến mạch được không?"],
      ["Less sugar and less ice, please.", "Ít đường, ít đá nhé."],
      ["Can I add an extra shot?", "Cho thêm một shot espresso được không?"],
      ["A large milk tea with fifty percent sugar and tapioca pearls, please.", "Cho một ly trà sữa size lớn, 50% đường, thêm trân châu."],
      ["Do you have any sugar-free options?", "Quán có lựa chọn không đường không?"]
    ]},
    { h: "Ở quán bar với bạn bè", rows: [
      ["What are you having?", "Bạn uống gì?", "Dùng hiện tại tiếp diễn để hỏi người kia định gọi gì ngay lúc này."],
      ["This round is on me.", "Lượt này để tôi trả."],
      ["I do not drink alcohol. Do you have any mocktails?", "Tôi không uống rượu bia. Quán có mocktail không?", "Dạng rút gọn hay nói: I don’t drink (don’t = do not)."],
      ["Same again, please.", "Cho thêm giống lúc nãy nhé."],
      ["Cheers!", "Cạn ly! Dô!"]
    ]},
    { h: "Trả tiền, nhận đồ và báo nhầm", rows: [
      ["That will be fifty-five thousand.", "Của bạn 55 nghìn.", "Nhân viên thường nói rút gọn: That’ll be… (That’ll = That will)."],
      ["Can I pay by QR code?", "Mình quét mã QR để trả được không?"],
      ["Could I get a straw and a lid?", "Cho mình xin ống hút và nắp ly."],
      ["Sorry, I think this is someone else’s.", "Xin lỗi, hình như ly này của người khác.", "’s ở đây là sở hữu cách, nghĩa là “của người khác”, không phải dạng rút gọn."],
      ["I ordered it iced, but this one is hot.", "Mình gọi đá mà ly này lại nóng."]
    ]}
  ],
  grammar: [
    { h: "Coffee lúc đếm được, lúc không đếm được",
      f: ["Nói chung: coffee, tea (không đếm được, không có a, không thêm -s)", "Gọi ở quán: a coffee, two coffees (nghĩa là một ly, hai ly)", "a cup / a glass / a bottle of + đồ uống"],
      p: [
        "Khi nói chung về thói quen uống một loại đồ uống, coffee và tea là danh từ **không đếm được**: I drink coffee every morning. Nói “I drink a coffee every morning” nghe lạ.",
        "Khi gọi ở quầy, người ta hiểu ngầm là “một ly”, nên coffee trở thành **đếm được**: Two coffees, please. Can I get a tea?",
        "Muốn nói rõ đơn vị, dùng **a cup of**, **a glass of**, **a bottle of** trước tên đồ uống."
      ],
      ex: [["I drink coffee every morning.", "Sáng nào tôi cũng uống cà phê."], ["Can I get two coffees to go?", "Cho mình hai ly cà phê mang đi nhé?"]]
    },
    { h: "Can I get, I will have và I would like",
      f: ["Can I get + đồ uống? (rất phổ biến ở quán cà phê)", "I will have + đồ uống (tự nhiên, quyết định ngay)", "I would like + đồ uống, please (lịch sự)"],
      p: [
        "**Can I get…?** là cách gọi phổ biến nhất ở quán cà phê, nhất là ở Mỹ. Câu này thân thiện và không hề bất lịch sự.",
        "**I will have…** (thường nói I’ll have) dùng khi bạn vừa quyết định gọi món gì. **I would like…** (thường nói I’d like) lịch sự hơn một chút.",
        "Tránh nói **Give me coffee** vì nghe như ra lệnh. Thêm please ở cuối câu để lời gọi nhẹ nhàng hơn."
      ],
      ex: [["Can I get a cappuccino?", "Cho mình một ly cappuccino nhé?"], ["I would like a mango smoothie, please.", "Cho tôi một ly sinh tố xoài."]]
    },
    { h: "Thứ tự khi gọi một ly đầy đủ",
      f: ["a / an + size + nóng hoặc đá + tên đồ uống + with + sữa, đường, đá hoặc topping", "less + danh từ không đếm được (less sugar, less ice)"],
      p: [
        "Nhân viên quen nghe theo thứ tự **size → nóng hoặc đá → tên đồ uống → with…**. Nói đúng thứ tự này thì dù bạn nói chưa trôi chảy, họ vẫn hiểu ngay.",
        "Loại sữa đặt tên loại trước chữ milk: **oat milk**, soy milk, không nói “milk oat”.",
        "Đường và đá là danh từ không đếm được nên dùng **less** (ít hơn), không dùng fewer."
      ],
      ex: [["A large iced latte with oat milk, please.", "Cho một ly latte đá size lớn, dùng sữa yến mạch."], ["A medium hot cappuccino with an extra shot, please.", "Cho một ly cappuccino nóng size vừa, thêm một shot espresso."]]
    },
    { h: "Mời và hỏi ở quán bar: What are you having? và Would you like another…?",
      f: ["What are you having?", "I am having + đồ uống", "Would you like another + danh từ?"],
      p: [
        "Khi hỏi bạn bè định gọi gì ngay lúc này, người bản xứ dùng thì hiện tại tiếp diễn: **What are you having?** Câu “What do you drink?” nghe như hỏi về thói quen nói chung.",
        "Để mời thêm một ly, dùng **Would you like another…?**. Muốn từ chối lịch sự thì nói **No, thanks. I am fine.** (thường nói I’m fine). Không cần giải thích lý do khi không uống rượu bia."
      ],
      ex: [["I am having a lemonade.", "Mình uống nước chanh."], ["Would you like another drink?", "Bạn uống thêm một ly nữa không?"]]
    },
    { h: "Báo nhầm đồ: I ordered…, but…",
      f: ["I ordered / I asked for + điều đã gọi, but + this is / it is + điều đang thấy"],
      p: [
        "Việc gọi món đã xảy ra rồi nên dùng **thì quá khứ đơn**: I ordered, I asked for. Điều bạn đang thấy bây giờ thì dùng **thì hiện tại**: this is, it is.",
        "Nối hai vế bằng **but** để thể hiện sự khác biệt, rồi nhờ nhẹ nhàng: **Could you make it again, please?**. Cách nói này rõ ràng mà không gây khó chịu."
      ],
      ex: [["I ordered a small one, but this is a large.", "Mình gọi size nhỏ mà đây là size lớn."], ["I asked for oat milk, but I think this is regular milk.", "Mình dặn sữa yến mạch mà hình như đây là sữa thường."]]
    }
  ],
  mistakes: [
    ["I drink a coffee every morning since I was young.", "I drink coffee every morning.", "Nói thói quen chung thì coffee **không đếm được**, không dùng a."],
    ["Give me coffee.", "Can I get a coffee, please?", "Give me nghe như ra lệnh; dùng **Can I get…, please?**."],
    ["an iced large latte with milk oat", "a large iced latte with oat milk", "Thứ tự đúng: **size trước, nóng hoặc đá sau**; loại sữa đứng trước milk."],
    ["fewer ice, fewer sugar", "less ice, less sugar", "Đá và đường không đếm được nên dùng **less**."],
    ["What do you drink? (lúc gọi đồ)", "What are you having?", "Hỏi người kia định gọi gì lúc này dùng **hiện tại tiếp diễn**."],
    ["I order iced but it hot.", "I ordered it iced, but it is hot.", "Việc gọi đã xảy ra dùng **quá khứ đơn**; câu sau cần động từ **is**."]
  ],
  vocab: [
    ["espresso", "cà phê đậm, ly nhỏ"], ["americano", "espresso pha thêm nước"], ["latte", "espresso với nhiều sữa nóng"], ["cappuccino", "espresso, sữa và bọt sữa dày"],
    ["hot chocolate", "ca cao nóng"], ["bubble tea", "trà sữa trân châu"], ["condensed milk", "sữa đặc"], ["sugarcane juice", "nước mía"],
    ["small / medium / large", "size nhỏ, vừa, lớn"], ["iced", "có đá"], ["blended", "đá xay"], ["oat milk", "sữa yến mạch"],
    ["an extra shot", "thêm một shot espresso"], ["decaf", "cà phê đã khử caffeine"], ["less sugar", "ít đường"], ["no ice", "không đá"],
    ["tapioca pearls", "trân châu"], ["topping", "phần thêm vào ly"], ["to go", "mang đi"], ["for here", "dùng tại quán"],
    ["on tap", "bia tươi rót từ vòi"], ["mocktail", "đồ uống pha chế không cồn"], ["straw", "ống hút"], ["lid", "nắp ly"]
  ],
  tips: [
    "Luyện nói ly bạn hay uống theo đúng thứ tự: **size → nóng hoặc đá → tên đồ uống → with…**.",
    "Học thuộc ba câu nhân viên gần như luôn hỏi: **What size?**, **Hot or iced?**, **For here or to go?** để trả lời thật nhanh.",
    "Chuẩn bị sẵn câu giới thiệu đồ uống Việt cho bạn nước ngoài, ví dụ: “Bạc xỉu is a milky iced coffee with just a little coffee.”",
    "Từ chối rượu bia là chuyện bình thường: chỉ cần nói **I am not drinking tonight** (thường nói I’m not drinking tonight), không cần giải thích thêm.",
    "Lần tới đi quán cà phê có nhân viên nói tiếng Anh, hãy thử gọi cả ly bằng tiếng Anh và nhớ thêm please."
  ]
};
