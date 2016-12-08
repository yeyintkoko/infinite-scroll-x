'use strict';

import React, { Component } from 'react';
import {
  ScrollView
} from 'react-native';

var InfiniteScroll = React.createClass({

    _handleScroll(event) {
      if(this.props.onScroll){
        this.props.onScroll(event);
      }
      if (this._shouldLoadMore(event)) {
        if(this.props.onLoadMoreAsync){
          this.props.onLoadMoreAsync();
        }
      }
    },

    _shouldLoadMore(event) {
      if(this.props.horizontal) return this._distanceFromEnd(event) < 1;
      return this._distanceFromEnd(event) < 5;
    },

    _distanceFromEnd(event): number {
      let {
        contentSize,
        contentInset,
        contentOffset,
        layoutMeasurement,
      } = event.nativeEvent;

      let contentLength;
      let trailingInset;
      let scrollOffset;
      let viewportLength;
      let horizontal = this.props.horizontal || false;
      if (horizontal) {
        contentLength = contentSize.width;
        trailingInset = contentInset.right;
        scrollOffset = contentOffset.x;
        viewportLength = layoutMeasurement.width;
      } else {
        contentLength = contentSize.height;
        trailingInset = contentInset.bottom;
        scrollOffset = contentOffset.y;
        viewportLength = layoutMeasurement.height;
      }

      return contentLength + trailingInset - scrollOffset - viewportLength;
    },

    render() {
      return (
        <ScrollView
        {...this.props}
        automaticallyAdjustContentInsets={false}
        onScroll={this._handleScroll}
        scrollEventThrottle={200}
        >
          {this.props.children}
        </ScrollView>
      );
    }
});


export default InfiniteScroll;
