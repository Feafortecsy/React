import React, { Component } from 'react';

class DetailContent extends Component {
    onHandleShelf (props) {
        if (this.props.onHandleShelf) {
            this.props.onHandleShelf()
        }
    }
    render () {
        const { book, updated, textOfShelf, onHandleShelf, onHandleStartRead } = this.props
        return (
            <div className ="detail-middle-content">
                <div className = "detail-img-wrapper">
                    <img src = { `http://statics.zhuishushenqi.com${book.cover}` } alt = "" className = "detail-middle-img" />                            
                </div>
                <div className = "detail-content-info">
                    <span className = "content-info-title">{ book.title }</span>
                    <span className = "content-info-rate">{ book.author }&nbsp;|&nbsp;{book.cat}&nbsp;|&nbsp;{(book.wordCount / 10000).toFixed(2)}万字</span>
                    <span className = "content-info-updated">{ updated }更新</span>
                </div>
                <div className = "detail-operator-wrapper">
                    <div className = "operator-add operator-item" onClick = { onHandleShelf.bind(this) } >
                        {textOfShelf}
                    </div>
                    <div className = "operator-read operator-item" onClick = { onHandleStartRead.bind(this) }>
                        开始阅读
                    </div>
                </div>
            </div>
        )
    }
}

export default DetailContent