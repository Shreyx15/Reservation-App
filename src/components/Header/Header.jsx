import { faBed, faCalendar, faCalendarDay, faCalendarDays, faCar, faPerson, faPlane, faTaxi } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DateRangePicker } from 'react-date-range';
import { useState } from 'react';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { compareAsc, format } from 'date-fns';
import "./header.css";

function Header() {
    const [dateOpen, setDateOpen] = useState(false);
    const [dateRange, setDateRange] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection',
        },
    ]);

    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adults: 0,
        children: 0,
        rooms: 0
    });

    function handleOptions(name, operation) {
        setOptions((prev) => {
            return {
                ...prev,
                [name]: operation == "i" ? prev[name] + 1 : prev[name] - 1
            }

        });
    }
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
                        <FontAwesomeIcon icon={faBed} style={{ color: "Lightgray" }} />
                        <input type="text" placeholder="Where do you want to go?" className="headerSearchInput" />
                    </div>
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faCalendarDays} style={{ color: "Lightgray" }} />
                        <span onClick={() => { setDateOpen(!dateOpen) }} className="headerSearchText">{`${format(dateRange[0].startDate, "dd/MM/yyyy")} to ${format(dateRange[0].endDate, "dd/MM/yyyy")}`}</span>
                        {dateOpen && <DateRangePicker
                            ranges={dateRange}
                            onChange={(ranges) => setDateRange([ranges.selection])}
                            className="date"
                        />}
                    </div>

                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faPerson} style={{ color: "Lightgray" }} />
                        <span className="headerSearchText" onClick={() => { setOpenOptions(!openOptions) }}>{`${options.adults} adults | ${options.children} children | ${options.rooms} rooms`}</span>
                        {openOptions && <div className="options">
                            <div className="optionItem">
                                <span className="optionText">Adults</span>
                                <div className="optionCounter">
                                    <button className="optionCounterButton" onClick={() => { handleOptions("adults", "d") }} disabled={options.adults < 1}>-</button>
                                    <span className="optionCounterNumber">{options.adults}</span>
                                    <button className="optionCounterButton" onClick={() => { handleOptions("adults", "i") }}>+</button>
                                </div>
                            </div>

                            <div className="optionItem">
                                <span className="optionText">Children</span>
                                <div className="optionCounter">
                                    <button className="optionCounterButton" onClick={() => { handleOptions("children", "d") }} disabled={options.children < 1}>-</button>
                                    <span className="optionCounterNumber">{options.children}</span>
                                    <button className="optionCounterButton" onClick={() => { handleOptions("children", "i") }}>+</button>
                                </div>
                            </div>

                            <div className="optionItem">
                                <span className="optionText">Rooms</span>
                                <div className="optionCounter">
                                    <button className="optionCounterButton" onClick={() => { handleOptions("rooms", "d") }} disabled={options.rooms < 1}>-</button>
                                    <span className="optionCounterNumber">{options.rooms}</span>
                                    <button className="optionCounterButton" onClick={() => { handleOptions("rooms", "i") }}>+</button>
                                </div>
                            </div>
                        </div>}
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