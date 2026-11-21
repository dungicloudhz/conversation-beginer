/* Cheat sheet: Sports (Thể thao). Hiển thị bởi cheatsheet.js. */
window.A1_CHEAT = {
  goal: [
    "Gọi tên các môn thể thao phổ biến và dùng đúng động từ đi kèm **play**, **go** hoặc **do**.",
    "Nói sở thích, mức độ giỏi và tần suất chơi thể thao bằng **good at**, **enjoy + động từ thêm -ing**, **twice a week**.",
    "Bàn về trận đấu, đọc tỉ số và phân biệt **win**, **beat**, **lose**, **draw**.",
    "Nói về tập luyện, sức khỏe và mình đã chơi một môn được bao lâu bằng **have been + động từ thêm -ing**.",
    "Rủ bạn chơi cùng, hỏi mượn dụng cụ và giải thích luật cơ bản bằng **can**, **cannot**, **have to**."
  ],
  phrases: [
    { h: "Hỏi và nói về sở thích thể thao", rows: [
      ["Do you play any sports?", "Bạn có chơi môn thể thao nào không?"],
      ["What is your favorite sport?", "Môn thể thao bạn thích nhất là gì?", "Khi nói thường rút gọn: What’s your favorite sport? (What’s = What is)."],
      ["I play badminton twice a week.", "Tôi chơi cầu lông mỗi tuần hai lần."],
      ["I go running every morning around the lake.", "Sáng nào tôi cũng chạy bộ quanh hồ."],
      ["I am not very sporty, but I love watching football.", "Tôi không giỏi thể thao lắm, nhưng rất thích xem bóng đá.", "Dạng rút gọn: I’m not very sporty (I’m = I am)."]
    ]},
    { h: "Xem trận đấu và cổ vũ", rows: [
      ["Come on, Vietnam!", "Cố lên Việt Nam!"],
      ["Did you watch the match last night?", "Tối qua bạn có xem trận đấu không?"],
      ["What is the score?", "Tỉ số bao nhiêu rồi?", "Dạng rút gọn hay nghe: What’s the score?"],
      ["Vietnam beat Thailand two–one.", "Việt Nam thắng Thái Lan 2–1.", "Đọc tỉ số: two–one. Người Anh hay đọc số 0 là **nil**: two–nil."],
      ["It ended in a draw, one all.", "Trận đấu hòa 1–1.", "**one all** = mỗi đội một bàn."]
    ]},
    { h: "Tập luyện và sức khỏe", rows: [
      ["How often do you work out?", "Bạn tập bao lâu một lần?"],
      ["I go to the gym three times a week.", "Tôi đi tập gym ba lần một tuần."],
      ["How long have you been playing badminton?", "Bạn chơi cầu lông được bao lâu rồi?"],
      ["I have been playing for about five years.", "Tôi chơi được khoảng năm năm rồi.", "Khi nói thường rút gọn: I’ve been playing (I’ve = I have)."],
      ["Always warm up before you play.", "Luôn khởi động trước khi chơi."],
      ["I hurt my ankle last week.", "Tuần trước tôi bị đau mắt cá chân."]
    ]},
    { h: "Rủ bạn chơi cùng", rows: [
      ["Do you want to play badminton after work?", "Tan làm đi đánh cầu lông không?"],
      ["We need one more player. Do you want to join?", "Bọn mình thiếu một người. Bạn chơi cùng không?"],
      ["Let’s go for a run this Sunday.", "Chủ nhật này đi chạy bộ đi.", "Let’s = Let us, nhưng khi rủ rê luôn nói Let’s."],
      ["Can I borrow your racket?", "Cho mình mượn vợt được không?"],
      ["I am a beginner, so go easy on me!", "Mình mới chơi, nhẹ tay với mình nhé!", "Dạng rút gọn: I’m a beginner."]
    ]},
    { h: "Sau trận đấu", rows: [
      ["Good game!", "Trận hay!", "Nói với đối thủ sau trận để thể hiện tinh thần thể thao."],
      ["Well played!", "Chơi hay lắm!"],
      ["That was a close match.", "Trận đấu sít sao thật."],
      ["Who are you rooting for?", "Bạn cổ vũ đội nào?"]
    ]}
  ],
  grammar: [
    { h: "play, go, do + môn thể thao",
      f: ["play + môn có bóng, có đối thủ", "go + môn kết thúc bằng -ing", "do + môn tập cá nhân, không có bóng"],
      items: [
        { f: "play + môn có bóng, có đối thủ",
          mean: "**chơi một môn thể thao có bóng, có đối thủ** hoặc thi đấu với người khác.",
          parts: [
            ["play", "chơi; với he, she dùng plays, quá khứ là played."],
            ["môn có bóng", "football, basketball, volleyball, tennis, badminton, table tennis, golf."],
            ["môn có đối thủ", "chess (cờ vua) cũng dùng play vì có người thắng, người thua."]
          ],
          use: "nói môn mình chơi hoặc thói quen chơi thể thao. Tên môn đứng ngay sau play, **không có the**.",
          note: "Không nói “play the football”. Chỉ nhạc cụ mới có the (play the piano). Không dùng “play swimming” hay “play yoga”.",
          ex: [
            ["My brother plays basketball after school.", "Anh tôi chơi bóng rổ sau giờ học."],
            ["We play table tennis at the community center.", "Chúng tôi chơi bóng bàn ở nhà văn hóa."],
            ["I do not play golf.", "Tôi không chơi gôn."],
            ["Do you play volleyball on the beach?", "Bạn có chơi bóng chuyền trên bãi biển không?"]
          ] },
        { f: "go + môn kết thúc bằng -ing",
          mean: "**đi tập một môn** có tên kết thúc bằng -ing, thường phải di chuyển hoặc ra ngoài.",
          parts: [
            ["go", "đi; với he, she dùng goes, quá khứ là went."],
            ["môn kết thúc bằng -ing", "swimming, running, jogging, cycling, skiing, surfing, hiking."]
          ],
          use: "nói các môn vận động ngoài trời hoặc ở hồ bơi. Tên môn đứng **ngay sau go**, không có to.",
          note: "Không nói “go to swimming”. Nhưng nói **go to the pool** (đi đến hồ bơi) vì pool là nơi chốn.",
          ex: [
            ["I go jogging in the park every morning.", "Sáng nào tôi cũng chạy bộ trong công viên."],
            ["My uncle goes cycling with his friends on Sundays.", "Chủ Nhật nào chú tôi cũng đạp xe với bạn bè."],
            ["We went surfing in Mui Ne last summer.", "Hè năm ngoái chúng tôi đi lướt sóng ở Mũi Né."],
            ["Does she go swimming in winter?", "Mùa đông cô ấy có đi bơi không?"]
          ] },
        { f: "do + môn tập cá nhân, không có bóng",
          mean: "**tập một môn cá nhân** không có bóng: võ, yoga, thể dục.",
          parts: [
            ["do", "tập, làm; với he, she dùng does, quá khứ là did."],
            ["võ", "karate, judo, taekwondo, kung fu."],
            ["tập luyện", "yoga, exercise (bài tập), aerobics, gymnastics (thể dục dụng cụ)."]
          ],
          use: "nói về các môn tập một mình hoặc theo lớp, không thi đấu với bóng. Tên môn đứng ngay sau do.",
          note: "Với he, she nhớ dùng **does**: She does yoga, không nói “She do yoga”. Câu phủ định có hai chữ do là bình thường: I do not do karate.",
          ex: [
            ["I do taekwondo three times a week.", "Tôi tập taekwondo ba lần một tuần."],
            ["My mother does aerobics at the gym.", "Mẹ tôi tập thể dục nhịp điệu ở phòng tập."],
            ["I do not do any exercise at the weekend.", "Cuối tuần tôi không tập thể dục gì cả."],
            ["Does your son do judo?", "Con trai bạn có tập judo không?"]
          ] }
      ],
      p: [
        "Tiếng Việt chỉ cần nói “chơi” hay “tập”, nhưng tiếng Anh chọn động từ theo **loại môn**. Môn có bóng và có đối thủ dùng **play**: play football, play badminton, play tennis.",
        "Môn có tên kết thúc bằng **-ing** dùng **go**: go swimming, go running, go cycling. Môn tập một mình, không có bóng như võ hay yoga dùng **do**: do yoga, do karate, do exercise.",
        "Nhớ chia động từ ở thì hiện tại đơn khi chủ ngữ là he, she: She does yoga. He goes swimming."
      ],
      ex: [["I go swimming every weekend.", "Cuối tuần nào tôi cũng đi bơi."], ["She does yoga in the morning.", "Cô ấy tập yoga vào buổi sáng."]]
    },
    { h: "good at và like, enjoy + động từ thêm -ing",
      f: ["be good at + danh từ / động từ thêm -ing", "be not very good at + danh từ / động từ thêm -ing", "like / love / enjoy + động từ thêm -ing", "a fan of + đội / môn"],
      items: [
        { f: "be good at + danh từ / động từ thêm -ing",
          mean: "**giỏi một môn thể thao hoặc một kỹ năng**, có khả năng làm tốt.",
          parts: [
            ["be", "chia theo chủ ngữ: I am, he / she is, we / they are."],
            ["good at", "giỏi về; luôn đi với **at**."],
            ["danh từ", "tên môn: good at football, good at tennis."],
            ["động từ thêm -ing", "hoạt động: good at swimming, good at running."],
            ["pretty / really / very", "đứng trước good để nói mức độ: khá giỏi / thật giỏi / rất giỏi."]
          ],
          use: "nói điểm mạnh của mình hoặc khen người khác. Đứng sau chủ ngữ, phía sau là môn hoặc hoạt động.",
          note: "Không nói “good in football” hay “good at swim”. Nhớ: **good at + môn** hoặc **good at + động từ thêm -ing**.",
          ex: [
            ["He is very good at basketball.", "Anh ấy chơi bóng rổ rất giỏi."],
            ["My daughter is good at running.", "Con gái tôi chạy rất giỏi."],
            ["We are pretty good at volleyball.", "Chúng tôi chơi bóng chuyền khá giỏi."],
            ["Are you good at playing tennis?", "Bạn chơi quần vợt có giỏi không?"]
          ] },
        { f: "be not very good at + danh từ / động từ thêm -ing",
          mean: "**không giỏi lắm** một môn, nói một cách **khiêm tốn, nhẹ nhàng**.",
          parts: [
            ["be not", "phủ định của be: I am not, he is not, they are not."],
            ["very good at", "giỏi lắm; thêm very làm câu bớt nặng nề."],
            ["danh từ / động từ thêm -ing", "môn hoặc hoạt động mình còn yếu."]
          ],
          use: "nói điểm yếu một cách lịch sự, khi được rủ chơi một môn mình chưa giỏi. Thường thêm **but I enjoy it** để giữ không khí vui vẻ.",
          note: "Câu “I am bad at…” nghe thẳng và nặng hơn. Chú ý thứ tự: **not very good**, không nói “very not good”.",
          ex: [
            ["I am not very good at badminton, but I enjoy it.", "Tôi chơi cầu lông không giỏi lắm, nhưng tôi thích."],
            ["She is not very good at swimming yet.", "Cô ấy bơi chưa giỏi lắm."],
            ["My friends are not very good at golf.", "Bạn bè tôi chơi gôn không giỏi lắm."],
            ["I am not very good at catching the ball.", "Tôi bắt bóng không giỏi lắm."]
          ] },
        { f: "like / love / enjoy + động từ thêm -ing",
          mean: "**thích chơi, thích tập** một môn thể thao. Ba động từ khác nhau ở mức độ.",
          parts: [
            ["like", "**thích**, mức độ bình thường."],
            ["love", "**rất thích, mê**; mạnh hơn like."],
            ["enjoy", "**thích thú, tận hưởng** khi đang chơi; sau enjoy **bắt buộc** dùng động từ thêm -ing."]
          ],
          use: "nói sở thích thể thao. Động từ thêm -ing đứng ngay sau like, love, enjoy: playing, watching, running.",
          note: "Đừng nhầm thích với giỏi: I like playing football (thích) khác I am good at football (giỏi). Không nói “I enjoy to play”.",
          ex: [
            ["I like watching tennis on TV.", "Tôi thích xem quần vợt trên tivi."],
            ["My father loves playing golf.", "Bố tôi rất mê chơi gôn."],
            ["We enjoy cycling around the lake.", "Chúng tôi thích thú đạp xe quanh hồ."],
            ["Do you like doing yoga?", "Bạn có thích tập yoga không?"]
          ] },
        { f: "a fan of + đội / môn",
          mean: "**người hâm mộ, cổ động viên** của một đội bóng hoặc một môn thể thao.",
          parts: [
            ["a fan of", "người hâm mộ của; luôn có **of**."],
            ["a big fan of", "**rất hâm mộ**; big làm nghĩa mạnh hơn."],
            ["đội / môn", "tên đội bóng (Manchester United), đội tuyển (the Vietnam team) hoặc môn (football)."]
          ],
          use: "nói mình hâm mộ đội hay môn nào. Thường dùng sau be: I am a fan of…",
          note: "Không nói “I am fan of” (thiếu a) hay “a fan with”. Hỏi lại người khác: Which team do you support?",
          ex: [
            ["I am a big fan of the Vietnam national team.", "Tôi rất hâm mộ đội tuyển Việt Nam."],
            ["My brother is a fan of Real Madrid.", "Anh tôi là cổ động viên của Real Madrid."],
            ["I am not a fan of boxing.", "Tôi không hâm mộ quyền anh."],
            ["Are you a fan of basketball?", "Bạn có hâm mộ bóng rổ không?"]
          ] }
      ],
      p: [
        "Nói ai đó giỏi một môn, dùng **good at**, không dùng “good in”. Vì **at** là giới từ, động từ đứng sau phải thêm **-ing**: good at swimming.",
        "Muốn nói mình không giỏi một cách nhẹ nhàng, lịch sự, dùng **not very good at** thay vì “bad at”.",
        "Sau **enjoy** luôn dùng động từ thêm -ing, không dùng “to + động từ”. Sau like và love cũng thường dùng động từ thêm -ing khi nói sở thích."
      ],
      ex: [["I am pretty good at swimming.", "Tôi bơi khá giỏi."], ["I enjoy playing volleyball.", "Tôi thích chơi bóng chuyền."]]
    },
    { h: "win hay beat? Kết quả trận đấu ở thì quá khứ",
      f: ["win (won) + trận đấu, giải, cúp", "beat (beat) + đối thủ", "lose (lost) + trận đấu / lose to + đối thủ", "draw (drew) with + đối thủ"],
      items: [
        { f: "win (won) + trận đấu, giải, cúp",
          mean: "**thắng** một trận đấu, một giải hay một chiếc cúp. Sau win là **cái mình giành được**, không phải đối thủ.",
          parts: [
            ["win", "thắng, giành được (hiện tại); với he, she dùng wins."],
            ["won", "dạng quá khứ của win (bất quy tắc)."],
            ["trận đấu, giải, cúp", "the match, the game, the race (cuộc đua), the final (trận chung kết), the cup, a medal (huy chương)."]
          ],
          use: "kể kết quả trận đấu. Sau win là the match, the game, the cup; có thể thêm tỉ số: won the match 2–1.",
          note: "Không nói “We won Thailand”. Khi nói về đối thủ phải dùng **beat**: We beat Thailand.",
          ex: [
            ["Our team won the final last night.", "Tối qua đội chúng tôi thắng trận chung kết."],
            ["She won a gold medal at the SEA Games.", "Cô ấy giành huy chương vàng ở SEA Games."],
            ["We did not win the game, but we played well.", "Chúng tôi không thắng trận nhưng đã chơi tốt."],
            ["Who won the race?", "Ai thắng cuộc đua?"]
          ] },
        { f: "beat (beat) + đối thủ",
          mean: "**thắng, đánh bại** một đối thủ. Sau beat là **người hoặc đội bị thua**.",
          parts: [
            ["beat", "thắng, đánh bại; dạng quá khứ **giống hệt** dạng hiện tại: beat."],
            ["đối thủ", "một đội (Japan, the home team) hoặc một người (my brother, him)."]
          ],
          use: "nói ai thắng ai. Muốn thêm tỉ số, đặt sau đối thủ: Vietnam beat Indonesia 3–0.",
          note: "Vì quá khứ của beat vẫn là beat, hãy dựa vào thời gian (yesterday, last week) để biết là quá khứ. Với he, she ở hiện tại phải thêm -s: He always beats me.",
          ex: [
            ["Vietnam beat Malaysia two to one.", "Việt Nam thắng Malaysia hai một."],
            ["My little sister beat me at badminton yesterday.", "Hôm qua em gái tôi thắng tôi môn cầu lông."],
            ["He always beats me at chess.", "Anh ấy lúc nào cũng thắng tôi môn cờ vua."],
            ["Did your team beat them?", "Đội bạn có thắng họ không?"]
          ] },
        { f: "lose (lost) + trận đấu / lose to + đối thủ",
          mean: "**thua** một trận đấu, hoặc **thua** một đối thủ.",
          parts: [
            ["lose", "thua (hiện tại); với he, she dùng loses."],
            ["lost", "dạng quá khứ của lose (bất quy tắc)."],
            ["lose + trận đấu", "thua một trận: lose the match, lose the game."],
            ["lose to + đối thủ", "thua một đội hoặc một người: **phải có to**."]
          ],
          use: "kể trận thua. Sau lose là trận đấu; nếu nói tên đối thủ thì thêm to.",
          note: "Không nói “We lost Japan” (nghĩa như làm mất Nhật Bản). Phải nói **We lost to Japan**. Đừng nhầm lose (thua) với loose (lỏng).",
          ex: [
            ["We lost the match three to nothing.", "Chúng tôi thua trận ba không."],
            ["Our school team lost to a very strong team.", "Đội trường tôi thua một đội rất mạnh."],
            ["They did not lose a game all season.", "Cả mùa giải họ không thua trận nào."],
            ["Did you lose to him again?", "Bạn lại thua anh ấy à?"]
          ] },
        { f: "draw (drew) with + đối thủ",
          mean: "**hòa** với một đội hoặc một người: hai bên có tỉ số bằng nhau.",
          parts: [
            ["draw", "hòa (hiện tại), chủ yếu là cách nói của người Anh; người Mỹ hay nói **tie**."],
            ["drew", "dạng quá khứ của draw (bất quy tắc)."],
            ["with + đối thủ", "hòa với ai; luôn có **with**."],
            ["a draw", "danh từ: một trận hòa (It was a draw)."]
          ],
          use: "kể trận đấu không ai thắng. Có thể thêm tỉ số: drew one-all (hòa một đều).",
          note: "Draw còn có nghĩa “vẽ”, nhưng trong thể thao là hòa. Không nói “draw to” hay “draw against”, hãy dùng **draw with**.",
          ex: [
            ["Vietnam drew with Thailand last night.", "Tối qua Việt Nam hòa Thái Lan."],
            ["We drew one-all with the team from the next village.", "Chúng tôi hòa một đều với đội làng bên."],
            ["The game was a draw.", "Trận đấu hòa."],
            ["Did they draw with Japan?", "Họ có hòa Nhật Bản không?"]
          ] }
      ],
      p: [
        "Cả win và beat đều là “thắng”, nhưng khác nhau ở **từ đứng sau**. Sau **win** là trận đấu hoặc giải thưởng (win the match, win the cup). Sau **beat** là đối thủ (beat Thailand).",
        "Thua một trận là **lose the match**, thua một đội là **lose to + đội đó**. Hòa với một đội là **draw with**.",
        "Kể trận đấu đã xong thì dùng thì quá khứ. Bốn động từ này đều bất quy tắc: win → won, beat → beat, lose → lost, draw → drew."
      ],
      ex: [["Vietnam beat Thailand. Vietnam won the match.", "Việt Nam thắng Thái Lan. Việt Nam thắng trận."], ["They lost to Japan.", "Họ thua Nhật Bản."]]
    },
    { h: "Nói chơi được bao lâu: have been + động từ thêm -ing",
      f: ["chủ ngữ + have / has been + động từ thêm -ing + for + khoảng thời gian", "chủ ngữ + have / has been + động từ thêm -ing + since + mốc thời gian", "How long have you been + động từ thêm -ing?"],
      items: [
        { f: "chủ ngữ + have / has been + động từ thêm -ing + for + khoảng thời gian",
          mean: "**đã làm một việc được bao lâu rồi** (và vẫn đang làm), tính bằng **một khoảng thời gian**.",
          parts: [
            ["have / has been", "I, you, we, they dùng have been; he, she dùng has been. Nói rút gọn: I’ve been, she’s been."],
            ["động từ thêm -ing", "môn hoặc việc đang tiếp diễn: playing, doing, learning, running."],
            ["for", "**trong khoảng**; sau for là độ dài thời gian: for three years, for six months, for a long time."]
          ],
          use: "nói mình chơi một môn được bao lâu rồi. Câu này hàm ý **đến bây giờ vẫn còn chơi**.",
          note: "Người Việt hay nói “I play tennis for five years”. Sai vì thiếu have been. Phải nói **I have been playing tennis for five years**.",
          ex: [
            ["I have been playing badminton for three years.", "Tôi chơi cầu lông được ba năm rồi."],
            ["My father has been running for a long time.", "Bố tôi chạy bộ đã lâu rồi."],
            ["We have been learning to swim for two months.", "Chúng tôi học bơi được hai tháng rồi."],
            ["She has been doing karate for six years.", "Cô ấy tập karate được sáu năm rồi."]
          ] },
        { f: "chủ ngữ + have / has been + động từ thêm -ing + since + mốc thời gian",
          mean: "**đã làm một việc từ một thời điểm** trong quá khứ đến bây giờ, tính bằng **mốc bắt đầu**.",
          parts: [
            ["have / has been", "chia theo chủ ngữ như trên."],
            ["động từ thêm -ing", "hoạt động vẫn đang tiếp diễn."],
            ["since", "**từ khi**; sau since là mốc thời gian: since 2019, since January, since last summer, since I was a child."]
          ],
          use: "nói mình bắt đầu chơi một môn từ khi nào. Mốc có thể là năm, tháng hoặc một câu ngắn ở quá khứ (since I was ten).",
          note: "Cách chọn: **for + bao lâu** (for two years), **since + từ lúc nào** (since 2022). Không nói “since two years”.",
          ex: [
            ["I have been doing yoga since last summer.", "Tôi tập yoga từ mùa hè năm ngoái."],
            ["He has been playing football since he was a child.", "Anh ấy chơi bóng đá từ khi còn nhỏ."],
            ["We have been going to this gym since 2022.", "Chúng tôi tập ở phòng gym này từ năm 2022."],
            ["She has been swimming since six o’clock this morning.", "Cô ấy bơi từ sáu giờ sáng nay."]
          ] },
        { f: "How long have you been + động từ thêm -ing?",
          mean: "**Bạn đã… được bao lâu rồi?** Hỏi khoảng thời gian ai đó làm một việc đến giờ.",
          parts: [
            ["How long", "bao lâu."],
            ["have you been", "trợ động từ have đứng trước chủ ngữ; với he, she dùng **has he / has she been**."],
            ["động từ thêm -ing", "môn hoặc hoạt động: playing, doing, training."]
          ],
          use: "hỏi kinh nghiệm chơi thể thao của người khác. Trả lời bằng for hoặc since: For two years. / Since 2020.",
          note: "Không hỏi “How long do you play tennis?”. Câu này sai nghĩa. Phải hỏi **How long have you been playing tennis?**",
          ex: [
            ["How long have you been playing tennis? — For five years.", "Bạn chơi quần vợt được bao lâu rồi? — Năm năm."],
            ["How long has she been training for the marathon?", "Cô ấy luyện tập cho cuộc chạy marathon được bao lâu rồi?"],
            ["How long have they been playing together?", "Họ chơi cùng nhau được bao lâu rồi?"],
            ["How long have you been doing taekwondo? — Since I was eight.", "Bạn tập taekwondo bao lâu rồi? — Từ năm tám tuổi."]
          ] }
      ],
      p: [
        "Đây là **thì hiện tại hoàn thành tiếp diễn**, dùng cho việc bắt đầu trong quá khứ và **vẫn đang tiếp tục** đến bây giờ. Không dùng hiện tại đơn (I play … since) cho ý này.",
        "Dùng **for** với một khoảng thời gian (for five years, for two months). Dùng **since** với một mốc bắt đầu (since 2020, since she was ten).",
        "Khi nói, người bản xứ rút gọn: I’ve been (I have been), She’s been (She has been)."
      ],
      ex: [["I have been doing yoga for two years.", "Tôi tập yoga được hai năm rồi."], ["She has been playing tennis since she was ten.", "Cô ấy chơi quần vợt từ năm mười tuổi."]]
    },
    { h: "Giải thích luật chơi: can, cannot, have to",
      f: ["You can + động từ nguyên mẫu (được phép)", "You cannot + động từ nguyên mẫu (không được, nói rút gọn: can’t)", "You have to + động từ nguyên mẫu (bắt buộc phải)"],
      items: [
        { f: "You can + động từ nguyên mẫu (được phép)",
          mean: "**Bạn được phép…**: nói điều luật chơi **cho phép** làm.",
          parts: [
            ["You", "ở đây là “người chơi nói chung”, không chỉ riêng người nghe."],
            ["can", "được phép, có thể; giống nhau cho mọi chủ ngữ, không thêm -s."],
            ["động từ nguyên mẫu", "đứng ngay sau can, **không có to**: use, touch, kick, run."]
          ],
          use: "giải thích luật chơi cho người mới. Có thể hỏi lại bằng **Can I…?** (Tôi có được… không?).",
          note: "Không nói “You can to kick”. Can luôn đi thẳng với động từ nguyên mẫu.",
          ex: [
            ["You can use your head to hit the ball.", "Bạn được dùng đầu để đánh bóng."],
            ["In volleyball, you can touch the ball three times.", "Trong bóng chuyền, bạn được chạm bóng ba lần."],
            ["The goalkeeper can catch the ball with his hands.", "Thủ môn được bắt bóng bằng tay."],
            ["Can I serve again?", "Tôi có được giao bóng lại không?"]
          ] },
        { f: "You cannot + động từ nguyên mẫu (không được, nói rút gọn: can’t)",
          mean: "**Bạn không được…**: nói điều luật chơi **cấm**.",
          parts: [
            ["cannot", "không được; viết liền thành một từ."],
            ["can’t", "dạng rút gọn khi nói, rất phổ biến."],
            ["động từ nguyên mẫu", "đứng ngay sau, không có to."]
          ],
          use: "nhắc người mới những điều không được làm trong trận đấu. Thường dùng với touch, kick, run, hold.",
          note: "Không viết “can not” tách rời trong trường hợp thông thường, và không nói “You don’t can”.",
          ex: [
            ["You cannot kick another player.", "Bạn không được đá cầu thủ khác."],
            ["You can’t run with the ball in basketball.", "Trong bóng rổ bạn không được ôm bóng chạy."],
            ["Players cannot leave the field without permission.", "Cầu thủ không được rời sân khi chưa được phép."],
            ["You can’t hit the ball twice in a row.", "Bạn không được đánh bóng hai lần liên tiếp."]
          ] },
        { f: "You have to + động từ nguyên mẫu (bắt buộc phải)",
          mean: "**Bạn bắt buộc phải…**: nói điều luật chơi **yêu cầu** phải làm.",
          parts: [
            ["have to", "phải; dùng cho I, you, we, they."],
            ["has to", "dùng khi chủ ngữ là he, she, it hoặc một người: The player has to…"],
            ["do not have to", "**không cần, không bắt buộc** (không phải nghĩa “không được”)."],
            ["động từ nguyên mẫu", "đứng sau to: serve, wear, stay, wait."]
          ],
          use: "giải thích quy định bắt buộc trong trận đấu. Câu hỏi: **Do I have to…?**",
          note: "Chú ý: **do not have to** = không cần (tùy bạn), còn **cannot** = bị cấm. You do not have to run (không cần chạy) khác hẳn You cannot run (không được chạy).",
          ex: [
            ["You have to wear a helmet when you go cycling.", "Bạn phải đội mũ bảo hiểm khi đạp xe."],
            ["The ball has to go over the net.", "Bóng phải bay qua lưới."],
            ["You do not have to be fast to play golf.", "Bạn không cần phải nhanh mới chơi được gôn."],
            ["Do I have to wait for the whistle?", "Tôi có phải đợi tiếng còi không?"]
          ] }
      ],
      p: [
        "Khi chỉ cho người mới chơi, dùng **can** để nói điều được phép, **cannot** để nói điều bị cấm, và **have to** để nói điều bắt buộc.",
        "Sau **can** và **cannot** dùng động từ nguyên mẫu **không có “to”**. Ngược lại, **have to** thì luôn có “to”.",
        "Khi đến lượt ai giao bóng hay phát cầu, nói **It is your turn** hoặc **It is your serve** (khi nói thường rút gọn thành It’s)."
      ],
      ex: [["You cannot touch the ball with your hands.", "Bạn không được chạm tay vào bóng."], ["You have to serve from behind the line.", "Bạn phải giao bóng từ sau vạch."]]
    }
  ],
  mistakes: [
    ["I play swimming. I play yoga.", "I go swimming. I do yoga.", "Môn kết thúc bằng -ing dùng **go**; môn tập cá nhân không có bóng dùng **do**."],
    ["I’m good in swim.", "I am good at swimming.", "Dùng **good at**, và sau giới từ at động từ phải thêm **-ing**."],
    ["I enjoy to play tennis.", "I enjoy playing tennis.", "Sau **enjoy** luôn là động từ thêm -ing."],
    ["Vietnam won Thailand.", "Vietnam beat Thailand.", "Sau **win** là trận đấu hoặc giải; muốn nói thắng một đội thì dùng **beat**."],
    ["I play badminton since 5 years.", "I have been playing badminton for five years.", "Việc bắt đầu từ quá khứ và vẫn tiếp tục dùng **have been + động từ thêm -ing**; khoảng thời gian đi với **for**."],
    ["You can’t to touch the net.", "You cannot touch the net.", "Sau **can / cannot** không có “to”."],
    ["Vietnam win. Score 2 1. Good.", "Vietnam beat Thailand two–one last night. It was a really close match!", "Nói đủ câu, dùng thì quá khứ cho trận đã xong và đọc tỉ số có dấu gạch nối."]
  ],
  vocab: [
    ["football / soccer", "bóng đá (Anh / Mỹ)"], ["badminton", "cầu lông"], ["volleyball", "bóng chuyền"], ["basketball", "bóng rổ"],
    ["table tennis", "bóng bàn"], ["swimming", "bơi lội"], ["martial arts", "võ thuật"], ["sporty", "giỏi và thích thể thao"],
    ["match / game", "trận đấu"], ["team", "đội"], ["player", "cầu thủ, người chơi"], ["score", "tỉ số; ghi bàn"],
    ["goal", "bàn thắng; khung thành"], ["stadium", "sân vận động"], ["draw", "trận hòa; hòa"], ["coach", "huấn luyện viên"],
    ["referee", "trọng tài"], ["warm up", "khởi động"], ["work out", "tập luyện"], ["get in shape", "lấy lại vóc dáng"],
    ["get injured", "bị chấn thương"], ["out of shape", "xuống phong độ, kém dáng"], ["racket", "cái vợt"], ["court / pitch", "sân (bóng rổ, cầu lông) / sân bóng đá"]
  ],
  tips: [
    "Xếp các môn bạn biết vào ba cột **play**, **go**, **do** và dán lên bàn học để nhìn mỗi ngày.",
    "Sau mỗi trận đấu bạn xem, nói kết quả bằng một câu dùng **beat** và một câu dùng **won**, ví dụ: “Vietnam beat Thailand. Vietnam won the match.”",
    "Người Anh gọi là **football**, người Mỹ gọi là **soccer** vì “football” ở Mỹ là bóng bầu dục. Số 0 trong tỉ số kiểu Anh hay đọc là **nil**.",
    "Trả lời câu “How long have you been playing…?” bằng môn của chính bạn, nhớ dùng **for** với khoảng thời gian.",
    "Thu âm một phút kể về môn thể thao bạn yêu thích: chơi môn gì, bao lâu một lần, đã chơi được bao lâu và có giỏi không."
  ]
};
