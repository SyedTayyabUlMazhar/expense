import { StyleSheet } from "react-native";

import
  {
    Button,
    Text,
    TextInput,
    useThemeColor,
    View,
  } from "@/components/Themed";
import { ColorNames } from "@/constants/Colors";

export default function ContactUsScreen() {
  const primary = useThemeColor({}, ColorNames.primary);
  const primaryForeground = useThemeColor({}, ColorNames.primaryForeground);

  return (
    <View style={styles.container}>
      {/* Main content */}
      <View style={styles.content}>
        <Text style={styles.heading}>Contact Us</Text>
        <Text style={styles.subheading}>
          Have a question or feedback? Send us a message.
        </Text>

        <TextInput placeholder="Your Name" />

        <TextInput
          placeholder="Email Address"
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextInput
          placeholder="Message"
          multiline
          numberOfLines={5}
          textAlignVertical="top"
          style={styles.messageInput}
        />
      </View>
      {/* Footer - stays at bottom */}
      <View style={styles.footer}>
        <Button text="Send Message" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  footer: {
    paddingHorizontal: 20,
    paddingBottom: 24,
    paddingTop: 12,
  },

  heading: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 8,
    alignSelf: "center",
  },
  subheading: {
    fontSize: 15,
    color: "#777",
    marginBottom: 24,
    lineHeight: 22,
  },
  messageInput: {
    minHeight: 140,
  },
});
