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
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,.1)",
    width: "100%",
    padding: 10,
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
    shadowOffset: { width: 0, height: 1 },
    overflow: "visible",
    shadowColor: "black",
    backgroundColor: "white",
    borderRadius: 4
  },
  content: { fontSize: 20, padding: 20, lineHeight: 30 },
  touchable: {
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
    shadowOffset: { width: 0, height: 1 },
    overflow: "visible",
    shadowColor: "black",
    backgroundColor: "white",
    borderRadius: 4
  },
  content: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 12,
    alignItems: "center",
    justifyContent: "space-between"
  }
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
