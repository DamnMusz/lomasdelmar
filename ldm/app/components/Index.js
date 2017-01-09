import React from 'react';
import autoBind from 'react-autobind';
import Header from './headers/Header'
import FeaturesList from './features/FeaturesList'
import Footer from './footers/Footer'
import Copyright from './footers/Copyright'

class Index extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);
    $.material.init();
  }

  loadSampleData() {
  }

  // Handle when user navigates to a conversation directly without first loading the index...
  componentWillMount() {
    // if('human' in this.props.params){
    //   this.loadSampleData();
    // }
  }

  render() {
    return (
      <div className="content-wrap">
        <Header nav_style='sticky' app_title='Sistema Administrativo' brand_1='Tecno' brand_2='red'/>
        <FeaturesList />
        <Footer />
        <Copyright url='http://www.tecno-red.com.ar' desc='Tecnored'/>
      </div>
    )
  }
};

export default Index;
