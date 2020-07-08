import React from "react";
import { useTranslation } from "react-i18next";

import "./lang";
import "./index.less";

const App = () => {
  const { t } = useTranslation();

  return (
    <div
      onClick={() => {
        // (window as any).myTest();
      }}>
      {t("Welcome to React")}
    </div>
  );
};

export default App;
