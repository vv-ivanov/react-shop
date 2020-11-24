import React from 'react';
import TabButtons from './TabButtons'
import styled from 'styled-components';

const TabsStyled = styled.div`
padding: 20px;

  .tab-content {
    padding: 20px;
  }
  
  `

export default class Tabs extends React.Component{
  state ={
    activeTab: this.props.children[0].props.label
  }
  changeTab = (tab) => {

    this.setState({ activeTab: tab });
  };
  render(){
    
    let content;
    let buttons = [];
    return (
      <TabsStyled>
        {React.Children.map(this.props.children, child =>{
          buttons.push(child.props.label)
          if (child.props.label === this.state.activeTab) content = child.props.children
        })}
         
        <TabButtons activeTab={this.state.activeTab} buttons={buttons} changeTab={this.changeTab}/>
        <div className="tab-content">{content}</div>
        
      </TabsStyled>
    );
  }
}