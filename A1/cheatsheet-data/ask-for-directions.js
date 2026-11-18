/* Cheat sheet: Asking for Directions and the Time (Hỏi đường và hỏi giờ). Hiển thị bởi cheatsheet.js. */
window.A1_CHEAT = {
  goal: [
    "Mở lời lịch sự với người lạ và hỏi đường đến một địa điểm cụ thể.",
    "Nghe hiểu lời chỉ đường: đi thẳng, rẽ trái, rẽ phải, quay lại và các giới từ chỉ vị trí.",
    "Tự chỉ đường cho người khác bằng câu mệnh lệnh ngắn gọn.",
    "Hỏi giờ lịch sự và nói giờ bằng hai cách: đọc số và dùng past / to.",
    "Hẹn giờ, hỏi lịch tàu xe và dùng đúng at, in, on với thời gian."
  ],
  phrases: [
    { h: "Mở lời với người lạ", rows: [
      ["Excuse me, can you help me?", "Xin lỗi, bạn giúp tôi được không?", "Luôn bắt đầu bằng **Excuse me** để gọi người lạ một cách lịch sự."],
      ["Sorry to bother you.", "Xin lỗi đã làm phiền bạn."],
      ["Sorry, I am lost.", "Xin lỗi, tôi bị lạc.", "Người bản xứ nói Sorry, I’m lost. (I’m = I am)."],
      ["I am looking for the train station.", "Tôi đang tìm ga tàu.", "Dạng rút gọn: I’m looking for…"]
    ]},
    { h: "Hỏi đường đến một nơi", rows: [
      ["Where is the nearest bank?", "Ngân hàng gần nhất ở đâu?"],
      ["How do I get to the train station?", "Tôi đến ga tàu bằng cách nào?"],
      ["Is there a pharmacy near here?", "Gần đây có hiệu thuốc không?"],
      ["Is it far from here?", "Chỗ đó có xa đây không?"],
      ["How long does it take to walk there?", "Đi bộ đến đó mất bao lâu?"]
    ]},
    { h: "Nghe hiểu lời chỉ đường", rows: [
      ["Go straight for two blocks.", "Đi thẳng qua hai dãy nhà."],
      ["Turn left at the traffic light.", "Rẽ trái ở chỗ đèn giao thông."],
      ["It is next to the post office.", "Nó ở cạnh bưu điện.", "Người chỉ đường thường nói It’s… (It’s = It is)."],
      ["It is about five minutes on foot.", "Đi bộ khoảng năm phút."],
      ["You cannot miss it.", "Bạn không thể nhầm được đâu.", "Câu cố định này hầu như luôn nói rút gọn: You can’t miss it. (can’t = cannot)."]
    ]},
    { h: "Hỏi giờ và hỏi lịch", rows: [
      ["Excuse me, do you have the time?", "Xin lỗi, bạn có biết mấy giờ không?", "Đừng nhầm với “Do you have time?” (Bạn có rảnh không?). Phải có chữ **the**."],
      ["Could you tell me the time, please?", "Bạn cho tôi biết giờ được không ạ?"],
      ["What time does the shop close?", "Cửa hàng đóng cửa lúc mấy giờ?"],
      ["When does the train leave?", "Tàu rời đi khi nào?"],
      ["It is a quarter to four.", "Bốn giờ kém mười lăm.", "Dạng rút gọn: It’s a quarter to four."]
    ]},
    { h: "Hẹn gặp và khi đến trễ", rows: [
      ["Let’s meet at six o’clock.", "Mình gặp nhau lúc sáu giờ nhé.", "Let’s = Let us, nhưng khi rủ rê luôn nói dạng rút gọn Let’s."],
      ["Are you free on Saturday?", "Thứ Bảy bạn rảnh không?"],
      ["I am sorry, I am running late.", "Xin lỗi, tôi đang bị trễ.", "Thường nói I’m sorry, I’m running late."],
      ["I am ten minutes late.", "Tôi trễ mười phút."]
    ]},
    { h: "Khi chưa nghe rõ", rows: [
      ["Could you say that again, please?", "Bạn nhắc lại giúp tôi được không?"],
      ["Could you speak more slowly?", "Bạn nói chậm hơn được không?"],
      ["Do you mind showing me on the map?", "Phiền bạn chỉ giúp trên bản đồ được không?"],
      ["Am I going the right way?", "Tôi đi đúng đường chưa?"]
    ]}
  ],
  grammar: [
    { h: "Câu hỏi đường: Where is…?, Is there…?, How do I get to…?",
      f: ["Where is + the + nơi chốn?", "Where are + nơi chốn số nhiều?", "Is there a + danh từ + near here?", "How do I get to + nơi chốn?"],
      p: [
        "Dùng **Where is the…?** khi bạn biết chắc nơi đó có tồn tại và chỉ cần biết vị trí. Nếu danh từ ở số nhiều (the toilets) thì đổi thành **Where are**.",
        "Dùng **Is there a… near here?** khi bạn chưa biết gần đó có nơi ấy hay không, ví dụ đang cần tìm bất kỳ hiệu thuốc nào.",
        "Dùng **How do I get to…?** khi muốn hỏi cách đi, không chỉ vị trí. Trong câu hỏi, động từ **is** phải đứng trước nơi chốn, không để ở cuối câu."
      ],
      ex: [["Where is the museum?", "Bảo tàng ở đâu?"], ["Is there a café near here?", "Gần đây có quán cà phê không?"]]
    },
    { h: "Câu mệnh lệnh để chỉ đường",
      f: ["Động từ nguyên mẫu + hướng hoặc nơi chốn", "Do not + động từ nguyên mẫu", "Please + động từ nguyên mẫu"],
      p: [
        "Khi chỉ đường, người bản xứ dùng **động từ nguyên mẫu đứng đầu câu**, không cần chủ ngữ “you”. Câu ngắn giúp người nghe dễ nhớ từng bước.",
        "Muốn bảo đừng làm gì, thêm **Do not** phía trước (khi nói thường rút gọn thành Don’t; Don’t = Do not). Muốn lịch sự hơn, thêm **Please** ở đầu câu.",
        "Nói “turn left”, không nói “turn to left”. Nối các bước bằng **then** (sau đó)."
      ],
      ex: [["Go straight, then turn left.", "Đi thẳng, sau đó rẽ trái."], ["Turn around, cross the street, and it is on your right.", "Quay lại, băng qua đường, nó ở bên phải bạn."]]
    },
    { h: "Giới từ chỉ vị trí",
      f: ["It is + next to / opposite / behind / in front of + nơi chốn", "It is between + nơi thứ nhất + and + nơi thứ hai", "It is on the corner"],
      p: [
        "Sau khi chỉ hướng, bạn cần nói nơi đó nằm cạnh cái gì để người nghe dễ nhận ra: **next to** (bên cạnh), **opposite / across from** (đối diện), **behind** (phía sau), **in front of** (phía trước).",
        "**between** luôn đi với hai nơi nối bằng **and**. Với góc đường dùng **on the corner**."
      ],
      ex: [["The bank is next to the school.", "Ngân hàng ở cạnh trường học."], ["It is between the bank and the shop.", "Nó ở giữa ngân hàng và cửa hàng."]]
    },
    { h: "Nói giờ bằng hai cách",
      f: ["It is + giờ + phút (It is three fifteen)", "It is + phút + past + giờ (từ phút 1 đến 30)", "It is + phút còn thiếu + to + giờ tiếp theo (từ phút 31 đến 59)", "It is + giờ + o’clock (giờ tròn)"],
      p: [
        "Cách dễ nhất là **đọc số**: giờ trước, phút sau (3:15 là three fifteen). Phút có số 0 đứng trước thì đọc là “oh”: 3:05 là three oh five.",
        "Cách thứ hai dùng **past** (qua) và **to** (kém). Từ phút 1 đến 30 dùng past; từ phút 31 đến 59 dùng to và **cộng thêm một giờ**: 3:50 là ten to four. 15 phút là **a quarter**, 30 phút là **half**.",
        "Dùng **o’clock** chỉ với giờ tròn. Buổi sáng thêm **a.m.**, buổi chiều tối thêm **p.m.**; 12 giờ trưa là **noon**, 12 giờ đêm là **midnight**."
      ],
      ex: [["It is half past three.", "Ba giờ rưỡi."], ["It is ten to four.", "Bốn giờ kém mười."]]
    },
    { h: "Giới từ thời gian: at, in, on",
      f: ["at + giờ cụ thể", "in + buổi trong ngày", "on + thứ hoặc ngày"],
      p: [
        "Dùng **at** cho một thời điểm chính xác trên đồng hồ: at seven thirty, at noon. Dùng **in** cho một khoảng dài hơn trong ngày: in the morning, in the afternoon, in the evening.",
        "Dùng **on** cho thứ trong tuần và ngày cụ thể: on Monday, on Saturday. Mẹo nhớ: khoảng càng nhỏ và chính xác thì dùng at."
      ],
      ex: [["The bus leaves at seven thirty.", "Xe buýt chạy lúc bảy giờ ba mươi."], ["The shop opens on Monday.", "Cửa hàng mở cửa vào thứ Hai."]]
    },
    { h: "Hỏi giờ của lịch trình: What time does…?",
      f: ["What time does + chủ ngữ số ít + động từ nguyên mẫu?", "When does + chủ ngữ + động từ nguyên mẫu?", "Chủ ngữ + động từ thêm -s + at + giờ"],
      p: [
        "Giờ tàu xe, giờ chiếu phim, giờ mở cửa là lịch cố định, nên dùng **thì hiện tại đơn** dù sự việc xảy ra trong tương lai.",
        "Trong câu hỏi đã có **does** nên động từ chính trở về nguyên mẫu (start, leave, close). Khi trả lời, chủ ngữ số ít thì động từ thêm **-s**: It leaves at half past nine."
      ],
      ex: [["What time does the movie start?", "Phim bắt đầu lúc mấy giờ?"], ["It leaves at half past nine.", "Tàu rời đi lúc chín giờ rưỡi."]]
    }
  ],
  mistakes: [
    ["Where the bank is?", "Where is the bank?", "Trong câu hỏi, **is** phải đứng trước chủ ngữ."],
    ["You go straight and you turn to left.", "Go straight, then turn left.", "Chỉ đường dùng câu mệnh lệnh, không cần “you”; nói **turn left**, không có “to”."],
    ["It is ten to three. (khi đồng hồ chỉ 3:50)", "It is ten to four.", "Dùng **to** thì phải cộng thêm một giờ: còn mười phút nữa là đến bốn giờ."],
    ["See you in 7 o’clock.", "See you at seven o’clock.", "Giờ cụ thể luôn đi với **at**."],
    ["Do you have time? (khi muốn hỏi giờ)", "Do you have the time?", "Thiếu **the** thì câu có nghĩa là “Bạn có rảnh không?”."],
    ["What time the movie starts?", "What time does the movie start?", "Câu hỏi cần trợ động từ **does**, và động từ chính trở về nguyên mẫu."],
    ["Tell me the time!", "Could you tell me the time, please?", "Câu mệnh lệnh trống không nghe thiếu lịch sự với người lạ; dùng **Could you… please?**"]
  ],
  vocab: [
    ["bank", "ngân hàng"], ["pharmacy", "hiệu thuốc"], ["hospital", "bệnh viện"], ["bus stop", "trạm xe buýt"],
    ["restroom", "nhà vệ sinh"], ["train station", "ga tàu"], ["post office", "bưu điện"], ["go straight", "đi thẳng"],
    ["turn left / turn right", "rẽ trái / rẽ phải"], ["turn around", "quay lại"], ["traffic light", "đèn giao thông"], ["block", "dãy nhà, khối nhà"],
    ["corner", "góc đường"], ["next to", "bên cạnh"], ["opposite / across from", "đối diện"], ["between", "ở giữa"],
    ["on foot", "đi bộ"], ["o’clock", "giờ đúng, giờ tròn"], ["a quarter", "mười lăm phút"], ["half past", "rưỡi"],
    ["noon", "mười hai giờ trưa"], ["midnight", "mười hai giờ đêm"], ["intersection", "ngã tư"], ["on time", "đúng giờ"]
  ],
  tips: [
    "Luôn mở đầu bằng **Excuse me** và kết thúc bằng **Thank you**; người bản xứ rất quý sự lịch sự này.",
    "Nếu chưa nghe kịp lời chỉ đường, đừng ngại nói **Could you say that again, please?** hoặc nhờ chỉ trên bản đồ.",
    "Mỗi lần nhìn đồng hồ trong ngày, nói to giờ đó bằng cả hai cách, ví dụ “It is eight forty-five” và “It is a quarter to nine”.",
    "Nhớ quy tắc kém giờ: phút 31 đến 59 dùng **to** và cộng thêm một giờ.",
    "Vẽ đường từ nhà bạn đến chợ hoặc trạm xe buýt gần nhất, rồi tập chỉ đường bằng Go straight, Turn left, It is next to…"
  ]
};
