import React from 'react';
import { View, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';

const videos = [
  "https://www.youtube.com/embed/Y9Q1wZYA1o8",
  "https://www.youtube.com/embed/t6BOZqBny-Q",
  "https://www.youtube.com/embed/QEILIo9Kzlw",
  "https://www.youtube.com/embed/89vspUUr4CQ",
  "https://www.youtube.com/embed/4T2P_-MV9g0",
  "https://www.youtube.com/embed/dFnk1abXQP0",
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
