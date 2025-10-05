'use client';

import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import Image from 'next/image';
import css from 'styled-jsx/css';
import { AnimatePresence, motion } from 'motion/react';

import PhotoImg from '@/public/photo.svg';

export interface ImageDropzoneProps {
  hint?: string;
}

const presentationStyles = css.resolve`
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 32px;
    background-color: var(--black-1);
    border-radius: 8px;
    padding: 50px;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      background-color: var(--black-5);
    }

    & :global(svg) {
      width: 52px;
      height: 52px;
      color: var(--black-6);
    }
  }
`;

const thumbImgStyles = css.resolve`
  img {
    object-fit: cover;
  }
`;

const thumbRootStyles = css.resolve`
  div {
    display: inline-flex;
    border-radius: 2px;
    border: 1px solid #eaeaea;
    margin-bottom: 8px;
    margin-right: 8px;
    width: 100px;
    height: 100px;
    padding: 4px;
    box-sizing: border-box;
    position: relative;

    &:hover :global(button) {
      opacity: 1;
    }
  }
`;

type NewFileType = File & { preview: string };

export const ImageDropzone: React.FC<ImageDropzoneProps> = ({ hint }) => {
  const [files, setFiles] = useState<NewFileType[]>([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': [],
    },
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          }),
        ),
      );
    },
  });

  const removeImage = (preview: string) =>
    setFiles(files.filter((f) => f.preview !== preview));

  const thumbs = files.map((file) => (
    <motion.div
      className={thumbRootStyles.className}
      key={file.name}
      initial={{ scale: 0 }}
      exit={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Image
        src={file.preview}
        alt="preview"
        className={thumbImgStyles.className}
        fill
        onLoad={() => {
          URL.revokeObjectURL(file.preview);
        }}
      />
      <button onClick={() => removeImage(file.preview)} />

      {thumbImgStyles.styles}
      {thumbRootStyles.styles}
      <style jsx>{`
        button {
          background-color: #fa5252;
          z-index: 1;
          border: none;
          width: 20px;
          height: 20px;
          border-radius: 50px;
          color: #fff;
          font-size: 12px;
          margin-left: auto;
          opacity: 0;

          &:hover {
            background-color: red;
          }

          &::before {
            content: 'x';
          }
        }
      `}</style>
    </motion.div>
  ));

  useEffect(() => {
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, [files]);

  return (
    <section className="imagedropzone__root">
      <div {...getRootProps()} className={presentationStyles.className}>
        <input {...getInputProps()} />
        <PhotoImg />
        <div className="imagedropzone__text">
          <p>Drag images here or click to select files</p>
          {hint && <p>{hint}</p>}
        </div>
      </div>
      <aside className="thumbs__container">
        <AnimatePresence initial={false}>{thumbs}</AnimatePresence>
      </aside>

      {presentationStyles.styles}
      <style jsx>{`
        .imagedropzone__root {
        }

        .imagedropzone__text {
          display: flex;
          flex-direction: column;

          & p:first-child {
            font-size: 20px;
            font-weight: 400;
            cursor: pointer;
            line-height: 20px;
            color: var(--text-color-1);
          }

          & p:nth-child(2) {
            color: var(--black-6);
            font-size: 14px;
            font-weight: 400;
            line-height: 14px;
            margin-top: 7px;
          }
        }

        .thumbs__container {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          margin-top: 16px;
        }
      `}</style>
    </section>
  );
};

export default ImageDropzone;
