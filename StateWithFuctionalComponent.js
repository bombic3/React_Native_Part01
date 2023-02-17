import React, { useState } from "react";
import { View, Text, Button, Switch, TextInput } from "react-native";

const Component = () => {
  // 초기값 설정 (구조분해 문법을 통해 한줄로 줄임) - number, boolean, string
  const [count, setCount] = useState(0);
  // 줄이지 않았을 때 코드
  // const result = useState(0);
  // const count = result[0];
  // const setCount = result[1];

  const [isOn, setIsOn] = useState(false);
  const [name, setName] = useState("");


  // inOn이라는 이름의 변수를 value값으로 넣어주고
  // Switch 값이(value 값) 바뀔 때를 인식하는 속성 onValueChange에 값 받기
  return (
    <View>
      <Text>You clicked {count} times</Text>
      <Button title="Click me" onPress={() => setCount(count + 1)} />

      <Text>------boolean 값 사용-----</Text>
      <Switch
        value={isOn}
        onValueChange={v => {
          console.log('v : ', v);
          setIsOn(v);
        }}
      />

      <Text>------string 값 사용-----</Text>
      <TextInput
        value={name}
        onChangeText={v => {
          console.log('v', v);
          setName(v);
        }}
        style={{ backgroundColor: "pink" }}
      />
    </View>
    
  );
};

export default Component;