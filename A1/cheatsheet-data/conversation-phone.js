/* Cheat sheet: Phone Conversations (Giao tiếp qua điện thoại). Hiển thị bởi cheatsheet.js. */
window.A1_CHEAT = {
  goal: [
    "Nghe máy và gọi đi đúng cách bằng **This is…** hoặc **It’s…**, không dùng “I am…” như khi gặp trực tiếp.",
    "Xin gặp một người, nhờ nối máy và để lại lời nhắn khi người đó vắng mặt.",
    "Xử lý lịch sự khi sóng yếu, người kia nói nhanh, cần đánh vần tên hoặc đọc số điện thoại.",
    "Nói rõ lý do gọi khi đặt lịch hẹn, gọi tổng đài hoặc gọi về đơn hàng bằng **I am calling to / about…**.",
    "Kết thúc cuộc gọi khéo léo, để lại tin nhắn thoại và dùng các câu cơ bản khi gọi video."
  ],
  phrases: [
    { h: "Nghe máy và mở đầu cuộc gọi", rows: [
      ["Hello, Linh speaking.", "A lô, Linh nghe đây.", "Khi nghe máy, nói tên mình kèm **speaking** để người gọi biết đã gọi đúng người."],
      ["Good morning, ABC Company. How can I help you?", "Chào buổi sáng, công ty ABC xin nghe. Tôi giúp gì được ạ?"],
      ["Hi Tom, it’s Linh.", "Chào Tom, Linh đây.", "it’s = it is. Khi gọi điện, câu tự giới thiệu này gần như luôn nói ở dạng rút gọn."],
      ["Hello, this is Linh from XYZ Travel.", "Xin chào, tôi là Linh ở công ty du lịch XYZ."],
      ["Could I speak to Mr. Brown, please?", "Cho tôi nói chuyện với ông Brown được không ạ?"]
    ]},
    { h: "Nối máy và để lại lời nhắn", rows: [
      ["Hold on a moment, please.", "Xin vui lòng đợi một chút."],
      ["He is in a meeting at the moment.", "Anh ấy đang họp.", "Dạng rút gọn hay nghe: He’s in a meeting (He’s = He is)."],
      ["Would you like to leave a message?", "Anh chị có muốn để lại lời nhắn không?"],
      ["Could you ask him to call me back?", "Nhờ bạn bảo anh ấy gọi lại cho tôi."],
      ["Could you tell her that Linh called?", "Nhờ bạn báo cô ấy là Linh có gọi."]
    ]},
    { h: "Khi nghe không rõ", rows: [
      ["Sorry, you are breaking up.", "Xin lỗi, tiếng bị ngắt quãng.", "Người bản xứ nói you’re breaking up (you’re = you are)."],
      ["The line is really bad. Can I call you back?", "Sóng kém quá. Tôi gọi lại cho bạn nhé?"],
      ["Could you speak more slowly, please?", "Bạn nói chậm hơn được không?"],
      ["Could you spell that, please?", "Bạn đánh vần giúp tôi được không?"],
      ["Let me read that back to you.", "Để tôi đọc lại cho bạn kiểm tra.", "Let me = để tôi; câu này dùng sau khi ghi lại tên, số hoặc giờ hẹn."]
    ]},
    { h: "Đặt lịch hẹn và gọi tổng đài", rows: [
      ["I would like to make an appointment with Dr. Lee.", "Tôi muốn đặt lịch khám với bác sĩ Lee.", "Dạng rút gọn: I’d like (I’d = I would)."],
      ["Do you have anything available on Thursday?", "Thứ Năm còn giờ trống không ạ?"],
      ["I need to cancel my appointment.", "Tôi cần hủy lịch hẹn."],
      ["I am calling about my order. The order number is A two five seven.", "Tôi gọi về đơn hàng. Mã đơn là A257.", "Dạng rút gọn: I’m calling (I’m = I am)."],
      ["Could I speak to a real person, please?", "Cho tôi nói chuyện với nhân viên thật được không?"]
    ]},
    { h: "Kết thúc cuộc gọi", rows: [
      ["Thanks for calling.", "Cảm ơn bạn đã gọi."],
      ["I will call you back later.", "Lát nữa tôi gọi lại cho bạn.", "Khi nói luôn rút gọn thành I’ll call you back later (I’ll = I will)."],
      ["I will let you go. Talk to you soon!", "Thôi không làm phiền bạn nữa. Nói chuyện sau nhé!", "Câu lịch sự để báo mình muốn kết thúc cuộc gọi."],
      ["Bye for now!", "Tạm biệt nhé!"]
    ]},
    { h: "Gọi video", rows: [
      ["Can you hear me okay?", "Bạn nghe tôi rõ không?"],
      ["I think you are on mute.", "Hình như bạn đang tắt micro.", "Dạng rút gọn: you’re on mute (you’re = you are)."],
      ["Your video is frozen.", "Hình của bạn bị đứng."],
      ["Can you see my screen?", "Bạn có thấy màn hình của tôi không?"]
    ]}
  ],
  grammar: [
    { h: "Trên điện thoại nói “This is…” hoặc “It’s…”, không nói “I am…”",
      f: ["This is + tên", "It’s + tên (It’s = It is)", "Is that + tên? / Is this + tên?"],
      items: [
        { f: "This is + tên",
          mean: "**(Tôi là)… đây**. Cách tự giới thiệu chuẩn khi gọi điện hoặc nghe máy.",
          parts: [
            ["This is", "**đây là**. Giọng nói của bạn được coi là “cái này” mà người nghe đang nghe."],
            ["tên", "tên bạn, có thể thêm nơi làm việc: This is Linh **from** ABC Company."]
          ],
          use: "câu đầu tiên sau Hello khi bạn gọi đi, hoặc khi nghe máy ở công ty. Phù hợp cả tình huống trang trọng lẫn thân mật.",
          note: "Không nói “I am Linh” hay “My name is Linh” trên điện thoại vì nghe như đang gặp mặt. Nhớ mẫu: **Hello, this is + tên**.",
          ex: [
            ["Hello, this is Mai from the travel agency.", "Xin chào, tôi là Mai bên công ty du lịch."],
            ["Hi Tom, this is Nam. Do you have a minute?", "Chào Tom, Nam đây. Bạn có rảnh một phút không?"],
            ["Good morning, this is Doctor Hoa’s office.", "Chào buổi sáng, đây là phòng khám bác sĩ Hoa."],
            ["This is Linh speaking. How can I help you?", "Linh nghe đây. Tôi có thể giúp gì cho anh chị?"]
          ] },
        { f: "It’s + tên (It’s = It is)",
          mean: "**(Là)… đây**. Cách tự giới thiệu ngắn gọn, thân mật hơn This is.",
          parts: [
            ["It’s", "**là**. Dạng rút gọn của It is, gần như luôn nói rút gọn."],
            ["tên", "tên bạn, thường là tên gọi thân mật: It’s Linh, It’s me."]
          ],
          use: "gọi cho bạn bè, người thân, đồng nghiệp quen, những người có thể nhận ra giọng bạn. Thường đi sau Hi: Hi, it’s Linh.",
          note: "Câu **It’s me** (Tôi đây) chỉ dùng khi chắc chắn người kia nhận ra giọng bạn. Với người lạ hoặc công ty, dùng **This is + tên đầy đủ**.",
          ex: [
            ["Hi Mom, it’s me.", "Mẹ ơi, con đây."],
            ["Hey Lan, it’s Hung. Are you free tonight?", "Lan ơi, Hùng đây. Tối nay cậu rảnh không?"],
            ["It’s Minh again. Sorry, I forgot to ask something.", "Lại là Minh đây. Xin lỗi, tôi quên hỏi một chuyện."],
            ["Who’s this? It’s Phuong, from your English class.", "Ai đấy? Phương đây, bạn lớp tiếng Anh của bạn."]
          ] },
        { f: "Is that + tên? / Is this + tên?",
          mean: "**Có phải… không?** Hỏi xem người nghe máy có đúng là người bạn cần gặp không.",
          parts: [
            ["Is that…?", "cách nói phổ biến của **người Anh**: that chỉ người ở đầu dây bên kia."],
            ["Is this…?", "cách nói phổ biến của **người Mỹ**. Cả hai đều đúng, chọn một cách để dùng."],
            ["tên", "tên người hoặc nơi bạn gọi: Is that Mr. Brown? Is this the Sunrise Hotel?"]
          ],
          use: "ngay sau khi tự giới thiệu, để kiểm tra mình gọi đúng người, đúng nơi. Trả lời: **Yes, speaking** (Vâng, tôi đây) hoặc **No, sorry. You have the wrong number.**",
          note: "Không hỏi “Are you Tom?” trên điện thoại vì nghe như đang nhìn mặt nhau. Khi người khác hỏi đúng bạn, trả lời ngắn **Speaking** là tự nhiên nhất.",
          ex: [
            ["Hello, is that Mrs. Smith?", "Xin chào, có phải bà Smith không ạ?"],
            ["Is this the Green Hotel?", "Có phải khách sạn Green không ạ?"],
            ["Is that you, Lan? Your voice sounds different.", "Lan đấy à? Giọng bạn nghe khác quá."],
            ["Is this Peter? Yes, speaking.", "Có phải Peter không? Vâng, tôi đây."]
          ] }
      ],
      p: [
        "Khi gọi điện, người nghe không nhìn thấy bạn, nên tiếng Anh coi giọng nói là “cái này” đang nói. Vì vậy người ta tự giới thiệu bằng **This is Linh** hoặc **It’s Linh**, còn “I am Linh” nghe lạ như đang đứng trước mặt nhau.",
        "Để hỏi người kia là ai: với bạn bè dùng **Who’s this?**, với khách hoặc ở công ty dùng **Who’s calling, please?** (Who’s = Who is) cho lịch sự.",
        "Để hỏi có đúng người mình cần không: người Anh nói **Is that Tom?**, người Mỹ nói **Is this Tom?**. Cả hai đều đúng."
      ],
      ex: [["Hello, this is Linh. Is that Tom?", "Xin chào, Linh đây. Có phải Tom không?"], ["Who’s calling, please?", "Xin hỏi ai đang gọi ạ? (Who’s = Who is)"]]
    },
    { h: "Nhờ chuyển lời: tell, ask, let + người nghe",
      f: ["Could you tell + người + (that) + câu?", "Could you ask + người + to + động từ nguyên mẫu?", "Could you let + người + know + (that) + câu?"],
      items: [
        { f: "Could you tell + người + (that) + câu?",
          mean: "**Nhờ bạn nói với (ai) rằng…** Nhờ chuyển một **thông tin**.",
          parts: [
            ["Could you tell", "**bạn có thể nói với… không**. Lời nhờ lịch sự."],
            ["người", "người nhận lời nhắn, dạng tân ngữ: **him**, **her**, **them** hoặc tên: tell Mr. Nam."],
            ["(that)", "**rằng**. Có thể bỏ khi nói."],
            ["câu", "thông tin cần báo, có đủ chủ ngữ và động từ: I called, I will be late, the meeting is at three."]
          ],
          use: "khi người cần gặp vắng mặt và bạn muốn họ **biết** một điều gì. Chú ý đổi người: “tôi” trong lời nhắn vẫn là **I** (người gọi).",
          note: "Sau tell **phải có người nghe**: tell **him**, không nói “tell that…” hay “say him”. Nếu muốn dùng say thì nói: Could you **say to him** that… (ít dùng hơn).",
          ex: [
            ["Could you tell her that I called?", "Nhờ bạn nói với cô ấy là tôi có gọi."],
            ["Could you tell Mr. Long that I will be late?", "Nhờ bạn nói với ông Long là tôi sẽ đến muộn."],
            ["Could you tell them the meeting is at three?", "Nhờ bạn báo họ cuộc họp lúc ba giờ."],
            ["Could you tell him my number is on the email?", "Nhờ bạn nói với anh ấy là số của tôi có trong email."]
          ] },
        { f: "Could you ask + người + to + động từ nguyên mẫu?",
          mean: "**Nhờ bạn bảo (ai) làm gì**. Nhờ chuyển một **yêu cầu hành động**.",
          parts: [
            ["Could you ask", "**bạn có thể bảo, nhờ… không**."],
            ["người", "him, her, them hoặc tên người."],
            ["to + động từ nguyên mẫu", "việc muốn người đó làm: to call me back, to send the file, to text me."]
          ],
          use: "khi bạn muốn người vắng mặt **làm một việc**, thường là gọi lại hoặc gửi gì đó. Có thể thêm thời gian ở cuối: to call me back **this afternoon**.",
          note: "Phân biệt: **tell** + câu (báo tin) và **ask** + to + động từ (nhờ làm). Phủ định: ask him **not to** + động từ (bảo anh ấy đừng…).",
          ex: [
            ["Could you ask him to call me back?", "Nhờ bạn bảo anh ấy gọi lại cho tôi."],
            ["Could you ask Ms. Lan to send me the contract?", "Nhờ bạn bảo chị Lan gửi hợp đồng cho tôi."],
            ["Could you ask them to wait for me?", "Nhờ bạn bảo họ đợi tôi."],
            ["Could you ask her not to call after ten?", "Nhờ bạn bảo cô ấy đừng gọi sau mười giờ."]
          ] },
        { f: "Could you let + người + know + (that) + câu?",
          mean: "**Nhờ bạn báo cho (ai) biết rằng…** Giống tell nhưng nhẹ nhàng, thân thiện hơn.",
          parts: [
            ["let + người + know", "**cho (ai) biết**. Người đứng **giữa** let và know: let **him** know, let **my boss** know."],
            ["(that) + câu", "thông tin cần báo, có thể bỏ that."]
          ],
          use: "báo thông tin một cách mềm mỏng, lịch sự; rất hay dùng trong công việc. Cũng dùng khi nhờ người kia báo lại cho mình: **Please let me know.**",
          note: "Không nói “let know him” hay “let him to know”. Câu kết thúc cuộc gọi rất hay dùng: **Let me know if you have any questions.**",
          ex: [
            ["Could you let her know that the package is here?", "Nhờ bạn báo cô ấy là gói hàng đã đến."],
            ["Could you let my boss know I am sick today?", "Nhờ bạn báo sếp tôi là hôm nay tôi bị ốm."],
            ["Could you let us know when the room is ready?", "Nhờ bạn báo cho chúng tôi khi phòng sẵn sàng."],
            ["Please let me know if the time changes.", "Nếu giờ có thay đổi thì báo tôi biết nhé."]
          ] }
      ],
      p: [
        "Khi người bạn cần gặp vắng mặt, bạn nhờ người nghe máy chuyển lời. Bắt đầu bằng **Could you…?** để câu nhờ vả lịch sự.",
        "Dùng **tell** khi muốn báo một thông tin (Linh đã gọi, tôi sẽ đến muộn). Dùng **ask … to + động từ nguyên mẫu** khi muốn người kia làm một việc (gọi lại, gửi email). Dùng **let … know** khi muốn báo cho biết một cách nhẹ nhàng.",
        "Không nói “say him” vì sau **say** không đặt người nghe ngay; phải dùng **tell him** hoặc **ask him**."
      ],
      ex: [["Could you ask her to email me?", "Nhờ bạn bảo cô ấy gửi email cho tôi."], ["Could you let him know I called?", "Nhờ bạn báo anh ấy là tôi có gọi."]]
    },
    { h: "Đọc số điện thoại và hỏi lại để xác nhận",
      f: ["Đọc từng số một: 0912 → oh nine one two", "Hai số giống nhau: 44 → double four", "Did you say + chi tiết?", "Was that + A + or + B?"],
      items: [
        { f: "Đọc từng số một: 0912 → oh nine one two",
          mean: "**đọc số điện thoại từng chữ số một**, không gộp thành số lớn.",
          parts: [
            ["từng chữ số", "0912 345 678 → oh nine one two, three four five, six seven eight. Không đọc “nine hundred twelve”."],
            ["oh", "cách đọc số 0 phổ biến nhất. **zero** cũng đúng, hay dùng ở Mỹ."],
            ["ngắt nhóm", "dừng một chút sau mỗi nhóm 3 hoặc 4 số để người nghe kịp ghi."]
          ],
          use: "khi đọc số điện thoại, mã đặt chỗ, số tài khoản cho người khác. Câu hỏi thường nghe: What is your phone number? Could I have your number?",
          note: "Đọc chậm và rõ, đừng nói liền một hơi. Câu trả lời thường bắt đầu bằng **It is…** hoặc **My number is…**",
          ex: [
            ["My number is oh nine eight three, five six two, one seven four.", "Số của tôi là 0983 562 174."],
            ["Could you call me on oh nine one two, three four five, six seven eight?", "Bạn gọi cho tôi số 0912 345 678 nhé."],
            ["The hotel’s number is oh two eight, three nine one, five two six four.", "Số khách sạn là 028 391 5264."],
            ["What is your phone number? It is oh seven oh, two eight three, nine one five four.", "Số điện thoại của bạn là gì? Là 070 283 9154."]
          ] },
        { f: "Hai số giống nhau: 44 → double four",
          mean: "**hai chữ số giống nhau đứng liền nhau đọc là “double + số”**.",
          parts: [
            ["double", "**gấp đôi, hai lần**: 44 → double four, 77 → double seven, 00 → double oh."],
            ["triple", "ba số giống nhau liền nhau: 555 → triple five (người Anh hay dùng)."],
            ["người Mỹ", "thường đọc từng số: 44 → four four. Cả hai cách đều được hiểu."]
          ],
          use: "khi đọc số điện thoại, số phòng, mã số có hai số giống nhau liền nhau. Giúp người nghe không bị sót số.",
          note: "Double chỉ dùng cho **hai số giống nhau đứng liền nhau**: 494 vẫn đọc four nine four. Khi đọc cũng có thể nói từng số nếu thấy dễ hơn.",
          ex: [
            ["My number is oh nine double eight, three two one, double five six.", "Số của tôi là 0988 321 556."],
            ["Her extension is double six two.", "Số máy lẻ của cô ấy là 662."],
            ["Is it double seven or just one seven?", "Là hai số bảy hay chỉ một số bảy?"],
            ["The code is double two, triple nine.", "Mã là 22 999."]
          ] },
        { f: "Did you say + chi tiết?",
          mean: "**Bạn vừa nói… phải không?** Hỏi lại để kiểm tra mình nghe đúng một chi tiết.",
          parts: [
            ["Did you say", "**bạn đã nói… phải không**. Thì quá khứ vì người kia vừa nói xong."],
            ["chi tiết", "phần bạn không chắc: một con số, một cái tên, một giờ hẹn, một địa chỉ."]
          ],
          use: "khi bạn nghe được gần hết nhưng chưa chắc một chi tiết. Lặp lại đúng chi tiết đó sau Did you say. Có thể thêm Sorry ở đầu cho lịch sự.",
          note: "Lịch sự hơn rất nhiều so với “What?” hay “Again!”. Không nói “You said…?” với giọng cộc, cũng không nói “Did you said…?”.",
          ex: [
            ["Sorry, did you say Tuesday?", "Xin lỗi, bạn nói thứ Ba phải không?"],
            ["Did you say room four-oh-six?", "Bạn nói phòng 406 phải không?"],
            ["Did you say your name is Thompson?", "Bạn nói tên bạn là Thompson phải không?"],
            ["Did you say ten thirty or ten thirteen?", "Bạn nói mười giờ rưỡi hay mười giờ mười ba phút?"]
          ] },
        { f: "Was that + A + or + B?",
          mean: "**Là A hay B?** Đưa ra hai lựa chọn để người kia xác nhận cái nào đúng.",
          parts: [
            ["Was that", "**cái (bạn vừa nói) đó là**. Thì quá khứ vì chỉ điều vừa nói."],
            ["A or B", "hai khả năng bạn nghe lẫn: fifteen or fifty, M or N, B or D, Monday or Sunday."]
          ],
          use: "khi bạn nghe được nhưng không phân biệt được hai âm gần giống nhau. Người kia chỉ cần trả lời một từ, nên rất nhanh và rõ.",
          note: "Cặp hay nhầm: **thirteen / thirty**, **fifteen / fifty** (đuôi -teen nhấn âm cuối, đuôi -ty nhấn âm đầu); chữ **B / D / P**, **M / N**. Khi đánh vần, thêm từ khóa: B for Bravo, M for Mike.",
          ex: [
            ["Was that thirteen or thirty?", "Là mười ba hay ba mươi?"],
            ["Was that M for Mike or N for November?", "Là chữ M như Mike hay N như November?"],
            ["Was that Monday or Sunday?", "Là thứ Hai hay Chủ nhật?"],
            ["Was that seven or eleven?", "Là số bảy hay số mười một?"]
          ] }
      ],
      p: [
        "Số điện thoại đọc **từng chữ số một**, không đọc thành số lớn. Số 0 thường đọc là **oh** (cũng có thể nói zero). Hai số giống nhau liền nhau đọc là **double**. Ngắt nghỉ theo cụm 3–4 số để người nghe dễ ghi.",
        "Khi không chắc mình nghe đúng, đừng nói cộc “What? Again!”. Hãy hỏi lại chính chi tiết đó bằng **Did you say…?** hoặc đưa ra hai lựa chọn bằng **Was that … or …?**.",
        "Cẩn thận cặp số dễ nhầm: **fifteen** (nhấn âm cuối) và **fifty** (nhấn âm đầu). Khi cần, hỏi lại từng chữ số: “one five or five oh?”. Khi đánh vần, dùng từ khóa như **B for Bravo**, **N for November** vì nhiều chữ cái nghe rất giống nhau."
      ],
      ex: [["Sorry, did you say fifteen or fifty?", "Xin lỗi, bạn nói mười lăm hay năm mươi?"], ["Was that B for Bravo or D for Delta?", "Đó là chữ B như Bravo hay D như Delta?"]]
    },
    { h: "Nói lý do gọi: I am calling to / about / because",
      f: ["I am calling to + động từ nguyên mẫu", "I am calling about + danh từ", "I am calling because + câu đầy đủ"],
      items: [
        { f: "I am calling to + động từ nguyên mẫu",
          mean: "**Tôi gọi để (làm gì)**. Nói **mục đích** của cuộc gọi.",
          parts: [
            ["I am calling", "**tôi đang gọi**. Thì hiện tại tiếp diễn vì cuộc gọi đang diễn ra. Rút gọn: I’m calling (I’m = I am)."],
            ["to + động từ nguyên mẫu", "**để**: to book, to confirm, to cancel, to ask about, to make an appointment."]
          ],
          use: "ngay sau lời chào và tự giới thiệu, để người nghe biết bạn muốn làm gì. Rất hợp khi gọi khách sạn, phòng khám, nhà hàng, công ty.",
          note: "Không nói “I call for book” hay “I am calling for confirm”. Muốn nói mục đích bằng động từ thì dùng **to**, không dùng for.",
          ex: [
            ["I am calling to book a table for four.", "Tôi gọi để đặt bàn cho bốn người."],
            ["I am calling to make an appointment with Doctor Minh.", "Tôi gọi để đặt lịch khám với bác sĩ Minh."],
            ["I’m calling to cancel my order.", "Tôi gọi để hủy đơn hàng."],
            ["Hello, this is Hoa. I am calling to ask about the English course.", "Xin chào, tôi là Hoa. Tôi gọi để hỏi về khóa học tiếng Anh."]
          ] },
        { f: "I am calling about + danh từ",
          mean: "**Tôi gọi về (việc gì)**. Nói **chủ đề** của cuộc gọi.",
          parts: [
            ["I am calling", "tôi đang gọi (đọc rút gọn: I’m calling)."],
            ["about + danh từ", "**về**: about my booking, about the job, about your advertisement, about the bill."]
          ],
          use: "khi bạn muốn nói ngay cuộc gọi liên quan đến chuyện gì, rồi giải thích sau. Sau about là một **danh từ** hoặc cụm danh từ.",
          note: "So sánh: **calling to** + động từ (mục đích: to book a room) và **calling about** + danh từ (chủ đề: about my room). Không nói “calling about book”.",
          ex: [
            ["I am calling about my hotel booking.", "Tôi gọi về việc đặt phòng khách sạn của tôi."],
            ["I am calling about the job in your advertisement.", "Tôi gọi về công việc trong quảng cáo của anh chị."],
            ["I’m calling about the bill for last month.", "Tôi gọi về hóa đơn tháng trước."],
            ["Are you calling about the car for sale?", "Anh gọi về chiếc xe đang rao bán à?"]
          ] },
        { f: "I am calling because + câu đầy đủ",
          mean: "**Tôi gọi vì…** Nói **lý do** của cuộc gọi bằng một câu.",
          parts: [
            ["I am calling", "tôi đang gọi (đọc rút gọn: I’m calling)."],
            ["because + câu đầy đủ", "**vì**: sau because phải có chủ ngữ và động từ: because **I have** a problem, because **my flight is** delayed."]
          ],
          use: "khi lý do là một tình huống, một vấn đề cần giải thích, nhất là khi báo sự cố hay xin lỗi.",
          note: "Không nói “because my problem” (thiếu động từ). Nếu chỉ có danh từ thì dùng **about**: I am calling about a problem.",
          ex: [
            ["I am calling because my order has not arrived.", "Tôi gọi vì đơn hàng của tôi chưa đến."],
            ["I am calling because I will be late for the meeting.", "Tôi gọi vì tôi sẽ đến họp muộn."],
            ["I’m calling because the internet is not working.", "Tôi gọi vì mạng không vào được."],
            ["I am calling because I lost my key card.", "Tôi gọi vì tôi làm mất thẻ phòng."]
          ] }
      ],
      p: [
        "Câu đầu tiên sau lời chào nên cho người nghe biết bạn gọi để làm gì. Dùng **thì hiện tại tiếp diễn** (I am calling) vì việc gọi đang diễn ra ngay lúc nói. Khi nói thường rút gọn thành I’m calling (I’m = I am).",
        "Sau **to** dùng động từ nguyên mẫu (to confirm, to report). Sau **about** dùng danh từ (about my order, about the apartment). Sau **because** dùng một câu có chủ ngữ và động từ.",
        "Không nói “I call for confirm”: **for** không đi với động từ nguyên mẫu để chỉ mục đích."
      ],
      ex: [["I am calling to confirm my booking.", "Tôi gọi để xác nhận đặt chỗ."], ["I am calling about the apartment for rent.", "Tôi gọi về căn hộ cho thuê."]]
    },
    { h: "Dùng will (I’ll) cho lời hứa và quyết định ngay lúc nói",
      f: ["I will + động từ nguyên mẫu (nói rút gọn: I’ll)"],
      items: [
        { f: "I will + động từ nguyên mẫu (nói rút gọn: I’ll)",
          mean: "**Tôi sẽ (làm gì)**. Dùng cho **lời hứa**, **lời đề nghị giúp** hoặc **quyết định ngay lúc nói** trong cuộc gọi.",
          parts: [
            ["I will", "**tôi sẽ**. Khi nói gần như luôn rút gọn: I’ll (I’ll = I will)."],
            ["I will not", "**tôi sẽ không**. Rút gọn: I won’t (won’t = will not)."],
            ["động từ nguyên mẫu", "việc hứa làm: call you back, send, text, tell, check, wait."]
          ],
          use: "cuối cuộc gọi khi hứa gọi lại, gửi thông tin, chuyển lời; hoặc khi người nghe máy đề nghị giúp. Thời gian thường đặt ở cuối câu: in ten minutes, tomorrow, later.",
          note: "Không nói “I call you back” (thiếu will, nghe như thói quen) và không nói “I will to call”. Câu rất hay dùng: **I’ll call you back**, **I’ll text you the address**, **I’ll put you through** (tôi sẽ nối máy cho bạn).",
          ex: [
            ["I’ll text you the address now.", "Tôi sẽ nhắn địa chỉ cho bạn ngay bây giờ."],
            ["I will check and call you back this afternoon.", "Tôi sẽ kiểm tra và gọi lại cho bạn chiều nay."],
            ["Hold on, I’ll put you through to the manager.", "Xin chờ chút, tôi sẽ nối máy cho anh gặp quản lý."],
            ["Don’t worry, I won’t forget.", "Đừng lo, tôi sẽ không quên đâu."]
          ] }
      ],
      p: [
        "Trong cuộc gọi, bạn thường hứa hoặc quyết định làm gì ngay lúc đó: gọi lại, nhắn địa chỉ, báo lại cho ai. Những quyết định tức thời như vậy dùng **will**.",
        "Nếu nói “I call you back later” (thiếu will), câu nghe như một thói quen chứ không phải lời hứa. Khi nói, người bản xứ gần như luôn dùng dạng rút gọn **I’ll** (I’ll = I will)."
      ],
      ex: [["I will call you back in five minutes.", "Năm phút nữa tôi gọi lại cho bạn."], ["I will let her know.", "Tôi sẽ báo lại cho cô ấy."]]
    }
  ],
  mistakes: [
    ["Hello, I am Linh. Are you Tom?", "Hello, this is Linh. Is that Tom?", "Trên điện thoại tự giới thiệu bằng **This is / It’s** và hỏi bằng **Is that / Is this**, vì người kia chỉ nghe thấy giọng nói."],
    ["Please say him call me back.", "Could you ask him to call me back?", "Sau **say** không đặt người nghe ngay. Muốn nhờ ai làm gì, dùng **ask + người + to + động từ nguyên mẫu**."],
    ["What? Again!", "Sorry, did you say fifteen or fifty?", "Câu cộc lốc nghe bất lịch sự. Hãy xin lỗi rồi hỏi lại đúng chi tiết mình chưa nghe rõ."],
    ["I call for confirm my booking.", "I am calling to confirm my booking.", "Nói mục đích bằng **to + động từ nguyên mẫu**; việc gọi đang diễn ra nên dùng **I am calling**."],
    ["I call you back later.", "I will call you back later.", "Lời hứa quyết định ngay lúc nói cần **will** (nói rút gọn là I’ll)."],
    ["Alo. Tom there? Me Linh. Call me.", "Hi, this is Linh. Is Tom there? If not, could you ask him to call me back?", "Câu thiếu chủ ngữ và động từ nghe cứng và thô. Nói đủ câu và dùng **Could you…?** để nhờ vả."]
  ],
  vocab: [
    ["call", "gọi điện; cuộc gọi"], ["pick up", "nhấc máy"], ["hang up", "cúp máy"], ["call back", "gọi lại"],
    ["hold on", "chờ máy, đợi một chút"], ["put on hold", "bắt chờ máy"], ["put through", "nối máy"], ["get through", "gọi được, kết nối được"],
    ["get cut off", "bị rớt cuộc gọi"], ["message", "lời nhắn"], ["voicemail", "hộp thư thoại"], ["missed call", "cuộc gọi nhỡ"],
    ["wrong number", "nhầm số"], ["extension", "số máy lẻ"], ["landline", "điện thoại bàn"], ["reception", "sóng điện thoại"],
    ["break up", "(tiếng) bị ngắt quãng"], ["spell", "đánh vần"], ["appointment", "lịch hẹn"], ["cancel", "hủy"],
    ["available", "rảnh, có thể nghe máy"], ["on mute", "đang tắt micro"], ["speakerphone", "loa ngoài"], ["battery", "pin"]
  ],
  tips: [
    "Trước khi gọi, viết ra ba dòng: **mình là ai**, **gọi để làm gì**, **cần người kia làm gì**. Có kịch bản thì bạn sẽ bớt run.",
    "Luôn để sẵn giấy bút để ghi tên, số và giờ hẹn, rồi nói **Let me read that back** để đọc lại cho người kia kiểm tra.",
    "Luyện đọc số điện thoại của năm người thân: đọc từng số, số 0 là **oh**, hai số giống nhau là **double**.",
    "Tập đánh vần tên và email của bạn bằng từ khóa, ví dụ “L for London, I, N for November, H”.",
    "Luyện với bạn bằng cách ngồi quay lưng vào nhau để không nhìn thấy nét mặt, giống như đang gọi điện thật.",
    "Thu âm một tin nhắn thoại dài 30 giây gồm tên, lý do gọi và số điện thoại của bạn."
  ]
};
