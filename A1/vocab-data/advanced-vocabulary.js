/* Dữ liệu trang Từ vựng nâng cao theo chủ đề.
   "topics": các chủ đề (bảng từ, cụm giao tiếp, cặp nghe cứng/tự nhiên). "notes": ghi chú ngữ pháp theo id "chủ đề.bảng.dòng".
   Được nạp trước advanced-vocabulary.js (xem Advanced-Vocabulary.html).
   Dữ liệu ở dạng JSON gán vào window để mở trực tiếp bằng file:// vẫn chạy (fetch() bị trình duyệt chặn). */
window.A1_ADV_VOCAB = {
  "topics": [
    {
      "f": "introduce-yourself-beginer.html",
      "e": "🙋",
      "n": "Giới thiệu bản thân",
      "g": "Bắt đầu",
      "sec": "Thêm vài từ này, bài tự giới thiệu của bạn sẽ sinh động hơn",
      "sub": [
        {
          "t": "Quê quán, công việc và thời gian rảnh",
          "k": "table",
          "h": ["Từ / cụm", "Nghĩa", "Ví dụ"],
          "r": [
            ["originally from", "gốc ở, quê gốc ở", "I’m originally from Hue, but I live in Hanoi now."],
            ["be based in", "đang sống và làm việc ở", "I’m based in Ho Chi Minh City."],
            ["work as", "làm nghề gì", "I work as a graphic designer."],
            ["work for", "làm cho (công ty)", "I work for a software company."],
            ["in my free time", "lúc rảnh", "In my free time, I like cooking."],
            ["fresh graduate", "sinh viên mới tốt nghiệp", "I’m a fresh graduate in economics."],
            ["currently", "hiện tại, hiện đang", "I’m currently studying English."]
          ]
        },
        {
          "t": "Tính cách và mục tiêu",
          "k": "table",
          "h": ["Từ / cụm", "Nghĩa", "Ví dụ"],
          "r": [
            ["easygoing", "dễ tính, dễ hòa đồng", "I’m easygoing, so it’s easy to work with me."],
            ["ambitious", "có hoài bão", "I’m ambitious and I like new challenges."],
            ["hard-working", "chăm chỉ", "I’m hard-working and reliable."],
            ["curious", "tò mò, ham tìm hiểu", "I’m curious about different cultures."],
            ["passionate about", "đam mê", "I’m passionate about photography."],
            ["aim to", "đặt mục tiêu", "I aim to speak English fluently."],
            ["look forward to", "mong chờ", "I’m looking forward to making new friends."]
          ]
        },
        {
          "t": "Cụm giúp bài tự giới thiệu trôi chảy",
          "k": "phr",
          "r": [
            ["Let me introduce myself.", "Để tôi tự giới thiệu"],
            ["I’m originally from Hue, but I moved to Hanoi five years ago.", "Tôi quê Huế nhưng chuyển ra Hà Nội cách đây 5 năm"],
            ["I’m a big fan of cooking.", "Tôi rất mê nấu ăn"],
            ["I’m learning English because I want to travel.", "Tôi học tiếng Anh vì muốn đi du lịch"],
            ["That’s enough about me. What about you?", "Về tôi thế là đủ rồi, còn bạn thì sao?"],
            ["It’s a pleasure to meet you.", "Rất hân hạnh được gặp bạn"],
            ["I’d love to get to know you better.", "Tôi rất muốn hiểu bạn hơn"]
          ]
        }
      ],
      "bad": "My name Lan. I 24. I from Hanoi. I like read.",
      "good": "Hi, I’m Lan. I’m twenty-four and I’m originally from Hue, but I’m based in Hanoi now. In my free time, I like reading.",
      "tip": "💡Mẹo: chỉ cần thêm 2 cụm nâng cao vào bài 30 giây của bạn, ví dụ originally from và in my free time. Thêm quá nhiều từ mới cùng lúc sẽ làm bạn vấp."
    },
    {
      "f": "Meeting-New-People.html",
      "e": "🤝",
      "n": "Meeting New People",
      "g": "Bắt đầu",
      "sec": "Thêm vài từ này, bạn sẽ làm quen tự tin và tự nhiên hơn",
      "sub": [
        {
          "t": "Về các mối quan hệ",
          "k": "table",
          "h": ["Từ / cụm", "Nghĩa", "Ví dụ"],
          "r": [
            ["acquaintance", "người quen (chưa thân)", "He’s just an acquaintance from work."],
            ["mutual friend", "bạn chung", "We met through a mutual friend."],
            ["get to know", "làm quen, tìm hiểu", "I’d love to get to know you better."],
            ["hit it off", "hợp nhau ngay", "We hit it off right away."],
            ["have a lot in common", "có nhiều điểm chung", "We have a lot in common."],
            ["hang out", "đi chơi cùng nhau", "We should hang out sometime."],
            ["networking", "mở rộng quan hệ (công việc)", "I go to networking events to meet new people."]
          ]
        },
        {
          "t": "Về tính cách khi giao tiếp",
          "k": "table",
          "h": ["Từ / cụm", "Nghĩa", "Ví dụ"],
          "r": [
            ["outgoing", "hướng ngoại, cởi mở", "She’s very outgoing and makes friends easily."],
            ["shy", "nhút nhát", "I’m a bit shy at first."],
            ["introvert / extrovert", "người hướng nội / hướng ngoại", "I’m more of an introvert."],
            ["small talk", "chuyện phiếm xã giao", "I’m not very good at small talk."],
            ["icebreaker", "câu, trò để phá băng", "Asking about food is a great icebreaker."],
            ["easygoing", "dễ tính, dễ gần", "He’s really easygoing."]
          ]
        },
        {
          "t": "Cụm giúp cuộc trò chuyện trôi chảy",
          "k": "phr",
          "r": [
            ["Sorry, I didn’t catch your name.", "Xin lỗi, mình chưa nghe rõ tên bạn"],
            ["How do you know the host?", "Bạn quen chủ nhà thế nào?"],
            ["What brings you here?", "Điều gì đưa bạn đến đây?"],
            ["I’ve heard a lot about you.", "Tôi nghe nói về bạn nhiều rồi"],
            ["Small world!", "Trái đất tròn thật! (khi phát hiện quen chung)"],
            ["Let me know if you’re ever in Hanoi.", "Khi nào đến Hà Nội thì báo mình nhé"],
            ["It was great talking to you.", "Nói chuyện với bạn vui lắm"]
          ]
        }
      ],
      "bad": "My name Linh. I 25 years old. I work office.",
      "good": "Hi, I’m Linh. I work in marketing, and in my free time I love trying new cafés. How about you?",
      "tip": "💡Mẹo: công thức làm quen dễ nhất là trả lời + thêm một chi tiết + hỏi lại. Ví dụ: “I’m from Hue. It’s famous for its food. Have you been there?”"
    },
    {
      "f": "Making-Friends.html",
      "e": "😊",
      "n": "Making Friends",
      "g": "Bắt đầu",
      "sec": "Thêm vài từ này, câu chuyện về tình bạn của bạn sẽ giống người bản xứ hơn",
      "sub": [
        {
          "t": "Các kiểu bạn và mối quan hệ",
          "k": "table",
          "h": ["Từ / cụm", "Nghĩa", "Ví dụ"],
          "r": [
            ["close friend", "bạn thân", "She’s one of my close friends."],
            ["buddy / mate", "bạn (thân mật, Mỹ / Anh)", "He’s my gym buddy."],
            ["friend group", "nhóm bạn", "Our friend group meets every Sunday."],
            ["get along (with)", "hòa hợp, hợp nhau", "I get along well with my roommate."],
            ["bond over", "thân nhau nhờ cùng thích", "We bonded over our love of music."],
            ["fall out (with)", "cãi nhau, giận nhau", "I fell out with my friend last week."],
            ["make up", "làm lành", "Don’t worry, we made up."],
            ["drift apart", "dần xa cách", "We drifted apart after university."]
          ]
        },
        {
          "t": "Tình bạn và sự gắn bó",
          "k": "table",
          "h": ["Từ / cụm", "Nghĩa", "Ví dụ"],
          "r": [
            ["catch up", "hàn huyên, ôn chuyện", "Let’s meet up and catch up soon."],
            ["count on", "tin cậy, trông cậy", "You can always count on me."],
            ["have someone’s back", "luôn ủng hộ, bênh vực ai", "Don’t worry, I’ve got your back."],
            ["go way back", "quen nhau từ lâu lắm", "Nam and I go way back."],
            ["click", "hợp nhau ngay", "We just clicked."],
            ["my treat", "để mình bao", "Dinner is my treat tonight."]
          ]
        },
        {
          "t": "Cụm giúp cuộc trò chuyện trôi chảy",
          "k": "phr",
          "r": [
            ["Can I take a rain check?", "Để dịp khác được không? (từ chối khéo)"],
            ["I’m down!", "Mình chơi! (đồng ý rất nhiệt tình)"],
            ["I’ve missed you!", "Nhớ bạn ghê!"],
            ["We should do this more often.", "Mình nên gặp nhau thường xuyên hơn"],
            ["Thanks for being such a good friend.", "Cảm ơn vì là người bạn tốt như vậy"],
            ["I’m here if you want to talk.", "Nếu muốn tâm sự thì có mình đây"],
            ["Text me when you get home.", "Về đến nhà thì nhắn mình nhé"]
          ]
        }
      ],
      "bad": "You want go coffee? I free.",
      "good": "Hey, I’m free this afternoon. Do you want to grab a coffee and catch up?",
      "tip": "💡Mẹo: tình bạn được xây bằng những lần hỏi lại. Khi bạn kể có buổi phỏng vấn, thi cử hay đi khám, hãy nhớ vài ngày sau hỏi “How did it go?”. Câu nhỏ này khiến người kia thấy được quan tâm."
    },
    {
      "f": "Feelings-and-Emotions.html",
      "e": "🎭",
      "n": "Feelings & Emotions",
      "g": "Bắt đầu",
      "sec": "Thay happy, tired, sad bằng những từ mạnh và chính xác hơn",
      "sub": [
        {
          "t": "Từ mạnh hơn",
          "k": "table",
          "h": ["Từ cơ bản", "Từ nâng cao", "Ví dụ"],
          "r": [
            ["very happy", "thrilled / delighted", "I’m thrilled with the result."],
            ["very tired", "exhausted / worn out", "I’m completely worn out."],
            ["very hungry", "starving", "I’m starving! Let’s eat."],
            ["very angry", "furious", "He was furious about the delay."],
            ["very scared", "terrified", "I’m terrified of heights."],
            ["very bored", "bored to death", "I was bored to death in that meeting."]
          ]
        },
        {
          "t": "Cảm xúc chính xác hơn",
          "k": "table",
          "h": ["Từ / cụm", "Nghĩa", "Ví dụ"],
          "r": [
            ["relieved", "nhẹ nhõm", "I’m so relieved the test is over."],
            ["disappointed", "thất vọng", "I was disappointed with the movie."],
            ["frustrated", "bực bội, bế tắc", "I get frustrated when my computer is slow."],
            ["embarrassed", "xấu hổ, ngượng", "I was so embarrassed when I fell over."],
            ["homesick", "nhớ nhà", "I feel homesick during Tet."],
            ["overwhelmed", "quá tải", "I feel overwhelmed with work this week."],
            ["grateful", "biết ơn", "I’m grateful for your help."],
            ["fed up with", "chán ngấy", "I’m fed up with the traffic."]
          ]
        },
        {
          "t": "Thành ngữ về cảm xúc",
          "k": "phr",
          "r": [
            ["I’m over the moon!", "Tôi vui như mở cờ trong bụng!"],
            ["I’m feeling a bit down today.", "Hôm nay tôi hơi buồn"],
            ["I’m in a good mood. / I’m in a bad mood.", "Tâm trạng tôi đang tốt / đang tệ"],
            ["I’m running on empty.", "Tôi cạn kiệt sức lực rồi"],
            ["I’ve got butterflies in my stomach.", "Tôi hồi hộp nôn nao"],
            ["It’s been a rollercoaster of a week.", "Một tuần lên xuống thất thường"],
            ["Hang in there!", "Cố lên nhé!"]
          ]
        }
      ],
      "bad": "Today I very tired and very hungry. I am sad because work many.",
      "good": "I’m absolutely starving, and to be honest, I’m running on empty. I feel a bit overwhelmed with work this week.",
      "tip": "💡Mẹo: với các từ mạnh như exhausted, starving, furious, hãy dùng absolutely hoặc completely thay cho very. Ví dụ: absolutely starving là đúng, còn very starving là sai."
    },
    {
      "f": "family-english-beginner.html",
      "e": "👨‍👩‍👧",
      "n": "Gia đình",
      "g": "Bắt đầu",
      "sec": "Thêm vài từ này, bài giới thiệu gia đình của bạn sẽ phong phú hơn",
      "sub": [
        {
          "t": "Họ hàng và quan hệ",
          "k": "table",
          "h": ["Từ / cụm", "Nghĩa", "Ví dụ"],
          "r": [
            ["stepmother / stepfather", "mẹ kế / bố dượng", "My stepmother is very kind to me."],
            ["mother-in-law", "mẹ chồng / mẹ vợ", "My mother-in-law cooks very well."],
            ["in-laws", "họ hàng bên chồng / vợ", "I get along well with my in-laws."],
            ["sibling", "anh chị em ruột (không phân biệt giới)", "I have two siblings."],
            ["relatives", "họ hàng", "Most of my relatives live in the countryside."],
            ["twins", "cặp sinh đôi", "My brothers are twins."],
            ["grandchildren", "các cháu (của ông bà)", "My grandmother has five grandchildren."],
            ["the eldest / the youngest", "con lớn nhất / con út", "I’m the youngest in my family."]
          ]
        },
        {
          "t": "Tính cách",
          "k": "table",
          "h": ["Từ / cụm", "Nghĩa", "Ví dụ"],
          "r": [
            ["strict", "nghiêm khắc", "My father is strict, but he’s fair."],
            ["easy-going", "dễ tính", "My mother is very easy-going."],
            ["generous", "hào phóng", "My uncle is generous with his time."],
            ["outgoing", "hướng ngoại, hòa đồng", "My sister is outgoing and funny."],
            ["shy", "nhút nhát, hay ngại", "My little brother is shy with strangers."],
            ["patient", "kiên nhẫn", "My grandmother is very patient."],
            ["stubborn", "bướng bỉnh", "My brother can be a little stubborn."],
            ["protective", "hay bảo vệ, che chở", "My older brother is very protective of me."]
          ]
        },
        {
          "t": "Cụm động từ về gia đình",
          "k": "table",
          "h": ["Từ / cụm", "Nghĩa", "Ví dụ"],
          "r": [
            ["get along with", "hòa thuận với", "I get along well with my sister."],
            ["grow up", "lớn lên", "I grew up in a small town."],
            ["bring up", "nuôi dạy", "My grandparents brought me up."],
            ["look up to", "kính trọng, ngưỡng mộ", "I look up to my father."],
            ["take care of", "chăm sóc", "I take care of my grandmother."],
            ["keep in touch", "giữ liên lạc", "We keep in touch by phone."],
            ["run in the family", "có trong gia đình (di truyền)", "Singing runs in my family."],
            ["be named after", "được đặt theo tên", "I’m named after my grandfather."]
          ]
        },
        {
          "t": "Cụm giúp bài kể trôi chảy",
          "k": "phr",
          "r": [
            ["We’re a close-knit family.", "Gia đình tôi rất gắn bó"],
            ["We get along well with each other.", "Chúng tôi hòa thuận với nhau"],
            ["I look up to my parents because they work so hard.", "Tôi kính trọng bố mẹ vì bố mẹ làm việc rất chăm chỉ"],
            ["I try to keep in touch with my relatives.", "Tôi cố gắng giữ liên lạc với họ hàng"],
            ["We help each other when we have problems.", "Chúng tôi giúp đỡ nhau khi gặp khó khăn"],
            ["Family is the most important thing to me.", "Gia đình là điều quan trọng nhất với tôi"]
          ]
        }
      ],
      "bad": "My family is very happy and good. I like my family.",
      "good": "We’re a close-knit family, and we get along well with each other.",
      "tip": "💡Mẹo: mỗi bài kể chỉ cần thêm 1 cụm nâng cao là đủ tự nhiên. Ví dụ: I look up to my father. sau câu tả nghề nghiệp của bố."
    },
    {
      "f": "thank-you-sorry.html",
      "e": "🙏",
      "n": "Thank You & Sorry",
      "g": "Bắt đầu",
      "sec": "Thêm vài từ này, lời cảm ơn và xin lỗi của bạn sẽ giàu cảm xúc hơn",
      "sub": [
        {
          "t": "Về lòng biết ơn",
          "k": "table",
          "h": ["Từ / cụm", "Nghĩa", "Ví dụ"],
          "r": [
            ["grateful", "biết ơn", "I’m so grateful for your support."],
            ["thankful", "thấy may mắn, biết ơn", "I’m thankful to have friends like you."],
            ["Thanks a million!", "cảm ơn rất rất nhiều", "You fixed my laptop? Thanks a million!"],
            ["You shouldn’t have!", "bạn không cần làm vậy đâu (khi nhận quà)", "Flowers for me? Oh, you shouldn’t have!"],
            ["I owe you big time", "tôi nợ bạn lớn rồi", "Thanks for covering my shift. I owe you big time."],
            ["heartfelt thanks", "lời cảm ơn chân thành (viết)", "My heartfelt thanks to everyone who helped."]
          ]
        },
        {
          "t": "Về lỗi lầm và tha thứ",
          "k": "table",
          "h": ["Từ / cụm", "Nghĩa", "Ví dụ"],
          "r": [
            ["My bad!", "lỗi tôi! (rất thân mật)", "Oops, my bad! I sent the wrong file."],
            ["misunderstanding", "sự hiểu lầm", "I think it was just a misunderstanding."],
            ["make it up to someone", "bù đắp cho ai", "I’ll make it up to you, I promise."],
            ["forgive", "tha thứ", "Can you forgive me?"],
            ["No hard feelings", "không giận gì đâu", "No hard feelings. We’re still friends."],
            ["hold a grudge", "để bụng, thù dai", "Don’t worry, I don’t hold grudges."],
            ["put it behind us", "cho qua chuyện cũ", "Let’s put it behind us."]
          ]
        },
        {
          "t": "Cụm giúp cuộc trò chuyện trôi chảy",
          "k": "phr",
          "r": [
            ["You made my day!", "Bạn làm ngày của mình vui hẳn lên!"],
            ["That means a lot to me.", "Điều đó rất có ý nghĩa với mình"],
            ["I didn’t mean to hurt your feelings.", "Mình không cố ý làm bạn buồn"],
            ["I feel terrible about it.", "Mình thấy áy náy quá"],
            ["It slipped my mind.", "Mình quên mất"],
            ["Apology accepted.", "Mình chấp nhận lời xin lỗi"],
            ["Water under the bridge.", "Chuyện cũ bỏ qua đi"]
          ]
        }
      ],
      "bad": "Sorry, sorry. Okay?",
      "good": "I’m really sorry I forgot. It slipped my mind, but that’s no excuse. Let me make it up to you.",
      "tip": "💡Mẹo: người Việt hay nói “sorry” và “thank you” ít hơn người Anh, Mỹ. Trong môi trường quốc tế, hãy dùng cả hai thường xuyên hơn bạn nghĩ, kể cả với việc nhỏ như được rót nước hay được nhường đường."
    },
    {
      "f": "english-communication-toolkit.html",
      "e": "💬",
      "n": "Bộ công cụ giao tiếp",
      "g": "Bắt đầu",
      "sec": "Thêm vài cụm này, câu nói của bạn sẽ mềm mại và giống người bản xứ hơn",
      "sub": [
        {
          "t": "Làm mềm câu và nêu ý kiến",
          "k": "table",
          "h": ["Từ / cụm", "Nghĩa", "Ví dụ"],
          "r": [
            ["to be honest", "thành thật mà nói", "To be honest, I prefer tea to coffee."],
            ["actually", "thật ra", "Actually, I’m not from Hanoi."],
            ["I guess", "tôi đoán là", "I guess it’s going to rain."],
            ["kind of", "hơi, khá là (nói thân mật)", "I’m kind of tired today."],
            ["probably", "có lẽ, nhiều khả năng", "I’ll probably be late."],
            ["as far as I know", "theo như tôi biết", "As far as I know, the shop opens at nine."],
            ["it depends", "tùy tình hình", "It depends on the weather."]
          ]
        },
        {
          "t": "Chuyển ý và phản hồi",
          "k": "table",
          "h": ["Từ / cụm", "Nghĩa", "Ví dụ"],
          "r": [
            ["speaking of", "nhắc đến … thì", "Speaking of food, have you tried this café?"],
            ["anyway", "dù sao thì (quay lại việc chính)", "Anyway, let’s get back to work."],
            ["that makes sense", "nghe hợp lý đấy", "That makes sense. Thanks for explaining."],
            ["fair enough", "được thôi, có lý", "Fair enough. Let’s meet at six then."],
            ["good point", "ý hay đấy", "Good point. I didn’t think about that."],
            ["no worries", "không sao đâu", "No worries. Take your time."],
            ["in the end", "cuối cùng thì", "In the end, we took a taxi."]
          ]
        },
        {
          "t": "Cụm giúp cuộc trò chuyện trôi chảy",
          "k": "phr",
          "r": [
            ["Sorry, I didn’t catch that. Could you say it again?", "Xin lỗi, tôi nghe chưa rõ. Bạn nói lại được không?"],
            ["Let me think about it.", "Để tôi nghĩ đã"],
            ["I’m not sure, but I think so.", "Tôi không chắc, nhưng tôi nghĩ vậy"],
            ["Could you give me a minute?", "Cho tôi một phút nhé?"],
            ["Just to make sure, we’re meeting at six, right?", "Để chắc chắn, mình gặp lúc 6 giờ nhỉ?"],
            ["I see what you mean.", "Tôi hiểu ý bạn rồi"],
            ["Let’s keep in touch.", "Mình giữ liên lạc nhé"]
          ]
        }
      ],
      "bad": "No. You are wrong. I don’t agree.",
      "good": "Good point, but to be honest, I see it a bit differently.",
      "tip": "💡Mẹo: học 1 cụm mỗi ngày và dùng ngay trong một cuộc trò chuyện thật. Các cụm này không thay nội dung câu, chúng chỉ làm câu nghe lịch sự và tự nhiên hơn."
    },
    {
      "f": "daily-routine.html",
      "e": "⏰",
      "n": "Hoạt động hằng ngày",
      "g": "Cuộc sống hằng ngày",
      "sec": "Thêm vài từ này, câu kể về một ngày của bạn sẽ giống người bản xứ hơn",
      "sub": [
        {
          "t": "Về nếp sinh hoạt",
          "k": "table",
          "h": ["Từ / cụm", "Nghĩa", "Ví dụ"],
          "r": [
            ["routine", "nếp sinh hoạt hằng ngày", "My morning routine is very simple."],
            ["hit the snooze button", "bấm báo thức để ngủ thêm", "I always hit the snooze button twice."],
            ["sleep in", "ngủ nướng", "I like to sleep in on Sundays."],
            ["commute", "quãng đường đi làm hằng ngày", "My commute takes forty minutes."],
            ["rush hour", "giờ cao điểm", "The traffic is terrible during rush hour."],
            ["grab a bite", "ăn vội chút gì đó", "Let’s grab a bite before the meeting."],
            ["take a break", "nghỉ giải lao", "I take a short break every hour."],
            ["work overtime", "làm thêm giờ", "I sometimes work overtime on Fridays."]
          ]
        },
        {
          "t": "Về việc nhà và thời gian rảnh",
          "k": "table",
          "h": ["Từ / cụm", "Nghĩa", "Ví dụ"],
          "r": [
            ["chores", "việc vặt trong nhà", "I do the chores on Saturday morning."],
            ["run errands", "chạy việc vặt bên ngoài", "I need to run some errands after work."],
            ["tidy up", "dọn dẹp gọn gàng", "I tidy up my desk before I leave."],
            ["unwind", "thư giãn sau ngày dài", "I read a book to unwind."],
            ["day off", "ngày nghỉ", "Tomorrow is my day off."],
            ["stay up late", "thức khuya", "I try not to stay up late."],
            ["early bird / night owl", "người dậy sớm / cú đêm", "I’m an early bird, but my sister is a night owl."]
          ]
        },
        {
          "t": "Cụm giúp cuộc trò chuyện trôi chảy",
          "k": "phr",
          "r": [
            ["How was your day?", "Hôm nay của bạn thế nào?"],
            ["Pretty busy, actually.", "Thật ra khá bận"],
            ["Same as usual.", "Vẫn như mọi ngày"],
            ["What does a typical day look like for you?", "Một ngày bình thường của bạn ra sao?"],
            ["It depends on the day.", "Còn tùy hôm"],
            ["I’m not a morning person.", "Tôi không phải người hợp buổi sáng"],
            ["That sounds like a nice routine.", "Nghe như một nếp sống hay đấy"]
          ]
        }
      ],
      "bad": "I wake up. I eat. I go to work.",
      "good": "I usually wake up around six, grab a quick breakfast, and then head to work.",
      "tip": "💡Mẹo: nối các việc bằng first, then, after that, finally để câu chuyện về ngày của bạn có trình tự và nghe mượt hơn."
    },
    {
      "f": "Time-and-Date.html",
      "e": "📅",
      "n": "Time & Date",
      "g": "Cuộc sống hằng ngày",
      "sec": "Thêm vài từ này, câu nói về thời gian của bạn sẽ giống người bản xứ hơn",
      "sub": [
        {
          "t": "Lịch và kế hoạch",
          "k": "table",
          "h": ["Từ / cụm", "Nghĩa", "Ví dụ"],
          "r": [
            ["reschedule", "dời lịch sang thời điểm khác", "Can we reschedule the meeting?"],
            ["postpone", "hoãn lại", "The match was postponed until next week."],
            ["deadline", "hạn chót", "The deadline is the thirtieth of November."],
            ["public holiday", "ngày nghỉ lễ", "Monday is a public holiday."],
            ["anniversary", "ngày kỷ niệm", "Today is our wedding anniversary."],
            ["fortnight", "hai tuần (kiểu Anh)", "I’m on holiday for a fortnight."],
            ["calendar", "lịch", "Let me check my calendar."],
            ["book / be booked up", "đặt lịch / kín lịch", "Sorry, I’m booked up this week."]
          ]
        },
        {
          "t": "Diễn đạt thời gian linh hoạt",
          "k": "table",
          "h": ["Từ / cụm", "Nghĩa", "Ví dụ"],
          "r": [
            ["early / mid / late", "đầu / giữa / cuối (tháng, năm)", "I’m moving in early March."],
            ["the other day", "hôm trước (gần đây)", "I saw your sister the other day."],
            ["a couple of days", "vài ba hôm", "I’ll call you in a couple of days."],
            ["around the corner", "sắp đến rồi", "Tết is just around the corner."],
            ["decade / century", "thập kỷ / thế kỷ", "The city has changed a lot in the last decade."],
            ["from time to time", "thỉnh thoảng", "We meet from time to time."]
          ]
        },
        {
          "t": "Cụm giúp cuộc trò chuyện trôi chảy",
          "k": "phr",
          "r": [
            ["Let me check my calendar and get back to you.", "Để tôi xem lịch rồi báo lại bạn"],
            ["Does next Friday suit you?", "Thứ Sáu tuần sau có tiện cho bạn không?"],
            ["Time flies!", "Thời gian trôi nhanh thật!"],
            ["Long time no see!", "Lâu lắm không gặp!"],
            ["It’s been ages since we last met.", "Lâu lắm rồi mình mới gặp lại"],
            ["I’ll be there in no time.", "Tôi sẽ đến ngay thôi"],
            ["Just to confirm, that’s Thursday the third?", "Xác nhận lại là thứ Năm ngày 3 nhé?"]
          ]
        }
      ],
      "bad": "Meeting is 3/4. You come.",
      "good": "The meeting is on Friday, the third of April. Does that suit you?",
      "tip": "💡Mẹo: khi hẹn quan trọng, luôn nhắc lại cả thứ và ngày, ví dụ Thursday, December third. Nếu một trong hai bị nghe nhầm, người kia sẽ nhận ra ngay."
    },
    {
      "f": "Birthdays-and-Holidays.html",
      "e": "🎁",
      "n": "Birthdays & Holidays",
      "g": "Cuộc sống hằng ngày",
      "sec": "Làm lời chúc và câu chuyện ngày lễ của bạn phong phú hơn",
      "sub": [
        {
          "t": "Lễ hội và tiệc tùng",
          "k": "table",
          "h": ["Từ / cụm", "Nghĩa", "Ví dụ"],
          "r": [
            ["a milestone birthday", "sinh nhật mốc (18, 30, 50…)", "Thirty is a milestone birthday."],
            ["a surprise party", "tiệc bất ngờ", "We’re throwing her a surprise party."],
            ["festive", "không khí lễ hội", "The streets look so festive."],
            ["the holiday season", "mùa lễ cuối năm", "Shops are busy during the holiday season."],
            ["a family reunion", "đoàn tụ gia đình", "Tet is a time for family reunions."],
            ["ring in the new year", "đón năm mới", "We rang in the new year with fireworks."],
            ["prosperity", "sự thịnh vượng", "Red is the colour of luck and prosperity."],
            ["superstition", "điều kiêng kỵ, mê tín", "It’s a superstition not to sweep the floor on New Year’s Day."]
          ]
        },
        {
          "t": "Quà tặng",
          "k": "table",
          "h": ["Từ / cụm", "Nghĩa", "Ví dụ"],
          "r": [
            ["thoughtful", "chu đáo", "What a thoughtful gift!"],
            ["sentimental", "có giá trị tình cảm", "This watch has sentimental value."],
            ["a token of appreciation", "chút lòng thành", "Please accept this as a token of our appreciation."],
            ["gift-wrap", "gói quà", "Could you gift-wrap it, please?"],
            ["Secret Santa", "trò tặng quà bí mật", "Our office does Secret Santa every year."],
            ["regift", "đem quà được tặng đi tặng lại", "Is it rude to regift something?"]
          ]
        },
        {
          "t": "Cụm giúp cuộc trò chuyện trôi chảy",
          "k": "phr",
          "r": [
            ["Many happy returns!", "Chúc sinh nhật vui vẻ và còn nhiều sinh nhật nữa!"],
            ["It’s the thought that counts.", "Quan trọng là tấm lòng"],
            ["Here’s to a wonderful year ahead! Cheers!", "Nâng ly vì một năm tuyệt vời phía trước! Dô!"],
            ["Out with the old, in with the new!", "Tống cựu nghênh tân!"],
            ["Season’s greetings!", "Chúc mừng mùa lễ hội! (trang trọng, trên thiệp)"],
            ["You only turn thirty once!", "Đời chỉ có một lần ba mươi!"]
          ]
        }
      ],
      "bad": "Happy new year. I wish you healthy. This is gift. Thank you for receive.",
      "good": "Happy Lunar New Year! Wishing you good health and prosperity. I got you a little something. It’s just a token of appreciation, but I hope you like it.",
      "tip": "💡Mẹo: thiệp tiếng Anh thường ngắn: 1 câu chúc, 1 câu cá nhân (nhắc kỷ niệm chung hoặc cảm ơn), rồi ký tên. Câu cá nhân là thứ khiến tấm thiệp đáng nhớ."
    },
    {
      "f": "Weather.html",
      "e": "🌤️",
      "n": "Weather",
      "g": "Cuộc sống hằng ngày",
      "sec": "Thêm vài từ này, câu nói về thời tiết của bạn sẽ giống người bản xứ hơn",
      "sub": [
        {
          "t": "Tả thời tiết chính xác hơn",
          "k": "table",
          "h": ["Từ / cụm", "Nghĩa", "Ví dụ"],
          "r": [
            ["humid", "ẩm, nồm", "Hanoi is very humid in spring."],
            ["muggy", "oi bức", "It’s so muggy before the storm."],
            ["chilly", "se lạnh", "It’s a bit chilly this morning."],
            ["mild", "ôn hòa, dễ chịu", "The weather is mild in Da Lat."],
            ["drizzle", "mưa phùn", "It’s only drizzling. You don’t need an umbrella."],
            ["pour down", "mưa như trút", "It’s pouring down outside!"],
            ["breeze", "gió nhẹ", "There’s a nice breeze by the lake."],
            ["thunder / lightning", "sấm / chớp", "Did you hear the thunder?"]
          ]
        },
        {
          "t": "Hiện tượng và tin thời tiết",
          "k": "table",
          "h": ["Từ / cụm", "Nghĩa", "Ví dụ"],
          "r": [
            ["heatwave", "đợt nắng nóng", "There’s a heatwave this week."],
            ["cold front", "đợt gió mùa, không khí lạnh", "A cold front is coming tomorrow."],
            ["typhoon", "bão nhiệt đới", "The typhoon will hit the coast tonight."],
            ["flood", "lũ lụt, ngập", "Some streets are flooded after the rain."],
            ["air quality", "chất lượng không khí", "The air quality is bad today. Wear a mask."],
            ["UV index", "chỉ số tia UV", "The UV index is very high at noon."]
          ]
        },
        {
          "t": "Cụm giúp cuộc trò chuyện trôi chảy",
          "k": "phr",
          "r": [
            ["Lovely weather, isn’t it?", "Trời đẹp quá nhỉ? (câu bắt chuyện kinh điển)"],
            ["It’s boiling today!", "Hôm nay nóng như thiêu!"],
            ["It’s freezing out there.", "Ngoài kia lạnh cóng"],
            ["It’s raining cats and dogs.", "Mưa như trút nước (thành ngữ)"],
            ["I got caught in the rain.", "Tôi bị dính mưa"],
            ["I’m soaked!", "Tôi ướt sũng rồi!"],
            ["I’m feeling a bit under the weather.", "Tôi thấy hơi mệt, không khỏe (thành ngữ)"]
          ]
        }
      ],
      "bad": "Weather is hot. Very hot.",
      "good": "It’s boiling today, isn’t it? I hope it cools down a bit this evening.",
      "tip": "💡Mẹo: thêm isn’t it? vào cuối câu để mời người khác đồng ý: Cold today, isn’t it? Đây là cách bắt chuyện rất tự nhiên với người lạ."
    },
    {
      "f": "At-Home.html",
      "e": "🏠",
      "n": "At Home",
      "g": "Cuộc sống hằng ngày",
      "sec": "Thêm vài từ này, câu nói về nhà cửa của bạn sẽ giống người bản xứ hơn",
      "sub": [
        {
          "t": "Thuê nhà và chuyển nhà",
          "k": "table",
          "h": ["Từ / cụm", "Nghĩa", "Ví dụ"],
          "r": [
            ["rent", "tiền thuê, thuê nhà", "The rent is five million dong a month."],
            ["landlord", "chủ nhà cho thuê", "My landlord is very friendly."],
            ["roommate / flatmate", "bạn cùng phòng (Mỹ / Anh)", "I share an apartment with two roommates."],
            ["move in / move out", "chuyển đến / chuyển đi", "We’re moving in next week."],
            ["bills / utilities", "các hóa đơn điện nước", "The rent doesn’t include utilities."],
            ["neighborhood", "khu phố, hàng xóm xung quanh", "It’s a quiet neighborhood."],
            ["housewarming party", "tiệc tân gia", "Come to our housewarming party on Saturday!"]
          ]
        },
        {
          "t": "Tả nhà và sự cố trong nhà",
          "k": "table",
          "h": ["Từ / cụm", "Nghĩa", "Ví dụ"],
          "r": [
            ["spacious", "rộng rãi", "The living room is really spacious."],
            ["cramped", "chật chội", "My old room was a bit cramped."],
            ["messy / tidy", "bừa bộn / gọn gàng", "Sorry, my room is a bit messy."],
            ["leak", "rò rỉ, dột", "The kitchen sink is leaking."],
            ["broken / doesn’t work", "hỏng / không chạy", "The air conditioner doesn’t work."],
            ["power cut", "mất điện", "There was a power cut last night."],
            ["renovate", "sửa sang, cải tạo", "We’re renovating the bathroom."]
          ]
        },
        {
          "t": "Cụm giúp cuộc trò chuyện trôi chảy",
          "k": "phr",
          "r": [
            ["Make yourself at home.", "Cứ tự nhiên như ở nhà nhé"],
            ["Sorry about the mess.", "Xin lỗi nhà hơi bừa"],
            ["Help yourself to some fruit.", "Cứ tự nhiên lấy hoa quả ăn nhé"],
            ["I’m a homebody. I love staying in.", "Tôi là người thích ở nhà"],
            ["It’s good to be home.", "Về nhà thật dễ chịu"],
            ["There’s no place like home.", "Không đâu bằng nhà mình"],
            ["I’m feeling a bit homesick.", "Tôi hơi nhớ nhà"]
          ]
        }
      ],
      "bad": "My house small. Have two room.",
      "good": "My apartment is a bit small, but it’s cozy. There are two bedrooms and a lovely balcony.",
      "tip": "💡Mẹo: house là ngôi nhà (công trình), home là nơi bạn thuộc về. Nói I’m going home, không nói I’m going to house."
    },
    {
      "f": "House-and-Furniture.html",
      "e": "🛋️",
      "n": "House & Furniture",
      "g": "Cuộc sống hằng ngày",
      "sec": "Thêm vài từ này, câu nói về nhà cửa và nội thất của bạn sẽ giống người bản xứ hơn",
      "sub": [
        {
          "t": "Không gian và thiết kế",
          "k": "table",
          "h": ["Từ / cụm", "Nghĩa", "Ví dụ"],
          "r": [
            ["layout", "cách bố trí, sơ đồ mặt bằng", "I really like the layout of this apartment."],
            ["open-plan", "không gian mở, không vách ngăn", "The kitchen and living room are open-plan."],
            ["natural light", "ánh sáng tự nhiên", "The bedroom gets a lot of natural light."],
            ["storage space", "chỗ cất đồ", "We need more storage space."],
            ["interior design", "thiết kế nội thất", "She works in interior design."],
            ["fully furnished / unfurnished", "đủ nội thất / không có nội thất", "The flat is fully furnished."]
          ]
        },
        {
          "t": "Mua sắm và chăm sóc đồ",
          "k": "table",
          "h": ["Từ / cụm", "Nghĩa", "Ví dụ"],
          "r": [
            ["assemble", "lắp ráp", "It took two hours to assemble the wardrobe."],
            ["flat-pack", "đồ nội thất tháo rời, đóng hộp", "Flat-pack furniture is cheap and easy to carry."],
            ["DIY", "tự làm (do it yourself)", "My dad loves DIY projects."],
            ["clutter / declutter", "đồ bừa bộn / dọn bớt đồ", "I need to declutter my room."],
            ["take up space", "chiếm chỗ", "This sofa takes up too much space."],
            ["scratch / stain", "vết xước / vết bẩn", "There’s a scratch on the table."]
          ]
        },
        {
          "t": "Cụm giúp cuộc trò chuyện trôi chảy",
          "k": "phr",
          "r": [
            ["It doesn’t go with the rest of the room.", "Nó không hợp với tổng thể căn phòng"],
            ["It makes the room look bigger.", "Nó làm căn phòng trông rộng hơn"],
            ["It’s a bit too big for this space.", "Nó hơi to so với chỗ này"],
            ["Will it fit through the door?", "Có đưa lọt qua cửa không?"],
            ["I love what you’ve done with the place!", "Mình thích cách bạn bày trí nhà lắm!"],
            ["Less is more.", "Ít mà chất (phong cách tối giản)"],
            ["Let’s measure it first.", "Đo trước đã"]
          ]
        }
      ],
      "bad": "Table big. Put corner.",
      "good": "The table is a bit too big for the middle of the room. Why don’t we put it in the corner instead?",
      "tip": "💡Mẹo: trước khi mua đồ lớn, hỏi “Will it fit?” và nhớ đo cả cửa ra vào, thang máy chứ không chỉ căn phòng."
    },
    {
      "f": "Clothes.html",
      "e": "👕",
      "n": "Clothes",
      "g": "Cuộc sống hằng ngày",
      "sec": "Thêm vài từ này, câu nói về thời trang của bạn sẽ giống người bản xứ hơn",
      "sub": [
        {
          "t": "Phong cách và thời trang",
          "k": "table",
          "h": ["Từ / cụm", "Nghĩa", "Ví dụ"],
          "r": [
            ["outfit", "bộ trang phục", "I love your outfit today!"],
            ["wardrobe", "tủ quần áo, tổng số đồ", "My wardrobe is full of black clothes."],
            ["dress code", "quy định trang phục", "What’s the dress code for the wedding?"],
            ["trendy / fashionable", "hợp mốt", "Wide-leg trousers are trendy this year."],
            ["out of fashion", "lỗi mốt", "This jacket is a bit out of fashion."],
            ["dress up", "diện đồ đẹp", "Let’s dress up for dinner tonight."],
            ["second-hand", "đồ cũ, đồ si", "I bought this coat second-hand."],
            ["hand-me-down", "đồ người khác mặc lại cho", "These are hand-me-downs from my sister."]
          ]
        },
        {
          "t": "Chi tiết và chăm sóc quần áo",
          "k": "table",
          "h": ["Từ / cụm", "Nghĩa", "Ví dụ"],
          "r": [
            ["sleeveless / long-sleeved", "không tay / dài tay", "I prefer long-sleeved shirts."],
            ["button / zip", "cúc / khóa kéo", "A button fell off my shirt."],
            ["pocket", "túi áo, túi quần", "These trousers have deep pockets."],
            ["iron", "là, ủi", "I need to iron my shirt."],
            ["shrink", "bị co lại", "My sweater shrank in the wash."],
            ["fade", "bạc màu", "My jeans faded after a few months."]
          ]
        },
        {
          "t": "Cụm giúp cuộc trò chuyện trôi chảy",
          "k": "phr",
          "r": [
            ["It fits like a glove.", "Vừa như in"],
            ["It’s not really my style.", "Không hợp gu tôi lắm"],
            ["I’m more of a jeans-and-T-shirt person.", "Tôi thuộc kiểu thích quần bò áo phông hơn"],
            ["You have great taste in clothes.", "Bạn có gu ăn mặc tốt thật"],
            ["I have nothing to wear!", "Tôi chẳng có gì để mặc cả! (câu than quen thuộc)"],
            ["Comfort comes first for me.", "Với tôi, thoải mái là trên hết"],
            ["Does this look okay on me?", "Tôi mặc cái này trông ổn không?"]
          ]
        }
      ],
      "bad": "Your clothes is beautiful. Color good.",
      "good": "I love your outfit! That green really suits you, and it goes well with your bag.",
      "tip": "💡Mẹo: clothes luôn là số nhiều, đi với are / these / them. Muốn nói một món, dùng a piece of clothing hoặc gọi đúng tên món đó."
    },
    {
      "f": "accupation.html",
      "e": "💼",
      "n": "Nghề nghiệp",
      "g": "Cuộc sống hằng ngày",
      "sec": "Thêm vài từ này, câu nói về công việc của bạn sẽ giống người bản xứ hơn",
      "sub": [
        {
          "t": "Về môi trường làm việc",
          "k": "table",
          "h": ["Từ / cụm", "Nghĩa", "Ví dụ"],
          "r": [
            ["colleague", "đồng nghiệp", "I have lunch with my colleagues."],
            ["manager / boss", "quản lý / sếp", "My manager is very kind."],
            ["salary", "lương tháng", "The salary is good."],
            ["full-time / part-time", "toàn thời gian / bán thời gian", "I have a part-time job at a café."],
            ["shift", "ca làm", "I work the night shift on Fridays."],
            ["deadline", "hạn chót", "I have a deadline tomorrow."],
            ["work from home", "làm việc tại nhà", "I work from home twice a week."],
            ["self-employed / freelancer", "tự làm chủ / làm tự do", "I’m a freelancer, so my hours are flexible."]
          ]
        },
        {
          "t": "Về sự nghiệp",
          "k": "table",
          "h": ["Từ / cụm", "Nghĩa", "Ví dụ"],
          "r": [
            ["job interview", "buổi phỏng vấn xin việc", "I have a job interview on Monday."],
            ["experience", "kinh nghiệm", "I have three years of experience."],
            ["get promoted", "được thăng chức", "She got promoted last month."],
            ["quit / resign", "nghỉ việc", "He quit his job to start a business."],
            ["retire", "nghỉ hưu", "My father retired two years ago."],
            ["career", "sự nghiệp", "I want a career in tourism."]
          ]
        },
        {
          "t": "Cụm giúp cuộc trò chuyện trôi chảy",
          "k": "phr",
          "r": [
            ["What does your job involve?", "Công việc của bạn gồm những gì?"],
            ["How long have you worked there?", "Bạn làm ở đó bao lâu rồi?"],
            ["I’ve worked there for two years.", "Tôi đã làm ở đó được hai năm"],
            ["It’s challenging but rewarding.", "Nó thử thách nhưng đáng công sức"],
            ["I’m between jobs at the moment.", "Hiện tôi đang tạm nghỉ giữa hai công việc"],
            ["Do you enjoy what you do?", "Bạn có thích việc mình làm không?"],
            ["I’m in charge of the sales team.", "Tôi phụ trách nhóm kinh doanh"]
          ]
        }
      ],
      "bad": "My job is teacher. I teach. It is good.",
      "good": "I’m a teacher at a primary school. It’s challenging, but I really enjoy working with kids.",
      "tip": "💡Mẹo: khi người khác kể về công việc, đáp lại bằng That sounds interesting!, That must be hard. hoặc hỏi thêm What do you like most about it? để cuộc trò chuyện tiếp tục."
    },
    {
      "f": "At-Work.html",
      "e": "💻",
      "n": "At Work",
      "g": "Cuộc sống hằng ngày",
      "sec": "Những từ dân IT dùng hằng ngày trên Slack và trong cuộc họp",
      "sub": [
        {
          "t": "Tiến độ và vướng mắc",
          "k": "table",
          "h": ["Từ / cụm", "Nghĩa", "Ví dụ"],
          "r": [
            ["on track", "đúng tiến độ", "The project is on track."],
            ["behind schedule", "chậm tiến độ", "We’re a bit behind schedule."],
            ["blocker", "vướng mắc làm dừng việc", "The missing API key is a blocker."],
            ["ETA", "thời gian dự kiến xong", "What’s the ETA on the fix?"],
            ["hotfix", "bản sửa lỗi khẩn", "We pushed a hotfix last night."],
            ["roll back", "quay về phiên bản cũ", "Let’s roll back the last deploy."],
            ["tech debt", "nợ kỹ thuật", "This module has a lot of tech debt."],
            ["bandwidth", "thời gian rảnh để nhận việc", "I don’t have the bandwidth this week."]
          ]
        },
        {
          "t": "Phối hợp với đồng nghiệp",
          "k": "table",
          "h": ["Từ / cụm", "Nghĩa", "Ví dụ"],
          "r": [
            ["ping", "nhắn nhanh cho ai", "Ping me if you need anything."],
            ["sync up", "trao đổi nhanh cho thống nhất", "Let’s sync up after lunch."],
            ["loop someone in", "thêm ai vào cuộc trao đổi", "Can you loop in the QA team?"],
            ["a heads-up", "báo trước", "Just a heads-up: the server is down at five."],
            ["circle back", "quay lại bàn sau", "Let’s circle back to this tomorrow."],
            ["pair programming", "hai người cùng code", "Want to do some pair programming?"],
            ["OOO", "nghỉ, không có ở văn phòng", "I’ll be out of office on Friday."]
          ]
        },
        {
          "t": "Cụm giúp cuộc trò chuyện trôi chảy",
          "k": "phr",
          "r": [
            ["Good catch!", "Phát hiện hay đấy! (khi ai tìm ra lỗi)"],
            ["Keep me posted.", "Có gì cập nhật cho mình nhé"],
            ["Let’s take this offline.", "Chuyện này mình bàn riêng sau"],
            ["It works on my machine!", "Máy tôi chạy được mà! (câu đùa quen thuộc)"],
            ["Hang in there, the release is almost done.", "Cố lên, sắp phát hành rồi"],
            ["Great teamwork, everyone!", "Cả nhóm phối hợp tuyệt lắm!"],
            ["I’ve got a lot on my plate today.", "Hôm nay mình ngập việc"]
          ]
        }
      ],
      "bad": "Yesterday I do bug. Today I do test. I have problem, I wait design.",
      "good": "Yesterday I fixed the login bug. Today I’m going to write tests. One blocker: I’m waiting for the design, so I’ll ping the UI team. Should be on track by Friday.",
      "tip": "💡Mẹo: trong công ty IT, small talk thường rất ngắn, chỉ 2–3 câu. Không cần nói dài; quan trọng là thân thiện và chủ động. Mỗi ngày thử dùng một từ mới như ping, sync up hay heads-up trên Slack."
    },
    {
      "f": "School-and-Study.html",
      "e": "📚",
      "n": "School & Study",
      "g": "Cuộc sống hằng ngày",
      "sec": "Thêm vài từ này, bạn sẽ nói chuyện học hành như sinh viên bản xứ",
      "sub": [
        {
          "t": "Đời sinh viên",
          "k": "table",
          "h": ["Từ / cụm", "Nghĩa", "Ví dụ"],
          "r": [
            ["semester / term", "học kỳ", "The new semester starts in September."],
            ["tuition fee", "học phí", "Tuition fees are going up every year."],
            ["scholarship", "học bổng", "She got a full scholarship."],
            ["GPA", "điểm trung bình tích lũy", "I need a GPA of three point five."],
            ["extracurricular activities", "hoạt động ngoại khóa", "I join a lot of extracurricular activities."],
            ["group project", "bài tập nhóm", "Our group project is due on Friday."],
            ["dorm", "ký túc xá", "I live in the dorm with three roommates."]
          ]
        },
        {
          "t": "Học hành và thi cử",
          "k": "table",
          "h": ["Từ / cụm", "Nghĩa", "Ví dụ"],
          "r": [
            ["revise / review", "ôn tập (Anh / Mỹ)", "I need to revise for my exams."],
            ["cram", "học nhồi, học gạo cấp tốc", "I crammed all night for the test."],
            ["pull an all-nighter", "thức trắng đêm học", "I pulled an all-nighter before the exam."],
            ["ace", "làm bài cực tốt", "I aced the math test!"],
            ["fall behind", "bị tụt lại phía sau", "I missed a week of class and fell behind."],
            ["procrastinate", "trì hoãn, nước đến chân mới nhảy", "Stop procrastinating and start your essay!"],
            ["learn by heart", "học thuộc lòng", "I learned the poem by heart."]
          ]
        },
        {
          "t": "Cụm giúp cuộc trò chuyện trôi chảy",
          "k": "phr",
          "r": [
            ["I’m swamped with assignments.", "Tôi ngập trong bài tập"],
            ["Time to hit the books!", "Đến lúc học bài rồi!"],
            ["That test was a piece of cake.", "Bài kiểm tra đó dễ ợt"],
            ["I’m keeping my fingers crossed for the results.", "Tôi đang cầu mong kết quả tốt"],
            ["Can I borrow your notes?", "Cho mình mượn vở ghi được không?"],
            ["Practice makes perfect.", "Có công mài sắt có ngày nên kim"],
            ["Good luck with your exams!", "Thi tốt nhé!"]
          ]
        }
      ],
      "bad": "Exam tomorrow. I study all night. Difficult.",
      "good": "I have a big exam tomorrow, so I’m going to hit the books tonight. Fingers crossed!",
      "tip": "💡Mẹo: bạn có thể dùng chính bài học này trong lớp tiếng Anh: mỗi buổi thử nói ít nhất một câu với thầy cô bằng tiếng Anh, như “Could you explain that again, please?”. Nói thật trong lớp là cách luyện hiệu quả nhất."
    },
    {
      "f": "Plans-for-Tomorrow.html",
      "e": "🗓️",
      "n": "Plans for Tomorrow",
      "g": "Cuộc sống hằng ngày",
      "sec": "Thêm vài từ này, bạn sẽ nói về lịch trình như người đi làm bản xứ",
      "sub": [
        {
          "t": "Lịch trình và sắp xếp",
          "k": "table",
          "h": ["Từ / cụm", "Nghĩa", "Ví dụ"],
          "r": [
            ["to-do list", "danh sách việc cần làm", "My to-do list for tomorrow is really long."],
            ["a packed day", "một ngày kín lịch", "Tomorrow is a packed day."],
            ["tied up", "bận, kẹt việc", "I’m tied up all morning."],
            ["available", "rảnh, sẵn sàng", "Are you available tomorrow afternoon?"],
            ["an early start", "phải bắt đầu sớm", "I have an early start tomorrow."],
            ["double-booked", "lỡ hẹn trùng hai việc", "Sorry, I’m double-booked at three."],
            ["wrap up", "kết thúc, hoàn tất", "I’ll wrap up the report tomorrow."],
            ["plan B", "phương án dự phòng", "If it rains, what’s our plan B?"]
          ]
        },
        {
          "t": "Cách nói linh hoạt về kế hoạch",
          "k": "table",
          "h": ["Từ / cụm", "Nghĩa", "Ví dụ"],
          "r": [
            ["play it by ear", "tùy cơ ứng biến", "Let’s play it by ear tomorrow."],
            ["sleep on it", "để mai suy nghĩ thêm", "I’ll sleep on it and tell you tomorrow."],
            ["last-minute", "phút chót", "It was a last-minute change."],
            ["get round to", "có thời gian để làm", "I’ll get round to it tomorrow."],
            ["be up to", "đang làm gì, định làm gì", "What are you up to tomorrow?"],
            ["pencil in", "ghi tạm vào lịch", "Let’s pencil it in for ten."]
          ]
        },
        {
          "t": "Cụm giúp cuộc trò chuyện trôi chảy",
          "k": "phr",
          "r": [
            ["I’ve got a lot on my plate tomorrow.", "Mai tôi bận ngập đầu"],
            ["What’s on your agenda for tomorrow?", "Mai bạn có lịch gì?"],
            ["I’m all set for tomorrow.", "Tôi chuẩn bị xong hết cho ngày mai rồi"],
            ["Let’s touch base tomorrow morning.", "Sáng mai mình trao đổi nhanh nhé"],
            ["Tomorrow is another day.", "Ngày mai là một ngày mới"],
            ["Fingers crossed it all goes to plan.", "Mong mọi việc theo đúng kế hoạch"],
            ["See you tomorrow!", "Mai gặp nhé!"]
          ]
        }
      ],
      "bad": "Tomorrow I will meet client, I will maybe gym, I will must report.",
      "good": "I’ve got a packed day tomorrow. I’m meeting a client at ten, I have to finish a report, and I might go to the gym if I have time.",
      "tip": "💡Mẹo: người mới học thường dùng will cho mọi việc tương lai. Hãy thử mỗi tối nói 3 câu về ngày mai, mỗi câu dùng một cách khác nhau. Sau một tuần, bạn sẽ tự nhiên chọn đúng."
    },
    {
      "f": "Food-and-Drinks.html",
      "e": "🍜",
      "n": "Food & Drinks",
      "g": "Ăn uống & Mua sắm",
      "sec": "Thêm vài từ này, câu chuyện về ăn uống của bạn sẽ giống người bản xứ hơn",
      "sub": [
        {
          "t": "Ở nhà hàng",
          "k": "table",
          "h": ["Từ / cụm", "Nghĩa", "Ví dụ"],
          "r": [
            ["starter / appetizer", "món khai vị", "Let’s order spring rolls as a starter."],
            ["main course", "món chính", "For the main course, I’ll have the beef."],
            ["vegetarian", "người ăn chay, món chay", "Do you have any vegetarian dishes?"],
            ["allergic to", "bị dị ứng với", "I’m allergic to peanuts."],
            ["portion", "phần ăn", "The portions here are huge."],
            ["takeaway / takeout", "đồ mang đi", "Let’s get takeaway tonight."],
            ["leftovers", "đồ ăn thừa", "Can I take the leftovers home?"],
            ["tip", "tiền boa", "Do people leave a tip here?"]
          ]
        },
        {
          "t": "Diễn tả cảm giác khi ăn",
          "k": "table",
          "h": ["Từ / cụm", "Nghĩa", "Ví dụ"],
          "r": [
            ["I’m starving", "tôi đói lả", "I’m starving. Let’s eat now."],
            ["I’m full", "tôi no rồi", "No more, thanks. I’m full."],
            ["craving", "thèm (món gì đó)", "I’m craving something sweet."],
            ["mouth-watering", "ngon chảy nước miếng", "The smell is mouth-watering."],
            ["bland", "nhạt nhẽo", "The soup is a bit bland."],
            ["homemade", "tự làm ở nhà", "This homemade cake is amazing."]
          ]
        },
        {
          "t": "Cụm giúp cuộc trò chuyện trôi chảy",
          "k": "phr",
          "r": [
            ["I’ll have the same, please.", "Cho tôi món giống vậy"],
            ["What’s in this dish?", "Món này có những gì?"],
            ["It’s on me.", "Để tôi mời"],
            ["Let’s split the bill.", "Mình chia đôi tiền nhé"],
            ["Help yourself!", "Cứ tự nhiên dùng nhé!"],
            ["This is the best phở I’ve ever had.", "Đây là bát phở ngon nhất tôi từng ăn"],
            ["Do you fancy grabbing something to eat?", "Bạn có muốn đi ăn gì đó không?"]
          ]
        }
      ],
      "bad": "Food is good. I like.",
      "good": "Wow, this is really tasty. The sauce is a little spicy, but I love it!",
      "tip": "💡Mẹo: khi được mời món lạ, dùng I’d love to try it! để nhận lời, hoặc No, thank you. I’m full. để từ chối lịch sự."
    },
    {
      "f": "drinking.html",
      "e": "🥤",
      "n": "Gọi đồ uống",
      "g": "Ăn uống & Mua sắm",
      "sec": "Thêm vài từ này, bạn sẽ gọi đồ như khách quen của quán",
      "sub": [
        {
          "t": "Ở quán cà phê",
          "k": "table",
          "h": ["Từ / cụm", "Nghĩa", "Ví dụ"],
          "r": [
            ["barista", "nhân viên pha chế", "The barista here makes amazing latte art."],
            ["double shot", "hai shot espresso", "I need a double shot this morning."],
            ["strong / weak", "đậm / nhạt", "Could you make it a bit stronger?"],
            ["caffeine kick", "cú hích caffeine cho tỉnh táo", "I just need a caffeine kick."],
            ["reusable cup", "cốc dùng nhiều lần", "Can you use my reusable cup?"],
            ["refill", "rót thêm", "Are refills free?"],
            ["loyalty card / stamp card", "thẻ tích điểm", "Ten stamps and you get a free drink."],
            ["the usual", "món quen như mọi khi", "I’ll have the usual, please."]
          ]
        },
        {
          "t": "Hương vị và quán bar",
          "k": "table",
          "h": ["Từ / cụm", "Nghĩa", "Ví dụ"],
          "r": [
            ["refreshing", "mát lạnh, sảng khoái", "Lime juice is so refreshing on a hot day."],
            ["creamy", "béo, mịn", "Egg coffee is really creamy."],
            ["too watery", "nhạt vì nhiều nước", "It’s a bit too watery because of the ice."],
            ["happy hour", "giờ giảm giá đồ uống", "Happy hour is from five to seven."],
            ["non-alcoholic", "không cồn", "Do you have non-alcoholic beer?"],
            ["on the rocks", "uống với đá", "Whisky on the rocks, please."]
          ]
        },
        {
          "t": "Cụm giúp cuộc trò chuyện trôi chảy",
          "k": "phr",
          "r": [
            ["I can’t function without my morning coffee.", "Thiếu ly cà phê sáng là tôi không làm được gì"],
            ["What would you recommend for someone who doesn’t like bitter coffee?", "Bạn gợi ý gì cho người không thích cà phê đắng?"],
            ["Let’s grab a drink after work.", "Tan làm đi uống gì đó đi"],
            ["Make that two, please.", "Cho thành hai ly nhé"],
            ["This hits the spot!", "Đúng thứ mình đang cần!"],
            ["I’ll pass this time, thanks.", "Lần này mình xin phép không uống, cảm ơn"],
            ["Keep the change.", "Không cần thối lại"]
          ]
        }
      ],
      "bad": "Milk tea. Big. Sugar half. Ice little.",
      "good": "Can I get a large milk tea with fifty percent sugar and less ice, please?",
      "tip": "💡Mẹo: tên đồ uống ở các chuỗi quán thường dài. Hãy nói theo đúng thứ tự size → nóng/đá → tên → with…; nhân viên quen nghe theo thứ tự này nên sẽ hiểu ngay dù bạn nói chưa trôi chảy."
    },
    {
      "f": "at-a-restaurant.html",
      "e": "🍽️",
      "n": "Gọi món tại nhà hàng",
      "g": "Ăn uống & Mua sắm",
      "sec": "Thêm vài từ này, bạn sẽ gọi món tự tin như người hay đi nhà hàng",
      "sub": [
        {
          "t": "Tại nhà hàng",
          "k": "table",
          "h": ["Từ / cụm", "Nghĩa", "Ví dụ"],
          "r": [
            ["reservation", "sự đặt chỗ", "I have a reservation for two."],
            ["server / waiter / waitress", "người phục vụ", "Our server was really friendly."],
            ["house specialty", "món đặc trưng của quán", "What’s the house specialty?"],
            ["set menu", "thực đơn set, combo", "The set menu includes a drink and dessert."],
            ["refill", "rót thêm", "Can I get a refill?"],
            ["takeaway box / doggy bag", "hộp mang đồ thừa về", "Could I get a takeaway box for this?"],
            ["service charge", "phí phục vụ", "There’s a ten percent service charge."],
            ["tip", "tiền boa", "Is it normal to leave a tip here?"]
          ]
        },
        {
          "t": "Ăn kiêng và nhận xét món ăn",
          "k": "table",
          "h": ["Từ / cụm", "Nghĩa", "Ví dụ"],
          "r": [
            ["vegan", "thuần chay (không cả trứng, sữa)", "Is this dish vegan?"],
            ["gluten-free", "không chứa gluten", "Do you have gluten-free options?"],
            ["overcooked / undercooked", "nấu quá / chưa chín", "I’m afraid the chicken is undercooked."],
            ["tender", "mềm", "The beef is so tender."],
            ["crispy", "giòn", "I love how crispy the spring rolls are."],
            ["rich / light", "đậm đà, béo / thanh nhẹ", "The sauce is a bit too rich for me."]
          ]
        },
        {
          "t": "Cụm giúp cuộc trò chuyện trôi chảy",
          "k": "phr",
          "r": [
            ["We’re still deciding.", "Chúng tôi vẫn đang chọn món"],
            ["What’s good here?", "Ở đây món gì ngon?"],
            ["I’ll have the same.", "Cho tôi giống vậy"],
            ["Let’s get a few dishes to share.", "Gọi vài món ăn chung đi"],
            ["My compliments to the chef!", "Gửi lời khen đến đầu bếp nhé!"],
            ["This one’s on me.", "Bữa này tôi mời"],
            ["I couldn’t eat another bite!", "Tôi no không ăn nổi nữa!"]
          ]
        }
      ],
      "bad": "Give me fish. No chili. Quick.",
      "good": "Could I have the grilled fish, please? Not too spicy, if possible. Thanks!",
      "tip": "💡Mẹo: gọi phục vụ bằng cách giơ tay nhẹ, nhìn về phía họ và nói “Excuse me”. Tránh vỗ tay hay gọi to “Waiter!”, vì ở nhiều nước điều đó bị coi là bất lịch sự."
    },
    {
      "f": "restaurant-cafe.html",
      "e": "☕",
      "n": "Nhà hàng & Cafe",
      "g": "Ăn uống & Mua sắm",
      "sec": "Thêm vài từ này, bạn sẽ nói chuyện ở quán như người quen",
      "sub": [
        {
          "t": "Mô tả hương vị và món ăn",
          "k": "table",
          "h": ["Từ / cụm", "Nghĩa", "Ví dụ"],
          "r": [
            ["crispy", "giòn", "The spring rolls are crispy."],
            ["tender", "mềm (thịt)", "The beef is so tender."],
            ["savory", "mặn, đậm vị (không ngọt)", "I prefer savory food."],
            ["rich", "béo, đậm đà", "This cake is very rich."],
            ["bland", "nhạt nhẽo", "The soup is a bit bland."],
            ["greasy", "nhiều dầu mỡ", "The fries are too greasy."],
            ["refreshing", "sảng khoái, mát", "This lemonade is refreshing."],
            ["mouth-watering", "ngon đến thèm", "That pizza looks mouth-watering."]
          ]
        },
        {
          "t": "Quán và dịch vụ",
          "k": "table",
          "h": ["Từ / cụm", "Nghĩa", "Ví dụ"],
          "r": [
            ["appetizer / entrée", "khai vị / món chính (Mỹ)", "Let’s share an appetizer."],
            ["cozy", "ấm cúng", "What a cozy café!"],
            ["ambiance", "không khí của quán", "I love the ambiance here."],
            ["leftovers", "đồ ăn thừa mang về", "Could I take the leftovers home?"],
            ["gratuity / tip", "tiền boa", "Is the tip included?"],
            ["on the house", "quán tặng, miễn phí", "The dessert is on the house."],
            ["a la carte", "gọi lẻ từng món", "Can we order à la carte?"]
          ]
        },
        {
          "t": "Nâng cấp câu nói",
          "k": "table",
          "h": ["Câu cơ bản", "Câu nâng cấp", "Ý nghĩa"],
          "r": [
            ["I want pasta.", "I’m craving pasta.", "Tôi đang thèm mì Ý"],
            ["I’ll have the soup.", "I’ll go for the soup.", "Tôi chọn món súp"],
            ["It’s very good.", "It’s absolutely delicious!", "Ngon tuyệt vời"],
            ["It’s very hot.", "It’s piping hot.", "Nóng hổi"],
            ["I pay for you.", "It’s on me.", "Để tôi mời"],
            ["Thank you, chef.", "My compliments to the chef.", "Gửi lời khen đến đầu bếp"]
          ]
        },
        {
          "t": "Cụm giúp cuộc trò chuyện trôi chảy",
          "k": "phr",
          "r": [
            ["Could we get a table by the window?", "Cho chúng tôi bàn cạnh cửa sổ được không?"],
            ["What would you recommend?", "Bạn gợi ý món nào?"],
            ["Is this dish spicy?", "Món này có cay không?"],
            ["I’ll have the same, please.", "Cho tôi món giống vậy"],
            ["Everything was delicious, thank you.", "Mọi thứ đều rất ngon, cảm ơn"],
            ["Could we split the bill?", "Chúng tôi chia hóa đơn được không?"],
            ["Keep the change.", "Không cần thối lại"]
          ]
        }
      ],
      "bad": "This food not good. I want pay.",
      "good": "The soup is a bit bland. Could we have the bill, please?",
      "tip": "💡Mẹo: mỗi ngày chọn 2 từ mới và dùng thử trong một câu về món bạn vừa ăn. Dùng thật sẽ nhớ lâu hơn học thuộc lòng."
    },
    {
      "f": "Shopping.html",
      "e": "🛍️",
      "n": "Shopping",
      "g": "Ăn uống & Mua sắm",
      "sec": "Thêm vài từ này, câu chuyện mua sắm của bạn sẽ giống người bản xứ hơn",
      "sub": [
        {
          "t": "Trong cửa hàng",
          "k": "table",
          "h": ["Từ / cụm", "Nghĩa", "Ví dụ"],
          "r": [
            ["cashier / checkout", "thu ngân / quầy tính tiền", "Please pay at the checkout."],
            ["out of stock", "hết hàng", "Sorry, that size is out of stock."],
            ["in stock", "còn hàng", "Is this model in stock?"],
            ["brand", "thương hiệu", "What brand is this?"],
            ["price tag", "nhãn giá", "There’s no price tag on this one."],
            ["buy one, get one free", "mua một tặng một", "These T-shirts are buy one, get one free."],
            ["loyalty card", "thẻ thành viên", "Do you have a loyalty card?"],
            ["return policy", "chính sách đổi trả", "What’s your return policy?"]
          ]
        },
        {
          "t": "Thói quen và cảm nhận khi mua sắm",
          "k": "table",
          "h": ["Từ / cụm", "Nghĩa", "Ví dụ"],
          "r": [
            ["window shopping", "đi ngắm đồ, không mua", "We just went window shopping."],
            ["a good deal / a bargain", "món hời", "Only ninety thousand? That’s a bargain!"],
            ["a rip-off", "bị chặt chém, quá đắt", "Five dollars for water? What a rip-off!"],
            ["afford", "đủ tiền mua", "I can’t afford it right now."],
            ["impulse buy", "mua theo cảm hứng", "This bag was an impulse buy."],
            ["shop online", "mua sắm trực tuyến", "I usually shop online."]
          ]
        },
        {
          "t": "Cụm giúp cuộc trò chuyện trôi chảy",
          "k": "phr",
          "r": [
            ["I’ll think about it.", "Để tôi suy nghĩ thêm (từ chối nhẹ nhàng)"],
            ["It’s not really my style.", "Không hợp gu tôi lắm"],
            ["Does it suit me?", "Cái này có hợp với tôi không?"],
            ["That looks great on you!", "Bạn mặc cái đó đẹp lắm!"],
            ["Is this the final price?", "Đây là giá cuối chưa?"],
            ["Could you wrap it as a gift?", "Gói quà giúp tôi được không?"],
            ["I’m on a budget.", "Tôi đang phải tiết kiệm"]
          ]
        }
      ],
      "bad": "No. Expensive. I don’t buy.",
      "good": "It’s a bit out of my budget. I’ll think about it, thanks.",
      "tip": "💡Mẹo: I’ll think about it là cách từ chối lịch sự khi bạn không muốn mua. Người bán sẽ hiểu và không ép thêm."
    },
    {
      "f": "ask-for-directions.html",
      "e": "🧭",
      "n": "Hỏi đường & Hỏi giờ",
      "g": "Đi lại & Hỗ trợ",
      "sec": "Thêm vài từ này, câu nói của bạn sẽ giống người bản xứ hơn",
      "sub": [
        {
          "t": "Về đường đi",
          "k": "table",
          "h": ["Từ / cụm", "Nghĩa", "Ví dụ"],
          "r": [
            ["intersection", "ngã tư", "Turn right at the next intersection."],
            ["roundabout", "bùng binh", "Take the second exit at the roundabout."],
            ["crosswalk", "vạch qua đường", "Use the crosswalk to cross the street."],
            ["landmark", "địa danh dễ nhận biết", "The tall tower is a good landmark."],
            ["dead end", "đường cụt", "Don’t go that way. It’s a dead end."],
            ["shortcut", "đường tắt", "There’s a shortcut through the park."],
            ["pedestrian", "người đi bộ", "This street is for pedestrians only."],
            ["detour", "đường vòng", "The road is closed, so we need a detour."]
          ]
        },
        {
          "t": "Về thời gian",
          "k": "table",
          "h": ["Từ / cụm", "Nghĩa", "Ví dụ"],
          "r": [
            ["on time", "đúng giờ", "The train arrived on time."],
            ["in a hurry", "đang vội", "Sorry, I’m in a hurry."],
            ["schedule", "lịch trình", "What’s the bus schedule?"],
            ["departure / arrival", "giờ khởi hành / đến", "The departure time is nine o’clock."],
            ["delayed", "bị hoãn, trễ", "My flight is delayed."],
            ["appointment", "cuộc hẹn", "I have an appointment at ten."]
          ]
        },
        {
          "t": "Cụm giúp cuộc trò chuyện trôi chảy",
          "k": "phr",
          "r": [
            ["Could you speak more slowly?", "Bạn nói chậm hơn được không?"],
            ["Could you repeat that, please?", "Bạn lặp lại giúp tôi được không?"],
            ["Do you mind showing me on the map?", "Phiền bạn chỉ giúp trên bản đồ được không?"],
            ["Am I going the right way?", "Tôi đi đúng đường chưa?"],
            ["I think I took a wrong turn.", "Tôi nghĩ mình đã rẽ nhầm"],
            ["How far is it by taxi?", "Đi taxi thì xa bao nhiêu?"],
            ["I really appreciate your help.", "Tôi rất biết ơn sự giúp đỡ của bạn"]
          ]
        }
      ],
      "bad": "Tell me the time!",
      "good": "Could you tell me the time, please?",
      "tip": ""
    },
    {
      "f": "Asking-for-Directions-v2.html",
      "e": "🗺️",
      "n": "Asking for Directions",
      "g": "Đi lại & Hỗ trợ",
      "sec": "Những từ bổ sung, không trùng với phần nâng cao của bài Hỏi đường & Hỏi giờ",
      "sub": [
        {
          "t": "Đường phố và giao thông",
          "k": "table",
          "h": ["Từ / cụm", "Nghĩa", "Ví dụ"],
          "r": [
            ["alley / lane", "ngõ, hẻm", "The café is at the end of a small alley."],
            ["block", "dãy nhà giữa hai ngã tư", "It’s three blocks from here."],
            ["junction", "chỗ giao nhau, ngã ba", "Turn left at the next junction."],
            ["one-way street", "đường một chiều", "You can’t drive there. It’s a one-way street."],
            ["make a U-turn", "quay đầu xe", "Make a U-turn at the next traffic lights."],
            ["overpass / underpass", "cầu vượt / hầm chui", "Use the overpass to cross the main road."],
            ["bear left / bear right", "đi chếch sang trái / phải", "Bear right at the fork in the road."],
            ["signpost", "biển chỉ đường", "Look for the signpost to the old town."]
          ]
        },
        {
          "t": "Bản đồ và định vị",
          "k": "table",
          "h": ["Từ / cụm", "Nghĩa", "Ví dụ"],
          "r": [
            ["drop a pin", "gửi ghim vị trí", "Can you drop me a pin?"],
            ["get lost", "bị lạc", "I always get lost in the Old Quarter."],
            ["north / south / east / west", "bắc / nam / đông / tây", "The lake is to the north of the city center."],
            ["the entrance / the exit", "lối vào / lối ra", "Meet me at the main entrance."],
            ["walking distance", "khoảng cách đi bộ được", "The hotel is within walking distance of the beach."],
            ["a stone’s throw from", "rất gần (một quãng ném đá)", "My house is a stone’s throw from the market."]
          ]
        },
        {
          "t": "Cụm giúp cuộc trò chuyện trôi chảy",
          "k": "phr",
          "r": [
            ["I’m hopeless with directions.", "Tôi rất kém nhớ đường"],
            ["I’m not from around here, sorry.", "Xin lỗi, tôi không phải người ở đây"],
            ["I’m heading that way. I can show you.", "Tôi cũng đi hướng đó. Để tôi dẫn bạn đi"],
            ["It’s easy to miss, so look carefully.", "Chỗ đó dễ đi lố lắm, nhìn kỹ nhé"],
            ["If you get to the river, you’ve gone too far.", "Nếu thấy sông là bạn đi quá rồi đấy"],
            ["You’re almost there.", "Bạn sắp đến nơi rồi"],
            ["Thanks, you’ve been really helpful!", "Cảm ơn, bạn giúp tôi nhiều lắm!"]
          ]
        }
      ],
      "bad": "Bank where? Go how?",
      "good": "Excuse me, I’m a bit lost. Do you know where the nearest bank is?",
      "tip": "💡Mẹo: khi chỉ đường cho người khác, nói thêm một câu “nếu đi quá”, ví dụ “If you see the river, you’ve gone too far.” Người nghe sẽ biết chắc mình có đi đúng không."
    },
    {
      "f": "Asking-for-Help.html",
      "e": "🆘",
      "n": "Asking for Help",
      "g": "Đi lại & Hỗ trợ",
      "sec": "Thêm vài từ này, lời nhờ và lời cảm ơn của bạn sẽ tự nhiên hơn",
      "sub": [
        {
          "t": "Nhờ vả và giúp đỡ",
          "k": "table",
          "h": ["Từ / cụm", "Nghĩa", "Ví dụ"],
          "r": [
            ["give someone a hand", "giúp ai một tay", "Can you give me a hand with these boxes?"],
            ["do someone a favor", "giúp ai một việc", "Could you do me a big favor?"],
            ["figure out", "tìm ra cách, hiểu ra", "I can’t figure out how this works."],
            ["sort out", "giải quyết ổn thỏa", "Don’t worry, we’ll sort it out."],
            ["get stuck", "bị kẹt, bí", "I got stuck on the last question."],
            ["out of order", "hỏng, không hoạt động (máy công cộng)", "The ticket machine is out of order."],
            ["walk someone through", "hướng dẫn ai từng bước", "Could you walk me through it?"],
            ["look after", "trông giúp", "Could you look after my bag for a minute?"]
          ]
        },
        {
          "t": "Cảm ơn và đáp lại",
          "k": "table",
          "h": ["Từ / cụm", "Nghĩa", "Ví dụ"],
          "r": [
            ["I owe you one", "tôi nợ bạn một lần", "Thanks for covering for me. I owe you one."],
            ["You’re a lifesaver", "bạn đúng là cứu tinh", "You found my keys? You’re a lifesaver!"],
            ["That’s very kind of you", "bạn tốt quá", "That’s very kind of you. Thank you."],
            ["Don’t mention it", "có gì đâu mà", "Don’t mention it. Happy to help."],
            ["My pleasure", "rất hân hạnh (lịch sự)", "It was my pleasure."]
          ]
        },
        {
          "t": "Cụm giúp cuộc trò chuyện trôi chảy",
          "k": "phr",
          "r": [
            ["I hate to ask, but could you…?", "Ngại nhờ quá, nhưng bạn có thể…?"],
            ["It’ll only take a minute.", "Chỉ mất một phút thôi"],
            ["I’m at a loss here.", "Tôi bó tay rồi"],
            ["Is there anything I can do to help?", "Tôi có thể giúp gì không?"],
            ["Don’t hesitate to ask.", "Cứ hỏi đừng ngại"],
            ["Two heads are better than one.", "Hai người nghĩ vẫn hơn một"],
            ["Let me know if there’s anything else.", "Còn gì cần thì báo tôi nhé"]
          ]
        }
      ],
      "bad": "You! Help me. Machine broken.",
      "good": "Excuse me, sorry to bother you. This machine doesn’t seem to work. Could you help me?",
      "tip": "💡Mẹo: công thức nhờ giúp hiệu quả là xin lỗi làm phiền + nói vấn đề + nhờ một việc cụ thể. Người nghe sẽ hiểu ngay bạn cần gì, và thường sẵn lòng giúp hơn."
    },
    {
      "f": "Health-and-Doctor.html",
      "e": "🩺",
      "n": "Health & Doctor",
      "g": "Đi lại & Hỗ trợ",
      "sec": "Tả triệu chứng chính xác hơn và nói về sức khỏe như người bản xứ",
      "sub": [
        {
          "t": "Triệu chứng chi tiết",
          "k": "table",
          "h": ["Từ / cụm", "Nghĩa", "Ví dụ"],
          "r": [
            ["nauseous", "buồn nôn", "I feel nauseous after eating."],
            ["a blocked nose", "nghẹt mũi", "I have a blocked nose and can’t smell anything."],
            ["a rash", "phát ban", "I have a rash on my arm."],
            ["itchy", "ngứa", "My skin is really itchy."],
            ["swollen", "sưng", "My ankle is swollen."],
            ["sprain", "bong gân", "I sprained my ankle playing football."],
            ["a sharp pain / a dull pain", "đau nhói / đau âm ỉ", "I have a sharp pain in my chest."],
            ["an allergic reaction", "phản ứng dị ứng", "I think it’s an allergic reaction to seafood."]
          ]
        },
        {
          "t": "Khám chữa và dùng thuốc",
          "k": "table",
          "h": ["Từ / cụm", "Nghĩa", "Ví dụ"],
          "r": [
            ["over-the-counter", "thuốc không cần đơn", "You can buy it over the counter."],
            ["dosage", "liều dùng", "Please check the dosage on the box."],
            ["side effects", "tác dụng phụ", "The side effects are usually mild."],
            ["a check-up", "khám sức khỏe định kỳ", "I go for a check-up every year."],
            ["a follow-up appointment", "lịch tái khám", "Let’s book a follow-up appointment next week."],
            ["contagious", "dễ lây", "Is it contagious?"],
            ["recover / get over", "hồi phục / khỏi", "It took me a week to get over the flu."]
          ]
        },
        {
          "t": "Thành ngữ về sức khỏe",
          "k": "phr",
          "r": [
            ["I’m feeling a bit under the weather.", "Tôi thấy hơi khó ở / không được khỏe"],
            ["I think I’m coming down with something.", "Hình như tôi sắp ốm"],
            ["I’m feeling run-down lately.", "Dạo này tôi thấy kiệt sức"],
            ["I’m on the mend.", "Tôi đang đỡ dần rồi"],
            ["Take it easy and get plenty of rest.", "Cứ thong thả và nghỉ ngơi nhiều vào"],
            ["I’m back on my feet now.", "Giờ tôi khỏe lại rồi"],
            ["Get well soon!", "Chúc mau khỏe!"]
          ]
        }
      ],
      "bad": "I am sick. My body is not good. I am pain in stomach two days.",
      "good": "I’m feeling under the weather. I’ve had a dull pain in my stomach for two days, and I feel a bit nauseous after meals.",
      "tip": "💡Mẹo: khi đi khám, hãy chuẩn bị trước ba ý: đau ở đâu, từ khi nào, nặng thế nào (thang 1–10). Bác sĩ nào cũng sẽ hỏi ba điều này."
    },
    {
      "f": "Transportation.html",
      "e": "🚌",
      "n": "Transportation",
      "g": "Đi lại & Hỗ trợ",
      "sec": "Thêm vài từ này, câu nói về đi lại của bạn sẽ giống người bản xứ hơn",
      "sub": [
        {
          "t": "Đi lại và giao thông",
          "k": "table",
          "h": ["Từ / cụm", "Nghĩa", "Ví dụ"],
          "r": [
            ["commute", "quãng đường đi làm hằng ngày", "My commute is about forty minutes."],
            ["rush hour", "giờ cao điểm", "Avoid the main roads during rush hour."],
            ["ride-hailing app", "ứng dụng gọi xe", "I usually use a ride-hailing app."],
            ["pick up / drop off", "đón / thả khách", "Can you drop me off at the corner?"],
            ["catch / miss", "bắt kịp / lỡ (xe, tàu)", "I need to catch the six o’clock train."],
            ["give someone a lift / ride", "cho ai đi nhờ", "Can you give me a lift to the station?"],
            ["parking lot / car park", "bãi đỗ xe (Mỹ / Anh)", "Is there a car park nearby?"]
          ]
        },
        {
          "t": "Bay và đi xa",
          "k": "table",
          "h": ["Từ / cụm", "Nghĩa", "Ví dụ"],
          "r": [
            ["direct flight", "chuyến bay thẳng", "Is there a direct flight to Seoul?"],
            ["layover / stopover", "quá cảnh", "We have a three-hour layover in Bangkok."],
            ["carry-on", "hành lý xách tay", "I only have a carry-on."],
            ["baggage claim", "khu nhận hành lý", "Let’s meet at baggage claim."],
            ["jet lag", "mệt do lệch múi giờ", "I still have jet lag."],
            ["carsick / seasick", "say xe / say sóng", "I get carsick on long bus trips."]
          ]
        },
        {
          "t": "Cụm giúp cuộc trò chuyện trôi chảy",
          "k": "phr",
          "r": [
            ["I’m running late. I’ll be there in ten minutes.", "Tôi đang trễ. 10 phút nữa tôi đến"],
            ["What’s the best way to get there?", "Đến đó bằng cách nào tiện nhất?"],
            ["It’s within walking distance.", "Đi bộ được"],
            ["It’s quicker to take the metro.", "Đi metro nhanh hơn"],
            ["Have a safe trip!", "Thượng lộ bình an!"],
            ["Text me when you get there.", "Đến nơi thì nhắn tôi nhé"],
            ["Let’s split the taxi fare.", "Mình chia nhau tiền taxi nhé"]
          ]
        }
      ],
      "bad": "I go by bus. Bus late. I late.",
      "good": "Sorry, I missed the bus and the traffic is terrible. I’ll be there in about fifteen minutes.",
      "tip": "💡Mẹo: travel là động từ (đi du lịch, đi lại), còn trip là danh từ chỉ một chuyến đi. Nói Have a nice trip!, không nói Have a nice travel!"
    },
    {
      "f": "Travel.html",
      "e": "✈️",
      "n": "Travel",
      "g": "Đi lại & Hỗ trợ",
      "sec": "Thêm vài từ này, bạn sẽ nói chuyện du lịch như một người hay đi xa",
      "sub": [
        {
          "t": "Kiểu du lịch",
          "k": "table",
          "h": ["Từ / cụm", "Nghĩa", "Ví dụ"],
          "r": [
            ["itinerary", "lịch trình", "Can you send me the itinerary?"],
            ["backpacking", "du lịch bụi", "I went backpacking around Southeast Asia."],
            ["budget travel", "du lịch tiết kiệm", "Hostels are great for budget travel."],
            ["homestay", "ở nhà dân", "We stayed at a homestay in Ha Giang."],
            ["all-inclusive", "trọn gói (ăn uống, dịch vụ)", "It’s an all-inclusive resort."],
            ["travel light", "đi gọn nhẹ", "I always travel light with just a backpack."],
            ["day trip", "chuyến đi trong ngày", "We took a day trip to Ninh Binh."]
          ]
        },
        {
          "t": "Trải nghiệm và cảm nhận",
          "k": "table",
          "h": ["Từ / cụm", "Nghĩa", "Ví dụ"],
          "r": [
            ["hidden gem", "nơi đẹp ít người biết", "This little café is a hidden gem."],
            ["tourist trap", "nơi chặt chém khách du lịch", "Avoid that street. It’s a tourist trap."],
            ["off the beaten track", "nơi ít khách du lịch", "I prefer places off the beaten track."],
            ["culture shock", "sốc văn hóa", "I had a bit of culture shock at first."],
            ["bucket list", "danh sách điều muốn làm trong đời", "Visiting Iceland is on my bucket list."],
            ["wanderlust", "niềm khao khát đi xa", "I have serious wanderlust."]
          ]
        },
        {
          "t": "Cụm giúp cuộc trò chuyện trôi chảy",
          "k": "phr",
          "r": [
            ["It was the trip of a lifetime.", "Đó là chuyến đi đáng nhớ nhất đời"],
            ["I’ve caught the travel bug.", "Tôi nghiện đi du lịch mất rồi"],
            ["Is it very touristy?", "Chỗ đó có đông khách du lịch quá không?"],
            ["Any tips for first-time visitors?", "Có mẹo gì cho người lần đầu đến không?"],
            ["Where do locals usually eat?", "Người địa phương hay ăn ở đâu?"],
            ["Have a safe trip and enjoy yourself!", "Đi đường bình an và vui vẻ nhé!"],
            ["Send me some photos!", "Gửi ảnh cho mình xem với!"]
          ]
        }
      ],
      "bad": "Last year I have go Japan. Very good.",
      "good": "I went to Japan last year. It was the trip of a lifetime. I’ve definitely caught the travel bug!",
      "tip": "💡Mẹo: travel thường là động từ hoặc nói chung về việc đi lại, còn trip là một chuyến đi cụ thể. Nói How was your trip?, không nói How was your travel?"
    },
    {
      "f": "At-the-Hotel.html",
      "e": "🏨",
      "n": "At the Hotel",
      "g": "Đi lại & Hỗ trợ",
      "sec": "Những từ dân đi du lịch và nhân viên khách sạn dùng hằng ngày",
      "sub": [
        {
          "t": "Đặt phòng và giá",
          "k": "table",
          "h": ["Từ / cụm", "Nghĩa", "Ví dụ"],
          "r": [
            ["fully booked / no vacancies", "hết phòng", "Sorry, we’re fully booked tonight."],
            ["rate", "giá phòng", "What’s the rate for a suite?"],
            ["deposit", "tiền đặt cọc", "We need a deposit of fifty dollars."],
            ["non-refundable", "không hoàn tiền", "This rate is non-refundable."],
            ["cancellation policy", "chính sách hủy phòng", "What’s your cancellation policy?"],
            ["complimentary", "miễn phí (tặng kèm)", "The water in the room is complimentary."],
            ["upgrade", "nâng hạng phòng", "Is there any chance of an upgrade?"],
            ["overcharge", "tính tiền quá mức", "I think I was overcharged."]
          ]
        },
        {
          "t": "Bộ phận và dịch vụ khách sạn",
          "k": "table",
          "h": ["Từ / cụm", "Nghĩa", "Ví dụ"],
          "r": [
            ["front desk / reception", "quầy lễ tân", "Please call the front desk."],
            ["housekeeping", "bộ phận buồng phòng", "Housekeeping comes at ten."],
            ["maintenance", "bộ phận kỹ thuật, sửa chữa", "I’ll call maintenance for you."],
            ["concierge", "nhân viên hỗ trợ khách (đặt tour, vé)", "Ask the concierge to book a tour."],
            ["amenities", "tiện nghi", "The hotel has great amenities."],
            ["turndown service", "dọn giường buổi tối", "Would you like turndown service?"],
            ["charge it to my room", "tính vào tiền phòng", "Could you charge it to my room?"]
          ]
        },
        {
          "t": "Cụm giúp cuộc trò chuyện trôi chảy",
          "k": "phr",
          "r": [
            ["I’ll be checking out a day early.", "Tôi sẽ trả phòng sớm một ngày"],
            ["Could I extend my stay for one more night?", "Tôi ở thêm một đêm được không?"],
            ["I’d prefer a room on a higher floor, away from the lift.", "Tôi thích phòng tầng cao, xa thang máy"],
            ["Please don’t disturb. I’ll put the sign on the door.", "Xin đừng làm phiền, tôi sẽ treo biển ngoài cửa"],
            ["The room was spotless, and the staff were really helpful.", "Phòng sạch bong, nhân viên rất nhiệt tình"],
            ["I really appreciate your help.", "Tôi rất cảm kích sự giúp đỡ của anh/chị"]
          ]
        }
      ],
      "bad": "Room 512. Air con broken. Too hot. Fix now. Change room.",
      "good": "Hi, this is room five-twelve. Sorry to bother you, but the air conditioner isn’t working and it’s really hot. Could you send someone up, or move me to another room if that’s easier?",
      "tip": "💡Mẹo: nhân viên khách sạn thường nói rất lịch sự (Certainly, Of course, I do apologize). Bạn đáp lại cũng lịch sự bằng Could you…? và Thank you so much, kể cả khi đang phàn nàn. Vấn đề thường được xử lý nhanh hơn."
    },
    {
      "f": "conversation-phone.html",
      "e": "📞",
      "n": "Giao tiếp qua điện thoại",
      "g": "Đi lại & Hỗ trợ",
      "sec": "Thêm vài từ này, bạn sẽ gọi điện tự tin và chuyên nghiệp hơn",
      "sub": [
        {
          "t": "Động từ cụm khi gọi điện",
          "k": "table",
          "h": ["Từ / cụm", "Nghĩa", "Ví dụ"],
          "r": [
            ["pick up", "nhấc máy", "I called three times, but nobody picked up."],
            ["hang up", "cúp máy", "Don’t hang up! I have one more question."],
            ["call back", "gọi lại", "Can you call me back in ten minutes?"],
            ["put on hold", "bắt chờ máy", "They put me on hold for twenty minutes."],
            ["get through", "gọi được, kết nối được", "I finally got through to customer service."],
            ["get cut off", "bị rớt cuộc gọi", "Sorry, we got cut off."]
          ]
        },
        {
          "t": "Điện thoại và cuộc gọi",
          "k": "table",
          "h": ["Từ / cụm", "Nghĩa", "Ví dụ"],
          "r": [
            ["missed call", "cuộc gọi nhỡ", "I have three missed calls from you."],
            ["voicemail", "hộp thư thoại", "I left you a voicemail."],
            ["extension", "số máy lẻ", "My extension is two oh four."],
            ["landline", "điện thoại bàn", "Do you have a landline number?"],
            ["reception / signal", "sóng điện thoại", "There’s no reception in the basement."],
            ["speakerphone", "loa ngoài", "I’m putting you on speakerphone."],
            ["my battery is dying", "điện thoại sắp hết pin", "Sorry, my battery is dying. I’ll text you."]
          ]
        },
        {
          "t": "Cụm giúp cuộc trò chuyện trôi chảy",
          "k": "phr",
          "r": [
            ["Sorry, I think you have the wrong number.", "Xin lỗi, hình như bạn gọi nhầm số"],
            ["I’ll keep it short.", "Tôi sẽ nói ngắn gọn"],
            ["Let me grab a pen.", "Để tôi lấy bút ghi"],
            ["Sorry, I missed your call.", "Xin lỗi, tôi lỡ cuộc gọi của bạn"],
            ["Can I put you on hold for a second?", "Bạn chờ máy một chút được không?"],
            ["Thanks for holding.", "Cảm ơn đã chờ máy"],
            ["It was good to hear your voice.", "Nghe được giọng bạn vui thật"]
          ]
        }
      ],
      "bad": "Alo. Tom there? Me Linh. Call me.",
      "good": "Hi, this is Linh. Is Tom there? If not, could you ask him to call me back?",
      "tip": "💡Mẹo: trước khi gọi, viết ra 3 dòng: mình là ai, gọi để làm gì, cần người kia làm gì. Luôn để sẵn giấy bút để ghi tên, số và giờ hẹn, rồi đọc lại cho người kia kiểm tra."
    },
    {
      "f": "Likes-and-Hobbies.html",
      "e": "🎨",
      "n": "Likes & Hobbies",
      "g": "Sở thích & Giải trí",
      "sec": "Thay like và don’t like bằng những cách nói sinh động hơn",
      "sub": [
        {
          "t": "Cách nói “thích” sinh động",
          "k": "table",
          "h": ["Từ / cụm", "Nghĩa", "Ví dụ"],
          "r": [
            ["be into", "mê, đang thích", "I’m really into board games right now."],
            ["be keen on", "hứng thú với", "She’s keen on learning Japanese."],
            ["be a big fan of", "là fan lớn của", "I’m a big fan of detective stories."],
            ["be crazy about", "phát cuồng vì", "My son is crazy about dinosaurs."],
            ["be passionate about", "đam mê", "He’s passionate about photography."],
            ["get hooked on", "bị nghiện, mê mẩn", "I got hooked on this drama last week."],
            ["take up", "bắt đầu một sở thích mới", "I’ve recently taken up pottery."],
            ["unwind", "xả hơi, thư giãn", "Gardening helps me unwind after work."]
          ]
        },
        {
          "t": "Cách nói “không thích” nhẹ nhàng và từ chỉ người",
          "k": "table",
          "h": ["Từ / cụm", "Nghĩa", "Ví dụ"],
          "r": [
            ["not my cup of tea", "không phải gu của tôi", "Jazz isn’t really my cup of tea."],
            ["not my thing", "không hợp với tôi", "Camping is not my thing."],
            ["give up", "bỏ (một sở thích)", "I gave up the piano when I was ten."],
            ["a bookworm", "mọt sách", "I’m a bit of a bookworm."],
            ["a foodie", "người sành ăn", "As a foodie, I love trying new restaurants."],
            ["a couch potato", "người lười, suốt ngày ngồi xem tivi", "On Sundays, I’m a total couch potato."],
            ["a pastime", "thú tiêu khiển", "Fishing is a popular pastime here."]
          ]
        },
        {
          "t": "Cụm giúp cuộc trò chuyện trôi chảy",
          "k": "phr",
          "r": [
            ["What got you into it?", "Điều gì khiến bạn mê nó?"],
            ["I’ve always wanted to try that!", "Tôi luôn muốn thử cái đó!"],
            ["We have a lot in common.", "Chúng ta có nhiều điểm chung"],
            ["Each to their own.", "Mỗi người một sở thích"],
            ["It’s a great way to kill time.", "Đó là cách giết thời gian tuyệt vời"],
            ["You should give it a try!", "Bạn nên thử đi!"]
          ]
        }
      ],
      "bad": "I like read. I like cook. I don’t like sport. My hobby is like music.",
      "good": "I’m a bit of a bookworm, and I’m really into cooking. Sports aren’t really my thing, but I’ve recently taken up yoga. It helps me unwind.",
      "tip": "💡Mẹo: sau khi trả lời, hãy hỏi lại “How about you?” hoặc “What got you into it?”. Hỏi tiếp một câu là cách nhanh nhất để cuộc trò chuyện không bị đứt."
    },
    {
      "f": "Weekend-Activities.html",
      "e": "🎉",
      "n": "Weekend Activities",
      "g": "Sở thích & Giải trí",
      "sec": "Thêm vài từ này, câu chuyện cuối tuần của bạn sẽ sinh động hơn",
      "sub": [
        {
          "t": "Nghỉ ngơi và vui chơi",
          "k": "table",
          "h": ["Từ / cụm", "Nghĩa", "Ví dụ"],
          "r": [
            ["have a lie-in", "ngủ nướng (kiểu Anh)", "I had a long lie-in on Sunday."],
            ["chill out", "xả hơi, thư giãn", "I just chilled out at home."],
            ["recharge", "nạp lại năng lượng", "I need a quiet weekend to recharge."],
            ["me-time", "thời gian cho riêng mình", "Sunday morning is my me-time."],
            ["brunch", "bữa sáng muộn gộp bữa trưa", "Let’s meet for brunch on Sunday."],
            ["staycation", "kỳ nghỉ ở ngay thành phố mình", "We had a staycation at a nice hotel in town."],
            ["weekend getaway", "chuyến đi ngắn cuối tuần", "Tam Dao is perfect for a weekend getaway."],
            ["long weekend", "cuối tuần dài (có thêm ngày nghỉ)", "It’s a long weekend, so we’re going to the beach."]
          ]
        },
        {
          "t": "Việc vặt và tâm trạng",
          "k": "table",
          "h": ["Từ / cụm", "Nghĩa", "Ví dụ"],
          "r": [
            ["run errands", "chạy việc vặt", "I spent Saturday running errands."],
            ["catch up on sleep", "ngủ bù", "I caught up on sleep this weekend."],
            ["couch potato", "người chỉ nằm dài xem TV", "I was a total couch potato on Sunday."],
            ["Monday blues", "uể oải đầu tuần", "I’ve got the Monday blues today."],
            ["TGIF", "ơn trời, thứ Sáu rồi! (Thank God it’s Friday)", "TGIF! Any plans?"],
            ["fly by", "trôi qua rất nhanh", "The weekend flew by."]
          ]
        },
        {
          "t": "Cụm giúp cuộc trò chuyện trôi chảy",
          "k": "phr",
          "r": [
            ["Did you get up to anything fun?", "Bạn có làm gì vui không?"],
            ["I didn’t do much, to be honest.", "Nói thật là tôi chẳng làm gì nhiều"],
            ["It was nice to have a quiet one.", "Được một cuối tuần yên tĩnh cũng hay"],
            ["I needed that break.", "Tôi đang cần được nghỉ như vậy"],
            ["Can’t wait for the weekend!", "Mong đến cuối tuần quá!"],
            ["Have a great weekend!", "Cuối tuần vui vẻ nhé!"],
            ["You too!", "Bạn cũng vậy nhé!"]
          ]
        }
      ],
      "bad": "Weekend? I at home. Nothing.",
      "good": "I didn’t do much, to be honest. I had a lie-in and caught up on my favorite series. It was nice to have a quiet one.",
      "tip": "💡Mẹo: khi được hỏi “How was your weekend?”, đừng chỉ trả lời “Good”. Thêm một việc cụ thể và hỏi lại “How about yours?”, cuộc trò chuyện sẽ tự nhiên tiếp tục."
    },
    {
      "f": "Invitations.html",
      "e": "💌",
      "n": "Invitations",
      "g": "Sở thích & Giải trí",
      "sec": "Những từ hay gặp trên thiệp mời, tin nhắn và trong bữa tiệc",
      "sub": [
        {
          "t": "Thiệp mời và sự kiện",
          "k": "table",
          "h": ["Từ / cụm", "Nghĩa", "Ví dụ"],
          "r": [
            ["RSVP", "vui lòng phản hồi (có đến hay không)", "Please RSVP by Friday."],
            ["save the date", "hãy dành ngày này", "Save the date: our wedding is on June 5th."],
            ["a plus-one", "người đi cùng", "Can I bring a plus-one?"],
            ["dress code", "quy định trang phục", "The dress code is smart casual."],
            ["black tie", "trang phục dạ tiệc", "It’s a black-tie event."],
            ["a potluck", "tiệc mỗi người góp một món", "It’s a potluck, so bring a dish."],
            ["a get-together", "buổi tụ tập", "We’re having a small get-together."],
            ["host / guest", "chủ nhà / khách", "She’s a wonderful host."]
          ]
        },
        {
          "t": "Nhận lời, từ chối và ghé thăm",
          "k": "table",
          "h": ["Từ / cụm", "Nghĩa", "Ví dụ"],
          "r": [
            ["count me in / count me out", "tính cả mình / không tính mình", "A karaoke night? Count me in!"],
            ["take a rain check", "hẹn dịp khác", "Can I take a rain check? I’m exhausted tonight."],
            ["make it", "đến được", "I’m so glad you could make it."],
            ["turn down", "từ chối", "I had to turn down the invitation."],
            ["drop by / swing by", "ghé qua", "Feel free to drop by after work."],
            ["a last-minute invitation", "lời mời phút chót", "Sorry for the last-minute invitation!"],
            ["bring a bottle", "mang theo đồ uống", "Just bring a bottle if you like."]
          ]
        },
        {
          "t": "Cụm giúp cuộc trò chuyện trôi chảy",
          "k": "phr",
          "r": [
            ["It wouldn’t be the same without you.", "Thiếu bạn thì không vui bằng"],
            ["I wouldn’t miss it for the world!", "Có trời sập mình cũng đến!"],
            ["Thanks for thinking of me.", "Cảm ơn đã nghĩ đến mình"],
            ["Maybe another time?", "Hẹn dịp khác nhé?"],
            ["You shouldn’t have! (khi nhận quà)", "Bạn bày vẽ quá!"],
            ["We must do this again sometime.", "Hôm nào mình lại tụ tập nhé"]
          ]
        }
      ],
      "bad": "No. I cannot come your party. I busy.",
      "good": "Thanks so much for thinking of me! I’m afraid I can’t make it this time, but can I take a rain check? Have a fantastic night!",
      "tip": "💡Mẹo: với thiệp mời có chữ RSVP, hãy trả lời trước hạn kể cả khi bạn không đến. Đó là phép lịch sự để chủ nhà chuẩn bị đồ ăn và chỗ ngồi."
    },
    {
      "f": "Sports.html",
      "e": "⚽",
      "n": "Sports",
      "g": "Sở thích & Giải trí",
      "sec": "Thêm vài từ này, bạn sẽ bàn thể thao như một fan thực thụ",
      "sub": [
        {
          "t": "Thi đấu và giải đấu",
          "k": "table",
          "h": ["Từ / cụm", "Nghĩa", "Ví dụ"],
          "r": [
            ["coach", "huấn luyện viên", "The coach made a great decision."],
            ["referee", "trọng tài", "The referee gave a penalty."],
            ["tournament / league", "giải đấu / giải vô địch theo mùa", "They’re top of the league."],
            ["opponent", "đối thủ", "Our opponent was very strong."],
            ["penalty", "phạt đền", "He missed the penalty."],
            ["extra time", "hiệp phụ", "The match went to extra time."],
            ["underdog", "đội cửa dưới", "Everyone loves an underdog."],
            ["hat-trick", "cú hat-trick (ghi 3 bàn)", "He scored a hat-trick!"]
          ]
        },
        {
          "t": "Thể lực và tập luyện",
          "k": "table",
          "h": ["Từ / cụm", "Nghĩa", "Ví dụ"],
          "r": [
            ["out of shape", "xuống phong độ, kém dáng", "I’m so out of shape."],
            ["out of breath", "hụt hơi", "I was out of breath after five minutes."],
            ["stamina", "sức bền", "Running helps build stamina."],
            ["sprain", "bong gân", "I sprained my ankle."],
            ["personal best", "thành tích tốt nhất của bản thân", "I set a new personal best today!"],
            ["sore muscles", "đau mỏi cơ", "My muscles are sore after yesterday’s workout."]
          ]
        },
        {
          "t": "Cụm giúp cuộc trò chuyện trôi chảy",
          "k": "phr",
          "r": [
            ["Good game!", "Trận hay! (nói với đối thủ sau trận)"],
            ["Well played!", "Chơi hay lắm!"],
            ["That was a close match.", "Trận đấu sít sao thật"],
            ["It’s anyone’s game.", "Đội nào cũng có thể thắng"],
            ["Who are you rooting for?", "Bạn cổ vũ đội nào?"],
            ["No pain, no gain.", "Có khổ luyện mới có thành công"],
            ["I’m more of a spectator than a player.", "Tôi thích xem hơn là chơi"]
          ]
        }
      ],
      "bad": "Vietnam win. Score 2 1. Good.",
      "good": "Vietnam beat Thailand two–one last night. It was a really close match!",
      "tip": "💡Mẹo: người Anh gọi là football, người Mỹ gọi là soccer (vì “football” ở Mỹ là bóng bầu dục). Tỉ số 0 trong bóng đá kiểu Anh hay đọc là nil: “two–nil”."
    },
    {
      "f": "Movies.html",
      "e": "🎬",
      "n": "Movies",
      "g": "Sở thích & Giải trí",
      "sec": "Thêm vài từ này, bạn sẽ bàn phim như một người mê điện ảnh",
      "sub": [
        {
          "t": "Thế giới điện ảnh",
          "k": "table",
          "h": ["Từ / cụm", "Nghĩa", "Ví dụ"],
          "r": [
            ["director", "đạo diễn", "The director is famous for sci-fi movies."],
            ["cast", "dàn diễn viên", "The cast was amazing."],
            ["trailer", "đoạn giới thiệu phim", "Have you watched the trailer?"],
            ["sequel / remake", "phần tiếp theo / bản làm lại", "The sequel was better than the first one."],
            ["blockbuster", "phim bom tấn", "It’s the biggest blockbuster of the summer."],
            ["box office", "doanh thu phòng vé", "It was a huge box office hit."],
            ["soundtrack", "nhạc phim", "I love the soundtrack."]
          ]
        },
        {
          "t": "Nhận xét như người mê phim",
          "k": "table",
          "h": ["Từ / cụm", "Nghĩa", "Ví dụ"],
          "r": [
            ["plot twist", "cú lật, tình tiết bất ngờ", "I didn’t see that plot twist coming!"],
            ["spoiler", "tiết lộ nội dung", "Don’t read the comments. There are spoilers."],
            ["cliffhanger", "kết lửng gây tò mò", "The series ended on a cliffhanger."],
            ["overrated / underrated", "được đánh giá quá cao / bị đánh giá thấp", "I think that movie is a bit overrated."],
            ["must-see", "phim nhất định phải xem", "It’s a must-see this year."],
            ["binge-watch", "xem liền một mạch nhiều tập", "I binge-watched the whole series this weekend."]
          ]
        },
        {
          "t": "Cụm giúp cuộc trò chuyện trôi chảy",
          "k": "phr",
          "r": [
            ["It kept me on the edge of my seat.", "Nó làm tôi hồi hộp suốt cả phim"],
            ["I couldn’t take my eyes off the screen.", "Tôi không rời mắt khỏi màn hình được"],
            ["It was a total letdown.", "Thật là thất vọng"],
            ["It’s worth a watch.", "Đáng để xem một lần"],
            ["The book was better.", "Sách hay hơn phim"],
            ["What did you think of the ending?", "Bạn thấy cái kết thế nào?"],
            ["Let’s grab some popcorn and chill.", "Mua bắp rồi ngồi thư giãn thôi"]
          ]
        }
      ],
      "bad": "Film good. I like. Very interesting I am.",
      "good": "I really enjoyed it. The plot twist was amazing, and it kept me on the edge of my seat.",
      "tip": "💡Mẹo: xem phim với phụ đề tiếng Anh (không phải tiếng Việt) là cách luyện nghe rất hiệu quả. Bắt đầu với phim hoạt hình hoặc hài, vì lời thoại thường chậm và rõ hơn."
    },
    {
      "f": "Music.html",
      "e": "🎵",
      "n": "Music",
      "g": "Sở thích & Giải trí",
      "sec": "Thêm vài từ này, bạn sẽ nói về âm nhạc như một người mê nhạc thật sự",
      "sub": [
        {
          "t": "Nghe nhạc thời nay",
          "k": "table",
          "h": ["Từ / cụm", "Nghĩa", "Ví dụ"],
          "r": [
            ["playlist", "danh sách phát", "I made a playlist for our road trip."],
            ["stream", "nghe trực tuyến", "I usually stream music on my phone."],
            ["a hit / the charts", "bài hit / bảng xếp hạng", "Her new song is number one on the charts."],
            ["release", "phát hành", "They released a new album last week."],
            ["cover", "bản hát lại", "I prefer the cover to the original."],
            ["gig", "buổi diễn nhỏ", "My friend’s band has a gig on Friday."],
            ["acoustic", "mộc, không dùng điện", "I love acoustic versions of pop songs."]
          ]
        },
        {
          "t": "Khả năng và cảm nhận âm nhạc",
          "k": "table",
          "h": ["Từ / cụm", "Nghĩa", "Ví dụ"],
          "r": [
            ["earworm", "giai điệu cứ lởn vởn trong đầu", "That song is a real earworm."],
            ["tone-deaf", "mù âm, nghe không ra cao độ", "Don’t ask me to sing. I’m tone-deaf!"],
            ["out of tune / in tune", "lạc tông / đúng tông", "The guitar is a bit out of tune."],
            ["have an ear for music", "có năng khiếu nghe nhạc", "She has a great ear for music."],
            ["sing along", "hát theo", "Everyone sang along to the chorus."],
            ["goosebumps", "nổi da gà (vì cảm xúc)", "Her voice gave me goosebumps."]
          ]
        },
        {
          "t": "Cụm giúp cuộc trò chuyện trôi chảy",
          "k": "phr",
          "r": [
            ["This song is stuck in my head.", "Bài này cứ lởn vởn trong đầu tôi"],
            ["This is my jam!", "Đây là bài ruột của tôi!"],
            ["Turn it up!", "Vặn to lên!"],
            ["It’s not really my cup of tea.", "Không hợp gu tôi lắm"],
            ["I have it on repeat.", "Tôi nghe đi nghe lại bài này"],
            ["Have you heard their new song?", "Bạn nghe bài mới của họ chưa?"],
            ["Can you send me the link?", "Gửi link cho mình được không?"]
          ]
        }
      ],
      "bad": "I like music. Music good. I listen.",
      "good": "I’m really into acoustic pop. I have one song on repeat right now. It always gives me goosebumps.",
      "tip": "💡Mẹo: khi ai đó kể về nghệ sĩ họ thích mà bạn chưa biết, đừng ngại nói “I haven’t heard of them. What should I listen to first?”. Đây là câu hỏi giúp cuộc trò chuyện kéo dài rất tự nhiên."
    }
  ],
  "notes": {
    "0.0.0": "“I’m originally from + nơi” = quê gốc ở. I’m = I am; originally là trạng từ đứng giữa be và from. “but” nối với nơi ở hiện tại (live in … now).",
    "0.0.1": "“be based in + nơi” = đang sống và làm việc ở. based là V3 dùng như tính từ (bị động); giới từ in đi với tên thành phố.",
    "0.0.2": "“work as + nghề” = làm nghề gì, có a/an trước tên nghề (a graphic designer). Khác với work for + công ty.",
    "0.0.3": "“work for + công ty” = làm cho công ty nào. Hiện tại đơn, chủ ngữ I nên work không -s. “a software company”: a + phụ âm.",
    "0.0.4": "“In my free time,” là trạng ngữ đầu câu, sau đó có dấu phẩy. “like + V-ing” = thích làm gì. free time không đếm được nên không có a.",
    "0.0.5": "“a fresh graduate” = a + tính từ + danh từ. “in + ngành” = tốt nghiệp ngành gì. I’m = I am.",
    "0.0.6": "“currently” là trạng từ, đứng giữa be và V-ing: I’m currently studying (hiện tại tiếp diễn = đang). Có thể đứng đầu câu: Currently, I …",
    "0.1.0": "“I’m easygoing” = be + tính từ. “so” = vì vậy. “it’s easy to work with me”: it là chủ ngữ giả, easy to + V.",
    "0.1.1": "be + tính từ (ambitious). “and” nối hai mệnh đề. “new challenges” = tính từ + danh từ số nhiều; like + danh từ.",
    "0.1.2": "hard-working là tính từ ghép có gạch nối. Hai tính từ nối bằng and: hard-working and reliable. I’m = I am.",
    "0.1.3": "“curious about + danh từ” = tò mò về điều gì. “different cultures” = tính từ + danh từ số nhiều.",
    "0.1.4": "“passionate about + danh từ / V-ing” = đam mê. photography không đếm được nên không có a.",
    "0.1.5": "“aim to + V” = đặt mục tiêu làm gì. “fluently” là trạng từ bổ nghĩa cho speak, đứng cuối câu.",
    "0.1.6": "“look forward to + V-ing” (to là giới từ, không phải to + V). I’m looking forward = hiện tại tiếp diễn; sau to là making new friends.",
    "1.0.0": "He’s = He is. “an” đứng trước từ bắt đầu bằng âm nguyên âm (acquaintance). “just” = chỉ là, làm nhẹ mức độ thân. “from work” = quen từ chỗ làm.",
    "1.0.1": "Quá khứ đơn: met (met là quá khứ của meet). “through + người/vật” = thông qua ai, qua cái gì.",
    "1.0.2": "I’d = I would. “would love to + V” = rất muốn làm gì (lịch sự). “get to know” là cụm động từ, tân ngữ (you) đứng giữa; “better” = so sánh hơn của well.",
    "1.0.3": "Quá khứ đơn: hit (hit-hit-hit, không đổi dạng). “right away” = ngay lập tức. Cụm “hit it off” dùng nguyên khối, “it” không thay được.",
    "1.0.4": "Hiện tại đơn, chủ ngữ “We” nên dùng have (không thêm -s). “a lot of + danh từ không đếm được”; “in common” = điểm chung.",
    "1.0.5": "“should + V nguyên mẫu” = nên (gợi ý nhẹ). “sometime” (viết liền) = vào một lúc nào đó, khác “some time” = một khoảng thời gian.",
    "1.0.6": "“go to + sự kiện” = đi dự. “to meet new people” = để gặp người mới (to + V chỉ mục đích). “events” số nhiều vì có nhiều sự kiện.",
    "1.1.0": "“very” bổ nghĩa cho tính từ outgoing. “and” nối hai mệnh đề cùng chủ ngữ. “makes friends”: make friends = kết bạn, “friends” luôn số nhiều.",
    "1.1.1": "“a bit + tính từ” = hơi (nhẹ mức độ). “at first” = lúc đầu, đứng cuối câu làm trạng ngữ thời gian.",
    "1.1.2": "“more of a(n) + danh từ” = thiên về kiểu người nào đó. Dùng “an” trước introvert vì âm nguyên âm.",
    "1.1.3": "“not very good at + danh từ” = không giỏi việc gì. “at” là giới từ đi với good; small talk là danh từ không đếm được, không thêm a.",
    "1.1.4": "Chủ ngữ là cụm V-ing “Asking about food” (V-ing làm chủ ngữ, động từ chia số ít: is). “a great icebreaker”: a + tính từ + danh từ đếm được.",
    "1.1.5": "“He’s” = He is. “really” nhấn mạnh tính từ. Easygoing là tính từ ghép, mô tả tính cách.",
    "2.0.0": "“one of + my + danh từ số nhiều” = một trong những… Danh từ sau “of” luôn số nhiều (close friends), động từ chia số ít (She’s = She is).",
    "2.0.1": "“gym buddy”: danh từ đứng trước làm tính từ (gym) và không thêm -s. “my” = tính từ sở hữu.",
    "2.0.2": "Hiện tại đơn diễn tả thói quen lặp lại. “friend group” là chủ ngữ số ít nên meets có -s. “every Sunday” = dấu hiệu thói quen.",
    "2.0.3": "“get along with + người”. “well” là trạng từ bổ nghĩa cho get along (không dùng good). Hiện tại đơn, chủ ngữ I nên không thêm -s.",
    "2.0.4": "Quá khứ đơn: bonded (bond + ed). “bond over + điều chung” = gắn kết nhờ điều gì; “our love of music” = tình yêu âm nhạc của chúng tôi.",
    "2.0.5": "Quá khứ bất quy tắc: fall → fell. “fall out with + người” = cãi nhau, bất hòa; “last week” là mốc quá khứ nên dùng quá khứ đơn.",
    "2.0.6": "“Don’t + V” = câu mệnh lệnh phủ định (đừng). “made up” là quá khứ của make up (làm lành), made là dạng bất quy tắc.",
    "2.0.7": "Quá khứ đơn: drifted. “apart” = rời xa nhau. “after + danh từ” (university) = sau khi, chỉ thời điểm.",
    "2.1.0": "“Let’s + V nguyên mẫu” = rủ cùng làm. “meet up and catch up”: hai động từ nối bằng “and”, cùng dạng nguyên mẫu. “soon” = sớm.",
    "2.1.1": "“can always + V” = lúc nào cũng có thể. “count on + người” = tin cậy ai; “me” là tân ngữ sau giới từ on.",
    "2.1.2": "I’ve got = I have got, dùng như “I have”. “your back” = tính từ sở hữu + danh từ. Cụm “have/got someone’s back” = ủng hộ, che chở ai.",
    "2.1.3": "“go way back” = quen nhau từ rất lâu. “Nam and I”: khi có hai người làm chủ ngữ, đặt “I” sau cùng; động từ chia số nhiều (go).",
    "2.1.4": "Quá khứ đơn: clicked. “just” = đơn giản là, nhấn mạnh sự hợp nhau tự nhiên. “click” (nghĩa bóng) = hợp nhau ngay.",
    "2.1.5": "“my treat” = tôi mời (cụm danh từ, không có động từ). “is” nối chủ ngữ “Dinner” với cụm; “tonight” = tối nay.",
    "3.0.0": "“I’m” = I am. “be thrilled with + danh từ” = rất hài lòng với. Giới từ “with” đi sau thrilled khi nói về kết quả.",
    "3.0.1": "“completely” là trạng từ đứng trước cụm tính từ “worn out” để nhấn mạnh. “worn out” (phân từ quá khứ của wear out) dùng như tính từ = kiệt sức.",
    "3.0.2": "Starving dạng -ing nhưng là tính từ = đói lả (nói cường điệu). “Let’s + V” = rủ nhau làm gì.",
    "3.0.3": "Quá khứ đơn của be với He: was. “furious about + danh từ” = tức giận về điều gì; “delay” = sự chậm trễ.",
    "3.0.4": "“terrified of + danh từ” = sợ hãi điều gì (giới từ of). “heights” số nhiều = độ cao nói chung.",
    "3.0.5": "“was” vì chủ ngữ I ở quá khứ. “bored to death” = chán chết (cụm cường điệu). “in that meeting” = trong cuộc họp đó, that chỉ vật đã biết.",
    "3.1.0": "“so + tính từ” = rất, quá. Mệnh đề “the test is over” bỏ “that” phía sau relieved, vẫn đúng ngữ pháp: relieved (that) …",
    "3.1.1": "“was disappointed with + vật” (disappointed at/by cũng dùng). Đuôi -ed mô tả cảm xúc của người; chủ ngữ là người (I).",
    "3.1.2": "“get + tính từ” = trở nên. “when + mệnh đề” = khi. Hiện tại đơn vì là thói quen; “my computer is slow” chia is.",
    "3.1.3": "“so embarrassed” = rất ngượng. “when I fell over” = khi tôi ngã; fell là quá khứ của fall, cả hai vế đều quá khứ.",
    "3.1.4": "“feel + tính từ” (homesick). Hiện tại đơn, thói quen. “during + danh từ” = trong suốt dịp nào.",
    "3.1.5": "“overwhelmed with + danh từ” = quá tải bởi. “this week” là cụm thời gian đứng cuối câu.",
    "3.1.6": "“be grateful for + danh từ” = biết ơn vì điều gì. “your help” = tính từ sở hữu + danh từ không đếm được.",
    "3.1.7": "“fed up with + danh từ/V-ing” = chán ngấy. “fed up” cố định, “with” đứng sau; “the traffic” = giao thông, không đếm được.",
    "4.0.0": "Chủ ngữ “My stepmother” (số ít) nên “is”. “kind to + người” = tốt với ai; “very” nhấn mạnh tính từ.",
    "4.0.1": "“mother-in-law” là danh từ ghép, số ít nên động từ cooks có -s. “cook(s) well”: well là trạng từ bổ nghĩa cho động từ.",
    "4.0.2": "“in-laws” luôn số nhiều. “get along well with + người”. Hiện tại đơn diễn tả quan hệ lâu dài.",
    "4.0.3": "“have two siblings”: sau số đếm hai dùng danh từ số nhiều (siblings). “sibling” = anh chị em ruột, không phân biệt giới tính.",
    "4.0.4": "“Most of my relatives” chủ ngữ số nhiều nên “live” không -s. “in the countryside” = ở vùng quê, có “the”.",
    "4.0.5": "“twins” luôn số nhiều. “My brothers are twins”: brothers số nhiều nên dùng are; sau are dùng danh từ số nhiều.",
    "4.0.6": "“has” vì chủ ngữ “My grandmother” số ít. “five grandchildren”: số đếm + danh từ số nhiều (grandchild → grandchildren, bất quy tắc).",
    "4.0.7": "“the” đứng trước so sánh nhất/thứ tự (youngest, eldest). “in my family” = trong gia đình (dùng in cho nhóm).",
    "4.1.0": "“but” nối hai ý đối lập. “strict” (nghiêm khắc) và “fair” (công bằng) đều là tính từ sau be. Hiện tại đơn miêu tả tính cách.",
    "4.1.1": "“very easy-going”: very + tính từ. Dấu gạch nối vì là tính từ ghép (easy-going / easygoing).",
    "4.1.2": "“generous with + danh từ” = rộng rãi về điều gì. “his time” = tính từ sở hữu + danh từ.",
    "4.1.3": "Hai tính từ nối bằng “and”: outgoing and funny. Chủ ngữ “My sister” số ít nên is.",
    "4.1.4": "“shy with + người” = ngại với ai. “strangers” số nhiều chỉ người lạ nói chung. “little brother” = em trai.",
    "4.1.5": "“patient” (tính từ) = kiên nhẫn. “very” đứng trước tính từ; chủ ngữ “My grandmother” số ít + is.",
    "4.1.6": "“can be + tính từ” = có thể (đôi khi) như thế. “a little + tính từ” = hơi. Dùng “can be” để nói nhẹ về tính cách, tránh chê thẳng.",
    "4.1.7": "“protective of + người” = bảo vệ ai (giới từ of). “My older brother” là chủ ngữ số ít nên is; “very” nhấn mạnh tính từ.",
    "4.2.0": "“get along with + người”. “well” = trạng từ. Hiện tại đơn, chủ ngữ I.",
    "4.2.1": "Quá khứ bất quy tắc: grow → grew. “grow up” = lớn lên. “in a small town”: in + nơi chốn.",
    "4.2.2": "Quá khứ bất quy tắc: bring → brought. “bring up” = nuôi nấng, tân ngữ “me” đứng giữa cụm động từ.",
    "4.2.3": "“look up to + người” = kính trọng; cụm động từ có 3 thành phần, không tách. Hiện tại đơn diễn tả cảm nhận lâu dài.",
    "4.2.4": "“take care of + người/vật” = chăm sóc. Hiện tại đơn, thói quen; “my grandmother” là tân ngữ sau of.",
    "4.2.5": "“keep in touch” = giữ liên lạc. “by phone” = bằng điện thoại (by + phương tiện, không có the/a).",
    "4.2.6": "Chủ ngữ là V-ing “Singing” (số ít) nên “runs” có -s. “run in the family” = có tính di truyền trong gia đình.",
    "4.2.7": "“be named after + người” = được đặt tên theo ai. Cấu trúc bị động: be + named. “my grandfather” là tân ngữ của after.",
    "5.0.0": "“I’m so grateful for + danh từ” = rất biết ơn vì. “so” nhấn mạnh; “your support” = tính từ sở hữu + danh từ không đếm được.",
    "5.0.1": "“thankful to + V” = biết ơn vì được/có. “to have friends like you”: like + tân ngữ (you) = giống như bạn. “friends” số nhiều.",
    "5.0.2": "Câu cảm thán (dấu !). “a million” = một triệu, nghĩa bóng là “cảm ơn rất nhiều”. “You fixed my laptop?” = quá khứ đơn dùng ngữ điệu hỏi.",
    "5.0.3": "“shouldn’t have + V3” = lẽ ra bạn không cần làm vậy (thể hiện cảm động). “You shouldn’t have!” là câu rút gọn, bỏ động từ chính.",
    "5.0.4": "“cover my shift” = làm thay ca của tôi. “I owe you” = tôi nợ bạn; “big time” = rất nhiều, trạng ngữ cuối câu. Hiện tại đơn của owe.",
    "5.0.5": "“My heartfelt thanks to + người” = cảm ơn chân thành đến. “thanks” luôn số nhiều; không có động từ vì là câu rút gọn. “who helped” = những người đã giúp.",
    "5.1.0": "“Oops” là thán từ. “my bad” là cách nói thân mật nhận lỗi (= lỗi của tôi). “I sent” quá khứ đơn: send → sent; “the wrong file” = nhầm tập tin.",
    "5.1.1": "“I think + mệnh đề” = tôi nghĩ rằng. “it was just a misunderstanding”: quá khứ đơn của be, “a” trước danh từ bắt đầu bằng phụ âm.",
    "5.1.2": "“I’ll” = I will (lời hứa). “make it up to + người” = đền bù cho ai; “it” đứng giữa cụm động từ. “I promise” = hiện tại đơn nhấn mạnh.",
    "5.1.3": "“Can you + V?” = câu hỏi nhờ vả/xin. “forgive me”: tân ngữ “me”, forgive là động từ nguyên mẫu sau can.",
    "5.1.4": "“No hard feelings” là cụm cố định (không oán giận), “feelings” luôn số nhiều. Câu sau “We’re still friends” dùng “still” đứng sau be.",
    "5.1.5": "“Don’t worry” = đừng lo. “I don’t hold grudges”: hiện tại đơn phủ định; “grudges” số nhiều = không có thói để bụng chung chung.",
    "5.1.6": "“Let’s + V” = rủ làm cùng. “put it behind us” = bỏ chuyện đó lại phía sau; “it” đứng giữa put và behind, “us” là tân ngữ sau giới từ.",
    "6.0.0": "“To be honest,” đứng đầu câu, sau đó có dấu phẩy; làm mềm ý kiến. “prefer A to B” = thích A hơn B.",
    "6.0.1": "“Actually,” đứng đầu câu để sửa hoặc bổ sung thông tin; không có nghĩa là “hiện nay”. I’m not from Hanoi = be + not.",
    "6.0.2": "“I guess + mệnh đề” = tôi đoán là. Sau guess là mệnh đề đầy đủ: it’s going to rain (be going to = dự đoán có dấu hiệu).",
    "6.0.3": "“kind of + tính từ” = hơi, khá (thân mật), đứng trước tính từ giống a bit. “today” = trạng từ thời gian cuối câu.",
    "6.0.4": "“probably” đứng giữa will và động từ: I’ll probably be late (I’ll = I will). Với động từ be thì đặt sau be.",
    "6.0.5": "“As far as I know,” đứng đầu câu + dấu phẩy = theo như tôi biết. Sau đó là mệnh đề hiện tại đơn: the shop opens at nine.",
    "6.0.6": "“It depends on + danh từ” = tùy vào. depends có -s vì chủ ngữ it; sau on là danh từ (the weather).",
    "6.1.0": "“Speaking of + danh từ,” = nhắc đến … thì, dùng để chuyển chủ đề. “Have you tried …?” = hiện tại hoàn thành hỏi trải nghiệm.",
    "6.1.1": "“Anyway,” đứng đầu câu để quay lại chủ đề chính. “Let’s + V” = rủ cùng làm; “get back to” = quay lại với.",
    "6.1.2": "“That makes sense” = chủ ngữ số ít That nên makes có -s. “Thanks for + danh từ / V-ing” = cảm ơn vì; explaining là V-ing sau giới từ.",
    "6.1.3": "“Fair enough” là cụm cố định, không có động từ. “Let’s meet at six then” = then ở cuối câu nghĩa là vậy thì.",
    "6.1.4": "“Good point” là cụm danh từ ngắn dùng như câu. “I didn’t think about that” = quá khứ đơn phủ định (didn’t + V).",
    "6.1.5": "“No worries” dùng để đáp lời xin lỗi hoặc cảm ơn. “Take your time” = câu mệnh lệnh, nghĩa là cứ từ từ.",
    "6.1.6": "“In the end,” đứng đầu câu = cuối cùng thì. Kể chuyện quá khứ: took (take → took) a taxi.",
    "7.0.0": "Chủ ngữ “My morning routine” số ít nên is. “morning” làm tính từ, không thêm -s. “very simple” = rất đơn giản.",
    "7.0.1": "“always” (trạng từ tần suất) đứng trước động từ chính. “hit the snooze button” = bấm báo lại. “twice” = hai lần, trạng từ cuối câu.",
    "7.0.2": "“like to + V” = thích làm gì. “sleep in” = ngủ nướng. “on Sundays” = vào các Chủ nhật (số nhiều chỉ thói quen).",
    "7.0.3": "“My commute” là danh từ (chủ ngữ số ít) nên “takes”. “take + thời gian” = mất bao lâu; “forty minutes” = số đếm + danh từ số nhiều.",
    "7.0.4": "Chủ ngữ “The traffic” không đếm được nên “is”. “during + danh từ” = trong khoảng; “terrible” = tệ (tính từ).",
    "7.0.5": "“Let’s grab a bite” = đi ăn nhẹ. “before + danh từ” = trước khi (before the meeting). “a bite” = một chút đồ ăn.",
    "7.0.6": "“take a break” = nghỉ giải lao. “short” là tính từ bổ nghĩa cho break; “every hour” = mỗi giờ, trạng từ chỉ tần suất cuối câu.",
    "7.0.7": "“sometimes” đứng trước động từ chính. “work overtime” = làm thêm giờ, overtime là trạng từ. “on Fridays” = vào các ngày thứ Sáu.",
    "7.1.0": "“do the chores” = làm việc nhà, “chores” số nhiều. “on Saturday morning” = vào sáng thứ Bảy (on + thứ + buổi).",
    "7.1.1": "“need to + V” = cần phải. “some errands” = một số việc vặt (số nhiều). “after work” = sau giờ làm, không có “the”.",
    "7.1.2": "“tidy up” = dọn dẹp, tân ngữ “my desk” đứng sau. “before I leave” = trước khi tôi đi; sau before dùng hiện tại đơn, không dùng will.",
    "7.1.3": "“to unwind” = để thư giãn (to + V chỉ mục đích). “read a book” = đọc sách (hiện tại đơn, thói quen).",
    "7.1.4": "“Tomorrow” là trạng từ thời gian ở đầu câu. “my day off” = ngày nghỉ của tôi; danh từ ghép (day off).",
    "7.1.5": "“try not to + V” = cố gắng không làm gì. “not” đứng trước “to”. “stay up late” = thức khuya.",
    "7.1.6": "“but” nối hai mệnh đề đối lập. “an early bird” dùng “an” (âm nguyên âm), “a night owl” dùng “a”. “my sister is” chia số ít.",
    "8.0.0": "“Can we + V?” = chúng ta có thể… không? “reschedule” = sắp xếp lại lịch. “the meeting” = cuộc họp đã biết.",
    "8.0.1": "Bị động quá khứ: was + postponed (V3). “until next week” = đến tuần sau; “until” chỉ điểm kết thúc của việc hoãn.",
    "8.0.2": "“the thirtieth of November”: ngày dùng số thứ tự (thirtieth) và có the. Chủ ngữ số ít nên “is”.",
    "8.0.3": "“public holiday” = ngày nghỉ lễ (danh từ đếm được: a public holiday). “Monday” không có mạo từ.",
    "8.0.4": "“Today” = trạng từ ở đầu câu. “our wedding anniversary”: wedding bổ nghĩa cho anniversary, our = tính từ sở hữu.",
    "8.0.5": "“on holiday” (Anh) = đang đi nghỉ. “for + khoảng thời gian” (a fortnight = hai tuần). Hiện tại đơn dùng be + on holiday.",
    "8.0.6": "“Let me + V” = để tôi… “check my calendar” = kiểm tra lịch của tôi; me là tân ngữ, check không chia.",
    "8.0.7": "“be booked up” = kín lịch, bị động (be + V3). “Sorry, + mệnh đề” = xin lỗi, … “this week” đứng cuối làm trạng ngữ.",
    "8.1.0": "“I’m moving” = hiện tại tiếp diễn dùng cho kế hoạch tương lai đã định. “in early March”: in + tháng; early đứng trước tháng.",
    "8.1.1": "“the other day” = hôm nọ, dùng với quá khứ đơn (saw). “your sister” = tính từ sở hữu + danh từ.",
    "8.1.2": "“I’ll call you” = I will + V (quyết định/hứa). “in + khoảng thời gian” = sau bao lâu; “a couple of days” = vài ngày.",
    "8.1.3": "“Tết” là chủ ngữ số ít nên “is”. “just around the corner” = sắp tới rồi. “just” nhấn mạnh mức độ gần.",
    "8.1.4": "Hiện tại hoàn thành “has changed” (có hậu quả đến nay). “a lot” = nhiều, “in the last decade” = trong thập kỷ qua; decade = 10 năm.",
    "8.1.5": "“from time to time” = thỉnh thoảng (trạng từ tần suất). Hiện tại đơn, chủ ngữ “We” nên “meet”.",
    "9.0.0": "“Thirty” là chủ ngữ số ít nên dùng is. “a milestone birthday” = sinh nhật quan trọng; milestone bổ nghĩa cho birthday, dùng “a”.",
    "9.0.1": "“We’re throwing” = hiện tại tiếp diễn dùng cho kế hoạch gần. “throw somebody a party” = tổ chức tiệc cho ai (tân ngữ gián tiếp “her” đứng trước).",
    "9.0.2": "“look + tính từ” = trông như thế nào. “so festive” = rất náo nhiệt lễ hội. “The streets” số nhiều nên “look” không -s.",
    "9.0.3": "“are busy” vì chủ ngữ “Shops” số nhiều. “during the holiday season” = trong mùa lễ; “during” + danh từ.",
    "9.0.4": "“Tet is a time for + danh từ số nhiều” = dịp để… “a time for family reunions”: for + danh từ (không dùng to + V ở đây).",
    "9.0.5": "Quá khứ bất quy tắc: ring → rang. “ring in the new year” = đón năm mới. “with fireworks” = bằng pháo hoa (with + vật dụng, số nhiều).",
    "9.0.6": "“the colour of + danh từ” = màu của điều gì. “luck and prosperity” = hai danh từ không đếm được nối bằng and. Red không có mạo từ khi nói về màu nói chung.",
    "9.0.7": "Cấu trúc “It’s a superstition not to + V” = có niềm tin là không nên… “not to sweep” = đừng quét. “on New Year’s Day” = vào ngày Tết Dương.",
    "9.1.0": "Câu cảm thán: What + a + tính từ + danh từ! (thoughtful gift). “thoughtful” = chu đáo. Không có chủ ngữ và động từ vì là câu cảm thán rút gọn.",
    "9.1.1": "“This watch has sentimental value”: has vì chủ ngữ số ít. “sentimental value” = giá trị tinh thần, value không đếm được nên không thêm a.",
    "9.1.2": "“Please accept this as + danh từ” = hãy nhận món này như một… “as” = với tư cách. “of our appreciation” = lòng biết ơn của chúng tôi.",
    "9.1.3": "“Could you + V, please?” = yêu cầu lịch sự. “gift-wrap” là động từ ghép = gói quà; “it” đứng sau động từ.",
    "9.1.4": "“does Secret Santa every year” = làm (hoạt động) trao quà bí mật hằng năm. Chủ ngữ “Our office” số ít nên does; “every year” = trạng từ tần suất.",
    "9.1.5": "“Is it rude to + V?” = làm … có bất lịch sự không? “It” là chủ ngữ giả, to regift là chủ ngữ thật. “something” = đại từ bất định.",
    "10.0.0": "“Hanoi is very humid”: be + tính từ. “in spring” = vào mùa xuân (không dùng the/an). “very” nhấn mạnh.",
    "10.0.1": "“It’s” = It is, “it” là chủ ngữ giả khi nói thời tiết. “so muggy” = rất oi bức. “before the storm” = trước cơn bão.",
    "10.0.2": "“It’s a bit chilly” = hơi lạnh. “a bit + tính từ” giảm nhẹ mức độ. “this morning” = sáng nay.",
    "10.0.3": "“The weather is mild”: weather không đếm được, động từ số ít. “in Da Lat” = ở Đà Lạt; in + thành phố.",
    "10.0.4": "“It’s only drizzling” = hiện tại tiếp diễn miêu tả cái đang xảy ra; drizzle vừa là danh từ vừa là động từ. “You don’t need an umbrella”: need + danh từ, an trước nguyên âm.",
    "10.0.5": "“It’s pouring down” = hiện tại tiếp diễn (đang mưa to). “pour down” = đổ xuống. “outside” = trạng từ chỉ nơi chốn, đứng cuối.",
    "10.0.6": "“There’s” = There is + danh từ số ít (a nice breeze). “by the lake” = bên hồ; by = gần/bên cạnh.",
    "10.0.7": "“Did you hear + tân ngữ?” = quá khứ đơn nghi vấn, dùng did + V nguyên mẫu (hear). Thunder không đếm được nên không có “a”.",
    "10.1.0": "“There’s a heatwave” = có một đợt nắng nóng, There is + danh từ số ít. “this week” = trạng ngữ thời gian.",
    "10.1.1": "“A cold front is coming tomorrow”: hiện tại tiếp diễn dùng cho sự việc sắp xảy ra theo dự báo. “cold front” = danh từ ghép; “tomorrow” = trạng từ thời gian.",
    "10.1.2": "“will hit” = will + V, dự đoán/thông báo tương lai. “The typhoon” chủ ngữ số ít; “hit the coast” = đổ bộ vào bờ biển; “tonight” = tối nay.",
    "10.1.3": "Bị động hiện tại: are flooded (be + V3). “Some streets” số nhiều nên are. “after the rain” = sau cơn mưa.",
    "10.1.4": "“The air quality is bad” (air quality không đếm được). “Wear a mask” = câu mệnh lệnh, động từ nguyên mẫu không có chủ ngữ.",
    "10.1.5": "“The UV index is very high”: chủ ngữ số ít nên is. “at noon” = vào giữa trưa; at + mốc giờ.",
    "11.0.0": "“The rent is five million dong a month”: a + đơn vị thời gian = mỗi (a month = mỗi tháng). Chủ ngữ rent số ít nên is.",
    "11.0.1": "Chủ ngữ “My landlord” số ít nên is. “very friendly” = tính từ có đuôi -ly nhưng không phải trạng từ; sau be dùng tính từ.",
    "11.0.2": "“share + vật + with + người”: ở đây “with two roommates” là đi cùng ai. “an apartment” dùng an vì âm nguyên âm; “I share” hiện tại đơn.",
    "11.0.3": "“We’re moving in” = hiện tại tiếp diễn chỉ kế hoạch đã định. “move in” = dọn vào ở; “next week” = tuần sau.",
    "11.0.4": "“doesn’t include” = hiện tại đơn phủ định, rent là chủ ngữ số ít nên dùng doesn’t + V nguyên mẫu. “utilities” = tiền điện nước, số nhiều.",
    "11.0.5": "“It’s a quiet neighborhood”: a + tính từ + danh từ đếm được. “quiet” = yên tĩnh, bắt đầu bằng phụ âm nên dùng “a”.",
    "11.0.6": "“Come to…” = câu mệnh lệnh mời mọc. “housewarming party” danh từ ghép; “on Saturday” = vào thứ Bảy.",
    "11.1.0": "“The living room is really spacious”: be + tính từ. “really” nhấn mạnh; “living room” danh từ ghép số ít.",
    "11.1.1": "“was” vì kể về phòng cũ trong quá khứ. “a bit cramped” = hơi chật. “My old room” = chủ ngữ số ít.",
    "11.1.2": "“Sorry, + mệnh đề” = xin lỗi vì… “a bit messy” = hơi bừa; messy là tính từ nên đứng sau be.",
    "11.1.3": "“is leaking” = hiện tại tiếp diễn, việc đang xảy ra (rò rỉ). “leak” vừa là danh từ vừa là động từ; “The kitchen sink” chủ ngữ số ít.",
    "11.1.4": "“doesn’t work” = hiện tại đơn phủ định (does not + V). “The air conditioner” chủ ngữ số ít nên dùng doesn’t.",
    "11.1.5": "“There was a power cut”: There was + danh từ số ít, quá khứ đơn. “last night” = tối qua, dấu hiệu quá khứ.",
    "11.1.6": "“We’re renovating” = hiện tại tiếp diễn, việc đang diễn ra. “the bathroom” = phòng tắm đã biết.",
    "12.0.0": "“really like” = rất thích (really đứng trước động từ). “the layout of + danh từ” = bố cục của; “this apartment” = chỉ vật gần.",
    "12.0.1": "“are” vì chủ ngữ ghép (The kitchen and living room). “open-plan” = tính từ ghép, mô tả không gian liên thông.",
    "12.0.2": "“gets” = nhận được (hiện tại đơn, chủ ngữ số ít). “a lot of natural light”: light ở đây không đếm được nên không dùng a.",
    "12.0.3": "“need + danh từ”; “more” = nhiều hơn, “storage space” là danh từ không đếm được nên không có -s.",
    "12.0.4": "“works in + lĩnh vực” = làm trong ngành. Chủ ngữ She số ít nên works. “interior design” là danh từ không đếm được.",
    "12.0.5": "“The flat is fully furnished”: be + trạng từ (fully) + V3 dùng như tính từ. Nghĩa: nhà có đầy đủ nội thất.",
    "12.1.0": "“It took + thời gian + to + V” = mất bao lâu để làm gì. “took” là quá khứ của take; “assemble” = lắp ráp.",
    "12.1.1": "Chủ ngữ “Flat-pack furniture” không đếm được nên is. “cheap and easy to carry”: hai tính từ nối bằng and; “easy to + V” = dễ làm gì.",
    "12.1.2": "“loves + danh từ” (hiện tại đơn, chủ ngữ “My dad” số ít). “DIY projects” = các dự án tự làm; DIY là tính từ ở đây.",
    "12.1.3": "“need to + V” = cần. “declutter” = dọn bớt đồ lộn xộn, động từ nguyên mẫu sau to.",
    "12.1.4": "“takes up” (take up) = chiếm; chủ ngữ số ít nên takes. “too much + danh từ không đếm được” (space) = quá nhiều.",
    "12.1.5": "“There’s a scratch on the table”: There is + danh từ số ít. “on the table” = trên mặt bàn.",
    "13.0.0": "“love + danh từ”; “your outfit” = tính từ sở hữu + danh từ. “today” = trạng từ thời gian cuối câu; dấu ! để khen.",
    "13.0.1": "“is full of + danh từ” = đầy cái gì. “black clothes”: clothes luôn số nhiều, nhưng chủ ngữ là “wardrobe” (số ít) nên dùng is.",
    "13.0.2": "Câu hỏi Wh-: What’s = What is. “the dress code for + sự kiện” = quy định trang phục. “for the wedding”: for + sự kiện.",
    "13.0.3": "“Wide-leg trousers” là danh từ số nhiều (trousers luôn số nhiều) nên are. “this year” = trạng ngữ thời gian.",
    "13.0.4": "“a bit out of fashion” = hơi lỗi mốt. “out of + danh từ” = hết, ngoài; “a bit” làm nhẹ mức độ.",
    "13.0.5": "“Let’s + V” = rủ làm cùng. “dress up” = ăn diện; “for dinner tonight” = cho bữa tối nay.",
    "13.0.6": "Quá khứ đơn: bought (buy → bought). “second-hand” là trạng từ ở đây = đã qua sử dụng. “this coat” = áo khoác này.",
    "13.0.7": "“hand-me-downs” = đồ cũ được truyền lại, danh từ số nhiều nên dùng “These … are”. “from my sister” = từ chị/em gái.",
    "13.1.0": "“prefer + danh từ số nhiều” = thích hơn. “long-sleeved” tính từ ghép có -ed, đứng trước danh từ (shirts).",
    "13.1.1": "Quá khứ đơn: fell (fall → fell). “fall off” = rơi ra. “A button” = một cái cúc; “my shirt” = áo của tôi.",
    "13.1.2": "“These trousers have deep pockets”: trousers số nhiều nên have; “pockets” cũng số nhiều; “deep” = sâu.",
    "13.1.3": "“need to + V” = cần. “iron” ở đây là động từ = ủi. “my shirt” = tân ngữ.",
    "13.1.4": "Quá khứ bất quy tắc: shrink → shrank. “in the wash” = trong lúc giặt, danh từ “the wash” = lần giặt.",
    "13.1.5": "Quá khứ đơn: faded. “after a few months” = sau vài tháng; “a few + danh từ số nhiều” = một vài.",
    "14.0.0": "“have lunch” = ăn trưa (không cần a/the). “with my colleagues” = cùng đồng nghiệp, số nhiều vì có nhiều người.",
    "14.0.1": "Chủ ngữ “My manager” số ít nên is. “very kind” = tính từ; very nhấn mạnh.",
    "14.0.2": "“The salary is good”: salary đếm được nhưng ở đây nói về mức lương cụ thể nên có “the”; is vì số ít.",
    "14.0.3": "“a part-time job”: part-time là tính từ ghép trước danh từ, đi với a (phụ âm). “at a café” = tại quán cà phê.",
    "14.0.4": "“work the night shift” = làm ca đêm; “the” trước shift. “on Fridays” = vào các thứ Sáu (thói quen).",
    "14.0.5": "“have a deadline tomorrow” = có hạn chót vào ngày mai. “tomorrow” là trạng từ thời gian, không cần giới từ.",
    "14.0.6": "“work from home” = làm việc tại nhà (home không có the). “twice a week” = hai lần mỗi tuần, trạng từ chỉ tần suất.",
    "14.0.7": "“I’m a freelancer” (a + danh từ chỉ nghề). “so” nối nguyên nhân – kết quả; “my hours are flexible”: hours số nhiều nên are.",
    "14.1.0": "“have a job interview” = có buổi phỏng vấn. “on Monday” = vào thứ Hai; on + thứ.",
    "14.1.1": "“three years of experience”: số + danh từ số nhiều + of + danh từ không đếm được (experience). “have” hiện tại đơn.",
    "14.1.2": "Quá khứ đơn: got (get → got). “get promoted” = được thăng chức (bị động với get). “last month” = tháng trước.",
    "14.1.3": "Quá khứ đơn: quit (quit-quit-quit). “to start a business” = để khởi nghiệp (to + V chỉ mục đích). “his job” = tính từ sở hữu + danh từ.",
    "14.1.4": "Quá khứ đơn: retired. “two years ago” = cách đây hai năm, ago đi với quá khứ đơn.",
    "14.1.5": "“want a career in + lĩnh vực” = muốn sự nghiệp trong ngành. “a career” (đếm được), “tourism” không đếm được.",
    "15.0.0": "“The project is on track”: be + on track = đúng tiến độ; track không có mạo từ trong cụm này.",
    "15.0.1": "“We’re a bit behind schedule” = hơi chậm tiến độ. “behind schedule” = giới từ + danh từ không đếm được (không có the).",
    "15.0.2": "“The missing API key” = chủ ngữ số ít, “missing” là tính từ (thiếu). “is a blocker” = a + danh từ chỉ vật cản.",
    "15.0.3": "“What’s the ETA on the fix?” = What is…; “ETA” = estimated time of arrival. “on the fix” = liên quan đến bản sửa lỗi.",
    "15.0.4": "Quá khứ đơn: pushed. “a hotfix” (a + danh từ phụ âm). “last night” = đêm qua.",
    "15.0.5": "“Let’s + V” = đề nghị. “roll back” = hoàn tác về phiên bản trước; “the last deploy” = lần triển khai gần nhất.",
    "15.0.6": "“This module has a lot of tech debt”: has vì chủ ngữ số ít; “a lot of + danh từ không đếm được”.",
    "15.0.7": "“don’t have the bandwidth” = không đủ sức, quỹ thời gian. Hiện tại đơn phủ định; “this week” = trong tuần này.",
    "15.1.0": "Câu mệnh lệnh: Ping + me + if… “if you need anything” = nếu bạn cần gì (if + hiện tại đơn). “anything” dùng trong câu điều kiện.",
    "15.1.1": "“Let’s sync up” = rủ cùng cập nhật. “sync up” = đồng bộ thông tin, “after lunch” = sau bữa trưa (không có the/a).",
    "15.1.2": "“Can you + V?” = nhờ vả. “loop in the QA team” = cho nhóm QA vào luồng thông tin; tân ngữ dài thì đứng sau “in”.",
    "15.1.3": "“Just a heads-up:” = chỉ báo trước. Sau dấu hai chấm là mệnh đề đầy đủ. “is down” = ngừng hoạt động; “at five” = lúc 5 giờ.",
    "15.1.4": "“circle back to + chủ đề” = quay lại bàn việc đó. “Let’s + V”; “tomorrow” = ngày mai.",
    "15.1.5": "“Want to do some pair programming?” = rút gọn của Do you want to…? (bỏ trợ từ). “some” = một ít, dùng với danh từ không đếm được.",
    "15.1.6": "“I’ll be” = I will be. “OOO” = out of office. “out of office on Friday” = vắng mặt vào thứ Sáu; on + thứ.",
    "16.0.0": "Chủ ngữ “The new semester” số ít nên starts có -s. “in September” = vào tháng Chín; in + tháng.",
    "16.0.1": "“Tuition fees are going up”: hiện tại tiếp diễn diễn tả xu hướng đang diễn ra. “go up” = tăng; “every year” = mỗi năm.",
    "16.0.2": "Quá khứ đơn: got. “a full scholarship” = học bổng toàn phần; a + tính từ phụ âm (full).",
    "16.0.3": "“need a GPA of three point five”: a + danh từ + of + số; “point” đọc dấu thập phân.",
    "16.0.4": "“join a lot of extracurricular activities” = tham gia nhiều hoạt động ngoại khóa. “a lot of” + danh từ số nhiều; hiện tại đơn.",
    "16.0.5": "“Our group project is due on Friday”: be due = đến hạn; “due on + thứ”. Chủ ngữ số ít nên is.",
    "16.0.6": "“live in the dorm” = ở ký túc xá. “with three roommates” = cùng ba bạn cùng phòng; three + danh từ số nhiều.",
    "16.1.0": "“revise for + kỳ thi” (Anh) = ôn tập. “need to + V”; “exams” số nhiều. Mỹ dùng “review”.",
    "16.1.1": "Quá khứ đơn: crammed (gấp đôi phụ âm m). “all night” = suốt đêm, không có giới từ.",
    "16.1.2": "Quá khứ đơn: pulled. “pull an all-nighter” = thức trắng đêm, an vì all-nighter bắt đầu bằng nguyên âm. “before the exam” = trước kỳ thi.",
    "16.1.3": "Quá khứ đơn: aced (ace = đạt điểm tuyệt đối). “the math test” = bài kiểm tra toán; câu cảm thán dùng !",
    "16.1.4": "Hai động từ quá khứ nối bằng “and”: missed, fell. “fall behind” = tụt lại; fall → fell.",
    "16.1.5": "Câu mệnh lệnh: Stop + V-ing (ngừng làm gì), start + danh từ. “procrastinating” = dạng -ing sau stop.",
    "16.1.6": "Quá khứ đơn: learned (hoặc learnt). “by heart” = thuộc lòng, cụm cố định không có the. “the poem” = bài thơ cụ thể.",
    "17.0.0": "“My to-do list … is really long”: chủ ngữ số ít. “for tomorrow” = cho ngày mai; “really” nhấn mạnh.",
    "17.0.1": "“Tomorrow is a packed day” = ngày mai kín lịch. packed là tính từ (V3) đứng trước day; a + day.",
    "17.0.2": "“tied up” = bận. “all morning” = suốt buổi sáng, không dùng giới từ. “I’m” = I am.",
    "17.0.3": "“Are you available…?” = đảo be lên trước chủ ngữ để hỏi. “tomorrow afternoon” = chiều mai.",
    "17.0.4": "“have an early start” = phải bắt đầu sớm; “an” vì early bắt đầu bằng nguyên âm. “tomorrow” = trạng từ thời gian.",
    "17.0.5": "“double-booked” = bị xếp trùng lịch, V3 dùng như tính từ. “at three” = lúc 3 giờ. “Sorry, I’m …” = xin lỗi.",
    "17.0.6": "“I’ll wrap up the report tomorrow” = sẽ hoàn tất báo cáo. I’ll = I will, kế hoạch/quyết định. “wrap up” tách được: wrap it up.",
    "17.0.7": "Câu điều kiện loại 1: If + hiện tại đơn (rains), mệnh đề chính là câu hỏi. “what’s our plan B?” = kế hoạch dự phòng của chúng ta.",
    "17.1.0": "“Let’s play it by ear” = tùy cơ ứng biến; “it” là tân ngữ giả, cụm cố định không đổi.",
    "17.1.1": "“I’ll sleep on it and tell you tomorrow”: hai hành động nối bằng and cùng sau will. “sleep on it” = để suy nghĩ qua đêm.",
    "17.1.2": "“It was a last-minute change”: quá khứ đơn, a + tính từ ghép (last-minute) + danh từ. “last-minute” = vào phút chót.",
    "17.1.3": "“get round to + danh từ/V-ing” = tìm được thời gian làm. “it” = việc đang nhắc tới; “I’ll” = will.",
    "17.1.4": "“What are you up to tomorrow?” = bạn định làm gì? “be up to” = đang/sẽ làm gì. Thì hiện tại với nghĩa tương lai (kế hoạch).",
    "17.1.5": "“pencil it in” = ghi tạm vào lịch; “it” đứng giữa pencil và in. “for ten” = vào lúc 10 giờ.",
    "18.0.0": "“Let’s order…”: Let’s + V. “as a starter” = như món khai vị; as + danh từ = với vai trò. “spring rolls” số nhiều.",
    "18.0.1": "“For the main course, I’ll have the beef” = tôi sẽ dùng món bò. “I’ll have” là cách gọi món lịch sự (will + have).",
    "18.0.2": "“Do you have any + danh từ số nhiều?” = hỏi có không. “any” dùng trong câu hỏi; “vegetarian dishes” = món chay.",
    "18.0.3": "“allergic to + danh từ” = dị ứng với. Giới từ “to”, không dùng with. “peanuts” số nhiều.",
    "18.0.4": "“The portions here are huge” = khẩu phần ở đây rất lớn. “portions” số nhiều nên dùng are; “here” = ở đây.",
    "18.0.5": "“Let’s get takeaway tonight” = tối nay mua mang về. “takeaway” (Anh) là danh từ; “get + danh từ” = mua/lấy.",
    "18.0.6": "“Can I + V?” = xin phép. “take … home” = mang về nhà; “the leftovers” = đồ ăn thừa, luôn số nhiều.",
    "18.0.7": "“Do people leave a tip here?” = trợ từ do + chủ ngữ số nhiều (people). “leave a tip” = để lại tiền boa.",
    "18.1.0": "“I’m starving” = rất đói. “Let’s eat now” = rủ ăn ngay; hai câu ngắn liên tiếp, hợp lời nói.",
    "18.1.1": "“No more, thanks” = rút gọn của “I don’t want more”. “I’m full” = be + tính từ (no); full không phải động từ.",
    "18.1.2": "“craving something sweet”: craving là V-ing sau be (hiện tại tiếp diễn). “something + tính từ” = tính từ đứng sau (something sweet).",
    "18.1.3": "“The smell is mouth-watering” = mùi hương làm thèm. Mouth-watering là tính từ ghép, đứng sau be.",
    "18.1.4": "“a bit bland” = hơi nhạt. “a bit” làm nhẹ lời chê, lịch sự hơn “bland” đơn thuần.",
    "18.1.5": "“This homemade cake is amazing”: homemade (tính từ) đứng trước danh từ. “This cake” số ít nên is.",
    "19.0.0": "“The barista here makes…”: chủ ngữ số ít nên makes. “here” bổ nghĩa cho barista; “amazing latte art” = amazing + danh từ không đếm được.",
    "19.0.1": "“I need a double shot” = mình cần một ly đôi. “this morning” = sáng nay (this + buổi).",
    "19.0.2": "“Could you make it a bit stronger?” = so sánh hơn (strong + er). “make + it + tính từ” = làm cho nó… “a bit” giảm nhẹ yêu cầu.",
    "19.0.3": "“I just need a caffeine kick” = chỉ cần một chút caffeine. “just” = chỉ; “a caffeine kick” danh từ ghép.",
    "19.0.4": "“Can you use my reusable cup?” = nhờ vả. “reusable cup” = cốc dùng lại; reusable là tính từ bắt đầu bằng phụ âm âm /r/.",
    "19.0.5": "“Are refills free?” = refills số nhiều nên are; câu hỏi đảo be lên trước. “free” = miễn phí.",
    "19.0.6": "“Ten stamps and you get a free drink” = [Ten stamps] + and + [mệnh đề], nghĩa “đủ 10 tem là bạn được…”. “get” = nhận được; “a free drink”.",
    "19.0.7": "“I’ll have the usual” = mình dùng món quen thuộc. “the usual” = danh từ hóa của tính từ (cái thường dùng). “please” để lịch sự.",
    "19.1.0": "“Lime juice is so refreshing on a hot day”: so + tính từ = rất; “on a hot day” = vào ngày nóng; on + ngày.",
    "19.1.1": "“Egg coffee is really creamy” = cà phê trứng rất béo ngậy. “creamy” = tính từ có -y; “really” nhấn mạnh.",
    "19.1.2": "“too + tính từ” = quá (mang nghĩa tiêu cực). “because of + danh từ” (the ice) = vì. “a bit too watery” = hơi bị loãng.",
    "19.1.3": "“from five to seven” = từ 5 đến 7 giờ. “Happy hour” là chủ ngữ số ít nên is.",
    "19.1.4": "“Do you have + danh từ?” = hỏi quán có không. “non-alcoholic beer” = bia không cồn; tính từ ghép trước danh từ.",
    "19.1.5": "“Whisky on the rocks, please” = câu gọi món rút gọn (không có động từ). “on the rocks” = uống với đá viên; please lịch sự.",
    "20.0.0": "“have a reservation for two” = có đặt chỗ cho hai người. “for + số người”. Dùng a vì reservation bắt đầu bằng phụ âm.",
    "20.0.1": "Quá khứ đơn: was. “Our server” chủ ngữ số ít. “really friendly” = rất thân thiện.",
    "20.0.2": "“What’s the house specialty?” = món đặc trưng của quán. What’s = What is; “the” vì món cụ thể.",
    "20.0.3": "“The set menu includes…” = hiện tại đơn, chủ ngữ số ít nên includes. “a drink and dessert” = hai danh từ nối bằng and.",
    "20.0.4": "“Can I get a refill?” = xin thêm lượt đổ đầy. “get” = có được; “a refill” = a + danh từ đếm được.",
    "20.0.5": "“Could I get…?” = lịch sự hơn Can I. “for this” = cho món này; “takeaway box” = hộp mang về, danh từ ghép.",
    "20.0.6": "“There’s a ten percent service charge”: There is + danh từ số ít. “ten percent” làm tính từ nên percent không có -s.",
    "20.0.7": "“Is it normal to + V?” = có bình thường khi… “It” = chủ ngữ giả; “to leave a tip” = chủ ngữ thật.",
    "20.1.0": "“Is this dish vegan?” = câu hỏi đảo be lên trước. “vegan” = thuần chay (tính từ); “this dish” số ít.",
    "20.1.1": "“Do you have gluten-free options?” = Do + you + V. “options” = lựa chọn, số nhiều.",
    "20.1.2": "“I’m afraid + mệnh đề” = e rằng (báo điều không vui một cách lịch sự). “the chicken is undercooked” = chưa chín, is vì chicken không đếm được.",
    "20.1.3": "“The beef is so tender”: so + tính từ = rất; beef không đếm được nên is.",
    "20.1.4": "“I love how + tính từ + chủ ngữ + động từ” = tôi thích việc… giòn thế nào. Thứ tự: how crispy the spring rolls are (tính từ trước, chủ ngữ sau).",
    "20.1.5": "“a bit too rich for me” = hơi quá béo/đậm đối với tôi. “for me” = theo cảm nhận cá nhân; too + tính từ.",
    "21.0.0": "“The spring rolls are crispy”: chủ ngữ số nhiều nên are. “crispy” = giòn (tính từ).",
    "21.0.1": "“The beef is so tender”: beef số ít nên is; “so” nhấn mạnh tính từ.",
    "21.0.2": "“prefer + danh từ” = thích hơn. “savory food”: food không đếm được nên không có a.",
    "21.0.3": "“This cake is very rich”: rich ở đây = béo, ngậy (không phải “giàu”). “very” đứng trước tính từ.",
    "21.0.4": "“a bit bland” = hơi nhạt. “The soup is” số ít nên is.",
    "21.0.5": "“too + tính từ” = quá. “The fries are too greasy”: fries luôn số nhiều nên are.",
    "21.0.6": "“This lemonade is refreshing”: lemonade không đếm được nên is; refreshing (-ing) mô tả sự vật gây ra cảm giác.",
    "21.0.7": "“That pizza looks mouth-watering”: look + tính từ = trông có vẻ; “looks” có -s vì pizza số ít.",
    "21.1.0": "“Let’s share an appetizer” = rủ chia sẻ; “an” vì appetizer bắt đầu bằng nguyên âm. Share = động từ nguyên mẫu sau Let’s.",
    "21.1.1": "Câu cảm thán: What + a + tính từ + danh từ! (a cozy café). Không cần chủ ngữ và động từ.",
    "21.1.2": "“love + danh từ” = rất thích. “the ambiance here” = không khí ở đây; ambiance không đếm được.",
    "21.1.3": "“Could I take the leftovers home?” = xin phép lịch sự. “leftovers” số nhiều, thường có the.",
    "21.1.4": "“Is the tip included?” = bị động hiện tại dạng câu hỏi (is + V3). “tip” = tiền boa, “gratuity” là từ trang trọng.",
    "21.1.5": "“on the house” = nhà hàng mời (miễn phí). “The dessert is” số ít nên is; cụm cố định luôn có the.",
    "21.1.6": "“Can we order à la carte?” = gọi riêng từng món. “à la carte” là trạng từ ở đây nên đứng sau động từ; không cần giới từ.",
    "21.2.0": "“I’m craving pasta” = hiện tại tiếp diễn nói cảm giác lúc này. “pasta” không đếm được nên không có a.",
    "21.2.1": "“I’ll go for the soup” = quyết định ngay (will). “go for + món” = chọn món đó; “the soup” = món cụ thể trong thực đơn.",
    "21.2.2": "“It’s absolutely delicious!” = absolutely là trạng từ nhấn mạnh tính từ tuyệt đối (delicious), không dùng “very” với từ này.",
    "21.2.3": "“piping hot” = nóng hổi, trạng từ + tính từ cố định. “It’s” = It is.",
    "21.2.4": "“It’s on me” = tôi trả/chịu. on + me = chi phí do tôi; dùng khi mời đãi.",
    "21.2.5": "“My compliments to the chef” = câu khen cố định, không có động từ. “compliments” luôn số nhiều.",
    "22.0.0": "“Please pay at the checkout” = câu mệnh lệnh lịch sự. “at the checkout” = tại quầy thanh toán; at + nơi chốn.",
    "22.0.1": "“Sorry, that size is out of stock”: be + out of stock = hết hàng. “that size” chỉ vật xa; không có the trước stock.",
    "22.0.2": "“Is this model in stock?” = đảo be lên trước. “in stock” = còn hàng, đối lập với out of stock.",
    "22.0.3": "“What brand is this?” = What + danh từ + be + chủ ngữ. “this” = đại từ chỉ vật gần.",
    "22.0.4": "“There’s no price tag on this one” = There is no + danh từ. “no” = không có; “this one” = món này, one thay thế danh từ.",
    "22.0.5": "“These T-shirts are buy one, get one free” = khuyến mãi mua 1 tặng 1. “These” số nhiều + are; cụm sau are là cụm cố định.",
    "22.0.6": "“Do you have a loyalty card?” = Do + you + V. “a loyalty card” = thẻ khách hàng thân thiết.",
    "22.0.7": "“What’s your return policy?” = What is…; your = tính từ sở hữu; policy số ít.",
    "22.1.0": "Quá khứ đơn: went (go → went). “go window shopping” = đi ngắm đồ chứ không mua; “just” = chỉ.",
    "22.1.1": "“Only ninety thousand?” = câu hỏi rút gọn. “That’s a bargain!” = That is a + danh từ; bargain = món hời.",
    "22.1.2": "Câu cảm thán: What a + danh từ! “a rip-off” = món bị chặt chém. “Five dollars for water?” = câu hỏi rút gọn.",
    "22.1.3": "“can’t afford + danh từ” = không đủ tiền mua. “it” = tân ngữ; “right now” = ngay lúc này.",
    "22.1.4": "“This bag was an impulse buy”: quá khứ đơn; “an” vì impulse bắt đầu bằng nguyên âm; impulse buy = món mua bốc đồng.",
    "22.1.5": "“usually” (trạng từ tần suất) đứng trước động từ chính. “shop online” = mua sắm trực tuyến; online là trạng từ.",
    "23.0.0": "Câu mệnh lệnh: Turn right (không có chủ ngữ). “at the next intersection” = tại ngã tư tiếp theo; at + điểm; “next” = tiếp theo.",
    "23.0.1": "Câu mệnh lệnh: Take + số thứ tự + danh từ. “the second exit” = lối ra thứ hai (the + số thứ tự); “at the roundabout” = tại vòng xuyến.",
    "23.0.2": "“Use the crosswalk to cross the street” = dùng… để băng qua. “to + V” chỉ mục đích; crosswalk = vạch sang đường (Mỹ).",
    "23.0.3": "“The tall tower is a good landmark”: tall tower = chủ ngữ số ít nên is. “a good landmark” = vật mốc tốt.",
    "23.0.4": "“Don’t go that way” = đừng đi lối đó. “It’s a dead end” = ngõ cụt; “It’s” = It is, “a” trước dead end.",
    "23.0.5": "“There’s a shortcut through the park”: There is + danh từ số ít. “through + khu vực” = xuyên qua.",
    "23.0.6": "“This street is for pedestrians only” = chỉ dành cho người đi bộ. “for + danh từ số nhiều”; “only” đứng sau danh từ để nhấn mạnh.",
    "23.0.7": "“The road is closed, so we need a detour”: so = vì vậy. closed là V3 dùng như tính từ; “a detour” = đường vòng.",
    "23.1.0": "Quá khứ đơn: arrived. “on time” = đúng giờ (không phải in time = kịp lúc). “The train” chủ ngữ số ít.",
    "23.1.1": "“I’m in a hurry” = tôi đang vội. “in a hurry” = cụm cố định có a; “Sorry, …” = xin lỗi trước khi nói lý do.",
    "23.1.2": "“What’s the bus schedule?” = What is…; bus làm tính từ cho schedule, không thêm -s. “the” vì lịch cụ thể.",
    "23.1.3": "“The departure time is nine o’clock” = giờ khởi hành. “nine o’clock” = đúng 9 giờ; time số ít nên is.",
    "23.1.4": "“My flight is delayed” = bị hoãn/trễ. delayed (V3) dùng như tính từ sau be. Chủ ngữ số ít nên is.",
    "23.1.5": "“have an appointment at ten”: an trước appointment (nguyên âm). “at ten” = lúc 10 giờ.",
    "24.0.0": "“at the end of + danh từ” = ở cuối. “a small alley” = một con hẻm nhỏ; “The café is” chủ ngữ số ít.",
    "24.0.1": "“It’s three blocks from here” = cách đây ba dãy nhà. “three blocks” = số + danh từ số nhiều; from + điểm xuất phát.",
    "24.0.2": "Câu mệnh lệnh: Turn left. “at the next junction” = tại ngã ba kế; junction = chỗ giao nhau.",
    "24.0.3": "“You can’t drive there” = can’t + V = không được phép. “a one-way street” = đường một chiều; one-way dùng gạch nối, không có -s.",
    "24.0.4": "Câu mệnh lệnh: Make a U-turn = quay đầu xe. “at the next traffic lights” = tại đèn giao thông tiếp; lights số nhiều.",
    "24.0.5": "“Use the overpass to cross the main road” = dùng cầu vượt để băng qua. “to cross” = để; “the main road” = đường chính.",
    "24.0.6": "Câu mệnh lệnh: Bear right = rẽ nhẹ sang phải. “at the fork in the road” = tại chỗ rẽ nhánh; fork = ngã ba hình chữ Y.",
    "24.0.7": "Câu mệnh lệnh: Look for + vật = tìm. “the signpost to the old town” = biển chỉ đường đến phố cổ; to + đích đến.",
    "24.1.0": "“Can you drop me a pin?” = gửi cho tôi vị trí ghim. “drop + người + vật” = hai tân ngữ liên tiếp; me đứng trước a pin.",
    "24.1.1": "“always” đứng trước động từ chính. “get lost” = bị lạc (get + V3). “in the Old Quarter” = trong khu Phố Cổ.",
    "24.1.2": "“to the north of + địa điểm” = ở phía bắc của. “The lake is” số ít; to the + hướng.",
    "24.1.3": "“Meet me at the main entrance” = câu mệnh lệnh. “main entrance” = lối vào chính; at + địa điểm hẹn.",
    "24.1.4": "“within walking distance of + nơi” = trong khoảng đi bộ tới. “within” = bên trong; of + nơi đến.",
    "24.1.5": "“a stone’s throw from + nơi” = rất gần. “My house is” = chủ ngữ số ít; “from the market” = so với chợ.",
    "25.0.0": "“give someone a hand with + vật” = giúp ai việc gì. “Can you …?” = nhờ vả; “these boxes” = số nhiều.",
    "25.0.1": "“Could you do me a big favor?” = lịch sự hơn Can you. “do + người + a favor” = làm ơn giúp; “a big favor” = lời nhờ lớn.",
    "25.0.2": "“I can’t figure out how this works”: how + chủ ngữ + động từ (thứ tự câu trần thuật, không đảo). “figure out” = hiểu ra.",
    "25.0.3": "“Don’t worry” = đừng lo. “we’ll sort it out” = We will…; “sort out” tách được: sort it out.",
    "25.0.4": "Quá khứ đơn: got. “get stuck on + vật” = bị kẹt ở. “the last question” = câu cuối cùng.",
    "25.0.5": "“The ticket machine is out of order” = hỏng. “out of order” cụm cố định, không có mạo từ.",
    "25.0.6": "“Could you walk me through it?” = hướng dẫn tôi từng bước. “walk + người + through + vật”; “it” = việc cần làm.",
    "25.0.7": "“look after + vật/người” = trông chừng. “for a minute” = trong một phút (for + khoảng thời gian ngắn). “my bag” = tân ngữ.",
    "25.1.0": "“Thanks for covering for me” = for + V-ing (sau giới từ). “I owe you one” = tôi nợ bạn một ơn (hiện tại đơn).",
    "25.1.1": "“You found my keys?” = quá khứ đơn dùng ngữ điệu hỏi. “You’re a lifesaver!” = You are + a + danh từ; lifesaver = ân nhân.",
    "25.1.2": "“That’s very kind of you” = kind of + người = bạn thật tốt bụng. Cấu trúc: It/That is + tính từ + of + người.",
    "25.1.3": "“Don’t mention it” = đừng nhắc đến (không có gì). “Happy to help” = rút gọn của I’m happy to help.",
    "25.1.4": "“It was my pleasure” = quá khứ đơn của be, dùng khi vừa giúp xong. “my pleasure” = niềm vui của tôi.",
    "26.0.0": "“feel + tính từ” (nauseous). “after eating” = sau + V-ing; “after” có thể đi với V-ing khi cùng chủ ngữ.",
    "26.0.1": "“a blocked nose and can’t smell anything”: hai vế nối bằng and; vế sau thiếu chủ ngữ I vì cùng chủ ngữ. “anything” dùng trong phủ định.",
    "26.0.2": "“I have a rash on my arm” = a + danh từ đếm được; “on my arm” = trên tay (on + bề mặt cơ thể).",
    "26.0.3": "“My skin is really itchy”: skin không đếm được nên is; “really itchy” = rất ngứa.",
    "26.0.4": "“My ankle is swollen”: swollen là V3 của swell dùng như tính từ sau be. Chủ ngữ số ít nên is.",
    "26.0.5": "Quá khứ đơn: sprained. “playing football” = V-ing chỉ hoạt động diễn ra cùng lúc. “my ankle” = mắt cá chân của tôi.",
    "26.0.6": "“a sharp pain in my chest” = a + tính từ + danh từ + in + bộ phận cơ thể. pain đếm được trong nghĩa “cơn đau”.",
    "26.0.7": "“I think + mệnh đề” = tôi nghĩ. “an allergic reaction” = an trước nguyên âm; “to seafood” = dị ứng với hải sản (to).",
    "26.1.0": "“You can buy it over the counter” = mua không cần đơn. “over the counter” = cụm cố định, có the; trước danh từ viết có gạch nối.",
    "26.1.1": "“Please check the dosage on the box” = câu mệnh lệnh lịch sự. “on the box” = trên hộp; dosage không đếm được.",
    "26.1.2": "“The side effects are usually mild”: effects số nhiều nên are. “usually” = trạng từ tần suất sau be. “mild” = nhẹ.",
    "26.1.3": "“go for a check-up” = đi khám. “every year” = mỗi năm, trạng từ tần suất; hiện tại đơn, thói quen.",
    "26.1.4": "“Let’s book a follow-up appointment” = rủ đặt lịch tái khám. “next week” = tuần sau; follow-up = tính từ ghép.",
    "26.1.5": "“Is it contagious?” = câu hỏi đảo be lên trước. “it” = chỉ bệnh; contagious = lây.",
    "26.1.6": "“It took me a week to get over the flu”: took + người + thời gian + to + V. “get over” = khỏi (bệnh); “the flu” = bệnh cúm.",
    "27.0.0": "“My commute is about forty minutes”: about = khoảng. Chủ ngữ số ít nên is; “forty minutes” số nhiều.",
    "27.0.1": "Câu mệnh lệnh: Avoid + danh từ. “during rush hour” = trong giờ cao điểm; không có the trước rush hour.",
    "27.0.2": "“usually” trước động từ chính. “a ride-hailing app” = a + tính từ ghép + danh từ; use + vật.",
    "27.0.3": "“Can you drop me off at the corner?” = thả tôi xuống. “drop + người + off” = đưa xuống xe; “at the corner” = ở góc đường.",
    "27.0.4": "“need to + V” = cần. “catch the six o’clock train” = bắt chuyến tàu 6 giờ; catch + phương tiện.",
    "27.0.5": "“Can you give me a lift to the station?” = cho tôi đi nhờ xe. “give + người + a lift”; “to + nơi” = đến đâu.",
    "27.0.6": "“Is there a car park nearby?” = There is + a + danh từ số ít, ở dạng câu hỏi. “nearby” = gần đây, trạng từ.",
    "27.1.0": "“Is there a direct flight to Seoul?” = Is there + a + danh từ. “to + nơi đến”; direct = trực tiếp.",
    "27.1.1": "“have a three-hour layover”: số + danh từ làm tính từ ghép nên hour không -s. “in Bangkok” = tại Bangkok.",
    "27.1.2": "“I only have a carry-on” = chỉ có hành lý xách tay. “only” đứng trước động từ chính, nhấn mạnh.",
    "27.1.3": "“Let’s meet at baggage claim” = rủ hẹn; at + địa điểm trong sân bay, không có the.",
    "27.1.4": "“still have jet lag” = vẫn còn bị lệch múi giờ. “still” đứng trước động từ chính; jet lag không đếm được.",
    "27.1.5": "“get carsick” = bị say xe (get + tính từ). “on long bus trips” = trên các chuyến xe buýt dài; hiện tại đơn, thói quen.",
    "28.0.0": "“Can you send me the itinerary?” = send + người + vật. “the itinerary” = lịch trình cụ thể.",
    "28.0.1": "Quá khứ đơn: went (go → went). “go backpacking” = đi du lịch bụi; “around + khu vực” = vòng quanh.",
    "28.0.2": "“Hostels are great for budget travel”: hostels số nhiều nên are. “great for + danh từ” = tuyệt vời cho; budget travel không đếm được.",
    "28.0.3": "Quá khứ đơn: stayed. “stay at + nơi lưu trú” (at a homestay); “in Ha Giang” = ở Hà Giang.",
    "28.0.4": "“It’s an all-inclusive resort”: an vì all-inclusive bắt đầu bằng nguyên âm. all-inclusive = đã gồm mọi dịch vụ.",
    "28.0.5": "“always” trước động từ chính. “travel light” = đi nhẹ hành lý; light là trạng từ. “with just a backpack” = chỉ với một ba lô.",
    "28.0.6": "Quá khứ đơn: took (take → took). “take a day trip to + nơi” = đi chơi trong ngày; to + nơi đến.",
    "28.1.0": "“This little café is a hidden gem”: hidden = tính từ V3; gem = viên ngọc, nghĩa bóng là nơi ít người biết nhưng tốt.",
    "28.1.1": "“Avoid that street” = câu mệnh lệnh. “It’s a tourist trap” = It is + a + danh từ; tourist trap = chỗ chặt chém khách du lịch.",
    "28.1.2": "“prefer + danh từ số nhiều”. “places off the beaten track” = địa điểm ít người đến; “off the beaten track” bổ nghĩa cho places.",
    "28.1.3": "Quá khứ đơn: had. “a bit of + danh từ không đếm được” = một chút. “at first” = lúc đầu.",
    "28.1.4": "“Visiting Iceland is on my bucket list”: chủ ngữ V-ing (số ít) nên is. “on my bucket list” = nằm trong danh sách ước mơ.",
    "28.1.5": "“I have serious wanderlust” = serious là tính từ bổ nghĩa cho wanderlust (không đếm được, không có a).",
    "29.0.0": "“we’re fully booked” = We are + fully + V3. “tonight” = tối nay; “Sorry, …” mở đầu lịch sự khi từ chối.",
    "29.0.1": "“What’s the rate for a suite?” = What is…; “for + loại phòng”; a suite dùng a vì âm phụ âm /s/.",
    "29.0.2": "“We need a deposit of fifty dollars” = a + danh từ + of + số tiền. “fifty dollars” = số + danh từ số nhiều.",
    "29.0.3": "“This rate is non-refundable” = non- + tính từ = không thể hoàn. “rate” = giá phòng; chủ ngữ số ít nên is.",
    "29.0.4": "“What’s your cancellation policy?” = chính sách hủy. “your” = tính từ sở hữu, hỏi chính sách của khách sạn.",
    "29.0.5": "“The water in the room is complimentary” = miễn phí. “in the room” bổ nghĩa cho water; water không đếm được nên is.",
    "29.0.6": "“Is there any chance of an upgrade?” = có khả năng nâng hạng không? “any” trong câu hỏi; “of + danh từ”; an vì upgrade bắt đầu nguyên âm.",
    "29.0.7": "“I think I was overcharged” = bị động quá khứ (was + V3) = tôi bị tính quá tiền. “I think + mệnh đề” = lịch sự, không quá khẳng định.",
    "29.1.0": "Câu mệnh lệnh: Please call + nơi. “the front desk” = quầy lễ tân; call + danh từ không cần giới từ.",
    "29.1.1": "“Housekeeping” là danh từ không đếm được, chủ ngữ số ít nên “comes”. “at ten” = lúc 10 giờ.",
    "29.1.2": "“I’ll call maintenance for you” = I will…; “for you” = giúp bạn. “maintenance” không đếm được, không có the.",
    "29.1.3": "Câu mệnh lệnh: Ask + người + to + V. “Ask the concierge to book a tour” = nhờ nhân viên hướng dẫn đặt tour.",
    "29.1.4": "“The hotel has great amenities”: has vì chủ ngữ số ít; “amenities” luôn số nhiều.",
    "29.1.5": "“Would you like + danh từ?” = hỏi lịch sự về lựa chọn. “turndown service” = dịch vụ dọn giường buổi tối; không có a.",
    "29.1.6": "“Could you charge it to my room?” = ghi vào hóa đơn phòng. “charge + vật + to + nơi”; “to my room”.",
    "30.0.0": "Quá khứ đơn: called, picked. “but” nối hai ý đối lập. “nobody” = không ai, đi với động từ ở dạng khẳng định. “three times” = ba lần.",
    "30.0.1": "“Don’t hang up!” = câu mệnh lệnh phủ định; “hang up” = cúp máy. “I have one more question” = hiện tại đơn.",
    "30.0.2": "“Can you call me back in ten minutes?” = gọi lại cho tôi sau 10 phút. “call + người + back”; in + khoảng thời gian.",
    "30.0.3": "Quá khứ đơn: put (put-put-put). “put + người + on hold” = bắt chờ máy. “for twenty minutes” = trong 20 phút.",
    "30.0.4": "Quá khứ đơn: got (get → got). “get through to + nơi/người” = liên lạc được. “finally” = cuối cùng.",
    "30.0.5": "“Sorry, we got cut off” = bị động với get (get + V3) = bị ngắt cuộc gọi. Quá khứ: got; cut không đổi dạng.",
    "30.1.0": "“have three missed calls from you”: missed = tính từ V-ed, calls số nhiều. “from you” = từ bạn.",
    "30.1.1": "Quá khứ đơn: left (leave → left). “leave + người + vật” = để lại; “a voicemail” = tin nhắn thoại.",
    "30.1.2": "“My extension is two oh four” = số máy lẻ; “oh” đọc là số 0 khi đọc số điện thoại. Chủ ngữ số ít nên is.",
    "30.1.3": "“Do you have a landline number?” = Do + you + V; “landline” = điện thoại bàn, danh từ bổ nghĩa cho number.",
    "30.1.4": "“There’s no reception in the basement”: There is no + danh từ không đếm được; “in the basement” = ở tầng hầm.",
    "30.1.5": "“I’m putting you on speakerphone” = hiện tại tiếp diễn, hành động đang xảy ra. “put + người + on + chế độ”.",
    "30.1.6": "“my battery is dying” = hiện tại tiếp diễn, đang xảy ra. “I’ll text you” = sẽ nhắn tin; text dùng như động từ + tân ngữ.",
    "31.0.0": "“be into + danh từ” = đang mê. “really” nhấn mạnh; “right now” = ngay lúc này, đi với hiện tại.",
    "31.0.1": "“be keen on + V-ing” = ham thích. “She’s” = She is; “learning” = V-ing sau giới từ on.",
    "31.0.2": "“be a big fan of + danh từ” = fan cuồng. “detective stories” = số nhiều khi nói chung chung.",
    "31.0.3": "“be crazy about + danh từ” = phát cuồng. “My son is” số ít; “dinosaurs” số nhiều chỉ nói chung.",
    "31.0.4": "“be passionate about + danh từ/V-ing” = đam mê. “He’s” = He is; “photography” không đếm được.",
    "31.0.5": "Quá khứ đơn: got hooked (get + V3 = trở nên nghiện). “on + vật”; “last week” = tuần trước.",
    "31.0.6": "Hiện tại hoàn thành: have + V3 (taken, take → taken). “recently” = gần đây. “take up + sở thích” = bắt đầu.",
    "31.0.7": "“Gardening helps me unwind”: chủ ngữ V-ing, helps có -s; “help + người + V nguyên mẫu” = giúp ai làm gì. “after work”.",
    "31.1.0": "“isn’t really my cup of tea” = không hợp gu. “really” làm câu phủ định nhẹ hơn; “Jazz” không đếm được.",
    "31.1.1": "“Camping is not my thing” = không phải sở thích của tôi. “my thing” cụm cố định; chủ ngữ V-ing nên is.",
    "31.1.2": "Quá khứ đơn: gave up (give → gave). “when I was ten” = khi tôi 10 tuổi; was vì chủ ngữ I ở quá khứ.",
    "31.1.3": "“I’m a bit of a bookworm” = a bit of a + danh từ = hơi giống. “bookworm” = mọt sách; a vì âm phụ âm /b/.",
    "31.1.4": "“As a foodie” = với tư cách là. “As + a + danh từ” ở đầu câu rồi mới đến mệnh đề; “love + V-ing” = thích làm gì.",
    "31.1.5": "“On Sundays, I’m a total couch potato” = vào Chủ nhật. “total” = hoàn toàn; “a couch potato” = người lười, chỉ nằm xem TV.",
    "31.1.6": "“Fishing is a popular pastime here”: chủ ngữ V-ing nên is. “popular” = phổ biến; “pastime” = thú tiêu khiển.",
    "32.0.0": "Quá khứ đơn: had. “have a lie-in” = ngủ nướng; “a long lie-in” = a + tính từ + danh từ. “on Sunday” = vào Chủ nhật.",
    "32.0.1": "Quá khứ đơn: chilled out. “just” = chỉ. “at home” = ở nhà, không có the.",
    "32.0.2": "“need a quiet weekend to recharge”: to + V chỉ mục đích (để nạp lại năng lượng). “quiet weekend” = cuối tuần yên tĩnh.",
    "32.0.3": "“Sunday morning is my me-time” = chủ ngữ số ít nên is. “me-time” = thời gian dành riêng cho bản thân.",
    "32.0.4": "“Let’s meet for brunch on Sunday”: for + bữa ăn. “brunch” không đếm được, không có a; “on Sunday” = vào Chủ nhật.",
    "32.0.5": "Quá khứ đơn: had. “a staycation” = kỳ nghỉ ngay tại thành phố; “at a nice hotel in town” = at + khách sạn.",
    "32.0.6": "“Tam Dao is perfect for a weekend getaway” = perfect for + danh từ. “a weekend getaway” = chuyến đi ngắn cuối tuần.",
    "32.0.7": "“It’s a long weekend, so we’re going to the beach”: so = vì vậy; “be going to + V” hoặc “be going to + nơi” chỉ dự định.",
    "32.1.0": "Quá khứ đơn: spent (spend → spent). “spend + thời gian + V-ing” = dành thời gian làm gì; “running errands”.",
    "32.1.1": "Quá khứ đơn: caught (catch → caught). “catch up on + danh từ” = bù lại; “this weekend” = cuối tuần này.",
    "32.1.2": "“I was a total couch potato on Sunday” = quá khứ đơn, was vì chủ ngữ I. “a total + danh từ” = hoàn toàn là.",
    "32.1.3": "“I’ve got” = I have got (= I have). “the Monday blues” = cảm giác chán đầu tuần; “today” = hôm nay.",
    "32.1.4": "“TGIF!” = Thank God it’s Friday. Câu cảm thán ngắn. “Any plans?” = rút gọn của Do you have any plans?",
    "32.1.5": "Quá khứ đơn: flew (fly → flew). “fly by” = trôi qua rất nhanh; “The weekend” = chủ ngữ số ít.",
    "33.0.0": "Câu mệnh lệnh: Please RSVP = vui lòng phản hồi (RSVP dùng như động từ). “by Friday” = chậm nhất vào thứ Sáu; by + mốc thời gian.",
    "33.0.1": "“Save the date:” = ghi nhớ ngày. “our wedding is on June 5th”: on + ngày tháng; June 5th đọc “June fifth”.",
    "33.0.2": "“Can I bring a plus-one?” = xin phép. “a plus-one” = người đi cùng (khách mời mang theo).",
    "33.0.3": "“The dress code is smart casual” = quy định trang phục; “smart casual” = tính từ ghép dùng làm bổ ngữ sau be.",
    "33.0.4": "“It’s a black-tie event” = an event; “a” vì black-tie bắt đầu phụ âm, tính từ ghép có gạch nối trước danh từ.",
    "33.0.5": "“It’s a potluck, so bring a dish” = so + mệnh lệnh. “a potluck” = tiệc mỗi người mang một món; “bring” = mang theo.",
    "33.0.6": "“We’re having a small get-together” = hiện tại tiếp diễn chỉ dự định gần. “have a get-together” = tổ chức buổi họp mặt.",
    "33.0.7": "“She’s a wonderful host” = She is + a + tính từ + danh từ. “wonderful” = tuyệt vời; “host” = chủ nhà.",
    "33.1.0": "“A karaoke night?” = câu hỏi rút gọn. “Count me in!” = Câu mệnh lệnh dùng để nhận lời; “count + me + in”.",
    "33.1.1": "“Can I take a rain check?” = xin hẹn lần sau. “I’m exhausted tonight” = lý do; “exhausted” = kiệt sức.",
    "33.1.2": "“I’m so glad you could make it” = glad + (that) + mệnh đề. “could make it” = có thể đến được; could là quá khứ của can.",
    "33.1.3": "Quá khứ đơn: had to + V = phải làm gì. “turn down + vật” = từ chối; “the invitation”.",
    "33.1.4": "“Feel free to + V” = cứ thoải mái làm gì. “drop by” = ghé qua; “after work” = sau giờ làm.",
    "33.1.5": "“Sorry for + danh từ” = xin lỗi vì. “the last-minute invitation” = lời mời vào phút chót; câu cảm thán dùng !",
    "33.1.6": "Câu mệnh lệnh: Just bring + vật = chỉ cần mang. “if you like” = nếu bạn muốn; “a bottle” = một chai.",
    "34.0.0": "Quá khứ đơn: made (make → made). “make a decision” = đưa ra quyết định; “a great decision”.",
    "34.0.1": "Quá khứ đơn: gave (give → gave). “give a penalty” = cho đá phạt đền; “a penalty” = danh từ đếm được.",
    "34.0.2": "“They’re top of the league” = They are. “top of + danh từ” = đứng đầu; “the league” = giải đấu.",
    "34.0.3": "Quá khứ đơn: was. “Our opponent” số ít. “very strong” = tính từ.",
    "34.0.4": "Quá khứ đơn: missed. “He missed the penalty” = anh ấy đá hỏng phạt đền; “miss” = không thực hiện thành công.",
    "34.0.5": "Quá khứ đơn: went. “go to extra time” = bước vào hiệp phụ; “to + danh từ”; extra time không có the.",
    "34.0.6": "“Everyone loves an underdog”: everyone là chủ ngữ số ít (loves có -s). “an” vì underdog bắt đầu nguyên âm.",
    "34.0.7": "Quá khứ đơn: scored. “score a hat-trick” = ghi ba bàn; “a hat-trick” danh từ ghép có gạch nối. Câu cảm thán dùng !",
    "34.1.0": "“I’m so out of shape” = hơi thiếu thể lực. “so” = rất; “out of + danh từ” = hết/mất.",
    "34.1.1": "Quá khứ đơn: was. “out of breath” = hụt hơi; “after five minutes” = sau 5 phút.",
    "34.1.2": "“Running helps build stamina”: chủ ngữ V-ing, helps; “help + V nguyên mẫu” (không cần to); stamina không đếm được.",
    "34.1.3": "Quá khứ đơn: sprained. “sprain + bộ phận cơ thể” = bong gân; “my ankle” = mắt cá chân.",
    "34.1.4": "Quá khứ đơn: set (set-set-set). “a new personal best” = kỷ lục mới của bản thân; “today” = hôm nay.",
    "34.1.5": "“My muscles are sore” = số nhiều nên are. “after yesterday’s workout” = sau buổi tập hôm qua; ’s chỉ sở hữu.",
    "35.0.0": "“The director is famous for sci-fi movies” = famous for + danh từ. “director” số ít nên is.",
    "35.0.1": "Quá khứ đơn: was. “The cast” = danh từ tập thể; ở đây dùng số ít (was); “amazing” = tuyệt vời.",
    "35.0.2": "“Have you watched the trailer?” = hiện tại hoàn thành, hỏi về trải nghiệm. have + chủ ngữ + V3; “the trailer” = đoạn giới thiệu cụ thể.",
    "35.0.3": "“The sequel was better than the first one” = so sánh hơn: better (good → better) + than. “the first one” = phần đầu; one thay danh từ.",
    "35.0.4": "“the biggest blockbuster of the summer” = so sánh nhất: the + tính từ + -est; “of the summer” = trong mùa hè.",
    "35.0.5": "Quá khứ đơn: was. “a huge box office hit” = a + tính từ + danh từ ghép; huge bắt đầu bằng phụ âm /h/.",
    "35.0.6": "“love the soundtrack” = hiện tại đơn. “the soundtrack” = nhạc phim đã biết.",
    "35.1.0": "Quá khứ đơn phủ định: didn’t + V (see). “see + vật + V-ing” (coming) = nhìn thấy cái gì đang tới; “I didn’t see that coming!” = tôi không ngờ tới.",
    "35.1.1": "“Don’t read the comments” = đừng đọc. “There are spoilers” = There are + danh từ số nhiều (spoilers).",
    "35.1.2": "Quá khứ đơn: ended. “end on + danh từ” = kết thúc ở; “a cliffhanger” = kết lửng.",
    "35.1.3": "“I think that movie is a bit overrated”: I think + mệnh đề. “a bit” = hơi, làm nhẹ ý chê.",
    "35.1.4": "“It’s a must-see this year” = It is a must-see; must-see là danh từ ghép = thứ nhất định phải xem; “this year” = năm nay.",
    "35.1.5": "Quá khứ đơn: binge-watched. “the whole series” = toàn bộ phim bộ (whole đứng sau the); “this weekend”.",
    "36.0.0": "Quá khứ đơn: made (make → made). “made a playlist for + sự kiện” = làm danh sách nhạc cho; “our road trip”.",
    "36.0.1": "“usually” trước động từ chính. “stream music” = nghe nhạc trực tuyến; “on my phone” = on + thiết bị.",
    "36.0.2": "“number one on the charts” = đứng đầu bảng xếp hạng; “on the charts” = trong bảng xếp hạng (số nhiều).",
    "36.0.3": "Quá khứ đơn: released. “a new album” = một album mới; “last week” = tuần trước.",
    "36.0.4": "“prefer A to B” = thích A hơn B. “the cover to the original” = bản cover hơn bản gốc; to (không dùng than).",
    "36.0.5": "“My friend’s band has a gig on Friday”: ’s chỉ sở hữu; band là danh từ tập thể số ít nên has. “on Friday” = vào thứ Sáu.",
    "36.0.6": "“love + danh từ số nhiều” (versions). “acoustic versions of pop songs” = các bản acoustic của những bài pop; acoustic là tính từ đứng trước danh từ.",
    "36.1.0": "“That song is a real earworm” = That + danh từ số ít + is. “real” là tính từ nhấn mạnh (thật sự); earworm = giai điệu cứ lặp lại trong đầu. Dùng “a real” vì real bắt đầu bằng phụ âm.",
    "36.1.1": "“Don’t ask me to sing” = Don’t + V + tân ngữ + to + V. “I’m tone-deaf!” = tôi bị lạc tông; tone-deaf là tính từ ghép.",
    "36.1.2": "“The guitar is a bit out of tune”: out of tune = lạc tông. “a bit” làm nhẹ mức độ. Đối lập: in tune.",
    "36.1.3": "“She has a great ear for music”: has vì chủ ngữ số ít. “an ear for + danh từ” = khiếu cảm nhận về; for + lĩnh vực.",
    "36.1.4": "Quá khứ đơn: sang (sing → sang). “sing along to + bài hát/đoạn” = hát theo; “Everyone” số ít.",
    "36.1.5": "Quá khứ đơn: gave (give → gave). “give + người + goosebumps” = làm ai nổi da gà; me là tân ngữ gián tiếp, goosebumps luôn số nhiều."
  }
};
