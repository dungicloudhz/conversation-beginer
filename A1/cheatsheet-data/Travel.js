/* Cheat sheet: Travel (Đi du lịch). Hiển thị bởi cheatsheet.js. */
window.A1_CHEAT = {
  goal: [
    "Nói về kế hoạch du lịch sắp tới: đi đâu, bao lâu, với ai, mang theo gì.",
    "Nhận phòng, hỏi tiện ích và trả phòng khách sạn.",
    "Hỏi thông tin tham quan: giờ mở cửa, giá vé, tour và xin phép chụp ảnh.",
    "Hỏi người khác đã từng đi đâu và kể lại chuyến đi của mình bằng quá khứ đơn.",
    "Báo sự cố khi du lịch như mất hành lý, bị lấy cắp đồ, phòng có vấn đề."
  ],
  phrases: [
    { h: "Lên kế hoạch chuyến đi", rows: [
      ["Do you have any plans for the holiday?", "Kỳ nghỉ này bạn có kế hoạch gì không?"],
      ["I am going to Da Nang for five days.", "Tôi sẽ đi Đà Nẵng năm ngày.", "Người bản xứ nói I’m going to Da Nang… (I’m = I am). Dùng **for + khoảng thời gian** để nói đi bao lâu."],
      ["I am traveling with my family.", "Tôi đi cùng gia đình.", "Dạng rút gọn: I’m traveling…"],
      ["We have already booked our flights and hotel.", "Chúng tôi đặt vé máy bay và khách sạn rồi.", "Dạng rút gọn: We’ve already booked… (We’ve = We have)."],
      ["Do I need a visa? What should I pack?", "Tôi có cần visa không? Tôi nên mang theo gì?"]
    ]},
    { h: "Nhận phòng và trả phòng", rows: [
      ["Hi, I would like to check in. I have a reservation under the name Tran.", "Chào bạn, tôi muốn nhận phòng. Tôi đặt dưới tên Trần.", "Thường nói I’d like to check in (I’d = I would)."],
      ["Is breakfast included?", "Có bao gồm bữa sáng không?"],
      ["What time is checkout?", "Mấy giờ phải trả phòng?"],
      ["Could I have a late checkout?", "Cho tôi trả phòng muộn được không?"],
      ["Can I leave my luggage here after checkout?", "Trả phòng xong tôi gửi hành lý ở đây được không?"]
    ]},
    { h: "Ở quầy thông tin du lịch", rows: [
      ["What are the must-see places around here?", "Quanh đây có chỗ nào nhất định phải xem?"],
      ["What time does the museum open?", "Bảo tàng mở cửa lúc mấy giờ?"],
      ["How much is the entrance fee?", "Vé vào cửa bao nhiêu?"],
      ["Is there a guided tour in English?", "Có tour hướng dẫn bằng tiếng Anh không?"],
      ["Where do locals usually go?", "Người địa phương thường hay đến đâu?", "Câu trả lời thường hay hơn danh sách trong sách hướng dẫn."]
    ]},
    { h: "Hỏi và kể chuyện chuyến đi", rows: [
      ["Have you ever been to Japan?", "Bạn đã bao giờ đến Nhật chưa?"],
      ["Yes, I went there last spring.", "Rồi, mình đi hồi mùa xuân năm ngoái."],
      ["How was your trip?", "Chuyến đi của bạn thế nào?"],
      ["It was amazing! The food was incredible.", "Tuyệt vời! Đồ ăn ngon không tưởng."],
      ["I would love to go back someday.", "Mình rất muốn quay lại một ngày nào đó.", "Thường nói I’d love to… (I’d = I would)."]
    ]},
    { h: "Báo sự cố", rows: [
      ["My luggage did not arrive.", "Hành lý của tôi không đến.", "Dạng rút gọn: didn’t = did not."],
      ["I think my wallet was stolen.", "Hình như ví của tôi bị lấy cắp."],
      ["The air conditioner in my room is not working.", "Điều hòa phòng tôi không chạy.", "Dạng rút gọn: isn’t = is not."],
      ["Could I change rooms? It is very noisy.", "Tôi đổi phòng được không? Ồn quá.", "Dạng rút gọn: It’s very noisy."],
      ["I missed my train. What should I do?", "Tôi lỡ tàu rồi. Tôi nên làm gì?"]
    ]}
  ],
  grammar: [
    { h: "Nói về kế hoạch: be going to, hiện tại tiếp diễn và will",
      f: ["be going to + động từ nguyên mẫu", "be + động từ thêm -ing (đã sắp xếp)", "will + động từ nguyên mẫu (quyết định ngay lúc nói)"],
      p: [
        "Dùng **be going to** cho dự định bạn đã nghĩ từ trước (I am going to try the local food).",
        "Dùng **thì hiện tại tiếp diễn** khi kế hoạch đã được sắp xếp xong, ví dụ đã đặt vé, đã có giờ cụ thể (We are flying to Hue on Friday).",
        "Dùng **will** cho quyết định vừa nảy ra ngay lúc nói. Không dùng hiện tại đơn “I go” cho kế hoạch của bản thân, vì nghe như thói quen."
      ],
      ex: [["Next week I am going to Da Nang with my family.", "Tuần sau tôi sẽ đi Đà Nẵng với gia đình."], ["It is cold there? I will bring a jacket.", "Ở đó lạnh à? Vậy tôi sẽ mang áo khoác."]]
    },
    { h: "Hỏi ở khách sạn: Is … included?, Could I have…?, Is there…?",
      f: ["Is + danh từ + included?", "Could I have + danh từ?", "Is there a / an + danh từ?"],
      p: [
        "Dùng **Is … included?** để hỏi một dịch vụ có nằm trong giá phòng không. Chữ **included** là dạng bị động (được bao gồm), nên cần **is** phía trước.",
        "Dùng **Could I have…?** để xin thêm thứ gì đó một cách lịch sự. Dùng **Is there a…?** để hỏi khách sạn có tiện ích nào đó không. Không bỏ động từ như “Breakfast include?” hay “Have pool?”."
      ],
      ex: [["Is parking included?", "Có bao gồm chỗ đỗ xe không?"], ["Could I have an extra towel?", "Cho tôi thêm một cái khăn được không?"]]
    },
    { h: "Xin phép khi tham quan: Are we allowed to…?, Is it possible to…?",
      f: ["Are we allowed to + động từ nguyên mẫu?", "Is it possible to + động từ nguyên mẫu?", "You are not allowed to + động từ nguyên mẫu"],
      p: [
        "Ở bảo tàng, chùa chiền hay điểm tham quan thường có quy định. Dùng **Are we allowed to…?** để hỏi quy định có cho phép không, và **Is it possible to…?** để hỏi một việc có làm được không.",
        "Khi nghe nhân viên nói **You are not allowed to…** (thường rút gọn là You’re not allowed to; You’re = You are), nghĩa là việc đó bị cấm."
      ],
      ex: [["Are we allowed to swim here?", "Chúng tôi có được bơi ở đây không?"], ["Is it possible to buy tickets online?", "Có mua vé trực tuyến được không?"]]
    },
    { h: "been hay gone? Hiện tại hoàn thành hay quá khứ đơn?",
      f: ["Have you ever been to + nơi chốn?", "has been to = đã từng đến và đã về", "has gone to = đã đi và vẫn đang ở đó", "quá khứ đơn + mốc thời gian (last year, in 2024)"],
      p: [
        "Dùng **thì hiện tại hoàn thành** với **ever** để hỏi về trải nghiệm, khi không quan tâm lúc nào: Have you ever been to Thailand?",
        "**been to** nghĩa là đã đến và đã quay về; **gone to** nghĩa là đã đi và bây giờ vẫn còn ở đó.",
        "Khi kể có mốc thời gian cụ thể (last year, last December, in 2024), phải chuyển sang **thì quá khứ đơn**: I went to Thailand last year. Không dùng hiện tại hoàn thành với mốc thời gian đã qua."
      ],
      ex: [["She has been to Paris.", "Cô ấy đã từng đến Paris (và đã về)."], ["I went to Sa Pa last December.", "Tôi đi Sa Pa hồi tháng Mười hai năm ngoái."]]
    },
    { h: "Câu bị động khi kể sự cố: was / were + quá khứ phân từ",
      f: ["Chủ ngữ số ít + was + động từ quá khứ phân từ (cột ba)", "Chủ ngữ số nhiều + were + động từ quá khứ phân từ (cột ba)"],
      p: [
        "Khi bạn không biết ai gây ra sự việc, hoặc điều quan trọng là món đồ của bạn, dùng **câu bị động**: món đồ làm chủ ngữ, sau đó là **was / were + quá khứ phân từ**.",
        "Không bỏ **was / were** và không bỏ đuôi của động từ: nói “My phone was stolen”, không nói “My phone stolen”."
      ],
      ex: [["My bag was stolen.", "Túi của tôi bị lấy cắp."], ["Our flight was cancelled.", "Chuyến bay của chúng tôi bị hủy."]]
    }
  ],
  mistakes: [
    ["Next week I go to Da Nang with my family.", "Next week I am going to Da Nang with my family.", "Kế hoạch đã sắp xếp dùng **hiện tại tiếp diễn** hoặc **going to**, không dùng hiện tại đơn."],
    ["Breakfast include? / Have pool?", "Is breakfast included? Is there a pool?", "Câu hỏi cần động từ **is**; hỏi tiện ích dùng **Is there…?**"],
    ["Can I allowed take photo?", "Are we allowed to take photos?", "Mẫu đúng là **be allowed to + động từ nguyên mẫu**."],
    ["I have been to Thailand last year.", "I went to Thailand last year.", "Có mốc thời gian đã qua thì dùng **thì quá khứ đơn**."],
    ["My phone stolen. Flight cancel.", "My phone was stolen. Our flight was cancelled.", "Câu bị động cần **was / were + quá khứ phân từ**."],
    ["How was your travel?", "How was your trip?", "Một chuyến đi cụ thể là **trip**; **travel** thường là động từ hoặc nói chung về việc đi lại."],
    ["Last year I have go Japan. Very good.", "I went to Japan last year. It was the trip of a lifetime.", "Kể chuyện đã qua dùng quá khứ đơn **went** và nhớ có **to** trước nơi chốn."]
  ],
  vocab: [
    ["trip", "chuyến đi"], ["passport", "hộ chiếu"], ["visa", "thị thực"], ["suitcase / backpack", "vali / ba lô"],
    ["sunscreen", "kem chống nắng"], ["travel insurance", "bảo hiểm du lịch"], ["book", "đặt (vé, phòng)"], ["reservation", "sự đặt chỗ trước"],
    ["check in / check out", "nhận phòng / trả phòng"], ["single room", "phòng đơn"], ["double room", "phòng đôi một giường lớn"], ["twin room", "phòng hai giường đơn"],
    ["included", "được bao gồm"], ["key card", "thẻ phòng"], ["must-see", "nhất định phải xem"], ["entrance fee", "vé vào cửa"],
    ["guided tour", "tour có hướng dẫn viên"], ["locals", "người địa phương"], ["homestay", "ở nhà dân"], ["itinerary", "lịch trình"],
    ["stolen", "bị lấy cắp"], ["cancelled", "bị hủy"], ["exchange money", "đổi tiền"], ["day trip", "chuyến đi trong ngày"]
  ],
  tips: [
    "Nói kế hoạch chuyến đi tới của bạn bằng **going to** và **hiện tại tiếp diễn**, ví dụ “I am going to Hoi An for three days.”",
    "Ở quầy thông tin, hỏi **Where do locals usually go?** để tìm chỗ người địa phương thực sự hay đến.",
    "Nhớ quy tắc: hỏi trải nghiệm dùng **Have you ever been to…?**, kể có mốc thời gian dùng **quá khứ đơn**.",
    "Khi báo sự cố, đặt món đồ lên đầu câu rồi dùng **was / were + quá khứ phân từ**: My suitcase was damaged.",
    "Thu âm một phút giới thiệu một điểm du lịch ở quê bạn cho khách nước ngoài, dùng must-see, entrance fee và You should visit…"
  ]
};
