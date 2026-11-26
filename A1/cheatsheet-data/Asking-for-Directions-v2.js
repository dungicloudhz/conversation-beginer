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
      items: [
        { f: "Do you know + từ để hỏi + chủ ngữ + động từ?",
          mean: "**bạn có biết… không?**: câu hỏi gián tiếp, hỏi xem người kia có biết thông tin hay không, nghe lịch sự hơn hỏi thẳng.",
          parts: [
            ["Do you know", "**bạn có biết**: phần mở đầu, là một câu hỏi có hoặc không."],
            ["từ để hỏi", "where (ở đâu), how (cách nào), how far (bao xa), which (cái nào), what time (mấy giờ)."],
            ["chủ ngữ + động từ", "phần sau trở về **trật tự câu thường**: where the bank **is**, không phải where is the bank."]
          ],
          use: "dùng khi hỏi đường người lạ ngoài phố. Mở đầu bằng **Excuse me**. Câu kết thúc bằng dấu hỏi vì Do you know là câu hỏi.",
          note: "Lỗi rất hay gặp: “Do you know where is the bank?”. Đúng là **Do you know where the bank is?** Với do / does trong câu gốc thì bỏ đi: Where does the bus stop? → Do you know where the bus **stops**?",
          ex: [
            ["Excuse me, do you know where the subway station is?", "Xin lỗi, bạn có biết ga tàu điện ngầm ở đâu không?"],
            ["Do you know how far the beach is?", "Bạn có biết bãi biển cách bao xa không?"],
            ["Do you know which bus goes to the airport?", "Bạn có biết xe buýt nào đi sân bay không?"],
            ["Do you know what time the museum opens?", "Bạn có biết bảo tàng mở cửa lúc mấy giờ không?"]
          ] },
        { f: "Could you tell me + từ để hỏi + chủ ngữ + động từ?",
          mean: "**bạn có thể cho tôi biết… không?**: câu hỏi gián tiếp lịch sự nhất, dùng khi nhờ người lạ chỉ đường.",
          parts: [
            ["Could you tell me", "**bạn cho tôi biết… được không**: lịch sự hơn Do you know."],
            ["Can you tell me", "nghĩa giống, thân mật hơn một chút."],
            ["từ để hỏi + chủ ngữ + động từ", "trật tự câu thường: how I get to the hotel, where the toilets are."],
            ["the way to + nơi chốn", "cách nói ngắn không cần từ để hỏi: Could you tell me the way to the park?"]
          ],
          use: "dùng với người lạ, nhân viên quầy thông tin, cảnh sát. Thêm please ở cuối để lịch sự hơn.",
          note: "Đừng đảo động từ lên trước chủ ngữ: không nói “Could you tell me where is the hotel?”. Đúng là **where the hotel is**.",
          ex: [
            ["Could you tell me where the nearest hospital is?", "Bạn cho tôi biết bệnh viện gần nhất ở đâu được không?"],
            ["Could you tell me how I get to the old town?", "Bạn chỉ tôi cách đến khu phố cổ được không?"],
            ["Can you tell me the way to the bus station, please?", "Bạn chỉ tôi đường đến bến xe buýt được không?"],
            ["Could you tell me how long it takes on foot?", "Bạn cho tôi biết đi bộ mất bao lâu được không?"]
          ] }
      ],
      p: [
        "Câu hỏi gián tiếp lịch sự hơn câu hỏi trực tiếp, vì bạn không hỏi thẳng mà hỏi xem người kia có biết hay không. Rất hợp khi hỏi đường người lạ.",
        "Khi câu hỏi nằm bên trong **Do you know…** hoặc **Could you tell me…**, phần phía sau trở lại **trật tự câu thường**: chủ ngữ đứng trước, động từ đứng sau. Vì vậy “where is the bank” trở thành **where the bank is**.",
        "Nếu từ để hỏi chính là chủ ngữ (which bus), trật tự không đổi: Do you know which bus goes there?"
      ],
      ex: [["Do you know where the bank is?", "Bạn có biết ngân hàng ở đâu không?"], ["Could you tell me how far it is?", "Bạn cho tôi biết chỗ đó bao xa được không?"]]
    },
    { h: "Từ nối trình tự, mệnh đề when và until",
      f: ["First, … Then, … After that, … Finally, …", "When you see + mốc, + động từ nguyên mẫu", "Động từ nguyên mẫu + until you + động từ nguyên mẫu"],
      items: [
        { f: "First, … Then, … After that, … Finally, …",
          mean: "**trước tiên… sau đó… tiếp theo… cuối cùng…**: các từ nối giúp sắp xếp lời chỉ đường theo thứ tự từng bước.",
          parts: [
            ["First", "**trước tiên**: bước đầu tiên."],
            ["Then", "**sau đó**: bước tiếp theo, dùng nhiều lần cũng được."],
            ["After that", "**sau đó nữa, tiếp theo**: giống then, dùng để đổi từ cho đỡ lặp."],
            ["Finally", "**cuối cùng**: bước cuối, thường kèm câu nói nơi đó ở đâu."]
          ],
          use: "đặt ở **đầu mỗi câu**, sau đó có dấu phẩy, rồi đến câu mệnh lệnh: First, go straight. Khi nghe chỉ đường, hãy đếm các từ này để biết còn bao nhiêu bước.",
          note: "Finally nghĩa là “bước cuối cùng”, không có nghĩa “cuối cùng thì cũng” (at last). Đừng dùng finally cho bước đầu hay bước giữa.",
          ex: [
            ["First, walk to the end of this street.", "Trước tiên, đi bộ đến cuối con đường này."],
            ["Then, turn left at the post office.", "Sau đó, rẽ trái ở bưu điện."],
            ["After that, go past the park.", "Tiếp theo, đi qua công viên."],
            ["Finally, the hotel is on your right.", "Cuối cùng, khách sạn ở bên phải bạn."]
          ] },
        { f: "When you see + mốc, + động từ nguyên mẫu",
          mean: "**khi bạn thấy…, hãy…**: gắn một hành động với một mốc dễ nhận ra trên đường.",
          parts: [
            ["When you see", "**khi bạn nhìn thấy**: phần nêu mốc, dùng thì hiện tại đơn."],
            ["mốc", "một nơi dễ thấy: a big supermarket, the traffic lights, a red building."],
            ["động từ nguyên mẫu", "việc phải làm lúc đó: turn right, stop, cross the road."],
            ["When you get to / reach", "**khi bạn đến**: dùng khi mốc là một nơi phải đi tới."]
          ],
          use: "dùng trong lời chỉ đường dài để người nghe không bỏ lỡ chỗ rẽ. Có dấu phẩy sau phần when. Có thể đảo lại: Turn right when you see the bank (lúc này không cần dấu phẩy).",
          note: "Sau when dùng thì hiện tại đơn dù việc đó xảy ra sau: không nói “When you will see”. Đúng là **When you see**.",
          ex: [
            ["When you see the traffic lights, turn left.", "Khi bạn thấy đèn giao thông thì rẽ trái."],
            ["When you see a big red building, stop there.", "Khi thấy một tòa nhà lớn màu đỏ thì dừng lại ở đó."],
            ["When you get to the river, cross the bridge.", "Khi bạn đến con sông thì băng qua cầu."],
            ["Turn right when you see the petrol station.", "Rẽ phải khi bạn thấy trạm xăng."]
          ] },
        { f: "Động từ nguyên mẫu + until you + động từ nguyên mẫu",
          mean: "**cứ… cho đến khi bạn…**: tiếp tục làm một việc và dừng lại khi đến một điểm nhất định.",
          parts: [
            ["until", "**cho đến khi**: chỉ điểm dừng."],
            ["until you reach / get to", "**cho đến khi bạn tới** một nơi."],
            ["until you see", "**cho đến khi bạn nhìn thấy** một mốc."],
            ["keep + động từ thêm -ing", "**cứ tiếp tục**: Keep walking, keep going. Hay đi với until."]
          ],
          use: "dùng khi phải đi thẳng một đoạn dài mà không biết chính xác bao nhiêu mét. Phần trước until là câu mệnh lệnh, phần sau dùng thì hiện tại đơn.",
          note: "Không nói “until you will reach”. Và until khác **when**: until là đi **đến lúc** gặp mốc thì dừng; when là **lúc** gặp mốc thì làm việc khác.",
          ex: [
            ["Go straight until you reach the roundabout.", "Đi thẳng cho đến khi tới vòng xuyến."],
            ["Keep walking until you see a church.", "Cứ đi bộ tiếp cho đến khi thấy nhà thờ."],
            ["Follow this road until you get to the market.", "Đi theo con đường này đến khi tới chợ."],
            ["Do not turn until you pass the second bridge.", "Đừng rẽ cho đến khi đi qua cây cầu thứ hai."]
          ] }
      ],
      p: [
        "Lời chỉ đường dài có nhiều bước. Các từ **First, Then, After that, Finally** giúp người nghe biết đang ở bước nào. Khi nghe, hãy chú ý những từ nối này và các con số (second left, two blocks).",
        "Dùng **When you see…** để gắn một hành động với một mốc dễ thấy. Dùng **until you reach / until you get to** để nói đi tiếp đến khi nào thì dừng.",
        "Sau **when** và **until**, dùng thì hiện tại đơn dù hành động xảy ra trong tương lai. Không nói “When you will see”."
      ],
      ex: [["First, go straight. Then, turn right. After that, cross the bridge.", "Trước tiên đi thẳng. Sau đó rẽ phải. Tiếp theo băng qua cầu."], ["Keep walking until you get to the corner.", "Cứ đi bộ tiếp cho đến khi tới góc đường."]]
    },
    { h: "at / on / in với địa chỉ",
      f: ["at + số nhà + tên đường", "on + tên đường (không có số nhà)", "in + ngõ / quận / thành phố / đất nước"],
      items: [
        { f: "at + số nhà + tên đường",
          mean: "**ở số nhà … đường …**: địa chỉ có số nhà cụ thể là một điểm chính xác, nên dùng **at**.",
          parts: [
            ["at", "dùng với một **điểm cụ thể**: có số nhà."],
            ["số nhà + tên đường", "số đứng trước tên đường: 25 Ly Thuong Kiet Street."],
            ["Street / Road / Avenue", "**phố / đường / đại lộ**, đứng **sau** tên riêng và viết hoa."]
          ],
          use: "dùng khi nói hoặc hỏi địa chỉ đầy đủ: The hotel is at 12 Hang Gai Street. Hỏi lại: What number is it?",
          note: "Tiếng Việt nói “đường Lý Thường Kiệt”, tiếng Anh đặt Street sau tên: **Ly Thuong Kiet Street**. Có số nhà thì dùng **at**, không dùng on.",
          ex: [
            ["The restaurant is at 45 Le Loi Street.", "Nhà hàng ở số 45 đường Lê Lợi."],
            ["I live at 8 Tran Phu Road.", "Tôi sống ở số 8 đường Trần Phú."],
            ["Is the hostel at 20 or 22 Hang Bac Street?", "Nhà nghỉ ở số 20 hay 22 phố Hàng Bạc?"],
            ["The office is not at 15, it is at 51.", "Văn phòng không phải ở số 15, mà ở số 51."]
          ] },
        { f: "on + tên đường (không có số nhà)",
          mean: "**trên đường…, ở phố…**: chỉ nói tên đường, không có số nhà, nên dùng **on**.",
          parts: [
            ["on", "nơi đó nằm **trên** con đường."],
            ["on the left / right side of the street", "**ở phía bên trái / phải của đường**."],
            ["on the corner", "**ở góc đường**, cũng dùng on."]
          ],
          use: "dùng khi chỉ biết tên đường hoặc khi muốn nói nhanh vị trí. Thường đi sau is / are.",
          note: "Có số nhà → **at**; chỉ có tên đường → **on**. Không nói “in Le Loi Street” (người Anh đôi khi nói vậy, nhưng on là an toàn nhất).",
          ex: [
            ["The bookshop is on Trang Tien Street.", "Hiệu sách ở phố Tràng Tiền."],
            ["There are many cafés on this street.", "Có nhiều quán cà phê trên con đường này."],
            ["Is the bank on Nguyen Hue Street?", "Ngân hàng có ở đường Nguyễn Huệ không?"],
            ["It is on the left side of the street.", "Nó ở phía bên trái của đường."]
          ] },
        { f: "in + ngõ / quận / thành phố / đất nước",
          mean: "**ở trong…**: khu vực rộng có ranh giới, nơi cần tìm nằm **bên trong** khu vực đó.",
          parts: [
            ["in + ngõ, hẻm", "in Alley 15, in a small lane."],
            ["in + quận, khu", "in District 1, in the Old Quarter."],
            ["in + thành phố, đất nước", "in Hanoi, in Da Nang, in Vietnam."]
          ],
          use: "dùng khi nói nơi đó thuộc khu vực nào. Thường đứng sau địa chỉ chi tiết: on Hang Bai Street, in Hanoi.",
          note: "Thứ tự trong tiếng Anh đi **từ nhỏ đến lớn**: số nhà → đường → quận → thành phố, giống tiếng Việt khi viết địa chỉ.",
          ex: [
            ["My hotel is in the Old Quarter.", "Khách sạn của tôi ở khu phố cổ."],
            ["The shop is in Alley 42, off Kim Ma Street.", "Cửa hàng ở ngõ 42, rẽ vào từ phố Kim Mã."],
            ["Ben Thanh Market is in District 1.", "Chợ Bến Thành ở Quận 1."],
            ["Is the museum in this district?", "Bảo tàng có ở quận này không?"]
          ] }
      ],
      p: [
        "Giới từ đi theo độ chính xác của địa chỉ. Có số nhà là một điểm cụ thể nên dùng **at**. Chỉ có tên đường thì dùng **on**, vì ngôi nhà nằm “trên” con đường.",
        "Khu vực rộng có ranh giới như ngõ, quận, thành phố, đất nước thì dùng **in**, vì nơi đó nằm “bên trong” khu vực ấy."
      ],
      ex: [["The hotel is on Hang Bai Street, in Hanoi.", "Khách sạn ở phố Hàng Bài, Hà Nội."], ["It is in Ba Dinh District.", "Nó ở quận Ba Đình."]]
    },
    { h: "Xác nhận bằng So…?, …, right? và Did you say…?",
      f: ["So + câu khẳng định + ? (lên giọng cuối câu)", "Câu khẳng định + , right?", "Did you say + lựa chọn thứ nhất + or + lựa chọn thứ hai?"],
      items: [
        { f: "So + câu khẳng định + ? (lên giọng cuối câu)",
          mean: "**vậy là…?**: nhắc lại, tóm tắt những gì vừa nghe để kiểm tra mình hiểu đúng chưa.",
          parts: [
            ["So", "**vậy là, như vậy**: mở đầu phần tóm tắt."],
            ["câu khẳng định", "giữ trật tự câu thường, không đảo động từ: So I turn left."],
            ["lên giọng", "lên giọng ở cuối câu để biến câu khẳng định thành câu hỏi."]
          ],
          use: "dùng ngay sau khi nghe chỉ đường. Có thể nhắc lại từng bước: So I go straight, then turn right? Người kia sẽ trả lời Yes, that’s right hoặc sửa lại.",
          note: "Không cần do / does như câu hỏi thông thường; chỉ cần ngữ điệu lên giọng. Đây là cách người bản xứ hay dùng nhất khi kiểm tra lại.",
          ex: [
            ["So I take the second right?", "Vậy là tôi rẽ phải ở ngã thứ hai?"],
            ["So the station is about ten minutes from here?", "Vậy là ga tàu cách đây khoảng mười phút?"],
            ["So I cross the bridge and then turn left?", "Vậy là tôi qua cầu rồi rẽ trái?"],
            ["So it is not on this street?", "Vậy là nó không ở con đường này?"]
          ] },
        { f: "Câu khẳng định + , right?",
          mean: "**…, đúng không?**: thêm right ở cuối để hỏi xác nhận một thông tin bạn khá chắc.",
          parts: [
            [", right?", "**đúng không?**: thân mật, rất phổ biến."],
            [", isn’t it?", "**phải không?**: câu hỏi đuôi, phải đổi theo động từ của câu (isn’t it, don’t I). Luôn dùng dạng rút gọn, không nói “is not it”."],
            ["Is that right?", "**đúng vậy chứ?**: hỏi riêng thành một câu."]
          ],
          use: "dùng khi bạn gần như chắc chắn và chỉ muốn người kia xác nhận. Có dấu phẩy trước right và lên giọng ở right.",
          note: "Câu hỏi đuôi (isn’t it, don’t I) khó với người mới học. **, right?** dùng được với mọi câu, không cần đổi động từ, nên là lựa chọn an toàn.",
          ex: [
            ["The museum is open today, right?", "Hôm nay bảo tàng mở cửa, đúng không?"],
            ["I turn left at the bank, right?", "Tôi rẽ trái ở ngân hàng, đúng không?"],
            ["It is about five minutes on foot, isn’t it?", "Đi bộ khoảng năm phút, phải không?"],
            ["Bus 32 goes to the zoo. Is that right?", "Xe buýt số 32 đi đến sở thú. Đúng vậy chứ?"]
          ] },
        { f: "Did you say + lựa chọn thứ nhất + or + lựa chọn thứ hai?",
          mean: "**bạn vừa nói… hay…?**: hỏi lại khi nghe không rõ giữa hai thông tin dễ nhầm.",
          parts: [
            ["Did you say", "**bạn vừa nói**: dùng thì quá khứ vì người kia đã nói xong."],
            ["or", "**hay là**: đưa ra hai lựa chọn để người kia chọn một."],
            ["Sorry, did you say…?", "thêm Sorry ở đầu cho nhẹ nhàng."]
          ],
          use: "dùng khi nghe số dễ nhầm (fifteen / fifty, thirteen / thirty), trái / phải, tên đường gần giống nhau. Người kia chỉ cần trả lời bằng một từ.",
          note: "Những cặp số hay nghe nhầm: **thirteen / thirty**, **fifteen / fifty**. Đuôi -teen nhấn ở cuối (fif**teen**), đuôi -ty nhấn ở đầu (**fif**ty).",
          ex: [
            ["Did you say left or right?", "Bạn vừa nói rẽ trái hay rẽ phải?"],
            ["Sorry, did you say fifteen or fifty?", "Xin lỗi, bạn nói mười lăm hay năm mươi?"],
            ["Did you say the first street or the third street?", "Bạn nói con đường thứ nhất hay thứ ba?"],
            ["Did you say bus 13 or bus 30?", "Bạn nói xe buýt số 13 hay số 30?"]
          ] }
      ],
      p: [
        "Nhắc lại lời chỉ đường để kiểm tra là thói quen tốt: nếu bạn hiểu sai, người kia sẽ sửa ngay. Dùng **So…?** để tóm tắt những gì vừa nghe, và lên giọng ở cuối câu.",
        "Thêm **, right?** vào cuối câu khẳng định để hỏi “đúng không?”. Khi không chắc giữa hai thông tin, dùng **Did you say A or B?** để người kia chỉ cần chọn một."
      ],
      ex: [["So it is on the left?", "Vậy là nó ở bên trái?"], ["It is near the lake, right?", "Nó ở gần hồ, đúng không?"]]
    },
    { h: "Số thứ tự cho tầng, cửa và ngã rẽ",
      f: ["on the + số thứ tự + floor", "the + số thứ tự + door / room + on the left / right", "take the + số thứ tự + left / right"],
      items: [
        { f: "on the + số thứ tự + floor",
          mean: "**ở tầng thứ…**: nói vị trí theo tầng trong một tòa nhà.",
          parts: [
            ["on", "tầng luôn đi với giới từ **on**."],
            ["the", "bắt buộc có **the** trước số thứ tự."],
            ["số thứ tự", "first, second, third, fourth, fifth… (thứ nhất, thứ hai…)."],
            ["ground floor", "**tầng trệt** (cách nói của người Anh); người Mỹ gọi tầng trệt là **first floor**."]
          ],
          use: "dùng trong trung tâm thương mại, khách sạn, bệnh viện, văn phòng. Câu hỏi: Which floor is it on?",
          note: "Không nói “in floor three” hay “on floor third”. Đúng là **on the third floor**. Chú ý: người Anh và người Mỹ đếm tầng khác nhau.",
          ex: [
            ["The toilets are on the second floor.", "Nhà vệ sinh ở tầng hai."],
            ["Which floor is the restaurant on?", "Nhà hàng ở tầng mấy?"],
            ["My room is on the fifth floor.", "Phòng tôi ở tầng năm."],
            ["The pharmacy is not on the ground floor, it is on the first floor.", "Hiệu thuốc không ở tầng trệt, mà ở tầng một."]
          ] },
        { f: "the + số thứ tự + door / room + on the left / right",
          mean: "**cánh cửa / căn phòng thứ… bên trái / bên phải**: chỉ chính xác vị trí trong một hành lang.",
          parts: [
            ["the + số thứ tự", "the first, the second, the last (cuối cùng)."],
            ["door / room", "**cửa / phòng**: danh từ số ít."],
            ["on the left / on the right", "**bên trái / bên phải**, luôn có on the."]
          ],
          use: "dùng khi chỉ đường trong tòa nhà, sau khi đã nói tầng: It is on the third floor, the second door on the right.",
          note: "Đừng nói “the door two” hay “second door left”. Đầy đủ là **the second door on the left**.",
          ex: [
            ["The office is the first door on the right.", "Văn phòng là cánh cửa đầu tiên bên phải."],
            ["Room 204 is the third room on the left.", "Phòng 204 là phòng thứ ba bên trái."],
            ["Is it the last door on the right?", "Có phải là cánh cửa cuối cùng bên phải không?"],
            ["Go upstairs. It is the second door on the left.", "Đi lên lầu. Đó là cánh cửa thứ hai bên trái."]
          ] },
        { f: "take the + số thứ tự + left / right",
          mean: "**rẽ trái / phải ở ngã rẽ thứ…**: chỉ đường bằng cách đếm số ngã rẽ.",
          parts: [
            ["take", "**đi theo, rẽ vào**: ở đây nghĩa là rẽ."],
            ["the first / second / third", "**ngã rẽ thứ nhất / thứ hai / thứ ba**."],
            ["left / right", "**bên trái / bên phải**: ở đây left, right là danh từ, nghĩa là ngã rẽ trái, ngã rẽ phải."]
          ],
          use: "dùng khi chỉ đường ngoài phố có nhiều ngã rẽ. Có thể thêm then để nối các bước: Take the first left, then the second right.",
          note: "Đây là cách nói ngắn của **take the second turning on the left**. Không cần thêm turn sau take: không nói “take the second turn left”.",
          ex: [
            ["Take the second right.", "Rẽ phải ở ngã thứ hai."],
            ["Take the first left after the bridge.", "Rẽ trái ở ngã đầu tiên sau cây cầu."],
            ["Do I take the third left or the third right?", "Tôi rẽ trái hay rẽ phải ở ngã thứ ba?"],
            ["Take the first right, then the second left.", "Rẽ phải ở ngã đầu tiên, rồi rẽ trái ở ngã thứ hai."]
          ] }
      ],
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