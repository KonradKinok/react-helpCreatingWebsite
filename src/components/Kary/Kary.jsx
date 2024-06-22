import { Footer } from "./../Footer";
import DatePicker from "react-datepicker";
import React, { useState } from "react";
import * as DateTimePicker from "../DateTimePicker/DateTimePicker";



export const Kary = ({ date }) => {


    return (
        <>
            <h1>Kary</h1>
            <DateTimePicker.DateTimePicker />
            <DateTimePicker.PickerButton />
            <DateTimePicker.DatePickerCustomHeader />
            <DateTimePicker.DatePickerMonthsYears />
            <Footer />
        </>
    );
};

