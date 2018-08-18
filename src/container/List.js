import React from 'react';
import {Button} from 'element-react';
import {connect} from 'react-redux';
import Post from '../component/Post';
import Modal from '../component/Modal'
import {deletePost} from '../actions/index';
import {createPost, editePost, fetchAllPosts} from "../actions";

//import { deletePost } from '../actions';

class PostList extends React.Component {

    state = {
        show: false,
        data: [],
        allpost: [],
        isLoading: false,
        countLoad: 20
    };

    showModal = (post) => {
        // console.log(post);
        this.setState({data: post});
        this.setState({show: true});
    };

    hideModal = () => {
        this.setState({show: false});
    };
    slicePost = (index, arr, id) => {
        this.props.dispatch(deletePost(id))
    }

    editePost = (data) => {
        this.props.dispatch(editePost(data))
    }

    createPost = (data) => {
        this.props.dispatch(createPost(data))

    }

    componentDidMount() {
        window.addEventListener('scroll', this.onScroll, false);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll, false);
    }

    onScroll = () => {

        let count = this.state.countLoad
        if (
            (window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 20) && this.props.posts.length && !this.state.isLoading) {

                count += 10
            if (this.state.countLoad <= 110 ) {
                this.props.dispatch(fetchAllPosts(0, count));
            }
            this.setState({countLoad: count});
        }
        else {
            this.setState({isLoading: false});

        }

    }


    render() {
        //this.setState({ allpost: this.props.posts});
        let posts = this.props.posts
        if (!posts.length) {
            return (
                <div>
                    No Posts
                </div>
            )
        }
        return (

            <div className="grid-content bg-purple-dark">
                <Button type="primary" onClick={this.showModal} style={{position: 'fixed',top: '80%',left:'80%'}}>Add</Button>
                <Modal
                    show={this.state.show}
                    handleClose={this.hideModal}
                    data={this.state.data}
                    edit={this.editePost}
                    new={this.createPost}
                />
                <ol>
                    {posts.map((val, index, post) => {
                        return (
                            <Post post={val} show={this.showModal} allpost={posts} remove={this.slicePost} index={index}
                                  key={val.id}/>
                        );
                    })}
                </ol>
            </div>

        );
    }

}

const mapStateToProps = state => {
    return {
        posts: state.posts
    };
};

export default connect(
    mapStateToProps
)(PostList);


