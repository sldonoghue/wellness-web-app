import exact from 'prop-types-exact';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import ImageSplit from './ImageSplit';
import Inspiration from './Inspiration';

const propTypes = exact({
  accessToken: PropTypes.string,
  introText: PropTypes.string,
  pageTitle: PropTypes.string,
  subtext: PropTypes.string,
  title: PropTypes.string,
  tumblrApi: PropTypes.string,
})

const defaultProps = {
  accessToken: 'Wsd6sfe1uHkckn8sbelD4ws8QCAUxUXAg5GvcAYJowIsW4YpB3',
  tumblrApi: 'https://api.tumblr.com/v2/tagged?tag=yogi',
  introText: 'We are bringing the social side of the Health and Wellness to you. Make new friends while attending a health and wellness-focused event. Find the best deals for local coffee shops and restaurants to meet up with like-minded individuals. Explore the variety of health and wellness businesses near you, including local gyms and sportswear shops, alongside getting some healthy food inspiration.',
  pageTitle: 'Welcome to the Wellness Web App',
  subtext: 'Bringing the social side of Health & Wellness Industry to you',
  title: "WELLNESS WEB APP",
}


class HomePage extends Component {
  constructor(props) {
    super(props);

    this.scrollTo = React.createRef();

    this.state = {
      blogPosts: []
    }
  }

  componentDidMount() {
    this.getPosts();
  }

  getPosts = () => {
    const { accessToken, tumblrApi } = this.props; 
    let blogPhotos = [];

    fetch(`${tumblrApi}&api_key=${accessToken}`)
    .then(response => response.json())
    .then(data => {
      let blogs = data.response;
      blogs.forEach((blog, index) => {
        if (blog.type === "photo") blogPhotos.push(blog);
      })
      this.setState({ blogPosts: blogPhotos});
    })
  }

  handleJumpLink = () => {
    this.scrollTo.current.scrollIntoView({behavior: 'smooth', block: 'start'}, 0);
  }

  handlePageClick = () => {
    debugger
  }

  render() {
    const { introText, pageTitle, subtext, title } = this.props;
    const { blogPosts } = this.state;

    return (
      <div className="Homepage">
        <div className="Homepage_container">
          <div className="Homepage_heroImage" />
          <div className="Homepage_content">
            <h1 className="Homepage_bannerTitle">
              {title}
            </h1>
            <div className="Homepage_subtext">
              {subtext}
            </div>
            <button className="Homepage_jumpLink" onClick={this.handleJumpLink} />
          </div>
        </div>
        <div className="Homepage_section" ref={this.scrollTo}>
          <div className="Homepage_sectionContent">
            <h2 className="Homepage_pageTitle">
              {pageTitle}
            </h2>
            <div className="Homepage_text">
              {introText}
            </div>
          </div>
          <ImageSplit 
            handlePageClick={this.handlePageClick}
          />
          <Inspiration
            blogPosts={blogPosts}
            title='#Wellness'
          />
        </div>
      </div>
    )
  }
}

HomePage.propTypes = propTypes;
HomePage.defaultProps = defaultProps;

export default HomePage;