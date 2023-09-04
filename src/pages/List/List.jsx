import "./list.css";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import { format } from 'date-fns';
import { useLocation } from 'react-router-dom';
import { useState } from "react";
import { DateRangePicker } from 'react-date-range';
import SearchItem from "../../components/searchItem/SearchItem";

function List() {
    const location = useLocation();

    const [destination, setDestination] = useState(location.state.destination);
    const [dateRange, setDateRange] = useState(location.state.dateRange);
    const [options, setOptions] = useState(location.state.options);
    const [showDate, setShowDate] = useState(false);

    return (
        <div>
            <Navbar />
            <Header type="list" />
            <div className="listContainer">
                <div className="listWrapper">
                    <div className="listSearch">
                        <h1 className="lsTitle">Search</h1>
                        <div className="lsItem">
                            <label>Destination</label>
                            <input type="text" value={destination} onChange={(e) => {
                                setDestination(e.target.value);
                            }} />
                        </div>
                        <div className="lsItem">
                            <label>Check-in Date</label>
                            <span onClick={() => { setShowDate(!showDate) }}>{`${format(dateRange[0].startDate, "dd/MM/yyyy")} to ${format(dateRange[0].endDate, "dd/MM/yyyy")}`}</span>
                            {showDate && <DateRangePicker
                                ranges={dateRange}
                                onChange={(ranges) => setDateRange([ranges.selection])}
                                className="dateRange"
                            />}
                        </div>
                        <div className="lsItem">
                            <label>Options</label>
                            <div className="lsOptions">
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">
                                        Min Price <small>(per Night)</small>
                                    </span>
                                    <input type="number" className="lsOptionInput" />
                                </div>
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">
                                        Max Price <small>(per Night)</small>
                                    </span>
                                    <input type="number" className="lsOptionInput" />
                                </div>
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">
                                        Adult <small>per Night</small>
                                    </span>
                                    <input type="number" className="lsOptionInput" min={1} placeholder={options.adults} onChange={(e) => setOptions({ ...options, adults: e.target.value })} />
                                </div>
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">
                                        Children <small>per Night</small>
                                    </span>
                                    <input type="number" className="lsOptionInput" min={0} placeholder={options.children} onChange={(e) => setOptions({ ...options, children: e.target.value })} />
                                </div>
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">
                                        Room <small>per Night</small>
                                    </span>
                                    <input type="number" className="lsOptionInput" min={1} placeholder={options.rooms} onChange={(e) => setOptions({ ...options, rooms: e.target.value })} />
                                </div>
                            </div>
                        </div>
                        <button>Search</button>
                    </div>
                    <div className="listResult">
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default List;