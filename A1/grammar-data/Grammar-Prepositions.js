/* Ngữ pháp nền tảng: Giới từ thời gian, nơi chốn, chuyển động (at, on, in, to, into, across). Hiển thị bởi grammar-lesson.js. */
window.A1_GRAMMAR = {
  icon: "📍",
  short: "Giới từ",
  hero: ["Giới từ thời gian, nơi chốn, chuyển động", "at · on · in · for · since · into · across"],
  desc: "Tiếng Việt dùng “vào”, “ở”, “trong” cho rất nhiều trường hợp, nên người Việt hay nói “in Monday”, “at Hanoi” hay “go to home”. Tiếng Anh chọn **at, on, in** theo độ lớn của thời gian và nơi chốn, và có cả một nhóm giới từ riêng để chỉ hướng đi. Học xong bài này, bạn sẽ hẹn giờ, chỉ đường, mô tả căn phòng và kể lộ trình đi làm mà không phải đoán giới từ nữa.",
  chips: ["at, on, in chỉ thời gian", "for, since, until, by", "at, on, in chỉ nơi chốn", "Chuyển động", "good at, wait for"],
  goal: [
    "Hẹn giờ chính xác với **at 7, on Monday, in July**, và biết khi nào **không dùng** giới từ: this Friday, next week, tomorrow.",
    "Nói khoảng thời gian bằng **for, since, during, until, by, from … to**: “I have lived here **for** two years.”",
    "Mô tả vị trí đồ vật và địa điểm: **in, on, at, next to, between, opposite, behind, in front of**.",
    "Chỉ đường và kể lộ trình đi làm bằng **to, into, across, along, through, past**: “Go **along** this street and **across** the bridge.”",
    "Dùng đúng giới từ sau các tính từ và động từ hay gặp: **good at, afraid of, interested in, listen to, wait for, arrive at / in**."
  ],
  sections: [
    { nav: "⏰ at, on, in thời gian", title: "Giới từ thời gian: at, on, in", sub: "at 7 o’clock, on Monday, in July: từ nhỏ đến lớn",
      intro: [
        "Hãy hình dung một **kim tự tháp ngược**: điểm nhỏ nhất là **at** (một giờ cụ thể), lớn hơn là **on** (một ngày), lớn nhất là **in** (tháng, năm, mùa, buổi). Tiếng Việt nói “vào” cho cả ba, nhưng tiếng Anh phải chọn theo độ lớn.",
        "Đặc biệt: trước **this, next, last, every, tomorrow, yesterday, today, tonight** thì **không dùng** giới từ nào cả."
      ],
      table: { head: ["Giới từ", "Dùng với", "Ví dụ", "Nghĩa"], say: [2],
        rows: [
          ["**at**", "giờ cụ thể", "at 7 o’clock", "lúc 7 giờ"],
          ["**at**", "một số cụm cố định", "at night", "vào ban đêm"],
          ["**at**", "dịp lễ, cuối tuần (Anh-Anh)", "at the weekend", "vào cuối tuần"],
          ["**on**", "thứ trong tuần", "on Monday", "vào thứ Hai"],
          ["**on**", "ngày tháng cụ thể", "on 2 September", "vào ngày 2 tháng 9"],
          ["**on**", "thứ + buổi", "on Monday morning", "vào sáng thứ Hai"],
          ["**in**", "buổi trong ngày", "in the morning", "vào buổi sáng"],
          ["**in**", "tháng, mùa", "in July", "vào tháng Bảy"],
          ["**in**", "năm, thập kỷ", "in 2025", "vào năm 2025"],
          ["(không dùng)", "this, next, last, every, tomorrow", "next Friday", "thứ Sáu tới"]
        ] },
      formulas: [
        { f: "at + giờ  /  on + ngày  /  in + tháng, năm, mùa, buổi",
          mean: "**vào lúc, vào ngày, vào tháng**: chọn giới từ theo độ lớn của thời gian.",
          parts: [["at", "điểm thời gian nhỏ, chính xác: at 6:30, at noon, at lunchtime, at night."], ["on", "một ngày cụ thể: on Sunday, on my birthday, on 1 June, on Tet holiday."], ["in", "khoảng thời gian dài: in the afternoon, in May, in summer, in 2024."], ["at the weekend / on the weekend", "người Anh nói **at**, người Mỹ nói **on**; cả hai đều đúng."]],
          use: "khi hẹn gặp, đặt lịch, kể chuyện đã xảy ra khi nào. Câu hỏi thường gặp: “What time …?” trả lời bằng **at**, “When …?” trả lời bằng **on** hoặc **in**.",
          note: "Có ngày cụ thể thì luôn dùng **on**, kể cả khi đi với buổi: in the morning nhưng **on Monday morning**. Và nhớ cụm cố định **at night** (không nói in the night).",
          ex: [["The meeting starts at nine o’clock.", "Cuộc họp bắt đầu lúc chín giờ."], ["I go swimming on Saturday morning.", "Tôi đi bơi vào sáng thứ Bảy."], ["Is your birthday in October?", "Sinh nhật bạn vào tháng Mười à?"], ["I do not drink coffee at night.", "Tôi không uống cà phê vào ban đêm."]] },
        { f: "this / next / last / every / tomorrow + thời gian (không có giới từ)",
          mean: "**không dùng at, on, in** khi phía trước thời gian đã có các từ này.",
          parts: [["this / next", "tuần này, tuần tới: this Friday, next month, next summer."], ["last", "vừa qua: last night, last week, last year."], ["every", "mỗi: every day, every Monday, every morning."], ["today, tomorrow, yesterday, tonight", "đứng một mình, không cần giới từ."]],
          use: "khi lên kế hoạch hoặc kể chuyện gần đây: “See you next week.”, “I met her last Sunday.”",
          note: "Người Việt hay nói “on next Monday” hay “in last year” vì dịch chữ “vào”. Khi có this, next, last, every thì **bỏ giới từ**.",
          ex: [["Are you free this Friday?", "Thứ Sáu này bạn rảnh không?"], ["I visited my grandparents last weekend.", "Cuối tuần trước tôi về thăm ông bà."], ["She goes to the gym every morning.", "Sáng nào cô ấy cũng đi tập gym."], ["I will not work tomorrow.", "Ngày mai tôi không đi làm."]] }
      ],
      mistakes: [
        ["See you in Monday.", "See you on Monday.", "Thứ trong tuần dùng **on**."],
        ["I was born on 1998.", "I was born in 1998.", "Năm dùng **in**; chỉ khi có ngày cụ thể mới dùng on: on 5 May 1998."],
        ["We will meet on next Saturday.", "We will meet next Saturday.", "Có **next** thì không dùng giới từ."]
      ],
      talk: { title: "TÌNH HUỐNG: HẸN ĐI CÀ PHÊ", turns: [
        ["A", "Are you free this weekend? Let’s have coffee.", "Cuối tuần này bạn rảnh không? Đi cà phê đi."],
        ["B", "I am busy on Saturday. How about Sunday morning?", "Thứ Bảy mình bận. Sáng Chủ nhật được không?"],
        ["A", "Sunday morning is fine. What time?", "Sáng Chủ nhật được. Mấy giờ?"],
        ["B", "At nine. I usually go jogging early in the morning.", "Chín giờ nhé. Mình hay chạy bộ vào sáng sớm."],
        ["A", "Great. See you on Sunday at nine, then.", "Tuyệt. Vậy hẹn bạn chín giờ Chủ nhật nhé."]
      ] },
      tip: "**at** cho cái kim (giờ), **on** cho tờ lịch (ngày), **in** cho cả cuốn lịch (tháng, năm, mùa). Thấy **this, next, last, every** thì bỏ giới từ." },

    { nav: "⏳ Khoảng thời gian", title: "for, since, during, until, by, from … to", sub: "Bao lâu, từ khi nào, trong suốt, cho đến khi, trước hạn",
      intro: [
        "Nhóm giới từ này trả lời các câu hỏi về **khoảng thời gian**: bao lâu? từ khi nào? đến bao giờ? hạn chót là khi nào? Tiếng Việt có thể nói “trong”, “từ”, “đến” cho nhiều trường hợp, nhưng tiếng Anh tách rõ từng nghĩa.",
        "Hai cặp hay nhầm nhất là **for / since** và **until / by**. Hãy đọc kỹ cột “Dùng khi” trong từng công thức."
      ],
      formulas: [
        { f: "for + độ dài thời gian  /  since + mốc thời gian",
          mean: "**trong (bao lâu)** và **từ (khi nào)**: hai cách nói về khoảng thời gian kéo dài.",
          parts: [["for", "theo sau là **độ dài**: for two hours, for three years, for a long time."], ["since", "theo sau là **mốc bắt đầu**: since 2020, since Monday, since I was a child."], ["How long …?", "câu hỏi “bao lâu”, trả lời bằng **for** hoặc **since**."]],
          use: "**since** thường đi với thì hiện tại hoàn thành: I have lived here since 2019. **for** dùng được với mọi thì: I lived there for two years. I am staying for a week.",
          note: "Người Việt hay nói “since two years” vì “từ hai năm nay”. Nếu là một **con số thời gian** thì dùng **for**; nếu là một **mốc** thì dùng **since**.",
          ex: [["I have worked here for three years.", "Tôi đã làm ở đây được ba năm."], ["She has lived in Saigon since 2020.", "Cô ấy sống ở Sài Gòn từ năm 2020."], ["How long have you studied English?", "Bạn học tiếng Anh bao lâu rồi?"], ["I have not seen him since Tet.", "Tôi không gặp anh ấy từ Tết."]] },
        { f: "during + sự việc  /  from … to (until) …",
          mean: "**trong suốt (một sự việc)** và **từ … đến …**: nói về thời gian xảy ra.",
          parts: [["during", "theo sau là **danh từ chỉ sự việc, giai đoạn**: during the meeting, during the holiday, during the night."], ["from … to / from … until", "điểm bắt đầu và điểm kết thúc: from Monday to Friday, from 8 a.m. until 5 p.m."], ["for và during", "for trả lời “bao lâu” (for two weeks), during trả lời “khi nào” (during the summer)."]],
          use: "khi nói giờ làm việc, giờ mở cửa, kể chuyện xảy ra giữa một sự kiện.",
          note: "Không nói “during two hours”. Có con số thì dùng **for**; có tên sự việc thì dùng **during**.",
          ex: [["I work from Monday to Friday.", "Tôi làm việc từ thứ Hai đến thứ Sáu."], ["The shop is open from 8 a.m. until 10 p.m.", "Cửa hàng mở cửa từ 8 giờ sáng đến 10 giờ tối."], ["Please do not use your phone during the meeting.", "Vui lòng không dùng điện thoại trong cuộc họp."], ["Did you travel during the holiday?", "Bạn có đi du lịch trong kỳ nghỉ không?"]] },
        { f: "until + thời điểm  /  by + hạn chót",
          mean: "**cho đến khi** (việc kéo dài liên tục) và **trước, chậm nhất là** (hạn phải xong).",
          parts: [["until", "hành động **kéo dài** đến thời điểm đó rồi dừng: wait until six, sleep until nine."], ["by", "hành động **xong trước hoặc đúng** thời điểm đó: finish by Friday, be home by ten."], ["not … until", "mãi đến … mới: I did not get home until midnight."]],
          use: "**until** khi nói về giờ làm, giờ chờ, giờ ngủ; **by** khi nói về hạn nộp, hạn trả, giờ phải có mặt.",
          note: "“Nộp báo cáo trước thứ Sáu” là **by Friday**, không phải until Friday. Mẹo hỏi lại: việc này **kéo dài** (until) hay chỉ cần **xong** (by)?",
          ex: [["I will wait for you until six.", "Tôi sẽ đợi bạn đến sáu giờ."], ["Please send me the report by Friday.", "Vui lòng gửi tôi báo cáo trước thứ Sáu."], ["Can you be home by ten?", "Con về nhà trước mười giờ được không?"], ["The bank is not open until nine.", "Phải đến chín giờ ngân hàng mới mở cửa."]] }
      ],
      mistakes: [
        ["I have lived here since five years.", "I have lived here for five years.", "Năm năm là **độ dài** nên dùng **for**."],
        ["I slept during eight hours.", "I slept for eight hours.", "Có con số thời gian thì dùng **for**, không dùng during."],
        ["You must finish the work until Monday.", "You must finish the work by Monday.", "Hạn chót phải xong dùng **by**; until chỉ việc kéo dài liên tục."]
      ],
      talk: { title: "TÌNH HUỐNG: NÓI CHUYỆN VỚI ĐỒNG NGHIỆP MỚI", turns: [
        ["A", "How long have you worked here?", "Bạn làm ở đây bao lâu rồi?"],
        ["B", "For two years. I have been in the sales team since last March.", "Hai năm rồi. Mình ở nhóm bán hàng từ tháng Ba năm ngoái."],
        ["A", "What are your working hours?", "Giờ làm của bạn thế nào?"],
        ["B", "From eight to five, but sometimes I stay until seven.", "Từ tám giờ đến năm giờ, nhưng thỉnh thoảng mình ở lại đến bảy giờ."],
        ["A", "I need to finish my first report by Friday. Can you help me?", "Mình phải xong báo cáo đầu tiên trước thứ Sáu. Bạn giúp mình được không?"],
        ["B", "Sure. Let’s look at it during lunch.", "Được chứ. Mình xem nó trong giờ ăn trưa nhé."]
      ] },
      tip: "**for** + con số (for 2 years), **since** + mốc (since 2022). **until** = kéo dài đến lúc đó, **by** = xong trước lúc đó." },

    { nav: "🏠 Nơi chốn", title: "Giới từ nơi chốn: in, on, at và vị trí", sub: "in the room, on the wall, at the bus stop, next to, between, opposite",
      intro: [
        "Với nơi chốn: **in** là **ở trong** một không gian có ranh giới (phòng, hộp, thành phố, đất nước); **on** là **ở trên bề mặt** (tường, bàn, sàn nhà); **at** là **ở một điểm** hoặc một địa điểm có chức năng (bến xe, cửa, nơi làm việc).",
        "Ngoài ba từ này, có một nhóm giới từ để mô tả vị trí chính xác. Hãy học chúng cùng với một căn phòng quen thuộc như phòng khách nhà bạn."
      ],
      table: { head: ["Giới từ", "Nghĩa", "Ví dụ"], say: [0, 2],
        rows: [
          ["next to", "bên cạnh, sát cạnh", "The bank is next to the post office."],
          ["near", "gần (không nhất thiết sát cạnh)", "I live near the lake."],
          ["between", "ở giữa (hai thứ)", "The sofa is between the two windows."],
          ["opposite", "đối diện", "The café is opposite the school."],
          ["in front of", "phía trước", "There is a tree in front of my house."],
          ["behind", "phía sau", "The car park is behind the hotel."],
          ["above", "phía trên (không chạm)", "The clock is above the door."],
          ["under", "bên dưới", "The cat is under the table."]
        ] },
      formulas: [
        { f: "in / on / at + nơi chốn",
          mean: "**ở trong, ở trên, ở tại**: ba cách nói “ở” trong tiếng Anh.",
          parts: [["in", "bên trong một không gian: in the room, in the box, in my bag, **in Hanoi**, in Vietnam."], ["on", "trên bề mặt hoặc trên phương tiện lớn: on the wall, on the table, on the second floor, **on the bus**, on the train."], ["at", "một điểm, một địa điểm theo chức năng: at the bus stop, at the door, **at home**, **at work**, at school, at the airport."], ["in a car / in a taxi", "xe nhỏ, ngồi bên trong thì dùng **in**; xe buýt, tàu, máy bay dùng **on**."]],
          use: "khi nói mình đang ở đâu, đồ vật để đâu, nhà ở tầng mấy. Câu hỏi: “Where are you?” → “I am **at** work.”, “Where is my phone?” → “It is **on** the table.”",
          note: "Nói **at home**, **at work**, **at school** (không có the). Thành phố và đất nước luôn dùng **in**: không nói “at Hanoi”.",
          ex: [["My keys are in my bag.", "Chìa khóa của tôi ở trong túi."], ["There is a big picture on the wall.", "Có một bức tranh lớn trên tường."], ["I am waiting at the bus stop.", "Tôi đang đợi ở bến xe buýt."], ["Is your flat on the fifth floor?", "Căn hộ của bạn ở tầng năm à?"]] },
        { f: "next to / between / opposite / in front of / behind / near / above / under",
          mean: "**bên cạnh, ở giữa, đối diện, phía trước, phía sau, gần, phía trên, bên dưới**: mô tả vị trí chính xác.",
          parts: [["next to / near", "next to là **sát cạnh**; near là **ở gần**, có thể cách một đoạn."], ["between A and B", "ở giữa **hai** thứ, luôn có **and**: between the bank and the café."], ["opposite / in front of", "opposite là **đối diện, bên kia đường**; in front of là **ngay phía trước**, cùng một bên."], ["above / under", "above là ở phía trên nhưng **không chạm**; on là chạm bề mặt. under là bên dưới."]],
          use: "khi mô tả phòng ở, chỉ vị trí cửa hàng, hẹn chỗ gặp: “I am in front of the cinema.”",
          note: "Không nói “next the bank” (thiếu **to**) hay “in front the house” (thiếu **of**). Người Việt hay dùng in front of cho “đối diện”, nhưng bên kia đường phải là **opposite**.",
          ex: [["The pharmacy is next to the supermarket.", "Hiệu thuốc ở cạnh siêu thị."], ["My desk is between the bed and the window.", "Bàn học của tôi ở giữa giường và cửa sổ."], ["The bus stop is opposite my office.", "Bến xe buýt ở đối diện văn phòng tôi."], ["Is there a car park behind the building?", "Có bãi đỗ xe phía sau tòa nhà không?"]] }
      ],
      mistakes: [
        ["I live at Hanoi.", "I live in Hanoi.", "Thành phố dùng **in**."],
        ["I am in home now.", "I am at home now.", "Cụm cố định: **at home**, at work, at school."],
        ["The bank is next the hotel.", "The bank is next to the hotel.", "Luôn nói **next to**, không bỏ to."]
      ],
      talk: { title: "TÌNH HUỐNG: MÔ TẢ PHÒNG CHO THUÊ QUA ĐIỆN THOẠI", turns: [
        ["A", "Can you tell me about the room?", "Bạn mô tả căn phòng giúp mình được không?"],
        ["B", "Sure. It is on the third floor. There is a big window opposite the door.", "Được. Phòng ở tầng ba. Có một cửa sổ lớn đối diện cửa ra vào."],
        ["A", "Is there a desk?", "Có bàn làm việc không?"],
        ["B", "Yes, it is next to the window, and there is a shelf above it.", "Có, bàn ở cạnh cửa sổ, và có một cái kệ phía trên."],
        ["A", "And where is the building?", "Còn tòa nhà ở đâu?"],
        ["B", "It is in Cau Giay, between a bank and a supermarket. The bus stop is in front of it.", "Ở Cầu Giấy, giữa một ngân hàng và một siêu thị. Bến xe buýt ngay phía trước."]
      ] },
      tip: "**in** = trong hộp, **on** = trên mặt bàn, **at** = tại một chấm trên bản đồ. Học thuộc ba cụm: **at home, at work, on the bus**." },

    { nav: "🚶 Chuyển động", title: "Giới từ chuyển động: to, into, across, through…", sub: "Chỉ đường và kể lộ trình đi làm",
      intro: [
        "Giới từ nơi chốn trả lời câu hỏi “**ở đâu?**”, còn giới từ chuyển động trả lời câu hỏi “**đi về đâu, đi qua đâu?**”. Chúng thường đi sau các động từ chuyển động: go, walk, drive, run, come, get.",
        "Đây là nhóm từ bạn cần nhất khi chỉ đường cho khách du lịch hoặc kể mỗi ngày mình đi làm như thế nào."
      ],
      table: { head: ["Giới từ", "Nghĩa", "Ví dụ"], say: [0, 2],
        rows: [
          ["to", "đến (điểm đích)", "I go to work by bus."],
          ["into", "vào trong", "She walked into the shop."],
          ["out of", "ra khỏi", "Get out of the taxi here."],
          ["across", "băng qua (từ bên này sang bên kia)", "Walk across the bridge."],
          ["along", "dọc theo", "Go along this street."],
          ["through", "xuyên qua (bên trong)", "We drove through the tunnel."],
          ["past", "đi ngang qua", "Go past the bank."],
          ["up / down", "lên / xuống", "Go up the stairs."],
          ["towards", "về phía", "He ran towards the gate."]
        ] },
      formulas: [
        { f: "go / walk / drive + to / into / out of + nơi chốn",
          mean: "**đi đến, đi vào, đi ra khỏi**: nói về điểm đích của chuyển động.",
          parts: [["to", "đến một nơi: go to school, go to the market, go to Da Nang."], ["into", "đi **vào bên trong**: come into the room, get into the car."], ["out of", "đi **ra khỏi** bên trong: get out of the car, walk out of the office."], ["go home (không có to)", "home, there, here, downtown không cần to: go home, come here."]],
          use: "khi kể mình đi đâu, đi vào hay ra khỏi đâu. So sánh: **in** là đã ở trong (ở đâu), **into** là đang chuyển động vào trong.",
          note: "Người Việt hay nói “go to home” vì “về nhà”. Với **home** thì bỏ to: **go home**, **get home**. Nhưng “ở nhà” vẫn là at home.",
          ex: [["I go to work at seven thirty.", "Tôi đi làm lúc bảy rưỡi."], ["Please come into my office.", "Mời bạn vào văn phòng tôi."], ["He got out of the taxi in front of the hotel.", "Anh ấy xuống taxi trước khách sạn."], ["What time do you usually go home?", "Bạn thường về nhà lúc mấy giờ?"]] },
        { f: "across / along / through / past / up / down / towards + nơi chốn",
          mean: "**băng qua, dọc theo, xuyên qua, ngang qua, lên, xuống, về phía**: mô tả đường đi.",
          parts: [["across", "từ bên này **sang bên kia** một bề mặt: across the road, across the bridge."], ["through", "xuyên qua **bên trong** một không gian: through the park, through the tunnel, through the city center."], ["along", "đi **dọc theo** một đường dài: along the river, along this street."], ["past", "đi **ngang qua**, không dừng lại: go past the church, walk past the market."], ["up / down / towards", "lên, xuống (cầu thang, con đường dốc), về phía (một hướng): towards the station."]],
          use: "khi chỉ đường: “Go **along** this street, go **past** the bank, then walk **across** the bridge.” Thường đi kèm câu mệnh lệnh: Go, Walk, Turn, Take.",
          note: "**across** là trên bề mặt (qua đường, qua sông), **through** là bên trong (qua công viên, qua đường hầm). **past** (đi ngang qua) khác **passed** (động từ quá khứ của pass).",
          ex: [["Walk along this street for two minutes.", "Đi dọc con phố này khoảng hai phút."], ["Go past the hospital and turn left.", "Đi qua bệnh viện rồi rẽ trái."], ["I ride my motorbike across Long Bien Bridge every day.", "Ngày nào tôi cũng đi xe máy qua cầu Long Biên."], ["Do not walk through the park at night.", "Đừng đi bộ qua công viên vào ban đêm."]] }
      ],
      mistakes: [
        ["I go to home at six.", "I go home at six.", "Trước **home** không dùng to: **go home**."],
        ["She walked in the room and sat down.", "She walked into the room and sat down.", "Chuyển động **vào bên trong** dùng **into**."],
        ["We drove across the tunnel.", "We drove through the tunnel.", "Đường hầm là một không gian kín, đi xuyên qua bên trong dùng **through**."]
      ],
      talk: { title: "TÌNH HUỐNG: CHỈ ĐƯỜNG CHO KHÁCH DU LỊCH", turns: [
        ["A", "Excuse me. How can I get to Hoan Kiem Lake?", "Xin lỗi. Làm sao để tôi đến hồ Hoàn Kiếm?"],
        ["B", "Go along this street and go past the big supermarket.", "Đi dọc con phố này và đi qua siêu thị lớn."],
        ["A", "OK. And then?", "Vâng. Rồi sao nữa?"],
        ["B", "Walk across the road at the traffic lights, then go through the small market.", "Băng qua đường ở chỗ đèn giao thông, rồi đi xuyên qua cái chợ nhỏ."],
        ["A", "Is it far?", "Có xa không?"],
        ["B", "No, about ten minutes. The lake is opposite the post office.", "Không, khoảng mười phút. Hồ ở đối diện bưu điện."]
      ] },
      tip: "Vẽ lộ trình đi làm của bạn ra giấy và nói từng chặng: **out of** my house, **along** the street, **across** the bridge, **past** the market, **into** my office." },

    { nav: "🔗 Đi với từ khác", title: "Giới từ sau tính từ và động từ", sub: "good at, afraid of, listen to, wait for: học theo cụm",
      intro: [
        "Nhiều tính từ và động từ luôn đi kèm **một giới từ cố định**. Không có quy tắc để đoán, và tiếng Việt thường không có giới từ tương ứng (“sợ chó” không có chữ nào ở giữa, nhưng tiếng Anh là afraid **of** dogs). Cách duy nhất là **học theo cụm**.",
        "Sau giới từ là **danh từ, đại từ tân ngữ** hoặc **động từ thêm -ing**: good at cooking, interested in learning. Xem thêm trang **Mẫu câu với động từ**."
      ],
      formulas: [
        { f: "to be + tính từ + giới từ + danh từ / động từ thêm -ing",
          mean: "**giỏi về, sợ, thích thú với…**: tính từ đi với giới từ cố định.",
          parts: [["good at / bad at", "giỏi về / kém về: good at maths, bad at cooking."], ["afraid of", "sợ: afraid of dogs, afraid of flying."], ["interested in", "quan tâm, thích thú với: interested in music, interested in learning English."], ["famous for / different from", "nổi tiếng về / khác với: famous for pho, different from Hanoi."]],
          use: "khi nói về khả năng, sở thích, nỗi sợ, đặc điểm của một nơi. Nếu sau giới từ là một hành động, động từ phải **thêm -ing**.",
          note: "Người Việt hay nói “good in English” hay “interested about”. Hãy học nguyên cụm: **good at**, **interested in**. Và không nói “afraid of fly”: phải là **afraid of flying**.",
          ex: [["My sister is good at drawing.", "Chị tôi vẽ giỏi."], ["Are you afraid of dogs?", "Bạn có sợ chó không?"], ["I am interested in Vietnamese history.", "Tôi quan tâm đến lịch sử Việt Nam."], ["I am not very good at cooking.", "Tôi nấu ăn không giỏi lắm."]] },
        { f: "động từ + giới từ + tân ngữ",
          mean: "**nghe, đợi, nhìn, đến…**: động từ đi với giới từ cố định trước tân ngữ.",
          parts: [["listen to", "nghe (ai, cái gì): listen to music, listen to me."], ["wait for", "đợi (ai, cái gì): wait for the bus, wait for her."], ["look at / look for", "look at = nhìn vào; look for = tìm kiếm."], ["arrive at / arrive in", "arrive **at** một địa điểm nhỏ (the airport, the office); arrive **in** thành phố, đất nước (Hanoi, Japan). Không dùng arrive to."], ["talk to / ask for / pay for", "nói chuyện với, xin (cái gì), trả tiền cho."]],
          use: "trong những câu hằng ngày nhất: nghe nhạc, chờ xe, tìm chìa khóa, đến sân bay. Khi tân ngữ là người, dùng đại từ tân ngữ: wait for **me**, listen to **her**.",
          note: "Người Việt hay nói “listen music”, “wait the bus” vì tiếng Việt không có giới từ. **listen** và **wait** luôn cần **to** và **for** khi có tân ngữ phía sau.",
          ex: [["I listen to music on the bus.", "Tôi nghe nhạc trên xe buýt."], ["Can you wait for me for five minutes?", "Bạn đợi tôi năm phút được không?"], ["What time did you arrive in Da Nang?", "Bạn đến Đà Nẵng lúc mấy giờ?"], ["I am looking for my glasses.", "Tôi đang tìm kính của tôi."]] }
      ],
      mistakes: [
        ["I like listening music.", "I like listening to music.", "listen luôn đi với **to** khi có tân ngữ."],
        ["We arrived to the airport at five.", "We arrived at the airport at five.", "Không dùng arrive to; địa điểm nhỏ dùng **arrive at**."],
        ["She is good in English.", "She is good at English.", "Cụm cố định là **good at**."]
      ],
      talk: { title: "TÌNH HUỐNG: LÀM QUEN Ở LỚP TIẾNG ANH", turns: [
        ["A", "Hi! What are you interested in?", "Chào bạn! Bạn thích gì?"],
        ["B", "I am interested in photography. I am not very good at it yet.", "Mình thích chụp ảnh. Mình chưa giỏi lắm."],
        ["A", "Cool. I like listening to podcasts in English. It helps me a lot.", "Hay đấy. Mình thích nghe podcast tiếng Anh. Nó giúp mình nhiều lắm."],
        ["B", "I am afraid of speaking in front of the class.", "Mình sợ nói trước lớp."],
        ["A", "Me too! Let’s practise together. I can wait for you after class.", "Mình cũng vậy! Mình cùng luyện nhé. Mình có thể đợi bạn sau giờ học."]
      ] },
      tip: "Không đoán giới từ, hãy **học nguyên cụm**: ghi vào sổ “listen **to**, wait **for**, good **at**, afraid **of**, interested **in**” và tự đặt một câu về bản thân cho mỗi cụm." }
  ],
  speak: [
    { q: "When are you free this week? Can we meet?", vi: "Tuần này bạn rảnh lúc nào? Mình gặp nhau được không?", hint: "Dùng **on + thứ**, **at + giờ**, **in the + buổi**; nhớ **this / next** không cần giới từ: I am free **on** Thursday **at** six.",
      answers: [["I am free on Thursday evening, at about six thirty.", "Tôi rảnh tối thứ Năm, khoảng sáu rưỡi."], ["I am busy this week. How about next Saturday, in the morning?", "Tuần này tôi bận. Sáng thứ Bảy tuần sau thì sao?"]] },
    { q: "How long have you lived in your city?", vi: "Bạn sống ở thành phố của mình bao lâu rồi?", hint: "Dùng **for + độ dài** hoặc **since + mốc**: I have lived in Hanoi **for** ten years / **since** 2015.",
      answers: [["I have lived in Hanoi for ten years.", "Tôi đã sống ở Hà Nội mười năm."], ["I have lived in Saigon since I was a child.", "Tôi sống ở Sài Gòn từ khi còn nhỏ."]] },
    { q: "What are your working hours?", vi: "Giờ làm việc của bạn thế nào?", hint: "Dùng **from … to / until**, **on + ngày**, và **at the weekend**.",
      answers: [["I work from eight to five, from Monday to Friday.", "Tôi làm từ tám giờ đến năm giờ, từ thứ Hai đến thứ Sáu."], ["I start at nine and work until six. I do not work at the weekend.", "Tôi bắt đầu lúc chín giờ và làm đến sáu giờ. Cuối tuần tôi không làm."]] },
    { q: "How do you get to work or school every day?", vi: "Mỗi ngày bạn đi làm hoặc đi học như thế nào?", hint: "Kể lộ trình bằng giới từ chuyển động: **out of, along, across, past, into**, và phương tiện **on the bus / in a taxi**.",
      answers: [["I ride my motorbike along the river, across a bridge and past a big market. It takes twenty minutes.", "Tôi đi xe máy dọc bờ sông, qua một cây cầu và ngang qua một cái chợ lớn. Mất hai mươi phút."], ["I walk to the bus stop opposite my house and get on the bus. I listen to music on the bus.", "Tôi đi bộ ra bến xe buýt đối diện nhà và lên xe. Tôi nghe nhạc trên xe buýt."]] },
    { q: "Can you describe your bedroom?", vi: "Bạn mô tả phòng ngủ của mình được không?", hint: "Dùng **in, on, next to, between, opposite, above, under**: My bed is **next to** the window.",
      answers: [["My bed is next to the window. There is a small desk opposite the bed and a lamp on it.", "Giường tôi ở cạnh cửa sổ. Có một cái bàn nhỏ đối diện giường và một cái đèn trên bàn."], ["There is a picture above my bed, and my shoes are under it.", "Có một bức tranh phía trên giường, còn giày tôi để dưới gầm giường."]] },
    { q: "Excuse me, is there a pharmacy near here?", vi: "Xin lỗi, gần đây có hiệu thuốc không?", hint: "Chỉ đường bằng **go along, go past, walk across**, rồi nói vị trí bằng **next to / opposite / between**.",
      answers: [["Yes. Go along this street and go past the bank. The pharmacy is next to a café.", "Có. Đi dọc phố này và đi qua ngân hàng. Hiệu thuốc ở cạnh một quán cà phê."], ["Walk across the road. It is between the supermarket and the bakery.", "Băng qua đường. Nó ở giữa siêu thị và tiệm bánh."]] },
    { q: "What are you good at? What are you afraid of?", vi: "Bạn giỏi gì? Bạn sợ điều gì?", hint: "Dùng **good at + danh từ / động từ thêm -ing** và **afraid of + danh từ / động từ thêm -ing**.",
      answers: [["I am good at cooking, but I am afraid of swimming in the sea.", "Tôi nấu ăn giỏi, nhưng tôi sợ bơi ở biển."], ["I am good at maths. I am afraid of spiders!", "Tôi giỏi toán. Tôi sợ nhện!"]] },
    { q: "When did you arrive here today?", vi: "Hôm nay bạn đến đây lúc mấy giờ?", hint: "Dùng **arrive at + địa điểm** và **at + giờ**; không dùng arrive to.",
      answers: [["I arrived at the office at eight fifteen.", "Tôi đến văn phòng lúc tám giờ mười lăm."], ["I arrived at school early, at seven, so I waited for my friends.", "Tôi đến trường sớm, lúc bảy giờ, nên tôi đợi bạn bè."]] }
  ],
  exercises: [
    { title: "Phần 1: Điền giới từ thời gian", items: [
      { q: "The class starts ___ 7 p.m.", a: ["at"], hint: "giờ cụ thể" },
      { q: "My birthday is ___ June.", a: ["in"], hint: "tháng" },
      { q: "I do not work ___ Sunday.", a: ["on"], hint: "thứ trong tuần" },
      { q: "I go to the gym ___ the morning.", a: ["in"], hint: "buổi trong ngày" },
      { q: "She has worked here ___ 2021.", a: ["since"], hint: "mốc thời gian" },
      { q: "We waited ___ two hours.", a: ["for"], hint: "độ dài thời gian" },
      { q: "Please finish the report ___ Friday.", a: ["by"], hint: "hạn chót" },
      { q: "I usually read ___ night.", a: ["at"], hint: "cụm cố định" }
    ] },
    { title: "Phần 2: Điền giới từ nơi chốn, chuyển động và cụm cố định", items: [
      { q: "I live ___ Da Nang.", a: ["in"], hint: "thành phố" },
      { q: "Sorry, I cannot talk. I am ___ work.", a: ["at"], hint: "cụm cố định" },
      { q: "There is a clock ___ the wall.", a: ["on"], hint: "trên bề mặt" },
      { q: "I am waiting ___ the bus.", a: ["for"], hint: "đợi" },
      { q: "Do you like listening ___ music?", a: ["to"], hint: "nghe" },
      { q: "My son is good ___ maths.", a: ["at"], hint: "giỏi về" }
    ] },
    { title: "Phần 3: Chọn câu đúng", items: [
      { q: "“Ngân hàng ở đối diện khách sạn” (bên kia đường).", options: ["The bank is in front of the hotel.", "The bank is opposite the hotel.", "The bank is next the hotel."], a: 1, why: "Bên kia đường, đối diện nhau dùng **opposite**." },
      { q: "“Tôi về nhà lúc sáu giờ.”", options: ["I go to home at six.", "I go home at six.", "I go at home at six."], a: 1, why: "Trước **home** không dùng to: **go home**." },
      { q: "“Cô ấy bước vào phòng.”", options: ["She walked into the room.", "She walked at the room.", "She walked on the room."], a: 0, why: "Chuyển động vào bên trong dùng **into**." },
      { q: "“Hẹn gặp bạn thứ Bảy tới.”", options: ["See you on next Saturday.", "See you next Saturday.", "See you in next Saturday."], a: 1, why: "Có **next** phía trước thì không dùng giới từ." },
      { q: "“Đi xuyên qua công viên.”", options: ["Go along the park.", "Go through the park.", "Go past the park."], a: 1, why: "Đi bên trong, từ đầu này ra đầu kia dùng **through**." },
      { q: "“Chúng tôi đến Hà Nội lúc nửa đêm.”", options: ["We arrived to Hanoi at midnight.", "We arrived at Hanoi at midnight.", "We arrived in Hanoi at midnight."], a: 2, why: "Đến một thành phố dùng **arrive in**." }
    ] }
  ],
  vocab: [["at 7 o’clock / at night", "lúc 7 giờ / vào ban đêm"], ["on Monday / on Monday morning", "vào thứ Hai / vào sáng thứ Hai"], ["in July / in the morning / in 2025", "vào tháng Bảy / vào buổi sáng / vào năm 2025"], ["for two years / since 2020", "được hai năm / từ năm 2020"], ["until six / by Friday", "đến sáu giờ / trước thứ Sáu"], ["during the meeting", "trong suốt cuộc họp"], ["at home / at work / on the bus", "ở nhà / ở chỗ làm / trên xe buýt"], ["next to / between / opposite", "bên cạnh / ở giữa / đối diện"], ["in front of / behind / near", "phía trước / phía sau / gần"], ["above / under", "phía trên / bên dưới"], ["into / out of", "vào trong / ra khỏi"], ["across / along / through / past", "băng qua / dọc theo / xuyên qua / ngang qua"], ["good at / afraid of / interested in", "giỏi về / sợ / quan tâm đến"], ["listen to / wait for / arrive at, in", "nghe / đợi / đến"]],
  tips: [
    "Mở lịch điện thoại mỗi sáng và đọc to: “I have a meeting **on** Tuesday **at** ten. My trip is **in** December.”",
    "Đứng giữa phòng mình và mô tả năm đồ vật bằng **next to, between, opposite, on, under**.",
    "Mỗi ngày trên đường đi làm, nói thầm lộ trình của mình: **along** the street, **across** the bridge, **past** the market, **into** the office.",
    "Ghi các cụm cố định vào sổ theo cặp (**listen to, wait for, good at, afraid of**) và không bao giờ học chữ đứng riêng.",
    "Khi phân vân **for** hay **since**, tự hỏi: phía sau là một con số (for) hay một mốc (since)?"
  ]
};