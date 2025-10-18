import React from 'react';
import { View, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';

const videos = [
  "https://www.youtube.com/embed/egs6m4J8u8c",
  "https://www.youtube.com/embed/fcvfk7TVyVg",
  "https://www.youtube.com/embed/_WMDBZOGZB4",
  "https://www.youtube.com/embed/mIA11hAcvwI",
  "https://www.youtube.com/embed/8BRnpWIB3qg",
  "https://www.youtube.com/embed/q8u3rP2kPLY",


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
