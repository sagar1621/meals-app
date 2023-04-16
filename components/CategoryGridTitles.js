import { Pressable, View, Text, StyleSheet } from "react-native";

function CategoryGridTitles({ title, color,onPress }) {
  return (
    <View style={styles.gridItem}>
      <Pressable android_ripple={{color:'#cc'}} style={({pressed})=>[
        styles.button,pressed?styles.buttonPressed:null,
      ]}
      onPress={onPress}>
        <View style={[styles.innerContainer,{backgroundColor:color}]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoryGridTitles;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 9,
    overflow:'hidden'
  },
  button:{
    flex:1,
  },
  buttonPressed:{
    opacity:0.5,
  },
  innerContainer:{
    flex:1,
    padding:16,
    borderRadius:8,
    justifyContent:'center',
    alignItems:'center',
  },
  title:{
    fontWeight:'bold',
    fontSize:18,
  }
});
