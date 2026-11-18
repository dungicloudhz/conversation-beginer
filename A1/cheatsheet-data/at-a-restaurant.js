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
      p: [
        "Khi đặt bàn, nói lần lượt ba thông tin để nhà hàng ghi lại dễ dàng: **for** + số người, **at** + giờ, **on** + thứ hoặc ngày. Không dùng “in 7pm” hay “in Friday”.",
        "Với tomorrow, tonight, this evening thì không thêm giới từ: Can I reserve a table for six tomorrow evening?",
        "Dùng **I would like to + động từ nguyên mẫu** (thường nói I’d like to) thay cho “I want book”, vừa đúng ngữ pháp vừa lịch sự."
      ],
      ex: [["I would like to book a table for two at eight on Saturday.", "Tôi muốn đặt bàn hai người lúc 8 giờ thứ Bảy."], ["Can I reserve a table for six tomorrow evening?", "Tôi đặt bàn sáu người tối mai được không?"]]
    },
    { h: "Cách chế biến đứng trước tên món: grilled fish",
      f: ["động từ thêm -ed (phân từ quá khứ) + tên món"],
      p: [
        "Tên cách chế biến là động từ thêm **-ed**, dùng như một tính từ và đặt **trước** tên món: grill → grilled chicken, steam → steamed fish.",
        "Tiếng Việt nói “cá nướng” (món trước, cách nấu sau) nên người Việt hay nói ngược thành “fish grill”. Trong tiếng Anh, tính từ luôn đứng trước danh từ.",
        "Một số động từ có dạng đặc biệt cần nhớ: stir-fry → **stir-fried** (đổi y thành i rồi thêm -ed)."
      ],
      ex: [["I would like the steamed fish.", "Cho tôi món cá hấp."], ["stir-fried morning glory", "rau muống xào"]]
    },
    { h: "Gọi món với I will have và with, without, instead of, extra",
      f: ["I will have + the + tên món", "with / without + nguyên liệu", "món A + instead of + món B", "extra + danh từ"],
      p: [
        "**I will have…** (thường nói I’ll have) dùng khi bạn quyết định gọi món ngay lúc nói chuyện với phục vụ. Không nói “I take…” vì nghe không tự nhiên khi gọi món.",
        "Muốn thêm hoặc bỏ nguyên liệu, dùng **with** (có) và **without** (không có), không dùng “no have”. Muốn đổi món kèm, dùng **instead of**; muốn thêm nhiều hơn, dùng **extra**."
      ],
      ex: [["I will have the beef pho without onions, please.", "Cho tôi phở bò không hành."], ["Can I have extra lime?", "Cho tôi thêm chanh được không?"]]
    },
    { h: "Làm mềm lời phàn nàn: I am afraid, a bit, I think",
      f: ["I am afraid + câu", "a bit / a little + tính từ", "I think there is + vấn đề", "Could you + động từ nguyên mẫu, please?"],
      p: [
        "**I am afraid…** (thường nói I’m afraid) nghĩa là “e là…”, giúp báo tin không vui một cách nhẹ nhàng, không đổ lỗi cho người phục vụ.",
        "Dùng **a bit** hoặc **a little** trước tính từ (a bit salty) thay cho very để lời nhận xét bớt gay gắt. **I think there is…** cũng làm câu nghe khiêm tốn hơn.",
        "Luôn kết thúc bằng một lời đề nghị rõ ràng như **Could you change it, please?** để nhân viên biết bạn muốn họ làm gì."
      ],
      ex: [["I am afraid the fish is overcooked.", "E là món cá bị nấu quá kỹ."], ["I think there is a mistake on the bill.", "Hình như hóa đơn bị nhầm."]]
    },
    { h: "Đọc tổng tiền: That comes to…",
      f: ["That comes to + số tiền", "số tiền + each (mỗi người)", "số + hundred / thousand / million (không thêm -s)"],
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
