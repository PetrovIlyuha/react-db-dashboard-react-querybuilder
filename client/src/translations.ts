import { Language } from "./types";
import { defaultTranslations, Translations } from "react-querybuilder";

const translations: Record<Language, Partial<Translations>> = {
  en: defaultTranslations,
  ru: {
    fields: {
      title: "Поля",
    },
    operators: {
      title: "Операторы",
    },
    value: {
      title: "Значение",
    },
    removeRule: {
      label: "X",
      title: "Удалить правило",
    },
    removeGroup: {
      label: "X",
      title: "Удалить группу",
    },
    addRule: {
      label: "+Правило",
      title: "Добавить правило",
    },
    addGroup: {
      label: "+Группа",
      title: "Добавить группу",
    },
    combinators: {
      title: "Комбинаторы",
    },
    notToggle: {
      title: "Инвертировать группу",
    },
  },
};

export default translations;
