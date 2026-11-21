/* Cheat sheet: Plans for Tomorrow (Ngày mai làm gì). Hiển thị bởi cheatsheet.js. */
window.A1_CHEAT = {
  goal: [
    "Gắn mốc thời gian vào câu cho rõ ràng: tomorrow morning, tomorrow at nine, by tomorrow, the day after tomorrow.",
    "Chọn đúng cách nói tương lai: việc đã hẹn, việc đã định, lịch cố định, quyết định ngay lúc nói và việc chưa chắc chắn.",
    "Hỏi kế hoạch và hỏi xem người khác có rảnh không, rồi trả lời tự nhiên.",
    "Nói những việc bắt buộc, việc cần làm và nhắc nhở người khác bằng have to, need to, Do not forget to.",
    "Đổi lịch hoặc hủy hẹn một cách lịch sự và đề nghị hẹn lại."
  ],
  phrases: [
    { h: "Hỏi kế hoạch của người khác", rows: [
      ["What are you doing tomorrow?", "Mai bạn làm gì?", "Dùng **be + động từ thêm -ing** vì đang hỏi về việc người kia đã sắp xếp."],
      ["Are you free tomorrow afternoon?", "Chiều mai bạn rảnh không?"],
      ["Are you going to work from home tomorrow?", "Mai bạn có định làm việc ở nhà không?"],
      ["What time does your flight leave?", "Chuyến bay của bạn mấy giờ cất cánh?"],
      ["Do you have to work tomorrow?", "Mai bạn có phải đi làm không?"]
    ]},
    { h: "Trả lời về kế hoạch", rows: [
      ["I am busy in the morning, but I am free after three.", "Buổi sáng tôi bận, nhưng sau 3 giờ thì tôi rảnh.", "Dạng rút gọn: I’m busy… I’m free… (I’m = I am)."],
      ["I am meeting Lan for lunch tomorrow.", "Mai tôi hẹn Lan đi ăn trưa."],
      ["Nothing much. I am just going to relax.", "Không có gì nhiều. Tôi chỉ định nghỉ ngơi thôi."],
      ["I am not sure yet. I will let you know tonight.", "Tôi chưa chắc. Tối nay tôi sẽ báo bạn.", "Dạng rút gọn: I’m not sure yet. I’ll let you know (I’ll = I will)."],
      ["I might go to the gym tomorrow.", "Có thể mai tôi sẽ đi tập thể dục."]
    ]},
    { h: "Việc phải làm và nhắc nhở", rows: [
      ["I have a lot to do tomorrow.", "Mai tôi có nhiều việc phải làm."],
      ["I have to hand in my report by noon.", "Tôi phải nộp báo cáo chậm nhất là trưa."],
      ["I need to go to the bank.", "Tôi cần ra ngân hàng."],
      ["Do not forget to bring your ID card tomorrow.", "Mai đừng quên mang thẻ căn cước nhé.", "Người bản xứ thường nói Don’t forget… (Don’t = Do not)."],
      ["I will set an alarm for six.", "Tôi sẽ đặt báo thức lúc 6 giờ.", "Dạng rút gọn: I’ll = I will."]
    ]},
    { h: "Đổi và hủy hẹn lịch sự", rows: [
      ["I am sorry, something came up. I cannot make it tomorrow.", "Xin lỗi, tôi có việc đột xuất. Mai tôi không đến được.", "Thường nói rút gọn: I’m sorry… I can’t make it (can’t = cannot)."],
      ["Can we reschedule?", "Mình dời lịch được không?"],
      ["Could we move it to Thursday instead?", "Mình chuyển sang thứ Năm được không?"],
      ["I might be a bit late. I will text you.", "Tôi có thể đến muộn một chút. Tôi sẽ nhắn tin cho bạn."],
      ["No problem. Let me know when you are free.", "Không sao. Khi nào rảnh thì báo mình nhé.", "Dạng rút gọn: when you’re free (you’re = you are)."]
    ]},
    { h: "Xếp lịch với đồng nghiệp", rows: [
      ["Are you free tomorrow at ten? I need to talk to you about the project.", "Mai 10 giờ anh rảnh không? Tôi cần nói chuyện với anh về dự án."],
      ["Sorry, I am seeing a client at ten. How about two o’clock?", "Xin lỗi, 10 giờ tôi gặp khách. 2 giờ được không?", "o’clock là dạng rút gọn cố định của “of the clock”, luôn viết như vậy."],
      ["Two is fine. I will book the meeting room.", "2 giờ được. Tôi sẽ đặt phòng họp."],
      ["Do not forget to bring the latest numbers.", "Đừng quên mang số liệu mới nhất nhé."]
    ]}
  ],
  grammar: [
    { h: "Mốc thời gian: không có giới từ trước tomorrow",
      f: ["tomorrow / tomorrow morning / next week (không có in, on, at phía trước)", "tomorrow + at + giờ", "by + mốc thời gian (hạn chót)", "until + mốc thời gian (kéo dài đến lúc đó)"],
      items: [
        { f: "tomorrow / tomorrow morning / next week (không có in, on, at phía trước)",
          mean: "**ngày mai / sáng mai / tuần sau**: các mốc thời gian tương lai đứng một mình, không cần giới từ.",
          parts: [
            ["tomorrow", "ngày mai, cả ngày nói chung."],
            ["tomorrow morning", "sáng mai. Tương tự: tomorrow afternoon (chiều mai), tomorrow evening (tối mai), nhưng **tomorrow night** (đêm mai)."],
            ["next week", "tuần sau. Tương tự: next Monday, next month, next year, không có the."]
          ],
          use: "thường đặt ở **cuối câu**, hoặc đầu câu để nhấn mạnh. Dùng với các cách nói tương lai: be + động từ thêm -ing, going to, will.",
          note: "Không nói “in tomorrow morning”, “on next Monday”, “at next week”. Không nói “the next week” khi muốn nói tuần sau tính từ bây giờ.",
          ex: [
            ["I am meeting my friends tomorrow evening.", "Tối mai tôi gặp bạn bè."],
            ["Tomorrow morning I am going to the market.", "Sáng mai tôi đi chợ."],
            ["We are going to visit our grandparents next week.", "Tuần sau chúng tôi sẽ thăm ông bà."],
            ["Are you free next Saturday?", "Thứ Bảy tuần sau bạn có rảnh không?"]
          ] },
        { f: "tomorrow + at + giờ",
          mean: "**ngày mai lúc mấy giờ**: nói giờ cụ thể của một việc.",
          parts: [
            ["tomorrow", "ngày diễn ra việc."],
            ["at + giờ", "giờ chính xác: at seven, at half past nine, at noon. Giờ luôn đi với **at**."]
          ],
          use: "khi hẹn gặp, đặt lịch. Có thể đảo thứ tự: at seven tomorrow. Hỏi giờ: What time tomorrow?",
          note: "Dùng **at** cho giờ, **in** cho buổi (in the morning), nhưng với tomorrow thì người bản xứ thường nói gọn là “tomorrow morning at seven”.",
          ex: [
            ["Let’s meet tomorrow at six.", "Mai mình gặp nhau lúc 6 giờ nhé."],
            ["My flight leaves tomorrow at ten thirty.", "Chuyến bay của tôi cất cánh lúc 10 giờ 30 ngày mai."],
            ["Can you call me tomorrow at noon?", "Bạn gọi cho tôi lúc 12 giờ trưa mai được không?"],
            ["I am not free tomorrow at eight.", "Mai lúc 8 giờ tôi không rảnh."]
          ] },
        { f: "by + mốc thời gian (hạn chót)",
          mean: "**chậm nhất là, trước** mốc thời gian đó. Dùng cho **hạn chót**.",
          parts: [
            ["by", "“không muộn hơn”. Việc có thể xong sớm hơn, nhưng không được muộn hơn mốc này."],
            ["mốc thời gian", "by tomorrow, by Friday, by five o’clock, by next week."]
          ],
          use: "nói hạn nộp bài, hạn hoàn thành công việc, giờ phải có mặt. Thường đi với các động từ một lần: finish, send, arrive, be back.",
          note: "**by** là một thời điểm (xong trước lúc đó); **until** là cả một khoảng kéo dài đến lúc đó. “I will finish by five” (xong trước 5 giờ) khác “I will work until five” (làm liên tục đến 5 giờ).",
          ex: [
            ["Please send me the report by Friday.", "Vui lòng gửi tôi báo cáo chậm nhất là thứ Sáu."],
            ["I have to be home by ten.", "Tôi phải về nhà trước 10 giờ."],
            ["Can you finish it by tomorrow morning?", "Bạn làm xong việc đó trước sáng mai được không?"],
            ["The new phone will arrive by next week.", "Chiếc điện thoại mới sẽ đến trước tuần sau."]
          ] },
        { f: "until + mốc thời gian (kéo dài đến lúc đó)",
          mean: "**cho đến** mốc thời gian đó: một việc, một trạng thái **kéo dài liên tục** rồi dừng lại.",
          parts: [
            ["until", "“cho đến khi”. Khi nói thân mật có thể dùng **till**."],
            ["not … until", "“mãi đến … mới”: I do not finish until six (6 giờ tôi mới xong)."]
          ],
          use: "đi với động từ kéo dài: work, stay, wait, sleep, be open, be closed.",
          note: "Đừng dùng until cho hạn chót: “Send it until Friday” là sai, phải là “by Friday”.",
          ex: [
            ["I am staying at my aunt’s house until Sunday.", "Tôi ở nhà dì đến Chủ nhật."],
            ["The library is open until nine tonight.", "Thư viện mở cửa đến 9 giờ tối nay."],
            ["Can you wait until tomorrow?", "Bạn đợi đến mai được không?"],
            ["I will not be free until four.", "Phải đến 4 giờ tôi mới rảnh."]
          ] }
      ],
      p: [
        "Các cụm **tomorrow**, **tomorrow morning**, **next week** tự chúng đã là trạng từ chỉ thời gian, nên đứng một mình, không thêm in, on hay at phía trước. Không nói “in tomorrow morning”.",
        "Khi muốn nói giờ cụ thể, đặt **at + giờ** sau tomorrow: tomorrow at seven.",
        "**By tomorrow** nghĩa là chậm nhất là ngày mai, dùng cho hạn chót. **Until tomorrow** nghĩa là một trạng thái kéo dài cho đến ngày mai."
      ],
      ex: [["I will finish it by tomorrow.", "Tôi sẽ làm xong việc đó chậm nhất là ngày mai."], ["The shop is closed until tomorrow.", "Cửa hàng đóng cửa cho đến ngày mai."]]
    },
    { h: "be + động từ thêm -ing và be going to",
      f: ["chủ ngữ + am / is / are + động từ thêm -ing (đã hẹn với người khác)", "chủ ngữ + am / is / are + going to + động từ nguyên mẫu (đã định trong đầu)"],
      items: [
        { f: "chủ ngữ + am / is / are + động từ thêm -ing (đã hẹn với người khác)",
          mean: "**đã hẹn, đã sắp xếp sẽ làm** việc gì vào một thời điểm trong tương lai.",
          parts: [
            ["am / is / are", "chia theo chủ ngữ: I am, he is, we are."],
            ["động từ thêm -ing", "việc đã hẹn: meeting, having dinner, seeing, flying."],
            ["mốc thời gian tương lai", "**bắt buộc nên có** (tomorrow, tonight, at five) để người nghe hiểu là chuyện tương lai, không phải đang làm."]
          ],
          use: "nói lịch hẹn đã chốt với người khác: hẹn bạn, hẹn bác sĩ, đã mua vé, đã đặt bàn.",
          note: "Cùng một hình thức với thì hiện tại tiếp diễn; chỉ khác là có mốc thời gian tương lai. “I am meeting Lan” (đang gặp) khác “I am meeting Lan tomorrow” (mai gặp, đã hẹn).",
          ex: [
            ["I am having lunch with Hoa tomorrow.", "Mai tôi ăn trưa với Hoa (đã hẹn)."],
            ["My parents are flying to Da Lat on Friday.", "Thứ Sáu bố mẹ tôi bay đi Đà Lạt (đã mua vé)."],
            ["Are you coming to the party tonight?", "Tối nay bạn có đến bữa tiệc không?"],
            ["We are not meeting the teacher tomorrow.", "Mai chúng tôi không gặp thầy giáo."]
          ] },
        { f: "chủ ngữ + am / is / are + going to + động từ nguyên mẫu (đã định trong đầu)",
          mean: "**định làm** việc gì: đã quyết định từ trước, nhưng chưa cần hẹn với ai.",
          parts: [
            ["am / is / are", "chia theo chủ ngữ."],
            ["going to", "“định, sẽ”. Khi nói nhanh nghe như “gonna”."],
            ["động từ nguyên mẫu", "việc định làm: clean, study, buy, cook, relax."]
          ],
          use: "nói kế hoạch, dự định cá nhân cho ngày mai, cuối tuần. Câu hỏi: Are you going to…? What are you going to do?",
          note: "Không bỏ be: “I going to study” là sai. Nếu quyết định ngay lúc nói (chưa định trước) thì dùng will.",
          ex: [
            ["I am going to study for my test tomorrow.", "Mai tôi định ôn bài kiểm tra."],
            ["She is going to cook dinner for her family.", "Cô ấy định nấu bữa tối cho gia đình."],
            ["What are you going to do this weekend?", "Cuối tuần này bạn định làm gì?"],
            ["I am not going to go out tomorrow. I am tired.", "Mai tôi không định ra ngoài. Tôi mệt."]
          ] }
      ],
      p: [
        "Dùng **be + động từ thêm -ing** khi việc đã được hẹn, đã sắp xếp với người khác, ví dụ hẹn bạn ăn trưa hay hẹn bác sĩ. Nói “I will see the doctor tomorrow at three” nghe lạ khi bạn đã đặt lịch từ trước.",
        "Dùng **be going to** khi bạn đã quyết định làm việc đó từ trước, nhưng chưa cần hẹn với ai, ví dụ dọn phòng hay ôn bài.",
        "Mẹo nhớ: có người hẹn thì dùng be + động từ thêm -ing; chỉ có mình định thì dùng going to."
      ],
      ex: [["I am seeing the doctor tomorrow at three.", "Mai 3 giờ tôi đi khám bác sĩ (đã đặt lịch)."], ["I am going to clean my room tomorrow.", "Mai tôi định dọn phòng."]]
    },
    { h: "Hiện tại đơn cho lịch trình cố định",
      f: ["chủ ngữ + động từ hiện tại đơn + mốc thời gian", "What time does + chủ ngữ + động từ nguyên mẫu?"],
      items: [
        { f: "chủ ngữ + động từ hiện tại đơn + mốc thời gian",
          mean: "**(theo lịch) sẽ diễn ra** vào lúc đó: nói về lịch trình cố định như giờ tàu, giờ học, giờ chiếu phim.",
          parts: [
            ["chủ ngữ", "thường là sự việc: the train, the class, the film, the shop, the bus."],
            ["động từ hiện tại đơn", "thêm **-s / -es** khi chủ ngữ số ít: starts, leaves, opens, closes, arrives."],
            ["mốc thời gian", "at eight, tomorrow, on Monday, at ten tomorrow."]
          ],
          use: "dùng với các động từ về lịch: start, begin, finish, end, leave, arrive, open, close. Dù là chuyện ngày mai vẫn dùng hiện tại đơn.",
          note: "Không nói “The train will leave at six” khi đọc theo bảng giờ; nói “The train **leaves** at six”. Phủ định dùng does not: The shop does not open tomorrow.",
          ex: [
            ["The bus leaves at six fifteen tomorrow morning.", "Xe buýt chạy lúc 6 giờ 15 sáng mai."],
            ["The film starts at eight, so let’s meet at half past seven.", "Phim bắt đầu lúc 8 giờ, nên mình gặp nhau lúc 7 rưỡi nhé."],
            ["Our English class finishes at nine.", "Lớp tiếng Anh của chúng tôi kết thúc lúc 9 giờ."],
            ["The bank does not open on Sunday.", "Ngân hàng không mở cửa vào Chủ nhật."]
          ] },
        { f: "What time does + chủ ngữ + động từ nguyên mẫu?",
          mean: "**(việc đó) diễn ra lúc mấy giờ?**: hỏi giờ của một lịch trình.",
          parts: [
            ["What time", "“mấy giờ”. Có thể thay bằng **When** (khi nào) nếu không cần giờ chính xác."],
            ["does", "trợ động từ cho chủ ngữ số ít (the train, the class). Với chủ ngữ số nhiều dùng **do**: What time do the shops open?"],
            ["động từ nguyên mẫu", "không thêm -s vì đã có does: start, leave, open."]
          ],
          use: "hỏi giờ tàu xe, giờ học, giờ mở cửa. Trả lời bằng hiện tại đơn: It starts at…",
          note: "Không nói “What time does the train leaves?”. Sau does, động từ trở về nguyên mẫu.",
          ex: [
            ["What time does the train leave tomorrow?", "Mai tàu chạy lúc mấy giờ?"],
            ["What time does the museum open?", "Bảo tàng mở cửa lúc mấy giờ?"],
            ["What time do the shops close on Sunday?", "Chủ nhật các cửa hàng đóng cửa lúc mấy giờ?"],
            ["When does your course begin?", "Khóa học của bạn bắt đầu khi nào?"]
          ] }
      ],
      p: [
        "Khi việc diễn ra theo một bảng giờ có sẵn như lớp học, tàu xe, chuyến bay, buổi chiếu phim, dùng **thì hiện tại đơn** dù đó là chuyện của ngày mai.",
        "Lý do là lịch này không do bạn quyết định và gần như chắc chắn sẽ xảy ra. Nhớ thêm **-s** hoặc **-es** cho động từ khi chủ ngữ là ngôi thứ ba số ít."
      ],
      ex: [["My class starts at eight tomorrow.", "Mai lớp tôi bắt đầu lúc 8 giờ."], ["What time does the meeting start?", "Cuộc họp bắt đầu lúc mấy giờ?"]]
    },
    { h: "will cho quyết định ngay, lời hứa; might cho việc chưa chắc",
      f: ["chủ ngữ + will + động từ nguyên mẫu", "chủ ngữ + will not (won’t) + động từ nguyên mẫu", "chủ ngữ + might / may + động từ nguyên mẫu"],
      items: [
        { f: "chủ ngữ + will + động từ nguyên mẫu",
          mean: "**sẽ làm**: quyết định ngay lúc nói, lời hứa, hoặc lời đề nghị giúp đỡ.",
          parts: [
            ["will", "giống nhau cho mọi chủ ngữ (I will, she will, they will). Khi nói thường rút gọn: I’ll, she’ll."],
            ["động từ nguyên mẫu", "không thêm to, không thêm -s: will call, will help, will buy."]
          ],
          use: "ba tình huống chính: vừa quyết định (I will take the bus then), hứa (I will call you tonight), đề nghị giúp (I will carry it for you).",
          note: "Nếu đã định từ trước thì dùng going to, đã hẹn thì dùng be + động từ thêm -ing. Will dành cho quyết định **ngay lúc nói**.",
          ex: [
            ["It is raining. I will take a taxi.", "Trời mưa rồi. Tôi sẽ đi taxi (vừa quyết định)."],
            ["I will call you tonight, I promise.", "Tối nay tôi sẽ gọi cho bạn, tôi hứa."],
            ["Your bag looks heavy. I will help you.", "Túi của bạn trông nặng quá. Để tôi giúp."],
            ["Will you be home tomorrow evening?", "Tối mai bạn có ở nhà không?"]
          ] },
        { f: "chủ ngữ + will not (won’t) + động từ nguyên mẫu",
          mean: "**sẽ không làm**: phủ định của will, cũng dùng để hứa sẽ không làm hoặc báo trước là không thể.",
          parts: [
            ["will not", "dạng đầy đủ, dùng khi viết hoặc muốn nhấn mạnh."],
            ["won’t", "dạng rút gọn, rất hay dùng khi nói. Đọc là “wount”, khác với want."],
            ["will not be able to", "“sẽ không thể”: báo trước mình không đến được, không làm được."]
          ],
          use: "báo trước mình không tham gia được, hứa sẽ không làm điều gì, hoặc từ chối nhẹ nhàng khi đổi lịch.",
          note: "Đừng nhầm **won’t** (sẽ không) với **want** (muốn). Sau won’t là động từ nguyên mẫu: I won’t be late.",
          ex: [
            ["I will not be able to come tomorrow.", "Mai tôi không đến được."],
            ["Do not worry, I won’t be late.", "Đừng lo, tôi sẽ không đến muộn đâu."],
            ["She won’t be at work on Friday.", "Thứ Sáu cô ấy sẽ không đi làm."],
            ["I won’t forget your birthday this year.", "Năm nay tôi sẽ không quên sinh nhật bạn."]
          ] },
        { f: "chủ ngữ + might / may + động từ nguyên mẫu",
          mean: "**có thể sẽ**: việc chưa chắc chắn, chỉ có khả năng xảy ra.",
          parts: [
            ["might", "“có lẽ, có thể”, khả năng khoảng một nửa. Rất hay dùng khi nói."],
            ["may", "cùng nghĩa, nghe trang trọng hơn một chút."],
            ["might not / may not", "“có thể sẽ không”."]
          ],
          use: "khi kế hoạch chưa chốt, phụ thuộc thời tiết, công việc, sức khỏe. Sau might / may là động từ nguyên mẫu, không có to.",
          note: "Không nói “I might to go” hay “I might going”. Phân biệt **may be** (có thể là, hai chữ, sau là danh từ hoặc tính từ) với **maybe** (có lẽ, một chữ, đứng đầu câu).",
          ex: [
            ["I might go to the cinema tomorrow.", "Mai có thể tôi đi xem phim."],
            ["It may rain in the afternoon.", "Chiều có thể trời mưa."],
            ["We might not have time for lunch.", "Có thể chúng ta sẽ không có thời gian ăn trưa."],
            ["My brother may visit us next week.", "Tuần sau anh tôi có thể sẽ đến thăm chúng tôi."]
          ] }
      ],
      p: [
        "Dùng **will** khi bạn vừa quyết định ngay lúc nói (nghe bạn nói hết sữa thì đáp “I will buy some tomorrow”), khi hứa hẹn, hoặc khi đề nghị giúp. Nếu bạn đã định từ hôm qua thì dùng going to.",
        "Khi đổi lịch, will rất hữu ích để hứa báo lại: **I will let you know tonight**. Dạng phủ định là **will not**, rút gọn là won’t: I will not be able to come.",
        "Dùng **might** hoặc **may** khi việc chỉ có thể xảy ra, bạn chưa chắc chắn. Sau might là động từ nguyên mẫu, không thêm to."
      ],
      ex: [["Oh, I will buy some milk tomorrow.", "Ồ, mai tôi sẽ mua sữa (vừa quyết định)."], ["I might be a bit late.", "Có thể tôi đến muộn một chút."]]
    },
    { h: "Đặt câu hỏi về kế hoạch",
      f: ["What are you doing + mốc thời gian?", "Are you going to + động từ nguyên mẫu?", "Do you have to + động từ nguyên mẫu?"],
      items: [
        { f: "What are you doing + mốc thời gian?",
          mean: "**(lúc đó) bạn làm gì / có kế hoạch gì?**: hỏi lịch hẹn, kế hoạch đã sắp xếp của người khác.",
          parts: [
            ["What", "“cái gì”, đứng đầu câu."],
            ["are you doing", "be đảo lên trước chủ ngữ, động từ thêm -ing. Với he, she dùng **is**: What is she doing…?"],
            ["mốc thời gian", "tomorrow, tonight, this weekend, on Saturday. Có mốc này người nghe mới hiểu là hỏi kế hoạch."]
          ],
          use: "hỏi thăm kế hoạch trước khi rủ ai đi đâu. Trả lời bằng be + động từ thêm -ing: I am visiting my parents.",
          note: "Không có mốc thời gian thì câu nghĩa là “bạn đang làm gì (ngay bây giờ)?”. Không nói “What you doing tomorrow?” vì thiếu are.",
          ex: [
            ["What are you doing this weekend?", "Cuối tuần này bạn làm gì?"],
            ["What is Lan doing tomorrow night?", "Tối mai Lan làm gì?"],
            ["What are your parents doing on Sunday?", "Chủ nhật bố mẹ bạn làm gì?"],
            ["What are you doing after work? Do you want to get dinner?", "Tan làm bạn làm gì? Đi ăn tối không?"]
          ] },
        { f: "Are you going to + động từ nguyên mẫu?",
          mean: "**bạn có định … không?**: hỏi người khác có dự định làm một việc cụ thể hay không.",
          parts: [
            ["Are you", "đảo be lên đầu câu. Với he, she dùng **Is**: Is he going to…?"],
            ["going to + động từ nguyên mẫu", "việc mình hỏi: go, buy, study, visit."]
          ],
          use: "câu hỏi có hoặc không. Trả lời ngắn: Yes, I am. / No, I am not (thường nói No, I’m not).",
          note: "Không trả lời “Yes, I do” vì câu hỏi bắt đầu bằng Are, không phải Do.",
          ex: [
            ["Are you going to watch the football match tomorrow?", "Mai bạn có định xem trận bóng đá không?"],
            ["Is your sister going to come with us?", "Chị bạn có định đi cùng chúng ta không?"],
            ["Are you going to buy a new phone? Yes, I am.", "Bạn có định mua điện thoại mới không? Có."],
            ["Are they going to stay at a hotel? No, they are not.", "Họ có định ở khách sạn không? Không."]
          ] },
        { f: "Do you have to + động từ nguyên mẫu?",
          mean: "**bạn có phải … không?**: hỏi xem ai đó có bắt buộc phải làm một việc không.",
          parts: [
            ["Do", "mượn trợ động từ **do** vì have to là động từ thường. Với he, she dùng **Does**: Does she have to…?"],
            ["have to", "“phải”. Sau Does vẫn giữ **have**, không đổi thành has."],
            ["động từ nguyên mẫu", "việc có thể bắt buộc: work, get up, wear, go."]
          ],
          use: "hỏi về nghĩa vụ: phải đi làm, phải dậy sớm, phải mang gì. Trả lời ngắn: Yes, I do. / No, I do not.",
          note: "Không nói “Have you to…?” hay “Do you must…?”. Không nói “Does he has to…?”.",
          ex: [
            ["Do you have to work on Saturday?", "Thứ Bảy bạn có phải đi làm không?"],
            ["Does your son have to wear a uniform?", "Con trai bạn có phải mặc đồng phục không?"],
            ["Do we have to bring our passports?", "Chúng ta có phải mang hộ chiếu không?"],
            ["Do you have to get up early tomorrow? No, I do not.", "Mai bạn có phải dậy sớm không? Không."]
          ] }
      ],
      p: [
        "Mỗi cách nói tương lai có cách hỏi riêng. Với be + động từ thêm -ing và going to, đảo **am / is / are** lên trước chủ ngữ. Với have to và hiện tại đơn, mượn trợ động từ **do / does**.",
        "Không được bỏ trợ động từ như “What you do tomorrow?” hay chỉ lên giọng “You have to work tomorrow?” vì câu hỏi sẽ sai ngữ pháp."
      ],
      ex: [["What are you doing tomorrow?", "Mai bạn làm gì?"], ["Do you have to get up early?", "Bạn có phải dậy sớm không?"]]
    },
    { h: "have to, need to, do not have to và Do not forget to",
      f: ["have to + động từ nguyên mẫu (phải)", "need to + động từ nguyên mẫu (cần)", "do not have to + động từ nguyên mẫu (không cần)", "Do not forget to + động từ nguyên mẫu (đừng quên)"],
      items: [
        { f: "have to + động từ nguyên mẫu (phải)",
          mean: "**phải làm**: việc bắt buộc do quy định, công việc hoặc người khác yêu cầu.",
          parts: [
            ["have to", "dùng với I, you, we, they."],
            ["has to", "dùng với he, she, it: She has to work."],
            ["had to", "quá khứ: đã phải làm."]
          ],
          use: "nói nghĩa vụ trong kế hoạch ngày mai: phải đi làm sớm, phải nộp bài, phải đón con. Sau to là động từ nguyên mẫu.",
          note: "Khác với **must** (tự mình thấy bắt buộc, nghe mạnh hơn, không có to). Không nói “must to”. Trong giao tiếp hằng ngày, have to phổ biến hơn.",
          ex: [
            ["I have to get up at five tomorrow.", "Mai tôi phải dậy lúc 5 giờ."],
            ["My father has to work this weekend.", "Cuối tuần này bố tôi phải đi làm."],
            ["We have to finish the project by Friday.", "Chúng tôi phải hoàn thành dự án trước thứ Sáu."],
            ["She has to pick up her son at four.", "Cô ấy phải đón con trai lúc 4 giờ."]
          ] },
        { f: "need to + động từ nguyên mẫu (cần)",
          mean: "**cần làm**: chính mình thấy việc đó cần thiết, không hẳn do ai bắt buộc.",
          parts: [
            ["need to", "dùng với I, you, we, they."],
            ["needs to", "dùng với he, she, it: He needs to rest."],
            ["do not need to", "“không cần”, nghĩa giống do not have to."]
          ],
          use: "nói những việc cần làm cho bản thân: mua đồ, nghỉ ngơi, ôn bài, sửa xe.",
          note: "Sau need có to khi theo sau là động từ (need to buy). Nếu theo sau là danh từ thì không có to: I need some milk.",
          ex: [
            ["I need to buy some vegetables tomorrow.", "Mai tôi cần mua ít rau."],
            ["You need to rest. You look tired.", "Bạn cần nghỉ ngơi. Trông bạn mệt lắm."],
            ["He needs to fix his motorbike.", "Anh ấy cần sửa xe máy."],
            ["Do I need to book a table?", "Tôi có cần đặt bàn không?"]
          ] },
        { f: "do not have to + động từ nguyên mẫu (không cần)",
          mean: "**không cần, không bắt buộc phải làm**. Làm cũng được, không làm cũng được.",
          parts: [
            ["do not have to", "dùng với I, you, we, they. Rút gọn: don’t have to."],
            ["does not have to", "dùng với he, she, it: She does not have to go."]
          ],
          use: "nói ngày nghỉ, việc không bắt buộc, hoặc bảo người khác không cần lo.",
          note: "Bẫy lớn: **do not have to** (không cần) khác hoàn toàn **must not** (bị cấm). “You do not have to come” nghĩa là bạn không cần đến, không phải là bạn không được đến.",
          ex: [
            ["I do not have to work tomorrow. It is a holiday.", "Mai tôi không phải đi làm. Là ngày lễ."],
            ["You do not have to bring anything.", "Bạn không cần mang gì cả."],
            ["She does not have to get up early on Sunday.", "Chủ nhật cô ấy không phải dậy sớm."],
            ["We do not have to pay. It is free.", "Chúng ta không phải trả tiền. Miễn phí."]
          ] },
        { f: "Do not forget to + động từ nguyên mẫu (đừng quên)",
          mean: "**đừng quên làm…**: lời nhắc nhở ai đó làm một việc.",
          parts: [
            ["Do not forget", "“đừng quên”. Khi nói thường rút gọn: **Don’t forget**."],
            ["to + động từ nguyên mẫu", "việc cần nhớ làm. Luôn giữ chữ **to**."],
            ["Remember to", "cách nhắc khác, nghĩa tương tự: Remember to call me."]
          ],
          use: "nhắc người thân, bạn bè, đồng nghiệp trước một việc ngày mai. Câu mệnh lệnh, không có chủ ngữ.",
          note: "Không nói “Do not forget lock the door” (thiếu to). Trả lời: OK, I will not. / I won’t.",
          ex: [
            ["Do not forget to bring your umbrella.", "Đừng quên mang ô nhé."],
            ["Don’t forget to set your alarm.", "Đừng quên đặt báo thức."],
            ["Do not forget to call your grandma tomorrow.", "Mai đừng quên gọi điện cho bà nhé."],
            ["Remember to turn off the lights.", "Nhớ tắt đèn nhé."]
          ] }
      ],
      p: [
        "**Have to** dùng khi việc bắt buộc do quy định hoặc người khác yêu cầu. **Need to** dùng khi chính bạn thấy cần làm. Không nói “must to” vì sau must không có to.",
        "**Do not have to** nghĩa là không cần làm, chứ không phải bị cấm. Ví dụ I do not have to work tomorrow nghĩa là mai tôi được nghỉ.",
        "Khi nhắc ai đó, dùng **Do not forget to + động từ nguyên mẫu**; nhớ giữ chữ to."
      ],
      ex: [["I have to wear a uniform.", "Tôi phải mặc đồng phục."], ["Do not forget to lock the door.", "Đừng quên khóa cửa nhé."]]
    }
  ],
  mistakes: [
    ["I will call you in tomorrow morning.", "I will call you tomorrow morning.", "Không đặt giới từ in, on, at trước **tomorrow morning**."],
    ["I will see the doctor tomorrow at 3. (đã đặt lịch)", "I am seeing the doctor tomorrow at three.", "Việc đã hẹn từ trước dùng **be + động từ thêm -ing**, nghe tự nhiên hơn will."],
    ["What you do tomorrow?", "What are you doing tomorrow?", "Câu hỏi cần trợ động từ; hỏi về việc đã sắp xếp thì dùng **are you + động từ thêm -ing**."],
    ["You have to work tomorrow?", "Do you have to work tomorrow?", "Câu hỏi với have to phải mượn trợ động từ **Do**."],
    ["Tomorrow I must to go to the bank.", "I have to go to the bank tomorrow.", "Sau must không có to; với việc bắt buộc hằng ngày, **have to** tự nhiên hơn."],
    ["Do not forget bring it.", "Do not forget to bring it.", "Sau **forget** cần **to + động từ nguyên mẫu** khi nhắc việc chưa làm."],
    ["Tomorrow cannot. Cancel.", "I am really sorry, but I cannot make it tomorrow. Can we reschedule?", "Hủy hẹn cần xin lỗi, dùng **cannot make it** và đề nghị hẹn lại cho lịch sự."]
  ],
  vocab: [
    ["tomorrow morning", "sáng mai"], ["tomorrow afternoon", "chiều mai"], ["tomorrow evening", "tối mai"], ["first thing tomorrow", "việc đầu tiên vào sáng mai"],
    ["the day after tomorrow", "ngày kia"], ["by tomorrow", "chậm nhất là ngày mai"], ["until tomorrow", "cho đến ngày mai"], ["this time tomorrow", "giờ này ngày mai"],
    ["plan", "kế hoạch"], ["free", "rảnh"], ["busy", "bận"], ["available", "rảnh, có thể gặp"],
    ["reschedule", "dời lịch, đổi lịch"], ["cancel", "hủy"], ["make it", "đến được, kịp"], ["something came up", "có việc đột xuất"],
    ["remind", "nhắc nhở"], ["set an alarm", "đặt báo thức"], ["hand in", "nộp (bài, báo cáo)"], ["appointment", "cuộc hẹn"],
    ["to-do list", "danh sách việc cần làm"], ["a packed day", "một ngày kín lịch"], ["tied up", "bận, kẹt việc"], ["plan B", "phương án dự phòng"]
  ],
  tips: [
    "Người mới học hay dùng **will** cho mọi việc tương lai. Mỗi tối, hãy nói 3 câu về ngày mai, mỗi câu dùng một cách nói khác nhau.",
    "Mẹo chọn cách nói: có người hẹn thì dùng **be + động từ thêm -ing**; chỉ mình định thì dùng **going to**; có bảng giờ thì dùng **hiện tại đơn**; vừa nghĩ ra thì dùng **will**.",
    "Viết danh sách việc ngày mai bằng tiếng Anh, mỗi dòng bắt đầu bằng **I have to…** hoặc **I need to…**.",
    "Học thuộc khuôn hủy hẹn lịch sự: “I am really sorry, but I cannot make it tomorrow. Can we reschedule?” (dạng rút gọn hay nói: I’m… I can’t…).",
    "Thu âm một phút kể kế hoạch ngày mai thật của bạn, kèm giờ cụ thể như **tomorrow at nine**."
  ]
};
