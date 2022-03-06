import {Component, useState } from 'react';

class Message extends Component<{}, { data: any, DataisLoaded: boolean }> {

    constructor(props: any) {
        super(props);
   
        this.state = {
            data: [],
            DataisLoaded: false
        };
    }

    componentDidMount() {
        fetch("http://127.0.0.1:3001/")
            .then((res) => res.json())
            .then((json) => {
                console.log('Data from API ', json);
                this.setState({
                    data: json,
                    DataisLoaded: true
                });
            })
    }


  render() {
    const { DataisLoaded, data } = this.state;
    if (!DataisLoaded) return (
        <p>Please, wait...</p>
    )

    return (
        <p>{data.message}</p>
    )
  }
}
export default Message;