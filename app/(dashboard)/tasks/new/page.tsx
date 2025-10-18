'use client';

import {
  DatePickerInput,
  Grid,
  ImageDropzone,
  Priority,
  TextInput,
} from '@/components';
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
    <form>
      <Header />
      <Grid gap={20}>
        <Grid.Col span={8}>
          <TextInput placeholder="this is placeholder" label="label" />
        </Grid.Col>
        <Grid.Col span={8}>
          <DatePickerInput />
        </Grid.Col>
        <Grid.Col span={8}>
          <Priority />
        </Grid.Col>
        <Grid.Col span={8}>
          <TextInput placeholder="this is placeholder" label="label" textarea />
        </Grid.Col>
        <Grid.Col span={4}>
          <ImageDropzone hint="Attach as many files as you like, each file should not exceed 5mb" />
        </Grid.Col>
      </Grid>
    </form>
  );
}
