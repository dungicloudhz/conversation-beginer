/* Cheat sheet: Time and Date (Ngày, tháng, năm). Hiển thị bởi cheatsheet.js. */
window.A1_CHEAT = {
  goal: [
    "Nói và viết đúng 7 thứ trong tuần và 12 tháng trong năm, luôn viết hoa chữ cái đầu.",
    "Đọc ngày bằng số thứ tự (the eighth, the twenty-first) theo cả kiểu Anh và kiểu Mỹ.",
    "Đọc năm như 1998, 2005, 2026 và nói ngày sinh của mình.",
    "Dùng đúng giới từ in, on, at với thời gian và phân biệt ago với in, for với since.",
    "Hẹn lịch, đổi lịch và xác nhận lại ngày giờ một cách lịch sự."
  ],
  phrases: [
    { h: "Hỏi thứ và ngày", rows: [
      ["What day is it today? — It is Sunday.", "Hôm nay thứ mấy? — Hôm nay Chủ nhật.", "Khi nói thường rút gọn: It’s Sunday (It’s = It is)."],
      ["What is the date today? — It is the eighth of November.", "Hôm nay ngày bao nhiêu? — Hôm nay ngày 8 tháng 11.", "Hỏi **day** là hỏi thứ, hỏi **date** là hỏi ngày tháng."],
      ["What year is it?", "Năm nay là năm nào?"],
      ["I work from Monday to Friday.", "Tôi làm từ thứ Hai đến thứ Sáu."],
      ["I go swimming on Saturdays.", "Thứ Bảy nào tôi cũng đi bơi.", "Thêm **-s** vào tên thứ để nói việc lặp lại hằng tuần."]
    ]},
    { h: "Sinh nhật và ngày lễ", rows: [
      ["When is your birthday?", "Sinh nhật bạn ngày nào?", "Thường nói rút gọn: When’s your birthday? (When’s = When is)."],
      ["My birthday is on the twelfth of March.", "Sinh nhật tôi ngày 12 tháng 3."],
      ["I was born on the fifth of May, nineteen ninety-eight.", "Tôi sinh ngày 5 tháng 5 năm 1998."],
      ["Vietnam’s National Day is on the second of September.", "Quốc khánh Việt Nam là ngày 2 tháng 9.", "Vietnam’s là dạng sở hữu (của Việt Nam), không phải dạng rút gọn."],
      ["Tết is usually in late January or February.", "Tết thường vào cuối tháng 1 hoặc tháng 2."]
    ]},
    { h: "Quá khứ, tương lai và khoảng thời gian", rows: [
      ["I met her two years ago.", "Tôi gặp cô ấy cách đây hai năm."],
      ["The bus comes in ten minutes.", "Mười phút nữa xe buýt đến."],
      ["How long have you lived here?", "Bạn sống ở đây bao lâu rồi?"],
      ["I have lived here for five years.", "Tôi sống ở đây được 5 năm rồi.", "Khi nói thường rút gọn: I’ve lived here (I’ve = I have)."],
      ["I have lived here since 2021.", "Tôi sống ở đây từ năm 2021."]
    ]},
    { h: "Hẹn lịch", rows: [
      ["Are you free on Friday?", "Thứ Sáu bạn rảnh không?"],
      ["How about Saturday at ten a.m.?", "Thứ Bảy lúc 10 giờ sáng thì sao?"],
      ["Sorry, I am busy that day.", "Xin lỗi, hôm đó tôi bận.", "Dạng rút gọn: I’m busy (I’m = I am)."],
      ["Can we meet next Tuesday instead?", "Mình gặp thứ Ba tuần sau được không?"],
      ["Thursday at nine thirty works for me.", "Thứ Năm 9 rưỡi tôi được."]
    ]},
    { h: "Đặt vé và xác nhận ngày", rows: [
      ["I would like a ticket to Hue, please.", "Cho tôi một vé đi Huế.", "Thường nói rút gọn: I’d like (I’d = I would)."],
      ["For which date? — The third of December.", "Ngày nào ạ? — Ngày 3 tháng 12."],
      ["Just to confirm, that is December third, right?", "Xác nhận lại là ngày 3 tháng 12 nhé?", "Dạng rút gọn: that’s (that’s = that is)."],
      ["Let me check my calendar and get back to you.", "Để tôi xem lịch rồi báo lại bạn.", "Let me là cụm cố định, nghĩa là “để tôi”."]
    ]}
  ],
  grammar: [
    { h: "Số thứ tự và đuôi -st, -nd, -rd, -th",
      f: ["số tận cùng là 1 + -st (1st, 21st)", "số tận cùng là 2 + -nd (2nd, 22nd)", "số tận cùng là 3 + -rd (3rd, 23rd)", "các số còn lại + -th (4th, 11th, 12th, 13th)"],
      p: [
        "Tiếng Anh đọc ngày bằng **số thứ tự**: ngày 8 là “the eighth” (ngày thứ tám), không phải “eight”. Vì vậy phải thuộc số thứ tự trước khi nói ngày tháng.",
        "Các số 11, 12, 13 là ngoại lệ: dù tận cùng bằng 1, 2, 3 nhưng vẫn dùng **-th** (11th, 12th, 13th).",
        "Năm từ đổi hình dạng đặc biệt: one → **first**, two → **second**, three → **third**, five → **fifth**, twelve → **twelfth**. Số tròn chục đổi -ty thành **-tieth**: twenty → twentieth."
      ],
      ex: [["Today is the twenty-first.", "Hôm nay là ngày 21."], ["See you on the fifteenth!", "Hẹn gặp ngày 15 nhé!"]]
    },
    { h: "Đọc ngày tháng kiểu Anh và kiểu Mỹ",
      f: ["Kiểu Anh: the + số thứ tự + of + tháng", "Kiểu Mỹ: tháng + số thứ tự"],
      p: [
        "Người Anh viết 8 November và đọc **the eighth of November**, giống Việt Nam là ngày trước, tháng sau. Người Mỹ viết November 8 và đọc **November eighth**.",
        "Cẩn thận khi viết bằng số: 03/04 với người Anh là ngày 3 tháng 4, nhưng với người Mỹ là ngày 4 tháng 3. Khi đặt vé hay hẹn quan trọng, nên viết tên tháng bằng chữ để tránh nhầm lẫn."
      ],
      ex: [["It is the eighth of November.", "Hôm nay ngày 8 tháng 11 (kiểu Anh)."], ["Yes, Thursday, December third.", "Vâng, thứ Năm, ngày 3 tháng 12 (kiểu Mỹ)."]]
    },
    { h: "Cách đọc năm",
      f: ["1999 = nineteen ninety-nine (tách đôi)", "2005 = two thousand and five", "2026 = twenty twenty-six"],
      p: [
        "Năm có bốn chữ số thường được **tách làm hai cặp** rồi đọc từng cặp: 1975 đọc là nineteen seventy-five. Cách này ngắn và dễ nghe hơn đọc cả số “một nghìn chín trăm…”.",
        "Năm 2000 đọc là **two thousand**, và từ 2001 đến 2009 đọc theo kiểu nghìn: two thousand and five. Từ 2010 trở đi người ta lại thường tách đôi: twenty twenty-six.",
        "Nói về cả một thời kỳ thì dùng **the 1990s** (đọc là the nineteen nineties) hoặc **the 1900s** (the nineteen hundreds)."
      ],
      ex: [["I was born in nineteen ninety-eight.", "Tôi sinh năm 1998."], ["It is twenty twenty-six.", "Năm nay là năm 2026."]]
    },
    { h: "Giới từ in, on, at với thời gian",
      f: ["in + năm, tháng, mùa, thập kỷ, buổi trong ngày", "on + thứ, ngày cụ thể, ngày lễ có chữ “Day”", "at + giờ, mốc ngắn, dịp lễ không có chữ “Day”"],
      p: [
        "Hãy nhớ quy tắc đi từ **lớn đến nhỏ**: **in** cho khoảng thời gian rộng (in 2026, in November, in the morning), **on** cho một ngày (on Monday, on the 8th of November), **at** cho một điểm thời gian (at 9 o’clock, at noon, at night).",
        "Ngày sinh là một ngày cụ thể nên dùng **on**: I was born on the fifth of May. Nhưng nếu chỉ nói năm hoặc tháng thì dùng **in**: I was born in May.",
        "Ngày lễ có chữ Day dùng on (on New Year’s Day); dịp lễ không có chữ Day dùng at (at Christmas)."
      ],
      ex: [["My birthday is on the twelfth of March.", "Sinh nhật tôi ngày 12 tháng 3."], ["I go to bed at eleven at night.", "Tôi đi ngủ lúc 11 giờ đêm."]]
    },
    { h: "ago và in, for và since",
      f: ["khoảng thời gian + ago (cách đây)", "in + khoảng thời gian (sau … nữa)", "for + khoảng thời gian (trong bao lâu)", "since + mốc thời gian (từ khi)"],
      p: [
        "**ago** đứng **sau** khoảng thời gian và nói về quá khứ: two years ago (cách đây hai năm). Người Việt hay dịch sai thành “before two years”. Ngược lại, **in** + khoảng thời gian nói về tương lai: in ten minutes (mười phút nữa).",
        "**for** đi với một **khoảng** thời gian (for five years, for a week), còn **since** đi với một **mốc** bắt đầu (since 2021, since Monday).",
        "Khi nói việc bắt đầu trong quá khứ và vẫn còn tiếp tục đến bây giờ, dùng **I have + động từ dạng quá khứ phân từ**: I have lived here for five years. Không dùng “I live here since…”."
      ],
      ex: [["I came here two years ago.", "Tôi đến đây cách đây hai năm."], ["I have lived here since 2020.", "Tôi sống ở đây từ năm 2020."]]
    },
    { h: "Hiện tại tiếp diễn cho lịch hẹn đã sắp xếp",
      f: ["chủ ngữ + am / is / are + động từ thêm -ing + thời gian tương lai"],
      p: [
        "Khi một kế hoạch **đã chốt ngày giờ** (đã hẹn bác sĩ, đã đặt vé), người bản xứ thường dùng **thì hiện tại tiếp diễn** kèm mốc thời gian tương lai. Mốc thời gian cho người nghe biết đây là chuyện sắp tới chứ không phải đang xảy ra.",
        "Nói “I meet my doctor tomorrow” nghe lạ; nên nói “I am seeing my doctor tomorrow at three”."
      ],
      ex: [["I am meeting my teacher on Thursday.", "Thứ Năm tôi gặp cô giáo."], ["We are flying to Da Nang next Monday.", "Thứ Hai tuần sau chúng tôi bay đi Đà Nẵng."]]
    }
  ],
  mistakes: [
    ["11st, 12nd, fiveth", "eleventh, twelfth, fifth", "11, 12, 13 luôn dùng **-th**; five đổi thành **fifth** và twelve đổi thành **twelfth**."],
    ["I was born in 5th May.", "I was born on the fifth of May.", "Ngày cụ thể dùng **on**, và đọc ngày bằng số thứ tự có “the … of”."],
    ["I came here before two years.", "I came here two years ago.", "“Cách đây” là **ago**, đặt **sau** khoảng thời gian."],
    ["I live here since five years.", "I have lived here for five years.", "Khoảng thời gian dùng **for**, và việc còn kéo dài đến nay dùng **I have + quá khứ phân từ**."],
    ["monday, november", "Monday, November", "Tên thứ và tên tháng luôn **viết hoa** chữ cái đầu."],
    ["I meet my doctor tomorrow at 3.", "I am seeing my doctor tomorrow at three.", "Lịch hẹn đã chốt dùng **thì hiện tại tiếp diễn** thì nghe tự nhiên hơn."],
    ["Meeting is 3/4. You come.", "The meeting is on Friday, the third of April. Does that suit you?", "Viết tháng bằng chữ để tránh nhầm kiểu Anh và kiểu Mỹ, và hỏi ý người kia một cách lịch sự."]
  ],
  vocab: [
    ["Monday", "thứ Hai"], ["Wednesday", "thứ Tư (chữ d đầu tiên câm)"], ["Saturday", "thứ Bảy"], ["Sunday", "Chủ nhật"],
    ["January", "tháng 1"], ["February", "tháng 2"], ["September", "tháng 9"], ["December", "tháng 12"],
    ["first", "thứ nhất, ngày mùng 1"], ["second", "thứ hai, ngày mùng 2"], ["third", "thứ ba, ngày mùng 3"], ["twelfth", "thứ mười hai, ngày 12"],
    ["date", "ngày tháng"], ["birthday", "sinh nhật"], ["yesterday", "hôm qua"], ["tomorrow", "ngày mai"],
    ["the day after tomorrow", "ngày kia"], ["last week", "tuần trước"], ["next month", "tháng sau"], ["ago", "cách đây"],
    ["calendar", "lịch"], ["deadline", "hạn chót"], ["public holiday", "ngày nghỉ lễ"], ["reschedule", "dời lịch sang thời điểm khác"]
  ],
  tips: [
    "Mỗi sáng nói to “Today is…” theo cả hai kiểu: “Today is Thursday, the third of December” và “Today is Thursday, December third”.",
    "Luyện đọc năm sinh của 5 người trong gia đình bằng cách tách đôi, ví dụ 1975 là nineteen seventy-five.",
    "Khi hẹn quan trọng, luôn nhắc lại **cả thứ và ngày** (Thursday, December third). Nếu một trong hai bị nghe nhầm, người kia sẽ nhận ra ngay.",
    "Nhớ thứ tự giới từ từ lớn đến nhỏ: **in** (năm, tháng) → **on** (một ngày) → **at** (một giờ).",
    "Chú ý phát âm **Wednesday** (/ˈwenz.deɪ/) và **February**, hai từ người Việt hay đọc sai."
  ]
};
