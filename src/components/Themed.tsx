/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */
import
  {
    Text as DefaultText,
    TextInput as DefaultTextInput,
    View as DefaultView,
    TouchableOpacity,
  } from "react-native";

import { useColorScheme } from "./useColorScheme";

import { ColorNames, Colors, TColorName } from "@/constants/Colors";
import { useState } from "react";

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type TextProps = ThemeProps & DefaultText["props"];
export type ViewProps = ThemeProps & DefaultView["props"];
export type TextInputProps = ThemeProps & DefaultTextInput["props"];
export type ButtonProps = ThemeProps &
  React.ComponentProps<typeof TouchableOpacity> & { text: string };

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: TColorName,
) {
  const theme = useColorScheme();
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}

export function Text(props: TextProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor(
    { light: lightColor, dark: darkColor },
    ColorNames.foreground,
  );

  return <DefaultText style={[{ color }, style]} {...otherProps} />;
}

export function View(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    ColorNames.background,
  );

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}

export function TextInput(props: TextInputProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;

  const foreground = useThemeColor({}, ColorNames.foreground);
  const muted = useThemeColor({}, ColorNames.muted);
  const tintColor = useThemeColor({}, ColorNames.tint);

  const [isFocused, setIsFocused] = useState(false);

  return (
    <DefaultTextInput
      placeholderTextColor="#999"
      style={[
        {
          borderWidth: 1,
          borderRadius: 12,
          paddingHorizontal: 16,
          paddingVertical: 14,
          fontSize: 16,
          marginBottom: 16,
        },
        { borderColor: muted, color: foreground },
        isFocused ? { borderColor: tintColor } : {},
        style,
      ]}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      {...otherProps}
    />
  );
}

export function Button(props: ButtonProps) {
  const primary = useThemeColor({}, ColorNames.primary);
  const primaryForeground = useThemeColor({}, ColorNames.primaryForeground);

  const { style, lightColor, darkColor, text, ...otherProps } = props;

  return (
    <TouchableOpacity
      style={[
        { paddingVertical: 16, borderRadius: 12, alignItems: "center" },
        { backgroundColor: primary },
        style,
      ]}
      {...otherProps}
    >
      <Text
        style={[
          { fontSize: 16, fontWeight: "600" },
          { color: primaryForeground },
        ]}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
}
