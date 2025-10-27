import "./styles.css";
import { appendProjects } from "./projectList";
import resumeFile from "../public/resume-ckyever-gaviola.pdf";

const projectList = document.querySelector("#project-list");
appendProjects(projectList);

const resumeLinks = document.querySelectorAll(".resume-link");
resumeLinks.forEach((link) => (link.href = resumeFile));
