import { format, parseISO } from "date-fns";
import { fr } from "date-fns/locale";

const usToFrenchDate = (date) => {
  const frenchDate = format(parseISO(date), "PPPP", { locale: fr });
  return frenchDate;
};

export default usToFrenchDate;
