import React from 'react';
import { View, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';

const videos = [
    "https://www.youtube.com/embed/KcNl9yLtcKo",
    "https://www.youtube.com/embed/ROgrgQLXlM4",
    "https://www.youtube.com/embed/jS4htCU5xMM",
    "https://www.youtube.com/embed/qo-e_CqkYMU",
    "https://www.youtube.com/embed/UOYvAsEdLVM",
    "https://www.youtube.com/embed/6_NYr7Sheuw",    

];

const screenWidth = Dimensions.get('window').width;
const videoWidth = (screenWidth - 40) / 1; // 3 columns with some margin
const videoHeight = videoWidth * (6 / 10); // standard YouTube aspect ratio

const VideoGrid = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.grid}>
        {videos.map((url, index) => (
          <View style={styles.videoWrapper} key={index}>
            <WebView
              source={{ uri: url }}
              style={styles.video}
              javaScriptEnabled
              allowsFullscreenVideo
            />
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  videoWrapper: {
    width: videoWidth,
    height: videoHeight,
    marginBottom: 10,
  },
  video: {
    flex: 1,
  },
});

export default VideoGrid;
