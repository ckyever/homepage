import "./styles.css";
import { generateProjectListElement } from "./projectList";

const workElement = document.querySelector("#work");
workElement.appendChild(generateProjectListElement());
