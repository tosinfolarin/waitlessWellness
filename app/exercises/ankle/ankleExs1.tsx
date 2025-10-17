import React from 'react';
import { View, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';

const videos = [
  "https://www.youtube.com/embed/rzeTc3fyX_Y",
  "https://www.youtube.com/embed/c2KF19VI260",
  "https://www.youtube.com/embed/LZ0YOtbSgU8",
  "https://www.youtube.com/embed/lD6lqjAh57w",
  "https://www.youtube.com/embed/HFNECPgOGI8",
  "https://www.youtube.com/embed/pgoh-1i6ut0",

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
