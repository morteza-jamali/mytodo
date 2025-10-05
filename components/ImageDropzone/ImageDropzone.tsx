'use client';

import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';

import PhotoImg from '@/public/photo.svg';
import css from 'styled-jsx/css';

export interface ImageDropzoneProps {
  hint?: string;
}

const presentationStyles = css.resolve`
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 32px;

    & :global(svg) {
      width: 52px;
      height: 52px;
      color: var(--black-6);
    }
  }
`;

export const ImageDropzone: React.FC<ImageDropzoneProps> = ({ hint }) => {
  const [files, setFiles] = useState<(File & { preview: string })[]>([]);
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

  const thumbs = files.map((file) => (
    <div className="thumb__root" key={file.name}>
      <div className="thumb__inner">
        <img
          src={file.preview}
          className="thumb__img"
          // Revoke data uri after image is loaded
          onLoad={() => {
            URL.revokeObjectURL(file.preview);
          }}
        />
      </div>
      <style jsx>{`
        .thumb__root {
          display: inline-flex;
          border-radius: 2;
          border: 1px solid #eaeaea;
          margin-bottom: 8;
          margin-right: 8;
          width: 100;
          height: 100;
          padding: 4;
          box-sizing: border-box;
        }

        .thumb__inner {
          display: flex;
          min-width: 0;
          overflow: hidden;
        }

        .thumb__img {
          display: block;
          width: auto;
          height: 100%;
        }
      `}</style>
    </div>
  ));

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
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
      <aside className="thumbs__container">{thumbs}</aside>

      {presentationStyles.styles}
      <style jsx>{`
        .imagedropzone__root {
          background-color: var(--black-1);
          border-radius: 8px;
          padding: 50px;
          cursor: pointer;
          transition: all 0.2s;

          &:hover {
            background-color: var(--black-5);
          }
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
          margin-top: 16;
        }
      `}</style>
    </section>
  );
};

export default ImageDropzone;
