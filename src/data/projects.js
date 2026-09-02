import EcomPHP from '../assets/PHP/E-com_PHP.png'
import AdminPHP from '../assets/PHP/adminPage_PHP.png'
import BlankImg from '../assets/Blank.jpg'

import Book1 from '../assets/Book/file1.jpe'
import Book2 from '../assets/Book/file2.jpe'
import Book3 from '../assets/Book/file3.jpe'
import Book4 from '../assets/Book/file4.jpe'
import Book5 from '../assets/Book/file5.jpe'

import BookUser1 from '../assets/Book/user/file1.jpe'
import BookUser2 from '../assets/Book/user/file2.jpe'
import BookUser3 from '../assets/Book/user/file3.jpe'
import BookUser4 from '../assets/Book/user/file4.jpe'
import BookUser5 from '../assets/Book/user/file5.jpe'
import BookUserChat from '../assets/Book/user/image.png'

import DetectVideo from '../assets/DetectBehavior/ClassLens - Google Chrome 2026-09-02 14-11-09.mp4'
import DetectImg1 from '../assets/DetectBehavior/image.png'
import DetectImg2 from '../assets/DetectBehavior/image copy.png'
import DetectImg3 from '../assets/DetectBehavior/image copy 2.png'
import DetectImg4 from '../assets/DetectBehavior/image copy 3.png'
import DetectImg5 from '../assets/DetectBehavior/image copy 4.png'
import DetectImg6 from '../assets/DetectBehavior/image copy 5.png'

export const projects = [
  {
    id: 1,
    title: {
      th: "เว็บแอปพลิเคชันคัสตอมเครื่องเล่นเกม",
      en: "E-Commerce custom game console Web Application"
    },
    category: "fullstack",
    categoryLabel: {
      th: "ฟูลสแต็กเว็บแอป",
      en: "Full-Stack Web App"
    },
    description: {
      th: "แพลตฟอร์มอีคอมเมิร์ซแบบครบวงจร สร้างขึ้นเป็นโปรเจกต์จบปี 2 ของมหาวิทยาลัย มีระบบแคตตาล็อกสินค้า ระบบจัดการตะกร้าสินค้า และการชำระเงินของลูกค้า",
      en: "A comprehensive e-commerce platform built as a Year 2 university capstone project featuring product catalogs, cart management, and user checkout."
    },
    fullDescription: {
      th: "แพลตฟอร์มอีคอมเมิร์ซบนเว็บที่ใช้ภาษา PHP เป็นหลักที่ออกแบบเองและฐานข้อมูล MySQL มีระบบยืนยันตัวตนแบบแบ่งสิทธิ์การใช้งาน ระบบแยกหมวดหมู่สินค้า ระบบจัดการสถานะตะกร้าสินค้า และการประมวลผลธุรกรรมการสั่งซื้อ ในโปรเจคนี้ผมเป็นคนทำส่วนใหญ่เพราะเป็นต้นไอเดียที่ไปเจอในอินเตอร์เน็ตว่ามีคนรับเพ้นท์และทางผมเลยได้ทำเว็บนี้ขึ้นมา แสดงลายสินค้าที่สามารถเพ้นท์ได้ แต่การทำเว็บครั้ง user ต้องซื้ออุปกรณ์จาก offical มาเองแล้วส่งมาให้ทางเราจะทำการเพ้นท์ลายให้",
      en: "A full-featured web-based e-commerce platform developed with a custom PHP backend and MySQL relational database. Includes role-based authentication, product categorization, shopping cart state management, and order transaction handling."
    },
    image: EcomPHP,
    gallery: [
      EcomPHP,
      AdminPHP
    ],
    tags: ["PHP", "MySQL", "JavaScript", "HTML5/CSS3", "Responsive UI", "Bootstrap"],
    features: {
      th: [
        "ระบบลงทะเบียนผู้ใช้ เข้าสู่ระบบ และการตรวจสอบสิทธิ์เซสชัน",
        "แคตตาล็อกสินค้าที่โต้ตอบได้พร้อมการค้นหาตามหมวดหมู่",
        "ระบบจัดการตะกร้าสินค้าและการคำนวณราคารวม",
        "หน้าควบคุมผู้ดูแลระบบ (Admin) สำหรับการอัปเดตสต็อกสินค้า"
      ],
      en: [
        "User registration, login, and session authentication",
        "Interactive product catalog with category search",
        "Shopping cart management and total calculation",
        "Admin control panel for product stock updates"
      ]
    },
    modules: [
      {
        title: {
          th: "ระบบฝั่งผู้ใช้งานทั่วไป (Client Side)",
          en: "Client-Side User Portal"
        },
        description: {
          th: "ส่วนหน้าเว็บบอร์ดแสดงรายการสินค้า ลายเครื่องเล่นเกมพ่นสีแบบคัสตอม ผู้ใช้งานสามารถลงทะเบียนสมัครสมาชิกเพื่อเข้าถึงการจัดเก็บตะกร้าสินค้าตาม Session เลือกซื้อลายที่เปิดรับบริการ และเข้าสู่ขั้นตอนกรอกรายละเอียดการชำระเงินส่งออเดอร์งานเพ้นท์ โดยมีเงื่อนไขสำคัญคือตัวลูกค้าต้องซื้อเครื่องเล่นเกม Official มาเองและส่งมาพ่นลายกับทางร้าน",
          en: "The storefront display for custom painted console designs. Users can register, log in to secure their persistent cart state, browse available coloring patterns, and submit paint orders. A key policy requires users to ship their official hardware to the workshop for paint application."
        },
        image: EcomPHP,
        features: {
          th: [
            "ระบบสมัครสมาชิกและเข้าสู่ระบบควบคุมเซสชัน (Login & Session)",
            "แคตตาล็อกสินค้าจัดกลุ่มลายพ่นเครื่องเล่นเกมและรายละเอียดราคาบริการ",
            "ระบบคำนวณสรุปยอดและการชำระเงินส่งคำสั่งซื้อ"
          ],
          en: [
            "User registration and secure session state tracking (Login/Logout)",
            "Product catalog classifying custom console prints and paint costs",
            "Shopping cart logic and summary total checkout flow"
          ]
        }
      },
      {
        title: {
          th: "ระบบจัดการส่วนหลังบ้าน (Admin Control Panel)",
          en: "Admin Back-Office Dashboard"
        },
        description: {
          th: "ระบบควบคุมฝั่งผู้ดูแลร้านที่ช่วยตรวจจับออเดอร์ความต้องการเพ้นท์ อัปเดตคิวสถานะออเดอร์เพื่อแจ้งลูกค้า และเครื่องมือจัดการข้อมูลลายสินค้าที่เปิดพ่น รวมถึงควบคุมจํานวนสินค้า/ลายพ่นสต็อกให้สัมพันธ์กับ MySQL Database เพื่อความต่อเนื่องในการเปิดรับพ่นสีแบบวันต่อวัน",
          en: "The backend workspace enabling store administrators to view and process paint order queues, update paint status, and manage console design records linked with a MySQL database."
        },
        image: AdminPHP,
        features: {
          th: [
            "หน้ารวมสรุปข้อมูลความต้องการและออเดอร์ล่าสุดของทางร้าน",
            "ระบบควบคุม จัดเก็บ และอัปเดตสต็อกลายสินค้าในฐานข้อมูล MySQL",
            "เครื่องมือจัดการสถานะออเดอร์เพื่อควบคุมคิวรับงานพ่นสี"
          ],
          en: [
            "Dedicated control panel summaries for store administrators",
            "Direct inventory control tools to modify database console records",
            "Order queue management tools to alter operational queue states"
          ]
        }
      }
    ],
    github: "https://github.com/EqrthX/SI232-Project-Final-year2-PHP.git"
  },
  {
    id: 2,
    title: {
      th: "เว็บไซต์ขายหนังสือมือสองของมหาวิทยาลัย",
      en: "Book University Web Application"
    },
    category: "fullstack",
    categoryLabel: {
      th: "ฟูลสแต็กเว็บแอป",
      en: "Full-Stack Web App"
    },
    description: {
      th: "ระบบจัดการและจำหน่ายหนังสือมือสองของมหาวิทยาลัย ค้นหา ยืม-คืน ซื้อขาย และจัดการสต็อกหนังสือ",
      en: "Web application for a university secondhand book management and exchange platform, cataloging books, trades, and inventory."
    },
    fullDescription: {
      th: "ระบบจัดการข้อมูลหนังสือ ยอดสต็อก รายการสินค้าหนังสือมือสอง และประวัติการทำรายการสำหรับนักศึกษาและเจ้าหน้าที่มหาวิทยาลัย พร้อมส่วนติดต่อผู้ใช้ที่ใช้งานสะดวก รวดเร็ว และครอบคลุมการใช้งาน",
      en: "Full-featured web platform for tracking secondhand book inventories, buy/sell transactions, and student user accounts."
    },
    image: Book1,
    gallery: [
      Book1,
      Book2,
      Book3,
      Book4,
      Book5,
      BookUser1,
      BookUser2,
      BookUser3,
      BookUser4,
      BookUser5,
      BookUserChat
    ],
    tags: ["React", "Node.js", "Express.js", "MySQL", "Tailwind CSS", "REST API"],
    features: {
      th: [
        "หน้ารายการหนังสือและการค้นหาข้อมูลหนังสือแยกประเภทอย่างสะดวก",
        "ระบบจัดการและแสดงผลข้อมูลหนังสือมือสองสำหรับนักศึกษา",
      ],
      en: [
        "Book directory and classification search index layout",
        "Secondhand book listing and user management interface",
        "Transaction records and history tracking container"
      ]
    },
    modules: [
      {
        title: {
          th: "1. หน้าแรกของเว็บไซต์",
          en: "1. Website Homepage"
        },
        description: {
          th: "หน้าแรกส่วนของนักศึกษาจะแสดงหนังสือของนักศึกษาคนอื่นที่ได้ลงขายหนังสือไปแล้ว โดยจะแสดงรูปภาพหน้าปก ราคา ชื่อหนังสือ และผู้ขาย สามารถคลิกเลือกเข้าไปดูเนื้อหาข้างในได้อีกทั้งสามารถค้นหาหนังสือที่ต้องการได้",
          en: "The homepage serves as the primary interface for students to browse and search for secondhand textbooks uploaded by other students. Users can click on any book listing to view detailed information, including cover images, prices, titles, seller details, and internal contents."
        },
        image: BookUser1,
        features: {
          th: [
            "แสดงรายการหนังสือมือสองพร้อมรูปภาพหน้าปก ราคา ชื่อเรื่อง และข้อมูลผู้ขาย",
            "ระบบค้นหาหนังสือที่ต้องการและการคลิกเลือกดูรายละเอียดเชิงลึก"
          ],
          en: [
            "Display secondhand textbooks with cover images, prices, titles, and seller profiles",
            "Book search functionality and detailed item view navigation"
          ]
        }
      },
      {
        title: {
          th: "2. หน้าลงขายหนังสือเรียนมือสอง",
          en: "2. Secondhand Book Listing"
        },
        description: {
          th: "นักศึกษาคนนั้นๆสามารถลงขายหนังสือมือสองต่อได้นอกจากไม่ได้ใช้เรียนต่อแล้ว สามารถนำมาลงขายต่อในเว็บไซต์นี้ได้ ข้อมูลที่จำเป็นต้องกรอกคือรูปภาพหนังสือ ชื่อหนังสือ ราคาที่จะต้องการส่งต่อ รายวิชา การส่งมอบหนังสือ และรายละเอียดเพิ่มเติม ถ้าเราเป็นนัดรับจะให้กรอกข้อมูลเพิ่มเติมที่ใช้สำหรับติดต่อ",
          en: "Students can post their unused secondhand textbooks for sale on the platform. Required input fields include book photos, title, selling price, course name, delivery/pickup method, and additional descriptions. If in-person pickup is chosen, contact details must be provided."
        },
        image: BookUser2,
        features: {
          th: [
            "ฟอร์มบันทึกข้อมูลลงขายหนังสือมือสองสำหรับนักศึกษา",
            "กรอกข้อมูลรูปภาพ ราคา รายวิชา รูปแบบการส่งมอบ และรายละเอียดติดต่อ"
          ],
          en: [
            "Secondhand textbook listing form for student sellers",
            "Upload book photos, set price, specify course, pickup method, and contact info"
          ]
        }
      },
      {
        title: {
          th: "3. หน้าจัดการตะกร้าสินค้าและสรุปคำสั่งซื้อ",
          en: "3. Shopping Cart & Order Checkout"
        },
        description: {
          th: "หน้าตะกร้าสินค้าแสดงรายการหนังสือที่เลือก คำนวณสรุปยอดเงิน ระบบบันทึก Session ตะกร้าสินค้าแยกตามบัญชีผู้ใช้ และขั้นตอนส่งออเดอร์",
          en: "Shopping cart interface displaying selected books, total price calculation, persistent user session cart storage, and order submission flow."
        },
        image: BookUser3,
        features: {
          th: [
            "คำนวณราคารวมของหนังสือในตะกร้าสินค้าอัตโนมัติ",
            "ระบบจัดเก็บรายการตะกร้าสินค้าตาม Session ของผู้ใช้งาน"
          ],
          en: [
            "Automatic total price calculation for selected books",
            "Persistent session-based shopping cart storage per user account"
          ]
        }
      },
      {
        title: {
          th: "4. หน้าประวัติของนักศึกษา",
          en: "4. Student Profile & Transaction Logs"
        },
        description: {
          th: "ใช้สำหรับดูข้อมูลชื่อของเราและสามารถเลือกดูประวัติการซื้อและประวัติการขายได้",
          en: "Used for viewing personal account profile details and switching between purchase history and book listing sales history."
        },
        image: BookUser4,
        features: {
          th: [
            "แสดงข้อมูลโปรไฟล์ชื่อและรายละเอียดบัญชีนักศึกษา",
            "เมนูลัดเลือกสลับดูประวัติรายการสั่งซื้อและประวัติการลงขายหนังสือ"
          ],
          en: [
            "Display student profile information and user account details",
            "Toggle menu between purchase history logs and book sales records"
          ]
        }
      },
      {
        title: {
          th: "5. หน้าประวัติการทำรายการ",
          en: "5. Order & Rental Transaction History"
        },
        description: {
          th: "หน้ารวบรวมประวัติการสั่งซื้อหนังสือมือสองและการยืมคืนย้อนหลังทั้งหมด",
          en: "Comprehensive transaction history log recording all past secondhand book purchases, sales, and borrow-return archives."
        },
        image: BookUser5,
        features: {
          th: [
            "รวบรวมประวัติการสั่งซื้อและการยืมคืนหนังสือย้อนหลังทั้งหมด",
            "ตรวจสอบรายละเอียดและสถานะของแต่ละรายการทำรายการ"
          ],
          en: [
            "Complete archive of all past book purchases and borrow-return records",
            "Verify transaction states and historical order details"
          ]
        }
      },
      {
        title: {
          th: "6. หน้าสนทนาและติดต่อสื่อสาร (Student Chat)",
          en: "6. Student Chat & Communication Portal"
        },
        description: {
          th: "หน้าสำหรับพูดคุยกับนักศึกษาท่านอื่นๆ สามารถใช้ติดต่อสื่อสารเพื่อนัดรับหรือตกลงการซื้อขายหนังสือมือสองกันได้อย่างสะดวก",
          en: "Chat interface allowing students to communicate directly with other students to negotiate, discuss book details, and coordinate pickup or purchase agreements."
        },
        image: BookUserChat,
        features: {
          th: [
            "ระบบแชทสนทนารายบุคคลระหว่างนักศึกษา",
            "สื่อสารตกลงนัดรับและติดต่อสอบถามรายละเอียดการซื้อขายหนังสือ"
          ],
          en: [
            "Direct student-to-student instant messaging system",
            "Coordinate book pickup locations and negotiate purchase details"
          ]
        }
      },
      {
        title: {
          th: "7. หน้าภาพรวมคลังหนังสือหลังบ้าน",
          en: "7. Admin Faculty Student Permission Dashboard"
        },
        description: {
          th: "หน้านี้จะทำหน้าที่เพิ่มรายชื่อนักศึกษาเข้าไปเพื่อที่ให้นักศึกษามีสิทธิ์ในการใชเว็บไซต์นี้ได้",
          en: "This page serves as the faculty admin interface for managing student access permissions and registering new eligible users to the platform."
        },
        image: Book1,
        features: {
          th: [
            "เพิ่มและจัดการข้อมูลรายชื่อนักศึกษาที่มีสิทธิ์เข้าใช้งานเว็บไซต์",
            "บันทึกและตรวจสอบสิทธิ์บัญชีนักศึกษาลงในฐานข้อมูล MySQL"
          ],
          en: [
            "Register and manage eligible student entries for platform access",
            "Store student user permissions in MySQL database"
          ]
        }
      },
      {
        title: {
          th: "8. หน้าตรวจสอบหนังสือ",
          en: "8. Book Listing Verification & Approval"
        },
        description: {
          th: "เวลามีนักศึกษาได้ทำการจะขายหนังสือทางแอดมินจะเห็นนักศึกษาโพสขายหนังสือเข้ามาแต่เพื่อเช็คว่านักศึกษาคนนั้นขายหนังสือจริงๆหรือใส่รูปเล่นๆมา แอดมินจะเป็นคนเช็คก่อนถ้าถูกต้องจะทำการอนุมัติให้ขายได้",
          en: "When a student posts a book for sale, admins review the incoming listing submission to verify genuine book photos and details before granting approval to publish it on the site."
        },
        image: Book2,
        features: {
          th: [
            "ระบบตรวจสอบรายการโพสต์ขายหนังสือจากนักศึกษาก่อนอนุมัติขึ้นเว็บ",
            "ฟังก์ชันการตรวจเช็ครูปภาพ ความถูกต้อง และกดอนุมัติรายการขาย"
          ],
          en: [
            "Admin review queue for incoming student book listing posts",
            "Verification of book photo authenticity and listing approval workflow"
          ]
        }
      },
      {
        title: {
          th: "9. หน้าจัดการออเดอร์และการชำระเงิน",
          en: "9. Order & Payment Verification Queue"
        },
        description: {
          th: "หน้านี้ใช้สำหรับดูข้อมูลการซื้อขายต่างๆของนักศึกษาว่าการจ่ายเงินนั้นถูกต้องหรือไม่",
          en: "Operations workspace enabling admin staff to review student transaction details and verify if payment transfers and receipts are valid."
        },
        image: Book3,
        features: {
          th: [
            "ตรวจสอบข้อมูลการทำรายการซื้อขายและหลักฐานการชำระเงินของนักศึกษา",
            "ยืนยันความถูกต้องของการจ่ายเงินเพื่ออนุมัติขั้นตอนถัดไป"
          ],
          en: [
            "Review student transaction records and payment slip confirmations",
            "Verify payment validity to approve order processing"
          ]
        }
      },
      {
        title: {
          th: "10. หน้าการจัดการผู้ใช้งาน (พัฒนาเพิ่มเติมหลังจากจบโปรเจกต์)",
          en: "10. Active User Management (Post-Project Feature)"
        },
        description: {
          th: "ในส่วนของหน้านี้ผมคิดขึ้นมาว่าจะทำขึ้นเพื่อตรวจสอบรายชื่อนักศึกษาที่มีอยู่ในระบบและดูการใช้ว่านักศึกษากำลังใช้งานอยู่ไหม",
          en: "A feature concept created post-project phase to inspect registered student accounts in the system and monitor real-time user active status."
        },
        image: Book4,
        features: {
          th: [
            "ตรวจสอบรายชื่อบัญชีนักศึกษาทั้งหมดที่ลงทะเบียนในระบบ",
            "ติดตามและดูสถานะการใช้งานจริงของนักศึกษาว่ากำลังออนไลน์อยู่หรือไม่"
          ],
          en: [
            "Inspect total registered student accounts in the system database",
            "Track active online status and user platform engagement"
          ]
        }
      },
      {
        title: {
          th: "11. หน้าตั้งค่าระบบและจัดการสิทธิ์ผู้ใช้",
          en: "11. System Settings & Role Management"
        },
        description: {
          th: "หน้าตั้งค่าส่วนหลังบ้านสำหรับบริหารจัดการสิทธิ์บัญชีผู้ใช้ (นักศึกษา / ผู้ดูแลระบบ) ตั้งค่าอัตราค่าปรับ และตั้งค่าหมวดหมู่คณะวิชา",
          en: "Backend administration workspace managing user roles and permissions (Student/Admin), global penalty fee rates, and category settings."
        },
        image: Book5,
        features: {
          th: [
            "จัดการสิทธิ์บัญชีผู้ใช้และกำหนดบทบาทการเข้าถึง (User Roles)",
            "ตั้งค่าหมวดหมู่หนังสือ คณะวิชา และอัตราค่าธรรมเนียมกลาง"
          ],
          en: [
            "User permissions and role authority access manager",
            "Global faculty categories and penalty fee rate configurations"
          ]
        }
      }
    ],
    github: "https://github.com/EqrthX/Book_University"
  },
  {
    id: 3,
    title: {
      th: "ระบบตรวจจับพฤติกรรม (Detect Behavior)",
      en: "Behavior Detection Web Application"
    },
    category: "fullstack",
    categoryLabel: {
      th: "ฟูลสแต็กเว็บแอป & AI",
      en: "Full-Stack Web App & AI"
    },
    description: {
      th: "เป็นโปรเจคจบที่นำเรื่อง Meachine Learing มาประยุกต์กับ Web Application เพื่อตรวจจับพฤติกรรมนักศึกษาในห้องแลปคอมพิวเตอร์โดยใช้กล้องเว็บแคม",
      en: "A capstone web application applying Machine Learning & YOLO computer vision models to detect student behaviors in a computer lab using webcam feeds."
    },
    fullDescription: {
      th: "เป็นโปรเจคจบที่นำเรื่อง Meachine Learing มาประยุกต์กับ Web Application เพื่อตรวจจับพฤติกรรมนักศึกษาในห้องแลปคอมพิวเตอร์โดยใช้กล้องเว็บแคม ดูผล Dashboard เพื่อดูพฤติกรรมเด็กที่ได้รับการตรวจจับได้ว่าทำอะไรอยู่ โดยจะแยกเป็นพฤติกรรม นั่งเล่นโทรศัพท์, มองซ้าย มองขวา, มองกระดาน, ก้มหน้า",
      en: "A capstone project combining Machine Learning with a Web Application to detect student behaviors in a computer lab via real-time webcam feeds. The dashboard visualizes detected behaviors classified into 4 categories: playing on phone, looking left/right, looking at board, and bowing head."
    },
    image: DetectImg1,
    video: DetectVideo,
    videoTitle: {
      th: "วิดีโอตัวอย่างผลลัพธ์การตรวจจับพฤติกรรม (AI Detection Result Demo)",
      en: "Real-time AI Behavior Detection Result Demo"
    },
    videoDescription: {
      th: "วิดีโอตัวอย่างแสดงผลลัพธ์การประมวลผลของโมเดล YOLO บนกล้องเว็บแคมเรียลไทม์ เพื่อจำแนกพฤติกรรมนักศึกษาเป็น 4 หมวดหมู่: นั่งเล่นโทรศัพท์, มองซ้าย-มองขวา, มองกระดาน และก้มหน้า",
      en: "Demonstration video showcasing real-time YOLO model inference on webcam feeds, classifying student behaviors into 4 categories: playing on phone, looking left/right, looking at board, and bowing head."
    },
    gallery: [
      DetectImg1,
      DetectImg2,
      DetectImg3,
      DetectImg4,
      DetectImg5,
      DetectImg6
    ],
    tags: ["React", "FastAPI", "Python", "YOLO", "Tailwind CSS", "Supabase", "Javascript", "Roboflow", "CUDA", "Websocket"],
    features: {
      th: [
        "เชื่อมต่อและดึงข้อมูลจากโมเดล YOLO ที่ผ่านการฝึกบน Roboflow และรันบนเครื่องที่มี CUDA เพื่อประมวลผลแบบเรียลไทม์",
        "แสดงผลพฤติกรรมนักศึกษาผ่าน Web Dashboard ที่มีการวิเคราะห์จากโมเดลแบบสดๆ",
        "เก็บข้อมูลประวัติพฤติกรรมที่ตรวจจับได้ลงฐานข้อมูล Supabase เพื่อการตรวจสอบและวิเคราะห์ย้อนหลัง"
      ],
      en: [
        "Connect and stream data from YOLO models trained on Roboflow running with CUDA acceleration for real-time inference",
        "Display real-time student behavior analytics and classification on a live web dashboard",
        "Store historical behavior logs into Supabase database for tracking and analytics"
      ]
    },
    modules: [
      {
        title: {
          th: "1. Supabase",
          en: "1. RSupabase"
        },
        description: {
          th: "Supabase เหตุผลที่ผมเลือกใช้ Supabase เพราะเคยเจอปัญหาเรื่องเวลา Develop โปรเจคนึงแล้วต้องเวลามีการเช็คข้อมูลว่าถูกต้องก่อนพรีเซน หรือเช็คข้อมูลไปเช็คข้อมูลกลับ ต้อง export ข้อมูลจากเครื่องผมส่งไปยังอีกเครื่องเพื่อนแล้วก็อาจจะปัญหาเรื่องการ Import ผมเลยใช้ Supabase เข้ามาแก้ปัญหาการ export import ด้วยการที่ใช้ database บน cloud เพื่อให้เพื่อนที่อยู่ในโปรเจคสามารถดูข้อมูลพร้อมกับเราได้ตลอดเวลาโดยไม่ต้อง import export จากเครื่องคนที่ develop ล่าสุด",
          en: "Supabase is a Backend as a Service (BaaS) platform that provides a PostgreSQL database, authentication, storage, and real-time subscriptions. I chose Supabase for this project because it solves the common issue of managing database exports and imports during development. By using Supabase, team members can access the same database directly from their local machines without the need for manual export/import operations, ensuring everyone works with consistent and up-to-date data."
        },
        image: DetectImg1,
        features: {
          th: [
            "ดู status database ได้ real time",
            "สามารถเช็คการ Request ลง database ต่อวันได้",
          ],
          en: [
            "Real-time video stream container with AI behavior detection bounding boxes",
            "Overlaid behavior classification labels (phone usage, looking left/right, looking at board, bowing head)"
          ]
        }
      },
      {
        title: {
          th: "2. หน้าแรกของเว็บไซต์",
          en: "2. Behavior Analytics & Classification Overview"
        },
        description: {
          th: "หน้าจอภาพรวมทั้งหมดของข้อมูลต่างๆเช่น ชื่ออาจารย์ ตารางสอน และข้อมูลที่ได้ทำการตรวจจับล่าสุด",
          en: "This is the first screen of the website, which is the home screen. It displays all the information such as the name of the professor, the class schedule, and the latest detected data."
        },
        image: DetectImg2,  
        features: {
          th: [
            "กราฟสรุปสัดส่วนพฤติกรรมนักศึกษาแต่ละประเภทในห้องแลป",
          ],
          en: [
            "Graphical breakdown of detected behavior proportions in computer labs",
          ]
        }
      },
      {
        title: {
          th: "3. หน้าจอตารางสอน",
          en: "3. Historical Behavior Logs & Query Interface"
        },
        description: {
          th: "หน้านี้อาจารย์จะเลือกวิชาที่ต้องการตรวจจับได้ โดยเลือกตามในตารางสอนของอาจารย์ได้เลย ว่ากำลังสอนวิชาอะไรอยู่ก็เลือกวิชานั้นๆก็สามารถตรวจจับได้เลย",
          en: "Historical detection log table querying data stored in Supabase, allowing users to filter behavior records by timestamps and categories."
        },
        image: DetectImg3,
        features: {
          th: [
            "ตารางของอาจารย์",
          ],
          en: [
            "Historical log table synced with Supabase database",
          ]
        }
      },
      {
        title: {
          th: "4. หน้าจอแสดงผลการตรวจจับทั้งหมด",
          en: "4. Camera Stream & Model Connection Management"
        },
        description: {
          th: "หน้านี้จะดึงข้อมูลจาก Supabase มาแสดงผลที่อาจารย์ตรวจจับ อาจารย์จะสามารถเลือก Filter วันที่ วิชา กลุ่ม ได้เพื่อดูรายละเอียดต่างๆที่อาจารย์สนใจได้",
          en: "This screen retrieves data from Supabase to display detected information. Users can filter by date, course, and group to view specific details of interest."
        },
        image: DetectImg4,
        features: {
          th: [
            "ระบบดึงและสตรีมเฟรมภาพความเร็วสูงผ่าน WebSocket",
            "การเชื่อมต่อ GPU CUDA เพื่อเร่งความเร็วการ Inference ของโมเดล YOLO"
          ],
          en: [
            "High-speed frame extraction and WebSocket streaming system",
            "GPU CUDA acceleration setup for real-time YOLO model inference"
          ]
        }
      },
      {
        title: {
          th: "5. ระบบสำรองข้อมูลพฤติกรรมและการบันทึกลง Supabase",
          en: "5. Temporary JSON Buffer & Supabase Sync Pipeline"
        },
        description: {
          th: "ในระหว่างการตรวจจับพฤติกรรม ระบบจะบันทึกข้อมูลลงไฟล์ JSON ชั่วคราวก่อน เพื่อป้องกันข้อมูลสูญหายในกรณีที่การเชื่อมต่อหลุด หรืออาจารย์กดปิดโปรแกรมกระทันหัน และเมื่อกดจบการตรวจจับเรียบร้อยแล้ว ระบบจะนำไฟล์ JSON นั้นไปบันทึกลงฐานข้อมูล Supabase ทันที",
          en: "During real-time behavior detection, logs are continuously written to a temporary JSON file first to prevent data loss if connection drops or if the application is closed. Once 'End Detection' is clicked, the JSON file data is synced and saved directly into Supabase."
        },
        image: DetectImg6,
        features: {
          th: [
            "บันทึกผลการตรวจจับลงไฟล์ JSON ชั่วคราวป้องกันการหลุดหรือปิดโปรแกรม",
            "ซิงก์และจัดเก็บข้อมูลจากไฟล์ JSON เข้าสู่ฐานข้อมูล Supabase เมื่อกดจบการตรวจจับ"
          ],
          en: [
            "Temporary JSON buffering during active detection to prevent data loss",
            "Batch synchronization of JSON logs into Supabase upon clicking End Detection"
          ]
        }
      }
    ],
    github: "https://github.com/EqrthX/FinalProject_WebApp_Detectbehavior"
  },
  {
    id: 4,
    title: {
      th: "ระบบจัดการงานและเวิร์กโฟลว์ (TaskFlow)",
      en: "TaskFlow Project Management"
    },
    category: "backend",
    categoryLabel: {
      th: "บริการหลังบ้าน & API",
      en: "Backend REST API"
    },
    description: {
      th: "โครงร่างระบบจัดการงานและมอบหมายโปรเจกต์ภายในทีม ช่วยจัดลำดับความสำคัญและควบคุมขั้นตอนงานอย่างมีประสิทธิภาพ",
      en: "Project and task allocation backend API scaffold to arrange task weights and monitor collaborative workflows."
    },
    fullDescription: {
      th: "โครงร่างบริการหลังบ้าน API สำหรับระบบมอบหมายงาน ติดตามสถานะโปรเจกต์ และการวิเคราะห์ประสิทธิภาพการทำงานแบบกลุ่ม",
      en: "Backend service API scaffold designed for assigning tickets, tracking project status, and analyzing team productivity levels."
    },
    image: BlankImg,
    tags: ["Node.js", "Express", "Sequelize ORM", "MySQL", "Postman", "JWT Auth"],
    features: {
      th: [
        "โครงร่างระบบลงทะเบียนผู้ใช้และแจกจ่ายสิทธิ์แบบสิทธิ์ระดับทีม (Scaffold)",
        "โครงร่าง API มอบหมายตั๋วงานและติดตามกระบวนการทำงานแบบบอร์ด Kanban",
        "ระบบเชื่อมโยงข้อมูลแบบ One-to-Many ระหว่างโครงการและรายการงานย่อย"
      ],
      en: [
        "User roles assignment and token authentication schema design",
        "Task ticket creations and board workflow state transitions API",
        "Relational model linking projects to child tasks under MySQL"
      ]
    },
    modules: [
      {
        title: {
          th: "ส่วนบริการจัดการบัญชีผู้ใช้งาน (User & Roles API)",
          en: "User & Role Authentication Service"
        },
        description: {
          th: "โครงร่าง REST API สำหรับการลงทะเบียน ยืนยันตัวตนด้วย JWT และจัดหมวดหมู่กลุ่มสิทธิ์แอดมินหรือสมาชิกทีม",
          en: "Identity API endpoints controlling register, JWT logins, and granular team authority structures."
        },
        image: BlankImg,
        features: {
          th: [
            "จุดเชื่อมต่อสำหรับการลงทะเบียนและการตรวจสอบโทเค็นผู้ใช้",
            "ระบบมิดเดิลแวร์คัดกรองความปลอดภัยระดับ API"
          ],
          en: [
            "Register and token verify endpoint controllers",
            "Token authentication security middleware setup"
          ]
        }
      },
      {
        title: {
          th: "ส่วนจัดการงานและตั๋วงาน (Task Distribution Engine)",
          en: "Task Distribution Engine"
        },
        description: {
          th: "โครงร่างฟังก์ชันสร้าง ลบ แก้ไข ตั๋วงาน และสลับคอลัมน์คิวสถานะงานผ่าน API endpoints",
          en: "REST controller endpoints handling task creations, modifications, deletions, and queue status shifts."
        },
        image: BlankImg,
        features: {
          th: [
            "จุดเชื่อมต่อสำหรับจัดการ CRUD รายการตั๋วงาน",
            "ตารางการสืบค้นความสัมพันธ์ระหว่างโปรเจกต์และผู้รับผิดชอบงาน"
          ],
          en: [
            "CRUD endpoints for handling task tickets",
            "Relational querying schema for assigning work details to users"
          ]
        }
      }
    ],
    github: "https://github.com/EqrthX/TaskFlow"
  }
]
