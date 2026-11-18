/* Cheat sheet: Asking for Directions (Hỏi đường, chỉ đường). Hiển thị bởi cheatsheet.js. */
window.A1_CHEAT = {
  goal: [
    "Hỏi đường ở nhiều mức lịch sự, đặc biệt là câu hỏi gián tiếp “Do you know where … is?”.",
    "Nghe hiểu lời chỉ đường dài với go along, go past, take the second left, until you reach.",
    "Dùng mốc dễ thấy và nói địa chỉ đúng với at, on, in.",
    "Xác nhận lại khi chưa chắc bằng So…?, …, right? và Did you say…?",
    "Tìm phòng trong tòa nhà, tìm cửa hàng trong trung tâm thương mại và tìm nhau qua điện thoại."
  ],
  phrases: [
    { h: "Hỏi đường lịch sự", rows: [
      ["Excuse me, do you know where the museum is?", "Xin lỗi, bạn có biết bảo tàng ở đâu không?", "Lịch sự hơn câu ngắn “Where is the museum?”."],
      ["Sorry to bother you, could you tell me how to get to the museum?", "Xin lỗi làm phiền, bạn chỉ giúp tôi đường đến bảo tàng được không?", "Mức lịch sự nhất, hợp khi hỏi người lớn tuổi hoặc người đang bận."],
      ["Is this the right way to the train station?", "Đây có phải đường ra ga tàu không?"],
      ["What is the best way to get there?", "Đến đó bằng cách nào tiện nhất?", "Thường nói What’s the best way…? (What’s = What is)."],
      ["Can I walk there, or should I take a taxi?", "Đi bộ được không, hay tôi nên đi taxi?"]
    ]},
    { h: "Lời chỉ đường dài", rows: [
      ["Go along this street and take the second right.", "Đi dọc phố này và rẽ phải ở ngã thứ hai."],
      ["Go past the school.", "Đi qua trường học."],
      ["Keep going until you see a big hotel.", "Cứ đi tiếp cho đến khi thấy một khách sạn lớn."],
      ["When you see the post office, turn left.", "Khi thấy bưu điện thì rẽ trái."],
      ["It is at the end of the road.", "Nó ở cuối đường.", "Người chỉ đường thường nói It’s… (It’s = It is)."]
    ]},
    { h: "Mốc và địa chỉ", rows: [
      ["What is the address?", "Địa chỉ là gì?", "Dạng rút gọn: What’s the address?"],
      ["It is at twenty-five Hang Bai Street.", "Ở số 25 phố Hàng Bài."],
      ["It is on Trang Tien Street, near the Opera House.", "Ở phố Tràng Tiền, gần Nhà hát Lớn."],
      ["It is in Alley ten, Kim Ma Street.", "Ở ngõ 10 phố Kim Mã."],
      ["It is across from the museum, over the bridge.", "Nó ở đối diện bảo tàng, qua cầu."]
    ]},
    { h: "Xác nhận khi chưa chắc", rows: [
      ["Sorry, could you say that again, a bit more slowly?", "Xin lỗi, bạn nói lại chậm hơn chút được không?"],
      ["Did you say left or right?", "Bạn nói trái hay phải?"],
      ["Could you show me on the map?", "Bạn chỉ giúp trên bản đồ được không?"],
      ["So I go straight, then take the second right?", "Vậy là tôi đi thẳng, rồi rẽ phải ở ngã thứ hai?", "Lên giọng ở cuối câu để biến câu khẳng định thành câu hỏi."],
      ["Got it. Thanks a lot!", "Hiểu rồi. Cảm ơn nhiều!"]
    ]},
    { h: "Trong tòa nhà", rows: [
      ["Which floor is the food court on?", "Khu ẩm thực ở tầng mấy?"],
      ["It is on the third floor. Take the lift on your right.", "Ở tầng ba. Đi thang máy bên phải bạn."],
      ["Go down the corridor. It is the second door on the left.", "Đi dọc hành lang. Cửa thứ hai bên trái."],
      ["The restrooms are next to the escalator.", "Nhà vệ sinh ở cạnh thang cuốn."]
    ]},
    { h: "Tìm nhau qua điện thoại", rows: [
      ["I am here, but I cannot find you.", "Tôi đến rồi, nhưng không thấy bạn.", "Khi nói thường rút gọn: I’m here, but I can’t find you. (I’m = I am, can’t = cannot)."],
      ["I am standing in front of the bookstore.", "Tôi đang đứng trước hiệu sách.", "Dạng rút gọn: I’m standing…"],
      ["What can you see around you?", "Xung quanh bạn có gì?"],
      ["Stay there. I will come to you.", "Cứ đứng đó. Tôi đến chỗ bạn.", "Thường nói I’ll come to you. (I’ll = I will)."],
      ["Can you send me your location?", "Gửi vị trí cho tôi được không?"]
    ]}
  ],
  grammar: [
    { h: "Câu hỏi gián tiếp: Do you know where … is?",
      f: ["Do you know + từ để hỏi + chủ ngữ + động từ?", "Could you tell me + từ để hỏi + chủ ngữ + động từ?"],
      p: [
        "Câu hỏi gián tiếp lịch sự hơn câu hỏi trực tiếp, vì bạn không hỏi thẳng mà hỏi xem người kia có biết hay không. Rất hợp khi hỏi đường người lạ.",
        "Khi câu hỏi nằm bên trong **Do you know…** hoặc **Could you tell me…**, phần phía sau trở lại **trật tự câu thường**: chủ ngữ đứng trước, động từ đứng sau. Vì vậy “where is the bank” trở thành **where the bank is**.",
        "Nếu từ để hỏi chính là chủ ngữ (which bus), trật tự không đổi: Do you know which bus goes there?"
      ],
      ex: [["Do you know where the bank is?", "Bạn có biết ngân hàng ở đâu không?"], ["Could you tell me how far it is?", "Bạn cho tôi biết chỗ đó bao xa được không?"]]
    },
    { h: "Từ nối trình tự, mệnh đề when và until",
      f: ["First, … Then, … After that, … Finally, …", "When you see + mốc, + động từ nguyên mẫu", "Động từ nguyên mẫu + until you + động từ nguyên mẫu"],
      p: [
        "Lời chỉ đường dài có nhiều bước. Các từ **First, Then, After that, Finally** giúp người nghe biết đang ở bước nào. Khi nghe, hãy chú ý những từ nối này và các con số (second left, two blocks).",
        "Dùng **When you see…** để gắn một hành động với một mốc dễ thấy. Dùng **until you reach / until you get to** để nói đi tiếp đến khi nào thì dừng.",
        "Sau **when** và **until**, dùng thì hiện tại đơn dù hành động xảy ra trong tương lai. Không nói “When you will see”."
      ],
      ex: [["First, go straight. Then, turn right. After that, cross the bridge.", "Trước tiên đi thẳng. Sau đó rẽ phải. Tiếp theo băng qua cầu."], ["Keep walking until you get to the corner.", "Cứ đi bộ tiếp cho đến khi tới góc đường."]]
    },
    { h: "at / on / in với địa chỉ",
      f: ["at + số nhà + tên đường", "on + tên đường (không có số nhà)", "in + ngõ / quận / thành phố / đất nước"],
      p: [
        "Giới từ đi theo độ chính xác của địa chỉ. Có số nhà là một điểm cụ thể nên dùng **at**. Chỉ có tên đường thì dùng **on**, vì ngôi nhà nằm “trên” con đường.",
        "Khu vực rộng có ranh giới như ngõ, quận, thành phố, đất nước thì dùng **in**, vì nơi đó nằm “bên trong” khu vực ấy."
      ],
      ex: [["The hotel is on Hang Bai Street, in Hanoi.", "Khách sạn ở phố Hàng Bài, Hà Nội."], ["It is in Ba Dinh District.", "Nó ở quận Ba Đình."]]
    },
    { h: "Xác nhận bằng So…?, …, right? và Did you say…?",
      f: ["So + câu khẳng định + ? (lên giọng cuối câu)", "Câu khẳng định + , right?", "Did you say + lựa chọn thứ nhất + or + lựa chọn thứ hai?"],
      p: [
        "Nhắc lại lời chỉ đường để kiểm tra là thói quen tốt: nếu bạn hiểu sai, người kia sẽ sửa ngay. Dùng **So…?** để tóm tắt những gì vừa nghe, và lên giọng ở cuối câu.",
        "Thêm **, right?** vào cuối câu khẳng định để hỏi “đúng không?”. Khi không chắc giữa hai thông tin, dùng **Did you say A or B?** để người kia chỉ cần chọn một."
      ],
      ex: [["So it is on the left?", "Vậy là nó ở bên trái?"], ["It is near the lake, right?", "Nó ở gần hồ, đúng không?"]]
    },
    { h: "Số thứ tự cho tầng, cửa và ngã rẽ",
      f: ["on the + số thứ tự + floor", "the + số thứ tự + door / room + on the left / right", "take the + số thứ tự + left / right"],
      p: [
        "Khi nói tầng thứ mấy, cửa thứ mấy, ngã rẽ thứ mấy, tiếng Anh dùng **số thứ tự** (first, second, third, fifth) chứ không dùng số đếm, và có **the** phía trước.",
        "Tầng đi với giới từ **on**: on the seventh floor. Không nói “in floor three”."
      ],
      ex: [["It is on the third floor, the second door on the left.", "Ở tầng ba, cửa thứ hai bên trái."], ["Take the first right.", "Rẽ phải ở ngã rẽ đầu tiên."]]
    }
  ],
  mistakes: [
    ["Do you know where is the bank?", "Do you know where the bank is?", "Trong câu hỏi gián tiếp, chủ ngữ đứng trước động từ."],
    ["When you will see the bank, turn left.", "When you see the bank, turn left.", "Sau **when** dùng thì hiện tại đơn, không dùng will."],
    ["The hotel is in Hang Bai Street, at Hanoi.", "The hotel is on Hang Bai Street, in Hanoi.", "Tên đường dùng **on**, thành phố dùng **in**."],
    ["It is in floor three, door two left.", "It is on the third floor, the second door on the left.", "Tầng đi với **on**; dùng số thứ tự và **the**."],
    ["What? Again!", "Sorry, I did not catch that. Could you say it again?", "Câu cụt nghe thô. Thường nói I didn’t catch that (didn’t = did not)."],
    ["Bank where? Go how?", "Excuse me, I am a bit lost. Do you know where the nearest bank is?", "Mở lời bằng **Excuse me** và dùng câu hỏi gián tiếp cho lịch sự."]
  ],
  vocab: [
    ["go along", "đi dọc theo"], ["go past", "đi qua (một địa điểm)"], ["cross", "băng qua"], ["keep going", "cứ đi tiếp"],
    ["until you reach", "cho đến khi tới"], ["follow the signs", "đi theo biển chỉ dẫn"], ["at the end of the road", "ở cuối đường"], ["bridge", "cây cầu"],
    ["gas station", "cây xăng"], ["around the corner", "ngay chỗ rẽ"], ["address", "địa chỉ"], ["alley", "ngõ, hẻm"],
    ["district", "quận"], ["floor", "tầng"], ["lift", "thang máy"], ["escalator", "thang cuốn"],
    ["corridor", "hành lang"], ["entrance / exit", "lối vào / lối ra"], ["location", "vị trí"], ["junction", "chỗ giao nhau, ngã ba"],
    ["one-way street", "đường một chiều"], ["make a U-turn", "quay đầu xe"], ["get lost", "bị lạc"], ["walking distance", "khoảng cách đi bộ được"]
  ],
  tips: [
    "Tập chuyển năm câu hỏi trực tiếp thành câu hỏi gián tiếp, ví dụ Where is the bank? thành Do you know where the bank is?",
    "Khi nghe chỉ đường dài, chỉ cần bắt được **từ nối** (first, then, when you see) và **con số** (second left, two blocks).",
    "Sau khi nghe xong, luôn nhắc lại bằng **So I…?** để người kia sửa nếu bạn hiểu sai.",
    "Khi chỉ đường cho người khác, nói thêm một câu “nếu đi quá”: If you get to the river, you’ve gone too far. (you’ve = you have).",
    "Thu âm một phút chỉ đường từ nhà bạn đến chỗ làm hoặc trường, dùng mốc, địa chỉ và số thứ tự."
  ]
};
