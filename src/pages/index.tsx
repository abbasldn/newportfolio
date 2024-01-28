import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <header>
        <a href="/">
          <h1>Abbas</h1>
        </a>

        <nav>
          <ul>
            <li>
              <a href="#work">Work</a>
            </li>
            <li>
              <a href="/hireme">Hire Me</a>
            </li>
          </ul>

          <ul>
            <li>
              <a href="https://instagram.com/abbaswavy" target="_blank"></a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section>
          <div>
            <div>
              <h1
                data-period="2000"
                data-rotate='[ "Welcome.", "你好.", "こんにちは.", ".أهلاً و سهلاً"]'
              ></h1>
              <img src="img/abbas-logo.png" alt="logo" />
              <h1>I'm Abbas – a web developer &amp; designer from London</h1>
            </div>
            <div className="action-box-container">
              <div className="action-box">
                <a href="mailto:work@abbasldn.com">Let's get talking</a>
                <a href="/hireme">
                  I’m currently available for hire if you have a design or
                  development project. Learn more{" "}
                  <i className="fas fa-chevron-right"></i>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section>
          <h4>Work</h4>

          <div className="work-tile">
            <a href="https://dribbble.com/abbasldn" target="_blank">
              UI / UX
            </a>
            <p>
              I share some of my design work on my{" "}
              <a href="https://dribbble.com/abbasldn" target="_blank">
                Dribbble
              </a>
              profile. Mainly web and mobile based projects.
            </p>
          </div>
          <div className="work-tile">
            <a href="https://instagram.com/abbasldn" target="_blank">
              Web Design &amp; Development
            </a>
            <p>
              Most of my client work is shared on my{" "}
              <a href="https://instagram.com/abbasldn" target="_blank">
                Instagram
              </a>
              profile. You’ll find websites made for clients along with their
              feedback. <br /> <br /> All of the development code I write is
              available to view on my{" "}
              <a href="https://github.com/abbasldn">GitHub</a>.
            </p>
          </div>
        </section>

        <section>
          <h4>Skills</h4>
          <h5>Web Design</h5>
          <h5>Web Development</h5>
          <h5>Mobile Design</h5>
          <h5>UI / UX Design</h5>
          <h5>E-Commerce</h5>
        </section>

        <section>
          <h4>Clients &amp; Collaborative Partners</h4>
          <p>
            The Knowledge College, How To Smash Your Exams, Ace Studies,
            Official Chicken Box, Made By Libas, Al Qasr
          </p>
        </section>

        <footer>
          <h1>Contact</h1>
          <p>
            I’m always open to new projects and available for{" "}
            <a href="/hireme">hire</a> if you’d like to work together.
          </p>
          <a>+44(0) 73898 95775</a>
          <a>work@abbasldn.com</a>
          <ul>
            <li>
              <a href="https://twitter.com/abbasldn" target="_blank">
                <i className="fab fa-twitter fa-2x"></i>
              </a>
            </li>
            <li>
              <a href="https://dribbble.com/abbasldn" target="_blank">
                <i className="fab fa-dribbble fa-2x"></i>
              </a>
            </li>
            <li>
              <a href="https://instagram.com/abbasldn" target="_blank">
                <i className="fab fa-instagram fa-2x"></i>
              </a>
            </li>
            <li>
              <a href="https://github.com/abbasldn" target="_blank">
                <i className="fab fa-github fa-2x"></i>
              </a>
            </li>
            <li>
              <a href="https://wa.me/447389895775/">
                <i className="fab fa-whatsapp fa-2x"></i>
              </a>
            </li>
          </ul>
          <span>&copy; 2019 Abbas, LDN. All rights reserved.</span>
        </footer>
      </main>

      <div className="floating">
        <div className="whatsapp-button">
          <a href="https://wa.me/447389895775/">
            <i className="fab fa-whatsapp"></i> Shoot me a message on WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}
