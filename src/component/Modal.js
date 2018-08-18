import React from 'react';
import {Button, Dialog, Input, Layout} from 'element-react';
import 'element-theme-default';
//import { editePost } from '../actions/index';

export default class Modal extends React.Component {
    constructor(props) {
        super(props);

        // this.state = {
        //     value: 'nbvmhgvh'
        // }
        this.state = {
            title: '',
            body: '',

        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            title: nextProps.data.title,
            body: nextProps.data.body,
        });
    }

    editePost = (data) => {

        //editePost()
        console.log(12, data);

    }

    addPost = (data) => {
        console.log(2, data);
    }
    handleSelectTitle = (e) => {
        this.setState({title: e});
    }
    handleSelectBody = (e) => {
        this.setState({body: e});
    }

    created = () => {
        if (!this.props.data.title) {
            this.props.new({title: this.state.title, body: this.state.body})
        }else{
            this.props.edit({title: this.state.title, body: this.state.body, id: this.props.data.id})
        }
        this.props.handleClose()
    }


    render() {
        let {show} = this.props
        let handleClose = this.props.handleClose
        let post = this.props.data
        var title = "Edit post"
        if (!post.title) {
            title = "Add"
        }

        return (
            <Dialog
                title={title}
                size="small"
                visible={show}
                onCancel={handleClose}
                lockScroll={false}
            >
                <Dialog.Body>
                    <p>Title</p>
                    <Layout.Row type="flex" className="row-bg" style={{marginBottom: '10px'}}>
                        <Input ref="input" placeholder="Please input" value={this.state.title}
                               onChange={(e) => this.handleSelectTitle(e)}/>
                    </Layout.Row>
                    <p>Body</p>
                    <Layout.Row type="flex" className="row-bg" style={{marginBottom: '10px'}}>
                        <Input
                            type="textarea"
                            autosize={{minRows: 4, maxRows: 10}}
                            placeholder="Please input"
                            value={this.state.body}
                            onChange={(e) => this.handleSelectBody(e)}
                        />
                    </Layout.Row>
                </Dialog.Body>
                <Dialog.Footer className="dialog-footer">
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button type="primary" onClick={() => {
                        this.created()
                    }}>Confirm</Button>
                </Dialog.Footer>
            </Dialog>
        );
    }

}