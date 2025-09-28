import { Text, View, StyleSheet, ScrollView } from "react-native";
import Constants from "expo-constants";

type InfoItemProps = {
  label: string;
  value: string;
};

const InfoItem = ({ label, value }: InfoItemProps) => (
  <View style={styles.infoItem}>
    <Text style={styles.label}>{label}</Text>
    <Text style={styles.value}>{value}</Text>
  </View>
);

export default function AppInfo() {
  const appConfig = Constants.expoConfig;
  const extraConfig = appConfig?.extra || {};

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>App Information</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Basic Info</Text>
        <InfoItem label="App Name" value={appConfig?.name || "-"} />
        <InfoItem label="Version" value={appConfig?.version || "-"} />
        <InfoItem label="Description" value={appConfig?.description || "-"} />
        <InfoItem label="Slug" value={appConfig?.slug || "-"} />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Platform Configuration</Text>
        <InfoItem label="Orientation" value={appConfig?.orientation || "-"} />
        <InfoItem label="User Interface" value={appConfig?.userInterfaceStyle || "-"} />
        {/* @ts-ignore */}
        <InfoItem label="Scheme" value={appConfig?.scheme || "-"} />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Extra Configuration</Text>
        <InfoItem label="Custom Version" value={extraConfig.currentVersion || "-"} />
        <InfoItem label="Website" value={extraConfig.website || "-"} />
        <InfoItem label="Domain" value={extraConfig.domain || "-"} />
        <InfoItem label="Project ID" value={extraConfig.eas?.projectId || "-"} />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Updates</Text>
        {/* @ts-ignore */}
        <InfoItem label="Runtime Policy" value={appConfig?.runtimeVersion?.policy || "-"} />
        <InfoItem label="Update URL" value={appConfig?.updates?.url || "-"} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    padding: 20,
    backgroundColor: "#2196F3",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  section: {
    backgroundColor: "white",
    margin: 10,
    padding: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
    color: "#333",
  },
  infoItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  label: {
    fontSize: 16,
    color: "#666",
    flex: 1,
  },
  value: {
    fontSize: 16,
    color: "#333",
    flex: 2,
    textAlign: "right",
  },
});
