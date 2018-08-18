import React from 'react';
import {Button, Layout} from 'element-react';
import 'element-theme-default';



export default class Post extends React.Component {


    render() {
        let {post} = this.props
       var show = this.props.show
        var remove = this.props.remove
        var ind = this.props.index
        var allpost = this.props.allpost
        return (
            <li key={post.id}>
                <Layout.Row type="flex" className="row-bg">
                    <Layout.Col span="16">
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </Layout.Col>
                    <Layout.Col span="8">
                        <Button type="primary" icon="edit" onClick={ ()=> show(post) }></Button>
                        <Button type="primary" icon="delete" onClick={ () => remove(ind, allpost, post.id)}></Button>
                    </Layout.Col>
                </Layout.Row>
                <hr/>
            </li>

        );
    }
}
