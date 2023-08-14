import { faBed, faCalendar, faCalendarDay, faCalendarDays, faCar, faPerson, faPlane, faTaxi } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./header.css";
function Header() {
    return (
        <div className="Header">
            <div className="headerContainer">
                <div className="HeaderList">
                    <div className="headerListItem active">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Stays</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Flights</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faCar} />
                        <span>Car Rentals</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Attractions</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Airport taxis</span>
                    </div>
                </div>
                <h1 className="headerTitle">
                    Find your next stay
                </h1>
                <p className="headerDesc">
                    Search low prices on hotels, homes and much more...
                </p>

                <div className="headerSearch">
                    <div className="headerSearchItem">
                        <input type="text" placeholder="Where do you want to go?" className="headerSearchInput" />
                    </div>
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faCalendarDays} style={{ color: "Lightgray" }} />
                        <span className="headerSearchText">check-in-date to check-out-date</span>
                    </div>
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faPerson} style={{ color: "Lightgray" }} />
                        <span className="headerSearchText">2 adults 2 children 1 room</span>
                    </div>
                    <div className="headerSearchItem">
                        <button className="headerBtn">Search</button>
                    </div>



                </div>
            </div>
        </div>
    );
}

export default Header;