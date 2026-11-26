/* Dữ liệu trang Từ vựng A1 theo chủ đề (lấy từ Master Cheat Sheet).
   "topics": từ vựng, mẫu câu, bảng cấu trúc. "notes": câu ví dụ ("e") và ghi chú ngữ pháp ("g") theo id.
   Được nạp trước master-vocabulary.js (xem Master-Vocabulary.html).
   Dữ liệu ở dạng JSON gán vào window để mở trực tiếp bằng file:// vẫn chạy (fetch() bị trình duyệt chặn). */
window.A1_MASTER_VOCAB = {
  "topics": [
    {
      "sid": "t1",
      "e": "👋",
      "n": "Giới thiệu bản thân",
      "g": "📌 Nhóm 1 – Bắt đầu",
      "f": "introduce-yourself-beginer.html",
      "blocks": [
        {
          "k": "v",
          "sub": "",
          "items": [
            {"id": "0.v0", "w": "Hello / Hi / Hey", "vi": "Xin chào / Chào bạn / Chào (thân mật)"},
            {"id": "0.v1", "w": "My name is…", "vi": "Tên tôi là…"},
            {"id": "0.v2", "w": "I'm from Vietnam", "vi": "Tôi đến từ Việt Nam"},
            {"id": "0.v3", "w": "I'm a student / teacher", "vi": "Tôi là học sinh / giáo viên"},
            {"id": "0.v4", "w": "I live in Hanoi", "vi": "Tôi sống ở Hà Nội"},
            {"id": "0.v5", "w": "I'm 25 years old", "vi": "Tôi 25 tuổi"},
            {"id": "0.v6", "w": "Nice to meet you", "vi": "Rất vui được gặp bạn"},
            {"id": "0.v7", "w": "Goodbye / See you later", "vi": "Tạm biệt / Gặp sau"}
          ]
        },
        {
          "k": "p",
          "sub": "",
          "items": [
            {"id": "0.p0", "w": "Hi, I'm Linh. What's your name?", "vi": "Chào, mình là Linh. Bạn tên gì?"},
            {"id": "0.p1", "w": "I'm from Hue, but I live in Hanoi now.", "vi": "Tôi quê Huế, nhưng hiện sống ở Hà Nội."},
            {"id": "0.p2", "w": "I work for a software company.", "vi": "Tôi làm cho một công ty phần mềm."},
            {"id": "0.p3", "w": "In my free time I like reading and cooking.", "vi": "Lúc rảnh tôi thích đọc sách và nấu ăn."}
          ]
        }
      ],
      "info": ""
    },
    {
      "sid": "t2",
      "e": "🤝",
      "n": "Làm quen người mới",
      "g": "📌 Nhóm 1 – Bắt đầu",
      "f": "Meeting-New-People.html",
      "blocks": [
        {
          "k": "v",
          "sub": "",
          "items": [
            {"id": "1.v0", "w": "How are you? / How's it going?", "vi": "Bạn khoẻ không? / Dạo này sao?"},
            {"id": "1.v1", "w": "Not bad, thanks!", "vi": "Cũng ổn, cảm ơn!"},
            {"id": "1.v2", "w": "Where are you from?", "vi": "Bạn đến từ đâu?"},
            {"id": "1.v3", "w": "What do you do?", "vi": "Bạn làm nghề gì?"},
            {"id": "1.v4", "w": "What are you studying?", "vi": "Bạn đang học ngành gì?"},
            {"id": "1.v5", "w": "This is my friend Tom.", "vi": "Đây là bạn tôi, Tom."},
            {"id": "1.v6", "w": "Have you met before?", "vi": "Hai bạn gặp nhau chưa?"},
            {"id": "1.v7", "w": "Me too! / Me neither.", "vi": "Mình cũng vậy! / Mình cũng không."}
          ]
        },
        {
          "k": "plain",
          "sub": "Quốc gia & Quốc tịch",
          "head": ["Quốc gia", "Quốc tịch", "Quốc gia", "Quốc tịch"],
          "rows": [
            ["Vietnam", "Vietnamese", "Japan", "Japanese"],
            ["Korea", "Korean", "China", "Chinese"],
            ["the USA", "American", "the UK", "British"],
            ["France", "French", "Germany", "German"]
          ]
        }
      ],
      "info": ""
    },
    {
      "sid": "t3",
      "e": "🫶",
      "n": "Kết bạn & Bạn bè",
      "g": "📌 Nhóm 1 – Bắt đầu",
      "f": "Making-Friends.html",
      "blocks": [
        {
          "k": "v",
          "sub": "Tính cách",
          "items": [
            {"id": "2.v0", "w": "funny", "vi": "vui tính"},
            {"id": "2.v1", "w": "kind", "vi": "tốt bụng"},
            {"id": "2.v2", "w": "reliable", "vi": "đáng tin"},
            {"id": "2.v3", "w": "honest", "vi": "thẳng thắn"},
            {"id": "2.v4", "w": "generous", "vi": "hào phóng"},
            {"id": "2.v5", "w": "outgoing", "vi": "hoạt bát"},
            {"id": "2.v6", "w": "shy", "vi": "nhút nhát"},
            {"id": "2.v7", "w": "talkative", "vi": "nói nhiều"}
          ]
        },
        {
          "k": "p",
          "sub": "Rủ & Từ chối khéo",
          "items": [
            {"id": "2.p0", "w": "Do you want to grab a coffee?", "vi": "Đi uống cà phê không?"},
            {"id": "2.p1", "w": "Let's go to the night market!", "vi": "Đi chợ đêm đi!"},
            {"id": "2.p2", "w": "I'd love to!", "vi": "Mình rất muốn đi!"},
            {"id": "2.p3", "w": "I'd love to, but I have to work late.", "vi": "Rất muốn, nhưng phải làm muộn."},
            {"id": "2.p4", "w": "Maybe another time?", "vi": "Để lần khác nhé?"}
          ]
        },
        {
          "k": "t",
          "sub": "Rủ & Từ chối khéo",
          "head": ["Cấu trúc", "Ví dụ", "Mức độ"],
          "items": [
            {"id": "2.t0", "w": "Do you want to + V?", "vi": "thân mật", "ex": "Do you want to hang out?", "viLabel": "Mức độ"},
            {"id": "2.t1", "w": "Would you like to + V?", "vi": "lịch sự", "ex": "Would you like to join us?", "viLabel": "Mức độ"},
            {"id": "2.t2", "w": "Let's + V", "vi": "rủ cùng", "ex": "Let's go for a walk.", "viLabel": "Mức độ"},
            {"id": "2.t3", "w": "How about + V-ing?", "vi": "gợi ý", "ex": "How about having lunch?", "viLabel": "Mức độ"}
          ]
        }
      ],
      "info": ""
    },
    {
      "sid": "t4",
      "e": "🎭",
      "n": "Cảm xúc & Cảm giác",
      "g": "📌 Nhóm 1 – Bắt đầu",
      "f": "Feelings-and-Emotions.html",
      "blocks": [
        {
          "k": "v",
          "sub": "Cảm giác cơ thể & Tích cực",
          "items": [
            {"id": "3.v0", "w": "tired / sleepy", "vi": "mệt / buồn ngủ"},
            {"id": "3.v1", "w": "hungry / thirsty", "vi": "đói / khát"},
            {"id": "3.v2", "w": "happy / excited", "vi": "vui / háo hức"},
            {"id": "3.v3", "w": "relaxed / surprised", "vi": "thư thái / ngạc nhiên"}
          ]
        },
        {
          "k": "v",
          "sub": "Tiêu cực",
          "items": [
            {"id": "3.v4", "w": "sad / bored", "vi": "buồn / chán"},
            {"id": "3.v5", "w": "angry / nervous", "vi": "tức / hồi hộp"},
            {"id": "3.v6", "w": "worried / scared", "vi": "lo / sợ"},
            {"id": "3.v7", "w": "lonely / sick", "vi": "cô đơn / ốm"}
          ]
        },
        {
          "k": "t",
          "sub": "Tính từ + Giới từ cố định",
          "head": ["Cấu trúc", "Nghĩa", "Ví dụ"],
          "items": [
            {"id": "3.t0", "w": "excited / worried / happy about", "vi": "háo hức / lo / vui về", "ex": "I'm excited about the trip.", "viLabel": "Nghĩa"},
            {"id": "3.t1", "w": "scared of / afraid of", "vi": "sợ", "ex": "I'm scared of dogs.", "viLabel": "Nghĩa"},
            {"id": "3.t2", "w": "angry with + người", "vi": "giận ai", "ex": "He's angry with me.", "viLabel": "Nghĩa"},
            {"id": "3.t3", "w": "proud of / tired of", "vi": "tự hào về / chán ngấy", "ex": "I'm proud of you.", "viLabel": "Nghĩa"},
            {"id": "3.t4", "w": "bored with / good at", "vi": "chán với / giỏi về", "ex": "I'm bored with this game.", "viLabel": "Nghĩa"}
          ]
        }
      ],
      "info": ""
    },
    {
      "sid": "t5",
      "e": "👨‍👩‍👧",
      "n": "Gia đình",
      "g": "📌 Nhóm 1 – Bắt đầu",
      "f": "family-english-beginner.html",
      "blocks": [
        {
          "k": "v",
          "sub": "",
          "items": [
            {"id": "4.v0", "w": "parents", "vi": "bố mẹ"},
            {"id": "4.v1", "w": "father / mother", "vi": "bố / mẹ"},
            {"id": "4.v2", "w": "brother / sister", "vi": "anh/em trai / chị/em gái"},
            {"id": "4.v3", "w": "husband / wife", "vi": "chồng / vợ"},
            {"id": "4.v4", "w": "son / daughter", "vi": "con trai / con gái"},
            {"id": "4.v5", "w": "grandparents", "vi": "ông bà"},
            {"id": "4.v6", "w": "uncle / aunt", "vi": "chú/bác / cô/dì"},
            {"id": "4.v7", "w": "cousin", "vi": "anh/em họ"},
            {"id": "4.v8", "w": "only child", "vi": "con một"},
            {"id": "4.v9", "w": "eldest / youngest", "vi": "con cả / con út"}
          ]
        },
        {
          "k": "p",
          "sub": "",
          "items": [
            {"id": "4.p0", "w": "I have one older brother and one younger sister.", "vi": "Tôi có một anh trai và một em gái."},
            {"id": "4.p1", "w": "My parents live in Hue. My dad is a doctor.", "vi": "Bố mẹ tôi sống ở Huế. Bố tôi là bác sĩ."},
            {"id": "4.p2", "w": "I'm the eldest of three children.", "vi": "Tôi là con cả trong gia đình ba anh chị em."},
            {"id": "4.p3", "w": "We get together every Tết.", "vi": "Cả nhà tụ họp mỗi dịp Tết."}
          ]
        }
      ],
      "info": ""
    },
    {
      "sid": "t6",
      "e": "🙏",
      "n": "Cảm ơn & Xin lỗi",
      "g": "📌 Nhóm 1 – Bắt đầu",
      "f": "thank-you-sorry.html",
      "blocks": [
        {
          "k": "p",
          "sub": "Cảm ơn",
          "items": [
            {"id": "5.p0", "w": "Thank you so much!", "vi": "Cảm ơn rất nhiều!"},
            {"id": "5.p1", "w": "Thanks for your help.", "vi": "Cảm ơn vì đã giúp đỡ."},
            {"id": "5.p2", "w": "I really appreciate it.", "vi": "Tôi thực sự trân trọng điều đó."},
            {"id": "5.p3", "w": "You're welcome. / No problem.", "vi": "Không có gì. / Không sao đâu."},
            {"id": "5.p4", "w": "Don't mention it!", "vi": "Đừng bận tâm!"}
          ]
        },
        {
          "k": "p",
          "sub": "Xin lỗi & Thứ lỗi",
          "items": [
            {"id": "5.p5", "w": "I'm sorry. / I apologize.", "vi": "Tôi xin lỗi."},
            {"id": "5.p6", "w": "I'm so sorry about that.", "vi": "Tôi thực sự xin lỗi về điều đó."},
            {"id": "5.p7", "w": "Excuse me. (nhờ qua đường/hỏi)", "vi": "Xin lỗi / Làm ơn."},
            {"id": "5.p8", "w": "That's okay. / No worries.", "vi": "Không sao. / Không có gì đâu."},
            {"id": "5.p9", "w": "It's my fault.", "vi": "Lỗi của tôi."}
          ]
        }
      ],
      "info": "Nhớ: \"Sorry\" dùng khi lỡ chạm vào người → xin lỗi nhẹ. \"I apologize\" trang trọng hơn, dùng khi mắc lỗi thực sự. \"Excuse me\" dùng để thu hút sự chú ý hoặc xin qua."
    },
    {
      "sid": "t7",
      "e": "⏰",
      "n": "Hoạt động hằng ngày",
      "g": "📌 Nhóm 2 – Cuộc sống hằng ngày",
      "f": "daily-routine.html",
      "blocks": [
        {
          "k": "v",
          "sub": "",
          "items": [
            {"id": "6.v0", "w": "wake up / get up", "vi": "thức dậy / ra khỏi giường"},
            {"id": "6.v1", "w": "have breakfast / have lunch / have dinner", "vi": "ăn sáng / ăn trưa / ăn tối"},
            {"id": "6.v2", "w": "go to work / go to school", "vi": "đi làm / đi học"},
            {"id": "6.v3", "w": "come home", "vi": "về nhà"},
            {"id": "6.v4", "w": "take a shower / take a bath", "vi": "tắm vòi hoa sen / tắm bồn"},
            {"id": "6.v5", "w": "go to bed", "vi": "đi ngủ"},
            {"id": "6.v6", "w": "cook / clean", "vi": "nấu ăn / dọn dẹp"},
            {"id": "6.v7", "w": "exercise / work out", "vi": "tập thể dục / tập gym"},
            {"id": "6.v8", "w": "always / usually / often", "vi": "luôn / thường / hay"},
            {"id": "6.v9", "w": "sometimes / rarely / never", "vi": "đôi khi / hiếm / không bao giờ"}
          ]
        },
        {
          "k": "p",
          "sub": "",
          "items": [
            {"id": "6.p0", "w": "I usually wake up at 6:30 and go for a run.", "vi": "Tôi thường dậy lúc 6:30 rồi đi chạy bộ."},
            {"id": "6.p1", "w": "I always have coffee before work.", "vi": "Tôi luôn uống cà phê trước khi đi làm."},
            {"id": "6.p2", "w": "I rarely stay up past midnight.", "vi": "Tôi hiếm khi thức quá nửa đêm."}
          ]
        }
      ],
      "info": ""
    },
    {
      "sid": "t8",
      "e": "📅",
      "n": "Thời gian & Ngày tháng",
      "g": "📌 Nhóm 2 – Cuộc sống hằng ngày",
      "f": "Time-and-Date.html",
      "blocks": [
        {
          "k": "v",
          "sub": "",
          "items": [
            {"id": "7.v0", "w": "Monday – Sunday", "vi": "Thứ 2 – Chủ Nhật"},
            {"id": "7.v1", "w": "January – December", "vi": "Tháng 1 – Tháng 12"},
            {"id": "7.v2", "w": "morning / afternoon / evening / night", "vi": "sáng / chiều / tối / đêm"},
            {"id": "7.v3", "w": "yesterday / today / tomorrow", "vi": "hôm qua / hôm nay / ngày mai"},
            {"id": "7.v4", "w": "last week / next month", "vi": "tuần trước / tháng sau"},
            {"id": "7.v5", "w": "What time is it?", "vi": "Mấy giờ rồi?"},
            {"id": "7.v6", "w": "on time / early / late", "vi": "đúng giờ / sớm / muộn"}
          ]
        },
        {
          "k": "p",
          "sub": "",
          "items": [
            {"id": "7.p0", "w": "It's half past seven. / It's a quarter to eight.", "vi": "7 giờ 30. / 7 giờ 45."},
            {"id": "7.p1", "w": "I have a meeting on Monday at 9 a.m.", "vi": "Tôi có cuộc họp vào thứ Hai lúc 9 giờ sáng."}
          ]
        },
        {
          "k": "t",
          "sub": "",
          "head": ["Giới từ", "Dùng với", "Ví dụ"],
          "items": [
            {"id": "7.t0", "w": "at", "vi": "giờ cụ thể, at night/noon", "ex": "at 7 p.m. / at night", "viLabel": "Dùng với"},
            {"id": "7.t1", "w": "on", "vi": "ngày trong tuần, ngày tháng", "ex": "on Monday / on July 4th", "viLabel": "Dùng với"},
            {"id": "7.t2", "w": "in", "vi": "tháng, năm, mùa, in the morning", "ex": "in January / in summer", "viLabel": "Dùng với"}
          ]
        }
      ],
      "info": ""
    },
    {
      "sid": "t9",
      "e": "🎁",
      "n": "Sinh nhật & Lễ tết",
      "g": "📌 Nhóm 2 – Cuộc sống hằng ngày",
      "f": "Birthdays-and-Holidays.html",
      "blocks": [
        {
          "k": "v",
          "sub": "",
          "items": [
            {"id": "8.v0", "w": "Happy Birthday!", "vi": "Chúc mừng sinh nhật!"},
            {"id": "8.v1", "w": "Happy New Year!", "vi": "Chúc mừng năm mới!"},
            {"id": "8.v2", "w": "Congratulations!", "vi": "Chúc mừng!"},
            {"id": "8.v3", "w": "party / celebration", "vi": "tiệc / lễ kỷ niệm"},
            {"id": "8.v4", "w": "gift / present / card", "vi": "quà / quà tặng / thiệp"},
            {"id": "8.v5", "w": "candles / cake", "vi": "nến / bánh"},
            {"id": "8.v6", "w": "national holiday", "vi": "ngày lễ quốc gia"},
            {"id": "8.v7", "w": "Tết / Lunar New Year", "vi": "Tết Nguyên Đán / Tết Âm lịch"}
          ]
        },
        {
          "k": "p",
          "sub": "",
          "items": [
            {"id": "8.p0", "w": "When is your birthday?", "vi": "Sinh nhật bạn vào ngày nào?"},
            {"id": "8.p1", "w": "My birthday is on the 15th of March.", "vi": "Sinh nhật tôi ngày 15 tháng 3."},
            {"id": "8.p2", "w": "What do you usually do at Tết?", "vi": "Bạn thường làm gì dịp Tết?"},
            {"id": "8.p3", "w": "We get together as a family and eat traditional food.", "vi": "Cả gia đình tụ họp và ăn những món truyền thống."}
          ]
        }
      ],
      "info": ""
    },
    {
      "sid": "t10",
      "e": "🌤️",
      "n": "Thời tiết & Mùa",
      "g": "📌 Nhóm 2 – Cuộc sống hằng ngày",
      "f": "Weather.html",
      "blocks": [
        {
          "k": "v",
          "sub": "",
          "items": [
            {"id": "9.v0", "w": "sunny / cloudy / rainy", "vi": "nắng / nhiều mây / mưa", "hint": "thêm -y để tạo tính từ: sun/cloud/rain + y"},
            {"id": "9.v1", "w": "windy / foggy / stormy", "vi": "nhiều gió / sương mù / bão"},
            {"id": "9.v2", "w": "hot / warm / cool / cold", "vi": "nóng / ấm / mát / lạnh"},
            {"id": "9.v3", "w": "freezing / boiling", "vi": "lạnh cóng / nóng như thiêu"},
            {"id": "9.v4", "w": "spring / summer / autumn / winter", "vi": "xuân / hè / thu / đông"},
            {"id": "9.v5", "w": "dry season / rainy season", "vi": "mùa khô / mùa mưa"},
            {"id": "9.v6", "w": "temperature / degree", "vi": "nhiệt độ / độ (°C)"},
            {"id": "9.v7", "w": "forecast / drizzle", "vi": "dự báo / mưa phùn"}
          ]
        },
        {
          "k": "p",
          "sub": "",
          "items": [
            {"id": "9.p0", "w": "What's the weather like today?", "vi": "Hôm nay thời tiết thế nào?"},
            {"id": "9.p1", "w": "It's thirty-two degrees. It's boiling!", "vi": "Hôm nay 32 độ. Nóng kinh khủng!"},
            {"id": "9.p2", "w": "It's going to rain this afternoon.", "vi": "Chiều nay trời sẽ mưa."},
            {"id": "9.p3", "w": "Today is hotter than yesterday.", "vi": "Hôm nay nóng hơn hôm qua."}
          ]
        }
      ],
      "info": ""
    },
    {
      "sid": "t11",
      "e": "🏠",
      "n": "Nhà cửa & Nội thất",
      "g": "📌 Nhóm 2 – Cuộc sống hằng ngày",
      "f": "At-Home.html · House-and-Furniture.html",
      "blocks": [
        {
          "k": "v",
          "sub": "",
          "items": [
            {"id": "10.v0", "w": "living room / bedroom", "vi": "phòng khách / phòng ngủ"},
            {"id": "10.v1", "w": "kitchen / bathroom", "vi": "bếp / phòng tắm"},
            {"id": "10.v2", "w": "balcony / garden", "vi": "ban công / sân vườn"},
            {"id": "10.v3", "w": "sofa / armchair", "vi": "ghế sofa / ghế bành"},
            {"id": "10.v4", "w": "wardrobe / bookshelf", "vi": "tủ quần áo / kệ sách"},
            {"id": "10.v5", "w": "fridge / washing machine", "vi": "tủ lạnh / máy giặt"},
            {"id": "10.v6", "w": "air conditioner (A/C)", "vi": "điều hoà"},
            {"id": "10.v7", "w": "sink / tap", "vi": "chậu rửa / vòi nước"},
            {"id": "10.v8", "w": "microwave / oven", "vi": "lò vi sóng / lò nướng"},
            {"id": "10.v9", "w": "curtains / carpet", "vi": "rèm cửa / thảm"}
          ]
        },
        {
          "k": "p",
          "sub": "",
          "items": [
            {"id": "10.p0", "w": "My apartment has two bedrooms and a small balcony.", "vi": "Căn hộ tôi có hai phòng ngủ và một ban công nhỏ."},
            {"id": "10.p1", "w": "The sofa is next to the window.", "vi": "Ghế sofa ở bên cạnh cửa sổ."}
          ]
        },
        {
          "k": "t",
          "sub": "",
          "head": ["Giới từ", "Dùng khi", "Ví dụ"],
          "items": [
            {"id": "10.t0", "w": "in", "vi": "bên trong", "ex": "The books are in the drawer.", "viLabel": "Dùng khi"},
            {"id": "10.t1", "w": "on", "vi": "trên bề mặt", "ex": "The remote is on the table.", "viLabel": "Dùng khi"},
            {"id": "10.t2", "w": "next to / beside", "vi": "bên cạnh", "ex": "The lamp is next to the bed.", "viLabel": "Dùng khi"},
            {"id": "10.t3", "w": "between", "vi": "ở giữa hai vật", "ex": "The sofa is between the windows.", "viLabel": "Dùng khi"},
            {"id": "10.t4", "w": "opposite / across from", "vi": "đối diện", "ex": "The bathroom is opposite the bedroom.", "viLabel": "Dùng khi"}
          ]
        }
      ],
      "info": ""
    },
    {
      "sid": "t12",
      "e": "👗",
      "n": "Quần áo & Trang phục",
      "g": "📌 Nhóm 2 – Cuộc sống hằng ngày",
      "f": "Clothes.html",
      "blocks": [
        {
          "k": "v",
          "sub": "",
          "items": [
            {"id": "11.v0", "w": "T-shirt / shirt / blouse", "vi": "áo phông / áo sơ mi / áo kiểu nữ"},
            {"id": "11.v1", "w": "dress / skirt", "vi": "váy liền / chân váy"},
            {"id": "11.v2", "w": "jeans / trousers / shorts", "vi": "quần bò / quần âu / quần đùi"},
            {"id": "11.v3", "w": "jacket / coat / hoodie", "vi": "áo khoác / áo khoác dài / áo hoodie"},
            {"id": "11.v4", "w": "sneakers / boots / sandals", "vi": "giày thể thao / bốt / dép"},
            {"id": "11.v5", "w": "hat / cap / scarf", "vi": "mũ / mũ lưỡi trai / khăn quàng"},
            {"id": "11.v6", "w": "plain / striped / floral / checked", "vi": "trơn / sọc / hoa / ca rô"},
            {"id": "11.v7", "w": "cotton / wool / denim / silk", "vi": "cotton / len / vải bò / lụa"},
            {"id": "11.v8", "w": "casual / smart / formal / sporty", "vi": "thường ngày / lịch sự / trang trọng / thể thao"}
          ]
        },
        {
          "k": "p",
          "sub": "",
          "items": [
            {"id": "11.p0", "w": "I'm wearing a white shirt and black trousers today.", "vi": "Hôm nay tôi mặc áo sơ mi trắng và quần âu đen."},
            {"id": "11.p1", "w": "She's the woman in the red dress.", "vi": "Cô ấy là người phụ nữ mặc váy đỏ."},
            {"id": "11.p2", "w": "You should wear something smart for the interview.", "vi": "Bạn nên mặc đồ lịch sự cho buổi phỏng vấn."}
          ]
        }
      ],
      "info": ""
    },
    {
      "sid": "t13",
      "e": "💼",
      "n": "Nghề nghiệp & Công việc",
      "g": "📌 Nhóm 2 – Cuộc sống hằng ngày",
      "f": "accupation.html · At-Work.html",
      "blocks": [
        {
          "k": "v",
          "sub": "",
          "items": [
            {"id": "12.v0", "w": "doctor / nurse", "vi": "bác sĩ / y tá"},
            {"id": "12.v1", "w": "teacher / lecturer", "vi": "giáo viên / giảng viên"},
            {"id": "12.v2", "w": "engineer / programmer", "vi": "kỹ sư / lập trình viên"},
            {"id": "12.v3", "w": "accountant / lawyer", "vi": "kế toán / luật sư"},
            {"id": "12.v4", "w": "manager / CEO", "vi": "quản lý / giám đốc"},
            {"id": "12.v5", "w": "designer / photographer", "vi": "nhà thiết kế / nhiếp ảnh"},
            {"id": "12.v6", "w": "chef / waiter", "vi": "đầu bếp / phục vụ"},
            {"id": "12.v7", "w": "freelancer / self-employed", "vi": "người làm tự do / tự kinh doanh"},
            {"id": "12.v8", "w": "full-time / part-time", "vi": "toàn thời gian / bán thời gian"},
            {"id": "12.v9", "w": "salary / deadline / meeting", "vi": "lương / hạn chót / cuộc họp"}
          ]
        },
        {
          "k": "p",
          "sub": "",
          "items": [
            {"id": "12.p0", "w": "What do you do for a living?", "vi": "Bạn làm nghề gì?"},
            {"id": "12.p1", "w": "I work for a tech company in Hanoi.", "vi": "Tôi làm cho một công ty công nghệ ở Hà Nội."},
            {"id": "12.p2", "w": "I'm in charge of the marketing team.", "vi": "Tôi phụ trách nhóm marketing."},
            {"id": "12.p3", "w": "I work from home three days a week.", "vi": "Tôi làm việc ở nhà ba ngày một tuần."}
          ]
        }
      ],
      "info": ""
    },
    {
      "sid": "t14",
      "e": "📚",
      "n": "Học tập & Trường học",
      "g": "📌 Nhóm 2 – Cuộc sống hằng ngày",
      "f": "School-and-Study.html",
      "blocks": [
        {
          "k": "v",
          "sub": "",
          "items": [
            {"id": "13.v0", "w": "primary school / secondary school", "vi": "tiểu học / THCS"},
            {"id": "13.v1", "w": "high school / university", "vi": "THPT / đại học"},
            {"id": "13.v2", "w": "subject / major", "vi": "môn học / ngành học"},
            {"id": "13.v3", "w": "homework / assignment", "vi": "bài tập về nhà / bài tập"},
            {"id": "13.v4", "w": "exam / test / quiz", "vi": "kỳ thi / bài kiểm tra / bài quiz"},
            {"id": "13.v5", "w": "pass / fail / grade", "vi": "đậu / rớt / điểm"},
            {"id": "13.v6", "w": "classmate / professor", "vi": "bạn cùng lớp / giáo sư"},
            {"id": "13.v7", "w": "scholarship / tuition fee", "vi": "học bổng / học phí"}
          ]
        },
        {
          "k": "p",
          "sub": "",
          "items": [
            {"id": "13.p0", "w": "I'm studying computer science at HUST.", "vi": "Tôi đang học ngành khoa học máy tính tại BKHN."},
            {"id": "13.p1", "w": "I have a big exam next week. I need to study harder.", "vi": "Tuần sau tôi có kỳ thi lớn. Tôi cần học chăm hơn."},
            {"id": "13.p2", "w": "My favourite subject is English because it's useful.", "vi": "Môn tôi thích nhất là tiếng Anh vì nó rất hữu ích."}
          ]
        }
      ],
      "info": ""
    },
    {
      "sid": "t15",
      "e": "🗓️",
      "n": "Kế hoạch tương lai",
      "g": "📌 Nhóm 2 – Cuộc sống hằng ngày",
      "f": "Plans-for-Tomorrow.html",
      "blocks": [
        {
          "k": "v",
          "sub": "",
          "items": [
            {"id": "14.v0", "w": "plan / intention", "vi": "kế hoạch / ý định"},
            {"id": "14.v1", "w": "appointment / meeting", "vi": "cuộc hẹn / cuộc họp"},
            {"id": "14.v2", "w": "this weekend / next week", "vi": "cuối tuần này / tuần sau"},
            {"id": "14.v3", "w": "Are you free…?", "vi": "Bạn có rảnh…?"}
          ]
        },
        {
          "k": "p",
          "sub": "",
          "items": [
            {"id": "14.p0", "w": "What are you doing tonight?", "vi": "Tối nay bạn có kế hoạch gì?"},
            {"id": "14.p1", "w": "I'm meeting my friend for dinner at six.", "vi": "Tôi hẹn gặp bạn ăn tối lúc sáu giờ."},
            {"id": "14.p2", "w": "We're going to visit my grandparents this Sunday.", "vi": "Chủ nhật này chúng tôi đến thăm ông bà."}
          ]
        },
        {
          "k": "t",
          "sub": "",
          "head": ["Cấu trúc", "Dùng khi", "Ví dụ"],
          "items": [
            {"id": "14.t0", "w": "be going to + V", "vi": "kế hoạch đã quyết định, dự đoán", "ex": "I'm going to study medicine.", "viLabel": "Dùng khi"},
            {"id": "14.t1", "w": "will + V", "vi": "quyết định ngay lúc nói, hứa", "ex": "I'll help you with that.", "viLabel": "Dùng khi"},
            {"id": "14.t2", "w": "am/is/are + V-ing", "vi": "kế hoạch đã sắp xếp cụ thể", "ex": "I'm having lunch with Lan tomorrow.", "viLabel": "Dùng khi"}
          ]
        }
      ],
      "info": ""
    },
    {
      "sid": "t16",
      "e": "🍜",
      "n": "Đồ ăn & Đồ uống",
      "g": "📌 Nhóm 3 – Ăn uống & Mua sắm",
      "f": "Food-and-Drinks.html",
      "blocks": [
        {
          "k": "v",
          "sub": "Đồ ăn",
          "items": [
            {"id": "15.v0", "w": "rice / noodle soup", "vi": "cơm / phở, bún"},
            {"id": "15.v1", "w": "bread / sandwich", "vi": "bánh mì / bánh kẹp"},
            {"id": "15.v2", "w": "chicken / beef / pork", "vi": "gà / bò / lợn"},
            {"id": "15.v3", "w": "fish / seafood", "vi": "cá / hải sản"},
            {"id": "15.v4", "w": "egg / dairy", "vi": "trứng / sữa và chế phẩm"},
            {"id": "15.v5", "w": "fruit / vegetables", "vi": "trái cây / rau củ"},
            {"id": "15.v6", "w": "snacks / dessert", "vi": "đồ ăn vặt / tráng miệng"}
          ]
        },
        {
          "k": "v",
          "sub": "Đồ uống & Hương vị",
          "items": [
            {"id": "15.v7", "w": "water / coffee / tea", "vi": "nước / cà phê / trà"},
            {"id": "15.v8", "w": "juice / smoothie", "vi": "nước ép / sinh tố"},
            {"id": "15.v9", "w": "soft drink / beer", "vi": "nước ngọt / bia"},
            {"id": "15.v10", "w": "sweet / salty / spicy", "vi": "ngọt / mặn / cay"},
            {"id": "15.v11", "w": "sour / bitter", "vi": "chua / đắng"},
            {"id": "15.v12", "w": "delicious / tasty", "vi": "rất ngon / ngon"}
          ]
        }
      ],
      "info": ""
    },
    {
      "sid": "t17",
      "e": "🥤",
      "n": "Gọi đồ uống",
      "g": "📌 Nhóm 3 – Ăn uống & Mua sắm",
      "f": "drinking.html",
      "blocks": [
        {
          "k": "p",
          "sub": "",
          "items": [
            {"id": "16.p0", "w": "I'd like an iced coffee with milk.", "vi": "Cho tôi một ly cà phê sữa đá."},
            {"id": "16.p1", "w": "Hot or iced? / Less sugar, please.", "vi": "Nóng hay đá? / Ít đường thôi nhé."},
            {"id": "16.p2", "w": "No ice, please. / For here or to go?", "vi": "Không đá nhé. / Dùng ở đây hay mang đi?"},
            {"id": "16.p3", "w": "Would you like something to drink?", "vi": "Bạn có muốn uống gì không?"},
            {"id": "16.p4", "w": "Can I get a refill?", "vi": "Cho tôi thêm nước được không?"}
          ]
        }
      ],
      "info": "Cà phê sữa đá kiểu Việt: Vietnamese iced coffee with condensed milk. \"To go\" (Mỹ) và \"takeaway\" (Anh) đều nghĩa là mang đi."
    },
    {
      "sid": "t18",
      "e": "🍽️",
      "n": "Nhà hàng & Quán ăn",
      "g": "📌 Nhóm 3 – Ăn uống & Mua sắm",
      "f": "at-a-restaurant.html · restaurant-cafe.html",
      "blocks": [
        {
          "k": "v",
          "sub": "",
          "items": [
            {"id": "17.v0", "w": "menu / order", "vi": "thực đơn / gọi món"},
            {"id": "17.v1", "w": "starter / main course", "vi": "khai vị / món chính"},
            {"id": "17.v2", "w": "bill (Anh) / check (Mỹ)", "vi": "hoá đơn / hoá đơn"},
            {"id": "17.v3", "w": "reservation / book a table", "vi": "sự đặt chỗ / đặt bàn"},
            {"id": "17.v4", "w": "waiter / waitress", "vi": "phục vụ nam / phục vụ nữ"},
            {"id": "17.v5", "w": "tip", "vi": "tiền boa"}
          ]
        },
        {
          "k": "p",
          "sub": "",
          "items": [
            {"id": "17.p0", "w": "A table for two, please.", "vi": "Cho tôi bàn cho hai người."},
            {"id": "17.p1", "w": "Could I see the menu, please?", "vi": "Cho tôi xem thực đơn được không?"},
            {"id": "17.p2", "w": "What do you recommend?", "vi": "Bạn gợi ý món gì?"},
            {"id": "17.p3", "w": "I'd like the fried rice. Not too spicy, please.", "vi": "Cho tôi cơm rang. Đừng cay quá nhé."},
            {"id": "17.p4", "w": "Could we have the bill, please?", "vi": "Cho chúng tôi thanh toán."},
            {"id": "17.p5", "w": "Are you ready to order? / Enjoy your meal!", "vi": "Anh chị gọi món chưa? / Chúc ngon miệng!"}
          ]
        },
        {
          "k": "t",
          "sub": "",
          "head": ["Cấu trúc", "Mức độ", "Ví dụ"],
          "items": [
            {"id": "17.t0", "w": "I want + món", "vi": "Thẳng, dễ nghe cộc", "ex": "I want a coffee.", "viLabel": "Mức độ"},
            {"id": "17.t1", "w": "Can I have + món?", "vi": "Thân thiện, phổ biến", "ex": "Can I have a coffee?", "viLabel": "Mức độ"},
            {"id": "17.t2", "w": "I'd like + món, please", "vi": "Lịch sự nhất", "ex": "I'd like a coffee, please.", "viLabel": "Mức độ"}
          ]
        }
      ],
      "info": ""
    },
    {
      "sid": "t19",
      "e": "🛍️",
      "n": "Mua sắm",
      "g": "📌 Nhóm 3 – Ăn uống & Mua sắm",
      "f": "Shopping.html",
      "blocks": [
        {
          "k": "v",
          "sub": "",
          "items": [
            {"id": "18.v0", "w": "How much is it?", "vi": "Cái này giá bao nhiêu?"},
            {"id": "18.v1", "w": "price / cost / discount", "vi": "giá / chi phí / giảm giá"},
            {"id": "18.v2", "w": "size: S / M / L / XL", "vi": "cỡ nhỏ / cỡ vừa / cỡ lớn / cỡ rất lớn"},
            {"id": "18.v3", "w": "try on / fitting room", "vi": "thử đồ / phòng thử"},
            {"id": "18.v4", "w": "too big / too small / too tight", "vi": "quá to / quá nhỏ / quá chật"},
            {"id": "18.v5", "w": "cash / card / receipt", "vi": "tiền mặt / thẻ / hoá đơn"},
            {"id": "18.v6", "w": "refund / exchange", "vi": "hoàn tiền / đổi hàng"},
            {"id": "18.v7", "w": "I'll take it. / I'm just looking.", "vi": "Tôi lấy cái này. / Tôi chỉ xem thôi."}
          ]
        },
        {
          "k": "p",
          "sub": "",
          "items": [
            {"id": "18.p0", "w": "Can I try this on? Do you have this in a size M?", "vi": "Thử cái này được không? Có size M không?"},
            {"id": "18.p1", "w": "It's a bit too tight. Do you have a bigger one?", "vi": "Hơi chật. Bạn có cái to hơn không?"},
            {"id": "18.p2", "w": "Can you give me a discount? How about 150,000?", "vi": "Bớt cho tôi chút không? 150 nghìn được không?"},
            {"id": "18.p3", "w": "Can I pay by card? Could I have the receipt?", "vi": "Trả bằng thẻ được không? Cho tôi xin hoá đơn."}
          ]
        }
      ],
      "info": ""
    },
    {
      "sid": "t20",
      "e": "🧭",
      "n": "Hỏi đường & Hỏi giờ",
      "g": "📌 Nhóm 4 – Đi lại & Hỗ trợ",
      "f": "ask-for-directions.html · Asking-for-Directions-v2.html",
      "blocks": [
        {
          "k": "v",
          "sub": "",
          "items": [
            {"id": "19.v0", "w": "go straight / turn left / turn right", "vi": "đi thẳng / rẽ trái / rẽ phải"},
            {"id": "19.v1", "w": "cross the street", "vi": "sang đường"},
            {"id": "19.v2", "w": "on the left / on the right", "vi": "bên trái / bên phải"},
            {"id": "19.v3", "w": "next to / opposite / between", "vi": "bên cạnh / đối diện / giữa"},
            {"id": "19.v4", "w": "traffic light / corner / junction", "vi": "đèn giao thông / góc đường / ngã tư"},
            {"id": "19.v5", "w": "five minutes on foot / five minutes by car", "vi": "5 phút đi bộ / 5 phút đi xe"}
          ]
        },
        {
          "k": "p",
          "sub": "",
          "items": [
            {"id": "19.p0", "w": "Excuse me, how do I get to the station?", "vi": "Xin lỗi, tôi đến ga như thế nào?"},
            {"id": "19.p1", "w": "Go straight and turn left at the traffic light.", "vi": "Đi thẳng rồi rẽ trái ở đèn đỏ."},
            {"id": "19.p2", "w": "It's on the right, next to the café.", "vi": "Bên tay phải, cạnh quán cà phê."},
            {"id": "19.p3", "w": "Could you repeat that more slowly, please?", "vi": "Bạn nhắc lại chậm hơn được không?"}
          ]
        }
      ],
      "info": ""
    },
    {
      "sid": "t21",
      "e": "🆘",
      "n": "Nhờ giúp đỡ",
      "g": "📌 Nhóm 4 – Đi lại & Hỗ trợ",
      "f": "Asking-for-Help.html · english-communication-toolkit.html",
      "blocks": [
        {
          "k": "p",
          "sub": "",
          "items": [
            {"id": "20.p0", "w": "Could you help me, please?", "vi": "Bạn có thể giúp tôi không?"},
            {"id": "20.p1", "w": "Could you say that again / more slowly?", "vi": "Bạn nói lại / chậm hơn được không?"},
            {"id": "20.p2", "w": "What does \"___\" mean?", "vi": "\"___\" có nghĩa là gì?"},
            {"id": "20.p3", "w": "How do you say \"___\" in English?", "vi": "\"___\" tiếng Anh nói thế nào?"},
            {"id": "20.p4", "w": "Can you write it down?", "vi": "Bạn viết ra giúp tôi được không?"},
            {"id": "20.p5", "w": "I don't understand. / I'm not sure.", "vi": "Tôi không hiểu. / Tôi không chắc."},
            {"id": "20.p6", "w": "Is there a problem? / Is everything okay?", "vi": "Có vấn đề gì không? / Mọi thứ ổn chứ?"}
          ]
        }
      ],
      "info": ""
    },
    {
      "sid": "t22",
      "e": "🩺",
      "n": "Sức khoẻ & Đi khám bác sĩ",
      "g": "📌 Nhóm 4 – Đi lại & Hỗ trợ",
      "f": "Health-and-Doctor.html",
      "blocks": [
        {
          "k": "v",
          "sub": "Bộ phận cơ thể",
          "items": [
            {"id": "21.v0", "w": "head / eye / ear", "vi": "đầu / mắt / tai"},
            {"id": "21.v1", "w": "nose / mouth / throat", "vi": "mũi / miệng / họng"},
            {"id": "21.v2", "w": "tooth → teeth", "vi": "răng (bất quy tắc)"},
            {"id": "21.v3", "w": "shoulder / chest / back", "vi": "vai / ngực / lưng"},
            {"id": "21.v4", "w": "stomach / arm / leg", "vi": "bụng / tay / chân"},
            {"id": "21.v5", "w": "knee / ankle / foot → feet", "vi": "đầu gối / mắt cá / bàn chân"}
          ]
        },
        {
          "k": "v",
          "sub": "Bệnh thường gặp",
          "items": [
            {"id": "21.v6", "w": "a headache / stomachache", "vi": "đau đầu / đau bụng"},
            {"id": "21.v7", "w": "a sore throat / backache", "vi": "đau họng / đau lưng"},
            {"id": "21.v8", "w": "a cold / the flu", "vi": "cảm lạnh / cúm"},
            {"id": "21.v9", "w": "a fever / a cough", "vi": "sốt / ho"},
            {"id": "21.v10", "w": "a runny nose / diarrhea", "vi": "sổ mũi / tiêu chảy"},
            {"id": "21.v11", "w": "feel dizzy / nauseous", "vi": "chóng mặt / buồn nôn"}
          ]
        },
        {
          "k": "p",
          "sub": "Bệnh thường gặp",
          "items": [
            {"id": "21.p0", "w": "I have a sore throat and a fever.", "vi": "Tôi bị đau họng và sốt."},
            {"id": "21.p1", "w": "I've had a cough for two days / since Monday.", "vi": "Tôi bị ho hai ngày rồi / từ thứ Hai."},
            {"id": "21.p2", "w": "My knee hurts. / It hurts when I swallow.", "vi": "Đầu gối tôi đau. / Nuốt thì đau."},
            {"id": "21.p3", "w": "You should get some rest and drink lots of water.", "vi": "Bạn nên nghỉ ngơi và uống nhiều nước."},
            {"id": "21.p4", "w": "I'm allergic to penicillin.", "vi": "Tôi bị dị ứng với penicillin."}
          ]
        }
      ],
      "info": ""
    },
    {
      "sid": "t23",
      "e": "🚌",
      "n": "Phương tiện đi lại",
      "g": "📌 Nhóm 4 – Đi lại & Hỗ trợ",
      "f": "Transportation.html",
      "blocks": [
        {
          "k": "v",
          "sub": "",
          "items": [
            {"id": "22.v0", "w": "bus / train / metro", "vi": "xe buýt / tàu / tàu điện"},
            {"id": "22.v1", "w": "taxi / motorbike / bicycle", "vi": "taxi / xe máy / xe đạp"},
            {"id": "22.v2", "w": "get on / get off", "vi": "lên xe buýt, tàu / xuống xe buýt, tàu"},
            {"id": "22.v3", "w": "get in / get out of", "vi": "lên taxi, ô tô / ra khỏi taxi, ô tô"},
            {"id": "22.v4", "w": "single ticket / return ticket", "vi": "vé một chiều / vé khứ hồi"},
            {"id": "22.v5", "w": "platform / bus stop / station", "vi": "sân ga / trạm xe buýt / nhà ga"},
            {"id": "22.v6", "w": "fare / timetable", "vi": "giá vé / lịch chạy"},
            {"id": "22.v7", "w": "traffic jam / delayed", "vi": "kẹt xe / bị trễ"},
            {"id": "22.v8", "w": "How long does it take?", "vi": "Mất bao lâu?"},
            {"id": "22.v9", "w": "How far is it?", "vi": "Cách bao xa?"}
          ]
        },
        {
          "k": "p",
          "sub": "",
          "items": [
            {"id": "22.p0", "w": "Which bus goes to the Old Quarter?", "vi": "Xe buýt nào đi Phố Cổ?"},
            {"id": "22.p1", "w": "It takes me thirty minutes to get to work by motorbike.", "vi": "Đi xe máy mất 30 phút để đến công ty."},
            {"id": "22.p2", "w": "I'm stuck in a traffic jam. I'll be late.", "vi": "Tôi đang bị kẹt xe. Tôi sẽ trễ."},
            {"id": "22.p3", "w": "To the airport, please. I'm in a bit of a hurry.", "vi": "Ra sân bay giúp tôi. Tôi hơi vội."}
          ]
        }
      ],
      "info": ""
    },
    {
      "sid": "t24",
      "e": "✈️",
      "n": "Du lịch & Khách sạn",
      "g": "📌 Nhóm 4 – Đi lại & Hỗ trợ",
      "f": "Travel.html · At-the-Hotel.html",
      "blocks": [
        {
          "k": "v",
          "sub": "",
          "items": [
            {"id": "23.v0", "w": "passport / visa / boarding pass", "vi": "hộ chiếu / visa / thẻ lên máy bay"},
            {"id": "23.v1", "w": "check in / check out", "vi": "nhận phòng / trả phòng"},
            {"id": "23.v2", "w": "single room / double room / twin room", "vi": "phòng đơn / phòng đôi / phòng 2 giường"},
            {"id": "23.v3", "w": "luggage / suitcase / carry-on", "vi": "hành lý / vali / xách tay"},
            {"id": "23.v4", "w": "flight / gate / delayed", "vi": "chuyến bay / cổng / bị trễ"},
            {"id": "23.v5", "w": "sightseeing / guided tour", "vi": "tham quan / tour có hướng dẫn"},
            {"id": "23.v6", "w": "entrance fee", "vi": "vé vào cửa"},
            {"id": "23.v7", "w": "my wallet was stolen", "vi": "ví tôi bị lấy cắp"}
          ]
        },
        {
          "k": "p",
          "sub": "",
          "items": [
            {"id": "23.p0", "w": "I'd like to check in. I have a reservation under Tran.", "vi": "Tôi muốn nhận phòng. Đặt dưới tên Trần."},
            {"id": "23.p1", "w": "Is breakfast included? What time is checkout?", "vi": "Có bao gồm bữa sáng không? Mấy giờ trả phòng?"},
            {"id": "23.p2", "w": "Have you ever been to Japan? Yes, I went last spring.", "vi": "Bạn đến Nhật chưa? Rồi, hồi mùa xuân năm ngoái."},
            {"id": "23.p3", "w": "My luggage didn't arrive. / Our flight was cancelled.", "vi": "Hành lý tôi không đến. / Chuyến bay bị huỷ."}
          ]
        }
      ],
      "info": ""
    },
    {
      "sid": "t25",
      "e": "📞",
      "n": "Giao tiếp qua điện thoại",
      "g": "📌 Nhóm 4 – Đi lại & Hỗ trợ",
      "f": "conversation-phone.html",
      "blocks": [
        {
          "k": "p",
          "sub": "",
          "items": [
            {"id": "24.p0", "w": "Hello, this is Linh. Can I speak to Mr. Brown?", "vi": "Chào, tôi là Linh. Cho tôi nói chuyện với ông Brown được không?"},
            {"id": "24.p1", "w": "Speaking! / One moment, please.", "vi": "Chính tôi đây! / Chờ một chút."},
            {"id": "24.p2", "w": "I'm calling about the meeting tomorrow.", "vi": "Tôi gọi về cuộc họp ngày mai."},
            {"id": "24.p3", "w": "Could I leave a message?", "vi": "Tôi nhắn lại được không?"},
            {"id": "24.p4", "w": "I'll call back later. / Sorry, wrong number.", "vi": "Tôi sẽ gọi lại sau. / Xin lỗi, nhầm số."},
            {"id": "24.p5", "w": "The line is breaking up. / I can't hear you well.", "vi": "Sóng bị nhiễu. / Tôi nghe không rõ."}
          ]
        }
      ],
      "info": ""
    },
    {
      "sid": "t26",
      "e": "🎨",
      "n": "Sở thích & Thời gian rảnh",
      "g": "📌 Nhóm 5 – Sở thích & Giải trí",
      "f": "Likes-and-Hobbies.html",
      "blocks": [
        {
          "k": "v",
          "sub": "",
          "items": [
            {"id": "25.v0", "w": "reading / drawing / painting", "vi": "đọc sách / vẽ phác thảo / vẽ tranh màu"},
            {"id": "25.v1", "w": "cooking / baking", "vi": "nấu ăn / làm bánh"},
            {"id": "25.v2", "w": "taking photos / gardening", "vi": "chụp ảnh / làm vườn"},
            {"id": "25.v3", "w": "playing chess / video games", "vi": "chơi cờ / game"},
            {"id": "25.v4", "w": "go hiking / go camping / go fishing", "vi": "đi leo núi / đi cắm trại / đi câu cá"},
            {"id": "25.v5", "w": "watching dramas", "vi": "xem phim bộ"},
            {"id": "25.v6", "w": "learning languages", "vi": "học ngoại ngữ"},
            {"id": "25.v7", "w": "I prefer A to B.", "vi": "Tôi thích A hơn B."},
            {"id": "25.v8", "w": "I'd rather + V.", "vi": "Tôi muốn … hơn."}
          ]
        },
        {
          "k": "p",
          "sub": "",
          "items": [
            {"id": "25.p0", "w": "What do you do in your free time?", "vi": "Lúc rảnh bạn làm gì?"},
            {"id": "25.p1", "w": "I love taking photos of street food.", "vi": "Tôi thích chụp ảnh đồ ăn đường phố."},
            {"id": "25.p2", "w": "I go hiking about once a month.", "vi": "Khoảng một tháng tôi đi leo núi một lần."},
            {"id": "25.p3", "w": "I prefer reading to watching TV.", "vi": "Tôi thích đọc sách hơn xem tivi."}
          ]
        }
      ],
      "info": ""
    },
    {
      "sid": "t27",
      "e": "🎉",
      "n": "Hoạt động cuối tuần",
      "g": "📌 Nhóm 5 – Sở thích & Giải trí",
      "f": "Weekend-Activities.html",
      "blocks": [
        {
          "k": "v",
          "sub": "",
          "items": [
            {"id": "26.v0", "w": "hang out with friends", "vi": "đi chơi với bạn bè"},
            {"id": "26.v1", "w": "go for a walk / go for a drive", "vi": "đi dạo / đi lái xe hóng mát"},
            {"id": "26.v2", "w": "visit family", "vi": "đến thăm gia đình"},
            {"id": "26.v3", "w": "go to the market", "vi": "đi chợ"},
            {"id": "26.v4", "w": "sleep in / relax", "vi": "ngủ nướng / thư giãn"},
            {"id": "26.v5", "w": "What did you do last weekend?", "vi": "Cuối tuần qua bạn làm gì?"}
          ]
        },
        {
          "k": "p",
          "sub": "",
          "items": [
            {"id": "26.p0", "w": "What did you do last weekend?", "vi": "Cuối tuần qua bạn làm gì?"},
            {"id": "26.p1", "w": "I went to the night market with my friends.", "vi": "Tôi đi chợ đêm với bạn bè."},
            {"id": "26.p2", "w": "We stayed up until midnight watching movies.", "vi": "Chúng tôi thức đến nửa đêm xem phim."},
            {"id": "26.p3", "w": "I didn't do much. I just slept in and relaxed.", "vi": "Tôi không làm gì nhiều. Chỉ ngủ nướng và thư giãn."}
          ]
        }
      ],
      "info": ""
    },
    {
      "sid": "t28",
      "e": "💌",
      "n": "Lời mời & Hẹn hò",
      "g": "📌 Nhóm 5 – Sở thích & Giải trí",
      "f": "Invitations.html",
      "blocks": [
        {
          "k": "p",
          "sub": "",
          "items": [
            {"id": "27.p0", "w": "Would you like to come to my birthday party?", "vi": "Bạn có muốn đến tiệc sinh nhật của mình không?"},
            {"id": "27.p1", "w": "Are you free this Saturday?", "vi": "Thứ Bảy này bạn có rảnh không?"},
            {"id": "27.p2", "w": "Count me in! / I'd love to!", "vi": "Cho mình tham gia! / Mình rất muốn!"},
            {"id": "27.p3", "w": "What time should we meet? / See you there!", "vi": "Mấy giờ gặp nhau? / Gặp nhau ở đó nhé!"},
            {"id": "27.p4", "w": "Sorry, I already have plans. Maybe next time?", "vi": "Xin lỗi, mình có hẹn rồi. Lần khác nhé?"},
            {"id": "27.p5", "w": "Thanks for the invitation!", "vi": "Cảm ơn vì đã mời!"}
          ]
        }
      ],
      "info": ""
    },
    {
      "sid": "t29",
      "e": "⚽",
      "n": "Thể thao",
      "g": "📌 Nhóm 5 – Sở thích & Giải trí",
      "f": "Sports.html",
      "blocks": [
        {
          "k": "v",
          "sub": "",
          "items": [
            {"id": "28.v0", "w": "football / badminton", "vi": "bóng đá / cầu lông", "hint": "chơi: play + tên môn"},
            {"id": "28.v1", "w": "basketball / volleyball / tennis", "vi": "bóng rổ / bóng chuyền / tennis", "hint": "chơi: play + tên môn"},
            {"id": "28.v2", "w": "swimming / running / cycling", "vi": "bơi lội / chạy bộ / đạp xe", "hint": "đi: go + V-ing"},
            {"id": "28.v3", "w": "yoga / martial arts / karate", "vi": "yoga / võ thuật / karate", "hint": "tập: do + tên môn"},
            {"id": "28.v4", "w": "win (won) / lose (lost)", "vi": "thắng / thua"},
            {"id": "28.v5", "w": "draw (drew) / beat (beat)", "vi": "hoà / đánh bại"},
            {"id": "28.v6", "w": "score / goal / match", "vi": "tỉ số / bàn thắng / trận"},
            {"id": "28.v7", "w": "warm up / stretch / get injured", "vi": "khởi động / giãn cơ / bị chấn thương"},
            {"id": "28.v8", "w": "twice a week / every day", "vi": "hai lần một tuần / mỗi ngày"}
          ]
        },
        {
          "k": "p",
          "sub": "",
          "items": [
            {"id": "28.p0", "w": "I play badminton twice a week.", "vi": "Tôi chơi cầu lông mỗi tuần hai lần."},
            {"id": "28.p1", "w": "I'm pretty good at swimming.", "vi": "Tôi bơi khá giỏi."},
            {"id": "28.p2", "w": "Vietnam beat Thailand two–one.", "vi": "Việt Nam thắng Thái Lan 2–1."},
            {"id": "28.p3", "w": "I've been playing for about five years.", "vi": "Tôi chơi được khoảng năm năm rồi."}
          ]
        },
        {
          "k": "t",
          "sub": "",
          "head": ["Động từ", "Dùng với", "Ví dụ"],
          "items": [
            {"id": "28.t0", "w": "play", "vi": "môn có bóng, có đối thủ", "ex": "play football, badminton", "viLabel": "Dùng với"},
            {"id": "28.t1", "w": "go", "vi": "môn kết thúc bằng -ing", "ex": "go swimming, go running", "viLabel": "Dùng với"},
            {"id": "28.t2", "w": "do", "vi": "môn tập cá nhân, không bóng", "ex": "do yoga, do karate", "viLabel": "Dùng với"}
          ]
        }
      ],
      "info": ""
    },
    {
      "sid": "t30",
      "e": "🎬",
      "n": "Phim ảnh",
      "g": "📌 Nhóm 5 – Sở thích & Giải trí",
      "f": "Movies.html",
      "blocks": [
        {
          "k": "v",
          "sub": "",
          "items": [
            {"id": "29.v0", "w": "action / comedy / drama", "vi": "hành động / hài / tâm lý"},
            {"id": "29.v1", "w": "horror / romance / thriller", "vi": "kinh dị / lãng mạn / giật gân"},
            {"id": "29.v2", "w": "director / actor / actress", "vi": "đạo diễn / diễn viên nam / diễn viên nữ"},
            {"id": "29.v3", "w": "subtitles / dubbed", "vi": "phụ đề / lồng tiếng"},
            {"id": "29.v4", "w": "gripping / touching / hilarious", "vi": "cuốn hút / cảm động / cực kỳ hài"},
            {"id": "29.v5", "w": "great acting / spoiler", "vi": "diễn xuất tốt / tiết lộ nội dung"}
          ]
        },
        {
          "k": "p",
          "sub": "",
          "items": [
            {"id": "29.p0", "w": "Have you seen the new Marvel movie?", "vi": "Bạn xem phim Marvel mới chưa?"},
            {"id": "29.p1", "w": "Yes, I saw it last weekend. It was gripping!", "vi": "Rồi, mình xem cuối tuần trước. Cuốn lắm!"},
            {"id": "29.p2", "w": "I prefer comedies to horror movies.", "vi": "Tôi thích phim hài hơn phim kinh dị."},
            {"id": "29.p3", "w": "It's about a girl who travels back in time.", "vi": "Phim kể về một cô gái du hành ngược thời gian."},
            {"id": "29.p4", "w": "The movie was boring. / I was bored.", "vi": "Phim nhàm chán. / Tôi thấy chán."}
          ]
        },
        {
          "k": "plain",
          "sub": "",
          "head": ["-ing tả phim", "-ed tả cảm xúc bạn"],
          "rows": [
            ["The movie is boring / interesting / frightening", "I'm bored / interested / frightened"]
          ]
        }
      ],
      "info": ""
    },
    {
      "sid": "t31",
      "e": "🎵",
      "n": "Âm nhạc",
      "g": "📌 Nhóm 5 – Sở thích & Giải trí",
      "f": "Music.html",
      "blocks": [
        {
          "k": "v",
          "sub": "",
          "items": [
            {"id": "30.v0", "w": "pop / rock / jazz / classical", "vi": "nhạc pop / nhạc rock / nhạc jazz / nhạc cổ điển"},
            {"id": "30.v1", "w": "K-pop / ballad / EDM", "vi": "K-pop / nhạc trữ tình / điện tử"},
            {"id": "30.v2", "w": "song / album / playlist", "vi": "bài hát / album / danh sách nhạc"},
            {"id": "30.v3", "w": "lyrics / melody / beat / chorus", "vi": "lời / giai điệu / nhịp / điệp khúc"},
            {"id": "30.v4", "w": "singer / band / musician", "vi": "ca sĩ / ban nhạc / nhạc sĩ"},
            {"id": "30.v5", "w": "play the guitar / play the piano / play the violin", "vi": "chơi guitar / chơi piano / chơi vĩ cầm"},
            {"id": "30.v6", "w": "catchy / upbeat / relaxing", "vi": "bắt tai / sôi động / thư giãn"},
            {"id": "30.v7", "w": "concert / live music", "vi": "buổi hoà nhạc / nhạc sống"}
          ]
        },
        {
          "k": "p",
          "sub": "",
          "items": [
            {"id": "30.p0", "w": "What kind of music are you into?", "vi": "Bạn mê thể loại nhạc nào?"},
            {"id": "30.p1", "w": "I listen to music on my phone every day.", "vi": "Ngày nào tôi cũng nghe nhạc trên điện thoại."},
            {"id": "30.p2", "w": "I play the guitar a little. I'm still a beginner.", "vi": "Tôi chơi guitar một chút. Vẫn còn mới tập."},
            {"id": "30.p3", "w": "This song makes me feel relaxed. It reminds me of home.", "vi": "Bài này làm tôi thấy thư thái. Nó gợi nhớ về nhà."},
            {"id": "30.p4", "w": "Have you ever been to a live concert?", "vi": "Bạn đã bao giờ đi xem nhạc sống chưa?"}
          ]
        }
      ],
      "info": ""
    }
  ],
  "notes": {
    "0.v0": {"e": "Hi, I'm Linh. Nice to meet you!", "g": "Hello là chào chung, Hi thân thiện, Hey rất thân mật (chỉ dùng với bạn bè). Chào xong thường nói tên: I'm + tên."},
    "0.v1": {"e": "", "g": "“My name is + tên” = tính từ sở hữu “My” + danh từ name + is. Có thể rút gọn I'm + tên khi nói nhanh."},
    "0.v2": {"e": "", "g": "I'm = I am. “be from + nơi” = đến từ đâu. Tên nước viết hoa (Vietnam), không có mạo từ."},
    "0.v3": {"e": "", "g": "I'm = I am. Nghề nghiệp cần a/an: a student, a teacher. Dấu “/” nghĩa là chọn một trong hai."},
    "0.v4": {"e": "", "g": "Hiện tại đơn: I live (không -s). “in + thành phố” = ở thành phố nào; Hanoi viết hoa."},
    "0.v5": {"e": "", "g": "Tuổi dùng be + số + years old, không dùng have. “years” số nhiều vì số lớn hơn một."},
    "0.v6": {"e": "", "g": "Rút gọn của It's nice to meet you. “Nice to + V” = rất vui khi làm gì. Đáp lại: Nice to meet you too."},
    "0.v7": {"e": "Goodbye! See you later.", "g": "“See you later” là rút gọn của I'll see you later, dùng khi sẽ gặp lại. Goodbye trang trọng hơn."},
    "0.p0": {"g": "Câu 1: I'm = I am. Câu 2: What's = What is, dùng hỏi thông tin. “your” là tính từ sở hữu của you."},
    "0.p1": {"g": "“but” nối hai ý đối lập. “from + quê”, “live in + nơi ở hiện tại”. “now” = trạng từ thời gian, cuối câu."},
    "0.p2": {"g": "Hiện tại đơn: I work (không -s). “work for + công ty” = làm cho; “a software company” dùng a vì software bắt đầu phụ âm."},
    "0.p3": {"g": "“In my free time” = trạng ngữ đầu câu. “like + V-ing” = thích làm gì; reading and cooking = hai V-ing nối bằng and."},
    "1.v0": {"e": "How are you? – I'm fine, thanks.", "g": "“How are you?” dùng be, đảo are lên trước chủ ngữ. “How's it going?” (How is it going) thân mật hơn. Câu trả lời thường là I'm fine / good, thanks."},
    "1.v1": {"e": "", "g": "Câu trả lời ngắn, rút gọn từ I'm not bad. “thanks” = cảm ơn (thân mật hơn thank you)."},
    "1.v2": {"e": "", "g": "Câu hỏi với be: Where + are + you + from? Giới từ from đứng cuối câu. Không nói “Where you are from?”."},
    "1.v3": {"e": "", "g": "Dùng trợ động từ do: What + do + you + do? Từ “do” thứ hai là động từ chính (làm nghề). Hỏi về nghề nghiệp."},
    "1.v4": {"e": "", "g": "Hiện tại tiếp diễn: are + studying (đang học). Hỏi ngành học hiện tại. Không có “the” trước tên ngành."},
    "1.v5": {"e": "", "g": "Giới thiệu người: This is + tên/người. “my friend Tom” = my + danh từ + tên. Không nói “He is Tom” để giới thiệu lần đầu."},
    "1.v6": {"e": "", "g": "Hiện tại hoàn thành: Have you + V3 (met)? “before” = trước đây. Hỏi trải nghiệm đã từng xảy ra."},
    "1.v7": {"e": "", "g": "Hưởng ứng ngắn: Me too = tôi cũng vậy (với câu khẳng định), Me neither = tôi cũng không (với câu phủ định)."},
    "2.v0": {"e": "My brother is funny. He makes everyone laugh.", "g": "Tính từ đứng sau be (is funny). Chủ ngữ số ít My brother nên “is”, động từ makes có -s."},
    "2.v1": {"e": "She is kind to everyone.", "g": "“kind to + người” = tốt với ai (giới từ to). Chủ ngữ She số ít nên is."},
    "2.v2": {"e": "You can count on him. He's reliable.", "g": "“He's” = He is. “reliable” (đáng tin) nói về người hoặc vật. “count on” = tin cậy."},
    "2.v3": {"e": "I like honest people.", "g": "Tính từ đứng trước danh từ: honest people. Danh từ people luôn số nhiều. Chữ h trong honest không đọc nên mạo từ là an: an honest man."},
    "2.v4": {"e": "My uncle is generous.", "g": "“is generous” = hào phóng. Thường đi với giới từ with: generous with money."},
    "2.v5": {"e": "My sister is outgoing. She makes friends easily.", "g": "Tính từ đứng sau be. “easily” là trạng từ (adj + ly) bổ nghĩa cho động từ makes. Chủ ngữ She số ít nên makes."},
    "2.v6": {"e": "He is shy at first.", "g": "“at first” = lúc đầu, trạng từ cuối câu. Shy ngại người lạ; không dùng “shy” như danh từ."},
    "2.v7": {"e": "My friend is very talkative.", "g": "“very” + tính từ. Chủ ngữ số ít nên is. Talkative có thể là lời khen nhẹ hoặc chê nhẹ tùy giọng điệu."},
    "2.p0": {"g": "“Do you want to + V?” là câu rủ thân mật. “grab a coffee” = đi uống cà phê, dùng grab thay buy cho tự nhiên."},
    "2.p1": {"g": "“Let's + V” = rủ cùng làm. “the night market” = chợ đêm cụ thể trong thành phố nên có the."},
    "2.p2": {"g": "Câu nhận lời ngắn: I'd love to = I would love to (dư từ go/come ở cuối đã bỏ vì hiểu ngầm)."},
    "2.p3": {"g": "“but” nối từ chối khéo với lý do. “have to + V” = phải làm. “late” = trạng từ ở đây, nghĩa là muộn (làm việc muộn)."},
    "2.p4": {"g": "Câu rút gọn của Maybe we can meet another time? “Maybe” = có lẽ, “another time” = lúc khác (another + danh từ số ít)."},
    "2.t0": {"g": "“Do you want to + V?” = bạn có muốn… không? Dùng với bạn bè. Động từ sau to ở dạng nguyên mẫu (hang out)."},
    "2.t1": {"g": "“Would you like to + V?” lịch sự hơn Do you want to. “join us” = tham gia cùng chúng tôi (us là tân ngữ)."},
    "2.t2": {"g": "“Let's + V” = chúng ta hãy. Let's = Let us, sau đó là động từ nguyên mẫu (go)."},
    "2.t3": {"g": "“How about + V-ing?” = còn việc… thì sao? Sau about dùng V-ing (having), không dùng to + V."},
    "3.v0": {"e": "I'm tired. I need to sleep.", "g": "Be + tính từ: I'm tired. sleepy = buồn ngủ, tired = mệt. Hai từ khác nhau: sleepy chỉ cảm giác muốn ngủ."},
    "3.v1": {"e": "I'm hungry. Let's have lunch.", "g": "Phải có be: I'm hungry (không nói I hungry). Dùng I'm thirsty khi khát."},
    "3.v2": {"e": "I'm excited about the trip.", "g": "“excited about + danh từ” = háo hức về. -ed mô tả cảm xúc của người."},
    "3.v3": {"e": "I'm surprised to see you here.", "g": "“surprised to + V” = ngạc nhiên khi làm gì. relaxed = thư giãn, cả hai đều là tính từ có -ed."},
    "3.v4": {"e": "I'm bored with this movie.", "g": "“bored with + danh từ” = chán thứ gì. -ed nói về cảm xúc của người, không dùng boring cho mình."},
    "3.v5": {"e": "I'm nervous about the exam.", "g": "“nervous about + danh từ” = hồi hộp về. angry thường đi với with/at người."},
    "3.v6": {"e": "I'm worried about my mom.", "g": "“worried about + danh từ/người” = lo lắng về. scared of + danh từ = sợ."},
    "3.v7": {"e": "I feel lonely and sick.", "g": "Dùng feel + tính từ thay be. Hai tính từ nối bằng and, đều sau feel."},
    "3.t0": {"g": "“be + tính từ + about + danh từ” = cảm xúc về việc gì. Giới từ about cố định, sau đó dùng danh từ hoặc V-ing."},
    "3.t1": {"g": "“scared of / afraid of + danh từ” = sợ. dogs số nhiều vì nói chung. Sau of có thể dùng V-ing: scared of flying."},
    "3.t2": {"g": "“angry with + người” = giận ai. Đại từ sau giới từ là tân ngữ (me), không dùng I. “He's” = He is."},
    "3.t3": {"g": "“proud of + người/việc” và “tired of + danh từ/V-ing”. Tân ngữ you đứng sau giới từ."},
    "3.t4": {"g": "“bored with + danh từ” = chán thứ gì. “good at + danh từ/V-ing” = giỏi về. this game = trò chơi này."},
    "4.v0": {"e": "My parents live in Hue.", "g": "“parents” luôn số nhiều, động từ không -s (live). Dùng cho cả bố và mẹ."},
    "4.v1": {"e": "My father is a doctor, and my mother is a teacher.", "g": "Hai mệnh đề nối bằng and. Nghề nghiệp có a/an. Chủ ngữ số ít nên is."},
    "4.v2": {"e": "I have one brother and two sisters.", "g": "Sau số đếm lớn hơn 1 dùng danh từ số nhiều (two sisters). have = có trong gia đình."},
    "4.v3": {"e": "My husband is a teacher.", "g": "“husband / wife” đi với my. Chủ ngữ số ít nên is; không nói “my wife is teach”."},
    "4.v4": {"e": "I have a son and a daughter.", "g": "a + danh từ số ít đếm được. Hai danh từ nối bằng and, mỗi danh từ cần a/an riêng."},
    "4.v5": {"e": "My grandparents live in the countryside.", "g": "“grandparents” luôn số nhiều nên live không -s. “in the countryside” = ở vùng quê."},
    "4.v6": {"e": "My uncle lives in Da Nang.", "g": "Chủ ngữ số ít nên lives có -s. uncle gồm cả chú/bác/cậu/dượng; aunt gồm cô/dì/mợ/thím."},
    "4.v7": {"e": "My cousin is the same age as me.", "g": "“the same + danh từ + as + tân ngữ” = cùng tuổi như. “me” là tân ngữ sau as."},
    "4.v8": {"e": "I'm an only child.", "g": "an + only (bắt đầu nguyên âm). “only child” = con một, luôn có an và child ở số ít."},
    "4.v9": {"e": "I'm the eldest in my family.", "g": "So sánh nhất dùng the: the eldest / the youngest. “in my family” = trong gia đình."},
    "4.p0": {"g": "“one older brother and one younger sister”: số + tính từ so sánh hơn + danh từ số ít. have = có (người thân)."},
    "4.p1": {"g": "Hai câu hiện tại đơn. “My parents live” (số nhiều, không -s), “My dad is” (số ít). “a doctor” = nghề có a."},
    "4.p2": {"g": "“the eldest of + số nhiều” = lớn nhất trong. “three children”: children là số nhiều bất quy tắc của child."},
    "4.p3": {"g": "“get together” = tụ họp, cụm động từ. “every Tết” = mỗi dịp Tết, trạng từ tần suất, hiện tại đơn (We get)."},
    "5.p0": {"g": "“Thank you so much!” = cảm ơn rất nhiều. “so much” nhấn mạnh, đứng sau Thank you. Câu cảm thán ngắn."},
    "5.p1": {"g": "“Thanks for + danh từ” = cảm ơn vì. “for” + danh từ (your help); “your” = tính từ sở hữu."},
    "5.p2": {"g": "“I really appreciate it” = tôi rất trân trọng. “really” đứng trước động từ; appreciate là động từ thường, “it” là tân ngữ."},
    "5.p3": {"g": "“You're welcome” = đáp lại lời cảm ơn. “No problem” thân mật hơn. Dấu / nghĩa là dùng một trong hai."},
    "5.p4": {"g": "Câu mệnh lệnh phủ định: Don't + V. “mention it” = nhắc đến. Cách đáp “không có gì”."},
    "5.p5": {"g": "“I'm sorry” dùng khi xin lỗi chung; “I apologize” trang trọng hơn. I'm = I am; apologize là động từ thường."},
    "5.p6": {"g": "“so sorry about + danh từ” = rất xin lỗi về. “that” = đại từ chỉ điều vừa xảy ra."},
    "5.p7": {"g": "“Excuse me” dùng trước khi hỏi hoặc xin đi qua, không dùng khi đã làm sai. Là câu mệnh lệnh rút gọn."},
    "5.p8": {"g": "Đáp lời xin lỗi. “That's okay” = That is okay. “No worries” = không sao đâu, thân mật."},
    "5.p9": {"g": "“It's my fault” = It is + tính từ sở hữu + danh từ. Nhận lỗi trực tiếp, không cần động từ khác."},
    "6.v0": {"e": "I wake up at six and get up at six fifteen.", "g": "“wake up” = tỉnh giấc, “get up” = rời giường. Hiện tại đơn, thói quen. “at + giờ”."},
    "6.v1": {"e": "I have breakfast at seven.", "g": "“have + bữa ăn” = ăn bữa nào; không dùng mạo từ trước breakfast/lunch/dinner. “at seven” = lúc 7 giờ."},
    "6.v2": {"e": "I go to work by bus.", "g": "“go to + nơi” (work, school). Không có the trước work/school khi nói đi làm, đi học. “by bus” = bằng xe buýt."},
    "6.v3": {"e": "I come home at six.", "g": "“home” là trạng từ nên không cần giới từ to. come home = về nhà."},
    "6.v4": {"e": "I take a shower every morning.", "g": "“take a shower” = tắm; a + shower. “every morning” = mỗi sáng (thói quen, hiện tại đơn)."},
    "6.v5": {"e": "I go to bed at eleven.", "g": "“go to bed” là cụm cố định, không có a/the trước bed. “at eleven” = lúc 11 giờ."},
    "6.v6": {"e": "I cook dinner and clean the kitchen.", "g": "Hai động từ nối bằng and, cùng chia hiện tại đơn. “cook dinner” = nấu bữa tối; “the kitchen” = nhà bếp của mình."},
    "6.v7": {"e": "I exercise three times a week.", "g": "“three times a week” = ba lần một tuần, trạng từ tần suất. exercise là động từ ở đây (không thêm -s với I)."},
    "6.v8": {"e": "I always have coffee in the morning.", "g": "Trạng từ tần suất đứng trước động từ chính (always have), nhưng sau động từ be (I'm always late)."},
    "6.v9": {"e": "I sometimes go out. I never eat late.", "g": "“never” đã có nghĩa phủ định nên động từ ở dạng khẳng định (eat). “sometimes” đứng trước động từ chính."},
    "6.p0": {"g": "Hai hành động nối bằng and. “wake up at 6:30” = lúc 6:30. “usually” trước động từ chính. “go for a run” = đi chạy bộ."},
    "6.p1": {"g": "“always” đứng trước have. “before work” = trước giờ làm, không có the. coffee không đếm được nên không có a."},
    "6.p2": {"g": "“rarely” nghĩa là hiếm khi, đã mang nghĩa phủ định nên động từ khẳng định. “stay up” = thức khuya; “past midnight” = quá nửa đêm."},
    "7.v0": {"e": "My day off is Sunday.", "g": "Thứ và tháng luôn viết hoa. “on Monday” = vào thứ Hai (dùng on với thứ). “Monday – Sunday” chỉ dải từ thứ Hai đến Chủ Nhật."},
    "7.v1": {"e": "My birthday is in December.", "g": "“in + tháng” = vào tháng. Tên tháng viết hoa. “January – December” = từ tháng 1 đến tháng 12."},
    "7.v2": {"e": "I study in the morning and rest at night.", "g": "Buổi trong ngày dùng in the (morning/afternoon/evening), riêng “at night” = ban đêm, không có the."},
    "7.v3": {"e": "I'm busy today, but I'm free tomorrow.", "g": "today / tomorrow / yesterday là trạng từ thời gian, không cần giới từ. “but” nối hai ý đối lập."},
    "7.v4": {"e": "I'll see you next month.", "g": "“next” và “last” không dùng với giới từ: last week, next month. I'll = I will."},
    "7.v5": {"e": "", "g": "Hỏi giờ chuẩn: What time is it? What time + be + it? (it là chủ ngữ giả). Có thể nói What's the time? (Anh)."},
    "7.v6": {"e": "Please arrive on time, not late.", "g": "“on time” = đúng giờ, “early” = sớm, “late” = muộn. on time khác in time (kịp lúc)."},
    "7.p0": {"g": "“half past seven” = 7:30, “a quarter to eight” = 7:45. “It's” = It is, chủ ngữ giả khi nói giờ."},
    "7.p1": {"g": "“have a meeting” = có cuộc họp. “on Monday” + “at 9 a.m.”: thứ dùng on, giờ dùng at; a.m. = buổi sáng."},
    "7.t0": {"g": "“at” dùng cho giờ cụ thể (at 7 p.m.) và “at night”. Thứ tự giới từ thời gian: at (giờ), on (ngày), in (tháng/mùa/năm)."},
    "7.t1": {"g": "“on” dùng cho thứ và ngày tháng: on Monday, on July 4th. Ngày tháng đọc là July fourth."},
    "7.t2": {"g": "“in” dùng cho tháng, mùa, năm, buổi: in January, in summer. Mùa thường không có the khi nói chung."},
    "8.v0": {"e": "Happy Birthday! This is for you.", "g": "Câu chúc rút gọn, không có động từ. Chữ cái đầu viết hoa trong lời chúc. Có thể thêm tên: Happy Birthday, Mai!"},
    "8.v1": {"e": "Happy New Year! Wishing you all the best.", "g": "Lời chúc theo mẫu Happy + dịp. “Wishing you + điều tốt” = chúc bạn, dùng V-ing cho lời chúc ngắn."},
    "8.v2": {"e": "Congratulations on your new job!", "g": "“Congratulations on + danh từ” = chúc mừng về. Luôn có -s, Congratulations! dùng khi ai đó đạt thành tích."},
    "8.v3": {"e": "We're having a party tonight.", "g": "Hiện tại tiếp diễn chỉ kế hoạch gần. “have a party” = tổ chức tiệc; a + party."},
    "8.v4": {"e": "I bought a present for my mom.", "g": "Quá khứ đơn: bought (buy → bought). “a present for + người” = quà cho ai."},
    "8.v5": {"e": "The cake has ten candles on it.", "g": "“has” vì chủ ngữ The cake số ít. “ten candles” = số + danh từ số nhiều; “on it” = ở trên nó."},
    "8.v6": {"e": "Tomorrow is a national holiday.", "g": "a + national holiday (national bắt đầu phụ âm). “a holiday” là ngày lễ, đếm được."},
    "8.v7": {"e": "We celebrate Tết with our family.", "g": "“celebrate + lễ” (không có giới từ). “with our family” = cùng gia đình. Tết viết hoa."},
    "8.p0": {"g": "Câu hỏi Wh- với be: When + is + your birthday? Trả lời bằng My birthday is + ngày."},
    "8.p1": {"g": "Ngày tháng: on + the + số thứ tự + of + tháng: on the 15th of March. Viết cách đọc: the fifteenth of March."},
    "8.p2": {"g": "Câu hỏi hiện tại đơn: What + do + you + usually do? “at Tết” = vào dịp Tết (at + dịp lễ)."},
    "8.p3": {"g": "“get together” = tụ họp, “as a family” = như một gia đình. Hai động từ nối bằng and: get together and eat. “traditional food” không đếm được."},
    "9.v0": {"e": "It's sunny today, but it was rainy yesterday.", "g": "“It's” = It is, “it” là chủ ngữ giả khi nói thời tiết. Thêm -y vào danh từ để thành tính từ: sun → sunny (gấp đôi n), rain → rainy."},
    "9.v1": {"e": "It's windy and foggy this morning.", "g": "be + tính từ. “windy” (wind + y), “foggy” (fog + g + y gấp đôi phụ âm). Hai tính từ nối bằng and."},
    "9.v2": {"e": "It's cool in the evening.", "g": "Dùng it + be + tính từ để nói thời tiết. “in the evening” = vào buổi tối. cool = mát, cold = lạnh."},
    "9.v3": {"e": "It's freezing outside! It's boiling in here.", "g": "freezing, boiling là tính từ cực đoan nên không dùng very (không nói very freezing). “outside / in here” = trạng từ chỉ nơi chốn."},
    "9.v4": {"e": "I love spring, but I hate winter.", "g": "Mùa thường viết thường, không có the khi nói chung. “I love + danh từ”. “in spring” = vào mùa xuân."},
    "9.v5": {"e": "The dry season starts in November.", "g": "Chủ ngữ số ít nên starts có -s. “the” vì mùa cụ thể. “in + tháng”."},
    "9.v6": {"e": "The temperature is thirty degrees.", "g": "temperature không đếm được. “thirty degrees” = số + degrees (số nhiều). Chủ ngữ số ít nên is."},
    "9.v7": {"e": "Let's check the forecast. It's only drizzling.", "g": "“forecast” = dự báo, danh từ đếm được. “drizzle” = mưa phùn vừa là danh từ vừa là động từ. Hiện tại tiếp diễn: is drizzling."},
    "9.p0": {"g": "Hỏi thời tiết: What's the weather like? (like = giống như, không phải “thích”). “today” trạng từ cuối câu."},
    "9.p1": {"g": "“It's thirty-two degrees.” = nhiệt độ; số ghép có gạch nối. “It's boiling!” = nóng như thiêu, câu cảm thán."},
    "9.p2": {"g": "“be going to + V” diễn tả dự đoán dựa trên dấu hiệu. “rain” ở đây là động từ. “this afternoon” = chiều nay."},
    "9.p3": {"g": "So sánh hơn của tính từ ngắn: hot → hotter (gấp đôi t) + than. “Today is hotter than yesterday”: today và yesterday là hai mốc."},
    "10.v0": {"e": "I'm in the living room. My bedroom is upstairs.", "g": "“in the + phòng” = ở trong phòng. “living room” là danh từ ghép. “upstairs” = trạng từ, lầu trên."},
    "10.v1": {"e": "The kitchen is next to the bathroom.", "g": "“next to + danh từ” = bên cạnh. Chủ ngữ số ít nên is. kitchen và bathroom đều có the khi nói về phòng cụ thể."},
    "10.v2": {"e": "There's a small balcony and a garden.", "g": "“There's” = There is + danh từ số ít; hai danh từ có a riêng. small = tính từ đứng trước danh từ."},
    "10.v3": {"e": "The sofa is comfortable.", "g": "sofa số ít nên is. “comfortable” = thoải mái. Armchair là ghế có tay vịn cho một người."},
    "10.v4": {"e": "My wardrobe is next to the bookshelf.", "g": "Hai danh từ số ít, động từ is. “next to” là giới từ chỉ vị trí. Dùng “my” khi là đồ của mình."},
    "10.v5": {"e": "The fridge is full of food.", "g": "“be full of + danh từ” = đầy. food không đếm được. “washing machine” = danh từ ghép: V-ing + danh từ."},
    "10.v6": {"e": "Please turn on the air conditioner.", "g": "“turn on” = bật; “turn it on” khi tân ngữ là đại từ. A/C là viết tắt. “the” vì thiết bị cụ thể."},
    "10.v7": {"e": "The sink is full of dishes. Turn off the tap.", "g": "“sink” (chậu rửa) và “tap” (vòi). Câu mệnh lệnh: Turn off + vật. dishes = số nhiều (bát đĩa)."},
    "10.v8": {"e": "I heat my lunch in the microwave.", "g": "“in the microwave” = trong lò vi sóng. Hiện tại đơn, thói quen. oven dùng bake / roast."},
    "10.v9": {"e": "The curtains are blue and the carpet is grey.", "g": "curtains số nhiều nên are, carpet số ít nên is. Hai mệnh đề nối bằng and."},
    "10.p0": {"g": "“has” vì chủ ngữ My apartment số ít. “two bedrooms” = số nhiều; “a small balcony” = a + tính từ + danh từ."},
    "10.p1": {"g": "“next to + danh từ” = bên cạnh. “by the window” cũng đúng. “the window” = cửa sổ trong phòng."},
    "10.t0": {"g": "“in” dùng cho vật nằm bên trong không gian kín: in the drawer, in the box. The books are = số nhiều nên are."},
    "10.t1": {"g": "“on” = ở trên bề mặt: on the table, on the wall. The remote is = số ít nên is."},
    "10.t2": {"g": "“next to / beside” = bên cạnh. The lamp is next to the bed. Hai giới từ có nghĩa giống nhau."},
    "10.t3": {"g": "“between + A and B” = ở giữa hai vật. The sofa is between the windows: between + danh từ số nhiều."},
    "10.t4": {"g": "“opposite” (Anh) = “across from” (Mỹ) = đối diện. The bathroom is opposite the bedroom: không cần giới từ to hay of."},
    "11.v0": {"e": "I'm wearing a white T-shirt.", "g": "“wear” = mặc (hiện tại tiếp diễn khi đang mặc). a + T-shirt (đọc /ti/ phụ âm). “white” đứng trước danh từ."},
    "11.v1": {"e": "She's wearing a blue dress.", "g": "“dress” (váy liền) đếm được: a dress. “skirt” (chân váy) cũng đếm được. “She's” = She is."},
    "11.v2": {"e": "These jeans are too tight.", "g": "jeans, trousers, shorts luôn số nhiều, nên dùng these / are. Để nói một cái: a pair of jeans."},
    "11.v3": {"e": "Take a jacket. It's cold outside.", "g": "Câu mệnh lệnh: Take + vật. “jacket” (áo khoác mỏng), “coat” (áo khoác dài). cold = tính từ chỉ thời tiết."},
    "11.v4": {"e": "I wear sneakers every day.", "g": "sneakers, boots, sandals là danh từ số nhiều (đi theo đôi). “every day” = mỗi ngày, hiện tại đơn."},
    "11.v5": {"e": "I wear a cap in summer.", "g": "cap là mũ lưỡi trai. “in summer” = vào mùa hè, không có the khi nói chung."},
    "11.v6": {"e": "I like plain shirts, not striped ones.", "g": "plain / striped / floral / checked là tính từ họa tiết, đứng trước danh từ. “ones” thay cho shirts."},
    "11.v7": {"e": "This shirt is made of cotton.", "g": "“be made of + chất liệu” = làm bằng. Cấu trúc bị động: is + made. cotton không đếm được."},
    "11.v8": {"e": "The dress code is smart casual.", "g": "Tính từ phong cách: casual, smart, formal, sporty. “smart casual” = lịch sự nhưng thoải mái; smart ở Anh nghĩa là gọn gàng."},
    "11.p0": {"g": "Hiện tại tiếp diễn: I'm wearing (mặc lúc này). “white shirt and black trousers” = màu đứng trước danh từ; trousers số nhiều."},
    "11.p1": {"g": "“in the red dress” = giới từ in dùng khi nói người mặc gì (the woman in the red dress). “She's” = She is."},
    "11.p2": {"g": "“should + V” = nên. “something smart” = something + tính từ, tính từ đứng sau. “for the interview” = cho buổi phỏng vấn."},
    "12.v0": {"e": "My sister is a nurse. My dad is a doctor.", "g": "Nghề nghiệp có a/an: a nurse, a doctor. Chủ ngữ số ít nên is."},
    "12.v1": {"e": "She is a teacher at a high school.", "g": "“a teacher” (giáo viên). “lecturer” = giảng viên đại học. Chủ ngữ số ít nên is."},
    "12.v2": {"e": "I'm a software engineer.", "g": "an hoặc a: a software engineer (software bắt đầu phụ âm). “engineer” = kỹ sư, “programmer” = lập trình viên."},
    "12.v3": {"e": "My brother is an accountant.", "g": "“an” vì accountant bắt đầu bằng nguyên âm. “lawyer” = a lawyer."},
    "12.v4": {"e": "My manager is very kind.", "g": "“My manager” số ít nên is. “CEO” đọc từng chữ cái, dùng a CEO (âm /si/)."},
    "12.v5": {"e": "She is a photographer.", "g": "a + danh từ chỉ nghề. “designer” có thể nói a graphic designer. Dấu / nghĩa là chọn một trong hai."},
    "12.v6": {"e": "He works as a chef in a restaurant.", "g": "“work as + nghề” = làm nghề. “in a restaurant” = ở nhà hàng. Chủ ngữ He số ít nên works."},
    "12.v7": {"e": "I'm a freelancer, so I choose my own hours.", "g": "“so” = vì vậy. “my own hours” = giờ làm của riêng tôi. freelancer = a freelancer. self-employed = tự kinh doanh (tính từ)."},
    "12.v8": {"e": "I have a full-time job.", "g": "“a full-time job”: tính từ ghép + danh từ, không có -s. part-time = bán thời gian."},
    "12.v9": {"e": "The meeting is at ten. The deadline is Friday.", "g": "meeting, salary, deadline là danh từ. “deadline” = hạn chót; “The deadline is + ngày”. “at ten” = lúc 10 giờ."},
    "12.p0": {"g": "“What do you do for a living?” = bạn kiếm sống bằng nghề gì. do là trợ động từ; “for a living” = để kiếm sống."},
    "12.p1": {"g": "“work for + công ty” = làm cho. “a tech company in Hanoi” = a + danh từ ghép + in + thành phố."},
    "12.p2": {"g": "“be in charge of + danh từ” = phụ trách. “the marketing team” = marketing đóng vai tính từ, không có -s."},
    "12.p3": {"g": "“work from home” = làm việc ở nhà. “three days a week” = ba ngày một tuần, trạng từ tần suất."},
    "13.v0": {"e": "My sister goes to primary school.", "g": "“go to + school” không có the khi nói đi học. “primary school” (Anh) = tiểu học; “secondary school” = THCS/THPT."},
    "13.v1": {"e": "I'm in high school. I want to go to university.", "g": "“in high school” = đang học THPT, không có a/the. “go to university” cũng không có the (Anh)."},
    "13.v2": {"e": "My favourite subject is math. My major is IT.", "g": "subject = môn học, major = chuyên ngành đại học. “My major is + ngành”. Hai danh từ khác nhau."},
    "13.v3": {"e": "I have a lot of homework today.", "g": "homework không đếm được nên dùng a lot of, không dùng many. “assignment” là bài tập lớn, đếm được."},
    "13.v4": {"e": "I have an exam tomorrow.", "g": "“an exam”: an vì exam bắt đầu nguyên âm. “take an exam” = làm bài thi. test và quiz là bài ngắn hơn."},
    "13.v5": {"e": "I passed the exam. I got a good grade.", "g": "Quá khứ đơn: passed, got (get → got). “pass” = đậu; “fail” = rớt; “grade” = điểm (Mỹ)."},
    "13.v6": {"e": "My classmate is very helpful.", "g": "“classmate” = bạn cùng lớp. “professor” viết hoa khi đứng trước tên: Professor Smith."},
    "13.v7": {"e": "She got a scholarship to study abroad.", "g": "Quá khứ đơn: got. “scholarship to + V” hoặc “to + nơi”; “study abroad” = du học (abroad là trạng từ). “tuition fee” = học phí."},
    "13.p0": {"g": "Hiện tại tiếp diễn: I'm studying (đang học). “study + ngành”, “at + trường” (at HUST). Tên viết tắt viết hoa."},
    "13.p1": {"g": "“a big exam” = a + tính từ + danh từ. “next week” = tuần sau. “need to + V” = cần; “harder” = so sánh hơn của hard."},
    "13.p2": {"g": "“because” nối nguyên nhân: My favourite subject is English because it's useful. “it's” = it is."},
    "14.v0": {"e": "I have a plan for tomorrow.", "g": "“have a plan” = có kế hoạch. “plan” và “intention” là danh từ; “intention” trang trọng hơn."},
    "14.v1": {"e": "I have an appointment at three.", "g": "“an appointment” (hẹn khám, hẹn gặp); “a meeting” (họp). at three = lúc 3 giờ."},
    "14.v2": {"e": "I'm free this weekend. Let's meet next week.", "g": "“this / next + thời gian” không dùng giới từ: this weekend, next week. “free” = rảnh, be + tính từ. “Let's + V” = rủ làm cùng."},
    "14.v3": {"e": "", "g": "“Are you free + thời gian?” = bạn có rảnh không? be + tính từ (free). Dùng khi đang mời."},
    "14.p0": {"g": "Hiện tại tiếp diễn cho dự định gần: What are you doing + thời gian? “tonight” = tối nay."},
    "14.p1": {"g": "“I'm meeting” = hiện tại tiếp diễn chỉ lịch hẹn. “for dinner” = để ăn tối. “at six” = lúc 6 giờ."},
    "14.p2": {"g": "“We're going to visit” = be going to + V (dự định). “this Sunday” = Chủ nhật này. “grandparents” số nhiều."},
    "14.t0": {"g": "“be going to + V” = dự định đã quyết định từ trước, hoặc dự đoán có dấu hiệu. I'm going to study = dự định học."},
    "14.t1": {"g": "“will + V” = quyết định ngay lúc nói, lời hứa hoặc đề nghị. I'll = I will. “help you with that” = giúp bạn việc đó."},
    "14.t2": {"g": "Hiện tại tiếp diễn dùng cho kế hoạch có lịch cụ thể: I'm having lunch with Lan tomorrow. Có thời gian trong tương lai đi kèm."},
    "15.v0": {"e": "I eat rice every day. Noodle soup is my favourite.", "g": "rice và noodle soup đều không đếm được (noodle soup = món phở/bún). Chủ ngữ số ít nên is. “my favourite” = món yêu thích nhất."},
    "15.v1": {"e": "I'd like a sandwich, please.", "g": "“I'd like + vật” = muốn gọi. a sandwich (a + phụ âm). bread không đếm được: some bread."},
    "15.v2": {"e": "I don't eat pork, but I like chicken.", "g": "Thịt dùng không đếm được, không có a. “don't eat” = hiện tại đơn phủ định (I don't + V). “but” = nhưng."},
    "15.v3": {"e": "I love fish, but I'm allergic to seafood.", "g": "“be allergic to + danh từ” = dị ứng với. fish và seafood không đếm được ở nghĩa món ăn."},
    "15.v4": {"e": "I have an egg for breakfast.", "g": "“an egg” (an + nguyên âm). dairy là nhóm thực phẩm từ sữa, không đếm được."},
    "15.v5": {"e": "I eat a lot of fruit and vegetables.", "g": "fruit không đếm được, vegetables đếm được (số nhiều). “a lot of” dùng với cả hai."},
    "15.v6": {"e": "I like snacks, but I don't eat dessert.", "g": "snacks số nhiều, dessert không đếm được hoặc đếm được tùy ngữ cảnh. “but” nối ý đối lập."},
    "15.v7": {"e": "I drink coffee in the morning.", "g": "Đồ uống như coffee, tea, water không đếm được. “drink” là động từ cho đồ uống (không dùng eat)."},
    "15.v8": {"e": "I'd like a mango smoothie.", "g": "“a smoothie” đếm được khi gọi một ly. “juice” không đếm được: a glass of orange juice."},
    "15.v9": {"e": "I don't drink soft drinks or beer.", "g": "“or” dùng trong câu phủ định thay cho and. Câu phủ định hiện tại đơn: don't + V."},
    "15.v10": {"e": "The soup is sweet and a bit salty.", "g": "Vị là tính từ đứng sau be. “a bit” + tính từ = hơi. sweet, salty, spicy đều mô tả vị."},
    "15.v11": {"e": "Lemon is sour. This coffee is bitter.", "g": "Chủ ngữ số ít nên is. “sour” = chua, “bitter” = đắng. Không dùng very với từ cực đoan như delicious."},
    "15.v12": {"e": "The pho here is really delicious.", "g": "“really” nhấn mạnh tính từ. “delicious” là tính từ cực đoan nên dùng really/absolutely (không dùng very). “tasty” nhẹ hơn."},
    "16.p0": {"g": "“I'd like + vật” = muốn gọi (lịch sự). “an iced coffee”: an vì iced bắt đầu bằng nguyên âm /aɪ/. “with milk” = có sữa."},
    "16.p1": {"g": "Hai câu hỏi/yêu cầu ngắn. “Hot or iced?” = chọn lựa. “Less sugar, please” = ít đường, please làm lịch sự."},
    "16.p2": {"g": "“No ice, please” = đừng cho đá. “For here or to go?” = dùng tại chỗ hay mang đi? Cụm giới từ thay cho động từ."},
    "16.p3": {"g": "“Would you like + vật?” = mời lịch sự. “something to drink” = something + to + V (một thứ để uống)."},
    "16.p4": {"g": "“Can I get + vật?” = xin cho tôi. “a refill” = lần rót thêm. “get” = có được."},
    "17.v0": {"e": "Could I see the menu? I'd like to order.", "g": "“order” vừa là động từ (gọi món) vừa là danh từ (the order). “menu” = thực đơn."},
    "17.v1": {"e": "I'll have the soup as a starter.", "g": "“as a starter” = như món khai vị. I'll have = I will have, cách gọi món lịch sự."},
    "17.v2": {"e": "Could we have the bill, please?", "g": "bill (Anh) / check (Mỹ). “Could we have + vật” = lịch sự. “the” vì hóa đơn của bàn mình."},
    "17.v3": {"e": "I have a reservation for two.", "g": "“make / have a reservation” = đặt chỗ. “for two” = cho hai người. Dùng a vì reservation bắt đầu phụ âm."},
    "17.v4": {"e": "The waiter is very polite.", "g": "waiter (nam) / waitress (nữ). The waiter = chủ ngữ số ít nên is. “very polite” = rất lịch sự."},
    "17.v5": {"e": "Should I leave a tip?", "g": "“Should I + V?” = tôi có nên không? “leave a tip” = để lại tiền boa. tip đếm được."},
    "17.p0": {"g": "“A table for two, please” = câu rút gọn khi vào quán (không có động từ). “for + số người”."},
    "17.p1": {"g": "“Could I + V?” = lịch sự hơn Can I. “see the menu” = xem thực đơn. please làm lời nhờ lịch sự."},
    "17.p2": {"g": "“What do you recommend?” = hỏi lời gợi ý, do là trợ động từ. Có thể nói What would you recommend? lịch sự hơn."},
    "17.p3": {"g": "“I'd like + món” = muốn gọi. “Not too spicy” = không quá cay (not too + tính từ). “the fried rice” = món cơm rang cụ thể."},
    "17.p4": {"g": "“Could we have + danh từ?” = chúng tôi xin… được không. “the bill” = hóa đơn. Dùng we vì cả nhóm."},
    "17.p5": {"g": "Hai câu của nhân viên: “Are you ready to order?” (be ready to + V). “Enjoy your meal!” là câu mệnh lệnh chúc ngon miệng."},
    "17.t0": {"g": "“I want + món” hơi trực tiếp, nghe cộc. Dùng được với bạn bè, nhưng với nhân viên nên dùng I'd like."},
    "17.t1": {"g": "“Can I have + món?” = xin cho tôi. Lịch sự vừa phải, hợp với quán bình dân."},
    "17.t2": {"g": "“I'd like + món, please” = lịch sự nhất. I'd = I would; “please” thêm vào cuối câu."},
    "18.v0": {"e": "How much is it? It's fifty thousand dong.", "g": "“How much” + be + chủ ngữ. “it” thay cho món hàng. Với số nhiều dùng How much are they?"},
    "18.v1": {"e": "There's a discount on this shirt.", "g": "“There's” = There is + danh từ số ít. “a discount on + vật” = giảm giá cho. price/cost đều là danh từ đếm được hoặc không."},
    "18.v2": {"e": "I wear a medium. Do you have this in a large?", "g": "Cỡ viết tắt: S, M, L, XL (small, medium, large, extra large). “in + cỡ” = ở cỡ nào. “wear a medium” = mặc cỡ M. “size” là danh từ: What size do you wear?"},
    "18.v3": {"e": "Can I try this on? Where's the fitting room?", "g": "“try on” = thử đồ; tân ngữ đứng giữa: try it on. “Where's” = Where is."},
    "18.v4": {"e": "It's too big. Do you have a smaller one?", "g": "“too + tính từ” = quá. “a smaller one” = so sánh hơn + one (thay shirt). Không dùng very big thay too big khi chê."},
    "18.v5": {"e": "I'd like to pay by card. Could I have the receipt?", "g": "“pay by + phương thức” = trả bằng. cash/card không có a. “the receipt” = hóa đơn cụ thể."},
    "18.v6": {"e": "I'd like a refund. Can I exchange this?", "g": "“a refund” = a + danh từ. “exchange” là động từ ở đây (đổi hàng). “this” = vật đang cầm."},
    "18.v7": {"e": "", "g": "Hai câu cố định. “I'll take it” = I will take it, quyết định mua. “I'm just looking” = I am + just + V-ing, từ chối nhân viên chào hàng khéo."},
    "18.p0": {"g": "Hai câu hỏi nối tiếp. “Can I + V?” = xin phép; “try this on”. “Do you have + vật + in + cỡ?”: in a size M."},
    "18.p1": {"g": "“a bit too tight” = hơi chật. “a bigger one” = so sánh hơn + one; big → bigger (gấp đôi g)."},
    "18.p2": {"g": "“Can you give me a discount?” = give + người + vật. “How about + số tiền?” = đề nghị giá (150,000). Cấu trúc thương lượng."},
    "18.p3": {"g": "“pay by card” = trả bằng thẻ. “Could I have the receipt?” = xin hóa đơn; hai câu hỏi liên tiếp."},
    "19.v0": {"e": "Go straight and turn left at the corner.", "g": "Câu mệnh lệnh: Go straight (đi thẳng), Turn left. “at the corner” = ở góc đường. Hai động từ nối bằng and."},
    "19.v1": {"e": "Cross the street at the traffic light.", "g": "Câu mệnh lệnh: Cross + the street. “at the traffic light” = tại đèn giao thông, at + điểm."},
    "19.v2": {"e": "The bank is on the left.", "g": "“on the left / on the right” = ở bên trái / phải, luôn có the. “The bank is” số ít."},
    "19.v3": {"e": "The café is next to the bank, opposite the park.", "g": "Giới từ vị trí đứng trước danh từ. “between + A and B”: between the bank and the post office."},
    "19.v4": {"e": "Turn left at the traffic light.", "g": "“at + điểm” (at the traffic light, at the corner, at the junction). junction = ngã tư, ngã ba."},
    "19.v5": {"e": "It's five minutes on foot.", "g": "“on foot” = đi bộ, “by car” = bằng ô tô. Thời gian: số + minutes (số nhiều)."},
    "19.p0": {"g": "“Excuse me” để gây chú ý. “How do I get to + nơi?” = làm sao tôi đến. do là trợ động từ, get to = đến."},
    "19.p1": {"g": "Câu mệnh lệnh nối bằng and. “at the traffic light” = tại đèn giao thông. “turn left” = rẽ trái."},
    "19.p2": {"g": "“It's on the right” = It is + giới từ + danh từ. “next to the café” = bên cạnh quán cà phê."},
    "19.p3": {"g": "“Could you + V?” = nhờ lịch sự. “more slowly” = so sánh hơn của trạng từ slowly. “repeat that” = nhắc lại điều đó."},
    "20.p0": {"g": "“Could you + V, please?” = nhờ lịch sự. “help me”: me là tân ngữ. Dùng Could thay Can khi muốn nhẹ nhàng hơn."},
    "20.p1": {"g": "“say that again” = nói lại điều đó; “more slowly” = nói chậm hơn (so sánh hơn của trạng từ). Dấu / cho hai cách nhờ."},
    "20.p2": {"g": "“What does + từ + mean?” = từ đó nghĩa là gì. does vì chủ ngữ số ít; mean ở dạng nguyên mẫu (không -s)."},
    "20.p3": {"g": "“How do you say + từ + in English?” = nói từ đó bằng tiếng Anh thế nào. do là trợ động từ; không nói “How to say”."},
    "20.p4": {"g": "“Can you + V?” = nhờ vả. “write it down” = viết nó ra; it đứng giữa write và down."},
    "20.p5": {"g": "“I don't understand” = hiện tại đơn phủ định (don't + V). “I'm not sure” = I am not + tính từ. Hai cách báo mình chưa hiểu."},
    "20.p6": {"g": "Câu hỏi với be: Is there a problem? (There is + danh từ). “Is everything okay?” = đảo be lên trước. Hỏi thăm lịch sự."},
    "21.v0": {"e": "My head hurts. My eyes are red.", "g": "“head / eye / ear” là danh từ đếm được; eyes và ears thường số nhiều vì có hai. hurt = đau, không chia -s ở câu hỏi."},
    "21.v1": {"e": "I have a sore throat.", "g": "“a sore throat” = đau họng, a + tính từ + danh từ. nose, mouth, throat đều là danh từ có the/my."},
    "21.v2": {"e": "I need to see a dentist. My tooth hurts.", "g": "tooth → teeth (số nhiều bất quy tắc). “My tooth hurts” vì chủ ngữ số ít. “see a dentist” = đi khám nha sĩ."},
    "21.v3": {"e": "My back hurts. I have a pain in my shoulder.", "g": "“have a pain in + bộ phận” = bị đau ở. “my back” = tính từ sở hữu + bộ phận cơ thể. chest = ngực."},
    "21.v4": {"e": "My stomach hurts. My leg is sore.", "g": "Chủ ngữ số ít nên hurts / is. sore = đau nhức (tính từ). “arm” = cánh tay."},
    "21.v5": {"e": "My knee hurts when I walk.", "g": "“when + mệnh đề” = khi. foot → feet (số nhiều bất quy tắc). ankle = mắt cá."},
    "21.v6": {"e": "I have a headache.", "g": "“have + bệnh” = bị bệnh: have a headache, have a stomachache. Dùng a. Không nói “I am headache”."},
    "21.v7": {"e": "I have a sore throat and a backache.", "g": "Hai danh từ nối bằng and, mỗi danh từ có a riêng. “sore throat” = tính từ + danh từ."},
    "21.v8": {"e": "I have a cold. My mom has the flu.", "g": "“a cold” (a), nhưng “the flu” (the). “has” vì chủ ngữ My mom số ít."},
    "21.v9": {"e": "I have a fever and a cough.", "g": "“a fever” và “a cough” đều đếm được với a. “have + triệu chứng”."},
    "21.v10": {"e": "I have a runny nose and diarrhea.", "g": "“runny nose”: runny là tính từ (run + n + y). diarrhea không đếm được nên không có a. “and” nối hai triệu chứng."},
    "21.v11": {"e": "I feel dizzy and nauseous.", "g": "feel + tính từ. dizzy, nauseous là tính từ nên không dùng I feel a dizzy. “and” nối hai tính từ."},
    "21.p0": {"g": "“I have + a + triệu chứng + and + a + triệu chứng.” Hai danh từ riêng nên mỗi danh từ có a (a sore throat and a fever)."},
    "21.p1": {"g": "Hiện tại hoàn thành: I've had = I have had. “for + khoảng thời gian” (for two days), “since + mốc” (since Monday). Dấu / là chọn một."},
    "21.p2": {"g": "“My knee hurts” = chủ ngữ số ít nên hurts có -s. “when + mệnh đề” = khi: It hurts when I swallow. It chỉ việc đau."},
    "21.p3": {"g": "“should + V” = nên. “get some rest” = nghỉ ngơi (rest không đếm được). “lots of water” = nhiều nước, water không đếm được."},
    "21.p4": {"g": "“I'm allergic to + danh từ” = dị ứng với. Giới từ to cố định. penicillin không đếm được, không có a."},
    "22.v0": {"e": "I go to work by bus.", "g": "“by + phương tiện” không có a/the: by bus, by train, by metro. metro = tàu điện ngầm."},
    "22.v1": {"e": "I go to school by motorbike.", "g": "“by motorbike” = bằng xe máy. “take a taxi” = đi taxi (take + a + phương tiện). Không nói “by a taxi”."},
    "22.v2": {"e": "Get on the bus at the next stop. Get off at the station.", "g": "“get on / off” dùng cho xe lớn (buýt, tàu, máy bay). Câu mệnh lệnh: Get on + the bus. “at + điểm dừng”."},
    "22.v3": {"e": "Get in the taxi. Get out of the car.", "g": "“get in / out of” dùng cho xe nhỏ (taxi, ô tô). Sau get out of luôn có of + danh từ."},
    "22.v4": {"e": "One return ticket, please.", "g": "“a single ticket” = vé một chiều (Anh), “a return ticket” = vé khứ hồi. “One … please” khi mua vé."},
    "22.v5": {"e": "The train leaves from platform three.", "g": "“from platform + số” = từ sân ga số. Số đứng sau danh từ, không có the. “leave from” = khởi hành từ."},
    "22.v6": {"e": "What's the fare? Where's the timetable?", "g": "“fare” = giá vé phương tiện; “timetable” = lịch chạy. What's = What is; Where's = Where is."},
    "22.v7": {"e": "I'm stuck in a traffic jam. My flight is delayed.", "g": "“be stuck in + danh từ” = kẹt trong. “a traffic jam” = a + danh từ ghép. “delayed” = V3 dùng như tính từ."},
    "22.v8": {"e": "How long does it take to get to the airport?", "g": "“How long does it take (to + V)?” = mất bao lâu để làm gì. “it” là chủ ngữ giả; take không -s sau does."},
    "22.v9": {"e": "How far is it from here to the station?", "g": "“How far + be + it?” = cách bao xa. “from here to + nơi” = từ đây đến. Trả lời: It's two kilometers."},
    "22.p0": {"g": "“Which bus goes to + nơi?” = xe buýt nào đi đến. Which + danh từ + động từ; goes có -s vì bus số ít."},
    "22.p1": {"g": "“It takes me thirty minutes to + V” = tôi mất 30 phút để làm gì. takes có -s (chủ ngữ It). “by motorbike” = bằng xe máy."},
    "22.p2": {"g": "“I'm stuck in a traffic jam” = hiện tại với tính từ stuck. “I'll be late” = I will be late (dự đoán). Hai câu ngắn."},
    "22.p3": {"g": "“To the airport, please” = câu rút gọn khi lên taxi. “in a bit of a hurry” = hơi vội, a bit of + danh từ."},
    "23.v0": {"e": "Please show your passport and boarding pass.", "g": "Câu mệnh lệnh lịch sự. Danh từ đếm được (passport, visa). “your” = tính từ sở hữu của you."},
    "23.v1": {"e": "I'd like to check in, please.", "g": "“check in” (nhận phòng) và “check out” (trả phòng) là cụm động từ; danh từ là check-in / checkout. “I'd like to + V” = muốn làm gì."},
    "23.v2": {"e": "I'd like a double room for two nights.", "g": "“a double room” = a + danh từ ghép. “for two nights” = for + khoảng thời gian; nights số nhiều."},
    "23.v3": {"e": "I have one suitcase and a carry-on.", "g": "Hai danh từ đếm được nối bằng and. luggage không đếm được: some luggage, không nói a luggage."},
    "23.v4": {"e": "My flight is delayed. Which gate is it?", "g": "“flight” là chuyến bay; “gate” là cổng. “Which gate is it?” = Which + danh từ + be + chủ ngữ. delayed = tính từ."},
    "23.v5": {"e": "We're going sightseeing tomorrow.", "g": "“go sightseeing” = đi tham quan (không có to). “guided tour” = a guided tour, tính từ V3 + danh từ."},
    "23.v6": {"e": "The entrance fee is ten dollars.", "g": "“entrance fee” = danh từ ghép; fee số ít nên is. “ten dollars” = số + danh từ số nhiều."},
    "23.v7": {"e": "", "g": "Bị động quá khứ: was + stolen (steal → stole → stolen). “my wallet” là chủ ngữ số ít nên was. Dùng khi báo mất đồ."},
    "23.p0": {"g": "“I'd like to + V” = muốn làm gì. “a reservation under + tên” = đặt chỗ dưới tên. I have = hiện tại đơn."},
    "23.p1": {"g": "Hai câu hỏi ngắn. “Is breakfast included?” = bị động hiện tại (be + V3). “What time is checkout?” = What time + be + chủ ngữ."},
    "23.p2": {"g": "Hiện tại hoàn thành: Have you ever been to + nơi? (ever = từng). Trả lời bằng quá khứ đơn: I went (mốc cụ thể last spring)."},
    "23.p3": {"g": "Quá khứ đơn: didn't arrive (didn't + V). “was cancelled” = bị động quá khứ (was + V3). Hai tình huống khác nhau, dấu / là chọn một."},
    "24.p0": {"g": "“this is + tên” = tôi là… (nói qua điện thoại, không nói I am). “Can I speak to + người?” = cho tôi gặp ai. Mr. + họ."},
    "24.p1": {"g": "“Speaking!” = Đây là tôi (rút gọn của This is he/she speaking). “One moment, please” = xin chờ một lát."},
    "24.p2": {"g": "“I'm calling about + danh từ” = tôi gọi về việc. Hiện tại tiếp diễn; “the meeting tomorrow” = cuộc họp ngày mai."},
    "24.p3": {"g": "“Could I + V?” = xin phép lịch sự. “leave a message” = để lại lời nhắn; a + message."},
    "24.p4": {"g": "“I'll call back later” = I will call back later (quyết định). “Sorry, wrong number” = xin lỗi, nhầm số."},
    "24.p5": {"g": "“The line is breaking up” = hiện tại tiếp diễn (đường truyền đang chập chờn). “I can't hear you well”: can't + V, well = trạng từ."},
    "25.v0": {"e": "I enjoy reading and drawing.", "g": "“enjoy + V-ing”, không dùng to + V. Hai V-ing nối bằng and. painting = vẽ tranh màu."},
    "25.v1": {"e": "I love cooking, and I bake cakes on Sundays.", "g": "“love + V-ing”. “bake cakes” = động từ + danh từ số nhiều. “on Sundays” = các ngày Chủ nhật."},
    "25.v2": {"e": "I like taking photos and gardening.", "g": "“like + V-ing”. “take photos” = chụp ảnh (photos số nhiều). “gardening” là danh từ V-ing."},
    "25.v3": {"e": "I enjoy playing chess and video games.", "g": "play + môn/trò chơi (chess, video games); chess không đếm được, games số nhiều."},
    "25.v4": {"e": "I go hiking every month.", "g": "“go + V-ing” = đi làm hoạt động ngoài trời. “every month” = mỗi tháng. go hiking, go camping, go fishing."},
    "25.v5": {"e": "I like watching dramas in the evening.", "g": "“like + V-ing”. “dramas” số nhiều vì nói về phim bộ nói chung. “in the evening” = vào buổi tối."},
    "25.v6": {"e": "I'm learning languages. I'm learning English now.", "g": "Hiện tại tiếp diễn: I'm learning (đang học). “languages” số nhiều vì nhiều ngôn ngữ."},
    "25.v7": {"e": "", "g": "“prefer A to B” = thích A hơn B. A và B cùng dạng (danh từ hoặc V-ing). Ví dụ: I prefer tea to coffee."},
    "25.v8": {"e": "", "g": "“I'd rather + V” (would rather + V nguyên mẫu, không to) = tôi thích làm… hơn. I'd rather stay home."},
    "26.v0": {"e": "I hang out with friends on Saturdays.", "g": "“hang out with + người” = đi chơi cùng. friends số nhiều khi nói chung. “on Saturdays” = vào các thứ Bảy (thói quen), hiện tại đơn."},
    "26.v1": {"e": "We go for a walk after dinner.", "g": "“go for a walk / drive” = đi dạo, đi hóng mát. “for a” + danh từ. “after dinner” = sau bữa tối (không có the)."},
    "26.v2": {"e": "I visit family on Sundays.", "g": "“visit + người/nơi” = thăm, không có to hay at. “family” khi nói chung không cần my hay the; có thể nói visit my family khi chỉ gia đình mình. “on Sundays”."},
    "26.v3": {"e": "I go to the market on Sunday morning.", "g": "“go to the market” = đi chợ, có the. “on Sunday morning” = vào sáng Chủ nhật."},
    "26.v4": {"e": "I sleep in and relax at home.", "g": "“sleep in” = ngủ nướng, cụm động từ. Hai động từ nối bằng and, cùng chia (không -s với I)."},
    "26.v5": {"e": "", "g": "Quá khứ đơn: What did you do + thời gian quá khứ? did là trợ động từ nên động từ chính ở nguyên mẫu (do). last weekend = cuối tuần trước."},
    "26.p0": {"g": "Quá khứ đơn: What + did + you + do? Dùng last + thời gian, không cần giới từ (last weekend)."},
    "26.p1": {"g": "Quá khứ đơn: went (go → went). “to the night market” = đến chợ đêm; “with my friends” = cùng bạn."},
    "26.p2": {"g": "Quá khứ đơn: stayed up (stay up = thức). “until midnight” = đến nửa đêm. “watching movies” = V-ing chỉ hành động cùng lúc."},
    "26.p3": {"g": "Quá khứ đơn phủ định: didn't do. “much” dùng trong phủ định. “just slept in and relaxed” = hai động từ quá khứ nối bằng and (slept: sleep → slept)."},
    "27.p0": {"g": "“Would you like to + V?” = mời lịch sự. “come to + sự kiện”; “my birthday party” = tính từ sở hữu + danh từ ghép."},
    "27.p1": {"g": "“Are you free + thời gian?” = bạn có rảnh không. be + tính từ (free). “this Saturday” = thứ Bảy này, không có giới từ."},
    "27.p2": {"g": "“Count me in!” = tính tôi vào. Câu mệnh lệnh dùng để nhận lời. I'd love to! = I would love to (nhận lời lịch sự)."},
    "27.p3": {"g": "“What time should we meet?” = should + V (nên). Đảo trợ động từ trước chủ ngữ. “See you there!” = I'll see you there."},
    "27.p4": {"g": "“I already have plans” = hiện tại đơn, đã có kế hoạch. already đứng trước động từ chính. “Maybe next time?” = câu hỏi rút gọn."},
    "27.p5": {"g": "“Thanks for + danh từ” = cảm ơn vì. “the invitation” = lời mời cụ thể. Dùng lời cảm ơn thay vì chỉ từ chối."},
    "28.v0": {"e": "I play football and badminton.", "g": "“play + tên môn có bóng/vợt” (không có the, không có a). Hai danh từ nối bằng and."},
    "28.v1": {"e": "I play basketball on weekends.", "g": "“play basketball” (không có the). “on weekends” = vào các cuối tuần, thói quen."},
    "28.v2": {"e": "I go swimming on Sundays.", "g": "“go + V-ing” cho môn thể thao có động tác: go swimming, go running, go cycling. Không dùng play với swimming."},
    "28.v3": {"e": "I do yoga every morning.", "g": "“do + môn không có bóng/đối kháng” (yoga, karate). “every morning” = mỗi sáng, hiện tại đơn."},
    "28.v4": {"e": "We won the match. They lost.", "g": "Quá khứ bất quy tắc: win → won, lose → lost. “win the match” = thắng trận; “lose” không cần tân ngữ."},
    "28.v5": {"e": "We beat them. The game was a draw.", "g": "“beat” (beat → beat → beaten) = đánh bại; “draw” = hòa (draw → drew). beat cần tân ngữ (beat them)."},
    "28.v6": {"e": "The score is two–one. He scored a goal.", "g": "“score” vừa là danh từ (tỉ số) vừa là động từ (ghi bàn). “a goal” = một bàn; “match” = trận đấu."},
    "28.v7": {"e": "I always warm up before I play.", "g": "“warm up” = khởi động. “before + mệnh đề” = trước khi. “get injured” = bị chấn thương (get + V3)."},
    "28.v8": {"e": "I run twice a week.", "g": "“twice a week” = hai lần một tuần; “every day” = mỗi ngày. Trạng từ tần suất cuối câu."},
    "28.p0": {"g": "“play + môn”: play badminton (không có the). “twice a week” = hai lần một tuần, trạng từ tần suất, hiện tại đơn."},
    "28.p1": {"g": "“be good at + danh từ/V-ing” = giỏi về. “pretty” ở đây là trạng từ = khá. swimming = V-ing sau giới từ at."},
    "28.p2": {"g": "Quá khứ đơn: beat (beat-beat-beaten, quá khứ không đổi). “two–one” = tỉ số hai–một. Beat + đối thủ."},
    "28.p3": {"g": "Hiện tại hoàn thành tiếp diễn: have been + V-ing (đã chơi và vẫn đang chơi). “for + khoảng thời gian” (for five years)."},
    "28.t0": {"g": "“play” dùng cho môn có bóng, vợt, đối kháng: play football, play badminton. Không dùng the trước tên môn."},
    "28.t1": {"g": "“go” + V-ing dùng cho hoạt động di chuyển: go swimming, go running. Không có to hay in."},
    "28.t2": {"g": "“do” dùng cho môn không có bóng hoặc võ/ thể dục: do yoga, do karate, do gymnastics."},
    "29.v0": {"e": "I like action movies and comedies.", "g": "“action movies” = danh từ ghép; thể loại đứng trước movies. comedy → comedies (y → ies). drama = phim tâm lý."},
    "29.v1": {"e": "I don't like horror movies.", "g": "Phủ định hiện tại đơn: don't like. “horror movies” = phim kinh dị. romance/thriller là danh từ chỉ thể loại."},
    "29.v2": {"e": "The director is famous. The actor is my favourite.", "g": "Nam: actor; nữ: actress (hiện nay có thể dùng actor cho cả hai). “is famous” = be + tính từ. “my favourite” = yêu thích."},
    "29.v3": {"e": "I watch movies with subtitles.", "g": "“with + danh từ” = có phụ đề. “dubbed” là V3 dùng như tính từ: a dubbed movie = phim lồng tiếng."},
    "29.v4": {"e": "The movie was gripping. I was touched.", "g": "Tính từ -ing tả phim (gripping, touching), -ed tả cảm xúc người (gripped, touched). “hilarious” là tính từ cực đoan."},
    "29.v5": {"e": "The acting was great. Don't tell me the spoiler!", "g": "“great acting” = diễn xuất tốt, acting không đếm được. “spoiler” = đếm được; Don't + V là câu mệnh lệnh phủ định."},
    "29.p0": {"g": "Hiện tại hoàn thành: Have you seen + danh từ? (hỏi trải nghiệm). “the new Marvel movie” = the + tính từ + tên riêng + danh từ."},
    "29.p1": {"g": "Quá khứ đơn: saw (see → saw). “last weekend” = mốc quá khứ. “It was gripping!” = be quá khứ + tính từ -ing tả phim."},
    "29.p2": {"g": "“prefer A to B” = thích A hơn B. comedies và horror movies đều số nhiều khi nói chung. to (không dùng than)."},
    "29.p3": {"g": "“It's about + danh từ” = nói về. “a girl who travels back in time”: who là đại từ quan hệ, travels có -s vì a girl số ít."},
    "29.p4": {"g": "Phân biệt: The movie was boring (-ing tả phim). I was bored (-ed tả cảm xúc của tôi). Dấu / là hai câu."},
    "30.v0": {"e": "I like pop and rock. My dad likes jazz.", "g": "Thể loại nhạc không đếm được, không có a. Chủ ngữ My dad số ít nên likes có -s."},
    "30.v1": {"e": "I listen to K-pop every day.", "g": "“listen to + nhạc” (có to). K-pop viết hoa K. ballad = a ballad, đếm được."},
    "30.v2": {"e": "I made a playlist of my favourite songs.", "g": "Quá khứ đơn: made (make → made). “a playlist of + danh từ số nhiều”. album = đếm được."},
    "30.v3": {"e": "I love the melody and the lyrics.", "g": "“the melody”, “the lyrics” = lời, luôn số nhiều. Hai danh từ nối bằng and. chorus = điệp khúc."},
    "30.v4": {"e": "My favourite singer is Son Tung.", "g": "singer / musician đều a + danh từ. “band” là danh từ tập thể: The band is famous."},
    "30.v5": {"e": "I play the guitar. She plays the piano.", "g": "“play the + nhạc cụ” (có the). Chủ ngữ She số ít nên plays có -s. Với môn thể thao thì không có the."},
    "30.v6": {"e": "This song is catchy and upbeat.", "g": "be + tính từ. catchy = dễ nhớ; upbeat = sôi động; relaxing = thư giãn (-ing tả bài hát). Hai tính từ nối bằng and."},
    "30.v7": {"e": "We went to a live concert last night.", "g": "Quá khứ đơn: went (go → went). “a live concert” = a + tính từ + danh từ. “live music” = nhạc sống, không đếm được."},
    "30.p0": {"g": "“be into + danh từ” = đang mê, đam mê. What kind of music = loại nhạc nào. Hỏi sở thích bằng hiện tại."},
    "30.p1": {"g": "Hiện tại đơn: I listen to music. “on my phone” = trên điện thoại (on + thiết bị). “every day” = mỗi ngày."},
    "30.p2": {"g": "“a little” = một chút. “I'm still a beginner” = vẫn còn là người mới (still đứng sau be). “play the guitar” có the."},
    "30.p3": {"g": "“make + me + V” = khiến tôi (feel relaxed, không dùng to). “remind + me + of + danh từ” = gợi tôi nhớ đến. “It reminds me of home”."},
    "30.p4": {"g": "Hiện tại hoàn thành: Have you ever been to + nơi? ever = từng. “a live concert” = buổi hòa nhạc trực tiếp."},
    "25.p0": {"g": "“What do you do in your free time?” = do (trợ động từ) + do (động từ chính). “in your free time” = lúc rảnh. Hỏi sở thích."},
    "25.p1": {"g": "“love + V-ing” = rất thích. “taking photos of + danh từ” = chụp ảnh của; “street food” là danh từ không đếm được."},
    "25.p2": {"g": "“go hiking” = đi leo núi. “about once a month” = khoảng một lần một tháng, trạng từ tần suất cuối câu; about = khoảng."},
    "25.p3": {"g": "“prefer + V-ing + to + V-ing” = thích làm gì hơn làm gì. “reading to watching TV”: to đi với watching, TV không có the."}
  }
};
