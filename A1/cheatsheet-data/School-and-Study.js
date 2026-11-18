/* Cheat sheet: School & Study (Trường lớp và việc học). Hiển thị bởi cheatsheet.js. */
window.A1_CHEAT = {
  goal: [
    "Nói mình đang học lớp mấy, sinh viên năm mấy, học ngành gì và học ở trường nào.",
    "Gọi tên các môn học và nói môn mình thích, môn mình thấy khó, kèm lý do.",
    "Dùng câu lịch sự **May I…?** và **Could you…?** để xin phép và nhờ thầy cô trong lớp.",
    "Kể về bài tập, thi cử và điểm số; phân biệt rõ **take**, **pass** và **fail** một kỳ thi.",
    "Chia sẻ mục tiêu sau khi tốt nghiệp như đi du học, xin học bổng hoặc tìm việc."
  ],
  phrases: [
    { h: "Giới thiệu việc học của bạn", rows: [
      ["I am in grade eleven.", "Tôi đang học lớp Mười một.", "Người bản xứ nói I’m in grade eleven. (I’m = I am)."],
      ["I am a second-year student at university.", "Tôi là sinh viên năm hai đại học.", "Dạng rút gọn: I’m a second-year student."],
      ["I am majoring in business.", "Tôi học chuyên ngành kinh doanh."],
      ["I study at Hanoi University.", "Tôi học ở Đại học Hà Nội."],
      ["My son is in primary school.", "Con trai tôi đang học tiểu học."]
    ]},
    { h: "Nói với thầy cô trong lớp", rows: [
      ["Sorry I am late. May I come in?", "Em xin lỗi vì đến muộn. Em vào lớp được không ạ?", "Câu tự nhiên thường nói: Sorry I’m late. (I’m = I am)."],
      ["Could you repeat that, please?", "Thầy hoặc cô nhắc lại được không ạ?"],
      ["What does this word mean?", "Từ này nghĩa là gì ạ?"],
      ["How do you spell it?", "Từ đó viết như thế nào ạ?"],
      ["I do not understand this part. Could you explain it again?", "Em chưa hiểu phần này. Thầy hoặc cô giải thích lại được không ạ?", "Dạng rút gọn: I don’t understand (don’t = do not)."]
    ]},
    { h: "Hiểu lời thầy cô nói", rows: [
      ["Open your books to page twenty.", "Các em mở sách trang 20."],
      ["Work in pairs.", "Các em làm việc theo cặp."],
      ["Hand in your homework, please.", "Các em nộp bài tập về nhà nào."],
      ["Any questions?", "Có câu hỏi nào không?", "Câu rút gọn của Do you have any questions?"]
    ]},
    { h: "Bài tập và thi cử", rows: [
      ["I have a lot of homework tonight.", "Tối nay tôi có nhiều bài tập."],
      ["When is the deadline for the assignment?", "Hạn nộp bài là khi nào?"],
      ["I am studying for my final exam.", "Tôi đang ôn thi cuối kỳ.", "Dạng rút gọn: I’m studying (I’m = I am)."],
      ["I passed! I got an A.", "Tôi đỗ rồi! Tôi được điểm A."],
      ["I failed the math test, so I have to retake it.", "Tôi trượt bài kiểm tra toán nên phải thi lại."]
    ]},
    { h: "Môn học yêu thích và cách học", rows: [
      ["What is your favorite subject?", "Môn bạn thích nhất là gì?", "Thường nói rút gọn: What’s your favorite subject? (What’s = What is)."],
      ["I love history because the stories are interesting.", "Tôi thích môn lịch sử vì những câu chuyện rất hay."],
      ["I find chemistry really difficult.", "Tôi thấy môn hóa học rất khó."],
      ["I study better in the library.", "Tôi học ở thư viện hiệu quả hơn."],
      ["I use flashcards to learn new words.", "Tôi dùng thẻ học để học từ mới."]
    ]},
    { h: "Mục tiêu sau khi ra trường", rows: [
      ["What do you want to do after you graduate?", "Ra trường bạn muốn làm gì?"],
      ["I want to study abroad.", "Tôi muốn đi du học."],
      ["I am applying for a scholarship.", "Tôi đang nộp hồ sơ xin học bổng.", "Dạng rút gọn: I’m applying (I’m = I am)."],
      ["After I graduate, I will look for a job in marketing.", "Sau khi tốt nghiệp, tôi sẽ tìm việc trong ngành marketing.", "Dạng rút gọn: I’ll = I will."]
    ]}
  ],
  grammar: [
    { h: "Nói lớp, năm học và ngành học",
      f: ["be in grade + số (học sinh phổ thông)", "a first / second / third-year student (sinh viên)", "study / major in + tên ngành", "at + tên trường"],
      p: [
        "Học sinh phổ thông dùng **be in grade + số**: I am in grade ten. Sinh viên đại học thì nói mình là sinh viên năm mấy bằng **a second-year student**, có dấu gạch nối giữa số thứ tự và chữ year.",
        "Để nói ngành học, dùng **major in** hoặc **study** + tên ngành. Không dùng “study about business” vì study đã mang nghĩa “học”, không cần thêm about.",
        "Tên trường đứng sau giới từ **at**: I study at Hanoi University. Không nói “student year two” vì tiếng Anh đặt số thứ tự lên trước danh từ."
      ],
      ex: [["I am a third-year student.", "Tôi là sinh viên năm ba."], ["I am majoring in economics.", "Tôi học chuyên ngành kinh tế."]]
    },
    { h: "May I…? để xin phép và Could you…? để nhờ",
      f: ["May I + động từ nguyên mẫu?", "Could you + động từ nguyên mẫu?", "What does + từ cần hỏi + mean?"],
      p: [
        "Dùng **May I…?** khi bạn xin phép được làm một việc gì đó, ví dụ hỏi một câu hay đi vệ sinh. Đây là cách nói rất lịch sự, hợp với thầy cô.",
        "Dùng **Could you…?** khi bạn nhờ người khác làm gì cho mình, ví dụ nói chậm hơn hoặc giải thích lại. Thêm **please** ở cuối câu để nghe nhẹ nhàng hơn.",
        "Khi hỏi nghĩa của một từ, câu hỏi cần trợ động từ **does**: What does this word mean? Sau does, động từ mean giữ nguyên, không thêm -s."
      ],
      ex: [["May I ask a question?", "Em hỏi một câu được không ạ?"], ["Could you speak more slowly?", "Thầy hoặc cô nói chậm hơn được không ạ?"]]
    },
    { h: "Phân biệt take, pass và fail một kỳ thi",
      f: ["take an exam (đi thi, làm bài thi)", "pass an exam (thi đỗ)", "fail an exam (thi trượt)"],
      p: [
        "**Take an exam** chỉ có nghĩa là bạn đi thi, ngồi làm bài. Câu “I took the exam” chưa cho người nghe biết bạn đỗ hay trượt.",
        "Muốn báo tin đỗ thì dùng **pass**, trượt thì dùng **fail**. Nếu phải thi lại, nói **retake**: I have to retake it."
      ],
      ex: [["I took the test yesterday.", "Hôm qua tôi đã làm bài kiểm tra."], ["I passed! I got an A.", "Tôi đỗ rồi! Tôi được điểm A."]]
    },
    { h: "Dùng do hay make?",
      f: ["do + homework / an exercise / research", "make + a mistake / progress / notes"],
      p: [
        "**Do** thường đi với các công việc, nhiệm vụ phải làm: do homework, do an exercise, do research. Nói làm bài thi tốt hay kém cũng dùng do: do well, do badly.",
        "**Make** thường đi với việc tạo ra một thứ gì đó: make a mistake (mắc lỗi), make progress (tiến bộ), make notes (ghi chép). Đây là các cụm cố định nên cần học thuộc theo cặp.",
        "Riêng bài thuyết trình có thể nói **make a presentation** hoặc **give a presentation**, cả hai đều đúng."
      ],
      ex: [["I do my homework every evening.", "Tối nào tôi cũng làm bài tập về nhà."], ["I made many mistakes.", "Tôi đã mắc nhiều lỗi."]]
    },
    { h: "Nói môn thích, môn khó với find và be good at",
      f: ["find + danh từ + tính từ", "find it + tính từ + to + động từ nguyên mẫu", "be good at / bad at + danh từ hoặc động từ thêm -ing"],
      p: [
        "Người Việt hay nói “tôi cảm thấy môn toán khó”, nhưng tiếng Anh tự nhiên dùng **find**: I find math difficult. Cấu trúc này ngắn gọn và nghe rất bản xứ.",
        "Khi muốn nói làm một việc gì đó thì khó hay dễ, dùng **find it + tính từ + to + động từ nguyên mẫu**: I find it hard to remember new words.",
        "Để nói mình giỏi hay kém một môn, dùng **be good at** hoặc **be bad at**. Sau at là danh từ hoặc động từ thêm -ing."
      ],
      ex: [["I find English easy.", "Tôi thấy tiếng Anh dễ."], ["I am good at math.", "Tôi giỏi toán."]]
    },
    { h: "After, When, Before + hiện tại đơn khi nói về tương lai",
      f: ["After / When / Before + chủ ngữ + động từ hiện tại đơn, chủ ngữ + will + động từ nguyên mẫu"],
      p: [
        "Khi nói về một việc trong tương lai, vế bắt đầu bằng **after**, **when**, **before** hoặc **as soon as** dùng **thì hiện tại đơn**, không dùng will. Will chỉ đặt ở vế còn lại.",
        "Lý do: vế after hay when chỉ là mốc thời gian, còn vế chính mới là việc bạn sẽ làm. Vì vậy không nói “After I will graduate”."
      ],
      ex: [["When I finish university, I will travel for a month.", "Khi học xong đại học, tôi sẽ đi du lịch một tháng."], ["After I get my visa, I will book my flight.", "Sau khi có thị thực, tôi sẽ đặt vé máy bay."]]
    }
  ],
  mistakes: [
    ["I am student year two, study about business.", "I am a second-year student. I am majoring in business.", "Số thứ tự đứng trước: **a second-year student**; ngành học dùng **major in**, không dùng “study about”."],
    ["What mean this word?", "What does this word mean?", "Câu hỏi cần trợ động từ **does**, sau đó động từ mean giữ nguyên."],
    ["Teacher, you say again.", "Could you say that again, please?", "Nhờ thầy cô thì dùng **Could you…, please?** cho lịch sự, không ra lệnh."],
    ["I make my homework. I did many mistakes.", "I do my homework. I made many mistakes.", "Cụm cố định: **do homework**, **make a mistake**."],
    ["I took the exam, so I am happy because I got an A.", "I passed the exam. I got an A.", "**Take** chỉ là đi thi; muốn nói thi đỗ phải dùng **pass**."],
    ["I feel math is difficult for me to learn it.", "I find math difficult.", "Dùng **find + danh từ + tính từ**, ngắn gọn và tự nhiên hơn nhiều."],
    ["After I will graduate, I will work in Japan.", "After I graduate, I will work in Japan.", "Vế bắt đầu bằng **After** dùng hiện tại đơn, không dùng will."]
  ],
  vocab: [
    ["primary school", "trường tiểu học"], ["secondary school", "trường trung học cơ sở"], ["high school", "trường trung học phổ thông"], ["university", "trường đại học"],
    ["math", "môn toán"], ["literature", "môn văn học"], ["history", "môn lịch sử"], ["geography", "môn địa lý"],
    ["physics", "môn vật lý"], ["chemistry", "môn hóa học"], ["biology", "môn sinh học"], ["computer science", "môn tin học, khoa học máy tính"],
    ["homework", "bài tập về nhà"], ["assignment", "bài tập được giao"], ["deadline", "hạn nộp"], ["final exam", "kỳ thi cuối kỳ"],
    ["presentation", "bài thuyết trình"], ["graduate", "tốt nghiệp"], ["scholarship", "học bổng"], ["study abroad", "đi du học"],
    ["semester", "học kỳ"], ["tuition fee", "học phí"], ["revise", "ôn tập (tiếng Anh Anh; tiếng Anh Mỹ dùng review)"], ["fall behind", "bị tụt lại phía sau"]
  ],
  tips: [
    "Mỗi buổi học tiếng Anh, thử nói ít nhất một câu thật với thầy cô, ví dụ: “Could you explain that again, please?”.",
    "Học **do** và **make** theo cụm, không học từ đơn lẻ: viết 8 câu, mỗi câu dùng một cụm như do homework, make a mistake.",
    "Khi kể về kỳ thi, luôn hỏi lại mình: đó là **take** (đi thi), **pass** (đỗ) hay **fail** (trượt)?",
    "Luyện câu mục tiêu theo khuôn **After I…, I will…** với dự định thật của bạn, nhớ vế After không có will.",
    "Thu âm một phút giới thiệu việc học: bạn học lớp mấy hoặc ngành gì, môn thích, môn khó và mục tiêu sau khi ra trường."
  ]
};
