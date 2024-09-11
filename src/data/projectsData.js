export const projectsData = [
  {
    id: 1,
    title: "Intelligent System for Project Classification",
    description: "A machine learning-based system designed to classify projects according to Sustainable Development Goals (SDGs), impact areas, and transitions using Natural Language Processing (NLP).",
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
    gallery: [
      "/images/nlp-project-classification.jpg",
      "/images/nlp-project-dashboard.jpg",
      "/images/nlp-project-results.jpg"
    ],
    link: "https://github.com/YassineEnnaya/project-classification"
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
    gallery: [
      "/images/emotion-detection-dashboard.jpg",
      "/images/emotion-detection-analysis.jpg",
      "/images/emotion-detection-results.jpg"
    ],
    link: "https://github.com/YassineEnnaya/emotion-detection"
  },
  {
    id: 3,
    title: "GAN-based Image Generation",
    description: "A project that explores the use of Generative Adversarial Networks (GANs) to generate realistic images.",
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
        name: "Python",
        image: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
      },
    ],
    image: "https://c02.purpledshub.com/uploads/sites/41/2022/10/GANSpreview-tb-f1fb529.jpg?w=1029&webp=1",
    features: [
      "Generation of high-quality images",
      "Training on custom datasets",
      "Visualization of GAN learning progress",
      "Comparison between generated and real images"
    ],
    challenges: [
      {
        title: "Training Stability",
        description: "Maintaining stable training of the GANs to avoid mode collapse.",
        solution: "Application of techniques like batch normalization and Wasserstein loss."
      },
      {
        title: "Quality of Generated Images",
        description: "Enhancing the quality and realism of the generated images.",
        solution: "Tuning the GAN architecture and using advanced loss functions."
      }
    ],
    gallery: [
      "/images/gan-image-gallery.jpg",
      "/images/gan-training-progress.jpg",
      "/images/gan-comparison.jpg"
    ],
    link: "https://github.com/YassineEnnaya/gan-image-generation"
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
    gallery: [
      "/images/facial-recognition-dashboard.jpg",
      "/images/facial-recognition-integration.jpg",
      "/images/facial-recognition-results.jpg"
    ],
    link: "https://github.com/YassineEnnaya/facial-recognition-security"
  },
  {
    id: 5,
    title: "Intelligent PDF Analysis Application",
    description: "A smart PDF analysis tool using a Large Language Model (LLM) and Streamlit, capable of extracting and summarizing key information.",
    technologies: [
      {
        name: "Python",
        image: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
      },
      {
        name: "Streamlit",
        image: "https://streamlit.io/images/brand/streamlit-logo-primary-colormark-darktext.png",
      },
      {
        name: "Gemini",
        image: "https://example.com/images/gemini-logo.png", // Placeholder
      },
      {
        name: "NLP",
        image: "https://example.com/images/nlp-logo.png", // Placeholder
      },
    ],
    image: "https://www.pdfgear.com/chat-pdf/img/best-ai-pdf-analyzers-1.png",
    features: [
      "Extraction of text and key information",
      "Automatic summarization",
      "User-friendly interface for uploading and analyzing PDFs",
      "Support for various document formats"
    ],
    challenges: [
      {
        title: "Accurate Information Extraction",
        description: "Ensuring precise extraction of relevant information from diverse PDF formats.",
        solution: "Use of advanced NLP techniques and LLM capabilities."
      },
      {
        title: "Summarization Quality",
        description: "Producing concise and accurate summaries of extracted content.",
        solution: "Tuning the LLM for optimal performance on document summarization tasks."
      }
    ],
    gallery: [
      "/images/pdf-analysis-dashboard.jpg",
      "/images/pdf-analysis-summary.jpg",
      "/images/pdf-analysis-upload.jpg"
    ],
    link: "https://github.com/YassineEnnaya/pdf-analysis"
  }
];
