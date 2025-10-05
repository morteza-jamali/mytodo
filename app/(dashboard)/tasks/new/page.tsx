'use client';

import { DatePickerInput, ImageDropzone, TextInput } from '@/components';
import React from 'react';

const Header: React.FC = () => (
  <div>
    <h3>Add New Task</h3>
    <button>Create</button>

    <style jsx>{`
      div {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      button {
        background-color: #12b886;
        border-radius: 4px;
        border: none;
        font-size: 14px;
        font-weight: 600;
        line-height: 14px;
        padding: 10px 15px;
        cursor: pointer;
        color: #fff;

        &:hover {
          background-color: #0ca678;
        }
      }
    `}</style>
  </div>
);

export default function NewTasks() {
  return (
    <>
      <Header />
      <TextInput placeholder="this is placeholder" label="label" />
      <TextInput placeholder="this is placeholder" label="label" textarea />
      <DatePickerInput />
      <ImageDropzone hint="Attach as many files as you like, each file should not exceed 5mb" />
    </>
  );
}
