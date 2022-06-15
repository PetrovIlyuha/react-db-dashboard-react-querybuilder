import "./App.scss";
import QueryBuilder, { formatQuery, RuleGroupType } from "react-querybuilder";
import { useState } from "react";
import fields from "./fields";
import getOperators from "./getOperators";
import { Language } from "./types";
import translations from "./translations";
import combinators from "./combinators";
import CombinatorSelector from "./CombinatorSelector";
import ValueEditor from "./ValueEditor";
import valueProcessor from "./valueProcessor";

function App() {
  const [query, setQuery] = useState<RuleGroupType>({
    id: "root",
    combinator: "and",
    rules: [],
  });
  const [language, setLanguage] = useState<Language>("en");
  return (
    <>
      <select
        style={{ margin: "0.5rem" }}
        value={language}
        onChange={(e) => setLanguage(e.target.value as Language)}
      >
        <option value="en">English</option>
        <option value="ru">Russian</option>
      </select>
      <QueryBuilder
        fields={fields}
        onQueryChange={(q) => setQuery(q)}
        query={query}
        getOperators={getOperators}
        translations={translations[language]}
        combinators={combinators[language]}
        controlElements={{
          combinatorSelector: CombinatorSelector,
          valueEditor: ValueEditor,
        }}
      />
      <pre>{formatQuery(query, { format: "sql", valueProcessor })}</pre>
      <pre>{formatQuery(query, "json")}</pre>
    </>
  );
}

export default App;
