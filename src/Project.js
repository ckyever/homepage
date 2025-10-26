import githubLogo from "./assets/icons/github.svg";
import openInNewTabLogo from "./assets/icons/open-in-new.svg";

export class Project {
  constructor(
    title,
    description,
    screenshot,
    screenshotAlt,
    demoLink,
    githubLink,
  ) {
    this.title = title;
    this.description = description;
    this.screenshot = screenshot;
    this.screenshotAlt = screenshotAlt;
    this.demoLink = demoLink;
    this.githubLink = githubLink;
  }

  generateCardElement() {
    const cardElement = document.createElement("li");
    cardElement.classList = "card";

    const screenshotLink = document.createElement("a");
    screenshotLink.classList = "screenshot";
    screenshotLink.href = this.demoLink;
    screenshotLink.target = "_blank";

    const screenshotImage = document.createElement("img");
    screenshotImage.src = this.screenshot;
    screenshotImage.alt = this.screenshotAlt;
    screenshotLink.append(screenshotImage);

    cardElement.appendChild(screenshotLink);

    const projectTextContainer = document.createElement("div");
    projectTextContainer.classList = "project-text";

    const projectTitleContainer = document.createElement("div");
    projectTitleContainer.classList = "title";

    const projectTitle = document.createElement("h3");
    projectTitle.textContent = this.title;
    projectTitleContainer.appendChild(projectTitle);

    const linkContainer = document.createElement("div");
    linkContainer.classList = "link-container";

    const githubLink = document.createElement("a");
    githubLink.href = this.githubLink;
    githubLink.target = "_blank";

    const githubIcon = document.createElement("img");
    githubIcon.classList = "icon";
    githubIcon.src = githubLogo;
    githubIcon.alt = "github logo";
    githubLink.append(githubIcon);
    linkContainer.appendChild(githubLink);

    const demoLink = document.createElement("a");
    demoLink.href = this.demoLink;
    demoLink.target = "_blank";

    const openInNewTabIcon = document.createElement("img");
    openInNewTabIcon.classList = "icon";
    openInNewTabIcon.src = openInNewTabLogo;
    openInNewTabIcon.alt = "open in new tab icon";
    demoLink.append(openInNewTabIcon);
    linkContainer.appendChild(demoLink);

    projectTitleContainer.appendChild(linkContainer);
    projectTextContainer.appendChild(projectTitleContainer);

    const descriptionText = document.createElement("p");
    descriptionText.classList = "description";
    descriptionText.textContent = this.description;

    projectTextContainer.appendChild(descriptionText);

    cardElement.appendChild(projectTextContainer);

    return cardElement;
  }
}
