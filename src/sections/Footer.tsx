import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaRegStar } from "react-icons/fa";
import { FiGitBranch } from "react-icons/fi";

function Footer() {
  return (
    <footer>
      <Link
        href="https://github.com/McAsh09"
        target="_blank"
        className="footer-link"
      >
        <span className="footer-info">Code. Create. Repeat.🚀</span>
      </Link>
    </footer>
  );
}

export default Footer;
