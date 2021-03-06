
import React, { Component } from 'react';
import qishi from '@components/qishi.jsx';
import TitleBar from '@components/TitleBar'
import './style.less'

class ServicePhone extends Component {
    constructor(props) {
        super(props);

    }
    componentWillUnmount(){

        this.setState = (state,callback)=>{
            return;
        };
    }
    render() {
        return (
            <div className="service_phone_html">
                <TitleBar
                    title="客服电话"
                    BackClick={(function(){
                        this.props.history.push("/personal")
                    }).bind(this)}
                />

                <div className="telephone">
                    <span>如有问题请咨询下方奥亚客服电话：</span><br/>
                    0373-80088208200
                </div>
            </div>
        );
    }
}

export default ServicePhone;
