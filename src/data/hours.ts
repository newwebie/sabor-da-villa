export interface HourEntry {
  dia: string;
  almoco: string;
  jantar: string;
}

export const hours: HourEntry[] = [
  { dia: "Segunda a Sexta", almoco: "11h30 às 15h", jantar: "18h30 às 22h30" },
  { dia: "Sábado", almoco: "12h às 16h", jantar: "19h às 23h" },
  { dia: "Domingo", almoco: "12h às 16h", jantar: "Fechado" },
];
