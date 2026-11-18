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
      p: [
        "Khi đặt phòng, nói ngày đến và ngày đi bằng **from the + số thứ tự + to the + số thứ tự**: from the 12th to the 15th (đọc là the twelfth, the fifteenth). Ngày tháng trong tiếng Anh dùng số thứ tự, không dùng số đếm.",
        "Khách sạn tính tiền theo **đêm**, không theo ngày, nên nói **for three nights**. Nói “three days” dễ làm lễ tân hiểu nhầm số đêm bạn ở.",
        "Dùng **I would like to + động từ nguyên mẫu** để yêu cầu lịch sự. Câu “I want book…” vừa thiếu to vừa nghe cộc lốc."
      ],
      ex: [["I would like to book a room from the 12th to the 15th, for three nights.", "Tôi muốn đặt một phòng từ ngày 12 đến ngày 15, ba đêm."], ["A double room for two nights, please.", "Cho tôi một phòng đôi, hai đêm."]]
    },
    { h: "Đọc số phòng và nói tầng",
      f: ["số phòng đọc theo cặp: 512 → five-twelve", "số 0 đọc là “oh”: 305 → three-oh-five", "on the + số thứ tự + floor"],
      p: [
        "Số phòng thường **đọc tách thành từng nhóm**, không đọc như số đếm: 512 là five-twelve, 1204 là twelve-oh-four. Đọc “five hundred twelve” nghe rất lạ với nhân viên khách sạn.",
        "Chữ số 0 trong số phòng thường đọc là **oh** (giống chữ O), vì ngắn và rõ hơn zero.",
        "Nói tầng dùng giới từ **on** và **số thứ tự**: on the third floor, on the fifth floor. Không dùng “in floor five”."
      ],
      ex: [["My room is on the fifth floor, room five-twelve.", "Phòng tôi ở tầng năm, phòng 512."], ["Room three-oh-five is on the third floor.", "Phòng 305 ở tầng ba."]]
    },
    { h: "an extra và some more + danh từ: xin thêm đồ",
      f: ["an extra + danh từ đếm được số ít", "some more / two more + danh từ đếm được số nhiều", "some more + danh từ không đếm được"],
      p: [
        "Muốn xin thêm **một** món đồ đếm được, dùng **an extra**: an extra blanket, an extra pillow.",
        "Muốn xin thêm **nhiều** món, dùng **some more** hoặc con số + **more**, và danh từ phải ở số nhiều: some more towels, two more towels.",
        "Với danh từ **không đếm được** như toilet paper, shampoo, soap, dùng **some more** và không thêm a: some more toilet paper. Nói “a toilet paper” là sai."
      ],
      ex: [["Could I have some more towels?", "Cho tôi thêm vài cái khăn tắm được không?"], ["Can I have some toilet paper?", "Cho tôi xin ít giấy vệ sinh được không?"]]
    },
    { h: "Bốn cách nói “bị hỏng”",
      f: ["danh từ + is not working (rút gọn: isn’t working)", "danh từ + does not work (rút gọn: doesn’t work)", "danh từ + is broken", "There is no + danh từ (rút gọn: There’s no)"],
      p: [
        "**is not working** là cách phổ biến nhất khi một thiết bị đang không chạy lúc bạn báo: The air conditioner is not working. **does not work** cũng đúng, nhấn mạnh là nó không hoạt động được: The TV does not turn on.",
        "**is broken** dùng khi đồ vật bị hư hỏng hẳn: The lamp is broken. **There is no + danh từ** dùng khi thiếu hẳn một thứ: There is no hot water.",
        "Không nói “is not work” vì sau is phải là động từ thêm -ing hoặc tính từ, và không nói “Hot water is no have”."
      ],
      ex: [["The fridge is not working.", "Tủ lạnh không chạy."], ["There is no hot water.", "Không có nước nóng."]]
    },
    { h: "Quá khứ đơn khi kiểm tra hóa đơn",
      f: ["chủ ngữ + động từ thêm -ed hoặc dạng quá khứ bất quy tắc", "chủ ngữ + did not + động từ nguyên mẫu (rút gọn: didn’t)", "Did + chủ ngữ + động từ nguyên mẫu?"],
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
