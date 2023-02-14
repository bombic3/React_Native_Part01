// 시작 전 App.js 코드
import { StyleSheet, Text, View } from "react-native";
// import { StateWithClassComponent} from './StateWithClassComponent';
import StateWithFuctionalComponent from './StateWithFuctionalComponent';

// class components 에서 state가 사용되는 방법
export default function App() {
  return (
    <View style={styles.container}>
      {/* <StateWithClassComponent /> */}
      <StateWithFuctionalComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});