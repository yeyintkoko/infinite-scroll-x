InfiniteScroll
==============

React native scroll view (infnite). This is a really working react native infinite scroll view component.
Compatable with both IOS & Android. Fine with all react native versions.

## Usage
```js
<InfiniteScroll
	onLoadMoreAsync={this.loadMorePage()}
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
				<InfiniteScroll onLoadMoreAsync={this.loadMorePage()} style={styles.scrollView}>
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
