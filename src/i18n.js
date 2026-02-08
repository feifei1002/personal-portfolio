import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';


i18n.use(initReactI18next).init({
    debug: true,
    lng: 'en',
    resources: {
        "en": {
            translation: {
                // Hero Section
                title: "Software Engineer",
                greeting: "Hello and Welcome to my page! Take your time and enjoy your stay. If you want to know more about me, feel free to scroll down, explore or use the button below to contact me!",
                contactMe: "Contact Me",
                downloadCV: "Download CV",
                followMe: "Follow me:",
                technologies: "Technologies I work with:",
                scroll: "Scroll",

                // About Section
                aboutMe: "About Me",
                aboutTitle1: "A passionate software engineer,",
                aboutTitle2: "evolving through every line of code.",
                whereIAmFrom: "Where I'm From",
                whereIAmFromDesc: "I was born in the beautiful island nation of Taiwan — home of bubble milk tea and the iconic Taipei 101, famously climbed by Alex Honnold on Netflix. I later grew up in Vietnam, the birthplace of beloved dishes like phở and bánh mì.",
                languagesISpeak: "Languages I Speak",
                languagesISpeakDesc: "I’m fluent in English, Mandarin, and Vietnamese, which allows me to collaborate effectively across cultures and teams.",
                myHobbies: "My Hobbies",
                myHobbiesDesc: "Outside of tech, I enjoy cooking, baking, and crocheting, hobbies that let me experiment, create, and pay attention to detail.",
                myMusicTaste: "My Music Taste",
                myMusicTasteDesc: "I’m a K-pop fan, with a particular interest in girl groups like aespa and boy groups such as SEVENTEEN.",

                // Projects Section
                myProjects: "Featured Works",
                projectSubtitle: "Projects that I have worked on",
                projectDesc: "A selection of projects showcasing my skills in web development, AI integration, and responsive design.",
                projectTitle1: "Student Information Chatbot",
                projectDesc1: "An AI-powered chatbot that provides accurate and relevant information to students from Cardiff University.",
                projectTitle2: "Warehouse Racking System Website",
                projectDesc2: "A website for a warehouse racking system company, showcasing their products and services with a modern and responsive design.",
                moreProjects: "More Projects",

                // Experience Section
                careerJourney: "Career Journey",
                myExperience: "My Experience",
                experienceSubtitle: "A summary of my professional experiences, roles, and responsibilities.",
                role1: "STEM Ambassador",
                description1: "Promoted STEM to children and young adults around schools and libraries in Wales and delivered workshops on Lego Spike, Microbit and simple HTML and CSS.",
                role2: "Taiwanese Society President",
                description2: "Organised events and activities to promote Taiwanese culture and foster a sense of community among Taiwanese students at Cardiff University.",
                role3: "Web Developer",
                description3: "Designed a website for a company that manufactures warehouse racking systems.",
                role4: "Student Academic Representative",
                description4: "Represented students in academic matters and facilitated communication between students and university.",

                // Education Section
                myEducation: "Education",
                myAcademicBackground: "My Academic Background",
                institution1: "King's College London",
                degree1: "Master of Science in Advanced Software Engineering",
                location1: "London, UK",
                grade1: "Merit - 69%",
                institution2: "Cardiff University",
                degree2: "Bachelor of Science in Applied Software Engineering",
                location2: "Cardiff, UK",
                grade2: "Upper Second Class Honours - 67%",

                // Contact Section
                getInTouch: "Get in Touch",
                contactMe: "Contact Me",
                contactName: "Name",
                contactNamePlaceholder: "Your Name",
                contactEmail: "Email",
                contactEmailPlaceholder: "Your Email",
                contactMessage: "Message",
                contactMessagePlaceholder: "Your Message",
                contactSubmit: "Send Message",
                contactInfo: "Contact Information",
                contactPhone: "Phone",
                contactLocation: "Location",
                submitMessageSuccess: "Your message has been sent successfully! I'll get back to you soon.",
                submitMessageError: "There was an error sending your message. Please try again later.",
                sending: "Sending...",

                // Navbar and Footer
                home: "Home",
                about: "About",
                projects: "Projects",
                experience: "Experience",
                education: "Education",
                contact: "Contact",

            }
        },
        "zh-TW": {
            translation: {
                // Hero Section
                title: "軟體工程師",
                greeting: "你好，歡迎你來到我的個人網站！請慢慢瀏覽，享受你的時光吧! 如果你想了解更多關於我的資訊，請隨意向下滑動，探索或使用下面的按鈕與我聯繫！",
                contactMe: "聯繫我",
                downloadCV: "下載我的履歷",
                followMe: "追蹤我：",
                technologies: "我使用的技術：",
                scroll: "滑動",

                // About Section
                aboutMe: "關於我",
                aboutTitle1: "一位充滿熱情的軟體工程師，",
                aboutTitle2: "透過每一行程式碼不斷的成長。",
                whereIAmFrom: "我的故鄉",
                whereIAmFromDesc: "我出生於美麗的台灣，台灣以珍珠奶茶和標誌性的台北101而聞名。後來我在越南長大，那是越南粉和越式法國麵包的發源地。",
                languagesISpeak: "我會說的語言",
                languagesISpeakDesc: "我精通英文、中文和越南文，這使我能夠有效地與不同文化背景和團隊合作。",
                myHobbies: "我的興趣",
                myHobbiesDesc: "在科技領域之外，我還喜歡烹飪、烘焙和鉤針編織，這些興趣讓我能夠嘗試、創造並注重細節。",
                myMusicTaste: "我的音樂品味",
                myMusicTasteDesc: "我是一名K-pop粉絲，特別喜歡aespa等女團和SEVENTEEN等男團。",

                // Projects Section
                myProjects: "我的精選作品",
                projectSubtitle: "專案介紹",
                projectDesc: "展示我在網頁開發、AI整合和網頁設計方面技能的專案選集。",
                projectTitle1: "學生資訊聊天機器人",
                projectDesc1: "一個由人工智慧驅動的聊天機器人，為卡迪夫大學的學生提供準確且相關的資訊。",
                projectTitle2: "倉儲貨架系統網站",
                projectDesc2: "一個為倉儲貨架系統公司設計的網站，展示其產品和服務，具有現代且響應式的設計。",
                moreProjects: "更多專案",

                // Experience Section
                careerJourney: "職業旅程",
                myExperience: "我的經驗",
                experienceSubtitle: "我的專業經驗、角色和職責概述。",
                role1: "STEM 大使",
                description1: "在威爾斯的學校和圖書館向兒童和青少年推廣 STEM（科學、技術、工程和數學），並舉辦了關於 Lego Spike、Microbit 和簡單的 HTML 和 CSS 的教學。",
                role2: "台灣學生會會長",
                description2: "組織活動以推廣台灣文化，並凝聚卡迪夫大學的台灣學生。",
                role3: "網頁開發人員",
                description3: "為一家生產倉儲貨架系統的公司設計了網站。",
                role4: "學生代表",
                description4: "代表學生處理學術事務，促進學生與大學之間的溝通。",

                // Education Section
                myEducation: "教育",
                myAcademicBackground: "我的學術背景",
                institution1: "倫敦國王學院",
                degree1: "高級軟體工程理學碩士",
                location1: "英國倫敦",
                grade1: "優異 - 69%",
                institution2: "卡迪夫大學",
                degree2: "應用軟體工程理學士",
                location2: "英國卡迪夫",
                grade2: "二等甲級榮譽學位 - 67%",

                // Contact Section
                getInTouch: "保持聯繫",
                contactMe: "聯繫我",
                contactName: "姓名",
                contactNamePlaceholder: "您的姓名",
                contactEmail: "電子郵件",
                contactEmailPlaceholder: "您的電子郵件",
                contactMessage: "訊息",
                contactMessagePlaceholder: "您的訊息",
                contactSubmit: "發送訊息",
                contactInfo: "聯繫資訊",
                contactPhone: "電話",
                contactLocation: "地點",
                submitMessageSuccess: "您的訊息已成功發送！我會盡快回覆您。",
                submitMessageError: "發送訊息時出錯，請稍後再試。",
                sending: "發送中...",

                // Navbar and Footer
                home: "首頁",
                about: "關於",
                projects: "專案",
                experience: "經驗",
                education: "教育",
                contact: "聯繫",

            }
        },
        "vi": {
            translation: {
                // Hero Section
                title: "Kỹ sư phần mềm",
                greeting: "Chào mừng bạn đến với trang của tôi! Hãy dành thời gian và tận hưởng khoảng thời gian của bạn ở đây. Nếu bạn muốn biết thêm về tôi, hãy thoải mái kéo xuống, khám phá hoặc sử dụng nút bên dưới để liên hệ với tôi!",
                contactMe: "Liên hệ với tôi",
                downloadCV: "Tải xuống CV",
                followMe: "Theo dõi tôi:",
                technologies: "Công nghệ tôi sử dụng:",
                scroll: "Kéo xuống",

                // About Section
                aboutMe: "Về tôi",
                aboutTitle1: "Một kỹ sư phần mềm đam mê,",
                aboutTitle2: "không ngừng phát triển qua từng dòng code.",
                whereIAmFrom: "Quê quán của tôi",
                whereIAmFromDesc: "Tôi sinh ra ở quốc đảo xinh đẹp Đài Loan — quê hương của trà sữa trân châu và tòa nhà biểu tượng Taipei 101. Sau đó, tôi lớn lên ở Việt Nam, quê hương của những món ăn được yêu thích như phở và bánh mì.",
                languagesISpeak: "Các ngôn ngữ tôi nói",
                languagesISpeakDesc: "Tôi thành thạo tiếng Anh, tiếng Trung và tiếng Việt, điều này giúp tôi hợp tác hiệu quả giữa các nền văn hóa và hoạt động nhóm khác nhau.",
                myHobbies: "Sở thích của tôi",
                myHobbiesDesc: "Ngoài lĩnh vực công nghệ, tôi thích nấu ăn, làm bánh và móc len, những sở thích cho phép tôi thử nghiệm, sáng tạo và chú ý đến chi tiết.",
                myMusicTaste: "Gu âm nhạc của tôi",
                myMusicTasteDesc: "Tôi là một fan K-pop, đặc biệt yêu thích các nhóm nữ như aespa và các nhóm nam như SEVENTEEN.",
            
                // Projects Section
                myProjects: "Các tác phẩm nổi bật của tôi",
                projectSubtitle: "Các dự án mà tôi đã làm",
                projectDesc: "Tuyển tập các dự án thể hiện kỹ năng của tôi trong việc phát triển và thiết kế web và ứng dụng AI.",
                projectTitle1: "Chatbot Thông tin Sinh viên",
                projectDesc1: "Một chatbot được hỗ trợ bởi AI cung cấp thông tin cho sinh viên của Đại học Cardiff.",
                projectTitle2: "Trang web Hệ thống Kệ kho",
                projectDesc2: "Một trang web cho công ty làm hệ thống kệ kho, giới thiệu sản phẩm và dịch vụ của họ với thiết kế hiện đại và đáp ứng.",
                moreProjects: "Xem thêm dự án",

                // Experience Section
                careerJourney: "Hành trình sự nghiệp",
                myExperience: "Kinh nghiệm của tôi",
                experienceSubtitle: "Tóm tắt các kinh nghiệm chuyên môn, vai trò và trách nhiệm của tôi.",
                role1: "Đại sứ STEM",
                description1: "Quảng bá STEM cho trẻ em và thanh thiếu niên tại các trường học và thư viện ở xứ Wales, đồng thời tổ chức các buổi học về Lego Spike, Microbit và HTML, CSS cơ bản.",
                role2: "Chủ tịch Hội người Đài Loan",
                description2: "Tổ chức các sự kiện và hoạt động nhằm quảng bá văn hóa Đài Loan và thúc đẩy tinh thần cộng đồng giữa các sinh viên Đài Loan tại Đại học Cardiff.",
                role3: "Lập trình viên web",
                description3: "Thiết kế một trang web cho một công ty sản xuất hệ thống kệ kho.",
                role4: "Đại diện sinh viên",
                description4: "Đại diện cho sinh viên trong các vấn đề học thuật và tạo điều kiện giao tiếp giữa sinh viên và nhà trường.",

                // Education Section
                myEducation: "Giáo dục",
                myAcademicBackground: "Nền tảng học thuật của tôi",
                institution1: "King's College London",
                degree1: "Thạc sĩ Khoa học về Kỹ thuật Phần mềm Nâng cao",
                location1: "London, Vương quốc Anh",
                grade1: "Merit - 69%",
                institution2: "Cardiff University",
                degree2: "Cử nhân Khoa học về Kỹ thuật Phần mềm Ứng dụng",
                location2: "Cardiff, Vương quốc Anh",
                grade2: "Upper Second Class Honours - 67%",

                // Contact Section
                contact: "Liên hệ",
                getInTouch: "Get In Touch",
                contactMe: "Liên hệ với tôi",
                contactName: "Tên",
                contactNamePlaceholder: "Tên của bạn",
                contactEmail: "Email",
                contactEmailPlaceholder: "Email của bạn",
                contactMessage: "Tin nhắn",
                contactMessagePlaceholder: "Tin nhắn của bạn",
                contactSubmit: "Gửi tin nhắn",
                contactInfo: "Thông tin liên hệ",
                contactPhone: "Số điện thoại",
                contactLocation: "Địa điểm",
                submitMessageSuccess: "Tin nhắn của bạn đã được gửi thành công! Tôi sẽ sớm phản hồi bạn.",
                submitMessageError: "Đã xảy ra lỗi khi gửi tin nhắn. Vui lòng thử lại sau.",
                sending: "Đang gửi...",

                // Navbar and Footer
                home: "Trang chủ",
                about: "Giới thiệu",
                projects: "Dự án",
                experience: "Kinh nghiệm",
                education: "Giáo dục",
                contact: "Liên hệ",

            }
        },
    }
});

export default i18n;