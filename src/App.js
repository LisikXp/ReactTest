import React, { Component } from 'react';
import { Layout } from 'element-react';
import PostList from './container/List';
import 'element-theme-default';

import './css/list.css';

class App extends Component {
    render() {
        return (
            <div>
                <div className="header-container">

                </div>
                <Layout.Row type="flex" className="row-bg main">
                    <Layout.Col span="8" offset="8">
                        <PostList />
                    </Layout.Col>
                    <Layout.Col span="8"></Layout.Col>

                </Layout.Row>
            </div>
        );
    }
}

export default App;