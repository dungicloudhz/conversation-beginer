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
      items: [
        { f: "this / that + danh từ số ít",
          mean: "**cái… này / cái… kia**: chỉ vào **một** món đồ, gần mình hoặc xa mình.",
          parts: [
            ["this", "**này**: một món ở **gần**, trong tay hoặc ngay trước mặt."],
            ["that", "**kia, đó**: một món ở **xa**, trên kệ, trong tủ kính, phía bên kia cửa hàng."],
            ["this one / that one", "khi đã rõ đang nói món gì, thay danh từ bằng **one**: I like this one."]
          ],
          use: "đặt ngay **trước danh từ số ít**: this shirt, that bag. Động từ đi theo là **is**. Có thể đứng một mình làm chủ ngữ: This is nice.",
          note: "Tiếng Việt đặt “này / kia” sau danh từ (cái áo này), tiếng Anh đặt **trước** (this shirt). Đừng nói “shirt this”.",
          ex: [
            ["How much is this T-shirt?", "Cái áo phông này bao nhiêu tiền?"],
            ["Can I see that watch, please?", "Cho tôi xem cái đồng hồ kia được không?"],
            ["This hat is too big for me.", "Cái mũ này to quá với tôi."],
            ["I do not like that color. Do you have this one in black?", "Tôi không thích màu kia. Cái này có màu đen không?"]
          ] },
        { f: "these / those + danh từ số nhiều",
          mean: "**những cái… này / những cái… kia**: chỉ vào **nhiều** món đồ, gần hoặc xa.",
          parts: [
            ["these", "**những… này**: nhiều món ở **gần** (số nhiều của this)."],
            ["those", "**những… kia**: nhiều món ở **xa** (số nhiều của that)."],
            ["danh từ luôn số nhiều", "jeans, trousers, shorts, shoes, socks, glasses: dù chỉ một chiếc quần hay một đôi giày vẫn dùng these / those."]
          ],
          use: "đặt ngay **trước danh từ số nhiều** (có -s): these socks, those apples. Có thể đứng một mình: I will take these.",
          note: "Lỗi hay gặp: “this shoes”, “that jeans”. Danh từ số nhiều thì phải dùng **these / those**.",
          ex: [
            ["I would like to try these trousers.", "Tôi muốn thử cái quần này."],
            ["Can you show me those earrings?", "Bạn cho tôi xem đôi bông tai kia được không?"],
            ["These socks are only ten thousand dong.", "Mấy đôi tất này chỉ 10 nghìn đồng."],
            ["Do those boots come in size 38?", "Đôi bốt kia có cỡ 38 không?"]
          ] },
        { f: "these / those + are",
          mean: "**những cái này / kia thì…**: khi these / those làm chủ ngữ, động từ **be** phải ở dạng số nhiều **are**.",
          parts: [
            ["these are / those are", "dùng **are**, không dùng is: These are nice."],
            ["are not", "phủ định: Those are not cheap."],
            ["Are these / Are those…?", "câu hỏi: đảo are lên đầu: Are these on sale?"],
            ["them", "khi nhắc lại những món này, dùng đại từ **them**: I like them."]
          ],
          use: "dùng khi nhận xét, hỏi giá, hỏi cỡ những món số nhiều hoặc món luôn số nhiều (jeans, shoes). Sau are là tính từ, danh từ hoặc cụm như on sale, in my size.",
          note: "Người Việt hay nói “These jeans is nice” vì nghĩ chỉ có một cái quần. Jeans luôn số nhiều nên đúng là **These jeans are nice**.",
          ex: [
            ["These shoes are very comfortable.", "Đôi giày này rất êm."],
            ["Those glasses are too expensive.", "Cặp kính kia đắt quá."],
            ["Are these jeans on sale?", "Cái quần bò này có đang giảm giá không?"],
            ["These are not my size. Do you have them in medium?", "Mấy cái này không phải cỡ của tôi. Có cỡ vừa không?"]
          ] }
      ],
      p: [
        "Khi đứng trong cửa hàng, bạn luôn phải chỉ vào món đồ. Dùng **this** cho một món ở gần, **that** cho một món ở xa. Dùng **these** cho nhiều món ở gần, **those** cho nhiều món ở xa.",
        "Một số món luôn ở dạng số nhiều vì có hai ống quần hoặc hai chiếc: **jeans, trousers, shorts, shoes, glasses**. Những từ này luôn đi với **these / those**, động từ **are** và đại từ **them**, dù bạn chỉ mua một cái quần hay một đôi giày."
      ],
      ex: [["I like this bag.", "Tôi thích cái túi này."], ["These jeans are nice.", "Cái quần bò này đẹp."]]
    },
    { h: "one / ones để không lặp lại tên món đồ",
      f: ["the + tính từ + one (thay cho một món)", "tính từ + ones (thay cho nhiều món)"],
      items: [
        { f: "the + tính từ + one (thay cho một món)",
          mean: "**cái màu…, cái loại…**: one thay cho tên **một** món đồ đã nói trước đó, để không phải lặp lại tên.",
          parts: [
            ["the", "dùng khi nói một món cụ thể mà cả hai đều đang nhìn thấy: the red one."],
            ["tính từ", "đặc điểm để phân biệt: màu (blue), cỡ (big, small), giá (cheap), so sánh (bigger)."],
            ["one", "**cái, chiếc**: thay cho danh từ số ít (one = shirt, bag, hat…)."],
            ["a + tính từ + one", "dùng **a** khi hỏi một món bất kỳ chưa xác định: Do you have a smaller one?"]
          ],
          use: "dùng khi chọn giữa nhiều món cùng loại khác màu, khác cỡ. Có thể dùng với this / that: this one, that one, which one?",
          note: "Đừng lặp lại danh từ hoặc bỏ one: không nói “I like the red” mà nói **I like the red one**. Hỏi chọn món nào: **Which one?**",
          ex: [
            ["I like the green one better.", "Tôi thích cái màu xanh lá hơn."],
            ["Which one is cheaper, the black one or the white one?", "Cái nào rẻ hơn, cái đen hay cái trắng?"],
            ["This bag is too small. Do you have a bigger one?", "Cái túi này nhỏ quá. Có cái lớn hơn không?"],
            ["I will take the cotton one, please.", "Tôi lấy cái bằng vải bông."]
          ] },
        { f: "tính từ + ones (thay cho nhiều món)",
          mean: "**những cái màu…, những đôi…**: ones thay cho danh từ **số nhiều** đã nói trước đó.",
          parts: [
            ["ones", "số nhiều của one: thay cho shoes, socks, jeans, apples…"],
            ["the + tính từ + ones", "những món cụ thể đang nhìn thấy: the brown ones."],
            ["tính từ + ones", "những món bất kỳ: Do you have cheaper ones?"]
          ],
          use: "dùng với danh từ số nhiều và những món luôn số nhiều như shoes, jeans, glasses. Động từ đi theo là **are**.",
          note: "Với shoes, jeans phải dùng **ones** chứ không dùng one, vì danh từ gốc là số nhiều: These shoes are tight. Do you have **bigger ones**?",
          ex: [
            ["I do not want these sandals. I want the brown ones.", "Tôi không muốn đôi dép này. Tôi muốn đôi màu nâu."],
            ["These jeans are too long. Do you have shorter ones?", "Cái quần bò này dài quá. Có cái ngắn hơn không?"],
            ["The blue ones are on sale.", "Những cái màu xanh đang giảm giá."],
            ["Are the new ones more expensive?", "Mấy cái mới có đắt hơn không?"]
          ] }
      ],
      p: [
        "Khi đã nói tên món đồ rồi, người bản xứ không lặp lại tên đó lần thứ hai mà thay bằng **one** (một món) hoặc **ones** (nhiều món). Câu nghe gọn và tự nhiên hơn.",
        "Thường dùng **one / ones** khi so sánh hai lựa chọn về màu hoặc cỡ, ví dụ cái màu đỏ và cái màu xanh."
      ],
      ex: [["I do not like the red one. Can I see the blue one?", "Tôi không thích cái màu đỏ. Cho tôi xem cái màu xanh được không?"], ["These shoes are too small. Do you have bigger ones?", "Đôi giày này nhỏ quá. Có đôi lớn hơn không?"]]
    },
    { h: "So sánh hơn để xin cỡ khác, giá khác",
      f: ["tính từ ngắn + -er", "more + tính từ dài", "a + tính từ so sánh hơn + size / one"],
      items: [
        { f: "tính từ ngắn + -er",
          mean: "**… hơn**: so sánh hơn với tính từ ngắn (một âm tiết): cheap → cheaper (rẻ hơn).",
          parts: [
            ["thêm -er", "cheap → cheaper, small → smaller, long → longer."],
            ["gấp đôi phụ âm cuối", "khi tận cùng là một nguyên âm + một phụ âm: big → bigger, hot → hotter."],
            ["y → ier", "tính từ hai âm tiết tận cùng -y: pretty → prettier, heavy → heavier."],
            ["than", "**hơn** khi có vật so sánh phía sau: This one is cheaper than that one."]
          ],
          use: "dùng khi xin món lớn hơn, nhỏ hơn, rẻ hơn, dài hơn. Đứng sau is / are hoặc trước one / ones: a cheaper one.",
          note: "Bất quy tắc phải học thuộc: **good → better**, **bad → worse**. Không nói “more cheap” hay “more big”.",
          ex: [
            ["This skirt is shorter than that one.", "Cái váy này ngắn hơn cái kia."],
            ["Do you have it in a smaller size?", "Cái này có cỡ nhỏ hơn không?"],
            ["The market is cheaper than the mall.", "Chợ rẻ hơn trung tâm thương mại."],
            ["Is this one better than the old model?", "Cái này có tốt hơn mẫu cũ không?"]
          ] },
        { f: "more + tính từ dài",
          mean: "**… hơn**: so sánh hơn với tính từ dài (thường từ hai âm tiết trở lên): expensive → more expensive.",
          parts: [
            ["more", "**hơn**, đặt **trước** tính từ dài: more expensive, more comfortable, more beautiful."],
            ["less", "**kém… hơn**, nghĩa ngược với more: less expensive (ít đắt hơn, tức rẻ hơn)."],
            ["than", "đi sau tính từ khi có vật so sánh: more comfortable than these."]
          ],
          use: "dùng khi so sánh giá cả, độ thoải mái, độ đẹp giữa hai món. Tính từ giữ nguyên, không thêm -er.",
          note: "Không dùng cả hai cùng lúc: không nói “more cheaper”. Chọn **một** cách: tính từ ngắn thêm -er, tính từ dài thêm more.",
          ex: [
            ["These trainers are more comfortable than those.", "Đôi giày thể thao này êm hơn đôi kia."],
            ["The leather bag is more expensive.", "Cái túi da đắt hơn."],
            ["Is the silk scarf more beautiful in red?", "Khăn lụa màu đỏ có đẹp hơn không?"],
            ["I need something less expensive.", "Tôi cần cái gì đó rẻ hơn."]
          ] },
        { f: "a + tính từ so sánh hơn + size / one",
          mean: "**một cỡ / một cái… hơn**: cách xin món khác ngay trong cửa hàng.",
          parts: [
            ["a bigger size / a smaller size", "**cỡ lớn hơn / cỡ nhỏ hơn**, dùng khi đồ không vừa."],
            ["a cheaper one", "**một cái rẻ hơn**, dùng khi thấy giá cao."],
            ["a longer one / a darker one", "một cái dài hơn, một cái màu đậm hơn…"]
          ],
          use: "thường đi sau **Do you have…?** hoặc **Can I try…?**. Dùng a vì bạn hỏi một món bất kỳ chưa xác định.",
          note: "Với món số nhiều thì bỏ a và dùng ones: Do you have **bigger ones**? Đừng nói “a bigger ones”.",
          ex: [
            ["Do you have a larger size?", "Có cỡ lớn hơn không?"],
            ["Can I try a smaller one?", "Tôi thử cái nhỏ hơn được không?"],
            ["I am looking for a cheaper one.", "Tôi đang tìm một cái rẻ hơn."],
            ["Do you have a lighter one? This is too heavy.", "Có cái nào nhẹ hơn không? Cái này nặng quá."]
          ] }
      ],
      p: [
        "Khi đồ không vừa hoặc quá đắt, bạn cần xin món “lớn hơn, nhỏ hơn, rẻ hơn”. Với tính từ ngắn (một âm tiết), thêm **-er**: small → smaller, cheap → cheaper. Tính từ kết thúc bằng một nguyên âm và một phụ âm thì gấp đôi phụ âm cuối: big → bigger.",
        "Với tính từ dài, đặt **more** phía trước: expensive → more expensive. Một số tính từ bất quy tắc phải học thuộc: good → better.",
        "Không dùng “more small” vì small là tính từ ngắn; phải nói **smaller**."
      ],
      ex: [["Do you have a cheaper one?", "Có cái nào rẻ hơn không?"], ["This one is more expensive.", "Cái này đắt hơn."]]
    },
    { h: "How much is / How much are để hỏi giá",
      f: ["How much is + this / that / danh từ số ít?", "How much are + these / those / danh từ số nhiều?"],
      items: [
        { f: "How much is + this / that / danh từ số ít?",
          mean: "**cái này / cái kia… giá bao nhiêu?**: hỏi giá **một** món đồ.",
          parts: [
            ["How much", "**bao nhiêu tiền**."],
            ["is", "dùng với một món, số ít."],
            ["this / that", "chỉ món ở gần / ở xa, có thể đứng một mình: How much is this?"],
            ["danh từ số ít", "hoặc nói tên món: How much is the blue dress?"]
          ],
          use: "dùng ở chợ, cửa hàng khi không thấy bảng giá. Câu trả lời: **It is + số tiền**.",
          note: "Đừng nói “How much this?” (thiếu is) hay “How many is this?”. Đầy đủ là **How much is this?**",
          ex: [
            ["How much is this scarf?", "Cái khăn này giá bao nhiêu?"],
            ["How much is that lamp in the window?", "Cái đèn trong tủ kính kia giá bao nhiêu?"],
            ["Excuse me, how much is this?", "Xin lỗi, cái này bao nhiêu tiền?"],
            ["How much is the small one?", "Cái nhỏ giá bao nhiêu?"]
          ] },
        { f: "How much are + these / those / danh từ số nhiều?",
          mean: "**những cái này / kia giá bao nhiêu?**: hỏi giá **nhiều** món hoặc món luôn số nhiều.",
          parts: [
            ["are", "dùng với số nhiều."],
            ["these / those", "chỉ nhiều món ở gần / xa: How much are these?"],
            ["danh từ số nhiều", "shoes, jeans, glasses, mangoes…"]
          ],
          use: "dùng khi hỏi giá giày, quần, kính, trái cây tính theo cân… Câu trả lời: **They are + số tiền** (hoặc They are … each / a kilo).",
          note: "Jeans, shoes, glasses luôn số nhiều nên dùng **are** dù chỉ mua một cái: How much **are** these jeans?",
          ex: [
            ["How much are these sunglasses?", "Cặp kính râm này bao nhiêu tiền?"],
            ["How much are those mangoes? They are forty thousand a kilo.", "Xoài kia bao nhiêu? Bốn mươi nghìn một cân."],
            ["How much are the white sneakers?", "Đôi giày thể thao trắng giá bao nhiêu?"],
            ["How much are they each?", "Mỗi cái bao nhiêu?"]
          ] }
      ],
      p: [
        "Động từ trong câu hỏi giá phải hợp với món đồ: một món dùng **is**, nhiều món hoặc món luôn số nhiều (jeans, shoes, sandals) dùng **are**.",
        "Khi đọc giá, sau con số thì **hundred, thousand, million** không thêm -s: two hundred thousand dong, không phải “two hundreds thousands”. Lý do là con số phía trước đã cho biết số lượng rồi."
      ],
      ex: [["How much is this dress?", "Cái váy này bao nhiêu tiền?"], ["How much are those sandals?", "Đôi dép kia bao nhiêu tiền?"]]
    },
    { h: "I will (I’ll) + động từ nguyên mẫu và it / them khi quyết định mua",
      f: ["I will + động từ nguyên mẫu", "I will take it (một món)", "I will take them (nhiều món, món số nhiều)"],
      items: [
        { f: "I will + động từ nguyên mẫu",
          mean: "**tôi sẽ…**: diễn tả một quyết định **vừa đưa ra ngay lúc nói**.",
          parts: [
            ["I will", "**tôi sẽ**. Khi nói thường rút gọn thành **I’ll**."],
            ["will not", "**sẽ không**, rút gọn là **won’t**: I will not buy it today."],
            ["động từ nguyên mẫu", "take, buy, try, pay, think about…"]
          ],
          use: "dùng trong cửa hàng khi bạn vừa quyết định thử, mua, trả tiền: I will try it on. I will pay by card. Sau will luôn là động từ nguyên mẫu.",
          note: "Không nói “I will to buy” hay “I will buying”. Khi chưa quyết định, nói **I will think about it** (để tôi nghĩ thêm).",
          ex: [
            ["I will try it on.", "Tôi sẽ mặc thử."],
            ["I will pay by credit card.", "Tôi sẽ trả bằng thẻ tín dụng."],
            ["I will think about it. Thank you.", "Để tôi nghĩ thêm. Cảm ơn bạn."],
            ["I will not buy it today, it is too expensive.", "Hôm nay tôi sẽ không mua, đắt quá."]
          ] },
        { f: "I will take it (một món)",
          mean: "**tôi lấy cái này, tôi mua cái này**: câu chốt mua **một** món.",
          parts: [
            ["take", "ở đây nghĩa là **mua, lấy**."],
            ["it", "thay cho **một** món: a shirt, a bag, a hat."],
            ["I will take this one / the red one", "nói rõ hơn món nào khi có nhiều lựa chọn."]
          ],
          use: "nói sau khi thử đồ hoặc hỏi giá xong và quyết định mua. Thường đi sau một nhận xét: It fits well. I will take it.",
          note: "Câu “I take it” nghe thiếu tự nhiên. Hãy dùng **I will take it** hoặc **I’ll take it**.",
          ex: [
            ["It looks great. I will take it.", "Trông đẹp lắm. Tôi lấy cái này."],
            ["OK, I will take the black one.", "Được rồi, tôi lấy cái màu đen."],
            ["I will take it if you give me a small discount.", "Tôi sẽ lấy nếu bạn bớt cho tôi một chút."],
            ["Will you take it? Yes, I will.", "Bạn có lấy không? Có, tôi lấy."]
          ] },
        { f: "I will take them (nhiều món, món số nhiều)",
          mean: "**tôi lấy mấy cái này, tôi mua đôi này**: câu chốt mua **nhiều** món hoặc món luôn số nhiều.",
          parts: [
            ["them", "thay cho **nhiều món** hoặc món luôn số nhiều: shoes, jeans, socks, glasses."],
            ["I will take both", "**tôi lấy cả hai**."],
            ["I will take all of them", "**tôi lấy hết**."]
          ],
          use: "nói khi chốt mua giày, quần, kính hoặc nhiều món cùng lúc. Đi kèm câu nhận xét với **they are**: They are comfortable. I will take them.",
          note: "Với jeans, shoes dùng **them**, không dùng it: These shoes fit. I will take **them**.",
          ex: [
            ["These jeans fit perfectly. I will take them.", "Cái quần bò này vừa lắm. Tôi lấy nó."],
            ["I like both colors. I will take both.", "Tôi thích cả hai màu. Tôi lấy cả hai."],
            ["Those socks are cheap. I will take all of them.", "Mấy đôi tất kia rẻ quá. Tôi lấy hết."],
            ["The glasses are nice, but I will not take them.", "Cặp kính đẹp nhưng tôi sẽ không lấy."]
          ] }
      ],
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
