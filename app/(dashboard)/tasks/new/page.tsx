'use client';

import {
  DatePickerInput,
  Grid,
  ImageDropzone,
  Priority,
  TextInput,
} from '@/components';
import React, { useActionState } from 'react';

const Header: React.FC = () => (
  <div>
    <h3>Add New Task</h3>
    <button type="submit">Create</button>

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

const createNewTask = (_: any, queryData: FormData) => {
  console.log(queryData.get('priority'));
};

export default function NewTasks() {
  const [message, formAction] = useActionState(createNewTask, null);

  return (
    <form action={formAction}>
      <Header />
      <Grid gap={20}>
        <Grid.Col span={8}>
          <TextInput label="Title" name="title" />
        </Grid.Col>
        <Grid.Col span={8}>
          <DatePickerInput label="Date" />
        </Grid.Col>
        <Grid.Col span={8}>
          <Priority name="priority" label="Priority" />
        </Grid.Col>
        <Grid.Col span={8}>
          <TextInput
            placeholder="Start writing here"
            label="Description"
            textarea
          />
        </Grid.Col>
        <Grid.Col span={4}>
          <ImageDropzone hint="Attach as many files as you like, each file should not exceed 5mb" />
        </Grid.Col>
      </Grid>
    </form>
  );
}
