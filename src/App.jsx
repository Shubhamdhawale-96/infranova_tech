import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import './index.css';


function App() {
  const form = useRef();
const [selectedTech, setSelectedTech] = useState(null);
  const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_7texoyc",
      "template_f8qokmw",
      form.current,
      "gQaVKW7issbc2C0Q1"
    )
    .then((result) => {
      console.log("Success:", result);
      alert("Message Sent Successfully!");
      form.current.reset();
    })
    .catch((error) => {
      console.error("EmailJS Error");
      console.error("Status:", error.status);
      console.error("Text:", error.text);
      console.error(error);

      alert(`Error ${error.status}: ${error.text}`);
    });
};



const techData = {
  linux: {
    icon: "🐧",
    title: "Linux",
    category: "Operating System",
    description:
      "Linux is an open-source operating system widely used for servers, cloud computing, DevOps, and enterprise environments.",
    tags: ["Ubuntu", "RHEL", "CentOS", "Shell"],
    use: "Used for server administration, scripting, networking, and cloud infrastructure."
  },

  aws: {
    icon: "☁️",
    title: "AWS",
    category: "Cloud Platform",
    description:
      "Amazon Web Services provides scalable cloud computing services like EC2, S3, IAM, VPC, RDS, and Lambda.",
    tags: ["EC2", "S3", "IAM", "VPC"],
    use: "Used for hosting applications, storage, backup, and cloud infrastructure."
  },

  ccna: {
    icon: "🌐",
    title: "CCNA",
    category: "Networking",
    description:
      "Cisco Certified Network Associate covers routing, switching, VLANs, IP addressing, and network security.",
    tags: ["Routing", "Switching", "Subnetting"],
    use: "Used for designing and troubleshooting enterprise networks."
  },

  kubernetes: {
    icon: "⚙️",
    title: "Kubernetes",
    category: "Container Orchestration",
    description:
      "Kubernetes automates deployment, scaling, and management of containerized applications.",
    tags: ["Pods", "Deployments", "Services"],
    use: "Used for container orchestration in production environments."
  },

  openshift: {
    icon: "🔴",
    title: "OpenShift",
    category: "Container Platform",
    description:
      "OpenShift is Red Hat's enterprise Kubernetes platform with enhanced security and developer tools.",
    tags: ["Red Hat", "Containers", "CI/CD"],
    use: "Used for enterprise application deployment."
  },

  ansible: {
    icon: "🤖",
    title: "Ansible",
    category: "Automation",
    description:
      "Ansible automates server configuration, application deployment, and IT workflows.",
    tags: ["Playbooks", "YAML", "Automation"],
    use: "Used for configuration management and infrastructure automation."
  },

  scripting: {
    icon: "📜",
    title: "Shell Scripting",
    category: "Programming",
    description:
      "Shell scripting automates repetitive Linux administration tasks.",
    tags: ["Bash", "Automation"],
    use: "Used for automation and task scheduling."
  },

  mysql: {
    icon: "🗄️",
    title: "MySQL",
    category: "Database",
    description:
      "MySQL is a relational database management system used in web applications.",
    tags: ["SQL", "Database"],
    use: "Used to store and manage structured data."
  },

  "github-actions": {
    icon: "🔄",
    title: "GitHub Actions",
    category: "CI/CD",
    description:
      "GitHub Actions automates software build, test, and deployment workflows.",
    tags: ["CI", "CD", "GitHub"],
    use: "Used for continuous integration and deployment."
  },

  ubuntu: {
    icon: "🟠",
    title: "Ubuntu",
    category: "Linux Distribution",
    description:
      "Ubuntu is one of the most popular Linux distributions for servers and desktops.",
    tags: ["Linux", "Ubuntu"],
    use: "Used in cloud servers and development."
  },

  grafana: {
    icon: "📊",
    title: "Grafana",
    category: "Monitoring",
    description:
      "Grafana visualizes infrastructure and application metrics through dashboards.",
    tags: ["Monitoring", "Dashboards"],
    use: "Used for infrastructure monitoring."
  },

  nginx: {
    icon: "🟩",
    title: "NGINX",
    category: "Web Server",
    description:
      "NGINX is a high-performance web server and reverse proxy server.",
    tags: ["Web Server", "Reverse Proxy"],
    use: "Used for load balancing and web hosting."
  }
};

const openModal = (tech) => {
  setSelectedTech(techData[tech]);
};

const closeModal = () => {
  setSelectedTech(null);
};
  return (
    <>
 
  {/* NAVBAR */}
  <nav>
    <div className="logo">Infravora Technologies</div>
    <button className="hamburger" id="hamburger" aria-label="Toggle menu">
      <span />
      <span />
      <span />
    </button>
    <ul id="nav-menu">
      <li>
        <a href="#about" className="nav-link">
          About
        </a>
      </li>
      <li>
        <a href="#services" className="nav-link">
          Services
        </a>
      </li>
      <li>
        <a href="#technologies" className="nav-link">
          Technologies
        </a>
      </li>
      <li>
        <a href="#projects" className="nav-link">
          Projects
        </a>
      </li>
      <li>
        <a href="#contact" className="nav-link">
          Contact
        </a>
      </li>
    </ul>
  </nav>
  {/* HERO SECTION */}
  <section className="hero">
    <div>
      <h3 className="tagline">Linux • Cloud(AWS) • CCNA • Automation</h3>
      <h1>
        Infravora <span>Technologies</span>
      </h1>
      <p>
        Powering Reliable Cloud Infrastructure with Linux, AWS, Kubernetes,
        OpenShift, Networking and DevOps Automation Services for Startups, SMEs
        and Enterprises.
      </p>
      <a href="#contact" className="btn">
        Get Free Consultation
      </a>
    </div>
  </section>
  {/* ABOUT SECTION */}
  <section id="about">
    <h2 className="title">About Us</h2>
    <p className="about">
      Infravora Technologies provides Linux Administration, AWS Cloud Solutions,
      Kubernetes, OpenShift, Networking, DevOps Automation, Infrastructure
      Monitoring and Cloud Migration Services. We help businesses build secure,
      scalable and highly available cloud environments while reducing
      operational complexity and infrastructure costs.
    </p>
    <div className="stats">
      <div className="stat">
        <h3>24/7</h3>
        <p>Support Available</p>
      </div>
      <div className="stat">
        <h3>99.9%</h3>
        <p>Uptime Goal</p>
      </div>
      <div className="stat">
        <h3>20+</h3>
        <p>Servers Managed</p>
      </div>
      <div className="stat">
        <h3>RHCSA</h3>
        <p>Certified Expertise</p>
      </div>
    </div>
  </section>
  {/* SERVICES SECTION */}
  <section id="services">
    <h2 className="title">Our Services</h2>
    <div className="services">
      <div className="card">
        <h3>Linux Administration</h3>
        <p>
          Server Deployment, Security Hardening, Troubleshooting and
          Maintenance.
        </p>
      </div>
      <div className="card">
        <h3>AWS Cloud Solutions</h3>
        <p>EC2, VPC, IAM, RDS, S3, CloudFront and Cost Optimization.</p>
      </div>
      <div className="card">
        <h3>Kubernetes &amp; OpenShift</h3>
        <p>
          Container Deployment, Monitoring, Scaling and Cluster Administration.
        </p>
      </div>
      <div className="card">
        <h3>DevOps Automation</h3>
        <p>Docker, Jenkins, GitHub Actions, CI/CD Pipeline Automation.</p>
      </div>
      <div className="card">
        <h3>Networking</h3>
        <p>VPN, DNS, Firewall Configuration and Load Balancer Setup.</p>
      </div>
      <div className="card">
        <h3>Cloud Migration</h3>
        <p>Migrate On-Premises Infrastructure to Modern Cloud Platforms.</p>
      </div>
    </div>
  </section>
<>
{/* TECHNOLOGIES SECTION */}
<section id="technologies">
  <h2 className="title">Technologies</h2>

  <p
    style={{
      textAlign: "center",
      color: "#94a3b8",
      marginBottom: 30,
      fontSize: 15,
    }}
  >
    Click on any technology to learn more
  </p>

  <div className="tech">

    <div className="tech-item" onClick={() => openModal("linux")}>
      <div className="tech-icon">🐧</div>
      <div className="tech-name">Linux</div>
    </div>

    <div className="tech-item" onClick={() => openModal("aws")}>
      <div className="tech-icon">☁️</div>
      <div className="tech-name">AWS</div>
    </div>

    <div className="tech-item" onClick={() => openModal("ccna")}>
      <div className="tech-icon">🌐</div>
      <div className="tech-name">CCNA</div>
    </div>

    <div className="tech-item" onClick={() => openModal("kubernetes")}>
      <div className="tech-icon">⚙️</div>
      <div className="tech-name">Kubernetes</div>
    </div>

    <div className="tech-item" onClick={() => openModal("openshift")}>
      <div className="tech-icon">🔴</div>
      <div className="tech-name">OpenShift</div>
    </div>

    <div className="tech-item" onClick={() => openModal("ansible")}>
      <div className="tech-icon">🤖</div>
      <div className="tech-name">Ansible</div>
    </div>

    <div className="tech-item" onClick={() => openModal("scripting")}>
      <div className="tech-icon">📜</div>
      <div className="tech-name">Shell Scripting</div>
    </div>

    <div className="tech-item" onClick={() => openModal("mysql")}>
      <div className="tech-icon">🗄️</div>
      <div className="tech-name">MySQL</div>
    </div>

    <div className="tech-item" onClick={() => openModal("github-actions")}>
      <div className="tech-icon">🔄</div>
      <div className="tech-name">GitHub Actions</div>
    </div>

    <div className="tech-item" onClick={() => openModal("ubuntu")}>
      <div className="tech-icon">🟠</div>
      <div className="tech-name">Ubuntu</div>
    </div>

    <div className="tech-item" onClick={() => openModal("grafana")}>
      <div className="tech-icon">📊</div>
      <div className="tech-name">Grafana</div>
    </div>

    <div className="tech-item" onClick={() => openModal("nginx")}>
      <div className="tech-icon">🟩</div>
      <div className="tech-name">NGINX</div>
    </div>

  </div>
</section>

{/* TECH MODAL */}

{selectedTech && (
  <div
    className="modal-overlay"
    onClick={closeModal}
  >
    <div
      className="modal"
      onClick={(e) => e.stopPropagation()}
    >

      <button
        className="modal-close"
        onClick={closeModal}
      >
        ✕
      </button>

      <div className="modal-icon">
        {selectedTech.icon}
      </div>

      <h2 className="modal-title">
        {selectedTech.title}
      </h2>

      <p className="modal-category">
        {selectedTech.category}
      </p>

      <p className="modal-desc">
        {selectedTech.description}
      </p>

      <div className="modal-tags">
        {selectedTech.tags.map((tag) => (
  <span className="tag" key={tag}>
    {tag}
  </span>
))}
      </div>

      <div className="modal-use">
        <strong>Used For:</strong>
        <br />
        {selectedTech.use}
      </div>

    </div>
  </div>
)}
</>

  {/* WHY CHOOSE US */}
  <section>
    <h2 className="title">Why Choose Us</h2>
    <div className="services">
      <div className="card">
        <h3>24/7 Monitoring</h3>
        <p>Continuous infrastructure monitoring and rapid incident response.</p>
      </div>
      <div className="card">
        <h3>Cloud Security</h3>
        <p>
          Industry-standard security practices, backup and disaster recovery.
        </p>
      </div>
      <div className="card">
        <h3>Certified Engineers</h3>
        <p>RHCSA, Linux, AWS, Kubernetes and DevOps expertise.</p>
      </div>
      <div className="card">
        <h3>Cost Optimization</h3>
        <p>Reduce cloud expenses while improving performance.</p>
      </div>
    </div>
  </section>
  {/* CERTIFICATIONS */}
  <section id="certifications">
    <h2 className="title">Certifications</h2>
    <div className="certifications">
      <div className="cert">
        <h3>RHCSA Certified</h3>
        <p>Red Hat Certified System Administrator</p>
      </div>
      <div className="cert">
        <h3>AWS Cloud Training</h3>
        <p>Cloud Infrastructure &amp; Architecture</p>
      </div>
      <div className="cert">
        <h3>Linux Administration</h3>
        <p>Enterprise Linux Management</p>
      </div>
      <div className="cert">
        <h3>DevOps Automation</h3>
        <p>CI/CD &amp; Infrastructure Automation</p>
      </div>
    </div>
  </section>
  {/* PROJECTS */}
  <section id="projects">
    <h2 className="title">Projects</h2>
    <div className="projects">
      <div className="project">
        <h3>Serverless Job Portal on AWS</h3>
        <p>
          Built a secure, scalable serverless AWS application using Lambda, API
          Gateway, S3, and IAM for 100+ users.
        </p>
      </div>
      <div className="project">
        <h3>AWS Three-Tier Architecture</h3>
        <p>
          VPC, Load Balancer, EC2 and RDS deployment with high availability.
        </p>
      </div>
      <div className="project">
        <h3>Kubernetes Cluster Setup</h3>
        <p>Production-ready multi-node cluster with monitoring and scaling.</p>
      </div>
      <div className="project">
        <h3>CI/CD Automation Pipeline</h3>
        <p>GitHub, Jenkins and Docker based automated deployment workflow.</p>
      </div>
    </div>
  </section>
  {/* PRICING */}
  <section id="pricing">
    <h2 className="title">Pricing Plans</h2>
    <div className="pricing">
      <div className="price-card">
        <h3>Starter</h3>
        <div className="price">₹10K</div>
        <p>Linux Support &amp; Troubleshooting</p>
      </div>
      <div className="price-card">
        <h3>Growth</h3>
        <div className="price">₹15K</div>
        <p>AWS Management + Monitoring</p>
      </div>
      <div className="price-card">
        <h3>Scale</h3>
        <div className="price">₹30K</div>
        <p>24/7 Cloud &amp; DevOps Support</p>
      </div>
    </div>
  </section>
  {/* CONTACT */}
<section id="contact">
  <h2 className="title">Contact Us</h2>

  <form
    ref={form}
    onSubmit={sendEmail}
    className="contact-form"
  >
    <input
      type="text"
      name="from_name"
      placeholder="Your Name"
      required
    />

    <input
      type="email"
      name="from_email"
      placeholder="Your Email"
      required
    />

    <input
      type="text"
      name="company"
      placeholder="Company Name"
    />

    <textarea
      name="message"
      rows={6}
      placeholder="Tell us about your project"
      required
    ></textarea>

    <button type="submit">
      Send Your Inquiry
    </button>
  </form>

  <div className="contact">
    <p>📧 support.infrastake24@gmail.com</p>
    <p>📞 +91 78208 98344</p>
    <p>🌐 Linux • AWS • Kubernetes • Scripting</p>
  </div>
</section>
  {/* FOOTER */}
  <footer>
    <h3>Infravora Technologies</h3>
    <p>Cloud • Linux • AWS • Kubernetes • OpenShift</p>
    <br />
    <p>support.infrastake24@gmail.com</p>
    <br />
    <p>© 2026 All Rights Reserved</p>
  </footer>
  {/* WHATSAPP BUTTON */}
  <a href="https://wa.me/917820898344" className="whatsapp" target="_blank">
    💬 Chat With Us
  </a>
</>


    
  );
}

export default App;

