import { Project } from "./Project.js";

// Screenshot Images
import nimbus from "./assets/screenshots/nimbus.png";
import clubhaus from "./assets/screenshots/clubhaus.png";
import dropshop from "./assets/screenshots/dropshop.png";
import thegroupchat from "./assets/screenshots/thegroupchat.png";
import waxdisc from "./assets/screenshots/waxdisc.png";
import pokemems from "./assets/screenshots/pokemems.png";
import cvBuilder from "./assets/screenshots/cv-builder.png";
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
      "Nimbus",
      "Personal file storage system",
      nimbus,
      "file storage website",
      "https://nimbus-production-7671.up.railway.app",
      "https://github.com/ckyever/nimbus",
    ),
    new Project(
      "Clubhaus",
      "Message board with account creation using PassportJS authentication",
      clubhaus,
      "message board website",
      "https://clubhaus-7tzl.onrender.com",
      "https://github.com/ckyever/clubhaus",
    ),
    new Project(
      "DropShop Inventory Management",
      "Inventory management website for a tennis store",
      dropshop,
      "inventory website for a tennis store",
      "https://dropshop-o3w4.onrender.com",
      "https://github.com/ckyever/dropshop-inventory-app",
    ),
    new Project(
      "How Does The Knight Move",
      "Calculates the shortest path for a knight on a chessboard",
      howDoesTheKnightMove,
      "knight on a green and white chessboard",
      "https://ckyever.github.io/how-does-the-knight-move",
      "https://github.com/ckyever/how-does-the-knight-move",
    ),
    new Project(
      "TheGroupChat",
      "Message board website styled like an instant messaging app",
      thegroupchat,
      "messaging website",
      "https://thegroupchat-o0fa.onrender.com/chat",
      "https://github.com/ckyever/thegroupchat",
    ),
    new Project(
      "WAXDISC",
      "E-commerce website for a vinyl record store",
      waxdisc,
      "vinyl record e-commerce website",
      "https://waxdisc.pages.dev",
      "https://github.com/ckyever/waxdisc",
    ),
    new Project(
      "PokéMems",
      "Memory game using Pokémon sprites",
      pokemems,
      "pokémon in wild grass",
      "https://pokemems.pages.dev",
      "https://github.com/ckyever/pokemems",
    ),
    new Project(
      "CV Builder",
      "Edit and personalise your own CV",
      cvBuilder,
      "editor for a resume",
      "https://cv-application-bg8.pages.dev",
      "https://github.com/ckyever/cv-application",
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
      "Doodly Do",
      "Create and track todo lists",
      doodlyDo,
      "todo lists in a grid",
      "https://ckyever.github.io/doodly-do",
      "https://github.com/ckyever/doodly-do",
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
      "Restaurant Website",
      "Website for a pasta restaurant",
      restaurantPage,
      "home page of a ravioli restaurant",
      "https://ckyever.github.io/restaurant-page",
      "https://github.com/ckyever/restaurant-page",
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
      "Tennis Club Landing Page",
      "Landing page for a tennis club",
      landingPage,
      "home page of a tennis club",
      "https://ckyever.github.io/landing-page",
      "https://github.com/ckyever/landing-page",
    ),
    new Project(
      "Dashboard",
      "Design for an admin dashboard page",
      adminDashboard,
      "blue and white dashboard page",
      "https://ckyever.github.io/admin-dashboard",
      "https://github.com/ckyever/admin-dashboard",
    ),
    new Project(
      "Calculator",
      "Basic calculator for the web",
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
