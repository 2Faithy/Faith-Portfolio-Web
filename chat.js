/* Initialize Particles.js */
particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 80,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#00adb5"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#fff"
            }
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#00adb5",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "grab"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 140,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});

function toggleNavbar() {
    const navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", () => {
    const typedTextElement = document.getElementById("typed-text");
    const textArray = [
        "Web Developer.",
        "Advanced Front-end Developer.",
        "Software Engineer.",
        "Mobile App developer.",
    ];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeText() {
        const currentText = textArray[textIndex];
        if (isDeleting) {
            typedTextElement.textContent = currentText.slice(0, charIndex--);
        } else {
            typedTextElement.textContent = currentText.slice(0, charIndex++);
        }

        // Typing speed adjustments
        let typingSpeed = isDeleting ? 50 : 100;

        // When a word is fully typed
        if (!isDeleting && charIndex === currentText.length) {
            isDeleting = true;
            typingSpeed = 1000; // Pause before deleting
        }

        // When a word is fully deleted
        if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % textArray.length; // Move to the next word
        }

        setTimeout(typeText, typingSpeed);
    }

    typeText();
});


// Chatbox toggle functionality
function toggleChatbox() {
    const chatbox = document.getElementById("chatbox");
    chatbox.style.display = chatbox.style.display === "flex" ? "none" : "flex";
}

// Handle input and simulate Nexi's responses
function handleInput(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}

function sendMessage() {
    const userInput = document.getElementById("user-input").value.trim();
    if (!userInput) return;

    const chatLog = document.getElementById("chat-log");

    // Add user message
    const userMessage = document.createElement("div");
    userMessage.className = "user-message";
    userMessage.innerHTML = `<span>${userInput}</span>`;
    chatLog.appendChild(userMessage);

    // Nexi's response
    const nexiMessage = document.createElement("div");
    nexiMessage.className = "nexi-message";

    // Adding profile image to Nexi's message
    const profileImage = `<img src="images/img9.png" alt="Nexi AI">`;
    let response = generateResponse(userInput);

    nexiMessage.innerHTML = `${profileImage}<span>${response}</span>`;
    chatLog.appendChild(nexiMessage);

    // Scroll to the bottom of the chat log
    chatLog.scrollTop = chatLog.scrollHeight;

    // Clear the input field
    document.getElementById("user-input").value = "";
}

// Function to generate advanced responses based on the user input
function generateResponse(userInput) {
    userInput = userInput.toLowerCase();

    if (userInput.includes("hi") || userInput.includes("hey") || userInput.includes("hello"))
        return "Hello! I'm Nexi, your AI assistant. I can help you explore Faith's portfolio, guide you through software development processes, debug your code, and provide insights into AI and tech best practices. Feel free to ask me anything!";

    if (userInput.includes("introduction") || userInput.includes("who are you") || userInput.includes("what can you do")) {
        return "Hello! I'm Nexi, your AI assistant. I can help you explore Faith's portfolio, guide you through software development processes, debug your code, and provide insights into AI and tech best practices. Feel free to ask me anything!";
    }

    if (userInput.includes("about me") || userInput.includes("who am i")) {
        return "Faith is a passionate software engineer, Web and mobile app developer and advanced frontend devloper with a focus on clean code, problem-solving, and innovative solutions. She has a strong foundation in software development principles and continuously strive to learn and adapt to new technologies. Her goal is to create meaningful, user-centric applications that solve real-world problems.";
    }

    if (userInput.includes("testimonial") || userInput.includes("reviews") || userInput.includes("feedback")) {
        return "Here's what people have said about my work: 'Faith is an incredibly skilled software engineer who approaches every challenge with creativity and professionalism. Her ability to deliver results on time is unmatched!' - Former colleague.";
    }

    if (userInput.includes("cv") || userInput.includes("curriculum vitae") || userInput.includes("resume")) {
        return "You can view my detailed CV here: [Insert link to CV]. It outlines my educational background, work experience, and the skills I’ve developed over the years. Feel free to check it out!";
    }

    if (userInput.includes("portfolio") || userInput.includes("projects")) {
        return "Here are some notable projects in my portfolio: A real-time chat application built with WebSockets, a recommendation system using machine learning, and a task automation bot that streamlines business processes. Would you like more details on any of these?";
    }

    if (userInput.includes("experience") || userInput.includes("work experience")) {
        return "I have worked on a variety of projects across different domains, from web development to AI and automation. My previous roles involved working with teams to deliver innovative software solutions, designing user-friendly applications, and ensuring scalability and performance optimization.";
    }

    if (userInput.includes("contact") || userInput.includes("get in touch") || userInput.includes("contact me")) {
        return "You can contact me via email at faith@example.com or through my social media profiles (LinkedIn, Twitter). I’m always open to discussing new opportunities, projects, and collaborations!";
    }

    if (userInput.includes("programming languages") || userInput.includes("tools") || userInput.includes("frameworks")) {
        return "I specialize in Python, JavaScript, Java and HTML. I also work with frameworks such as React, Cordova, and Angular. I’m also familiar with databases like MySQL and Firebase, and Version control softwares like Git and Github";
    }

    if (userInput.includes("ai future") || userInput.includes("role of ai")) {
        return "AI will continue to revolutionize software development. In the future, AI could automate code generation, improve debugging, and even predict bugs before they occur. It will also assist in design and optimization, reducing manual effort and increasing efficiency.";
    }

    if (userInput.includes("challenges") || userInput.includes("difficulties")) {
        return "Some of the biggest challenges in Web Development include handling scalability issues, debugging complex systems, and managing project timelines. One key lesson is always to keep learning and adapt to new tools and methodologies.";
    }

    if (userInput.includes("client communication") || userInput.includes("requirements")) {
        return "When dealing with a client’s vague requirements, Faith would start by asking probing questions to clarify their needs. It’s essential to understand the problem domain and define clear expectations before starting the project.";
    }

    if (userInput.includes("machine learning") || userInput.includes("ml")) {
        return "Machine learning can be integrated into applications for tasks like prediction, recommendation, and personalization. For example, I could implement a recommendation system for an e-commerce website using collaborative filtering or content-based filtering techniques.";
    }

    if (userInput.includes("performance optimization") || userInput.includes("optimization")) {
        return "To optimize performance, I would focus on minimizing resource-heavy operations, such as reducing unnecessary database queries and optimizing loops. In JavaScript, you could use techniques like memoization to cache results and avoid repeated computations.";
    }

    if (userInput.includes("automation") || userInput.includes("workflow")) {
        return "For automating business processes, I would use tools like Zapier or write custom automation scripts. For example, an automation workflow could be set up to notify a team member whenever a new customer makes a purchase.";
    }

    if (userInput.includes("version control") || userInput.includes("git")) {
        return "In Git, I follow best practices like frequent commits, meaningful commit messages, and a clear branching strategy (e.g., Git Flow) to manage features, fixes, and releases. Pull requests and code reviews are crucial for collaboration.";
    }

    if (userInput.includes("team collaboration") || userInput.includes("software teams")) {
        return "Effective collaboration in a software team requires clear communication, regular meetings, and efficient code review practices. I ensure everyone is aligned on goals and timelines to keep projects on track.";
    }

    return "Sorry, I didn't quite catch that. Can you rephrase or ask something else?";
}


    // Get the form and success message elements
    const form = document.getElementById('contact-form');
    const successMessage = document.getElementById('success-message');

    form.addEventListener('submit', function(event) {
        event.preventDefault();  // Prevent the default form submission (page redirect)

        const formData = new FormData(form);  // Gather form data

        // Send the form data using Fetch API
        fetch(form.action, {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            // Display the success message
            successMessage.style.display = 'block';

            // Clear the form fields
            form.reset();
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
