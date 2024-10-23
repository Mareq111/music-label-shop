/* eslint-disable react/no-unescaped-entities */
export default function ProjectInfo() {
  return (
    <div className="p-into-subpage">
      <h5 className="h5-into-subpage">Description</h5>
      <p>
        <strong>Strimz Shop</strong> is a full e-commerce platform developed as
        an extension of the Strimz Empire music label website. Spanning nine
        months of work (January to October 2024), this project focused on
        creating a fully functional online store using React. The shop offers
        various products like albums, tickets, and merchandise, with features
        such as user login, real-time product search, a dynamic cart system, and
        a "favorites" page where users can add or remove items.
      </p>

      <h5 className="h-project-info">Development Experience</h5>
      <p>
        Being my first large project using React, I encountered many challenges
        that pushed me to learn quickly. I had the opportunity to practice
        building components, which gave me a new perspective on programming.
        Unlike working with pure HTML, React allowed me to create dynamic and
        reusable components, which I could edit in one place without duplicating
        code.
      </p>
      <p>
        Additionally, I used React Router, enabling smooth navigation between
        pages without reloading. This functionality greatly improved the
        responsiveness and efficiency of the application.
      </p>
      <p>
        Firebase played a key role in managing product data, allowing real-time
        addition, editing, and display of products on product pages. The
        JSON-based database structure made it easy to organize product
        information, and any changes made to the database were instantly
        reflected on the site. This solution simplified content editing and
        updating. Moreover, Firebase allowed me to implement a product search
        feature, which searches the database in real-time based on user input,
        providing a seamless shopping experience.
      </p>
      <p>
        Managing state in my project with Redux Toolkit was initially a
        challenge, as I had no prior experience with this technology. I faced
        difficulties with implementing the cart state management, but I
        eventually got it working. With Redux Toolkit, I was able to organize
        the app's logic better, which simplified state management. I created
        slices for various functionalities like the cart, favorites, and forms.
        This approach helped me maintain cleaner code and simplified data
        handling throughout the application.
      </p>
      <p>
        I tested the code mainly manually, using tools like Lighthouse and
        testing the application on various devices to ensure smooth performance.
        While I initially planned to use automated testing tools like Vitest or
        Cypress, the project's lengthy timeline (9 months) led me to conclude
        the project without implementing them.
      </p>
      <p>
        To give the shop a more diverse and realistic appearance, I used
        pre-made product <strong>mockup</strong> templates. I customized these
        mockups by overlaying my own cover art and graphics using{" "}
        <strong>Photoshop</strong>, such as album covers on CD templates or
        t-shirts with album-themed designs. This approach not only enhanced the
        shop's assortment but also added a unique touch to the product pages,
        aligning with the branding of my music label.
      </p>

      <h5 className="h-project-info">Reflections</h5>
      <p>
        Working on this project made me realize the importance of better
        planning and a more realistic approach to time management. Initially, I
        expected the project to take less time, but the complexity and scale
        quickly overwhelmed me. Although I managed to complete all the key
        features, the process took much longer than I had anticipated. However,
        the experience deepened my knowledge of React, especially in creating
        reusable components and managing the application's state. I gained
        valuable experience, but I know there's still much to learn, both in
        terms of React's advanced features and better application logic
        management.
      </p>

      <h5 className="h-project-info">Tech Stack:</h5>
      <ul>
        <li>
          <strong>Frontend:</strong> React, Redux Toolkit, React Router
        </li>
        <li>
          <strong>Development Environment:</strong> Vite
        </li>
        <li>
          <strong>Backend:</strong> Firebase
        </li>
        <li>
          <strong>Styling:</strong> SCSS / CSS
        </li>
        <li>
          <strong>Deployment:</strong> Netlify
        </li>
        <li>
          <strong>Testing:</strong> Lighthouse (manual testing)
        </li>
        <li>
          <strong>Graphics:</strong> Photoshop (mockups)
        </li>
        <li>
          <strong>Assistance:</strong> ChatGPT, Gemini
        </li>
      </ul>
    </div>
  );
}
