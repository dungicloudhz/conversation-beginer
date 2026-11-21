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
      items: [
        { f: "số tận cùng là 1 + -st (1st, 21st)",
          mean: "**số thứ tự cho các số tận cùng bằng 1**: viết thêm -st, đọc là **first**.",
          parts: [
            ["1st", "first: thứ nhất, ngày mùng 1."],
            ["21st", "twenty-first: ngày 21."],
            ["31st", "thirty-first: ngày 31."]
          ],
          use: "dùng khi nói ngày trong tháng, thứ hạng, tầng nhà, lần thứ mấy. Thường có **the** đứng trước: the first.",
          note: "Số **11** không theo quy tắc này: viết 11th, đọc eleventh. Đừng đọc first thành “one-st”.",
          ex: [
            ["My birthday is on the first of June.", "Sinh nhật tôi vào ngày 1 tháng 6."],
            ["The concert is on the twenty-first.", "Buổi hòa nhạc vào ngày 21."],
            ["Is the thirty-first a Sunday?", "Ngày 31 có phải Chủ nhật không?"],
            ["This is my first time in London.", "Đây là lần đầu tiên tôi đến London."]
          ] },
        { f: "số tận cùng là 2 + -nd (2nd, 22nd)",
          mean: "**số thứ tự cho các số tận cùng bằng 2**: viết thêm -nd, đọc là **second**.",
          parts: [
            ["2nd", "second: thứ hai, ngày mùng 2."],
            ["22nd", "twenty-second: ngày 22."]
          ],
          use: "dùng khi nói ngày 2, ngày 22, hoặc vị trí thứ hai (the second floor, the second time).",
          note: "Số **12** không theo quy tắc này: viết 12th, đọc twelfth (chú ý chữ f).",
          ex: [
            ["We are leaving on the second of May.", "Chúng tôi đi vào ngày 2 tháng 5."],
            ["The meeting is on the twenty-second.", "Cuộc họp vào ngày 22."],
            ["My office is on the second floor.", "Văn phòng tôi ở tầng hai."],
            ["Is your exam on the twenty-second?", "Bài thi của bạn vào ngày 22 à?"]
          ] },
        { f: "số tận cùng là 3 + -rd (3rd, 23rd)",
          mean: "**số thứ tự cho các số tận cùng bằng 3**: viết thêm -rd, đọc là **third**.",
          parts: [
            ["3rd", "third: thứ ba, ngày mùng 3."],
            ["23rd", "twenty-third: ngày 23."]
          ],
          use: "dùng khi nói ngày 3, ngày 23, hoặc vị trí thứ ba.",
          note: "Số **13** không theo quy tắc này: viết 13th, đọc thirteenth. Âm “th” trong third đặt đầu lưỡi giữa hai hàm răng.",
          ex: [
            ["Today is the third of March.", "Hôm nay là ngày 3 tháng 3."],
            ["Her wedding is on the twenty-third.", "Đám cưới cô ấy vào ngày 23."],
            ["He finished third in the race.", "Anh ấy về thứ ba trong cuộc đua."],
            ["Can we meet on the third?", "Mình gặp nhau ngày 3 được không?"]
          ] },
        { f: "các số còn lại + -th (4th, 11th, 12th, 13th)",
          mean: "**tất cả số còn lại** (và cả 11, 12, 13) viết thêm **-th**.",
          parts: [
            ["4th, 6th, 7th…", "fourth, sixth, seventh: chỉ cần thêm -th."],
            ["11th, 12th, 13th", "eleventh, twelfth, thirteenth: ngoại lệ, luôn dùng -th."],
            ["5th, 8th, 9th", "fifth, eighth, ninth: đổi cách viết một chút."],
            ["20th, 30th", "twentieth, thirtieth: đổi -ty thành **-tieth**."]
          ],
          use: "dùng cho mọi ngày trong tháng không tận cùng bằng 1, 2, 3, và cho 11, 12, 13.",
          note: "Âm cuối **-th** rất hay bị bỏ khi nói; hãy đọc rõ: fifth, eighth. Nếu bỏ âm này, “the fourth” nghe giống “four”.",
          ex: [
            ["My son was born on the fourth of July.", "Con trai tôi sinh ngày 4 tháng 7."],
            ["The shop is closed on the twelfth.", "Cửa hàng đóng cửa ngày 12."],
            ["Payday is on the thirtieth.", "Ngày nhận lương là ngày 30."],
            ["Is the party on the eleventh or the thirteenth?", "Bữa tiệc vào ngày 11 hay ngày 13?"]
          ] }
      ],
      p: [
        "Tiếng Anh đọc ngày bằng **số thứ tự**: ngày 8 là “the eighth” (ngày thứ tám), không phải “eight”. Vì vậy phải thuộc số thứ tự trước khi nói ngày tháng.",
        "Các số 11, 12, 13 là ngoại lệ: dù tận cùng bằng 1, 2, 3 nhưng vẫn dùng **-th** (11th, 12th, 13th).",
        "Năm từ đổi hình dạng đặc biệt: one → **first**, two → **second**, three → **third**, five → **fifth**, twelve → **twelfth**. Số tròn chục đổi -ty thành **-tieth**: twenty → twentieth."
      ],
      ex: [["Today is the twenty-first.", "Hôm nay là ngày 21."], ["See you on the fifteenth!", "Hẹn gặp ngày 15 nhé!"]]
    },
    { h: "Đọc ngày tháng kiểu Anh và kiểu Mỹ",
      f: ["Kiểu Anh: the + số thứ tự + of + tháng", "Kiểu Mỹ: tháng + số thứ tự"],
      items: [
        { f: "Kiểu Anh: the + số thứ tự + of + tháng",
          mean: "**cách đọc ngày tháng của người Anh**: ngày trước, tháng sau, giống tiếng Việt.",
          parts: [
            ["the", "luôn có trước số thứ tự khi đọc."],
            ["số thứ tự", "first, second, fifteenth…"],
            ["of + tháng", "of January, of May…"]
          ],
          use: "viết 8 November hoặc 8/11, nhưng **đọc** là the eighth of November. Khi nói ngày cụ thể dùng **on**: on the eighth of November.",
          note: "Khi viết, người Anh thường bỏ the và of (8 November), nhưng khi đọc phải đọc đầy đủ. Không đọc “eight November”.",
          ex: [
            ["Today is the fifteenth of August.", "Hôm nay là ngày 15 tháng 8."],
            ["I start my new job on the first of September.", "Tôi bắt đầu công việc mới vào ngày 1 tháng 9."],
            ["Her birthday is on the second of February.", "Sinh nhật cô ấy vào ngày 2 tháng 2."],
            ["Is the meeting on the tenth of April?", "Cuộc họp vào ngày 10 tháng 4 phải không?"]
          ] },
        { f: "Kiểu Mỹ: tháng + số thứ tự",
          mean: "**cách đọc ngày tháng của người Mỹ**: tháng trước, ngày sau.",
          parts: [
            ["tháng", "đứng đầu: November, July…"],
            ["số thứ tự", "đứng sau, không cần the và of: November eighth."]
          ],
          use: "viết November 8 hoặc 11/8, đọc là November eighth. Gặp nhiều trong phim Mỹ, ứng dụng, email của công ty Mỹ.",
          note: "Cẩn thận số: **11/8** với người Mỹ là ngày 8 tháng 11, nhưng với người Anh là ngày 11 tháng 8. Viết tên tháng bằng chữ để tránh nhầm.",
          ex: [
            ["My flight is on July fourth.", "Chuyến bay của tôi vào ngày 4 tháng 7."],
            ["The school year starts on September fifth.", "Năm học bắt đầu ngày 5 tháng 9."],
            ["Is the party on March twentieth?", "Bữa tiệc vào ngày 20 tháng 3 à?"],
            ["We got married on June first.", "Chúng tôi cưới nhau ngày 1 tháng 6."]
          ] }
      ],
      p: [
        "Người Anh viết 8 November và đọc **the eighth of November**, giống Việt Nam là ngày trước, tháng sau. Người Mỹ viết November 8 và đọc **November eighth**.",
        "Cẩn thận khi viết bằng số: 03/04 với người Anh là ngày 3 tháng 4, nhưng với người Mỹ là ngày 4 tháng 3. Khi đặt vé hay hẹn quan trọng, nên viết tên tháng bằng chữ để tránh nhầm lẫn."
      ],
      ex: [["It is the eighth of November.", "Hôm nay ngày 8 tháng 11 (kiểu Anh)."], ["Yes, Thursday, December third.", "Vâng, thứ Năm, ngày 3 tháng 12 (kiểu Mỹ)."]]
    },
    { h: "Cách đọc năm",
      f: ["1999 = nineteen ninety-nine (tách đôi)", "2005 = two thousand and five", "2026 = twenty twenty-six"],
      items: [
        { f: "1999 = nineteen ninety-nine (tách đôi)",
          mean: "**năm trước 2000 đọc bằng cách tách thành hai cặp số**: 19 | 99.",
          parts: [
            ["cặp đầu", "nineteen (19), eighteen (18)…"],
            ["cặp sau", "ninety-nine (99), seventy-five (75)…"],
            ["cặp sau là 01 đến 09", "đọc oh: 1905 = nineteen oh five."],
            ["cặp sau là 00", "đọc hundred: 1900 = nineteen hundred."]
          ],
          use: "dùng khi nói năm sinh, năm xảy ra sự kiện trong thế kỷ 20 trở về trước. Trước năm dùng **in**: in 1999.",
          note: "Không đọc cả số “one thousand nine hundred and ninety-nine” vì quá dài và người bản xứ không nói vậy.",
          ex: [
            ["I was born in nineteen eighty-seven.", "Tôi sinh năm 1987."],
            ["My parents got married in nineteen seventy-nine.", "Bố mẹ tôi cưới nhau năm 1979."],
            ["This house was built in nineteen oh five.", "Ngôi nhà này được xây năm 1905."],
            ["Were you born in nineteen ninety-five?", "Bạn sinh năm 1995 phải không?"]
          ] },
        { f: "2005 = two thousand and five",
          mean: "**năm 2000 đến 2009 đọc kiểu hàng nghìn**: two thousand (and) + số.",
          parts: [
            ["two thousand", "năm 2000."],
            ["two thousand and + số", "2001 đến 2009: two thousand and one, two thousand and nine."],
            ["and", "người Anh thường có and; người Mỹ hay bỏ: two thousand five."]
          ],
          use: "dùng cho các năm 2000 đến 2009, vì nếu tách đôi (twenty oh five) nghe ít tự nhiên hơn.",
          note: "Không đọc “two zero zero five”. Có thể nghe twenty oh five, nhưng two thousand and five phổ biến hơn.",
          ex: [
            ["My daughter was born in two thousand and eight.", "Con gái tôi sinh năm 2008."],
            ["I finished school in two thousand and three.", "Tôi học xong phổ thông năm 2003."],
            ["We moved here in two thousand.", "Chúng tôi chuyển đến đây năm 2000."],
            ["Did you visit Hanoi in two thousand and nine?", "Bạn đến Hà Nội năm 2009 phải không?"]
          ] },
        { f: "2026 = twenty twenty-six",
          mean: "**từ năm 2010 trở đi thường đọc tách đôi lại**: 20 | 26.",
          parts: [
            ["twenty", "cặp đầu 20."],
            ["twenty-six, eighteen…", "cặp sau đọc như số bình thường: 2018 = twenty eighteen."],
            ["two thousand and twenty-six", "cũng đúng, nhưng dài và ít dùng hơn khi nói."]
          ],
          use: "dùng khi nói năm hiện tại, kế hoạch tương lai, các năm gần đây.",
          note: "Đọc theo cặp giúp nói nhanh: 2030 là twenty thirty, 2015 là twenty fifteen.",
          ex: [
            ["I started this job in twenty twenty-two.", "Tôi bắt đầu công việc này năm 2022."],
            ["We are going to Japan in twenty twenty-seven.", "Chúng tôi sẽ đi Nhật năm 2027."],
            ["She graduated in twenty nineteen.", "Cô ấy tốt nghiệp năm 2019."],
            ["What happened in twenty twenty?", "Năm 2020 đã xảy ra chuyện gì?"]
          ] }
      ],
      p: [
        "Năm có bốn chữ số thường được **tách làm hai cặp** rồi đọc từng cặp: 1975 đọc là nineteen seventy-five. Cách này ngắn và dễ nghe hơn đọc cả số “một nghìn chín trăm…”.",
        "Năm 2000 đọc là **two thousand**, và từ 2001 đến 2009 đọc theo kiểu nghìn: two thousand and five. Từ 2010 trở đi người ta lại thường tách đôi: twenty twenty-six.",
        "Nói về cả một thời kỳ thì dùng **the 1990s** (đọc là the nineteen nineties) hoặc **the 1900s** (the nineteen hundreds)."
      ],
      ex: [["I was born in nineteen ninety-eight.", "Tôi sinh năm 1998."], ["It is twenty twenty-six.", "Năm nay là năm 2026."]]
    },
    { h: "Giới từ in, on, at với thời gian",
      f: ["in + năm, tháng, mùa, thập kỷ, buổi trong ngày", "on + thứ, ngày cụ thể, ngày lễ có chữ “Day”", "at + giờ, mốc ngắn, dịp lễ không có chữ “Day”"],
      items: [
        { f: "in + năm, tháng, mùa, thập kỷ, buổi trong ngày",
          mean: "**in dùng cho khoảng thời gian dài**, rộng hơn một ngày (hoặc một buổi trong ngày).",
          parts: [
            ["in + năm", "in 2026, in 1998."],
            ["in + tháng", "in May, in December."],
            ["in + mùa", "in summer, in the rainy season."],
            ["in + thập kỷ", "in the 1990s."],
            ["in + buổi", "in the morning, in the afternoon, in the evening (nhưng **at night**)."]
          ],
          use: "đặt trước khoảng thời gian, thường ở cuối câu hoặc đầu câu.",
          note: "Nếu buổi gắn với một ngày cụ thể thì đổi sang on: in the morning nhưng **on** Monday morning.",
          ex: [
            ["I go jogging in the morning.", "Tôi chạy bộ vào buổi sáng."],
            ["We are moving house in October.", "Chúng tôi chuyển nhà vào tháng Mười."],
            ["It is very hot in summer.", "Mùa hè trời rất nóng."],
            ["My grandparents met in the 1960s.", "Ông bà tôi gặp nhau vào những năm 1960."]
          ] },
        { f: "on + thứ, ngày cụ thể, ngày lễ có chữ “Day”",
          mean: "**on dùng cho một ngày** trọn vẹn: thứ trong tuần, ngày có số, ngày lễ có chữ Day.",
          parts: [
            ["on + thứ", "on Monday, on Fridays (mỗi thứ Sáu)."],
            ["on + ngày cụ thể", "on the 5th of May, on May 5th, on my birthday."],
            ["on + ngày lễ có Day", "on New Year’s Day, on Christmas Day, on Teachers’ Day."]
          ],
          use: "dùng khi hẹn gặp, nói ngày sinh, nói lịch trong tuần.",
          note: "Không dùng on trước today, tomorrow, next Monday, last Friday: nói I will see you next Monday, không nói “on next Monday”.",
          ex: [
            ["I have a dentist appointment on Wednesday.", "Tôi có hẹn nha sĩ vào thứ Tư."],
            ["She was born on the ninth of October.", "Cô ấy sinh ngày 9 tháng 10."],
            ["We visit my grandparents on New Year’s Day.", "Chúng tôi thăm ông bà vào ngày đầu năm mới."],
            ["Do you work on Saturdays?", "Bạn có làm việc vào thứ Bảy không?"]
          ] },
        { f: "at + giờ, mốc ngắn, dịp lễ không có chữ “Day”",
          mean: "**at dùng cho một điểm thời gian**: giờ cụ thể, thời điểm ngắn, hoặc cả dịp lễ không có chữ Day.",
          parts: [
            ["at + giờ", "at 7 o’clock, at half past nine."],
            ["at + mốc ngắn", "at noon, at midnight, at night, at lunchtime, at the weekend."],
            ["at + dịp lễ không có Day", "at Christmas, at Tet, at Easter."]
          ],
          use: "dùng khi nói giờ hẹn, giờ bắt đầu, giờ kết thúc, hoặc cả kỳ nghỉ lễ.",
          note: "Người Mỹ nói **on** the weekend, người Anh nói **at** the weekend; cả hai đều đúng. Không nói “in night”, nói **at night**.",
          ex: [
            ["The train leaves at six fifteen.", "Tàu chạy lúc sáu giờ mười lăm."],
            ["We have lunch at noon.", "Chúng tôi ăn trưa lúc giữa trưa."],
            ["I never drink coffee at night.", "Tôi không bao giờ uống cà phê vào ban đêm."],
            ["What do you do at Tet?", "Bạn làm gì vào dịp Tết?"]
          ] }
      ],
      p: [
        "Hãy nhớ quy tắc đi từ **lớn đến nhỏ**: **in** cho khoảng thời gian rộng (in 2026, in November, in the morning), **on** cho một ngày (on Monday, on the 8th of November), **at** cho một điểm thời gian (at 9 o’clock, at noon, at night).",
        "Ngày sinh là một ngày cụ thể nên dùng **on**: I was born on the fifth of May. Nhưng nếu chỉ nói năm hoặc tháng thì dùng **in**: I was born in May.",
        "Ngày lễ có chữ Day dùng on (on New Year’s Day); dịp lễ không có chữ Day dùng at (at Christmas)."
      ],
      ex: [["My birthday is on the twelfth of March.", "Sinh nhật tôi ngày 12 tháng 3."], ["I go to bed at eleven at night.", "Tôi đi ngủ lúc 11 giờ đêm."]]
    },
    { h: "ago và in, for và since",
      f: ["khoảng thời gian + ago (cách đây)", "in + khoảng thời gian (sau … nữa)", "for + khoảng thời gian (trong bao lâu)", "since + mốc thời gian (từ khi)"],
      items: [
        { f: "khoảng thời gian + ago (cách đây)",
          mean: "**cách đây** bao lâu, tính ngược từ bây giờ về quá khứ.",
          parts: [
            ["khoảng thời gian", "two days, a week, five years, ten minutes."],
            ["ago", "luôn đứng **sau** khoảng thời gian."]
          ],
          use: "dùng với **quá khứ đơn**: I met him two years ago. Thường đứng cuối câu.",
          note: "Không nói “before two years” hay “ago two years”. Không dùng ago với thì hiện tại hoàn thành (không nói “I have met him two years ago”).",
          ex: [
            ["I moved to Ho Chi Minh City three years ago.", "Tôi chuyển đến Thành phố Hồ Chí Minh cách đây ba năm."],
            ["She called me ten minutes ago.", "Cô ấy gọi cho tôi cách đây mười phút."],
            ["We had dinner there a week ago.", "Chúng tôi ăn tối ở đó cách đây một tuần."],
            ["How long ago did you start learning English?", "Bạn bắt đầu học tiếng Anh cách đây bao lâu?"]
          ] },
        { f: "in + khoảng thời gian (sau … nữa)",
          mean: "**sau … nữa**, tính từ bây giờ tới tương lai.",
          parts: [
            ["in", "đứng **trước** khoảng thời gian."],
            ["khoảng thời gian", "five minutes, an hour, two weeks."]
          ],
          use: "dùng với tương lai: will, going to, hoặc hiện tại tiếp diễn. Trả lời câu hỏi When…? hoặc How soon…?",
          note: "Đối lập với ago: **two days ago** (hai ngày trước) và **in two days** (hai ngày nữa). Không nói “after two days” khi tính từ bây giờ.",
          ex: [
            ["The bus will come in five minutes.", "Năm phút nữa xe buýt sẽ đến."],
            ["I am going on holiday in two weeks.", "Hai tuần nữa tôi đi nghỉ."],
            ["The film starts in half an hour.", "Nửa tiếng nữa phim bắt đầu."],
            ["Can you call me back in an hour?", "Một tiếng nữa bạn gọi lại cho tôi được không?"]
          ] },
        { f: "for + khoảng thời gian (trong bao lâu)",
          mean: "**trong bao lâu**: một việc kéo dài bao nhiêu thời gian.",
          parts: [
            ["for", "đứng trước **khoảng** thời gian."],
            ["khoảng thời gian", "for an hour, for three days, for ten years, for a long time."]
          ],
          use: "dùng được với nhiều thì: quá khứ (I lived there for two years), hiện tại hoàn thành (I have worked here for five years), tương lai (I will stay for a week).",
          note: "Câu hỏi tương ứng là **How long…?** Không nói “since five years”.",
          ex: [
            ["I studied in Australia for two years.", "Tôi đã học ở Úc hai năm."],
            ["We are staying in Da Lat for three days.", "Chúng tôi sẽ ở Đà Lạt ba ngày."],
            ["She has worked at this bank for six years.", "Cô ấy đã làm ở ngân hàng này sáu năm."],
            ["How long did you wait? For an hour.", "Bạn đã đợi bao lâu? Một tiếng."]
          ] },
        { f: "since + mốc thời gian (từ khi)",
          mean: "**từ khi**: việc bắt đầu tại một mốc trong quá khứ và kéo dài **đến bây giờ**.",
          parts: [
            ["since + năm, tháng, ngày", "since 2020, since May, since Monday."],
            ["since + giờ", "since eight o’clock, since this morning."],
            ["since + câu", "since I was a child, since we met."]
          ],
          use: "thường dùng với **thì hiện tại hoàn thành**: I have known her since 2019.",
          note: "Không nói “I live here since 2020”; nói I **have lived** here since 2020.",
          ex: [
            ["I have lived in this city since 2018.", "Tôi sống ở thành phố này từ năm 2018."],
            ["She has been at work since seven o’clock.", "Cô ấy ở chỗ làm từ bảy giờ."],
            ["We have been friends since we were children.", "Chúng tôi là bạn từ khi còn nhỏ."],
            ["I have not eaten since this morning.", "Tôi chưa ăn gì từ sáng nay."]
          ] }
      ],
      p: [
        "**ago** đứng **sau** khoảng thời gian và nói về quá khứ: two years ago (cách đây hai năm). Người Việt hay dịch sai thành “before two years”. Ngược lại, **in** + khoảng thời gian nói về tương lai: in ten minutes (mười phút nữa).",
        "**for** đi với một **khoảng** thời gian (for five years, for a week), còn **since** đi với một **mốc** bắt đầu (since 2021, since Monday).",
        "Khi nói việc bắt đầu trong quá khứ và vẫn còn tiếp tục đến bây giờ, dùng **I have + động từ dạng quá khứ phân từ**: I have lived here for five years. Không dùng “I live here since…”."
      ],
      ex: [["I came here two years ago.", "Tôi đến đây cách đây hai năm."], ["I have lived here since 2020.", "Tôi sống ở đây từ năm 2020."]]
    },
    { h: "Hiện tại tiếp diễn cho lịch hẹn đã sắp xếp",
      f: ["chủ ngữ + am / is / are + động từ thêm -ing + thời gian tương lai"],
      items: [
        { f: "chủ ngữ + am / is / are + động từ thêm -ing + thời gian tương lai",
          mean: "**lịch hẹn, kế hoạch đã sắp xếp xong** cho tương lai (đã đặt vé, đã hẹn giờ).",
          parts: [
            ["am / is / are", "chia theo chủ ngữ: I am, she is, we are."],
            ["động từ thêm -ing", "việc đã lên lịch: meeting, seeing, flying, having."],
            ["thời gian tương lai", "**bắt buộc** có để biết là chuyện sắp tới: tomorrow, on Friday, next week, at three o’clock."]
          ],
          use: "dùng khi kể lịch hẹn với bác sĩ, cuộc họp, chuyến đi đã đặt, bữa tiệc đã lên kế hoạch. Hay dùng khi hỏi lịch của người khác: What are you doing this weekend?",
          note: "So sánh: I **am meeting** Lan at six (đã hẹn với Lan) và I **am going to** meet Lan (dự định, có thể chưa hẹn). Nếu thiếu mốc thời gian, câu sẽ hiểu là đang xảy ra lúc này.",
          ex: [
            ["I am seeing the dentist on Friday morning.", "Sáng thứ Sáu tôi có hẹn với nha sĩ."],
            ["We are having a meeting at ten tomorrow.", "Mười giờ sáng mai chúng tôi có cuộc họp."],
            ["She is not working next Monday.", "Thứ Hai tuần sau cô ấy không đi làm."],
            ["What are you doing this weekend?", "Cuối tuần này bạn có kế hoạch gì?"]
          ] }
      ],
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
