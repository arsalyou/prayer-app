import { View, Text } from "react-native";
import React from "react";

const Modal = ({show}) => {
  return (
    <>
      <Modal
      animationType="slide"
      visible={show}
      transparent={true}
      >
        <Text>Modal</Text>
        <Text>Modal</Text>
        <Text>Modal</Text>
        <Text>Modal</Text>
      </Modal>
    </>
  );
};

export default Modal;
