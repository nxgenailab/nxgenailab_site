import React from "react";

const resources = [
    {
        section: "Recommended Resources for Teens",
        categories: [
            {
                title: "A. Statistics and Data Science",
                items: [
                    {
                        label: "Book",
                        labelClass: "book-label",
                        title: '"OpenIntro Statistics" by Diez, Barr, Çetinkaya-Rundel',
                        url: "https://www.openintro.org/book/os/",
                        description:
                            "A free and open-source textbook that provides a solid foundation in statistics.  It's very readable and includes many examples.",
                        difficulty: 2,
                    },
                    {
                        label: "Book",
                        labelClass: "book-label",
                        title:
                            '"Data Science from Scratch: First Principles with Python" by Joel Grus',
                        url: "https://www.amazon.com/Data-Science-Scratch-Principles-Python/dp/1491901423",
                        description:
                            "This book teaches the fundamentals of data science and the Python libraries.",
                        difficulty: 3,
                    },
                ],
            },
            {
                title: "B. Basics of Machine Learning",
                items: [
                    {
                        label: "Book",
                        labelClass: "book-label",
                        title:
                            '"Machine Learning For Kids: A Friendly Introduction For Parents And Teachers" by Dale Lane',
                        url: "https://www.amazon.com/Machine-Learning-Beginners-Illustrated-Introduction/dp/1720180536",
                        description:
                            "Introduces machine learning concepts in a very accessible way, with hands-on projects using Scratch and Python.  Great for absolute beginners.",
                        difficulty: 1,
                    },
                    {
                        label: "Book",
                        labelClass: "book-label",
                        title:
                            '"Programming Artificial Intelligence with Swift" by Harrison Miller',
                        url: "https://www.amazon.com/Programming-Artificial-Intelligence-Swift-Develop/dp/1491937121",
                        description:
                            "While focused on Swift, this book provides a gentle introduction to AI and machine learning concepts that are broadly applicable.  Good for those with some programming experience.",
                        difficulty: 2,
                    },
                    {
                        label: "Blog Post",
                        labelClass: "blog-label",
                        title: "Explain it Like I'm Five: Machine Learning",
                        url: "https://medium.com/@mirandarevans/explain-it-like-im-five-machine-learning-c3a12a43ec91",
                        description:
                            "This blog post on Medium provides a simplified explanation of machine learning, breaking down complex concepts into easily understandable terms.",
                        difficulty: 1,
                    },
                ],
            },
            {
                title: "C. Introduction to Deep Learning",
                items: [
                    {
                        label: "Book",
                        labelClass: "book-label",
                        title: '"Make Your Own Neural Network" by Tariq Rashid',
                        url: "https://www.amazon.com/Make-Your-Own-Neural-Network/dp/1720172158",
                        description:
                            "A very clear and visual introduction to neural networks, assuming only basic math knowledge.  Excellent for getting a conceptual understanding.",
                        difficulty: 2,
                    },
                    {
                        label: "Blog Post",
                        labelClass: "blog-label",
                        title: "Learn to Build a Neural Network from Scratch (Yes, Really!)",
                        url: "https://medium.com/@waadlingaadil/learn-to-build-a-neural-network-from-scratch-yes-really-cac4ca457efc",
                        description:
                            "This blog post on Medium guides you through the process of building a neural network from scratch, making deep learning more accessible and hands-on.",
                        difficulty: 3,
                    },
                ],
            },
            {
                title: "D. Natural Language Processing (NLP)",
                items: [
                    {
                        label: "Book",
                        labelClass: "book-label",
                        title: '"Speech and Language Processing" by Dan Jurafsky and James H. Martin',
                        url: "https://web.stanford.edu/~jurafsky/slp3/",
                        description:
                            "While a comprehensive textbook, the initial chapters provide a good introduction to the fundamental concepts of NLP.  Some sections are mathematically involved, but others are more conceptual.  Start with the early chapters.",
                        difficulty: 3,
                    },
                ],
            },
            {
                title: "E. Computer Vision",
                items: [
                    {
                        label: "Book",
                        labelClass: "book-label",
                        title: '"Programming Computer Vision with Python" by Jan Erik Solem',
                        url: "https://www.amazon.com/Programming-Computer-Vision-Python-Tools/dp/1491915347",
                        description:
                            "This book provides a practical introduction to computer vision using Python. It requires some programming knowledge but explains the concepts clearly with examples.  Focus on the earlier chapters.",
                        difficulty: 3,
                    },
                ],
            },
        ],
    },
    {
        section: "Recommended Books for Intermediate Learners",
        categories: [
            {
                title: " ",
                items: [
                    {
                        label: "Book",
                        labelClass: "book-label",
                        title:
                            '"Artificial Intelligence: A Modern Approach" by Stuart Russell and Peter Norvig',
                        url: "https://www.amazon.com/Artificial-Intelligence-Modern-Approach-4th/dp/0134610997",
                        description:
                            "Considered a comprehensive and foundational textbook covering a wide range of AI topics. While it's extensive, the initial chapters provide a solid introduction to the core concepts.",
                        note: "Focus on the first few chapters to grasp the fundamentals.",
                        difficulty: 4,
                    },
                    {
                        label: "Book",
                        labelClass: "book-label",
                        title:
                            '"The Elements of Statistical Learning: Data Mining, Inference, and Prediction" by Trevor Hastie, Robert Tibshirani, and Jerome Friedman',
                        url: "https://web.stanford.edu/~hastie/ElemStatLearn/",
                        description:
                            "Provides a strong mathematical foundation for many machine learning algorithms used in AI. The early chapters on linear models and basic classification are accessible to beginners with some mathematical background.",
                        note: "Excellent for understanding the statistical underpinnings of machine learning.",
                        difficulty: 4,
                    },
                    {
                        label: "Book",
                        labelClass: "book-label",
                        title:
                            '"Hands-On Machine Learning with Scikit-Learn, Keras & TensorFlow" by Aurélien Géron',
                        url: "https://www.oreilly.com/library/view/hands-on-machine-learning/9781492032649/",
                        description:
                            "A more practical guide that helps you learn by implementing machine learning models using popular Python libraries. It bridges the gap between theory and application.",
                        note: "Great for getting your hands dirty with code early on.",
                        difficulty: 3,
                    },
                    {
                        label: "Book",
                        labelClass: "book-label",
                        title: '"Deep Learning with Python" by Francois Chollet',
                        url: "https://www.manning.com/books/deep-learning-with-python-second-edition",
                        description:
                            "This book introduces deep learning using the Keras library.  It's very practical and provides good explanations.",
                        note: "Good for practitioners wanting to learn deep learning.",
                        difficulty: 3,
                    },
                    {
                        label: "Book",
                        labelClass: "book-label",
                        title:
                            '"Python Machine Learning" by Sebastian Raschka and Vahid Mirjalili',
                        url: "https://www.amazon.com/Python-Machine-Learning-scikit-learn-TensorFlow-3rd/dp/1789955750",
                        description:
                            "A comprehensive guide to machine learning with Python, covering various algorithms and techniques with practical examples.",
                        difficulty: 4,
                    },
                ],
            },
        ],
    },
    {
        section: "Recommended Papers for Advanced Learners",
        categories: [
            {
                title: " ",
                items: [
                    {
                        label: "Paper",
                        labelClass: "paper-label",
                        title:
                            '"A Logical Calculus of the Ideas Immanent in Nervous Activity" by Warren S. McCulloch and Walter Pitts (1943)',
                        url: "https://www.cs.cmu.edu/~epxing/Class/10701/readings/mcculloch_pitts.pdf",
                        description:
                            "A foundational paper that introduced the first mathematical model of an artificial neuron. It's historically significant and provides insight into the early ideas of neural networks.",
                        note: "A historical perspective on the origins of neural networks.",
                        difficulty: 4,
                    },
                    {
                        label: "Paper",
                        labelClass: "paper-label",
                        title:
                            '"Computing Machinery and Intelligence" by Alan M. Turing (1950)',
                        url: "http://www.csee.umbc.edu/courses/471/papers/turing.pdf",
                        description:
                            'Introduces the famous "Turing Test" and discusses the possibility of thinking machines. It\'s a philosophical and foundational paper in the field of AI.',
                        note: "Explores the fundamental question of what it means for a machine to be intelligent.",
                        difficulty: 3,
                    },
                    {
                        label: "Paper",
                        labelClass: "paper-label",
                        title:
                            '"Gradient-Based Learning Applied to Document Recognition" by Yann LeCun et al. (1998)',
                        url: "http://yann.lecun.com/exdb/publis/pdf/lecun-98.pdf",
                        description:
                            "Demonstrates the power of convolutional neural networks (CNNs) for image recognition, specifically handwritten digit recognition. It's a key paper in the development of modern deep learning.",
                        note: "An influential work showcasing the effectiveness of deep learning for visual tasks.",
                        difficulty: 4,
                    },
                    {
                        label: "Paper",
                        labelClass: "paper-label",
                        title: '"Attention is All You Need" by Vaswani et al. (2017)',
                        url: "https://arxiv.org/abs/1706.03762",
                        description:
                            "Introduces the Transformer architecture, which has revolutionized Natural Language Processing and is now used in many other areas of AI.",
                        note: "Important for understanding modern NLP.",
                        difficulty: 5,
                    },
                    {
                        label: "Paper",
                        labelClass: "paper-label",
                        title:
                            '"ImageNet Classification with Deep Convolutional Neural Networks" by Krizhevsky et al. (2012)',
                        url: "https://papers.nips.cc/paper/2012/file/c399862d3b9d6b76c8436e924a68c45b-Paper.pdf",
                        description:
                            "A landmark paper that demonstrated the effectiveness of deep CNNs for image classification, significantly impacting the field of computer vision.",
                        difficulty: 5,
                    },
                    {
                        label: "Paper",
                        labelClass: "paper-label",
                        title:
                            '"Human-level control through deep reinforcement learning" by Mnih et al. (2015)',
                        url: "https://www.nature.com/articles/nature14236",
                        description:
                            "Demonstrates the application of deep reinforcement learning to achieve human-level performance in playing Atari games.",
                        difficulty: 5,
                    },
                ],
            },
        ],
    },
];

const difficultyStars = (level: number) =>
    "Difficulty: " + "★".repeat(level) + "☆".repeat(5 - level);

const AIResources: React.FC = () => (
    <>
        <style>{`
            body, .learning-resources-root {
                font-family: 'Roboto', sans-serif;
                margin: 0;
                padding: 0;
                background-color: #f0f0f0;
                color: #333;
            }
            .learning-resources-root {
                margin-top: 40px;
            }
            .header {
                background-color: #172d67;
                color: #fff;
                padding: 10px 0;
                text-align: center;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .header h1 {
                font-size: 2.5em;
                font-weight: 700;
                margin-left: 20px;
            }
            .container {
                max-width: 1200px;
                margin: 30px auto;
                padding: 10px;
            }
            h1 {
                color: #8c15e9;
                text-align: left;
                margin-bottom: 30px;
                font-size: 2em;
                font-weight: 700;
            }
            .resource-section {
                margin-bottom: 50px;
            }
            .resource-list {
                list-style: none;
                padding: 0;
            }
            .resource-item {
                background-color: #fff;
                border-radius: 10px;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                margin-bottom: 20px;
                padding: 20px;
                transition: transform 0.3s ease, box-shadow 0.3s ease;
            }
            .resource-item:hover {
                transform: translateY(-5px);
                box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
            }
            .resource-item h3 {
                color: #172d67;
                font-size: 1.2em;
                font-weight: 700;
                margin-bottom: 10px;
            }
            .resource-item p {
                color: #555;
                line-height: 1.6;
                margin-bottom: 15px;
            }
            .resource-item a {
                color: #2e73e9;
                text-decoration: none;
            }
            .resource-item a:hover {
                text-decoration: underline;
            }
            .book-label {
                display: inline-block;
                background-color: #22ddd2;
                color: #17072b;
                padding: 5px 10px;
                border-radius: 5px;
                font-size: 0.8em;
                margin-right: 10px;
                font-weight: bold;
            }
            .paper-label {
                display: inline-block;
                background-color: #8c15e9;
                color: #fff;
                padding: 5px 10px;
                border-radius: 5px;
                font-size: 0.8em;
                margin-right: 10px;
                font-weight: bold;
            }
            .blog-label {
                display: inline-block;
                background-color: #ffc107;
                color: #17072b;
                padding: 5px 10px;
                border-radius: 5px;
                font-size: 0.8em;
                margin-right: 10px;
                font-weight: bold;
            }
            .difficulty-stars {
                display: inline-block;
                margin-left: 10px;
                font-size: 0.9em;
                color: #ffc107;
            }
            .resource-details {
                font-size: 0.9em;
                color: #777;
                margin-bottom: 5px;
            }
            .logo {
                max-height: 80px;
            }
            .note {
                font-size: 0.95em;
                color: #8c15e9;
                margin-bottom: 5px;
            }
            @media (max-width: 768px) {
                .container {
                    padding: 10px;
                }
                h1 {
                    font-size: 1.5em;
                }
                .header h1 {
                    font-size: 2em;
                }
            }
        `}</style>
        <div className="learning-resources-root">
            <header className="header">
                {/* <img src="../../public/assets/logo-white.png" alt="AI Learning Logo" className="logo" /> */}
                <h1>Comprehensive Guide to AI Resources</h1>
            </header>
            <div className="container">
                {resources.map((section) => (
                    <section className="resource-section" key={section.section}>
                        <h1>{section.section}</h1>
                        {section.categories.map((cat, i) => (
                            cat.title && (
                                <div key={cat.title} className="category">
                                    <h3><b>{cat.title}</b></h3>
                                    <ul className="resource-list">
                                        {cat.items.map((item, idx) => (
                                            <li className="resource-item" key={item.title + idx}>
                                                <span className={item.labelClass}>{item.label}</span>
                                                <h3>
                                                    <a href={item.url} target="_blank" rel="noopener noreferrer">
                                                        {item.title}
                                                    </a>
                                                </h3>
                                                <p>{item.description}</p>
                                                {item.note && <p className="note">{item.note}</p>}
                                                <p className="difficulty-stars">{difficultyStars(item.difficulty)}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )
                        ))}
                    </section>
                ))}
            </div>
        </div>
    </>
);

export default AIResources;