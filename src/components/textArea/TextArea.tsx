import React from 'react';
import styles from './TextArea.module.css';


interface textAreProps {
    className?: string;
    name?: string;
    id?: string;
    value?: string;
    // onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void|undefined;
}
export const TextArea: React.FC<textAreProps> = ({ className, name, id, value }) => {
    return (
        <div className={styles.textAreWrapper}>
            <textarea id={id} name={name} rows={3}  className={className} value={value}  placeholder="Message">
             
            </textarea>
        </div>
    )
}
