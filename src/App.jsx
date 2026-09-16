import React from "react";
import {
  ArrowDownToLine,
  ArrowRight,
  Award,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  FileText,
  Github,
  GraduationCap,
  Menu,
  Palette,
  Sparkles,
  Star,
  UserRound,
  X
} from "lucide-react";
import { useState } from "react";

const APK_PATH = "/downloads/ResumeCraft.apk";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site">
      <header className="navbar">
        <a className="brand" href="#home" onClick={closeMenu}>
          <span className="brand-mark"><FileText size={21} /></span>
          <span>Resume<span className="brand-accent">Craft</span></span>
        </a>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          <a href="#features" onClick={closeMenu}>Features</a>
          <a href="#how-it-works" onClick={closeMenu}>How it works</a>
          <a href="#screenshots" onClick={closeMenu}>Preview</a>
          <a href="#download" onClick={closeMenu}>Download</a>
        </nav>

        <a className="nav-download" href={APK_PATH} download="ResumeCraft.apk">
          <ArrowDownToLine size={17} />
          Download APK
        </a>

        <button className="menu-button" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-glow glow-one"></div>
          <div className="hero-glow glow-two"></div>
          <div className="hero-copy">
            <div className="eyebrow"><Sparkles size={15} /> Simple. Professional. Fast.</div>
            <h1>Build a resume<br /><span>that gets noticed.</span></h1>
            <p className="hero-text">
              ResumeCraft helps you create a clean, professional resume directly
              from your Android phone — without complicated editors.
            </p>
            <div className="hero-actions">
              <a className="primary-button" href={APK_PATH} download="ResumeCraft.apk">
                <ArrowDownToLine size={19} />
                Download for Android
              </a>
              <a className="secondary-button" href="#features">
                Explore features <ArrowRight size={18} />
              </a>
            </div>
            <div className="trust-row">
              <div className="stars">
                <Star size={15} fill="currentColor" />
                <Star size={15} fill="currentColor" />
                <Star size={15} fill="currentColor" />
                <Star size={15} fill="currentColor" />
                <Star size={15} fill="currentColor" />
              </div>
              <span>Designed for students & job seekers</span>
            </div>
          </div>

          <div className="phone-stage" aria-label="ResumeCraft app preview">
            <div className="float-card float-card-top">
              <span className="float-icon"><Check size={17} /></span>
              <div><strong>Resume ready</strong><small>Professional format</small></div>
            </div>
            <div className="phone">
              <div className="phone-notch"></div>
              <div className="phone-screen">
                <div className="app-top"><span>ResumeCraft</span><span className="mini-dot"></span></div>
                <div className="profile-block">
                  <div className="avatar">HK</div>
                  <div><div className="skeleton title"></div><div className="skeleton line"></div></div>
                </div>
                <div className="resume-card">
                  <div className="resume-head">YOUR RESUME</div>
                  <div className="resume-name">Professional Profile</div>
                  <div className="resume-line long"></div>
                  <div className="resume-line"></div>
                  <div className="resume-section">EXPERIENCE</div>
                  <div className="resume-row"><b></b><span></span></div>
                  <div className="resume-row"><b></b><span></span></div>
                  <div className="resume-section">SKILLS</div>
                  <div className="chips"><i></i><i></i><i></i></div>
                </div>
                <div className="phone-button">Generate Resume</div>
              </div>
            </div>
            <div className="float-card float-card-bottom">
              <div className="tiny-chart"><span></span><span></span><span></span><span></span></div>
              <div><strong>All in one place</strong><small>Profile • Skills • Projects</small></div>
            </div>
          </div>
        </section>

        <section className="stats">
          <div><strong>7+</strong><span>Resume sections</span></div>
          <div><strong>1</strong><span>Simple workflow</span></div>
          <div><strong>100%</strong><span>Mobile focused</span></div>
          <div><strong>Free</strong><span>to get started</span></div>
        </section>

        <section className="section" id="features">
          <div className="section-heading">
            <div className="eyebrow">Everything you need</div>
            <h2>From blank page to<br /><span>professional resume.</span></h2>
            <p>Fill in your information section by section and preview your resume before you use it.</p>
          </div>

          <div className="feature-grid">
            <Feature icon={<UserRound />} number="01" title="Personal Info" text="Add your name, contact details, profile and other essential information." />
            <Feature icon={<GraduationCap />} number="02" title="Education" text="Organize your qualifications, institutions, dates and academic details." />
            <Feature icon={<BriefcaseBusiness />} number="03" title="Experience" text="Showcase internships, jobs, responsibilities and professional experience." />
            <Feature icon={<Palette />} number="04" title="Skills" text="Highlight the technical and professional skills that represent you." />
            <Feature icon={<FileText />} number="05" title="Projects" text="Present projects with descriptions, technologies and useful links." />
            <Feature icon={<Award />} number="06" title="Certifications" text="Keep your certifications and achievements together in one place." />
          </div>
        </section>

        <section className="workflow section" id="how-it-works">
          <div className="section-heading centered">
            <div className="eyebrow">How it works</div>
            <h2>Three steps.<br /><span>One polished resume.</span></h2>
          </div>
          <div className="steps">
            <Step number="01" title="Enter your details" text="Add your personal information, education, experience, skills and projects." />
            <Step number="02" title="Review your resume" text="Move through the sections and check your information before generating it." />
            <Step number="03" title="Create & use" text="Generate your resume and use your finished document for applications." />
          </div>
        </section>

        <section className="preview-section section" id="screenshots">
          <div className="preview-copy">
            <div className="eyebrow">Made for your phone</div>
            <h2>Your resume,<br /><span>wherever you are.</span></h2>
            <p>
              ResumeCraft is designed around a focused mobile workflow, so you can
              build and update your resume without needing a desktop editor.
            </p>
            <ul className="check-list">
              <li><Check size={17} /> Clean and simple interface</li>
              <li><Check size={17} /> Section-by-section editing</li>
              <li><Check size={17} /> Project and GitHub link support</li>
              <li><Check size={17} /> Resume preview before use</li>
            </ul>
          </div>
          <div className="preview-paper">
            <div className="paper-top">
              <div className="paper-avatar">HK</div>
              <div><h3>YOUR NAME</h3><p>Software Developer</p></div>
            </div>
            <div className="paper-columns">
              <div>
                <PaperBlock title="PROFILE" lines={3} />
                <PaperBlock title="EXPERIENCE" lines={5} />
              </div>
              <div>
                <PaperBlock title="EDUCATION" lines={4} />
                <PaperBlock title="SKILLS" lines={4} />
                <PaperBlock title="PROJECTS" lines={4} />
              </div>
            </div>
          </div>
        </section>

        <section className="download-section" id="download">
          <div className="download-inner">
            <div className="download-icon"><ArrowDownToLine size={29} /></div>
            <div>
              <div className="eyebrow">Ready to build?</div>
              <h2>Download ResumeCraft<br />for Android.</h2>
              <p>Get the APK and start creating your professional resume.</p>
            </div>
            <a className="download-large" href={APK_PATH} download="ResumeCraft.apk">
              Download APK <ArrowDownToLine size={19} />
            </a>
          </div>
          <div className="download-meta">
            <span>Latest release</span><i></i><span>Android APK</span><i></i><span>ResumeCraft</span>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-brand">
          <a className="brand" href="#home">
            <span className="brand-mark"><FileText size={19} /></span>
            <span>Resume<span className="brand-accent">Craft</span></span>
          </a>
          <p>A simple resume builder for your next opportunity.</p>
        </div>
        <div className="footer-links">
          <a href="#features">Features</a>
          <a href="#how-it-works">How it works</a>
          <a href="#download">Download</a>
          <a href="https://github.com/hemand18" target="_blank" rel="noreferrer"><Github size={17} /> GitHub</a>
        </div>
        <div className="copyright">© {new Date().getFullYear()} ResumeCraft. Built with care.</div>
      </footer>
    </div>
  );
}

function Feature({ icon, number, title, text }) {
  return (
    <article className="feature-card">
      <div className="feature-top"><span className="feature-icon">{icon}</span><span className="feature-number">{number}</span></div>
      <h3>{title}</h3>
      <p>{text}</p>
      <span className="card-arrow"><ArrowRight size={17} /></span>
    </article>
  );
}

function Step({ number, title, text }) {
  return (
    <article className="step">
      <span className="step-number">{number}</span>
      <div className="step-line"></div>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}

function PaperBlock({ title, lines }) {
  return (
    <div className="paper-block">
      <h4>{title}</h4>
      {Array.from({ length: lines }).map((_, i) => <span className={i === 0 ? "paper-line strong" : "paper-line"} key={i}></span>)}
    </div>
  );
}

export default App;