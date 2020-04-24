import React, { Component } from "react";
import OstMask from "../OstMask/index";
import styles from "./style.less";

interface LoadingProps {
  isLoading?: boolean;
  loadingText?: string;
}

class Loading extends Component<LoadingProps> {
  render() {
    const { isLoading, loadingText } = this.props;
    let text = loadingText || "加载中…";
    return (
      <OstMask show={isLoading}>
        <div className={styles.loading}>
          <span className={styles.loading_svg}></span>
          <span className={styles.loading_text}>{text}</span>
        </div>
      </OstMask>
    );
  }
}

export default Loading;
