import { Project } from "./Project.js";

// Screenshot Images
import howDoesTheKnightMove from "./assets/screenshots/how-does-the-knight-move.png";
import doodlyDo from "./assets/screenshots/doodly-do.png";
import sunkCostFleet from "./assets/screenshots/sunk-cost-fleet.png";
import slidePuzzle from "./assets/screenshots/slide-puzzle.png";
import itsAlwaysSunny from "./assets/screenshots/its-always-sunny.png";
import restaurantPage from "./assets/screenshots/restaurant-page.png";
import landingPage from "./assets/screenshots/landing-page.png";
import calculator from "./assets/screenshots/calculator.png";
import adminDashboard from "./assets/screenshots/dashboard.png";

export function appendProjects(parentElement) {
  const projectList = [
    new Project(
      "How Does The Knight Move",
      "Calculates the shortest path for a knight on a chessboard",
      howDoesTheKnightMove,
      "knight on a green and white chessboard",
      "https://ckyever.github.io/how-does-the-knight-move",
      "https://github.com/ckyever/how-does-the-knight-move",
    ),
    new Project(
      "Doodly Do",
      "Todo list website",
      doodlyDo,
      "todo lists in a grid",
      "https://ckyever.github.io/doodly-do",
      "https://github.com/ckyever/doodly-do",
    ),
    new Project(
      "Sunk Cost Fleet",
      "Play a battleships like game against the computer",
      sunkCostFleet,
      "battleships board game",
      "https://ckyever.github.io/sunk-cost-fleet",
      "https://github.com/ckyever/sunk-cost-fleet",
    ),
    new Project(
      "It's Always Sunny",
      "View the weather forecast for any location",
      itsAlwaysSunny,
      "weather forecast",
      "https://ckyever.github.io/its-always-sunny",
      "https://github.com/ckyever/its-always-sunny",
    ),
    new Project(
      "Slide Puzzle",
      "Solve a 15 slide puzzle",
      slidePuzzle,
      "15 tile slide puzzle",
      "https://ckyever.github.io/slide-puzzle",
      "https://github.com/ckyever/slide-puzzle",
    ),
    new Project(
      "Restaurant Website",
      "Website for a fictional ravioli restaurant",
      restaurantPage,
      "home page of a ravioli restaurant",
      "https://ckyever.github.io/restaurant-page",
      "https://github.com/ckyever/restaurant-page",
    ),
    new Project(
      "Tennis Club Landing Page",
      "Landing page for a fictional tennis club",
      landingPage,
      "home page of a tennis club",
      "https://ckyever.github.io/landing-page",
      "https://github.com/ckyever/landing-page",
    ),
    new Project(
      "Dashboard",
      "Dashboard for a fictional website",
      adminDashboard,
      "blue and white dashboard page",
      "https://ckyever.github.io/admin-dashboard",
      "https://github.com/ckyever/admin-dashboard",
    ),
    new Project(
      "Calculator",
      "Basic calculator",
      calculator,
      "calculator",
      "https://ckyever.github.io/calculator",
      "https://github.com/ckyever/calculator",
    ),
  ];

  projectList.forEach((project) => {
    parentElement.appendChild(project.generateCardElement());
  });
}
