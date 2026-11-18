/* Cheat sheet: Weather (Nói về thời tiết). Hiển thị bởi cheatsheet.js. */
window.A1_CHEAT = {
  goal: [
    "Tả thời tiết hôm nay bằng các tính từ như sunny, cloudy, rainy, windy.",
    "Nói nhiệt độ bằng độ C và hiểu khi người Mỹ dùng độ F.",
    "Hỏi và trả lời câu “Thời tiết thế nào?” một cách tự nhiên.",
    "Kể về các mùa và khí hậu ở Việt Nam cho người nước ngoài.",
    "Nói dự báo thời tiết và lên kế hoạch theo thời tiết bằng câu “Nếu trời mưa thì…”."
  ],
  phrases: [
    { h: "Hỏi về thời tiết", rows: [
      ["What is the weather like today?", "Hôm nay thời tiết thế nào?", "Thường nói rút gọn là What’s the weather like today? (What’s = What is)."],
      ["How is the weather in Hanoi?", "Thời tiết ở Hà Nội thế nào?"],
      ["Is it raining outside?", "Ngoài trời có đang mưa không?"],
      ["What is the temperature today?", "Hôm nay bao nhiêu độ?"],
      ["What is the forecast for tomorrow?", "Dự báo ngày mai thế nào?"]
    ]},
    { h: "Tả thời tiết lúc này", rows: [
      ["It is sunny and hot.", "Trời nắng và nóng.", "Người bản xứ nói It’s sunny and hot. (It’s = It is)."],
      ["It is cloudy, but it is not raining.", "Trời nhiều mây nhưng không mưa.", "Dạng rút gọn: It’s cloudy, but it isn’t raining."],
      ["It is raining heavily.", "Trời đang mưa to."],
      ["It is thirty-two degrees today.", "Hôm nay 32 độ."],
      ["It is getting colder.", "Trời đang lạnh dần."]
    ]},
    { h: "Mùa và khí hậu Việt Nam", rows: [
      ["The north of Vietnam has four seasons.", "Miền Bắc Việt Nam có bốn mùa."],
      ["The south has two seasons: the dry season and the rainy season.", "Miền Nam có hai mùa: mùa khô và mùa mưa."],
      ["It rains a lot in July.", "Tháng Bảy mưa nhiều."],
      ["My favorite season is autumn because it is cool.", "Mùa tôi thích nhất là mùa thu vì trời mát."]
    ]},
    { h: "Dự báo và kế hoạch", rows: [
      ["It is going to rain this afternoon.", "Chiều nay trời sẽ mưa.", "Dùng **going to** khi đã thấy dấu hiệu, ví dụ mây đen."],
      ["It will be sunny at the weekend.", "Cuối tuần trời sẽ nắng."],
      ["If it rains, we will stay at home.", "Nếu trời mưa, chúng ta sẽ ở nhà.", "Dạng rút gọn: we’ll = we will."],
      ["Do not forget your umbrella.", "Đừng quên mang ô nhé.", "Dạng rút gọn: Don’t = Do not."]
    ]},
    { h: "Bắt chuyện tự nhiên", rows: [
      ["Lovely weather, isn’t it?", "Trời đẹp quá nhỉ?", "Câu hỏi đuôi luôn nói ở dạng rút gọn; isn’t = is not. Dạng đầy đủ “is it not?” nghe rất trang trọng nên gần như không dùng."],
      ["It is boiling today!", "Hôm nay nóng như thiêu!"],
      ["It is freezing out there.", "Ngoài kia lạnh cóng."],
      ["I got caught in the rain.", "Tôi bị dính mưa."]
    ]}
  ],
  grammar: [
    { h: "Luôn dùng “It” làm chủ ngữ khi nói về thời tiết",
      f: ["It is + tính từ", "It is + động từ thêm -ing"],
      p: [
        "Trong tiếng Anh, câu nói về thời tiết luôn cần một chủ ngữ. Vì không có “ai” làm ra thời tiết, người ta dùng chữ **It** làm chủ ngữ giả. Không bao giờ bắt đầu bằng “Today is rain”.",
        "Dùng **It is + tính từ** để tả trạng thái của trời (It is sunny, It is cold). Dùng **It is + động từ thêm -ing** khi hiện tượng đang xảy ra ngay lúc nói (It is raining, It is snowing).",
        "Danh từ thời tiết thêm đuôi **-y** để thành tính từ: sun → sunny, cloud → cloudy, rain → rainy, wind → windy. Nhớ gấp đôi phụ âm cuối với sun → sunny và fog → foggy."
      ],
      ex: [["It is sunny today.", "Hôm nay trời nắng."], ["Look! It is raining.", "Nhìn kìa! Trời đang mưa."]]
    },
    { h: "So sánh hơn để nói trời nóng hơn, lạnh hơn",
      f: ["tính từ ngắn + -er + than", "get + tính từ thêm -er"],
      p: [
        "Với tính từ ngắn (một âm tiết), thêm **-er** rồi dùng **than** để so sánh: hot → hotter, cold → colder, warm → warmer. Tính từ tận cùng bằng -y thì đổi y thành i rồi thêm -er: windy → windier.",
        "Muốn nói trời “đang dần” nóng lên hay lạnh đi, dùng **It is getting + tính từ thêm -er**. Không dùng “more hot” vì hot là tính từ ngắn."
      ],
      ex: [["Today is hotter than yesterday.", "Hôm nay nóng hơn hôm qua."], ["It is getting warmer.", "Trời đang ấm dần lên."]]
    },
    { h: "Câu hỏi “What is … like?” để hỏi thời tiết thế nào",
      f: ["What is + chủ ngữ + like?"],
      p: [
        "Đây là mẫu câu hỏi về tính chất của một thứ gì đó, nghĩa là “… thế nào?”. Chữ **like** ở đây không có nghĩa là “thích” mà mang nghĩa “giống như, ra sao”.",
        "Có thể hỏi “How is the weather?” nhưng không được ghép hai kiểu thành “How is the weather like?”."
      ],
      ex: [["What is the weather like in Da Lat?", "Thời tiết ở Đà Lạt thế nào?"], ["What was the weather like yesterday?", "Hôm qua thời tiết thế nào?"]]
    },
    { h: "Hiện tại đơn cho khí hậu, hiện tại tiếp diễn cho lúc này",
      f: ["It rains a lot in + tháng", "It is raining now", "in + mùa hoặc tháng"],
      p: [
        "Khi nói chuyện thường xảy ra, lặp đi lặp lại theo mùa (khí hậu), dùng **thì hiện tại đơn**: It rains a lot in July.",
        "Khi nói chuyện đang diễn ra ngay lúc nói, dùng **thì hiện tại tiếp diễn**: It is raining now.",
        "Trước tên mùa và tên tháng dùng giới từ **in**: in summer, in December."
      ],
      ex: [["It rains a lot in Ho Chi Minh City in July.", "Ở Thành phố Hồ Chí Minh tháng Bảy mưa nhiều."], ["It is very cold in winter.", "Mùa đông rất lạnh."]]
    },
    { h: "Nói về tương lai: will, going to và câu “Nếu… thì…”",
      f: ["It is going to + động từ nguyên mẫu", "It will + động từ nguyên mẫu", "If + hiện tại đơn, chủ ngữ + will + động từ nguyên mẫu"],
      p: [
        "Dùng **going to** khi có dấu hiệu rõ ràng ngay trước mắt (thấy mây đen thì nói It is going to rain). Dùng **will** khi nói theo dự báo hoặc dự đoán chung (It will be cold tomorrow).",
        "Câu điều kiện loại 1 nói về điều có thể xảy ra: vế **If** dùng thì hiện tại đơn, vế còn lại dùng **will**. Không dùng will trong vế If."
      ],
      ex: [["If it is cold, I will wear a coat.", "Nếu trời lạnh, tôi sẽ mặc áo khoác."], ["Look at those dark clouds. It is going to storm.", "Nhìn đám mây đen kìa. Sắp có giông."]]
    }
  ],
  mistakes: [
    ["Today is rain.", "It is raining today.", "Thời tiết luôn dùng chủ ngữ **It**; “rain” là danh từ nên không đứng sau “is” để tả trời."],
    ["Today is more hot than yesterday.", "Today is hotter than yesterday.", "Hot là tính từ ngắn nên thêm **-er** (gấp đôi chữ t), không dùng “more”."],
    ["How is the weather like?", "What is the weather like?", "Chỉ dùng một trong hai kiểu: “What is … like?” hoặc “How is …?”, không ghép cả hai."],
    ["It is raining a lot every July.", "It rains a lot in July.", "Chuyện lặp lại theo mùa dùng **thì hiện tại đơn**, không dùng hiện tại tiếp diễn."],
    ["If it will rain, we stay home.", "If it rains, we will stay home.", "Vế **If** dùng hiện tại đơn; **will** đặt ở vế kết quả."],
    ["It is thirty degree today.", "It is thirty degrees today.", "Từ 2 độ trở lên thì **degree** phải thêm **-s** vì là số nhiều."]
  ],
  vocab: [
    ["sunny", "có nắng"], ["cloudy", "nhiều mây"], ["rainy", "có mưa"], ["windy", "nhiều gió"],
    ["foggy", "có sương mù"], ["stormy", "có giông bão"], ["humid", "ẩm, nồm"], ["drizzle", "mưa phùn"],
    ["freezing", "lạnh cóng (dưới 0 độ C)"], ["cold", "lạnh"], ["cool", "mát"], ["warm", "ấm"],
    ["hot", "nóng"], ["boiling", "nóng như thiêu"], ["degree", "độ"], ["temperature", "nhiệt độ"],
    ["season", "mùa"], ["the dry season", "mùa khô"], ["the rainy season", "mùa mưa"], ["forecast", "dự báo thời tiết"],
    ["umbrella", "cái ô"], ["typhoon", "bão nhiệt đới"], ["heatwave", "đợt nắng nóng"], ["breeze", "gió nhẹ"]
  ],
  tips: [
    "Mỗi sáng nhìn ra cửa sổ và nói một câu bắt đầu bằng **It is…** về thời tiết hôm đó.",
    "Mở ứng dụng thời tiết trên điện thoại, đọc to nhiệt độ hôm nay và ngày mai bằng tiếng Anh, ví dụ: “Tomorrow it will be thirty degrees.”",
    "Nhớ cặp đôi: **It is rainy** (trời có mưa, tả chung) và **It is raining** (đang mưa ngay lúc này).",
    "Thêm **isn’t it?** (dạng đầy đủ: is it not?) vào cuối câu để bắt chuyện với người lạ: “Cold today, isn’t it?”.",
    "Thu âm một bản tin thời tiết dài một phút cho thành phố của bạn, dùng đủ hiện tại, so sánh hơn và will."
  ]
};
