/* Cheat sheet: Food & Drinks (Ăn gì, uống gì). Hiển thị bởi cheatsheet.js. */
window.A1_CHEAT = {
  goal: [
    "Gọi tên các món ăn, đồ uống quen thuộc và nói mình ăn gì trong ba bữa mỗi ngày.",
    "Phân biệt danh từ đếm được và không đếm được, dùng đúng **a / an**, **some** và **any**.",
    "Nói mình thích món gì và tả vị của món ăn bằng **tastes / smells / looks + tính từ**.",
    "Gọi món lịch sự ở quán cà phê và nhà hàng bằng **Could I have…, please?** và **I would like…**.",
    "Gọi đúng số lượng như two cups of coffee, a bowl of phở, rồi hỏi giá và thanh toán."
  ],
  phrases: [
    { h: "Bữa ăn trong ngày", rows: [
      ["I have bread and eggs for breakfast.", "Tôi ăn bánh mì và trứng vào bữa sáng.", "Nói “ăn bữa gì” dùng **have**, không cần dùng eat."],
      ["I usually have rice for lunch.", "Bữa trưa tôi thường ăn cơm."],
      ["We have dinner together at seven.", "Chúng tôi ăn tối cùng nhau lúc 7 giờ."],
      ["What do you usually have for breakfast?", "Bạn thường ăn sáng món gì?"]
    ]},
    { h: "Gọi đồ uống", rows: [
      ["I would like an iced coffee with milk.", "Cho tôi một ly cà phê sữa đá.", "Khi gọi món thường nói I’d like (I’d = I would)."],
      ["Hot or iced?", "Nóng hay đá?", "Câu nhân viên hay hỏi, nói gọn cho nhanh."],
      ["Less sugar, please.", "Ít đường thôi nhé."],
      ["No ice, please.", "Không đá nhé."],
      ["Would you like something to drink?", "Bạn có muốn uống gì không?"]
    ]},
    { h: "Nói món thích và hương vị", rows: [
      ["My favorite food is phở.", "Món tôi thích nhất là phở."],
      ["I like spicy food.", "Tôi thích đồ ăn cay."],
      ["I do not like durian. It smells too strong.", "Tôi không thích sầu riêng. Mùi của nó nặng quá.", "Dạng rút gọn: I don’t like (don’t = do not)."],
      ["This soup is too salty.", "Món canh này mặn quá."],
      ["It tastes really good!", "Ăn ngon thật đấy!"]
    ]},
    { h: "Gọi món ở nhà hàng", rows: [
      ["A table for two, please.", "Cho tôi một bàn cho hai người."],
      ["Could I see the menu, please?", "Cho tôi xem thực đơn được không?"],
      ["What do you recommend?", "Bạn gợi ý món gì?"],
      ["I would like the fried rice, please.", "Cho tôi món cơm rang.", "Dạng rút gọn: I’d like (I’d = I would)."],
      ["Not too spicy, please.", "Đừng cay quá nhé."]
    ]},
    { h: "Câu nhân viên hay hỏi", rows: [
      ["Are you ready to order?", "Anh chị gọi món chưa ạ?"],
      ["What would you like to drink?", "Anh chị muốn uống gì?"],
      ["For here or to go?", "Dùng ở đây hay mang đi?", "Người Anh nói takeaway thay cho to go."],
      ["Anything else?", "Còn gì nữa không ạ?"],
      ["Enjoy your meal!", "Chúc ngon miệng!"]
    ]},
    { h: "Hỏi giá và thanh toán", rows: [
      ["How much is this?", "Cái này bao nhiêu tiền?"],
      ["It is fifty thousand dong.", "50 nghìn đồng.", "Người bán thường nói It’s fifty thousand dong. (It’s = It is)."],
      ["Can I pay by card?", "Tôi trả bằng thẻ được không?"],
      ["Can I pay by bank transfer?", "Tôi chuyển khoản được không?"],
      ["Could we have the bill, please?", "Cho chúng tôi thanh toán.", "Người Mỹ nói the check thay cho the bill."]
    ]}
  ],
  grammar: [
    { h: "Danh từ đếm được, không đếm được; some và any",
      f: ["a / an + danh từ đếm được số ít", "số + danh từ đếm được thêm -s", "some + danh từ (câu khẳng định, lời mời)", "any + danh từ (câu hỏi, câu phủ định)"],
      p: [
        "Danh từ **đếm được** như apple, egg, banana có thể đi với a / an và thêm -s khi số nhiều: an apple, two eggs. Dùng **an** trước từ bắt đầu bằng âm nguyên âm như apple, egg.",
        "Danh từ **không đếm được** như rice, bread, water, milk không đi với a / an và không thêm -s. Muốn nói số lượng thì dùng đơn vị: two bowls of rice.",
        "Dùng **some** trong câu khẳng định và khi mời hoặc gọi món; dùng **any** trong câu hỏi và câu phủ định."
      ],
      ex: [["I would like some rice.", "Cho tôi một ít cơm."], ["Do you have any milk?", "Bạn có sữa không?"]]
    },
    { h: "Tả vị và mùi: taste, smell, look + tính từ",
      f: ["chủ ngữ + tastes / smells / looks + tính từ", "too + tính từ (quá mức, không thích)"],
      p: [
        "Để nói món ăn có vị, có mùi hay trông như thế nào, đặt **tính từ** ngay sau tastes, smells, looks. Không dùng trạng từ, và không nói “very delicious taste”.",
        "Với chủ ngữ số ít như this cake, the soup, nhớ thêm **-s** vào động từ: tastes, smells, looks.",
        "**Too + tính từ** nghĩa là quá mức đến mức không thích, khác với **very** chỉ là “rất”. It is too spicy for me nghĩa là cay quá, tôi không ăn được."
      ],
      ex: [["The soup smells good.", "Món canh có mùi thơm."], ["That looks delicious!", "Trông ngon quá!"]]
    },
    { h: "Bốn mức lịch sự khi gọi món",
      f: ["I want + món (thẳng, dễ nghe cộc)", "Can I have + món? (thân thiện)", "I would like + món, please (lịch sự)", "Could I have + món, please? (lịch sự nhất)"],
      p: [
        "**I want** đúng ngữ pháp nhưng khi gọi món nghe khá cộc, còn **Give me…** nghe như ra lệnh. Với nhân viên phục vụ, nên dùng một trong ba cách còn lại.",
        "**Can I have…?** thân thiện, rất phổ biến ở quán cà phê. **I would like…** (thường nói I’d like) và **Could I have…, please?** lịch sự hơn, hợp với nhà hàng.",
        "Luôn thêm **please** ở cuối câu; chỉ một từ này đã làm câu gọi món nghe dễ chịu hơn nhiều."
      ],
      ex: [["Could I have a coffee, please?", "Cho tôi một ly cà phê được không?"], ["Can I have a glass of water?", "Cho tôi một cốc nước được không?"]]
    },
    { h: "Đơn vị đi kèm và cách gọi nhiều phần",
      f: ["a cup / glass / bottle / bowl / plate / slice + of + đồ ăn hoặc đồ uống", "số + đơn vị thêm -s + of + đồ ăn hoặc đồ uống"],
      p: [
        "Đồ uống và nhiều món ăn là danh từ không đếm được, nên phải dùng **đơn vị** để đếm: a cup of tea, a bottle of water, a bowl of phở, a slice of cake.",
        "Khi gọi nhiều phần, thêm **-s** hoặc **-es** vào **đơn vị**, không thêm vào đồ uống: two cups of coffee, three glasses of water."
      ],
      ex: [["Two cups of coffee, please.", "Cho hai tách cà phê."], ["A bowl of phở and a glass of orange juice, please.", "Cho một tô phở và một ly nước cam."]]
    },
    { h: "How much và How many",
      f: ["How many + danh từ đếm được số nhiều?", "How much + danh từ không đếm được?", "How much is / are + món hàng? (hỏi giá)"],
      p: [
        "Hỏi số lượng thứ đếm được thì dùng **How many**: How many eggs do you need? Hỏi lượng thứ không đếm được thì dùng **How much**: How much sugar do you want?",
        "Khi hỏi giá, luôn dùng **How much**. Dùng **is** cho một món và **are** cho món ở số nhiều như the mangoes."
      ],
      ex: [["How much are the mangoes?", "Xoài bao nhiêu tiền?"], ["How many eggs do you need?", "Bạn cần bao nhiêu quả trứng?"]]
    }
  ],
  mistakes: [
    ["I want a bread and two rices.", "I want some bread and two bowls of rice.", "Bread và rice là danh từ **không đếm được**: không có a, không thêm -s, phải dùng đơn vị."],
    ["This food is very delicious taste.", "This food tastes delicious.", "Dùng **tastes + tính từ** để tả vị."],
    ["Give me a coffee.", "Could I have a coffee, please?", "Give me nghe như ra lệnh; **Could I have…, please?** mới lịch sự."],
    ["Two cup of coffees, please.", "Two cups of coffee, please.", "Thêm **-s** vào đơn vị **cups**, không thêm vào coffee."],
    ["I would like a apple.", "I would like an apple.", "Trước từ bắt đầu bằng âm nguyên âm dùng **an**."],
    ["Do you have some milk?", "Do you have any milk?", "Câu hỏi thông thường dùng **any**; some dùng cho câu khẳng định và lời mời."],
    ["This soup smell good.", "This soup smells good.", "Chủ ngữ số ít nên động từ thêm **-s**: smells."]
  ],
  vocab: [
    ["rice", "cơm, gạo"], ["noodle soup", "phở, bún nước"], ["bread", "bánh mì"], ["chicken", "thịt gà"],
    ["beef", "thịt bò"], ["pork", "thịt lợn"], ["seafood", "hải sản"], ["vegetables", "rau củ"],
    ["fruit", "trái cây"], ["dessert", "món tráng miệng"], ["coffee", "cà phê"], ["orange juice", "nước cam"],
    ["coconut water", "nước dừa"], ["smoothie", "sinh tố"], ["sweet", "ngọt"], ["salty", "mặn"],
    ["spicy", "cay"], ["sour", "chua"], ["bitter", "đắng"], ["delicious", "ngon"],
    ["menu", "thực đơn"], ["bill", "hóa đơn (người Mỹ nói check)"], ["main course", "món chính"], ["allergic to", "bị dị ứng với"]
  ],
  tips: [
    "Mỗi ngày nói bằng tiếng Anh bạn đã ăn gì trong ba bữa: “I had phở for breakfast.”",
    "Khi gọi món, tập thói quen dùng **Could I have…, please?** thay cho I want hay Give me.",
    "Học đơn vị theo cặp với món: **a cup of** tea, **a bowl of** phở, **a glass of** juice, **a slice of** cake.",
    "Tả 5 món ăn quen thuộc bằng **tastes + tính từ** như sweet, salty, spicy, sour; thêm **too** khi muốn nói “quá”.",
    "Khi được mời món lạ, nói **I would love to try it!** để nhận lời (thường nói I’d love), hoặc **No, thank you. I am full.** để từ chối lịch sự."
  ]
};
