const tintColorLight = "#2f95dc";
const tintColorDark = "#fff";

export const ColorNames = {
  text: "text",
  background: "background",
  tint: "tint",
  tabIconDefault: "tabIconDefault",
  tabIconSelected: "tabIconSelected",
} as const;
export type TColorName = (typeof ColorNames)[keyof typeof ColorNames];

export const Colors = {
  light: {
    [ColorNames.text]: "#000",
    [ColorNames.background]: "#fff",
    [ColorNames.tint]: tintColorLight,
    [ColorNames.tabIconDefault]: "#ccc",
    [ColorNames.tabIconSelected]: tintColorLight,
  },
  dark: {
    [ColorNames.text]: "#fff",
    [ColorNames.background]: "#000",
    [ColorNames.tint]: tintColorDark,
    [ColorNames.tabIconDefault]: "#ccc",
    [ColorNames.tabIconSelected]: tintColorDark,
  },
} as const;
