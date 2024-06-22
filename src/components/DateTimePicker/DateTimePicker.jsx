import DatePicker, { CalendarContainer } from "react-datepicker";
import { getYear, getMonth } from "date-fns";
import React, { useState, children, forwardRef } from "react";
import "react-datepicker/dist/react-datepicker.css";
import style from "./DateTimePicker.module.scss";
import icon from "../../images/icons.svg";

import { pl } from 'date-fns/locale/pl';


export const DateTimePicker = () => {
    const [startDate, setStartDate] = useState(new Date());
    const handleCalendarClose = () => console.log("Calendar closed");
    const handleCalendarOpen = () => console.log("Calendar opened");

    const MyContainer = ({ className, children }) => {
        return (
            <div style={{ padding: "8px", background: "#216ba5", color: "#fff" }}>
                <CalendarContainer className={className}>
                    <div style={{ background: "#f0f0f0" }}>
                        What is your favorite day?
                    </div>
                    <div style={{ position: "relative" }}>{children}</div>
                </CalendarContainer>
            </div>
        );
    };
    return (
        <DatePicker
            dateFormat="dd.MM.yyyy"
            showIcon
            toggleCalendarOnIconClick
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            icon={<svg className={style.iconContainer} >
                <use xlinkHref={`${icon}#calendar`} />
            </svg>}
            calendarContainer={MyContainer}
            onCalendarClose={handleCalendarClose}
            onCalendarOpen={handleCalendarOpen}
        >
            <div style={{ color: "red" }}>Don't forget to check the weather!</div>
        </DatePicker>

    );

};

export const PickerButton = () => {
    const [startDate, setStartDate] = useState(new Date());
    const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
        <button className="example-custom-input" onClick={onClick} ref={ref}>
            {value}
        </button>
    ));
    return (
        <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            customInput={<ExampleCustomInput />}
        />
    );
};



const range = (start, end, step = 1) => {
    let output = [];
    for (let i = start; i < end; i += step) {
        output.push(i);
    }
    return output;
};
export const DatePickerCustomHeader = () => {
    const [startDate, setStartDate] = useState(new Date());
    const handleCalendarClose = (ev) => {
        console.log("Calendar closed");
        console.log(ev);
    }
    const handleCalendarOpen = () => console.log("Calendar opened");
    const years = range(2020, getYear(new Date()) + 2, 1);
    const months = [
        "Styczeń",
        "Luty",
        "Marzec",
        "Kwiecień",
        "Maj",
        "Czerwiec",
        "Lipiec",
        "Sierpień",
        "Wrzesień",
        "Październik",
        "Listopad",
        "Grudzień",
    ];


    const MyContainer = ({ className, children }) => {
        return (
            <div style={{ padding: "8px", background: "#216ba5", color: "#fff" }}>
                <CalendarContainer className={className}>
                    <div style={{ background: "#f0f0f0" }}>
                        What is your favorite day?
                    </div>
                    <div style={{ position: "relative" }}>{children}</div>
                </CalendarContainer>
            </div>
        );
    };

    return (
        <DatePicker
            dateFormat="dd.MM.yyyy"
            showIcon
            toggleCalendarOnIconClick
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            openToDate={new Date(`${new Date().getFullYear()}/01/01`)}
            minDate={new Date("2020/01/01")}
            todayButton="Dzisiaj"
            // onChangeRaw={(event) => handleChangeRaw(event.target.value)}
            locale={pl}
            icon={<svg className={style.iconContainer} >
                <use xlinkHref={`${icon}#calendar`} />
            </svg>}
            // style
            className={style.inputDateTimePicker} //input style
            calendarClassName={style.inputWeek} //months style
            renderCustomHeader={({
                date,
                changeYear,
                changeMonth,
                decreaseMonth,
                increaseMonth,
                prevMonthButtonDisabled,
                nextMonthButtonDisabled,
            }) => (
                <div
                    style={{
                        margin: 10,
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
                        {"<"}
                    </button>
                    <select
                        value={getYear(date)}
                        onChange={({ target: { value } }) => changeYear(value)}
                    >
                        {years.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>

                    <select
                        value={months[getMonth(date)]}
                        onChange={({ target: { value } }) =>
                            changeMonth(months.indexOf(value))
                        }
                    >
                        {months.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>

                    <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
                        {">"}
                    </button>
                </div>
            )}


            calendarContainer={MyContainer}
            onCalendarClose={handleCalendarClose}
            onCalendarOpen={handleCalendarOpen}
        >
            <div style={{ color: "red" }}>Don't forget to check the weather!</div>
        </DatePicker>

    );

};

export const DatePickerMonthsYears = () => {
    const [startDate, setStartDate] = useState(new Date());
    const handleCalendarClose = (ev) => {
        console.log("Calendar closed");
        console.log(ev);
    }
    const handleCalendarOpen = () => console.log("Calendar opened");
    const years = range(2020, getYear(new Date()) + 1, 1);
    const months = [
        "Styczeń",
        "Luty",
        "Marzec",
        "Kwiecień",
        "Maj",
        "Czerwiec",
        "Lipiec",
        "Sierpień",
        "Wrzesień",
        "Październik",
        "Listopad",
        "Grudzień",
    ];


    const MyContainer = ({ className, children }) => {
        return (
            <div style={{ padding: "8px", background: "#216ba5", color: "#fff" }}>
                <CalendarContainer className={className}>
                    <div style={{ background: "#f0f0f0" }}>
                        What is your favorite day?
                    </div>
                    <div style={{ position: "relative" }}>{children}</div>
                </CalendarContainer>
            </div>
        );
    };

    return (
        <DatePicker
            dateFormat="dd.MM.yyyy"
            showIcon
            toggleCalendarOnIconClick
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            openToDate={new Date(`${new Date().getFullYear()}/01/01`)}
            minDate={new Date("2020/01/01")}
            todayButton="Dzisiaj"
            // onChangeRaw={(event) => handleChangeRaw(event.target.value)}
            locale={pl}
            icon={<svg className={style.iconContainer} >
                <use xlinkHref={`${icon}#calendar`} />
            </svg>}
            // style
            className={style.inputDateTimePicker} //input style
            calendarClassName={style.inputWeek} //months style
            peekNextMonth
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"


            calendarContainer={MyContainer}
            onCalendarClose={handleCalendarClose}
            onCalendarOpen={handleCalendarOpen}
        >
            <div style={{ color: "red" }}>Don't forget to check the weather!</div>
        </DatePicker>

    );

};