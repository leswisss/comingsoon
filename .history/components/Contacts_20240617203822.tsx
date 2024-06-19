import React from "react";
import TextCopy from "./TextCopy";
import styles from "../styles/contacts.module.scss";

const Contacts = () => {
  return (
    <div className={styles.content}>
      <TextCopy header="General Inquiries" text="hello@bettermarque.com" />
      <TextCopy header="Phone" text="00237 654 570 096" />
    </div>
  );
};

export default Contacts;


