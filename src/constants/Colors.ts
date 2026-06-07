const tintColorLight = "#2f95dc";
const tintColorDark = "#fff";

export const ColorNames = {
  foreground: "foreground",
  background: "background",
  primary: "primary",
  primaryForeground: "primaryForeground",
  secondary: "secondary",
  secondaryForeground: "secondaryForeground",
  accent: "accent",
  accentForeground: "accentForeground",
  destructive: "destructive",
  destructiveForeground: "destructiveForeground",
  tint: "tint",
  tabIconDefault: "tabIconDefault",
  tabIconSelected: "tabIconSelected",
  muted: "muted"
} as const;
export type TColorName = (typeof ColorNames)[keyof typeof ColorNames];

export const Colors: Record<"light" | "dark", Record<TColorName, string>> = {
  light: {
    [ColorNames.foreground]: "#000",
    [ColorNames.background]: "#fff",
    [ColorNames.primary]: "#725C0C",
    [ColorNames.primaryForeground]: "#FFFFFF",
    [ColorNames.secondary]: "#695D3F",
    [ColorNames.secondaryForeground]: "#FFFFFF",
    [ColorNames.accent]: "#46664B",
    [ColorNames.accentForeground]: "#FFFFFF",
    [ColorNames.destructive]: "#FFDAD6",
    [ColorNames.destructiveForeground]: "#93000A",
    [ColorNames.tint]: tintColorLight,
    [ColorNames.tabIconDefault]: "#ccc",
    [ColorNames.tabIconSelected]: tintColorLight,
    [ColorNames.muted]: "#949494",
  },
  dark: {
    [ColorNames.foreground]: "#EAE1D4",
    [ColorNames.background]: "#16130B",
    [ColorNames.primary]: "#E2C46D",
    [ColorNames.primaryForeground]: "#3C2F00",
    [ColorNames.secondary]: "#D4C5A1",
    [ColorNames.secondaryForeground]: "#393016",
    [ColorNames.accent]: "#ACCFAE",
    [ColorNames.accentForeground]: "#19371F",
    [ColorNames.destructive]: "#93000A",
    [ColorNames.destructiveForeground]: "#FFDAD6",
    [ColorNames.tint]: tintColorDark,
    [ColorNames.tabIconDefault]: "#ccc",
    [ColorNames.tabIconSelected]: tintColorDark,
    [ColorNames.muted]: "#929292ff",
  },
} as const;
