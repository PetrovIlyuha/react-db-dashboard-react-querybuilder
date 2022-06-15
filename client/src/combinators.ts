import { Language } from "./types";
import { defaultCombinators, NameLabelPair } from "react-querybuilder";

const combinators: Record<Language, NameLabelPair[]> = {
  en: defaultCombinators,
  ru: [
    { name: "and", label: "И" },
    { name: "or", label: "ИЛИ" },
  ],
};

export default combinators;
