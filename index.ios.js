/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View,
  ListView,
  TouchableHighlight,
  RecyclerViewBackedScrollView,
  ScrollView
} from 'react-native';

class AwesomeProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
    };
  }

  componentDidMount() {
    var feeds = [
      {
          id: 0,
          head: 'http://b.hiphotos.baidu.com/map/pic/item/2cf5e0fe9925bc31752d5e7759df8db1ca1370e8.jpg',
          name: '小A',
          time: '10 min ago',
          text: '车不错~车不错~车不错~车不错~车不错~车不错~车不错~车不错~',
          img: 'http://b.hiphotos.baidu.com/map/pic/item/8435e5dde71190ef678fd530c91b9d16fcfa60ec.jpg',
          like: 216,
          hehe: 300,
          see: 500,
          comments: [
              {
                  name: '小B',
                  text: '腿好白~~~~'
              },
              {
                  name: '小C',
                  text: '车不错~~~~'
              },
          ]
      },
      {
          id: 1,
          head: 'http://b.hiphotos.baidu.com/map/pic/item/2cf5e0fe9925bc31752d5e7759df8db1ca1370e8.jpg',
          name: '小B',
          time: '10 min ago',
          text: '车不错~车不错~车不错~车不错~车不错~车不错~车不错~车不错~',
          img: 'http://g.hiphotos.baidu.com/map/pic/item/ac345982b2b7d0a2fac14272ccef76094a369ad1.jpg',
          like: 216,
          hehe: 300,
          see: 500,
          comments: [
              {
                  name: '小B',
                  text: '腿好白~~~~'
              },
              {
                  name: '小C',
                  text: '车不错~~~~'
              },
          ]
      }
    ]
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(feeds),
      loaded: true,
    });
  }

  render() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }

    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
    
        <Image
          source={require('./images/head_bg_1.png')}
          style={styles.thumbnail}
        ></Image>
        <Image
          source={require('./images/bg.png')}
          style={{width: 375, height: 500}}
        >
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderFeeds}
          style={styles.listView}
          renderScrollComponent={props => <RecyclerViewBackedScrollView {...props} />}
        />
        </Image>
      </ScrollView>
    );
  }

  renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text>
          Loading banana...
        </Text>
      </View>
    );
  }

  renderFeeds(feed) {
    return (
      <View style={styles.feedcontainer}>
          <View style={styles.headContainer}>
            <Image
              source={{uri: feed.head}}
              style={styles.headPic}
            />
            <View style={styles.rightContainer}>
              <Text style={styles.name}>{feed.name}</Text>
              <Text style={styles.time} style={{color: 'grey'}}>{feed.time}</Text>
            </View>
          </View>
          <Text style={styles.text}>{feed.text}</Text>
          <Image
            source={{uri: feed.img}}
            style={styles.img}
          />
          <View style={styles.headContainer}>
            <Text style={styles.like}>{feed.like + 'likes'}</Text>
            <Text style={styles.hehe}>{feed.hehe + 'hehe'}</Text>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingVertical: 0,
  },
  thumbnail: {
    width: 375,
    height: 282,
    top: 0,
    padding: 0
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#F5FCFF',
    backgroundColor: 'transparent',
    top: 0,
    paddingBottom: 100,
  },
  listView: {
    // paddingBottom: 100,
    // backgroundColor: '#F5FCFF',
  },
  feedcontainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    margin: 10,
    marginTop: 0,
    borderRadius: 4
  },
  headPic: {
    width: 35,
    height: 35,
    borderRadius: 18,
    margin: 15,
    marginLeft: 0
  },
  headContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.5)',
    margin: 10
  },
  rightContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18
  },
  year: {
    fontSize: 14,
  },
  text: {
    margin: 8
  },
  img: {
    margin: 0,
    // width: 400,
    height: 200
  },
  like: {
    width: 70,
    marginLeft: 20,
    marginBottom: 10
  },
  hehe: {
    flex: 1,
    width: 100,
    marginLeft: 20,
    marginBottom: 10
  }


});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
