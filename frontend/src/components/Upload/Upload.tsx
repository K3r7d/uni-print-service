import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Ellipse97Icon, Ellipse196Icon, VectorIcon } from './other.js';
import classes from './Upload.module.css';

interface Props {
  className?: string;
}

export const PrintingUploadCustomer: FC<Props> = memo(function PrintingUploadCustomer(props = {}) {
  

  // Handler for file change
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      // You can handle the file(s) here
      console.log(files); // For example, log the files to the console
    }
  }

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
            <div className={classes.button2}>Hủy bỏ</div>
          </div>
          <div className={classes.Filled}>
            <div className={classes.button3}>Tiếp</div>
          </div>
        </div>
      </div>
      <div className={classes.icon_doc}></div>
    </div>
  );
});
