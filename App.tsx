import * as ImageManipulator from "expo-image-manipulator";
import * as ImagePicker from "expo-image-picker";
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
export default function App() {
  const [selectedImage, setSelectedImage] = React.useState("");
  const [selectedImageTemp, setSelectedImageTemp] = React.useState("");

  let openImagePickerAsync = async () => {
    let permissionRes = await ImagePicker.requestCameraPermissionsAsync();
    if (permissionRes.granted === false) {
      Alert.alert("Failure!", "Permission to access camera roll is required!");
      return;
    }
    let pickerRes = await ImagePicker.launchImageLibraryAsync();

    if (pickerRes.cancelled == false) {
      setSelectedImage(pickerRes.uri);
      setSelectedImageTemp(pickerRes.uri);
    } else {
      Alert.alert("Failure!", "upload a picture please!");
    }
  }

  const rotateImage = async () => {
    const manipulatorImage = await ImageManipulator.manipulateAsync(
      selectedImageTemp,
      [{ rotate: 0 }],
      { compress: 1, format: ImageManipulator.SaveFormat.PNG }
    );
    setSelectedImage(manipulatorImage.uri);
  }

  const rotateImage90 = async () => {
    const manipulatorImage = await ImageManipulator.manipulateAsync(
      selectedImageTemp,
      [{ rotate: 90 }],
      { compress: 1, format: ImageManipulator.SaveFormat.PNG }
    );
    setSelectedImage(manipulatorImage.uri);
  }

  const rotateImage180 = async () => {
    const manipulatorImage = await ImageManipulator.manipulateAsync(
      selectedImageTemp,
      [{ rotate: 180 }],
      { compress: 1, format: ImageManipulator.SaveFormat.PNG }
    );
    setSelectedImage(manipulatorImage.uri);
  }

  const rotateImage270 = async () => {
    const manipulatorImage = await ImageManipulator.manipulateAsync(
      selectedImageTemp,
      [{ rotate: 270 }],
      { compress: 1, format: ImageManipulator.SaveFormat.PNG }
    );
    setSelectedImage(manipulatorImage.uri);
  }

  const rotateImageFlipH = async () => {
    const manipulatorImage = await ImageManipulator.manipulateAsync(
      selectedImageTemp,
      [{ flip: ImageManipulator.FlipType.Horizontal }],
      { compress: 1, format: ImageManipulator.SaveFormat.PNG }
    );
    setSelectedImage(manipulatorImage.uri);
  }

  const rotateImageFlipV = async () => {
    const manipulatorImage = await ImageManipulator.manipulateAsync(
      selectedImageTemp,
      [{ flip: ImageManipulator.FlipType.Vertical }],
      { compress: 1, format: ImageManipulator.SaveFormat.PNG }
    );
    setSelectedImage(manipulatorImage.uri);
  }
  return (
    <View style={styles.container}>
      <Text style={{fontSize:20,fontWeight:"bold"}}>Welcome to Zero 2 publish</Text>
      {
        selectedImage == "" ? (
          <View>
            <TouchableOpacity
              onPress={openImagePickerAsync}
              style={styles.buttonUpload}>
              <Text style={{ color: "#eeb585" }}> Upload Image</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={{ alignItems: "center" }}>
            <Image source={{ uri: selectedImage }}
              style={styles.imageView}
            />
            <View style={{ alignItems: 'center', flexDirection: 'row' }}>
              <TouchableOpacity
                onPress={rotateImage90}
                style={styles.buttonRotate90}>
                <Text style={{ color: "#eeb585" }}> Right </Text>
              </TouchableOpacity>
              
              <TouchableOpacity
                onPress={rotateImage180}
                style={styles.buttonRotate90}>
                <Text style={{ color: "#eeb585" }}> Bottom</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={rotateImage270}
                style={styles.buttonRotate90}>
                <Text style={{ color: "#eeb585" }}> Left</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={rotateImage}
                style={styles.buttonRotate90}>
                <Text style={{ color: "#eeb585" }}> Reset</Text>
              </TouchableOpacity>
              </View>
              <View style={{ alignItems: 'center', flexDirection: 'row' }}>
              <TouchableOpacity
                onPress={rotateImageFlipH}
                style={styles.buttonRotate90}>
                <Text style={{ color: "#eeb585" }}> Flip Horizontal</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={rotateImageFlipV}
                style={styles.buttonRotate90}>
                <Text style={{ color: "#eeb585" }}> Flip Vertical</Text>
              </TouchableOpacity>
            </View>
          </View>
        )
      }
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonUpload: {
    marginTop: 30,
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderRadius: 10,
    backgroundColor: "#000"
  },
  buttonRotate90: {
    marginTop: 30,
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderRadius: 10,
    backgroundColor: "#e2e2e2"
  },
  imageView: {
    width: 200,
    height: 200,
    marginTop: 20,
    borderRadius: 10
  }
});
