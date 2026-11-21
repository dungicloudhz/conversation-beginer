/* Cheat sheet: Daily Routine (Hoạt động hằng ngày). Hiển thị bởi cheatsheet.js. */
window.A1_CHEAT = {
  goal: [
    "Kể lại một ngày của bạn từ lúc thức dậy đến lúc đi ngủ bằng thì hiện tại đơn.",
    "Nói bạn đi học, đi làm bằng phương tiện gì, mất bao lâu và mấy giờ đến nơi.",
    "Nói bạn làm một việc thường xuyên đến mức nào bằng always, usually, sometimes, never và once a week.",
    "Kể về người khác (he, she) với đúng đuôi -s, -es và câu phủ định doesn’t.",
    "Hỏi người khác về thói quen của họ bằng What time do you…? và How often do you…?, rồi hỏi lại bằng What about you?."
  ],
  phrases: [
    { h: "Buổi sáng", rows: [
      ["I wake up at six o’clock.", "Tôi thức dậy lúc 6 giờ.", "o’clock là dạng rút gọn cố định của “of the clock”, luôn viết như vậy."],
      ["I get up and make my bed.", "Tôi ra khỏi giường và dọn giường."],
      ["I wash my face and brush my teeth.", "Tôi rửa mặt và đánh răng."],
      ["I take a shower and get dressed.", "Tôi tắm và mặc quần áo."],
      ["I leave home at half past seven.", "Tôi rời nhà lúc 7 rưỡi."]
    ]},
    { h: "Đi học, đi làm và buổi trưa", rows: [
      ["I go to work by motorbike.", "Tôi đi làm bằng xe máy."],
      ["It takes about twenty minutes.", "Mất khoảng 20 phút.", "Dùng **It takes + thời gian** để nói đi đường mất bao lâu."],
      ["I start work at eight thirty.", "Tôi bắt đầu làm việc lúc 8 rưỡi."],
      ["I have lunch with my coworkers.", "Tôi ăn trưa với đồng nghiệp."],
      ["I finish work at five.", "Tôi tan làm lúc 5 giờ."]
    ]},
    { h: "Buổi tối và việc nhà", rows: [
      ["I have dinner at seven.", "Tôi ăn tối lúc 7 giờ."],
      ["After dinner, I wash the dishes.", "Sau bữa tối, tôi rửa bát."],
      ["I study English for thirty minutes.", "Tôi học tiếng Anh 30 phút."],
      ["I go to bed at eleven.", "Tôi đi ngủ lúc 11 giờ."],
      ["I do not work at the weekend.", "Tôi không làm việc vào cuối tuần.", "Khi nói thường rút gọn: I don’t work (don’t = do not)."]
    ]},
    { h: "Nói mức độ thường xuyên", rows: [
      ["I always brush my teeth before bed.", "Tôi luôn đánh răng trước khi đi ngủ."],
      ["We sometimes eat out.", "Thỉnh thoảng chúng tôi ăn ở ngoài."],
      ["I never drink coffee at night.", "Tôi không bao giờ uống cà phê vào buổi tối."],
      ["I go swimming once a week.", "Tôi đi bơi mỗi tuần một lần."],
      ["She goes to the gym three times a week.", "Cô ấy đi tập gym mỗi tuần ba lần."]
    ]},
    { h: "Hỏi và trả lời về thói quen", rows: [
      ["What time do you usually get up?", "Bạn thường dậy lúc mấy giờ?"],
      ["How do you get to work?", "Bạn đi làm bằng gì?"],
      ["How often do you exercise?", "Bạn tập thể dục bao lâu một lần?"],
      ["Do you cook every day? — No, I do not. Only on weekends.", "Ngày nào bạn cũng nấu ăn à? — Không. Chỉ cuối tuần thôi.", "Câu trả lời ngắn thường nói rút gọn: No, I don’t (don’t = do not)."],
      ["I usually get up at six. What about you?", "Mình thường dậy lúc 6 giờ. Còn bạn?", "Hỏi lại bằng **What about you?** hoặc **And you?** để cuộc trò chuyện không bị dừng."]
    ]}
  ],
  grammar: [
    { h: "Thì hiện tại đơn cho thói quen hằng ngày",
      f: ["I / You / We / They + động từ nguyên mẫu", "He / She / It + động từ thêm -s hoặc -es"],
      items: [
        { f: "I / You / We / They + động từ nguyên mẫu",
          mean: "**thói quen hằng ngày** của tôi, bạn, chúng tôi, họ. Động từ giữ nguyên, không thêm gì.",
          parts: [
            ["I", "tôi, mình."],
            ["You", "bạn, các bạn."],
            ["We", "chúng tôi, chúng ta."],
            ["They", "họ, chúng nó; cũng dùng cho danh từ số nhiều như my parents, the children."]
          ],
          use: "kể việc làm đều đặn mỗi ngày: thức dậy, ăn sáng, đi làm, đi ngủ. Thường có giờ giấc hoặc every day ở cuối câu.",
          note: "Chủ ngữ số nhiều như **my parents** cũng dùng động từ nguyên mẫu: My parents get up early (không thêm -s).",
          ex: [
            ["I have breakfast at seven.", "Tôi ăn sáng lúc bảy giờ."],
            ["We take a shower after work.", "Chúng tôi tắm sau giờ làm."],
            ["My parents go to bed at ten.", "Bố mẹ tôi đi ngủ lúc mười giờ."],
            ["You brush your teeth twice a day.", "Bạn đánh răng hai lần mỗi ngày."]
          ] },
        { f: "He / She / It + động từ thêm -s hoặc -es",
          mean: "**thói quen hằng ngày của một người hoặc một vật** (anh ấy, cô ấy, nó). Động từ phải thêm -s hoặc -es.",
          parts: [
            ["thêm -s", "phần lớn động từ: work → works, get → gets, read → reads."],
            ["thêm -es", "động từ tận cùng -o, -sh, -ch, -x: go → goes, wash → washes, watch → watches."],
            ["phụ âm + y → -ies", "study → studies, tidy → tidies (nhưng play → plays vì trước y là nguyên âm)."],
            ["have → has", "trường hợp đặc biệt: She has lunch at noon."]
          ],
          use: "dùng với he, she, it và với **một** người hay vật cụ thể: my mum, Tom, the bus, my cat.",
          note: "Người Việt rất hay quên -s khi nói nhanh. Mẹo: thấy chủ ngữ là **một người khác** (không phải I, you) thì nhớ thêm -s.",
          ex: [
            ["My mum cooks dinner every evening.", "Mẹ tôi nấu bữa tối mỗi tối."],
            ["He washes his car on Sundays.", "Anh ấy rửa xe vào Chủ nhật."],
            ["The bus leaves at half past seven.", "Xe buýt chạy lúc bảy giờ rưỡi."],
            ["My sister has a shower in the morning.", "Chị tôi tắm vào buổi sáng."]
          ] }
      ],
      p: [
        "Việc bạn làm đều đặn, lặp lại mỗi ngày thì dùng **thì hiện tại đơn**, không dùng hiện tại tiếp diễn. Vì vậy khi kể một ngày bình thường của mình, gần như mọi câu đều ở thì này: I get up at six.",
        "Khi chủ ngữ là **he, she, it** hoặc một người (my brother, Tom), động từ phải thêm **-s**. Động từ tận cùng bằng -o, -sh, -ch, -x thêm **-es** (go → goes, watch → watches). Động từ tận cùng bằng phụ âm + y thì đổi y thành **ies** (study → studies).",
        "Động từ **have** là trường hợp đặc biệt: với he, she, it phải đổi thành **has** (She has breakfast at seven)."
      ],
      ex: [["She gets up at six.", "Cô ấy dậy lúc 6 giờ."], ["My brother studies English.", "Anh trai tôi học tiếng Anh."]]
    },
    { h: "go to + nơi chốn và ba ngoại lệ home, here, there",
      f: ["go to + nơi chốn", "go home / go here / go there", "by + phương tiện / on foot"],
      items: [
        { f: "go to + nơi chốn",
          mean: "**đi đến một nơi nào đó**. Chữ to chỉ hướng đi tới.",
          parts: [
            ["go to work", "đi làm (không có the)."],
            ["go to school", "đi học (không có the)."],
            ["go to bed", "đi ngủ (không có the)."],
            ["go to the + nơi chốn", "các nơi khác thường có the: go to the market, go to the gym."]
          ],
          use: "dùng khi kể đi đâu trong ngày. Với he, she, it đổi go thành **goes**: She goes to work.",
          note: "work, school, bed là những nơi quen thuộc hằng ngày nên **không dùng the**. Không nói “go to the bed” khi nói đi ngủ.",
          ex: [
            ["I go to work at eight.", "Tôi đi làm lúc tám giờ."],
            ["My son goes to school by bike.", "Con trai tôi đi học bằng xe đạp."],
            ["We go to the gym after work.", "Chúng tôi đến phòng tập sau giờ làm."],
            ["What time do you go to bed?", "Bạn đi ngủ lúc mấy giờ?"]
          ] },
        { f: "go home / go here / go there",
          mean: "**về nhà / đến đây / đến đó**. Ba từ này đã mang nghĩa nơi đến, nên **không có to**.",
          parts: [
            ["go home", "về nhà. Cũng nói get home (về đến nhà), come home (về nhà, khi người nói đang ở nhà)."],
            ["go here / come here", "đến đây. Thường dùng come here hơn."],
            ["go there", "đến đó, đến chỗ đó."]
          ],
          use: "dùng home, here, there ngay sau động từ chỉ di chuyển (go, come, get, walk, drive).",
          note: "Lỗi rất phổ biến: “go to home”. Nói **go home**. Nhưng khi ở trong nhà thì dùng **at home**: I stay at home.",
          ex: [
            ["I go home at six.", "Tôi về nhà lúc sáu giờ."],
            ["She gets home very late.", "Cô ấy về đến nhà rất muộn."],
            ["The market is near. I walk there every morning.", "Chợ ở gần. Sáng nào tôi cũng đi bộ đến đó."],
            ["Come here, please.", "Lại đây nào."]
          ] },
        { f: "by + phương tiện / on foot",
          mean: "**đi bằng phương tiện gì**: by bus (bằng xe buýt), on foot (đi bộ).",
          parts: [
            ["by bus / by car / by motorbike / by train", "đi bằng phương tiện; sau by **không có** the, a, my."],
            ["on foot", "**đi bộ**. Không nói “by foot”."],
            ["take the bus / ride a motorbike / walk", "cách nói khác bằng động từ: I take the bus, I walk to work."]
          ],
          use: "đặt ở cuối cụm di chuyển: go to work by bus. Câu hỏi tương ứng là **How do you go to work?**",
          note: "Không nói “by my motorbike” hay “by the bus”. Nếu muốn nói của mình thì dùng on my motorbike hoặc I ride my motorbike.",
          ex: [
            ["I go to work by motorbike.", "Tôi đi làm bằng xe máy."],
            ["She goes to school on foot.", "Cô ấy đi bộ đến trường."],
            ["We travel to Hue by train.", "Chúng tôi đi Huế bằng tàu hỏa."],
            ["How do you go to work? By bus.", "Bạn đi làm bằng gì? Bằng xe buýt."]
          ] }
      ],
      p: [
        "Khi nói đi đến một nơi, ta dùng **go to + nơi chốn**: go to work, go to school, go to bed. Chữ to chỉ hướng đi đến.",
        "Ba từ **home, here, there** đã mang sẵn nghĩa “đến chỗ đó”, nên không thêm to. Nói “go to home” là lỗi rất phổ biến của người Việt.",
        "Muốn nói đi bằng phương tiện gì, dùng **by + phương tiện** và không có “the” hay “my”: by bus, by motorbike. Riêng đi bộ thì nói **on foot** hoặc dùng động từ walk."
      ],
      ex: [["I go home at half past five.", "Tôi về nhà lúc 5 rưỡi."], ["I take the bus to school.", "Tôi đi xe buýt đến trường."]]
    },
    { h: "Câu phủ định với do not và does not",
      f: ["I / You / We / They + do not + động từ nguyên mẫu", "He / She / It + does not + động từ nguyên mẫu"],
      items: [
        { f: "I / You / We / They + do not + động từ nguyên mẫu",
          mean: "**tôi, bạn, chúng tôi, họ không làm việc gì** (thói quen hằng ngày ở dạng phủ định).",
          parts: [
            ["do not", "đặt trước động từ chính, nghĩa là **không**."],
            ["don’t", "dạng rút gọn, rất hay dùng khi nói."]
          ],
          use: "dùng để nói việc mình **không** làm trong ngày hoặc không làm vào một thời điểm: I do not work on Sundays.",
          note: "Không nói “I not drink coffee” hay “I no eat breakfast”. Phải có do not.",
          ex: [
            ["I do not have breakfast at home.", "Tôi không ăn sáng ở nhà."],
            ["We do not watch TV in the morning.", "Buổi sáng chúng tôi không xem tivi."],
            ["They don’t work on Saturdays.", "Họ không làm việc vào thứ Bảy."],
            ["I do not go to bed before midnight.", "Tôi không đi ngủ trước nửa đêm."]
          ] },
        { f: "He / She / It + does not + động từ nguyên mẫu",
          mean: "**anh ấy, cô ấy, nó không làm việc gì**. Dùng does not cho một người hoặc một vật.",
          parts: [
            ["does not", "dùng với he, she, it và một người cụ thể (my dad, Lan)."],
            ["doesn’t", "dạng rút gọn khi nói."],
            ["động từ nguyên mẫu", "**bỏ -s** ở động từ chính vì -s đã chuyển sang does."]
          ],
          use: "dùng khi kể một người khác không làm việc gì trong thói quen hằng ngày.",
          note: "Không nói “She does not likes” hay “He doesn’t goes”. Đuôi -s chỉ xuất hiện **một lần** ở does.",
          ex: [
            ["My dad does not eat breakfast.", "Bố tôi không ăn sáng."],
            ["She doesn’t take the bus to work.", "Cô ấy không đi xe buýt đi làm."],
            ["He does not get up early on Sundays.", "Chủ nhật anh ấy không dậy sớm."],
            ["The shop does not open on Mondays.", "Cửa hàng không mở cửa vào thứ Hai."]
          ] }
      ],
      p: [
        "Để nói mình **không** làm việc gì, thêm **do not** (rút gọn là don’t) trước động từ. Với he, she, it thì dùng **does not** (rút gọn là doesn’t).",
        "Sau does not, động từ quay về **nguyên mẫu**, không thêm -s nữa, vì đuôi -s đã chuyển sang chữ does rồi."
      ],
      ex: [["I do not drink coffee.", "Tôi không uống cà phê."], ["She does not cook dinner on Sundays.", "Chủ nhật cô ấy không nấu bữa tối."]]
    },
    { h: "Trạng từ tần suất và cụm chỉ số lần",
      f: ["chủ ngữ + always / usually / often / sometimes / rarely / never + động từ thường", "chủ ngữ + am / is / are + always / usually…", "… + once a week / twice a week / every day (cuối câu)"],
      items: [
        { f: "chủ ngữ + always / usually / often / sometimes / rarely / never + động từ thường",
          mean: "**ai đó làm việc gì thường xuyên đến mức nào**. Trạng từ tần suất đứng **trước** động từ thường.",
          parts: [
            ["always", "**luôn luôn** (khoảng 100%)."],
            ["usually", "**thường thường** (khoảng 80–90%)."],
            ["often", "**hay, thường** (khoảng 60–70%)."],
            ["sometimes", "**thỉnh thoảng** (khoảng 30–50%)."],
            ["rarely", "**hiếm khi** (khoảng 5–10%)."],
            ["never", "**không bao giờ** (0%). Câu đã mang nghĩa phủ định, không thêm not."]
          ],
          use: "đặt giữa chủ ngữ và động từ chính: I **usually** get up at six. Với he, she, it, động từ vẫn thêm -s: She often **walks** to work.",
          note: "Không nói “I get usually up” hay “I don’t never”. sometimes có thể đứng đầu câu: Sometimes I cook dinner.",
          ex: [
            ["I always drink water after I wake up.", "Tôi luôn uống nước sau khi thức dậy."],
            ["She often reads before bed.", "Cô ấy hay đọc sách trước khi ngủ."],
            ["We rarely eat out on weekdays.", "Chúng tôi hiếm khi ăn ngoài vào ngày thường."],
            ["My father never drinks coffee.", "Bố tôi không bao giờ uống cà phê."]
          ] },
        { f: "chủ ngữ + am / is / are + always / usually…",
          mean: "**ai đó thường ở trạng thái nào**. Với động từ be, trạng từ tần suất đứng **sau** be.",
          parts: [
            ["am / is / are", "động từ be, chia theo chủ ngữ."],
            ["always / usually / often / sometimes / never", "đứng ngay sau be."],
            ["tính từ hoặc nơi chốn", "phần sau: busy, tired, late, at home."]
          ],
          use: "dùng khi mô tả trạng thái lặp lại: hay bận, hay mệt, luôn đúng giờ, thường ở nhà.",
          note: "So sánh: I **usually get** up early (động từ thường: trạng từ đứng trước) nhưng I **am usually** tired (be: trạng từ đứng sau).",
          ex: [
            ["I am always tired on Monday mornings.", "Sáng thứ Hai tôi lúc nào cũng mệt."],
            ["My boss is usually at the office by eight.", "Sếp tôi thường có mặt ở văn phòng trước tám giờ."],
            ["The bus is often late.", "Xe buýt hay đến muộn."],
            ["Are you sometimes busy at the weekend?", "Cuối tuần bạn có thỉnh thoảng bận không?"]
          ] },
        { f: "… + once a week / twice a week / every day (cuối câu)",
          mean: "**cụm chỉ số lần**: một lần, hai lần mỗi tuần, mỗi ngày… nói chính xác tần suất.",
          parts: [
            ["once a week", "**một lần mỗi tuần**."],
            ["twice a week", "**hai lần mỗi tuần**."],
            ["three times a day / a month", "từ ba lần trở lên dùng số + **times**."],
            ["every day / every morning / every Sunday", "**mỗi ngày, mỗi sáng, mỗi Chủ nhật**."]
          ],
          use: "đặt ở **cuối câu**, khác với always, usually đứng giữa câu. Trả lời câu hỏi How often…?",
          note: "Không nói “one time a week” hay “two times a week” (người bản xứ nói once, twice). Viết **every day** tách rời khi chỉ tần suất.",
          ex: [
            ["I go swimming once a week.", "Tôi đi bơi mỗi tuần một lần."],
            ["She calls her mother every evening.", "Tối nào cô ấy cũng gọi cho mẹ."],
            ["We clean the house twice a week.", "Chúng tôi dọn nhà mỗi tuần hai lần."],
            ["I take this medicine three times a day.", "Tôi uống thuốc này ba lần mỗi ngày."]
          ] }
      ],
      p: [
        "Trạng từ tần suất cho biết bạn làm việc gì thường xuyên đến đâu, từ **always** (luôn luôn, 100%) đến **never** (không bao giờ, 0%). Ở giữa là usually, often, sometimes, rarely.",
        "Vị trí rất quan trọng: trạng từ đứng **trước động từ thường** (I usually get up early) nhưng đứng **sau động từ to be** (She is always busy).",
        "Các cụm chỉ số lần như **once a week** (một lần mỗi tuần), **twice a week** (hai lần), **three times a week**, **every day** thì đặt ở **cuối câu**."
      ],
      ex: [["I usually get up at six.", "Tôi thường dậy lúc 6 giờ."], ["I do the laundry twice a week.", "Tôi giặt đồ mỗi tuần hai lần."]]
    },
    { h: "Câu hỏi với Do và Does",
      f: ["Do + I / you / we / they + động từ nguyên mẫu?", "Does + he / she / it + động từ nguyên mẫu?", "What time / How often + do / does + chủ ngữ + động từ nguyên mẫu?"],
      items: [
        { f: "Do + I / you / we / they + động từ nguyên mẫu?",
          mean: "**câu hỏi Có hoặc Không** về thói quen của tôi, bạn, chúng tôi, họ.",
          parts: [
            ["Do", "đứng đầu câu để biến câu kể thành câu hỏi."],
            ["Yes, I do.", "trả lời có."],
            ["No, I don’t.", "trả lời không (đầy đủ là No, I do not)."]
          ],
          use: "dùng khi hỏi người khác có làm việc gì hằng ngày không. Động từ chính giữ nguyên mẫu.",
          note: "Đừng bỏ Do: nói **Do** you like coffee?, không nói “You like coffee?”. Trả lời ngắn không lặp lại động từ: Yes, I do (không nói “Yes, I like”).",
          ex: [
            ["Do you get up early?", "Bạn có dậy sớm không?"],
            ["Do you cook dinner every day? Yes, I do.", "Bạn có nấu bữa tối hằng ngày không? Có."],
            ["Do they walk to school?", "Họ có đi bộ đến trường không?"],
            ["Do we have English class today? No, we don’t.", "Hôm nay chúng ta có học tiếng Anh không? Không."]
          ] },
        { f: "Does + he / she / it + động từ nguyên mẫu?",
          mean: "**câu hỏi Có hoặc Không** về thói quen của anh ấy, cô ấy, nó hoặc một người cụ thể.",
          parts: [
            ["Does", "dùng cho he, she, it và một người hay vật (your mum, the shop)."],
            ["động từ nguyên mẫu", "bỏ -s ở động từ chính: Does she **work**?"],
            ["Yes, she does. / No, she doesn’t.", "trả lời ngắn."]
          ],
          use: "dùng khi hỏi thói quen của một người khác. Đuôi -s nằm ở does, không ở động từ chính.",
          note: "Không nói “Does she works?” hay “Do she work?”.",
          ex: [
            ["Does your brother play football?", "Anh trai bạn có chơi bóng đá không?"],
            ["Does she drink tea in the morning? Yes, she does.", "Buổi sáng cô ấy có uống trà không? Có."],
            ["Does the bus stop here?", "Xe buýt có dừng ở đây không?"],
            ["Does he work at night? No, he doesn’t.", "Anh ấy có làm ca đêm không? Không."]
          ] },
        { f: "What time / How often + do / does + chủ ngữ + động từ nguyên mẫu?",
          mean: "**câu hỏi lấy thông tin** về giờ giấc (What time) và mức độ thường xuyên (How often).",
          parts: [
            ["What time", "**mấy giờ**: trả lời bằng at + giờ (at seven)."],
            ["How often", "**bao lâu một lần**: trả lời bằng every day, once a week, usually…"],
            ["do / does", "do cho I, you, we, they; does cho he, she, it."]
          ],
          use: "từ để hỏi đứng đầu, sau đó là do / does, rồi chủ ngữ và động từ nguyên mẫu. Có thể thay bằng When, Where, How (bằng cách nào).",
          note: "Không nói “What time you get up?” (thiếu do). Câu trả lời What time dùng **at**: At half past six.",
          ex: [
            ["What time do you have lunch?", "Bạn ăn trưa lúc mấy giờ?"],
            ["How often does she go to the gym?", "Cô ấy đi tập thể dục bao lâu một lần?"],
            ["What time does the shop close?", "Cửa hàng đóng cửa lúc mấy giờ?"],
            ["How often do you visit your parents? Every weekend.", "Bạn về thăm bố mẹ bao lâu một lần? Mỗi cuối tuần."]
          ] }
      ],
      p: [
        "Câu hỏi Có hoặc Không ở thì hiện tại đơn bắt đầu bằng **Do** hoặc **Does**. Trả lời ngắn: Yes, I do. / No, I don’t (do not).",
        "Muốn hỏi thông tin, đặt từ để hỏi lên đầu: **What time** (mấy giờ), **How** (bằng cách nào), **How often** (bao lâu một lần), rồi mới đến do hoặc does.",
        "Không được bỏ do hoặc does trong câu hỏi. Khi đã có does, động từ chính trở về nguyên mẫu."
      ],
      ex: [["Does she work on Saturdays?", "Cô ấy có làm việc vào thứ Bảy không?"], ["What time does he go to bed?", "Anh ấy đi ngủ lúc mấy giờ?"]]
    }
  ],
  mistakes: [
    ["She get up at six.", "She gets up at six.", "Chủ ngữ là **she** nên động từ phải thêm **-s**."],
    ["She have breakfast at seven.", "She has breakfast at seven.", "Với he, she, it, động từ **have** đổi thành **has**."],
    ["I go to home at six.", "I go home at six.", "Trước **home, here, there** không dùng “to”."],
    ["He doesn’t watches TV.", "He does not watch TV.", "Sau **does not** (doesn’t), động từ quay về nguyên mẫu, không thêm -s."],
    ["I get up usually at six.", "I usually get up at six.", "Trạng từ tần suất đứng **trước động từ thường**."],
    ["What time she gets up?", "What time does she get up?", "Câu hỏi thì hiện tại đơn cần **does**, và động từ sau đó ở dạng nguyên mẫu."],
    ["I have the breakfast at home.", "I have breakfast at home.", "Khi nói về các bữa ăn (breakfast, lunch, dinner) thì không dùng **the**."]
  ],
  vocab: [
    ["wake up", "thức dậy, tỉnh giấc"], ["get up", "ra khỏi giường"], ["brush my teeth", "đánh răng"], ["take a shower", "tắm vòi sen"],
    ["get dressed", "mặc quần áo"], ["have breakfast", "ăn sáng"], ["leave home", "rời nhà"], ["start work", "bắt đầu làm việc"],
    ["finish work", "tan làm"], ["take a nap", "ngủ trưa một chút"], ["cook dinner", "nấu bữa tối"], ["wash the dishes", "rửa bát"],
    ["do the laundry", "giặt quần áo"], ["clean the house", "dọn nhà"], ["do my homework", "làm bài tập về nhà"], ["go to bed", "đi ngủ"],
    ["always", "luôn luôn"], ["usually", "thường thường"], ["sometimes", "thỉnh thoảng"], ["never", "không bao giờ"],
    ["once a week", "mỗi tuần một lần"], ["routine", "nếp sinh hoạt hằng ngày"], ["commute", "quãng đường đi làm hằng ngày"], ["chores", "việc vặt trong nhà"]
  ],
  tips: [
    "Phân biệt **wake up** (mở mắt tỉnh giấc) và **get up** (bước ra khỏi giường): bạn có thể wake up lúc 6 giờ nhưng get up lúc 6 giờ 15.",
    "Dùng **do** cho việc nhà và bài tập (do the laundry, do my homework), dùng **have** cho bữa ăn (have breakfast, have lunch).",
    "Nối các việc bằng **first, then, after that, finally** để câu chuyện có trình tự: “I usually wake up around six, grab a quick breakfast, and then head to work.”",
    "Mỗi khi kể về bố mẹ, anh chị (he, she), dừng lại một giây để kiểm tra đuôi **-s, -es** của động từ.",
    "Thu âm một phút kể “A day in my life”, thay giờ giấc và hoạt động bằng thông tin thật của bạn."
  ]
};
