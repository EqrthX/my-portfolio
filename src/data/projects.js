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
    title: "projects.project1.title",
    category: "fullstack",
    categoryLabel: "projects.project1.categoryLabel",
    description: "projects.project1.description",
    fullDescription: "projects.project1.fullDescription",
    image: EcomPHP,
    gallery: [
      EcomPHP,
      AdminPHP
    ],
    tags: ["PHP", "MySQL", "JavaScript", "HTML5/CSS3", "Responsive UI", "Bootstrap"],
    features: "projects.project1.features",
    modules: [
      {
        title: "projects.project1.modules.item1.title",
        description: "projects.project1.modules.item1.description",
        image: EcomPHP,
        features: "projects.project1.modules.item1.features"
      },
      {
        title: "projects.project1.modules.item2.title",
        description: "projects.project1.modules.item2.description",
        image: AdminPHP,
        features: "projects.project1.modules.item2.features"
      }
    ],
    github: "https://github.com/EqrthX/SI232-Project-Final-year2-PHP.git"
  },
  {
    id: 2,
    title: "projects.project2.title",
    category: "fullstack",
    categoryLabel: "projects.project2.categoryLabel",
    description: "projects.project2.description",
    fullDescription: "projects.project2.fullDescription",
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
    features: "projects.project2.features",
    modules: [
      {
        title: "projects.project2.modules.item1.title",
        description: "projects.project2.modules.item1.description",
        image: BookUser1,
        features: "projects.project2.modules.item1.features"
      },
      {
        title: "projects.project2.modules.item2.title",
        description: "projects.project2.modules.item2.description",
        image: BookUser2,
        features: "projects.project2.modules.item2.features"
      },
      {
        title: "projects.project2.modules.item3.title",
        description: "projects.project2.modules.item3.description",
        image: BookUser3,
        features: "projects.project2.modules.item3.features"
      },
      {
        title: "projects.project2.modules.item4.title",
        description: "projects.project2.modules.item4.description",
        image: BookUser4,
        features: "projects.project2.modules.item4.features"
      },
      {
        title: "projects.project2.modules.item5.title",
        description: "projects.project2.modules.item5.description",
        image: BookUser5,
        features: "projects.project2.modules.item5.features"
      },
      {
        title: "projects.project2.modules.item6.title",
        description: "projects.project2.modules.item6.description",
        image: BookUserChat,
        features: "projects.project2.modules.item6.features"
      },
      {
        title: "projects.project2.modules.item7.title",
        description: "projects.project2.modules.item7.description",
        image: Book1,
        features: "projects.project2.modules.item7.features"
      },
      {
        title: "projects.project2.modules.item8.title",
        description: "projects.project2.modules.item8.description",
        image: Book2,
        features: "projects.project2.modules.item8.features"
      },
      {
        title: "projects.project2.modules.item9.title",
        description: "projects.project2.modules.item9.description",
        image: Book3,
        features: "projects.project2.modules.item9.features"
      },
      {
        title: "projects.project2.modules.item10.title",
        description: "projects.project2.modules.item10.description",
        image: Book4,
        features: "projects.project2.modules.item10.features"
      },
      {
        title: "projects.project2.modules.item11.title",
        description: "projects.project2.modules.item11.description",
        image: Book5,
        features: "projects.project2.modules.item11.features"
      }
    ],
    github: "https://github.com/EqrthX/Book_University"
  },
  {
    id: 3,
    title: "projects.project3.title",
    category: "fullstack",
    categoryLabel: "projects.project3.categoryLabel",
    description: "projects.project3.description",
    fullDescription: "projects.project3.fullDescription",
    image: DetectImg2,
    video: DetectVideo,
    videoTitle: "projects.project3.videoTitle",
    videoDescription: "projects.project3.videoDescription",
    gallery: [
      DetectImg2,
      DetectImg1,
      DetectImg3,
      DetectImg4,
      DetectImg5,
      DetectImg6
    ],
    tags: ["React", "FastAPI", "Python", "YOLO", "Tailwind CSS", "Supabase", "Javascript", "Roboflow", "CUDA", "Websocket"],
    features: "projects.project3.features",
    modules: [
      {
        title: "projects.project3.modules.item1.title",
        description: "projects.project3.modules.item1.description",
        image: DetectImg1,
        features: "projects.project3.modules.item1.features"
      },
      {
        title: "projects.project3.modules.item2.title",
        description: "projects.project3.modules.item2.description",
        image: DetectImg2,  
        features: "projects.project3.modules.item2.features"
      },
      {
        title: "projects.project3.modules.item3.title",
        description: "projects.project3.modules.item3.description",
        image: DetectImg3,
        features: "projects.project3.modules.item3.features"
      },
      {
        title: "projects.project3.modules.item4.title",
        description: "projects.project3.modules.item4.description",
        image: DetectImg4,
        features: "projects.project3.modules.item4.features"
      },
      {
        title: "projects.project3.modules.item5.title",
        description: "projects.project3.modules.item5.description",
        image: DetectImg6,
        features: "projects.project3.modules.item5.features"
      }
    ],
    github: "https://github.com/EqrthX/FinalProject_WebApp_Detectbehavior"
  },
  {
    id: 4,
    title: "projects.project4.title",
    category: "backend",
    categoryLabel: "projects.project4.categoryLabel",
    description: "projects.project4.description",
    fullDescription: "projects.project4.fullDescription",
    image: BlankImg,
    tags: ["Node.js", "Express", "Sequelize ORM", "MySQL", "Postman", "JWT Auth"],
    features: "projects.project4.features",
    modules: [
      {
        title: "projects.project4.modules.item1.title",
        description: "projects.project4.modules.item1.description",
        image: BlankImg,
        features: "projects.project4.modules.item1.features"
      },
      {
        title: "projects.project4.modules.item2.title",
        description: "projects.project4.modules.item2.description",
        image: BlankImg,
        features: "projects.project4.modules.item2.features"
      }
    ],
    github: "https://github.com/EqrthX/TaskFlow"
  }
]
