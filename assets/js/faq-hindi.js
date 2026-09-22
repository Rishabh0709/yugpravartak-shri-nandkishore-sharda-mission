const FAQ_CATEGORIES = [
    {
        "id": "life-conduct",
        "title": {
            "hi": "जीवन और आचरण",
            "en": "General Life & Conduct"
        },
        "desc": {
            "hi": "मनुष्य जीवन, गुण, संयम, परिवार और दैनिक जीवन के विवेकपूर्ण आधार।",
            "en": "The discerning foundations of human life -- virtue, restraint, family and daily conduct."
        },
        "questions": [
            1,
            2,
            3,
            20,
            28,
            34,
            35,
            36,
            37,
            38,
            44
        ]
    },
    {
        "id": "spiritual-concepts",
        "title": {
            "hi": "अध्यात्म के मूल सिद्धांत",
            "en": "Fundamental Spiritual Concepts"
        },
        "desc": {
            "hi": "चैतन्य, भौतिकवाद, अध्यात्मवाद, सत्कर्म और मृत्यु के बाद की तैयारी से जुड़े प्रश्न।",
            "en": "Questions on consciousness, materialism, spirituality, right action and preparing for the life after death."
        },
        "questions": [
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            16,
            32,
            46
        ]
    },
    {
        "id": "sadhana-principles",
        "title": {
            "hi": "साधना और अभ्यास",
            "en": "Spiritual Practice & Sadhana Principles"
        },
        "desc": {
            "hi": "साधना, मन, कवच, कृतज्ञता, संकल्प, इच्छा-शक्ति और स्वाध्याय का व्यावहारिक पक्ष।",
            "en": "The practical side of sadhana -- the mind, protective shields, gratitude, resolve, willpower and self-study."
        },
        "questions": [
            21,
            22,
            23,
            24,
            25,
            26,
            27,
            33,
            45
        ]
    },
    {
        "id": "guru-disciple",
        "title": {
            "hi": "गुरु-शिष्य संबंध",
            "en": "Guru-Disciple Relationship"
        },
        "desc": {
            "hi": "सद्गुरु, सद्शिष्य, जिज्ञासा और मार्गदर्शन की आत्मीय परंपरा।",
            "en": "The intimate tradition of the true guru, the true disciple, inquiry and guidance."
        },
        "questions": [
            29,
            30,
            31,
            43
        ]
    },
    {
        "id": "bhaiya-ji",
        "title": {
            "hi": "भैया जी का जीवन और ज्ञान-यात्रा",
            "en": "Bhaiya Ji's Life, Philosophy & Sadhana Journey"
        },
        "desc": {
            "hi": "भैया जी की मौलिक साधना, जीवन-दर्शन, दिव्य डायरी और चक्र धारण का महत्व।",
            "en": "Bhaiyaji's original sadhana, his vision of life, the divine diary, and the significance of taking up the chakra."
        },
        "questions": [
            11,
            12,
            13,
            14,
            15,
            17,
            18,
            19,
            39,
            40
        ]
    },
    {
        "id": "manidweep-parivar",
        "title": {
            "hi": "मणिद्वीप परिवार और सेवा प्रकल्प",
            "en": "Manidweep Parivar, Key Milestones & Social Initiatives"
        },
        "desc": {
            "hi": "मणिद्वीप परिवार की तिथियाँ, संकल्प और सामाजिक सेवा की प्रेरणा।",
            "en": "The dates, resolves and inspiration behind the Manidweep Parivar's social service."
        },
        "questions": [
            41,
            42
        ]
    }
];

const FAQ_ITEMS = [
    {
        "id": "q1",
        "number": 1,
        "categoryId": "life-conduct",
        "question": {
            "hi": "मनुष्य क्या है?",
            "en": "What is a human being?"
        },
        "answer": {
            "hi": [
                "मनुष्य ईश्वर की सर्वश्रेष्ठ कृति है क्यों कि वह दो शरीर का संयोजन है-भौतिक शरीर एवं चैतन्य शरीर, जिसमें ईश्वर का अंश है। मनुष्य को ईश्वर ने बुद्धि-विवेक, भावनाएं, वाणी आदि अद्भुत शक्तियाँ प्रदान की है। मनुष्य में तीनों गुण- सतोगुण, रजोगुण एवं तमोगुण विद्यमान होते हैं। वह कर्म करने को स्वतंत्र है और परिवर्तनशील भी है। अतः उसके जीवन में असीमित सम्भावनाएं हैं।"
            ],
            "en": [
                "A human being is God's finest creation, for they are a union of two bodies -- the physical body and the conscious body, which carries a portion of God within it. God has given human beings the wondrous powers of intellect, discernment, feeling and speech. All three gunas -- satoguna, rajoguna and tamoguna -- are present within a human being. They are free to act, and they are also capable of change. Hence there are unlimited possibilities within a human life."
            ]
        },
        "categoryTitle": {
            "hi": "जीवन और आचरण",
            "en": "General Life & Conduct"
        },
        "excerpt": {
            "hi": "मनुष्य ईश्वर की सर्वश्रेष्ठ कृति है क्यों कि वह दो शरीर का संयोजन है-भौतिक शरीर एवं चैतन्य शरीर, जिसमें ईश्वर का अंश है। मनुष्य को ईश्वर ने बुद्धि-विवेक, भावनाएं, वाणी आद...",
            "en": "A human being is God's finest creation, for they are a union of two bodies -- the physical body and the conscious body, which carries a portion of God within it. God has given h..."
        }
    },
    {
        "id": "q2",
        "number": 2,
        "categoryId": "life-conduct",
        "question": {
            "hi": "मनुष्य जीवन क्या है?",
            "en": "What is human life?"
        },
        "answer": {
            "hi": [
                "जन्म से लेकर मृत्यु तक के बीच की अवधि ही मनुष्य जीवन है। यह एक कर्मक्षेत्र है जहाँ किये गये कर्म निश्चित रुप से फलिभूत होते हैं। मनुष्य जीवन में ही व्यक्ति चाहे तो उन्नत होकर मनुष्यत्व से देवत्व व देवत्व से ईश्वरत्व तक प्राप्त कर सकता है। अन्यथा अवनति के गहरे गर्त में भी गिर सकता है। मनुष्य जीवन में व्यक्ति न तो खाली हाथ आता है और न ही खाली हाथ जाता है। वह अपने प्रारब्ध और पूर्व जन्म के संस्कार साथ लेकर आता है और इस जन्म में पिछले जन्म के प्रारब्ध काटकर अपने नए प्रारब्ध और कर्मों का संग्रह करता है जिसे उसका चैतन्य शरीर मृत्यु के बाद अपने साथ ले जाता है। ईश्वर प्रदत्त मनुष्य जीवन दिव्य गुणों से भरपूर, बहुत ही महत्वपूर्ण, दुर्लभ, अनमोल, अमृतमय, आनन्दमय, अनुपम उपहार है।"
            ],
            "en": [
                "Human life is the span between birth and death. It is a field of action where every deed sown certainly bears fruit. Only in human life can a person, by rising, attain divinity from humanity, and godhood from divinity -- or, equally, fall into the depths of decline. In human life a person arrives neither empty-handed nor leaves empty-handed. They bring with them their prarabdha and the imprints of past lives, and in this life, having worked through the prarabdha of the last birth, they gather a new prarabdha and new deeds, which their conscious body carries onward after death. This God-given human life, full of divine qualities, is an exceedingly important, rare, priceless, nectar-like and incomparable gift."
            ]
        },
        "categoryTitle": {
            "hi": "जीवन और आचरण",
            "en": "General Life & Conduct"
        },
        "excerpt": {
            "hi": "जन्म से लेकर मृत्यु तक के बीच की अवधि ही मनुष्य जीवन है। यह एक कर्मक्षेत्र है जहाँ किये गये कर्म निश्चित रुप से फलिभूत होते हैं। मनुष्य जीवन में ही व्यक्ति चाहे तो उन्नत...",
            "en": "Human life is the span between birth and death. It is a field of action where every deed sown certainly bears fruit. Only in human life can a person, by rising, attain divinity ..."
        }
    },
    {
        "id": "q3",
        "number": 3,
        "categoryId": "life-conduct",
        "question": {
            "hi": "मनुष्य जीवन लेने का उद्देश्य क्या है?",
            "en": "What is the purpose of taking human life?"
        },
        "answer": {
            "hi": [
                "मनुष्य जीवन लेने का उद्देश्य है-",
                "सत्य को जानना, स्वीकारना एवं पाना।",
                "स्वयं में सद्गुणों का विकास कर मनुष्यत्व से देवत्व की प्राप्ति करना।",
                "अध्यात्म एवं भौतिक जीवन में सामंजस्य बनाते हुए आनन्द, शांति, खुशी से रहना।",
                "पारिवारिक, सामाजिक, नैतिक उत्तरदायित्व अनासक्त भाव से निभाते हुए अपने इष्टदेव से जुड़ना।",
                "पूर्व जन्मों के प्रारब्ध काट कर मृत्यु के बाद के जीवन की यात्रा के लिये अध्यात्म धन एकत्रित करना।",
                "ईश्वर से निःस्वार्थ प्रेम करते हुए उनका स्मरण करना।"
            ],
            "en": [
                "The purpose of taking human life is --",
                "To know, accept and attain truth.",
                "To develop virtue within oneself and rise from humanity to divinity.",
                "To live with joy, peace and happiness while keeping spirituality and worldly life in harmony.",
                "To fulfil one's familial, social and moral responsibilities without attachment, while staying connected to one's chosen deity.",
                "To work through the prarabdha of past lives and gather spiritual wealth for the journey of life after death.",
                "To remember God with selfless love."
            ]
        },
        "categoryTitle": {
            "hi": "जीवन और आचरण",
            "en": "General Life & Conduct"
        },
        "excerpt": {
            "hi": "मनुष्य जीवन लेने का उद्देश्य है- सत्य को जानना, स्वीकारना एवं पाना। स्वयं में सद्गुणों का विकास कर मनुष्यत्व से देवत्व की प्राप्ति करना। अध्यात्म एवं भौतिक जीवन में सामंज...",
            "en": "The purpose of taking human life is --"
        }
    },
    {
        "id": "q20",
        "number": 20,
        "categoryId": "life-conduct",
        "question": {
            "hi": "सतोगुण, रजोगुण व तमोगुण क्या हैं?",
            "en": "What are satoguna, rajoguna and tamoguna?"
        },
        "answer": {
            "hi": [
                "ईश्वर त्र्रिगुणातीत हैं लेकिन मनुष्य में साधारणतया तीनों गुण- सतोगुण, रजोगुण व तमोगुण विद्यमान होते हैं। इनकी मात्रात्मक उपस्थित कर्मों के अनुसार कम-ज्यादा हो सकती है। जिस मनुष्य में जो गुण बाहुल्य में होता है, उसकी विचारधारा व आचरण भी उसी प्रकार होते हैं।",
                "सतोगुण- सत् अर्थात सत्य के नज़दीक होने के कारण यह सतोगुण कहलाते हैं। जैसे, ब्रह्म शाश्वत् व आनन्दमयी हैं, वैसे ही यह गुण भी सच्ची शांति-आनन्द सदैव देते हैं। उदाहरणार्थः- सरलता, सत्यता, संतोष, ईमानदारी, धैर्य, सहनशीलता, परिश्रम व परोपकार की तत्परता, संवेदनशीलता, सकारात्मकता, आदि। सतोगुणी व्यक्ति सर्वश्रेष्ठ कर्म करता है, सही दृष्टिकोण के कारण भौतिक जीवन में भी सुखी-संतुष्ट रहता है और ईश्वर-कृपा का भी सुपात्र होता है।",
                "रजोगुण- रज् अर्थात् राजसी प्रवृत्ति से ओतप्रोत होने के कारण यह रजोगुण कहलाते हैं। रजोगुण का आधार है- भौतिक शरीर के लिए भौतिक सुख (कंचन-कामिनी-कीर्ति) प्राप्त करने की अन्तहीन लालसा इसलिए इन गुणों की प्रधानता होने पर मनुष्य केवल इच्छा पूर्ण होने तक ही सुखी रहता है। चूंकि प्रत्येक इच्छा हर समय पूरी नहीं होती, रजोगुणी व्यक्ति सामान्यतः अशांत चित्त रहते हुए अपने अमूल्य जीवन का अधिकांश समय भौतिक सुख के साधन जुटाना में ही व्यर्थ गँवा देता है और एक भौतिक इच्छा की पूर्ति के बाद दूसरी इच्छा जाग्रत हो जाती है तो वह इस अन्तहीन सिलसिले में उलझा हुआ ही जीता है। उदाहरर्णाथः- लोभ, प्रशंसा व श्रेय-प्राप्ति के लिए दूसरों की निंदा करना, असंतोष, कम मेहनत में अधिक ऐश्वर्य प्राप्त करने की भावना, आदि। इस गुण के कारण व्यक्ति को कभी तृप्ति नहीं होती- ’सबसे अधिक व सर्वोत्तम मुझे मिले, सबसे सुखी-प्रसिद्ध मैं रहूँ’-यह भावना उसे स्वार्थी बना देती है और झूठ, ईर्ष्या-द्वेष के कारण उस पर अवगुणों के आवरण चढ़ते जाते हैं। जैसे सतोगुणी व्यक्ति सत्कर्म करता है, वैसे रजोगुणी व्यक्ति केवल स्वयं के भौतिक शरीर को सुख पहुँचाने और अपने अहंकार को तुष्टि देने वाले कर्म करता है जो अन्ततः उसे दुःख की ओर बढ़ाएंगे।",
                "तमोगुण- तम् अर्थात अंधकार से चैतन्य शरीर को आच्छादित करने वाले गुण तमोगुण कहलाते हैं। ईश्वर से दूरी बढ़ाने की क्षमता रखने के कारण यह दुर्गुण की श्रेणी में आते हैं। तमोगुणी व्यक्ति अवगुणों से घिर जाता है और अवनत होता जाता है। उसकी मानसिकता नकारात्मक हो जाती है और स्वार्थ भावना चरम तक पहुँच जाती है। धीरे-धीरे उसमें आसुरी प्रवृत्ति दृष्टिगोचर होने लगती है और वह मनुष्य जीवन लेने के उद्देश्य की विपरीत दिशा में बढ़ने लगता है। यह सर्वथा त्याज्य गुण माने जाते हैं मानवता की दृष्टि में भी। उदाहरणार्थः- अहंकार, क्रोध, व्यभिचार, द्वेष भावना से ग्रसित होकर दूसरों को नुकसान पहुँचा कर सुख अनुभव करना, आदि। तमोगुण व्यक्ति वास्तविक आनन्द-शांति-खुशी से दूर संकीर्ण विचारधारा से घिर जाता है और पाप कर्मों में प्रवृत्त हो जाता है।",
                "मनुष्य पृथवी पर स्वयं के उत्थान हेतु आता है। कर्म करने की स्वतंत्रता होने के साथ ईश्वरीय कृपा यह भी है कि मनुष्य परिवर्तनशील है, वह चाहे तो अपने अन्दर इन तीनों गुणों की मात्रा बदल सकता है। तमोगुण को प्रयास करके समाप्त कर सकता है, रजोगुण को ज्ञान से नियंत्रित कर सकता है और प्रेरक से प्रेरणा लेकर सतोगुण को बढ़ा भी सकता है। ईश्वर का स्मरण-उनसे प्रार्थना करके, सत्कर्म करके, सही उद्देश्य निर्धारित कर दृढ़ इच्छाशक्ति से अपने कल्याणार्थ प्रयास करके मनुष्य अपने पूर्व में किए गए गलत कर्मों के प्रारब्ध काट सकता है और अपने चित्त पर आए अवगुणों के आवरण भी हटा सकता है। मनुष्य जीवन अमूल्य है!"
            ],
            "en": [
                "God is beyond the three gunas, but a human being ordinarily carries all three within them -- satoguna, rajoguna and tamoguna. Their proportions can rise or fall according to one's actions. Whichever guna predominates in a person, their thinking and conduct follow that same pattern.",
                "Satoguna -- called so because of its nearness to sat, truth. Just as the divine is eternal and blissful, this guna too always brings true peace and joy. Examples: simplicity, truthfulness, contentment, honesty, patience, forbearance, readiness for hard work and generosity, sensitivity, positivity, and so on. A person of satoguna performs the finest deeds, remains content and happy even in worldly life because of their right outlook, and also becomes worthy of divine grace.",
                "Rajoguna -- called so because it is steeped in a worldly, restless disposition. Its foundation is an endless craving for worldly pleasure (wealth, sensual attachment, fame) for the physical body; so when these qualities predominate, a person remains happy only until a desire is fulfilled. Since every desire is not fulfilled at every moment, a person of rajoguna generally remains restless of mind, wasting most of their priceless life gathering the means of worldly pleasure -- and once one physical desire is met, another awakens, keeping them trapped in this endless cycle. Examples: greed, disparaging others to gain praise and credit, discontent, the wish for greater luxury with less effort, and so on. Because of this guna a person never finds fulfilment -- the feeling that 'I should have the most and the best, I should be the happiest and most renowned' makes them selfish, and through falsehood and envy, layers of vice accumulate over them. Just as a person of satoguna performs right action, a person of rajoguna performs only those acts that please their own physical body and satisfy their ego -- acts that will, in the end, lead them towards sorrow.",
                "Tamoguna -- called so because it is the quality that shrouds the conscious body in darkness (tam). Because it has the power to increase distance from God, it falls into the category of vice. A person of tamoguna becomes surrounded by faults and keeps declining. Their mindset turns negative and selfishness reaches its extreme. Gradually a demonic tendency becomes visible in them, and they begin moving in the opposite direction from the purpose of human life. This is considered an entirely undesirable quality, even from the standpoint of simple humanity. Examples: ego, anger, immorality, and finding pleasure in harming others out of malice. A person of tamoguna, far from true joy, peace and happiness, becomes enclosed in narrow thinking and inclined towards sinful acts.",
                "A human being comes to earth for their own upliftment. Along with the freedom to act, it is also God's grace that a human being is capable of change -- they can, if they choose, alter the proportion of these three gunas within them. Tamoguna can be eliminated through effort, rajoguna can be governed by knowledge, and satoguna can be increased by taking inspiration from one who inspires. By remembering and praying to God, performing right action, setting the right purpose and making effort for one's own welfare with firm willpower, a person can work through the prarabdha of their past wrong deeds and remove the layers of vice covering their mind. Human life is priceless!"
            ]
        },
        "categoryTitle": {
            "hi": "जीवन और आचरण",
            "en": "General Life & Conduct"
        },
        "excerpt": {
            "hi": "ईश्वर त्र्रिगुणातीत हैं लेकिन मनुष्य में साधारणतया तीनों गुण- सतोगुण, रजोगुण व तमोगुण विद्यमान होते हैं। इनकी मात्रात्मक उपस्थित कर्मों के अनुसार कम-ज्यादा हो सकती है। जि...",
            "en": "God is beyond the three gunas, but a human being ordinarily carries all three within them -- satoguna, rajoguna and tamoguna. Their proportions can rise or fall according to one..."
        }
    },
    {
        "id": "q28",
        "number": 28,
        "categoryId": "life-conduct",
        "question": {
            "hi": "’वर्तमान में जीना’ इसका क्या तात्पर्य है? सफलता में इसका महत्व प्रतिपादित कीजिए।",
            "en": "What does 'living in the present' mean? Explain its importance for success."
        },
        "answer": {
            "hi": [
                "समय को तीन काल में विभाजित किया जा सकता है- भूतकाल, भविष्यकाल एवं वर्तमान। जो समय हम व्यतीत कर चुके हैं, वह भूतकाल, आने वाला भविष्यकाल और जो आज है वह वर्तमान। जीवन में अगर सफलता प्राप्त करनी है तो बार- बार भूतकाल के पन्ने मत पलटो, जो गलतियाँ हुईं है, उन्हें सुधारने का संकल्प लो। भविष्य के सुनहरे सपने मत बुनो-उसे ईश्वर पर छोड़ दो।",
                "वर्तमान में जीना अर्थात बस यही एक पल है जो हमारे हाथ में है और इसी क्षण में हम जो भी कार्य करें उसे पूर्ण तन्मयता, आनन्द व तनावमुक्त होकर करें और इस पल को हम भरपूर जीयें।",
                "सत्य तो यह है कि मन की प्रवृत्ति भटकाव है तो वह कभी भूतकाल में जाता है, कभी भविष्य में। यदि मन वर्तमान में नहीं है तो वह उद्देश्य से ही भटक रहा है और व्यर्थ में ऊर्जा का क्षय कर रहा है।",
                "हर क्षेत्र में सफलता के लिए आवश्यक है कि मन को वर्तमान में रखा जाए। साधना के समय यदि मन वर्तमान में हो अर्थात् अपने इष्टदेव के पास हो, तो साधना शीघ्र सफल हो सकती है। भैया प्रदत्त बुद्धि-विवेक योग साधना द्वारा मनुष्य मन के भटकाव को धीरे धीरे कम कर सकता है और फलस्वरुप मन वर्तमान में स्थिर होने लगता है और वह अपनी ऊर्जा केन्द्रित कर लक्ष्य की ओर बढ़ता है। यह जानना रुचिकर होगा कि जब मन वर्तमान में होता है तो व्यक्ति सतर्क रहता है और वह जो भी कार्य करता है भौतिक या आध्यात्मिक, उसमें सफल होने की सम्भावनायें कई गुना बढ़ जाती है।",
                "हमारे हाथ में सिर्फ वर्तमान का क्षण है। अगर हर क्षण का सदुपयोग हम अपने लक्ष्य की ओर अग्रसर होने में लगा दें, तो वही इस दिन की सफलता है। इस प्रकार एक-एक दिन करते हुए जब हम अपना वर्तमान सार्थक कर लेंगे तो हमारे भूतकाल, भविष्यकाल, अंततः सम्पूर्ण जीवन ही सार्थक हो जायेगा।"
            ],
            "en": [
                "Time can be divided into three: the past, the future and the present. The time we have already spent is the past, the time to come is the future, and today is the present. If you wish to achieve success in life, do not keep turning back the pages of the past again and again -- resolve instead to correct the mistakes that were made. Do not weave golden dreams of the future -- leave that to God.",
                "Living in the present means simply this: this one moment is what is in our hands, and whatever work we do in this very moment, we should do it with full absorption, joy and freedom from stress, and live this moment fully.",
                "The truth is that the mind's tendency is to wander -- sometimes into the past, sometimes into the future. If the mind is not in the present, it has strayed from its purpose and is wasting energy in vain.",
                "Success in every field requires keeping the mind in the present. If, during sadhana, the mind stays in the present -- that is, near one's chosen deity -- sadhana can succeed swiftly. Through the Buddhi-Vivek Yog Sadhna given by Bhaiya, a person can gradually reduce the mind's wandering, and as a result the mind begins to settle in the present and directs its energy towards the goal. It is interesting to know that when the mind is in the present, a person stays alert, and whatever work they do -- worldly or spiritual -- their chances of success multiply many times over.",
                "Only the present moment is in our hands. If we spend every moment moving towards our goal, that itself is that day's success. In this way, making the present meaningful day by day, our past, our future, and in the end our entire life become meaningful."
            ]
        },
        "categoryTitle": {
            "hi": "जीवन और आचरण",
            "en": "General Life & Conduct"
        },
        "excerpt": {
            "hi": "समय को तीन काल में विभाजित किया जा सकता है- भूतकाल, भविष्यकाल एवं वर्तमान। जो समय हम व्यतीत कर चुके हैं, वह भूतकाल, आने वाला भविष्यकाल और जो आज है वह वर्तमान। जीवन में अग...",
            "en": "Time can be divided into three: the past, the future and the present. The time we have already spent is the past, the time to come is the future, and today is the present. If yo..."
        }
    },
    {
        "id": "q34",
        "number": 34,
        "categoryId": "life-conduct",
        "question": {
            "hi": "लोभ और आवश्यकता (दममक - हतममकद्ध के बीच के अन्तर को स्पष्ट कीजिए। साधना में इस अन्तर के महत्व को समझाइए।",
            "en": "Clarify the difference between greed and need. Explain the importance of this distinction in sadhana."
        },
        "answer": {
            "hi": [
                "आवश्यकता वह है जो पूर्ण हो जाए और जो कभी पूर्ण होती ही नहीं वह लोभ है। मनुष्य की एक इच्छा पूर्ण होते ही दूसरी बड़ी इच्छा जागृत होती है और यह अंतहीन चक्र चलता ही रहता है। आवश्यकतायें पूर्ण होने के बाद संतुष्टि, और अधिक पाने की होड़ नहीं। बिना मतलब का संचय नहीं। ज़रूरत पूर्ण हो जाने के बाद भी अगर ’और अधिक, और अधिक पाने की दौड़’ में उलझे तो फिर लालच। इच्छा लालसा में नहीं बदलनी चाहिए। इच्छा ज़रूरत है लेकिन इच्छा जब ज़रूरत से ज्यादा बढ़ जाये तो वह लालसा बन जाती है, सात पीढ़ी तक जोड़ने की लालसा और उसके आगे तक की भी।",
                "आवश्यकता आपके जीवन के मूल उद्देश्य की पूर्ति में सहायक होनी चाहिये। जो भौतिक संसाधन, भौतिक सुख-सुविधाएं लक्ष्य के लिए सहायक हैं वह आवश्यकता हैं। जैसे हमारे लक्ष्य को पाने के लिए स्वस्थ शरीर आवश्यक है क्योंकि सारी गतिविधियां शरीर के माध्यम से होती हैं तो शरीर को स्वस्थ रखने के लिए जो कुछ भी चाहिए वह आवश्यक है। यदि हमारा लक्ष्य अध्यात्म है तो भौतिक जीवन अपनी आवश्यकताओं की पूर्ति पर चलेगा न कि दिखावे या लोभ से।",
                "यदि किसी मनुष्य का एकमात्र उद्देश्य भौतिक उपलब्धियाँ हासिल करना है तो वह भौतिकता की मृग्तृष्णा में फंस जायेगा। एक इच्छा की पूर्ति होते ही दूसरी बड़ी इच्छा पैदा हो जाएगी और संचय करने की प्रवृत्ति दिन दूनी रात चौगुनी बढ़ने लगेगी और इस उधेड़बुन में अपने द्वारा निर्मित मकड़जाल में फंसता जाएगा जिसके फलस्वरूप उसमें तुलना करने की प्रवृति, लोभ, ईर्ष्या, राग-द्वेष, कुण्ठा, अवसाद उत्पन्न होंगे। वह स्वयं भी दुःखी रहेगा और दूसरों को भी दुःखी करेगा।",
                "भैया के ज्ञान अनुसार, उनके द्वारा प्रदत्त बुद्धि-विवेक पर आधारित साधना से व्यक्ति को स्वविवेक के आधार पर धीरे-धीरे लोभ और आवश्यकता का अन्तर स्पष्ट होने लगता है। इससे यह स्पष्ट होता है कि भौतिक जगत् की कितनी भी वस्तुएँ एकत्रित कर लूँ, मृत्यु के समय छोड़कर जानी है और यदि मैं आवश्यकतानुसार संयमित जीवन साधना में लगाता हूँ तो मेरे अच्छे कर्म मेरे साथ चलेंगे।"
            ],
            "en": [
                "A need is something that can be fulfilled; greed is something that is never fulfilled. The moment one desire of a human being is fulfilled, a bigger one awakens, and this endless cycle simply continues. After needs are met there is contentment, not a race for more, not accumulation without purpose. If, even after a need is met, one remains caught up in the 'race for more and more', that is greed. Desire should not turn into craving. Desire is a need, but when desire grows beyond need, it becomes craving -- a craving to accumulate for seven generations, and beyond.",
                "A need should serve the fulfilment of your life's fundamental purpose. Whatever material resources and comforts serve your goal are your needs. For instance, a healthy body is necessary for reaching our goal, because all activity happens through the body -- so whatever is needed to keep the body healthy is a need. If our goal is spirituality, then worldly life will run on meeting its needs, not on display or greed.",
                "If a person's sole purpose is to acquire worldly achievements, they will become trapped in the mirage of materialism. The moment one desire is fulfilled a bigger one will be born, and the tendency to accumulate will grow day by day, night by night, and in this entanglement they will become caught in a web of their own making, giving rise to comparison, greed, envy, attachment-aversion, frustration and depression. They will be unhappy themselves, and will make others unhappy too.",
                "According to Bhaiya's knowledge, through sadhana grounded in the discernment he has given, a person gradually comes, through their own discernment, to see clearly the difference between greed and need. This makes it clear that however many things of this material world I gather, I must leave them behind at death -- and if I devote a disciplined life, guided by need, to sadhana, then my good deeds will go with me."
            ]
        },
        "categoryTitle": {
            "hi": "जीवन और आचरण",
            "en": "General Life & Conduct"
        },
        "excerpt": {
            "hi": "आवश्यकता वह है जो पूर्ण हो जाए और जो कभी पूर्ण होती ही नहीं वह लोभ है। मनुष्य की एक इच्छा पूर्ण होते ही दूसरी बड़ी इच्छा जागृत होती है और यह अंतहीन चक्र चलता ही रहता है। आ...",
            "en": "A need is something that can be fulfilled; greed is something that is never fulfilled. The moment one desire of a human being is fulfilled, a bigger one awakens, and this endles..."
        }
    },
    {
        "id": "q35",
        "number": 35,
        "categoryId": "life-conduct",
        "question": {
            "hi": "ईष्वर ने मनुष्य को तीन उपहार देकर विशिष्ट बनाया है। उन उपहारों का महत्व बताइए।",
            "en": "God made human beings distinctive by giving them three gifts. Explain the importance of these gifts."
        },
        "answer": {
            "hi": [
                "मनुष्य ईष्वर की सर्वश्रेष्ठ कृति है। अपनी इस कृति को ईष्वर ने बुद्धि, विवेक एवं वाणी के रूप में तीन उपहार दिए हैं जो मनुष्य को दूसरे प्राणियों से भिन्न व विशिष्ट बनाते हैं।",
                "बुद्धि सोचने व चिंतन करने के लिए तथा विवेक उचित और अनुचित का निर्णय लेने के लिए। बुद्धि और विवेक के द्वारा मनुष्य लक्ष्य को प्राप्त कर सकता है। मानव जाति के विकास में बुद्धि-विवेक का अत्यन्त महत्वपूर्ण स्थान है। भैया ने सर्वप्रथम बुद्धि-विवेक की शक्ति और सम्भावनाओं को पहचाना और उसे विकसित करने के लिए वैज्ञानिक आधार पर चिंतन प्रारम्भ किया जिसके फलस्वरूप बुद्धि-विवेक को परिष्कृत, विकसित एवं जागृत करने से मनुष्य असीमित क्षमताओं का धनी हो सकता है, भौतिक जीवन में भी और आध्यात्मिक जीवन में भी।",
                "यदि हम चिंतन करें तो हम इस निष्कर्ष पर पहुँच सकते हैं कि सारा खेल विचारों का है। हार-जीत, सफलता-असफलता से सुखी-दुःखी होना-सभी कुछ विचारों और मन पर आधारित है। यदि व्यक्ति में बुद्धि-विवेक द्वारा दृढ़ इच्छाशक्ति का विकास कर दिया जाए तो व्यक्ति न कभी हताश होगा न निराश और अंततः लक्ष्य प्राप्त करके ही रहेगा, भौतिकता एवं अध्यात्म में। अध्यात्म में भैया और माँ बसन्ती जी इसके ज्वलंत उदाहरण है।",
                "भौतिक जगत् की सारी वैज्ञानिक उपलब्धियां बुद्धि-विवेक पर आधारित हैं। उसी प्रकार ऋषि-मुनियों व ज्ञानियों की आध्यात्मिक साधना भी। इसलिए बुद्धि-विवेक के महत्व को कम करके आंकना भारी भूल होगी।",
                "सामान्यता अध्यात्म साधना में त्याग, तप, इत्यादि के महत्व को दर्शाया गया है। चिंतक, विचारक भैया ने बुद्धि-विवेक द्वारा इस साधना को अत्यन्त सरल बना दिया जो प्रत्येक व्यक्ति कर सकता है।",
                "वाणी ईश्वर प्रदत्त है। वाणी से ही विचारों का आदान-प्रदान होता है एवं भावों की अभिव्यक्ति होती है। वाणी से ईश्वर का गुणगान करके हम अध्यात्म कर सकते हैं और भौतिकवाद में भी उसे सही ढंग से इस्तेमाल करके एक दूसरे से वार्तालाप करके अपना व्यक्तित्व निखार सकते हैं और यही व्यक्ति की प्रगति और सफलता का साधन है। बुद्धि के साथ वाणी का सोच समझकर उपयोग करें। यदि वाणी का सही उपयोग नहीं किया जाये तो हमारे जीवन में उसके दुष्प्रभाव भी पड़ सकते हैं जैसे सम्बन्धों में कटूता आ सकती है-यहाँ तक कि वे टूट भी सकते हैं, किसी के मन को ठेस पहँुच सकती है, परनिंदा से कर्म-बन्धन बन्ध सकते हैं। अतः वाणी के संयम का महत्व स्वयं सिद्ध हैं। इसी प्रकार मधुर वाणी, अपने व्यवहार में विनम्रता, मधुरता, प्रेम आनन्द का संचार कर अपने जीवन को व दूसरों के जीवन को आनन्दित कर सकते हैं।"
            ],
            "en": [
                "A human being is God's finest creation. To this creation, God gave three gifts -- intellect, discernment and speech -- which set human beings apart and make them distinctive among all other living beings.",
                "Intellect is for thinking and reflection, and discernment is for deciding what is right and wrong. Through intellect and discernment a human being can attain their goal. Intellect and discernment hold an extremely important place in the development of humankind. Bhaiya was the first to recognise the power and potential of intellect and discernment, and began reflecting on a scientific footing on how to develop them -- as a result, by refining, developing and awakening intellect and discernment, a human being can become possessed of unlimited capability, in worldly life as much as in spiritual life.",
                "If we reflect, we may reach the conclusion that the whole game is one of thought. Victory and defeat, success and failure, happiness and sorrow -- all of it rests on thought and mind. If firm willpower is developed in a person through intellect and discernment, that person will never be despondent or disheartened, and will, in the end, certainly attain their goal, both in worldly life and in spirituality. Bhaiya and Maa Basanti Ji are living examples of this in spirituality.",
                "All the scientific achievements of the material world rest on intellect and discernment. So too does the spiritual sadhana of sages and the enlightened. It would therefore be a grave error to underestimate the importance of intellect and discernment.",
                "Generally, the importance of renunciation, austerity and the like is emphasised in spiritual sadhana. Bhaiya, a thinker and reflective mind, made this sadhana, through intellect and discernment, extremely simple -- something every person can practise.",
                "Speech is a gift from God. Through speech, thoughts are exchanged and feelings expressed. Through speech we can sing God's praise and pursue spirituality, and in worldly life too, by using it rightly to converse with one another, we can refine our personality -- and this is itself a means of a person's progress and success. Use speech thoughtfully, alongside intellect. If speech is not used rightly, it can also bring harmful effects into our life -- relationships can turn bitter, even break; someone's heart may be hurt; slander can bind us in the bondage of karma. Hence the importance of restraint in speech is self-evident. In the same way, sweet speech, and humility, warmth and joy in our conduct, can bring happiness into our own life and into others'."
            ]
        },
        "categoryTitle": {
            "hi": "जीवन और आचरण",
            "en": "General Life & Conduct"
        },
        "excerpt": {
            "hi": "मनुष्य ईष्वर की सर्वश्रेष्ठ कृति है। अपनी इस कृति को ईष्वर ने बुद्धि, विवेक एवं वाणी के रूप में तीन उपहार दिए हैं जो मनुष्य को दूसरे प्राणियों से भिन्न व विशिष्ट बनाते है...",
            "en": "A human being is God's finest creation. To this creation, God gave three gifts -- intellect, discernment and speech -- which set human beings apart and make them distinctive amo..."
        }
    },
    {
        "id": "q36",
        "number": 36,
        "categoryId": "life-conduct",
        "question": {
            "hi": "वाणी-संयम का महत्व बताइए।",
            "en": "Explain the importance of restraint in speech."
        },
        "answer": {
            "hi": [
                "ईश्वर ने मनुष्य को वाणी का विशेष उपहार दिया है जिससे वह आपस में विचारों का आदान प्रदान कर सके। वाणी से ही भाव प्रकट होते हैं। सद्गुरु अपनी वाणी द्वारा ही आशीर्वचन, ज्ञान चर्चा करके हमारे अध्यात्म जीवन को नई दिशा देते हैं और वाणी द्वारा ही शिष्य अपने विचार सद्गुरु तक पहुँचा कर अध्यात्म में मार्गदर्शन प्राप्त कर सकता है।",
                "वाणी से हम ईश्वर का गुणगान करके उनके रूप-स्वरूप का वर्णन करके अपने भाव अपने इष्टदेव तक पहुँचा सकते हैं। वाणी चैतन्य है और हम इसका सही उपयोग करके स्वयं को उन्नत कर सकते हैं। वाणी अमूल्य है, इसी वाणी से प्रेमपूर्वक ईश्वर का नाम अधिक से अधिक जपकर हम अपना आध्यात्म धन बढ़ा सकते हैं।",
                "बोलने में चैतन्य शक्ति लगती है। इसलिए वाणी का उपयोग बहुत ही संयत, सोच समझकर सही स्थान पर ही करना चाहिए। व्यर्थ के वार्तालाप में समय व वाणी का दुरुपयोग न करें। वाणी व्यक्ति के व्यक्तित्व का दर्पण है।",
                "अपनी वाणी संयमित, मधुर एवं प्रेममयी होनी चाहिए। जिनसे आप मिलने जा रहे हैं उनसे अपने सम्बन्ध और वहाँ की परिस्थिति के अनुसार विवेक-बुद्धि को काम में लेते हुए बोलना चाहिये। वाणी से दूसरों को जीता जा सकता है और उसी से दुश्मन भी बन सकते हैं।"
            ],
            "en": [
                "God has given human beings the special gift of speech, so that they may exchange thoughts with one another. Feelings are expressed only through speech. It is through their speech that a true guru gives blessings and discusses knowledge, giving new direction to our spiritual life, and it is through speech that a disciple carries their thoughts to the true guru and receives guidance in spirituality.",
                "Through speech we can sing God's praise, describe their form, and carry our feelings to our chosen deity. Speech is conscious, and by using it rightly we can uplift ourselves. Speech is priceless -- by lovingly chanting God's name again and again through this very speech, we can increase our spiritual wealth.",
                "Speaking consumes conscious power. Speech should therefore be used with great restraint, thoughtfully, and only where it is right. Do not misuse time and speech in idle conversation. Speech is the mirror of a person's character.",
                "One's speech should be restrained, sweet and full of love. One should speak according to one's relationship with those one is meeting and the circumstances there, using discernment. Through speech, others can be won over -- and through it, enemies can also be made."
            ]
        },
        "categoryTitle": {
            "hi": "जीवन और आचरण",
            "en": "General Life & Conduct"
        },
        "excerpt": {
            "hi": "ईश्वर ने मनुष्य को वाणी का विशेष उपहार दिया है जिससे वह आपस में विचारों का आदान प्रदान कर सके। वाणी से ही भाव प्रकट होते हैं। सद्गुरु अपनी वाणी द्वारा ही आशीर्वचन, ज्ञान...",
            "en": "God has given human beings the special gift of speech, so that they may exchange thoughts with one another. Feelings are expressed only through speech. It is through their speec..."
        }
    },
    {
        "id": "q37",
        "number": 37,
        "categoryId": "life-conduct",
        "question": {
            "hi": "’समय-संयम’ का महत्व समझाइए।",
            "en": "Explain the importance of 'restraint of time'."
        },
        "answer": {
            "hi": [
                "समय संयम का सरल भाषा में तात्पर्य है कि समय के हर क्षण का सदुपयोग। प्रत्येक व्यक्ति अमीर-गरीब, राजा-रंक को दिन में 24 घंटे ही मिलते हैं चाहे तो इसे व्यर्थ नष्ट कर अपने जीवन को निर्थक बना सकते हैं या उसका सदुपयोग कर जीवन को सार्थक। सभी सफल व्यक्तियों जैसे वैज्ञानिक, उद्योगपति आदि में जो एक सर्वमान्य गुण है, वह है समय के हर क्षण का सदुपयोग। उन्हें यह स्पष्ट है कि बीता हुआ एक भी क्षण किसी भी कीमत पर कभी वापस नहीं आएगा। एक साधक को भी समय-संयम का महत्व समझना चाहिए क्योंकि अध्यात्म में समय का बहुत महत्व है। भैया श्री नन्दकिशोर शारदा एवं माँ बसन्ती जी ने जीवन मे एक-एक क्षण का सदुपयोग किया। समय संयम ही सफलता का मार्ग प्रशस्त करता है।",
                "भैया के ज्ञान से बुद्धि-विवेक जागृत होने पर व्यक्ति के अंतर्मन में मृत्यु की निश्चिंतता बैठ जाती है। मृत्यु अवश्यंभावी है और कभी भी आ सकती है- यह सत्य धारणा उसका अंतर्मन स्वीकार कर लेता है। भौतिक जगत् की कोई भी वस्तु मरने के बाद साथ नहीं चलेगी। अतः वह भौतिकता की नश्वरता को समझेगा और बिना समय गंवाये शाश्वत् की खोज में लग जायेगा, उसकी अध्यात्म यात्रा शुरू हो जाएगी। जीवन को देखने का दृष्टिकोण बदल जाएगा, एक आमूलचूल परिवर्तन हो जाएगा।"
            ],
            "en": [
                "In simple terms, restraint of time means making good use of every moment of time. Every person -- rich or poor, king or pauper -- receives just 24 hours in a day; they may waste it and render their life meaningless, or make good use of it and render their life meaningful. The one quality common to all successful people -- scientists, industrialists and others -- is that they make good use of every moment of time. It is clear to them that a moment once passed will never return, at any price. A seeker too should understand the importance of restraint of time, because time holds great importance in spirituality. Bhaiya Shri Nandkishore Sharda and Maa Basanti Ji made good use of every single moment of their lives. Restraint of time itself paves the way to success.",
                "When intellect and discernment awaken through Bhaiya's knowledge, a certainty about death settles within a person's inner mind. The truth that death is inevitable and can come at any moment is accepted by their inner mind. Nothing of the material world will accompany them after death. So they come to understand the transience of materialism, and without wasting time they take up the search for the eternal -- their spiritual journey begins. Their outlook on life changes; a fundamental transformation takes place."
            ]
        },
        "categoryTitle": {
            "hi": "जीवन और आचरण",
            "en": "General Life & Conduct"
        },
        "excerpt": {
            "hi": "समय संयम का सरल भाषा में तात्पर्य है कि समय के हर क्षण का सदुपयोग। प्रत्येक व्यक्ति अमीर-गरीब, राजा-रंक को दिन में 24 घंटे ही मिलते हैं चाहे तो इसे व्यर्थ नष्ट कर अपने जी...",
            "en": "In simple terms, restraint of time means making good use of every moment of time. Every person -- rich or poor, king or pauper -- receives just 24 hours in a day; they may waste..."
        }
    },
    {
        "id": "q38",
        "number": 38,
        "categoryId": "life-conduct",
        "question": {
            "hi": "विचार-संयम का महत्व बताइए।",
            "en": "Explain the importance of restraint of thought."
        },
        "answer": {
            "hi": [
                "दिमाग में हर क्षण विचार चलते रहते हैं चाहे, अनचाहे। ये अनियंत्रित विचार न केवल व्यक्ति की ऊर्जा का क्षय करते हैं बल्कि उसे लक्ष्य के प्रति केन्द्रित होने से रोकते हैं जो व्यक्ति की असफलता का एक कारण है। यदि विचारों को लक्ष्य के प्रति केंद्रित किया जाए तो कम समय में कम ऊर्जा के द्वारा लक्ष्य को सफलतापूर्वक प्राप्त करने में मदद मिलती है।",
                "विचार से ही शब्द बनते हैं, शब्दों से कर्म बनते हैं, कर्म से आदत बनते हैं और फिर आदत से ही चरित्र का निर्माण/पतन होता है।",
                "माँ बसन्ती जी द्वारा विचार-संयम का अनूठा उपाय बताया गया है। माँ बसन्ती जी ने समझाया कि विचारों से न प्रभावित होना है न विचलित। जैसे-जैसे व्यक्ति में लक्ष्य प्राप्ति का महत्व बढ़ेगा, उसके विचार संयमित एवं लक्ष्य के प्रति केन्दिªत होने लगेंगे। अध्यात्म में भी माँ बसन्ती जी यही समझाते कि ध्यान करते समय आने वाले विचारों को महत्व न दें और शांत मन से इष्टदेव से जुड़ने का प्रयास करें। आश्चर्यजनक है कि उनके इस विलक्षण उपाय से विचार-संयम स्वतः ही सम्भव हो जाता!"
            ],
            "en": [
                "Thoughts run through the mind every moment, wanted or unwanted. These uncontrolled thoughts not only drain a person's energy but also prevent them from staying focused on their goal, which is one cause of a person's failure. If thoughts are kept focused on the goal, it helps in reaching that goal successfully with less time and less energy.",
                "Thought gives rise to words, words give rise to action, action gives rise to habit, and habit in turn builds or breaks character.",
                "Maa Basanti Ji gave a remarkable method for restraint of thought. She explained that one should neither be influenced by thoughts nor disturbed by them. As the importance of attaining one's goal grows within a person, their thoughts naturally become restrained and focused on that goal. In spirituality too, Maa Basanti Ji would explain the same thing -- that during meditation, one should not give importance to the thoughts that arise, and should try, with a calm mind, to connect with one's chosen deity. It is remarkable that through this singular method of hers, restraint of thought becomes possible almost on its own!"
            ]
        },
        "categoryTitle": {
            "hi": "जीवन और आचरण",
            "en": "General Life & Conduct"
        },
        "excerpt": {
            "hi": "दिमाग में हर क्षण विचार चलते रहते हैं चाहे, अनचाहे। ये अनियंत्रित विचार न केवल व्यक्ति की ऊर्जा का क्षय करते हैं बल्कि उसे लक्ष्य के प्रति केन्द्रित होने से रोकते हैं जो...",
            "en": "Thoughts run through the mind every moment, wanted or unwanted. These uncontrolled thoughts not only drain a person's energy but also prevent them from staying focused on their ..."
        }
    },
    {
        "id": "q44",
        "number": 44,
        "categoryId": "life-conduct",
        "question": {
            "hi": "अध्यात्म में परिवार के महत्व को समझाइए। माता-पिता का बच्चों के साथ व्यवहार का क्या आधार होना चाहिए?",
            "en": "Explain the importance of family in spirituality. What should be the basis of parents' conduct with their children?"
        },
        "answer": {
            "hi": [
                "परिवार मनुष्य को ईश्वर का उपहार है। बच्चे उसकी संपत्ति न होकर ईश्वर प्रदत्त धरोहर है। अतः इस बात का सम्मान करते हुए हमें निर्लिप्त भाव से इनके प्रति अपने कर्त्तव्यों का पालन करते रहना चाहिए। इन्हें पूर्ण आदर, सम्मान देना चाहिए और जहाँ तक हो सके उनकी इच्छाओं का सम्मान करना चाहिए व परिवार के हर सदस्य की सभी सुविधाओं का ध्यान रखना चाहिये, भावनाओं का आदर करें व विचारों को यथोचित महत्व दें।",
                "परिवार में सामंजस्य होने से और घर में शांति-खुशी का वातावरण होने से व्यक्ति के लिये अध्यात्म करना सरल हो जाता है। परस्पर आदर और सहयोग की भावना से एक सकारात्मक ऊर्जा का प्रादुर्भाव होता है जो अध्यात्म में सहायक है। यह स्वाभाविक है कि पीढ़ी के अन्तर के कारण कभी-कभी विचारों में मतभेद उत्पन्न हो जायें। ऐसी स्थिति में एक अध्यात्म व्यक्ति को विवेक-बुद्धि से चिंतन करके समय अनुकूल एवं परिवार के लिये हितकर निर्णय लेना चाहिये। इससे मतभेद मनभेद में परिवर्तित नहीं होगा और परिवार की शांति बनी रहेगी।",
                "माता-पिता के बच्चों के साथ व्यवहार का आधार भी अध्यात्म होना चाहिये। माँ बसन्ती जी यह समझातीं थीं कि बच्चा भी एक चैतन्य शरीर है जिसकी अपनी बुद्धि, विचारधारा, इच्छाएं, भावनायें हैं और वह अपने प्रारब्ध लेकर आया है। माता-पिता बच्चों का भाग्य नहीं बदल सकते, केवल उनको आत्मनिर्भर होने तक एक पौधे के समान सम्भाल सकते हैं। इसलिये उनका कर्त्तव्य है कि बच्चों में अच्छे संस्कार एवं अध्यात्म के बीज रोपित करने का प्रयास करें, अपने अनुभव का उपयोग करके उनका सही मार्गदर्शन करें और घर का वातावरण सकारात्मक बनायें। जब माता-पिता आसक्ति एवं मोह से मुक्त होंगे तभी वे बच्चों को आवश्यक अवसर, सुविधा एवं प्रोत्साहन दे पायेंगे और दूसरों की देखा-देखी अनावश्यक साधन देकर उन्हें अवगुणी नहीं बनायेंगे। माता-पिता को स्वयं भी अध्यात्म में निरन्तर अग्रसर होने और बच्चों में सद्गुण विकसित करने का प्रयास करना चाहिये। इस प्रकार वे उनके जीवन को आनन्दमय एवं सार्थक बनाने में सहयोगी बनते हैं।"
            ],
            "en": [
                "Family is God's gift to human beings. Children are not one's property but a trust given by God. Honouring this, we should keep fulfilling our duties towards them without attachment. They should be given full respect and honour, and as far as possible their wishes should be respected; the comfort of every family member should be kept in mind, feelings should be honoured, and thoughts should be given their due importance.",
                "When there is harmony in the family and an atmosphere of peace and happiness at home, spirituality becomes easier for a person. A feeling of mutual respect and cooperation gives rise to positive energy that aids spirituality. It is natural that, because of the gap between generations, differences of opinion sometimes arise. In such a situation, a spiritual person should reflect with discernment and take a decision suited to the time and beneficial to the family. This keeps differences from turning into ill will, and the family's peace is preserved.",
                "The basis of parents' conduct with their children, too, should be spiritual. Maa Basanti Ji would explain that a child, too, is a conscious being, with their own intellect, thinking, desires and feelings, and that they have arrived carrying their own prarabdha. Parents cannot change their children's fortune -- they can only look after them, like a plant, until they become self-reliant. It is therefore their duty to try to plant the seeds of good sanskar and spirituality in their children, to use their own experience to guide them rightly, and to keep the atmosphere at home positive. Only when parents are free of attachment and infatuation will they be able to give their children the opportunities, comforts and encouragement they need, without spoiling them by giving unnecessary things out of imitation of others. Parents should themselves keep advancing continuously in spirituality and try to develop virtue in their children. In this way they become partners in making their children's lives joyful and meaningful."
            ]
        },
        "categoryTitle": {
            "hi": "जीवन और आचरण",
            "en": "General Life & Conduct"
        },
        "excerpt": {
            "hi": "परिवार मनुष्य को ईश्वर का उपहार है। बच्चे उसकी संपत्ति न होकर ईश्वर प्रदत्त धरोहर है। अतः इस बात का सम्मान करते हुए हमें निर्लिप्त भाव से इनके प्रति अपने कर्त्तव्यों का प...",
            "en": "Family is God's gift to human beings. Children are not one's property but a trust given by God. Honouring this, we should keep fulfilling our duties towards them without attachm..."
        }
    },
    {
        "id": "q4",
        "number": 4,
        "categoryId": "spiritual-concepts",
        "question": {
            "hi": "ऐसी कौन सी शक्ति है जो मनुष्य जीवन को चलायमान रखती है?",
            "en": "What is the power that keeps human life in motion?"
        },
        "answer": {
            "hi": [
                "पृथवी पर माता-पिता द्वारा निर्मित भौतिक शरीर में ईश्वर प्रदत्त, उन्हीं का अंश, चैतन्य शरीर प्रविष्ट होता है। यही चैतन्य शक्ति मनुष्य जीवन को चलायमान रखती है। जब यह चैतन्य शक्ति मनुष्य शरीर को छोड़ कर निकल जाती है तब यह भौतिक शरीर मृत कहलाता है। चैतन्य शरीर बुद्धि-विवेक, भावनाओं, इच्छाओं से परिपूर्ण अति तेजोमय व अत्यन्त ही शक्तिशाली है।"
            ],
            "en": [
                "Into the physical body formed by one's parents on earth enters the conscious body, given by God and a portion of God himself. It is this conscious power that keeps human life in motion. When this conscious power leaves the human body, the physical body is called dead. The conscious body, full of intellect, discernment, feelings and desires, is exceedingly radiant and exceedingly powerful."
            ]
        },
        "categoryTitle": {
            "hi": "अध्यात्म के मूल सिद्धांत",
            "en": "Fundamental Spiritual Concepts"
        },
        "excerpt": {
            "hi": "पृथवी पर माता-पिता द्वारा निर्मित भौतिक शरीर में ईश्वर प्रदत्त, उन्हीं का अंश, चैतन्य शरीर प्रविष्ट होता है। यही चैतन्य शक्ति मनुष्य जीवन को चलायमान रखती है। जब यह चैतन्य...",
            "en": "Into the physical body formed by one's parents on earth enters the conscious body, given by God and a portion of God himself. It is this conscious power that keeps human life in..."
        }
    },
    {
        "id": "q5",
        "number": 5,
        "categoryId": "spiritual-concepts",
        "question": {
            "hi": "भौतिकवाद क्या है?",
            "en": "What is materialism?"
        },
        "answer": {
            "hi": [
                "मनुष्य के भौतिक शरीर के रखरखाव के लिए और उसके धरती पर जन्म लेने के वास्तविक उद्देश्य की पूर्ति में सहायतार्थ रचा गया भौतिक जीवन ही भौतिकवाद है। भौतिक शरीर के छूटने पर उस मनुष्य के लिए भौतिकवाद भी छूट जाता है। भौतिकवाद के अंतर्गत आते हैं- परिवार, समाज, दूसरे मनुष्यों से संबंध, धन, संपदा, भौतिक सुख प्राप्ति के साधन, सभी दृश्यमान वस्तुएं व गतिविधियां, कंचन-कामिनी-कीर्ति, इत्यादि।",
                "भौतिकवाद इतना लुभावना होता है कि मनुष्य इसके मायाजाल में और सुख-प्राप्ति की मृगतृष्णा में उलझता ही चला जाता है। और अज्ञानतावश गलत कर्म व अवगुण एकत्रित कर लेता है, जिनसे उन्हें सिवाय दुःख और अशांति के कुछ प्राप्त नहीं होता। इसके विपरीत भैया के ज्ञान से वह सद्गुणों का विकास कर सुखमयी जीवन व्यतीत कर सकता है। भौतिकवाद स्थायी नहीं है क्योंकि भौतिक जगत् की सभी वस्तुएं व सम्बन्ध परिवर्तनशील हैं और अंततः नश्वर है।"
            ],
            "en": [
                "Materialism is the worldly life created to maintain a human being's physical body and to help fulfil the real purpose of their birth on earth. When the physical body is left behind, materialism too is left behind for that person. Materialism includes: family, society, relationships with other people, wealth, property, the means of gaining worldly comfort, all visible objects and activities, wealth, sensual attachment, fame, and so on.",
                "Materialism is so alluring that a human being goes on getting entangled in its web of illusion and in the mirage of seeking pleasure. And out of ignorance they accumulate wrong deeds and vices, from which they gain nothing but sorrow and unrest. In contrast, through Bhaiya's knowledge, they can develop virtue and lead a joyful life. Materialism is not permanent, because all the things and relationships of the material world are subject to change and are, in the end, transient."
            ]
        },
        "categoryTitle": {
            "hi": "अध्यात्म के मूल सिद्धांत",
            "en": "Fundamental Spiritual Concepts"
        },
        "excerpt": {
            "hi": "मनुष्य के भौतिक शरीर के रखरखाव के लिए और उसके धरती पर जन्म लेने के वास्तविक उद्देश्य की पूर्ति में सहायतार्थ रचा गया भौतिक जीवन ही भौतिकवाद है। भौतिक शरीर के छूटने पर उस...",
            "en": "Materialism is the worldly life created to maintain a human being's physical body and to help fulfil the real purpose of their birth on earth. When the physical body is left beh..."
        }
    },
    {
        "id": "q6",
        "number": 6,
        "categoryId": "spiritual-concepts",
        "question": {
            "hi": "अध्यात्मवाद क्या है? कैसे किया जा सकता है?",
            "en": "What is spirituality? How can it be practised?"
        },
        "answer": {
            "hi": [
                "ईश्वर और स्वयं के सत्य, शाश्वत् मूल स्वरूप का सही ज्ञान प्राप्त कर तदनुसार जीना अध्यात्मवाद है। जैसे भौतिक शरीर से भौतिकवाद जुड़ता है, उसी प्रकार ईश्वर-प्रदत्त चैतन्य शरीर से अध्यात्मवाद जुड़ा है। जब तक मनुष्य पृथवी रूपी कर्मक्षेत्र में रहता है, वह कर्म करने को स्वतंत्र है। मृत्यु के बाद नश्वर भौतिक शरीर यहीं छूट जाएगा और चैतन्य शरीर अपने जीवन भर किए अच्छे-बुरे कर्मों का फल पाएगा इसलिए मृत्यु के बाद के जीवन की तैयारी करना अध्यात्मवाद का एक अभिन्न व महत्वपूर्ण पहलू है। अध्यात्मवाद ईश्वरीय कृपा से मिले सही मार्गदर्शक के स्व-अनुभूत ज्ञान, आशीर्वाद और निःस्वार्थ मार्गदर्शन से किया जा सकता है।",
                "अगर व्यक्ति भैया जी द्वारा दिए गए ज्ञान को जीवन में धारण करे और उनके द्वारा दी गई ’बुद्धि-विवेक योग साधना पद्धति’ से जिए तो वह सरलता से अपने सभी भौतिक कर्त्तव्यों का पालन अनासक्त भाव से करते हुए गृहस्थ में रहकर भी अध्यात्मवाद कर सकता है। भैया जी के अनुसार भौतिकता अध्यात्म की नींव है और भौतिक सुख-दुःख अस्थाई है। यदि मनुष्य मायाजाल में न उलझकर बुद्धि-विवेक का उपयोग करते हुए आवश्यकतानुसार भौतिकता को काम में ले और जिस उद्देश्य के लिए उसने जन्म लिया है, उसकी पूर्ति के लिए भी थोड़ा प्रयास करे तो वह भौतिकता में भी आनन्द, शांति, खुशी से रह सकता है और साथ-साथ मृत्यु के बाद के जीवन की भी तैयारी कर सकता है। अपने जीवन में ईश्वरीय कृपा का अनुभव करते हुए सहर्ष परिस्थितियों को स्वीकार करना, उनसे सीखना, अपनी बुद्धि-विवेक-गुणों का विकास करना, इष्टदेव से जुड़ना, निःस्वार्थ प्रेम से ’उनका’ स्मरण-गुणगान करना, सतर्कता से सही कर्म करना, भौतिक कर्त्तव्यों का निष्ठापूर्वक-निश्चिंतता व अनासक्ति रखते हुए पालन करना, मार्गदर्शक से जो अध्यात्म का मार्ग व ज्ञान मिला है उन्हें उनकी आज्ञा से दूसरों के साथ साझा करना- यह समग्रता में अध्यात्मवाद को मनुष्य जीवन में सम्भव कराता है।"
            ],
            "en": [
                "To gain the right knowledge of God's and one's own true, eternal, essential nature, and to live accordingly, is spirituality. Just as materialism is tied to the physical body, spirituality is tied to the God-given conscious body. As long as a human being remains in earth, this field of action, they are free to act. After death, the transient physical body will be left right here, and the conscious body will receive the fruit of the good and bad deeds done through its whole life -- so preparing for the life after death is an integral and important aspect of spirituality. Spirituality can be practised through the self-realised knowledge, blessing and selfless guidance of a true guide received by God's grace.",
                "If a person carries into their life the knowledge given by Bhaiyaji and lives by the 'Buddhi-Vivek Yog Sadhna' method he gave, they can easily fulfil all their worldly duties without attachment while remaining a householder, and still practise spirituality. According to Bhaiyaji, materialism is the foundation of spirituality, and worldly happiness and sorrow are temporary. If a person, without becoming entangled in the web of illusion, uses discernment to engage with worldly life as needed, and also makes a little effort towards the purpose for which they were born, they can live with joy, peace and happiness even within worldly life, while also preparing for the life after death. Experiencing God's grace in one's life, gladly accepting circumstances and learning from them, developing one's intellect, discernment and virtues, connecting with one's chosen deity, remembering and praising 'them' with selfless love, acting rightly with alertness, fulfilling worldly duties faithfully with equanimity and without attachment, and sharing, by the guide's command, the spiritual path and knowledge received from the guide with others -- taken together, this is what makes spirituality possible in human life."
            ]
        },
        "categoryTitle": {
            "hi": "अध्यात्म के मूल सिद्धांत",
            "en": "Fundamental Spiritual Concepts"
        },
        "excerpt": {
            "hi": "ईश्वर और स्वयं के सत्य, शाश्वत् मूल स्वरूप का सही ज्ञान प्राप्त कर तदनुसार जीना अध्यात्मवाद है। जैसे भौतिक शरीर से भौतिकवाद जुड़ता है, उसी प्रकार ईश्वर-प्रदत्त चैतन्य शरीर...",
            "en": "To gain the right knowledge of God's and one's own true, eternal, essential nature, and to live accordingly, is spirituality. Just as materialism is tied to the physical body, s..."
        }
    },
    {
        "id": "q7",
        "number": 7,
        "categoryId": "spiritual-concepts",
        "question": {
            "hi": "अध्यात्म क्यों करना चाहिये?",
            "en": "Why should one practise spirituality?"
        },
        "answer": {
            "hi": [
                "अध्यात्म इसलिये करना चाहिये क्योंकि मृत्यु के बाद जीवन है एवं चैतन्य शरीर में स्मृति रहती है। आनन्द, शांति व खुशी से रहना ही अध्यात्म है। अध्यात्म जीवन जीने की एक सही कला है, इस जीवन में और इस जीवन के बाद भी (मृत्यु के बाद)। इसके द्वारा यह जानते हुए भी कि भौतिक जीवन की सारी वस्तुएं नश्वर हैं और उन्हें मृत्यु के बाद साथ में नहीं ले जाया जा सकता है, भौतिक जीवन को आनन्द, शांति व खुशी से जीया जाता है। अध्यात्म के बिना दुःख, अवसाद, निराशा, कुंठा, क्रोध रहता है, जो नरक के समान पीड़ादायी हैं और यह बहुमूल्य जीवन व्यर्थ हो जाता है और मृत्यु के बाद में अध्यात्म के अभाव में किए गए दुष्कर्म को भोगना पड़ेगा जो निश्चित रूप से अत्यन्त कष्टदायी होंगे।",
                "यह जानते हुए कि भौतिक जीवन की सारी वस्तुएं नश्वर हैं और पृथवी पर संचित वस्तुओं को मृत्यु के बाद साथ नहीं ले जा सकते, इसलिये यह ज़रूरी है कि ऐसी वस्तुओं का संग्रह करें जिन्हें मृत्यु के बाद चैतन्य शरीर साथ ले जा सके जैसे ईश्वर आराधना, सत्कर्म, सदगुण, ईश्वर पर अटूट आस्था, श्रद्धा और विश्वास, ईश्वर के चरणों में आनन्दमय जीवन व्यतीत करना, यह अध्यात्म के माध्यम से ही सम्भव है। इस प्रकार अध्यात्म के द्वारा इस लोक एवं परलोक में भी आनन्दमय जीवन जीया जा सकता है। यानी दोनों हाथों में लड्डू।"
            ],
            "en": [
                "One should practise spirituality because there is life after death, and the conscious body retains memory. Living with joy, peace and happiness is itself spirituality. Spirituality is the right art of living -- in this life, and after it too (after death). Through it, even while knowing that all things of worldly life are transient and cannot be carried along after death, worldly life is lived with joy, peace and happiness. Without spirituality there remains sorrow, depression, despair, frustration and anger, which are as painful as hell, and this priceless life is wasted -- and after death one has to bear the fruit of the wrong deeds committed in the absence of spirituality, which will certainly be extremely painful.",
                "Knowing that all things of worldly life are transient, and that whatever is gathered on earth cannot be taken along after death, it becomes necessary to gather instead the things the conscious body can carry after death -- such as worship of God, right action, virtue, unwavering faith and trust in God, reverence, and living a joyful life at God's feet -- and this is possible only through spirituality. In this way, through spirituality, a joyful life can be lived both in this world and the next. That is, the best of both."
            ]
        },
        "categoryTitle": {
            "hi": "अध्यात्म के मूल सिद्धांत",
            "en": "Fundamental Spiritual Concepts"
        },
        "excerpt": {
            "hi": "अध्यात्म इसलिये करना चाहिये क्योंकि मृत्यु के बाद जीवन है एवं चैतन्य शरीर में स्मृति रहती है। आनन्द, शांति व खुशी से रहना ही अध्यात्म है। अध्यात्म जीवन जीने की एक सही कला...",
            "en": "One should practise spirituality because there is life after death, and the conscious body retains memory. Living with joy, peace and happiness is itself spirituality. Spiritual..."
        }
    },
    {
        "id": "q8",
        "number": 8,
        "categoryId": "spiritual-concepts",
        "question": {
            "hi": "अध्यात्म धन क्या है?",
            "en": "What is spiritual wealth?"
        },
        "answer": {
            "hi": [
                "पृथवी एक कर्मक्षेत्र है, जहाँ मनुष्य ईश्वर से सम्पर्क बना कर मनुष्यत्व से देवत्व की यात्रा कर सकता है।",
                "जिस तरह भौतिक जगत में मनुष्य मेेहनत, लगन, उत्साह, उमंग से भौतिक धन इकट्ठा करता है ताकि वह भौतिकता में सुखी रह सके, उसी तरह से, अध्यात्म में भी तन, मन, धन, उत्साह, उमंग से मनुष्य अध्यात्म-धन इकट्ठा कर सकता है, जो उसकी मृत्यु के बाद चैतन्य जगत में पूंजी के रूप में उसके बहुत काम आयेगा। अब प्रश्न यह उठता है कि अध्यात्म धन क्या है?",
                "पहला है गुण जो कि तीन प्रकार के होते हैं सतोगुण, रजोगुण और तमोगुण। भैया के ज्ञान द्वारा जब मनुष्य अपने अन्दर सद्गुण विकसित करता है तो उसका चैतन्य शरीर उन्नत होकर आनन्द, शांति, खुशी प्राप्त करता है। अर्थात् तमोगुण को त्यागकर, रजोगुण को भौतिकवाद में अपने दैनिक क्रियाकलापों में आवश्यकतानुसार संतुलित कर, एवं सत्कर्म करते हुए सतोगुण का विकास कर मनुष्य गुणवान बन सकता है और फलस्वरुप अध्यात्म-धन प्राप्त कर सकता है।",
                "गुण जिसके अन्दर होते हैं, वह हमेशा शांत, आनन्दित और प्रेम से रहता है। केवल स्वयं के बारे में ही नहीं सोच कर दूसरों के हित के लिये भी प्रयास करने को तत्पर रहता है। इस प्रकार वह सत्कर्म इकठ्ठे करता है, जो भी अध्यात्म धन की श्रेणी में आते हैं। सत्कर्म उसके लिए अच्छे प्रारब्ध के रूप में मृत्यु के बाद के जीवन में शुभ फलदायी होते हैं। सत्कर्म से मिलने वाली दुआएँ भी मनुष्य की पूंजी है।",
                "तीसरा है ईश्वर का नाम। जब मनुष्य सत्य को समझ कर भौतिकवाद के दलदल में भी अनासक्त भाव से कमल के फूल की तरह रहता है और ईश्वर का महत्त्व समझकर निःस्वार्थ प्रेम से उनका नाम जपता है, तो वह उसके अध्यात्म धन के रूप में जमा हो जाता है। ज्ञान धारण होने के कारण वह भौतिक इच्छाओं की पूर्ति में ईश्वर के नाम व अपनी साधना, आदि को खर्च नहीं करता।",
                "अध्यात्म धन अर्जित करने की कोई सीमा नहीं होती। जितना अधिक मनुष्य धरती पर अध्यात्म धन कमाता है, उतना ही उसका आनन्द बढ़ता जाता है और मृत्यु के बाद की तैयारी भी साथ में वह कर पाता है।"
            ],
            "en": [
                "The earth is a field of action, where a human being, by connecting with God, can journey from humanity to divinity.",
                "Just as in the material world a human being gathers material wealth through hard work, dedication, enthusiasm and zeal so that they may live happily amid materialism, in the same way, in spirituality too, a human being can gather spiritual wealth through body, mind, wealth, enthusiasm and zeal -- wealth that will serve them greatly, as capital, in the conscious world after death. The question then arises -- what is spiritual wealth?",
                "The first is virtue, which is of three kinds -- satoguna, rajoguna and tamoguna. When, through Bhaiya's knowledge, a person develops virtue within themselves, their conscious body is uplifted and attains joy, peace and happiness. That is, by renouncing tamoguna, balancing rajoguna as needed in one's daily worldly activities, and developing satoguna through right action, a human being can become virtuous and, as a result, attain spiritual wealth.",
                "One in whom virtue resides always remains calm, joyful and loving. They are ready to work not only for their own sake but for others' good as well. In this way they gather right actions, which fall into the category of spiritual wealth. These right actions become auspicious prarabdha, bearing good fruit in the life after death. The blessings received through right action, too, are a person's capital.",
                "The third is the name of God. When a person, having understood the truth, remains like a lotus flower, unattached even within the mire of materialism, and, understanding the importance of God, chants their name with selfless love, that too accumulates as their spiritual wealth. Being established in this knowledge, they do not spend God's name or their own sadhana in fulfilling material desires.",
                "There is no limit to how much spiritual wealth one may earn. The more spiritual wealth a human being earns on earth, the more their joy grows, and alongside it they are also able to prepare for the life after death."
            ]
        },
        "categoryTitle": {
            "hi": "अध्यात्म के मूल सिद्धांत",
            "en": "Fundamental Spiritual Concepts"
        },
        "excerpt": {
            "hi": "पृथवी एक कर्मक्षेत्र है, जहाँ मनुष्य ईश्वर से सम्पर्क बना कर मनुष्यत्व से देवत्व की यात्रा कर सकता है। जिस तरह भौतिक जगत में मनुष्य मेेहनत, लगन, उत्साह, उमंग से भौतिक धन...",
            "en": "The earth is a field of action, where a human being, by connecting with God, can journey from humanity to divinity."
        }
    },
    {
        "id": "q9",
        "number": 9,
        "categoryId": "spiritual-concepts",
        "question": {
            "hi": "क्या भौतिकवाद अध्यात्म में बाधक है?",
            "en": "Is materialism an obstacle to spirituality?"
        },
        "answer": {
            "hi": [
                "भौतिकवाद अध्यात्म में बाधक नहीं वरन् पूरक है। भैया के ज्ञान से निश्चित रूप से हम समझ चुके हैं कि भौतिकवाद नश्वर है। भौतिकवाद में आसक्ति न रखकर ज़रूरत के आधार पर उपयोग कर ईश्वर से निःस्वार्थ भाव से प्रेम एवं स्वयं में सद्गुणों की उन्नति कर अध्यात्म की ओर बढ़ सकते हैं। जब तक व्यक्ति का पारिवारिक जीवन में सामांजस्य नहीं होगा तब तक वह एकाग्र होकर अध्यात्म नहीं कर सकता। अध्यात्म एवं भौतिकता में समन्वय कर अध्यात्म की ओर बढ़ सकते हैं।",
                "यह समझना आवश्यक है कि अध्यात्म की सारी क्रियाएं जैसे जप, तप, ध्यान आदि इस भौतिक शरीर के माध्यम से ही सम्भव हैं इसलिए भौतिक शरीर को स्वस्थ रखना आवश्यक है व उसको चलायमान रखने के लिए भौतिक वस्तुएं आवश्यक हैं जैसे भोजन, पानी, आराम, आदि। परिवार, माता-पिता, संतान, रिश्ते-नाते यह सब ईश्वर प्रदत्त हैं अतः इन्हें ईश्वर की धरोहर मान अनासक्त भाव से इनके प्रति अपने कर्त्तव्य का पालन करना भी अध्यात्म का ही भाग है।"
            ],
            "en": [
                "Materialism is not an obstacle to spirituality, but rather complements it. Through Bhaiya's knowledge we have certainly come to understand that materialism is transient. By not holding attachment to materialism, using it only as needed, loving God selflessly, and developing virtue within oneself, one can move towards spirituality. Until there is harmony in a person's family life, they cannot practise spirituality with focus. By bringing coordination between spirituality and materialism, one can move towards spirituality.",
                "It is important to understand that all activities of spirituality -- chanting, austerity, meditation and so on -- are possible only through this physical body; hence it is necessary to keep the physical body healthy, and material things are necessary to keep it functioning, such as food, water, rest, and so on. Family, parents, children, relationships -- all these are given by God; hence, holding them as God's trust and fulfilling one's duty towards them without attachment is itself a part of spirituality."
            ]
        },
        "categoryTitle": {
            "hi": "अध्यात्म के मूल सिद्धांत",
            "en": "Fundamental Spiritual Concepts"
        },
        "excerpt": {
            "hi": "भौतिकवाद अध्यात्म में बाधक नहीं वरन् पूरक है। भैया के ज्ञान से निश्चित रूप से हम समझ चुके हैं कि भौतिकवाद नश्वर है। भौतिकवाद में आसक्ति न रखकर ज़रूरत के आधार पर उपयोग कर ई...",
            "en": "Materialism is not an obstacle to spirituality, but rather complements it. Through Bhaiya's knowledge we have certainly come to understand that materialism is transient. By not ..."
        }
    },
    {
        "id": "q10",
        "number": 10,
        "categoryId": "spiritual-concepts",
        "question": {
            "hi": "मैं कौन हूँ? मैं कहाँ से आया हूँ? मैं क्यों आया हूँ? कहाँ जाऊँगा",
            "en": "Who am I? Where have I come from? Why have I come? Where will I go?"
        },
        "answer": {
            "hi": [
                "मैं चैतन्य शरीर हूँ जो अजर-अमर-अविनाशी है। मैं भौतिक शरीर को यंत्र के समान कार्य में लेने वाली यंत्री हूँ। मैं ईश्वर का अंश आंतरिक चैतन्य में स्थित दिव्य लोकों से आया हूँ। मैं यहाँ पूर्व जन्म के प्रारब्ध काटने और सत्कर्र्माें द्वारा अच्छे प्रारब्ध का निर्माण करने आया हूँ और अपने अन्दर सद्गुणों का विकास करने आया हूँ ताकि मृत्यु के बाद अपने इष्टदेव के लोक में जा सकूं।",
                "भैया ने जगत्जननी माँ को गुरु बना कर जो ज्ञान प्राप्त किया उस ज्ञान के अनुसार उन्होंने एक नई अवधारणा दी-मनुष्य के दो शरीर होते हैं, एक माता-पिता प्रदत्त भौतिक शरीर जो सर्वविदित है कि भौतिक कणों से बना होता है। इसके अतिरिक्त एक पूर्ण, सुव्यवस्थित अदृश्य चैतन्य शरीर होता है जो ईश्वर का अंश है और जो चैतन्य कणों से बना होता है। यह अजर, अमर व अविनाशी है एवं अदृश्य है। यह भौतिक जगत् के नियमों का पालन नहीं करता क्योंकि चैतन्य क्षेत्र के नियम अलग हैं। यह तेजोमय, आनन्दमय है और इस भौतिक शरीर को चलायमान रखता है, साथ-ही-साथ यह ईश्वर से भी सम्बन्ध रखता है।",
                "भौतिक शरीर यंत्र है और अदृश्य चैतन्य शरीर यंत्री। जब चैतन्य शरीर, भौतिक शरीर से निकल जाता है तो मनुष्य मृत्यु को प्राप्त होता है। इस प्रकार मैं भौतिक शरीर न होकर वास्तव में चैतन्य शरीर हूँ जो अजर, अमर व अविनाशी है।",
                "सामान्यतः हर व्यक्ति यह मानकर चलता है कि वह भौतिक शरीर ही है और उसमें व्यक्ति, वस्तु, विचार, अवगुण, परिस्थिति आदि किसी न किसी रुप में उसकी आसक्ति हो जाती है। भैया के ज्ञान द्वारा उसे यह ज्ञात होता है कि वास्तव में वह चैतन्य शरीर है। यह जानकर आश्चर्यचकित रह जाता है। इस सत्य को आत्मसात् करने पर उसके व्यवहार, चिंतन, इत्यादि में आमूलचूल परिवर्तन हो जाता है।",
                "प्रश्न यह उठता है कि मैं, चैतन्य शरीर यहाँ क्यों आया हूँ? ईश्वर की लीला अपरंपार है। यह अत्यन्त ही आश्चर्यजनक है कि चैतन्यस्वरुप परम शक्तिशाली होते हुए भी अपने आप पृथवी पर कोई कार्य नहीं कर सकता। वह केवल भौतिक शरीर के माध्यम से ही सम्भव है। इस कारण उसे पृथवी पर जन्म लेेकर भौतिक शरीर धारण करना अनिवार्य है। मैं यहाँ पर सर्वप्रथम इसलिए आया ताकि ईश्वर की महान रचना का आनन्द ले सकूं परन्तु मायाजाल में फंसकर आवागमन के चक्कर में पड़ गया। पृथवी ही वो स्थान है जहाँ पर मैं अपने पूर्व जन्म के प्रारब्ध काटकर सत्कर्म द्वारा अच्छे प्रारब्ध का निर्माण कर सकता हूँ और अपने चैतन्य माता-पिता से जुड़ने का प्रयास कर सकता हूँ ताकि मृत्यु के बाद उनके लोक में पुनः लौट सकूं।",
                "मनुष्य चैतन्यस्वरूप है, मृत्यु तो भौतिक देह की होती है और चैतन्य शरीर जो अजर, अमर, अविनाशी है वह इस भौतिक शरीर को त्यागने के बाद में कर्मों के अनुसार उपयुक्त चैतन्य लोकों में जाता है और कर्मों को भोगने के बाद चैतन्य जगत् के नियमानुसार नया जन्म लेता है।"
            ],
            "en": [
                "I am the conscious body, which is ageless, deathless and imperishable. I am the operator that uses the physical body as an instrument. I am a portion of God, arrived from the divine realms situated within inner consciousness. I have come here to work through the prarabdha of past lives and, through right action, to build good prarabdha, and to develop virtue within myself, so that after death I may go to the realm of my chosen deity.",
                "According to the knowledge Bhaiya received by taking Jagatjanani Maa as his guru, he gave a new concept -- that a human being has two bodies. One is the physical body given by one's parents, which, as is well known, is made of physical particles. Besides this there is a complete, well-ordered, invisible conscious body, which is a portion of God and is made of conscious particles. It is ageless, deathless, imperishable and invisible. It does not follow the laws of the material world, because the laws of the conscious realm are different. It is radiant, blissful, keeps this physical body in motion, and at the same time it also holds a connection with God.",
                "The physical body is the instrument, and the invisible conscious body is the operator. When the conscious body leaves the physical body, the human being reaches death. So I am, in truth, not the physical body but the conscious body, which is ageless, deathless and imperishable.",
                "Ordinarily, every person assumes that they are the physical body, and becomes attached, in one form or another, to people, objects, thoughts, vices, circumstances and the like. Through Bhaiya's knowledge, they come to know that they are, in truth, the conscious body. Learning this, they are astonished. Once this truth is absorbed, a fundamental change takes place in their conduct, thinking and so on.",
                "The question then arises -- why have I, the conscious body, come here? God's play is boundless. It is truly astonishing that, though supremely powerful in its conscious form, it cannot on its own perform any act on earth. That is possible only through the physical body. For this reason it becomes necessary to take birth on earth and assume a physical body. I first came here so that I might enjoy God's great creation, but became entangled in the web of illusion and caught in the cycle of coming and going. The earth alone is the place where I can work through the prarabdha of past lives and build good prarabdha through right action, and try to connect with my conscious parents, so that after death I may return once more to their realm.",
                "A human being is, in essence, conscious in nature; it is the physical body that dies, and the conscious body, which is ageless, deathless and imperishable, upon leaving this physical body, goes according to its deeds to the appropriate conscious realm, and after experiencing the fruits of those deeds, takes a new birth according to the laws of the conscious world."
            ]
        },
        "categoryTitle": {
            "hi": "अध्यात्म के मूल सिद्धांत",
            "en": "Fundamental Spiritual Concepts"
        },
        "excerpt": {
            "hi": "मैं चैतन्य शरीर हूँ जो अजर-अमर-अविनाशी है। मैं भौतिक शरीर को यंत्र के समान कार्य में लेने वाली यंत्री हूँ। मैं ईश्वर का अंश आंतरिक चैतन्य में स्थित दिव्य लोकों से आया हूँ...",
            "en": "I am the conscious body, which is ageless, deathless and imperishable. I am the operator that uses the physical body as an instrument. I am a portion of God, arrived from the di..."
        }
    },
    {
        "id": "q16",
        "number": 16,
        "categoryId": "spiritual-concepts",
        "question": {
            "hi": "चैतन्य शरीर के गुण-धर्म और उसका महत्व उजागर करिए।",
            "en": "Bring out the qualities and nature of the conscious body, and its importance."
        },
        "answer": {
            "hi": [
                "चैतन्य शरीर के गुण-धर्म निम्न हैं -",
                "चैतन्य शरीर ईश्वर का अंश है और इसका ईश्वर से सीधा सम्बन्ध है।",
                "यह चैतन्य जगत् के ब्रह्मकणों द्वारा निर्मित है इसलिए अजर, अमर, अविनाशी है।",
                "यह अदृश्य है और भौतिक जगत् का कोई नियम इस पर लागू नहीं होता।",
                "यह स्वयं में एक सम्पूर्ण बुद्धिमान इकाई है, कर्म करने में स्वतंत्र है, सही व गलत का निर्णय लेने में समर्थ है, यह एक सम्पूर्ण विचार शक्ति लिए है और इसमें सभी प्रकार की भावनाएं जैसे प्रेम, आनन्द की अनुभूति, भय की अभिव्यक्ति दर्शाने की क्षमता है।",
                "यह दृढ़ इच्छाशक्ति का मालिक है, अगर ठान ले तो असम्भव से असम्भव कार्य भी कर सकता है, चाहे वह भौतिकवाद में हो या अध्यात्म में।",
                "इसमें अतुलनीय ऊर्जा एवं स्मरण शक्ति है। साथ ही अच्छे व बुरे कर्म में अन्तर करने की शक्ति भी है।",
                "इसमें ज्ञान प्राप्त करने की जिज्ञासा व बुद्धि एवं विवेक का विकास करने की लालसा व क्षमता है।",
                "इसमें किसी महान कार्य के लिए, अपने उद्देश्य की प्राप्ति के लिए आत्मोत्सर्ग करने का आत्मबल भी है।",
                "चैतन्य शरीर के इन विशेष गुण धर्म के कारण मनुष्य जीवन में उसकी क्षमतायें अनन्त एवं सर्वव्यापक हैं। जीवन के किसी भी क्षेत्र में वह अपनी ऊर्जा शक्तियों के माध्यम से दक्षता हासिल कर सर्वोत्कृष्ट सफलता भी प्राप्त कर सकता है। वह अपने जीवन का लक्ष्य निर्धारित कर उसको प्राप्त करने के लिए स्वतंत्र होता है।"
            ],
            "en": [
                "The qualities and nature of the conscious body are as follows --",
                "The conscious body is a portion of God and has a direct connection with God.",
                "It is formed of the divine particles of the conscious realm, and is therefore ageless, deathless and imperishable.",
                "It is invisible, and no law of the material world applies to it.",
                "It is, in itself, a complete, intelligent unit, free to act, capable of deciding right from wrong; it carries a complete power of thought, and has within it the capacity to display every kind of feeling, such as love, the experience of joy, and the expression of fear.",
                "It possesses firm willpower -- if it resolves, it can accomplish even the most impossible of tasks, whether in materialism or in spirituality.",
                "It has incomparable energy and memory, along with the power to distinguish good deeds from bad.",
                "It has the inquiry to gain knowledge, and the longing and capacity to develop intellect and discernment.",
                "It also has the inner strength to sacrifice itself for some great cause, for the attainment of its purpose.",
                "Because of these special qualities and nature of the conscious body, a human being's capacities in life are infinite and all-pervading. In any field of life, they can, through their own energies, attain expertise and even the finest success. They are free to set the goal of their life and to attain it."
            ]
        },
        "categoryTitle": {
            "hi": "अध्यात्म के मूल सिद्धांत",
            "en": "Fundamental Spiritual Concepts"
        },
        "excerpt": {
            "hi": "चैतन्य शरीर के गुण-धर्म निम्न हैं - चैतन्य शरीर ईश्वर का अंश है और इसका ईश्वर से सीधा सम्बन्ध है। यह चैतन्य जगत् के ब्रह्मकणों द्वारा निर्मित है इसलिए अजर, अमर, अविनाशी ह...",
            "en": "The qualities and nature of the conscious body are as follows --"
        }
    },
    {
        "id": "q32",
        "number": 32,
        "categoryId": "spiritual-concepts",
        "question": {
            "hi": "सत्कर्म किसे कहते हैं? अध्यात्म में इसका क्या महत्व है?",
            "en": "What is called right action (satkarma)? What is its importance in spirituality?"
        },
        "answer": {
            "hi": [
                "सत्कर्म का अर्थ है वे कर्म जो सत्य स्वरूप ईश्वर के नज़दीक ले जाते हैं अर्थात् उनकी कृपा व प्रसन्नता सुलभ कराते हैं, उन कर्मों को अध्यात्म के अनुसार सत्कर्म माना जाता है। मानव जीवन एक कर्म क्षेत्र है जहाँ किया गया प्रत्येक कर्म पृथवी पर बीज बोने के समान है, जिसका फल मिलेगा ही। मृत्यु के बाद चैतन्य शरीर अपने जीवन भर किए कर्मों का फल प्राप्त करता है और उनके अनुसार ही उसके प्रारब्ध बनते हैं। भैया जी के ज्ञान के आधार पर माँ बसन्ती जी ने सिखाया कि सत्कर्म केवल जप-तप, दान, दूसरों की सेवा आदि ही नहीं है बल्कि इसके साथ-साथ, यदि कोई व्यक्ति ईश्वर के प्रति पूर्ण समर्पित होकर भौतिक कर्तव्य भी अनासक्त भाव से करता है तो ईश्वर उन्हें भी सत्कर्म के रूप में स्वीकार कर लेते हैं क्योंकि वे कार्य करते समय व्यक्ति का मन भौतिक रहा ही नहीं, वह पूर्ण अध्यात्म बन चुका है। उदाहरणार्थ जब मधु माँ ने भैया जी से ज्ञान सीखने की इच्छा रखी तो उस समय उन्हें पढ़ाई को साधना समझ करने का भैया जी ने निर्देश दिया। जो 16-17 घंटे मधु माँ पढ़ाई करते भैया का कहना मानने के बाद, वह अध्यात्म जगत में उनके सत्कर्म के रूप में स्वीकृत हो गई।",
                "साधारणतया, सत्कर्म को परोपकार, सेवा, दान (विशेषतः धन का दान) से ही जोड़ा जाता है परन्तु माँ बसन्ती जी ने स्पष्ट किया कि मार्गदर्शक द्वारा निर्देशित कर्म भी साधना के समान पवित्र होते हैं और व्यक्ति को आवरणों से मुक्त कर उन्नत करते हैं, इसमें समर्पण सच्चा होना चाहिए। यानी कर्म करने के पीछे की भावना और कर्म का निर्देश देने वाले मार्गदर्शक दोनों मुख्य हैं। भगवान कृष्ण के आज्ञानुसार करने से युद्ध भी अर्जुन के लिए सत्कर्म बन गया।",
                "माँ बसन्ती जी के अनुसार एक साधक के लिए दूसरे व्यक्ति को अध्यात्म करने के लिए प्रेरित करना, अध्यात्म का महत्व समझा कर सही मार्गदर्शक से संपर्क कराना और अध्यात्म मार्ग पर चलने के लिए प्रोत्साहित करना सबसे बड़ा सत्कर्म है।",
                "गृहस्थ व्यक्ति के लिए अपनी गृहस्थी का पालन करने जितनी ही सम्पत्ति हो तो माँ बसन्ती जी ने समझाया कि वह यदि किसी को सद्भावना से प्रेरित होकर सही सलाह देता है, किसी बीमार की यथासम्भव सेवा-सुश्रुषा कर देता है या किसी विद्यार्थी की पढ़ने में सहायता कर देता है तो वह भी सत्कर्म की श्रेणी में आता है। यदि आवश्यकता से अधिक धन हो तो किसी के भविष्य निर्माण में योगदान देना, किसी ज़रूरतमंद का अटका हुआ आवश्यक सही कार्य करवा देना, आदि अर्थात् निःस्वार्थ भाव से (कीर्ति की इच्छा किए बिना) जो वह अपने धन या पद का सदुपयोग करता है, वे भी सत्कर्म कहलाते हैं।",
                "सत्कर्म करने से व्यक्ति के भाव शुद्ध होते हैं, सद्गुणों का विकास होता है और सच्ची दुआएँ भी मिलती हैं। विकृत विचारधारा वाले दुष्ट जनों को गलत कर्म करके अस्थाई सुख की अनुभूति अवश्य हो सकती है परन्तु वह पाप का भागी बन जाता है। दूसरी तरफ, सत्कर्म करने वाले के प्रारब्ध अच्छे बनते हैं और अलौकिक आनन्द, शांति भी प्राप्त होती है। दुआएँ देने वाले और पाने वाले- दोनों को ही सच्ची खुशी मिलती है।"
            ],
            "en": [
                "Satkarma means those actions that bring one nearer to God, who is truth itself -- that is, that make their grace and pleasure accessible. According to spirituality, such actions are held to be satkarma. Human life is a field of action, where every deed performed is like a seed sown on earth, which will certainly bear fruit. After death the conscious body receives the fruit of all the deeds done through its life, and its prarabdha is formed accordingly. On the foundation of Bhaiyaji's knowledge, Maa Basanti Ji taught that satkarma is not only chanting, austerity, charity, service to others and the like -- alongside this, if a person, fully surrendered to God, also performs their worldly duties without attachment, God accepts these too as satkarma, because while performing those duties the person's mind was no longer worldly -- it had become wholly spiritual. For example, when Madhu Maa wished to learn knowledge from Bhaiyaji, he instructed her at that time to treat her studies as sadhana. After Madhu Maa, following Bhaiya's word, studied for 16-17 hours, this was accepted in the spiritual world as her satkarma.",
                "Ordinarily, satkarma is associated only with charity, service and donation (especially of money), but Maa Basanti Ji made clear that action carried out under a guide's instruction is equally sacred as sadhana, and frees and uplifts a person from their coverings of vice -- provided the surrender behind it is genuine. That is, both the feeling behind the act and the guide who instructs it are essential. By acting on Lord Krishna's command, even war became satkarma for Arjuna.",
                "According to Maa Basanti Ji, for a seeker, the greatest satkarma is to inspire another person towards spirituality, to help them understand its importance and put them in touch with the right guide, and to encourage them to walk the spiritual path.",
                "For a householder, Maa Basanti Ji explained that if they have only enough wealth to run their household, yet they give someone good advice out of goodwill, or tend to a sick person as best they can, or help a student with their studies, that too falls into the category of satkarma. And if they have more wealth than they need, contributing to someone's future, or getting some genuinely necessary but stalled work done for someone in need, and so on -- that is, whatever good use of their wealth or position they make selflessly, without desire for renown -- these too are called satkarma.",
                "Through satkarma a person's feelings are purified, virtue develops, and true blessings are received. Wicked people of corrupted mind may certainly feel a temporary pleasure through wrong deeds, but they become party to sin. On the other hand, one who performs satkarma builds good prarabdha and also attains transcendent joy and peace. Both the one who gives blessings and the one who receives them find true happiness."
            ]
        },
        "categoryTitle": {
            "hi": "अध्यात्म के मूल सिद्धांत",
            "en": "Fundamental Spiritual Concepts"
        },
        "excerpt": {
            "hi": "सत्कर्म का अर्थ है वे कर्म जो सत्य स्वरूप ईश्वर के नज़दीक ले जाते हैं अर्थात् उनकी कृपा व प्रसन्नता सुलभ कराते हैं, उन कर्मों को अध्यात्म के अनुसार सत्कर्म माना जाता है। म...",
            "en": "Satkarma means those actions that bring one nearer to God, who is truth itself -- that is, that make their grace and pleasure accessible. According to spirituality, such actions..."
        }
    },
    {
        "id": "q46",
        "number": 46,
        "categoryId": "spiritual-concepts",
        "question": {
            "hi": "यह जानते हुए कि मृत्यु जीवन का अटल सत्य है, मनुष्य अध्यात्म का लक्ष्य क्यों नहीं बना पाता? अध्यात्म लक्ष्य-प्राप्ति में कौन से तत्त्व बाधक हैं?",
            "en": "Knowing that death is life's unshakable truth, why is a human being unable to make spirituality their goal? What factors obstruct the attainment of spiritual goals?"
        },
        "answer": {
            "hi": [
                "पृथवी पर कई महान भक्तों ने जन्म लिया और अपने देश-काल-परिस्थितियों की चुनौतियों का सामना करते हुए ईश्वर को प्रसन्न कर उनकी कृपा को प्राप्त भी किया। परन्तु साधारण मनुष्य के लिए अध्यात्म लक्ष्य-प्राप्ति निश्चित तौर पर आसान नहीं है। इसके तीन मुख्य कारण है- पहला, अध्यात्म अदृश्य है और भौतिकता दृश्यमान। भौतिकता में किए प्रयासों का फल(सफलता या असफलता) मनुष्य देख पाता है, आसानी से अनुभव कर पाता है। किन्तु अध्यात्म के मार्ग पर किए गए प्रयास से प्राप्त फल शीघ्रता से दिखाई नहीं देते और मार्गदर्शक के समझाए बिना समझ भी नहीं आते कि फल सही आया या गलत। दूसरा कारण है, मनुष्य को भौतिकता और अध्यात्म में सामंजस्य बिठाना ही नहीं आता। यदि वह केवल अध्यात्म करे तो भौतिकता में संतुलन बिगड़ जाता है और वह सोचता है कि ‘‘मृत्यु तो आएगी जब आएगी, परन्तु जब तक जीवन है भौतिकता तो कर लूँ‘‘, अन्ततः मनुष्य अध्यात्म लक्ष्य को बीच में ही छोड़ देता है। तीसरा कारण है, यदि मनुष्य हिम्मत करके जैसे हो अध्यात्म निभाने का प्रयास कर भी ले तो आगे उसे किस दिशा में जाना है, यह बताने वाला उचित मार्गदर्शक नहीं मिलता। ऐसे में वह भौतिकता की ओर उन्मुख हो जाता है। इसीलिए अधिकांश मनुष्य अध्यात्म नहीं कर पाते।",
                "यदि किसी मनुष्य में ईश्वरीय कृपा से अध्यात्म करने की इच्छा जागृत हो जाए और सही मार्गदर्शक भी मिल जाए तो उसे यह समझ लेना चाहिए कि उसके लक्ष्य-प्राप्ति में किन बाधक तत्त्वों को उसे पार करना है और अपने मानव जीवन के कल्याण हेतु मिले इस अमूल्य अवसर का कैसे पूर्ण सदुपयोग करना है। अध्यात्म में कुछ बाधक तत्त्व निम्नलिखित हैं:-",
                "ईश्वर के अस्तित्व या मार्गदर्शक के वचन पर शक-संदेह।",
                "स्वयं पर अविश्वास या अतिविश्वास।",
                "समुचित महत्व-आकलन का अभाव (अध्यात्म, मनुष्य जीवन, अवसर, समय, स्वास्थय, भौतिक कर्त्तव्य, आदि का महत्व)।",
                "भौतिक आसक्ति।",
                "कंचन-कामिनी-कीर्ति पाने की इच्छा।",
                "निंदा या उपहास की परवाह।",
                "धैर्य और संयम की कमी।",
                "क्रोध, अहंकार, मोह, आदि अवगुण।",
                "आलस्य",
                "लापरवाही",
                "असत्य बोलना।",
                "कुतर्क करना।",
                "पूर्वाग्रहों को न छोड़ पाना।",
                "स्वयं को ही बुद्धिमान समझ विचारधारा परिवर्तित नहीं कर पाना।",
                "निष्पक्ष व नियमित आत्म-विश्लेषण की कमी।",
                "सरलता का अभाव।",
                "मार्गदर्शक के समक्ष मन को खुली किताब की तरह रखने में लज्जा।"
            ],
            "en": [
                "Many great devotees have been born on earth, and, facing the challenges of their time, place and circumstance, pleased God and received their grace. But for an ordinary person, attaining a spiritual goal is certainly not easy. There are three main reasons for this. First, spirituality is invisible while materialism is visible. A person can see, and easily experience, the fruit -- success or failure -- of efforts made in worldly life. But the fruit of efforts made on the spiritual path is not quickly visible, and without a guide's explanation, one cannot even understand whether the fruit received was right or wrong. The second reason is that a human being simply does not know how to bring worldly life and spirituality into harmony. If they pursue spirituality alone, their worldly balance is disturbed, and they think, 'death will come when it comes, but as long as there is life, let me attend to worldly matters' -- and in the end, the person abandons the spiritual goal midway. The third reason is that even if a person gathers the courage to somehow attempt to sustain spirituality, they do not find a proper guide to tell them which direction to move in next. In such a situation, they turn back towards materialism. This is why most human beings are unable to practise spirituality.",
                "If, by God's grace, the wish to practise spirituality awakens in a person, and they also find the right guide, they should understand which obstructing factors they must overcome to attain their goal, and how to make full and right use of this priceless opportunity given for the welfare of their human life. Some of the obstructing factors in spirituality are as follows:-",
                "Doubt or suspicion about God's existence, or the guide's word.",
                "Lack of self-belief, or excessive self-belief.",
                "A lack of proper appreciation of what matters (the importance of spirituality, human life, opportunity, time, health, worldly duty, and so on).",
                "Worldly attachment.",
                "The desire to gain wealth, sensual attachment and fame.",
                "Concern over criticism or ridicule.",
                "A lack of patience and restraint.",
                "Vices such as anger, ego and infatuation.",
                "Laziness.",
                "Carelessness.",
                "Speaking untruth.",
                "Making specious arguments.",
                "Being unable to let go of prejudices.",
                "Considering oneself already wise, and so being unable to change one's thinking.",
                "A lack of fair and regular self-reflection.",
                "A lack of simplicity.",
                "Shyness about keeping one's mind open, like an open book, before one's guide."
            ]
        },
        "categoryTitle": {
            "hi": "अध्यात्म के मूल सिद्धांत",
            "en": "Fundamental Spiritual Concepts"
        },
        "excerpt": {
            "hi": "पृथवी पर कई महान भक्तों ने जन्म लिया और अपने देश-काल-परिस्थितियों की चुनौतियों का सामना करते हुए ईश्वर को प्रसन्न कर उनकी कृपा को प्राप्त भी किया। परन्तु साधारण मनुष्य के...",
            "en": "Many great devotees have been born on earth, and, facing the challenges of their time, place and circumstance, pleased God and received their grace. But for an ordinary person, ..."
        }
    },
    {
        "id": "q21",
        "number": 21,
        "categoryId": "sadhana-principles",
        "question": {
            "hi": "अध्यात्म में साधना का क्या लाभ है?",
            "en": "What is the benefit of sadhana in spirituality?"
        },
        "answer": {
            "hi": [
                "साधना अर्थात साध - ना, किसी विषय या कार्य का बार-बार अभ्यास करके उसे आत्मसात् करना। बार-बार किसी कार्य को समझकर पुनरावृति करते हैं तो वह आत्मसात् हो जाता है। निरन्तर ध्यान साधना करते रहने से अध्यात्म परिपक्व हो जाता है, माँं बसन्ती जी भी बार-बार भैया के दिव्य, शाश्वत्, सत्य ज्ञान की मुख्य अवधारणाओं की पुनरावृति ज्ञान-चर्चाओं में करवाती थीं, ज्ञान पर चिंतन, मनन व संकल्प भी यहीं करवा देतीं थीं तो वह ज्ञान चैतन्य शरीर में आत्मसात् हो जाता।",
                "अध्यात्म में मनुष्य अपने चैतन्य शरीर को साधता है क्योंकि चैतन्य शरीर भौतिक शरीर में रहता है, इसलिए चैतन्य शरीर के माध्यम से, उससे सम्बन्धित सभी क्रियाकलापों के द्वारा व्यक्ति अपने भौतिक शरीर को भी संयमित रखता है। तन, मन, वचन, कर्म, इत्यादि सभी को संयमित करना ही अध्यात्म में साधना है जो कि अध्यात्म लक्ष्य प्राप्त करने के लिए बहुत ही आवश्यक एवं लाभकारी है।",
                "अध्यात्म साधना किसी अनुभवी मार्गदर्शक के निर्देशानुसार ही करनी चाहिए क्योंकि अध्यात्म अदृश्य है और हर मनुष्य की चैतन्य यात्रा भी व्यक्तिगत है। चैतन्यता में मिलने वाले परिणाम का आकलन वही व्यक्ति उचित प्रकार कर सकता है जिन्होंने स्वयं उस अध्यात्म मार्ग को सफलतापूर्वक पार किया हो।"
            ],
            "en": [
                "Sadhana means 'sadh-na' -- absorbing a subject or task by practising it again and again. When a task is repeatedly understood and repeated, it is absorbed. Through continuous meditative sadhana, spirituality matures. Maa Basanti Ji, too, would have the core concepts of Bhaiya's divine, eternal, true knowledge repeated again and again in knowledge-discussions; reflection, contemplation and resolve on that knowledge were also carried out there, so that this knowledge would be absorbed into the conscious body.",
                "In spirituality, a person disciplines their conscious body, because the conscious body dwells within the physical body -- so through the conscious body, and through all activities related to it, a person also keeps their physical body restrained. Disciplining body, mind, speech, action and everything else is itself sadhana in spirituality, and this is extremely necessary and beneficial for attaining spiritual goals.",
                "Spiritual sadhana should be undertaken only under the direction of an experienced guide, because spirituality is invisible, and every person's conscious journey is also personal. Only one who has themselves successfully traversed that spiritual path can properly assess the results found in that state of consciousness."
            ]
        },
        "categoryTitle": {
            "hi": "साधना और अभ्यास",
            "en": "Spiritual Practice & Sadhana Principles"
        },
        "excerpt": {
            "hi": "साधना अर्थात साध - ना, किसी विषय या कार्य का बार-बार अभ्यास करके उसे आत्मसात् करना। बार-बार किसी कार्य को समझकर पुनरावृति करते हैं तो वह आत्मसात् हो जाता है। निरन्तर ध्या...",
            "en": "Sadhana means 'sadh-na' -- absorbing a subject or task by practising it again and again. When a task is repeatedly understood and repeated, it is absorbed. Through continuous me..."
        }
    },
    {
        "id": "q22",
        "number": 22,
        "categoryId": "sadhana-principles",
        "question": {
            "hi": "साधारणतया यह माना जाता है कि ’मन’ साधना में बाधक है लेकिन भैया के ज्ञान द्वारा इसे किस प्रकार सहायक बनाया जा सकता है?",
            "en": "It is generally believed that the 'mind' is an obstacle in sadhana -- but how can it be made a help through Bhaiya's knowledge?"
        },
        "answer": {
            "hi": [
                "भैया जी के ज्ञानानुसार मन का अलग अस्तित्व नहीं है, हमारी इच्छाएँ, भावनाएँ, विचार जब भौतिकता के प्रभाव में आते हैं तब वे हमारे चिंतन पर नकारात्मक आवरण बनाते हैं। परिणामस्वरुप व्यक्ति आनन्द, शांति, खुशी से दूर हो जाता है और उसमें कुण्ठायें, पूर्वाग्रह, आदि बनने लगते हैं। मन को मोड़ना बहुत सरल है। भैया प्रदत्त ’बुद्धि-विवेक योग साधना पद्धति’ के द्वारा यदि मन को सही तर्क देकर किसी बात के या परिस्थिति के फायदे एवं नुकसान समझा दिए जाएं तो मन स्वतः फायदे वाले पक्ष का चयन करता है। इसी तकनीक से वर्षों पूर्व की अपनी गलत आदतें और अवगुण भी आसानी से मनुष्य छोड़ कर उन्नत हो सकता है।",
                "इसी प्रकार, जब व्यक्ति को साधना करनी हो तो सर्वप्रथम मन में अपने जीवन का महत्व, मार्गदर्शक का महत्व, अध्यात्म का महत्व धारण करने के साथ साधना से होने वाले लाभ भी समझ लें तो मन स्वतः ही उसका सहायक बन जाएगा। दृढ़ इच्छाशक्ति से जब मार्गदर्शक की आज्ञा लेकर व्यक्ति साधना में लगेगा तो पुनः उसका मन सच्ची आनन्द-शांति-खुशी का अनुभव प्राप्त करेगा।"
            ],
            "en": [
                "According to Bhaiyaji's knowledge, the mind has no separate existence -- when our desires, feelings and thoughts come under the influence of materialism, they form negative coverings over our thinking. As a result a person is drawn away from joy, peace and happiness, and frustrations, prejudices and the like begin to form within them. Turning the mind is very simple. Through the 'Buddhi-Vivek Yog Sadhna' method given by Bhaiya, if the mind is given right reasoning and made to understand the gain and loss in a matter or circumstance, the mind naturally chooses the side of gain. Through this very technique, a person can easily let go of even years-old wrong habits and vices, and be uplifted.",
                "In the same way, when a person wishes to undertake sadhana, if they first hold in mind the importance of their own life, the importance of their guide, and the importance of spirituality, along with understanding the benefits sadhana brings, the mind will naturally become their helper. When, with firm willpower and the guide's permission, a person applies themselves to sadhana, their mind will once again come to experience true joy, peace and happiness."
            ]
        },
        "categoryTitle": {
            "hi": "साधना और अभ्यास",
            "en": "Spiritual Practice & Sadhana Principles"
        },
        "excerpt": {
            "hi": "भैया जी के ज्ञानानुसार मन का अलग अस्तित्व नहीं है, हमारी इच्छाएँ, भावनाएँ, विचार जब भौतिकता के प्रभाव में आते हैं तब वे हमारे चिंतन पर नकारात्मक आवरण बनाते हैं। परिणामस्व...",
            "en": "According to Bhaiyaji's knowledge, the mind has no separate existence -- when our desires, feelings and thoughts come under the influence of materialism, they form negative cove..."
        }
    },
    {
        "id": "q23",
        "number": 23,
        "categoryId": "sadhana-principles",
        "question": {
            "hi": "भैया जी के ज्ञान द्वारा किस प्रकार अवगुणों को भी साधना में सहायक बनाया जा सकता है- स्पष्ट कीजिए।",
            "en": "Explain how, through Bhaiyaji's knowledge, even one's vices can be made to help in sadhana."
        },
        "answer": {
            "hi": [
                "साधना के द्वारा मनुष्य वास्तविक शांति, खुशी, आनन्द प्राप्त करना चाहता है और अपने इष्टदेव से तारतम्य जोड़ना चाहता है। इसमें अवगुण और अज्ञानता बाधक बनते हैं। जैसेः- क्रोध, लोभ, मोह, द्वेष, आसक्ति आदि। उदाहरणः- क्रोध के समय व्यक्ति अपने विचार, वाणी, व्यवहार पर नियंत्रण खो देता है और क्रोध भौतिक शरीर पर भी दुष्प्रभाव डालता है। उसे सामान्य होने में भी समय लगता है तो साधना किस प्रकार होगी? साधना करने वाला हर व्यक्ति इस प्रकार के व्यवधानों से बचने का प्रयास करता है परन्तु उचित मार्ग उसे नहीं सूझ पाता।",
                "भैया व माँ बसन्ती जी ने कहा कि अवगुण समाप्त नहीं होते अपितु छिप जाते हैं, इसलिए अवगुणों का मार्गान्तीकरण कर उन्हें अध्यात्म की ओर मोड़ दो।",
                "भैया प्रदत्त बुद्धि-विवेक पर आधारित साधना द्वारा बुद्धि-विवेक को विकसित व परिष्कृत करें और साथ-ही-साथ सतर्कता और संयम को विकसित करें। दूसरों की कमियों को उजागर करने की जगह अपनी कमियों को चिन्हित करें, विचारों का परिवर्तन कर देखने का दृष्टिकोण सकारात्मक बनायें।",
                "भौतिक जीवन में प्रतिक्रिया न करें, समाधान ढूंढंे। भौतिक जीवन में यदि कोई ऐसी दुर्घटना हुई जिसमें स्वाभाविक तौर पर क्रोध आना तय है तब विकसित बुद्धि-विवेक, सतर्कता एवं संयम के कारण वह तत्काल कोई प्रतिक्रिया (क्रोध) के बजाय समस्या का समाधान ढूंढेगा। यह उसके व्यवहार में भैया के ज्ञान द्वारा सकारात्मक आमूलचूल परिवर्तन होगा। इसी प्रकार भौतिक जगत् के अन्य अवगुणों पर भी यही विधि लागू होगी।",
                "इस प्रकार अध्यात्म के क्षेत्र में क्रोध स्वयं पर करंे कि ईश्वर का नाम क्यों नहीं लिया, लक्ष्य की तरफ क्यों नहीं बढ़े। अहंकार का मार्गान्तीकरण करो- हम जगत्जननी माँ के बच्चे हैं, हमारी मर्यादा है, ईश्वर के जो गुण हैं, हम भी धारण कर सकते हैं। हम ऐसा कोई कार्य नहीं करें जिससे ईश्वर (हमारे चैतन्य माता-पिता) की मर्यादा का पालन न हो। भौतिक आसक्ति, ममता ईश्वर की ओर मोड़ दें, अपने चैतन्य माता-पिता से हृदय से प्रेम करें। इस प्रकार, आप सतर्कता के साथ अवगुणों का भी अपनी अध्यात्म उन्नति हेतु आवश्यकतानुसार उपयोग करें। सोच-समझकर क्रोध करने से वह नियंत्रित रूप से प्रकट होता है और दूसरे व्यक्ति के लिए कटूता भी मन में नहीं रहती।",
                "मनुष्य स्वाभाविक रूप से एक स्वार्थी प्राणी है। यदि वह भौतिक स्वार्थ को ’जन्म मरण के बन्धन काटने’ के स्वार्थ से प्रतिस्थापित कर दे तो वह परमार्थ बन जाता है। स्वार्थी बनना चाहिए, जन्म मरण के बंधन काटने का स्वार्थ- परमार्थ। इच्छाओं व कामनाओं का जब मार्गान्तीकरण हो जाता है तो मन स्वयं ही नियंत्रित हो जाता है और हम समय बचा कर अध्यात्म की ओर बढ़ सकते हैं।"
            ],
            "en": [
                "Through sadhana a human being seeks true peace, happiness and joy, and wishes to attune themselves to their chosen deity. Vice and ignorance become obstacles to this -- for example: anger, greed, infatuation, malice, attachment, and so on. For example: in a moment of anger a person loses control over their thought, speech and conduct, and anger also has a harmful effect on the physical body. It also takes time to return to normal -- so how, then, will sadhana proceed? Every person who practises sadhana tries to avoid such disruptions, but does not find the right way to do so.",
                "Bhaiya and Maa Basanti Ji said that vices do not end -- they merely hide. So redirect your vices, and turn them towards spirituality.",
                "Through sadhana based on the discernment given by Bhaiya, develop and refine intellect and discernment, and along with this develop alertness and restraint. Instead of pointing out others' shortcomings, identify your own, and by changing your thoughts, make your outlook positive.",
                "Do not react in worldly life -- seek solutions instead. If, in worldly life, some incident occurs where anger would naturally be expected, then, because of developed intellect, discernment, alertness and restraint, the person will, instead of an immediate reaction (anger), seek a solution to the problem. This will be a positive, fundamental change in their conduct, brought about by Bhaiya's knowledge. The same method applies to other vices of worldly life as well.",
                "In this way, in the field of spirituality, direct anger towards yourself -- why did I not take God's name, why did I not move towards my goal. Redirect ego -- we are children of Jagatjanani Maa, we have our own dignity, we too can hold within us the qualities God has. Let us do nothing that would fail to honour the dignity of God (our conscious parents). Redirect worldly attachment and possessiveness towards God, and love your conscious parents from the heart. In this way, with alertness, make even your vices serve your spiritual advancement as needed. When anger is expressed thoughtfully and with awareness, it appears in a controlled form, and no bitterness remains in the mind towards the other person either.",
                "A human being is, by nature, a selfish creature. If they replace worldly self-interest with the self-interest of 'cutting the bonds of birth and death', it becomes selfless service. One should indeed be self-interested -- self-interested in cutting the bonds of birth and death, which is the highest selflessness. When desires and cravings are redirected in this way, the mind becomes controlled on its own, and we can save time and move towards spirituality."
            ]
        },
        "categoryTitle": {
            "hi": "साधना और अभ्यास",
            "en": "Spiritual Practice & Sadhana Principles"
        },
        "excerpt": {
            "hi": "साधना के द्वारा मनुष्य वास्तविक शांति, खुशी, आनन्द प्राप्त करना चाहता है और अपने इष्टदेव से तारतम्य जोड़ना चाहता है। इसमें अवगुण और अज्ञानता बाधक बनते हैं। जैसेः- क्रोध, ल...",
            "en": "Through sadhana a human being seeks true peace, happiness and joy, and wishes to attune themselves to their chosen deity. Vice and ignorance become obstacles to this -- for exam..."
        }
    },
    {
        "id": "q24",
        "number": 24,
        "categoryId": "sadhana-principles",
        "question": {
            "hi": "साधना में कवच किसे कहते हैं? इसे कैसे मजबूत किया जा सकता है?",
            "en": "What is meant by a protective shield in sadhana? How can it be strengthened?"
        },
        "answer": {
            "hi": [
                "कवच अर्थात किसी से अपनी सुरक्षा के लिये उपयोग में लाने वाला साधन। अध्यात्म साधना में कवच का बहुत ही महत्वपूर्ण स्थान है। मनुष्य पृथवी पर भौतिक मायाजाल के बीच में रहता है। जब तक उसका चैतन्य शरीर ईश्वर से एकमेव नहीं हो जाता, उसे बाह्य व आन्तरिक दोनों स्तर पर कवच की आवश्यकता पड़ती है। अध्यात्म जीवन-भर चलने का मार्ग है और उसकी कोई गलत विचारधारा या भौतिक आसक्ति या कोई अवगुण उसके विवेक बुद्धि पर हावी हो सकते हैं और व्यक्ति पथ भ्रष्ट भी हो सकता है इसलिए आन्तरिक कवच आवश्यक हैं। दूसरी तरफ, भौतिक शरीर को अध्यात्म साधना के लिए साधक तैयार करते हैं तो साधना की सफलता के लिए उसका रखरखाव व सुरक्षा भी करनी होगी इसलिए बाह्य/बाहरी कवच आवश्यक है। कवच मुख्यतः इस प्रकार हैं-",
                "ज्ञान का कवच- भैया जी के दिव्य ज्ञान को समझ कर जीवन में धारण करने से स्वयं ’ज्ञान’ माया से सुरक्षा प्रदान करता है।",
                "ईश्वर का नाम रूपी कवच- जब साधक सच्चे मन से केवल ईश्वर-प्रेम के लिए उनका नाम जपता है तो वह ’जप’ उसके शरीर के चारों तरफ चैतन्य कवच के रूप में अवस्थित हो जाता है।",
                "योग रूपी कवच- जैसे-जैसे साधना में साधक उन्नत होता है, ईश्वर से उसका योग यानी जुड़ाव होने लगता है। तब ईश्वर की कृपा उसके कवच का भी कार्य करती है।",
                "सद्गुणों का कवच- ज्ञान को समझ कर धारण करने से मनुष्य के अवगुण मिटते हैं और सत्कर्म की ओर उसकी सहज प्रवृत्ति बनने लगती है। सात्विक गुणों का विकास होने से व्यक्ति के चित्त के आगे से आवरण हटने लगते हैं और विवेक बुद्धि जाग्रत रह कर सही निर्णय ले पाती। उसकी सोच सकारात्मक होते ही नकारात्मकता उसे प्रभावित नहीं कर पाती।",
                "दुआओं का कवच- जो व्यक्ति सत्कर्म करता है उसके बुरे कर्मों के प्रारब्ध कटते हैं और दुआएँ भी मिलती हैं जो कि मनुष्य के जीवन में विपरीत परिस्थितियों में मजबूत कवच का कार्य करतीं हैंं।",
                "सतर्कता का कवच- ईश्वर व मार्गदर्शक की नाराज़गी का भय साधक को सतर्क बनाता है और संकल्प पर दृढ़ रहने को प्रेरित करता है। ’भय बिना प्रीत नहीं’- यह भय का मार्गंतिकरण उसे गलत निर्णय लेने से बचाता है और उसकी उन्नति में सहायक सिद्ध होता है।",
                "कवच को सतत् चिंतन व अभ्यास से मजबूत किया जा सकता है। उपरोक्त वर्णित प्रकार के अलावा एक और अत्यावश्यक कवच होता है- मार्गदर्शक का आशीर्वाद साध़क के लिए एक बहुमूल्य कवच है जो उसे समय-समय पर आवश्यक मार्गदर्शन प्रदान करके साधना मार्ग पर अग्रसर करते हैं। उनकी डाँट/भर्त्सना से साधक की साधना व्यर्थ आत्म-प्रदर्शन में खर्च हो जाने से बच जाती है। वास्तव में, मार्गदर्शक उसका अध्यात्म मार्ग पर सबसे बड़ा कवच है!"
            ],
            "en": [
                "A shield means a means used for one's own protection against something. In spiritual sadhana, the shield holds a very important place. A human being lives on earth amid the web of worldly illusion. Until their conscious body becomes one with God, they need a shield at both the external and internal levels. Spirituality is a path walked over a whole lifetime, and some wrong line of thinking, or worldly attachment, or some vice, can overpower their discernment, and a person can also stray from the path -- hence an inner shield is necessary. On the other hand, as a seeker prepares the physical body for spiritual sadhana, they must also maintain and protect it for sadhana to succeed -- hence an outer shield is also necessary. The shields are mainly as follows --",
                "The shield of knowledge -- understanding Bhaiyaji's divine knowledge and carrying it into one's life protects one, through knowledge itself, from illusion.",
                "The shield of God's name -- when a seeker chants God's name with a true heart, purely out of love for God, that chanting settles around their body as a conscious shield.",
                "The shield of yoga -- as a seeker advances in sadhana, their yoga, that is, their union, with God begins to form. Then God's grace also acts as their shield.",
                "The shield of virtue -- by understanding and holding knowledge, a person's vices diminish, and a natural inclination towards right action begins to form within them. As virtuous qualities develop, the coverings over their mind begin to lift, and awakened discernment is able to make right decisions. Once their thinking becomes positive, negativity can no longer affect them.",
                "The shield of blessings -- one who performs right action has the prarabdha of their bad deeds cut away, and also receives blessings, which act as a strong shield for a human being in adverse circumstances in life.",
                "The shield of alertness -- fear of displeasing God and one's guide keeps a seeker alert and inspires them to remain firm in their resolve. 'There is no love without fear' -- this redirection of fear protects them from taking wrong decisions and proves helpful to their advancement.",
                "A shield can be strengthened through sustained reflection and practice. Besides the kinds described above, there is one more essential shield -- the guide's blessing is a priceless shield for a seeker, guiding them forward on the spiritual path by providing necessary direction from time to time. Their reprimand saves the seeker's sadhana from being wasted in empty self-display. In truth, the guide is the seeker's greatest shield on the spiritual path!"
            ]
        },
        "categoryTitle": {
            "hi": "साधना और अभ्यास",
            "en": "Spiritual Practice & Sadhana Principles"
        },
        "excerpt": {
            "hi": "कवच अर्थात किसी से अपनी सुरक्षा के लिये उपयोग में लाने वाला साधन। अध्यात्म साधना में कवच का बहुत ही महत्वपूर्ण स्थान है। मनुष्य पृथवी पर भौतिक मायाजाल के बीच में रहता है।...",
            "en": "A shield means a means used for one's own protection against something. In spiritual sadhana, the shield holds a very important place. A human being lives on earth amid the web ..."
        }
    },
    {
        "id": "q25",
        "number": 25,
        "categoryId": "sadhana-principles",
        "question": {
            "hi": "जीवन में विशेषकर साधना में कृतज्ञता का महत्व उजागर करें।",
            "en": "Bring out the importance of gratitude in life, especially in sadhana."
        },
        "answer": {
            "hi": [
                "संसार में अगर कोई भौतिकवाद में किसी के जीवन निर्माण में सहायता करता है या उसकी कोई बहुत ही महत्वपूर्ण आवश्यकता की पूर्ति करने में मदद करता है तो उसके प्रति हृदय से कृतज्ञता के भाव महसूस होते हैं और उसके प्रति बहुत सम्मान व्यक्त करते हैं और ताउम्र उसके आभारी रहते हैं। कृतज्ञता अर्थात आभार व्यक्त करना।",
                "अगर कोई ऐसा सत्य, शाश्वत्, अलौकिक ज्ञान दे जिससे आपकी भौतिकवाद के साथ-साथ अध्यात्म की राह भी रोशन हो जाए तो आपका रोम-रोम उनके प्रति कृतज्ञता महसूस करने लगता है और ऐसे में हृदय के अन्तर्तम से उनके लिए सम्मान के भाव निकलने लगते हैं। जिस तरह एक अंधे व्यक्ति को किसी की कृपा से आँखें दान में मिल जाये तो उसका जीवन प्रकाशमय हो जाएगा, इसी तरह अध्यात्म ज्ञान द्वारा किसी के ज्ञान चक्षु खोल दिये जायें तो उसका पूरा अस्तित्व आलोकित हो जाएगा और इहलोक व परलोक दोनों सुधर जाएंगे।",
                "लेकिन अध्यात्म में केवल कृतज्ञता का भाव लाना ही पर्याप्त नहीं है। अगर व्यक्ति पर सच्चा ज्ञान देने वाले मार्गदर्शक की कृपा न हो तो वह संसार में समय की धारा में भटकते हुए एक तिनके के समान अमूल्य जीवन व्यर्थ व्यतीत कर देगा। ज्ञान देकर मार्गदर्शक ने उसका जीवन सार्थक बनाया। यह ऐसा कर्ज़ है जिससे कभी उऋण नहीं हुआ जा सकता! अतः व्यक्ति का कर्त्तव्य है कि अपने मन में मार्गदर्शक के प्रति कृतज्ञता का भाव संजोए रखने के साथ उनकी कृपा को सम्भाले, उस पर किए विश्वास का मान रखते हुए अध्यात्म में उत्तरोत्तर उन्नति करे, उनके दिए ज्ञान को लागू करके उन्हें सद्गुणी बन कर दिखाए, अध्यात्म मार्ग को जीवन भर निभाए और जीवन का उद्देश्य प्राप्त कर उन्हें गौरवान्वित करे। यदि मार्गदर्शक उसे सुपात्र समझ कर यह आज्ञा दें कि वह दूसरों की अध्यात्म उन्नति में सहायक बनें तो पूर्ण निष्ठा, सतर्कता, ईमानदारी, तत्परता व निःस्वार्थता से ’मार्गदर्शक की चैतन्य सेवा व कृपा’ समझ कर इस कर्त्तव्य को निभाए। मन-वचन-कर्म में कृतज्ञता रखने से साध़क सदैव हर संकल्प में सफल होता है और मार्गदर्शक को हार्दिक प्रसन्नता मिलने से साधक का कृतज्ञ होना सफल होता है।"
            ],
            "en": [
                "In this world, if someone helps build another's life in worldly matters, or helps fulfil some very important need of theirs, one feels heartfelt gratitude towards them, expresses great respect for them, and remains grateful to them for life. Gratitude means expressing thanks.",
                "If someone gives such true, eternal, transcendent knowledge that lights up your path in both materialism and spirituality, then every fibre of your being begins to feel gratitude towards them, and feelings of respect begin to arise from the depths of your heart. Just as a blind person, by someone's grace, receiving the gift of sight, would find their life filled with light -- in the same way, if someone's eyes of knowledge are opened through spiritual wisdom, their entire being is illuminated, and both this world and the next are set right.",
                "But in spirituality, feeling gratitude alone is not enough. If a person does not have the grace of a guide who gives them true knowledge, they will wander in the current of time, wasting their priceless life like a straw. By giving knowledge, the guide has made their life meaningful. This is a debt that can never be repaid! It is therefore a person's duty to keep a feeling of gratitude towards their guide alive in their heart, to treasure their grace, to honour the trust placed in them by advancing steadily in spirituality, to demonstrate the knowledge given to them by becoming virtuous, to carry the spiritual path throughout their life, and, by attaining life's purpose, to bring them pride. And if the guide, seeing them as worthy, commands them to help others advance spiritually, they should carry out this duty with full sincerity, alertness, honesty, readiness and selflessness, understanding it as 'conscious service and grace of the guide'. By holding gratitude in thought, word and deed, a seeker is always successful in every resolve, and the guide finds heartfelt joy -- and it is this that makes a seeker's gratitude complete."
            ]
        },
        "categoryTitle": {
            "hi": "साधना और अभ्यास",
            "en": "Spiritual Practice & Sadhana Principles"
        },
        "excerpt": {
            "hi": "संसार में अगर कोई भौतिकवाद में किसी के जीवन निर्माण में सहायता करता है या उसकी कोई बहुत ही महत्वपूर्ण आवश्यकता की पूर्ति करने में मदद करता है तो उसके प्रति हृदय से कृतज्ञ...",
            "en": "In this world, if someone helps build another's life in worldly matters, or helps fulfil some very important need of theirs, one feels heartfelt gratitude towards them, expresse..."
        }
    },
    {
        "id": "q26",
        "number": 26,
        "categoryId": "sadhana-principles",
        "question": {
            "hi": "संकल्प ही अध्यात्म की सीढ़ी है। माँ बसन्ती जी द्वारा प्रेरित छोटे-छोटे संकल्पों का आपकी आध्यात्मिक यात्रा में क्या महत्व रहता है?",
            "en": "Resolve is itself the ladder of spirituality. What is the importance, in your spiritual journey, of the small resolves Maa Basanti Ji inspired?"
        },
        "answer": {
            "hi": [
                "भैया जी व माँ बसन्ती जी की असीम कृपा से जब हमें ज्ञान समझ में आ जाता है तब ईश्वर प्राप्ति की तीव्र इच्छा जाग्रत होने के कारण इसी जन्म में लक्ष्य प्राप्ति का दृढ़ संकल्प स्वतः बन जाता है। अध्यात्म में लक्ष्य के प्रति किया गया संकल्प बहुत महत्वपूर्ण है क्योंकि व्यक्ति जब संकल्प करता है तो अपनी समग्र उर्जा शक्ति को दृढ़ प्रतिज्ञ होकर पूर्ण जुनून, ईमानदारी, लगन, एकाग्रता से पूर्ण करने में जुट जाता है। इस तरह का संकल्प अवश्य ही पूर्ण होता है। अतः संकल्प अध्यात्म-सफलता की चोटी पर पहुँचने की बहुत महत्वपूर्ण सीढ़ी है। ’अध्यात्म’ लक्ष्य पूर्ति एक लंबी यात्रा है अर्थात सम्पूर्ण जीवन का लम्बा रास्ता। अतः माँ बसन्ती ने समझाया कि छोटे-छोटे संकल्पों से यात्रा सुगम हो जाती है।",
                "जिस तरह माँ वैष्णो देवी की यात्रा पर जब दर्शनार्थी जाते हैं तो यदि पहले से ही अन्तिम छोर की दूरी की कल्पना करेंगे कि इतनी दूर (14 किलोमीटर) चढ़ाई चढ़नी है तो उन्हें मुश्किल लगेगा परन्तु पड़ाव दर पड़ाव, हर कदम उत्साह उमंग से उठाते हुए ’माँ’ के भजन व जयकारे करते हुए आगे बढ़ते जायेंगे तो मन में माँ के दर्शनों (लक्ष्य) की छवि रखते हुए उत्साह, उमंग व खुशी से अन्त में लक्ष्य तक पहुँच ही जाते हैं। उसी तरह, छोटे-छोटे संकल्पों का हमारी आध्यात्मिक यात्रा में महत्व समझा जा सकता है।",
                "अध्यात्म उन्नति के लिए सद्गुणों का विकास आवश्यक है अर्थात अवगुणों पर नियंत्रण करना (काम, क्रोध, लोभ, मोह, अहंकार, इत्यादि)। उदाहरणार्थ- इसके लिए प्रतिदिन की दिनचर्या बनाएंगे कि आज सुबह से शाम तक मैं किसी पर क्रोध नहीं करूंगा, उस दिन तो अवश्य ही ऐसी परिस्थितियाँ बनेंगी कि क्रोध आएगा ही आएगा (’माँ’ परीक्षाएं लेती हैं)। जब ऐसी कोई परिस्थिति को बिना क्रोध के सफलतापूर्वक निभा लेते हैं तो आंतरिक खुशी होती है। सफलता का भाव कि मैंने संकल्प पूर्ण कर लिया। फिर समय अवधि बढ़ाई जाती है दो दिन, चार दिन, एक हफ्ता, तो क्रोध न करने की आदत सी पड़ जाती है।",
                "अतः जब छोटे-छोटे संकल्प पूरे होते हैं तो मनोबल बढ़ता है और आत्मविश्वास आ जाता है कि मैं यह कर लूंगा और उसी के साथ जीवन में उत्साह, उमंग, उल्लास, साहस बढ़ता जाता है। अतः इन्हीं छोटे-छोटे संकल्प द्वारा ही माँ बसन्ती जी ने हमारे अध्यात्म को सरल बना दिया। लक्ष्य बहुत दूर होता है तो पहले ही उसकी दूरी की कल्पना कर लेते हैं तो घबरा जाते हैं कि कैसे पार करेंगे। लेकिन जब हम हर दिन की दिनचर्या को छोटे-छोटे संकल्प द्वारा सफलतापूर्वक पूर्ण करते हुए आगे बढ़ेंगे तो सतत् संकल्प की सीढ़ी दर सीढ़ी चढ़ते हुए अंततः लक्ष्य प्राप्त कर ही लेंगे।"
            ],
            "en": [
                "By the boundless grace of Bhaiyaji and Maa Basanti Ji, when knowledge becomes clear to us, an intense wish to attain God awakens, and a firm resolve naturally forms to attain the goal in this very lifetime. A resolve made towards a spiritual goal is very important, because when a person makes a resolve, they apply their entire energy with firm commitment, full passion, honesty, dedication and focus to fulfilling it. A resolve of this kind is certainly fulfilled. So resolve is a very important step towards reaching the summit of spiritual success. Spiritual attainment is a long journey -- the whole long road of a life. Maa Basanti explained that small resolves make this journey easier.",
                "Just as, when pilgrims set out on the journey to Maa Vaishno Devi, if they imagine from the outset the entire distance to the final point -- that this much climb (14 kilometres) lies ahead -- it will feel difficult; but if, stage by stage, taking each step with enthusiasm and zeal, singing 'Maa's' hymns and chanting her praise, they move forward, keeping the image of Maa's darshan (their goal) in their heart, they reach their destination in the end with enthusiasm, zeal and joy. In the same way, the importance of small resolves in our spiritual journey can be understood.",
                "Developing virtue -- that is, controlling vices such as lust, anger, greed, infatuation and ego -- is essential for spiritual advancement. For example, for this we might make a daily resolve that today, from morning to evening, I will not be angry with anyone -- and on that very day, circumstances will certainly arise in which anger will come ('Maa' tests us). When we successfully get through such a situation without anger, there is inner joy -- the feeling of success that I fulfilled my resolve. Then the time period is extended -- two days, four days, a week -- and it becomes almost a habit not to be angry.",
                "So when small resolves are fulfilled, morale rises, and self-confidence comes -- that I will be able to do this -- and along with it, enthusiasm, zeal, delight and courage grow in life. It is through these small resolves that Maa Basanti Ji made our spirituality simple. When the goal is very far away, imagining that distance in advance makes us anxious about how we will ever cross it. But when we move forward, successfully completing each day's small resolves, we will, climbing step by step on this ladder of sustained resolve, finally attain our goal."
            ]
        },
        "categoryTitle": {
            "hi": "साधना और अभ्यास",
            "en": "Spiritual Practice & Sadhana Principles"
        },
        "excerpt": {
            "hi": "भैया जी व माँ बसन्ती जी की असीम कृपा से जब हमें ज्ञान समझ में आ जाता है तब ईश्वर प्राप्ति की तीव्र इच्छा जाग्रत होने के कारण इसी जन्म में लक्ष्य प्राप्ति का दृढ़ संकल्प स्...",
            "en": "By the boundless grace of Bhaiyaji and Maa Basanti Ji, when knowledge becomes clear to us, an intense wish to attain God awakens, and a firm resolve naturally forms to attain th..."
        }
    },
    {
        "id": "q27",
        "number": 27,
        "categoryId": "sadhana-principles",
        "question": {
            "hi": "अध्यात्म में इच्छा शक्ति को कैसे दृढ़ किया जा सकता है?",
            "en": "How can willpower be strengthened in spirituality?"
        },
        "answer": {
            "hi": [
                "इच्छा शक्ति किसी भी कार्य को करने की प्रेरणा देती है। अध्यात्म के क्षेत्र में यह सबसे महत्वपूर्ण है कि सर्वप्रथम व्यक्ति को अध्यात्म का महत्व समझ में आए। जैसे-जैसे आपको अध्यात्म का महत्व समझ में आता है वैसे-वैसे उसे प्राप्त करने की इच्छा शक्ति प्रबल होती है। इसमें मार्गदर्शक का बहुत महत्व है, जैसे मार्गदर्शक का ज्ञान, उनका आत्मविश्वास, उनकी प्रेरणा व उनका प्रोत्साहन इसमें बहुत सहायक होते हैं। इसके साथ-ही-साथ जैसे-जैसे व्यक्ति अध्यात्म में आगे बढ़ता है तब उसके जीवन में आनन्द का संचार होता है तब उसमें आगे बढ़ने की इच्छा शक्ति प्रबल होती जाती है और बढ़ते-बढ़ते वह लक्ष्य प्राप्ति का एक जुनून बन जाती है। भैया का ज्ञान समझकर एवं आगत परिस्थितियों का चिंतन करने के साथ-साथ इस राह पर चल पड़ें तो स्व-अनुभूति से जल्दी आगे बढ़ जायेंगे। ऐसे व्यक्ति को कोई लक्ष्य से विचलित नहीं कर सकता।"
            ],
            "en": [
                "Willpower gives the inspiration to do any task. In the field of spirituality, the most important thing is that a person first come to understand the importance of spirituality. As you come to understand the importance of spirituality, your willpower to attain it grows stronger. Here the guide's role is very important -- the guide's knowledge, their self-confidence, their inspiration and their encouragement are of great help in this. Along with this, as a person advances in spirituality, joy begins to flow through their life, and their willpower to advance further grows stronger, and as it grows it becomes a passion for attaining the goal. If one understands Bhaiya's knowledge, reflects on the circumstances that arise, and walks this path, one will, through self-realisation, advance quickly. No one can distract such a person from their goal."
            ]
        },
        "categoryTitle": {
            "hi": "साधना और अभ्यास",
            "en": "Spiritual Practice & Sadhana Principles"
        },
        "excerpt": {
            "hi": "इच्छा शक्ति किसी भी कार्य को करने की प्रेरणा देती है। अध्यात्म के क्षेत्र में यह सबसे महत्वपूर्ण है कि सर्वप्रथम व्यक्ति को अध्यात्म का महत्व समझ में आए। जैसे-जैसे आपको अ...",
            "en": "Willpower gives the inspiration to do any task. In the field of spirituality, the most important thing is that a person first come to understand the importance of spirituality. ..."
        }
    },
    {
        "id": "q33",
        "number": 33,
        "categoryId": "sadhana-principles",
        "question": {
            "hi": "अध्यात्म में कौन से गुण व कार्य जिज्ञासु की उन्नति में सहायक होते है?",
            "en": "Which qualities and actions help a seeker advance in spirituality?"
        },
        "answer": {
            "hi": [
                "सर्वप्रथम जब व्यक्ति में सत्य के प्रति जिज्ञासा जाग्रत होती है और अध्यात्म की और वह कदम बढ़ाता है तो ईश्वरीय कृपा से सही मार्गदर्शक का मिलना व उनके द्वारा शिष्य स्वीकार किया जाना अत्यन्त महत्वपूर्ण है। इसके बाद, उसकी उन्नति आरम्भ होती है और जो गुण अध्यात्म मार्ग पर अनिवार्य हैं, वे मार्गदर्शक विकसित करना शुरू करते हैं। जैसे- अटूट श्रद्धा-विश्वास, उद्देश्य का महत्व, समर्पण, संकल्पशीलता, दृढ़-विश्वास, धैर्य, सहनशीलता, सकारात्मकमा, एकाग्रता, लग्न, ईमानदारी, सतर्कता, कर्मठता, ज्ञान का चिंतन-मनन-अध्ययन, संयम आदि। मार्गदर्शक जिज्ञासु को ज्ञान सीखने के साथ साधना-ध्यान-जप-सत्कर्म का महत्व व विधि भी बतलाते हैं जिनका नियमित अभ्यास उसकी उन्नति में सहायक बनता है। स्वाध्याय व आत्मविश्लेषण निरंतर विकास की प्रक्रिया में अहम भूमिका निभाते हैं। ख्’मणिद्वीप’ में हम भैया जी की हस्तलिखित डायरी के अंश, उनके द्वारा लिखित पुस्तक ’मृत्यु के बाद का अलौकिक संसार’ और यहाँ से प्रकाशित अन्य सद्साहित्यों का नियमित पठन-मनन भी करते हैं,",
                "ज्ञान को धारण करने के प्रयास में आने वाली कठिनाइयों के बारे में प्रश्न करना जिज्ञासु की प्रगति में सहायक होते हैं।",
                "जैसे-जैसे प्रश्नों के समाधान मिलते जाएंगे और कठिनाइयों को व्यक्ति पार करता जाएगा, वैसे-वैसे उसके अन्दर आत्मविश्वास और अध्यात्म मार्ग पर आगे बढ़ने का साहस भी बढ़ता जाएगा। अध्यात्म भौतिकता से होकर गुज़रता है तो भौतिक शरीर को रखने के लिए भौतिक साधन ही काम आएंगे उनका सोच-समझ कर आवश्यकतानुसार उपयोग करना भी जिज्ञासु को आना चाहिए। हृदय में ईश्वर और मार्गदर्शक के प्रति कृतज्ञता का भाव उसके अन्दर सरलता, विनम्रता और प्रेम बढ़ाने में भी सहायक बनता है।",
                "अध्यात्म मार्ग को पार करने में जिज्ञासु के लिए सर्वाधिक महत्त्वपूर्ण भूमिका निभाता है- मार्गदर्शक का आशीर्वाद, सान्निध्य, दिशा-निर्देशन व ईश्वर से उनका सम्बन्ध। सत्य है अध्यात्म की पहली सीढ़ी भी अटूट श्रद्धा-विश्वास है और अन्तिम सीढ़ी भी यही है!",
                "‘‘ध्यानमूलम् गुरुर्मूर्तिः, पूजामूलम् गुरुर्पदम्,",
                "मन्त्रमूलम् गुरुर्वाक्यम्, मोक्षमूलम् गुरुर्कृपा!‘‘"
            ],
            "en": [
                "First, when inquiry towards truth awakens in a person and they take a step towards spirituality, it is extremely important, by God's grace, that they find the right guide and are accepted by them as a disciple. After this, their advancement begins, and the guide begins to develop within them the qualities essential on the spiritual path -- such as unwavering faith and trust, the importance of purpose, surrender, resolve, firm conviction, patience, forbearance, positivity, focus, dedication, honesty, alertness, diligence, reflection-contemplation-study of knowledge, and restraint. Alongside teaching knowledge, the guide also tells the seeker the importance and method of sadhana, meditation, chanting and right action, regular practice of which helps their advancement. Self-study and self-reflection play an important role in this process of continuous growth. At 'Manidweep' we also regularly read and reflect on excerpts from Bhaiyaji's handwritten diary, the book he wrote, 'The Wonderful World After Death', and the other sacred literature published here.",
                "Asking questions about the difficulties one meets while trying to hold on to knowledge helps a seeker's progress.",
                "As answers to these questions are found and a person overcomes their difficulties, their self-confidence and their courage to advance on the spiritual path will also grow. Since spirituality passes through worldliness, material means will indeed be needed to sustain the physical body, and a seeker should also know how to use them thoughtfully, as needed. A feeling of gratitude in the heart towards God and the guide also helps increase simplicity, humility and love within them.",
                "The most important role for a seeker in traversing the spiritual path is played by the guide's blessing, presence, direction, and their connection with God. It is true that the first step of spirituality is unwavering faith and trust, and so is the last!",
                "\"Dhyana-mulam guru-murtih, puja-mulam guru-padam,",
                "Mantra-mulam guru-vakyam, moksha-mulam guru-kripa!\" -- Meditation is rooted in the guru's form, worship in the guru's feet, the mantra in the guru's word, and liberation in the guru's grace."
            ]
        },
        "categoryTitle": {
            "hi": "साधना और अभ्यास",
            "en": "Spiritual Practice & Sadhana Principles"
        },
        "excerpt": {
            "hi": "सर्वप्रथम जब व्यक्ति में सत्य के प्रति जिज्ञासा जाग्रत होती है और अध्यात्म की और वह कदम बढ़ाता है तो ईश्वरीय कृपा से सही मार्गदर्शक का मिलना व उनके द्वारा शिष्य स्वीकार कि...",
            "en": "First, when inquiry towards truth awakens in a person and they take a step towards spirituality, it is extremely important, by God's grace, that they find the right guide and ar..."
        }
    },
    {
        "id": "q45",
        "number": 45,
        "categoryId": "sadhana-principles",
        "question": {
            "hi": "अध्यात्म में स्वाध्याय का महत्व समझाइए।",
            "en": "Explain the importance of self-study in spirituality."
        },
        "answer": {
            "hi": [
                "अध्यात्म में स्वाध्याय का तात्पर्य यह है कि साधक सद्साहित्य का अध्ययन करे, उसका चिंतन मनन करे, उस ज्ञान के हर पहलू को समझे। इसमें छुपे हुए गूढ़ रहस्य को समझें ताकि वह अध्यात्म में ज्ञान जनित आत्मविश्वास से आगे बढ़े।",
                "स्वाध्याय द्वारा बुद्धि का विकास होता है, विवेक जागृत होता है, सद्विचारों की उत्पत्ति होती है, देखने का दृष्टिकोण बदलता है और आवरण हटते हैं। स्वाध्याय करने से हम ईश्वर, मार्गदर्शक, महापुरुष या किसी प्रेरणदायी व्यक्ति के बारे में पढ़कर उनके गुण एवं कार्यों के बारे में जानते हैं जिससे हमें भी स्वयं को उन्नत करने की प्रेरणा मिलती है।",
                "भैया की हस्तलिखित डायरी अध्यात्म के क्षेत्र में साधकों के स्वाध्याय के लिये एक विशाल स्त्रोत है-जैसे गागर में सागर। यह उनकी चैतन्य यात्रा का एक महत्वपूर्ण दस्तावेज़ है। इसका अध्ययन, चिंतन, मनन करने से कई लोगों की अध्यात्म की अवधारणायें स्पष्ट हुई और भैया की आध्यात्मिक यात्रा ने कई साधकों को सम्बल दिया और लक्ष्य के प्रति आत्मविश्वास बढ़ाया।",
                "इसके साथ ही स्वाध्याय के लिये भैया एवं माँ बसन्ती जी पर लिखित यह पुस्तकें भी अत्यन्त उपयोगी हैं-",
                "माँ त्रिपुरसुन्दरी के लाडले चक्रधारी युगप्रवर्तक अध्यात्मयोगी श्री नन्दकिशोर शारदा",
                "मणिद्वीप की एक दीपशिखा-जीजी बसन्ती मनिहार",
                "मणिद्वीप का अध्यात्म पुरुष"
            ],
            "en": [
                "Self-study in spirituality means that a seeker should study sacred literature, reflect and contemplate upon it, and understand every aspect of that knowledge. They should understand the hidden, deeper truths within it, so that they may advance with the self-confidence born of knowledge in spirituality.",
                "Through self-study, the intellect develops, discernment awakens, right thoughts arise, one's outlook changes, and coverings lift. Through self-study we read about God, our guide, great figures or some inspiring person, and learn of their qualities and works, which gives us too the inspiration to uplift ourselves.",
                "Bhaiya's handwritten diary is a vast resource for seekers' self-study in the field of spirituality -- an ocean held in a small vessel. It is an important document of his conscious journey. Studying it, reflecting and contemplating upon it, has clarified many people's understanding of spirituality, and Bhaiya's spiritual journey has given strength to many seekers and increased their self-confidence towards their goal.",
                "Alongside this, the following books written about Bhaiya and Maa Basanti Ji are also extremely useful for self-study --",
                "Chakradhari Yugpravartak Adhyatmyogi Shri Nandkishore Sharda, the Beloved of Maa Tripurasundari",
                "A Lamp-flame of Manidweep -- Jiji Basanti Manihar",
                "The Spiritual Man of Manidweep"
            ]
        },
        "categoryTitle": {
            "hi": "साधना और अभ्यास",
            "en": "Spiritual Practice & Sadhana Principles"
        },
        "excerpt": {
            "hi": "अध्यात्म में स्वाध्याय का तात्पर्य यह है कि साधक सद्साहित्य का अध्ययन करे, उसका चिंतन मनन करे, उस ज्ञान के हर पहलू को समझे। इसमें छुपे हुए गूढ़ रहस्य को समझें ताकि वह अध्य...",
            "en": "Self-study in spirituality means that a seeker should study sacred literature, reflect and contemplate upon it, and understand every aspect of that knowledge. They should unders..."
        }
    },
    {
        "id": "q29",
        "number": 29,
        "categoryId": "guru-disciple",
        "question": {
            "hi": "सद्गुरु किसे कहते हैं?",
            "en": "Who is called a true guru?"
        },
        "answer": {
            "hi": [
                "भौतिकवाद के तमसपूर्ण माया के भंवरजाल से शिष्य को निकालकर जो सत्य शाश्वत् ईश्वर के दिव्य ज्ञान के प्रकाश की अनुभूति करवाए, वही सही मायने में सद्गुरु है।",
                "सद्गुरु एक महान पद है जिसे वे ही व्यक्ति ग्रहण कर सकते हैं जिन्होंने शाश्वत्, सत्य ज्ञान को स्वयं धारण किया हो, ईश्वर से जिनका तारतम्य सदैव जुड़ा हो और जिन्हें ईश्वर की पूर्ण कृपा व गुरु-पद लेने की भी आज्ञा प्राप्त हो। सद्गुरु निष्पक्ष व निःस्वार्थी होते हैं। उनके सारे आध्यात्मिक अनुभव स्वानुभूत होते हैं एवं पूरा अध्यात्म मार्ग उन्होंने स्वयं चलकर पार किया होता है। इसीलिए वे हर शिष्य को उसकी योग्यता/पात्रता एवं सामथर्यानुसार मार्गदर्शन प्रदान करने की क्षमता रखते हैं।",
                "सद्गुरु अपने शिष्य का केवल हित ही चाहते हैं और अध्यात्म में हर सम्भव प्रयास से उन्नत करना चाहते हैं, इसके लिए उन्हें कटु वचन भी कहने पड़ें तो वे कहते हैं ताकि शिष्य भौतिकता के मायाजाल में न उलझ जाए। वह व्यक्ति कदापि सद्गुरु की श्रेणी में नहीं आता जो साधना से सिद्धि प्राप्त कर कंचन-कामिनी-कीर्ति के लोभ में अपने शिष्य को भौतिकता के भँवर में और डूबने के लिए भौतिक सम्पन्नता के आशीर्वाद दे।",
                "सद्गुरु अपने शिष्य की आध्यात्मिक उन्नति के लिए स्वयं कितना भी कष्ट झेल लेते हैं, यहाँ तक कि उसके द्वारा किए उन कर्मों का प्रवाह भी खींच लेते हैं जो उसके मार्ग पर बाधक बन कर खड़े हो सकते हों। वे अपनी साधना का अंशदान कर व अपनी चैतन्य शक्ति लगाकर शिष्य को साधना मार्ग पर आगे बढ़ाते हैं-सद्गुरु महात्यागी होते हैं।",
                "सद्गुरु की वाणी सिद्ध होती है- यदि शिष्य उन पर अटूट श्रद्धा-विश्वास रखकर केवल गुरु कहे वैसा करता जाए तो उसका उद्धार निश्चित है। उनमें इतनी शक्ति होती है कि वे शिष्य के अंतर्मन को भी पढ़ सकते हैं। ईश्वर से एकाकर सद्गुरु त्रिकालदर्शी होते हैं।",
                "सद्गुरु चमत्कार दिखाकर आत्म-प्रदर्शन में विश्वास नहीं करते, न ही उन्हें शिष्यों की संख्या में रुचि होती है। वे तो अपनी भी साधना, प्रेम से ईश्वर को पुकारना, ध्यान, आदि नियम में व्यवधान नहीं चाहते इसलिए शिष्य को ढूंढने में स्वयं नहीं जाते। ईश्वरीय कृपा व प्रेरणा से जो भाग्यशाली जिज्ञासु उन तक पहुँच जाता है, उसके प्रति अपने गुरु के दायित्व को वे पूरी ईमानदारी से निभाते भी हैं।",
                "आज के अति भौतिकवादी युग में सद्गुरु को ढूंढना बहुत दुष्कर कार्य है क्योंकि अधिकांश तथाकथित गुरुओं में सद्गुरु के उपरोक्त वर्णित गुणों का अभाव है। इसलिए हमें अपने आराध्य से ही प्रार्थना करना सर्वथा श्रेयस्कर है कि वे हमें ऐसे सद्गुरु तक पहुँचा दें जो अध्यात्म मार्ग को निश्चिंतता से पार करा सकें। {हम सौभाग्यशाली हैं जो ’मणिद्वीप’ में ’मार्गदर्शक’ के रूप में हमें मिले ’ भैया जी व माँ बसन्ती जी’ के महान व्यक्तित्व में एक सच्चे सद्गुरु के सभी लक्षण दृष्टिगोचर हुए। उन्होंने कभी औपचारिक रूप से हमारे गुरु बनना स्वीकार नहीं किया। वे सदैव यही कहते, ’’गुरु तो केवल ईश्वर हैं’’, परन्तु हमारे हृदय में श्रद्धा के सर्वोच्च आसन पर हमने ’सद्गुरु’ के रूप में विराजित किया तो एक अलौकिक, अवर्णनीय, अद्भुत शांति-खुशी-आनन्द-ऊर्जा का निरन्तर बहता स्रोत भी अपने अन्दर अनुुभव किया। यह हमारा निजी अनुभव है!}"
            ],
            "en": [
                "One who draws a disciple out of the dark, illusion-filled whirlpool of materialism and gives them the realisation of the light of the true, eternal, divine knowledge of God -- that, in the truest sense, is a true guru.",
                "'True guru' is a great station, attainable only by those who have themselves held true, eternal knowledge, whose connection with God is always intact, and who have received both God's complete grace and permission to accept the position of guru. A true guru is impartial and selfless. All their spiritual experiences are self-realised, and they have themselves walked and crossed the entire spiritual path. This is why they are capable of guiding every disciple according to that disciple's worthiness and capacity.",
                "A true guru wants only their disciple's welfare, and wishes to uplift them in spirituality by every possible effort -- even if this requires speaking harsh words, they will speak them, so that the disciple does not become entangled in the web of materialism. A person never falls into the category of a true guru if, having attained accomplishment through sadhana, they bless their disciple, out of desire for wealth, sensual attachment or fame, with worldly prosperity that only sinks them deeper into the whirlpool of materialism.",
                "A true guru will endure any suffering themselves for their disciple's spiritual advancement -- they will even draw off the flow of those deeds of the disciple's that might stand as obstacles on their path. By contributing a portion of their own sadhana and applying their conscious power, they carry the disciple forward on the path of sadhana -- a true guru is one of great renunciation.",
                "A true guru's word carries power -- if a disciple holds unwavering faith and trust in them and does only as the guru says, their deliverance is certain. They possess such power that they can even read a disciple's inner mind. United with God, a true guru sees across the three times -- past, present and future.",
                "A true guru does not believe in self-display through the showing of miracles, nor are they interested in the number of their disciples. They do not wish for any disruption to their own sadhana, their loving calling upon God, their meditation and other disciplines, and so they do not go out themselves in search of disciples. To whichever fortunate seeker reaches them, by God's grace and inspiration, they fulfil their duty as guru with complete sincerity.",
                "In today's intensely materialistic age, finding a true guru is a very difficult task, because most so-called gurus lack the qualities of a true guru described above. It is therefore best to pray to our own beloved deity that they lead us to such a true guru who can carry us across the spiritual path with certainty. {We are fortunate that, in 'Manidweep', the great personalities of 'Bhaiyaji and Maa Basanti Ji' who came to us as our 'guides' showed every mark of a true guru. They never formally accepted becoming our guru. They would always say, \"the guru is only God\" -- but when, in our hearts, we placed them upon the highest seat of reverence as our 'true guru', we too experienced within ourselves a wondrous, indescribable, continuously flowing source of peace, happiness, joy and energy. This is our own personal experience!}"
            ]
        },
        "categoryTitle": {
            "hi": "गुरु-शिष्य संबंध",
            "en": "Guru-Disciple Relationship"
        },
        "excerpt": {
            "hi": "भौतिकवाद के तमसपूर्ण माया के भंवरजाल से शिष्य को निकालकर जो सत्य शाश्वत् ईश्वर के दिव्य ज्ञान के प्रकाश की अनुभूति करवाए, वही सही मायने में सद्गुरु है। सद्गुरु एक महान पद...",
            "en": "One who draws a disciple out of the dark, illusion-filled whirlpool of materialism and gives them the realisation of the light of the true, eternal, divine knowledge of God -- t..."
        }
    },
    {
        "id": "q30",
        "number": 30,
        "categoryId": "guru-disciple",
        "question": {
            "hi": "सद्षिष्य कौन कहलाता है? उसकी पहचान किन गुणो के आधार पर की जाती है?",
            "en": "Who is called a true disciple? By what qualities is one identified?"
        },
        "answer": {
            "hi": [
                "सद्गुरु पर अटूट श्रद्धा-विश्वास रख उनकी सिद्ध-वाणी से प्रवाहित होते सत्य ज्ञान को शिरोधार्य करने वाला शिष्य ही सद्शिष्य कहलाता है। शिष्य का अर्थ ही है जिसमें शिक्षा प्राप्ति की इच्छा हो। वह जिज्ञासु, मेहनती, सतर्क (ध्यान से सुनने वाला), संकल्पशील और विनम्र होता है परन्तु सद्शिष्य की लगन, एकाग्रता, दृढ़ता, ज्ञान को शीघ्र आत्मसात करने की प्रवृत्ति, आज्ञा पालन में ईमानदारी, सत्यता, अपने विषय व कर्तव्य के प्रति गंभीरता और सद्गुरु के प्रति समर्पण- यह सद्गुण उसे बाकी शिष्यों से विशिष्ट बना देते हैं। सद्शिष्य में लेशमात्र भी अहंकार व गुरु के प्रति शक-संदेह नहीं होता- वह तो खाली स्लेट (पूर्वाग्रहों से मुक्त) के समान पवित्र मन को सद्गुरु के समक्ष रख देता है ताकि वे उसे एक कुशल शिल्पकार की भांति महान उद्देश्य के लिए गढ़ सकें। सद्गुरु भी उसकी जिज्ञासा को तर्कपूर्ण उत्तर देकर शांत करते जाते हैं और प्रोत्साहित भी करते हैं ताकि उसमें बुद्धि-विवेक सही दिशा में विकसित हो।",
                "सद्शिष्य प्रश्न करता है, कुतर्क नहीं क्योंकि वह जानता है जिस महान उद्देश्य प्राप्ति के मार्ग पर वह चल रहा है, सद्गुरु उसे पार कर चुके हैं।",
                "आजीवन सद्गुरु के दिखाए मार्ग पर पूरी ईमानदारी, गम्भीरता, सत्यता एवं सरलता से चलते हुए अंततः सद्शिष्य अपने जीवन लक्ष्य तक पहुँच ही जाता है।"
            ],
            "en": [
                "One who holds unwavering faith and trust in their true guru, and accepts with reverence the true knowledge flowing from their accomplished word, is called a true disciple. The word 'disciple' itself means one who has the wish to gain knowledge. Such a person is inquiring, hardworking, alert (a careful listener), resolute and humble -- but it is the true disciple's dedication, focus, firmness, capacity to quickly absorb knowledge, honesty in obeying instructions, truthfulness, seriousness towards their subject and duty, and surrender to their true guru, that sets them apart from other disciples. A true disciple carries not the slightest trace of ego or doubt towards their guru -- they place their mind, pure and like a blank slate (free of prejudice), before the true guru, so that the guru, like a skilled craftsman, may shape them towards a great purpose. The true guru, too, keeps satisfying the disciple's inquiry with reasoned answers, and keeps encouraging them, so that their intellect and discernment develop in the right direction.",
                "A true disciple asks questions, not specious arguments -- because they know that the true guru has already crossed the very path towards the great purpose on which they are walking.",
                "Walking, for their whole life, the path shown by the true guru with complete honesty, seriousness, truthfulness and simplicity, the true disciple in the end reaches the goal of their life."
            ]
        },
        "categoryTitle": {
            "hi": "गुरु-शिष्य संबंध",
            "en": "Guru-Disciple Relationship"
        },
        "excerpt": {
            "hi": "सद्गुरु पर अटूट श्रद्धा-विश्वास रख उनकी सिद्ध-वाणी से प्रवाहित होते सत्य ज्ञान को शिरोधार्य करने वाला शिष्य ही सद्शिष्य कहलाता है। शिष्य का अर्थ ही है जिसमें शिक्षा प्राप...",
            "en": "One who holds unwavering faith and trust in their true guru, and accepts with reverence the true knowledge flowing from their accomplished word, is called a true disciple. The w..."
        }
    },
    {
        "id": "q31",
        "number": 31,
        "categoryId": "guru-disciple",
        "question": {
            "hi": "गुरु शिष्य के सम्बन्धों का मुख्य आधार क्या होता है?",
            "en": "What is the main foundation of the relationship between guru and disciple?"
        },
        "answer": {
            "hi": [
                "गुरु व शिष्य के सम्बन्ध का मुख्य आधार है परस्पर अटूट विश्वास। जब शिष्य को यह बोध हो जाता है कि एक महान व्यक्ति में उसे गुरु की छवि दिखाई दे रही तो उसे सबसे पहले उनका, उनकी जीवनशैली, हर परिस्थिति में उनका व्यवहार, ज्ञान, आचरण, कथनी-करनी में समानता, ईश्वरीय कृपा, आदि के आधार पर बारीकी से आकलन करना चाहिए। माँ बसन्ती जी के अनुसार ’’गुरु बनाने से पहले उन्हें दिन में देखो, रात में देखो, सोते देखो, जागते देखो, खाते देखो, पीते देखो यानी अच्छी तरह से हर प्रकार जाँच लोे ताकि कोई शक-संदेह मन में न रहे। एक बार जो गुरु मान लो, फिर कभी सुई के नोंक जितना भी संशय मन में मत आने दो’’। जब शिष्य सब तरह से चिंतन-मनन-आकलन करके अंतः प्रेरणा से यह निष्कर्ष निकालता है कि गुरुजी ने पूर्ण आध्यात्मिक जीवन जीया है, उन पर उनके इष्टदेव की पूर्ण कृपा है, उनके सभी आध्यात्मिक अनुभव स्वानुभूत हैं, उन्हें प्राप्त सत्य शाश्वत् ज्ञान पूर्ण है व गुरु सर्वथा समर्थ हैं उसे भवसागर पार करवाने के लिए तब वह सच्चे हृदय से उन्हें अपना सदगुरु स्वीकार कर लेता है।",
                "इसी प्रकार, शिष्य स्वीकार करने से पहले गुरु भी उसकी पात्रता जाँचते हैं। ज्ञान-प्राप्ति की जिज्ञासा के साथ उसका लक्ष्य भी गुरु देखते हैं, सीखने की योग्यता के साथ सरलता, सत्य स्वीकार करने का साहस होने के साथ उनके अनुसार ढलने की क्षमता, आदि- इन सभी के आधार पर यदि वह निष्कर्ष निकालते हैं कि गीली मिट्टी के समान इसे सुन्दर नवीन आकार में गढ़़ा जा सकता है तब वे उस पर शिष्य के रूप में विश्वास करते हैं कि यह निभा लेगा। यदि अनगढ़ी मूर्ति बीच-बीच में मूर्तिकार को निर्देश देने लगे कि ’ऐसे नहीं, ऐसे गढ़ो’ तो वह अपने सुन्दरतम रूप को प्राप्त कर ही नहीं सकेगी और मूर्तिकार की सारी मेहनत ही बेकार चली जाएगी इसलिए शिष्य भी सोच-समझकर बनाया जाता है।",
                "अध्यात्म की पहली सीढ़ी भी सद्गुरु पर अटूट श्रद्धा, विश्वास है और अन्तिम भी गुरु पर श्रद्धा व विश्वास होते हैं। फिर सद्गुरु स्वयं शिष्य को अपने इष्टदेव व स्वयं पर विश्वास करना सिखा देते हैं।"
            ],
            "en": [
                "The main foundation of the relationship between guru and disciple is mutual unwavering trust. When a disciple senses that they see, in some great person, the image of a guru, they should first carefully assess them -- their lifestyle, their conduct in every circumstance, their knowledge, their conduct, the consistency between their word and their action, God's grace upon them, and so on. According to Maa Basanti Ji, \"before making someone your guru, watch them by day, watch them by night, watch them sleeping, watch them waking, watch them eating, watch them drinking -- examine them thoroughly in every way, so that no doubt remains in your mind. Once you have accepted someone as guru, never again let even a needle-point of doubt enter your mind.\" When, after all this reflection, contemplation and assessment, a disciple concludes from inner inspiration that their guru has lived a fully spiritual life, that they have the complete grace of their chosen deity, that all their spiritual experiences are self-realised, that the true, eternal knowledge they have received is complete, and that the guru is fully capable of carrying them across the ocean of existence, then, with a true heart, they accept them as their true guru.",
                "In the same way, before accepting a disciple, the guru too examines their worthiness. Along with the inquiry to gain knowledge, the guru also looks at the disciple's purpose, their capacity to learn along with simplicity, the courage to accept truth along with the capacity to be shaped accordingly, and so on -- and if, on this basis, they conclude that, like wet clay, this person can be shaped into a beautiful new form, they place their trust in them as a disciple, believing they will see it through. If an unshaped statue keeps instructing the sculptor midway, saying 'not like this, shape me like that', it will never attain its most beautiful form, and all the sculptor's effort will go to waste -- so a disciple, too, is made thoughtfully.",
                "The first step of spirituality is unwavering reverence and trust in the true guru, and so is the last. And then the true guru themselves teaches the disciple to trust in their chosen deity, and in themselves."
            ]
        },
        "categoryTitle": {
            "hi": "गुरु-शिष्य संबंध",
            "en": "Guru-Disciple Relationship"
        },
        "excerpt": {
            "hi": "गुरु व शिष्य के सम्बन्ध का मुख्य आधार है परस्पर अटूट विश्वास। जब शिष्य को यह बोध हो जाता है कि एक महान व्यक्ति में उसे गुरु की छवि दिखाई दे रही तो उसे सबसे पहले उनका, उनक...",
            "en": "The main foundation of the relationship between guru and disciple is mutual unwavering trust. When a disciple senses that they see, in some great person, the image of a guru, th..."
        }
    },
    {
        "id": "q43",
        "number": 43,
        "categoryId": "guru-disciple",
        "question": {
            "hi": "जिज्ञासा कैसे उत्पन्न की जाती है? अध्यात्म से अनभिज्ञ व्यक्ति की माँ बसन्ती जी कैसे सहायता करतीं थीं?",
            "en": "How is inquiry generated? How would Maa Basanti Ji help a person unfamiliar with spirituality?"
        },
        "answer": {
            "hi": [
                "मनुष्य बुद्धि की क्षमताएँ असीम है। जिस विषय में वह नहीं जानता है, उसे भी सीख सकता है। केवल उस विषय के बारे में सीखने की इच्छा उसमें जागृत होने की देर है। दूसरा, मनुष्य के मस्तिष्क को यदि प्रश्न दे दिये जाएं, तो वह उनके उत्तर प्राप्त करने को उद्यत हो जाता है। तीसरा, किसी विषय को सरल और सरस करके समझाया जाए तो व्यक्ति उसे जल्दी आत्मसात् कर पाता है। अध्यात्म में जिज्ञासा जागृत करने के लिए मानव की इन तीनों विलक्षणताओं को कार्य में लिया जा सकता है!",
                "माँ बसन्ती जी ‘जगतजननी माँ और भैया जी‘ की कृपा से मानव बुद्धि की इन विशेषताओं को व्यक्ति के हित में काम में लेकर उसकी जिज्ञासा को जागृत कर देतीं थीं। अध्यात्म ज्ञान को उन्होंने भैया जी से प्राप्त किया और स्वयं अपने जीवन में लागू करके चैतन्यता का अनुभव किया था इसलिए उन्हें अपने अध्यात्म मार्ग और ज्ञान पर अडिग विश्वास था। वे जानतीं थीं कि एक मनुष्य के लिए अध्यात्म कितना अनिवार्य है इसलिए व्यक्ति में जिज्ञासा जागृत करने हेतु ऐसे जटिल विषय को भी वे रुचिकर बना देतीं।",
                "माँ बसन्ती जी की ‘प्रश्न में से प्रश्न‘ पूछने की शैली बड़ी अनोखी थी। वे एक प्रश्न व्यक्ति के समक्ष रखतीं। अपने ज्ञान और अनुभव के आधार पर जो भी वह व्यक्ति उत्तर देता, उसे और गहरे चिंतन में ले जाने के लिए एक सच्चे हितैषी की तरह, उसी उत्तर में से नया प्रश्न उसके समक्ष रख देतीं। ऐसे करते-करते वे उसे एक ऐसे मोड़ पर ले आतीं, जहाँ माँ बसन्ती जी के अकाट्य तर्क उस व्यक्ति की बुद्धि स्वीकार कर लेती, और वह उनकी बुद्धिमता व ज्ञान की गहराई के प्रति मन में श्रद्धा से नतमस्तक हो जाता। कमाल की बात यह होती- माँ बसन्ती जी के मन में सुई के नोंक जितना भी अहंकार या आत्म प्रदर्शन का भाव नहीं होने के कारण, व्यक्ति इस चर्चा में हार कर भी अपने ज्ञान के वृद्धि की जीत से खुशी अनुभव करता और उसमें माँ बसन्ती जी से सीखने की हार्दिक इच्छा उत्पन्न हो जाती।",
                "वे अध्यात्म मार्ग पर चलने के लिए आवश्यक विषयों (मनुष्य शरीर, परिवार, समाज से लेकर अध्यात्म, जीवन, ईश्वर तक) का महत्त्व व्यक्ति को दिखातीं और चैतन्यता के गूढ़ रहस्य को इतना सरल करके समझातीं कि व्यक्ति को अध्यात्म मार्ग पर चलना आसान लगने लगता। उनके साथ ज्ञानचर्चा करते हुए व्यक्ति को इतना आनन्द आने लगता कि समय के बीतने का आभास ही नहीं होता और वह बहुत कुछ नया सीख कर जा रहा है, ऐसा हर बार उसे अनुभव होता। वे उसे भी प्रश्न करने की पूरी स्वतंत्रता देतीं थीं ताकि उसमें चिंतन करने की प्रवृत्ति विकसित हो और धीरे-धीरे भैया के ज्ञान से विवेक बुद्धि जागृत हो। वे उसे कहतीं कि ‘मणिद्वीप‘ में केवल 7-8 बार रविवारीय ज्ञानचर्चा में आ जाएं। ऐसा करने से व्यक्ति को स्वयं की विचारधारा और दृष्टिकोण में सकारात्मकता दृष्टिगोचर होने लगती तथा अनुभव होता कि माँ बसन्ती जी ने उसमें बातों ही बातों में अध्यात्म के महत्व को समझाकर उसमें जिज्ञासा जाग्रत कर देतीं थीं!"
            ],
            "en": [
                "A human being's intellectual capacities are boundless. Even a subject they do not know, they can learn. All that is needed is for the wish to learn about that subject to awaken within them. Second, if a human mind is given questions, it becomes eager to find their answers. Third, if a subject is explained simply and pleasantly, a person absorbs it more quickly. To awaken inquiry in spirituality, these three distinctive traits of human nature can be put to use!",
                "By the grace of 'Jagatjanani Maa and Bhaiyaji', Maa Basanti Ji would put these features of human intellect to use for a person's benefit and awaken their inquiry. She had received spiritual knowledge from Bhaiyaji and had herself applied it in her own life and experienced consciousness, so she held unshakable faith in her spiritual path and knowledge. She knew how essential spirituality is for a human being, and so she could make even so complex a subject engaging, in order to awaken inquiry within a person.",
                "Maa Basanti Ji's style of 'asking a question from within a question' was quite remarkable. She would place a question before a person. Whatever answer that person gave, based on their own knowledge and experience, she, like a true well-wisher wanting to draw them into deeper reflection, would place a new question before them, drawn from that very answer. Doing this again and again, she would bring them to a point where the person's intellect would accept Maa Basanti Ji's irrefutable reasoning, and they would bow, in their heart, with reverence towards the depth of her wisdom and knowledge. The remarkable thing was this -- because there was not the slightest trace of ego or self-display in Maa Basanti Ji's mind, the person, even in losing this discussion, would feel the joy of winning an increase in their own knowledge, and a heartfelt wish to learn from Maa Basanti Ji would arise within them.",
                "She would show a person the importance of the subjects necessary for walking the spiritual path (from the human body, family and society to spirituality, life and God), and would explain the deep mystery of consciousness so simply that walking the spiritual path would come to seem easy to the person. Discussing knowledge with her, a person would find such joy that they would not even sense the passing of time, and each time they would feel that they were leaving having learned something entirely new. She gave them full freedom to ask questions as well, so that a tendency to reflect would develop within them, and gradually, through Bhaiya's knowledge, discernment would awaken. She would tell them to simply come to just 7-8 of the Sunday knowledge-discussions at 'Manidweep'. Doing this, a person would begin to see positivity emerging in their own thinking and outlook, and would come to feel that Maa Basanti Ji had, through mere conversation, made them understand the importance of spirituality and awakened inquiry within them!"
            ]
        },
        "categoryTitle": {
            "hi": "गुरु-शिष्य संबंध",
            "en": "Guru-Disciple Relationship"
        },
        "excerpt": {
            "hi": "मनुष्य बुद्धि की क्षमताएँ असीम है। जिस विषय में वह नहीं जानता है, उसे भी सीख सकता है। केवल उस विषय के बारे में सीखने की इच्छा उसमें जागृत होने की देर है। दूसरा, मनुष्य के...",
            "en": "A human being's intellectual capacities are boundless. Even a subject they do not know, they can learn. All that is needed is for the wish to learn about that subject to awaken ..."
        }
    },
    {
        "id": "q11",
        "number": 11,
        "categoryId": "bhaiya-ji",
        "question": {
            "hi": "किस घटना ने भैया के जीवन को नई और सही दिशा दी? उस समय भैया का क्या चिंतन था और उन्होंने कौन सा संकल्प लिया? किस प्रकार भैया ने उस संकल्प को पूर्ण किया?",
            "en": "Which event gave Bhaiya's life a new and right direction? What was Bhaiya's reflection at that time, and what resolve did he make? How did Bhaiya fulfil that resolve?"
        },
        "answer": {
            "hi": [
                "मात्र 15 वर्ष की अल्पायु में भैया के पूज्य पिताजी के देहावसान की घटना ने भैया के जीवन को नई और सही दिशा प्रदान की। वे पहली बार श्मशान घाट गए और उन्होंने मृत्यु को नज़दीक से देखा। इस घटना ने उनको अन्दर तक झकझोर दिया। श्मशान में उन्हें दो ज्ञान का बोध हुआ-",
                "1. मनुष्य शरीर की क्षणभंगुरता एवं नश्वरता का ज्ञान।",
                "2. जीवन भर संचित की हुई भौतिक वस्तुएं मृत्योपरान्त हम साथ नहीं ले जा सकने का ज्ञान।",
                "श्मशान में अपने पिता की चिता की लपटों के समक्ष उन्होंने स्वयं से यह संकल्प लिया कि मैं इस भौतिक शरीर को चलायमान रखने वाली शक्ति को ढूंढ कर रहूँगा। जीवन पर्यंत वे उसी खोज में लगे रहे।",
                "यह कोई मसानिया वैराग्य नहीं था और इस संकल्प की पूर्ति के लिए वे अपने पूरे लगन, जोश, उत्साह, दृढ़ निश्चय व जुनून से उसमें लग गए। इस संदर्भ में साधु, संत, महंत, आचार्य, तांत्रिक, मांत्रिक सभी से मिले लेकिन कोई उन्हें सही मार्ग नहीं बता पाया। इन सब के बावजूद वे हताश, निराश नहीं हुए और दुगने उत्साह से संकल्प की पूर्ति में लग गए।",
                "उनकी सत्य की खोज तब परवान चढ़ी जब वे किले के आसपास भ्रमण करते हुए टेकरी की तरफ निकल पड़े और उन्हें टेकरी के उपर स्थित मंदिर से किसी अदृश्य शक्ति ने उपर चढ़ने को प्रेरित किया। अन्दर जगत्जननी माँ की सुन्दरतम मूर्ति स्थापित थी जहाँ उन्हें बैठते ही बेहद शांति व आनन्द का अनुभव हुआ और वे वहीं ध्यान मग्न हो गए। कालांतर में वही उनका साधना स्थल बना और वे ’माँ’ की आराधना में डूब गए।",
                "वहीं पर उनकी साधना कठोर से कठोरतम होती गई। वे उनके बच्चे बन पूरी तरह उनके प्रेम में साधनारत रहने लगे। कई कई दिन भूखे प्यासे दिन भर में सिर्फ एक पाव कच्चा पालक पर ही निर्वाह करते हुए ’माँ’ के उस जागृत मंदिर में भावविभोर होकर प्रेम में डूबे रहते एवं दर्शनार्थ प्रार्थना करते रहते। भैया जी ने निःस्वार्थ भाव से अपना अस्तित्व मिटा कर पूर्ण समर्पण कर जगत्जननी माँ से माँ-बेटे का सम्बन्ध स्थापित किया। ’माँ’ भी उनके सच्चे निःस्वार्थ निश्छल प्रेम से दूर न रह सकी और उन्हें साक्षात् दर्शन दिए। आगे चलकर ’माँ’ उनकी आध्यात्मिक गुरु भी बन गयीं एवं जनकल्याणार्थ आज के युग के अनुरूप दिव्य ज्ञान प्रदान किया। इस तरह भैया ने अपना संकल्प पूर्ण किया।"
            ],
            "en": [
                "At the young age of just 15, the passing of Bhaiya's revered father gave Bhaiya's life a new and right direction. He went for the first time to the cremation ground and saw death at close hand. This event shook him to his core. At the cremation ground he came to two realisations --",
                "1. The realisation of the transience and impermanence of the human body.",
                "2. The realisation that the material things gathered throughout life cannot be carried with us after death.",
                "At the cremation ground, before the flames of his father's pyre, he made a resolve to himself that he would seek out and find the power that keeps this physical body in motion. He remained engaged in that very search for the rest of his life.",
                "This was not some fleeting renunciation born of a cremation ground, and to fulfil this resolve he applied himself with his full dedication, passion, enthusiasm, firm determination and zeal. In this connection he met sadhus, saints, mahants, acharyas, tantrics and practitioners of mantra, but none could show him the right path. Despite all this he did not become despondent or disheartened, and applied himself to fulfilling his resolve with redoubled enthusiasm.",
                "His search for truth came to fruition when, wandering around the fort, he found himself drawn towards Tekri, and some unseen power inspired him to climb up to the temple situated atop it. Inside stood the most beautiful image of Jagatjanani Maa, and the moment he sat there he experienced boundless peace and joy, and fell into meditation right there. In time this became his place of sadhana, and he became absorbed in the worship of 'Maa'.",
                "There, his sadhana grew more and more rigorous. Becoming her child, he remained engaged in sadhana, wholly in her love. Going hungry and thirsty for many days at a stretch, surviving on just a quarter-pound of raw spinach a day, he would remain, overwhelmed with feeling, absorbed in love at that awakened temple of 'Maa', praying for her darshan. With a selfless spirit, Bhaiyaji erased his own existence, surrendered completely, and established a mother-son relationship with Jagatjanani Maa. 'Maa', too, could not remain distant from his true, selfless, guileless love, and gave him her direct darshan. In time 'Maa' also became his spiritual guru, and gave, for the welfare of humanity, divine knowledge suited to this age. In this way Bhaiya fulfilled his resolve."
            ]
        },
        "categoryTitle": {
            "hi": "भैया जी का जीवन और ज्ञान-यात्रा",
            "en": "Bhaiya Ji's Life, Philosophy & Sadhana Journey"
        },
        "excerpt": {
            "hi": "मात्र 15 वर्ष की अल्पायु में भैया के पूज्य पिताजी के देहावसान की घटना ने भैया के जीवन को नई और सही दिशा प्रदान की। वे पहली बार श्मशान घाट गए और उन्होंने मृत्यु को नज़दीक स...",
            "en": "At the young age of just 15, the passing of Bhaiya's revered father gave Bhaiya's life a new and right direction. He went for the first time to the cremation ground and saw deat..."
        }
    },
    {
        "id": "q12",
        "number": 12,
        "categoryId": "bhaiya-ji",
        "question": {
            "hi": "टेकरी माँ के मंदिर में भैया का दैवीय कृपा से किस व्यक्ति से मिलना हुआ? इस मिलन के महत्व को समझाइए।",
            "en": "At the Tekri Maa temple, through divine grace, whom did Bhaiya come to meet? Explain the importance of this meeting."
        },
        "answer": {
            "hi": [
                "जगत्जननी माँ के निःस्वार्थ एवं वात्सल्यमय प्रेम में आकण्ठ डूबे भैया जी अपना अधिकतर समय जगत्जननी माँ के समक्ष टेकरी में बिताते थे। उन्हें दुनियादारी, भौतिकता बिल्कुल नहीं सुहाती थी। वे माँ से प्रार्थना करते थे कि ’’मुझे मेरे बड़े भाई से मिला दो जो मेरा उत्तरदायित्व उठा सके और मैं हर पल, हर क्षण आपके स्मरण एवं प्यार में डूबा रह सकूं’’। वे 1963 में एक बार ’माँ’ से प्रार्थना कर ही रहे थे कि टेकरी का छोटा सा दरवाजा खोलकर एक व्यक्ति, श्री राम सिंह जी टाक, (रामजी) आये। उन्होंने भैया जी को देखते ही पहचान लिया कि इस बालक ने 1959 विवेकानन्द जयंती पर स्वामी विवेकानन्द के जीवन पर ऐसा ओजस्वी व हृदयस्पर्शी भाषण दिया था एवं उनकी भावपूर्ण अभिव्यक्ति इतनी प्रभावपूर्ण थी कि सभी श्रोता भावविभोर हो गए थे और प्रथम पुरस्कार इसी बालक को ही मिला था। प्रथम मिलन में ही उन्हें ऐसा लगा कि दोनों जन्म जन्म से परिचित हैं। लगभग 5 घंटे के ज्ञान चर्चा में कई गंभीर विषयों जैसे ब्रह्माण्ड का निर्माण, सृष्टि के रहस्य, महाविस्फोट का सिद्धान्त (बिग बैंग थयोरी), वैज्ञानिक उपलब्धियां, आध्यात्मिक चर्चाएं जैसे जगत्जननी माँं क्या हैं? दिव्य लोक कहाँ हैं? मानव जीवन का उद्देश्य? आदि पर गहन चर्चा हुई जिसे रामजी मंत्रमुग्ध हो सुनते रहे।",
                "भैया व रामजी की मुलाकातें एवं ज्ञान चर्चाएं आगे भी निरन्तर चलती रहीं। उनका भ्रातृ प्रेम बढ़ता रहा। भैया जी ने रामजी को अपना अग्रज माना और रामजी ने भैया जी को अपना अनुज। भैया नन्दकिशोर जी की ’माँ’ के प्रति अनन्य भक्ति, निष्काम कर्म, प्रेम-समर्पण द्वारा ’माँ’ के दर्शन प्राप्त करना ’माँ’ को ही गुरु बनाकर उनसे ज्ञान प्राप्त करना, आध्यात्मिक विलक्षणता, निःस्वार्थ सेवा भाव, प्रतिभा के धनी इत्यादि गुणों से इतने प्रभावित हुए कि उन्होंने भैया जी को अपना आध्यात्मिक पथप्रदर्शक मान लिया और उन्हें विशेष सम्बोधन दिया ’योगेश्वर किशोर’।",
                "आधुनिक वैज्ञानिक भौतिकवादी युग में भैया की रामजी से सतयुगी मित्रता का उदाहरण असम्भव सा ही है। कुछ समय बाद रामजी विदेश चले गए लेकिन इन दोनों मित्रों की निःस्वार्थ मित्रता प्रगाढ़ से प्रगाढ़तम होती गई, दूरियां उनके प्रेम में कुछ भी प्रभाव नहीं डाल सकी। विदेश जाने के बाद भी उनसे फोन तथा पत्र से सम्पर्क बना रहा। दूरियां आध्यात्मिक प्रेम को कम न कर और भी प्रगाढ़ बनाती हैं। दूर रहकर भी हमेशा उन्होंने एक दूसरे को एक दूसरे के करीब पाया।",
                "अंततः रामजी 03 जुलाई 2019 को इस भौतिक शरीर का त्याग कर अपने अनुज से मिलने दिव्य लोक प्रस्थान कर गये।"
            ],
            "en": [
                "Immersed up to his throat in the selfless, tender love of Jagatjanani Maa, Bhaiyaji spent most of his time before Jagatjanani Maa at Tekri. Worldliness and materialism did not appeal to him at all. He would pray to Maa, \"unite me with an elder brother who can bear my responsibilities, so that I may remain immersed, every moment, in your remembrance and love.\" In 1963, while he was once praying to 'Maa', a person, Shri Ram Singh Ji Taak (Ramji), opened the small door of Tekri and entered. The moment he saw Bhaiyaji he recognised him -- this was the boy who, on Swami Vivekananda's birth anniversary in 1959, had given such a spirited, heartfelt speech on Swami Vivekananda's life that his moving expression had so deeply affected every listener that they were overcome with emotion, and this very boy had won first prize. From their very first meeting it felt to them as though the two had known each other across lifetimes. In a knowledge-discussion of about five hours, they discussed in depth several profound subjects, such as the creation of the universe, the mysteries of creation, the Big Bang theory, scientific achievements, and spiritual matters such as who Jagatjanani Maa is, where the divine realms are, and the purpose of human life -- and Ramji listened to all of it, spellbound.",
                "The meetings and knowledge-discussions between Bhaiya and Ramji continued on afterwards too. Their brotherly love kept growing. Bhaiyaji regarded Ramji as his elder brother, and Ramji regarded Bhaiyaji as his younger brother. Ramji was so struck by Nandkishore Ji Bhaiya's singular devotion to 'Maa', his selfless action, his attaining Maa's darshan through love and surrender, his taking 'Maa' herself as his guru and receiving knowledge from her, his spiritual uniqueness, his spirit of selfless service, and his gifted talent, that he came to regard Bhaiyaji as his own spiritual guide, and gave him the special title of 'Yogeshwar Kishore'.",
                "In this modern, scientific, materialistic age, an example like Bhaiya's Satyuga-like friendship with Ramji seems almost impossible. After some time Ramji moved abroad, but the selfless friendship between these two friends only grew deeper and deeper -- distance could not diminish their love in any way. Even after going abroad, contact was maintained by phone and letter. Distance, rather than weakening spiritual love, deepens it further. Even while apart, they always found each other close.",
                "In the end, on 3 July 2019, Ramji gave up this physical body and departed for the divine realm, to meet his younger brother."
            ]
        },
        "categoryTitle": {
            "hi": "भैया जी का जीवन और ज्ञान-यात्रा",
            "en": "Bhaiya Ji's Life, Philosophy & Sadhana Journey"
        },
        "excerpt": {
            "hi": "जगत्जननी माँ के निःस्वार्थ एवं वात्सल्यमय प्रेम में आकण्ठ डूबे भैया जी अपना अधिकतर समय जगत्जननी माँ के समक्ष टेकरी में बिताते थे। उन्हें दुनियादारी, भौतिकता बिल्कुल नहीं...",
            "en": "Immersed up to his throat in the selfless, tender love of Jagatjanani Maa, Bhaiyaji spent most of his time before Jagatjanani Maa at Tekri. Worldliness and materialism did not a..."
        }
    },
    {
        "id": "q13",
        "number": 13,
        "categoryId": "bhaiya-ji",
        "question": {
            "hi": "भैया की साधना लीक से हटकर किस प्रकार मौलिक थी?",
            "en": "In what way was Bhaiya's sadhana original, departing from the conventional path?"
        },
        "answer": {
            "hi": [
                "साधारणतया साधक भौतिकवाद की प्राप्ति के लिए, शक्ति व सिद्धि प्राप्ति के लिए मंत्र, तंत्र, शक्ति रूपेण साधना करते हैं। लेकिन भैया जी ने वात्सल्य रूपेण साधना की, ’माँ’ से विशुद्ध प्रेम- केवल ’माँ’ के प्रेम के लिए साधना।",
                "माँ सर्वशक्तिमान है, महान् है, तेज प्रकाशपुंज है, सब कुछ है, परन्तु माँ, माँ भी है। माँ एक प्रेम के सूर्य के समान है हम उसके बच्चे हैं और अगर हम सच्चा प्रेम माँ से करें तो कोई भी शक्ति हमारी आत्मा से निकली प्यार की शक्ति को नहीं रोक सकती।",
                "’माँ’ का हृदय अति कोमल है, वह सिर्फ एक बच्चे के हृदय से निकले उसके प्रति विशुद्ध प्रेमपूर्ण पुकार से ही पिघलता है।",
                "भैया आध्यात्मिक उत्थान के लिये भक्ति मार्ग पर ही जोर देते थे। ’माँ’ के प्रेम में रोना ही ’माँ’ को प्रसन्न करने का एकमात्र तरीका है। सच्चे हृदय से बहाये गये दो आँसुओं के प्रेम में बंधी माँ कच्चे धागे से खिंची चली आती है।",
                "’माँ’-बच्चे का सम्बन्ध पूर्णरूपेण समर्पण, बच्चे में कोई भौतिक स्वार्थ सिद्धि नहीं, कोई आकांक्षा नहीं, कोई इच्छा नहीं, सिर्फ ’माँ’ के प्रेम में भावविभोर होकर रोने का आनन्द ही वह लेता है।",
                "भैया नें एक मौलिक साधना विकसित की, इष्टदेव से सम्बन्ध स्थापित करना। भैया ने जगत्जननी माँ से ’माँ’ के रूप में मौलिक प्रेम-समर्पण साधना की। उनके लिये सिद्धियाँ, शक्तियाँ गौण थीं, सम्बन्ध मुख्य थे। शुद्ध ’माँ’ बेटे का सम्बन्ध जिसमें साधक बच्चा बनकर ’माँ’ को पुकारता है और ’माँ’ की इच्छा पर सर्वथा आधारित होकर ’माँ’ के बताये कर्त्तव्यों का आनन्दपूर्वक पालन करता है।",
                "भैया ने जगत्जननी ’माँ’ को न केवल अपने चैतन्य शरीर की ’माँ’ माना बल्कि उन्हें भौतिक शरीर की ’माँ’ भी माना।",
                "अंततः ’माँ’ बच्चे की पुकार सुनकर अपने को रोक नहीं सकीं और उन्हें दर्शन दिए और उन्हें पुत्र स्वीकार किया। भैया के प्रेम में बन्धित ’माँ’ स्वयं मणिद्वीप में, भौतिक जगत् में उनके साथ आकर रहने लग गईं और वे ही उसे संचालित करने लगीं।"
            ],
            "en": [
                "Ordinarily, seekers practise sadhana in the form of power -- through mantra and tantra -- to attain worldly things, power and accomplishment. But Bhaiyaji practised sadhana in the form of vatsalya, tender maternal love -- pure love for 'Maa', sadhana purely for the love of 'Maa'.",
                "Maa is omnipotent, is great, is a mass of radiant light, is everything -- but Maa is also, simply, a mother. Maa is like a sun of love; we are her children, and if we love Maa truly, no power can hold back the power of love that flows from our soul.",
                "'Maa's' heart is exceedingly tender; it melts only at the pure, loving call arising from a child's heart.",
                "Bhaiya laid emphasis, for spiritual upliftment, on the path of devotion alone. Weeping in love for 'Maa' is the only way to please 'Maa'. Bound by the love of two tears shed from a true heart, Maa comes drawn along, as if pulled by a fine thread.",
                "The 'Maa'-child relationship is one of complete surrender -- with no worldly self-interest in the child, no ambition, no desire -- only the joy of weeping, overwhelmed, in love for 'Maa'.",
                "Bhaiya developed an original sadhana -- establishing a relationship with one's chosen deity. Bhaiya practised an original sadhana of love and surrender with Jagatjanani Maa, in the form of 'Maa'. For him, accomplishments and powers were secondary; the relationship was primary. A pure mother-child relationship, in which the seeker becomes a child calling out to 'Maa', and, resting entirely on 'Maa's' will, joyfully fulfils the duties 'Maa' has shown.",
                "Bhaiya held Jagatjanani 'Maa' not only as the mother of his conscious body, but also as the mother of his physical body.",
                "In the end, 'Maa', hearing her child's call, could not hold herself back, and gave him her darshan and accepted him as her son. Bound by Bhaiya's love, 'Maa' herself came to live with him at Manidweep, in the material world, and began directing it herself."
            ]
        },
        "categoryTitle": {
            "hi": "भैया जी का जीवन और ज्ञान-यात्रा",
            "en": "Bhaiya Ji's Life, Philosophy & Sadhana Journey"
        },
        "excerpt": {
            "hi": "साधारणतया साधक भौतिकवाद की प्राप्ति के लिए, शक्ति व सिद्धि प्राप्ति के लिए मंत्र, तंत्र, शक्ति रूपेण साधना करते हैं। लेकिन भैया जी ने वात्सल्य रूपेण साधना की, ’माँ’ से वि...",
            "en": "Ordinarily, seekers practise sadhana in the form of power -- through mantra and tantra -- to attain worldly things, power and accomplishment. But Bhaiyaji practised sadhana in t..."
        }
    },
    {
        "id": "q14",
        "number": 14,
        "categoryId": "bhaiya-ji",
        "question": {
            "hi": "भैया ने आज के युग में अध्यात्म के क्षेत्र में क्या प्रतिपादित किया और उसका क्या महत्व है?",
            "en": "What did Bhaiya establish in the field of spirituality for this age, and what is its importance?"
        },
        "answer": {
            "hi": [
                "भैया ने आज के युग में अध्यात्म के क्षेत्र में यह प्रतिपादित किया कि-",
                "जगत्जननी माँ हैं, साक्षात् दर्शन देती हैं और हम उनसे मिल सकते हैं।",
                "’माँ’ और बच्चे के अनूठे निःस्वार्थ प्रेम सम्बन्ध स्थापित किये जा सकते हैैं।",
                "भैया ने चैतन्य जगत् की सत्ता को निर्विवाद प्रतिपादित किया और ब्रह्माण्ड के रहस्यों को उजागर किया।",
                "दो शरीर की अवधारणा दी- एक भौतिक शरीर जो माँ-बाप प्रदत्त है, दूसरा चैतन्य शरीर जो ईश्वर प्रदत्त है और भौतिक शरीर को चलाएमान रखता है। भैया जी द्वारा दी गई बुद्धि-विवेक पर आधारित योग साधना आध्यात्मिक क्षेत्र में एक क्रांतिकारी प्रयोग है जिसके माध्यम से व्यक्ति विचारों में परिवर्तन, देखने के दृष्टिकोण में बदलाव और सकारात्मक सोच के द्वारा बिना किसी कठोर तप, तपस्या, वैराग्य के, भौतिक जीवन को आनन्दित कर सकता है और साथ-ही-साथ आध्यात्मिक प्रगति कर सकता है।",
                "भैया जी ने पृथवी पर जड़ भौतिक कणों से बने शरीर के नश्वर होते हुए भी उसकी आवश्यकता का महत्व बताया क्योंकि अगर भौतिक शरीर नहीं होगा तो चैतन्य शरीर जो ईश्वरीय अंश है और अपनी उन्नति करने मनुष्य से देवत्व की विकास यात्रा के लिए आया है, किस में उतरेगा? भौतिक शरीर ही चैतन्य शरीर को पृथवी पर स्थायित्व देता है अन्यथा वह पृथवी पर ठहर ही नहीं सकता। पृथवी पर भौतिक शरीर बहुत ही महत्वपूर्ण है। इसलिए इससे सम्बन्धित सभी आवश्यकताएं महत्वपूर्ण हैं जैसे शरीर का स्वस्थ होना, घर, परिवार, कानून व्यवस्था, समाज से आपसी सौहार्दपूर्ण सम्बन्धों की जानकारी होना आवश्यक है जिससे सामंजस्य बिठाते हुए चैतन्य शरीर ईश्वर से निर्विघ्नता से जुड़ सके। चैतन्य शरीर एक ओर तो भौतिकवाद में भौतिक शरीर को चलाएमान रखने के लिए चैतन्य ऊर्जा देता है तथा दूसरी ओर ईश्वर से सम्बन्ध बनाने के लिए चैतन्यता का उपयोग करता है अर्थात भौतिक जीवन एवं चैतन्य जीवन दोनों में उन्नति का माध्यम चैतन्य शरीर ही है।",
                "बुद्धि, विवेक, इच्छाएं, आकांक्षाएं सभी चैतन्य शरीर का अंश हैं। भौतिक शरीर तो चैतन्य शरीर के कार्यकलापों को प्रदर्शित करता है। भैया ने आज के युग में अध्यात्म के क्षेत्र में यह प्रतिपादित किया कि यदि साधक में जिज्ञासा, जुनून, संकल्प, दृढ़निश्चय, निःस्वार्थ प्रेम एवं मार्गदर्शक में अटूट आस्था विश्वास हो तो वह निश्चित रूप से अपने जीवन के कल्याण का लक्ष्य प्राप्त कर सकता है।"
            ],
            "en": [
                "In the field of spirituality, for this age, Bhaiya established that --",
                "Jagatjanani Maa exists, gives direct darshan, and we can meet her.",
                "A unique, selfless relationship of love can be established between 'Maa' and child.",
                "Bhaiya established, beyond dispute, the reality of the conscious realm, and brought to light the mysteries of the universe.",
                "He gave the concept of two bodies -- one the physical body given by one's parents, the other the conscious body given by God, which keeps the physical body in motion. The yoga sadhana based on intellect and discernment that Bhaiyaji gave is a revolutionary experiment in the spiritual field, through which a person, through a change in thought, a shift in outlook and positive thinking, can bring joy to their worldly life -- without any severe austerity, penance or renunciation -- while advancing spiritually at the same time.",
                "Bhaiyaji explained the importance of the body's need on earth, made though it is of inert physical particles and though it is transient -- because if there were no physical body, into what would the conscious body, which is a portion of God and has come for its own advancement, on the journey from humanity towards divinity, descend? It is the physical body alone that gives the conscious body stability on earth; otherwise it could not remain here at all. The physical body is exceedingly important on earth. Hence everything related to it is important -- the body's health, home, family, awareness of law and order, and cordial relations with society -- all of these are necessary, so that, bringing them into harmony, the conscious body may connect with God without hindrance. The conscious body, on one hand, gives conscious energy to keep the physical body in motion within materialism, and on the other hand, uses that very consciousness to build a relationship with God -- that is, the conscious body alone is the means of advancement in both worldly life and conscious life.",
                "Intellect, discernment, desires and aspirations are all part of the conscious body. The physical body merely displays the activities of the conscious body. Bhaiya established, in the field of spirituality for this age, that if a seeker has inquiry, passion, resolve, firm determination, selfless love, and unwavering faith and trust in their guide, they can certainly attain the goal of their life's welfare."
            ]
        },
        "categoryTitle": {
            "hi": "भैया जी का जीवन और ज्ञान-यात्रा",
            "en": "Bhaiya Ji's Life, Philosophy & Sadhana Journey"
        },
        "excerpt": {
            "hi": "भैया ने आज के युग में अध्यात्म के क्षेत्र में यह प्रतिपादित किया कि- जगत्जननी माँ हैं, साक्षात् दर्शन देती हैं और हम उनसे मिल सकते हैं। ’माँ’ और बच्चे के अनूठे निःस्वार्थ...",
            "en": "In the field of spirituality, for this age, Bhaiya established that --"
        }
    },
    {
        "id": "q15",
        "number": 15,
        "categoryId": "bhaiya-ji",
        "question": {
            "hi": "भैया जी के ज्ञान में किन तीन विचारधाराओं को प्रमुखता दी गई है? स्पष्ट कीजिए।",
            "en": "Which three lines of thought are given prominence in Bhaiya's knowledge? Explain."
        },
        "answer": {
            "hi": [
                "जगत्जननी माँ द्वारा सत्य, शाश्वत्, सार्वभौमिक ज्ञान जो भैया जी को मिला उसमें निम्नलिखित तीन चीजें प्रमुख है।",
                "’माँ’ हैं और दर्शन देती हैं और उनसे सम्बन्ध बनाये जा सकते हैं। जगत्जननी माँ से निःस्वार्थ प्रेम द्वारा उन्हें चैतन्य शरीर के माता-पिता समझकर उनसे सम्बन्ध स्थापित किये जा सकते हैं अर्थात शक्तिरूपेण साधना न कर मातृरूपेण साधना कर ’माँ’ को प्रसन्न किया जा सकता है।",
                "दो शरीर की अवधारणा - मनुष्य शरीर दो शरीर का संयोजन है। भौतिक शरीर जो उसके भौतिक माता-पिता ने दिया है और दूसरा, चैतन्य शरीर, ईश्वर का अंश, जो पृथवी पर भौतिक शरीर धारण कर स्वयं में ईश्वरीय सद्गुणों का विकास कर मनुष्य से देवत्व की ओर अग्रसर होने के लिए आया है।",
                "भौतिक शरीर का महत्व बताया है कि भौतिक शरीर के बिना चैतन्य शरीर पृथवी पर स्थिर नहीं रह सकता क्योंकि भौतिक शरीर जड़ तत्वों से बना है जो पृथवी के गुरुत्वाकर्षण के कारण पृथवी पर स्थिर रह सकता है। भौतिक शरीर में रहकर भौतिकता करनी भी उतनी ही आवश्यक है जितना चैतन्य शरीर को उन्नत करना। भौतिक शरीर को स्वस्थ रखना आवश्यक है, दोनों एक दूसरे के पूरक हैं।",
                "बुद्धि-विवेक के सही उपयोग व विकास द्वारा विचारों में व देखने के दृष्टिकोण में सकारात्मक परिवर्तन व सद्गुणों का विकास कर पाना स्वयं सिद्ध है।"
            ],
            "en": [
                "In the true, eternal, universal knowledge that Bhaiyaji received from Jagatjanani Maa, the following three things are prominent.",
                "'Maa' exists, gives darshan, and a relationship can be formed with her. Through selfless love for Jagatjanani Maa, taking her as the parent of one's conscious body, a relationship can be established with her -- that is, 'Maa' can be pleased not through sadhana in the form of power, but through sadhana in the form of a mother-child bond.",
                "The concept of two bodies -- the human body is a union of two bodies. One is the physical body, given by one's physical parents, and the other is the conscious body, a portion of God, which has come, taking up a physical body on earth, to develop within itself divine virtues and advance from humanity towards divinity.",
                "The importance of the physical body has been shown -- that without the physical body, the conscious body cannot remain stable on earth, because the physical body is made of inert elements, which, because of earth's gravity, can remain stable upon it. Engaging in worldly life while dwelling in the physical body is just as necessary as advancing the conscious body. Keeping the physical body healthy is necessary; the two complement each other.",
                "That through the right use and development of intellect and discernment, a positive change in thought and outlook, and the development of virtue, is achievable is self-evident."
            ]
        },
        "categoryTitle": {
            "hi": "भैया जी का जीवन और ज्ञान-यात्रा",
            "en": "Bhaiya Ji's Life, Philosophy & Sadhana Journey"
        },
        "excerpt": {
            "hi": "जगत्जननी माँ द्वारा सत्य, शाश्वत्, सार्वभौमिक ज्ञान जो भैया जी को मिला उसमें निम्नलिखित तीन चीजें प्रमुख है। ’माँ’ हैं और दर्शन देती हैं और उनसे सम्बन्ध बनाये जा सकते हैं...",
            "en": "In the true, eternal, universal knowledge that Bhaiyaji received from Jagatjanani Maa, the following three things are prominent."
        }
    },
    {
        "id": "q17",
        "number": 17,
        "categoryId": "bhaiya-ji",
        "question": {
            "hi": "आधुनिक भौतिकवादी उपभोक्तावादी समाज में भैया के ज्ञान की प्रासंगिकता समझाएं।",
            "en": "Explain the relevance of Bhaiya's knowledge in today's materialistic, consumerist society."
        },
        "answer": {
            "hi": [
                "आज के भौतिकवादी युग में प्राचीन काल की साधना पद्धति से चलना प्रायः कठिन लगता है जैसे कठिन जप, तप, त्याग, वैराग्य सामानय व्यक्ति के लिये सम्भव नहीं है इसलिये वर्तमान में व्यक्ति अध्यात्म से विमुख होता जा रहा है। आज के भौतिकवादी वैज्ञानिक चकाचौंध से पूर्ण युग में लोगों को न तो इतना समय है, न ही अध्यात्म में रूचि। विज्ञान ने इतने सुख साधन दे दिए हैं कि व्यक्ति उसी में भटकता हुआ सुख की तलाश में लगा रहता है क्योंकि भौतिकता दृश्यमान है जबकि अध्यात्म अदृश्य है और उसकी प्रामाणिकता सिद्ध करने के लिये तर्कसंगत ज्ञान उपलब्ध नहीं है।",
                "आज के वैज्ञानिक, भौतिकवादी युग में जीवन मकड़ जाल, अंधी दौड़, प्रतिस्पर्धा एवं अस्तित्व के लिये संघर्ष बन कर रह गया है। भौतिक सुख-सुविधायें व भोग-विलासिता मनुष्य जीवन का एक मात्र उद्देश्य बन गया है और अध्यात्म के प्रति कोई रूचि नहीं रही। एक गलत धारणा बन गई है कि अध्यात्म वृद्धावस्था में ही किया जाता है, जीवन में इस आयु के पहले इसका न महत्व है न स्थान। इसके फलस्वरुप चारों तरफ असंतोष, भय, घृणा, अशांति व्याप्त हो गयी है और भौतिक चीज़ों का संग्रह जीवन का एकमात्र उद्देश्य रह गया है। एक विडंबना है कि अधिकांश व्यक्ति सोचते ही नहीं कि यह सब नश्वर है, छोड़कर जाना है और ईश्वर को केवल अपनी मनोकामना एवं महत्वाकांक्षा पूर्ण करने का साधन समझते हैं।",
                "भैया के ज्ञान द्वारा इस अज्ञानता पूर्ण माहौल में चैतन्य शरीर, ’माँ’ के अस्तित्व पर विश्वास और अध्यात्म के प्रति जिज्ञासा पैदा हो जाती है। उसे लगता है कि इस क्षेत्र में ऊर्जा लगाना व्यर्थ की मेहनत नहीं है। यह धारणा कमज़ोर पड़ जाती है कि कलयुग में ईश्वर के दर्शन करना एवं उनसे सम्बन्ध स्थापित करना सम्भव नहीं है। वास्तव में अध्यात्म प्रारम्भ करने की कोई उम्र नहीं होती। भैया ने विज्ञान के आधार पर यह सिद्ध करके बताया है कि ईश्वर हैं, चैतन्य शक्तियाँ हैं एवं उनके लोक हैं; यह शास्त्रों और पुराणों में वर्णित सभी कुछ कपोल कल्पना नहीं है। साधना द्वारा उनकी कृपा प्राप्त की जा सकती है जिससे जीवन प्रेम, आनन्द से सराबोर हो जाता है। अपने इष्टदेव से प्रेम, अटूट श्रद्धा एवं विश्वास के द्वारा लक्ष्य को निसंदेह प्राप्त किया जा सकता है। मृत्यु के बाद जीवन है और उसकी तैयारी अविलम्ब शुरू कर देनी चाहिए। अविलम्ब, क्योंकि मृत्यु तो निश्चित है और वह कभी भी आ सकती है। अध्यात्म के लिए किए गए प्रयास कभी व्यर्थ नहीं जाते। मनुष्य जीवन का उद्देश्य केवल भौतिक उपलब्धियाँ प्राप्त करना नहीं है, वे तो सहायक हैं। वास्तविक उपलब्धियाँ अजर, अमर, अविनाशी चैतन्य शरीर को उन्नत करना और इष्टदेव से सम्बन्ध बनाना है।",
                "उन्होंने दो शरीर की अवधारणा बताई चैतन्य एवं भौतिक। इसलिए संसार में आवश्यकतानुसार भौतिकवाद करते हुए समय की बचत कर ईश्वर से भी सम्बन्ध जोड़ना है क्योंकि ईश्वर उसके माँ-बाप हैं। मृत्यु के उपरान्त उसे अपने जीवन काल में किए कर्मों का ग्राफ लेकर जाना होता है।",
                "भैया जी ने बहुत ही सरल ’बुद्धि-विवेक योग साधना पद्धति’ दी है जो कि दिव्य, सत्य, शाश्वत्, सात्विक व सार्वभौमिक, व्यावहारिक, सरल, सहज, जीवन के प्रत्येक क्षेत्र में कारगर, दिव्य ज्ञान पर आधारित है जो कि आज के वैज्ञानिक भौतिकवादी युग के अनुकूल एवं महत्वपूर्ण भी है। आज के उपभोक्तावादी युग में समय की कमी से हम कठिन व लम्बे समय तक ध्यान व साधना कर नहीं पाते हैं तो सिर्फ विचारों का परिवर्तन कर सकारात्मक विचारधारा अपनाकर सकारात्मक दृष्टिकोण बनाकर हम भौतिक जीवन में आनन्द, खुशी व शांति ला सकते हैं। ’बुद्धि-विवेक योग साधना’ हम 24 घंटे कर सकते हैं क्योंकि स्वयं को ही करना है, स्वयं की सोच को ही बदलना है। सकारात्मक सोच अर्थात ईश्वर की ओर बढ़ना और नकारात्मक सोच अर्थात केवल भौतिकता के दलदल में फंस कर अवनत होना। यह पद्धति बहुत ही सरल व प्रभावशाली है। इसे अपनाकर कोई भी अपने भौतिकवाद को व्यवस्थित कर, अध्यात्म में भी आनन्द, शांति व स्थायी आंतरिक खुशी प्राप्त कर सकता है।"
            ],
            "en": [
                "In today's materialistic age, following the ancient methods of sadhana often seems difficult -- rigorous chanting, austerity, renunciation and asceticism are not possible for an ordinary person, and so, at present, people are increasingly turning away from spirituality. In today's age, so full of materialistic, scientific dazzle, people have neither the time nor the interest for spirituality. Science has given so many comforts that a person keeps wandering, lost, in the very search for happiness -- because materialism is visible, while spirituality is invisible, and no reasoned knowledge is readily available to prove its authenticity.",
                "In today's scientific, materialistic age, life has been reduced to a web of illusion, a blind race, competition and a struggle for existence. Material comforts and indulgence have become the sole purpose of human life, and there is no interest left towards spirituality. A mistaken belief has formed that spirituality is something practised only in old age -- that before that age it has neither importance nor place in life. As a result, dissatisfaction, fear, hatred and unrest have spread on all sides, and the accumulation of material things has remained the sole purpose of life. It is an irony that most people do not even stop to think that all of this is transient, that it must be left behind, and they see God merely as a means to fulfil their own wishes and ambitions.",
                "Through Bhaiya's knowledge, in this atmosphere full of ignorance, faith arises in the existence of the conscious body and 'Maa', and inquiry towards spirituality is born. It comes to feel that applying one's energy in this field is not wasted effort. The belief that it is not possible, in Kalyuga, to attain darshan of God and establish a relationship with them, weakens. In truth, there is no age at which spirituality must begin. Bhaiya has proven, on a scientific footing, that God exists, that conscious powers exist, and that their realms exist -- that everything described in the scriptures and Puranas is not mere fancy. Through sadhana, their grace can be attained, through which life becomes filled with love and joy. Through love, unwavering reverence and faith in one's chosen deity, the goal can undoubtedly be attained. There is life after death, and preparation for it should begin without delay. Without delay, because death is certain, and it can come at any time. Efforts made towards spirituality are never wasted. The purpose of human life is not merely to attain material achievements -- these are only aids. The real achievement is to uplift the ageless, deathless, imperishable conscious body, and to build a relationship with one's chosen deity.",
                "He gave the concept of two bodies, conscious and physical. So, engaging with materialism in the world as needed, saving time, one should also build a relationship with God, because God is one's true parent. After death, one must carry with them the record of the deeds done during one's lifetime.",
                "Bhaiyaji has given a very simple 'Buddhi-Vivek Yog Sadhna' method, which is divine, true, eternal, wholesome, universal, practical, simple, natural, effective in every field of life, and grounded in divine knowledge -- suited to, and important for, today's scientific, materialistic age. In today's consumerist age, with its shortage of time, we are unable to undertake difficult, prolonged meditation and sadhana -- but simply by changing our thoughts, adopting a positive line of thinking and a positive outlook, we can bring joy, happiness and peace into worldly life. We can practise 'Buddhi-Vivek Yog Sadhna' for all 24 hours of the day, because it is oneself who must do it, and it is one's own thinking that must change. Positive thinking means moving towards God, and negative thinking means simply sinking further into the mire of materialism. This method is very simple and effective. By adopting it, anyone can bring order to their worldly life while also attaining joy, peace and lasting inner happiness in spirituality."
            ]
        },
        "categoryTitle": {
            "hi": "भैया जी का जीवन और ज्ञान-यात्रा",
            "en": "Bhaiya Ji's Life, Philosophy & Sadhana Journey"
        },
        "excerpt": {
            "hi": "आज के भौतिकवादी युग में प्राचीन काल की साधना पद्धति से चलना प्रायः कठिन लगता है जैसे कठिन जप, तप, त्याग, वैराग्य सामानय व्यक्ति के लिये सम्भव नहीं है इसलिये वर्तमान में व...",
            "en": "In today's materialistic age, following the ancient methods of sadhana often seems difficult -- rigorous chanting, austerity, renunciation and asceticism are not possible for an..."
        }
    },
    {
        "id": "q18",
        "number": 18,
        "categoryId": "bhaiya-ji",
        "question": {
            "hi": "एक 12 वर्षीय किषोर की हस्तलिखित डायरी की प्रामाणिकता एवं महत्व को समझाइये।",
            "en": "Explain the authenticity and importance of a 12-year-old boy's handwritten diary."
        },
        "answer": {
            "hi": [
                "12 वर्षीय किशोर कच्ची उम्र का होता है। वह सच्चे हृदय का सरल सीधा होता है। वह जो देखता है, अनुभव करता है, बिना किसी लाग लपेट के, बिना किसी फेरबदल के लिखता है। लिखते समय उसका हृदय आईने की तरह साफ होता है। वह दुनियादारी की दूषित विचारधारा से अछूता होता है। समय की परिस्थिति से अनुभव की गई अनुभूतियाँ उस समय, उसकी बनती विचारधारा डायरी में कलमबद्ध करता है और जो भी उसके मन में कुछ करने के संकल्प बनते हैं उसे भी वह पूरी ईमानदारी से लिखता है। किशोरावस्था में लिखी गई डायरी उनके जीवन का निर्दोष प्रमाणित दस्तावेज है, उनके चिंतन-मनन, सोच, जीवन के दृष्टिकोण, लक्ष्य आदि के बारे में उनके विचारों का सही प्रतिबिंब है।",
                "सार रूप में भैया की डायरी वर्तमान भौतिकवादी युग में अध्यात्म के क्षेत्र में प्रकाश स्तम्भ है। इसके लिए मानवता सदैव उनकी ऋणी रहेगी।",
                "कोई भी व्यक्ति अपनी व्यक्तिगत डायरी किसी को प्रभावित करने के लिए नहीं लिखता। जो व्यक्ति अंतर्मुखी होता है वह दूसरों के आमने-सामने विचार प्रकट करने के बजाय लेखन को अधिक स्वाभाविक और सुविधाजनक महसूस करता है। इसके द्वारा वह निर्भीकता से अपना चिंतन करता है व अपना लक्ष्य निर्धारित करता है।"
            ],
            "en": [
                "A 12-year-old boy is of a tender age. He is true of heart, simple and straightforward. Whatever he sees and experiences, he writes without pretence, without alteration. As he writes, his heart is as clear as a mirror. He is untouched by the corrupted thinking of worldly affairs. The feelings experienced according to the circumstances of the time, and the thinking taking shape within him at that time, he sets down in his diary, and whatever resolves form in his mind to do something, he writes those too with complete honesty. A diary written in one's teenage years is an innocent, authentic document of one's life -- a true reflection of one's contemplation, thinking, outlook on life, goals and more.",
                "In essence, Bhaiya's diary is a lighthouse in the field of spirituality in today's materialistic age. Humanity will always remain indebted to him for this.",
                "No one writes their personal diary to influence anyone. A person who is introverted finds writing more natural and comfortable than expressing their thoughts face to face with others. Through it, they reflect fearlessly and set their own goal."
            ]
        },
        "categoryTitle": {
            "hi": "भैया जी का जीवन और ज्ञान-यात्रा",
            "en": "Bhaiya Ji's Life, Philosophy & Sadhana Journey"
        },
        "excerpt": {
            "hi": "12 वर्षीय किशोर कच्ची उम्र का होता है। वह सच्चे हृदय का सरल सीधा होता है। वह जो देखता है, अनुभव करता है, बिना किसी लाग लपेट के, बिना किसी फेरबदल के लिखता है। लिखते समय उस...",
            "en": "A 12-year-old boy is of a tender age. He is true of heart, simple and straightforward. Whatever he sees and experiences, he writes without pretence, without alteration. As he wr..."
        }
    },
    {
        "id": "q19",
        "number": 19,
        "categoryId": "bhaiya-ji",
        "question": {
            "hi": "भैया की दिव्य डायरी का नियमित पठन व मनन व्यक्ति की आध्यात्मिक यात्रा में किस प्रकार सहायक हो सकता है?",
            "en": "How can regular reading and reflection on Bhaiya's divine diary help a person's spiritual journey?"
        },
        "answer": {
            "hi": [
                "भैया की दिव्य डायरी उनकी प्रेरणादायी अध्यात्म यात्रा का जीवंत प्रमााण है-आदि से अंत तक, सत्य की खोज से सत्य की प्राप्ति तक! भैया को जगत्जननी माँ के साक्षात् दर्शन प्राप्त हुए- यह दिव्यतम क्षण भी उनकी हस्तलिखित डायरी में एक साक्ष्य के रुप में संजोये हुए हैं। उनकी डायरी का नियमित पठन-मनन हमारी आध्यात्मिक यात्रा में सहायक भी हैं और प्रेरणास्पद भी।",
                "भैया जी की डायरी का जब भी हम पठन करते हैं, तब भैया जी का जुनून, ’माँ’ के प्रति निःस्वार्थ प्रेम, श्रद्धा-विश्वास, संधर्ष में भी साहस, इत्यादि जानकर हमारे अन्दर एकदम उत्साह, उमंग, प्रफुल्लता एवं आंतरिक खुशी उत्पन्न हो जाती है। हम स्वयं को अत्यन्त ही भाग्यशाली समझते हैं कि भैया जी ने स्वयं इतने कष्ट सहकर निःस्वार्थ प्रेम से जगत्जननी माँ को इतना प्रसन्न कि ’माँ’ ने उन्हें सत्य, शाश्वत, सार्वभौमिक ज्ञान प्रदान किया और भैया ने जनकल्याण के लिए एक सरल, सहज अध्यात्म रास्ता एवं धारण करने योग्य ज्ञान संसार को दिया। इसको पढ़ने से हमारा संकल्प और दृढ़ होता है और लक्ष्य स्पष्ट से स्पष्टतर होता जाता है। इस राह पर दृढ़ विश्वास के साथ निरन्तर चलते रहने की प्रेरणा मिलती है।",
                "डायरी में लिखा गया हर शब्द सत्य है, प्रामाणिक है, उद्वेलित करता है, मानव हृदय को अध्यात्म के लिए प्रेरित करता है, चिंतन के बाध्य करता है, एक आदर्श है, उसमें एक पूरी पद्धति है, ’माँ’ के प्रति निःस्वार्थ प्रेम एवं अटूट आस्था-विश्वास का सजीव चित्रण है।"
            ],
            "en": [
                "Bhaiya's divine diary is a living testament to his inspiring spiritual journey -- from beginning to end, from the search for truth to the attainment of truth! Bhaiya's receiving of Jagatjanani Maa's direct darshan -- this most divine moment too is preserved as evidence in his handwritten diary. Regular reading and reflection on his diary is both helpful and inspiring for our own spiritual journey.",
                "Whenever we read Bhaiyaji's diary, learning of his passion, his selfless love for 'Maa', his faith and trust, his courage even in struggle, and so on, an immediate enthusiasm, zeal, delight and inner happiness arises within us. We consider ourselves exceedingly fortunate that Bhaiyaji himself endured so much hardship and, through selfless love, so pleased Jagatjanani Maa that 'Maa' granted him true, eternal, universal knowledge, and Bhaiya gave the world, for the welfare of humanity, a simple, natural spiritual path and knowledge worthy of being held onto. Reading this strengthens our resolve further, and our goal becomes clearer and clearer. It inspires us to keep walking this path steadily, with firm faith.",
                "Every word written in the diary is true, authentic, stirring; it inspires the human heart towards spirituality, compels reflection, is an ideal, contains within it a complete method, and is a living portrait of selfless love and unwavering faith and trust towards 'Maa'."
            ]
        },
        "categoryTitle": {
            "hi": "भैया जी का जीवन और ज्ञान-यात्रा",
            "en": "Bhaiya Ji's Life, Philosophy & Sadhana Journey"
        },
        "excerpt": {
            "hi": "भैया की दिव्य डायरी उनकी प्रेरणादायी अध्यात्म यात्रा का जीवंत प्रमााण है-आदि से अंत तक, सत्य की खोज से सत्य की प्राप्ति तक! भैया को जगत्जननी माँ के साक्षात् दर्शन प्राप्त...",
            "en": "Bhaiya's divine diary is a living testament to his inspiring spiritual journey -- from beginning to end, from the search for truth to the attainment of truth! Bhaiya's receiving..."
        }
    },
    {
        "id": "q39",
        "number": 39,
        "categoryId": "bhaiya-ji",
        "question": {
            "hi": "भैया के प्रमुख साधना स्थलों के नाम लिखिए और संक्षेप में प्रत्येक का महत्व बताइए।",
            "en": "Name Bhaiya's principal places of sadhana, and briefly explain the importance of each."
        },
        "answer": {
            "hi": [
                "पहला टेकरी ’माँ’ का मंदिर- सन् 1959 में 15 वर्ष की अल्पायु में, भैया जी के पिताजी के आकस्मिक निधन के समय उन्होंने संकल्प किया कि मैं उस चैतन्य शक्ति को जानकर रहूँगा जो इस शरीर को जीवितावस्था में चलायमान रखे हुए थी। उन्हें टेकरी (एक पहाड़ी पर) मंदिर की दिशा में एक दिव्य आकर्षण महसूस हुआ और वे उस ओर चल पड़े। भैया साधक थे, लक्ष्य था पर विधि ज्ञात नहीं थी। भैया ने वहाँ अध्यात्म के क्षेत्र में कई नूतन प्रयोग किए। सर्वप्रथम उन्होंने जगत्जननी माँ को अपना आध्यात्मिक गुरु व भौतिक शरीर की माँ भी माना और लीक से हटकर प्रेम-समर्पण साधना की जिसमें उन्होंने सभी इच्छाओं का त्याग किया और अपना सम्पूर्ण अस्तित्व ’माँ’ के चरणों में समर्पित कर दिया। ’माँ’ ने प्रसन्न होकर उन्हें दर्शन दिए और पुत्रवत् उन्हें स्वीकार किया। आज भी यह स्थान चैतन्यता से परिपूर्ण है।",
                "दूसरा प्रमुख साधना स्थल मनिहारों की हवेली (वर्तमान में ’सिद्धपीठ’)-",
                "भैया जी मनिहारों की हवेली में छोटे से कोठरीनुमा कक्ष में सन् 1982 से 1995 तक कठोर साधना व तन्मयता से चिंतन-मनन करते थे। यहाँ पर उन्हें कई आध्यात्मिक अनुभव हुए एवं साधना परिपक्व हुई। भैया जी की अथक व कठिन साधना द्वारा यह स्थान भैया द्वारा संग्रहित शक्तियों से जागृत व चैतन्य हो गया। इसी काल में उन्होंने कई साधकों को साधना करवा कर उनका जीवन सफल किया। कालांतर में माँ बसन्ती जी ने इस साधना स्थली का वर्ष 2011 में पुनर्निर्माण करवाया क्यों कि यह भैया की साधना की चैतन्यता से सराबोर है। आज यहाँ साधक इस स्थान की चैतन्यता में मार्गदर्शक की आज्ञा से बैठकर अपनी साधना फलीभूत कर रहे हैं।",
                "तीसरा मणिद्वीप- भैया ने 1990 में चक्र धारण किया और ’माँ’ की आज्ञा अनुसार कर्म साधना में अग्रसर हुए। इसके फलस्वरूप 1995 में ’मणिद्वीप’ का निर्माण पूर्ण हुआ और 1995 में ’माँ’ परिवार (माँ बसन्ती जी, भैया जी, सुश्री मधु जी व अन्य सदस्य) ’मणिद्वीप’ आकर रहने लगे।",
                "’मणिद्वीप’ अर्थात् जगत्जननी माँ का दिव्य लोक। धरती पर ’मणिद्वीप’, ए-183, शास्त्री नगर, जोधपुर उसी दिव्य लोक का ही प्रतीक है जिसका निर्माण जगत्जननी माँ की आज्ञा से हुआ।",
                "’मणिद्वीप’ में बालिका शिक्षा के लिए ट्रस्ट का निर्माण एवं अन्य सेवा कार्य आरम्भ हुए, जगत्जननी माँ प्रदत्त ज्ञान को लिपिबद्ध करवाया गया दिव्य ग्रंथ मृत्यु के बाद का अलौकिक संसार के रूप में, इस ज्ञान के प्रचार-प्रसार के विभिन्न प्रकल्प शुरु हुए- माँ-बाबूजी के मिशन का केन्दª बन गया ’मणिद्वीप’! भैया, माँ बसन्ती जी एवं ’मणिद्वीप अध्यात्म परिवार’ के सदस्यों की साधना के प्रभाव से यह स्थल एक तपोभूमि है जहाँ जगत्जननी माँ स्वयं विराजती हैं और सभी कार्यों का संचालन करती हैं।"
            ],
            "en": [
                "First, the temple of Tekri 'Maa' -- in 1959, at the tender age of 15, at the time of his father's sudden passing, Bhaiyaji resolved: I will come to know that conscious power which kept this body in motion while it lived. He felt a divine pull towards the temple of Tekri (on a hill) and set out in that direction. Bhaiya was a seeker with a goal, but the method was not yet known to him. There, Bhaiya carried out several original experiments in the field of spirituality. First, he took Jagatjanani Maa as both his spiritual guru and the mother of his physical body, and practised, departing from the conventional path, a sadhana of love and surrender in which he renounced all desires and offered his entire being at 'Maa's' feet. Pleased, 'Maa' gave him her darshan and accepted him as her son. Even today this place is full of consciousness.",
                "Second, the principal place of sadhana, the Manihars' haveli (today the 'Siddhapeeth') --",
                "From 1982 to 1995, Bhaiyaji practised rigorous sadhana and deeply absorbed reflection in a small, cell-like room in the Manihars' haveli. Here he had many spiritual experiences, and his sadhana matured. Through Bhaiyaji's tireless and rigorous sadhana, this place became awakened and conscious with the powers he gathered there. In this very period he guided many seekers through sadhana and made their lives successful. In time, Maa Basanti Ji had this place of sadhana rebuilt in 2011, because it is steeped in the consciousness of Bhaiya's sadhana. Today, seekers sit here in this place's consciousness, by their guide's permission, and their sadhana is bearing fruit.",
                "Third, Manidweep -- Bhaiya took up the chakra in 1990 and, by 'Maa's' command, advanced into karma sadhana. As a result, the construction of 'Manidweep' was completed in 1995, and in 1995 the 'Maa' family (Maa Basanti Ji, Bhaiyaji, Ms. Madhu Ji and other members) came to live at 'Manidweep'.",
                "'Manidweep' means Jagatjanani Maa's divine realm. On earth, 'Manidweep', at A-183, Shastri Nagar, Jodhpur, is a symbol of that same divine realm, built by Jagatjanani Maa's command.",
                "At 'Manidweep', a trust for girls' education was formed, along with other service works. The knowledge given by Jagatjanani Maa was set down as the divine text The Wonderful World After Death, and various projects for spreading this knowledge began -- 'Manidweep' became the centre of Maa-Babuji's mission! Through the sadhana of Bhaiya, Maa Basanti Ji and the members of the 'Manidweep Adhyatm Parivar', this place is a ground of austerity, where Jagatjanani Maa herself resides and directs all its works."
            ]
        },
        "categoryTitle": {
            "hi": "भैया जी का जीवन और ज्ञान-यात्रा",
            "en": "Bhaiya Ji's Life, Philosophy & Sadhana Journey"
        },
        "excerpt": {
            "hi": "पहला टेकरी ’माँ’ का मंदिर- सन् 1959 में 15 वर्ष की अल्पायु में, भैया जी के पिताजी के आकस्मिक निधन के समय उन्होंने संकल्प किया कि मैं उस चैतन्य शक्ति को जानकर रहूँगा जो इस...",
            "en": "First, the temple of Tekri 'Maa' -- in 1959, at the tender age of 15, at the time of his father's sudden passing, Bhaiyaji resolved: I will come to know that conscious power whi..."
        }
    },
    {
        "id": "q40",
        "number": 40,
        "categoryId": "bhaiya-ji",
        "question": {
            "hi": "भैया के सांकेतिक चक्र धारण का महत्व बताइए।",
            "en": "Explain the significance of Bhaiya's symbolic taking up of the chakra."
        },
        "answer": {
            "hi": [
                "गोवा के समुद्री चट्टान पर चढ़कर चक्र धारण करने की मुद्रा में हाथ उपर उठाते हुए भैया जी ने कहा कि अब ’’मैं चक्र धारण करता हूँ’’। उसी के साथ ही उनका चेहरा दिव्य तेजोमय प्रकाश से चमकने लगा। भैया में शक्तियां बहुत थी पर वे कभी दर्शाते नहीं थे। उस दिन ’माँ परिवार’ के जो सदस्य उस अलौकिक ऐतिहासिक क्षण के साक्षी बने वे इतने अभिभूत हुए मानो भैया के चैतन्य रुप के दर्शन प्राप्त किये! चक्र धारण समय के परिवर्तन का सूचक है जो माँ त्रिपुरसुन्दरी की कृपा से सांकेतिक रुप में दृष्यमान हुआ।",
                "भैया जी ने चक्र धारण कर युग परिवर्तन हेतु दैवीय शक्तियों के आशीर्वाद का आह्ान किया। फिर जोधपुर आकर अपने गुरु स्थान टेकरी माँ का आशीर्वाद प्राप्त किया। ’माँ’ के आशीर्वाद से वहाँ प्राप्त शक्तियों को अपनी कुंडलिनी में आत्मसात् कर आध्यात्मिक ऊर्जा को शांत किया। चक्र धारण करने के पश्चात् भैया जी व माँ बसन्ती जी द्वारा जनकल्याण के लिए विभिन्न परियोजनाओं आरम्भ होने लगी और मणिद्वीप के सदस्यों की जीवनधारा ज्ञान-भक्ति के साथ-साथ निष्काम कर्म योग की ओर भी मुड़ गई।",
                "सर्वप्रथम जगत्जननी माँ की आज्ञा के साथ ही ’मणिद्वीप’ का निर्माण हुआ। ’माँ परिवार’ के सदस्य मनिहार हवेली से ’मणिद्वीप’ में स्थानांतरित हो गए।",
                "एक वर्ष बाद ही जगत्जननी माँ ने निष्काम कर्म ’स्वामी विवेकानन्द स्टुडेंटस वेलफेयर चैरिटेबल ट्रस्ट’ की स्थापना माँ बसन्ती जी द्वारा करवाई जिससे जुड़कर छात्राएँ शिक्षित व संस्कारवान होकर अपने उज्जवल भविष्य का निर्माण कर रही हैं, सुदृढ़ समाज के निर्माण की नींव बन रही हैं और महिला सशक्तिकरण का आधार बन रही हैं।",
                "निष्काम कर्मयोग के साथ ही भैया जी ने ’बुद्धि-विवेक योग साधना पद्धति’ प्रतिपादित की जो आज के युग के अनुरूप तर्कसंगत व व्यावहारिक है। इसके द्वारा अध्यात्मवाद एवं भौतिकवाद में विवेकपूर्ण तरीके से संतुलन बनाया जाता है। विचारों में सकारात्मक परिवर्तन एवं देखने का दृष्टिकोण बदल कर जीवन में आनन्द, खुशी व शांति ला सकते हैं और अध्यात्म की ओर भी एकाग्रता से बढ़ सकते हैं।",
                "भैया के चक्र धारण के पश्चात् युग परिवर्तन की दिशा में गतिविधियाँ बढ़ती जा रही हैं और अब अनेकों लोग भैया जी के जीवन से, उनकी साधना पद्धति से, उनके दिव्य ज्ञान से परिवर्तित हो रहे हैं।"
            ],
            "en": [
                "Climbing a sea-side rock in Goa, raising his hand in the gesture of taking up the chakra, Bhaiyaji said, \"Now I take up the chakra.\" At that very moment his face began to glow with a divine, radiant light. There was great power within Bhaiya, but he never displayed it. The members of the 'Maa Parivar' who witnessed that extraordinary, historic moment that day were so overwhelmed, it was as though they had received the darshan of Bhaiya's own conscious form! Taking up the chakra was a sign of a change of era, made visible in symbolic form by the grace of Maa Tripurasundari.",
                "By taking up the chakra, Bhaiyaji invoked the blessing of divine powers for the transformation of the age. He then came to Jodhpur and received the blessing of his guru's place, Tekri Maa. By 'Maa's' blessing, he absorbed the powers received there into his kundalini and calmed his spiritual energy. After taking up the chakra, Bhaiyaji and Maa Basanti Ji began various projects for public welfare, and the life-stream of Manidweep's members turned, alongside knowledge and devotion, towards nishkam karma yoga as well.",
                "First, by Jagatjanani Maa's command, 'Manidweep' was built. Members of the 'Maa family' moved from the Manihar haveli to 'Manidweep'.",
                "Just a year later, Jagatjanani Maa had Maa Basanti Ji establish the nishkam-karma institution the 'Swami Vivekanand Students' Welfare Charitable Trust', through which girl students, gaining education and sanskar, are building a bright future for themselves, becoming the foundation of a stronger society, and the basis of women's empowerment.",
                "Alongside nishkam karma yoga, Bhaiyaji established the 'Buddhi-Vivek Yog Sadhna' method, which is reasoned and practical, suited to this age. Through it, a discerning balance is struck between spirituality and materialism. By bringing a positive change in thought and a change in outlook, one can bring joy, happiness and peace into life, and also advance towards spirituality with focus.",
                "Since Bhaiya's taking up of the chakra, activities in the direction of transforming the age have kept growing, and now many people are being transformed by Bhaiyaji's life, his method of sadhana, and his divine knowledge."
            ]
        },
        "categoryTitle": {
            "hi": "भैया जी का जीवन और ज्ञान-यात्रा",
            "en": "Bhaiya Ji's Life, Philosophy & Sadhana Journey"
        },
        "excerpt": {
            "hi": "गोवा के समुद्री चट्टान पर चढ़कर चक्र धारण करने की मुद्रा में हाथ उपर उठाते हुए भैया जी ने कहा कि अब ’’मैं चक्र धारण करता हूँ’’। उसी के साथ ही उनका चेहरा दिव्य तेजोमय प्रका...",
            "en": "Climbing a sea-side rock in Goa, raising his hand in the gesture of taking up the chakra, Bhaiyaji said, \"Now I take up the chakra.\" At that very moment his face began to glow w..."
        }
    },
    {
        "id": "q41",
        "number": 41,
        "categoryId": "manidweep-parivar",
        "question": {
            "hi": "मणिद्वीप परिवार के सदस्यों के लिए 10 जून का महत्व?",
            "en": "What is the significance of 10 June for the members of the Manidweep Parivar?"
        },
        "answer": {
            "hi": [
                "मणिद्वीप के सभी महत्वपूर्ण कार्य जगत्जननी माँ की इच्छा, आज्ञा व निर्देशों के अनुसार ही सम्पन्न किये जाते हैं। माँ-बाबूजी द्वारा माँ परिवार के बच्चों के लिये विशेष रुप से दिया गया शुभ अबूझ मुहूर्त है 10 जुन। इस दिन आरम्भ किये गये दिव्य संकल्पों को उनका पूर्ण आशीर्वाद प्राप्त होता है इसलिये 10 जून ’मणिद्वीप’ के सभी सदस्यों के लिए बहुत ही महत्वपूर्ण है। इस दिन को सभी हर्ष-उल्लास व उत्साह से मनाते हैं।",
                "10 जुन के शुभ अवसर पर माँ-बाबूजी के मिशन के अन्तर्गत ’माँ परिवार’ में निम्नलिखित आनन्ददायी एवं महत्वपूर्ण परिवर्तन आये।",
                "10 जून 1961 के दिन स्वयं जगत्जननी माँ भैया की निःस्वार्थ प्रेम एवं मातृरूपेण साधना से प्रसन्न होकर उन्हें दिये और उन्हें अपना बच्चा स्वीकार कर लिया। इस दिन से ’माँ’ भैया की शरीर की माँ भी बन गई।",
                "माँ बसन्ती जी ने भैया को अपना सद्गुरु मानकर अनके मार्गदर्शन में 10 जून 1964 से जगत्जननी माँ की बच्ची बन कर साधना प्रारम्भ की।",
                "भैया जी ने माँ बसन्ती जी को जयपुर से माँ त्रिपुरसुनदरी का विग्रह लाकर दिया और 10 जून, 1966 को मनिहार भवन में माँ बसन्ती जी के साधना कक्ष में ‘माँ‘ का सुन्दर स्वरूप स्थापित किया गया, जिनके समक्ष आसन पर बैठ माँ बसन्ती जी ने आजीवन साधना की।",
                "10 जून, 1966 को राम भाईसाहब जब भैया जी के साथ पहली बार गहन साधनारत माँ बसन्ती जी से मिले तो राम भाईसाहब माँ बसन्ती जी के दिव्य तेजोमय मुखमण्डल की आभा देखते ही रह गए। उनके चेहरे से ज्योतिर्मय प्रकाश निकल रहा था.. राम भाईसाहब को उनमें जगतजननी माँ का स्वरूप दिखाई दिया, वे स्वतः ही उनके चरणों में झुक गए! उस दिन उन्हें माँ बसन्ती जी में अपनी ‘आध्यात्मिक माँ‘ मिल गयीं और उन्हें ‘माँ महाशक्ति‘ के नाम से सम्बोधित करने लगे!",
                "10 जून, 1971 से मधु माँ का अध्यात्म मार्ग आरंभ हुआ। भैया जी उनके पथप्रदर्शन बने। 10 जून 1976 को मधु माँ की भौतिक जन्मपत्री-कर्मपत्री ’माँ’ के चरणों में चढ़ गई और 10 जून 1977 से मधु माँ, ‘माँ‘ के प्रति पूर्ण समर्पित होकर अपनी जन्मदात्री माता जी की आज्ञा से स्थायी रूप से माँ बसँती जी के पास मनिहार भवन में निवास करने लगीं।",
                "10 जून 1990 को अचानक ही जगतजननी माँ की आज्ञा से ’माँ-परिवार’ का दक्षिण भारत यात्रा का कार्यक्रम बना, जिसमें भैया जी, माँ बसन्ती जी, मधु माँ व अन्य सदस्य थे। यात्रा पूरी होने पर गोवा में भैया जी ने सांकेतिक चक्र धारण कर युग परिवर्तन का आगाज़ किया!",
                "युगप्रवर्तक भैया जी के सांकेतिक चक्र धारण के पश्चात्् निष्काम कर्म-साधना की शुरुआत का पहला चरण ’माँं के लोक मणिद्वीप’ का पृथवी पर प्रतीक ’मणिद्वीप’ भवन के निर्माण के रुप में पूर्ण हुआ। 10 जून 1995 को ’माँं-परिवार’ के सदस्य मनिहार हवेली से मणिद्वीप स्थानांतरित हुआ।",
                "जगत्जननी माँ की आज्ञा से जन-जन में भैया द्वारा वास्तविक समाज सेवा का उदाहरण प्रस्तुत करने के लिये निष्काम कर्म का उदाहरण प्रस्तुत करने के लिये 10 जून 1996 को स्वामी विवेकानन्द स्टुडेन्ट्स वेलफेयर चेरिटेबल ट्रस्ट की स्थापना माँ बसन्ती जी मनिहार द्वारा हुई और भैया श्री नन्दकिशोर जी शारदा इसके अध्यक्ष बने।",
                "10 जून, 2006 को मनिहार भवन में स्थित भैया जी की साधना स्थली माँ बसन्ती जी ने जगत्जननी माँ के आज्ञा से खरीद ली, जो आज ‘सिद्धपीठ‘ के रूप में साधकों को चौतन्य ऊर्जा प्रदान कर उनके अध्यात्म मार्ग पर उत्तरोत्तर उन्नति प्रशस्त कर रहा है।",
                "10 जून, 2014 को माँ बसन्ती जी की साधना के 50 वर्ष पूर्ण होते ही जगतजननी माँ की आज्ञा से मनिहार भवन में छोटी हवेली में स्थित उनके साधना कक्ष को (जहाँ उन्होंने 31 वर्ष माँ त्रिपुरसुन्दरी की बालिकावत् प्रेम- समर्पण से कठोर साधना की) खरीद लिया गया। आज हम उस दिव्य स्थान को ‘वात्सल्यपीठ‘ के रूप में जानते हैं।",
                "जगतजननी माँ-बाबूजी की आज्ञा से, भैया नन्दकिशोर जी शारदा एवं माँ बसन्ती जी मनिहार के निर्देशन में एवं मणिद्वीप अध्यात्म परिवार के वरिष्ठ सदस्यों के संरक्षण में लिपिबद्ध ‘मणिद्वीप का संविधान एवं आचार-संहिता‘ मधु माँ द्वारा 10 जून, 2024 को घोषित किया गया। इसे मणिद्वीप के वरिष्ठ सदस्यों द्वारा औपचारिक रुप से अनुमोदित/पारित भी किया गया। यह संविधान एवं आचार संहिता उसी दिन से लागू कर दिये गये। इन नियमों का उद्देश्य है कि भविष्य में भी मणिद्वीप अध्यात्म परिवार के सारे कार्य एवं गतिविधियां निर्विघ्न एवं सुचारु रूप से पूर्ण पारदर्शिता और निष्पक्षता के साथ संचालित हो सकें। यह नियम परिवार के वरिष्ठ सदस्यों के संरक्षण में निष्पादित किए जाएंगे। यह नियम मणिद्वीप अध्यात्म परिवार से जुड़े हर व्यक्ति को निष्ठापूर्वक पालन करने हैं क्योंकि यह जगतजननी माँ-बाबूजी का घर है और उनकी मर्यादा का पालन करना हमारा परम कर्त्तव्य है।",
                "उपोक्त हर घटना अगली घटना की नींव के रुप में मजबूत आधार प्रदान करती है। सभी घटनायें मिशन के विश्व-बन्धुत्व, विश्व-शांति एवं मानव कल्याण के विराट संकल्प की पूर्ति की दिशा में मील का पत्थर साबित हो रही हैं।"
            ],
            "en": [
                "All of Manidweep's important works are carried out only according to Jagatjanani Maa's wish, command and direction. Maa-Babuji gave, specially for the children of the Maa Parivar, an auspicious, ever-favourable date: 10 June. Divine resolves begun on this day receive their full blessing, and so 10 June is exceedingly important for all members of 'Manidweep'. This day is celebrated by all with joy, delight and enthusiasm.",
                "On the auspicious occasion of 10 June, the following joyful and important changes came about within the 'Maa Parivar', under Maa-Babuji's mission.",
                "On 10 June 1961, Jagatjanani Maa herself, pleased by Bhaiya's selfless love and his sadhana in the form of a mother-child bond, gave him her darshan and accepted him as her own child. From this day, 'Maa' also became the mother of Bhaiya's physical body.",
                "Taking Bhaiya as her true guru, Maa Basanti Ji, under his guidance, began her sadhana as Jagatjanani Maa's child from 10 June 1964.",
                "Bhaiyaji brought an image of Maa Tripurasundari from Jaipur and gave it to Maa Basanti Ji, and on 10 June 1966, 'Maa's' beautiful form was installed in Maa Basanti Ji's sadhana room at Manihar Bhavan, before which, seated, Maa Basanti Ji practised sadhana for her whole life.",
                "On 10 June 1966, when Ram Bhai Sahab, along with Bhaiyaji, first met Maa Basanti Ji deep in sadhana, Ram Bhai Sahab simply could not look away from the radiance of her divine, luminous face. A luminous light was emanating from her face... Ram Bhai Sahab saw in her the form of Jagatjanani Maa, and bowed at her feet of his own accord! That day he found in Maa Basanti Ji his own 'spiritual mother', and began addressing her by the name 'Maa Mahashakti'!",
                "Madhu Maa's spiritual path began on 10 June 1971. Bhaiyaji became her guide. On 10 June 1976, Madhu Maa's worldly birth-chart and karma-chart were offered at 'Maa's' feet, and from 10 June 1977, fully surrendered to 'Maa', Madhu Maa, by the command of her birth mother, came to live permanently with Maa Basanti Ji at Manihar Bhavan.",
                "On 10 June 1990, quite suddenly, by Jagatjanani Maa's command, a plan formed for the 'Maa Parivar' to travel to South India, including Bhaiyaji, Maa Basanti Ji, Madhu Maa and other members. On completing the journey, in Goa, Bhaiyaji took up the symbolic chakra, announcing the transformation of the age!",
                "After Yugpravartak Bhaiyaji's symbolic taking up of the chakra, the first stage in the beginning of nishkam karma sadhana was completed in the form of the construction of the 'Manidweep' building, the earthly symbol of 'Maa's realm, Manidweep'. On 10 June 1995, members of the 'Maa Parivar' moved from Manihar Haveli to Manidweep.",
                "By Jagatjanani Maa's command, to present through Bhaiya, to every person, a true example of nishkam karma and real social service, the Swami Vivekanand Students' Welfare Charitable Trust was established by Maa Basanti Ji Manihar on 10 June 1996, with Bhaiya Shri Nandkishore Ji Sharda becoming its President.",
                "On 10 June 2006, Maa Basanti Ji, by Jagatjanani Maa's command, purchased Bhaiyaji's place of sadhana situated at Manihar Bhavan, which is known today as the 'Siddhapeeth', providing seekers with conscious energy and carrying them forward, ever more, on their spiritual path.",
                "On 10 June 2014, as Maa Basanti Ji's 50 years of sadhana were completed, by Jagatjanani Maa's command, her sadhana room in the small haveli at Manihar Bhavan (where, for 31 years, she practised rigorous sadhana with a child's love and surrender to Maa Tripurasundari) was purchased. Today we know this divine place as 'Vatsalyapeeth'.",
                "By the command of Jagatjanani Maa-Babuji, under the direction of Bhaiya Nandkishore Ji Sharda and Maa Basanti Ji Manihar, and under the protection of the senior members of the Manidweep Adhyatm Parivar, the 'Constitution and Code of Conduct of Manidweep' was set down and announced by Madhu Maa on 10 June 2024. It was also formally approved and passed by Manidweep's senior members. This constitution and code of conduct came into force from that very day. The purpose of these rules is that, in future too, all the works and activities of the Manidweep Adhyatm Parivar may be carried out smoothly and without hindrance, with complete transparency and fairness. These rules will be carried out under the protection of the family's senior members. Every person connected with the Manidweep Adhyatm Parivar is to follow these rules faithfully, because this is Jagatjanani Maa-Babuji's own home, and upholding its dignity is our highest duty.",
                "Each of the above events provides a firm foundation for the next. All these events stand as milestones towards the fulfilment of the mission's vast resolve for world-brotherhood, world-peace and human welfare."
            ]
        },
        "categoryTitle": {
            "hi": "मणिद्वीप परिवार और सेवा प्रकल्प",
            "en": "Manidweep Parivar, Key Milestones & Social Initiatives"
        },
        "excerpt": {
            "hi": "मणिद्वीप के सभी महत्वपूर्ण कार्य जगत्जननी माँ की इच्छा, आज्ञा व निर्देशों के अनुसार ही सम्पन्न किये जाते हैं। माँ-बाबूजी द्वारा माँ परिवार के बच्चों के लिये विशेष रुप से...",
            "en": "All of Manidweep's important works are carried out only according to Jagatjanani Maa's wish, command and direction. Maa-Babuji gave, specially for the children of the Maa Pariva..."
        }
    },
    {
        "id": "q42",
        "number": 42,
        "categoryId": "manidweep-parivar",
        "question": {
            "hi": "’स्वामी विवेकानन्द स्टुडेन्ट्स वेलफेयर चेरिटेबल ट्रस्ट’ की स्थापना की मूल भावना एवं अवधारणा को रेखांकित कीजिए।",
            "en": "Outline the founding spirit and concept behind the establishment of the 'Swami Vivekanand Students' Welfare Charitable Trust'."
        },
        "answer": {
            "hi": [
                "10 जून 1996 में जगत्जननी माँ की आज्ञा से माँ बसन्ती जी ने ’स्वामी विवेकानन्द स्टुडेन्ट्स वेलफेयर चेरिटेबल ट्रस्ट’ की स्थापना की। इसकी स्थापना की मूल भावना है माँ शारदामणि का आशीर्वाद प्राप्त करना क्योंकि यह स्वयं माँ सरस्वती का अवतार- माँ शारदामणि के वचन हैं कि जो भी बालिका उत्थान के लिये निःस्वार्थ भाव से कार्य करेगा, उसे माँ का आशीर्वाद प्राप्त होगा। इस ट्रस्ट की अवधारण है कि कोई भी जाति, धर्म, सम्प्रदाय की छात्रा धनाभाव के कारण शिक्षा से वंचित न रह जाए। साथ-ही-साथ उनमें संस्कार एवं अध्यात्म के बीज रोपित किये जाएं जिससे उनमें आत्मविश्वास व आत्मसम्मान की भावना जागृत हो ताकि कालांतर में वे देश की सद्नागरिक बन सकें। जिन छात्राओं के जीवन में घोर निराशा थी, लक्ष्य नहीं था उनके लिये यह ट्रस्ट आशा की किरण बना और उनके जीवन को एक लक्ष्य मिल गया। भैया की दूरदर्शिता से बना ट्रस्ट का यह नियम- ’प्रत्येक छात्रा अपने-अपने इष्टदेव का प्रतिदिन कम से कम 10 मिनट निःस्वार्थ स्मरण करे’- छात्राओं को अध्यात्म से जोड़ देता है।"
            ],
            "en": [
                "On 10 June 1996, by Jagatjanani Maa's command, Maa Basanti Ji established the 'Swami Vivekanand Students' Welfare Charitable Trust'. The founding spirit of this establishment is to receive the blessing of Maa Sharadamani, for she is herself an incarnation of Maa Saraswati -- and it is Maa Sharadamani's own word that whoever works selflessly for the upliftment of girls will receive Maa's blessing. The concept behind this trust is that no girl student, of any caste, religion or sect, should be denied education for want of money. Alongside this, the seeds of sanskar and spirituality are to be planted within them, so that a feeling of self-confidence and self-respect awakens, allowing them, in time, to become good citizens of the nation. For girls whose lives held deep despair, who had no goal, this trust became a ray of hope, giving their lives a purpose. This rule of the trust, born of Bhaiya's foresight -- 'every girl student should, each day, remember her own chosen deity selflessly for at least 10 minutes' -- connects the students to spirituality."
            ]
        },
        "categoryTitle": {
            "hi": "मणिद्वीप परिवार और सेवा प्रकल्प",
            "en": "Manidweep Parivar, Key Milestones & Social Initiatives"
        },
        "excerpt": {
            "hi": "10 जून 1996 में जगत्जननी माँ की आज्ञा से माँ बसन्ती जी ने ’स्वामी विवेकानन्द स्टुडेन्ट्स वेलफेयर चेरिटेबल ट्रस्ट’ की स्थापना की। इसकी स्थापना की मूल भावना है माँ शारदामणि...",
            "en": "On 10 June 1996, by Jagatjanani Maa's command, Maa Basanti Ji established the 'Swami Vivekanand Students' Welfare Charitable Trust'. The founding spirit of this establishment is..."
        }
    }
];

(() => {
    const language = document.documentElement.lang === "hi" ? "hi" : "en";

    const copy = {
        hi: { viewAnswer: "उत्तर देखें", questionsShown: (n) => `${n} प्रश्न दिख रहे हैं`, empty: "इस श्रेणी में अभी कोई प्रश्न नहीं है।" },
        en: { viewAnswer: "View Answer", questionsShown: (n) => `${n} question${n === 1 ? "" : "s"} shown`, empty: "There are no questions in this category yet." }
    };

    const results = document.getElementById("faq-results");
    const categoryButtons = document.getElementById("faq-category-buttons");
    const count = document.getElementById("faq-count");
    const modal = document.getElementById("faq-modal");
    const modalDialog = modal?.querySelector(".faq-modal__dialog");
    const modalTitle = document.getElementById("faq-modal-title");
    const modalCategory = document.getElementById("faq-modal-category");
    const modalAnswer = document.getElementById("faq-modal-answer");
    let activeCategory = FAQ_CATEGORIES[0]?.id || "all";
    let lastFocusedElement = null;

    if (!results || !categoryButtons || !count || !modal) return;

    const escapeHtml = (value) => String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");

    const getVisibleItems = () => FAQ_ITEMS.filter((item) =>
        activeCategory === "all" || item.categoryId === activeCategory
    );

    const renderCategories = () => {
        categoryButtons.innerHTML = FAQ_CATEGORIES.map((category) => `
            <button class="faq-category" type="button" data-category="${category.id}">
                <span>${escapeHtml(category.title[language])}</span>
            </button>
        `).join("");
    };

    const renderResults = () => {
        const visibleItems = getVisibleItems();
        count.textContent = copy[language].questionsShown(visibleItems.length);

        document.querySelectorAll(".faq-category").forEach((button) => {
            button.classList.toggle("is-active", button.dataset.category === activeCategory);
        });

        if (!visibleItems.length) {
            results.innerHTML = `<div class="faq-empty">${copy[language].empty}</div>`;
            return;
        }

        const visibleByCategory = FAQ_CATEGORIES
            .map((category) => ({
                ...category,
                items: visibleItems.filter((item) => item.categoryId === category.id)
            }))
            .filter((category) => category.items.length);

        results.innerHTML = visibleByCategory.map((category) => `
            <section class="faq-category-section" aria-labelledby="${category.id}-title">
                <header class="faq-category-section__header">
                    <span>${escapeHtml(category.title[language === "hi" ? "en" : "hi"])}</span>
                    <h3 id="${category.id}-title">${escapeHtml(category.title[language])}</h3>
                    <p>${escapeHtml(category.desc[language])}</p>
                </header>
                <div class="faq-card-grid">
                    ${category.items.map((item) => `
                        <article class="faq-card">
                            <h4>${escapeHtml(item.question[language])}</h4>
                            <p>${escapeHtml(item.excerpt[language])}</p>
                            <button class="faq-card__button" type="button" data-faq-id="${item.id}">${copy[language].viewAnswer}</button>
                        </article>
                    `).join("")}
                </div>
            </section>
        `).join("");
    };

    const openModal = (item) => {
        lastFocusedElement = document.activeElement;
        modalTitle.textContent = item.question[language];
        modalCategory.textContent = item.categoryTitle[language];
        modalAnswer.innerHTML = item.answer[language].map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("");
        modal.hidden = false;
        document.body.style.overflow = "hidden";
        modalDialog?.focus();
    };

    const closeModal = () => {
        modal.hidden = true;
        document.body.style.overflow = "";
        lastFocusedElement?.focus?.();
    };

    renderCategories();
    renderResults();

    document.addEventListener("click", (event) => {
        const categoryButton = event.target.closest(".faq-category");
        if (categoryButton) {
            activeCategory = categoryButton.dataset.category;
            renderResults();
            requestAnimationFrame(() => {
                categoryButton.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
            });
            return;
        }

        const answerButton = event.target.closest("[data-faq-id]");
        if (answerButton) {
            const item = FAQ_ITEMS.find((faq) => faq.id === answerButton.dataset.faqId);
            if (item) openModal(item);
            return;
        }

        if (event.target.closest("[data-faq-close]")) {
            closeModal();
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && !modal.hidden) {
            closeModal();
        }
    });
})();
