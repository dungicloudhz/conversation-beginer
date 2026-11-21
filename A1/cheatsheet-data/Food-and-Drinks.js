/* Cheat sheet: Food & Drinks (Ăn gì, uống gì). Hiển thị bởi cheatsheet.js. */
window.A1_CHEAT = {
  goal: [
    "Gọi tên các món ăn, đồ uống quen thuộc và nói mình ăn gì trong ba bữa mỗi ngày.",
    "Phân biệt danh từ đếm được và không đếm được, dùng đúng **a / an**, **some** và **any**.",
    "Nói mình thích món gì và tả vị của món ăn bằng **tastes / smells / looks + tính từ**.",
    "Gọi món lịch sự ở quán cà phê và nhà hàng bằng **Could I have…, please?** và **I would like…**.",
    "Gọi đúng số lượng như two cups of coffee, a bowl of phở, rồi hỏi giá và thanh toán."
  ],
  phrases: [
    { h: "Bữa ăn trong ngày", rows: [
      ["I have bread and eggs for breakfast.", "Tôi ăn bánh mì và trứng vào bữa sáng.", "Nói “ăn bữa gì” dùng **have**, không cần dùng eat."],
      ["I usually have rice for lunch.", "Bữa trưa tôi thường ăn cơm."],
      ["We have dinner together at seven.", "Chúng tôi ăn tối cùng nhau lúc 7 giờ."],
      ["What do you usually have for breakfast?", "Bạn thường ăn sáng món gì?"]
    ]},
    { h: "Gọi đồ uống", rows: [
      ["I would like an iced coffee with milk.", "Cho tôi một ly cà phê sữa đá.", "Khi gọi món thường nói I’d like (I’d = I would)."],
      ["Hot or iced?", "Nóng hay đá?", "Câu nhân viên hay hỏi, nói gọn cho nhanh."],
      ["Less sugar, please.", "Ít đường thôi nhé."],
      ["No ice, please.", "Không đá nhé."],
      ["Would you like something to drink?", "Bạn có muốn uống gì không?"]
    ]},
    { h: "Nói món thích và hương vị", rows: [
      ["My favorite food is phở.", "Món tôi thích nhất là phở."],
      ["I like spicy food.", "Tôi thích đồ ăn cay."],
      ["I do not like durian. It smells too strong.", "Tôi không thích sầu riêng. Mùi của nó nặng quá.", "Dạng rút gọn: I don’t like (don’t = do not)."],
      ["This soup is too salty.", "Món canh này mặn quá."],
      ["It tastes really good!", "Ăn ngon thật đấy!"]
    ]},
    { h: "Gọi món ở nhà hàng", rows: [
      ["A table for two, please.", "Cho tôi một bàn cho hai người."],
      ["Could I see the menu, please?", "Cho tôi xem thực đơn được không?"],
      ["What do you recommend?", "Bạn gợi ý món gì?"],
      ["I would like the fried rice, please.", "Cho tôi món cơm rang.", "Dạng rút gọn: I’d like (I’d = I would)."],
      ["Not too spicy, please.", "Đừng cay quá nhé."]
    ]},
    { h: "Câu nhân viên hay hỏi", rows: [
      ["Are you ready to order?", "Anh chị gọi món chưa ạ?"],
      ["What would you like to drink?", "Anh chị muốn uống gì?"],
      ["For here or to go?", "Dùng ở đây hay mang đi?", "Người Anh nói takeaway thay cho to go."],
      ["Anything else?", "Còn gì nữa không ạ?"],
      ["Enjoy your meal!", "Chúc ngon miệng!"]
    ]},
    { h: "Hỏi giá và thanh toán", rows: [
      ["How much is this?", "Cái này bao nhiêu tiền?"],
      ["It is fifty thousand dong.", "50 nghìn đồng.", "Người bán thường nói It’s fifty thousand dong. (It’s = It is)."],
      ["Can I pay by card?", "Tôi trả bằng thẻ được không?"],
      ["Can I pay by bank transfer?", "Tôi chuyển khoản được không?"],
      ["Could we have the bill, please?", "Cho chúng tôi thanh toán.", "Người Mỹ nói the check thay cho the bill."]
    ]}
  ],
  grammar: [
    { h: "Danh từ đếm được, không đếm được; some và any",
      f: ["a / an + danh từ đếm được số ít", "số + danh từ đếm được thêm -s", "some + danh từ (câu khẳng định, lời mời)", "any + danh từ (câu hỏi, câu phủ định)"],
      items: [
        { f: "a / an + danh từ đếm được số ít",
          mean: "**một** (cái, quả, chiếc…): dùng trước một thứ đếm được, số lượng là một.",
          parts: [
            ["a", "trước từ bắt đầu bằng **âm phụ âm**: a banana, a sandwich, a tomato."],
            ["an", "trước từ bắt đầu bằng **âm nguyên âm** (a, e, i, o, u): an apple, an egg, an orange, an onion."],
            ["danh từ đếm được số ít", "thứ đếm được từng cái: apple, egg, cake, sandwich."]
          ],
          use: "khi nói hoặc gọi đúng một món đếm được. Danh từ đếm được số ít **không được đứng một mình** trong câu.",
          note: "Không dùng a / an với danh từ không đếm được: không nói “a rice”, “a water”. Chọn a hay an theo **âm**, không theo chữ: an hour, a university.",
          ex: [
            ["I eat an egg every morning.", "Sáng nào tôi cũng ăn một quả trứng."],
            ["Can I have a sandwich, please?", "Cho tôi một cái bánh mì kẹp được không?"],
            ["She is eating an orange.", "Cô ấy đang ăn một quả cam."],
            ["Is there a banana in the kitchen?", "Trong bếp có quả chuối nào không?"]
          ] },
        { f: "số + danh từ đếm được thêm -s",
          mean: "**hai, ba… (cái, quả)**: nói số lượng từ hai trở lên của thứ đếm được.",
          parts: [
            ["thêm -s", "phần lớn danh từ: two apples, three cakes."],
            ["thêm -es", "từ tận cùng bằng -o, -s, -sh, -ch: two tomatoes, three sandwiches, four potatoes."],
            ["bất quy tắc", "một số từ đổi dạng: one fish → two fish, one child → two children."]
          ],
          use: "khi mua hàng, gọi món, kể số lượng đồ ăn. Hỏi số lượng: How many…?",
          note: "Người Việt hay quên -s vì tiếng Việt không đổi: nói “two egg” là sai, phải là **two eggs**.",
          ex: [
            ["I would like three bananas, please.", "Cho tôi ba quả chuối."],
            ["We need two tomatoes for the soup.", "Chúng ta cần hai quả cà chua để nấu canh."],
            ["She bought five mangoes at the market.", "Cô ấy đã mua năm quả xoài ở chợ."],
            ["I do not want two sandwiches, just one.", "Tôi không muốn hai cái bánh mì kẹp, chỉ một thôi."]
          ] },
        { f: "some + danh từ (câu khẳng định, lời mời)",
          mean: "**một ít, một vài**: số lượng không nói rõ.",
          parts: [
            ["some + danh từ không đếm được", "một ít: some rice, some water, some milk."],
            ["some + danh từ đếm được số nhiều", "một vài: some eggs, some apples."],
            ["Would you like some…?", "trong **lời mời** vẫn dùng some dù là câu hỏi."]
          ],
          use: "câu khẳng định, khi gọi món, khi mời người khác ăn uống. Câu hỏi xin đồ (Can I have some…?) cũng dùng some.",
          note: "Không dùng some với danh từ đếm được số ít: không nói “some apple”, phải là “an apple” hoặc “some apples”.",
          ex: [
            ["I need some sugar for my coffee.", "Tôi cần một ít đường cho cà phê."],
            ["We bought some apples and some bread.", "Chúng tôi đã mua vài quả táo và một ít bánh mì."],
            ["Would you like some tea?", "Bạn uống chút trà không?"],
            ["Can I have some more rice, please?", "Cho tôi thêm ít cơm được không?"]
          ] },
        { f: "any + danh từ (câu hỏi, câu phủ định)",
          mean: "**nào, chút nào**: dùng trong câu hỏi “có… không?” và câu phủ định “không có… nào”.",
          parts: [
            ["Do you have any…?", "câu hỏi: có… không?"],
            ["not … any", "câu phủ định: không có… nào: We do not have any milk."],
            ["Are there any…?", "hỏi có thứ đếm được số nhiều nào không."]
          ],
          use: "đi với danh từ không đếm được (any milk) hoặc danh từ đếm được số nhiều (any eggs).",
          note: "Câu phủ định đã có not thì dùng **any**, không dùng some: nói “We do not have any bread”, không nói “We do not have some bread”.",
          ex: [
            ["Do you have any fresh fish today?", "Hôm nay có cá tươi không?"],
            ["There is not any coffee left.", "Không còn chút cà phê nào."],
            ["Are there any eggs in the fridge?", "Trong tủ lạnh có quả trứng nào không?"],
            ["I do not eat any meat.", "Tôi không ăn chút thịt nào."]
          ] }
      ],
      p: [
        "Danh từ **đếm được** như apple, egg, banana có thể đi với a / an và thêm -s khi số nhiều: an apple, two eggs. Dùng **an** trước từ bắt đầu bằng âm nguyên âm như apple, egg.",
        "Danh từ **không đếm được** như rice, bread, water, milk không đi với a / an và không thêm -s. Muốn nói số lượng thì dùng đơn vị: two bowls of rice.",
        "Dùng **some** trong câu khẳng định và khi mời hoặc gọi món; dùng **any** trong câu hỏi và câu phủ định."
      ],
      ex: [["I would like some rice.", "Cho tôi một ít cơm."], ["Do you have any milk?", "Bạn có sữa không?"]]
    },
    { h: "Tả vị và mùi: taste, smell, look + tính từ",
      f: ["chủ ngữ + tastes / smells / looks + tính từ", "too + tính từ (quá mức, không thích)"],
      items: [
        { f: "chủ ngữ + tastes / smells / looks + tính từ",
          mean: "**có vị / có mùi / trông** như thế nào: nhận xét món ăn bằng các giác quan.",
          parts: [
            ["tastes", "**có vị** (nếm bằng lưỡi): tastes sweet, tastes salty, tastes delicious."],
            ["smells", "**có mùi** (ngửi bằng mũi): smells good, smells bad, smells nice."],
            ["looks", "**trông** (nhìn bằng mắt): looks delicious, looks fresh, looks spicy."],
            ["tính từ", "đứng ngay sau động từ: good, sweet, salty, sour, bitter, fresh, delicious."]
          ],
          use: "khen hoặc nhận xét món ăn khi được mời, khi ăn ở nhà hàng. Chủ ngữ số ít thêm -s; với this, it, the soup luôn là tastes, smells, looks.",
          note: "Sau ba động từ này dùng **tính từ**, không dùng trạng từ: “It tastes good”, không nói “It tastes well”. Muốn so sánh với một thứ khác dùng **like + danh từ**: It tastes like chicken.",
          ex: [
            ["This mango tastes very sweet.", "Quả xoài này rất ngọt."],
            ["The bread smells fresh.", "Bánh mì có mùi thơm mới nướng."],
            ["Your noodles look delicious!", "Món mì của bạn trông ngon quá!"],
            ["Does the fish smell OK?", "Cá có mùi ổn không?"]
          ] },
        { f: "too + tính từ (quá mức, không thích)",
          mean: "**quá…** đến mức không thích, không ăn được. Mang nghĩa **tiêu cực**.",
          parts: [
            ["too", "“quá” (vượt mức mình chấp nhận): too spicy, too salty, too hot, too sweet."],
            ["very", "chỉ là “rất”, không có ý chê: very spicy có thể vẫn ngon."],
            ["too + tính từ + for me", "quá… đối với tôi: too spicy for me."]
          ],
          use: "phàn nàn nhẹ nhàng hoặc giải thích vì sao không ăn hết. Đặt too ngay trước tính từ.",
          note: "Người Việt hay dùng too để khen (“It is too delicious!”), nhưng như vậy nghe như “ngon quá mức, không tốt”. Khi khen hãy dùng **very** hoặc **really**: It is really delicious!",
          ex: [
            ["This soup is too salty.", "Canh này mặn quá."],
            ["The coffee is too hot. I will wait.", "Cà phê nóng quá. Tôi sẽ đợi một chút."],
            ["Is it too spicy for you?", "Món này có cay quá với bạn không?"],
            ["The cake is not too sweet. I like it.", "Bánh không ngọt quá. Tôi thích."]
          ] }
      ],
      p: [
        "Để nói món ăn có vị, có mùi hay trông như thế nào, đặt **tính từ** ngay sau tastes, smells, looks. Không dùng trạng từ, và không nói “very delicious taste”.",
        "Với chủ ngữ số ít như this cake, the soup, nhớ thêm **-s** vào động từ: tastes, smells, looks.",
        "**Too + tính từ** nghĩa là quá mức đến mức không thích, khác với **very** chỉ là “rất”. It is too spicy for me nghĩa là cay quá, tôi không ăn được."
      ],
      ex: [["The soup smells good.", "Món canh có mùi thơm."], ["That looks delicious!", "Trông ngon quá!"]]
    },
    { h: "Bốn mức lịch sự khi gọi món",
      f: ["I want + món (thẳng, dễ nghe cộc)", "Can I have + món? (thân thiện)", "I would like + món, please (lịch sự)", "Could I have + món, please? (lịch sự nhất)"],
      items: [
        { f: "I want + món (thẳng, dễ nghe cộc)",
          mean: "**tôi muốn…**: nói thẳng mong muốn. Đúng ngữ pháp nhưng khi gọi món dễ nghe **cộc lốc**.",
          parts: [
            ["I want", "nói về mong muốn của mình. Hợp khi nói với người thân, bạn bè, không hợp khi gọi món với nhân viên."],
            ["I want to + động từ nguyên mẫu", "muốn làm gì: I want to try the noodles."]
          ],
          use: "dùng trong gia đình, với bạn bè khi bàn nên ăn gì. Ở nhà hàng, hãy đổi sang Can I have hoặc I would like.",
          note: "Câu “I want a coffee” với nhân viên phục vụ nghe như ra lệnh. Câu “Give me…” còn cộc hơn, nên tránh hẳn.",
          ex: [
            ["Mum, I want chicken for dinner.", "Mẹ ơi, con muốn ăn gà vào bữa tối."],
            ["I want to try Hue beef noodles.", "Tôi muốn thử bún bò Huế."],
            ["Do you want pizza or rice tonight?", "Tối nay bạn muốn ăn pizza hay cơm?"],
            ["I do not want anything spicy.", "Tôi không muốn món gì cay."]
          ] },
        { f: "Can I have + món? (thân thiện)",
          mean: "**cho tôi… được không?**: cách gọi món **thân thiện**, rất phổ biến.",
          parts: [
            ["Can I have", "“tôi có thể có…”, nhẹ nhàng, tự nhiên. Ở Mỹ cũng hay nói **Can I get**."],
            ["món", "a coffee, the chicken salad, some water, the bill."]
          ],
          use: "gọi đồ ở quán cà phê, quán ăn bình dân, cửa hàng đồ ăn nhanh. Cũng dùng để xin hóa đơn: Can I have the bill?",
          note: "Thêm **please** để lịch sự hơn. Chủ ngữ là **I** (tôi nhận), không nói “Can you have…”.",
          ex: [
            ["Can I have a chicken sandwich, please?", "Cho tôi một bánh mì kẹp gà được không?"],
            ["Can I have the menu, please?", "Cho tôi xem thực đơn được không?"],
            ["Can I have some more ice?", "Cho tôi thêm ít đá được không?"],
            ["Can I have the bill, please?", "Cho tôi hóa đơn nhé."]
          ] },
        { f: "I would like + món, please (lịch sự)",
          mean: "**tôi muốn gọi…**: cách gọi món **lịch sự**, mềm hơn I want.",
          parts: [
            ["I would like", "lịch sự hơn I want. Khi nói thường rút gọn **I’d like**."],
            ["I would like to + động từ nguyên mẫu", "muốn làm gì: I would like to order, I would like to pay."],
            ["please", "đặt ở cuối câu."]
          ],
          use: "gọi món ở nhà hàng, đặt bàn, nói với nhân viên. Câu hỏi tương ứng của nhân viên: What would you like?",
          note: "Đừng nhầm **I would like** (tôi muốn, lịch sự) với **I like** (tôi thích nói chung): “I like fish” là sở thích, “I would like the fish” là gọi món cá.",
          ex: [
            ["I would like the grilled fish, please.", "Cho tôi món cá nướng."],
            ["I’d like a glass of orange juice, please.", "Cho tôi một ly nước cam."],
            ["I would like to order now.", "Tôi muốn gọi món bây giờ."],
            ["We would like a table for four, please.", "Chúng tôi muốn một bàn cho bốn người."]
          ] },
        { f: "Could I have + món, please? (lịch sự nhất)",
          mean: "**cho tôi xin… được không ạ?**: cách gọi món **lịch sự nhất** trong bốn cách.",
          parts: [
            ["Could I have", "nhẹ nhàng hơn Can I have. Could ở đây không mang nghĩa quá khứ."],
            ["please", "gần như luôn có, đặt trước dấu hỏi."]
          ],
          use: "nhà hàng sang trọng, khi nhờ thêm một thứ, hoặc khi muốn rất lịch sự với nhân viên.",
          note: "Cả bốn cách đều đúng ngữ pháp; khác nhau ở **mức lịch sự**. Nếu phân vân, dùng Could I have… please? luôn an toàn.",
          ex: [
            ["Could I have a cup of green tea, please?", "Cho tôi xin một tách trà xanh được không ạ?"],
            ["Could I have the soup of the day, please?", "Cho tôi món súp trong ngày được không ạ?"],
            ["Could I have another spoon, please?", "Cho tôi xin thêm một cái thìa được không ạ?"],
            ["Could I have the steak without onions, please?", "Cho tôi món bít tết không có hành được không ạ?"]
          ] }
      ],
      p: [
        "**I want** đúng ngữ pháp nhưng khi gọi món nghe khá cộc, còn **Give me…** nghe như ra lệnh. Với nhân viên phục vụ, nên dùng một trong ba cách còn lại.",
        "**Can I have…?** thân thiện, rất phổ biến ở quán cà phê. **I would like…** (thường nói I’d like) và **Could I have…, please?** lịch sự hơn, hợp với nhà hàng.",
        "Luôn thêm **please** ở cuối câu; chỉ một từ này đã làm câu gọi món nghe dễ chịu hơn nhiều."
      ],
      ex: [["Could I have a coffee, please?", "Cho tôi một ly cà phê được không?"], ["Can I have a glass of water?", "Cho tôi một cốc nước được không?"]]
    },
    { h: "Đơn vị đi kèm và cách gọi nhiều phần",
      f: ["a cup / glass / bottle / bowl / plate / slice + of + đồ ăn hoặc đồ uống", "số + đơn vị thêm -s + of + đồ ăn hoặc đồ uống"],
      items: [
        { f: "a cup / glass / bottle / bowl / plate / slice + of + đồ ăn hoặc đồ uống",
          mean: "**một tách / ly / chai / tô / đĩa / lát…**: dùng đơn vị để đếm đồ ăn, đồ uống không đếm được.",
          parts: [
            ["a cup of", "một **tách, cốc** (đồ uống nóng): a cup of tea, a cup of coffee."],
            ["a glass of", "một **ly thủy tinh** (đồ uống lạnh): a glass of water, a glass of milk."],
            ["a bottle of", "một **chai**: a bottle of water, a bottle of juice."],
            ["a bowl of", "một **bát, tô** (món có nước hoặc cơm): a bowl of rice, a bowl of soup."],
            ["a plate of", "một **đĩa**: a plate of fried rice, a plate of chicken."],
            ["a slice of", "một **lát, miếng mỏng**: a slice of bread, a slice of cake, a slice of pizza."]
          ],
          use: "gọi món, mua hàng, kể mình đã ăn uống gì. Luôn có **of** giữa đơn vị và tên đồ ăn.",
          note: "Không bỏ of: nói “a cup tea” là sai. Đồ ăn, đồ uống phía sau giữ nguyên, không thêm a.",
          ex: [
            ["I drink a glass of milk before bed.", "Tôi uống một ly sữa trước khi ngủ."],
            ["Can I have a bowl of chicken soup, please?", "Cho tôi một bát súp gà được không?"],
            ["She ate a slice of pizza for lunch.", "Cô ấy ăn một miếng pizza vào bữa trưa."],
            ["Could I have a plate of fried rice and a bottle of water?", "Cho tôi một đĩa cơm chiên và một chai nước được không?"]
          ] },
        { f: "số + đơn vị thêm -s + of + đồ ăn hoặc đồ uống",
          mean: "**hai, ba… tách / ly / tô…**: gọi hoặc nói nhiều phần.",
          parts: [
            ["đơn vị thêm -s", "two cups, three bottles, four plates, two slices."],
            ["đơn vị thêm -es", "từ tận cùng -ss, -sh, -ch: two glasses (hai ly), two boxes (hai hộp), two bunches (hai nải, hai chùm)."],
            ["đồ ăn hoặc đồ uống", "**giữ nguyên**, không thêm -s: two cups of coffee, không nói “coffees”."]
          ],
          use: "khi gọi cho cả nhóm, đi chợ, nấu ăn theo công thức. Hỏi số lượng: How many cups of…?",
          note: "Thêm -s vào **đơn vị**, không vào đồ uống: “two glass of waters” là sai, phải là **two glasses of water**.",
          ex: [
            ["Three bowls of phở, please.", "Cho ba tô phở."],
            ["I drink two glasses of water after running.", "Tôi uống hai ly nước sau khi chạy bộ."],
            ["We need four bottles of juice for the party.", "Chúng ta cần bốn chai nước trái cây cho bữa tiệc."],
            ["How many cups of coffee do you drink a day?", "Mỗi ngày bạn uống bao nhiêu tách cà phê?"]
          ] }
      ],
      p: [
        "Đồ uống và nhiều món ăn là danh từ không đếm được, nên phải dùng **đơn vị** để đếm: a cup of tea, a bottle of water, a bowl of phở, a slice of cake.",
        "Khi gọi nhiều phần, thêm **-s** hoặc **-es** vào **đơn vị**, không thêm vào đồ uống: two cups of coffee, three glasses of water."
      ],
      ex: [["Two cups of coffee, please.", "Cho hai tách cà phê."], ["A bowl of phở and a glass of orange juice, please.", "Cho một tô phở và một ly nước cam."]]
    },
    { h: "How much và How many",
      f: ["How many + danh từ đếm được số nhiều?", "How much + danh từ không đếm được?", "How much is / are + món hàng? (hỏi giá)"],
      items: [
        { f: "How many + danh từ đếm được số nhiều?",
          mean: "**bao nhiêu (cái, quả…)?**: hỏi số lượng của thứ **đếm được**.",
          parts: [
            ["How many", "“bao nhiêu” với thứ đếm được."],
            ["danh từ đếm được số nhiều", "luôn thêm -s: eggs, apples, bananas, people."],
            ["do you need / want / have", "phần câu hỏi phía sau, mượn trợ động từ do: How many eggs do you need?"]
          ],
          use: "hỏi số lượng khi đi chợ, nấu ăn, đặt bàn. Trả lời bằng số: Six, please. Two eggs.",
          note: "Không nói “How many egg”. Sau How many danh từ luôn ở số nhiều.",
          ex: [
            ["How many apples do you want?", "Bạn muốn mấy quả táo?"],
            ["How many people are coming to dinner?", "Có bao nhiêu người đến ăn tối?"],
            ["How many tomatoes do we need for this dish?", "Món này cần bao nhiêu quả cà chua?"],
            ["How many bananas are there on the table?", "Trên bàn có bao nhiêu quả chuối?"]
          ] },
        { f: "How much + danh từ không đếm được?",
          mean: "**bao nhiêu (lượng)?**: hỏi lượng của thứ **không đếm được**.",
          parts: [
            ["How much", "“bao nhiêu” với thứ không đếm được."],
            ["danh từ không đếm được", "không thêm -s: sugar, rice, milk, water, salt, meat."]
          ],
          use: "hỏi lượng khi pha đồ uống, nấu ăn. Trả lời bằng đơn vị hoặc lượng: A little, please. Two spoons. One kilo.",
          note: "Phân biệt: **How many** + thứ đếm được, **How much** + thứ không đếm được. Rice không đếm được nên hỏi “How much rice…?”.",
          ex: [
            ["How much sugar do you take in your tea?", "Bạn cho bao nhiêu đường vào trà?"],
            ["How much rice should I cook?", "Tôi nên nấu bao nhiêu gạo?"],
            ["How much water do you drink every day?", "Mỗi ngày bạn uống bao nhiêu nước?"],
            ["How much meat do we need? About one kilo.", "Chúng ta cần bao nhiêu thịt? Khoảng một cân."]
          ] },
        { f: "How much is / are + món hàng? (hỏi giá)",
          mean: "**(món này) bao nhiêu tiền?**: hỏi giá.",
          parts: [
            ["How much is", "dùng với **một món** hoặc danh từ không đếm được: How much is this cake? How much is the coffee?"],
            ["How much are", "dùng với **danh từ số nhiều**: How much are the oranges?"],
            ["How much does it cost?", "cách hỏi khác, cùng nghĩa."]
          ],
          use: "hỏi giá ở chợ, cửa hàng, quán ăn. Trả lời: It is fifty thousand dong. They are twenty thousand a kilo.",
          note: "Hỏi giá **luôn** dùng How much, kể cả với thứ đếm được: không nói “How many are the oranges?”.",
          ex: [
            ["How much is a bowl of phở here?", "Ở đây một tô phở bao nhiêu tiền?"],
            ["How much are these strawberries?", "Dâu tây này bao nhiêu tiền?"],
            ["How much is the milk tea?", "Trà sữa bao nhiêu tiền?"],
            ["How much are the eggs? They are three thousand each.", "Trứng bao nhiêu tiền? Ba nghìn một quả."]
          ] }
      ],
      p: [
        "Hỏi số lượng thứ đếm được thì dùng **How many**: How many eggs do you need? Hỏi lượng thứ không đếm được thì dùng **How much**: How much sugar do you want?",
        "Khi hỏi giá, luôn dùng **How much**. Dùng **is** cho một món và **are** cho món ở số nhiều như the mangoes."
      ],
      ex: [["How much are the mangoes?", "Xoài bao nhiêu tiền?"], ["How many eggs do you need?", "Bạn cần bao nhiêu quả trứng?"]]
    }
  ],
  mistakes: [
    ["I want a bread and two rices.", "I want some bread and two bowls of rice.", "Bread và rice là danh từ **không đếm được**: không có a, không thêm -s, phải dùng đơn vị."],
    ["This food is very delicious taste.", "This food tastes delicious.", "Dùng **tastes + tính từ** để tả vị."],
    ["Give me a coffee.", "Could I have a coffee, please?", "Give me nghe như ra lệnh; **Could I have…, please?** mới lịch sự."],
    ["Two cup of coffees, please.", "Two cups of coffee, please.", "Thêm **-s** vào đơn vị **cups**, không thêm vào coffee."],
    ["I would like a apple.", "I would like an apple.", "Trước từ bắt đầu bằng âm nguyên âm dùng **an**."],
    ["Do you have some milk?", "Do you have any milk?", "Câu hỏi thông thường dùng **any**; some dùng cho câu khẳng định và lời mời."],
    ["This soup smell good.", "This soup smells good.", "Chủ ngữ số ít nên động từ thêm **-s**: smells."]
  ],
  vocab: [
    ["rice", "cơm, gạo"], ["noodle soup", "phở, bún nước"], ["bread", "bánh mì"], ["chicken", "thịt gà"],
    ["beef", "thịt bò"], ["pork", "thịt lợn"], ["seafood", "hải sản"], ["vegetables", "rau củ"],
    ["fruit", "trái cây"], ["dessert", "món tráng miệng"], ["coffee", "cà phê"], ["orange juice", "nước cam"],
    ["coconut water", "nước dừa"], ["smoothie", "sinh tố"], ["sweet", "ngọt"], ["salty", "mặn"],
    ["spicy", "cay"], ["sour", "chua"], ["bitter", "đắng"], ["delicious", "ngon"],
    ["menu", "thực đơn"], ["bill", "hóa đơn (người Mỹ nói check)"], ["main course", "món chính"], ["allergic to", "bị dị ứng với"]
  ],
  tips: [
    "Mỗi ngày nói bằng tiếng Anh bạn đã ăn gì trong ba bữa: “I had phở for breakfast.”",
    "Khi gọi món, tập thói quen dùng **Could I have…, please?** thay cho I want hay Give me.",
    "Học đơn vị theo cặp với món: **a cup of** tea, **a bowl of** phở, **a glass of** juice, **a slice of** cake.",
    "Tả 5 món ăn quen thuộc bằng **tastes + tính từ** như sweet, salty, spicy, sour; thêm **too** khi muốn nói “quá”.",
    "Khi được mời món lạ, nói **I would love to try it!** để nhận lời (thường nói I’d love), hoặc **No, thank you. I am full.** để từ chối lịch sự."
  ]
};
