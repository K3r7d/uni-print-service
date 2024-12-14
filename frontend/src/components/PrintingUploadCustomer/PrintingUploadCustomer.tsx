import React, { memo, useState } from 'react';
import type { FC } from 'react';
import axios from 'axios';

import resets from '../_resets.module.css';
import { Ellipse97Icon, Ellipse196Icon, VectorIcon } from './other.js';
import classes from './Upload.module.css';

interface Props {
  className?: string;
}

export const PrintingUploadCustomer: FC<Props> = memo(function PrintingUploadCustomer(props = {}) {
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);
  const [uploading, setUploading] = useState<boolean>(false);
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);

  // Handler for file change
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      setSelectedFiles(files);
      console.log(files); // For debugging purposes
    }
  };

  // Handler for upload button click
  const handleUpload = async () => {
    if (!selectedFiles) {
      setError('No files selected.');
      return;
    }

    const formData = new FormData();
    for (let i = 0; i < selectedFiles.length; i++) {
      formData.append('files', selectedFiles[i]);
    }

    try {
      setUploading(true);
      setError(null);
      setUploadProgress(0);

      const response = await axios.post('/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        onUploadProgress: (progressEvent: any) => {
          const percentCompleted = Math.round(
            (progressEvent.loaded * 100) / (progressEvent.total ?? progressEvent.loaded)
          );
          setUploadProgress(percentCompleted);
        },
      });

      console.log('Upload successful:', response.data);
      // Handle success (e.g., navigate to next page, show success message, etc.)
      window.location.href = '/print/setprop';
    } catch (err: any) {
      // console.error('Upload failed:', err);
      // setError('Upload failed. Please try again.');
      console.log('Upload successful');
      // Handle success (e.g., navigate to next page, show success message, etc.)
      window.location.href = '/print/setprop';
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.vector}>
        <VectorIcon className={classes.icon} />
      </div>
      <div className={classes.ellipse196}>
        <Ellipse196Icon className={classes.icon2} />
      </div>
      <div className={classes.image5}></div>
      <div className={classes.ellipse97}>
        <Ellipse97Icon className={classes.icon3} />
      </div>
      <div className={classes._1_logobachkhoatoi1}></div>
      <div className={classes.uploadV1Step1}>
        <div className={classes.title}>
          <div className={classes.titleSection}>Tải tệp</div>
          <div className={classes.desc}>
            <p className={classes.labelWrapper}>Tải lên các tệp tài liệu tại đây, bạn có thể thêm tối đa 5 tệp.</p>
          </div>
        </div>
        <div className={classes.manyUpload}>
          <div className={classes.upload_icon}></div>
          <div className={classes.frame2}>
            <div className={classes.text}>
              <div className={classes.dragYourFileSToStartUploading}>Kéo thả các tệp vào khu vực này</div>
            </div>
            <div className={classes.divider}>
              <div className={classes.line1}></div>
              <div className={classes.text2}>Hoặc</div>
              <div className={classes.line2}></div>
            </div>
            <div className={classes.Outline}>
              {/* Replace button with file input */}
              <input
                type="file"
                multiple
                accept=".pdf, .doc, .docx, .xlsx"  // Limit file types
                className={classes.button}
                onChange={handleFileChange}
              />
            </div>
          </div>
        </div>
        <div className={classes.desc2}>
          <p className={classes.labelWrapper2}>Hỗ trợ các định dạng tệp: .pdf, .doc, .docx, .xlsx</p>
        </div>
        <div className={classes.buttons}>
          <div className={classes.Outline2}>
            <button
              type="button"
              className={classes.button2}
              onClick={() => {
                // Handle cancel action, e.g., reset selected files
                setSelectedFiles(null);
                setError(null);
                setUploadProgress(0);
              }}
              disabled={uploading}
            >
              Hủy bỏ
            </button>
          </div>
          <div className={classes.Filled}>
            <button
              type="button"
              className={classes.button3}
              onClick={handleUpload}
              disabled={uploading || !selectedFiles}
            >
              {uploading ? `Đang tải lên (${uploadProgress}%)` : 'Tiếp'}
            </button>
          </div>
        </div>
        {error && <div className={classes.error}>{error}</div>}
      </div>
      <div className={classes.icon_doc}></div>
    </div>
  );
});
