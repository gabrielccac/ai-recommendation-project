import messageIcon from "../../assets/message-square.svg";
import favoritesIcon from "../../assets/star.svg";
import settingsIcon from "../../assets/settings.svg";
import searchIcon from "../../assets/search-w.svg";
import upgradeIcon from "../../assets/plus-circle.svg";
import userIcon from "../../assets/user.svg";

import { Container } from "./styles";

export function Sidenav() {
  return (
    <Container className="container" style={{ zIndex: "1" }}>
      <div className="flex-group">
        <div className="icon-container">
          <div className="flex-flow">
            <img src={messageIcon} alt="Message" className="icon" />
            <span className="icon--label">Chat</span>
          </div>
        </div>
        <div className="icon-container">
          <div className="flex-flow">
            <img src={favoritesIcon} alt="Favorites" className="icon" />
            <span className="icon--label">Favorites</span>
          </div>
        </div>
        <div className="icon-container">
          <div className="flex-flow">
            <img src={settingsIcon} alt="Settings" className="icon" />
            <span className="icon--label">Settings</span>
          </div>
        </div>
        <div className="icon-container">
          <div className="flex-flow">
            <img src={searchIcon} alt="Search" className="icon" />
            <span className="icon--label">Search</span>
          </div>
        </div>
      </div>
      <div className="flex-group">
        <div className="icon-container">
          <div className="flex-flow">
            <img src={upgradeIcon} alt="Upgrade" className="icon" />
            <a
              href="jan.html"
              style={{ display: "flex", alignItems: "center" }}
            >
              <span className="icon--label">Upgrade</span>
            </a>
          </div>
        </div>
        <div className="icon-container">
          <div className="flex-flow">
            <img src={userIcon} alt="User" className="icon" />
            <span className="icon--label">Profile</span>
          </div>
        </div>
      </div>
    </Container>
  );
}
