import { render } from "react-dom";
import { FlatList } from "react-native";
import CategoryGridTitles from "../components/CategoryGridTitles";
import { CATEGORIES } from "../data/dummy-data";

function CategoriesScreen({ navigation }) {
  function renderCategoryItem(itemData) {
    function pressHandler() {
      navigation.navigate("MealsOverview",{
        categoryId:itemData.item.id,
      });
    }
    return (
      <CategoryGridTitles
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  }
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
    />
  );
}

export default CategoriesScreen;
