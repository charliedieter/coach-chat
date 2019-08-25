import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 12,
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 24
  },
  image: { width: 128, borderRadius: 64, aspectRatio: 1 },
  text: { color: "#4B4453", fontSize: 16, fontWeight: "600" },
  header2: { color: "#4B4453", fontSize: 16, fontFamily: "Montserrat_black" }
});

export const gradients = {
  primary: [
    "#845ec2",
    "#965dc0",
    "#a75dbe",
    "#b75cbb",
    "#c55cb7",
    "#d05cb3",
    "#da5dae",
    "#e35fa9",
    "#ec62a3",
    "#f3659d",
    "#fa6a97",
    "#ff6f91"
  ],
  secondary: ["#fff", "#FEF7FF"]
};
