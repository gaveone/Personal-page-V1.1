const AdeunSkills = [
     {
       name: "TypeScript",
       description:
         "Expert in utilizing TypeScript to develop robust, scalable, and maintainable software solutions. Adept at leveraging its static typing and advanced features to minimize bugs and improve developer productivity in large-scale applications.",
     },
     {
       name: "Prisma",
       description:
         "Specializes in designing efficient and well-structured database schemas with Prisma. Skilled in simplifying complex database interactions and integrating seamless, type-safe ORM solutions for modern web applications.",
     },
     {
       name: "React",
       description:
         "Proficient in building dynamic and highly responsive web interfaces with React. Experienced in component-driven development, state management, and creating intuitive user experiences for diverse platforms.",
     },
     {
       name: "Next.js",
       description:
         "Expert in developing optimized, server-side rendered, and SEO-friendly applications using Next.js. Skilled in leveraging its advanced features like API routes, dynamic routing, and performance optimizations for full-stack development.",
     },
     {
       name: "C++",
       description:
         "Experienced in creating high-performance, low-level software solutions using C++. Proficient in system design, algorithm optimization, and resource management, catering to both embedded systems and desktop applications.",
     },
     {
       name: "Vite",
       description:
         "Highly skilled in accelerating web development workflows using Vite. Experienced in setting up efficient build pipelines, integrating modern frameworks, and delivering lightning-fast development experiences.",
     },
     {
       name: "Rust",
       description:
         "Dedicated to mastering Rust for systems programming and performance-critical applications. Focused on delivering memory-safe, concurrent, and high-performance solutions by leveraging Rust's unique ownership model and ecosystem.",
     },
     {
       name: "CSS",
       description:
         "Proficient in crafting visually appealing, responsive, and user-centric designs using CSS. Skilled in implementing modern layouts, animations, and styles while maintaining performance and cross-browser compatibility.",
     },
     {
       name: "HTML",
       description:
         "Experienced in writing semantic, accessible, and well-structured HTML. Specializes in creating the foundation for modern web applications, adhering to best practices and ensuring compatibility with web standards.",
     },
     {
       name: "JavaScript",
       description:
         "Expert in developing dynamic, interactive, and feature-rich web applications using JavaScript. Proficient in ES6+ features, DOM manipulation, event-driven programming, and integrating JavaScript with various frameworks and APIs.",
     },
     {
       name: "TechTrendIntegrator",
       description:
         "Passionate about staying at the forefront of emerging technologies and trends in the software industry. Continuously explores innovative tools and techniques to integrate cutting-edge solutions into projects, ensuring adaptability and modernity.",
     },
   ];
   



   function SetSkills() {
     const mainCon = document.querySelector<HTMLDivElement>(".MainContent")
     AdeunSkills.forEach(slill=>{
          mainCon?.insertAdjacentHTML("beforeend" , (`
               <div class="skillBox">
                 <div class="slillHeader">
                   <h2>${slill.name} </h2>

                 </div>
                 <p>${slill.description}</p>
               </div>
               `))
     })


     
   }


   SetSkills()