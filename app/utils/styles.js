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
  container2: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  listItem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: "#EBEBEB",
    borderBottomWidth: 1,
    padding: 20
  },
  image: { width: 128, borderRadius: 64, aspectRatio: 1 },
  text: { color: "#4B4453", fontSize: 16, fontWeight: "600" },
  header1: {
    width: "100%",
    fontSize: 20,
    textAlign: "center",
    fontFamily: "Montserrat_black",
    padding: 10,
    margin: 0
  },
  header2: { color: "#4B4453", fontSize: 16 },
  content: { fontSize: 20, padding: 20, lineHeight: 30 }
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
