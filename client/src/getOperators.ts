import { defaultOperators, NameLabelPair } from "react-querybuilder";

const getOperators = (field: string): NameLabelPair[] => {
  switch (field) {
    case "order_date":
    case "ship_date":
      return [
        { name: "=", label: "is" },
        { name: "!=", label: "is not" },
        { name: "<", label: "is before" },
        { name: ">", label: "is after" },
        { name: "<=", label: "is on or before" },
        { name: ">=", label: "is on or after" },
        { name: "null", label: "is blank" },
        { name: "notNull", label: "is not blank" },
      ];
    case "order_id":
    case "units_sold":
    case "unit_price":
    case "unit_cost":
    case "total_revenue":
    case "total_cost":
    case "total_profit":
      return [
        { name: "=", label: "is" },
        { name: "!=", label: "is not" },
        { name: "<", label: "is less than" },
        { name: ">", label: "is greater than" },
        { name: "<=", label: "is less than or equal to" },
        { name: ">=", label: "is greater than or equal to" },
        { name: "null", label: "is blank" },
        { name: "notNull", label: "is not blank" },
      ];
    default:
      return defaultOperators;
  }
};

export default getOperators;
