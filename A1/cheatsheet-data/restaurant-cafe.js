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
      items: [
        { f: "Table for + số người, please.",
          mean: "**cho tôi một bàn … người**. Câu rút gọn chỉ gồm cụm danh từ, nói ngay khi bước vào quán để xin chỗ ngồi.",
          parts: [
            ["Table", "**bàn**. Không cần a phía trước vì đây là câu rút gọn."],
            ["for + số người", "**cho bao nhiêu người**: for one, for two, for four. Luôn dùng **for**."],
            ["please", "**làm ơn**. Chữ này làm câu ngắn trở nên lịch sự."]
          ],
          use: "dùng khi vào nhà hàng chưa đặt bàn trước, nói với nhân viên đón khách ở cửa. Có thể thêm vị trí mong muốn ở cuối: by the window (cạnh cửa sổ), outside (ngoài trời).",
          note: "Người Việt hay nói “Table of two” hoặc “Two people table”. Đúng là **Table for two**. Nếu đi một mình: Table for one, please.",
          ex: [
            ["Table for one, please.", "Cho tôi một bàn một người."],
            ["Table for three by the window, please.", "Cho tôi bàn ba người cạnh cửa sổ."],
            ["Hi, table for six, please. We do not have a reservation.", "Chào bạn, cho bàn sáu người. Chúng tôi chưa đặt trước."],
            ["Can we have a table for two outside?", "Cho chúng tôi một bàn hai người ngoài trời được không?"]
          ] },
        { f: "How many + danh từ đếm được số nhiều?",
          mean: "**bao nhiêu (cái, người)?**. Câu hỏi về số lượng của thứ đếm được từng cái một.",
          parts: [
            ["How many", "**bao nhiêu**, chỉ dùng với danh từ **đếm được**."],
            ["danh từ số nhiều", "luôn thêm -s hoặc dùng dạng số nhiều: people, tables, coffees, menus."],
            ["How many?", "trong nhà hàng, nhân viên có thể hỏi ngắn chỉ hai từ, ý là “mấy người?”."]
          ],
          use: "nhân viên dùng để hỏi số người; khách dùng để hỏi số lượng món: How many spring rolls are there in one plate? Sau danh từ có thể thêm are there, do you want…",
          note: "Đừng dùng How many cho giá tiền hay danh từ không đếm được (sugar, water); những trường hợp đó dùng **How much**.",
          ex: [
            ["How many people are in your group?", "Nhóm của bạn có bao nhiêu người?"],
            ["How many spring rolls are there on one plate?", "Một đĩa có mấy cái chả giò?"],
            ["How many coffees would you like?", "Bạn muốn mấy ly cà phê?"],
            ["How many tables are free now?", "Bây giờ còn bao nhiêu bàn trống?"]
          ] },
        { f: "How long + is the wait?",
          mean: "**phải chờ bao lâu?**. Hỏi về khoảng thời gian chờ đến lượt có bàn hoặc có món.",
          parts: [
            ["How long", "**bao lâu**: hỏi về khoảng thời gian, không phải giờ cụ thể (What time)."],
            ["the wait", "**thời gian chờ**. Ở đây wait là danh từ."],
            ["How long do we have to wait?", "câu dài hơn, nghĩa giống: “chúng tôi phải chờ bao lâu?”."]
          ],
          use: "hỏi khi quán đông hết bàn hoặc khi món lâu ra. Câu trả lời thường là **About + số + minutes**: About fifteen minutes.",
          note: "Không nhầm How long (bao lâu) với **What time** (mấy giờ). Trả lời How long bằng khoảng thời gian, không bằng giờ trên đồng hồ.",
          ex: [
            ["Excuse me, how long is the wait for a table?", "Xin lỗi, chờ bàn mất bao lâu?"],
            ["How long do we have to wait for our food?", "Chúng tôi phải chờ món bao lâu nữa?"],
            ["The wait is about twenty minutes.", "Thời gian chờ khoảng hai mươi phút."],
            ["How long will it take to make the pizza?", "Làm pizza mất bao lâu?"]
          ] },
        { f: "under + tên người đặt",
          mean: "**đặt dưới tên…**: cho biết bàn đã được đặt trước bằng tên của ai.",
          parts: [
            ["under", "**dưới tên** (trong tình huống đặt chỗ). Không phải nghĩa “bên dưới”."],
            ["a reservation / a booking", "**một chỗ đặt trước**: I have a reservation under Minh."],
            ["What name is it under?", "câu nhân viên hỏi: “Đặt dưới tên gì ạ?”."]
          ],
          use: "dùng khi đến nhà hàng đã đặt trước hoặc khi gọi điện đặt bàn. Sau under là tên hoặc họ của người đặt.",
          note: "Đừng nói “in the name Lan” thiếu of; có thể nói **in the name of Lan** hoặc gọn hơn **under Lan**.",
          ex: [
            ["I have a reservation under Nguyen.", "Tôi có đặt bàn dưới tên Nguyễn."],
            ["What name is the booking under?", "Bàn được đặt dưới tên gì ạ?"],
            ["It is under Mai, for four people at seven.", "Đặt dưới tên Mai, bốn người, lúc 7 giờ."],
            ["Is there a table under Tom Smith?", "Có bàn nào đặt dưới tên Tom Smith không?"]
          ] }
      ],
      p: [
        "Ở nhà hàng, người ta thường nói rất ngắn bằng **cụm danh từ**, không cần động từ: Table for two, please. Câu này đầy đủ ý và hoàn toàn lịch sự nhờ chữ please.",
        "Nhân viên hỏi số người bằng **How many people?** vì people là danh từ đếm được. Muốn hỏi phải chờ bao lâu thì dùng **How long**.",
        "**Under + tên** nghĩa là đặt bàn dưới tên ai: I have a reservation under Lan."
      ],
      ex: [["Table for four, please.", "Cho tôi bàn bốn người."], ["How long is the wait?", "Phải chờ bao lâu?"]]
    },
    { h: "would like, Can I have và I will have",
      f: ["I would like + danh từ", "I would like to + động từ nguyên mẫu", "Would you like + danh từ?", "Can I have + món?", "I will have + món"],
      items: [
        { f: "I would like + danh từ",
          mean: "**tôi muốn (có) một thứ gì đó**. Cách gọi đồ lịch sự, dùng được ở mọi nơi từ quán cà phê đến nhà hàng sang trọng.",
          parts: [
            ["I would like", "**tôi muốn**. Khi nói thường rút gọn thành **I’d like**. Lịch sự hơn I want."],
            ["danh từ", "thứ bạn muốn, thường có a / an / some: a coffee, some water, the soup."],
            ["please", "thêm ở cuối câu cho thêm lịch sự."]
          ],
          use: "dùng khi gọi đồ ăn, đồ uống hoặc xin một thứ gì đó. Sau would like là **danh từ** (không có to).",
          note: "**I want a coffee** đúng ngữ pháp nhưng nghe thẳng, hơi giống ra lệnh. Với nhân viên hãy dùng **I would like…, please**.",
          ex: [
            ["I would like a glass of orange juice, please.", "Cho tôi một ly nước cam."],
            ["I would like the chicken salad.", "Tôi muốn món salad gà."],
            ["We would like two iced teas, please.", "Cho chúng tôi hai ly trà đá."],
            ["I would like the bill, please.", "Cho tôi xin hóa đơn."]
          ] },
        { f: "I would like to + động từ nguyên mẫu",
          mean: "**tôi muốn làm một việc gì đó**. Giống mẫu trên nhưng theo sau là một hành động chứ không phải một món đồ.",
          parts: [
            ["I would like to", "**tôi muốn**. Có **to** vì sau đó là động từ."],
            ["động từ nguyên mẫu", "việc muốn làm: order (gọi món), pay (trả tiền), book (đặt bàn), sit (ngồi)."]
          ],
          use: "dùng khi muốn gọi món, trả tiền, đặt bàn, đổi chỗ ngồi. Động từ sau to luôn ở dạng nguyên mẫu.",
          note: "So sánh: **I would like a coffee** (danh từ, không to) và **I would like to order** (động từ, có to). Đừng nói “I would like order”.",
          ex: [
            ["I would like to order now, please.", "Tôi muốn gọi món bây giờ."],
            ["I would like to pay by card.", "Tôi muốn trả bằng thẻ."],
            ["We would like to sit near the window.", "Chúng tôi muốn ngồi gần cửa sổ."],
            ["I would like to try the local coffee.", "Tôi muốn thử cà phê địa phương."]
          ] },
        { f: "Would you like + danh từ?",
          mean: "**bạn có muốn… không?**. Câu mời lịch sự; nhân viên dùng để mời khách, bạn bè dùng để mời nhau.",
          parts: [
            ["Would you like", "**bạn có muốn**. Lịch sự hơn Do you want."],
            ["danh từ", "thứ được mời: some water, a dessert, anything else."],
            ["Would you like to + động từ nguyên mẫu?", "mời làm việc gì: Would you like to order?"]
          ],
          use: "nghe khi nhân viên mời bạn đồ uống, món tráng miệng hoặc hỏi bạn đã sẵn sàng gọi món chưa. Trả lời: **Yes, please.** hoặc **No, thank you.**",
          note: "Đừng trả lời “Yes, I would like” (thiếu tân ngữ). Câu đúng: **Yes, please** hoặc **Yes, I would like a dessert**.",
          ex: [
            ["Would you like some more water?", "Bạn có muốn thêm nước không?"],
            ["Would you like a dessert? No, thank you.", "Bạn có muốn món tráng miệng không? Không, cảm ơn."],
            ["Would you like anything else?", "Bạn có cần gì thêm không?"],
            ["Would you like to see the menu?", "Bạn có muốn xem thực đơn không?"]
          ] },
        { f: "Can I have + món?",
          mean: "**cho tôi… được không?**. Cách gọi đồ thân mật, tự nhiên, rất hay nghe ở quán cà phê và quán ăn bình dân.",
          parts: [
            ["Can I have", "**cho tôi**. Thân mật, ngắn gọn."],
            ["Could I have", "**cho tôi… được không ạ**. Lịch sự hơn một chút, dùng ở nhà hàng sang trọng hơn."],
            ["please", "đặt ở cuối câu để lời gọi lịch sự."]
          ],
          use: "dùng khi gọi món hoặc xin thêm một thứ gì đó. Sau have là danh từ chỉ món hoặc vật: a latte, the menu, some ice.",
          note: "Đây là câu hỏi nhưng thực chất là một lời yêu cầu, nên lên giọng nhẹ ở cuối và luôn thêm **please**.",
          ex: [
            ["Can I have a small latte, please?", "Cho tôi một ly latte nhỏ nhé."],
            ["Could I have the menu, please?", "Cho tôi xin thực đơn được không ạ?"],
            ["Can I have some ice, please?", "Cho tôi ít đá nhé."],
            ["Can we have two bowls of noodle soup, please?", "Cho chúng tôi hai bát mì nước nhé."]
          ] },
        { f: "I will have + món",
          mean: "**tôi sẽ lấy món…, tôi chọn món…**. Dùng khi vừa quyết định xong món ngay lúc nói.",
          parts: [
            ["I will have", "**tôi chọn, tôi lấy**. Khi nói thường rút gọn thành **I’ll have**."],
            ["the same", "**giống vậy**: I will have the same (tôi gọi giống bạn ấy)."]
          ],
          use: "dùng khi nhân viên hỏi “What would you like?” và bạn đã chọn xong. Sau I will have là tên món, thường có the hoặc a.",
          note: "Không nói “I take the soup”. Khi bạn bè đã gọi một món và bạn muốn giống, chỉ cần nói **I will have the same, please**.",
          ex: [
            ["I will have the fish and chips, please.", "Cho tôi món cá với khoai tây chiên."],
            ["I will have a cappuccino to go.", "Tôi lấy một ly cappuccino mang đi."],
            ["I will have the same, please.", "Cho tôi món giống vậy."],
            ["What will you have, Nam?", "Nam gọi món gì?"]
          ] }
      ],
      p: [
        "**I want a coffee** đúng ngữ pháp nhưng hơi thẳng khi nói với nhân viên. **I would like…** (thường nói I’d like) là cách gọi lịch sự, dùng được ở mọi nơi.",
        "**Can I have…?** thân mật, hay dùng ở quán bình dân và quán cà phê. Nhân viên mời bạn bằng **Would you like…?**.",
        "**I will have…** (thường nói I’ll have) dùng khi bạn vừa quyết định xong món mình chọn."
      ],
      ex: [["I would like a coffee, please.", "Cho tôi một ly cà phê."], ["I will have the soup.", "Tôi chọn món súp."]]
    },
    { h: "Danh từ đếm được và không đếm được khi gọi đồ",
      f: ["a / two + danh từ đếm được (thêm -s khi số nhiều)", "some / a cup of / a glass of + danh từ không đếm được", "How many / How much + danh từ"],
      items: [
        { f: "a / two + danh từ đếm được (thêm -s khi số nhiều)",
          mean: "**một / hai cái…**: đếm trực tiếp những món có thể đếm từng cái (một chiếc bánh, hai ly cà phê).",
          parts: [
            ["a / an", "**một**, dùng với danh từ số ít: a sandwich, an orange juice (an trước nguyên âm)."],
            ["two, three…", "**số đếm** trước danh từ số nhiều: two muffins, three coffees."],
            ["-s / -es", "đuôi số nhiều: coffee → coffees, sandwich → sandwiches."]
          ],
          use: "dùng khi gọi số lượng món ăn, đồ uống ở quán. Trong quán, coffee, tea, juice được hiểu là “một ly” nên có thể đếm: two coffees.",
          note: "Đừng quên **-s** khi số nhiều: không nói “two coffee”. Và đừng quên **a** khi số ít: không nói “I would like sandwich”.",
          ex: [
            ["A croissant and two coffees, please.", "Cho một bánh sừng bò và hai ly cà phê."],
            ["Can I have three sandwiches to go?", "Cho tôi ba cái bánh mì kẹp mang đi."],
            ["I would like an orange juice.", "Tôi muốn một ly nước cam."],
            ["We do not need two menus, one is fine.", "Chúng tôi không cần hai cuốn thực đơn, một cuốn là được."]
          ] },
        { f: "some / a cup of / a glass of + danh từ không đếm được",
          mean: "**một ít / một tách / một ly…** những thứ không đếm từng cái được như nước, trà, sữa, đường.",
          parts: [
            ["some", "**một ít**, không nói rõ bao nhiêu: some water, some sugar."],
            ["a cup of", "**một tách, một cốc** (thường đồ uống nóng): a cup of tea, a cup of coffee."],
            ["a glass of", "**một ly thủy tinh** (thường đồ uống lạnh): a glass of water, a glass of wine."],
            ["a bottle of / a bowl of", "**một chai** (a bottle of water), **một bát** (a bowl of rice)."]
          ],
          use: "dùng khi gọi đồ uống hoặc xin thêm gia vị. Muốn số nhiều thì thêm -s vào đơn vị, không thêm vào danh từ: two **glasses** of water.",
          note: "Lỗi hay gặp: “two waters”, “two glass of water”. Đúng là **two glasses of water**. Danh từ không đếm được không bao giờ thêm -s.",
          ex: [
            ["Can I have some milk for my coffee?", "Cho tôi ít sữa để pha cà phê được không?"],
            ["I would like a cup of green tea, please.", "Cho tôi một tách trà xanh."],
            ["Two glasses of water, please.", "Cho hai ly nước."],
            ["Could we have a bottle of sparkling water?", "Cho chúng tôi một chai nước có ga được không?"]
          ] },
        { f: "How many / How much + danh từ",
          mean: "**bao nhiêu?**: How many hỏi số lượng thứ **đếm được**, How much hỏi lượng thứ **không đếm được** (và hỏi giá).",
          parts: [
            ["How many", "+ danh từ đếm được số nhiều: How many cups? How many people?"],
            ["How much", "+ danh từ không đếm được: How much sugar? How much milk?"],
            ["How much is it?", "khi không có danh từ phía sau, How much còn dùng để **hỏi giá**."]
          ],
          use: "nhân viên hỏi để biết bạn muốn bao nhiêu; bạn hỏi để biết số lượng trong món. Sau danh từ thường là do you want / would you like.",
          note: "Mẹo nhớ: đếm được bằng số (one, two, three) thì dùng **many**; phải đo, phải rót thì dùng **much**.",
          ex: [
            ["How much sugar would you like?", "Bạn muốn bao nhiêu đường?"],
            ["How many cups of coffee do you drink a day?", "Mỗi ngày bạn uống mấy tách cà phê?"],
            ["How much ice do you want? Just a little, please.", "Bạn muốn bao nhiêu đá? Một ít thôi."],
            ["How many slices of cake are left?", "Còn lại mấy miếng bánh?"]
          ] }
      ],
      p: [
        "Khi gọi ở quán, coffee được hiểu là “một ly” nên có thể đếm: **Two coffees, please**.",
        "Nước, trà, đường là danh từ **không đếm được**. Không nói “two waters” trong tình huống trang trọng; hãy nói **two glasses of water** hoặc **two bottles of water**.",
        "Hỏi số lượng thứ không đếm được thì dùng **How much**: How much sugar do you want?"
      ],
      ex: [["A cup of tea, please.", "Cho một tách trà."], ["Two glasses of water, please.", "Cho hai cốc nước."]]
    },
    { h: "Could you…? và Is there any…? Are there any…?",
      f: ["Could you + động từ nguyên mẫu?", "Is there any + danh từ không đếm được?", "Are there any + danh từ số nhiều?", "allergic to + danh từ"],
      items: [
        { f: "Could you + động từ nguyên mẫu?",
          mean: "**bạn làm giúp… được không?**. Lời nhờ lịch sự gửi tới nhân viên hoặc người lạ.",
          parts: [
            ["Could you", "**bạn có thể… được không**. Lịch sự, dùng với nhân viên, người lạ."],
            ["Can you", "nghĩa giống nhưng thân mật hơn, dùng với bạn bè."],
            ["Could we / Could I", "đổi chủ ngữ để xin cho mình: Could we have…?, Could I get…?"]
          ],
          use: "dùng khi nhờ mang thêm đồ, đổi món, gói đồ ăn mang về. Sau Could you là động từ nguyên mẫu; thêm please ở cuối.",
          note: "Đây là lời nhờ chứ không hỏi khả năng, nên nhân viên sẽ trả lời **Sure** hoặc **Of course**, không trả lời “Yes, I could”.",
          ex: [
            ["Could you bring us the bill, please?", "Bạn mang hóa đơn cho chúng tôi được không?"],
            ["Could you put this in a box for me?", "Bạn gói phần này vào hộp giúp tôi được không?"],
            ["Could you turn down the music a little?", "Bạn vặn nhỏ nhạc một chút được không?"],
            ["Could I get a straw, please?", "Cho tôi một cái ống hút được không?"]
          ] },
        { f: "Is there any + danh từ không đếm được?",
          mean: "**có… không?** (trong món ăn, trong quán): hỏi xem có một thứ không đếm được hay không.",
          parts: [
            ["Is there", "**có… không**, dùng **is** vì danh từ phía sau không đếm được."],
            ["any", "**chút nào, gì**: dùng trong câu hỏi và câu phủ định."],
            ["danh từ không đếm được", "meat, milk, sugar, fish sauce, garlic, Wi-Fi."]
          ],
          use: "hỏi thành phần món ăn trước khi gọi, nhất là khi ăn chay hoặc bị dị ứng. Có thể thêm in this, in the soup ở cuối câu.",
          note: "Câu trả lời: **Yes, there is some.** hoặc **No, there is not any.** Đừng dùng are với danh từ không đếm được.",
          ex: [
            ["Is there any meat in this soup?", "Súp này có thịt không?"],
            ["Is there any milk in the smoothie?", "Sinh tố này có sữa không?"],
            ["Is there any free Wi-Fi here?", "Ở đây có Wi-Fi miễn phí không?"],
            ["There is not any sugar in it, right?", "Trong này không có đường, đúng không?"]
          ] },
        { f: "Are there any + danh từ số nhiều?",
          mean: "**có… nào không?**: hỏi xem có những thứ đếm được (số nhiều) hay không.",
          parts: [
            ["Are there", "**có… không**, dùng **are** vì danh từ phía sau ở số nhiều."],
            ["any", "**nào**, dùng trong câu hỏi và câu phủ định."],
            ["danh từ số nhiều", "nuts, eggs, onions, vegetarian dishes, free tables."]
          ],
          use: "hỏi về nguyên liệu đếm được trong món hoặc hỏi quán có loại món nào không: Are there any vegetarian dishes?",
          note: "Phân biệt: **Is there any milk?** (không đếm được) và **Are there any eggs?** (đếm được, số nhiều). Nhớ thêm -s cho danh từ.",
          ex: [
            ["Are there any eggs in this cake?", "Bánh này có trứng không?"],
            ["Are there any vegetarian dishes on the menu?", "Thực đơn có món chay nào không?"],
            ["Are there any free tables upstairs?", "Trên lầu còn bàn trống nào không?"],
            ["There are not any peanuts in it, are there?", "Trong này không có đậu phộng, phải không?"]
          ] },
        { f: "allergic to + danh từ",
          mean: "**bị dị ứng với…**. Dùng để báo cho nhân viên biết thứ bạn không được ăn.",
          parts: [
            ["be allergic to", "**bị dị ứng với**. Be chia theo chủ ngữ: I am, he is, they are."],
            ["to", "giới từ **bắt buộc**, luôn đi với allergic."],
            ["an allergy", "danh từ **sự dị ứng**: I have a peanut allergy."]
          ],
          use: "nói ngay khi gọi món, rồi hỏi tiếp xem món có thứ đó không. Sau to là danh từ chỉ thức ăn: peanuts, seafood, milk, eggs.",
          note: "Người Việt hay nói “allergic with”. Đúng là **allergic to**. Đây là thông tin quan trọng, hãy nói rõ ràng và chậm.",
          ex: [
            ["I am allergic to seafood.", "Tôi bị dị ứng hải sản."],
            ["My son is allergic to eggs. Is there any egg in this?", "Con trai tôi dị ứng trứng. Món này có trứng không?"],
            ["Are you allergic to anything?", "Bạn có dị ứng với thứ gì không?"],
            ["She is not allergic to nuts, but she does not like them.", "Cô ấy không dị ứng các loại hạt, chỉ là không thích."]
          ] }
      ],
      p: [
        "**Could you…?** lịch sự hơn **Can you…?**, nên dùng khi nhờ nhân viên hoặc người lạ.",
        "Để hỏi trong món có thứ gì không, dùng **Is there any** với danh từ không đếm được (meat, milk) và **Are there any** với danh từ số nhiều (nuts, eggs). Câu này rất quan trọng khi bạn bị dị ứng.",
        "Dị ứng với thứ gì luôn đi với giới từ **to**: allergic to peanuts, không nói “allergic with”."
      ],
      ex: [["Are there any nuts in this?", "Món này có hạt không?"], ["Could we have another menu?", "Cho chúng tôi thêm một thực đơn nữa được không?"]]
    },
    { h: "too, not … enough và hiện tại tiếp diễn khi phàn nàn",
      f: ["too + tính từ (quá, theo nghĩa tiêu cực)", "not + tính từ + enough (chưa đủ)", "am / is / are + still + động từ thêm -ing"],
      items: [
        { f: "too + tính từ (quá, theo nghĩa tiêu cực)",
          mean: "**quá…** đến mức không chấp nhận được, không ăn uống được. Luôn mang ý **phàn nàn**.",
          parts: [
            ["too", "**quá** (vượt mức mình muốn). Ý tiêu cực."],
            ["very", "**rất**. Chỉ nói mức độ cao, không có ý phàn nàn: very good, very hot."],
            ["a bit too", "**hơi quá**: làm lời phàn nàn nhẹ nhàng hơn."]
          ],
          use: "đặt **trước tính từ** chỉ vị, nhiệt độ, kích cỡ, giá: too salty, too cold, too sweet, too expensive. Thường đứng sau is / are.",
          note: "So sánh: “The coffee is very hot” (rất nóng, có thể vẫn ổn) và “The coffee is too hot” (nóng quá, chưa uống được). Đừng dùng too để khen.",
          ex: [
            ["This coffee is too sweet for me.", "Cà phê này ngọt quá với tôi."],
            ["The music is too loud. We cannot talk.", "Nhạc to quá. Chúng tôi không nói chuyện được."],
            ["My noodles are a bit too salty.", "Mì của tôi hơi mặn quá."],
            ["Is the soup too spicy for you?", "Súp có cay quá với bạn không?"]
          ] },
        { f: "not + tính từ + enough (chưa đủ)",
          mean: "**chưa đủ…**: không đạt mức cần thiết. Not hot enough là “chưa đủ nóng”.",
          parts: [
            ["not", "phủ định, đứng sau is / are: is not, are not."],
            ["tính từ", "đứng **trước** enough: hot, cold, big, sweet."],
            ["enough", "**đủ**. Khi đi với tính từ, enough đứng **sau** tính từ."]
          ],
          use: "dùng để phàn nàn món chưa đạt yêu cầu: chưa đủ nóng, chưa đủ chín, chưa đủ ngọt. Cấu trúc đầy đủ: chủ ngữ + is not + tính từ + enough.",
          note: "Lỗi hay gặp: “not enough hot”. Với tính từ, enough đứng **sau**: **hot enough**. Cách nói khác nghĩa gần giống: **too cold** = **not hot enough**.",
          ex: [
            ["The tea is not hot enough.", "Trà chưa đủ nóng."],
            ["This steak is not cooked enough.", "Miếng bít tết này chưa đủ chín."],
            ["The table is not big enough for six people.", "Bàn không đủ rộng cho sáu người."],
            ["Is your coffee sweet enough?", "Cà phê của bạn đủ ngọt chưa?"]
          ] },
        { f: "am / is / are + still + động từ thêm -ing",
          mean: "**vẫn đang…**: việc đã bắt đầu từ trước và đến giờ vẫn chưa xong. We are still waiting là “chúng tôi vẫn đang chờ”.",
          parts: [
            ["am / is / are", "chia theo chủ ngữ: I am, he / she / it is, we / you / they are."],
            ["still", "**vẫn, vẫn còn**. Đứng giữa be và động từ thêm -ing."],
            ["động từ thêm -ing", "việc đang diễn ra: waiting, cooking, coming."]
          ],
          use: "dùng khi món chậm, khi muốn nhắc nhân viên một cách lịch sự. Nên mở đầu bằng **Excuse me**.",
          note: "Still nhấn mạnh sự chờ đợi đã lâu. Đừng đặt still ở cuối câu (“We are waiting still”). Vị trí đúng: **are still waiting**.",
          ex: [
            ["Excuse me, we are still waiting for our drinks.", "Xin lỗi, chúng tôi vẫn đang chờ đồ uống."],
            ["My soup is still coming, right?", "Súp của tôi vẫn đang được mang ra, đúng không?"],
            ["Is the chef still cooking our pizza?", "Đầu bếp vẫn đang làm pizza của chúng tôi à?"],
            ["I am still waiting for my change.", "Tôi vẫn đang chờ tiền thối lại."]
          ] }
      ],
      p: [
        "**Too + tính từ** nghĩa là quá mức, không chấp nhận được: This is too salty. Còn **very** chỉ có nghĩa là “rất”, không mang ý phàn nàn.",
        "**Not + tính từ + enough** nghĩa là chưa đủ: It is not hot enough (chưa đủ nóng).",
        "Dùng **thì hiện tại tiếp diễn** cho việc vẫn đang diễn ra: We are still waiting. Nên mở đầu bằng **Excuse me** hoặc **I think…** để lời phàn nàn nghe nhẹ nhàng."
      ],
      ex: [["It is too spicy.", "Món này cay quá."], ["This soup is cold. Could you heat it up?", "Súp nguội rồi, hâm lại giúp tôi được không?"]]
    },
    { h: "Hỏi giá và hỏi đã bao gồm chưa",
      f: ["How much is / are + danh từ?", "It is + số tiền.", "Is + danh từ + included?"],
      items: [
        { f: "How much is / are + danh từ?",
          mean: "**… giá bao nhiêu?**. Câu hỏi giá cơ bản nhất.",
          parts: [
            ["How much", "**bao nhiêu (tiền)**. Hỏi giá luôn dùng much, không dùng many."],
            ["is", "dùng với **một món** hoặc danh từ không đếm được: How much is the cake?"],
            ["are", "dùng với **danh từ số nhiều**: How much are the spring rolls?"]
          ],
          use: "hỏi giá món trên thực đơn, đồ uống, hoặc hỏi tổng tiền. Có thể rút gọn khi chỉ vào món: How much is this?",
          note: "Lỗi hay gặp: “How many is this?”. Hỏi giá luôn là **How much**. Chọn is hay are theo danh từ đứng sau.",
          ex: [
            ["How much is a large iced coffee?", "Một ly cà phê đá cỡ lớn giá bao nhiêu?"],
            ["How much are the fresh spring rolls?", "Gỏi cuốn giá bao nhiêu?"],
            ["How much is the set menu for two?", "Suất ăn cho hai người giá bao nhiêu?"],
            ["How much is it altogether?", "Tổng cộng hết bao nhiêu?"]
          ] },
        { f: "It is + số tiền.",
          mean: "**giá là…**. Câu trả lời cho câu hỏi giá.",
          parts: [
            ["It is", "**nó giá**. Khi nói thường rút gọn thành **It’s**. Với số nhiều dùng **They are**."],
            ["số tiền", "con số + đơn vị: forty thousand dong, five dollars."],
            ["altogether", "**tổng cộng**, đặt ở cuối: It is two hundred thousand altogether."]
          ],
          use: "dùng khi nhân viên báo giá hoặc khi bạn nhắc lại giá để xác nhận. Đọc số theo thứ tự lớn đến nhỏ.",
          note: "Khi danh từ là số nhiều, câu trả lời đổi thành **They are…**: How much are the cakes? They are thirty thousand each.",
          ex: [
            ["It is forty-five thousand dong.", "Giá 45 nghìn đồng."],
            ["They are twenty thousand each.", "Mỗi cái 20 nghìn."],
            ["It is three hundred thousand altogether.", "Tổng cộng 300 nghìn."],
            ["Is it really only fifteen thousand?", "Thật sự chỉ 15 nghìn thôi à?"]
          ] },
        { f: "Is + danh từ + included?",
          mean: "**đã bao gồm… chưa?**: hỏi xem một khoản (phí phục vụ, thuế, đồ uống) đã được tính vào giá chưa.",
          parts: [
            ["Is … included?", "**đã được tính vào chưa**. Included là quá khứ phân từ (cột thứ ba) của include."],
            ["service", "**phí phục vụ**: Is service included?"],
            ["tax / the drink", "**thuế** hoặc **đồ uống** đi kèm suất ăn."],
            ["Are … included?", "dùng khi danh từ là số nhiều: Are drinks included?"]
          ],
          use: "hỏi trước khi trả tiền hoặc trước khi để lại tiền boa. Trả lời: **Yes, it is.** / **No, it is not.**",
          note: "Biết câu này giúp bạn không trả tiền boa hai lần. Đừng quên động từ is ở đầu câu (“Service included?” chỉ dùng khi nói rất nhanh).",
          ex: [
            ["Is service included in the bill?", "Hóa đơn đã bao gồm phí phục vụ chưa?"],
            ["Is the drink included in the lunch set?", "Suất ăn trưa có bao gồm đồ uống không?"],
            ["Are the side dishes included?", "Các món ăn kèm đã tính vào chưa?"],
            ["No, tax is not included.", "Chưa, thuế chưa được tính vào."]
          ] }
      ],
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
    ["Can you bring some water? (với người lạ)", "Could you bring some water, please?", "**Could you…, please?** lịch sự hơn khi nhờ nhân viên."],
    ["This food not good. I want pay.", "The soup is a bit bland. Could we have the bill, please?", "Đủ chủ ngữ và động từ; dùng **bland** để tả đúng món và **Could we have the bill, please?** để xin hóa đơn lịch sự."]
  ],
  vocab: [
    ["reservation", "sự đặt bàn trước"], ["menu", "thực đơn"], ["starter", "món khai vị"], ["main course", "món chính"],
    ["side dish", "món ăn kèm"], ["dessert", "món tráng miệng"], ["today’s special", "món đặc biệt hôm nay"], ["dish", "món ăn"],
    ["size", "cỡ ly"], ["iced", "có đá"], ["oat milk", "sữa yến mạch"], ["for here / to go", "dùng tại quán / mang đi"],
    ["allergic to", "bị dị ứng với"], ["vegetarian", "người ăn chay, món chay"], ["refill", "rót thêm, thêm một ly"], ["box", "hộp mang đồ ăn về"],
    ["bill", "hóa đơn (người Mỹ nói check)"], ["split the bill", "chia hóa đơn"], ["service", "phí phục vụ"], ["cash or card", "tiền mặt hay thẻ"],
    ["crispy", "giòn"], ["tender", "mềm (thịt)"], ["bland", "nhạt nhẽo"], ["on the house", "quán tặng, miễn phí"],
    ["savory", "mặn, đậm vị (không ngọt)"], ["greasy", "nhiều dầu mỡ"], ["refreshing", "sảng khoái, mát"],
    ["mouth-watering", "ngon đến thèm"], ["cozy", "ấm cúng"], ["leftovers", "đồ ăn thừa mang về"]
  ],
  tips: [
    "Bắt đầu bằng câu ngắn nhất có thể: **Table for two, please** hoặc **A large iced coffee, please**; thêm please là đủ lịch sự.",
    "Mỗi ngày tập gọi 5 món bạn thích bằng **I would like…** (thường nói I’d like) cho đến khi nói không cần nghĩ.",
    "Nếu bạn bị dị ứng hoặc ăn chay, học thuộc một câu và nói ngay khi gọi món, ví dụ: “I am allergic to peanuts.” (thường nói I’m allergic).",
    "Khi có sự cố, mở đầu bằng **Excuse me** hoặc **I think…** rồi mới nêu vấn đề để giữ không khí dễ chịu.",
    "Mỗi ngày chọn 2 từ mới như crispy, tender và dùng thử trong một câu về món bạn vừa ăn."
  ]
};
