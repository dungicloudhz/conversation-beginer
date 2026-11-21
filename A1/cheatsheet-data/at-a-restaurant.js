/* Cheat sheet: At a Restaurant (Gọi món tại nhà hàng). Hiển thị bởi cheatsheet.js. */
window.A1_CHEAT = {
  goal: [
    "Gọi điện đặt bàn với đủ ba thông tin: số người, giờ và ngày.",
    "Đọc hiểu thực đơn: các mục món khai vị, món chính, món ăn kèm, tráng miệng và các cách chế biến như grilled, steamed, stir-fried.",
    "Gọi món bằng **I will have…** và nói yêu cầu riêng: không hành, đổi món kèm, báo dị ứng, hỏi món chay.",
    "Nhờ phục vụ trong bữa ăn và phàn nàn lịch sự bằng **I am afraid…**, **a bit…** khi có vấn đề.",
    "Xin hóa đơn, trả riêng hoặc trả chung, hỏi phí phục vụ và đọc đúng tổng tiền."
  ],
  phrases: [
    { h: "Đặt bàn trước", rows: [
      ["Hi, I would like to book a table, please.", "Chào bạn, tôi muốn đặt bàn.", "Khi nói thường rút gọn: I’d like (I’d = I would)."],
      ["A table for four at seven p.m. on Friday.", "Bàn cho bốn người, 7 giờ tối thứ Sáu."],
      ["Do you have a table by the window?", "Có bàn cạnh cửa sổ không?"],
      ["The booking is under the name Nguyen.", "Tôi đặt bàn dưới tên Nguyễn."],
      ["I am sorry, we are fully booked at seven. How about seven thirty?", "Xin lỗi, 7 giờ kín bàn rồi. 7 giờ rưỡi được không ạ?", "Nhân viên thường nói rút gọn: I’m sorry, we’re fully booked (we’re = we are)."]
    ]},
    { h: "Đến nơi và chọn chỗ", rows: [
      ["Good evening. Do you have a reservation?", "Chào buổi tối. Anh chị có đặt bàn trước không ạ?"],
      ["Yes, a table for four under Nguyen.", "Có, bàn bốn người tên Nguyễn."],
      ["No, we do not. Do you have a table for two?", "Không. Còn bàn cho hai người không ạ?", "Dạng rút gọn hay nói: No, we don’t (don’t = do not)."],
      ["Right this way, please.", "Mời đi lối này."],
      ["Could we sit outside?", "Chúng tôi ngồi ngoài trời được không?"]
    ]},
    { h: "Gọi món", rows: [
      ["Could we have a few more minutes?", "Cho chúng tôi thêm vài phút nhé."],
      ["What would you recommend?", "Bạn gợi ý món gì?"],
      ["I will have the grilled pork with rice.", "Tôi lấy cơm thịt nướng.", "Khi gọi món người ta nói I’ll have (I’ll = I will)."],
      ["For the starter, we would like the spring rolls.", "Món khai vị, chúng tôi lấy nem rán.", "Dạng rút gọn: we’d like (we’d = we would)."],
      ["How would you like your steak? Medium, please.", "Anh muốn bít tết chín mức nào? Chín vừa nhé."]
    ]},
    { h: "Yêu cầu riêng và dị ứng", rows: [
      ["Could I have it without onions?", "Cho tôi món này không có hành được không?"],
      ["Can I have the sauce on the side?", "Để nước sốt riêng ra được không?"],
      ["I am allergic to peanuts. Does this dish have any?", "Tôi dị ứng lạc. Món này có lạc không?", "Dạng rút gọn: I’m allergic (I’m = I am)."],
      ["Do you have any vegetarian dishes?", "Nhà hàng có món chay không?"],
      ["Can I have rice instead of fries?", "Đổi khoai tây chiên thành cơm được không?"]
    ]},
    { h: "Nhờ phục vụ và phàn nàn lịch sự", rows: [
      ["Excuse me, could we have some more napkins?", "Xin lỗi, cho chúng tôi thêm khăn giấy."],
      ["Excuse me, I am afraid this is not what I ordered.", "Xin lỗi, e là đây không phải món tôi gọi.", "Dạng hay nói: I’m afraid this isn’t what I ordered (isn’t = is not)."],
      ["My soup is a bit cold. Could you warm it up?", "Súp của tôi hơi nguội. Hâm nóng lại giúp tôi được không?"],
      ["We have been waiting for thirty minutes. Is our food coming soon?", "Chúng tôi đợi 30 phút rồi. Món sắp ra chưa ạ?", "Dạng rút gọn: We’ve been waiting (We’ve = We have)."],
      ["I asked for no chili, but this is very spicy.", "Tôi đã dặn không cho ớt, nhưng món này cay lắm."]
    ]},
    { h: "Thanh toán", rows: [
      ["Could we have the bill, please?", "Cho chúng tôi thanh toán.", "Người Mỹ nói the check thay cho the bill."],
      ["Can we pay separately?", "Chúng tôi trả riêng được không?"],
      ["Is service included?", "Hóa đơn đã gồm phí phục vụ chưa?"],
      ["Do you take credit cards?", "Nhà hàng có nhận thẻ tín dụng không?"],
      ["Everything was great. Thank you!", "Mọi thứ đều tuyệt. Cảm ơn!"]
    ]}
  ],
  grammar: [
    { h: "Thứ tự thông tin khi đặt bàn",
      f: ["I would like to book a table + for + số người + at + giờ + on + ngày", "tomorrow, tonight, this evening (không có giới từ phía trước)"],
      items: [
        { f: "I would like to book a table + for + số người + at + giờ + on + ngày",
          mean: "**tôi muốn đặt một bàn cho bao nhiêu người, lúc mấy giờ, vào ngày nào**. Đây là câu mẫu đầy đủ nhất khi gọi điện hoặc đến nhà hàng để giữ chỗ trước.",
          parts: [
            ["I would like to book", "**tôi muốn đặt**. Cách nói lịch sự, thường rút gọn thành I’d like to book. Có thể thay book bằng **reserve** (trang trọng hơn một chút), nghĩa giống nhau."],
            ["for + số người", "**cho bao nhiêu người**: for two, for four. Luôn dùng giới từ **for**, không dùng of hay with."],
            ["at + giờ", "**lúc mấy giờ**: at seven, at half past six. Giờ cụ thể trên đồng hồ luôn đi với **at**."],
            ["on + ngày", "**vào thứ mấy, ngày nào**: on Friday, on May 5th. Thứ và ngày luôn đi với **on**."]
          ],
          use: "dùng ở đầu cuộc gọi đặt bàn. Nói lần lượt **số người → giờ → ngày** để nhân viên ghi lại dễ dàng. Sau would like to luôn là động từ nguyên mẫu (book, reserve).",
          note: "Người Việt hay nói “I want book table” (thiếu **to** và thiếu **a**) hoặc dùng “in 7pm”, “in Friday”. Hãy nhớ khung: **a table for … at … on …**.",
          ex: [
            ["I would like to book a table for three at seven on Friday.", "Tôi muốn đặt bàn ba người lúc 7 giờ thứ Sáu."],
            ["I would like to reserve a table for five at half past six on Sunday.", "Tôi muốn đặt trước bàn năm người lúc 6 giờ rưỡi Chủ nhật."],
            ["Could I book a table for two at eight on May 20th?", "Tôi đặt bàn hai người lúc 8 giờ ngày 20 tháng 5 được không?"],
            ["We would like to book a table for ten at noon on Saturday.", "Chúng tôi muốn đặt bàn mười người lúc 12 giờ trưa thứ Bảy."]
          ] },
        { f: "tomorrow, tonight, this evening (không có giới từ phía trước)",
          mean: "**ngày mai, tối nay, chiều tối nay**: những từ chỉ thời gian đã mang sẵn nghĩa “vào lúc đó”, nên **không cần** thêm at, in hay on phía trước.",
          parts: [
            ["tomorrow", "**ngày mai**. Có thể ghép thêm buổi: tomorrow morning, tomorrow evening."],
            ["tonight", "**tối nay**, đêm nay. Dùng nhiều nhất khi đặt bàn cho bữa tối cùng ngày."],
            ["this evening", "**chiều tối nay** (khoảng từ 6 giờ tối). Tương tự: this afternoon (chiều nay), this weekend (cuối tuần này)."],
            ["next / this + thứ", "next Friday (thứ Sáu tới), this Saturday (thứ Bảy này) cũng **không** dùng on phía trước."]
          ],
          use: "đặt ở cuối câu đặt bàn, thay cho phần “on + ngày”: a table for two at eight **tonight**. Có thể đứng ngay sau số người khi không nói giờ.",
          note: "Lỗi hay gặp: “on tomorrow”, “in tonight”, “in this evening”. Mẹo nhớ: thấy **this, next, tomorrow, tonight** là bỏ giới từ.",
          ex: [
            ["Can I book a table for two tonight?", "Tôi đặt bàn hai người tối nay được không?"],
            ["I would like a table for four at seven this evening.", "Tôi muốn một bàn bốn người lúc 7 giờ tối nay."],
            ["We are fully booked tomorrow, sorry.", "Xin lỗi, ngày mai chúng tôi kín bàn rồi."],
            ["Do you have a table for six next Saturday?", "Thứ Bảy tới nhà hàng còn bàn sáu người không?"]
          ] }
      ],
      p: [
        "Khi đặt bàn, nói lần lượt ba thông tin để nhà hàng ghi lại dễ dàng: **for** + số người, **at** + giờ, **on** + thứ hoặc ngày. Không dùng “in 7pm” hay “in Friday”.",
        "Với tomorrow, tonight, this evening thì không thêm giới từ: Can I reserve a table for six tomorrow evening?",
        "Dùng **I would like to + động từ nguyên mẫu** (thường nói I’d like to) thay cho “I want book”, vừa đúng ngữ pháp vừa lịch sự."
      ],
      ex: [["I would like to book a table for two at eight on Saturday.", "Tôi muốn đặt bàn hai người lúc 8 giờ thứ Bảy."], ["Can I reserve a table for six tomorrow evening?", "Tôi đặt bàn sáu người tối mai được không?"]]
    },
    { h: "Cách chế biến đứng trước tên món: grilled fish",
      f: ["động từ thêm -ed (phân từ quá khứ) + tên món"],
      items: [
        { f: "động từ thêm -ed (phân từ quá khứ) + tên món",
          mean: "**món ăn được chế biến theo cách nào đó**: grilled fish là “cá được nướng”, tức cá nướng. Từ chỉ cách nấu đứng **trước** tên món, giống một tính từ.",
          parts: [
            ["grilled", "**nướng trên vỉ, trên than**: grilled pork, grilled chicken."],
            ["fried", "**chiên, rán** trong dầu: fried rice, fried egg."],
            ["stir-fried", "**xào** nhanh trên chảo nóng: stir-fried noodles, stir-fried beef."],
            ["steamed / boiled", "**steamed** là hấp bằng hơi nước (steamed rice); **boiled** là luộc trong nước sôi (boiled eggs)."],
            ["roasted", "**quay, nướng trong lò**: roasted duck, roasted chicken."]
          ],
          use: "dùng khi đọc thực đơn, gọi món hoặc hỏi cách món được nấu. Cấu trúc luôn là **cách chế biến + tên món**; có thể thêm a, the, some phía trước: the grilled fish.",
          note: "Tiếng Việt đặt cách nấu **sau** tên món (cá nướng), tiếng Anh đặt **trước** (grilled fish). Đừng nói “fish grill” hay “rice fry”.",
          ex: [
            ["I would like the grilled pork with rice.", "Cho tôi món thịt nướng với cơm."],
            ["Is the chicken fried or roasted?", "Gà này là gà chiên hay gà quay?"],
            ["We will share a plate of stir-fried noodles.", "Chúng tôi sẽ ăn chung một đĩa mì xào."],
            ["I do not eat fried food, so I will have the boiled vegetables.", "Tôi không ăn đồ chiên nên tôi gọi rau luộc."]
          ] }
      ],
      p: [
        "Tên cách chế biến là động từ thêm **-ed**, dùng như một tính từ và đặt **trước** tên món: grill → grilled chicken, steam → steamed fish.",
        "Tiếng Việt nói “cá nướng” (món trước, cách nấu sau) nên người Việt hay nói ngược thành “fish grill”. Trong tiếng Anh, tính từ luôn đứng trước danh từ.",
        "Một số động từ có dạng đặc biệt cần nhớ: stir-fry → **stir-fried** (đổi y thành i rồi thêm -ed)."
      ],
      ex: [["I would like the steamed fish.", "Cho tôi món cá hấp."], ["stir-fried morning glory", "rau muống xào"]]
    },
    { h: "Gọi món với I will have và with, without, instead of, extra",
      f: ["I will have + the + tên món", "with / without + nguyên liệu", "món A + instead of + món B", "extra + danh từ"],
      items: [
        { f: "I will have + the + tên món",
          mean: "**tôi sẽ gọi món…, cho tôi món…**. Đây là cách nói khi bạn vừa quyết định chọn món ngay lúc nhân viên đang chờ.",
          parts: [
            ["I will have", "**tôi sẽ dùng, tôi gọi**. Khi nói thường rút gọn thành **I’ll have**. Will diễn tả quyết định đưa ra ngay lúc nói."],
            ["the + tên món", "dùng **the** vì món đó đã có trong thực đơn, cả hai bên đều biết: the chicken soup, the grilled fish."],
            ["For my main course / For dessert", "có thể thêm ở đầu câu để nói món đó thuộc phần nào của bữa ăn."]
          ],
          use: "dùng khi phục vụ hỏi “Are you ready to order?” hoặc “What would you like?”. Sau I will have là tên món; thêm **please** ở cuối cho lịch sự.",
          note: "Không nói “I take…” hay “I eat…” khi gọi món. Nếu bạn muốn lịch sự hơn nữa, dùng **I would like the…**; còn I will have nghe tự nhiên, thân thiện.",
          ex: [
            ["I will have the chicken curry, please.", "Cho tôi món cà ri gà."],
            ["For my starter, I will have the spring rolls.", "Món khai vị, tôi gọi chả giò."],
            ["She will have the steamed fish, and I will have the beef steak.", "Cô ấy gọi cá hấp, còn tôi gọi bít tết bò."],
            ["What will you have for dessert?", "Bạn gọi món tráng miệng gì?"]
          ] },
        { f: "with / without + nguyên liệu",
          mean: "**có thêm / không có** một nguyên liệu nào đó trong món. Dùng để yêu cầu nhà bếp điều chỉnh món theo ý mình.",
          parts: [
            ["with", "**có, kèm theo**: with cheese (có phô mai), with rice (ăn kèm cơm)."],
            ["without", "**không có, bỏ**: without onions (không hành), without sugar (không đường)."],
            ["no + danh từ", "cách nói ngắn khi gọi nhanh: no ice, no sugar. Nghĩa giống without nhưng chỉ dùng trong câu rất ngắn."]
          ],
          use: "đặt ngay **sau tên món** hoặc sau câu gọi món: the beef noodles **without chili**. Sau with / without là danh từ chỉ nguyên liệu, thường ở số nhiều nếu đếm được (onions, peanuts).",
          note: "Người Việt hay nói “no have onion”. Câu đúng là **without onions**. Nếu bị dị ứng, nói rõ thêm: I am allergic to peanuts.",
          ex: [
            ["I will have the salad without cheese, please.", "Cho tôi món salad không có phô mai."],
            ["Can I have the fried rice with an egg?", "Cho tôi cơm chiên có thêm một quả trứng được không?"],
            ["Could you make it without chili? I do not eat spicy food.", "Bạn làm món này không ớt được không? Tôi không ăn cay."],
            ["Does the soup come with bread?", "Món súp có kèm bánh mì không?"]
          ] },
        { f: "món A + instead of + món B",
          mean: "**lấy món A thay vì món B**, tức là đổi một món hay một phần ăn kèm sang thứ khác.",
          parts: [
            ["món A", "thứ bạn **muốn có**, đứng trước instead of."],
            ["instead of", "**thay vì, thay cho**. Luôn có giới từ **of**."],
            ["món B", "thứ **đi kèm sẵn** mà bạn không muốn, đứng sau instead of."]
          ],
          use: "dùng khi món trong thực đơn có phần ăn kèm cố định (khoai tây chiên, cơm, salad) và bạn muốn đổi. Thường đi với Can I have…? hoặc Could I get…?. Sau instead of là danh từ.",
          note: "Đừng đảo thứ tự: thứ bạn muốn đứng **trước**, thứ bạn bỏ đứng **sau**. “Rice instead of fries” nghĩa là lấy cơm, bỏ khoai tây chiên.",
          ex: [
            ["Can I have salad instead of fries?", "Cho tôi salad thay cho khoai tây chiên được không?"],
            ["I would like brown rice instead of white rice.", "Tôi muốn cơm gạo lứt thay vì cơm trắng."],
            ["Could I get tea instead of coffee with the set menu?", "Suất ăn cố định cho tôi đổi cà phê sang trà được không?"],
            ["Is it possible to have chicken instead of beef?", "Có thể đổi thịt bò sang thịt gà được không?"]
          ] },
        { f: "extra + danh từ",
          mean: "**thêm, nhiều hơn bình thường**: extra lime là thêm chanh, extra sauce là thêm nước sốt.",
          parts: [
            ["extra", "**thêm** so với lượng bình thường của món. Có thể phải trả thêm tiền."],
            ["more", "**thêm nữa** sau khi đã ăn hết hoặc dùng hết: more water, more bread. Hay dùng khi xin thêm giữa bữa."],
            ["another + danh từ số ít", "**thêm một cái nữa**: another spoon, another beer."]
          ],
          use: "đặt **ngay trước danh từ** khi gọi món hoặc khi xin thêm: extra cheese, extra rice. Thường dùng trong câu Can I have…? hoặc khi gọi: …with extra cheese.",
          note: "Hỏi giá nếu cần: **Is there a charge for extra rice?** (thêm cơm có tính tiền không?). Đừng nói “more extra”, chỉ cần một từ.",
          ex: [
            ["Can I have extra chili sauce, please?", "Cho tôi thêm tương ớt nhé."],
            ["I would like a pizza with extra cheese.", "Tôi muốn một chiếc pizza thêm phô mai."],
            ["Is there a charge for extra rice?", "Thêm cơm có tính tiền không?"],
            ["Could we have another spoon and some more water?", "Cho chúng tôi thêm một cái thìa và thêm ít nước nữa được không?"]
          ] }
      ],
      p: [
        "**I will have…** (thường nói I’ll have) dùng khi bạn quyết định gọi món ngay lúc nói chuyện với phục vụ. Không nói “I take…” vì nghe không tự nhiên khi gọi món.",
        "Muốn thêm hoặc bỏ nguyên liệu, dùng **with** (có) và **without** (không có), không dùng “no have”. Muốn đổi món kèm, dùng **instead of**; muốn thêm nhiều hơn, dùng **extra**."
      ],
      ex: [["I will have the beef pho without onions, please.", "Cho tôi phở bò không hành."], ["Can I have extra lime?", "Cho tôi thêm chanh được không?"]]
    },
    { h: "Làm mềm lời phàn nàn: I am afraid, a bit, I think",
      f: ["I am afraid + câu", "a bit / a little + tính từ", "I think there is + vấn đề", "Could you + động từ nguyên mẫu, please?"],
      items: [
        { f: "I am afraid + câu",
          mean: "**e là, tôi e rằng…**. Không có nghĩa là “sợ” ở đây; đây là cách mở đầu một tin không vui một cách nhẹ nhàng, lịch sự.",
          parts: [
            ["I am afraid", "**e là**. Khi nói thường rút gọn thành **I’m afraid**. Làm câu phàn nàn bớt gay gắt."],
            ["I am afraid not", "**e là không**: câu trả lời ngắn, lịch sự để từ chối hoặc nói “không”."],
            ["Sorry, but…", "cách mở đầu khác, nghĩa gần giống, hơi thân mật hơn."]
          ],
          use: "đặt ở **đầu câu**, sau đó là một câu đầy đủ (chủ ngữ + động từ) nói về vấn đề: I am afraid **this is cold**. Dùng khi phàn nàn với nhân viên hoặc khi nhân viên báo tin xấu cho khách.",
          note: "Đừng hiểu là “tôi sợ”. Khi phục vụ nói “I am afraid we do not have any fish today” nghĩa là “Rất tiếc hôm nay chúng tôi hết cá”.",
          ex: [
            ["I am afraid this is not what I ordered.", "E là đây không phải món tôi đã gọi."],
            ["I am afraid my coffee is cold.", "E là cà phê của tôi bị nguội."],
            ["I am afraid we do not have any tables tonight.", "Rất tiếc tối nay chúng tôi không còn bàn."],
            ["Is the kitchen still open? I am afraid not.", "Bếp còn mở không? E là không ạ."]
          ] },
        { f: "a bit / a little + tính từ",
          mean: "**hơi, một chút**: a bit salty là “hơi mặn”. Dùng để nhận xét về món ăn mà không làm người nghe phật lòng.",
          parts: [
            ["a bit", "**hơi**. Thân mật, rất hay dùng trong văn nói, nhất là người Anh."],
            ["a little", "**hơi, một chút**. Nghĩa giống a bit, nghe nhẹ nhàng và hơi lịch sự hơn."],
            ["too", "**quá** (mức không chấp nhận được). Mạnh hơn nhiều; dùng khi thật sự không ăn được."]
          ],
          use: "đặt ngay **trước tính từ** chỉ vị hoặc nhiệt độ (salty, spicy, cold, sweet, dry), thường sau is hoặc are: The soup is **a bit salty**.",
          note: "Với tính từ mang nghĩa xấu, a bit / a little làm lời chê mềm hơn. Không nói “a bit delicious” vì lời khen không cần làm nhẹ.",
          ex: [
            ["The soup is a bit salty.", "Món súp hơi mặn."],
            ["My steak is a little cold.", "Miếng bít tết của tôi hơi nguội."],
            ["This curry is a bit too spicy for me.", "Món cà ri này hơi cay quá với tôi."],
            ["Is the rice a little dry?", "Cơm có hơi khô không?"]
          ] },
        { f: "I think there is + vấn đề",
          mean: "**hình như có…, tôi nghĩ là có…**. Câu nêu vấn đề một cách khiêm tốn, như thể mình chưa chắc chắn, để không đổ lỗi trực tiếp.",
          parts: [
            ["I think", "**tôi nghĩ là, hình như**. Làm câu nghe ít khẳng định, lịch sự hơn."],
            ["there is + danh từ số ít", "**có một…**: there is a mistake, there is a hair."],
            ["there are + danh từ số nhiều", "**có nhiều…**: there are two coffees on the bill."]
          ],
          use: "dùng khi phát hiện lỗi trên hóa đơn, thấy thứ lạ trong món hoặc thiếu món. Sau there is là danh từ số ít có a / an; sau there are là danh từ số nhiều.",
          note: "So với “There is a mistake!” (nghe như buộc tội), thêm **I think** ở đầu giúp giữ không khí dễ chịu. Có thể kết thúc bằng Could you check, please?",
          ex: [
            ["I think there is a mistake on the bill.", "Hình như hóa đơn bị tính nhầm."],
            ["I think there is a hair in my soup.", "Hình như có một sợi tóc trong bát súp của tôi."],
            ["I think there are two beers on the bill, but we only had one.", "Hình như hóa đơn ghi hai cốc bia nhưng chúng tôi chỉ uống một."],
            ["I think there is something wrong with the fish.", "Tôi nghĩ món cá có vấn đề gì đó."]
          ] },
        { f: "Could you + động từ nguyên mẫu, please?",
          mean: "**bạn làm giúp tôi… được không?**. Lời đề nghị lịch sự, cho nhân viên biết rõ bạn muốn họ làm gì.",
          parts: [
            ["Could you", "**bạn có thể… được không**. Lịch sự hơn Can you, nên dùng với nhân viên và người lạ."],
            ["động từ nguyên mẫu", "việc bạn nhờ: change, check, bring, heat up, take away."],
            ["please", "đặt ở **cuối câu** (hoặc sau you) để lời nhờ mềm mại hơn."]
          ],
          use: "dùng ngay sau khi nêu vấn đề, để kết thúc lời phàn nàn bằng một yêu cầu cụ thể. Sau Could you luôn là động từ nguyên mẫu, không thêm -s, -ing hay to.",
          note: "Lỗi hay gặp: “Could you to change it?” hoặc “Could you changing it?”. Đúng là **Could you change it, please?**.",
          ex: [
            ["Could you change it, please?", "Bạn đổi món này giúp tôi được không?"],
            ["Could you check the bill again, please?", "Bạn kiểm tra lại hóa đơn giúp tôi được không?"],
            ["Could you heat up the soup, please?", "Bạn hâm nóng súp giúp tôi được không?"],
            ["Could you bring us some napkins, please?", "Bạn mang cho chúng tôi ít khăn giấy được không?"]
          ] }
      ],
      p: [
        "**I am afraid…** (thường nói I’m afraid) nghĩa là “e là…”, giúp báo tin không vui một cách nhẹ nhàng, không đổ lỗi cho người phục vụ.",
        "Dùng **a bit** hoặc **a little** trước tính từ (a bit salty) thay cho very để lời nhận xét bớt gay gắt. **I think there is…** cũng làm câu nghe khiêm tốn hơn.",
        "Luôn kết thúc bằng một lời đề nghị rõ ràng như **Could you change it, please?** để nhân viên biết bạn muốn họ làm gì."
      ],
      ex: [["I am afraid the fish is overcooked.", "E là món cá bị nấu quá kỹ."], ["I think there is a mistake on the bill.", "Hình như hóa đơn bị nhầm."]]
    },
    { h: "Đọc tổng tiền: That comes to…",
      f: ["That comes to + số tiền", "số tiền + each (mỗi người)", "số + hundred / thousand / million (không thêm -s)"],
      items: [
        { f: "That comes to + số tiền",
          mean: "**tổng cộng là…**. Câu nhân viên dùng để báo tổng số tiền cần trả trên hóa đơn.",
          parts: [
            ["That comes to", "**tổng cộng là**. Hay nghe nhất ở nhà hàng, cửa hàng."],
            ["That is / That will be", "cách nói khác, nghĩa giống: That is two hundred thousand. That will be… nghe thân thiện, hay dùng ở Mỹ."],
            ["How much does it come to?", "câu khách hỏi: **tổng cộng bao nhiêu?**"]
          ],
          use: "nghe khi tính tiền. Sau comes to là con số kèm đơn vị tiền (dong, dollars). Khách có thể dùng để hỏi lại: So that comes to…?",
          note: "Comes ở đây không có nghĩa “đến”; **come to + số tiền** nghĩa là “tính tổng ra là”. Chủ ngữ là that hoặc it nên động từ thêm **-s**.",
          ex: [
            ["That comes to three hundred thousand dong.", "Tổng cộng là 300 nghìn đồng."],
            ["That will be twenty-five dollars, please.", "Của quý khách là 25 đô la ạ."],
            ["How much does it come to?", "Tổng cộng bao nhiêu tiền?"],
            ["So that comes to two hundred and ten thousand, right?", "Vậy tổng là 210 nghìn, đúng không?"]
          ] },
        { f: "số tiền + each (mỗi người)",
          mean: "**mỗi người… tiền**. Dùng khi chia đều hóa đơn để nói mỗi người phải trả bao nhiêu.",
          parts: [
            ["each", "**mỗi người, mỗi cái**. Đặt **sau** số tiền, ở cuối câu."],
            ["per person", "**mỗi người**. Nghĩa giống each, nghe trang trọng hơn, hay thấy trên thực đơn."],
            ["split the bill", "**chia hóa đơn**: câu đề nghị trước khi tính mỗi người bao nhiêu."]
          ],
          use: "dùng sau khi đã biết tổng tiền và muốn chia đều: It is one hundred thousand **each**. Each cũng có thể đứng sau giá của một món: The spring rolls are twenty thousand each.",
          note: "Không đặt each trước số tiền (“each one hundred thousand”). Mẹo nhớ: **số tiền trước, each sau**.",
          ex: [
            ["Let’s split the bill. It is ninety thousand each.", "Chia đều nhé. Mỗi người 90 nghìn."],
            ["The set lunch is one hundred thousand dong per person.", "Suất ăn trưa là 100 nghìn đồng một người."],
            ["How much is it each?", "Mỗi người bao nhiêu?"],
            ["The drinks are thirty thousand each.", "Đồ uống mỗi ly 30 nghìn."]
          ] },
        { f: "số + hundred / thousand / million (không thêm -s)",
          mean: "**trăm / nghìn / triệu** khi đọc một số tiền cụ thể. Có số đứng trước thì ba từ này **luôn ở dạng số ít**.",
          parts: [
            ["hundred", "**trăm**: two hundred (200). Người Anh thường thêm **and** sau hundred: three hundred and fifty."],
            ["thousand", "**nghìn**: fifty thousand (50.000), five hundred thousand (500.000)."],
            ["million", "**triệu**: one million (1.000.000), two million (2.000.000)."],
            ["hundreds of / thousands of", "chỉ thêm -s khi **không** có số cụ thể, nghĩa là “hàng trăm, hàng nghìn”: thousands of people."]
          ],
          use: "dùng khi đọc giá, tổng tiền, tiền boa. Đọc từ lớn đến nhỏ: số triệu → số nghìn → số lẻ, rồi thêm đơn vị tiền ở cuối (dong).",
          note: "Lỗi rất hay gặp: “four hundreds fifty thousands”. Đúng là **four hundred and fifty thousand**, vì con số phía trước đã cho biết số lượng.",
          ex: [
            ["The bill is one million two hundred thousand dong.", "Hóa đơn là 1 triệu 200 nghìn đồng."],
            ["A bowl of pho is fifty thousand dong.", "Một bát phở giá 50 nghìn đồng."],
            ["We paid six hundred and fifty thousand for dinner.", "Chúng tôi trả 650 nghìn cho bữa tối."],
            ["It is not two million, it is two hundred thousand.", "Không phải 2 triệu, mà là 200 nghìn."]
          ] }
      ],
      p: [
        "Nhân viên thường đọc tổng tiền bằng **That comes to…** hoặc **That is…**. Khi chia đều, thêm **each** ở cuối để nói số tiền mỗi người.",
        "Sau một con số, **hundred**, **thousand**, **million** không thêm -s: two hundred thousand. Người Anh thường đặt **and** sau hundred: four hundred and fifty thousand."
      ],
      ex: [["That comes to four hundred and fifty thousand dong.", "Tổng cộng là 450 nghìn đồng."], ["It is one hundred and fifty thousand each.", "Mỗi người 150 nghìn."]]
    }
  ],
  mistakes: [
    ["I want book table 4 people in 7pm in Friday.", "I would like to book a table for four at seven p.m. on Friday.", "Dùng **for** + số người, **at** + giờ, **on** + ngày; sau want hoặc would like phải có **to**."],
    ["fish grill / rice fry", "grilled fish / fried rice", "Cách chế biến thêm **-ed** và đứng **trước** tên món."],
    ["I take beef pho, no have onion.", "I will have the beef pho without onions, please.", "Gọi món dùng **I will have**; bỏ nguyên liệu dùng **without**."],
    ["This is wrong! Bad food!", "Excuse me, I am afraid this is not what I ordered. Could you check, please?", "Phàn nàn bằng **I am afraid…** và một lời đề nghị, không nói gay gắt."],
    ["Total is four hundreds fifty thousands.", "That comes to four hundred and fifty thousand.", "Sau số, **hundred** và **thousand** không thêm -s."],
    ["Waiter! Waiter! (vỗ tay gọi)", "Excuse me.", "Giơ tay nhẹ và nói **Excuse me**; gọi to hay vỗ tay bị coi là bất lịch sự."]
  ],
  vocab: [
    ["book / reserve a table", "đặt bàn"], ["reservation", "sự đặt chỗ trước"], ["fully booked", "kín bàn, hết chỗ"], ["starter / appetizer", "món khai vị"],
    ["main course", "món chính"], ["side dish", "món ăn kèm"], ["dessert", "món tráng miệng"], ["today’s specials", "món đặc biệt hôm nay"],
    ["grilled", "nướng vỉ"], ["fried", "chiên, rán"], ["steamed", "hấp"], ["stir-fried", "xào"],
    ["boiled", "luộc"], ["roasted", "quay, nướng lò"], ["medium / well-done", "chín vừa / chín kỹ (bít tết)"], ["allergic to", "bị dị ứng với"],
    ["vegetarian", "món chay, người ăn chay"], ["instead of", "thay vì"], ["napkin", "khăn giấy"], ["bill / check", "hóa đơn (Anh / Mỹ)"],
    ["pay separately", "trả tiền riêng"], ["service charge", "phí phục vụ"], ["tip", "tiền boa"], ["receipt", "biên lai, hóa đơn"]
  ],
  tips: [
    "Khi đặt bàn, nhẩm trước ba thông tin theo thứ tự **for (số người) → at (giờ) → on (ngày)** rồi mới gọi điện.",
    "Nhớ quy tắc **cách chế biến + tên món**: grilled fish, steamed rice, fried noodles; ngược hẳn với tiếng Việt.",
    "Nếu bị dị ứng, nói ngay khi gọi món: “I am allergic to peanuts. Does this dish have any?” (thường nói I’m allergic).",
    "Gọi phục vụ bằng cách giơ tay nhẹ, nhìn về phía họ và nói **Excuse me**; tránh vỗ tay hay gọi to “Waiter!”.",
    "Ở Mỹ, tiền boa thường khoảng 15 đến 20 phần trăm; ở nhiều nước khác hãy hỏi **Is service included?** trước khi để lại tiền boa."
  ]
};
