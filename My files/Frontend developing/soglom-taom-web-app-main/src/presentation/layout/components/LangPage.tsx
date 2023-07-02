import React, { useEffect, useState } from "react";
import { Button } from "../../../components/Button";
import { useTranslation } from "react-i18next";
import "/node_modules/flag-icons/css/flag-icons.min.css";

export const LangPage = () => {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const lang = i18n.language;

  return (
    <div className="flex flex-col justify-center items-center mt-[200px] gap-5">
      <h1 className="font-bold text-4xl">{t("SideBar.langTitle")}</h1>
      <div className="flex items-center justify-center gap-5 text-2xl">
        <div className="flex items-center border-2 focus-within:shadow-2xl rounded-xl">
          <input
            className="w-[20px] h-[20px] ml-2 accent-primary cursor-pointer"
            type="radio"
            name="foo"
            onClick={() => handleLanguageChange("uz")}
            checked={lang === "uz"}
          />
          <label className="ml-2 p-3">
            <span className="fi fi-uz"></span> UZ
          </label>
        </div>
        <div className="flex items-center border-2 focus-within:shadow-2xl  rounded-xl">
          <input
            className="w-[20px] h-[20px] ml-2 accent-primary cursor-pointer"
            type="radio"
            name="foo"
            onClick={() => handleLanguageChange("ru")}
            checked={lang === "ru"}
          />
          <label className="ml-2 p-3">
            <span className="fi fi-ru"></span> RU
          </label>
        </div>
      </div>
    </div>
  );
};
