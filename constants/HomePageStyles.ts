import { StyleSheet } from "react-native";

const HomePageStyles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F5F6FA" },

  header: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    padding: 20,
  },
  title1: { fontSize: 18, fontWeight: "bold" , color: "#0056d1"},
  
  title: { fontSize: 18 , color: "#0056d1"},

  steps: {
    flexDirection: "row-reverse",
    justifyContent: "space-around",
    marginBottom: 10,
  },
  step: { alignItems: "center" },

  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
  },

  card: {
    backgroundColor: "#fff",
    margin: 10,
    padding: 15,
    borderRadius: 12,
  },

  cardTitle: { fontWeight: "bold", marginBottom: 10 },

  row: {
    flexDirection: "row-reverse",
    alignItems: "center",
    marginBottom: 10,
  },

  text: { marginRight: 10 },

  dotGreen: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "green",
  },

  dotBlue: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "blue",
  },

  dateRow: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    marginTop: 10,
  },

  box: {
    flexDirection: "row-reverse",
    gap: 5,
    backgroundColor: "#eee",
    padding: 10,
    borderRadius: 8,
  },

  itemsHeader: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  edit: { color: "#1E3A8A" },

  item: {
    flexDirection: "row-reverse",
    alignItems: "center",
    marginBottom: 15,
  },

  qty: {
    marginLeft: 10,
    fontWeight: "bold",
    color: "#1E3A8A",
  },

  itemTitle: { fontWeight: "bold" },
  sub: { color: "#888" },

  map: {
    height: 150,
    margin: 10,
    backgroundColor: "#ddd",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },

  mapBtn: {
    backgroundColor: "#1E3A8A",
    padding: 10,
    borderRadius: 20,
  },

  bottomBar: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#fff",
  },

  priceLabel: { color: "#888" },
  price: { fontSize: 20, fontWeight: "bold" },

  button: {
    backgroundColor: "#1E3A8A",
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 10,
  },

  buttonText: { color: "#fff", fontWeight: "bold" },
});
export default HomePageStyles;