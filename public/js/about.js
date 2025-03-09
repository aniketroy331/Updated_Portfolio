const textElement = document.getElementById('text');
        const text = "Hello! I’m a passionate and dedicated Full Stack Web Developer with a strong foundation in both front-end and back-end technologies. Over the years, I’ve honed my skills in creating dynamic, responsive, and user-friendly web applications. My expertise lies in HTML, CSS, and JavaScript, which I use to craft seamless and visually appealing user interfaces. On the back end, I specialize in Node.js and Express.js, leveraging their power to build robust and scalable server-side solutions. Additionally, I have extensive experience working with databases, including MongoDB and SQL, ensuring efficient data management and storage for my projects.";
        let index = 0;

        function typeText() {
            if (index < text.length) {
                textElement.textContent += text.charAt(index);
                index++;
                setTimeout(typeText, 10); // Adjust the speed by changing the delay (in milliseconds)
            }
        }

        typeText();