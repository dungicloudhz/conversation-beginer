/* Cheat sheet: Occupation (Nói về nghề nghiệp). Hiển thị bởi cheatsheet.js. */
window.A1_CHEAT = {
  goal: [
    "Nói tên các nghề thường gặp và giới thiệu bạn làm nghề gì với đúng a hoặc an.",
    "Hỏi người khác làm nghề gì bằng What do you do? và trả lời bằng work as, work for, work in, work at.",
    "Mô tả nơi làm việc và những việc bạn làm mỗi ngày bằng thì hiện tại đơn.",
    "Nói bạn thấy công việc thế nào, thích hay không thích điều gì và giải thích bằng because.",
    "Nói về ước mơ nghề nghiệp bằng want to be và would like to be."
  ],
  phrases: [
    { h: "Hỏi về nghề nghiệp", rows: [
      ["What do you do?", "Bạn làm nghề gì?", "Đây là cách hỏi phổ biến nhất. Không có nghĩa là “bạn đang làm gì”."],
      ["What is your job?", "Công việc của bạn là gì?", "Thường nói rút gọn: What’s your job? (What’s = What is)."],
      ["Where do you work?", "Bạn làm ở đâu?"],
      ["What does your father do?", "Bố bạn làm nghề gì?"],
      ["Are you a student?", "Bạn là sinh viên à?"]
    ]},
    { h: "Giới thiệu nghề của bạn", rows: [
      ["I am a nurse.", "Tôi là y tá.", "Khi nói thường rút gọn: I’m a nurse (I’m = I am)."],
      ["I work as an accountant.", "Tôi làm kế toán."],
      ["I work for a bank.", "Tôi làm cho một ngân hàng."],
      ["I am a student at Hanoi University.", "Tôi là sinh viên Đại học Hà Nội."],
      ["I am looking for a job right now.", "Hiện tôi đang tìm việc."]
    ]},
    { h: "Mô tả một ngày làm việc", rows: [
      ["I start work at eight a.m.", "Tôi bắt đầu làm lúc 8 giờ sáng."],
      ["I work from Monday to Friday.", "Tôi làm từ thứ Hai đến thứ Sáu."],
      ["I work eight hours a day.", "Tôi làm 8 tiếng mỗi ngày."],
      ["I answer emails and talk to customers.", "Tôi trả lời email và nói chuyện với khách hàng."],
      ["Sometimes I work at the weekend.", "Thỉnh thoảng tôi làm cuối tuần."]
    ]},
    { h: "Nói cảm nhận về công việc", rows: [
      ["My job is interesting but very busy.", "Việc của tôi thú vị nhưng rất bận."],
      ["I like it because I can help people.", "Tôi thích nó vì tôi giúp được mọi người."],
      ["The pay is good, but the hours are long.", "Lương tốt nhưng giờ làm dài."],
      ["My colleagues are very friendly.", "Đồng nghiệp của tôi rất thân thiện."],
      ["I do not like working at night.", "Tôi không thích làm ban đêm.", "Khi nói thường rút gọn: I don’t like (don’t = do not)."]
    ]},
    { h: "Ước mơ nghề nghiệp và đáp lại người khác", rows: [
      ["What do you want to be in the future?", "Sau này bạn muốn làm nghề gì?"],
      ["I want to be a pilot. My dream job is a tour guide.", "Tôi muốn làm phi công. Công việc mơ ước của tôi là hướng dẫn viên du lịch."],
      ["I am studying to become an engineer.", "Tôi đang học để thành kỹ sư."],
      ["That sounds interesting! What about you?", "Nghe thú vị đấy! Còn bạn thì sao?"],
      ["That must be hard. How many hours do you work a day?", "Chắc vất vả lắm. Mỗi ngày bạn làm mấy tiếng?"]
    ]}
  ],
  grammar: [
    { h: "a hoặc an trước tên nghề",
      f: ["chủ ngữ + am / is / are + a + nghề bắt đầu bằng phụ âm", "chủ ngữ + am / is / are + an + nghề bắt đầu bằng nguyên âm", "số nhiều: bỏ a hoặc an, thêm -s cho nghề"],
      items: [
        { f: "chủ ngữ + am / is / are + a + nghề bắt đầu bằng phụ âm",
          mean: "**(ai đó) là (một) …**: giới thiệu nghề của một người khi tên nghề bắt đầu bằng **âm phụ âm**.",
          parts: [
            ["am / is / are", "động từ be chia theo chủ ngữ: I **am**, he / she / my mother **is**, you **are**."],
            ["a", "**một**, đứng trước tên nghề bắt đầu bằng âm phụ âm: a doctor, a nurse, a driver, a teacher, a police officer."],
            ["âm “iu”", "nghề viết bằng chữ u nhưng đọc là “iu” vẫn dùng **a**: a university lecturer (giảng viên đại học)."]
          ],
          use: "trả lời câu hỏi What do you do? hoặc giới thiệu nghề của người thân. Câu phủ định thêm not sau be: I am not a doctor.",
          note: "Tiếng Việt không có “một” trong câu “Tôi là bác sĩ”, nên người Việt hay bỏ a. Nhớ: **I am a doctor**, không nói “I am doctor”.",
          ex: [
            ["My father is a taxi driver.", "Bố tôi là tài xế taxi."],
            ["I am not a teacher. I am a nurse.", "Tôi không phải giáo viên. Tôi là y tá."],
            ["Is your brother a police officer?", "Anh trai bạn là cảnh sát à?"],
            ["She is a university lecturer.", "Cô ấy là giảng viên đại học."]
          ] },
        { f: "chủ ngữ + am / is / are + an + nghề bắt đầu bằng nguyên âm",
          mean: "**(ai đó) là (một) …**: giới thiệu nghề khi tên nghề bắt đầu bằng **âm nguyên âm**.",
          parts: [
            ["an", "**một**, dùng trước âm nguyên âm a, e, i, o, u: an engineer, an accountant, an artist, an office worker."],
            ["tính từ đứng trước", "chọn a hay an theo **từ đứng ngay sau**: an engineer nhưng **a** good engineer; a doctor nhưng **an** excellent doctor."]
          ],
          use: "giống mẫu với a, chỉ khác ở mạo từ. Nghe âm đầu của từ ngay sau để chọn a hay an.",
          note: "Chọn theo **âm**, không theo chữ: **an** hour (chữ h câm), nhưng **a** uniform (âm “iu”).",
          ex: [
            ["My sister is an accountant.", "Chị gái tôi là kế toán."],
            ["He is an electrician.", "Anh ấy là thợ điện."],
            ["Are you an artist?", "Bạn là họa sĩ à?"],
            ["My uncle is an office worker in Hanoi.", "Chú tôi là nhân viên văn phòng ở Hà Nội."]
          ] },
        { f: "số nhiều: bỏ a hoặc an, thêm -s cho nghề",
          mean: "**(những người này) là …**: nói nghề của **nhiều người** cùng lúc.",
          parts: [
            ["bỏ a / an", "a và an chỉ dùng cho một người, nên số nhiều thì bỏ đi."],
            ["thêm -s", "tên nghề thêm **-s**: doctors, teachers, engineers. Tận cùng bằng -man đổi thành **-men**: fireman → firemen, businessman → businessmen."],
            ["are", "chủ ngữ số nhiều (we, they, my parents) luôn đi với **are**."]
          ],
          use: "giới thiệu nghề của bố mẹ, của cả nhóm, hoặc nói chung về một nghề (Doctors work very hard).",
          note: "Lỗi hay gặp: “They are a doctors” hoặc “They are doctor”. Đúng là **They are doctors**.",
          ex: [
            ["My parents are farmers.", "Bố mẹ tôi là nông dân."],
            ["We are not students. We are engineers.", "Chúng tôi không phải sinh viên. Chúng tôi là kỹ sư."],
            ["Are your friends nurses?", "Bạn của bạn là y tá à?"],
            ["Firemen are very brave.", "Lính cứu hỏa rất dũng cảm."]
          ] }
      ],
      p: [
        "Tiếng Việt nói “Tôi là giáo viên”, không có từ “một”. Nhưng tiếng Anh **bắt buộc** có **a** hoặc **an** trước tên nghề ở số ít: I am a teacher. Đây là lỗi người Việt mắc nhiều nhất.",
        "Dùng **an** khi tên nghề bắt đầu bằng **âm** nguyên âm (a, e, i, o, u): an engineer, an accountant. Các nghề còn lại dùng **a**: a doctor, a nurse.",
        "Khi nói nhiều người thì bỏ a hoặc an và thêm -s cho tên nghề: They are nurses. Nhiều tên nghề được tạo từ **động từ + -er hoặc -or**: teach → teacher, drive → driver, act → actor."
      ],
      ex: [["I am a teacher.", "Tôi là giáo viên."], ["She is an engineer.", "Cô ấy là kỹ sư."]]
    },
    { h: "What do you do? và What are you doing?",
      f: ["What do you do? (hỏi nghề nghiệp)", "What does + he / she + do?", "What are you doing? (hỏi việc đang làm lúc này)"],
      items: [
        { f: "What do you do? (hỏi nghề nghiệp)",
          mean: "**Bạn làm nghề gì?**: câu hỏi tự nhiên nhất để hỏi nghề nghiệp của người đang nói chuyện với mình.",
          parts: [
            ["What", "**gì**."],
            ["do (thứ nhất)", "trợ động từ của thì hiện tại đơn, dùng để tạo câu hỏi, không dịch."],
            ["do (thứ hai)", "động từ chính, nghĩa là **làm**. Vì là hiện tại đơn nên nói về việc làm thường xuyên, tức là nghề."]
          ],
          use: "khi gặp người mới, trong buổi làm quen. Trả lời bằng **I am a / an + nghề** hoặc **I work as / in / for…**",
          note: "Có thể hỏi **What is your job?** nhưng hơi thẳng. Đừng trả lời “I do teacher”, hãy nói **I am a teacher**.",
          ex: [
            ["What do you do? — I am a nurse.", "Bạn làm nghề gì? — Tôi là y tá."],
            ["What do you do? — I work in a bank.", "Bạn làm nghề gì? — Tôi làm ở ngân hàng."],
            ["What do you do, Minh? — I am a student.", "Minh làm nghề gì? — Mình là sinh viên."],
            ["What do your parents do? — They are teachers.", "Bố mẹ bạn làm nghề gì? — Họ là giáo viên."]
          ] },
        { f: "What does + he / she + do?",
          mean: "**Anh ấy / cô ấy làm nghề gì?**: hỏi nghề của **một người khác**.",
          parts: [
            ["does", "dùng thay cho do khi chủ ngữ là he, she hoặc một người (your father, your sister, Lan)."],
            ["he / she", "người được hỏi. Có thể thay bằng tên hoặc danh từ: What does **your mother** do?"],
            ["do", "động từ chính ở cuối câu, giữ nguyên dạng, **không** thêm -s vì đã có does."]
          ],
          use: "hỏi về nghề của người thân, bạn bè, người trong ảnh. Câu trả lời dùng **He is / She is a + nghề** hoặc **He works…**",
          note: "Không nói “What does she does?”. Đã có does thì động từ phía sau quay về nguyên mẫu **do**.",
          ex: [
            ["What does your sister do? — She is a hairdresser.", "Chị gái bạn làm nghề gì? — Chị ấy là thợ làm tóc."],
            ["What does he do? — He works as a chef.", "Anh ấy làm nghề gì? — Anh ấy làm đầu bếp."],
            ["What does your mother do?", "Mẹ bạn làm nghề gì?"],
            ["What does Lan do? — She works for a travel company.", "Lan làm nghề gì? — Cô ấy làm cho một công ty du lịch."]
          ] },
        { f: "What are you doing? (hỏi việc đang làm lúc này)",
          mean: "**Bạn đang làm gì (vậy)?**: hỏi việc người kia đang làm **ngay lúc này**, không phải hỏi nghề.",
          parts: [
            ["are", "động từ be chia theo you. Với he, she dùng **is** (What is he doing?)."],
            ["doing", "do thêm -ing: thì hiện tại tiếp diễn, việc đang diễn ra."]
          ],
          use: "khi gọi điện, nhắn tin hoặc nhìn thấy ai đó đang bận. Trả lời bằng **I am + động từ thêm -ing**.",
          note: "Rất dễ nhầm: **What do you do?** là “bạn làm nghề gì”, còn **What are you doing?** là “bạn đang làm gì”. Hỏi nghề mà dùng câu thứ hai thì người nghe sẽ kể việc họ đang làm.",
          ex: [
            ["What are you doing? — I am writing a report.", "Bạn đang làm gì vậy? — Tôi đang viết báo cáo."],
            ["What is your father doing now? — He is fixing the car.", "Bố bạn đang làm gì vậy? — Bố đang sửa xe."],
            ["What are you doing at the office so late?", "Bạn làm gì ở văn phòng muộn thế?"],
            ["What are they doing? — They are having a meeting.", "Họ đang làm gì vậy? — Họ đang họp."]
          ] }
      ],
      p: [
        "**What do you do?** dùng thì hiện tại đơn, hỏi về việc bạn làm thường xuyên, tức là **nghề nghiệp**. Đây là câu hỏi quen thuộc nhất khi gặp người mới.",
        "Nếu muốn hỏi ai đó **đang làm gì ngay lúc này**, phải dùng thì hiện tại tiếp diễn: **What are you doing?** Hai câu này rất dễ nhầm.",
        "Khi hỏi nghề của người khác (bố, mẹ, anh chị), đổi do thành **does**: What does your father do?"
      ],
      ex: [["What do you do? — I am an accountant.", "Bạn làm nghề gì? — Tôi là kế toán."], ["What does your father do?", "Bố bạn làm nghề gì?"]]
    },
    { h: "work as, work for, work in, work at",
      f: ["work as + a hoặc an + nghề", "work for + công ty", "work in + nơi chốn hoặc lĩnh vực", "work at + địa điểm cụ thể"],
      items: [
        { f: "work as + a hoặc an + nghề",
          mean: "**làm (nghề, vị trí) …**: nói **chức danh** hoặc vai trò của mình trong công việc.",
          parts: [
            ["work as", "**làm với vai trò là**. Nghĩa gần giống I am a…, nhưng nhấn vào công việc đang làm."],
            ["a / an + nghề", "bắt buộc có a hoặc an như khi nói I am a…: work as **a** waiter, work as **an** engineer."]
          ],
          use: "trả lời What do you do? một cách tự nhiên, hoặc nói về công việc tạm thời, công việc làm thêm.",
          note: "Không nói “work like a teacher”: like nghĩa là **giống như**, tức là bạn không thật sự làm giáo viên. Đúng là **work as a teacher**.",
          ex: [
            ["I work as a receptionist in a hotel.", "Tôi làm lễ tân ở một khách sạn."],
            ["My cousin works as an English tutor.", "Em họ tôi làm gia sư tiếng Anh."],
            ["She worked as a waitress last summer.", "Mùa hè năm ngoái cô ấy làm phục vụ bàn."],
            ["Do you work as a designer?", "Bạn làm nhà thiết kế à?"]
          ] },
        { f: "work for + công ty",
          mean: "**làm cho, làm việc cho (công ty, tổ chức, người nào đó)**: nói mình là nhân viên của ai.",
          parts: [
            ["work for", "nhấn vào **người hoặc tổ chức trả lương** cho mình."],
            ["công ty", "tên công ty (Viettel, Samsung), a company, a bank, the government, hoặc một người (my uncle)."]
          ],
          use: "khi nói mình làm cho công ty nào. Thường đi sau work as: I work as an engineer **for** Samsung.",
          note: "Tên công ty không cần the: work for Vinamilk. Nhưng nói chung chung thì cần a: work for **a** big company.",
          ex: [
            ["My brother works for a bank.", "Anh trai tôi làm cho một ngân hàng."],
            ["I work for a small IT company.", "Tôi làm cho một công ty công nghệ thông tin nhỏ."],
            ["She does not work for the government.", "Cô ấy không làm cho nhà nước."],
            ["Which company do you work for?", "Bạn làm cho công ty nào?"]
          ] },
        { f: "work in + nơi chốn hoặc lĩnh vực",
          mean: "**làm việc ở (một loại nơi) / làm trong (ngành) …**: nói môi trường làm việc hoặc ngành nghề.",
          parts: [
            ["in + nơi chốn", "loại nơi làm việc, thường có a hoặc an: in a hospital, in a factory, in an office, in a school."],
            ["in + lĩnh vực", "ngành nghề, **không** có a hoặc the: in marketing, in sales, in education, in tourism."]
          ],
          use: "khi không cần nói tên công ty mà chỉ nói làm ở đâu hoặc làm ngành gì. Cũng dùng với thành phố: work in Hanoi.",
          note: "So sánh: **work in a hospital** (làm trong một bệnh viện, nói chung) và **work at Bach Mai Hospital** (một địa điểm cụ thể có tên).",
          ex: [
            ["My aunt works in a clothes factory.", "Cô tôi làm ở một xưởng may."],
            ["I work in marketing.", "Tôi làm trong ngành tiếp thị."],
            ["He works in an office in Ho Chi Minh City.", "Anh ấy làm việc ở một văn phòng tại Thành phố Hồ Chí Minh."],
            ["Do you work in tourism?", "Bạn làm trong ngành du lịch à?"]
          ] },
        { f: "work at + địa điểm cụ thể",
          mean: "**làm việc tại (một địa điểm cụ thể)**: một nơi xác định, thường có tên hoặc có the.",
          parts: [
            ["at", "chỉ một **điểm** cụ thể trên bản đồ."],
            ["địa điểm cụ thể", "the post office, the airport, the station, Cho Ray Hospital, the hotel near my house."]
          ],
          use: "khi người nghe biết hoặc có thể tìm ra chính xác nơi bạn làm. Hay dùng với the hoặc tên riêng.",
          note: "Ranh giới giữa in và at không quá chặt; ở trình độ A1, nhớ: **at** + địa điểm có tên hoặc có the, **in** + loại nơi hoặc ngành nghề. Cũng nói **at home** (làm ở nhà).",
          ex: [
            ["My uncle works at Noi Bai Airport.", "Chú tôi làm ở sân bay Nội Bài."],
            ["She works at the post office near the market.", "Cô ấy làm ở bưu điện gần chợ."],
            ["I work at home on Fridays.", "Thứ Sáu tôi làm việc ở nhà."],
            ["Does your sister work at the train station?", "Chị gái bạn làm ở ga tàu à?"]
          ] }
      ],
      p: [
        "**work as** dùng để nói **chức danh**, vị trí của bạn: I work as a designer. Không dùng “work like”, vì like nghĩa là “giống như”, tức là bạn không thật sự làm nghề đó.",
        "**work for** + tên công ty hoặc tổ chức: She works for Vietnam Airlines. **work in** + nơi chốn (in a factory, in a hospital) hoặc ngành nghề (in marketing).",
        "**work at** + một địa điểm cụ thể: I work at the post office."
      ],
      ex: [["I work as a designer.", "Tôi làm nhà thiết kế."], ["He works in a factory.", "Anh ấy làm việc ở nhà máy."]]
    },
    { h: "Thì hiện tại đơn khi mô tả công việc",
      f: ["I / You / We / They + động từ nguyên mẫu", "He / She / It + động từ thêm -s hoặc -es", "have → has"],
      items: [
        { f: "I / You / We / They + động từ nguyên mẫu",
          mean: "**thì hiện tại đơn** với I, you, we, they: nói việc mình làm **hằng ngày, thường xuyên** trong công việc.",
          parts: [
            ["I", "tôi."],
            ["You", "bạn, các bạn."],
            ["We", "chúng tôi, chúng ta."],
            ["They", "họ, hoặc chủ ngữ số nhiều như my parents, doctors."],
            ["động từ nguyên mẫu", "giữ nguyên, không thêm gì: work, help, answer, teach."]
          ],
          use: "kể công việc hằng ngày của mình hoặc của một nhóm người. Phủ định: **do not** + động từ nguyên mẫu. Câu hỏi: **Do** + chủ ngữ + động từ nguyên mẫu?",
          note: "Không dùng am, is, are cùng động từ thường: nói **I work** in a bank, không nói “I am work in a bank”.",
          ex: [
            ["I answer phone calls and check emails every morning.", "Mỗi sáng tôi nghe điện thoại và kiểm tra thư điện tử."],
            ["Nurses help doctors in the hospital.", "Y tá giúp bác sĩ trong bệnh viện."],
            ["We do not work on Sundays.", "Chúng tôi không làm việc vào Chủ nhật."],
            ["Do you start work at eight o’clock?", "Bạn bắt đầu làm việc lúc tám giờ à?"]
          ] },
        { f: "He / She / It + động từ thêm -s hoặc -es",
          mean: "**thì hiện tại đơn** với he, she, it hoặc **một người**: động từ phải thêm -s hoặc -es.",
          parts: [
            ["thêm -s", "phần lớn động từ: work → works, help → helps, drive → drives."],
            ["thêm -es", "động từ tận cùng bằng -ch, -sh, -s, -x, -o: teach → teaches, wash → washes, fix → fixes, go → goes."],
            ["phụ âm + y", "đổi y thành **-ies**: study → studies, carry → carries."]
          ],
          use: "kể nghề và công việc của bố, mẹ, anh chị, bạn bè. Phủ định: **does not** + động từ nguyên mẫu. Câu hỏi: **Does** + chủ ngữ + động từ nguyên mẫu?",
          note: "Khi đã có does hoặc does not thì động từ **không** thêm -s nữa: She does not **work** (không nói “does not works”).",
          ex: [
            ["A mechanic fixes cars.", "Thợ máy sửa ô tô."],
            ["My sister studies medicine and works part-time.", "Chị tôi học y và làm thêm."],
            ["He does not drive a bus. He drives a taxi.", "Anh ấy không lái xe buýt. Anh ấy lái taxi."],
            ["Does your mother teach at a primary school?", "Mẹ bạn dạy ở trường tiểu học à?"]
          ] },
        { f: "have → has",
          mean: "**có**: động từ have đổi thành **has** khi chủ ngữ là he, she, it hoặc một người.",
          parts: [
            ["have", "dùng với I, you, we, they: I **have** a meeting."],
            ["has", "dùng với he, she, it: She **has** two jobs. Đây là dạng bất quy tắc, không nói “haves”."],
            ["does not have", "phủ định với he, she: He **does not have** a car (quay về have, không nói “does not has”)."]
          ],
          use: "nói về công việc, lịch làm việc, đồ dùng hoặc điều kiện làm việc: have a meeting, have a day off, have a uniform.",
          note: "Câu hỏi với he, she dùng **Does … have…?**: Does he have a uniform? (không nói “Does he has”).",
          ex: [
            ["My father has a small shop.", "Bố tôi có một cửa hàng nhỏ."],
            ["She has a lot of meetings on Monday.", "Thứ Hai cô ấy có nhiều cuộc họp."],
            ["He does not have a day off this week.", "Tuần này anh ấy không có ngày nghỉ."],
            ["Does a pilot have a uniform?", "Phi công có đồng phục không?"]
          ] }
      ],
      p: [
        "Công việc lặp lại hằng ngày dùng **thì hiện tại đơn**: I answer emails and talk to customers.",
        "Khi kể nghề của **một người khác** (my mother, my sister, he, she), động từ phải thêm **-s**: works, helps. Động từ tận cùng bằng -ch, -x thì thêm **-es**: teach → teaches, fix → fixes. Động từ have đổi thành **has**.",
        "Cách luyện hiệu quả: nói mỗi nghề làm ở đâu và làm gì, ví dụ A chef cooks food in a restaurant."
      ],
      ex: [["My mother works in a hospital.", "Mẹ tôi làm việc ở bệnh viện."], ["He teaches English.", "Anh ấy dạy tiếng Anh."]]
    },
    { h: "like, love, enjoy + động từ thêm -ing, và because",
      f: ["chủ ngữ + like / love / enjoy + động từ thêm -ing", "chủ ngữ + do not like / does not like + động từ thêm -ing", "… because + chủ ngữ + động từ"],
      items: [
        { f: "chủ ngữ + like / love / enjoy + động từ thêm -ing",
          mean: "**thích làm một việc gì đó** trong công việc. Ba động từ khác nhau ở mức độ và sắc thái.",
          parts: [
            ["like", "**thích**, mức độ bình thường, dùng nhiều nhất."],
            ["love", "**rất thích, yêu**. Mạnh hơn like, dùng khi việc đó là niềm đam mê."],
            ["enjoy", "**thấy vui, tận hưởng** khi đang làm việc đó."],
            ["động từ thêm -ing", "việc mình thích: working, meeting, helping, teaching, travelling."]
          ],
          use: "nói điều mình thích ở công việc. Với he, she nhớ thêm -s: She **loves** teaching.",
          note: "Sau enjoy **bắt buộc** dùng động từ thêm -ing (không nói “I enjoy to work”). Ở trình độ A1, hãy dùng -ing sau cả like và love cho chắc.",
          ex: [
            ["I like working in a team.", "Tôi thích làm việc nhóm."],
            ["My mother loves teaching young children.", "Mẹ tôi rất yêu việc dạy trẻ nhỏ."],
            ["He enjoys travelling for work.", "Anh ấy thích đi công tác."],
            ["Do you like talking to customers?", "Bạn có thích nói chuyện với khách hàng không?"]
          ] },
        { f: "chủ ngữ + do not like / does not like + động từ thêm -ing",
          mean: "**không thích làm một việc gì đó**: câu phủ định nói điều mình không thích trong công việc.",
          parts: [
            ["do not like", "dùng với I, you, we, they. Dạng rút gọn: don’t like."],
            ["does not like", "dùng với he, she hoặc một người. Dạng rút gọn: doesn’t like. Like **không** thêm -s vì đã có does."],
            ["động từ thêm -ing", "việc mình không thích: working late, getting up early, sitting all day."]
          ],
          use: "nói điểm không thích của nghề, thường đi kèm but hoặc because để giải thích thêm.",
          note: "Muốn nói mạnh hơn, dùng **hate** (ghét): I hate working at night. Không nói “I not like”.",
          ex: [
            ["I do not like working late.", "Tôi không thích làm việc muộn."],
            ["My father does not like driving in the rain.", "Bố tôi không thích lái xe dưới trời mưa."],
            ["We do not like sitting at a desk all day.", "Chúng tôi không thích ngồi bàn giấy cả ngày."],
            ["Doctors do not like working at night, but sometimes they have to.", "Bác sĩ không thích làm đêm, nhưng đôi khi họ phải làm."]
          ] },
        { f: "… because + chủ ngữ + động từ",
          mean: "**vì, bởi vì …**: nối thêm lý do để giải thích câu phía trước.",
          parts: [
            ["because", "**vì**, đứng đầu vế lý do."],
            ["chủ ngữ + động từ", "sau because phải là một câu đầy đủ: because **it is** interesting, because **I love** children."]
          ],
          use: "trả lời câu hỏi **Why…?** hoặc giải thích vì sao mình thích hay không thích công việc. Thường đặt ở giữa câu, sau ý chính.",
          note: "Sau because không dùng một danh từ trơn: không nói “because money”. Nói **because the money is good** hoặc **because of the money**.",
          ex: [
            ["I like my job because my colleagues are friendly.", "Tôi thích công việc vì đồng nghiệp thân thiện."],
            ["She wants to change her job because the salary is low.", "Cô ấy muốn đổi việc vì lương thấp."],
            ["He is tired because he works twelve hours a day.", "Anh ấy mệt vì anh ấy làm mười hai tiếng mỗi ngày."],
            ["Why do you love your job? — Because I can help people.", "Sao bạn yêu công việc của mình? — Vì tôi có thể giúp mọi người."]
          ] }
      ],
      p: [
        "Khi nói thích hay không thích **làm một việc**, dùng **like, love, enjoy + động từ thêm -ing**: I love working with children. Không nói “I like work with customers”.",
        "Muốn giải thích lý do, nối thêm **because** + một mệnh đề đầy đủ có chủ ngữ và động từ: I like my job because it is interesting. Nhờ vậy câu trả lời của bạn có nội dung hơn và người nghe dễ hỏi tiếp."
      ],
      ex: [["I enjoy meeting new people.", "Tôi thích gặp gỡ người mới."], ["She does not like working at the weekend.", "Cô ấy không thích làm việc cuối tuần."]]
    },
    { h: "want to be và would like to be để nói ước mơ",
      f: ["chủ ngữ + want to be + a hoặc an + nghề", "chủ ngữ + would like to be + a hoặc an + nghề", "he / she + wants to be + a hoặc an + nghề"],
      items: [
        { f: "chủ ngữ + want to be + a hoặc an + nghề",
          mean: "**muốn làm, muốn trở thành (nghề) …**: nói ước mơ nghề nghiệp một cách **thân mật, thông dụng**.",
          parts: [
            ["want", "**muốn**, dùng với I, you, we, they."],
            ["to be", "bắt buộc có **to** sau want. Be ở đây nghĩa là **làm, trở thành**. Có thể thay bằng **to become**."],
            ["a / an + nghề", "vẫn cần a hoặc an như khi nói I am a…"]
          ],
          use: "nói chuyện với bạn bè, kể ước mơ hồi nhỏ hoặc dự định tương lai. Phủ định: **do not want to be**.",
          note: "Không nói “I want be a doctor” hay “I want to be doctor”. Cần đủ cả **to** và **a**.",
          ex: [
            ["I want to be a pilot.", "Tôi muốn làm phi công."],
            ["We want to be engineers.", "Chúng tôi muốn trở thành kỹ sư."],
            ["I do not want to be an office worker.", "Tôi không muốn làm nhân viên văn phòng."],
            ["Do you want to be a teacher like your mother?", "Bạn có muốn làm giáo viên giống mẹ không?"]
          ] },
        { f: "chủ ngữ + would like to be + a hoặc an + nghề",
          mean: "**muốn trở thành (nghề) …**: cùng nghĩa với want to be nhưng **lịch sự, nhẹ nhàng hơn**.",
          parts: [
            ["would like", "**muốn** (lịch sự). Dạng rút gọn: **I’d like**. Giữ nguyên với mọi chủ ngữ, không thêm -s (she would like)."],
            ["to be", "bắt buộc có to, giống want to be."]
          ],
          use: "trong phỏng vấn, khi nói với thầy cô, người lớn, hoặc khi viết bài giới thiệu. Câu hỏi: **What would you like to be?**",
          note: "Đừng nhầm **would like to be** (muốn trở thành) với **like being** (thích làm): I like being a nurse = tôi thích công việc y tá mình đang làm.",
          ex: [
            ["I would like to be a tour guide.", "Tôi muốn trở thành hướng dẫn viên du lịch."],
            ["She would like to be a fashion designer.", "Cô ấy muốn trở thành nhà thiết kế thời trang."],
            ["What would you like to be in the future?", "Sau này bạn muốn làm nghề gì?"],
            ["My son would not like to be a doctor.", "Con trai tôi không muốn làm bác sĩ."]
          ] },
        { f: "he / she + wants to be + a hoặc an + nghề",
          mean: "**anh ấy / cô ấy muốn làm (nghề) …**: nói ước mơ nghề nghiệp của **một người khác**.",
          parts: [
            ["he / she", "hoặc một người: my son, my daughter, Nam."],
            ["wants", "want thêm **-s** vì chủ ngữ là he, she."],
            ["does not want to be", "phủ định: want quay về nguyên mẫu sau does not."]
          ],
          use: "kể ước mơ của con cái, anh chị em, bạn bè. Câu hỏi: **What does he want to be?** (want không có -s).",
          note: "Lỗi hay gặp là quên -s: “My daughter want to be a singer”. Đúng là **wants**.",
          ex: [
            ["My daughter wants to be a vet.", "Con gái tôi muốn làm bác sĩ thú y."],
            ["He wants to be a famous singer.", "Anh ấy muốn trở thành ca sĩ nổi tiếng."],
            ["My brother does not want to be a farmer.", "Em trai tôi không muốn làm nông dân."],
            ["What does your son want to be?", "Con trai bạn muốn làm nghề gì?"]
          ] }
      ],
      p: [
        "**want to be** là cách nói thân mật, thông dụng về nghề bạn muốn làm. **would like to be** (rút gọn: I’d like to be) lịch sự và nhẹ nhàng hơn.",
        "Sau want và would like luôn có **to** rồi mới đến động từ nguyên mẫu: want to be, want to become. Không nói “I want become”.",
        "Với he hoặc she, thêm -s vào **want**: My son wants to be a footballer."
      ],
      ex: [["I want to be a chef.", "Tôi muốn làm đầu bếp."], ["I would like to be a lawyer.", "Tôi muốn trở thành luật sư."]]
    }
  ],
  mistakes: [
    ["I am teacher.", "I am a teacher.", "Trước tên nghề số ít luôn có **a** hoặc **an**."],
    ["She is a engineer.", "She is an engineer.", "engineer bắt đầu bằng âm nguyên âm nên dùng **an**."],
    ["I work like a teacher.", "I work as a teacher.", "Nói chức danh dùng **work as**; like nghĩa là “giống như”."],
    ["My mother work in a hospital.", "My mother works in a hospital.", "Chủ ngữ là một người (ngôi thứ ba số ít) nên động từ thêm **-s**."],
    ["I like work with customers.", "I like working with customers.", "Sau **like, love, enjoy** dùng động từ thêm **-ing**."],
    ["I want become a doctor.", "I want to become a doctor.", "Sau **want** phải có **to** rồi mới đến động từ nguyên mẫu."],
    ["My job is teacher. I teach. It is good.", "I am a teacher at a primary school. It is challenging, but I really enjoy working with kids.", "Giới thiệu bằng **I am a + nghề**, thêm nơi làm và cảm nhận để câu tự nhiên hơn."]
  ],
  vocab: [
    ["teacher", "giáo viên"], ["doctor", "bác sĩ"], ["nurse", "y tá"], ["engineer", "kỹ sư"],
    ["programmer", "lập trình viên"], ["accountant", "kế toán"], ["chef", "đầu bếp"], ["waiter / waitress", "bồi bàn nam / nữ"],
    ["shop assistant", "nhân viên bán hàng"], ["driver", "tài xế"], ["mechanic", "thợ sửa xe"], ["office worker", "nhân viên văn phòng"],
    ["student", "học sinh, sinh viên"], ["job", "công việc"], ["colleague", "đồng nghiệp"], ["salary", "lương tháng"],
    ["interesting", "thú vị"], ["busy", "bận rộn"], ["tiring", "mệt mỏi"], ["stressful", "căng thẳng"],
    ["well-paid", "lương cao"], ["part-time", "bán thời gian"], ["dream job", "công việc mơ ước"], ["career", "sự nghiệp"]
  ],
  tips: [
    "Trước khi nói tên nghề, dừng lại một giây để thêm **a** hoặc **an**: I am a nurse, I am an engineer.",
    "Luyện giới thiệu nghề của bố, mẹ, anh chị và chú ý đuôi **-s, -es**: My dad fixes cars.",
    "Trả lời xong thì hỏi lại **What about you?** để cuộc trò chuyện không bị dừng.",
    "Khi người khác kể về công việc, đáp lại bằng **That sounds interesting!**, **That must be hard.** hoặc hỏi thêm **What do you like most about it?**",
    "Thu âm một phút giới thiệu công việc hiện tại và ước mơ nghề nghiệp của bạn, có ít nhất một câu với because."
  ]
};
