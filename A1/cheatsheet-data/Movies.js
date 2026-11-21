/* Cheat sheet: Movies (Phim ảnh). Hiển thị bởi cheatsheet.js. */
window.A1_CHEAT = {
  goal: [
    "Gọi đúng tên các thể loại phim và biết khi nào nói **movie**, khi nào nói **film**.",
    "Nói thói quen và sở thích xem phim bằng **prefer A to B** và **I would rather**.",
    "Hỏi suất chiếu, mua vé, chọn ghế và mua bắp nước ở rạp.",
    "Kể nội dung phim bằng **It is about…**, **It is set in…** và nhận xét đúng bằng tính từ đuôi **-ing** và **-ed**.",
    "Rủ bạn xem phim, hỏi bạn đã xem chưa bằng **Have you seen…?** và trả lời bằng **I saw it…**."
  ],
  phrases: [
    { h: "Nói về sở thích xem phim", rows: [
      ["What kind of movies do you like?", "Bạn thích thể loại phim nào?"],
      ["How often do you go to the cinema?", "Bạn đi rạp bao lâu một lần?"],
      ["I usually watch movies at home on my laptop.", "Tôi thường xem phim ở nhà trên máy tính xách tay."],
      ["I watch movies with English subtitles to practice English.", "Tôi xem phim có phụ đề tiếng Anh để luyện tiếng Anh."],
      ["Who is your favorite actor?", "Diễn viên bạn thích nhất là ai?", "Khi nói thường rút gọn: Who’s (Who’s = Who is)."]
    ]},
    { h: "Ở quầy vé rạp chiếu phim", rows: [
      ["What time does the next showing start?", "Suất chiếu tiếp theo bắt đầu lúc mấy giờ?"],
      ["Two tickets for the seven thirty showing, please.", "Cho tôi hai vé suất 7 giờ 30."],
      ["Can we sit in the middle, near the back?", "Cho chúng tôi ngồi ở giữa, gần phía sau được không?"],
      ["Is it in English with Vietnamese subtitles?", "Phim nói tiếng Anh, có phụ đề tiếng Việt phải không?"],
      ["A large popcorn and two Cokes, please.", "Cho tôi một bắp rang bơ lớn và hai lon Coca."]
    ]},
    { h: "Kể nội dung phim", rows: [
      ["It is about a girl who travels back in time.", "Phim kể về một cô gái du hành ngược thời gian.", "Khi nói thường rút gọn: It’s about (It’s = It is)."],
      ["It is set in Hanoi in the nineteen nineties.", "Phim lấy bối cảnh Hà Nội những năm 1990.", "**be set in** = lấy bối cảnh ở (nơi chốn, thời gian)."],
      ["The main character is a young doctor.", "Nhân vật chính là một bác sĩ trẻ."],
      ["It is based on a true story.", "Phim dựa trên một câu chuyện có thật."],
      ["I will not tell you the ending. No spoilers!", "Mình không kể cái kết đâu. Không tiết lộ nội dung!", "Dạng rút gọn hay nghe: I won’t (won’t = will not)."]
    ]},
    { h: "Rủ xem và chọn phim", rows: [
      ["Do you want to watch a movie tonight?", "Tối nay bạn có muốn xem phim không?"],
      ["What is on at the cinema this week?", "Tuần này rạp chiếu phim gì?", "Dạng rút gọn: What’s on? (What’s = What is). **be on** = đang được chiếu."],
      ["Have you seen the new Marvel movie?", "Bạn xem phim Marvel mới chưa?"],
      ["Is it worth watching?", "Phim có đáng xem không?"],
      ["Can you recommend a good movie?", "Bạn giới thiệu cho tôi một phim hay được không?"]
    ]},
    { h: "Nhận xét sau khi xem", rows: [
      ["So, what did you think?", "Thế bạn thấy phim thế nào?"],
      ["I loved it! The ending was so touching.", "Mình thích lắm! Cái kết cảm động quá."],
      ["The first half was a bit slow.", "Nửa đầu hơi chậm."],
      ["The acting was brilliant.", "Diễn xuất rất xuất sắc."],
      ["I would give it four out of five.", "Mình chấm bốn trên năm.", "Dạng rút gọn: I’d give it (I’d = I would)."]
    ]}
  ],
  grammar: [
    { h: "movie hay film? Và a / an + thể loại",
      f: ["movie / go to the movies (Mỹ)", "film / go to the cinema (Anh)", "a / an + thể loại + movie"],
      items: [
        { f: "movie / go to the movies (Mỹ)",
          mean: "**phim** và **đi xem phim ở rạp** theo cách nói của **người Mỹ**.",
          parts: [
            ["movie", "**bộ phim** (danh từ đếm được): a movie, two movies."],
            ["the movies", "**rạp chiếu phim**, việc đi xem phim ngoài rạp; luôn có the và số nhiều."],
            ["go to the movies", "**đi xem phim ở rạp**."],
            ["movie theater", "tòa nhà rạp chiếu phim (cách nói của người Mỹ)."]
          ],
          use: "dùng khi nói chuyện với người Mỹ hoặc khi bạn chọn học theo tiếng Anh Mỹ. Movie đứng như một danh từ bình thường; go to the movies đi với thời gian: tonight, on Friday.",
          note: "Không nói “go to the movie” (thiếu s). Xem phim ở nhà thì nói **watch a movie**, không dùng go to the movies.",
          ex: [
            ["Do you want to go to the movies on Friday?", "Thứ Sáu bạn có muốn đi xem phim không?"],
            ["We watched a funny movie at home last night.", "Tối qua chúng tôi xem một bộ phim hài ở nhà."],
            ["I do not go to the movies very often.", "Tôi không hay đi xem phim ngoài rạp."],
            ["What is your favorite movie?", "Bộ phim yêu thích của bạn là gì?"]
          ] },
        { f: "film / go to the cinema (Anh)",
          mean: "**phim** và **đi xem phim ở rạp** theo cách nói của **người Anh**.",
          parts: [
            ["film", "**bộ phim** (danh từ đếm được): a film, an old film."],
            ["cinema", "**rạp chiếu phim**; người Anh dùng cho cả tòa nhà lẫn việc đi xem."],
            ["go to the cinema", "**đi xem phim ở rạp**; có the trước cinema."]
          ],
          use: "dùng khi nói chuyện với người Anh, Úc hoặc theo giáo trình tiếng Anh Anh. Ý nghĩa giống hệt movie và go to the movies.",
          note: "Chọn một kiểu và dùng nhất quán: hoặc movie / the movies, hoặc film / the cinema. Người Việt hay nói “go to cinema” thiếu the.",
          ex: [
            ["Let’s go to the cinema after dinner.", "Ăn tối xong đi xem phim ở rạp nhé."],
            ["That film is very popular in Vietnam.", "Bộ phim đó rất nổi tiếng ở Việt Nam."],
            ["She did not go to the cinema last weekend.", "Cuối tuần trước cô ấy không đi rạp."],
            ["Is there a cinema near your house?", "Gần nhà bạn có rạp chiếu phim không?"]
          ] },
        { f: "a / an + thể loại + movie",
          mean: "**một bộ phim thuộc thể loại…**: nói một phim là phim hành động, phim hài, phim kinh dị.",
          parts: [
            ["a", "dùng khi thể loại bắt đầu bằng **âm phụ âm**: a horror movie, a romantic movie, a comedy."],
            ["an", "dùng khi thể loại bắt đầu bằng **âm nguyên âm**: an action movie, an animated movie (phim hoạt hình)."],
            ["thể loại", "đứng **trước** movie, giống tính từ: action, horror, romantic, science fiction."]
          ],
          use: "giới thiệu hoặc nhận xét về một bộ phim cụ thể: It is a… / I watched a… Khi nói sở thích chung thì bỏ a / an và dùng số nhiều: I like horror movies.",
          note: "Thứ tự ngược với tiếng Việt: “phim hành động” là **action movie**, không nói “movie action”. Một số thể loại tự là danh từ: a comedy, a drama, a cartoon.",
          ex: [
            ["It is a romantic movie about two students.", "Đó là một bộ phim tình cảm về hai học sinh."],
            ["We watched an animated movie with the kids.", "Chúng tôi xem một bộ phim hoạt hình với bọn trẻ."],
            ["I want to see a science fiction movie tonight.", "Tối nay tôi muốn xem một bộ phim khoa học viễn tưởng."],
            ["Is it a horror movie? I do not like scary things.", "Đó là phim kinh dị à? Tôi không thích những thứ đáng sợ."]
          ] }
      ],
      p: [
        "Người Mỹ nói **movie** và **go to the movies**, người Anh nói **film** và **go to the cinema**. Cả hai đều đúng; chỉ nên dùng một kiểu cho nhất quán trong một câu chuyện.",
        "Trong tiếng Anh, tính từ chỉ thể loại đứng **trước** danh từ: an action movie, không nói “film action” như thứ tự tiếng Việt.",
        "Khi nói về một bộ phim, nhớ thêm **a / an**: It is a comedy, It is an action movie. Khi nói sở thích chung, dùng số nhiều: I like action movies."
      ],
      ex: [["Let’s go to the movies tonight.", "Tối nay đi xem phim nhé. (Let’s = Let us)"], ["I like watching action movies.", "Tôi thích xem phim hành động."]]
    },
    { h: "prefer A to B và would rather",
      f: ["prefer + danh từ + to + danh từ", "prefer + động từ thêm -ing + to + động từ thêm -ing", "I would rather + động từ nguyên mẫu + than + động từ nguyên mẫu"],
      items: [
        { f: "prefer + danh từ + to + danh từ",
          mean: "**thích cái này hơn cái kia** (nói chung, lâu dài), với hai **danh từ**.",
          parts: [
            ["prefer", "thích hơn; với he, she dùng prefers."],
            ["danh từ thứ nhất", "thứ được thích hơn."],
            ["to", "**hơn**; không dùng than."],
            ["danh từ thứ hai", "thứ ít thích hơn."]
          ],
          use: "so sánh hai thể loại phim, hai diễn viên, hai cách xem phim. Khi nói thể loại chung, để danh từ ở số nhiều.",
          note: "Lỗi hay gặp: “I prefer comedies than dramas”. Sau prefer luôn là **to**.",
          ex: [
            ["I prefer cartoons to action movies.", "Tôi thích phim hoạt hình hơn phim hành động."],
            ["My mom prefers Korean dramas to American movies.", "Mẹ tôi thích phim truyền hình Hàn Quốc hơn phim Mỹ."],
            ["We prefer the cinema to the TV at home.", "Chúng tôi thích xem ở rạp hơn xem tivi ở nhà."],
            ["Do you prefer comedies to horror movies?", "Bạn thích phim hài hơn phim kinh dị à?"]
          ] },
        { f: "prefer + động từ thêm -ing + to + động từ thêm -ing",
          mean: "**thích làm việc này hơn việc kia** (nói chung, lâu dài), với hai **hoạt động**.",
          parts: [
            ["prefer", "thích hơn."],
            ["động từ thêm -ing thứ nhất", "hoạt động được thích hơn: watching, going, reading."],
            ["to", "hơn."],
            ["động từ thêm -ing thứ hai", "hoạt động ít thích hơn; **cùng dạng -ing** với hoạt động thứ nhất."]
          ],
          use: "nói thói quen xem phim của mình: xem ở nhà hay ở rạp, xem phim hay đọc sách.",
          note: "Hai vế phải cùng dạng: không nói “I prefer watching to read”. Nói **I prefer watching movies to reading books**.",
          ex: [
            ["I prefer watching movies at home to going to the cinema.", "Tôi thích xem phim ở nhà hơn ra rạp."],
            ["She prefers reading the book to watching the movie.", "Cô ấy thích đọc sách hơn xem phim chuyển thể."],
            ["We prefer watching with subtitles to watching without them.", "Chúng tôi thích xem có phụ đề hơn không có phụ đề."],
            ["Do you prefer going alone to going with friends?", "Bạn thích đi xem một mình hơn đi với bạn bè à?"]
          ] },
        { f: "I would rather + động từ nguyên mẫu + than + động từ nguyên mẫu",
          mean: "**tôi muốn làm việc này hơn việc kia** – lựa chọn **ngay lúc này**, trong một lần cụ thể.",
          parts: [
            ["I would rather", "tôi thà, tôi muốn… hơn; nói rút gọn: **I’d rather**."],
            ["động từ nguyên mẫu", "đứng ngay sau rather, **không có to**: watch, stay, see."],
            ["than", "**hơn là**; sau than cũng là động từ nguyên mẫu, hoặc chỉ cần danh từ nếu động từ giống vế trước."],
            ["I would rather not", "tôi không muốn (lần này)."]
          ],
          use: "chọn phim hoặc chọn hoạt động cho tối nay. Câu hỏi: **Would you rather + động từ nguyên mẫu + or + động từ nguyên mẫu?**",
          note: "Prefer dùng **to**, would rather dùng **than**. Không nói “I would rather to watch” hay “I would rather watching”.",
          ex: [
            ["I would rather stay home than go out tonight.", "Tối nay tôi thà ở nhà còn hơn ra ngoài."],
            ["I’d rather see the new Marvel movie than the old one.", "Tôi muốn xem phim Marvel mới hơn là phim cũ."],
            ["I would rather not watch a sad movie today.", "Hôm nay tôi không muốn xem phim buồn."],
            ["Would you rather watch a comedy or a thriller?", "Bạn muốn xem phim hài hay phim giật gân?"]
          ] }
      ],
      p: [
        "Dùng **prefer A to B** để nói sở thích chung, lâu dài (thích A hơn B). Chú ý dùng **to**, không dùng “than”.",
        "Dùng **I would rather** (nói rút gọn: I’d rather) khi chọn lựa **ngay lúc này**, ví dụ tối nay muốn xem phim nào. Sau would rather là **động từ nguyên mẫu không có “to”**, và so sánh bằng **than**.",
        "Khi nói về thể loại nói chung, để danh từ ở số nhiều: comedies, horror movies."
      ],
      ex: [["I prefer comedies to horror movies.", "Tôi thích phim hài hơn phim kinh dị."], ["I would rather watch a comedy than a horror movie tonight.", "Tối nay tôi muốn xem phim hài hơn là phim kinh dị."]]
    },
    { h: "Thì hiện tại đơn cho lịch chiếu phim",
      f: ["What time does + phim / suất chiếu + start / finish?", "The movie starts at + giờ"],
      items: [
        { f: "What time does + phim / suất chiếu + start / finish?",
          mean: "**Phim / suất chiếu bắt đầu hoặc kết thúc lúc mấy giờ?** Hỏi giờ theo lịch cố định.",
          parts: [
            ["What time", "mấy giờ."],
            ["does", "trợ động từ của thì hiện tại đơn, vì chủ ngữ là một thứ (the movie, the show). Nhiều suất chiếu thì dùng **do**."],
            ["start", "bắt đầu; cũng có thể dùng **begin**."],
            ["finish", "kết thúc; cũng có thể dùng **end**."]
          ],
          use: "hỏi ở quầy vé, hỏi bạn bè hoặc xem trên ứng dụng. Dù là chuyện tối nay vẫn dùng **thì hiện tại đơn** vì đó là lịch của rạp.",
          note: "Sau does, động từ giữ nguyên mẫu: What time does it **start**?, không nói “does it starts”. Không cần will.",
          ex: [
            ["What time does the movie start?", "Mấy giờ phim bắt đầu?"],
            ["What time does the evening show finish?", "Suất chiếu buổi tối kết thúc lúc mấy giờ?"],
            ["What time do the morning shows start on Sunday?", "Chủ Nhật các suất chiếu buổi sáng bắt đầu lúc mấy giờ?"],
            ["Excuse me, what time does the next showing start?", "Xin lỗi, suất chiếu tiếp theo bắt đầu lúc mấy giờ?"]
          ] },
        { f: "The movie starts at + giờ",
          mean: "**Phim bắt đầu lúc…**: báo giờ chiếu theo lịch.",
          parts: [
            ["The movie", "chủ ngữ số ít nên động từ thêm **-s**: starts, finishes."],
            ["starts", "bắt đầu; kết thúc là **finishes** hoặc **ends**."],
            ["at + giờ", "dùng **at** trước giờ cụ thể: at seven, at 7:30, at half past eight."]
          ],
          use: "trả lời câu hỏi về giờ chiếu hoặc hẹn bạn đến sớm. Có thể dùng thêm **from… to…**: It runs from seven to nine.",
          note: "Người Việt hay quên -s: nói **The movie starts at eight**, không nói “The movie start at eight”. Không dùng in hay on trước giờ.",
          ex: [
            ["The movie starts at seven thirty.", "Phim bắt đầu lúc bảy giờ ba mươi."],
            ["It finishes at about ten o’clock.", "Phim kết thúc khoảng mười giờ."],
            ["The last show starts at eleven.", "Suất chiếu cuối bắt đầu lúc mười một giờ."],
            ["The movie does not start until nine.", "Phải đến chín giờ phim mới bắt đầu."]
          ] }
      ],
      p: [
        "Suất chiếu được rạp xếp **theo lịch cố định**, nên dùng **thì hiện tại đơn** dù đó là chuyện tối nay. Đây cũng là cách nói về giờ tàu, giờ xe buýt.",
        "Không cần dùng “will” khi hỏi giờ chiếu; câu với will nghe dài và không tự nhiên."
      ],
      ex: [["The movie starts at eight and finishes at ten.", "Phim bắt đầu lúc tám giờ và kết thúc lúc mười giờ."], ["What time does the last showing start?", "Suất chiếu cuối bắt đầu lúc mấy giờ?"]]
    },
    { h: "Tính từ đuôi -ing (tả bộ phim) và -ed (tả cảm xúc người xem)",
      f: ["Bộ phim + was + tính từ đuôi -ing", "Người + was + tính từ đuôi -ed"],
      items: [
        { f: "Bộ phim + was + tính từ đuôi -ing",
          mean: "**tả bộ phim gây ra cảm giác gì** cho người xem: hay, chán, đáng sợ, bất ngờ.",
          parts: [
            ["Bộ phim", "chủ ngữ là phim, cái kết, câu chuyện, nhân vật (thứ **gây ra** cảm xúc)."],
            ["was", "quá khứ của is (vì đã xem xong); nói phim nói chung thì dùng is."],
            ["tính từ đuôi -ing", "boring (chán), exciting (hấp dẫn), frightening (đáng sợ), surprising (bất ngờ), interesting (thú vị), touching (cảm động)."]
          ],
          use: "nhận xét bộ phim sau khi xem. Thêm very, really, so trước tính từ để nhấn mạnh.",
          note: "Mẹo nhớ: **-ing là thứ gây ra cảm giác**. Bộ phim không thể “bored” vì phim không có cảm xúc.",
          ex: [
            ["The story was really exciting.", "Câu chuyện thật hấp dẫn."],
            ["The first half was a bit boring.", "Nửa đầu phim hơi chán."],
            ["The ending was very touching.", "Cái kết rất cảm động."],
            ["Was the movie frightening?", "Bộ phim có đáng sợ không?"]
          ] },
        { f: "Người + was + tính từ đuôi -ed",
          mean: "**tả cảm xúc của người xem** khi xem phim.",
          parts: [
            ["Người", "chủ ngữ là người xem: I, my friend, the children (người **cảm nhận**)."],
            ["was", "quá khứ của am / is; với we, they, you dùng **were**."],
            ["tính từ đuôi -ed", "bored (thấy chán), excited (thấy háo hức), frightened (thấy sợ), surprised (thấy ngạc nhiên), interested (thấy hứng thú), moved (thấy xúc động)."]
          ],
          use: "kể mình cảm thấy thế nào khi xem phim. Có thể dùng **felt** thay was: I felt bored.",
          note: "Không nói “I was boring” (tôi là người nhàm chán) hay “I was exciting”. Người thì dùng **-ed**.",
          ex: [
            ["I was frightened during the horror scenes.", "Tôi thấy sợ trong những cảnh kinh dị."],
            ["My little brother was bored after twenty minutes.", "Em trai tôi thấy chán sau hai mươi phút."],
            ["We were really excited about the new episode.", "Chúng tôi rất háo hức chờ tập mới."],
            ["Were you surprised by the ending?", "Bạn có bất ngờ với cái kết không?"]
          ] }
      ],
      p: [
        "Tính từ đuôi **-ing** tả **bộ phim**, tức thứ gây ra cảm xúc: The movie was boring (bộ phim chán). Tính từ đuôi **-ed** tả **cảm xúc của người xem**: I was bored (tôi thấy chán).",
        "Nếu nói “I was boring”, nghĩa sẽ thành “tôi là người nhàm chán”. Các cặp hay dùng: boring / bored, surprising / surprised, interesting / interested, frightening / frightened.",
        "Thêm các tính từ nhận xét khác để câu sinh động: gripping (cuốn hút), hilarious (cực kỳ buồn cười), touching (cảm động), terrifying (đáng sợ)."
      ],
      ex: [["The ending was surprising. I was surprised.", "Cái kết bất ngờ. Tôi rất ngạc nhiên."], ["I was very bored during the movie. It was boring.", "Tôi thấy rất chán khi xem. Phim chán thật."]]
    },
    { h: "Have you seen…? (hiện tại hoàn thành) và I saw… (quá khứ đơn)",
      f: ["Have you (ever) seen + phim?", "I saw it + thời gian cụ thể", "I have not seen it yet. (nói rút gọn: haven’t)"],
      items: [
        { f: "Have you (ever) seen + phim?",
          mean: "**Bạn đã (bao giờ) xem phim… chưa?** Hỏi về **trải nghiệm**, không quan tâm xem lúc nào.",
          parts: [
            ["Have", "trợ động từ của thì hiện tại hoàn thành, đứng đầu câu; với he, she dùng **Has**."],
            ["ever", "**đã bao giờ**; có thể bỏ. Đứng ngay trước seen."],
            ["seen", "quá khứ phân từ (cột thứ ba của động từ) của see."],
            ["yet", "**chưa**; đặt cuối câu khi hỏi về một phim mới: Have you seen it yet?"]
          ],
          use: "mở đầu câu chuyện về một bộ phim. Trả lời ngắn: **Yes, I have.** / **No, I have not** (No, I haven’t).",
          note: "Không hỏi “Did you ever see…?” khi muốn hỏi trải nghiệm chung; cũng không nói “Have you ever saw”. Seen là cột thứ ba của see.",
          ex: [
            ["Have you seen the new Spider-Man movie?", "Bạn đã xem phim Người Nhện mới chưa?"],
            ["Have you ever seen a Vietnamese horror movie?", "Bạn đã bao giờ xem phim kinh dị Việt Nam chưa?"],
            ["Has your sister seen Frozen?", "Em gái bạn đã xem phim Nữ hoàng băng giá chưa?"],
            ["Have you seen it yet? — Yes, I have.", "Bạn xem phim đó chưa? — Rồi."]
          ] },
        { f: "I saw it + thời gian cụ thể",
          mean: "**Tôi xem phim đó vào lúc…**: nói **thời điểm cụ thể** đã xem (thì quá khứ đơn).",
          parts: [
            ["I saw it", "tôi đã xem nó; saw là quá khứ của see."],
            ["thời gian cụ thể", "yesterday, last night, last weekend, two weeks ago, in 2023, on Saturday."]
          ],
          use: "trả lời sau câu hỏi Have you seen…? khi muốn nói rõ xem lúc nào. Cũng dùng để kể tiếp: where, with whom.",
          note: "Có mốc thời gian cụ thể thì **bắt buộc dùng quá khứ đơn**: không nói “I have seen it yesterday”.",
          ex: [
            ["I saw it with my family last night.", "Tối qua tôi xem phim đó với gia đình."],
            ["We saw it at the cinema two weeks ago.", "Hai tuần trước chúng tôi xem ở rạp."],
            ["She saw it on Netflix last month.", "Tháng trước cô ấy xem trên Netflix."],
            ["When did you see it?", "Bạn xem phim đó khi nào?"]
          ] },
        { f: "I have not seen it yet. (nói rút gọn: haven’t)",
          mean: "**Tôi chưa xem phim đó**: nói mình **chưa** xem (nhưng có thể sẽ xem).",
          parts: [
            ["have not", "phủ định của thì hiện tại hoàn thành; với he, she dùng **has not** (hasn’t)."],
            ["haven’t", "dạng rút gọn khi nói."],
            ["seen", "quá khứ phân từ (cột thứ ba của động từ) của see."],
            ["yet", "**chưa**, đặt cuối câu; hàm ý mình vẫn muốn xem."]
          ],
          use: "trả lời khi chưa xem một phim. Thường thêm ý muốn: but I want to see it.",
          note: "Người Mỹ đôi khi nói “I didn’t see it yet”, nhưng ở trình độ A1 hãy luôn dùng **I have not seen it yet**. Cảnh báo: người kia có thể kể trước nội dung, nên nói nhanh **No spoilers, please!**",
          ex: [
            ["I have not seen it yet, but I want to.", "Tôi chưa xem, nhưng tôi muốn xem."],
            ["My friends haven’t seen the new Avatar movie yet.", "Bạn bè tôi chưa xem phim Avatar mới."],
            ["She has not seen it yet, so please do not tell her the ending.", "Cô ấy chưa xem nên đừng kể cái kết nhé."],
            ["I haven’t seen it yet. No spoilers, please!", "Tôi chưa xem đâu. Đừng tiết lộ nội dung nhé!"]
          ] }
      ],
      p: [
        "Khi hỏi ai đó **đã từng xem chưa** mà không quan tâm lúc nào, dùng **thì hiện tại hoàn thành**: Have you seen…? Có thể thêm ever (đã bao giờ) hoặc yet (chưa).",
        "Khi trả lời có **mốc thời gian cụ thể** (yesterday, last weekend), phải chuyển sang **thì quá khứ đơn**: I saw it yesterday. Không dùng have seen với yesterday.",
        "Nếu chưa xem, nói **I have not seen it yet** (khi nói thường rút gọn thành I haven’t seen it yet)."
      ],
      ex: [["Have you ever seen this movie?", "Bạn đã bao giờ xem phim này chưa?"], ["Yes, I saw it last weekend. It was great!", "Rồi, tôi xem cuối tuần trước. Hay lắm!"]]
    }
  ],
  mistakes: [
    ["I like watch film action.", "I like watching action movies.", "Sau **like** dùng động từ thêm -ing; tính từ thể loại đứng **trước** danh từ và dùng số nhiều khi nói chung."],
    ["I prefer comedy than horror.", "I prefer comedies to horror movies.", "Cấu trúc là **prefer A to B**, không dùng than; thể loại nói chung để ở số nhiều."],
    ["What time will the movie start according to schedule?", "What time does the movie start?", "Lịch chiếu cố định dùng **thì hiện tại đơn**, câu ngắn và tự nhiên hơn."],
    ["I was very boring during the movie.", "I was very bored during the movie.", "Cảm xúc của người dùng tính từ đuôi **-ed**; “I was boring” nghĩa là tôi là người nhàm chán."],
    ["Did you see this movie ever?", "Have you ever seen this movie?", "Hỏi đã từng làm gì chưa dùng **hiện tại hoàn thành**, và **ever** đứng trước động từ chính."],
    ["I have seen it yesterday.", "I saw it yesterday.", "Có mốc thời gian cụ thể (yesterday) thì dùng **quá khứ đơn**."],
    ["Film good. I like. Very interesting I am.", "I really enjoyed it. The plot twist was amazing.", "Nói đủ chủ ngữ và động từ; dùng tính từ đuôi -ing để tả bộ phim."]
  ],
  vocab: [
    ["action movie", "phim hành động"], ["comedy", "phim hài"], ["horror movie", "phim kinh dị"], ["romantic comedy", "phim hài lãng mạn"],
    ["science fiction", "phim khoa học viễn tưởng"], ["animated movie", "phim hoạt hình"], ["drama", "phim chính kịch, tâm lý"], ["thriller", "phim giật gân, ly kỳ"],
    ["documentary", "phim tài liệu"], ["showing", "suất chiếu"], ["row / seat", "hàng ghế / ghế"], ["subtitles", "phụ đề"],
    ["dubbed", "lồng tiếng"], ["sold out", "hết vé"], ["actor", "diễn viên"], ["main character", "nhân vật chính"],
    ["ending", "cái kết"], ["director", "đạo diễn"], ["trailer", "đoạn giới thiệu phim"], ["sequel", "phần tiếp theo"],
    ["plot twist", "tình tiết bất ngờ"], ["spoiler", "tiết lộ nội dung"], ["gripping", "cuốn hút, hồi hộp"], ["touching", "cảm động"]
  ],
  tips: [
    "Xem phim với **phụ đề tiếng Anh** (không phải phụ đề tiếng Việt) để luyện nghe. Bắt đầu với phim hoạt hình hoặc phim hài vì lời thoại thường chậm và rõ hơn.",
    "Sau mỗi bộ phim, nói ba câu: **It is about…**, **It is set in…** và một câu nhận xét bằng tính từ đuôi -ing.",
    "Nhớ quy tắc nhanh: **phim** thì -ing (boring), **người** thì -ed (bored).",
    "Khi rủ bạn nước ngoài đi xem phim ở Việt Nam, hỏi trước “Is it in English, or is it dubbed?” để chắc họ xem hiểu.",
    "Thu âm một bài nhận xét phim dài một phút, kết thúc bằng câu chấm điểm “I would give it four out of five.”"
  ]
};
