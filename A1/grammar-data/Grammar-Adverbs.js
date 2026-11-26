/* Ngữ pháp nền tảng: Trạng từ và so sánh bằng (slowly, well, too, enough, as … as). Hiển thị bởi grammar-lesson.js. */
window.A1_GRAMMAR = {
  icon: "🏃",
  short: "Trạng từ và so sánh bằng",
  hero: ["Trạng từ và so sánh bằng", "slowly · well · too · enough · as … as"],
  desc: "Tiếng Việt dùng cùng một từ cho cả hai vị trí: “cô ấy **nhanh**” và “cô ấy chạy **nhanh**”. Tiếng Anh thì tách ra: **quick** (tính từ) mô tả người, vật; **quickly** (trạng từ) mô tả cách làm việc. Học xong bài này, bạn sẽ hết nói “She speaks English very good” và biết khen, nhận xét, so sánh hai người hay hai nơi một cách tự nhiên.",
  chips: ["Trạng từ -ly", "Tính từ hay trạng từ", "good và well", "too và enough", "as … as"],
  goal: [
    "Mô tả **cách** ai đó làm việc: “He drives **carefully**.”, “She speaks English **well**.”",
    "Chọn đúng **tính từ hay trạng từ**: “She **is quick**.” nhưng “She **runs quickly**.”",
    "Khen và nhận xét bằng **very, really, quite, a bit**: “You cook **really well**!”",
    "Nói một việc quá mức hoặc chưa đủ bằng **too** và **enough**: “It is **too hot**.”, “I am not **old enough**.”",
    "So sánh hai người, hai nơi bằng **as … as**, **not as … as**, **the same as**, **different from**."
  ],
  sections: [
    { nav: "🐢 Trạng từ -ly", title: "Trạng từ chỉ cách thức: tính từ + -ly", sub: "slow → slowly: mô tả một việc được làm như thế nào",
      intro: [
        "**Tính từ** mô tả người hoặc vật (a slow bus, a careful driver). **Trạng từ chỉ cách thức** mô tả **cách làm** một hành động: làm chậm, làm cẩn thận, làm dễ dàng. Phần lớn trạng từ được tạo bằng cách thêm **-ly** vào tính từ.",
        "Bảng dưới đây gồm những cặp hay dùng nhất khi nói chuyện hằng ngày. Hãy đọc to từng hàng: slow, slowly."
      ],
      table: { head: ["Tính từ", "Trạng từ", "Nghĩa của trạng từ", "Quy tắc"], say: [0, 1],
        rows: [
          ["slow", "slowly", "một cách chậm rãi", "thêm **-ly**"],
          ["quick", "quickly", "một cách nhanh chóng", "thêm **-ly**"],
          ["careful", "carefully", "một cách cẩn thận", "thêm **-ly** (giữ hai chữ l)"],
          ["quiet", "quietly", "một cách nhẹ nhàng, khẽ", "thêm **-ly**"],
          ["easy", "easily", "một cách dễ dàng", "**-y** đổi thành **-ily**"],
          ["happy", "happily", "một cách vui vẻ", "**-y** đổi thành **-ily**"],
          ["gentle", "gently", "một cách nhẹ nhàng", "**-le** đổi thành **-ly**"],
          ["good", "well", "tốt, giỏi", "**bất quy tắc** (xem phần 3)"]
        ] },
      formulas: [
        { f: "tính từ + -ly = trạng từ chỉ cách thức",
          mean: "**một cách …**: biến một tính từ thành từ mô tả cách làm hành động.",
          parts: [
            ["thêm -ly", "đa số tính từ: slow → slowly, bad → badly, polite → politely, clear → clearly."],
            ["-y → -ily", "tính từ tận cùng là phụ âm + y: easy → easily, happy → happily, noisy → noisily."],
            ["-le → -ly", "tính từ tận cùng là -le: gentle → gently, simple → simply, terrible → terribly."],
            ["-ful → -fully", "giữ nguyên -ful rồi thêm -ly nên có **hai chữ l**: careful → carefully, beautiful → beautifully."]
          ],
          use: "khi trả lời câu hỏi **“How …?”** về cách làm việc: “How does he drive?” → “He drives **slowly**.” Rất hay dùng khi nhận xét, góp ý, kể chuyện.",
          note: "Người Việt hay quên thêm -ly vì tiếng Việt không đổi dạng từ: “chạy nhanh”, “nói rõ”. Trong tiếng Anh phải nói “run **quickly**”, “speak **clearly**”, không nói “speak clear”.",
          ex: [["Please speak slowly. I am a beginner.", "Làm ơn nói chậm thôi. Tôi mới bắt đầu học."], ["She answered the question easily.", "Cô ấy trả lời câu hỏi một cách dễ dàng."], ["The children are playing happily in the park.", "Bọn trẻ đang chơi vui vẻ trong công viên."], ["He did not explain it clearly.", "Anh ấy giải thích không rõ ràng."]] },
        { f: "chủ ngữ + động từ + (tân ngữ) + trạng từ",
          mean: "**vị trí của trạng từ chỉ cách thức**: thường đứng **sau động từ**, hoặc **sau tân ngữ** nếu động từ có tân ngữ.",
          parts: [
            ["động từ + trạng từ", "khi động từ không có tân ngữ: She sings **beautifully**. He walks **slowly**."],
            ["động từ + tân ngữ + trạng từ", "khi có tân ngữ, trạng từ đứng **sau tân ngữ**: He drives **his car** carefully. (không nói “drives carefully his car”)"],
            ["Please + động từ + trạng từ", "lời nhờ lịch sự: Please drive carefully. Please close the door quietly."]
          ],
          use: "khi nhờ ai làm việc theo một cách nào đó, khi khen hoặc nhận xét cách làm việc của người khác.",
          note: "Không đặt trạng từ chen giữa động từ và tân ngữ. Sai: “I speak **well** English.” Đúng: “I speak English **well**.”",
          ex: [["She speaks English very well.", "Cô ấy nói tiếng Anh rất giỏi."], ["Please close the door quietly. The baby is sleeping.", "Làm ơn đóng cửa nhẹ thôi. Em bé đang ngủ."], ["My father drives his car carefully.", "Bố tôi lái xe rất cẩn thận."], ["Can you write your name clearly here?", "Bạn viết tên rõ ràng vào đây được không?"]] }
      ],
      mistakes: [
        ["Please speak slow.", "Please speak slowly.", "Mô tả **cách nói** thì dùng trạng từ **slowly**, không dùng tính từ slow."],
        ["I speak well English.", "I speak English well.", "Trạng từ đứng **sau tân ngữ** (English), không chen giữa động từ và tân ngữ."],
        ["She did it carefuly.", "She did it carefully.", "careful + ly = **carefully**, có hai chữ l."]
      ],
      talk: { title: "TÌNH HUỐNG: HỌC LÁI XE MÁY", turns: [
        ["A", "How is your driving lesson going?", "Buổi học lái xe của bạn thế nào rồi?"],
        ["B", "Not bad. I drive very slowly, but I drive carefully.", "Cũng được. Mình lái rất chậm, nhưng lái cẩn thận."],
        ["A", "That is good. The traffic in Hanoi moves quickly.", "Thế là tốt. Giao thông ở Hà Nội chạy nhanh lắm."],
        ["B", "Yes! My teacher explains everything clearly, so I learn easily.", "Đúng vậy! Thầy giải thích mọi thứ rất rõ ràng nên mình học dễ dàng."],
        ["A", "Great. Remember to brake gently in the rain.", "Tuyệt. Nhớ phanh nhẹ nhàng khi trời mưa nhé."]
      ] },
      tip: "Hỏi “**Như thế nào? Làm ra sao?**” cho một hành động thì dùng trạng từ -ly, đặt ở **cuối cụm**: speak English **slowly**, drive the car **carefully**." },

    { nav: "⚖️ Tính từ hay trạng từ", title: "Tính từ hay trạng từ?", sub: "She is quick, nhưng She runs quickly",
      intro: [
        "Đây là chỗ người Việt nhầm nhiều nhất, vì tiếng Việt dùng một từ “nhanh” cho cả hai câu “Cô ấy **nhanh**” và “Cô ấy chạy **nhanh**”. Trong tiếng Anh, câu hỏi cần đặt ra là: từ này mô tả **người, vật** hay mô tả **hành động**?",
        "Có một nhóm động từ đặc biệt: **be, look, feel, seem, sound, taste, smell**. Các động từ này không phải hành động mà nói về trạng thái, cảm giác, nên phía sau dùng **tính từ**, không dùng trạng từ."
      ],
      formulas: [
        { f: "tính từ + danh từ   /   động từ hành động + trạng từ",
          mean: "**tính từ mô tả người, vật; trạng từ mô tả cách làm hành động**.",
          parts: [
            ["tính từ + danh từ", "a **quick** runner, a **careful** driver, a **good** cook: mô tả người."],
            ["động từ + trạng từ", "runs **quickly**, drives **carefully**, cooks **well**: mô tả cách làm."],
            ["hai câu cùng nghĩa", "“He is a careful driver.” = “He drives carefully.” Cả hai đều đúng, chỉ khác cấu trúc."]
          ],
          use: "khi khen hoặc nhận xét một người: có thể khen **con người** (“You are a good singer”) hoặc khen **cách làm** (“You sing well”).",
          note: "Tiếng Việt nói “chạy nhanh”, “nói to”, nên người học hay dịch thẳng thành “run quick”, “speak loud”. Nhớ: sau động từ hành động thì cần dạng trạng từ.",
          ex: [["She is a quick runner. She runs quickly.", "Cô ấy là người chạy nhanh. Cô ấy chạy nhanh."], ["My mother is a careful driver.", "Mẹ tôi là người lái xe cẩn thận."], ["He answered the phone politely.", "Anh ấy nghe điện thoại một cách lịch sự."], ["Is your brother a good cook?", "Anh trai bạn nấu ăn có ngon không?"]] },
        { f: "be / look / feel / seem / sound / taste + tính từ",
          mean: "**trông, cảm thấy, có vẻ, nghe có vẻ, có vị**: các động từ chỉ trạng thái, phía sau dùng **tính từ**.",
          parts: [
            ["be", "là, thì: She **is** happy. The test **was** easy."],
            ["look", "trông có vẻ (nhìn bằng mắt): You **look** tired."],
            ["feel", "cảm thấy (trong người, trong lòng): I **feel** great today."],
            ["seem", "có vẻ như (theo nhận xét chung): He **seems** nice."],
            ["sound / taste", "nghe có vẻ / có vị: That **sounds** good. This soup **tastes** delicious."]
          ],
          use: "khi hỏi thăm sức khỏe, khen đồ ăn, nhận xét một kế hoạch hay một người mới gặp: “You look happy!”, “That sounds great!”",
          note: "Sai rất phổ biến: “I feel **badly**”, “You look **beautifully**”. Sau look, feel, seem, sound, taste dùng **tính từ**: “I feel **bad**”, “You look **beautiful**”.",
          ex: [["You look tired. Are you OK?", "Trông bạn mệt quá. Bạn ổn chứ?"], ["This phở tastes really delicious.", "Bát phở này ngon thật."], ["Your new boss seems friendly.", "Sếp mới của bạn có vẻ thân thiện."], ["I do not feel well today.", "Hôm nay tôi thấy không khỏe."]] }
      ],
      mistakes: [
        ["She dances beautiful.", "She dances beautifully.", "dance là động từ hành động, nên dùng trạng từ **beautifully**."],
        ["You look beautifully in that dress.", "You look beautiful in that dress.", "Sau **look** (trông có vẻ) dùng tính từ **beautiful**."],
        ["The food smells well.", "The food smells good.", "Sau **smell** (có mùi) dùng tính từ **good**."]
      ],
      talk: { title: "TÌNH HUỐNG: GẶP LẠI ĐỒNG NGHIỆP", turns: [
        ["A", "Hi Hoa! You look happy today.", "Chào Hoa! Hôm nay trông chị vui thế."],
        ["B", "I am! I finished my project quickly, and my boss was pleased.", "Đúng vậy! Chị làm xong dự án nhanh, và sếp rất hài lòng."],
        ["A", "That sounds great. You always work carefully.", "Nghe tuyệt quá. Chị lúc nào cũng làm việc cẩn thận."],
        ["B", "Thanks. The new manager seems nice too. He speaks very kindly to everyone.", "Cảm ơn em. Quản lý mới cũng có vẻ tốt. Anh ấy nói chuyện rất tử tế với mọi người."],
        ["A", "Good! Let’s have lunch together. The new café near here is really good.", "Tốt quá! Mình đi ăn trưa cùng nhau nhé. Quán cà phê mới gần đây ngon lắm."]
      ] },
      tip: "Hỏi: từ này mô tả **ai, cái gì** (dùng tính từ) hay mô tả **làm thế nào** (dùng trạng từ)? Riêng sau **be, look, feel, seem, sound, taste, smell** thì luôn dùng tính từ." },

    { nav: "⭐ good và well", title: "good và well, cùng các trạng từ bất quy tắc", sub: "well, hard, fast, late, early: không thêm -ly",
      intro: [
        "Một số trạng từ rất hay dùng **không theo quy tắc -ly**. Quan trọng nhất là **good → well**. Ngoài ra có bốn từ giữ nguyên dạng cho cả tính từ và trạng từ: **hard, fast, late, early**.",
        "Cẩn thận: **hardly** và **lately** là những từ có thật nhưng **nghĩa khác hẳn**, không phải trạng từ của hard và late."
      ],
      table: { head: ["Tính từ", "Trạng từ", "Ví dụ với trạng từ", "Nghĩa"], say: [0, 1, 2],
        rows: [
          ["good", "well", "She sings well.", "Cô ấy hát hay."],
          ["hard", "hard", "He works hard.", "Anh ấy làm việc chăm chỉ."],
          ["fast", "fast", "The train goes fast.", "Tàu chạy nhanh."],
          ["late", "late", "I got up late.", "Tôi dậy muộn."],
          ["early", "early", "We left early.", "Chúng tôi đi sớm."]
        ] },
      formulas: [
        { f: "good + danh từ   /   động từ + well",
          mean: "**tốt, giỏi, hay**: good là tính từ (mô tả người, vật), well là trạng từ (mô tả cách làm).",
          parts: [
            ["good", "tính từ: a **good** teacher, a **good** idea; và sau be, look, sound: The film is **good**. That sounds **good**."],
            ["well", "trạng từ: speak English **well**, sleep **well**, cook **well**, do **well** (làm tốt, đạt kết quả tốt)."],
            ["well (khỏe)", "well còn là tính từ nghĩa là **khỏe mạnh**: I am **well**, thank you. I do not feel **well**."]
          ],
          use: "khi khen kỹ năng của ai đó (“You speak English well!”), hỏi thăm (“Did you sleep well?”), trả lời “How are you?” (“I am well, thanks.”).",
          note: "Lỗi số một của người Việt: “He speaks English very **good**.” Sau động từ hành động phải dùng **well**: “He speaks English very **well**.”",
          ex: [["You speak English really well!", "Bạn nói tiếng Anh giỏi thật đấy!"], ["Did you sleep well last night?", "Tối qua bạn ngủ ngon không?"], ["She is a good singer. She sings well.", "Cô ấy là ca sĩ giỏi. Cô ấy hát hay."], ["My grandfather is not well this week.", "Tuần này ông tôi không được khỏe."]] },
        { f: "hard / fast / late / early (giữ nguyên dạng)",
          mean: "**chăm chỉ, nhanh, muộn, sớm**: bốn từ dùng giống nhau cho cả tính từ và trạng từ.",
          parts: [
            ["hard", "chăm chỉ, vất vả: a **hard** job (tính từ); work **hard** (trạng từ)."],
            ["fast", "nhanh: a **fast** car; drive **fast**. Không có từ “fastly”."],
            ["late", "muộn: a **late** dinner; arrive **late**."],
            ["early", "sớm: an **early** flight; get up **early**. Không có từ “earlily”."]
          ],
          use: "kể về thói quen hằng ngày, công việc, giờ giấc: “I get up **early**”, “I work **hard**”, “The bus came **late**”.",
          note: "Đừng tự thêm -ly: không có “fastly”, “earlily”. Còn “hardly” và “lately” có tồn tại nhưng mang nghĩa khác (xem công thức tiếp theo).",
          ex: [["My parents work very hard.", "Bố mẹ tôi làm việc rất vất vả."], ["Do not drive so fast!", "Đừng lái nhanh thế!"], ["I usually get up early on weekdays.", "Ngày thường tôi hay dậy sớm."], ["The train arrived late again.", "Tàu lại đến muộn."]] },
        { f: "hardly = hầu như không   /   lately = gần đây",
          mean: "**hai “bẫy” hay gặp**: trông giống trạng từ của hard và late nhưng nghĩa hoàn toàn khác.",
          parts: [
            ["hardly", "**hầu như không**, gần như không: I can **hardly** hear you. (Tôi gần như không nghe thấy bạn.) Thường đứng **trước động từ chính**."],
            ["work hard", "làm việc **chăm chỉ**: ngược nghĩa với “hardly work” (hầu như không làm gì)."],
            ["lately", "**gần đây, dạo này** (= recently): Have you seen Lan **lately**?"],
            ["come late", "đến **muộn**: không liên quan đến lately."]
          ],
          use: "**hardly** khi than phiền điều gì quá ít (hardly sleep, hardly see, hardly eat); **lately** khi hỏi thăm, kể chuyện dạo gần đây.",
          note: "Câu “He hardly works” nghĩa là **anh ấy hầu như không làm việc**, chứ không phải “anh ấy làm việc chăm chỉ”. Muốn khen chăm chỉ phải nói “He works **hard**”.",
          ex: [["I hardly sleep before exams.", "Trước kỳ thi tôi hầu như không ngủ."], ["It is so noisy. I can hardly hear you.", "Ồn quá. Tôi gần như không nghe thấy bạn."], ["I have been very busy lately.", "Dạo này tôi rất bận."], ["Have you seen Minh lately?", "Gần đây bạn có gặp Minh không?"]] }
      ],
      mistakes: [
        ["He speaks English very good.", "He speaks English very well.", "Mô tả cách nói dùng trạng từ **well**."],
        ["She runs very fastly.", "She runs very fast.", "**fast** giữ nguyên dạng, không có từ “fastly”."],
        ["My father works hardly every day.", "My father works hard every day.", "**hard** = chăm chỉ; **hardly** = hầu như không, nghĩa ngược lại."]
      ],
      talk: { title: "TÌNH HUỐNG: KHEN NGƯỜI MỚI Ở CÔNG TY", turns: [
        ["A", "How is the new colleague, Tuan?", "Đồng nghiệp mới, Tuấn ấy, thế nào?"],
        ["B", "He is good. He works hard and he learns fast.", "Cậu ấy được lắm. Làm việc chăm chỉ và học nhanh."],
        ["A", "Does he speak English well?", "Cậu ấy nói tiếng Anh có giỏi không?"],
        ["B", "Yes, very well. But he comes to work late sometimes.", "Có, rất giỏi. Nhưng thỉnh thoảng cậu ấy đi làm muộn."],
        ["A", "Maybe he hardly sleeps. He has a new baby.", "Có lẽ cậu ấy hầu như không được ngủ. Cậu ấy mới có em bé."],
        ["B", "Ah, that explains it. I have not seen him smile much lately!", "À, ra vậy. Dạo này tôi ít thấy cậu ấy cười!"]
      ] },
      tip: "Nhớ câu: “A **good** student studies **well** and works **hard**, and **hardly** ever comes **late**.” Một câu có đủ good, well, hard, hardly, late." },

    { nav: "📏 Mức độ", title: "Trạng từ chỉ mức độ: very, really, quite, a bit, too, enough", sub: "Nói mức độ nhiều hay ít, quá mức hay chưa đủ",
      intro: [
        "Trạng từ chỉ mức độ đứng **trước tính từ hoặc trước trạng từ khác** để nói “rất”, “khá”, “hơi”, “quá”. Riêng **enough** (đủ) lại đứng **sau** tính từ, ngược với tiếng Việt.",
        "Chú ý: **too** (quá) mang ý **tiêu cực**, nghĩa là nhiều hơn mức mình muốn, gây ra vấn đề. Còn **very** (rất) chỉ là nhiều, không có ý chê."
      ],
      formulas: [
        { f: "very / really / quite / a bit + tính từ hoặc trạng từ",
          mean: "**rất, thật sự, khá, hơi**: tăng hoặc giảm mức độ của tính từ, trạng từ.",
          parts: [
            ["very", "**rất**: mức độ mạnh, trung tính. very hot, very well."],
            ["really", "**thật sự, rất**: giống very nhưng thân mật và cảm xúc hơn, rất hay dùng khi khen: You cook **really** well!"],
            ["quite", "**khá**: mức trung bình đến cao. The test was **quite** easy."],
            ["a bit", "**hơi, một chút**: thường dùng với tính từ mang nghĩa không tốt, để nói nhẹ nhàng, lịch sự: It is **a bit** expensive."]
          ],
          use: "khi khen (really good, very well), nhận xét nhẹ nhàng (a bit noisy, a bit late), trả lời câu hỏi “How is …?”.",
          note: "Người Việt hay nói “very like” hay “very love” theo kiểu “rất thích”. very không đứng trước động từ: nói “I **really** like it” hoặc “I like it **very much**”.",
          ex: [["Your English is really good.", "Tiếng Anh của bạn tốt thật đấy."], ["The hotel was quite nice, but a bit noisy.", "Khách sạn khá đẹp, nhưng hơi ồn."], ["She drives very carefully.", "Cô ấy lái xe rất cẩn thận."], ["Is the shop very far from here?", "Cửa hàng có xa đây lắm không?"]] },
        { f: "too + tính từ (+ for + người) (+ to + động từ nguyên mẫu)",
          mean: "**quá …** (đến mức không làm được, không muốn): mang ý tiêu cực.",
          parts: [
            ["too + tính từ", "quá: The bag is **too** heavy. (nặng quá, có vấn đề)"],
            ["too + tính từ + to + động từ nguyên mẫu", "quá … nên không thể: It is **too** hot **to** sleep."],
            ["too + tính từ + for + tân ngữ", "quá … đối với ai: This shirt is **too** big **for me**."],
            ["very (so sánh)", "rất, không có vấn đề: The bag is **very** heavy, but I can carry it."]
          ],
          use: "khi từ chối, phàn nàn lịch sự, giải thích vì sao không mua hoặc không làm: “It is too expensive.”, “I am too tired to go out.”",
          note: "Đừng dùng too để khen. “You are **too** beautiful” nghe như có vấn đề. Khen thì dùng **very** hoặc **really**: “You are really beautiful.”",
          ex: [["This dress is too expensive. I will not buy it.", "Cái váy này đắt quá. Tôi sẽ không mua."], ["I am too tired to go out tonight.", "Tối nay tôi mệt quá không đi chơi được."], ["These shoes are too small for me.", "Đôi giày này chật quá với tôi."], ["Is the coffee too sweet for you?", "Cà phê có ngọt quá với bạn không?"]] },
        { f: "tính từ + enough   /   enough + danh từ",
          mean: "**đủ …**: enough đứng **sau tính từ** nhưng đứng **trước danh từ**.",
          parts: [
            ["tính từ + enough", "đủ: old **enough**, big **enough**, warm **enough**. (không nói “enough old”)"],
            ["trạng từ + enough", "đủ: speak loudly **enough**, run fast **enough**."],
            ["enough + danh từ", "đủ: **enough** money, **enough** time, **enough** chairs."],
            ["not + tính từ + enough", "chưa đủ: The room is **not** big **enough**."]
          ],
          use: "khi giải thích có làm được hay không: “Am I old enough to drive?”, “We do not have enough time.” Thường theo sau là **to + động từ nguyên mẫu** hoặc **for + người**.",
          note: "Tiếng Việt nói “**đủ** lớn”, nên người học hay nói “enough big”. Tiếng Anh đảo lại: “big **enough**”. Nhưng với danh từ thì giữ trước: “**enough** money”.",
          ex: [["Is the room big enough for four people?", "Phòng có đủ rộng cho bốn người không?"], ["My son is not old enough to drive.", "Con trai tôi chưa đủ tuổi lái xe."], ["We do not have enough time.", "Chúng ta không có đủ thời gian."], ["Can you speak loudly enough? I cannot hear you.", "Bạn nói to đủ nghe được không? Tôi không nghe thấy bạn."]] }
      ],
      mistakes: [
        ["He is enough old to drive.", "He is old enough to drive.", "**enough** đứng **sau** tính từ: old enough."],
        ["Your food is too delicious!", "Your food is really delicious!", "Khen thì dùng **really / very**. **too** mang nghĩa “quá mức, có vấn đề”."],
        ["I very like this song.", "I really like this song.", "very không đứng trước động từ. Dùng **really like** hoặc **like … very much**."]
      ],
      talk: { title: "TÌNH HUỐNG: XEM CĂN HỘ ĐỂ THUÊ", turns: [
        ["A", "What do you think of the flat?", "Bạn thấy căn hộ thế nào?"],
        ["B", "It is really nice, and the kitchen is quite big.", "Đẹp thật, và bếp khá rộng."],
        ["A", "Is the bedroom big enough for two people?", "Phòng ngủ có đủ rộng cho hai người không?"],
        ["B", "Yes, but it is a bit dark. And the street is too noisy at night.", "Có, nhưng hơi tối. Và con phố buổi tối ồn quá."],
        ["A", "And the price?", "Còn giá thì sao?"],
        ["B", "Too expensive for me. I do not have enough money this month.", "Đắt quá so với mình. Tháng này mình không có đủ tiền."]
      ] },
      tip: "**very** = rất (bình thường), **too** = quá (có vấn đề). **enough** đi sau tính từ (big enough) nhưng trước danh từ (enough money): “đủ” kẹp giữa tính từ và danh từ." },

    { nav: "🟰 So sánh bằng", title: "So sánh bằng: as … as, the same as, different from", sub: "So sánh hai người, hai nơi giống hoặc khác nhau",
      intro: [
        "Khi muốn nói hai người, hai nơi **bằng nhau** về một đặc điểm, tiếng Anh kẹp tính từ hoặc trạng từ giữa hai chữ **as**: “Hanoi is **as busy as** Saigon.” Thêm **not** để nói **không bằng**.",
        "Ngoài ra, **the same as** (giống) và **different from** (khác) dùng để so sánh chung hai thứ mà không cần tính từ."
      ],
      formulas: [
        { f: "as + tính từ / trạng từ + as",
          mean: "**… bằng …, … như …**: hai người hoặc vật ngang nhau.",
          parts: [
            ["be + as + tính từ + as", "so sánh người, vật: My brother **is as tall as** my father."],
            ["động từ + as + trạng từ + as", "so sánh cách làm: She **cooks as well as** her mother."],
            ["as + tính từ + as + đại từ", "trong nói chuyện thường dùng tân ngữ: He is as old as **me**. (trang trọng hơn: as old as I am)"]
          ],
          use: "khi khen (“You sing as well as a singer!”), khi so sánh hai thành phố, hai món ăn, hai người trong gia đình.",
          note: "Phải có **đủ hai chữ as**. Người học hay quên chữ đầu: “He is tall as me” là sai. Và giữa hai chữ as dùng dạng **gốc** của tính từ, không dùng dạng so sánh hơn: không nói “as taller as”.",
          ex: [["My brother is as tall as my father.", "Anh trai tôi cao bằng bố tôi."], ["Da Nang is as beautiful as Nha Trang.", "Đà Nẵng đẹp như Nha Trang."], ["She cooks as well as her mother.", "Cô ấy nấu ăn ngon như mẹ cô ấy."], ["Is Hanoi as hot as Saigon in summer?", "Mùa hè Hà Nội có nóng như Sài Gòn không?"]] },
        { f: "not as + tính từ / trạng từ + as",
          mean: "**không … bằng**: người hoặc vật thứ nhất kém hơn người hoặc vật thứ hai.",
          parts: [
            ["is not as … as", "kém hơn về tính chất: The bus is **not as fast as** the train."],
            ["does not / did not + động từ + as … as", "kém hơn về cách làm: I **do not** speak English **as well as** you."],
            ["not as … as = nói lịch sự", "“Hoi An is not as big as Da Nang” nghe nhẹ nhàng hơn “Hoi An is smaller”."]
          ],
          use: "khi khiêm tốn về bản thân (“I do not cook as well as my mother”), khi so sánh một cách nhẹ nhàng, lịch sự.",
          note: "Câu “Hanoi is **not as hot as** Saigon” nghĩa là **Sài Gòn nóng hơn**. Người học hay hiểu nhầm thành “không nóng như nhau, không biết bên nào hơn”.",
          ex: [["The bus is not as fast as the train.", "Xe buýt không nhanh bằng tàu hỏa."], ["I do not speak English as well as you.", "Tôi nói tiếng Anh không giỏi bằng bạn."], ["This phone is not as expensive as that one.", "Điện thoại này không đắt bằng cái kia."], ["Was the test as difficult as last year?", "Bài kiểm tra có khó như năm ngoái không?"]] },
        { f: "the same (+ danh từ) as   /   different from",
          mean: "**giống …, cùng … với / khác với**: so sánh chung hai thứ.",
          parts: [
            ["the same as", "giống hệt: My phone is **the same as** yours. Luôn có **the**."],
            ["the same + danh từ + as", "cùng (tuổi, màu, cỡ…): She is **the same age as** me. My bag is **the same colour as** yours."],
            ["different from", "khác với: Life in Saigon is **different from** life in my village. Dùng **from**, không dùng “than”."],
            ["similar to", "gần giống, tương tự: Thai food is **similar to** Vietnamese food."]
          ],
          use: "khi so sánh quê hương với thành phố, đồ của mình với đồ của bạn, món ăn hai nước, tuổi tác.",
          note: "Người Việt hay nói “same with” (theo “giống **với**”) hoặc “different with”, “different than”. Ở trình độ này hãy nhớ: **the same as** và **different from**.",
          ex: [["My phone is the same as yours.", "Điện thoại của tôi giống hệt của bạn."], ["Lan is the same age as my sister.", "Lan bằng tuổi chị gái tôi."], ["Life in the city is very different from life in the countryside.", "Cuộc sống ở thành phố rất khác cuộc sống ở nông thôn."], ["Is English grammar different from Vietnamese grammar?", "Ngữ pháp tiếng Anh có khác ngữ pháp tiếng Việt không?"]] }
      ],
      mistakes: [
        ["My sister is tall as me.", "My sister is as tall as me.", "So sánh bằng cần **đủ hai chữ as**: as tall as."],
        ["My shirt is same with your shirt.", "My shirt is the same as your shirt.", "Dùng **the same as**, có the và dùng as, không dùng with."],
        ["Hanoi is different than Saigon.", "Hanoi is different from Saigon.", "Ở trình độ này luôn dùng **different from**."]
      ],
      talk: { title: "TÌNH HUỐNG: SO SÁNH HÀ NỘI VÀ SÀI GÒN", turns: [
        ["A", "You lived in Hanoi and Saigon. Which city do you like?", "Bạn từng sống ở Hà Nội và Sài Gòn. Bạn thích thành phố nào?"],
        ["B", "Both! Hanoi is as busy as Saigon, but it is not as hot.", "Cả hai! Hà Nội đông đúc như Sài Gòn, nhưng không nóng bằng."],
        ["A", "Is the food the same?", "Đồ ăn có giống nhau không?"],
        ["B", "No, it is quite different. Food in the south is sweeter.", "Không, khá khác. Đồ ăn miền Nam ngọt hơn."],
        ["A", "And the people?", "Còn con người thì sao?"],
        ["B", "Very friendly in both cities. People in Saigon speak as fast as people in Hanoi!", "Ở cả hai thành phố đều rất thân thiện. Người Sài Gòn nói nhanh như người Hà Nội!"]
      ] },
      tip: "Hình dung hai chữ **as** như hai cái bánh mì kẹp tính từ ở giữa: **as** tall **as**. Giống thì **the same as**, khác thì **different from** (khác **từ** chỗ này)." }
  ],
  speak: [
    { q: "How well do you speak English?", vi: "Bạn nói tiếng Anh giỏi đến mức nào?", hint: "Dùng **speak English + well / quite well / a bit / slowly**: I speak English quite well, but I speak slowly.",
      answers: [["I speak English quite well, but I speak slowly.", "Tôi nói tiếng Anh khá ổn, nhưng nói chậm."], ["Not very well yet. I can read easily, but listening is a bit difficult.", "Chưa giỏi lắm. Tôi đọc thì dễ, nhưng nghe hơi khó."]] },
    { q: "Who is a good cook in your family?", vi: "Trong nhà bạn ai nấu ăn ngon?", hint: "Khen người bằng **a good cook**, rồi khen cách làm bằng **cooks really well**.",
      answers: [["My mother is a really good cook. She cooks phở very well.", "Mẹ tôi nấu ăn rất ngon. Mẹ nấu phở rất ngon."], ["My father. He cooks quickly and carefully, and his food tastes delicious.", "Bố tôi. Bố nấu nhanh và cẩn thận, đồ ăn bố nấu rất ngon."]] },
    { q: "Do you work hard? Do you usually get up early?", vi: "Bạn có làm việc chăm chỉ không? Bạn có hay dậy sớm không?", hint: "Dùng **work hard**, **get up early / late**, không thêm -ly.",
      answers: [["Yes, I work hard, so I usually get up early, at six o’clock.", "Có, tôi làm việc chăm chỉ nên thường dậy sớm, lúc sáu giờ."], ["I work hard on weekdays, but I get up late on Sundays.", "Ngày thường tôi làm việc chăm chỉ, nhưng Chủ nhật tôi dậy muộn."]] },
    { q: "How do people drive in your city?", vi: "Người ở thành phố bạn lái xe như thế nào?", hint: "Mô tả cách làm bằng trạng từ: **drive fast / carefully / badly**, có thể thêm **too, very, quite**.",
      answers: [["People drive too fast in Saigon, and the traffic is very noisy.", "Ở Sài Gòn người ta lái xe nhanh quá, và giao thông rất ồn."], ["Most people drive quite carefully in my town.", "Ở thị trấn tôi phần lớn mọi người lái xe khá cẩn thận."]] },
    { q: "How do you feel today?", vi: "Hôm nay bạn thấy thế nào?", hint: "Sau **feel** dùng tính từ: I feel great / tired / a bit sleepy. Có thể dùng **well** nghĩa là khỏe.",
      answers: [["I feel great today, thank you.", "Hôm nay tôi thấy rất khỏe, cảm ơn bạn."], ["I feel a bit tired. I hardly slept last night.", "Tôi thấy hơi mệt. Tối qua tôi hầu như không ngủ."]] },
    { q: "Is your hometown as busy as Hanoi?", vi: "Quê bạn có đông đúc như Hà Nội không?", hint: "Dùng **as … as** hoặc **not as … as**, có thể thêm **different from**.",
      answers: [["No, it is not as busy as Hanoi. It is very quiet.", "Không, không đông bằng Hà Nội. Ở đó rất yên tĩnh."], ["Life there is very different from life in Hanoi, but the food is as good.", "Cuộc sống ở đó rất khác ở Hà Nội, nhưng đồ ăn thì ngon không kém."]] },
    { q: "Compare yourself with a brother, sister or friend. Are you the same age?", vi: "Hãy so sánh bạn với anh chị em hoặc một người bạn. Hai người có bằng tuổi không?", hint: "Dùng **the same age as**, **as tall as**, **not as … as**.",
      answers: [["My friend Lan is the same age as me, but she is not as tall as me.", "Bạn tôi, Lan, bằng tuổi tôi, nhưng cô ấy không cao bằng tôi."], ["My brother is two years older. He runs much faster, but I study as hard as him.", "Anh tôi hơn tôi hai tuổi. Anh ấy chạy nhanh hơn nhiều, nhưng tôi học chăm chỉ như anh ấy."]] },
    { q: "Why don’t you buy a car?", vi: "Sao bạn không mua ô tô?", hint: "Giải thích bằng **too + tính từ** hoặc **not … enough**: Cars are too expensive. / I do not have enough money.",
      answers: [["Cars are too expensive, and I do not have enough money.", "Ô tô đắt quá, và tôi không có đủ tiền."], ["My street is not wide enough for a car. A motorbike is easier.", "Phố nhà tôi không đủ rộng cho ô tô. Xe máy tiện hơn."]] }
  ],
  exercises: [
    { title: "Phần 1: Điền tính từ hoặc trạng từ đúng", items: [
      { q: "Please speak ___. I cannot understand you. (slow)", a: ["slowly"], hint: "một cách chậm rãi" },
      { q: "She passed the test ___. (easy)", a: ["easily"], hint: "một cách dễ dàng" },
      { q: "You look ___ today. Did you sleep badly? (tired)", a: ["tired"], hint: "sau look dùng tính từ" },
      { q: "My brother plays the guitar very ___. (good)", a: ["well"], hint: "hay, giỏi" },
      { q: "We must leave ___ tomorrow. The flight is at six. (early)", a: ["early"], hint: "sớm" },
      { q: "Please carry this box ___. It is made of glass. (careful)", a: ["carefully"], hint: "một cách cẩn thận" },
      { q: "This soup tastes ___. Can I have some more? (delicious)", a: ["delicious"], hint: "sau taste dùng tính từ" }
    ] },
    { title: "Phần 2: too, enough và so sánh bằng", items: [
      { q: "This coat is ___ big for me. I need a smaller one.", a: ["too"], hint: "quá" },
      { q: "Is the water warm ___ for swimming?", a: ["enough"], hint: "đủ" },
      { q: "My sister is as tall ___ my mother.", a: ["as"], hint: "bằng" },
      { q: "Life in Hue is different ___ life in Saigon.", a: ["from"], hint: "khác với" },
      { q: "Lan is the same age ___ me.", a: ["as"], hint: "bằng tuổi" }
    ] },
    { title: "Phần 3: Chọn câu đúng", items: [
      { q: "“Anh ấy nói tiếng Anh rất giỏi.”", options: ["He speaks English very good.", "He speaks very well English.", "He speaks English very well."], a: 2, why: "Mô tả cách nói dùng **well**, và trạng từ đứng **sau tân ngữ** English." },
      { q: "“Bố tôi làm việc chăm chỉ.”", options: ["My father works hardly.", "My father works hard.", "My father works hardy."], a: 1, why: "**hard** = chăm chỉ. **hardly** = hầu như không." },
      { q: "“Con tôi chưa đủ tuổi đi học.”", options: ["My son is not enough old for school.", "My son is not old enough for school.", "My son is not too old for school."], a: 1, why: "**enough** đứng **sau** tính từ: old enough." },
      { q: "Khen món ăn của bạn:", options: ["Your food is too delicious!", "Your food is really delicious!", "Your food is deliciously!"], a: 1, why: "Khen dùng **really**; too mang nghĩa quá mức, có vấn đề; sau be dùng tính từ." },
      { q: "“Xe buýt không nhanh bằng tàu hỏa.”", options: ["The bus is not as fast as the train.", "The bus is not fast as the train.", "The bus is not as faster as the train."], a: 0, why: "**not as + tính từ dạng gốc + as**." },
      { q: "“Nghe hay đấy!”", options: ["That sounds well!", "That sounds good!", "That sounds goodly!"], a: 1, why: "Sau **sound** dùng tính từ **good**." }
    ] }
  ],
  vocab: [["slowly / quickly", "chậm rãi / nhanh chóng"], ["carefully / easily", "cẩn thận / dễ dàng"], ["good → well", "tốt, giỏi (well còn nghĩa là khỏe)"], ["hard / fast / late / early", "chăm chỉ / nhanh / muộn / sớm (không thêm -ly)"], ["hardly", "hầu như không"], ["lately", "gần đây, dạo này"], ["look / feel / seem / sound / taste + tính từ", "trông / cảm thấy / có vẻ / nghe có vẻ / có vị"], ["very / really / quite / a bit", "rất / thật sự / khá / hơi"], ["too + tính từ", "quá (có vấn đề)"], ["tính từ + enough / enough + danh từ", "đủ"], ["as … as / not as … as", "bằng / không bằng"], ["the same as / different from", "giống / khác với"]],
  tips: [
    "Mỗi khi nói một hành động, tự hỏi “làm **như thế nào**?” rồi thêm một trạng từ: “I walk to work **slowly**.”, “I cook **quickly**.”",
    "Tập khen người xung quanh mỗi ngày bằng mẫu “You … **really well**!”: You sing really well! You drive really well!",
    "Ghi nhớ năm từ đặc biệt bằng một câu: **well, hard, fast, late, early** không bao giờ thêm -ly để làm trạng từ.",
    "Khi đi mua sắm, tập nói lý do không mua: “It is **too** expensive.”, “It is not big **enough**.”",
    "Chọn hai nơi bạn biết (quê bạn và thành phố bạn sống) rồi nói ba câu với **as … as**, **not as … as** và **different from**."
  ]
};