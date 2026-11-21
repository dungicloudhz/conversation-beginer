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
      items: [
        { f: "by + phương tiện (không có a / the)",
          mean: "**đi bằng (loại phương tiện nào)**. Chỉ nói chung về cách di chuyển, không nói đến một chiếc xe cụ thể.",
          parts: [
            ["by bus, by train, by metro", "đi bằng xe buýt, tàu hỏa, tàu điện (phương tiện công cộng)."],
            ["by car, by motorbike, by bike", "đi bằng ô tô, xe máy, xe đạp."],
            ["by plane, by boat, by taxi", "đi bằng máy bay, thuyền, taxi."]
          ],
          use: "trả lời câu hỏi How do you get to work? hoặc How do you go there? Cụm by + phương tiện thường đứng **cuối câu**, sau nơi đến: I go to school **by bus**.",
          note: "Sau by **không có** a, the, my: không nói “by the bus”, “by my car”. Nếu muốn nói xe của mình thì đổi sang động từ: I drive my car, I ride my motorbike.",
          ex: [
            ["I usually go to school by motorbike.", "Tôi thường đi học bằng xe máy."],
            ["We are traveling to Hanoi by train.", "Chúng tôi đi Hà Nội bằng tàu hỏa."],
            ["Is it cheaper to go by bus or by taxi?", "Đi xe buýt hay taxi rẻ hơn?"],
            ["My father does not go to work by car.", "Bố tôi không đi làm bằng ô tô."]
          ] },
        { f: "on foot",
          mean: "**đi bộ**. Đây là cách nói cố định, dùng giới từ **on** chứ không dùng by.",
          parts: [
            ["on foot", "**bằng chân, đi bộ**. Cụm cố định, foot luôn ở số ít."],
            ["walk", "**đi bộ**, động từ. Cách nói đơn giản hơn: I walk to work = I go to work on foot."]
          ],
          use: "khi kể mình đi bộ đến đâu đó. On foot đứng cuối câu, sau nơi đến. Trong nói chuyện hằng ngày, **walk** được dùng nhiều hơn.",
          note: "Không nói “by foot” hay “on feet”. Nếu không nhớ, hãy dùng **walk**: I walk to the market.",
          ex: [
            ["I go to the market on foot.", "Tôi đi bộ ra chợ."],
            ["The station is near, so we can go on foot.", "Nhà ga ở gần nên chúng ta có thể đi bộ."],
            ["Do you go to school on foot?", "Bạn đi bộ đến trường à?"],
            ["My children walk to school every day.", "Các con tôi đi bộ đến trường mỗi ngày."]
          ] },
        { f: "take + the / a + xe công cộng hoặc xe thuê",
          mean: "**đi, bắt (một chuyến xe)**. Take nhấn vào hành động lên và dùng một phương tiện không phải của mình.",
          parts: [
            ["take the + xe công cộng", "xe chạy theo tuyến, lịch cố định: take **the** bus, take **the** train, take **the** metro, take **the** number 9 bus."],
            ["take a + xe thuê", "gọi hoặc vẫy một chiếc bất kỳ: take **a** taxi, take **a** Grab, take **a** motorbike taxi."]
          ],
          use: "khi kể cụ thể mình đi bằng gì, hoặc hướng dẫn người khác. Sau take là the hoặc a + tên phương tiện, rồi có thể thêm **to + nơi đến**.",
          note: "So sánh: **I go by bus** (nói chung) và **I take the bus** (nói hành động). Cả hai đều đúng, nhưng sau take phải có the hoặc a, còn sau by thì không.",
          ex: [
            ["I take the metro to work every morning.", "Sáng nào tôi cũng đi tàu điện đi làm."],
            ["Let’s take a taxi. It is raining.", "Mình đi taxi đi. Trời đang mưa."],
            ["You can take the number 32 bus to the airport.", "Bạn có thể bắt xe buýt số 32 ra sân bay."],
            ["Did you take a Grab or the bus?", "Bạn đi Grab hay xe buýt?"]
          ] },
        { f: "drive + ô tô / ride + xe máy hoặc xe đạp",
          mean: "**lái (xe)**. Tiếng Anh dùng hai động từ khác nhau tùy loại xe.",
          parts: [
            ["drive", "**lái** ô tô, xe tải, xe buýt: những xe ngồi bên trong và cầm vô lăng. Quá khứ: drove."],
            ["ride", "**đi, cưỡi** xe máy, xe đạp, ngựa: những thứ ngồi lên trên và cầm tay lái. Quá khứ: rode."]
          ],
          use: "khi chính bạn điều khiển phương tiện. Sau drive hoặc ride là xe (thường có my, a, the), rồi có thể thêm **to + nơi đến**. Cũng có thể dùng một mình: I drive to work.",
          note: "Người Việt hay nói “drive a motorbike”. Cách tự nhiên là **ride a motorbike**. Mẹo nhớ: có vô lăng thì **drive**, có tay lái hai bên thì **ride**.",
          ex: [
            ["My mother drives to work.", "Mẹ tôi lái ô tô đi làm."],
            ["I ride my motorbike to the office.", "Tôi đi xe máy đến văn phòng."],
            ["Can you drive a car?", "Bạn có biết lái ô tô không?"],
            ["He does not ride a bike in the rain.", "Anh ấy không đạp xe khi trời mưa."]
          ] }
      ],
      p: [
        "Khi chỉ nói chung là đi bằng loại phương tiện nào, dùng **by + phương tiện** và **không** thêm a hay the: by bus, by car, by train, by plane.",
        "Đi bộ là ngoại lệ: nói **on foot** hoặc dùng động từ **walk**, không nói “by foot”.",
        "Muốn nói rõ hành động, dùng động từ: **take** cho xe chung hoặc xe thuê (take the bus, take a taxi), **drive** khi tự lái ô tô, **ride** khi đi xe máy, xe đạp."
      ],
      ex: [["I go to work by bus.", "Tôi đi làm bằng xe buýt."], ["I ride my bike to the park.", "Tôi đạp xe ra công viên."]]
    },
    { h: "get on / get off và get in / get out of",
      f: ["get on / get off + bus, train, plane, metro, motorbike, bike", "get in / get out of + car, taxi"],
      items: [
        { f: "get on / get off + bus, train, plane, metro, motorbike, bike",
          mean: "**lên xe / xuống xe** với phương tiện lớn có thể đứng, đi lại bên trong, hoặc phương tiện mình ngồi lên trên.",
          parts: [
            ["get on", "**lên** (xe buýt, tàu, máy bay, tàu điện) hoặc **leo lên** (xe máy, xe đạp)."],
            ["get off", "**xuống** khỏi các phương tiện đó."],
            ["bus, train, plane, metro", "phương tiện lớn, bước lên bậc và có thể đứng bên trong."],
            ["motorbike, bike", "phương tiện ngồi lên trên, không có mui."]
          ],
          use: "hỏi hoặc chỉ chỗ lên, xuống xe: trạm nào, ga nào. Sau get on, get off đặt **the + phương tiện**, rồi thêm at + địa điểm.",
          note: "Không dịch “xuống xe” thành “get down the bus”. Khi hỏi đường, câu rất hay dùng: **Where should I get off?**",
          ex: [
            ["Get on the bus at the bus stop near the bank.", "Lên xe buýt ở trạm gần ngân hàng."],
            ["Where should I get off for the museum?", "Tôi nên xuống ở đâu để đến bảo tàng?"],
            ["We got off the train in Hue.", "Chúng tôi xuống tàu ở Huế."],
            ["Get on the motorbike and put on your helmet.", "Lên xe máy và đội mũ bảo hiểm vào."]
          ] },
        { f: "get in / get out of + car, taxi",
          mean: "**lên xe / xuống xe** với xe nhỏ phải cúi người chui vào, như ô tô, taxi.",
          parts: [
            ["get in", "**vào, lên** (ô tô, taxi). Có thể nói get in the car hoặc chỉ Get in!"],
            ["get out of", "**ra khỏi, xuống** (ô tô, taxi). Nhớ có **of** khi có tên xe phía sau."],
            ["car, taxi", "xe nhỏ, ngồi bên trong, không đứng được."]
          ],
          use: "nói với tài xế, người đi cùng khi lên xuống ô tô, taxi. Get in + the car; get out of + the taxi.",
          note: "Nếu không có tên xe phía sau thì bỏ of: **Please get out here.** Đừng dùng get on với taxi hay ô tô.",
          ex: [
            ["Get in the car. We are late.", "Lên xe đi. Mình trễ rồi."],
            ["Could I get out of the taxi here?", "Tôi xuống taxi ở đây được không?"],
            ["She got in the taxi and closed the door.", "Cô ấy lên taxi và đóng cửa lại."],
            ["Wait! Do not get out of the car yet.", "Chờ đã! Đừng xuống xe vội."]
          ] }
      ],
      p: [
        "Với phương tiện lớn có thể đứng hoặc đi lại bên trong (xe buýt, tàu, máy bay) và phương tiện mình ngồi lên trên (xe máy, xe đạp), dùng **get on** để lên và **get off** để xuống.",
        "Với xe nhỏ phải cúi người chui vào (ô tô, taxi), dùng **get in** và **get out of**. Không dịch từng chữ “xuống” thành “get down”."
      ],
      ex: [["I get off the bus at the next stop.", "Tôi xuống xe buýt ở trạm sau."], ["Get out of the taxi here.", "Xuống taxi ở đây."]]
    },
    { h: "Nhờ tài xế lịch sự: Could you…, please?",
      f: ["Could you + động từ nguyên mẫu, please?", "Please + động từ nguyên mẫu", "Địa điểm + please"],
      items: [
        { f: "Could you + động từ nguyên mẫu, please?",
          mean: "**Anh / chị có thể… được không?** Cách nhờ người khác làm việc gì đó một cách lịch sự nhất.",
          parts: [
            ["Could you", "**anh / chị có thể… không**. Lịch sự hơn Can you."],
            ["động từ nguyên mẫu", "việc muốn nhờ: stop, wait, turn on, take me, open."],
            ["please", "**làm ơn**. Đặt ở cuối câu, trước dấu chấm hỏi, cho câu mềm hơn."]
          ],
          use: "nhờ tài xế taxi, xe ôm, nhân viên nhà ga. Dùng khi việc nhờ cần người kia chú ý hoặc thay đổi việc đang làm (dừng xe, đợi, bật điều hòa).",
          note: "Đây là câu hỏi về mặt hình thức nhưng thực chất là lời nhờ, nên trả lời là **Sure** hoặc **Of course**. Không nói “Could you to stop” hay “Could you stopping”.",
          ex: [
            ["Could you stop here, please?", "Anh dừng ở đây được không?"],
            ["Could you wait for five minutes, please?", "Anh đợi năm phút được không?"],
            ["Could you turn on the air conditioner, please?", "Anh bật điều hòa giúp tôi được không?"],
            ["Could you take me to this address, please?", "Anh đưa tôi đến địa chỉ này được không?"]
          ] },
        { f: "Please + động từ nguyên mẫu",
          mean: "**Làm ơn hãy…**. Câu yêu cầu ngắn nhưng vẫn lịch sự nhờ có please.",
          parts: [
            ["Please", "**làm ơn**. Đặt ở đầu câu (hoặc cuối câu) để câu mệnh lệnh không bị cộc."],
            ["động từ nguyên mẫu", "hành động: turn left, go straight, slow down, stop."]
          ],
          use: "chỉ đường nhanh cho tài xế khi xe đang chạy, cần câu ngắn, rõ. Bắt đầu thẳng bằng Please + động từ, không có chủ ngữ.",
          note: "So sánh mức độ: **Turn left.** (cộc) → **Please turn left.** (lịch sự, ngắn) → **Could you turn left, please?** (lịch sự nhất). Không bao giờ bỏ please khi nói với tài xế.",
          ex: [
            ["Please go straight.", "Anh cứ đi thẳng nhé."],
            ["Please slow down a little.", "Anh đi chậm lại một chút."],
            ["Please turn right after the bridge.", "Anh rẽ phải sau cây cầu nhé."],
            ["Please stop in front of the hotel.", "Anh dừng trước khách sạn nhé."]
          ] },
        { f: "Địa điểm + please",
          mean: "**Cho tôi đến… với.** Câu ngắn nhất để nói điểm đến khi lên taxi.",
          parts: [
            ["Địa điểm", "nơi muốn đến: the airport, the train station, Ben Thanh Market, this hotel."],
            ["please", "**làm ơn**. Không thể thiếu, vì câu không có động từ nên please làm câu lịch sự."]
          ],
          use: "ngay khi lên taxi hoặc mua vé, nói điểm đến. Có thể thêm **To** phía trước: To the airport, please.",
          note: "Câu chỉ có tên nơi (“Airport!”) nghe như ra lệnh. Đừng quên **the** trước các nơi chung như the airport, the station; tên riêng thì không cần the.",
          ex: [
            ["The airport, please.", "Cho tôi ra sân bay."],
            ["To the bus station, please.", "Cho tôi đến bến xe."],
            ["Hoan Kiem Lake, please.", "Cho tôi đến Hồ Hoàn Kiếm."],
            ["One ticket to Da Lat, please.", "Cho tôi một vé đi Đà Lạt."]
          ] }
      ],
      p: [
        "Nói chuyện với tài xế nên dùng **Could you…, please?** để nhờ, vì câu mệnh lệnh trống không nghe cộc và thiếu tôn trọng.",
        "Khi chỉ cần nói điểm đến, câu ngắn **Địa điểm + please** là đủ lịch sự (The train station, please). Khi chỉ hướng trên đường, dùng **Please + động từ nguyên mẫu**."
      ],
      ex: [["Could you drive a bit slower, please?", "Anh lái chậm hơn một chút được không?"], ["Please turn left at the next corner.", "Anh rẽ trái ở góc đường tới nhé."]]
    },
    { h: "Hiện tại đơn cho lịch trình cố định",
      f: ["Chủ ngữ + động từ (thêm -s) + at + giờ", "What time does + chủ ngữ + động từ nguyên mẫu?"],
      items: [
        { f: "Chủ ngữ + động từ (thêm -s) + at + giờ",
          mean: "**(xe, tàu, máy bay) chạy, đến lúc mấy giờ** theo lịch. Dùng thì hiện tại đơn dù chuyến đi ở tương lai.",
          parts: [
            ["chủ ngữ", "chuyến xe: the bus, the train, the flight, the ferry, the last metro."],
            ["động từ thêm -s", "leave**s** (khởi hành), arrive**s** (đến), depart**s** (khởi hành, trang trọng), open**s**, close**s**."],
            ["at + giờ", "**lúc**: at seven, at nine thirty, at 6 p.m."]
          ],
          use: "nói giờ trên lịch chạy, vé tàu, bảng giờ bay. Có thể thêm nơi đến: arrives **in** Hue (thành phố), arrives **at** the station (một địa điểm).",
          note: "Đừng dùng will cho lịch trình: nói **The train leaves at six**, không nói “The train will leave at six”. Chủ ngữ số nhiều thì không thêm -s: The buses leave every 15 minutes.",
          ex: [
            ["The last bus leaves at ten p.m.", "Chuyến xe buýt cuối cùng chạy lúc mười giờ tối."],
            ["Our flight arrives in Da Nang at two thirty.", "Chuyến bay của chúng tôi đến Đà Nẵng lúc hai giờ rưỡi."],
            ["The ferry does not leave at nine on Sundays.", "Chủ nhật phà không chạy lúc chín giờ."],
            ["The metro opens at five thirty in the morning.", "Tàu điện bắt đầu chạy lúc năm giờ rưỡi sáng."]
          ] },
        { f: "What time does + chủ ngữ + động từ nguyên mẫu?",
          mean: "**(chuyến xe) chạy, đến lúc mấy giờ?** Câu hỏi giờ theo lịch trình.",
          parts: [
            ["What time", "**mấy giờ**. Có thể thay bằng When (khi nào)."],
            ["does", "trợ động từ cho chủ ngữ số ít (the bus, the flight). Chủ ngữ số nhiều dùng **do**."],
            ["động từ nguyên mẫu", "leave, arrive, open, close, start: **không thêm -s** vì does đã mang -s."]
          ],
          use: "hỏi nhân viên nhà ga, quầy vé, tài xế về giờ chạy hoặc giờ đến. Trả lời bằng thì hiện tại đơn: It leaves at…",
          note: "Lỗi hay gặp: “What time does the bus leaves?” (thừa -s) hoặc “What time the bus leave?” (thiếu does).",
          ex: [
            ["What time does the next train leave?", "Chuyến tàu tiếp theo chạy lúc mấy giờ?"],
            ["What time does the bus arrive at the airport?", "Xe buýt đến sân bay lúc mấy giờ?"],
            ["What time does the ticket office open?", "Phòng bán vé mở cửa lúc mấy giờ?"],
            ["What time do the boats come back?", "Mấy giờ thuyền quay về?"]
          ] }
      ],
      p: [
        "Giờ tàu, giờ xe, giờ bay đã có trong lịch là chuyện cố định, nên dùng **thì hiện tại đơn** dù sự việc xảy ra trong tương lai. Dùng “will” ở đây nghe không tự nhiên.",
        "Chủ ngữ số ít (the flight, the bus) thì động từ thêm **-s**. Trong câu hỏi có **does**, động từ chính trở về nguyên mẫu."
      ],
      ex: [["The flight leaves at eight fifteen.", "Chuyến bay cất cánh lúc tám giờ mười lăm."], ["What time does the train arrive in Hue?", "Mấy giờ tàu đến Huế?"]]
    },
    { h: "How far, How long và It takes + thời gian",
      f: ["How far is it? → It is + khoảng cách", "How long does it take? → It takes + thời gian", "It takes + người + thời gian + to + động từ nguyên mẫu"],
      items: [
        { f: "How far is it? → It is + khoảng cách",
          mean: "**Bao xa? → Cách (bao nhiêu mét, cây số).** Hỏi và trả lời về **khoảng cách**.",
          parts: [
            ["How far", "**bao xa**. Hỏi độ dài quãng đường, không hỏi thời gian."],
            ["is it", "it chỉ quãng đường. Có thể thêm điểm đầu, điểm cuối: How far is it **from** here **to** the beach?"],
            ["It is + khoảng cách", "about 5 kilometers, 200 meters, not far, very far. Khi nói thường dùng It’s (It’s = It is)."]
          ],
          use: "hỏi đường, chọn đi bộ hay đi xe. Có thể thêm **away** sau khoảng cách: It is about two kilometers away.",
          note: "Không trả lời How far bằng thời gian (“It is ten minutes”) nếu người hỏi cần khoảng cách. Cũng không bỏ It is: nói **It is about 3 kilometers**, không chỉ nói “3 kilometers far”.",
          ex: [
            ["How far is it from here to the airport? It is about twelve kilometers.", "Từ đây ra sân bay bao xa? Khoảng mười hai cây số."],
            ["How far is the bus stop? It is only two hundred meters away.", "Trạm xe buýt bao xa? Chỉ cách hai trăm mét."],
            ["Is it far? No, it is not far.", "Có xa không? Không, không xa."],
            ["How far is your house from the city center?", "Nhà bạn cách trung tâm thành phố bao xa?"]
          ] },
        { f: "How long does it take? → It takes + thời gian",
          mean: "**Mất bao lâu? → Mất (bao nhiêu phút, tiếng).** Hỏi và trả lời về **thời gian di chuyển**.",
          parts: [
            ["How long", "**bao lâu**. Hỏi về thời gian."],
            ["does it take", "**mất**. Chủ ngữ là it, động từ take (trong câu hỏi giữ nguyên mẫu)."],
            ["It takes + thời gian", "câu trả lời: It takes twenty minutes, It takes about two hours. Takes thêm -s vì chủ ngữ là it."]
          ],
          use: "hỏi thời gian đi đường. Có thể thêm phương tiện và điểm đến: How long does it take **by bus**? How long does it take **to get to** the beach?",
          note: "Phân biệt rõ: **How far** hỏi khoảng cách (kilomet), **How long** hỏi thời gian (phút, giờ). Không trả lời “It is twenty minutes” cho câu How long does it take? mà nói **It takes twenty minutes**.",
          ex: [
            ["How long does it take by train? It takes about four hours.", "Đi tàu mất bao lâu? Mất khoảng bốn tiếng."],
            ["How long does it take to get to the beach?", "Đến bãi biển mất bao lâu?"],
            ["It takes ten minutes on foot.", "Đi bộ mất mười phút."],
            ["It does not take long by taxi.", "Đi taxi không mất nhiều thời gian."]
          ] },
        { f: "It takes + người + thời gian + to + động từ nguyên mẫu",
          mean: "**(ai đó) mất (bao lâu) để làm gì**. Câu nói cụ thể thời gian của một người.",
          parts: [
            ["It takes", "chủ ngữ luôn là **It**, động từ takes thêm -s (quá khứ: It took)."],
            ["người", "đặt sau takes, dạng tân ngữ: **me**, **you**, **him**, **her**, **us**, **them**, hoặc tên người."],
            ["thời gian", "twenty minutes, an hour, half an hour."],
            ["to + động từ nguyên mẫu", "việc làm: to get to work, to walk home, to drive there."]
          ],
          use: "kể quãng đường hằng ngày của bản thân hoặc người khác. Thứ tự cố định: It takes + **người** + **thời gian** + **to + động từ**.",
          note: "Người Việt hay nói “I take 30 minutes to go to school”. Câu đúng là **It takes me 30 minutes to get to school**. Dùng **me**, không dùng “I”, sau takes.",
          ex: [
            ["It takes me fifteen minutes to walk to the office.", "Tôi mất mười lăm phút đi bộ đến văn phòng."],
            ["It takes my wife an hour to drive to work.", "Vợ tôi mất một tiếng lái xe đi làm."],
            ["How long does it take you to get home?", "Bạn mất bao lâu để về nhà?"],
            ["It took us two hours to get to the airport because of the traffic jam.", "Chúng tôi mất hai tiếng mới đến sân bay vì kẹt xe."]
          ] }
      ],
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
