/* Cheat sheet: At Work (Nói chuyện với đồng nghiệp IT). Hiển thị bởi cheatsheet.js. */
window.A1_CHEAT = {
  goal: [
    "Chào hỏi đồng nghiệp đầu ngày và trả lời ngắn gọn, tự nhiên như “Good, thanks. You?” thay vì câu sách vở.",
    "Hỏi đồng nghiệp đang làm gì và kể việc của mình bằng thì hiện tại tiếp diễn với **work on**.",
    "Nhờ đồng nghiệp giúp ở ba mức lịch sự: Can you, Could you và Would you mind.",
    "Báo cáo daily standup đủ ba phần: hôm qua đã làm gì, hôm nay sẽ làm gì và có vướng mắc gì không.",
    "Rủ đồng nghiệp đi ăn trưa, từ chối khéo và kết thúc cuộc nói chuyện lịch sự để quay lại làm việc."
  ],
  phrases: [
    { h: "Chào hỏi đầu ngày", rows: [
      ["Morning!", "Chào buổi sáng!", "Cách nói ngắn, thân mật của Good morning, rất hay dùng khi bước vào văn phòng."],
      ["How’s it going? — Not bad, you?", "Dạo này thế nào? — Cũng ổn, còn bạn?", "How’s = How is. Câu chào này gần như luôn nói ở dạng rút gọn."],
      ["How was your weekend? — Pretty relaxing, thanks.", "Cuối tuần thế nào? — Khá thư giãn, cảm ơn."],
      ["Busy day? — Yeah, back-to-back meetings.", "Hôm nay bận hả? — Ừ, họp liên tục.", "Câu hỏi rút gọn của Is it a busy day? Ở văn phòng người ta hay bỏ bớt chữ cho nhanh."],
      ["You look tired. Late night?", "Trông bạn mệt thế. Thức khuya à?"]
    ]},
    { h: "Hỏi và kể việc đang làm", rows: [
      ["What are you working on?", "Bạn đang làm gì thế?", "Câu hỏi về công việc hiện tại, dễ bắt chuyện nhất ở công ty công nghệ."],
      ["How is the new feature going?", "Tính năng mới tới đâu rồi?", "Khi nói thường rút gọn: How’s the new feature going? (How’s = How is)."],
      ["I am fixing a bug in the login page.", "Tôi đang sửa lỗi ở trang đăng nhập.", "Khi nói thường rút gọn: I’m fixing (I’m = I am)."],
      ["It is going well. We are almost done.", "Ổn lắm. Bọn mình sắp xong rồi.", "Dạng rút gọn: It’s going well. We’re almost done."],
      ["The release is next Friday.", "Thứ Sáu tuần sau phát hành."]
    ]},
    { h: "Nhờ giúp và trả lời", rows: [
      ["Do you have a minute?", "Bạn có rảnh một phút không?", "Cách thân mật hơn: Got a sec? (Have you got a second?)."],
      ["Could you review my pull request?", "Bạn xem lại yêu cầu gộp code giúp mình được không?"],
      ["Sorry to bother you, but would you mind explaining this part?", "Xin lỗi làm phiền, bạn giải thích phần này giúp được không?"],
      ["Sure, what is up? — Give me five minutes. I am in the middle of something.", "Được chứ, có chuyện gì thế? — Đợi mình năm phút. Mình đang dở tay.", "Khi nói thường rút gọn: what’s up (what’s = what is), I’m (I’m = I am)."],
      ["Thanks for your help. I owe you a coffee.", "Cảm ơn nhé. Mình nợ bạn một ly cà phê."]
    ]},
    { h: "Daily standup", rows: [
      ["Yesterday I finished the login page.", "Hôm qua tôi đã làm xong trang đăng nhập."],
      ["Today I am going to write tests for it.", "Hôm nay tôi sẽ viết test cho nó.", "Dạng rút gọn: I’m going to (I’m = I am)."],
      ["I am stuck on a problem with the server.", "Tôi bị kẹt ở một vấn đề với máy chủ."],
      ["I need access to the test server.", "Tôi cần quyền truy cập máy chủ test."],
      ["That is it from me.", "Phần của tôi hết rồi.", "Người ta thường nói rút gọn: That’s it from me. (That’s = That is)."]
    ]},
    { h: "Chuyện ngoài lề", rows: [
      ["Do you want to grab lunch?", "Đi ăn trưa không?", "**grab lunch** là cách nói thân mật của “đi ăn trưa nhanh”."],
      ["I would love to, but I have a meeting at twelve. How about tomorrow?", "Muốn lắm, nhưng mười hai giờ mình có họp. Mai được không?", "Khi nói thường rút gọn: I’d love to (I’d = I would). Đây là cách từ chối khéo rồi hẹn lúc khác."],
      ["Any plans for the weekend?", "Cuối tuần có kế hoạch gì không?"],
      ["Nice work on the demo yesterday!", "Buổi demo hôm qua làm tốt lắm!"],
      ["Finally Friday!", "Cuối cùng cũng thứ Sáu!"]
    ]},
    { h: "Kết thúc cuộc nói chuyện", rows: [
      ["Well, I had better get back to work.", "Thôi, mình quay lại làm việc đây.", "Người bản xứ gần như luôn nói I’d better (I’d = I had)."],
      ["I have a meeting in five minutes. Talk later!", "Năm phút nữa mình có họp. Nói sau nhé!"],
      ["See you at the meeting.", "Gặp lại ở buổi họp."],
      ["Have a good evening!", "Buổi tối vui vẻ!"]
    ]}
  ],
  grammar: [
    { h: "How is và How was + danh từ: hỏi việc đang diễn ra và việc đã xong",
      f: ["How is + danh từ + going?", "How was + danh từ?"],
      items: [
        { f: "How is + danh từ + going?",
          mean: "**việc đó đang tiến triển thế nào rồi?** Hỏi về một việc vẫn **đang diễn ra**, chưa kết thúc.",
          parts: [
            ["How is", "“như thế nào”, dùng **is** vì việc đó vẫn đang ở hiện tại. Khi nói thường rút gọn thành **How’s**."],
            ["danh từ", "việc mình hỏi: the project, the new feature, your week, the work. Nếu danh từ ở số nhiều thì đổi is thành **are**: How are the tests going?"],
            ["going", "“đang đi, đang tiến triển”. Từ này luôn đứng cuối câu và không đổi."]
          ],
          use: "hỏi thăm tiến độ công việc của đồng nghiệp, hỏi về một tuần làm việc hay một dự án chưa xong. Câu trả lời thường là: It is going well, It is going OK, hoặc Not so well.",
          note: "Không bỏ chữ **going**: “How is the project?” vẫn hiểu được nhưng “How is the project going?” mới đúng nghĩa hỏi tiến độ. Không nói “How is going the project?” vì danh từ phải đứng giữa is và going.",
          ex: [
            ["How is the new app going?", "Ứng dụng mới tiến triển thế nào rồi?"],
            ["How’s your first week going?", "Tuần đầu tiên của bạn thế nào rồi?"],
            ["How are the tests going?", "Việc kiểm thử tiến triển thế nào rồi?"],
            ["The design is going well, thanks.", "Phần thiết kế đang ổn, cảm ơn bạn."]
          ] },
        { f: "How was + danh từ?",
          mean: "**việc đó (đã xong) thế nào?** Hỏi cảm nhận về một việc **đã kết thúc**.",
          parts: [
            ["How was", "“đã như thế nào”, **was** là quá khứ của is. Với danh từ số nhiều dùng **How were**."],
            ["danh từ", "việc đã qua: the meeting, the demo, your weekend, your trip, the interview."]
          ],
          use: "hỏi về buổi họp vừa xong, buổi demo hôm qua, kỳ nghỉ cuối tuần đã qua. Câu trả lời dùng quá khứ: It was great, It was a bit long, It was OK.",
          note: "Sáng thứ Hai luôn hỏi **How was your weekend?** vì cuối tuần đã hết. Câu này không có chữ going ở cuối.",
          ex: [
            ["How was the demo yesterday?", "Buổi demo hôm qua thế nào?"],
            ["How was your weekend? It was great, thanks.", "Cuối tuần của bạn thế nào? Rất tuyệt, cảm ơn."],
            ["How were the interviews this morning?", "Mấy buổi phỏng vấn sáng nay thế nào?"],
            ["The meeting was not very useful.", "Buổi họp không hữu ích lắm."]
          ] }
      ],
      p: [
        "Khi hỏi về một việc **vẫn đang diễn ra** (dự án, tính năng, tuần làm việc), dùng **How is + danh từ + going?**. Khi nói, How is thường rút gọn thành How’s: How’s the project going?",
        "Khi hỏi về một việc **đã kết thúc** (buổi họp, buổi demo, cuối tuần), dùng **How was + danh từ?**, vì was là quá khứ của is.",
        "Vì vậy sáng thứ Hai hỏi về cuối tuần phải dùng **was**, vì cuối tuần đã qua rồi. Hỏi “How is your weekend?” vào thứ Hai nghe như cuối tuần vẫn chưa hết."
      ],
      ex: [["How is the project going?", "Dự án tiến triển thế nào rồi?"], ["How was the meeting?", "Buổi họp thế nào?"]]
    },
    { h: "Hiện tại tiếp diễn cho việc đang làm",
      f: ["chủ ngữ + am / is / are + động từ thêm -ing", "chủ ngữ + am / is / are + working on + việc"],
      items: [
        { f: "chủ ngữ + am / is / are + động từ thêm -ing",
          mean: "**đang làm một việc gì đó**: ngay lúc nói, hoặc trong giai đoạn này (tuần này, tháng này).",
          parts: [
            ["am", "dùng với **I**: I am testing."],
            ["is", "dùng với **he, she, it** và một người hoặc một vật: Lan is writing, the server is running."],
            ["are", "dùng với **you, we, they** và danh từ số nhiều: We are waiting."],
            ["động từ thêm -ing", "việc đang diễn ra: fixing, writing, testing, waiting, reading."]
          ],
          use: "kể việc mình đang làm khi đồng nghiệp hỏi “What are you doing?”, hoặc giải thích vì sao chưa rảnh. Thường đi với now, right now, at the moment, this week.",
          note: "Người Việt hay quên am, is, are và nói “I fixing”. Luôn nhớ hai phần: **be + động từ thêm -ing**. Phủ định thêm not sau be: I am not working today.",
          ex: [
            ["I am writing the report right now.", "Bây giờ tôi đang viết báo cáo."],
            ["Lan is testing the login page.", "Lan đang kiểm thử trang đăng nhập."],
            ["We are not using the old server this week.", "Tuần này chúng tôi không dùng máy chủ cũ."],
            ["Are you waiting for the designer?", "Bạn đang đợi người thiết kế à?"]
          ] },
        { f: "chủ ngữ + am / is / are + working on + việc",
          mean: "**đang làm, đang xử lý một việc / một nhiệm vụ** nào đó. Đây là cụm rất hay dùng trong công ty.",
          parts: [
            ["am / is / are", "chia theo chủ ngữ như trên: I am, she is, they are."],
            ["working on", "“đang làm (một nhiệm vụ)”. Luôn có giới từ **on**."],
            ["việc", "danh từ chỉ nhiệm vụ: the search feature, a new design, the bug, the budget."]
          ],
          use: "trả lời câu hỏi “What are you working on?” trong buổi họp hoặc khi trò chuyện với đồng nghiệp. Sau on là **danh từ** (tên nhiệm vụ, dự án).",
          note: "Phân biệt **work on** (làm một nhiệm vụ cụ thể) với **work in / at** (làm ở một nhóm, một công ty): I work in the mobile team, and I am working on the payment page.",
          ex: [
            ["What are you working on today?", "Hôm nay bạn đang làm việc gì?"],
            ["I am working on the new homepage.", "Tôi đang làm trang chủ mới."],
            ["Minh is working on a bug in the app.", "Minh đang xử lý một lỗi trong ứng dụng."],
            ["We are not working on that project now.", "Bây giờ chúng tôi không làm dự án đó nữa."]
          ] }
      ],
      p: [
        "Dùng **thì hiện tại tiếp diễn** khi nói việc bạn đang làm ngay lúc này hoặc trong giai đoạn này, ví dụ đang sửa lỗi, đang làm một tính năng trong tuần. Không được bỏ am, is, are: nói “I working” là sai.",
        "Cụm **work on + việc** nghĩa là “đang làm, đang xử lý việc gì”, rất hay dùng trong công ty công nghệ: I am working on the search feature.",
        "Còn việc **thường xuyên, cố định** thì dùng **thì hiện tại đơn**: I work in the mobile team (tôi làm ở nhóm di động, đó là công việc lâu dài)."
      ],
      ex: [["I am fixing the bug now.", "Bây giờ tôi đang sửa lỗi."], ["I am working on the search feature.", "Tôi đang làm tính năng tìm kiếm."]]
    },
    { h: "Can, Could, Would you mind: ba mức lịch sự khi nhờ vả",
      f: ["Can you + động từ nguyên mẫu? (thân mật)", "Could you + động từ nguyên mẫu? (lịch sự)", "Would you mind + động từ thêm -ing? (rất lịch sự)"],
      items: [
        { f: "Can you + động từ nguyên mẫu? (thân mật)",
          mean: "**bạn làm giúp tôi… được không?** Cách nhờ vả **thân mật, nhanh gọn**.",
          parts: [
            ["Can you", "“bạn có thể…”. Nghe tự nhiên giữa đồng nghiệp ngang hàng, bạn thân."],
            ["động từ nguyên mẫu", "việc cần nhờ, không thêm to, không thêm -s: send, check, help, call."],
            ["please", "thêm ở cuối câu để lời nhờ mềm hơn."]
          ],
          use: "nhờ một việc nhỏ, nhanh, với người quen thân trong nhóm. Không nên dùng với khách hàng hoặc cấp trên mình chưa thân.",
          note: "Trả lời đồng ý: Sure, Of course, No problem. Từ chối nhẹ nhàng: Sorry, I am busy right now.",
          ex: [
            ["Can you send me the file?", "Bạn gửi mình tệp đó được không?"],
            ["Can you help me with this, please?", "Bạn giúp mình cái này được không?"],
            ["Can you turn on the projector?", "Bạn bật máy chiếu giúp mình nhé?"],
            ["Can you call me after lunch?", "Sau bữa trưa bạn gọi cho mình được không?"]
          ] },
        { f: "Could you + động từ nguyên mẫu? (lịch sự)",
          mean: "**bạn có thể vui lòng… được không?** Cách nhờ **lịch sự hơn** Can you.",
          parts: [
            ["Could you", "nhẹ nhàng, lịch sự hơn Can you. Dùng được với hầu hết mọi người: cấp trên, khách hàng, người mới quen."],
            ["động từ nguyên mẫu", "giữ nguyên, không thêm to: Could you explain…, Could you share…"]
          ],
          use: "nhờ người mình chưa thân, nhờ cấp trên, hoặc khi viết email công việc. Nếu không chắc nên dùng mức nào, hãy chọn Could you.",
          note: "Ở đây could **không** mang nghĩa quá khứ; nó chỉ làm câu nhờ lịch sự hơn.",
          ex: [
            ["Could you explain this part again?", "Anh hoặc chị giải thích lại phần này được không?"],
            ["Could you share your screen, please?", "Bạn chia sẻ màn hình giúp được không?"],
            ["Could you send me the meeting notes?", "Bạn gửi giúp tôi biên bản cuộc họp được không?"],
            ["Could you speak a bit louder, please?", "Bạn nói to hơn một chút được không?"]
          ] },
        { f: "Would you mind + động từ thêm -ing? (rất lịch sự)",
          mean: "**bạn có phiền… không?** Cách nhờ **rất lịch sự**, dùng khi việc nhờ làm phiền người khác nhiều.",
          parts: [
            ["Would you mind", "nghĩa đen là “bạn có thấy phiền không nếu…”. Lịch sự nhất trong ba cách."],
            ["động từ thêm -ing", "bắt buộc thêm -ing sau mind: checking, waiting, moving, closing."]
          ],
          use: "nhờ việc tốn thời gian của người khác, nhờ người lạ, hoặc khi cần rất lịch sự (ví dụ nhờ đổi giờ họp).",
          note: "Muốn đồng ý thì trả lời **Not at all** hoặc **No problem** (nghĩa là không phiền). Nếu trả lời “Yes” là bạn đang nói “có, tôi thấy phiền”. Không nói “Would you mind to check”.",
          ex: [
            ["Would you mind reviewing my code today?", "Phiền bạn xem lại mã của tôi hôm nay được không?"],
            ["Would you mind moving the meeting to three?", "Phiền bạn dời cuộc họp sang 3 giờ được không?"],
            ["Would you mind closing the door? Not at all.", "Phiền bạn đóng cửa giúp được không? Không phiền gì cả."],
            ["Would you mind waiting a few minutes?", "Phiền bạn đợi vài phút được không?"]
          ] }
      ],
      p: [
        "Dùng **Can you** với đồng nghiệp thân, khi việc nhờ nhỏ và nhanh. Dùng **Could you** khi muốn lịch sự hơn, ví dụ nhờ người mình chưa thân hoặc nhờ cấp trên. Dùng **Would you mind** khi việc nhờ làm phiền người khác nhiều hơn hoặc cần rất lịch sự.",
        "Sau **Would you mind** phải là **động từ thêm -ing**, không dùng to: Would you mind checking my code?",
        "Chú ý cách trả lời: Would you mind nghĩa đen là “bạn có phiền không”, nên muốn đồng ý giúp thì nói **Not at all** (không phiền chút nào) hoặc **No problem**."
      ],
      ex: [["Could you check this?", "Bạn kiểm tra giúp cái này được không?"], ["Would you mind checking this?", "Phiền bạn kiểm tra giúp cái này được không?"]]
    },
    { h: "Ba thì trong một bài standup",
      f: ["Hôm qua: chủ ngữ + động từ quá khứ đơn", "Hôm nay: chủ ngữ + am / is / are + going to + động từ nguyên mẫu", "Vướng mắc: chủ ngữ + am / is / are + động từ thêm -ing hoặc be stuck on + việc"],
      items: [
        { f: "Hôm qua: chủ ngữ + động từ quá khứ đơn",
          mean: "**đã làm xong việc gì** (hôm qua). Phần đầu tiên của bài báo cáo ngắn đầu ngày.",
          parts: [
            ["động từ có quy tắc", "thêm **-ed**: fix → fixed, test → tested, update → updated."],
            ["động từ bất quy tắc", "phải học thuộc: write → wrote, find → found, build → built, have → had, do → did."],
            ["did not + động từ nguyên mẫu", "dạng phủ định: I did not finish the report."]
          ],
          use: "kể những việc đã hoàn thành trước buổi họp hôm nay. Thường mở đầu bằng **Yesterday**. Động từ ở quá khứ giống nhau cho mọi chủ ngữ.",
          note: "Sau did not, động từ quay về nguyên mẫu: “I did not finish”, không nói “I did not finished”.",
          ex: [
            ["Yesterday I updated the user guide.", "Hôm qua tôi đã cập nhật hướng dẫn sử dụng."],
            ["I wrote three tests for the login page.", "Tôi đã viết ba bài kiểm thử cho trang đăng nhập."],
            ["We found a problem with the server.", "Chúng tôi đã phát hiện một vấn đề với máy chủ."],
            ["I did not finish the report yesterday.", "Hôm qua tôi chưa làm xong báo cáo."]
          ] },
        { f: "Hôm nay: chủ ngữ + am / is / are + going to + động từ nguyên mẫu",
          mean: "**định làm, sẽ làm** (hôm nay). Nói kế hoạch đã quyết định từ trước.",
          parts: [
            ["am / is / are", "chia theo chủ ngữ: I am, she is, we are."],
            ["going to", "“định, sẽ”. Khi nói nhanh thường nghe như “gonna”, nhưng khi viết hãy viết đầy đủ going to."],
            ["động từ nguyên mẫu", "việc định làm: deploy, test, write, meet."]
          ],
          use: "nói kế hoạch trong ngày ở buổi họp đầu ngày. Thường mở đầu bằng **Today**.",
          note: "Không bỏ am, is, are: nói “I going to test” là sai. Sau going to luôn là động từ nguyên mẫu.",
          ex: [
            ["Today I am going to test the new feature.", "Hôm nay tôi sẽ kiểm thử tính năng mới."],
            ["Nam is going to deploy the app this afternoon.", "Chiều nay Nam sẽ triển khai ứng dụng."],
            ["We are going to meet the client at ten.", "Chúng tôi sẽ gặp khách hàng lúc 10 giờ."],
            ["I am not going to work on the report today.", "Hôm nay tôi sẽ không làm báo cáo."]
          ] },
        { f: "Vướng mắc: chủ ngữ + am / is / are + động từ thêm -ing hoặc be stuck on + việc",
          mean: "**đang gặp vướng mắc gì**: đang chờ ai, đang bị kẹt ở việc gì.",
          parts: [
            ["am / is / are + động từ thêm -ing", "tình trạng đang diễn ra: I am waiting for…, I am still looking for…"],
            ["be stuck on + việc", "“bị kẹt, bí ở” một việc, chưa làm tiếp được. Sau on là danh từ."],
            ["No blockers", "câu ngắn khi không có vướng mắc gì."]
          ],
          use: "phần cuối của bài báo cáo đầu ngày, để nhóm biết bạn cần giúp gì. Có thể nói thêm câu nhờ: Can someone help me?",
          note: "Không nói “I stuck on” vì thiếu be. Viết đầy đủ: I **am** stuck on, he **is** stuck on.",
          ex: [
            ["I am waiting for the design from Mai.", "Tôi đang chờ bản thiết kế từ Mai."],
            ["I am stuck on a database problem.", "Tôi đang bị kẹt ở một vấn đề cơ sở dữ liệu."],
            ["Hoa is still looking for the bug.", "Hoa vẫn đang tìm lỗi."],
            ["Are you stuck on anything?", "Bạn có đang vướng việc gì không?"]
          ] }
      ],
      p: [
        "Phần **hôm qua** là việc đã xong nên dùng **thì quá khứ đơn**: I fixed, I wrote, I reviewed. Nhiều động từ bất quy tắc hay gặp: write → wrote, find → found, build → built, set up → set up.",
        "Phần **hôm nay** là kế hoạch đã định sẵn nên dùng **going to**: I am going to deploy it.",
        "Phần **vướng mắc** là tình trạng đang diễn ra nên dùng **thì hiện tại tiếp diễn** hoặc **be stuck on**: I am waiting for Nam’s review, I am stuck on a server problem."
      ],
      ex: [["Yesterday I fixed two bugs in the payment page.", "Hôm qua tôi đã sửa hai lỗi ở trang thanh toán."], ["Today I am going to write tests for them.", "Hôm nay tôi sẽ viết test cho chúng."]]
    },
    { h: "I had better và Let’s + động từ nguyên mẫu",
      f: ["I had better + động từ nguyên mẫu (rút gọn: I’d better)", "Let’s + động từ nguyên mẫu (Let’s = Let us)"],
      items: [
        { f: "I had better + động từ nguyên mẫu (rút gọn: I’d better)",
          mean: "**tôi nên làm việc này ngay**, nếu không sẽ không tốt. Mạnh hơn “should” một chút.",
          parts: [
            ["had better", "“tốt hơn là nên”. Dù có had nhưng nói về **bây giờ hoặc sắp tới**, không phải quá khứ."],
            ["I’d better", "dạng rút gọn, gần như luôn dùng khi nói."],
            ["had better not", "phủ định: tốt hơn là không nên. Chữ not đứng sau better."]
          ],
          use: "kết thúc cuộc trò chuyện một cách khéo léo, hoặc nói việc cần làm gấp. Sau better là **động từ nguyên mẫu không có to**.",
          note: "Không nói “I’d better to go” hay “I had better went”. Phủ định là “I’d better not”, không phải “I hadn’t better”.",
          ex: [
            ["I’d better finish this report first.", "Tôi nên làm xong báo cáo này trước đã."],
            ["I’d better call the client now.", "Tôi phải gọi cho khách hàng ngay bây giờ."],
            ["We’d better leave now, or we will be late for the meeting.", "Chúng ta nên đi ngay, không thì sẽ muộn họp."],
            ["You’d better not miss the deadline.", "Bạn không nên trễ hạn chót đâu."]
          ] },
        { f: "Let’s + động từ nguyên mẫu (Let’s = Let us)",
          mean: "**chúng ta hãy cùng…**: rủ người khác cùng làm một việc.",
          parts: [
            ["Let’s", "“mình cùng… đi”. Người nói cũng tham gia việc đó."],
            ["Let’s not", "phủ định: “mình đừng… nhé”."],
            ["động từ nguyên mẫu", "việc muốn rủ: have lunch, take a break, start, check."]
          ],
          use: "rủ đồng nghiệp đi ăn, nghỉ giải lao, hoặc đề nghị bắt đầu một việc trong buổi họp. Trả lời đồng ý: Good idea! Sure!",
          note: "Phân biệt **Let’s** (rủ cả hai cùng làm) với **Let me** (để tôi làm): Let me check (để tôi kiểm tra).",
          ex: [
            ["Let’s have lunch together.", "Mình cùng ăn trưa nhé."],
            ["Let’s start the meeting.", "Chúng ta bắt đầu cuộc họp nhé."],
            ["Let’s take a short break.", "Mình nghỉ giải lao một chút đi."],
            ["Let’s not talk about work now.", "Bây giờ mình đừng nói chuyện công việc nữa."]
          ] }
      ],
      p: [
        "**I had better** nghĩa là “tôi nên làm việc này ngay bây giờ”. Khi nói gần như luôn rút gọn thành **I’d better**. Đây là cách khéo léo để kết thúc cuộc trò chuyện: I’d better get back to work.",
        "**Let’s** dùng để rủ người khác cùng làm một việc. Dạng đầy đủ Let us nghe rất trang trọng, nên trong giao tiếp hằng ngày luôn nói Let’s.",
        "Sau cả hai cấu trúc là **động từ nguyên mẫu không có to**. Không nói “I’d better to go” hay “Let’s to have lunch”."
      ],
      ex: [["I’d better go back to my desk.", "Mình phải về chỗ làm việc đây."], ["Let’s grab a coffee.", "Đi uống cà phê đi."]]
    }
  ],
  mistakes: [
    ["(sáng thứ Hai) How is your weekend?", "How was your weekend?", "Cuối tuần đã qua nên dùng **was**, không dùng is."],
    ["Now I fix the bug. I working on it.", "I am fixing the bug now. I am working on it.", "Việc đang làm dùng **am / is / are + động từ thêm -ing**; không được bỏ am."],
    ["Would you mind to check my code?", "Would you mind checking my code?", "Sau **Would you mind** là động từ thêm -ing, không dùng to."],
    ["Yesterday I fix the bug and write tests.", "Yesterday I fixed the bug and wrote tests.", "Việc hôm qua dùng **thì quá khứ đơn**; write là động từ bất quy tắc nên quá khứ là wrote."],
    ["I’d better to go back. Let’s to have lunch.", "I’d better go back. Let’s have lunch.", "Sau **I’d better** (I had better) và **Let’s** (Let us) là động từ nguyên mẫu, không có to."],
    ["Yesterday I do bug. Today I do test. I have problem, I wait design.", "Yesterday I fixed the login bug. Today I am going to write tests. I am waiting for the design.", "Bài standup cần **ba thì khác nhau** cho ba phần, và dùng đúng động từ: fix a bug, write tests, wait for."],
    ["How’s it going? — I am fine, thank you. And you?", "How’s it going? — Good, thanks. You?", "Câu trả lời sách vở nghe cứng ở văn phòng; người ta trả lời **ngắn và thân thiện**. How’s = How is."]
  ],
  vocab: [
    ["bug", "lỗi phần mềm"], ["feature", "tính năng"], ["release", "bản phát hành"], ["deadline", "hạn chót"],
    ["pull request", "yêu cầu gộp code"], ["deploy", "triển khai lên máy chủ"], ["review", "xem lại, kiểm tra"], ["server", "máy chủ"],
    ["meeting", "cuộc họp"], ["colleague", "đồng nghiệp"], ["pantry", "phòng pha trà, khu nghỉ"], ["coffee break", "giờ nghỉ uống cà phê"],
    ["standup", "buổi họp đứng ngắn mỗi sáng"], ["blocker", "vướng mắc làm dừng việc"], ["stuck on", "bị kẹt ở"], ["access", "quyền truy cập"],
    ["on track", "đúng tiến độ"], ["behind schedule", "chậm tiến độ"], ["hotfix", "bản sửa lỗi khẩn"], ["ping", "nhắn nhanh cho ai"],
    ["sync up", "trao đổi nhanh cho thống nhất"], ["a heads-up", "lời báo trước"], ["grab lunch", "đi ăn trưa nhanh"], ["work from home", "làm việc ở nhà"]
  ],
  tips: [
    "Ở văn phòng, small talk thường rất ngắn, chỉ hai đến ba câu. Không cần nói dài; quan trọng là **thân thiện và chủ động**.",
    "Mỗi sáng tự nói ba câu “I am working on…” (rút gọn: I’m working on…) về công việc thật của bạn.",
    "Luyện cùng một yêu cầu ở ba mức: “Can you check this?”, “Could you check this?”, “Would you mind checking this?”.",
    "Trước buổi standup, viết sẵn ba dòng: hôm qua (quá khứ đơn), hôm nay (going to), vướng mắc (hiện tại tiếp diễn), rồi đọc to một lần.",
    "Mỗi ngày dùng thử một từ mới như **ping**, **sync up** hay **heads-up** khi nhắn tin cho đồng nghiệp."
  ]
};
