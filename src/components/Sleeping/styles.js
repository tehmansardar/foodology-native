import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
import {Fonts, Colors} from '../../assets/Theme';
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  HeaderImgBackground: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    backgroundColor: '#DEDEDE',
    borderRadius: 10,
  },
  headerImg: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    opacity: 1,
  },
  inputSectionWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.secondary,
    width: '100%',
    height: 65,
    borderRadius: 8,
  },
  inputStyles: {
    color: Colors.inputLabel,
    fontFamily: Fonts.NexaBold,
    fontSize: 20,
    width: '8%',
    height: '100%',
    marginLeft: 5,
  },
  inputTimeWrapper: {
    backgroundColor: Colors.secondary,
    width: '30%',
    height: 65,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  inputTimeStyles: {
    color: Colors.inputLabel,
    fontFamily: Fonts.NexaBold,
    fontSize: 15,
    width: 40,
    height: '100%',
  },
  picker: {
    backgroundColor: Colors.primary,
    borderWidth: 0,
    height: 65,
    width: 100,
  },
  timeListContainer: {
    marginVertical: 10,
  },
  timeListInnerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  timeListIconContainer: {
    width: 35,
    height: 35,
    borderRadius: 5,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
export default styles;
