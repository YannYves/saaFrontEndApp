import { format, parseISO } from "date-fns";
import { fr } from "date-fns/locale";

const usToFrenchDate = (date) => {
  let frenchDate;
  if (!date) {
    frenchDate = "problème de date ";
  } else {
    frenchDate = format(parseISO(date), "PPPP", { locale: fr });
  }
  return frenchDate;
};

export default usToFrenchDate;
