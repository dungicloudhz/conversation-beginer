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
      p: [
        "Khi hỏi về một việc **vẫn đang diễn ra** (dự án, tính năng, tuần làm việc), dùng **How is + danh từ + going?**. Khi nói, How is thường rút gọn thành How’s: How’s the project going?",
        "Khi hỏi về một việc **đã kết thúc** (buổi họp, buổi demo, cuối tuần), dùng **How was + danh từ?**, vì was là quá khứ của is.",
        "Vì vậy sáng thứ Hai hỏi về cuối tuần phải dùng **was**, vì cuối tuần đã qua rồi. Hỏi “How is your weekend?” vào thứ Hai nghe như cuối tuần vẫn chưa hết."
      ],
      ex: [["How is the project going?", "Dự án tiến triển thế nào rồi?"], ["How was the meeting?", "Buổi họp thế nào?"]]
    },
    { h: "Hiện tại tiếp diễn cho việc đang làm",
      f: ["chủ ngữ + am / is / are + động từ thêm -ing", "chủ ngữ + am / is / are + working on + việc"],
      p: [
        "Dùng **thì hiện tại tiếp diễn** khi nói việc bạn đang làm ngay lúc này hoặc trong giai đoạn này, ví dụ đang sửa lỗi, đang làm một tính năng trong tuần. Không được bỏ am, is, are: nói “I working” là sai.",
        "Cụm **work on + việc** nghĩa là “đang làm, đang xử lý việc gì”, rất hay dùng trong công ty công nghệ: I am working on the search feature.",
        "Còn việc **thường xuyên, cố định** thì dùng **thì hiện tại đơn**: I work in the mobile team (tôi làm ở nhóm di động, đó là công việc lâu dài)."
      ],
      ex: [["I am fixing the bug now.", "Bây giờ tôi đang sửa lỗi."], ["I am working on the search feature.", "Tôi đang làm tính năng tìm kiếm."]]
    },
    { h: "Can, Could, Would you mind: ba mức lịch sự khi nhờ vả",
      f: ["Can you + động từ nguyên mẫu? (thân mật)", "Could you + động từ nguyên mẫu? (lịch sự)", "Would you mind + động từ thêm -ing? (rất lịch sự)"],
      p: [
        "Dùng **Can you** với đồng nghiệp thân, khi việc nhờ nhỏ và nhanh. Dùng **Could you** khi muốn lịch sự hơn, ví dụ nhờ người mình chưa thân hoặc nhờ cấp trên. Dùng **Would you mind** khi việc nhờ làm phiền người khác nhiều hơn hoặc cần rất lịch sự.",
        "Sau **Would you mind** phải là **động từ thêm -ing**, không dùng to: Would you mind checking my code?",
        "Chú ý cách trả lời: Would you mind nghĩa đen là “bạn có phiền không”, nên muốn đồng ý giúp thì nói **Not at all** (không phiền chút nào) hoặc **No problem**."
      ],
      ex: [["Could you check this?", "Bạn kiểm tra giúp cái này được không?"], ["Would you mind checking this?", "Phiền bạn kiểm tra giúp cái này được không?"]]
    },
    { h: "Ba thì trong một bài standup",
      f: ["Hôm qua: chủ ngữ + động từ quá khứ đơn", "Hôm nay: chủ ngữ + am / is / are + going to + động từ nguyên mẫu", "Vướng mắc: chủ ngữ + am / is / are + động từ thêm -ing hoặc be stuck on + việc"],
      p: [
        "Phần **hôm qua** là việc đã xong nên dùng **thì quá khứ đơn**: I fixed, I wrote, I reviewed. Nhiều động từ bất quy tắc hay gặp: write → wrote, find → found, build → built, set up → set up.",
        "Phần **hôm nay** là kế hoạch đã định sẵn nên dùng **going to**: I am going to deploy it.",
        "Phần **vướng mắc** là tình trạng đang diễn ra nên dùng **thì hiện tại tiếp diễn** hoặc **be stuck on**: I am waiting for Nam’s review, I am stuck on a server problem."
      ],
      ex: [["Yesterday I fixed two bugs in the payment page.", "Hôm qua tôi đã sửa hai lỗi ở trang thanh toán."], ["Today I am going to write tests for them.", "Hôm nay tôi sẽ viết test cho chúng."]]
    },
    { h: "I had better và Let’s + động từ nguyên mẫu",
      f: ["I had better + động từ nguyên mẫu (rút gọn: I’d better)", "Let’s + động từ nguyên mẫu (Let’s = Let us)"],
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
