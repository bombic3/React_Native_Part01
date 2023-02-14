import React, { useState } from "react";
import { View, Text, Button } from "react-native";

const Component = () => {
  // 초기값 설정 (구조분해 문법을 통해 한줄로 줄임)
  const [count, setCount] = useState(0);
  // 줄이지 않았을 때 코드
  // const result = useState(0);
  // const count = result[0];
  // const setCount = result[1];

  return (
    <View>
      <Text>You clicked {count} times</Text>
      <Button title="Click me" onPress={() => setCount(count + 1)} />
    </View>
  );
};

export default Component;