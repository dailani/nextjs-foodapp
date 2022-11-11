import styles from "./styles/BaseTemplate.module.css";
import * as React from "react";

//Props
export interface IBaseTemplate {
  sampleTextProp: string;
}

export function BaseTemplate(props: IBaseTemplate) {
  return <div className={styles.container}>{props.sampleTextProp}</div>;
}
