'use client';

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import css from 'styled-jsx/css';

import 'react-datepicker/dist/react-datepicker.css';

const inputStyles = css.resolve`
  input {
    background-color: var(--black-1);
    color: var(--text-color-1);
    outline: none;
    border-radius: 8px;
    border: 1px solid var(--black-4);
    height: 36px;
    font-weight: 400;
    font-size: 14px;
    line-height: 34px;
    padding: 0 12px;
    margin: 5px 0;

    &:focus {
      border-color: var(--blue-1);
    }
  }
`;

const calendarStyles = css.resolve`
  div {
    & :global(.react-datepicker) {
      background-color: var(--black-1);
      border: 1px solid var(--black-4);
      font-family: 'Inter', sans-serif;
    }

    & :global(.react-datepicker__triangle) {
      color: var(--black-1);
      fill: var(--black-1);
      stroke: var(--black-4);
    }

    & :global(.react-datepicker__header) {
      background-color: var(--black-1);
      border-top-right-radius: 8px;
      border-top-left-radius: 8px;
      border-bottom: 1px solid var(--black-4);
    }

    & :global(.react-datepicker__day),
    & :global(.react-datepicker__current-month) {
      color: var(--text-color-1);
    }

    & :global(.react-datepicker__day:hover) {
      background-color: var(--black-5);
    }

    & :global(.react-datepicker__navigation-icon::before) {
      border-color: var(--text-color-1);
    }

    & :global(.react-datepicker__day-name) {
      color: var(--black-6);
    }

    & :global(.react-datepicker__day--keyboard-selected),
    & :global(.react-datepicker__day--selected) {
      background-color: var(--blue-1);
    }

    & :global(.react-datepicker__day--keyboard-selected:hover),
    & :global(.react-datepicker__day--selected:hover) {
      background-color: #1864ab;
    }
  }
`;

export const DatePickerInput: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  return (
    <>
      <DatePicker
        isClearable
        selected={selectedDate}
        onChange={(date: Date | null) => setSelectedDate(date)}
        className={inputStyles.className}
        popperClassName={calendarStyles.className}
      />
      {calendarStyles.styles}
      {inputStyles.styles}
    </>
  );
};

export default DatePickerInput;
