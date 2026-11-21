/* Cheat sheet: Family (Nói về gia đình). Hiển thị bởi cheatsheet.js. */
window.A1_CHEAT = {
  goal: [
    "Gọi đúng tên các thành viên trong gia đình và phân biệt anh, chị, em bằng **older / younger**.",
    "Nói gia đình có mấy người và gồm những ai bằng **There are…** và **I have…**",
    "Tả tuổi, nghề nghiệp, ngoại hình và tính cách của người thân, nhớ thêm **-s** khi nói về he hoặc she.",
    "Hỏi và trả lời về gia đình người khác: How many…?, What does your father do?, Do you have any…?",
    "Kể những việc cả nhà hay làm cùng nhau bằng trạng từ tần suất và giới từ thời gian, rồi ghép thành bài nói 40 giây."
  ],
  phrases: [
    { h: "Giới thiệu người trong ảnh", rows: [
      ["This is my mother. Her name is Hoa.", "Đây là mẹ tôi. Tên mẹ tôi là Hoa."],
      ["These are my grandparents.", "Đây là ông bà tôi.", "Dùng **These are** vì có nhiều người."],
      ["This is my older sister, Mai.", "Đây là chị gái tôi, Mai.", "Tiếng Anh không có từ riêng cho anh, chị, em; thêm older hoặc younger để nói rõ."],
      ["My father’s name is Nam.", "Tên bố tôi là Nam.", "Dấu ’s nghĩa là “của”: my father’s name = tên của bố tôi."]
    ]},
    { h: "Gia đình có mấy người", rows: [
      ["There are four people in my family.", "Gia đình tôi có bốn người."],
      ["I have one older brother and one younger sister.", "Tôi có một anh trai và một em gái."],
      ["I do not have any brothers or sisters. I am an only child.", "Tôi không có anh chị em. Tôi là con một.", "Khi nói thường rút gọn: I don’t have any… I’m an only child."],
      ["I live with my parents.", "Tôi sống cùng bố mẹ."],
      ["My grandparents live in the countryside.", "Ông bà tôi sống ở quê."]
    ]},
    { h: "Tả người thân", rows: [
      ["My father is fifty years old. He is a driver.", "Bố tôi năm mươi tuổi. Bố tôi là tài xế."],
      ["My sister works in a hospital.", "Chị gái tôi làm việc ở bệnh viện.", "Chủ ngữ là một người (my sister) nên works có **-s**."],
      ["My sister has long black hair.", "Chị tôi có mái tóc đen dài."],
      ["My mother is kind and hard-working.", "Mẹ tôi tốt bụng và chăm chỉ."],
      ["My father is a little quiet, but he is very caring.", "Bố tôi hơi ít nói nhưng rất quan tâm mọi người."]
    ]},
    { h: "Hỏi về gia đình người khác", rows: [
      ["How many people are there in your family?", "Gia đình bạn có mấy người?"],
      ["Do you have any brothers or sisters?", "Bạn có anh chị em không?"],
      ["Who do you live with?", "Bạn sống với ai?"],
      ["What does your father do?", "Bố bạn làm nghề gì?"],
      ["How old is your sister?", "Chị gái bạn bao nhiêu tuổi?"]
    ]},
    { h: "Sinh hoạt cùng gia đình", rows: [
      ["We have dinner together every evening.", "Cả nhà ăn tối cùng nhau mỗi tối."],
      ["My mother cooks and my father washes the dishes.", "Mẹ nấu ăn còn bố rửa bát."],
      ["On Sundays, we visit my grandparents.", "Chủ nhật, cả nhà đi thăm ông bà."],
      ["We usually watch TV after dinner.", "Chúng tôi thường xem ti vi sau bữa tối."],
      ["We go on a trip once a year.", "Mỗi năm cả nhà đi chơi xa một lần."]
    ]}
  ],
  grammar: [
    { h: "Sở hữu cách ’s, số nhiều và This is / These are",
      f: ["tên hoặc người + ’s + danh từ", "danh từ số nhiều + ’ + danh từ", "This is + một người · These are + nhiều người"],
      items: [
        { f: "tên hoặc người + ’s + danh từ",
          mean: "**cái gì / ai đó của một người**. Đây là sở hữu cách: thêm ’s sau tên người để nói “của người đó”.",
          parts: [
            ["tên hoặc người", "người sở hữu, đứng **trước**: Lan, my father, my sister."],
            ["’s", "dấu sở hữu, đọc nối vào cuối từ: Lan’s (đọc như “Lanz”)."],
            ["danh từ", "vật hoặc người thuộc về người đó, đứng **sau**: Lan’s mother, my brother’s car."]
          ],
          use: "nói quan hệ trong gia đình và đồ vật của người thân. Có thể nối nhiều lớp: my mother’s sister (dì / bác của tôi).",
          note: "Trật tự ngược với tiếng Việt: “mẹ của Lan” → **Lan’s mother**, không nói “mother of Lan” hay “mother Lan”. Đừng nhầm ’s sở hữu với ’s rút gọn của is: Lan’s mother (mẹ của Lan) khác Lan’s a nurse (Lan là y tá).",
          ex: [
            ["My father’s name is Hung.", "Tên bố tôi là Hùng."],
            ["Minh’s sister lives in Australia.", "Chị gái của Minh sống ở Úc."],
            ["This is my brother’s wife, Thao.", "Đây là vợ của anh trai tôi, Thảo."],
            ["Is that your grandmother’s house?", "Đó có phải nhà của bà bạn không?"]
          ] },
        { f: "danh từ số nhiều + ’ + danh từ",
          mean: "**của những người đó**. Khi người sở hữu là danh từ số nhiều đã có đuôi -s, chỉ thêm dấu ’ phía sau.",
          parts: [
            ["danh từ số nhiều có -s", "parents, grandparents, sisters, brothers."],
            ["’", "chỉ thêm dấu phẩy trên, **không thêm s nữa**: my parents’ house, không viết “parents’s”."],
            ["số nhiều bất quy tắc", "từ số nhiều không có -s (children, people) thì vẫn thêm ’s: my children’s school."]
          ],
          use: "nói về thứ thuộc về cả nhóm người: nhà của bố mẹ, phòng của các anh, trường của các con.",
          note: "Khi nói, **my sister’s room** (phòng của một chị) và **my sisters’ room** (phòng của các chị) đọc giống hệt nhau; chỉ khác khi viết. Hãy để ý vị trí dấu ’.",
          ex: [
            ["We have dinner at my parents’ house every Sunday.", "Chủ nhật nào chúng tôi cũng ăn tối ở nhà bố mẹ tôi."],
            ["My grandparents’ garden is very big.", "Khu vườn của ông bà tôi rất rộng."],
            ["My brothers’ bedroom is upstairs.", "Phòng ngủ của các anh tôi ở trên tầng."],
            ["My children’s school is near our home.", "Trường của các con tôi ở gần nhà."]
          ] },
        { f: "This is + một người · These are + nhiều người",
          mean: "**đây là…** khi giới thiệu người thân, nhất là khi chỉ vào ảnh gia đình.",
          parts: [
            ["This is", "dùng cho **một người**: This is my aunt."],
            ["These are", "dùng cho **hai người trở lên**: These are my cousins."],
            ["That is / Those are", "dùng khi người đó ở **xa** người nói hoặc ở phía xa trong ảnh."]
          ],
          use: "câu đầu tiên khi giới thiệu ai đó trong ảnh hoặc trước mặt. Sau đó dùng he, she, they để nói thêm.",
          note: "Parents, grandparents, twins luôn là nhiều người nên dùng **These are**. Không nói “This is my parents”.",
          ex: [
            ["This is my uncle. He is a farmer.", "Đây là chú tôi. Chú ấy là nông dân."],
            ["These are my twin sisters, Hoa and Hue.", "Đây là hai em gái sinh đôi của tôi, Hoa và Huệ."],
            ["Who is this in the photo? This is my grandfather.", "Ai đây trong ảnh vậy? Đây là ông tôi."],
            ["Are these your cousins?", "Đây là các anh chị em họ của bạn à?"]
          ] }
      ],
      p: [
        "Tiếng Việt nói “mẹ của Lan”, tiếng Anh đảo lại thành **Lan’s mother**: người sở hữu đứng trước, thêm **’s**. Nếu người sở hữu là danh từ số nhiều đã có -s thì chỉ thêm dấu **’**: my parents’ house.",
        "Hầu hết danh từ thêm -s để thành số nhiều (sister → sisters), nhưng một số từ bất quy tắc phải học thuộc: child → children, man → men, woman → women, person → people.",
        "Khi chỉ vào ảnh để giới thiệu, dùng **This is** cho một người và **These are** cho nhiều người. Parents luôn là hai người nên phải nói These are my parents."
      ],
      ex: [["Lan’s mother is a nurse.", "Mẹ của Lan là y tá."], ["These are my children.", "Đây là các con tôi."]]
    },
    { h: "have / has và There is / There are",
      f: ["I, you, we, they + have", "he, she, it + has", "do not / does not have + any + danh từ số nhiều", "There is + a / one + danh từ · There are + số + danh từ số nhiều"],
      items: [
        { f: "I, you, we, they + have",
          mean: "**có** (anh chị em, con cái, thú cưng…) khi chủ ngữ là I, you, we, they.",
          parts: [
            ["I, you, we, they", "và mọi chủ ngữ số nhiều: my parents, my sister and I."],
            ["have", "**có**, giữ nguyên dạng, không thêm -s."]
          ],
          use: "nói về số anh chị em, con cái, người thân của mình và của nhóm. Sau have là danh từ: two sisters, a son, a dog.",
          note: "Không dùng be với have: “I am have a brother” là sai. Câu hỏi dùng do: **Do you have any brothers or sisters?**",
          ex: [
            ["I have two younger brothers.", "Tôi có hai em trai."],
            ["We have a son and a daughter.", "Chúng tôi có một con trai và một con gái."],
            ["My grandparents have eight grandchildren.", "Ông bà tôi có tám đứa cháu."],
            ["Do you have a big family?", "Gia đình bạn có đông người không?"]
          ] },
        { f: "he, she, it + has",
          mean: "**có**, dạng dùng khi chủ ngữ là **một người hoặc một vật** (he, she, it, my mother, Lan).",
          parts: [
            ["he, she, it", "một người hoặc một vật, kể cả tên riêng và danh từ số ít (my uncle, our family)."],
            ["has", "dạng của have ở ngôi thứ ba số ít trong thì hiện tại đơn."]
          ],
          use: "kể về người thân: anh ấy có bao nhiêu con, chị ấy có mấy anh em, gia đình có những ai.",
          note: "Khi đã có **does** (câu phủ định, câu hỏi) thì quay về **have**: Does she have…? She does not have… Không nói “Does she has”.",
          ex: [
            ["My aunt has three children.", "Dì tôi có ba người con."],
            ["He has a younger sister in Hue.", "Anh ấy có một em gái ở Huế."],
            ["Our family has a small dog.", "Gia đình tôi có một con chó nhỏ."],
            ["Does your brother have any children? Yes, he has a baby girl.", "Anh bạn có con chưa? Có, anh ấy có một bé gái."]
          ] },
        { f: "do not / does not have + any + danh từ số nhiều",
          mean: "**không có… nào**. Câu phủ định để nói mình hoặc ai đó không có anh chị em, con cái.",
          parts: [
            ["do not have", "dùng với I, you, we, they. Khi nói rút gọn: **don’t have**."],
            ["does not have", "dùng với he, she, it. Khi nói rút gọn: **doesn’t have**."],
            ["any", "**nào, chút nào**, dùng trong câu phủ định và câu hỏi, đi với danh từ số nhiều: any sisters, any children."]
          ],
          use: "nói về việc không có người thân nào đó. Muốn nói rõ hơn, có thể dùng **I am an only child** (tôi là con một).",
          note: "Không nói “I have not brother” hay “I not have brother”. Sau any danh từ phải ở số nhiều: **any brothers**, không phải “any brother”.",
          ex: [
            ["I do not have any sisters.", "Tôi không có chị em gái nào."],
            ["My cousin does not have any children yet.", "Anh họ tôi chưa có đứa con nào."],
            ["We do not have any pets.", "Chúng tôi không nuôi con vật nào."],
            ["Do you have any brothers? No, I do not.", "Bạn có anh em trai nào không? Không."]
          ] },
        { f: "There is + a / one + danh từ · There are + số + danh từ số nhiều",
          mean: "**có…** theo nghĩa **tồn tại ở đâu đó**. Dùng để nói trong gia đình, trong nhà có bao nhiêu người.",
          parts: [
            ["There is", "dùng với **một** người hoặc vật: There is one child in my family. Rút gọn: There’s."],
            ["There are", "dùng với **hai trở lên**, danh từ số nhiều: There are four people in my family."],
            ["How many … are there?", "câu hỏi số lượng: How many people are there in your family?"]
          ],
          use: "giới thiệu số thành viên gia đình, thường kết thúc bằng **in my family**, rồi liệt kê từng người.",
          note: "Không dịch từng chữ “My family has four person”. Người bản xứ nói **There are four people in my family**. Lưu ý: person (một người) → people (nhiều người).",
          ex: [
            ["There are six people in my family.", "Gia đình tôi có sáu người."],
            ["There is only one child in her family.", "Gia đình cô ấy chỉ có một người con."],
            ["How many people are there in your family? There are four.", "Gia đình bạn có bao nhiêu người? Có bốn người."],
            ["There are three generations in our house.", "Nhà chúng tôi có ba thế hệ."]
          ] }
      ],
      p: [
        "Dùng **has** khi chủ ngữ là he, she, it (một người); các chủ ngữ còn lại dùng **have**. Trong câu phủ định đã có does not thì động từ quay về **have**: She does not have a sister.",
        "Câu phủ định nói “không có ai” dùng **do not have any** + danh từ số nhiều: I do not have any brothers. Không nói “I have not brother”.",
        "Để nói gia đình có bao nhiêu người, người bản xứ dùng **There are + số + people in my family** thay vì dịch từng chữ “My family has four person”. Câu hỏi tương ứng là How many people are there in your family?"
      ],
      ex: [["She has two brothers.", "Cô ấy có hai anh trai."], ["There are five people in my family.", "Gia đình tôi có năm người."]]
    },
    { h: "be + tính từ và động từ thêm -s ở ngôi thứ ba",
      f: ["chủ ngữ + am / is / are + tính từ", "tính từ + danh từ (long hair)", "he, she + động từ thêm -s hoặc -es"],
      items: [
        { f: "chủ ngữ + am / is / are + tính từ",
          mean: "**ai đó như thế nào**: miêu tả tính cách, ngoại hình, tuổi tác của người thân bằng động từ be và tính từ.",
          parts: [
            ["am / is / are", "chia theo chủ ngữ: I am, my father is, my parents are."],
            ["tính từ", "tính cách (kind, funny, strict, patient) hoặc ngoại hình (tall, short, young, old)."],
            ["very / quite", "có thể thêm trước tính từ để nói mức độ: very kind, quite tall."]
          ],
          use: "dùng khi giới thiệu người thân và muốn nói họ là người như thế nào. Tính từ đứng **sau** be.",
          note: "Không bỏ be (“My mother kind”) và tính từ không thêm -s dù chủ ngữ số nhiều: **My parents are kind**, không nói “kinds”.",
          ex: [
            ["My grandmother is very patient.", "Bà tôi rất kiên nhẫn."],
            ["My younger brothers are funny and noisy.", "Các em trai tôi vui tính và ồn ào."],
            ["My father is not strict.", "Bố tôi không nghiêm khắc."],
            ["Is your sister tall?", "Chị bạn có cao không?"]
          ] },
        { f: "tính từ + danh từ (long hair)",
          mean: "**danh từ có đặc điểm…**. Khi đi cùng danh từ, tính từ đứng **trước** danh từ, ngược với tiếng Việt.",
          parts: [
            ["tính từ", "đặc điểm: long, short, curly, big, small, brown."],
            ["danh từ", "bộ phận hoặc sự vật được miêu tả: hair, eyes, smile, family."],
            ["have / has", "thường dùng have / has trước cụm này để tả ngoại hình: She has long hair."]
          ],
          use: "miêu tả ngoại hình (tóc, mắt) hoặc nói về gia đình (a big family, a small house).",
          note: "Tiếng Việt nói “tóc dài”, tiếng Anh đảo lại thành **long hair**, không nói “hair long”. Hair là danh từ không đếm được nên không có a và không thêm -s: “She has long hair”, không nói “a long hair” hay “long hairs”.",
          ex: [
            ["My mother has short curly hair.", "Mẹ tôi có mái tóc xoăn ngắn."],
            ["My baby niece has big brown eyes.", "Cháu gái nhỏ của tôi có đôi mắt nâu to."],
            ["I come from a big family.", "Tôi xuất thân từ một gia đình đông người."],
            ["My grandfather has a warm smile.", "Ông tôi có nụ cười ấm áp."]
          ] },
        { f: "he, she + động từ thêm -s hoặc -es",
          mean: "**người đó làm gì** (thói quen, công việc) ở thì hiện tại đơn: động từ phải thêm đuôi khi chủ ngữ là một người.",
          parts: [
            ["thêm -s", "cách thông thường: work → works, cook → cooks, live → lives."],
            ["thêm -es", "động từ tận cùng -o, -ch, -sh, -s, -x: go → goes, watch → watches, wash → washes."],
            ["đổi -y thành -ies", "phụ âm + y: study → studies, carry → carries. Còn nguyên âm + y chỉ thêm -s: play → plays."],
            ["have → has", "trường hợp đặc biệt cần nhớ riêng."]
          ],
          use: "kể về công việc và thói quen của bố, mẹ, anh chị em: My father works…, My sister goes…",
          note: "Áp dụng cho cả danh từ chỉ một người như **my mother, my brother, Lan**, không chỉ he, she. Câu phủ định với does thì bỏ đuôi: She does not cook.",
          ex: [
            ["My mother cooks dinner for the whole family.", "Mẹ tôi nấu bữa tối cho cả nhà."],
            ["My brother goes to the gym every evening.", "Anh tôi đi tập thể hình mỗi tối."],
            ["She watches cartoons with her son on Sundays.", "Cô ấy xem phim hoạt hình với con trai vào Chủ nhật."],
            ["My grandfather plays chess with his friends.", "Ông tôi chơi cờ với bạn bè."]
          ] }
      ],
      p: [
        "Tính từ tả tính cách, ngoại hình đứng **sau be** (My parents are kind) hoặc **trước danh từ** (She has long hair). Tính từ không bao giờ thêm -s, kể cả khi nói về nhiều người.",
        "Khi kể về một người thân bằng thì hiện tại đơn, động từ phải thêm **-s**: He works, She cooks. Động từ tận cùng -o, -ch, -sh, -s, -x thêm **-es** (teaches, watches). Phụ âm + y thì đổi thành **-ies** (studies). Have đổi thành **has**."
      ],
      ex: [["My mother teaches English.", "Mẹ tôi dạy tiếng Anh."], ["My sister studies medicine.", "Chị tôi học ngành y."]]
    },
    { h: "So sánh hơn và look like / take after",
      f: ["tính từ ngắn + -er + than", "more + tính từ dài + than", "look like + người (giống ngoại hình)", "take after + người (giống tính cách)"],
      items: [
        { f: "tính từ ngắn + -er + than",
          mean: "**…hơn ai đó**. So sánh hơn với tính từ ngắn (một âm tiết, hoặc hai âm tiết tận cùng bằng -y).",
          parts: [
            ["thêm -er", "old → older, tall → taller, young → younger, short → shorter."],
            ["gấp đôi phụ âm", "tính từ ngắn tận cùng phụ âm + nguyên âm + phụ âm: big → bigger, thin → thinner."],
            ["đổi -y thành -ier", "busy → busier, funny → funnier."],
            ["than", "**hơn**, đứng trước người hoặc vật được so sánh: than me, than my sister."]
          ],
          use: "so sánh tuổi, chiều cao, tính cách giữa các thành viên trong gia đình. Muốn nói hơn bao nhiêu, đặt số trước: three years older than me.",
          note: "Không dùng more với tính từ ngắn: không nói “more tall”. Hai từ bất quy tắc cần nhớ: good → **better**, bad → **worse**.",
          ex: [
            ["My sister is three years older than me.", "Chị tôi lớn hơn tôi ba tuổi."],
            ["My father is taller than my uncle.", "Bố tôi cao hơn chú tôi."],
            ["My little brother is funnier than me.", "Em trai tôi vui tính hơn tôi."],
            ["Is your brother younger than you?", "Anh trai bạn nhỏ tuổi hơn bạn à?"]
          ] },
        { f: "more + tính từ dài + than",
          mean: "**…hơn ai đó** với tính từ dài (hai âm tiết trở lên, không tận cùng bằng -y).",
          parts: [
            ["more", "**hơn**, đứng trước tính từ dài, tính từ giữ nguyên không thêm -er."],
            ["tính từ dài", "outgoing, patient, careful, hard-working, beautiful, serious."],
            ["less", "ngược với more: **kém hơn, ít… hơn**: less patient than."]
          ],
          use: "so sánh tính cách giữa các thành viên trong gia đình, vì nhiều tính từ tính cách là tính từ dài.",
          note: "Không dùng cả more và -er cùng lúc: “more taller” là sai. Ngược lại, không thêm -er vào tính từ dài: không nói “patienter”.",
          ex: [
            ["My mother is more patient than my father.", "Mẹ tôi kiên nhẫn hơn bố tôi."],
            ["My sister is more outgoing than me.", "Chị tôi hướng ngoại hơn tôi."],
            ["My brother is more hard-working than he looks.", "Anh tôi chăm chỉ hơn vẻ bề ngoài."],
            ["My grandfather is less serious than my grandmother.", "Ông tôi ít nghiêm túc hơn bà tôi."]
          ] },
        { f: "look like + người (giống ngoại hình)",
          mean: "**trông giống ai đó** về **ngoại hình**: khuôn mặt, đôi mắt, dáng người.",
          parts: [
            ["look like", "dùng với I, you, we, they."],
            ["looks like", "dùng với he, she, it: She looks like her father."],
            ["người", "danh từ hoặc đại từ tân ngữ: my mother, him, her."]
          ],
          use: "nói con cái giống bố mẹ, anh chị em giống nhau về vẻ bề ngoài. Câu hỏi: **Who do you look like?**",
          note: "**look like + người** (giống ai) khác **look + tính từ** (trông có vẻ): She looks like her mom, nhưng She looks tired. Không nói “I look like my mother eyes”, mà nói **I have my mother’s eyes**.",
          ex: [
            ["My son looks like his father.", "Con trai tôi giống bố nó."],
            ["People say I look like my grandmother.", "Mọi người nói tôi giống bà tôi."],
            ["The twins look exactly like each other.", "Hai đứa sinh đôi giống nhau như đúc."],
            ["Who do you look like, your mom or your dad?", "Bạn giống ai, mẹ hay bố?"]
          ] },
        { f: "take after + người (giống tính cách)",
          mean: "**giống ai đó** về **tính cách, cách cư xử hoặc năng khiếu**, thường là con giống bố mẹ, ông bà.",
          parts: [
            ["take after", "cụm động từ, hai từ luôn đi cùng nhau. Với he, she thì thành **takes after**."],
            ["người", "thường là người lớn tuổi hơn trong gia đình: my mother, my grandfather."]
          ],
          use: "nói về sự giống nhau bên trong (tính cách, sở thích, tài năng), không nhìn thấy bằng mắt.",
          note: "Phân biệt: **look like** = giống bên ngoài, **take after** = giống bên trong. Không dùng take after cho bạn bè hay người không có quan hệ gia đình.",
          ex: [
            ["I take after my father. We are both quiet.", "Tôi giống bố về tính cách. Cả hai đều ít nói."],
            ["My daughter takes after her mother. She loves music.", "Con gái tôi giống mẹ nó. Con bé rất mê âm nhạc."],
            ["He does not take after anyone in the family.", "Anh ấy không giống tính ai trong nhà cả."],
            ["Who do you take after?", "Bạn giống tính ai trong nhà?"]
          ] }
      ],
      p: [
        "Dùng so sánh hơn để nói ai lớn hơn, cao hơn ai trong nhà. Tính từ ngắn thêm **-er** (taller, older, younger); tính từ dài dùng **more** (more outgoing). Muốn nói hơn bao nhiêu tuổi, đặt số năm trước: two years younger than my sister.",
        "**look like** nói về giống nhau ở **ngoại hình**, còn **take after** nói về giống nhau ở **tính cách** (thường là con giống bố mẹ)."
      ],
      ex: [["My brother is taller than me.", "Anh tôi cao hơn tôi."], ["I look like my mother, but I take after my father.", "Tôi giống mẹ về ngoại hình, nhưng tính cách lại giống bố."]]
    },
    { h: "Câu hỏi về gia đình và trả lời ngắn",
      f: ["Is / Are + chủ ngữ + …?", "Do / Does + chủ ngữ + động từ nguyên mẫu?", "Từ để hỏi + do / does + chủ ngữ + động từ nguyên mẫu?", "How many + danh từ số nhiều + do you have?"],
      items: [
        { f: "Is / Are + chủ ngữ + …?",
          mean: "**có phải… không? … có… không?** Câu hỏi có hoặc không với động từ be.",
          parts: [
            ["Is", "đứng đầu câu khi chủ ngữ là một người: Is your mother a teacher? Trả lời: Yes, she is. / No, she is not."],
            ["Are", "đứng đầu câu khi chủ ngữ là you hoặc nhiều người: Are your parents retired? Trả lời: Yes, they are."],
            ["…", "phần phía sau là danh từ (a teacher), tính từ (married, tall) hoặc nơi chốn (at home)."]
          ],
          use: "hỏi nghề nghiệp, tình trạng hôn nhân, tính cách của người thân khi câu không có động từ hành động.",
          note: "Trả lời ngắn bằng be, **không rút gọn** ở cuối: Yes, she is (không nói “Yes, she’s”). Không dùng Do với tính từ: không nói “Do you married?”, mà nói **Are you married?**",
          ex: [
            ["Is your father a doctor? No, he is not. He is an engineer.", "Bố bạn là bác sĩ à? Không, bố mình là kỹ sư."],
            ["Are your grandparents still healthy?", "Ông bà bạn vẫn khỏe chứ?"],
            ["Is your brother married? Yes, he is.", "Anh bạn lập gia đình chưa? Rồi."],
            ["Are you the oldest child?", "Bạn là con cả à?"]
          ] },
        { f: "Do / Does + chủ ngữ + động từ nguyên mẫu?",
          mean: "**… có… không?** Câu hỏi có hoặc không với động từ thường (have, live, work, like).",
          parts: [
            ["Do", "dùng với you, they và chủ ngữ số nhiều: Do your parents live in Hanoi?"],
            ["Does", "dùng với he, she, it và một người: Does your sister work?"],
            ["động từ nguyên mẫu", "động từ chính không thêm -s, vì does đã mang -s."]
          ],
          use: "hỏi người thân có làm gì, có sống ở đâu, có anh chị em hay con cái không. Trả lời: Yes, I do. / No, she does not.",
          note: "Không nói “Does she has” hay “Does he works”. Trả lời ngắn chỉ dùng do / does, không lặp lại động từ chính.",
          ex: [
            ["Do your parents live with you?", "Bố mẹ bạn có sống cùng bạn không?"],
            ["Does your husband cook? Yes, he does.", "Chồng bạn có nấu ăn không? Có."],
            ["Do you have any nieces or nephews?", "Bạn có cháu trai hay cháu gái nào không?"],
            ["Does your grandmother use a smartphone? No, she does not.", "Bà bạn có dùng điện thoại thông minh không? Không."]
          ] },
        { f: "Từ để hỏi + do / does + chủ ngữ + động từ nguyên mẫu?",
          mean: "**câu hỏi lấy thông tin** về người thân: ai, cái gì, ở đâu, khi nào.",
          parts: [
            ["Who", "**ai**: Who do you live with?"],
            ["What", "**cái gì, nghề gì**: What does your father do?"],
            ["Where", "**ở đâu**: Where does your sister live?"],
            ["When / How often", "**khi nào / bao lâu một lần**: How often do you visit your grandparents?"],
            ["do / does", "do với you, they; does với he, she, một người."]
          ],
          use: "hỏi chi tiết về công việc, nơi sống, thói quen của người thân. Từ để hỏi luôn đứng đầu câu.",
          note: "Không bỏ do / does: “Where your sister lives?” là sai. **What does he do?** hỏi nghề nghiệp, không phải hỏi anh ấy đang làm gì.",
          ex: [
            ["What does your mother do? She is a nurse.", "Mẹ bạn làm nghề gì? Mẹ mình là y tá."],
            ["Where do your grandparents live?", "Ông bà bạn sống ở đâu?"],
            ["Who do you look like in your family?", "Trong nhà bạn giống ai?"],
            ["How often do you call your parents?", "Bạn gọi điện cho bố mẹ bao lâu một lần?"]
          ] },
        { f: "How many + danh từ số nhiều + do you have?",
          mean: "**bạn có bao nhiêu…?** Hỏi về **số lượng** người thân hoặc con vật nuôi.",
          parts: [
            ["How many", "**bao nhiêu**, dùng với danh từ đếm được."],
            ["danh từ số nhiều", "luôn ở số nhiều: brothers, sisters, children, cousins."],
            ["do you have", "có thể đổi chủ ngữ: How many children does she have?"]
          ],
          use: "hỏi số anh chị em, con cái, cháu chắt. Trả lời ngắn bằng số (Two.) hoặc câu đầy đủ (I have two sisters.).",
          note: "Danh từ sau How many **không được** ở số ít: không nói “How many brother”. Nếu không có ai thì trả lời: I do not have any.",
          ex: [
            ["How many brothers and sisters do you have? I have one sister.", "Bạn có bao nhiêu anh chị em? Mình có một chị gái."],
            ["How many children does your aunt have?", "Dì bạn có bao nhiêu người con?"],
            ["How many cousins do you have?", "Bạn có bao nhiêu anh chị em họ?"],
            ["How many grandchildren do your parents have? They have five.", "Bố mẹ bạn có bao nhiêu cháu? Họ có năm đứa cháu."]
          ] }
      ],
      p: [
        "Khi hỏi nghề của người thân, dùng **What does + người + do?** Sau does, động từ luôn ở nguyên mẫu: Does she have a sister? (không nói “Does she has”).",
        "**Who** hỏi người (Who do you live with?), **What** hỏi nghề hoặc việc, **How old** hỏi tuổi, **How many** hỏi số lượng.",
        "Trả lời ngắn bằng trợ động từ, không cần nhắc lại cả câu: Yes, I do. No, he does not (thường nói No, he doesn’t). Yes, she is."
      ],
      ex: [["What does your mother do?", "Mẹ bạn làm nghề gì?"], ["Does your sister live with you? Yes, she does.", "Chị bạn có sống cùng bạn không? Có."]]
    },
    { h: "Trạng từ tần suất, giới từ thời gian, with và together",
      f: ["chủ ngữ + always / usually / sometimes + động từ thường", "on + thứ hoặc ngày · at + giờ · in + buổi, tháng, năm", "with + me / him / her / us / them", "once / twice / three times + a week / a month / a year"],
      items: [
        { f: "chủ ngữ + always / usually / sometimes + động từ thường",
          mean: "**mức độ thường xuyên** của một thói quen trong gia đình.",
          parts: [
            ["always", "**luôn luôn**, lần nào cũng vậy."],
            ["usually", "**thường thường**, phần lớn các lần."],
            ["sometimes", "**thỉnh thoảng**, đôi khi."],
            ["động từ thường", "eat, visit, cook, go, watch… Với he, she nhớ thêm -s."]
          ],
          use: "kể thói quen sinh hoạt chung của gia đình. Trạng từ đứng **giữa chủ ngữ và động từ thường**, nhưng **sau** be (We are always busy).",
          note: "Không đặt ở cuối câu: nói **We usually eat together**, không nói “We eat together usually”. Không dùng cả be và động từ thường: không nói “My mom is always cooks”.",
          ex: [
            ["My family always has dinner at seven.", "Gia đình tôi luôn ăn tối lúc bảy giờ."],
            ["My father usually reads the newspaper in the morning.", "Bố tôi thường đọc báo vào buổi sáng."],
            ["We sometimes go camping with our cousins.", "Thỉnh thoảng chúng tôi đi cắm trại với các anh chị em họ."],
            ["Does your family usually eat out on weekends?", "Cuối tuần gia đình bạn có hay ăn ngoài không?"]
          ] },
        { f: "on + thứ hoặc ngày · at + giờ · in + buổi, tháng, năm",
          mean: "ba giới từ chỉ **thời gian**, mỗi từ đi với một loại mốc thời gian khác nhau.",
          parts: [
            ["on", "**vào** thứ, ngày cụ thể: on Sunday, on Mondays, on my birthday, on May 5th."],
            ["at", "**lúc** một giờ cụ thể hoặc thời điểm ngắn: at seven o’clock, at noon, at night, at the weekend."],
            ["in", "**vào** khoảng thời gian dài hơn: in the morning, in the evening, in July, in 2020, in summer."]
          ],
          use: "nói khi nào gia đình làm gì. Cụm thời gian thường đứng cuối câu hoặc đầu câu.",
          note: "Mẹo nhớ theo độ rộng: **at** (một điểm giờ) < **on** (một ngày) < **in** (buổi, tháng, năm, mùa). Ngoại lệ hay gặp: **at night** nhưng **in the evening**.",
          ex: [
            ["We visit my grandparents on Saturdays.", "Chúng tôi thăm ông bà vào các ngày thứ Bảy."],
            ["My mother gets up at five thirty.", "Mẹ tôi dậy lúc năm giờ rưỡi."],
            ["My family goes to the beach in summer.", "Gia đình tôi đi biển vào mùa hè."],
            ["We have a big party on my grandfather’s birthday.", "Chúng tôi tổ chức một bữa tiệc lớn vào sinh nhật ông tôi."]
          ] },
        { f: "with + me / him / her / us / them",
          mean: "**cùng với ai**. Đại từ sau with phải ở **dạng tân ngữ**.",
          parts: [
            ["me", "**tôi** (thay cho I): with me."],
            ["him", "**anh ấy, ông ấy** (thay cho he): with him."],
            ["her", "**cô ấy, bà ấy** (thay cho she): with her."],
            ["us", "**chúng tôi** (thay cho we): with us."],
            ["them", "**họ** (thay cho they): with them."]
          ],
          use: "nói sống cùng ai, đi chơi cùng ai, ăn cùng ai. Cụm with + người thường đứng sau động từ: live with, go with, play with.",
          note: "Không nói “with I”, “with he”, “with they”. Khác với **together** (cùng nhau), with luôn cần một người theo sau: We eat together = I eat with them.",
          ex: [
            ["My grandmother lives with my uncle.", "Bà tôi sống với chú tôi."],
            ["My little sister always plays with me.", "Em gái tôi lúc nào cũng chơi với tôi."],
            ["My cousins sometimes travel with us.", "Thỉnh thoảng các anh chị em họ đi du lịch cùng chúng tôi."],
            ["Do you go shopping with her?", "Bạn có đi mua sắm cùng cô ấy không?"]
          ] },
        { f: "once / twice / three times + a week / a month / a year",
          mean: "**bao nhiêu lần trong một khoảng thời gian**: một lần, hai lần, ba lần mỗi tuần, mỗi tháng, mỗi năm.",
          parts: [
            ["once", "**một lần**."],
            ["twice", "**hai lần**."],
            ["three times", "**ba lần**; từ ba trở lên dùng số + times: four times, ten times."],
            ["a week / a month / a year", "**mỗi tuần / mỗi tháng / mỗi năm**. Chữ a ở đây nghĩa là “mỗi”."]
          ],
          use: "nói chính xác tần suất gặp gỡ, thăm hỏi, gọi điện cho người thân. Cụm này thường đứng **cuối câu**. Câu hỏi: **How often…?**",
          note: "Không nói “one time a week” hay “two times a month” (nghe không tự nhiên); dùng **once**, **twice**. Không nói “once in a week”.",
          ex: [
            ["I call my parents twice a week.", "Tôi gọi điện cho bố mẹ hai lần một tuần."],
            ["We go back to our hometown once a year.", "Chúng tôi về quê mỗi năm một lần."],
            ["My aunt visits us three times a month.", "Dì tôi đến thăm chúng tôi ba lần một tháng."],
            ["How often do you see your cousins? Only once a year.", "Bạn gặp anh chị em họ bao lâu một lần? Chỉ một lần mỗi năm."]
          ] }
      ],
      p: [
        "Trạng từ tần suất đứng **trước động từ thường** nhưng **sau be**: We always eat together, nhưng My mother is never late.",
        "Giới từ thời gian: **on** Sundays, **at** seven o’clock, **in** the evening. Lưu ý nói in the evening, không nói “at the evening”.",
        "**with** nghĩa là “cùng với ai”, và đại từ phía sau phải ở dạng tân ngữ (with him, with us). **together** nghĩa là “cùng nhau”, đứng cuối câu."
      ],
      ex: [["We visit my grandparents twice a month.", "Chúng tôi thăm ông bà mỗi tháng hai lần."], ["She lives with us.", "Bà ấy sống cùng chúng tôi."]]
    }
  ],
  mistakes: [
    ["My family has four person.", "There are four people in my family.", "Dùng **There are + số + people**; person số nhiều là **people**."],
    ["I have two sister.", "I have two sisters.", "Từ hai trở lên thì danh từ phải ở **số nhiều**."],
    ["I have not brother.", "I do not have any brothers.", "Phủ định của have dùng **do not have any** + danh từ số nhiều."],
    ["She have two brothers.", "She has two brothers.", "Chủ ngữ she đi với **has**."],
    ["This is my parent.", "These are my parents.", "Bố mẹ là hai người nên dùng **These are** và **parents**."],
    ["Your father does what? / Does he works?", "What does your father do? / Does he work?", "Từ để hỏi đứng đầu câu; sau **does** động từ ở **nguyên mẫu**."],
    ["I play football with he. / We eat at the evening.", "I play football with him. / We eat in the evening.", "Sau **with** dùng tân ngữ (him); buổi trong ngày đi với **in**."]
  ],
  vocab: [
    ["grandfather", "ông"], ["grandmother", "bà"], ["parents", "bố mẹ"], ["father / mother", "bố / mẹ"],
    ["uncle", "chú, bác, cậu"], ["aunt", "cô, dì, mợ, thím"], ["brother", "anh trai hoặc em trai"], ["sister", "chị gái hoặc em gái"],
    ["cousin", "anh chị em họ"], ["husband / wife", "chồng / vợ"], ["son / daughter", "con trai / con gái"], ["children", "các con (số nhiều của child)"],
    ["niece / nephew", "cháu gái / cháu trai"], ["only child", "con một"], ["older / younger", "lớn tuổi hơn / nhỏ tuổi hơn"], ["single / married", "độc thân / đã kết hôn"],
    ["retired", "đã nghỉ hưu"], ["kind", "tốt bụng"], ["hard-working", "chăm chỉ"], ["caring", "biết quan tâm"],
    ["cheerful", "vui vẻ"], ["helpful", "hay giúp đỡ"], ["do housework", "làm việc nhà"], ["countryside", "nông thôn, quê"]
  ],
  tips: [
    "Dùng ảnh gia đình thật khi luyện nói: chỉ vào từng người và nói **This is my…** hoặc **These are my…**",
    "Mỗi khi nói về một người thân, tự kiểm tra hai thứ: **has** thay cho have và động từ có **-s** (She works, He teaches).",
    "Học thuộc trình tự bài nói 40 giây: **Số người → Thành viên → Mô tả → Sinh hoạt → Kết** (I love my family very much).",
    "Khi người khác kể về gia đình, phản hồi bằng **Oh, really?** hoặc **What a lovely family!** rồi hỏi thêm một câu ngắn như Do you see them often?",
    "Viết bốn câu về sinh hoạt gia đình, mỗi câu có một trạng từ tần suất (always, usually, sometimes) và một giới từ thời gian (on, at, in)."
  ]
};
