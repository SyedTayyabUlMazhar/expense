import { StyleSheet, TextInput, TouchableOpacity } from "react-native";

import { Text, View } from "@/components/Themed";

export default function ContactUsScreen() {
  return (
    <View style={styles.container}>
      {/* Main content */}
      <View style={styles.content}>
        <Text style={styles.heading}>Contact Us</Text>
        <Text style={styles.subheading}>
          Have a question or feedback? Send us a message.
        </Text>

        <TextInput
          placeholder="Your Name"
          placeholderTextColor="#999"
          style={styles.input}
        />

        <TextInput
          placeholder="Email Address"
          placeholderTextColor="#999"
          keyboardType="email-address"
          autoCapitalize="none"
          style={styles.input}
        />

        <TextInput
          placeholder="Message"
          placeholderTextColor="#999"
          multiline
          numberOfLines={5}
          textAlignVertical="top"
          style={[styles.input, styles.messageInput]}
        />
      </View>
      {/* Footer - stays at bottom */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Send Message</Text>
        </TouchableOpacity>
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
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    marginBottom: 16,
    backgroundColor: "#fff",
  },
  messageInput: {
    minHeight: 140,
  },

  button: {
    backgroundColor: "#111",
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
