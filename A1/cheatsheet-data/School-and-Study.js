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
      items: [
        { f: "be in grade + số (học sinh phổ thông)",
          mean: "**đang học lớp mấy** ở trường phổ thông.",
          parts: [
            ["be", "chia theo chủ ngữ: I am, he is, they are."],
            ["in grade", "“ở lớp”, luôn có giới từ **in**."],
            ["số", "số đếm, đứng **sau** grade: grade six, grade ten, grade twelve."]
          ],
          use: "nói mình hoặc con em mình học lớp mấy. Dùng cho học sinh tiểu học, trung học cơ sở và trung học phổ thông, không dùng cho sinh viên đại học.",
          note: "Cũng có cách nói **the tenth grade** (số thứ tự đứng trước). Nhưng đừng trộn hai cách thành “grade tenth”.",
          ex: [
            ["I am in grade eleven.", "Tôi học lớp 11."],
            ["My brother is in grade six.", "Em trai tôi học lớp 6."],
            ["What grade are you in?", "Bạn học lớp mấy?"],
            ["She is not in grade nine, she is in grade ten.", "Cô ấy không học lớp 9, cô ấy học lớp 10."]
          ] },
        { f: "a first / second / third-year student (sinh viên)",
          mean: "**sinh viên năm thứ mấy** ở đại học hoặc cao đẳng.",
          parts: [
            ["first-year", "năm nhất (năm thứ nhất)."],
            ["second-year", "năm hai."],
            ["third-year", "năm ba. Tiếp theo là fourth-year (năm tư), final-year (năm cuối)."],
            ["a", "luôn có **a** phía trước vì student là danh từ đếm được số ít."]
          ],
          use: "giới thiệu bản thân khi đang học đại học. Số thứ tự và year nối bằng dấu gạch nối, cả cụm đứng **trước** student.",
          note: "Không nói “student year two” hay “a two-year student” (two-year nghĩa là khóa học kéo dài hai năm). Dùng số thứ tự: first, second, third.",
          ex: [
            ["I am a first-year student at a college in Da Nang.", "Tôi là sinh viên năm nhất ở một trường cao đẳng tại Đà Nẵng."],
            ["My sister is a second-year student.", "Chị tôi là sinh viên năm hai."],
            ["Are you a third-year student?", "Bạn là sinh viên năm ba à?"],
            ["He is a final-year student, so he is very busy.", "Anh ấy là sinh viên năm cuối nên rất bận."]
          ] },
        { f: "study / major in + tên ngành",
          mean: "**học ngành gì**, **học chuyên ngành gì** ở đại học.",
          parts: [
            ["study", "“học” nói chung. Dùng được cho cả ngành học lẫn môn học: I study law."],
            ["major in", "“học chuyên ngành”, nghe rõ là ngành chính ở đại học, hay dùng ở Mỹ. Luôn có **in**."],
            ["tên ngành", "danh từ không có a, the: economics, law, computer science, nursing."]
          ],
          use: "trả lời câu hỏi “What do you study?” hoặc “What is your major?”. Thì hiện tại đơn (I study) hoặc hiện tại tiếp diễn (I am majoring in) đều được.",
          note: "Sau study **không** thêm about hay in: nói “I study law”, không nói “I study about law”. Sau major thì **phải** có in.",
          ex: [
            ["I study computer science.", "Tôi học ngành khoa học máy tính."],
            ["She is majoring in English.", "Cô ấy học chuyên ngành tiếng Anh."],
            ["What do you study?", "Bạn học ngành gì?"],
            ["He does not study business, he studies law.", "Anh ấy không học kinh doanh, anh ấy học luật."]
          ] },
        { f: "at + tên trường",
          mean: "**học ở trường nào**. Giới từ at chỉ địa điểm học.",
          parts: [
            ["at", "“ở, tại” một trường cụ thể: at Hanoi University, at Le Loi High School."],
            ["tên trường", "viết hoa các chữ cái đầu; thường không có the trước tên riêng."]
          ],
          use: "đặt sau động từ study hoặc sau cụm a student: I study at…, I am a student at… Cũng dùng với teach (dạy) và work (làm).",
          note: "Người Việt hay dùng **in** vì nghĩ “trong trường”. Với tên trường, dùng **at**. Câu hỏi là: Where do you study?",
          ex: [
            ["I study at Can Tho University.", "Tôi học ở Đại học Cần Thơ."],
            ["My son is a student at Nguyen Du High School.", "Con trai tôi là học sinh trường Trung học Nguyễn Du."],
            ["Where do you study? I study at a language school.", "Bạn học ở đâu? Tôi học ở một trường ngoại ngữ."],
            ["My mother teaches at a primary school.", "Mẹ tôi dạy ở một trường tiểu học."]
          ] }
      ],
      p: [
        "Học sinh phổ thông dùng **be in grade + số**: I am in grade ten. Sinh viên đại học thì nói mình là sinh viên năm mấy bằng **a second-year student**, có dấu gạch nối giữa số thứ tự và chữ year.",
        "Để nói ngành học, dùng **major in** hoặc **study** + tên ngành. Không dùng “study about business” vì study đã mang nghĩa “học”, không cần thêm about.",
        "Tên trường đứng sau giới từ **at**: I study at Hanoi University. Không nói “student year two” vì tiếng Anh đặt số thứ tự lên trước danh từ."
      ],
      ex: [["I am a third-year student.", "Tôi là sinh viên năm ba."], ["I am majoring in economics.", "Tôi học chuyên ngành kinh tế."]]
    },
    { h: "May I…? để xin phép và Could you…? để nhờ",
      f: ["May I + động từ nguyên mẫu?", "Could you + động từ nguyên mẫu?", "What does + từ cần hỏi + mean?"],
      items: [
        { f: "May I + động từ nguyên mẫu?",
          mean: "**em / tôi có thể… được không?**: **xin phép** được tự mình làm một việc.",
          parts: [
            ["May I", "rất lịch sự, hợp khi nói với thầy cô, người lớn tuổi. Chủ ngữ là **I** vì người làm việc đó là mình."],
            ["Can I", "cùng nghĩa nhưng thân mật hơn, dùng với bạn cùng lớp."],
            ["động từ nguyên mẫu", "việc mình muốn làm: ask, go, borrow, open, sit."]
          ],
          use: "xin phép trong lớp học: hỏi câu hỏi, ra ngoài, mượn đồ, vào lớp muộn. Thầy cô thường trả lời: Yes, of course. Sure, go ahead.",
          note: "**May I** là mình xin làm; **Could you** là nhờ người khác làm. Đừng nói “May you help me?”.",
          ex: [
            ["May I go to the toilet, please?", "Em đi vệ sinh được không ạ?"],
            ["May I borrow your pen?", "Mình mượn bút của bạn được không?"],
            ["May I come in?", "Em vào lớp được không ạ?"],
            ["May I open the window? It is hot.", "Em mở cửa sổ được không ạ? Nóng quá."]
          ] },
        { f: "Could you + động từ nguyên mẫu?",
          mean: "**thầy / cô / bạn có thể… giúp không?**: **nhờ người khác** làm một việc cho mình.",
          parts: [
            ["Could you", "lịch sự, hợp với thầy cô. Với bạn bè có thể nói Can you."],
            ["động từ nguyên mẫu", "việc nhờ người khác làm: repeat, explain, speak, write, spell."],
            ["please", "thêm ở cuối câu để lịch sự hơn."]
          ],
          use: "khi không nghe rõ, không hiểu bài, hoặc cần thầy cô làm gì đó: nhắc lại, giải thích, viết lên bảng, đánh vần.",
          note: "Sau could là động từ nguyên mẫu, không thêm to: không nói “Could you to repeat”.",
          ex: [
            ["Could you repeat that, please?", "Thầy hoặc cô nhắc lại được không ạ?"],
            ["Could you write it on the board?", "Thầy hoặc cô viết lên bảng được không ạ?"],
            ["Could you spell that word, please?", "Thầy hoặc cô đánh vần từ đó được không ạ?"],
            ["Could you explain the homework again?", "Thầy hoặc cô giải thích lại bài tập về nhà được không ạ?"]
          ] },
        { f: "What does + từ cần hỏi + mean?",
          mean: "**từ này nghĩa là gì?** Câu hỏi nghĩa của một từ hoặc một cụm từ.",
          parts: [
            ["What does", "“cái gì”, mượn trợ động từ **does** vì chủ ngữ (một từ) là số ít."],
            ["từ cần hỏi", "từ mình không hiểu, hoặc this word, that word."],
            ["mean", "“có nghĩa là”. Giữ nguyên mẫu vì đã có does, không nói means."]
          ],
          use: "hỏi thầy cô hoặc bạn bè khi gặp từ mới. Câu trả lời dùng **means**: It means…",
          note: "Khi hỏi nhiều từ cùng lúc dùng **do**: What do these words mean? Không nói “What is mean…?”.",
          ex: [
            ["What does “deadline” mean?", "“Deadline” nghĩa là gì?"],
            ["Excuse me, what does this word mean?", "Xin lỗi, từ này nghĩa là gì ạ?"],
            ["What do these two words mean?", "Hai từ này nghĩa là gì?"],
            ["“Library” means a place with many books.", "“Library” nghĩa là nơi có nhiều sách."]
          ] }
      ],
      p: [
        "Dùng **May I…?** khi bạn xin phép được làm một việc gì đó, ví dụ hỏi một câu hay đi vệ sinh. Đây là cách nói rất lịch sự, hợp với thầy cô.",
        "Dùng **Could you…?** khi bạn nhờ người khác làm gì cho mình, ví dụ nói chậm hơn hoặc giải thích lại. Thêm **please** ở cuối câu để nghe nhẹ nhàng hơn.",
        "Khi hỏi nghĩa của một từ, câu hỏi cần trợ động từ **does**: What does this word mean? Sau does, động từ mean giữ nguyên, không thêm -s."
      ],
      ex: [["May I ask a question?", "Em hỏi một câu được không ạ?"], ["Could you speak more slowly?", "Thầy hoặc cô nói chậm hơn được không ạ?"]]
    },
    { h: "Phân biệt take, pass và fail một kỳ thi",
      f: ["take an exam (đi thi, làm bài thi)", "pass an exam (thi đỗ)", "fail an exam (thi trượt)"],
      items: [
        { f: "take an exam (đi thi, làm bài thi)",
          mean: "**đi thi, ngồi làm bài thi**. Chỉ nói việc tham gia thi, **chưa nói kết quả**.",
          parts: [
            ["take", "“tham gia, làm (bài thi)”. Quá khứ bất quy tắc: **took**."],
            ["an exam / a test", "exam là kỳ thi lớn; test là bài kiểm tra nhỏ hơn. Cả hai đi với take."],
            ["have an exam", "cách nói khác: “có lịch thi”, ví dụ I have an exam tomorrow."]
          ],
          use: "nói lịch thi, việc đã đi thi hay sắp đi thi. Sau take thường là an exam, a test, the English exam.",
          note: "Người Việt hay nói “do an exam”, nghe chưa tự nhiên; dùng **take**. Và “I took the exam” không có nghĩa là đỗ.",
          ex: [
            ["I am going to take my English exam next week.", "Tuần sau tôi sẽ thi môn tiếng Anh."],
            ["We took a math test this morning.", "Sáng nay chúng tôi làm bài kiểm tra toán."],
            ["When do you take the IELTS exam?", "Khi nào bạn thi IELTS?"],
            ["She did not take the test because she was sick.", "Cô ấy không đi thi vì bị ốm."]
          ] },
        { f: "pass an exam (thi đỗ)",
          mean: "**thi đỗ, vượt qua** kỳ thi, đạt điểm yêu cầu.",
          parts: [
            ["pass", "“đỗ, qua”. Quá khứ có quy tắc: **passed**."],
            ["pass with + điểm", "đỗ với số điểm nào: pass with a high score."]
          ],
          use: "báo tin vui về kết quả thi. Có thể chúc người khác: I hope you pass!",
          note: "Đừng nhầm **pass** (thi đỗ) với **take** (đi thi). “I passed the exam” mới là đỗ.",
          ex: [
            ["I passed my driving test!", "Tôi thi đỗ bằng lái xe rồi!"],
            ["Did you pass the final exam?", "Bạn có đỗ kỳ thi cuối kỳ không?"],
            ["She passed with a very high score.", "Cô ấy đỗ với điểm rất cao."],
            ["Good luck! I hope you pass.", "Chúc may mắn! Mong bạn thi đỗ."]
          ] },
        { f: "fail an exam (thi trượt)",
          mean: "**thi trượt, thi rớt**, không đạt điểm yêu cầu.",
          parts: [
            ["fail", "“trượt”. Quá khứ có quy tắc: **failed**."],
            ["retake", "“thi lại” sau khi trượt: I have to retake the exam."]
          ],
          use: "nói kết quả không tốt, thường đi kèm kế hoạch thi lại hoặc ôn thêm.",
          note: "Không nói “I was failed the exam”. Chỉ cần “I failed the exam”. Phủ định “I did not fail” nghĩa là tôi không trượt.",
          ex: [
            ["I failed the chemistry test.", "Tôi trượt bài kiểm tra hóa."],
            ["He failed his driving test twice.", "Anh ấy thi bằng lái trượt hai lần."],
            ["Do not worry. You will not fail.", "Đừng lo. Bạn sẽ không trượt đâu."],
            ["I failed the exam, so I have to retake it in June.", "Tôi thi trượt nên phải thi lại vào tháng Sáu."]
          ] }
      ],
      p: [
        "**Take an exam** chỉ có nghĩa là bạn đi thi, ngồi làm bài. Câu “I took the exam” chưa cho người nghe biết bạn đỗ hay trượt.",
        "Muốn báo tin đỗ thì dùng **pass**, trượt thì dùng **fail**. Nếu phải thi lại, nói **retake**: I have to retake it."
      ],
      ex: [["I took the test yesterday.", "Hôm qua tôi đã làm bài kiểm tra."], ["I passed! I got an A.", "Tôi đỗ rồi! Tôi được điểm A."]]
    },
    { h: "Dùng do hay make?",
      f: ["do + homework / an exercise / research", "make + a mistake / progress / notes"],
      items: [
        { f: "do + homework / an exercise / research",
          mean: "**làm** một công việc, nhiệm vụ được giao hoặc phải hoàn thành.",
          parts: [
            ["do homework", "làm bài tập về nhà. Homework không đếm được: không nói “a homework”, “homeworks”."],
            ["do an exercise", "làm một bài tập (trong sách, trên lớp). Đếm được: two exercises."],
            ["do research", "nghiên cứu, tìm hiểu tài liệu. Không đếm được."]
          ],
          use: "nói về các nhiệm vụ học tập. Chia do theo thì: do / does (hiện tại), did (quá khứ), am doing (đang làm).",
          note: "Mẹo nhớ: **do** = thực hiện một nhiệm vụ có sẵn; **make** = tạo ra một thứ mới. Cũng nói do well / do badly in an exam.",
          ex: [
            ["She does her homework after dinner.", "Cô ấy làm bài tập về nhà sau bữa tối."],
            ["Please do exercise three on page ten.", "Các em làm bài tập số ba ở trang mười nhé."],
            ["I am doing research for my project.", "Tôi đang tìm tài liệu cho dự án của mình."],
            ["Did you do your homework?", "Em đã làm bài tập về nhà chưa?"]
          ] },
        { f: "make + a mistake / progress / notes",
          mean: "**tạo ra** một kết quả: mắc lỗi, tiến bộ, ghi chép.",
          parts: [
            ["make a mistake", "mắc một lỗi. Nhiều lỗi: make mistakes."],
            ["make progress", "tiến bộ. Progress không đếm được, không có a."],
            ["make notes", "ghi chép khi nghe giảng (cũng nói take notes)."]
          ],
          use: "nói về kết quả học tập. Quá khứ của make là **made**.",
          note: "Không nói “do a mistake”. Đây là cụm cố định, học thuộc theo cặp: **make** a mistake, **make** progress.",
          ex: [
            ["I often make mistakes with English verbs.", "Tôi hay mắc lỗi với động từ tiếng Anh."],
            ["You are making good progress!", "Em đang tiến bộ tốt lắm!"],
            ["I make notes in every class.", "Lớp nào tôi cũng ghi chép."],
            ["Do not worry about making mistakes.", "Đừng lo về việc mắc lỗi."]
          ] }
      ],
      p: [
        "**Do** thường đi với các công việc, nhiệm vụ phải làm: do homework, do an exercise, do research. Nói làm bài thi tốt hay kém cũng dùng do: do well, do badly.",
        "**Make** thường đi với việc tạo ra một thứ gì đó: make a mistake (mắc lỗi), make progress (tiến bộ), make notes (ghi chép). Đây là các cụm cố định nên cần học thuộc theo cặp.",
        "Riêng bài thuyết trình có thể nói **make a presentation** hoặc **give a presentation**, cả hai đều đúng."
      ],
      ex: [["I do my homework every evening.", "Tối nào tôi cũng làm bài tập về nhà."], ["I made many mistakes.", "Tôi đã mắc nhiều lỗi."]]
    },
    { h: "Nói môn thích, môn khó với find và be good at",
      f: ["find + danh từ + tính từ", "find it + tính từ + to + động từ nguyên mẫu", "be good at / bad at + danh từ hoặc động từ thêm -ing"],
      items: [
        { f: "find + danh từ + tính từ",
          mean: "**thấy (một thứ gì đó) như thế nào**: nói cảm nhận của mình về một môn học, một bài học.",
          parts: [
            ["find", "ở đây nghĩa là “thấy, cảm thấy”, không phải “tìm”. Với he, she dùng **finds**."],
            ["danh từ", "môn học hoặc sự việc: math, this book, the lesson, grammar."],
            ["tính từ", "nhận xét: easy, difficult, boring, interesting, useful."]
          ],
          use: "nói môn nào dễ, khó, thú vị hay chán. Tính từ đứng **ngay sau** danh từ, không cần to be.",
          note: "Không nói “I find math is difficult” hay “I feel math difficult”. Chỉ cần: I find math difficult.",
          ex: [
            ["I find history very interesting.", "Tôi thấy môn lịch sử rất thú vị."],
            ["My brother finds physics difficult.", "Em trai tôi thấy môn vật lý khó."],
            ["Do you find this book useful?", "Bạn có thấy cuốn sách này hữu ích không?"],
            ["I do not find grammar boring.", "Tôi không thấy ngữ pháp nhàm chán."]
          ] },
        { f: "find it + tính từ + to + động từ nguyên mẫu",
          mean: "**thấy làm một việc gì đó là (dễ / khó…)**. Nói cảm nhận về một **hành động**.",
          parts: [
            ["it", "từ thay thế tạm, đại diện cho việc ở phía sau. **Không được bỏ** it."],
            ["tính từ", "hard, easy, difficult, fun, boring."],
            ["to + động từ nguyên mẫu", "việc mình nói đến: to remember, to speak, to get up early."]
          ],
          use: "khi điều mình nhận xét là một hành động (nhớ từ mới, nói trước lớp, dậy sớm) chứ không phải một danh từ.",
          note: "Người Việt hay bỏ it: “I find hard to remember” là sai. Phải nói “I find **it** hard to remember”.",
          ex: [
            ["I find it hard to speak in front of the class.", "Tôi thấy nói trước lớp thật khó."],
            ["She finds it easy to learn new words.", "Cô ấy thấy học từ mới dễ."],
            ["Do you find it difficult to get up early?", "Bạn có thấy dậy sớm khó không?"],
            ["I find it fun to study with friends.", "Tôi thấy học cùng bạn bè rất vui."]
          ] },
        { f: "be good at / bad at + danh từ hoặc động từ thêm -ing",
          mean: "**giỏi** hoặc **kém** một môn, một kỹ năng. Nói về **năng lực**.",
          parts: [
            ["be", "chia theo chủ ngữ: I am, she is, they are."],
            ["good at", "giỏi về…"],
            ["bad at", "kém về… Nhẹ nhàng hơn có thể nói **not very good at**."],
            ["at", "giới từ bắt buộc; sau at là danh từ (math) hoặc động từ thêm -ing (writing)."]
          ],
          use: "nói điểm mạnh, điểm yếu trong học tập, ví dụ khi giới thiệu bản thân hay trao đổi với thầy cô.",
          note: "Không dùng **in**: nói “good **at** English”, không nói “good in English”. Sau at không dùng động từ nguyên mẫu: “good at write” là sai.",
          ex: [
            ["I am good at writing essays.", "Tôi viết bài luận giỏi."],
            ["He is bad at remembering dates.", "Anh ấy rất kém nhớ ngày tháng."],
            ["Are you good at chemistry?", "Bạn có giỏi hóa không?"],
            ["I am not very good at listening.", "Tôi nghe không giỏi lắm."]
          ] }
      ],
      p: [
        "Người Việt hay nói “tôi cảm thấy môn toán khó”, nhưng tiếng Anh tự nhiên dùng **find**: I find math difficult. Cấu trúc này ngắn gọn và nghe rất bản xứ.",
        "Khi muốn nói làm một việc gì đó thì khó hay dễ, dùng **find it + tính từ + to + động từ nguyên mẫu**: I find it hard to remember new words.",
        "Để nói mình giỏi hay kém một môn, dùng **be good at** hoặc **be bad at**. Sau at là danh từ hoặc động từ thêm -ing."
      ],
      ex: [["I find English easy.", "Tôi thấy tiếng Anh dễ."], ["I am good at math.", "Tôi giỏi toán."]]
    },
    { h: "After, When, Before + hiện tại đơn khi nói về tương lai",
      f: ["After / When / Before + chủ ngữ + động từ hiện tại đơn, chủ ngữ + will + động từ nguyên mẫu"],
      items: [
        { f: "After / When / Before + chủ ngữ + động từ hiện tại đơn, chủ ngữ + will + động từ nguyên mẫu",
          mean: "**sau khi / khi / trước khi … thì sẽ …**: nói hai việc trong tương lai và thứ tự của chúng.",
          parts: [
            ["After", "“sau khi”: việc ở vế này xảy ra **trước**, việc ở vế will xảy ra sau."],
            ["When", "“khi”: hai việc xảy ra gần như cùng lúc, hoặc việc ở vế will xảy ra ngay lúc đó."],
            ["Before", "“trước khi”: việc ở vế will xảy ra **trước**."],
            ["vế có will", "vế chính, là việc bạn sẽ làm. Có thể đứng trước: I will travel when I finish university."]
          ],
          use: "nói kế hoạch học tập, tốt nghiệp, du học. Vế after, when, before dùng **thì hiện tại đơn** (nhớ thêm -s với he, she), vế còn lại dùng **will**. Khi vế after, when, before đứng đầu câu thì có dấu phẩy.",
          note: "Lỗi thường gặp: “When I will finish…”. Không bao giờ đặt will sau after, when, before trong cách nói này.",
          ex: [
            ["After I finish my exams, I will go to the beach.", "Sau khi thi xong, tôi sẽ đi biển."],
            ["When she graduates, she will work in Ho Chi Minh City.", "Khi tốt nghiệp, cô ấy sẽ làm việc ở Thành phố Hồ Chí Minh."],
            ["Before I go to class, I will review my notes.", "Trước khi đến lớp, tôi sẽ xem lại vở ghi."],
            ["I will call you when I get home.", "Tôi sẽ gọi cho bạn khi tôi về đến nhà."]
          ] }
      ],
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
