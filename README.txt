var React = require('react');
var {
	Text,
	ListView
} = require('react-native');
var InfiniteScroll = require('infinite-scroll');

var Example = React.createClass({	
	getInitialState(){
		var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		var rows = [1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9]
		return {
			data: rows,
			dataSource: ds.cloneWithRows(rows)
		}
	},
	loadMorePage(){
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
          onLoadMoreAsync={this.loadMorePage()}
          style={styles.scrollView}
        >
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

