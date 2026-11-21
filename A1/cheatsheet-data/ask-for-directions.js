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
      items: [
        { f: "Where is + the + nơi chốn?",
          mean: "**… ở đâu?**: hỏi vị trí của **một** nơi mà bạn biết chắc là có tồn tại.",
          parts: [
            ["Where", "**ở đâu**: từ để hỏi về vị trí, đứng đầu câu."],
            ["is", "động từ be cho danh từ số ít, đứng **trước** nơi chốn. Khi nói thường rút gọn: Where’s…?"],
            ["the + nơi chốn", "dùng **the** vì đó là một nơi cụ thể cả hai cùng biết: the station, the post office."]
          ],
          use: "dùng khi bạn biết tên nơi cần đến và chỉ cần biết nó nằm ở đâu. Thêm **Excuse me** ở đầu để gây chú ý lịch sự.",
          note: "Lỗi hay gặp: “The station is where?” hoặc “Where the station?”. Đúng là **Where is the station?** (is đứng trước nơi chốn).",
          ex: [
            ["Excuse me, where is the train station?", "Xin lỗi, ga tàu ở đâu ạ?"],
            ["Where is the nearest bus stop?", "Trạm xe buýt gần nhất ở đâu?"],
            ["Where is Hoan Kiem Lake from here?", "Từ đây hồ Hoàn Kiếm ở đâu?"],
            ["Where is the bank? Is it far?", "Ngân hàng ở đâu? Có xa không?"]
          ] },
        { f: "Where are + nơi chốn số nhiều?",
          mean: "**những… ở đâu?**: giống Where is nhưng dùng khi nơi chốn ở **số nhiều**.",
          parts: [
            ["are", "dùng khi danh từ phía sau là số nhiều."],
            ["the toilets / the lifts", "**nhà vệ sinh, thang máy** ở nơi công cộng thường nói số nhiều."],
            ["the shops / the taxis", "**khu cửa hàng, chỗ đón taxi**."]
          ],
          use: "dùng trong trung tâm thương mại, sân bay, nhà ga khi hỏi những nơi có nhiều cái. Sau are là the + danh từ số nhiều.",
          note: "Chọn is hay are theo danh từ: **Where is the toilet?** nhưng **Where are the toilets?** Cả hai đều đúng, chỉ cần khớp số.",
          ex: [
            ["Excuse me, where are the toilets?", "Xin lỗi, nhà vệ sinh ở đâu ạ?"],
            ["Where are the lifts, please?", "Thang máy ở đâu vậy?"],
            ["Where are the food stalls in this market?", "Các quầy đồ ăn trong chợ này ở đâu?"],
            ["Where are the taxis? Are they outside?", "Chỗ đón taxi ở đâu? Ở bên ngoài à?"]
          ] },
        { f: "Is there a + danh từ + near here?",
          mean: "**gần đây có… không?**: hỏi xem quanh đây có **bất kỳ** nơi nào thuộc loại đó không.",
          parts: [
            ["Is there", "**có… không**: hỏi về sự tồn tại."],
            ["a + danh từ", "**một… nào đó**, chưa xác định: a pharmacy, an ATM (an trước nguyên âm)."],
            ["near here", "**gần đây**. Có thể thay bằng **around here** (quanh đây)."],
            ["Are there any…?", "dùng với số nhiều: Are there any restaurants near here?"]
          ],
          use: "dùng khi bạn cần một loại nơi chốn nào cũng được (hiệu thuốc, cây ATM, quán cà phê) mà không biết tên cụ thể. Trả lời: Yes, there is one… / No, there is not.",
          note: "Khác với Where is the…: **Where is the bank?** là bạn biết có một ngân hàng cụ thể; **Is there a bank near here?** là bạn chưa biết có ngân hàng nào không.",
          ex: [
            ["Is there a pharmacy near here?", "Gần đây có hiệu thuốc không?"],
            ["Is there an ATM around here?", "Quanh đây có cây ATM không?"],
            ["Are there any good restaurants near here?", "Gần đây có nhà hàng nào ngon không?"],
            ["Yes, there is one next to the hotel.", "Có, có một cái cạnh khách sạn."]
          ] },
        { f: "How do I get to + nơi chốn?",
          mean: "**làm sao để đến…?, đi đến… bằng cách nào?**: hỏi **cách đi**, đường đi, không chỉ vị trí.",
          parts: [
            ["How", "**như thế nào, bằng cách nào**."],
            ["do I get to", "**tôi đi đến**. Get to = arrive at, đến nơi."],
            ["Can you tell me the way to…?", "cách nói khác, nghĩa giống, nghe lịch sự hơn."]
          ],
          use: "dùng khi nơi đó hơi xa hoặc phải đi nhiều bước. Sau to là tên nơi chốn (the museum, Ben Thanh Market). Có thể thêm phương tiện: by bus, on foot.",
          note: "Với **home, here, there** thì bỏ to: How do I get **home**? / How do I get **there**? Không nói “get to there”.",
          ex: [
            ["How do I get to the city center?", "Làm sao để đến trung tâm thành phố?"],
            ["How do I get to the airport by bus?", "Đi xe buýt đến sân bay thế nào?"],
            ["Can you tell me the way to the museum?", "Bạn chỉ tôi đường đến bảo tàng được không?"],
            ["How do I get there from here?", "Từ đây tôi đến đó bằng cách nào?"]
          ] }
      ],
      p: [
        "Dùng **Where is the…?** khi bạn biết chắc nơi đó có tồn tại và chỉ cần biết vị trí. Nếu danh từ ở số nhiều (the toilets) thì đổi thành **Where are**.",
        "Dùng **Is there a… near here?** khi bạn chưa biết gần đó có nơi ấy hay không, ví dụ đang cần tìm bất kỳ hiệu thuốc nào.",
        "Dùng **How do I get to…?** khi muốn hỏi cách đi, không chỉ vị trí. Trong câu hỏi, động từ **is** phải đứng trước nơi chốn, không để ở cuối câu."
      ],
      ex: [["Where is the museum?", "Bảo tàng ở đâu?"], ["Is there a café near here?", "Gần đây có quán cà phê không?"]]
    },
    { h: "Câu mệnh lệnh để chỉ đường",
      f: ["Động từ nguyên mẫu + hướng hoặc nơi chốn", "Do not + động từ nguyên mẫu", "Please + động từ nguyên mẫu"],
      items: [
        { f: "Động từ nguyên mẫu + hướng hoặc nơi chốn",
          mean: "**câu mệnh lệnh chỉ đường**: bắt đầu bằng động từ, không có chủ ngữ, nói rõ người nghe phải làm gì.",
          parts: [
            ["go straight / go along", "**đi thẳng / đi dọc theo** (con đường)."],
            ["turn left / turn right", "**rẽ trái / rẽ phải**."],
            ["take", "**đi theo, rẽ vào** một con đường: take the second left (rẽ trái ở ngã thứ hai)."],
            ["cross", "**băng qua** đường, cầu: cross the street."],
            ["walk past", "**đi qua, đi ngang** một địa điểm: walk past the school."]
          ],
          use: "dùng khi chỉ đường từng bước. Nối các bước bằng **and** hoặc **then**. Không cần you ở đầu câu.",
          note: "Không nói “turn to left” hay “go straight on the road”. Chỉ cần **turn left**, **go straight**.",
          ex: [
            ["Go along this street and turn right at the traffic lights.", "Đi dọc con đường này và rẽ phải ở đèn giao thông."],
            ["Take the second left.", "Rẽ trái ở ngã thứ hai."],
            ["Cross the bridge, then walk past the church.", "Băng qua cầu, sau đó đi qua nhà thờ."],
            ["Go straight for two blocks.", "Đi thẳng hai dãy nhà."]
          ] },
        { f: "Do not + động từ nguyên mẫu",
          mean: "**đừng…**: câu mệnh lệnh phủ định, bảo người nghe không làm một việc gì đó.",
          parts: [
            ["Do not", "**đừng**. Khi nói thường rút gọn thành **Don’t**."],
            ["động từ nguyên mẫu", "việc không nên làm: turn, cross, take, go."]
          ],
          use: "dùng để cảnh báo khi chỉ đường, giúp người nghe tránh đi sai: Do not turn here. Đặt ở đầu câu.",
          note: "Không nói “No turn left” hay “Not cross”. Câu đúng: **Do not turn left**, **Do not cross here**.",
          ex: [
            ["Do not turn at the first corner.", "Đừng rẽ ở góc đường đầu tiên."],
            ["Do not take the bridge, it is closed.", "Đừng đi cầu đó, cầu đang đóng."],
            ["Do not cross here. Use the crosswalk.", "Đừng băng qua ở đây. Hãy đi vạch qua đường."],
            ["Don’t worry, it is not far.", "Đừng lo, không xa đâu."]
          ] },
        { f: "Please + động từ nguyên mẫu",
          mean: "**xin hãy…, làm ơn…**: câu mệnh lệnh lịch sự hơn nhờ thêm please.",
          parts: [
            ["Please + động từ", "please ở **đầu câu**: Please wait here."],
            ["động từ + …, please", "please ở **cuối câu**: Wait here, please. Nghĩa giống nhau."]
          ],
          use: "dùng khi nhờ hoặc hướng dẫn người khác một cách lịch sự, ví dụ nói với tài xế taxi, người lạ, khách du lịch.",
          note: "Please không biến câu thành câu hỏi, nên không lên giọng cuối câu. Với tài xế taxi, thêm please để lời yêu cầu không nghe như ra lệnh.",
          ex: [
            ["Please follow me.", "Mời bạn đi theo tôi."],
            ["Please stop here.", "Làm ơn dừng ở đây."],
            ["Please take me to this address.", "Làm ơn chở tôi đến địa chỉ này."],
            ["Turn left at the bank, please.", "Làm ơn rẽ trái ở ngân hàng."]
          ] }
      ],
      p: [
        "Khi chỉ đường, người bản xứ dùng **động từ nguyên mẫu đứng đầu câu**, không cần chủ ngữ “you”. Câu ngắn giúp người nghe dễ nhớ từng bước.",
        "Muốn bảo đừng làm gì, thêm **Do not** phía trước (khi nói thường rút gọn thành Don’t; Don’t = Do not). Muốn lịch sự hơn, thêm **Please** ở đầu câu.",
        "Nói “turn left”, không nói “turn to left”. Nối các bước bằng **then** (sau đó)."
      ],
      ex: [["Go straight, then turn left.", "Đi thẳng, sau đó rẽ trái."], ["Turn around, cross the street, and it is on your right.", "Quay lại, băng qua đường, nó ở bên phải bạn."]]
    },
    { h: "Giới từ chỉ vị trí",
      f: ["It is + next to / opposite / behind / in front of + nơi chốn", "It is between + nơi thứ nhất + and + nơi thứ hai", "It is on the corner"],
      items: [
        { f: "It is + next to / opposite / behind / in front of + nơi chốn",
          mean: "**nó ở cạnh / đối diện / phía sau / phía trước…**: mô tả vị trí so với một nơi dễ nhận ra.",
          parts: [
            ["next to", "**bên cạnh**, sát ngay bên."],
            ["opposite", "**đối diện**, ở bên kia đường. Người Mỹ hay nói **across from**."],
            ["behind", "**phía sau**, bị che bởi nơi kia."],
            ["in front of", "**phía trước**, ngay trước mặt nơi kia."],
            ["near", "**gần**, không nói rõ hướng."]
          ],
          use: "dùng ở cuối lời chỉ đường để người nghe nhận ra nơi cần đến. Sau giới từ là the + nơi chốn: next to the bank.",
          note: "Đừng thêm to sau opposite (“opposite to the park” ít dùng) và đừng quên of trong **in front of**. Next phải có **to**.",
          ex: [
            ["The pharmacy is next to the supermarket.", "Hiệu thuốc ở cạnh siêu thị."],
            ["The hotel is opposite the train station.", "Khách sạn ở đối diện ga tàu."],
            ["The car park is behind the hospital.", "Bãi đỗ xe ở phía sau bệnh viện."],
            ["Is the bus stop in front of the school?", "Trạm xe buýt có ở trước trường học không?"]
          ] },
        { f: "It is between + nơi thứ nhất + and + nơi thứ hai",
          mean: "**nó ở giữa… và…**: nơi cần tìm nằm giữa hai địa điểm khác.",
          parts: [
            ["between", "**ở giữa** hai nơi."],
            ["and", "nối hai nơi. Luôn đi cùng between."]
          ],
          use: "dùng khi nơi cần đến nằm kẹp giữa hai nơi dễ thấy. Sau between là nơi thứ nhất, rồi and, rồi nơi thứ hai.",
          note: "Đừng nói “between the bank with the shop” hay “between the bank or the shop”. Phải là **between … and …**.",
          ex: [
            ["The café is between the bookshop and the bakery.", "Quán cà phê ở giữa hiệu sách và tiệm bánh."],
            ["My house is between the park and the river.", "Nhà tôi ở giữa công viên và con sông."],
            ["Is it between the hotel and the bank?", "Nó ở giữa khách sạn và ngân hàng phải không?"],
            ["No, it is not between them. It is behind them.", "Không, nó không ở giữa mà ở phía sau."]
          ] },
        { f: "It is on the corner",
          mean: "**nó ở góc đường**: nơi đó nằm ngay chỗ hai con đường gặp nhau.",
          parts: [
            ["on the corner", "**ở góc đường**. Luôn dùng giới từ **on**."],
            ["on the corner of A and B", "**ở góc đường A và B**: on the corner of Le Loi and Nguyen Hue."],
            ["around the corner", "**ngay khúc quanh**, rẽ qua góc là thấy: rất gần."]
          ],
          use: "dùng khi nơi cần đến nằm ở ngã tư, ngã ba. Có thể nêu tên hai con đường sau of.",
          note: "Người Việt hay nói “in the corner”. **In the corner** là góc **trong** một căn phòng; ngoài đường dùng **on the corner**.",
          ex: [
            ["The bank is on the corner.", "Ngân hàng ở góc đường."],
            ["The bakery is on the corner of Hai Ba Trung Street and Ly Tu Trong Street.", "Tiệm bánh ở góc đường Hai Bà Trưng và Lý Tự Trọng."],
            ["The bus stop is just around the corner.", "Trạm xe buýt ở ngay khúc quanh."],
            ["Is the pharmacy on the corner?", "Hiệu thuốc có ở góc đường không?"]
          ] }
      ],
      p: [
        "Sau khi chỉ hướng, bạn cần nói nơi đó nằm cạnh cái gì để người nghe dễ nhận ra: **next to** (bên cạnh), **opposite / across from** (đối diện), **behind** (phía sau), **in front of** (phía trước).",
        "**between** luôn đi với hai nơi nối bằng **and**. Với góc đường dùng **on the corner**."
      ],
      ex: [["The bank is next to the school.", "Ngân hàng ở cạnh trường học."], ["It is between the bank and the shop.", "Nó ở giữa ngân hàng và cửa hàng."]]
    },
    { h: "Nói giờ bằng hai cách",
      f: ["It is + giờ + phút (It is three fifteen)", "It is + phút + past + giờ (từ phút 1 đến 30)", "It is + phút còn thiếu + to + giờ tiếp theo (từ phút 31 đến 59)", "It is + giờ + o’clock (giờ tròn)"],
      items: [
        { f: "It is + giờ + phút (It is three fifteen)",
          mean: "**bây giờ là … giờ … phút**: cách nói giờ dễ nhất, đọc số giờ rồi đọc số phút.",
          parts: [
            ["giờ", "đọc số giờ trước: seven, eleven."],
            ["phút", "đọc số phút sau: seven twenty (7:20), eleven forty-five (11:45)."],
            ["oh", "phút từ 01 đến 09 đọc số 0 là **oh**: 8:05 = eight oh five."]
          ],
          use: "dùng trong mọi tình huống, nhất là khi đọc giờ tàu xe, giờ trên điện thoại. Câu hỏi: What time is it?",
          note: "Đây là cách an toàn nhất cho người mới học. Đừng nói “It is three hours fifteen minutes”.",
          ex: [
            ["It is seven twenty.", "Bây giờ là bảy giờ hai mươi."],
            ["It is eight oh five.", "Bây giờ là tám giờ năm phút."],
            ["The bus comes at eleven forty-five.", "Xe buýt đến lúc mười một giờ bốn mươi lăm."],
            ["Is it two thirty already?", "Đã hai giờ ba mươi rồi à?"]
          ] },
        { f: "It is + phút + past + giờ (từ phút 1 đến 30)",
          mean: "**… giờ … phút** (qua bao nhiêu phút): nói số phút đã **qua** giờ đó.",
          parts: [
            ["past", "**qua**: ten past six = 6 giờ qua 10 phút = 6:10."],
            ["a quarter past", "**qua 15 phút**: a quarter past nine = 9:15."],
            ["half past", "**rưỡi, 30 phút**: half past four = 4:30."]
          ],
          use: "dùng cho phút từ 1 đến 30. Nói phút trước, giờ sau. Rất phổ biến trong tiếng Anh của người Anh.",
          note: "Thứ tự ngược với tiếng Việt: **phút trước, giờ sau**. “Half past three” là ba giờ rưỡi, không phải “nửa giờ trước ba giờ”.",
          ex: [
            ["It is ten past six.", "Bây giờ là sáu giờ mười."],
            ["It is a quarter past nine.", "Bây giờ là chín giờ mười lăm."],
            ["The shop opens at half past eight.", "Cửa hàng mở cửa lúc tám giờ rưỡi."],
            ["Is it twenty past five now?", "Bây giờ là năm giờ hai mươi phải không?"]
          ] },
        { f: "It is + phút còn thiếu + to + giờ tiếp theo (từ phút 31 đến 59)",
          mean: "**… giờ kém …**: nói còn thiếu bao nhiêu phút nữa là đến giờ tiếp theo.",
          parts: [
            ["to", "**kém**: ten to four = bốn giờ kém mười = 3:50."],
            ["a quarter to", "**kém 15 phút**: a quarter to eight = 7:45."],
            ["giờ tiếp theo", "luôn **cộng thêm một giờ** so với số trên đồng hồ: 3:50 → four."]
          ],
          use: "dùng cho phút từ 31 đến 59. Tính số phút còn thiếu (60 trừ số phút) rồi nói giờ kế tiếp.",
          note: "Lỗi hay gặp: nói 3:50 là “ten to three”. Đúng là **ten to four** vì còn 10 phút nữa là 4 giờ. Giống cách nói “bốn giờ kém mười” trong tiếng Việt.",
          ex: [
            ["It is twenty to eleven.", "Bây giờ là mười một giờ kém hai mươi."],
            ["The train leaves at a quarter to seven.", "Tàu rời ga lúc bảy giờ kém mười lăm."],
            ["It is five to twelve. Let’s go for lunch.", "Mười hai giờ kém năm rồi. Đi ăn trưa thôi."],
            ["Is it ten to nine or ten past nine?", "Bây giờ là chín giờ kém mười hay chín giờ mười?"]
          ] },
        { f: "It is + giờ + o’clock (giờ tròn)",
          mean: "**đúng … giờ**: dùng khi số phút là 00.",
          parts: [
            ["o’clock", "**giờ đúng**, chỉ dùng với giờ tròn: five o’clock."],
            ["a.m. / p.m.", "**a.m.** là buổi sáng (từ nửa đêm đến trưa), **p.m.** là chiều tối. Không dùng chung với o’clock."],
            ["noon / midnight", "**12 giờ trưa / 12 giờ đêm**."]
          ],
          use: "dùng khi nói giờ tròn, giờ hẹn, giờ mở cửa. Có thể bỏ o’clock khi nói nhanh: It is five.",
          note: "Không nói “five thirty o’clock” (o’clock chỉ đi với giờ tròn) và không nói “five o’clock p.m.”; chọn **five o’clock** hoặc **five p.m.**",
          ex: [
            ["It is nine o’clock.", "Bây giờ là chín giờ đúng."],
            ["The museum closes at six o’clock.", "Bảo tàng đóng cửa lúc sáu giờ."],
            ["Let’s meet at noon.", "Mình gặp nhau lúc mười hai giờ trưa nhé."],
            ["Is it ten o’clock yet?", "Đã mười giờ chưa?"]
          ] }
      ],
      p: [
        "Cách dễ nhất là **đọc số**: giờ trước, phút sau (3:15 là three fifteen). Phút có số 0 đứng trước thì đọc là “oh”: 3:05 là three oh five.",
        "Cách thứ hai dùng **past** (qua) và **to** (kém). Từ phút 1 đến 30 dùng past; từ phút 31 đến 59 dùng to và **cộng thêm một giờ**: 3:50 là ten to four. 15 phút là **a quarter**, 30 phút là **half**.",
        "Dùng **o’clock** chỉ với giờ tròn. Buổi sáng thêm **a.m.**, buổi chiều tối thêm **p.m.**; 12 giờ trưa là **noon**, 12 giờ đêm là **midnight**."
      ],
      ex: [["It is half past three.", "Ba giờ rưỡi."], ["It is ten to four.", "Bốn giờ kém mười."]]
    },
    { h: "Giới từ thời gian: at, in, on",
      f: ["at + giờ cụ thể", "in + buổi trong ngày", "on + thứ hoặc ngày"],
      items: [
        { f: "at + giờ cụ thể",
          mean: "**lúc…**: dùng với một **thời điểm chính xác** trên đồng hồ.",
          parts: [
            ["at + giờ", "at seven, at 8:30, at half past two."],
            ["at noon / at midnight", "**lúc 12 giờ trưa / 12 giờ đêm**."],
            ["at night / at the weekend", "hai cụm cố định cũng dùng at: **at night** (vào ban đêm)."]
          ],
          use: "dùng khi nói giờ hẹn, giờ tàu xe, giờ mở cửa. At đứng ngay trước giờ, thường ở cuối câu.",
          note: "Không nói “in 7 o’clock” hay “on 7 o’clock”. Mẹo: điểm nhỏ nhất, chính xác nhất → **at**.",
          ex: [
            ["The museum opens at nine.", "Bảo tàng mở cửa lúc chín giờ."],
            ["Let’s meet at the station at half past five.", "Gặp nhau ở ga lúc năm giờ rưỡi nhé."],
            ["The streets are quiet at night.", "Đường phố yên tĩnh vào ban đêm."],
            ["Does the last bus leave at midnight?", "Chuyến xe buýt cuối có chạy lúc nửa đêm không?"]
          ] },
        { f: "in + buổi trong ngày",
          mean: "**vào buổi…**: dùng với một khoảng thời gian dài hơn trong ngày.",
          parts: [
            ["in the morning", "**vào buổi sáng**."],
            ["in the afternoon", "**vào buổi chiều**."],
            ["in the evening", "**vào buổi tối** (khoảng từ 6 giờ đến lúc đi ngủ)."]
          ],
          use: "dùng khi không nói giờ chính xác mà chỉ nói buổi. Luôn có **the**: in the morning.",
          note: "Ngoại lệ: **at night** (không phải in the night). Và khi có this, tomorrow thì bỏ in: **this morning**, **tomorrow afternoon**.",
          ex: [
            ["The market is busy in the morning.", "Chợ đông vào buổi sáng."],
            ["I usually go for a walk in the evening.", "Tôi thường đi dạo vào buổi tối."],
            ["Is the shop open in the afternoon?", "Cửa hàng có mở vào buổi chiều không?"],
            ["The tour starts at eight in the morning.", "Chuyến tham quan bắt đầu lúc tám giờ sáng."]
          ] },
        { f: "on + thứ hoặc ngày",
          mean: "**vào thứ…, vào ngày…**: dùng với thứ trong tuần và ngày cụ thể.",
          parts: [
            ["on + thứ", "on Monday, on Sunday. Thứ trong tuần luôn viết hoa."],
            ["on + ngày", "on May 2nd, on my birthday."],
            ["on + thứ + buổi", "on Friday evening, on Saturday morning (vẫn dùng on)."]
          ],
          use: "dùng khi nói lịch mở cửa, lịch hẹn theo thứ hoặc ngày. On đứng ngay trước thứ hoặc ngày.",
          note: "Khi đã có thứ trong cụm thì dùng **on**, không dùng in: **on Monday morning**, không nói “in Monday morning”.",
          ex: [
            ["The bank is closed on Sunday.", "Ngân hàng đóng cửa vào Chủ nhật."],
            ["Let’s visit the museum on Friday afternoon.", "Mình đi bảo tàng vào chiều thứ Sáu nhé."],
            ["The night market opens on Friday and Saturday.", "Chợ đêm mở vào thứ Sáu và thứ Bảy."],
            ["Is the post office open on Saturday?", "Bưu điện có mở cửa thứ Bảy không?"]
          ] }
      ],
      p: [
        "Dùng **at** cho một thời điểm chính xác trên đồng hồ: at seven thirty, at noon. Dùng **in** cho một khoảng dài hơn trong ngày: in the morning, in the afternoon, in the evening.",
        "Dùng **on** cho thứ trong tuần và ngày cụ thể: on Monday, on Saturday. Mẹo nhớ: khoảng càng nhỏ và chính xác thì dùng at."
      ],
      ex: [["The bus leaves at seven thirty.", "Xe buýt chạy lúc bảy giờ ba mươi."], ["The shop opens on Monday.", "Cửa hàng mở cửa vào thứ Hai."]]
    },
    { h: "Hỏi giờ của lịch trình: What time does…?",
      f: ["What time does + chủ ngữ số ít + động từ nguyên mẫu?", "When does + chủ ngữ + động từ nguyên mẫu?", "Chủ ngữ + động từ thêm -s + at + giờ"],
      items: [
        { f: "What time does + chủ ngữ số ít + động từ nguyên mẫu?",
          mean: "**… lúc mấy giờ?**: hỏi giờ chính xác của một lịch trình cố định.",
          parts: [
            ["What time", "**mấy giờ**: câu trả lời là một giờ cụ thể (at seven)."],
            ["does", "trợ động từ cho chủ ngữ số ít (the bus, the museum, it)."],
            ["do", "dùng cho chủ ngữ số nhiều: What time do the shops open?"],
            ["động từ nguyên mẫu", "start, leave, open, close, arrive: **không** thêm -s vì đã có does."]
          ],
          use: "hỏi giờ tàu xe, giờ mở cửa, giờ phim chiếu. Câu trả lời: chủ ngữ + động từ thêm -s + at + giờ.",
          note: "Lỗi hay gặp: “What time does the bus leaves?”. Có does rồi thì động từ quay về nguyên mẫu: **leave**.",
          ex: [
            ["What time does the next train leave?", "Chuyến tàu tiếp theo chạy lúc mấy giờ?"],
            ["What time does the museum close?", "Bảo tàng đóng cửa lúc mấy giờ?"],
            ["What time do the shops open on Sunday?", "Chủ nhật các cửa hàng mở lúc mấy giờ?"],
            ["What time does the bus arrive in Da Lat?", "Xe buýt đến Đà Lạt lúc mấy giờ?"]
          ] },
        { f: "When does + chủ ngữ + động từ nguyên mẫu?",
          mean: "**khi nào…?**: hỏi thời gian một cách chung hơn, câu trả lời có thể là giờ, ngày hoặc buổi.",
          parts: [
            ["When", "**khi nào**: trả lời có thể là at nine, on Monday, in the morning."],
            ["What time", "**mấy giờ**: chỉ hỏi giờ chính xác. Hẹp hơn when."],
            ["does / do", "does với chủ ngữ số ít, do với chủ ngữ số nhiều."]
          ],
          use: "dùng khi bạn muốn biết lúc nào sự việc diễn ra mà không cần giờ chính xác. Động từ chính ở dạng nguyên mẫu.",
          note: "Khi cần đúng giờ để đi tàu, đi xe, hãy dùng **What time** cho rõ. When dễ nhận câu trả lời chung chung như “in the evening”.",
          ex: [
            ["When does the night market open?", "Khi nào chợ đêm mở cửa?"],
            ["When does the festival start?", "Khi nào lễ hội bắt đầu?"],
            ["When do the buses stop running?", "Khi nào xe buýt ngừng chạy?"],
            ["When does the tour finish? In the afternoon.", "Chuyến tham quan kết thúc khi nào? Vào buổi chiều."]
          ] },
        { f: "Chủ ngữ + động từ thêm -s + at + giờ",
          mean: "**… lúc … giờ**: câu trả lời về lịch trình, dùng thì hiện tại đơn.",
          parts: [
            ["chủ ngữ số ít + động từ thêm -s", "The train leaves, It starts, The shop opens."],
            ["chủ ngữ số nhiều + động từ nguyên mẫu", "The shops open, The buses leave (không thêm -s)."],
            ["at + giờ", "giờ cụ thể luôn đi với **at**."]
          ],
          use: "dùng để trả lời câu What time does…? hoặc để báo lịch cố định, kể cả việc sẽ xảy ra trong tương lai (giờ tàu ngày mai).",
          note: "Lịch trình cố định dùng **thì hiện tại đơn**, không dùng will: “The train leaves at six tomorrow”, không nói “The train will leave”.",
          ex: [
            ["The museum opens at eight thirty.", "Bảo tàng mở cửa lúc tám giờ ba mươi."],
            ["The last bus leaves at eleven p.m.", "Chuyến xe buýt cuối chạy lúc mười một giờ tối."],
            ["The film starts at a quarter to eight.", "Phim bắt đầu lúc tám giờ kém mười lăm."],
            ["The shops do not close at six on Saturday.", "Thứ Bảy các cửa hàng không đóng cửa lúc sáu giờ."]
          ] }
      ],
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
