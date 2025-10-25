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
    this.screenshotAlt = screenshotAlt``;
    this.demoLink = demoLink;
    this.githubLink = githubLink;
  }

  generateCardElement() {
    const cardElement = document.createElement("div");
    cardElement.class = "card";

    const screenshotLink = document.createElement("a");
    screenshotLink.class = "screenshot";
    screenshotLink.href = this.demoLink;
    screenshotLink.target = "_blank";

    const screenshotImage = document.createElement("img");
    screenshotImage.src = this.screenshot;
    screenshotImage.alt = this.screenshotAlt;
    screenshotLink.append(screenshotImage);

    cardElement.appendChild(screenshotLink);

    const projectTextContainer = document.createElement("div");
    projectTextContainer.class = "project-text";

    const projectTitle = document.createElement("h3");
    projectTitle.textContent = this.title;
    projectTextContainer.appendChild(projectTitle);

    const linkContainer = document.createElement("div");
    linkContainer.class = "link-container";

    const githubLink = document.createElement("a");
    githubLink.href = this.githubLink;
    githubLink.target = "_blank";

    const githubIcon = document.createElement("img");
    githubIcon.class = "icon";
    githubIcon.src = "assets/icons/github.svg";
    githubIcon.alt = "github logo";
    githubLink.append(githubIcon);
    linkContainer.appendChild(githubLink);

    const demoLink = document.createElement("a");
    demoLink.href = this.demoLink;
    demoLink.target = "_blank";

    const openInNewTabIcon = document.createElement("img");
    openInNewTabIcon.class = "icon";
    openInNewTabIcon.src = "assets/icons/open-in-new.svg";
    openInNewTabIcon.alt = "open in new tab icon";
    demoLink.append(openInNewTabIcon);
    linkContainer.appendChild(demoLink);

    projectTextContainer.appendChild(linkContainer);

    const descriptionText = document.createElement("p");
    descriptionText.class = "description";
    descriptionText.textContent = this.description;

    projectTextContainer.appendChild(descriptionText);

    cardElement.appendChild(projectTextContainer);

    return cardElement;
  }
}
