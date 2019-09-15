import { StyleSheet } from 'react-native'

export const colors = {
  grey: '#C7CAE0',
  blue: '#608DF7',
  white: '#F7F9FF',
  green: '#E6F4F1',
  plum: '#4b4453',
  black: '#434655',
  red: '#F15F77',
  flatGrey: '#A8AABC',
}

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    flex: 1,
  },
  primaryPage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.green,
  },
  content: { fontSize: 20, padding: 20, lineHeight: 30 },

  header1: {
    width: '100%',
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'Montserrat_black',
    padding: 10,
    margin: 0,
  },

  header2: {
    color: colors.black,
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 28,
  },

  listItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: colors.grey,
    borderBottomWidth: 1,
    padding: 20,
  },
  text: {
    color: colors.black,
    fontSize: 16,
    marginHorizontal: 10,
  },

  touchable: {
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
    shadowOffset: { width: 0, height: 1 },
    overflow: 'visible',
    shadowColor: colors.black,
    backgroundColor: colors.white,
    borderRadius: 4,
  },
})

// export const gradients = {
//   primary: [
//     "#845ec2",
//     "#965dc0",
//     "#a75dbe",
//     "#b75cbb",
//     "#c55cb7",
//     "#d05cb3",
//     "#da5dae",
//     "#e35fa9",
//     "#ec62a3",
//     "#f3659d",
//     "#fa6a97",
//     "#ff6f91"
//   ],
//   secondary: ["#fff", "#FEF7FF"]
// };
