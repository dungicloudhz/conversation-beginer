/* Ngữ pháp nền tảng: Mạo từ (a, an, the và khi nào không dùng mạo từ). Hiển thị bởi grammar-lesson.js. */
window.A1_GRAMMAR = {
  icon: "🔤",
  short: "Mạo từ a / an / the",
  hero: ["Mạo từ trong giao tiếp", "a · an · the · không mạo từ"],
  desc: "Tiếng Việt không có mạo từ, nên người Việt hay nói “I am teacher” hoặc “I like the coffee”. Tiếng Anh thì gần như mỗi danh từ đều phải chọn: **a / an** (một cái bất kỳ, lần đầu nhắc), **the** (cái mà cả hai người đều biết), hoặc **không dùng gì** (nói chung chung). Nắm được ba lựa chọn này, câu nói của bạn sẽ tự nhiên hơn ngay lập tức.",
  chips: ["a và an", "the", "Không mạo từ", "Cụm cố định", "Luyện nói"],
  goal: [
    "Nói đúng nghề nghiệp của mình và người thân: “I am **a** nurse”, “She is **an** engineer”.",
    "Chọn **a hay an** theo **âm đầu** khi nói: **an** hour, **a** university.",
    "Kể chuyện tự nhiên: lần đầu nhắc dùng **a**, lần sau dùng **the**.",
    "Nói về sở thích chung chung không có mạo từ: “I like **coffee**”, “I play **football**”.",
    "Dùng đúng các cụm cố định khi kể một ngày: go **home**, go to **the** cinema, in **the** morning, at night."
  ],
  sections: [
    { nav: "🅰️ a và an", title: "a / an: một cái bất kỳ, lần đầu nhắc tới", sub: "Danh từ đếm được số ít luôn cần một mạo từ phía trước",
      intro: [
        "**a / an** nghĩa là “một” nhưng nhẹ hơn **one**: một cái bất kỳ, một cái mà người nghe chưa biết. Chỉ dùng với **danh từ đếm được số ít** (a book, an apple). Không dùng với danh từ số nhiều (books) hay danh từ không đếm được (water, rice).",
        "Chọn **a** hay **an** theo **âm đầu khi đọc**, không theo chữ cái viết. Bảng dưới đây cho thấy những trường hợp người Việt hay nhầm."
      ],
      table: { head: ["Mạo từ", "Âm đầu khi đọc", "Ví dụ", "Ghi chú"], say: [2],
        rows: [
          ["a", "phụ âm", "a book, a car, a dog", "trường hợp thường gặp nhất"],
          ["an", "nguyên âm (a, e, i, o, u)", "an apple, an egg, an orange", "đọc nối: an‿apple"],
          ["an", "chữ h không đọc", "an hour, an honest man", "hour đọc là /aʊə/, bắt đầu bằng nguyên âm"],
          ["a", "chữ u đọc là /juː/ (giống “diu”)", "a university, a uniform", "âm đầu là /j/, một phụ âm"],
          ["a", "chữ o đọc là /w/", "a one-way ticket", "one đọc là /wʌn/"]
        ] },
      formulas: [
        { f: "a / an + danh từ đếm được số ít",
          mean: "**một (cái, con, người) bất kỳ**: người nghe chưa biết cái nào, hoặc đây là lần đầu bạn nhắc tới nó.",
          parts: [["a", "đứng trước danh từ có **âm đầu là phụ âm**: a bag, a cat, a house."], ["an", "đứng trước danh từ có **âm đầu là nguyên âm**: an apple, an idea, an hour."], ["one", "chỉ dùng khi muốn **nhấn mạnh con số**, đối lập với hai, ba: “I have **one** brother, not two.”"]],
          use: "giới thiệu một vật hay một người lần đầu trong câu chuyện, kể mình có gì: “I have **a** dog”, “There is **a** café near my house.” Phía sau là danh từ số ít, có thể có tính từ chen giữa: a small house, an old car.",
          note: "Tiếng Việt nói “Tôi có xe máy” mà không cần “một”. Tiếng Anh **bắt buộc** phải có a: “I have **a** motorbike.” Bỏ a là lỗi rất dễ nghe ra.",
          ex: [["I have a dog and a cat.", "Tôi có một con chó và một con mèo."], ["There is a small café near my office.", "Có một quán cà phê nhỏ gần văn phòng tôi."], ["Do you have an umbrella?", "Bạn có ô không?"], ["I do not have a car. I go to work by bus.", "Tôi không có ô tô. Tôi đi làm bằng xe buýt."]] },
        { f: "chọn a hay an theo âm đầu: an hour, a university",
          mean: "**a hay an phụ thuộc vào âm đọc đầu tiên** của từ ngay phía sau, không phụ thuộc vào chữ cái viết.",
          parts: [["an + h không đọc", "an hour, an honest person: chữ h câm, âm đầu là nguyên âm."], ["a + u đọc là /juː/", "a university, a uniform, a useful app: âm đầu là /j/."], ["a / an theo tính từ đứng trước", "nếu có tính từ chen giữa thì xét âm đầu của tính từ: an apple nhưng **a** big apple; a car nhưng **an** old car."]],
          use: "mỗi khi nói “một cái gì đó”. Hãy đọc thầm từ phía sau: nghe như bắt đầu bằng nguyên âm thì dùng an.",
          note: "Người Việt hay nhìn chữ cái viết nên nói “a hour” và “an university”. Hãy tin vào **tai**, không tin vào **mắt**.",
          ex: [["I waited for an hour.", "Tôi đã đợi một tiếng."], ["My brother studies at a university in Saigon.", "Anh trai tôi học ở một trường đại học tại Sài Gòn."], ["She drives an old car.", "Cô ấy lái một chiếc ô tô cũ."], ["Is it an easy job?", "Đó có phải là một công việc dễ không?"]] },
        { f: "chủ ngữ + am / is / are + a / an + nghề nghiệp",
          mean: "**ai đó làm nghề gì**: tiếng Anh luôn đặt a hoặc an trước tên nghề khi nói về một người.",
          parts: [["I am a / an …", "một người: I am **a** teacher. I am **an** accountant."], ["He / She is a / an …", "một người khác: She is **an** engineer. He is **a** driver."], ["We / They are … (số nhiều, không có a)", "nhiều người thì nghề thêm -s và bỏ a: They are doctor**s**."]],
          use: "khi giới thiệu bản thân, giới thiệu gia đình, trả lời câu hỏi “What do you do?”.",
          note: "“Tôi là giáo viên” rất dễ dịch thành “I am teacher”. Câu này sai. Luôn nói “I am **a** teacher.”",
          ex: [["I am an office worker.", "Tôi là nhân viên văn phòng."], ["My father is a taxi driver.", "Bố tôi là tài xế taxi."], ["Is your sister a nurse?", "Chị gái bạn là y tá phải không?"], ["My parents are farmers.", "Bố mẹ tôi là nông dân."]] }
      ],
      mistakes: [
        ["I am teacher.", "I am a teacher.", "Nói nghề của một người luôn cần **a / an** trước tên nghề."],
        ["I waited for a hour.", "I waited for an hour.", "Chữ h trong **hour** không đọc, âm đầu là nguyên âm nên dùng **an**."],
        ["She studies at an university.", "She studies at a university.", "**university** đọc là /juː/, âm đầu là phụ âm /j/ nên dùng **a**."]
      ],
      talk: { title: "TÌNH HUỐNG: HỎI VỀ CÔNG VIỆC VÀ GIA ĐÌNH", turns: [
        ["A", "What do you do, Minh?", "Minh làm nghề gì thế?"],
        ["B", "I am an engineer. I work for a small company in Hanoi.", "Mình là kỹ sư. Mình làm cho một công ty nhỏ ở Hà Nội."],
        ["A", "Nice! And what about your wife?", "Hay quá! Còn vợ bạn thì sao?"],
        ["B", "She is a teacher at a primary school. What about you?", "Cô ấy là giáo viên ở một trường tiểu học. Còn bạn?"],
        ["A", "I am a student. I study at a university in Da Nang.", "Mình là sinh viên. Mình học ở một trường đại học tại Đà Nẵng."]
      ] },
      tip: "Nghe âm đầu: **a**-con-chó (a dog), **an**-quả-táo (an apple). Hai từ “bẫy” cần thuộc lòng: **an hour** và **a university**." },

    { nav: "👉 the", title: "the: cái mà cả hai người đều biết", sub: "Người nghe biết bạn đang nói đến cái nào",
      intro: [
        "**the** nghĩa gần với “cái đó, cái ấy”. Bạn dùng the khi **người nghe biết chính xác** bạn nói về cái nào: vì bạn vừa nhắc tới, vì trên đời (hoặc ở nơi đó) chỉ có một cái, hoặc vì cả hai đang nhìn thấy nó.",
        "the dùng được với mọi loại danh từ: số ít (the door), số nhiều (the children), không đếm được (the water in this bottle). the đọc là /ðə/ trước phụ âm và /ði/ trước nguyên âm: the‿apple."
      ],
      formulas: [
        { f: "a + danh từ (lần đầu) … the + danh từ (lần sau)",
          mean: "**lần đầu nhắc dùng a / an, từ lần thứ hai dùng the**, vì lúc đó người nghe đã biết bạn nói về cái nào.",
          parts: [["a / an (lần đầu)", "người nghe chưa biết: “I saw **a** cat in the street.”"], ["the (lần sau)", "người nghe đã biết, chính là con mèo vừa nói: “**The** cat was very thin.”"], ["it / he / she", "từ lần thứ ba có thể thay bằng đại từ: “I gave **it** some food.”"]],
          use: "khi kể chuyện, kể lại một việc đã xảy ra, mô tả đồ mình vừa mua.",
          note: "Tiếng Việt chuyển từ “một con mèo” sang “con mèo đó”. Tiếng Anh cũng vậy: **a cat** rồi **the cat**. Đừng dùng a mãi, cũng đừng dùng the ngay từ đầu.",
          ex: [["I bought a shirt and a hat. The shirt is blue.", "Tôi mua một cái áo và một cái mũ. Cái áo màu xanh."], ["There is a restaurant near my house. The food there is very good.", "Có một nhà hàng gần nhà tôi. Đồ ăn ở đó rất ngon."], ["We stayed at a hotel in Hue. The hotel was not expensive.", "Chúng tôi ở một khách sạn tại Huế. Khách sạn đó không đắt."], ["Did you like the film?", "Bạn có thích bộ phim đó không?"]] },
        { f: "the + vật chỉ có một / cả hai người đều biết",
          mean: "**cái duy nhất**: trên thế giới chỉ có một, hoặc ở nơi bạn đang đứng chỉ có một, nên không cần giải thích là cái nào.",
          parts: [["the sun, the moon, the sky, the sea", "chỉ có một trên đời."], ["the station, the post office, the city centre", "chỉ có một trong thành phố, hoặc cái mà ai cũng đi tới."], ["the door, the kitchen, the light, the teacher", "chỉ có một trong phòng, trong nhà, trong lớp, cả hai người đều nhìn thấy."]],
          use: "nhờ ai làm gì trong nhà (Close **the** door), hỏi đường (Where is **the** station?), nói về thời tiết (**The** sun is hot).",
          note: "Người Việt hay nói “Can you open a window?” khi trong phòng chỉ có một cửa sổ. Nếu cả hai đều biết là cái nào thì dùng **the**.",
          ex: [["The sun is very hot today.", "Hôm nay nắng rất gắt."], ["Can you close the door, please?", "Bạn đóng cửa giúp tôi được không?"], ["Excuse me, where is the station?", "Xin lỗi, nhà ga ở đâu ạ?"], ["Mum is in the kitchen.", "Mẹ đang ở trong bếp."]] },
        { f: "the + so sánh nhất / thứ tự / nhạc cụ",
          mean: "**những trường hợp luôn có the**: “nhất”, “thứ nhất, thứ hai”, và tên nhạc cụ sau play.",
          parts: [["the + tính từ so sánh nhất", "the biggest, the best, the most beautiful: chỉ có một cái “nhất” nên luôn có the."], ["the + first / second / last / next", "the first time, the last day: thứ tự cũng chỉ có một."], ["play the + nhạc cụ", "play **the** piano, play **the** guitar. So sánh với thể thao: play football (không có the)."]],
          use: "khi khen, so sánh trong lớp, trong thành phố; khi kể lần đầu làm việc gì; khi nói về sở thích âm nhạc.",
          note: "Người Việt hay quên the trong so sánh nhất: “He is best student.” Câu đúng: “He is **the** best student in my class.”",
          ex: [["Hanoi is the capital of Vietnam.", "Hà Nội là thủ đô của Việt Nam."], ["This is the best phở in town.", "Đây là quán phở ngon nhất phố."], ["Is this your first time in Da Lat?", "Đây là lần đầu bạn đến Đà Lạt à?"], ["My daughter plays the piano.", "Con gái tôi chơi đàn piano."]] }
      ],
      mistakes: [
        ["Sun is very hot today.", "The sun is very hot today.", "Mặt trời chỉ có một nên luôn dùng **the sun**."],
        ["She is best student in my class.", "She is the best student in my class.", "So sánh nhất luôn có **the**: the best, the biggest."],
        ["I saw a dog. A dog was very big.", "I saw a dog. The dog was very big.", "Lần thứ hai nhắc tới con chó, người nghe đã biết là con nào nên dùng **the**."]
      ],
      talk: { title: "TÌNH HUỐNG: KỂ VỀ MỘT QUÁN ĂN MỚI", turns: [
        ["A", "I found a new restaurant last week. It is near the station.", "Tuần trước mình tìm được một nhà hàng mới. Nó ở gần nhà ga."],
        ["B", "Really? Is the food good?", "Thật à? Đồ ăn có ngon không?"],
        ["A", "Yes! They have the best bún chả in the city.", "Có! Họ có món bún chả ngon nhất thành phố."],
        ["B", "Is it expensive?", "Có đắt không?"],
        ["A", "No. And the owner is very friendly. Let’s go there on Saturday!", "Không. Mà ông chủ rất thân thiện. Thứ Bảy mình đi đi!"]
      ] },
      tip: "Tự hỏi: “Người nghe có biết **cái nào** không?” Biết thì dùng **the**, chưa biết thì dùng **a / an**." },

    { nav: "🚫 Không mạo từ", title: "Khi nào không dùng mạo từ", sub: "Nói chung chung, bữa ăn, thể thao, ngôn ngữ, tên riêng",
      intro: [
        "Rất nhiều câu tiếng Anh **không có mạo từ nào**. Đây là chỗ người Việt hay thêm the thừa, vì nghĩ rằng the là “cái”. Khi bạn nói về một thứ **nói chung** (cà phê nói chung, chó nói chung), không dùng a, cũng không dùng the.",
        "Ngoài ra, có những nhóm từ gần như không bao giờ có mạo từ: bữa ăn, môn thể thao, ngôn ngữ, môn học, tên người, tên thành phố và hầu hết tên nước."
      ],
      formulas: [
        { f: "danh từ số nhiều / danh từ không đếm được (nói chung)",
          mean: "**một loại nói chung**, không phải một cái cụ thể nào: “I like coffee” là thích cà phê nói chung.",
          parts: [["danh từ số nhiều, không có the", "nói chung về cả một loại: **Dogs** are friendly. I like **cats**."], ["danh từ không đếm được, không có the", "nói chung: **Coffee** is cheap in Vietnam. I drink **water** every morning."], ["the + danh từ", "chỉ khi nói về **cái cụ thể**: **The coffee in this café** is very good."]],
          use: "khi nói sở thích (I like…, I love…, I hate…), nói sự thật chung về đồ ăn, con vật, con người.",
          note: "“Tôi thích cà phê” mà nói “I like **the** coffee” thì người nghe sẽ hỏi lại: “Cà phê nào?” Nói chung thì bỏ the: “I like coffee.”",
          ex: [["I like coffee, but I do not like tea.", "Tôi thích cà phê nhưng không thích trà."], ["Cats are cute.", "Mèo thật dễ thương."], ["Is rice cheap in Vietnam?", "Gạo ở Việt Nam có rẻ không?"], ["The coffee in this café is too sweet.", "Cà phê ở quán này ngọt quá."]] },
        { f: "bữa ăn / thể thao / ngôn ngữ / môn học (không mạo từ)",
          mean: "**bốn nhóm từ không cần mạo từ** khi nói về thói quen hằng ngày.",
          parts: [["bữa ăn: breakfast, lunch, dinner", "have **breakfast**, after **lunch**, before **dinner**."], ["thể thao: football, badminton, tennis", "play **football**, play **badminton**. Khác với nhạc cụ: play **the** guitar."], ["ngôn ngữ và môn học: English, Vietnamese, maths, history", "speak **English**, study **maths**. Chỉ dùng the khi đi kèm language: **the** English language."]],
          use: "kể về một ngày của mình, sở thích, việc học.",
          note: "Người Việt hay nói “have **a** breakfast” hoặc “play **the** football”. Hãy nhớ: bữa ăn và thể thao đi thẳng, không có gì ở giữa.",
          ex: [["I have breakfast at seven.", "Tôi ăn sáng lúc bảy giờ."], ["We play badminton after work.", "Chúng tôi chơi cầu lông sau giờ làm."], ["Do you speak Japanese?", "Bạn có nói tiếng Nhật không?"], ["My son does not like maths.", "Con trai tôi không thích môn toán."]] },
        { f: "at home / go to school / go to work / go to bed; tên người, tên thành phố, tên nước",
          mean: "**những nơi quen thuộc và tên riêng** thường không có mạo từ.",
          parts: [["go home, at home", "không có to và không có the trước home: I go **home** at six."], ["go to school, go to work, go to bed, be in hospital", "nói về **mục đích chính** của nơi đó (đi học, đi làm, đi ngủ)."], ["tên người, thành phố, hầu hết tên nước", "Lan, Hanoi, Vietnam, Japan. Ngoại lệ có the: **the** USA, **the** UK, **the** Philippines."]],
          use: "kể lịch trình hằng ngày, nói mình sống ở đâu, đến từ đâu.",
          note: "Người Việt hay nói “go to home” vì tiếng Việt là “đi về nhà”. Với home thì bỏ to: **go home**.",
          ex: [["I go to work at eight and go home at six.", "Tôi đi làm lúc tám giờ và về nhà lúc sáu giờ."], ["My children go to bed at nine.", "Các con tôi đi ngủ lúc chín giờ."], ["Are you at home now?", "Bây giờ bạn có ở nhà không?"], ["I live in Vietnam, but my brother lives in the USA.", "Tôi sống ở Việt Nam, còn anh trai tôi sống ở Mỹ."]] }
      ],
      mistakes: [
        ["I like the coffee.", "I like coffee.", "Nói về cà phê **nói chung** thì không dùng the."],
        ["I play the football every Sunday.", "I play football every Sunday.", "Môn thể thao không có mạo từ: play **football**."],
        ["I go to home at six.", "I go home at six.", "Với **home** thì bỏ to và không dùng the: go home."],
        ["I am from the Vietnam.", "I am from Vietnam.", "Hầu hết tên nước không có the. Chỉ một số tên như the USA, the UK có the."]
      ],
      talk: { title: "TÌNH HUỐNG: NÓI VỀ THÓI QUEN HẰNG NGÀY", turns: [
        ["A", "What do you usually have for breakfast?", "Bạn thường ăn sáng món gì?"],
        ["B", "I usually have bread and coffee. I love coffee!", "Mình thường ăn bánh mì và uống cà phê. Mình mê cà phê lắm!"],
        ["A", "Me too. What do you do after work?", "Mình cũng vậy. Sau giờ làm bạn làm gì?"],
        ["B", "I play badminton with my friends, then I go home and have dinner.", "Mình chơi cầu lông với bạn, rồi về nhà ăn tối."],
        ["A", "And what time do you go to bed?", "Thế mấy giờ bạn đi ngủ?"],
        ["B", "Around eleven. I study English before bed.", "Khoảng mười một giờ. Mình học tiếng Anh trước khi ngủ."]
      ] },
      tip: "Nói **chung chung** thì bỏ mạo từ: I like coffee, I love dogs. Nói **cái cụ thể** thì thêm the: the coffee here, the dog next door." },

    { nav: "📌 Cụm cố định", title: "Các cụm cố định với mạo từ", sub: "Học thuộc cả cụm, khỏi phải suy nghĩ",
      intro: ["Một số cụm từ dùng (hoặc không dùng) the theo thói quen của người bản xứ, không theo quy tắc nào rõ ràng. Cách tốt nhất là **học thuộc cả cụm** như học một từ. Đây là những cụm bạn sẽ dùng mỗi ngày khi kể về lịch trình, ngày nghỉ và đi lại."],
      formulas: [
        { f: "in the morning / in the afternoon / in the evening / at night",
          mean: "**các buổi trong ngày**: ba buổi đầu dùng **in the**, riêng ban đêm dùng **at** và không có the.",
          parts: [["in the morning / afternoon / evening", "vào buổi sáng, chiều, tối: luôn có **the**."], ["at night", "vào ban đêm: **không có the**."], ["at noon / at midnight", "vào buổi trưa, lúc nửa đêm: cũng không có the."]],
          use: "kể thói quen và lịch trình: “I study in the evening”, “I cannot sleep at night.” Thường đứng cuối câu hoặc đầu câu.",
          note: "Người Việt hay nói “in morning” (thiếu the) hoặc “at the night” (thừa the). Hãy đọc to cả cụm nhiều lần cho quen miệng.",
          ex: [["I drink coffee in the morning.", "Tôi uống cà phê vào buổi sáng."], ["We go for a walk in the evening.", "Chúng tôi đi dạo vào buổi tối."], ["Do you work at night?", "Bạn có làm việc vào ban đêm không?"], ["I do not drink coffee in the afternoon.", "Tôi không uống cà phê vào buổi chiều."]] },
        { f: "go to the cinema / the market / the beach / the doctor",
          mean: "**đi đến những nơi quen thuộc trong đời sống**: dùng **the** dù bạn không nói rõ rạp nào, chợ nào.",
          parts: [["go to the cinema / the theatre", "đi xem phim, đi xem kịch."], ["go to the market / the supermarket / the bank / the doctor", "đi chợ, đi siêu thị, ra ngân hàng, đi khám bác sĩ."], ["go to the beach / the mountains / the countryside", "đi biển, đi núi, về quê."]],
          use: "kể kế hoạch cuối tuần, việc vặt hằng ngày. So sánh với nhóm không có the ở phần trước: go **home**, go to **school**, go to **work**, go to **bed**.",
          note: "Người Việt hay bỏ the vì tiếng Việt chỉ nói “đi chợ”, “đi biển”. Câu đúng: “go to **the** market”, “go to **the** beach”.",
          ex: [["Let’s go to the cinema tonight.", "Tối nay đi xem phim đi."], ["My mother goes to the market every morning.", "Mẹ tôi đi chợ mỗi sáng."], ["Did you go to the beach last summer?", "Hè năm ngoái bạn có đi biển không?"], ["I need to go to the doctor.", "Tôi cần đi khám bác sĩ."]] },
        { f: "by bus / by car / on foot; watch TV; listen to the radio",
          mean: "**cách đi lại và giải trí**: những cụm này người bản xứ nói theo thói quen, cần thuộc lòng.",
          parts: [["by + phương tiện (không mạo từ)", "by bus, by motorbike, by train, by plane. Đi bộ là **on foot**."], ["watch TV (không có the)", "xem ti vi: I watch **TV** after dinner."], ["listen to the radio (có the)", "nghe đài: I listen to **the** radio in the car."]],
          use: "trả lời “How do you get to work?” và kể việc làm lúc rảnh.",
          note: "Khi đã có a, the, my trước phương tiện thì đổi by thành in hoặc on: by car nhưng **in my car**; by bus nhưng **on the bus**.",
          ex: [["I go to work by motorbike.", "Tôi đi làm bằng xe máy."], ["She goes to school on foot.", "Cô ấy đi bộ đến trường."], ["Do you watch TV in the evening?", "Bạn có xem ti vi vào buổi tối không?"], ["My father listens to the radio every morning.", "Bố tôi nghe đài mỗi sáng."]] }
      ],
      mistakes: [
        ["I go to work in morning.", "I go to work in the morning.", "Các buổi trong ngày dùng **in the**: in the morning."],
        ["I cannot sleep at the night.", "I cannot sleep at night.", "Ban đêm dùng **at night**, không có the."],
        ["I go to work by the bus.", "I go to work by bus.", "Sau **by** không dùng mạo từ: by bus, by car."]
      ],
      talk: { title: "TÌNH HUỐNG: RỦ BẠN ĐI CHƠI CUỐI TUẦN", turns: [
        ["A", "What are you doing on Sunday?", "Chủ nhật bạn làm gì?"],
        ["B", "In the morning I go to the market with my mum. Why?", "Buổi sáng mình đi chợ với mẹ. Sao thế?"],
        ["A", "Do you want to go to the cinema in the afternoon?", "Chiều bạn có muốn đi xem phim không?"],
        ["B", "Sure! How do we get there? By bus?", "Được chứ! Mình đi bằng gì? Xe buýt à?"],
        ["A", "No, I will pick you up by motorbike. We can have dinner after the film.", "Không, mình sẽ đón bạn bằng xe máy. Xem phim xong mình đi ăn tối."]
      ] },
      tip: "Ba buổi **in the** (morning, afternoon, evening), một buổi **at** trơn (at night). Đi chợ, đi biển, đi xem phim có **the**; về nhà, đi học, đi ngủ thì không." }
  ],
  speak: [
    { q: "What do you do? What about your parents?", vi: "Bạn làm nghề gì? Còn bố mẹ bạn thì sao?", hint: "Dùng **I am a / an + nghề**, nhiều người thì bỏ a: My parents are + nghề thêm -s.",
      answers: [["I am an accountant. My father is a driver and my mother is a nurse.", "Tôi là kế toán. Bố tôi là tài xế còn mẹ tôi là y tá."], ["I am a student. My parents are farmers.", "Tôi là sinh viên. Bố mẹ tôi là nông dân."]] },
    { q: "Can you describe your home?", vi: "Bạn mô tả nhà mình được không?", hint: "Lần đầu nhắc dùng **a / an**, lần sau dùng **the**: I live in a small house. The kitchen is…",
      answers: [["I live in a small flat. It has a bedroom and a kitchen. The kitchen is very small.", "Tôi sống trong một căn hộ nhỏ. Có một phòng ngủ và một bếp. Bếp rất nhỏ."], ["I live in a big house with a garden. The garden is full of flowers.", "Tôi sống trong một ngôi nhà lớn có vườn. Khu vườn đầy hoa."]] },
    { q: "What is there near your house?", vi: "Gần nhà bạn có những gì?", hint: "Dùng **There is a / an …** để giới thiệu, rồi dùng **the** để nói thêm: There is a market. The market opens at…",
      answers: [["There is a market and a park near my house. The park is quiet in the morning.", "Gần nhà tôi có một cái chợ và một công viên. Công viên yên tĩnh vào buổi sáng."], ["There is an old pagoda near my house. The pagoda is very beautiful.", "Gần nhà tôi có một ngôi chùa cổ. Ngôi chùa rất đẹp."]] },
    { q: "What do you like to eat and drink?", vi: "Bạn thích ăn uống gì?", hint: "Nói **chung chung** thì không có mạo từ: I like + danh từ số nhiều / không đếm được.",
      answers: [["I like coffee and noodles, but I do not like milk.", "Tôi thích cà phê và mì, nhưng không thích sữa."], ["I love fruit, especially mangoes.", "Tôi rất thích hoa quả, nhất là xoài."]] },
    { q: "What do you usually do in the evening?", vi: "Bạn thường làm gì vào buổi tối?", hint: "Dùng **have dinner, watch TV, go to bed** (không mạo từ) và **in the evening, at night**.",
      answers: [["I have dinner with my family, watch TV and go to bed at eleven.", "Tôi ăn tối với gia đình, xem ti vi và đi ngủ lúc mười một giờ."], ["I play badminton in the evening and study English at night.", "Tôi chơi cầu lông vào buổi tối và học tiếng Anh vào ban đêm."]] },
    { q: "Tell me about something interesting you saw last week.", vi: "Kể cho tôi một điều thú vị bạn thấy tuần trước.", hint: "Câu chuyện: lần đầu **a / an**, lần sau **the**, lần ba có thể dùng **it / he / she**.",
      answers: [["I saw a man with a monkey in the park. The monkey was dancing! It was very funny.", "Tôi thấy một người đàn ông dắt một con khỉ trong công viên. Con khỉ đang nhảy! Nó rất buồn cười."], ["I found a wallet on the bus. I gave the wallet to the driver.", "Tôi nhặt được một cái ví trên xe buýt. Tôi đưa cái ví cho tài xế."]] },
    { q: "What is the best place to visit in your city?", vi: "Nơi đáng đến nhất ở thành phố bạn là đâu?", hint: "So sánh nhất luôn có **the**: The best place is… / It is the most beautiful…",
      answers: [["The best place is Hoan Kiem Lake. It is the most beautiful place in the morning.", "Nơi đẹp nhất là Hồ Hoàn Kiếm. Đó là nơi đẹp nhất vào buổi sáng."], ["I think the best place is the night market. The food there is great.", "Tôi nghĩ nơi tuyệt nhất là chợ đêm. Đồ ăn ở đó rất ngon."]] },
    { q: "How do you get to work or school?", vi: "Bạn đến chỗ làm hoặc trường bằng cách nào?", hint: "Dùng **by + phương tiện** (không mạo từ) hoặc **on foot**, và **go to work / go to school**.",
      answers: [["I go to work by motorbike. It takes twenty minutes.", "Tôi đi làm bằng xe máy. Mất hai mươi phút."], ["I go to school on foot because it is very near.", "Tôi đi bộ đến trường vì trường rất gần."]] }
  ],
  exercises: [
    { title: "Phần 1: Điền a, an, the hoặc x (x nghĩa là không cần mạo từ)", items: [
      { q: "My sister is ___ nurse.", a: ["a"], hint: "một người, nghề nghiệp" },
      { q: "I waited for ___ hour at the airport.", a: ["an"], hint: "nghe âm đầu, chữ h không đọc" },
      { q: "He is ___ university student.", a: ["a"], hint: "university đọc là /juː/" },
      { q: "I bought a shirt and a hat. ___ shirt is blue.", a: ["the"], hint: "cái áo vừa nhắc" },
      { q: "Look at ___ moon! It is so beautiful tonight.", a: ["the"], hint: "chỉ có một trên đời" },
      { q: "I like ___ tea, but I do not like coffee.", a: ["x", "-"], hint: "nói chung chung" },
      { q: "We usually have ___ dinner at seven.", a: ["x", "-"], hint: "bữa ăn" },
      { q: "Fansipan is ___ highest mountain in Vietnam.", a: ["the"], hint: "so sánh nhất" },
      { q: "I go to ___ bed at eleven o’clock.", a: ["x", "-"], hint: "đi ngủ" },
      { q: "I usually go for a walk in ___ morning.", a: ["the"], hint: "buổi trong ngày" },
      { q: "There is ___ bank near my house. ___ bank opens at eight.", a: ["a the", "a, the"], hint: "gõ hai từ, cách nhau bởi dấu cách" },
      { q: "My cousin lives in ___ Japan.", a: ["x", "-"], hint: "tên nước" }
    ] },
    { title: "Phần 2: Chọn câu đúng", items: [
      { q: "“Tôi là giáo viên.”", options: ["I am teacher.", "I am a teacher.", "I am the teacher."], a: 1, why: "Nói nghề của mình dùng **a / an**: I am a teacher." },
      { q: "“Tôi thích chó.” (chó nói chung)", options: ["I like the dogs.", "I like dogs.", "I like a dogs."], a: 1, why: "Nói chung về một loại thì dùng danh từ số nhiều, **không mạo từ**." },
      { q: "“Cuối tuần tôi chơi bóng đá.”", options: ["I play the football at the weekend.", "I play football at the weekend.", "I play a football at the weekend."], a: 1, why: "Môn thể thao **không có mạo từ**: play football." },
      { q: "Trong phòng chỉ có một cửa ra vào: “Bạn đóng cửa giúp tôi được không?”", options: ["Can you close a door, please?", "Can you close the door, please?", "Can you close door, please?"], a: 1, why: "Cả hai người đều biết là cửa nào nên dùng **the**." },
      { q: "“Sáu giờ tôi về nhà.”", options: ["I go to home at six.", "I go home at six.", "I go to the home at six."], a: 1, why: "Với home thì bỏ to và không có mạo từ: **go home**." },
      { q: "“Tôi làm việc vào ban đêm.”", options: ["I work at the night.", "I work at night.", "I work in night."], a: 1, why: "Cụm cố định **at night**, không có the." },
      { q: "“Cô ấy là kỹ sư.”", options: ["She is a engineer.", "She is an engineer.", "She is engineer."], a: 1, why: "engineer bắt đầu bằng nguyên âm nên dùng **an**." }
    ] }
  ],
  vocab: [["a + phụ âm", "một (a book, a university)"], ["an + nguyên âm", "một (an apple, an hour)"], ["the", "cái đó (cả hai đều biết)"], ["I am a / an + nghề", "tôi là …"], ["the sun / the moon / the sky", "mặt trời, mặt trăng, bầu trời"], ["the best / the biggest", "tốt nhất, lớn nhất"], ["play the piano / the guitar", "chơi đàn piano, đàn ghi-ta"], ["play football / badminton", "chơi bóng đá, cầu lông"], ["have breakfast / lunch / dinner", "ăn sáng, trưa, tối"], ["go home / go to school / go to bed", "về nhà, đi học, đi ngủ"], ["go to the cinema / the market", "đi xem phim, đi chợ"], ["in the morning / at night", "vào buổi sáng, vào ban đêm"], ["by bus / on foot", "bằng xe buýt, đi bộ"]],
  tips: [
    "Mỗi khi nói nghề, gắn a / an vào như một phần của từ: “a-teacher”, “an-engineer”, “a-driver”.",
    "Khi kể chuyện, cố ý đổi **a** thành **the** ở lần nhắc thứ hai: “I bought **a** cake. **The** cake was delicious.”",
    "Trước khi nói the, tự hỏi: “Người nghe có biết **cái nào** không?” Không biết thì dùng **a / an**; nói chung chung thì bỏ hẳn mạo từ.",
    "Học thuộc từng cặp đối lập: go **home** / go to **the** market; play football / play **the** guitar; in **the** morning / at night.",
    "Đọc to tên nghề của người thân mỗi ngày: “My father is **a** driver. My mother is **an** office worker.”"
  ]
};
