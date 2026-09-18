type ClassValue = string | false | null | undefined;

export function cn(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(" ");
}

export function formatSom(value: number): string {
  return new Intl.NumberFormat("uz-UZ").format(Math.round(value));
}
