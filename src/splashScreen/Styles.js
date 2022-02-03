import {StyleSheet, Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
  containerFluid: {
    flex: 1,
    backgroundColor: 'white',
    alignItems:"center",
    justifyContent:'center'
  },
  splashBackImage: {
    width:width-100,
    height:270,
    position: 'absolute',
  },
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  overlayBtn: {
    backgroundColor: '#000',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'flex-end',
    width: width - 120,
    height: 45,
    marginBottom: 20,
  },
  overlayTxt: {
    color: '#fff',
  },
  cnLogo: {
    width: 450,
    height: 350,
  },
  txtLogo: {
    fontSize: 42,
    color: '#000000',
    fontWeight: 'bold',
  },
});
export default styles;
