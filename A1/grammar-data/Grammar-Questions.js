/* Ngữ pháp nền tảng: Đặt câu hỏi (Yes / No, What, Where, How long, Who called…, isn’t it?, Could you tell me…?). Hiển thị bởi grammar-lesson.js. */
window.A1_GRAMMAR = {
  icon: "❓",
  short: "Đặt câu hỏi",
  hero: ["Đặt câu hỏi để giữ cuộc trò chuyện", "Do you…? · Where…? · How long…? · …, isn’t it?"],
  desc: "Tiếng Việt đặt câu hỏi bằng cách thêm từ vào cuối câu: “Bạn thích cà phê **không**?”, “Bạn sống ở **đâu**?”. Tiếng Anh thì phải **đảo trợ động từ lên trước chủ ngữ** và đưa từ để hỏi lên **đầu câu**. Biết hỏi đúng, bạn không chỉ trả lời mà còn **hỏi lại**, nhờ vậy cuộc trò chuyện kéo dài và tự nhiên hơn.",
  chips: ["Câu hỏi Yes / No", "Từ để hỏi", "How + tính từ", "Who called? / Who did you call?", "Hỏi lịch sự"],
  goal: [
    "Hỏi và trả lời ngắn câu hỏi Yes / No: “**Do you** like coffee?” → “Yes, **I do**.”",
    "Dùng đúng **What, Where, When, Who, Why, How, Which, Whose** để hỏi thông tin khi làm quen.",
    "Hỏi tuổi, khoảng cách, thời gian, số lượng, tần suất bằng **How old, How far, How long, How much, How often**.",
    "Phân biệt **“Who called you?”** và **“Who did you call?”**, và hỏi “**What happened?**”.",
    "Giữ cuộc trò chuyện bằng câu hỏi đuôi (“…, **isn’t it?**”) và hỏi người lạ lịch sự: “**Could you tell me where** the bank **is**?”"
  ],
  sections: [
    { nav: "✅ Câu hỏi Yes / No", title: "Câu hỏi Yes / No và câu trả lời ngắn", sub: "Đảo trợ động từ lên trước chủ ngữ",
      intro: [
        "Câu hỏi Yes / No là câu hỏi chỉ cần trả lời **có** hoặc **không**. Cách làm: đưa **trợ động từ** (be, do, does, did, can, will, have) lên **trước chủ ngữ**. Không cần thêm từ nào ở cuối câu như tiếng Việt (“không”, “chưa”, “à”).",
        "Người bản xứ hiếm khi trả lời cụt lủn “Yes.” hay “No.”, mà dùng **câu trả lời ngắn**: Yes / No + đại từ + **lặp lại trợ động từ**. Bảng dưới đây giúp bạn chọn trợ động từ đúng."
      ],
      table: { head: ["Câu kể", "Câu hỏi", "Trả lời ngắn"], say: [0, 1, 2],
        rows: [
          ["She is a nurse.", "Is she a nurse?", "Yes, she is. / No, she isn’t."],
          ["You like phở.", "Do you like phở?", "Yes, I do. / No, I don’t."],
          ["He works here.", "Does he work here?", "Yes, he does. / No, he doesn’t."],
          ["They went to Hue.", "Did they go to Hue?", "Yes, they did. / No, they didn’t."],
          ["You can swim.", "Can you swim?", "Yes, I can. / No, I can’t."],
          ["It will rain.", "Will it rain?", "Yes, it will. / No, it won’t."],
          ["You have been to Da Lat.", "Have you been to Da Lat?", "Yes, I have. / No, I haven’t."]
        ] },
      formulas: [
        { f: "Am / Is / Are / Was / Were + chủ ngữ + …?",
          mean: "**câu hỏi với động từ be**: hỏi về tên, nghề nghiệp, tính chất, vị trí, cảm giác.",
          parts: [
            ["Am I…?", "dùng với I: Am I late?"],
            ["Is he / she / it…?", "một người, một vật: Is it far? Is your mother at home?"],
            ["Are you / we / they…?", "bạn, nhiều người, nhiều vật: Are you tired?"],
            ["Was / Were…?", "quá khứ: Was the film good? Were you at home yesterday?"]
          ],
          use: "khi làm quen (“Are you a student?”), hỏi thăm (“Are you OK?”), hỏi về nơi chốn (“Is the bank near here?”). Trả lời: **Yes, I am. / No, I’m not.**",
          note: "Câu có be thì **không thêm do**. Sai: “Do you are a student?” Đúng: “**Are** you a student?” Và trả lời “Yes, I am” không rút gọn thành “Yes, I’m”.",
          ex: [["Are you from Hanoi?", "Bạn là người Hà Nội à?"], ["Is your sister married?", "Chị gái bạn lập gia đình chưa?"], ["Was the hotel nice?", "Khách sạn có đẹp không?"], ["No, it wasn’t. It was very old.", "Không. Nó rất cũ."]] },
        { f: "Do / Does / Did + chủ ngữ + động từ nguyên mẫu + …?",
          mean: "**câu hỏi với động từ thường** (like, live, work, go…): mượn trợ động từ do, does, did.",
          parts: [
            ["Do", "hiện tại, với I / you / we / they: **Do** you work here?"],
            ["Does", "hiện tại, với he / she / it: **Does** she speak English? Động từ phía sau **không thêm -s**."],
            ["Did", "quá khứ, với mọi chủ ngữ: **Did** you sleep well? Động từ phía sau ở **dạng nguyên mẫu**."]
          ],
          use: "khi hỏi về thói quen, sở thích, công việc (“Do you like…?”, “Does he work…?”) và về việc đã xảy ra (“Did you go…?”). Trả lời: **Yes, I do / No, she doesn’t / Yes, we did**.",
          note: "Đã dùng does, did thì động từ chính trở về nguyên mẫu. Sai: “Does she **works**?”, “Did you **went**?” Đúng: “Does she **work**?”, “Did you **go**?”",
          ex: [["Do you like spicy food?", "Bạn có thích đồ ăn cay không?"], ["Does your father still work?", "Bố bạn vẫn còn đi làm à?"], ["Did you watch the football last night?", "Tối qua bạn có xem bóng đá không?"], ["No, I didn’t. I went to bed early.", "Không. Tôi đi ngủ sớm."]] },
        { f: "Can / Will / Have + chủ ngữ + động từ + …?",
          mean: "**câu hỏi với động từ khuyết thiếu và have**: chỉ cần đưa từ đó lên trước chủ ngữ.",
          parts: [
            ["Can + chủ ngữ + động từ nguyên mẫu?", "hỏi khả năng, xin phép, nhờ vả: **Can** you drive? **Can** I sit here?"],
            ["Will + chủ ngữ + động từ nguyên mẫu?", "hỏi về tương lai, quyết định: **Will** you be at home tonight?"],
            ["Have / Has + chủ ngữ + quá khứ phân từ (cột thứ ba)?", "hỏi trải nghiệm hoặc việc đã xong chưa: **Have** you ever been to Phu Quoc? **Has** he finished?"],
            ["Do you have…?", "khi have nghĩa là **có, sở hữu**, dùng do: **Do** you **have** a car? (không hỏi “Have you a car?”)"]
          ],
          use: "khi nhờ giúp đỡ, xin phép, hỏi kế hoạch, hỏi đã từng làm gì chưa. Trả lời: **Yes, I can / No, I won’t / Yes, I have**.",
          note: "Người Việt hay hỏi “**You can** speak English?” theo trật tự câu kể. Phải đảo: “**Can you** speak English?”",
          ex: [["Can you speak a little slower, please?", "Bạn nói chậm hơn một chút được không?"], ["Will you come to my birthday party?", "Bạn sẽ đến tiệc sinh nhật của tôi chứ?"], ["Have you ever tried bún chả?", "Bạn đã bao giờ ăn bún chả chưa?"], ["Do you have any brothers or sisters?", "Bạn có anh chị em nào không?"]] }
      ],
      mistakes: [
        ["You like coffee?", "Do you like coffee?", "Câu hỏi với động từ thường cần **Do / Does / Did** ở đầu. (Câu kể lên giọng chỉ dùng khi ngạc nhiên.)"],
        ["Does she likes music?", "Does she like music?", "Có **does** rồi thì động từ chính ở dạng nguyên mẫu **like**."],
        ["Are you like Hanoi? — Yes, I like.", "Do you like Hanoi? — Yes, I do.", "like là động từ thường nên hỏi bằng **Do**; trả lời ngắn lặp lại trợ động từ: **Yes, I do**."]
      ],
      talk: { title: "TÌNH HUỐNG: LÀM QUEN TRONG LỚP HỌC TIẾNG ANH", turns: [
        ["A", "Hi! Are you new here?", "Chào bạn! Bạn mới đến à?"],
        ["B", "Yes, I am. This is my first class.", "Đúng vậy. Đây là buổi học đầu tiên của mình."],
        ["A", "Do you live near here?", "Bạn sống gần đây à?"],
        ["B", "No, I don’t. I live in District 7. Do you?", "Không. Mình sống ở Quận 7. Còn bạn?"],
        ["A", "Yes, I do. Can you come on Saturdays too?", "Có, mình sống gần đây. Bạn có học được cả thứ Bảy không?"],
        ["B", "Yes, I can. Did you take this course last year?", "Được chứ. Năm ngoái bạn có học khóa này không?"]
      ] },
      tip: "Câu hỏi bắt đầu bằng trợ động từ nào thì trả lời ngắn bằng **chính trợ động từ đó**: **Do** you…? → Yes, I **do**. **Can** you…? → No, I **can’t**. Và luôn **hỏi lại** “Do you?”, “And you?” để giữ cuộc trò chuyện." },

    { nav: "🔎 Từ để hỏi", title: "Từ để hỏi: What, Where, When, Who, Why, How, Which, Whose", sub: "Hỏi thông tin: từ để hỏi lên đầu câu",
      intro: [
        "Câu hỏi thông tin (không trả lời bằng yes, no) bắt đầu bằng **từ để hỏi**. Tiếng Việt để từ hỏi ở giữa hoặc cuối câu (“Bạn sống ở **đâu**?”), còn tiếng Anh **luôn đưa từ để hỏi lên đầu**: “**Where** do you live?”",
        "Sau từ để hỏi, phần còn lại giống hệt câu hỏi Yes / No: **trợ động từ + chủ ngữ + động từ**."
      ],
      table: { head: ["Từ để hỏi", "Hỏi về", "Ví dụ"], say: [0, 2],
        rows: [
          ["What", "cái gì, việc gì", "What do you do?"],
          ["Where", "ở đâu", "Where do you work?"],
          ["When", "khi nào", "When is your birthday?"],
          ["Who", "ai", "Who do you live with?"],
          ["Why", "tại sao (trả lời bằng Because…)", "Why are you learning English?"],
          ["How", "như thế nào, bằng cách nào", "How do you go to work?"],
          ["Which", "cái nào (trong số đã biết)", "Which bus goes to the airport?"],
          ["Whose", "của ai", "Whose phone is this?"],
          ["What time", "mấy giờ", "What time do you get up?"],
          ["What kind of", "loại nào, kiểu gì", "What kind of music do you like?"]
        ] },
      formulas: [
        { f: "Từ để hỏi + trợ động từ + chủ ngữ + động từ nguyên mẫu + …?",
          mean: "**câu hỏi thông tin**: từ để hỏi đứng đầu, sau đó đảo trợ động từ lên trước chủ ngữ.",
          parts: [
            ["What / Where / When / Who + do / does / did", "với động từ thường: Where **do** you live? When **did** she arrive?"],
            ["What / Where / How + am / is / are / was", "với động từ be: Where **is** the toilet? How **was** your trip?"],
            ["Why + trợ động từ…?", "hỏi lý do, trả lời bằng **Because…**: Why do you like Da Lat? Because it is cool."],
            ["How + trợ động từ…?", "hỏi cách thức hoặc tình trạng: How do you go to school? How are you?"]
          ],
          use: "khi làm quen (What do you do? Where are you from?), hỏi đường, hỏi kế hoạch. Sau khi người kia trả lời, hãy hỏi tiếp một câu nữa để giữ cuộc trò chuyện.",
          note: "Người Việt hay quên trợ động từ: “Where you live?”, “What you do?”. Phải có đủ: “Where **do** you live?”, “What **do** you do?”",
          ex: [["What do you do? — I am an accountant.", "Bạn làm nghề gì? Tôi là kế toán."], ["Where did you go last weekend?", "Cuối tuần trước bạn đi đâu?"], ["Why are you learning English?", "Tại sao bạn học tiếng Anh?"], ["How was your trip to Sa Pa?", "Chuyến đi Sa Pa của bạn thế nào?"]] },
        { f: "What time / What kind of / Which / Whose + danh từ + …?",
          mean: "**từ để hỏi đi kèm danh từ**: hỏi cụ thể hơn một chút.",
          parts: [
            ["What time…?", "**mấy giờ**: What time does the shop open? Trả lời: At nine o’clock."],
            ["What kind of + danh từ?", "**loại gì, kiểu gì**: What kind of food do you like? Trả lời: I like Japanese food."],
            ["Which + danh từ?", "**cái nào** trong số ít lựa chọn đã biết: Which colour do you want, red or blue?"],
            ["What + danh từ?", "**cái gì** khi lựa chọn không giới hạn: What colour is your car?"],
            ["Whose + danh từ?", "**của ai**: Whose bag is this?"]
          ],
          use: "khi hỏi giờ giấc, sở thích, chọn lựa khi mua sắm hoặc gọi món.",
          note: "Which và What đều dịch là “nào, gì”. Dùng **Which** khi các lựa chọn đã ở trước mặt (cái này hay cái kia); dùng **What** khi hỏi chung chung.",
          ex: [["What time do you usually have dinner?", "Bạn thường ăn tối lúc mấy giờ?"], ["What kind of films do you like?", "Bạn thích thể loại phim nào?"], ["Which one is cheaper, this one or that one?", "Cái nào rẻ hơn, cái này hay cái kia?"], ["What colour is your motorbike?", "Xe máy của bạn màu gì?"]] }
      ],
      mistakes: [
        ["You live where?", "Where do you live?", "Từ để hỏi **đứng đầu câu**, sau đó là trợ động từ **do**."],
        ["What you are doing?", "What are you doing?", "Đảo **are** lên trước chủ ngữ you."],
        ["Why you don’t come? — Because I busy.", "Why didn’t you come? — Because I was busy.", "Sau Why cần trợ động từ (**didn’t**); câu trả lời Because cũng phải đủ chủ ngữ và động từ (**I was** busy)."]
      ],
      talk: { title: "TÌNH HUỐNG: LÀM QUEN VỚI ĐỒNG NGHIỆP MỚI", turns: [
        ["A", "Hi, I am Mai. What is your name?", "Chào anh, em là Mai. Anh tên là gì ạ?"],
        ["B", "I am David. Nice to meet you. Where are you from, Mai?", "Anh là David. Rất vui được gặp em. Em quê ở đâu, Mai?"],
        ["A", "I am from Hai Phong. Why did you come to Vietnam?", "Em ở Hải Phòng. Sao anh lại đến Việt Nam?"],
        ["B", "For work. I love the food here. What kind of food do you like?", "Vì công việc. Anh rất thích đồ ăn ở đây. Em thích món gì?"],
        ["A", "Seafood! What time do you finish work? We can go to a seafood restaurant.", "Hải sản ạ! Anh tan làm lúc mấy giờ? Mình có thể đi nhà hàng hải sản."]
      ] },
      tip: "Công thức chung: **Từ để hỏi + câu hỏi Yes / No**. “Do you live in Hanoi?” thêm Where thành “**Where** do you live?”" },

    { nav: "📐 How + tính từ", title: "How + tính từ / trạng từ: How old, How long, How far…", sub: "Hỏi tuổi, thời gian, khoảng cách, số lượng, tần suất",
      intro: [
        "Tiếng Việt có nhiều từ hỏi riêng: “bao nhiêu tuổi”, “bao lâu”, “bao xa”, “bao nhiêu tiền”, “bao lâu một lần”. Tiếng Anh gom lại thành một mẫu: **How + tính từ hoặc trạng từ**.",
        "Hãy học cả câu hỏi lẫn cách trả lời mẫu, vì đây là những câu bạn sẽ dùng mỗi ngày khi hỏi đường, mua sắm, làm quen."
      ],
      table: { head: ["Câu hỏi", "Nghĩa", "Trả lời mẫu"], say: [0, 2],
        rows: [
          ["How old are you?", "bao nhiêu tuổi", "I am twenty-five."],
          ["How long does it take?", "mất bao lâu", "About thirty minutes."],
          ["How far is it?", "bao xa", "About two kilometres."],
          ["How often do you swim?", "bao lâu một lần", "Twice a week."],
          ["How much is it?", "bao nhiêu tiền", "Fifty thousand dong."],
          ["How many people are there?", "bao nhiêu (đếm được)", "There are five."],
          ["How well do you know him?", "biết rõ đến mức nào", "Very well. He is my neighbour."]
        ] },
      formulas: [
        { f: "How old / long / far / often / well + trợ động từ + chủ ngữ + …?",
          mean: "**bao nhiêu, bao lâu, bao xa, mức độ nào**: How kết hợp với tính từ hoặc trạng từ để hỏi về số đo, mức độ.",
          parts: [
            ["How old", "hỏi **tuổi** người hoặc vật: How old is your son?"],
            ["How long", "hỏi **thời gian kéo dài**: How long does the bus take? How long have you lived here?"],
            ["How far", "hỏi **khoảng cách**: How far is the airport from here?"],
            ["How often", "hỏi **tần suất**, trả lời bằng every day, once a week, twice a month, sometimes."],
            ["How well", "hỏi **mức độ giỏi, rõ**: How well do you speak Chinese?"]
          ],
          use: "khi hỏi đường, đặt vé, hỏi thói quen của bạn mới quen. Đây là những câu giúp bạn **hỏi lại** và kéo dài cuộc trò chuyện.",
          note: "Đừng dịch “bao lâu một lần” thành “How long…?”. **How long** hỏi thời gian kéo dài; **How often** hỏi mấy lần. “How often do you go home?” → “Once a month.”",
          ex: [["How old is your daughter? — She is six.", "Con gái bạn mấy tuổi? Cháu sáu tuổi."], ["How long does it take to get to Ha Long?", "Đi đến Hạ Long mất bao lâu?"], ["How far is the hospital from here?", "Bệnh viện cách đây bao xa?"], ["How often do you visit your grandparents?", "Bạn có hay về thăm ông bà không? (bao lâu một lần)"]] },
        { f: "How much + danh từ không đếm được   /   How many + danh từ số nhiều",
          mean: "**bao nhiêu**: How much cho thứ không đếm được (và giá tiền), How many cho thứ đếm được.",
          parts: [
            ["How much…?", "danh từ không đếm được: How much **water**, How much **time**, How much **money**."],
            ["How much is / are…?", "hỏi **giá tiền**: How much is this shirt? How much are these shoes?"],
            ["How many + danh từ số nhiều?", "đếm được: How many **people**, How many **children**, How many **days**."]
          ],
          use: "khi mua sắm, gọi món, hỏi về gia đình (“How many people are there in your family?”).",
          note: "Sau How many danh từ phải ở **số nhiều**: “How many brother” là sai, phải là “How many **brothers**”.",
          ex: [["How much is this bánh mì?", "Bánh mì này bao nhiêu tiền?"], ["How many people are there in your family?", "Nhà bạn có mấy người?"], ["How much time do we have?", "Chúng ta có bao nhiêu thời gian?"], ["How many languages can you speak?", "Bạn nói được mấy thứ tiếng?"]] }
      ],
      mistakes: [
        ["How many money do you have?", "How much money do you have?", "money không đếm được nên dùng **How much**."],
        ["How long do you go to the gym? — Three times a week.", "How often do you go to the gym? — Three times a week.", "Hỏi **mấy lần** dùng **How often**."],
        ["How old your son?", "How old is your son?", "Câu hỏi tuổi cần động từ be: How old **is** your son?"]
      ],
      talk: { title: "TÌNH HUỐNG: HỎI ĐƯỜNG ĐẾN BẢO TÀNG", turns: [
        ["A", "Excuse me, how far is the museum from here?", "Xin lỗi, bảo tàng cách đây bao xa ạ?"],
        ["B", "About three kilometres.", "Khoảng ba cây số."],
        ["A", "How long does it take on foot?", "Đi bộ thì mất bao lâu ạ?"],
        ["B", "About forty minutes. You can take bus number 9.", "Khoảng bốn mươi phút. Bạn có thể đi xe buýt số 9."],
        ["A", "How often does it come?", "Bao lâu thì có một chuyến ạ?"],
        ["B", "Every fifteen minutes. The ticket is only seven thousand dong.", "Mười lăm phút một chuyến. Vé chỉ bảy nghìn đồng."]
      ] },
      tip: "Nhớ bằng nghĩa của tính từ: **old** (già, tuổi) → How old; **long** (dài) → How long; **far** (xa) → How far; **often** (thường xuyên) → How often." },

    { nav: "👥 Hỏi chủ ngữ, tân ngữ", title: "Câu hỏi chủ ngữ và câu hỏi tân ngữ", sub: "Who called you? và Who did you call?",
      intro: [
        "Hai câu “**Who called you?**” và “**Who did you call?**” trông giống nhau nhưng nghĩa ngược nhau. Câu thứ nhất hỏi **ai gọi** (người gọi là chủ ngữ, chưa biết). Câu thứ hai hỏi **bạn gọi ai** (người được gọi là tân ngữ, chưa biết).",
        "Quy tắc: khi **Who / What là chủ ngữ** (người làm, việc xảy ra), câu hỏi **không dùng do, does, did** và giữ trật tự như câu kể."
      ],
      formulas: [
        { f: "Who / What + động từ (không có do / does / did) + …?",
          mean: "**câu hỏi chủ ngữ**: hỏi **ai làm** hoặc **cái gì xảy ra**.",
          parts: [
            ["Who + động từ thêm -s (hiện tại)", "Who **lives** here? Who **wants** coffee? (Who đi với động từ số ít)"],
            ["Who + động từ quá khứ (cột thứ hai)", "Who **called** you? Who **made** this cake?"],
            ["What + happened / is happening?", "**Chuyện gì đã xảy ra?** / Đang có chuyện gì?"]
          ],
          use: "khi muốn biết người làm một việc (Who cooked dinner?), khi thấy có chuyện bất thường (What happened? What is wrong?).",
          note: "Người Việt hay hỏi “What **did** happen?” hoặc “Who **did** call you?”. Khi Who / What là chủ ngữ thì bỏ did: “What **happened**?”, “Who **called** you?”",
          ex: [["Who called you last night? — My mother.", "Tối qua ai gọi cho bạn thế? Mẹ tôi."], ["What happened? You look sad.", "Có chuyện gì vậy? Trông bạn buồn thế."], ["Who lives in that big house?", "Ai sống trong ngôi nhà to kia?"], ["Who wants more tea?", "Ai muốn thêm trà nào?"]] },
        { f: "Who / What + do / does / did + chủ ngữ + động từ nguyên mẫu?",
          mean: "**câu hỏi tân ngữ**: hỏi **người làm việc đó tác động đến ai, cái gì**.",
          parts: [
            ["Who did you…?", "bạn đã … ai: Who **did** you **call**? Who **did** you **meet**?"],
            ["What do / did you…?", "bạn … cái gì: What **did** you **buy**? What **do** you **want**?"],
            ["so sánh", "Who **saw** Lan? (ai nhìn thấy Lan) ↔ Who **did** Lan **see**? (Lan nhìn thấy ai)"]
          ],
          use: "khi hỏi bạn đã gặp ai, mua gì, ăn gì, xem gì: những câu rất hay dùng khi hỏi về cuối tuần, kỳ nghỉ.",
          note: "Câu hỏi tân ngữ **cần** do, does, did, giống như câu hỏi thường. Hãy tự hỏi: người hoặc vật mình chưa biết là **người làm** hay **người nhận**?",
          ex: [["Who did you call? — I called my boss.", "Bạn đã gọi cho ai? Tôi gọi cho sếp."], ["What did you eat for lunch?", "Trưa nay bạn ăn gì?"], ["Who did you meet at the party?", "Ở bữa tiệc bạn gặp ai?"], ["What do you want for your birthday?", "Bạn muốn quà gì vào sinh nhật?"]] }
      ],
      mistakes: [
        ["What did happen yesterday?", "What happened yesterday?", "What là chủ ngữ (chuyện xảy ra) nên **không dùng did**."],
        ["Who did call you?", "Who called you?", "Hỏi **ai gọi** (Who là chủ ngữ) thì không dùng did, động từ ở quá khứ: **called**."],
        ["Who you met yesterday?", "Who did you meet yesterday?", "Hỏi **bạn gặp ai** (Who là tân ngữ) thì cần **did** và động từ nguyên mẫu **meet**."]
      ],
      talk: { title: "TÌNH HUỐNG: CHUYỆN Ở VĂN PHÒNG", turns: [
        ["A", "What happened? Everyone looks so happy.", "Có chuyện gì vậy? Ai trông cũng vui thế."],
        ["B", "Our team won the prize! The director called us this morning.", "Đội mình giành giải! Sáng nay giám đốc gọi cho bọn mình."],
        ["A", "Wow! Who told you first?", "Ồ! Ai báo cho bạn đầu tiên?"],
        ["B", "Linh did. Then I called my husband.", "Linh. Sau đó mình gọi cho chồng."],
        ["A", "And who brought this cake?", "Còn ai mang bánh này đến vậy?"],
        ["B", "The director! What do you want to drink? We have juice and tea.", "Giám đốc đấy! Bạn muốn uống gì? Có nước ép và trà."]
      ] },
      tip: "Thay Who bằng một cái tên rồi đọc câu trả lời: “**Who called** you?” → “**Nam** called me.” (Nam đứng đầu, không cần did). “Who **did you call**?” → “I called **Nam**.” (Nam ở cuối, cần did)." },

    { nav: "🤝 Hỏi đuôi và lịch sự", title: "Câu hỏi đuôi và câu hỏi lịch sự gián tiếp", sub: "…, isn’t it? và Could you tell me where…?",
      intro: [
        "**Câu hỏi đuôi** là đoạn ngắn thêm vào cuối câu, giống “…, **nhỉ?**”, “…, **đúng không?**” trong tiếng Việt. Người bản xứ dùng nó để **bắt chuyện, mời người kia đồng ý**, rất hữu ích khi nói chuyện với người lạ.",
        "**Câu hỏi gián tiếp** dùng khi hỏi người lạ cho lịch sự: “**Could you tell me** where the station **is**?” Chú ý: phần câu hỏi phía sau **trở lại trật tự câu kể**, không đảo nữa."
      ],
      formulas: [
        { f: "câu khẳng định, + trợ động từ phủ định + đại từ?   /   câu phủ định, + trợ động từ khẳng định + đại từ?",
          mean: "**…, nhỉ? …, đúng không?**: câu trước khẳng định thì đuôi phủ định, và ngược lại.",
          parts: [
            ["be → isn’t it? / aren’t you?", "It is hot today, **isn’t it?** You are a teacher, **aren’t you?**"],
            ["động từ thường → don’t / doesn’t / didn’t", "You like phở, **don’t you?** She lives here, **doesn’t she?** You went to Hue, **didn’t you?**"],
            ["câu phủ định → đuôi khẳng định", "It is not far, **is it?** You don’t eat meat, **do you?**"],
            ["can / will", "You can swim, **can’t you?** He will come, **won’t he?**"]
          ],
          use: "khi bắt chuyện về thời tiết, đồ ăn (“Nice weather, isn’t it?”), khi muốn kiểm tra điều mình nghĩ là đúng. Người nghe thường đáp: “Yes, it is!” / “Yes, I do.”",
          note: "Tiếng Việt chỉ có một đuôi “nhỉ, đúng không”, nhưng tiếng Anh phải **chọn trợ động từ** theo câu trước. Đuôi dùng **đại từ**: “Lan is nice, isn’t **she**?” (không nói “isn’t Lan?”).",
          ex: [["It is really hot today, isn’t it?", "Hôm nay nóng thật, nhỉ?"], ["You are from Hue, aren’t you?", "Bạn là người Huế, đúng không?"], ["You like spicy food, don’t you?", "Bạn thích đồ cay, phải không?"], ["The station is not far, is it?", "Ga tàu không xa lắm, đúng không?"]] },
        { f: "Could you tell me / Do you know + từ để hỏi + chủ ngữ + động từ?",
          mean: "**Bạn có thể cho tôi biết… / Bạn có biết…**: hỏi lịch sự, nhẹ nhàng hơn câu hỏi trực tiếp.",
          parts: [
            ["Could you tell me…?", "lịch sự, hay dùng với người lạ, nhân viên: Could you tell me where the toilet is?"],
            ["Do you know…?", "thân mật hơn một chút: Do you know what time the bank opens?"],
            ["… + if / whether + chủ ngữ + động từ", "với câu hỏi Yes / No: Do you know **if** the shop is open?"],
            ["trật tự câu kể", "Where **is the station**? → Could you tell me where **the station is**? Bỏ do / does / did: What time **does it open**? → Do you know what time **it opens**?"]
          ],
          use: "khi hỏi đường, hỏi thông tin ở khách sạn, sân bay, cửa hàng, hỏi người lớn tuổi hoặc người không quen. Bắt đầu bằng **Excuse me** để lịch sự hơn.",
          note: "Lỗi hay gặp: vẫn đảo như câu hỏi thường: “Could you tell me where **is the station**?” Phần sau từ để hỏi phải là **chủ ngữ + động từ**: “where **the station is**”.",
          ex: [["Excuse me, could you tell me where the bus station is?", "Xin lỗi, bạn có thể cho tôi biết bến xe buýt ở đâu không?"], ["Do you know what time the museum opens?", "Bạn có biết mấy giờ bảo tàng mở cửa không?"], ["Could you tell me how much this ticket costs?", "Bạn có thể cho tôi biết vé này bao nhiêu tiền không?"], ["Do you know if there is a pharmacy near here?", "Bạn có biết gần đây có hiệu thuốc nào không?"]] }
      ],
      mistakes: [
        ["It is cold today, is it?", "It is cold today, isn’t it?", "Câu trước khẳng định thì đuôi **phủ định**: isn’t it?"],
        ["You live in Da Nang, isn’t it?", "You live in Da Nang, don’t you?", "live là động từ thường, chủ ngữ you, nên đuôi là **don’t you?**"],
        ["Could you tell me where is the post office?", "Could you tell me where the post office is?", "Trong câu hỏi gián tiếp, giữ trật tự **chủ ngữ + động từ**: the post office **is**."]
      ],
      talk: { title: "TÌNH HUỐNG: HỎI ĐƯỜNG Ở PHỐ CỔ", turns: [
        ["A", "Excuse me, could you tell me where Hoan Kiem Lake is?", "Xin lỗi, chị có thể cho tôi biết hồ Hoàn Kiếm ở đâu không?"],
        ["B", "Sure. Go straight and turn left. It is only five minutes on foot.", "Được chứ. Đi thẳng rồi rẽ trái. Đi bộ chỉ năm phút."],
        ["A", "Thank you. Do you know if there is a good café near the lake?", "Cảm ơn chị. Chị có biết gần hồ có quán cà phê nào ngon không?"],
        ["B", "Yes, try egg coffee. You have tried it, haven’t you?", "Có, thử cà phê trứng đi. Anh uống thử rồi, phải không?"],
        ["A", "No, I haven’t! It is a lovely day for a walk, isn’t it?", "Chưa! Hôm nay đẹp trời để đi dạo nhỉ?"],
        ["B", "Yes, it is. Enjoy your walk!", "Đúng vậy. Chúc anh đi dạo vui vẻ!"]
      ] },
      tip: "Đuôi là **gương soi ngược**: câu trước có, đuôi không (is → isn’t); câu trước không, đuôi có. Câu hỏi gián tiếp thì **“thẳng lại”**: Could you tell me where **it is**, không phải where is it." }
  ],
  speak: [
    { q: "Where are you from? And where do you live now?", vi: "Bạn quê ở đâu? Bây giờ bạn sống ở đâu?", hint: "Trả lời đầy đủ rồi **hỏi lại**: I am from… I live in… **And you? Where do you live?**",
      answers: [["I am from Nam Dinh, but I live in Hanoi now. And you? Where do you live?", "Tôi quê Nam Định, nhưng giờ tôi sống ở Hà Nội. Còn bạn? Bạn sống ở đâu?"], ["I was born in Can Tho. Now I live in District 3, Saigon.", "Tôi sinh ra ở Cần Thơ. Giờ tôi sống ở Quận 3, Sài Gòn."]] },
    { q: "Do you like your job? What do you do?", vi: "Bạn có thích công việc của mình không? Bạn làm nghề gì?", hint: "Dùng câu trả lời ngắn **Yes, I do / No, I don’t**, rồi nói nghề: I am a… / I work at…",
      answers: [["Yes, I do. I am a nurse, and I work at a hospital in Saigon.", "Có. Tôi là y tá, làm ở một bệnh viện ở Sài Gòn."], ["Not really. I work in an office, and it is a bit boring. What about you?", "Không hẳn. Tôi làm văn phòng, hơi chán. Còn bạn thì sao?"]] },
    { q: "How long does it take you to get to work or school?", vi: "Bạn đi làm hoặc đi học mất bao lâu?", hint: "Trả lời **It takes me about + thời gian**, có thể thêm **How far** và phương tiện.",
      answers: [["It takes me about twenty minutes by motorbike.", "Tôi đi xe máy mất khoảng hai mươi phút."], ["About an hour. My office is quite far, about fifteen kilometres.", "Khoảng một tiếng. Công ty tôi khá xa, khoảng mười lăm cây số."]] },
    { q: "How often do you go out with your friends?", vi: "Bạn có hay đi chơi với bạn bè không?", hint: "Trả lời tần suất: **once a week, twice a month, every weekend, sometimes, hardly ever**.",
      answers: [["I go out with my friends every Saturday evening.", "Tối thứ Bảy nào tôi cũng đi chơi với bạn."], ["About twice a month. We usually go for coffee or hot pot.", "Khoảng hai lần một tháng. Chúng tôi hay đi cà phê hoặc ăn lẩu."]] },
    { q: "What did you do last weekend? Who did you go with?", vi: "Cuối tuần trước bạn làm gì? Bạn đi với ai?", hint: "Dùng động từ quá khứ, trả lời **câu hỏi tân ngữ** “Who did you go with?” bằng **I went with…**",
      answers: [["I went to the cinema. I went with my sister.", "Tôi đi xem phim. Tôi đi với chị gái."], ["I stayed at home and cooked. My friends came to my house.", "Tôi ở nhà nấu ăn. Bạn tôi đến nhà chơi."]] },
    { q: "Who cooks in your family?", vi: "Trong nhà bạn ai nấu ăn?", hint: "Đây là **câu hỏi chủ ngữ**. Trả lời: **My mother cooks.** / **My mother does.**",
      answers: [["My mother cooks every day. My father cooks on Sundays.", "Mẹ tôi nấu mỗi ngày. Chủ nhật thì bố tôi nấu."], ["I do! I live by myself, so I cook for myself.", "Tôi đấy! Tôi sống một mình nên tự nấu cho mình."]] },
    { q: "Imagine you are lost in a new city. How do you ask for the train station?", vi: "Hãy tưởng tượng bạn bị lạc ở một thành phố mới. Bạn hỏi đường đến ga tàu thế nào?", hint: "Dùng câu hỏi lịch sự: **Excuse me, could you tell me where … is?** / **Do you know how far …?**",
      answers: [["Excuse me, could you tell me where the train station is?", "Xin lỗi, bạn có thể cho tôi biết ga tàu ở đâu không?"], ["Excuse me, do you know how far the station is? Can I walk there?", "Xin lỗi, bạn có biết ga tàu cách đây bao xa không? Tôi đi bộ được không?"]] },
    { q: "The weather is lovely today, isn’t it?", vi: "Hôm nay trời đẹp nhỉ?", hint: "Đáp lại câu hỏi đuôi bằng **Yes, it is / No, it isn’t**, rồi nói thêm một câu và hỏi lại bằng một câu hỏi đuôi.",
      answers: [["Yes, it is! It is perfect for a walk. You like walking, don’t you?", "Đúng vậy! Rất hợp để đi dạo. Bạn thích đi bộ, đúng không?"], ["Yes, it is, but it is a bit hot for me.", "Đúng thế, nhưng hơi nóng với tôi."]] }
  ],
  exercises: [
    { title: "Phần 1: Câu hỏi Yes / No và câu trả lời ngắn", items: [
      { q: "___ you like green tea? — Yes, I do.", a: ["do"], hint: "trợ động từ" },
      { q: "___ your sister a teacher? — No, she isn’t.", a: ["is"], hint: "động từ be" },
      { q: "___ they go to Da Lat last week? — Yes, they did.", a: ["did"], hint: "quá khứ" },
      { q: "Does your brother live in Hanoi? — Yes, he ___.", a: ["does"], hint: "trả lời ngắn" },
      { q: "Are you tired? — No, I ___.", a: ["am not", "'m not", "’m not"], hint: "trả lời ngắn, phủ định" },
      { q: "___ you swim? — Yes, I can.", a: ["can"], hint: "khả năng" }
    ] },
    { title: "Phần 2: Từ để hỏi, How và câu hỏi đuôi", items: [
      { q: "___ do you live? — In Da Nang.", a: ["where"], hint: "ở đâu" },
      { q: "___ is your birthday? — In May.", a: ["when"], hint: "khi nào" },
      { q: "How ___ is it from here to the station? — About two kilometres.", a: ["far"], hint: "bao xa" },
      { q: "How ___ do you go to the gym? — Three times a week.", a: ["often"], hint: "bao lâu một lần" },
      { q: "How ___ brothers do you have? — Two.", a: ["many"], hint: "bao nhiêu (đếm được)" },
      { q: "___ called you last night? — My boss called me.", a: ["who"], hint: "ai" },
      { q: "It is hot today, ___ it?", a: ["isn't", "isn’t", "is not"], hint: "đuôi phủ định" },
      { q: "You like phở, ___ you?", a: ["don't", "don’t"], hint: "đuôi phủ định" }
    ] },
    { title: "Phần 3: Chọn câu đúng", items: [
      { q: "“Bạn đã gọi cho ai?”", options: ["Who called you?", "Who did you call?", "Who you called?"], a: 1, why: "Hỏi **bạn gọi ai** (Who là tân ngữ) nên cần **did** và động từ nguyên mẫu." },
      { q: "“Có chuyện gì vậy?”", options: ["What did happen?", "What happened?", "What was happen?"], a: 1, why: "What là chủ ngữ nên **không dùng did**: What happened?" },
      { q: "Hỏi đường lịch sự:", options: ["Could you tell me where is the bank?", "Could you tell me where the bank is?", "Could you tell me where does the bank?"], a: 1, why: "Câu hỏi gián tiếp giữ trật tự **chủ ngữ + động từ**: where the bank is." },
      { q: "“Bạn có thích nhạc pop không?”", options: ["Are you like pop music?", "Do you like pop music?", "Does you like pop music?"], a: 1, why: "like là động từ thường, chủ ngữ you nên dùng **Do**." },
      { q: "“Bạn có bao nhiêu tiền?”", options: ["How many money do you have?", "How much money do you have?", "How much money you have?"], a: 1, why: "money không đếm được nên dùng **How much**, và cần trợ động từ **do**." }
    ] }
  ],
  vocab: [["Do / Does / Did … ?", "câu hỏi với động từ thường"], ["Yes, I do. / No, she isn’t.", "câu trả lời ngắn"], ["What / Where / When / Who / Why", "cái gì / ở đâu / khi nào / ai / tại sao"], ["How / Which / Whose", "như thế nào / cái nào / của ai"], ["What time / What kind of", "mấy giờ / loại gì"], ["How old / How long / How far", "bao nhiêu tuổi / bao lâu / bao xa"], ["How often", "bao lâu một lần"], ["How much / How many", "bao nhiêu (không đếm được, giá tiền / đếm được)"], ["Who called you? / Who did you call?", "Ai gọi bạn? / Bạn gọi ai?"], ["What happened?", "Có chuyện gì vậy?"], ["…, isn’t it? / …, don’t you?", "…, nhỉ? / …, đúng không?"], ["Could you tell me where … is?", "Bạn có thể cho tôi biết … ở đâu không?"]],
  tips: [
    "Mỗi khi trả lời một câu hỏi, tập thói quen **hỏi lại**: “And you?”, “What about you?”, “Do you?”. Đây là bí quyết giữ cuộc trò chuyện.",
    "Đọc to bảng trợ động từ ở phần 1 và luyện trả lời ngắn cho đến khi bật ra tự nhiên: Do you…? Yes, I do. Can you…? No, I can’t.",
    "Chuẩn bị sẵn năm câu hỏi làm quen: Where are you from? What do you do? How long have you lived here? What kind of food do you like? How often do you…?",
    "Trước khi hỏi người lạ, tự nhắc mình bắt đầu bằng **Excuse me, could you tell me…** và giữ trật tự **chủ ngữ + động từ** ở cuối câu.",
    "Khi thấy chuyện lạ, luyện phản xạ hỏi “**What happened?**” chứ không phải “What did happen?”."
  ]
};