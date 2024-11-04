export const projectsData = [
  {
    id: 1,
    title: "Intelligent System for Project Classification",
    description: "A machine learning-based system designed to classify projects according to Sustainable Development Goals (SDGs), impact areas, and transitions using Natural Language Processing (NLP), A Web APP using FASTAPI and REACT.",
    technologies: [
      {
        name: "Python",
        image: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
      },
      {
        name: "TensorFlow",
        image: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg",
      },
      {
        name: "Keras",
        image: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Keras_logo.svg",
      },
      {
        name: "Scikit-Learn",
        image: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
      },
      {
        name: "FastAPI",
        image: "https://fastapi.tiangolo.com/img/logo-margin/logo-teal.png",
      },
      {
        name: "React",
        image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      }
    ],
    image: "https://images.prismic.io/turing/652ebe6bfbd9a45bcec81881_Natural_Language_Processing_Functionality_in_AI_95cadec9bc.webp?auto=format,compress",
    features: [
      "NLP-based project classification",
      "Impact areas and transition analysis",
      "SDG alignment assessment",
      "Web interface for project input and results display"
    ],
    challenges: [
      {
        title: "NLP Model Training",
        description: "Training NLP models to accurately classify text data related to projects.",
        solution: "Utilization of TF-IDF and Word2Vec embeddings combined with supervised learning techniques."
      },
      {
        title: "API Integration",
        description: "Integrating the trained model into a web application.",
        solution: "Development of a RESTful API using FastAPI for model deployment."
      }
    ],
    
    link: "https://github.com/Ysen0603/odd_di_tf_app"
  },
  {
    id: 2,
    title: "Facial Emotion Detection",
    description: "A deep learning project focused on detecting facial emotions using TensorFlow, Keras, and YOLOv8.",
    technologies: [
      {
        name: "TensorFlow",
        image: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg",
      },
      {
        name: "Keras",
        image: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Keras_logo.svg",
      },
      {
        name: "OpenCV",
        image: "https://upload.wikimedia.org/wikipedia/commons/3/32/OpenCV_Logo_with_text_svg_version.svg",
      },
      {
        name: "YOLOv8",
        image: "https://example.com/images/yolov8-logo.png", // Placeholder
      },
    ],
    image: "https://images.thequint.com/thequint%2F2020-01%2Fd3597111-27b9-4a76-87cf-71f1d0f5635a%2Ffacial_recog.jpg?rect=0%2C0%2C1200%2C675",
    features: [
      "Real-time emotion detection",
      "Support for multiple emotions",
      "Two versions: TensorFlow/Keras and YOLOv8",
      "Interactive visualization of detected emotions"
    ],
    challenges: [
      {
        title: "Model Accuracy",
        description: "Achieving high accuracy in emotion detection across different faces.",
        solution: "Experimentation with different CNN architectures and data augmentation techniques."
      },
      {
        title: "Real-time Processing",
        description: "Ensuring the model runs efficiently in real-time.",
        solution: "Optimization of the model using YOLOv8 for faster inference."
      }
    ],
    
    link: "https://github.com/Ysen0603/YOLOV8_Emotions"
  },
  {
    "id": 3,
    "title": "Matcher CV Application",
    "description": "A dynamic CV matcher application that leverages React for the frontend and FastAPI for the backend, utilizing Gemini for advanced analysis of job descriptions and CVs.",
    "technologies": [
        {
            "name": "React",
            "image": "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
        },
        {
            "name": "FastAPI",
            "image": "https://fastapi.tiangolo.com/img/logo-margin/logo-teal.png"
        },
        {
            "name": "Gemini",
            "image": "https://example.com/images/gemini-logo.png" // Placeholder
        },
        {
            "name": "NLP",
            "image": "https://example.com/images/nlp-logo.png" // Placeholder
        }
    ],
    "image": "https://f.hellowork.com/helloworkplace/2021/02/recrutement_matching_cv.jpg", // Placeholder for app screenshot
    "features": [
        "Seamless integration of job descriptions and CVs",
        "Real-time matching and scoring of applicants",
        "User-friendly interface for uploading CVs and job descriptions",
        "Detailed analysis and feedback on applicant suitability"
    ],
    "challenges": [
        {
            "title": "Data Accuracy",
            "description": "Ensuring the accurate extraction and interpretation of data from diverse CV formats.",
            "solution": "Implementation of robust parsing algorithms and data validation techniques."
        },
        {
            "title": "Scalability",
            "description": "Handling increased loads of job descriptions and CV submissions efficiently.",
            "solution": "Adoption of asynchronous processing with FastAPI and optimization of backend services."
        }
    ],
    "gallery": [
        "https://example.com/images/matcher-cv-screenshot1.png", // Placeholder for screenshots
        "https://example.com/images/matcher-cv-screenshot2.png",
        "https://example.com/images/matcher-cv-screenshot3.png"
    ],
    "link": "https://github.com/Ysen0603/CV"
},
  {
    id: 4,
    title: "Security System Using Facial Recognition",
    description: "A facial recognition-based security system developed during an internship, focusing on user authentication.",
    technologies: [
      {
        name: "OpenCV",
        image: "https://upload.wikimedia.org/wikipedia/commons/3/32/OpenCV_Logo_with_text_svg_version.svg",
      },
      {
        name: "Python",
        image: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
      },
      {
        name: "TensorFlow",
        image: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg",
      },
      {
        name: "Dlib",
        image: "https://dlib.net/images/dlib-logo.png", // Placeholder
      },
    ],
    image: "https://securitytoday.com/-/media/SEC/Security-Products/Images/2020/06/facial_recognition.jpg",
    features: [
      "Real-time facial recognition",
      "High accuracy with deep learning",
      "Integration with existing security infrastructure",
      "User-friendly interface for adding/removing users"
    ],
    challenges: [
      {
        title: "Recognition Accuracy",
        description: "Ensuring accurate and reliable recognition under various conditions.",
        solution: "Using advanced feature extraction techniques and data augmentation."
      },
      {
        title: "System Integration",
        description: "Seamlessly integrating the recognition system with existing security protocols.",
        solution: "Custom API development for smooth communication with other systems."
      }
    ],
    
    link: "https://github.com/Ysen0603/Face_recognition"
  },
  {
    "id": 5,
    "title": "Social Connect App",
    "description": "A mobile social networking app built with React Native and Expo, providing user profiles, and posts. The backend is powered by FastAPI, ensuring fast and reliable API services.",
    "technologies": [
      {
        "name": "React Native",
        "image": "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
      },
      {
        "name": "Expo",
        "image": "https://upload.wikimedia.org/wikipedia/commons/6/67/Expo.svg"
      },
      {
        "name": "FastAPI",
        "image": "https://fastapi.tiangolo.com/img/logo-margin/logo-teal.png"
      },
      {
        "name": "WebSocket",
        "image": "https://example.com/images/websocket-logo.png" // Placeholder for WebSocket logo
      }
    ],
    "image": "https://www.addevice.io/storage/ckeditor/uploads/images/6597be3d2e997_how.to.make.a.social.media.app.png", // Placeholder image for the app screenshot
    "features": [
      "Real-time Notifications with WebSocket",
      "User authentication (OAuth and JWT)",
      "Post creation with images,videos and text",
      "User profiles with avatars and bios",
      
      "Follow system for connecting with friends",
      "Dark mode"
    ],
    "challenges": [
      {
        "title": "Real-time Notifications",
        "description": "Implementing efficient and scalable real-time messaging.",
        "solution": "WebSocket integration with FastAPI for real-time Notifications, ensuring low latency."
      },
      {
        "title": "User Authentication and Security",
        "description": "Securing user data and managing authentication in a seamless manner.",
        "solution": "JWT-based authentication for secure API access, with encrypted user data."
      }
    ],
    
    "link": "https://github.com/Ysen0603/React_app"
  }
  
];
