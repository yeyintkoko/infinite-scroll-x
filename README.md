InfiniteScroll
==============

React native scroll view (infnite). This is a really working react native infinite scroll view component.
Compatable with both IOS & Android. Fine with all react native versions.

## Install
npm i infinite-scroll-x --save

## Usage
```js
<InfiniteScroll
	onLoadMoreAsync={this.loadMorePage()}
	horizontal={false}  //true - if you want in horizontal
	style={styles.scrollView}
	{...prop}
	>
{...children}
</InfiniteScroll>
```


### Example

```js
var React = require('react');
var {
	Text,
	ListView
} = require('react-native');
var InfiniteScroll = require('infinite-scroll-x');

var Example = React.createClass({
	getInitialState(){
		var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		var rows = ["China","Korea","Singapore","Malaysia"]
		return {
			data: rows,
			dataSource: ds.cloneWithRows(rows)
		}
	},
	loadMorePage(){
		//here .. collect the data from server somehow
		let new_data = ['Japan','Myanmar','India','Thailand'];
		let rows = this.state.data;
		rows.push.apply(rows, new_data);
		this.setState({
			data: rows,
			dataSource: this.state.dataSource.cloneWithRows(rows)
		});
	},
	render(){
		return (
			<InfiniteScroll
			horizontal={false}	//true - if you want in horizontal
			onLoadMoreAsync={this.loadMorePage()}
			style={styles.scrollView}>
			          <ListView
					enableEmptySections={true}
					dataSource={this.state.dataSource}
					renderRow={(data)=><Text>{data}</Text>}
					/>
		        </InfiniteScroll>
		);
	}
});


module.exports = Example
```

## Support on Beerpay
Hey dude! Help me out for a couple of :beers:!

[![Beerpay](https://beerpay.io/yeyintkoko/infinite-scroll-react-native/badge.svg?style=beer-square)](https://beerpay.io/yeyintkoko/infinite-scroll-react-native)  [![Beerpay](https://beerpay.io/yeyintkoko/infinite-scroll-react-native/make-wish.svg?style=flat-square)](https://beerpay.io/yeyintkoko/infinite-scroll-react-native?focus=wish)
