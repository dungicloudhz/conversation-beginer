/* Cheat sheet: Transportation (Đi lại, di chuyển). Hiển thị bởi cheatsheet.js. */
window.A1_CHEAT = {
  goal: [
    "Gọi đúng tên các phương tiện và nói mình đi bằng gì với by, on foot, take, drive, ride.",
    "Hỏi tuyến xe buýt, mua vé tàu, lên xuống đúng trạm với get on, get off.",
    "Gọi taxi và xe công nghệ, nói điểm đến và nhờ tài xế một cách lịch sự.",
    "Làm thủ tục ở sân bay, chọn ghế và hiểu giờ lên máy bay.",
    "Nói khoảng cách, thời gian đi lại và tình trạng giao thông bằng How far, How long, It takes."
  ],
  phrases: [
    { h: "Nói bạn đi bằng gì", rows: [
      ["How do you get to work?", "Bạn đi làm bằng gì?"],
      ["I go by motorbike.", "Tôi đi xe máy."],
      ["I usually take the bus.", "Tôi thường đi xe buýt."],
      ["I walk to school.", "Tôi đi bộ đến trường."],
      ["My father drives to work.", "Bố tôi lái ô tô đi làm."]
    ]},
    { h: "Xe buýt, tàu hỏa và metro", rows: [
      ["Which bus goes to the Old Quarter?", "Xe buýt nào đi Phố Cổ?"],
      ["How often does the bus come?", "Bao lâu thì có một chuyến?"],
      ["A single ticket to Da Nang, please.", "Cho tôi một vé một chiều đi Đà Nẵng."],
      ["Which platform does the train leave from?", "Tàu chạy ở sân ga số mấy?"],
      ["Can you tell me when to get off?", "Đến chỗ xuống thì báo tôi nhé?"]
    ]},
    { h: "Đi taxi và xe công nghệ", rows: [
      ["Where to?", "Đi đâu ạ?", "Câu tài xế hay hỏi, rút gọn từ Where would you like to go?"],
      ["To the airport, please.", "Cho tôi ra sân bay."],
      ["Could you take me to this address?", "Anh chở tôi đến địa chỉ này được không?"],
      ["Could you turn on the meter, please?", "Anh bật đồng hồ tính tiền giúp tôi."],
      ["I booked a Grab. I am waiting at the main gate.", "Tôi đặt Grab rồi. Tôi đang đợi ở cổng chính.", "Thường nói I’m waiting… (I’m = I am)."]
    ]},
    { h: "Ở sân bay", rows: [
      ["How many bags are you checking in?", "Anh chị ký gửi mấy kiện hành lý?"],
      ["Just one suitcase and this carry-on.", "Một vali và túi xách tay này thôi."],
      ["Could I have a window seat, please?", "Cho tôi ghế cạnh cửa sổ."],
      ["I would prefer an aisle seat.", "Tôi muốn ghế cạnh lối đi.", "Thường nói I’d prefer… (I’d = I would)."],
      ["Is the flight on time?", "Chuyến bay có đúng giờ không?"]
    ]},
    { h: "Khoảng cách và giao thông", rows: [
      ["How far is it from your house to your office?", "Từ nhà bạn đến công ty bao xa?"],
      ["It takes about twenty minutes by motorbike.", "Đi xe máy mất khoảng hai mươi phút."],
      ["The traffic is terrible today.", "Hôm nay đường kẹt kinh khủng."],
      ["I am stuck in a traffic jam.", "Tôi đang bị kẹt xe.", "Dạng rút gọn: I’m stuck…"],
      ["Sorry, I missed the bus.", "Xin lỗi, tôi bị lỡ xe buýt."]
    ]},
    { h: "Nói cho tự nhiên hơn", rows: [
      ["I am running late. I will be there in ten minutes.", "Tôi đang trễ. Mười phút nữa tôi đến.", "Thường nói I’m running late. I’ll be there… (I’ll = I will)."],
      ["It is quicker to take the metro.", "Đi metro nhanh hơn.", "Dạng rút gọn: It’s quicker…"],
      ["Have a safe trip!", "Thượng lộ bình an!"],
      ["Text me when you get there.", "Đến nơi thì nhắn tôi nhé."]
    ]}
  ],
  grammar: [
    { h: "by + phương tiện, on foot, và các động từ take, drive, ride",
      f: ["by + phương tiện (không có a / the)", "on foot", "take + the / a + xe công cộng hoặc xe thuê", "drive + ô tô / ride + xe máy hoặc xe đạp"],
      p: [
        "Khi chỉ nói chung là đi bằng loại phương tiện nào, dùng **by + phương tiện** và **không** thêm a hay the: by bus, by car, by train, by plane.",
        "Đi bộ là ngoại lệ: nói **on foot** hoặc dùng động từ **walk**, không nói “by foot”.",
        "Muốn nói rõ hành động, dùng động từ: **take** cho xe chung hoặc xe thuê (take the bus, take a taxi), **drive** khi tự lái ô tô, **ride** khi đi xe máy, xe đạp."
      ],
      ex: [["I go to work by bus.", "Tôi đi làm bằng xe buýt."], ["I ride my bike to the park.", "Tôi đạp xe ra công viên."]]
    },
    { h: "get on / get off và get in / get out of",
      f: ["get on / get off + bus, train, plane, metro, motorbike, bike", "get in / get out of + car, taxi"],
      p: [
        "Với phương tiện lớn có thể đứng hoặc đi lại bên trong (xe buýt, tàu, máy bay) và phương tiện mình ngồi lên trên (xe máy, xe đạp), dùng **get on** để lên và **get off** để xuống.",
        "Với xe nhỏ phải cúi người chui vào (ô tô, taxi), dùng **get in** và **get out of**. Không dịch từng chữ “xuống” thành “get down”."
      ],
      ex: [["I get off the bus at the next stop.", "Tôi xuống xe buýt ở trạm sau."], ["Get out of the taxi here.", "Xuống taxi ở đây."]]
    },
    { h: "Nhờ tài xế lịch sự: Could you…, please?",
      f: ["Could you + động từ nguyên mẫu, please?", "Please + động từ nguyên mẫu", "Địa điểm + please"],
      p: [
        "Nói chuyện với tài xế nên dùng **Could you…, please?** để nhờ, vì câu mệnh lệnh trống không nghe cộc và thiếu tôn trọng.",
        "Khi chỉ cần nói điểm đến, câu ngắn **Địa điểm + please** là đủ lịch sự (The train station, please). Khi chỉ hướng trên đường, dùng **Please + động từ nguyên mẫu**."
      ],
      ex: [["Could you drive a bit slower, please?", "Anh lái chậm hơn một chút được không?"], ["Please turn left at the next corner.", "Anh rẽ trái ở góc đường tới nhé."]]
    },
    { h: "Hiện tại đơn cho lịch trình cố định",
      f: ["Chủ ngữ + động từ (thêm -s) + at + giờ", "What time does + chủ ngữ + động từ nguyên mẫu?"],
      p: [
        "Giờ tàu, giờ xe, giờ bay đã có trong lịch là chuyện cố định, nên dùng **thì hiện tại đơn** dù sự việc xảy ra trong tương lai. Dùng “will” ở đây nghe không tự nhiên.",
        "Chủ ngữ số ít (the flight, the bus) thì động từ thêm **-s**. Trong câu hỏi có **does**, động từ chính trở về nguyên mẫu."
      ],
      ex: [["The flight leaves at eight fifteen.", "Chuyến bay cất cánh lúc tám giờ mười lăm."], ["What time does the train arrive in Hue?", "Mấy giờ tàu đến Huế?"]]
    },
    { h: "How far, How long và It takes + thời gian",
      f: ["How far is it? → It is + khoảng cách", "How long does it take? → It takes + thời gian", "It takes + người + thời gian + to + động từ nguyên mẫu"],
      p: [
        "Dùng **How far** để hỏi **khoảng cách** (bao xa), trả lời bằng kilomet hoặc mét. Dùng **How long does it take?** để hỏi **thời gian** (mất bao lâu).",
        "Muốn nói ai đó mất bao lâu để làm gì, chủ ngữ là **It**, không phải người: It takes me an hour to get to work. Không nói “I take 30 minutes to go to school”."
      ],
      ex: [["It is about eight kilometers.", "Khoảng tám cây số."], ["It takes me thirty minutes to get to school.", "Tôi mất ba mươi phút để đến trường."]]
    }
  ],
  mistakes: [
    ["I go to work by the bus.", "I go to work by bus.", "Sau **by** không dùng a hoặc the."],
    ["I go by foot.", "I go on foot.", "Đi bộ là **on foot**, hoặc nói đơn giản I walk."],
    ["I get down the bus at the next stop.", "I get off the bus at the next stop.", "Xuống xe buýt, tàu dùng **get off**; xuống taxi dùng **get out of**."],
    ["Go airport. Fast!", "To the airport, please. I am in a bit of a hurry.", "Câu cộc nghe thiếu tôn trọng; thêm **please**. Thường nói I’m in a bit of a hurry (I’m = I am)."],
    ["The bus will leave at 6 according to the timetable.", "The bus leaves at six.", "Lịch trình cố định dùng **thì hiện tại đơn**."],
    ["I take 30 minutes to go to school.", "It takes me thirty minutes to get to school.", "Chủ ngữ là **It**: It takes + người + thời gian + to + động từ nguyên mẫu."],
    ["Have a nice travel!", "Have a nice trip!", "**travel** thường là động từ; một chuyến đi là danh từ **trip**."]
  ],
  vocab: [
    ["motorbike", "xe máy"], ["car", "ô tô"], ["bus", "xe buýt"], ["bicycle / bike", "xe đạp"],
    ["metro / subway", "tàu điện (Anh / Mỹ)"], ["train", "tàu hỏa"], ["plane", "máy bay"], ["ferry", "phà"],
    ["bus stop", "trạm xe buýt"], ["station", "nhà ga, bến"], ["platform", "sân ga"], ["single / one-way ticket", "vé một chiều"],
    ["return / round-trip ticket", "vé khứ hồi"], ["fare", "giá vé"], ["timetable / schedule", "lịch chạy"], ["meter", "đồng hồ tính tiền taxi"],
    ["check in", "làm thủ tục"], ["boarding pass", "thẻ lên máy bay"], ["gate", "cửa ra máy bay"], ["luggage", "hành lý"],
    ["delayed", "bị hoãn, trễ"], ["traffic jam", "kẹt xe"], ["helmet", "mũ bảo hiểm"], ["rush hour", "giờ cao điểm"]
  ],
  tips: [
    "Khi đi taxi ở nước ngoài, cho tài xế xem địa chỉ trên điện thoại và nói **Could you take me here, please?** để tránh nhầm tên đường khó đọc.",
    "Nhớ cặp đôi: **get on / get off** cho xe buýt, tàu, máy bay; **get in / get out of** cho ô tô, taxi.",
    "Ở quầy thủ tục, nhớ hai từ chọn ghế: **window seat** (cạnh cửa sổ) và **aisle seat** (cạnh lối đi).",
    "Nói ba tuyến đường bạn hay đi bằng How far, How long và It takes, ví dụ “It takes me twenty minutes to get to work by motorbike.”",
    "Thu âm một phút kể chuyến đi gần nhất của bạn từ nhà đến nơi, dùng đủ by, take, get off và It takes."
  ]
};
