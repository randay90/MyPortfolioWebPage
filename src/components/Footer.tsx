import React from 'react'
import { FaGithub, FaLinkedin, FaTiktok, FaTwitter } from 'react-icons/fa'

export default function Footer(): React.ReactElement {
  const currentYear = new Date().getFullYear()

  return (
    <footer>
      <div className="footer-content">
        <div>
          <p className="footer-text">
            © {currentYear} Randy - Site Reliability Engineer & Application Developer. All rights reserved.
          </p>
        </div>

        <div className="social-links">
          <a href="https://github.com/randay90/my-static-blazor-app" className="social-link" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/thedadshow" className="social-link" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://www.tiktok.com/@_thedadshow?lang=en" className="social-link" aria-label="TikTok">
            <FaTiktok />
          </a>
        </div>
      </div>
    </footer>
  )
}
