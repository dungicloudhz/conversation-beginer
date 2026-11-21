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
      items: [
        { f: "Nói chung: coffee, tea (không đếm được, không có a, không thêm -s)",
          mean: "**cà phê, trà nói chung**: nói về loại đồ uống, thói quen, sở thích, không nói số ly.",
          parts: [
            ["coffee / tea", "danh từ **không đếm được** khi nói chung: đứng một mình, không có a, không thêm -s."],
            ["động từ đi kèm", "drink, like, love, prefer, do not drink."],
            ["much / a lot of", "nói lượng nhiều: I drink a lot of tea."]
          ],
          use: "kể thói quen, sở thích uống: Sáng nào tôi cũng uống cà phê, tôi không thích trà. Thường đi với every day, in the morning, usually.",
          note: "Không nói “I like a coffee” khi nói sở thích. Cũng không nói “I drink many coffees”, mà nói “I drink a lot of coffee”.",
          ex: [
            ["I love coffee, but my wife prefers tea.", "Tôi mê cà phê, còn vợ tôi thích trà hơn."],
            ["Do you drink tea in the evening?", "Bạn có uống trà vào buổi tối không?"],
            ["My father drinks a lot of green tea.", "Bố tôi uống rất nhiều trà xanh."],
            ["I do not drink coffee after four o’clock.", "Tôi không uống cà phê sau 4 giờ chiều."]
          ] },
        { f: "Gọi ở quán: a coffee, two coffees (nghĩa là một ly, hai ly)",
          mean: "**một ly cà phê, hai ly cà phê**: khi gọi ở quán, coffee trở thành **đếm được**, hiểu ngầm là “một ly”.",
          parts: [
            ["a coffee / a tea", "một ly cà phê, một ly trà."],
            ["two coffees / three teas", "thêm -s khi gọi nhiều ly."],
            ["tên đồ uống cụ thể", "a latte, two cappuccinos, an espresso, three iced teas."]
          ],
          use: "chỉ dùng khi **gọi hoặc nói về từng ly cụ thể** ở quán. Gọn hơn cách nói a cup of coffee.",
          note: "Cùng một từ coffee: nói chung thì không đếm được (I like coffee), gọi ở quán thì đếm được (Two coffees, please). Chọn an trước từ có âm nguyên âm: an espresso, an iced tea.",
          ex: [
            ["Two coffees and one tea, please.", "Cho hai ly cà phê và một ly trà."],
            ["Can I get an iced tea?", "Cho mình một ly trà đá nhé?"],
            ["We would like three lattes to go.", "Chúng tôi lấy ba ly latte mang đi."],
            ["I had two coffees this morning.", "Sáng nay tôi đã uống hai ly cà phê."]
          ] },
        { f: "a cup / a glass / a bottle of + đồ uống",
          mean: "**một tách / một ly / một chai** đồ uống: nói rõ đựng trong gì.",
          parts: [
            ["a cup of", "**tách, cốc** có quai, thường cho đồ uống **nóng**: a cup of tea, a cup of hot chocolate."],
            ["a glass of", "**ly thủy tinh**, thường cho đồ uống **lạnh**: a glass of water, a glass of orange juice."],
            ["a bottle of", "**chai**: a bottle of water, a bottle of beer, a bottle of soda."],
            ["số nhiều", "thêm -s vào đơn vị: two cups, two glasses, three bottles."]
          ],
          use: "khi cần nói rõ dạng đựng, hoặc khi đồ uống không gọi gọn được (water, juice): a glass of water, không nói “a water” ở quán ăn sang trọng.",
          note: "Đồ uống sau of giữ nguyên, không thêm -s: two bottles of water, không nói “two bottles of waters”.",
          ex: [
            ["Could I have a glass of water, please?", "Cho tôi một ly nước được không?"],
            ["I drink a cup of green tea after lunch.", "Tôi uống một tách trà xanh sau bữa trưa."],
            ["Two bottles of sparkling water, please.", "Cho hai chai nước có ga."],
            ["Would you like a cup of hot chocolate?", "Bạn uống một tách sô-cô-la nóng không?"]
          ] }
      ],
      p: [
        "Khi nói chung về thói quen uống một loại đồ uống, coffee và tea là danh từ **không đếm được**: I drink coffee every morning. Nói “I drink a coffee every morning” nghe lạ.",
        "Khi gọi ở quầy, người ta hiểu ngầm là “một ly”, nên coffee trở thành **đếm được**: Two coffees, please. Can I get a tea?",
        "Muốn nói rõ đơn vị, dùng **a cup of**, **a glass of**, **a bottle of** trước tên đồ uống."
      ],
      ex: [["I drink coffee every morning.", "Sáng nào tôi cũng uống cà phê."], ["Can I get two coffees to go?", "Cho mình hai ly cà phê mang đi nhé?"]]
    },
    { h: "Can I get, I will have và I would like",
      f: ["Can I get + đồ uống? (rất phổ biến ở quán cà phê)", "I will have + đồ uống (tự nhiên, quyết định ngay)", "I would like + đồ uống, please (lịch sự)"],
      items: [
        { f: "Can I get + đồ uống? (rất phổ biến ở quán cà phê)",
          mean: "**cho mình… nhé?**: cách gọi đồ uống **phổ biến và thân thiện nhất** ở quán cà phê.",
          parts: [
            ["Can I get", "nghĩa đen “tôi có thể lấy…”, nhưng ở quầy cà phê là cách gọi bình thường, không bất lịch sự. Rất hay dùng ở Mỹ."],
            ["Can I have", "cùng nghĩa, dùng được ở mọi nơi, phổ biến hơn ở Anh."],
            ["đồ uống", "a latte, a small black coffee, two iced teas."]
          ],
          use: "gọi đồ ở quầy quán cà phê, quán trà sữa, đồ ăn nhanh. Có thể thêm to go (mang đi) hoặc for here (dùng ở đây).",
          note: "Thêm **please** ở cuối để lịch sự hơn. Không đổi chủ ngữ thành you: không nói “Can you get me…” khi gọi món, nghe như nhờ đi lấy hộ.",
          ex: [
            ["Can I get a small latte, please?", "Cho mình một ly latte nhỏ nhé?"],
            ["Can I get two iced teas to go?", "Cho mình hai ly trà đá mang đi nhé?"],
            ["Can I get an espresso for here?", "Cho mình một ly espresso dùng tại quán nhé?"],
            ["Can I get some more ice, please?", "Cho mình thêm ít đá nhé?"]
          ] },
        { f: "I will have + đồ uống (tự nhiên, quyết định ngay)",
          mean: "**tôi lấy…**: nói món mình **vừa quyết định gọi**, nghe tự nhiên.",
          parts: [
            ["I will have", "dùng will vì đây là quyết định ngay lúc nói. Khi nói thường rút gọn **I’ll have**."],
            ["the same", "“giống vậy”: I will have the same (tôi lấy giống bạn ấy)."]
          ],
          use: "trả lời khi nhân viên hỏi “What can I get you?” hoặc sau khi xem thực đơn xong. Hay dùng ở nhà hàng, quán bar.",
          note: "Ở đây have nghĩa là “dùng, uống”, không phải “có”. Không nói “I have a coffee” khi gọi món, vì nghe như “tôi đang có một ly cà phê”.",
          ex: [
            ["I will have a mango smoothie.", "Tôi lấy một ly sinh tố xoài."],
            ["I’ll have a black coffee, please.", "Cho tôi một ly cà phê đen."],
            ["I’ll have the same, please.", "Cho tôi giống vậy."],
            ["I think I will have a lemon tea.", "Tôi nghĩ tôi sẽ lấy một ly trà chanh."]
          ] },
        { f: "I would like + đồ uống, please (lịch sự)",
          mean: "**tôi muốn gọi…**: cách gọi đồ uống **lịch sự** hơn một chút.",
          parts: [
            ["I would like", "lịch sự, nhẹ nhàng. Khi nói thường rút gọn **I’d like**."],
            ["Would you like…?", "câu nhân viên hoặc bạn bè dùng để mời, hỏi ý: Would you like ice?"]
          ],
          use: "gọi đồ ở nhà hàng, khách sạn, hoặc khi muốn lịch sự với người phục vụ.",
          note: "Đừng nhầm với **I like** (sở thích chung): “I like milk tea” là tôi thích trà sữa, “I would like a milk tea” là tôi gọi một ly trà sữa.",
          ex: [
            ["I would like a hot chocolate, please.", "Cho tôi một ly sô-cô-la nóng."],
            ["I’d like a large iced coffee with milk, please.", "Cho tôi một ly cà phê sữa đá size lớn."],
            ["We would like two glasses of lemonade, please.", "Cho chúng tôi hai ly nước chanh."],
            ["Would you like sugar in your tea?", "Bạn có muốn cho đường vào trà không?"]
          ] }
      ],
      p: [
        "**Can I get…?** là cách gọi phổ biến nhất ở quán cà phê, nhất là ở Mỹ. Câu này thân thiện và không hề bất lịch sự.",
        "**I will have…** (thường nói I’ll have) dùng khi bạn vừa quyết định gọi món gì. **I would like…** (thường nói I’d like) lịch sự hơn một chút.",
        "Tránh nói **Give me coffee** vì nghe như ra lệnh. Thêm please ở cuối câu để lời gọi nhẹ nhàng hơn."
      ],
      ex: [["Can I get a cappuccino?", "Cho mình một ly cappuccino nhé?"], ["I would like a mango smoothie, please.", "Cho tôi một ly sinh tố xoài."]]
    },
    { h: "Thứ tự khi gọi một ly đầy đủ",
      f: ["a / an + size + nóng hoặc đá + tên đồ uống + with + sữa, đường, đá hoặc topping", "less + danh từ không đếm được (less sugar, less ice)"],
      items: [
        { f: "a / an + size + nóng hoặc đá + tên đồ uống + with + sữa, đường, đá hoặc topping",
          mean: "**thứ tự chuẩn khi gọi một ly đầy đủ**: số lượng, cỡ, nóng hay đá, tên đồ uống, rồi phần thêm.",
          parts: [
            ["a / an", "số lượng. Dùng **an** trước âm nguyên âm: an iced latte, an extra-large tea."],
            ["size", "cỡ ly: small (nhỏ), medium (vừa), large (lớn)."],
            ["hot / iced", "nóng hoặc đá. Dùng **iced** (có -d), không nói “ice coffee” khi viết."],
            ["tên đồ uống", "latte, cappuccino, americano, milk tea."],
            ["with + phần thêm", "with oat milk, with no sugar, with an extra shot, with pearls (trân châu)."]
          ],
          use: "gọi ở quầy cà phê, trà sữa. Có thể bỏ bớt phần không cần, nhưng giữ đúng thứ tự. Kết thúc bằng please.",
          note: "Mẹo nhớ: **cỡ → nóng / đá → tên → with**. Muốn không có gì thì dùng **with no** hoặc **without**: with no sugar, without ice.",
          ex: [
            ["A small hot americano, please.", "Cho một ly americano nóng size nhỏ."],
            ["A large milk tea with pearls, please.", "Cho một ly trà sữa size lớn có trân châu."],
            ["Can I get a medium iced mocha with no cream?", "Cho mình một ly mocha đá size vừa, không kem nhé?"],
            ["Two small hot lattes with soy milk, please.", "Cho hai ly latte nóng size nhỏ, dùng sữa đậu nành."]
          ] },
        { f: "less + danh từ không đếm được (less sugar, less ice)",
          mean: "**ít… hơn (bình thường)**: yêu cầu giảm lượng đường, đá, sữa.",
          parts: [
            ["less", "“ít hơn”, dùng với danh từ **không đếm được**: less sugar, less ice, less milk."],
            ["more / extra", "ngược lại, “nhiều hơn, thêm”: more ice, extra milk, an extra shot."],
            ["no", "“không có”: no sugar, no ice."]
          ],
          use: "tùy chỉnh đồ uống theo khẩu vị. Đặt sau with hoặc đứng riêng ở cuối lời gọi: A milk tea, less sugar, please.",
          note: "**fewer** chỉ dùng với danh từ đếm được số nhiều (fewer pearls); đường và đá không đếm được nên dùng **less**.",
          ex: [
            ["An iced coffee with less sugar, please.", "Cho một ly cà phê đá, ít đường."],
            ["Can I have less ice in my tea?", "Cho mình ít đá trong trà được không?"],
            ["A large milk tea with less milk, please.", "Cho một ly trà sữa lớn, ít sữa."],
            ["No sugar and less milk, please.", "Không đường và ít sữa nhé."]
          ] }
      ],
      p: [
        "Nhân viên quen nghe theo thứ tự **size → nóng hoặc đá → tên đồ uống → with…**. Nói đúng thứ tự này thì dù bạn nói chưa trôi chảy, họ vẫn hiểu ngay.",
        "Loại sữa đặt tên loại trước chữ milk: **oat milk**, soy milk, không nói “milk oat”.",
        "Đường và đá là danh từ không đếm được nên dùng **less** (ít hơn), không dùng fewer."
      ],
      ex: [["A large iced latte with oat milk, please.", "Cho một ly latte đá size lớn, dùng sữa yến mạch."], ["A medium hot cappuccino with an extra shot, please.", "Cho một ly cappuccino nóng size vừa, thêm một shot espresso."]]
    },
    { h: "Mời và hỏi ở quán bar: What are you having? và Would you like another…?",
      f: ["What are you having?", "I am having + đồ uống", "Would you like another + danh từ?"],
      items: [
        { f: "What are you having?",
          mean: "**bạn uống gì? / bạn gọi gì?**: hỏi người đi cùng định gọi món gì **ngay bây giờ**.",
          parts: [
            ["What are you having", "thì hiện tại tiếp diễn, hỏi về lựa chọn ngay lúc này. Với he, she: What is she having?"],
            ["What would you like?", "cách hỏi lịch sự hơn, nhân viên hay dùng."],
            ["What do you usually drink?", "hỏi thói quen chung, khác với What are you having."]
          ],
          use: "hỏi bạn bè khi đang xem thực đơn ở quán bar, quán cà phê, hoặc khi mình định mời và gọi giúp.",
          note: "Đừng hỏi “What do you drink?” trong tình huống này vì nghe như hỏi thói quen. Ở đây have nghĩa là “dùng, uống”.",
          ex: [
            ["What are you having? I am getting a beer.", "Bạn uống gì? Mình gọi một ly bia."],
            ["What is your brother having?", "Anh trai bạn uống gì?"],
            ["What are you having tonight, a coffee or a juice?", "Tối nay bạn uống gì, cà phê hay nước ép?"],
            ["What are you two having? It is my treat.", "Hai bạn uống gì? Mình mời."]
          ] },
        { f: "I am having + đồ uống",
          mean: "**mình uống / mình gọi…**: trả lời câu What are you having?, nói món mình chọn.",
          parts: [
            ["I am having", "khi nói thường rút gọn **I’m having**."],
            ["I will have", "cách nói tương tự khi vừa quyết định, hay nói với nhân viên."],
            ["đồ uống", "a lemonade, a beer, just water, a glass of red wine."]
          ],
          use: "trả lời bạn bè hoặc người đi cùng. Có thể thêm just để nói mình chỉ uống thứ đơn giản: I am just having water.",
          note: "Không nói “I am drink a lemonade” hay “I having”. Cần đủ **am + having**.",
          ex: [
            ["I am having an orange juice.", "Mình uống nước cam."],
            ["I’m just having water tonight.", "Tối nay mình chỉ uống nước lọc thôi."],
            ["She is having a glass of white wine.", "Cô ấy uống một ly rượu vang trắng."],
            ["We are having two lemon sodas.", "Chúng mình gọi hai ly soda chanh."]
          ] },
        { f: "Would you like another + danh từ?",
          mean: "**bạn uống thêm một… nữa không?**: mời người khác thêm một ly, một phần nữa.",
          parts: [
            ["Would you like", "lời mời lịch sự, “bạn có muốn…”."],
            ["another", "“thêm một… nữa”, đi với danh từ **số ít đếm được**: another drink, another beer, another coffee."],
            ["some more", "dùng với danh từ không đếm được: some more water, some more tea."]
          ],
          use: "mời bạn bè, khách khi ly của họ đã gần hết. Trả lời: Yes, please. / No, thanks. I am fine.",
          note: "Another viết liền một chữ (an + other) và đã có nghĩa “một”, nên không thêm a: không nói “another a beer”. Từ chối thì không cần giải thích lý do.",
          ex: [
            ["Would you like another coffee?", "Bạn uống thêm một ly cà phê nữa không?"],
            ["Would you like another glass of juice?", "Bạn uống thêm một ly nước ép nữa không?"],
            ["Would you like another beer? No, thanks. I am fine.", "Bạn làm thêm một ly bia nữa không? Không, cảm ơn. Mình đủ rồi."],
            ["Would you like some more tea?", "Bạn uống thêm chút trà không?"]
          ] }
      ],
      p: [
        "Khi hỏi bạn bè định gọi gì ngay lúc này, người bản xứ dùng thì hiện tại tiếp diễn: **What are you having?** Câu “What do you drink?” nghe như hỏi về thói quen nói chung.",
        "Để mời thêm một ly, dùng **Would you like another…?**. Muốn từ chối lịch sự thì nói **No, thanks. I am fine.** (thường nói I’m fine). Không cần giải thích lý do khi không uống rượu bia."
      ],
      ex: [["I am having a lemonade.", "Mình uống nước chanh."], ["Would you like another drink?", "Bạn uống thêm một ly nữa không?"]]
    },
    { h: "Báo nhầm đồ: I ordered…, but…",
      f: ["I ordered / I asked for + điều đã gọi, but + this is / it is + điều đang thấy"],
      items: [
        { f: "I ordered / I asked for + điều đã gọi, but + this is / it is + điều đang thấy",
          mean: "**tôi đã gọi…, nhưng đây là…**: báo nhẹ nhàng rằng đồ uống mang ra không đúng.",
          parts: [
            ["I ordered", "“tôi đã gọi”, thì quá khứ đơn vì việc gọi đã xong."],
            ["I asked for", "“tôi đã dặn, đã yêu cầu”: hợp khi nói về chi tiết như ít đường, sữa yến mạch, không đá."],
            ["but", "“nhưng”, nối hai vế để chỉ ra sự khác biệt."],
            ["this is / it is", "thì hiện tại, mô tả cái đang ở trước mặt. Có thể thêm **I think** cho nhẹ nhàng."]
          ],
          use: "nói với nhân viên khi nhầm size, nhầm món, nhầm nóng hay đá. Sau đó nhờ: Could you change it, please? Could you make it again, please?",
          note: "Không nói “I order a latte, but this is…” (thiếu -ed). Bắt đầu bằng **Excuse me** hoặc **Sorry** để lời phàn nàn lịch sự hơn.",
          ex: [
            ["Excuse me, I ordered an iced tea, but this is hot.", "Xin lỗi, mình gọi trà đá mà đây là trà nóng."],
            ["I asked for no sugar, but it is very sweet.", "Mình dặn không đường mà ly này ngọt lắm."],
            ["Sorry, I ordered a latte, but I think this is a cappuccino.", "Xin lỗi, mình gọi latte mà hình như đây là cappuccino."],
            ["I asked for a medium, but this is a small. Could you change it, please?", "Mình gọi size vừa mà đây là size nhỏ. Bạn đổi giúp mình được không?"]
          ] }
      ],
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
