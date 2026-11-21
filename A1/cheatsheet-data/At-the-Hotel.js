/* Cheat sheet: At the Hotel (Giao tiếp ở khách sạn). Hiển thị bởi cheatsheet.js. */
window.A1_CHEAT = {
  goal: [
    "Đặt phòng qua điện thoại hoặc tin nhắn, nói đúng ngày ở bằng **from … to …** và số đêm bằng **for … nights**.",
    "Nhận phòng (check-in), đọc đúng số phòng, nói đúng tầng và hỏi giờ ăn sáng, mật khẩu Wi-Fi, giờ trả phòng.",
    "Xin thêm đồ dùng trong phòng bằng **an extra** và **some more**, nhờ gọi báo thức, gửi hành lý, gọi taxi.",
    "Báo sự cố trong phòng lịch sự và rõ ràng: số phòng, cái gì hỏng, bạn muốn khách sạn làm gì.",
    "Trả phòng (check-out), kiểm tra hóa đơn và chỉ ra chỗ sai bằng thì quá khứ đơn **I did not …**."
  ],
  phrases: [
    { h: "Đặt phòng", rows: [
      ["I would like to book a room, please.", "Tôi muốn đặt một phòng.", "Khi nói thường rút gọn: I’d like (I’d = I would). Lịch sự hơn nhiều so với I want."],
      ["A double room for three nights, from the 12th to the 15th of December.", "Một phòng đôi, ba đêm, từ ngày 12 đến ngày 15 tháng Mười Hai.", "Đọc ngày bằng số thứ tự: the twelfth, the fifteenth."],
      ["How much is it per night?", "Bao nhiêu tiền một đêm?"],
      ["Is breakfast included?", "Có bao gồm bữa sáng không?"],
      ["Can I cancel for free?", "Tôi có thể hủy miễn phí không?"]
    ]},
    { h: "Check-in và hỏi thông tin", rows: [
      ["I have a reservation under the name Nguyen.", "Tôi đã đặt phòng dưới tên Nguyễn.", "Dùng giới từ **under** trước tên người đặt phòng."],
      ["By credit card, please.", "Tôi trả bằng thẻ tín dụng.", "Câu trả lời cho câu lễ tân hỏi How would you like to pay?"],
      ["What time is breakfast?", "Bữa sáng mấy giờ?"],
      ["What is the Wi-Fi password?", "Mật khẩu Wi-Fi là gì?", "Khi nói thường rút gọn: What’s (What’s = What is)."],
      ["Is it possible to check in early?", "Có thể nhận phòng sớm không?"]
    ]},
    { h: "Gọi lễ tân xin thêm đồ và nhờ giúp", rows: [
      ["Hi, this is room 512.", "Chào, đây là phòng 512.", "Đọc là five-twelve. Luôn nói số phòng trước khi yêu cầu."],
      ["Could I have an extra pillow, please?", "Cho tôi thêm một cái gối được không?"],
      ["Can I get a wake-up call at six tomorrow?", "Mai sáu giờ gọi báo thức giúp tôi được không?"],
      ["Can I leave my luggage here?", "Tôi gửi hành lý ở đây được không?"],
      ["Could you call a taxi for me?", "Gọi giúp tôi một chiếc taxi được không?"]
    ]},
    { h: "Báo sự cố trong phòng", rows: [
      ["Sorry to bother you, but the air conditioner is not working.", "Xin lỗi làm phiền, điều hòa không chạy.", "Khi nói thường rút gọn: isn’t working (isn’t = is not). Mở đầu bằng Sorry to bother you để lời phàn nàn nghe lịch sự."],
      ["There is no hot water.", "Không có nước nóng.", "Dạng rút gọn: There’s no (There’s = There is)."],
      ["My key card does not work.", "Thẻ phòng của tôi không dùng được.", "Dạng rút gọn: doesn’t (doesn’t = does not)."],
      ["Could you send someone to fix it, please?", "Cử người lên sửa giúp tôi được không?"],
      ["Could I change rooms, please?", "Cho tôi đổi phòng được không?", "Nói **change rooms** (số nhiều) vì bạn chuyển từ phòng này sang phòng khác."]
    ]},
    { h: "Check-out và hóa đơn", rows: [
      ["I would like to check out, please. Room 512.", "Tôi muốn trả phòng. Phòng 512.", "Dạng rút gọn: I’d like (I’d = I would)."],
      ["Could I have a receipt, please?", "Cho tôi xin hóa đơn."],
      ["I think there is a mistake on the bill.", "Hình như hóa đơn có chỗ sai.", "Dạng rút gọn: there’s (there’s = there is)."],
      ["I did not order room service.", "Tôi không gọi đồ ăn lên phòng.", "Dạng rút gọn: didn’t (didn’t = did not)."],
      ["Could you keep my bags until three?", "Giữ hành lý giúp tôi đến ba giờ được không?"]
    ]}
  ],
  grammar: [
    { h: "Nói ngày ở: from … to … và for … nights",
      f: ["from the + số thứ tự + to the + số thứ tự", "for + số + nights", "I would like to + động từ nguyên mẫu (rút gọn: I’d like to)"],
      items: [
        { f: "from the + số thứ tự + to the + số thứ tự",
          mean: "**từ ngày… đến ngày…** Nói ngày nhận phòng và ngày trả phòng.",
          parts: [
            ["from the", "**từ** + ngày bắt đầu (ngày đến, nhận phòng)."],
            ["to the", "**đến** + ngày kết thúc (ngày đi, trả phòng). Có thể thay bằng until the."],
            ["số thứ tự", "ngày tháng dùng số thứ tự: 1st (first), 2nd (second), 3rd (third), 5th (fifth), 12th (twelfth), 21st (twenty-first)."]
          ],
          use: "đặt phòng qua điện thoại hoặc tại quầy, xác nhận ngày ở. Có thể thêm tháng: from the 3rd **of May** to the 6th **of May**, hoặc from May 3rd to May 6th.",
          note: "Đừng đọc “from twelve to fifteen”. Ngày tháng luôn đọc bằng số thứ tự và có **the**: from **the twelfth** to **the fifteenth**.",
          ex: [
            ["I would like a room from the 3rd to the 5th of June.", "Tôi muốn một phòng từ ngày 3 đến ngày 5 tháng Sáu."],
            ["We are staying from the 20th to the 22nd.", "Chúng tôi ở từ ngày 20 đến ngày 22."],
            ["Is the room free from the 1st to the 4th?", "Phòng có trống từ ngày 1 đến ngày 4 không?"],
            ["Sorry, we do not have any rooms from the 10th to the 12th.", "Xin lỗi, chúng tôi hết phòng từ ngày 10 đến ngày 12."]
          ] },
        { f: "for + số + nights",
          mean: "**trong (bao nhiêu) đêm**. Khách sạn tính thời gian ở theo đêm.",
          parts: [
            ["for", "**trong** + khoảng thời gian."],
            ["số", "one, two, three… Một đêm có thể nói **one night** hoặc **a night**."],
            ["nights", "**đêm**. Số nhiều khi từ hai đêm trở lên: two nights, five nights."]
          ],
          use: "nói số đêm khi đặt phòng hoặc nhận phòng. Thường đứng **cuối câu**, sau loại phòng. Câu hỏi của lễ tân: How many nights?",
          note: "Người Việt hay nói “three days” theo thói quen “ở ba ngày”, nhưng từ ngày 12 đến 15 là **three nights**. Không nói “one nights” và không bỏ -s khi số nhiều.",
          ex: [
            ["I would like a single room for one night.", "Tôi muốn một phòng đơn cho một đêm."],
            ["We are staying for four nights.", "Chúng tôi ở bốn đêm."],
            ["How many nights? Just two nights, please.", "Bao nhiêu đêm ạ? Chỉ hai đêm thôi."],
            ["Can I stay for one more night?", "Tôi có thể ở thêm một đêm không?"]
          ] },
        { f: "I would like to + động từ nguyên mẫu (rút gọn: I’d like to)",
          mean: "**Tôi muốn (làm gì)**. Cách nói lịch sự hơn I want to.",
          parts: [
            ["I would like to", "**tôi muốn**, lịch sự, phù hợp khi nói với lễ tân. Khi nói thường rút gọn: I’d like to (I’d = I would)."],
            ["động từ nguyên mẫu", "việc muốn làm: book, check in, check out, change, cancel, pay."],
            ["I would like + danh từ", "nếu muốn một **vật** thì bỏ to: I would like **a** double room."]
          ],
          use: "khi mở đầu yêu cầu với khách sạn: đặt, đổi, hủy phòng, nhận phòng, trả phòng. Câu hỏi lịch sự của lễ tân: **Would you like to**…?",
          note: "Không nói “I want book” (thiếu to, nghe cộc) và không nói “I would like book”. Nhớ: **would like + to + động từ**, hoặc **would like + danh từ**.",
          ex: [
            ["I would like to check in, please.", "Tôi muốn nhận phòng."],
            ["I would like to cancel my booking for Friday.", "Tôi muốn hủy đặt phòng ngày thứ Sáu."],
            ["I’d like to change to a bigger room.", "Tôi muốn đổi sang phòng lớn hơn."],
            ["Would you like to pay now or at check-out?", "Anh chị muốn thanh toán bây giờ hay khi trả phòng?"]
          ] }
      ],
      p: [
        "Khi đặt phòng, nói ngày đến và ngày đi bằng **from the + số thứ tự + to the + số thứ tự**: from the 12th to the 15th (đọc là the twelfth, the fifteenth). Ngày tháng trong tiếng Anh dùng số thứ tự, không dùng số đếm.",
        "Khách sạn tính tiền theo **đêm**, không theo ngày, nên nói **for three nights**. Nói “three days” dễ làm lễ tân hiểu nhầm số đêm bạn ở.",
        "Dùng **I would like to + động từ nguyên mẫu** để yêu cầu lịch sự. Câu “I want book…” vừa thiếu to vừa nghe cộc lốc."
      ],
      ex: [["I would like to book a room from the 12th to the 15th, for three nights.", "Tôi muốn đặt một phòng từ ngày 12 đến ngày 15, ba đêm."], ["A double room for two nights, please.", "Cho tôi một phòng đôi, hai đêm."]]
    },
    { h: "Đọc số phòng và nói tầng",
      f: ["số phòng đọc theo cặp: 512 → five-twelve", "số 0 đọc là “oh”: 305 → three-oh-five", "on the + số thứ tự + floor"],
      items: [
        { f: "số phòng đọc theo cặp: 512 → five-twelve",
          mean: "**đọc số phòng thành từng nhóm**: thường chữ số đầu là tầng, hai chữ số sau đọc thành một số.",
          parts: [
            ["số có 3 chữ số", "tách 1 + 2: 512 → five-twelve, 218 → two-eighteen, 734 → seven-thirty-four."],
            ["số có 4 chữ số", "tách 2 + 2: 1204 → twelve-oh-four, 1520 → fifteen-twenty."]
          ],
          use: "nói số phòng với lễ tân, nhân viên dọn phòng, nhà hàng (khi ký hóa đơn vào phòng). Thường đi kèm từ room: **room five-twelve**.",
          note: "Không đọc “five hundred and twelve”: đúng về số học nhưng nghe rất lạ. Mẹo: chia số làm hai phần như đọc giờ (five-twelve giống 5:12).",
          ex: [
            ["My room is two-eighteen.", "Phòng tôi là 218."],
            ["Could you send someone to room seven-thirty-four, please?", "Anh có thể cho người lên phòng 734 không?"],
            ["Please charge it to room fifteen-twenty.", "Xin tính vào phòng 1520."],
            ["Is this room six-eleven?", "Đây có phải phòng 611 không?"]
          ] },
        { f: "số 0 đọc là “oh”: 305 → three-oh-five",
          mean: "**chữ số 0 trong số phòng đọc là “oh”** (giống chữ cái O), không đọc zero.",
          parts: [
            ["oh", "cách đọc số 0 phổ biến nhất trong số phòng, số điện thoại, số chuyến bay. Ngắn và rõ."],
            ["zero", "cũng đúng nhưng ít dùng hơn khi đọc số phòng."],
            ["hundred", "khi số kết thúc bằng 00 thì đọc **hundred**: 400 → four hundred, 1200 → twelve hundred."]
          ],
          use: "khi số phòng có số 0 ở giữa: 305, 1008, 702. Đọc từng chữ số với phần có số 0: 702 → seven-oh-two.",
          note: "Người Việt hay đọc “three-zero-five” hoặc “three không five”. Hãy tập nói **oh** cho tự nhiên. Chú ý số tròn trăm: phòng 400 là **four hundred**, không phải “four-oh-oh”.",
          ex: [
            ["I am in room seven-oh-two.", "Tôi ở phòng 702."],
            ["Your room is four-oh-nine, on the fourth floor.", "Phòng của anh là 409, ở tầng bốn."],
            ["Did you say ten-oh-eight?", "Anh nói phòng 1008 phải không?"],
            ["The meeting room is room two hundred.", "Phòng họp là phòng 200."]
          ] },
        { f: "on the + số thứ tự + floor",
          mean: "**ở tầng (thứ mấy)**. Dùng giới từ on và số thứ tự.",
          parts: [
            ["on", "giới từ bắt buộc với floor: **on** the floor, không dùng in hay at."],
            ["the + số thứ tự", "the first, second, third, fourth, fifth, tenth… floor."],
            ["ground floor", "**tầng trệt** (cách nói của người Anh). Người Mỹ gọi tầng trệt là the first floor."]
          ],
          use: "nói phòng, nhà hàng, phòng tập, bể bơi ở tầng mấy. Câu hỏi: **Which floor** is it on? hoặc What floor is my room on?",
          note: "Không nói “in floor five” hay “on floor five” trong câu bình thường; nói **on the fifth floor**. Lưu ý cách gọi tầng ở Anh và Mỹ khác nhau, nên khi cần hãy hỏi lại.",
          ex: [
            ["The restaurant is on the second floor.", "Nhà hàng ở tầng hai."],
            ["Which floor is the gym on? It is on the tenth floor.", "Phòng tập ở tầng mấy? Ở tầng mười."],
            ["Could I have a room on a higher floor?", "Cho tôi phòng ở tầng cao hơn được không?"],
            ["Breakfast is served on the ground floor.", "Bữa sáng được phục vụ ở tầng trệt."]
          ] }
      ],
      p: [
        "Số phòng thường **đọc tách thành từng nhóm**, không đọc như số đếm: 512 là five-twelve, 1204 là twelve-oh-four. Đọc “five hundred twelve” nghe rất lạ với nhân viên khách sạn.",
        "Chữ số 0 trong số phòng thường đọc là **oh** (giống chữ O), vì ngắn và rõ hơn zero.",
        "Nói tầng dùng giới từ **on** và **số thứ tự**: on the third floor, on the fifth floor. Không dùng “in floor five”."
      ],
      ex: [["My room is on the fifth floor, room five-twelve.", "Phòng tôi ở tầng năm, phòng 512."], ["Room three-oh-five is on the third floor.", "Phòng 305 ở tầng ba."]]
    },
    { h: "an extra và some more + danh từ: xin thêm đồ",
      f: ["an extra + danh từ đếm được số ít", "some more / two more + danh từ đếm được số nhiều", "some more + danh từ không đếm được"],
      items: [
        { f: "an extra + danh từ đếm được số ít",
          mean: "**thêm một (cái gì)** ngoài những cái đã có sẵn trong phòng.",
          parts: [
            ["an", "dùng **an** vì extra bắt đầu bằng âm nguyên âm /e/."],
            ["extra", "**thêm, phụ**. Đứng trước danh từ như một tính từ."],
            ["danh từ đếm được số ít", "một món: blanket (chăn), pillow (gối), towel (khăn), bed (giường phụ), key card (thẻ phòng)."]
          ],
          use: "xin thêm **một** món đồ. Thường đứng sau Could I have…? hoặc Can we get…?",
          note: "Không nói “a extra” (phải là **an** extra) và không thêm -s cho danh từ (“an extra towels” là sai). Chú ý: an **extra bed** thường phải trả thêm tiền.",
          ex: [
            ["Could I have an extra pillow, please?", "Cho tôi thêm một cái gối được không?"],
            ["Can we get an extra bed for our son?", "Chúng tôi có thể có thêm một giường phụ cho con trai không?"],
            ["I need an extra key card for my wife.", "Tôi cần thêm một thẻ phòng cho vợ tôi."],
            ["Is there an extra charge for an extra bed?", "Giường phụ có tính thêm phí không?"]
          ] },
        { f: "some more / two more + danh từ đếm được số nhiều",
          mean: "**thêm vài (cái gì) / thêm hai (cái gì)**. Xin thêm nhiều món đồ đếm được.",
          parts: [
            ["some more", "**thêm vài, thêm một ít**. Không nói rõ số lượng."],
            ["two more, three more", "**thêm hai, thêm ba**. Nói rõ số lượng: số + more."],
            ["danh từ số nhiều", "thêm -s: towels, hangers (móc áo), cups, bottles of water."]
          ],
          use: "khi cần thêm nhiều hơn một món. Đặt some more hoặc số + more **trước** danh từ số nhiều.",
          note: "Thứ tự là **two more towels** (số trước more), không nói “more two towels”. Và danh từ phải ở số nhiều.",
          ex: [
            ["Could we have some more hangers?", "Cho chúng tôi thêm vài cái móc áo được không?"],
            ["I need two more towels, please.", "Tôi cần thêm hai cái khăn."],
            ["Can I have three more bottles of water?", "Cho tôi thêm ba chai nước được không?"],
            ["We do not need any more pillows, thank you.", "Chúng tôi không cần thêm gối nữa, cảm ơn."]
          ] },
        { f: "some more + danh từ không đếm được",
          mean: "**thêm một ít (cái gì)** với những thứ không đếm từng cái được.",
          parts: [
            ["some more", "**thêm một ít**. Không dùng a, an hay số đếm."],
            ["danh từ không đếm được", "toilet paper, shampoo, soap, coffee, milk, sugar, water. Không thêm -s."]
          ],
          use: "xin thêm đồ dùng trong phòng tắm hoặc đồ uống. Nếu muốn đếm thì thêm đơn vị: two **rolls** of toilet paper, a **bottle** of shampoo.",
          note: "Không nói “a toilet paper”, “two shampoos”, “some more soaps”. Mẹo: nếu không đếm 1, 2, 3 được thì dùng **some more** và không thêm -s.",
          ex: [
            ["Could I have some more shampoo, please?", "Cho tôi thêm một ít dầu gội được không?"],
            ["We need some more coffee in the room.", "Chúng tôi cần thêm cà phê trong phòng."],
            ["Could you bring some more milk for the coffee?", "Anh mang thêm một ít sữa để pha cà phê được không?"],
            ["We need some more toilet paper, please.", "Chúng tôi cần thêm giấy vệ sinh."]
          ] }
      ],
      p: [
        "Muốn xin thêm **một** món đồ đếm được, dùng **an extra**: an extra blanket, an extra pillow.",
        "Muốn xin thêm **nhiều** món, dùng **some more** hoặc con số + **more**, và danh từ phải ở số nhiều: some more towels, two more towels.",
        "Với danh từ **không đếm được** như toilet paper, shampoo, soap, dùng **some more** và không thêm a: some more toilet paper. Nói “a toilet paper” là sai."
      ],
      ex: [["Could I have some more towels?", "Cho tôi thêm vài cái khăn tắm được không?"], ["Can I have some toilet paper?", "Cho tôi xin ít giấy vệ sinh được không?"]]
    },
    { h: "Bốn cách nói “bị hỏng”",
      f: ["danh từ + is not working (rút gọn: isn’t working)", "danh từ + does not work (rút gọn: doesn’t work)", "danh từ + is broken", "There is no + danh từ (rút gọn: There’s no)"],
      items: [
        { f: "danh từ + is not working (rút gọn: isn’t working)",
          mean: "**(thiết bị) đang không chạy, không hoạt động** ngay lúc này.",
          parts: [
            ["is not working", "thì hiện tại tiếp diễn: vấn đề **đang xảy ra bây giờ**. Rút gọn: isn’t working (isn’t = is not)."],
            ["are not working", "dùng cho danh từ số nhiều: The lights **are not working**."]
          ],
          use: "cách phổ biến và tự nhiên nhất để gọi lễ tân báo thiết bị có vấn đề: điều hòa, TV, Wi-Fi, vòi sen, thang máy.",
          note: "Không nói “is not work” (sau is phải là động từ thêm -ing). Mẫu này nhẹ nhàng, không khẳng định đồ bị hỏng hẳn, nên rất hợp khi báo sự cố.",
          ex: [
            ["The air conditioner in my room is not working.", "Điều hòa trong phòng tôi không chạy."],
            ["The Wi-Fi isn’t working again.", "Wi-Fi lại không vào được."],
            ["The lights in the bathroom are not working.", "Đèn trong phòng tắm không sáng."],
            ["Is the elevator working now?", "Thang máy chạy lại chưa?"]
          ] },
        { f: "danh từ + does not work (rút gọn: doesn’t work)",
          mean: "**(thiết bị) không hoạt động được**, nói chung là không dùng được, không chỉ lúc này.",
          parts: [
            ["does not work", "thì hiện tại đơn: nói về tình trạng chung. Rút gọn: doesn’t work (doesn’t = does not)."],
            ["does not + động từ khác", "mô tả cụ thể hơn: does not **turn on** (không bật lên được), does not **open** (không mở được), does not **flush** (không xả nước được)."],
            ["do not work", "dùng cho danh từ số nhiều: The sockets **do not work**."]
          ],
          use: "báo thiết bị không dùng được, nhất là khi bạn đã thử nhiều lần. Có thể dùng động từ cụ thể để lễ tân hiểu ngay vấn đề.",
          note: "Không nói “does not works” (sau does not là động từ nguyên mẫu). Không nói “The TV not work” (thiếu does).",
          ex: [
            ["The key card does not work.", "Thẻ phòng không dùng được."],
            ["The toilet doesn’t flush.", "Bồn cầu không xả nước được."],
            ["The window does not open.", "Cửa sổ không mở được."],
            ["The sockets near the bed do not work.", "Ổ cắm gần giường không dùng được."]
          ] },
        { f: "danh từ + is broken",
          mean: "**(đồ vật) bị hỏng, bị vỡ** hẳn, có hư hại rõ ràng.",
          parts: [
            ["is broken", "**bị hỏng, bị vỡ**. Broken là quá khứ phân từ (cột thứ ba của động từ) của break, dùng như tính từ."],
            ["are broken", "dùng cho danh từ số nhiều: The chairs **are broken**."]
          ],
          use: "khi đồ vật hư hỏng rõ ràng: đèn vỡ, ghế gãy, khóa hỏng, gương nứt. Đặt is broken ngay sau tên đồ vật.",
          note: "Không nói “is break” hay “is breaking”. So sánh: **The TV is not working** (không chạy, có thể chỉ cần sửa nhỏ) và **The TV is broken** (hỏng hẳn).",
          ex: [
            ["The lock on the door is broken.", "Khóa cửa bị hỏng."],
            ["The mirror in the bathroom is broken.", "Gương trong phòng tắm bị vỡ."],
            ["Two of the chairs on the balcony are broken.", "Hai cái ghế ngoài ban công bị gãy."],
            ["Is the hair dryer broken?", "Máy sấy tóc bị hỏng à?"]
          ] },
        { f: "There is no + danh từ (rút gọn: There’s no)",
          mean: "**Không có (cái gì)**. Dùng khi thiếu hẳn một thứ lẽ ra phải có.",
          parts: [
            ["There is no", "**không có**. Rút gọn: There’s no (There’s = There is)."],
            ["danh từ", "thứ bị thiếu: hot water, soap, towel, toilet paper, remote control (điều khiển)."],
            ["There are no", "dùng với danh từ số nhiều: There are no towels."]
          ],
          use: "báo phòng thiếu đồ hoặc thiếu dịch vụ. Có thể thêm nơi chốn ở cuối: There is no soap **in the bathroom**.",
          note: "Không nói “Hot water is no have” hay “No have towel”. Sau **no** không cần a hay any: There is no towel (không nói “There is no a towel”).",
          ex: [
            ["There is no soap in the bathroom.", "Trong phòng tắm không có xà phòng."],
            ["There’s no remote control for the TV.", "Không có điều khiển TV."],
            ["There are no towels in my room.", "Phòng tôi không có khăn tắm."],
            ["There is no water in the kettle.", "Trong ấm đun không có nước."]
          ] }
      ],
      p: [
        "**is not working** là cách phổ biến nhất khi một thiết bị đang không chạy lúc bạn báo: The air conditioner is not working. **does not work** cũng đúng, nhấn mạnh là nó không hoạt động được: The TV does not turn on.",
        "**is broken** dùng khi đồ vật bị hư hỏng hẳn: The lamp is broken. **There is no + danh từ** dùng khi thiếu hẳn một thứ: There is no hot water.",
        "Không nói “is not work” vì sau is phải là động từ thêm -ing hoặc tính từ, và không nói “Hot water is no have”."
      ],
      ex: [["The fridge is not working.", "Tủ lạnh không chạy."], ["There is no hot water.", "Không có nước nóng."]]
    },
    { h: "Quá khứ đơn khi kiểm tra hóa đơn",
      f: ["chủ ngữ + động từ thêm -ed hoặc dạng quá khứ bất quy tắc", "chủ ngữ + did not + động từ nguyên mẫu (rút gọn: didn’t)", "Did + chủ ngữ + động từ nguyên mẫu?"],
      items: [
        { f: "chủ ngữ + động từ thêm -ed hoặc dạng quá khứ bất quy tắc",
          mean: "**đã làm gì** trong quá khứ. Câu khẳng định thì quá khứ đơn.",
          parts: [
            ["động từ thêm -ed", "động từ có quy tắc: order → **ordered**, use → **used**, stay → **stayed**, call → **called**."],
            ["dạng quá khứ bất quy tắc", "phải học thuộc: have → **had**, eat → **ate**, drink → **drank**, take → **took**, pay → **paid**."]
          ],
          use: "khi trả phòng, kể lại những gì đã dùng hoặc đã làm: đã uống gì trong tủ lạnh mini, đã gọi món gì, đã trả tiền chưa. Động từ giống nhau với mọi chủ ngữ (I had, she had).",
          note: "Người Việt hay quên chia động từ vì tiếng Việt chỉ thêm “đã”. Nhớ: chuyện đã xong thì **đổi động từ sang quá khứ**: I **paid** yesterday, không nói “I pay yesterday”.",
          ex: [
            ["I ordered room service last night.", "Tối qua tôi đã gọi đồ ăn lên phòng."],
            ["We drank two bottles of water from the minibar.", "Chúng tôi đã uống hai chai nước trong tủ lạnh mini."],
            ["I paid for the room when I checked in.", "Tôi đã trả tiền phòng lúc nhận phòng."],
            ["My husband used the laundry service.", "Chồng tôi đã dùng dịch vụ giặt ủi."]
          ] },
        { f: "chủ ngữ + did not + động từ nguyên mẫu (rút gọn: didn’t)",
          mean: "**đã không làm gì, không hề làm gì** trong quá khứ. Câu phủ định thì quá khứ đơn.",
          parts: [
            ["did not", "**đã không**. Dùng cho mọi chủ ngữ. Rút gọn: didn’t (didn’t = did not)."],
            ["động từ nguyên mẫu", "giữ nguyên, **không thêm -ed**, không dùng dạng bất quy tắc: did not **order**, did not **eat**."]
          ],
          use: "khi kiểm tra hóa đơn thấy có khoản mình không dùng, và cần nói lịch sự rằng mình không dùng. Có thể bắt đầu bằng Sorry, but… hoặc I think there is a mistake.",
          note: "Lỗi rất hay gặp: “I didn’t ordered”, “I didn’t ate”. Did đã mang nghĩa quá khứ, nên động từ sau đó **luôn ở nguyên mẫu**.",
          ex: [
            ["Sorry, but I did not order this pizza.", "Xin lỗi, nhưng tôi không gọi chiếc pizza này."],
            ["We didn’t drink anything from the minibar.", "Chúng tôi không uống gì trong tủ lạnh mini."],
            ["I did not use the phone in the room.", "Tôi không dùng điện thoại trong phòng."],
            ["My wife did not have breakfast this morning.", "Sáng nay vợ tôi không ăn sáng."]
          ] },
        { f: "Did + chủ ngữ + động từ nguyên mẫu?",
          mean: "**(ai đó) có làm… không? / đã… chưa?** Câu hỏi thì quá khứ đơn.",
          parts: [
            ["Did", "đặt ở **đầu câu** để hỏi về quá khứ. Dùng cho mọi chủ ngữ."],
            ["chủ ngữ", "you, he, she, we, they, my friend…"],
            ["động từ nguyên mẫu", "không thêm -ed: Did you **use**…?, Did you **enjoy**…?"]
          ],
          use: "lễ tân hỏi bạn khi trả phòng, hoặc bạn hỏi lại lễ tân. Trả lời ngắn: **Yes, I did** / **No, I did not**.",
          note: "Không nói “Did you used…?” hay “You used…?” (thiếu did). Có thể thêm từ để hỏi phía trước: **What did** you have? **When did** I pay?",
          ex: [
            ["Did you take anything from the minibar? No, I did not.", "Anh có lấy gì trong tủ lạnh mini không? Không, tôi không lấy."],
            ["Did you sleep well?", "Anh chị ngủ có ngon không?"],
            ["Did my friend leave a message for me?", "Bạn tôi có để lại lời nhắn cho tôi không?"],
            ["Did I pay for the airport taxi already?", "Tôi đã trả tiền taxi sân bay rồi phải không?"]
          ] }
      ],
      p: [
        "Khi trả phòng, bạn nói về những việc **đã xảy ra** trong lúc ở, nên dùng **thì quá khứ đơn**: I had a beer from the minibar.",
        "Câu phủ định dùng **did not + động từ nguyên mẫu**. Vì did đã mang nghĩa quá khứ, động từ phía sau giữ nguyên mẫu: I did not order this, không nói “didn’t ordered”.",
        "Lễ tân sẽ hỏi bạn bằng **Did you …?**: Did you use anything from the minibar? Did you enjoy your stay?"
      ],
      ex: [["I did not use the minibar.", "Tôi không dùng gì trong tủ lạnh mini."], ["Did you enjoy your stay?", "Anh chị ở có vui không?"]]
    }
  ],
  mistakes: [
    ["I want book room from 12 until 15, three days.", "I would like to book a room from the 12th to the 15th, for three nights.", "Dùng **I would like to** cho lịch sự, ngày dùng số thứ tự, và khách sạn tính theo **đêm**."],
    ["My room is in floor five, room five hundred twelve.", "My room is on the fifth floor, room five-twelve.", "Tầng dùng **on the + số thứ tự + floor**; số phòng đọc theo cặp."],
    ["Give me more towel.", "Could I have some more towels?", "Nhờ lịch sự bằng **Could I have**; nhiều cái thì danh từ phải thêm **-s**."],
    ["Can I have a toilet paper?", "Can I have some toilet paper?", "toilet paper là danh từ **không đếm được** nên dùng some, không dùng a."],
    ["The air conditioner is not work.", "The air conditioner is not working.", "Sau **is** phải là động từ thêm -ing; khi nói thường rút gọn thành isn’t working (isn’t = is not)."],
    ["Hot water is no have.", "There is no hot water.", "Nói thiếu một thứ gì đó dùng **There is no + danh từ** (rút gọn: There’s no)."],
    ["I don’t used minibar. I didn’t ordered this.", "I did not use the minibar. I did not order this.", "Việc đã qua dùng **did not** (didn’t = did not), và sau did not là động từ nguyên mẫu."]
  ],
  vocab: [
    ["reservation", "sự đặt phòng trước"], ["single room", "phòng đơn"], ["double room", "phòng đôi"], ["per night", "mỗi đêm"],
    ["included", "đã bao gồm"], ["fully booked", "hết phòng"], ["check in", "nhận phòng"], ["check out", "trả phòng"],
    ["passport", "hộ chiếu"], ["key card", "thẻ phòng"], ["lobby", "sảnh"], ["lift / elevator", "thang máy (Anh / Mỹ)"],
    ["floor", "tầng"], ["luggage", "hành lý"], ["towel", "khăn tắm"], ["pillow", "cái gối"],
    ["blanket", "cái chăn"], ["wake-up call", "cuộc gọi báo thức"], ["room service", "dịch vụ mang đồ ăn lên phòng"], ["housekeeping", "bộ phận buồng phòng"],
    ["front desk", "quầy lễ tân"], ["receipt", "hóa đơn, biên lai"], ["deposit", "tiền đặt cọc"], ["complimentary", "miễn phí, tặng kèm"]
  ],
  tips: [
    "Khi gọi lễ tân, luôn nói theo thứ tự ba ý: **số phòng**, **cái gì hỏng hoặc cần gì**, **bạn muốn khách sạn làm gì**.",
    "Bắt đầu lời phàn nàn bằng “Sorry to bother you, but…” và kết thúc bằng “Thank you so much”. Vấn đề thường được xử lý nhanh hơn khi bạn lịch sự.",
    "Nhân viên khách sạn hay nói Certainly, Of course, I do apologize. Hãy đáp lại cũng lịch sự bằng **Could you…?** thay vì Give me hoặc I want.",
    "Trước chuyến đi, tập đọc to ngày ở của bạn bằng số thứ tự, ví dụ: “from the twelfth to the fifteenth of December, for three nights”.",
    "Đóng vai trọn hành trình từ đặt phòng, check-in, xin thêm khăn, báo điều hòa hỏng đến check-out, mỗi lần đổi vai khách và lễ tân."
  ]
};
