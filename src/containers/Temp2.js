import React, { Component } from 'react';
import Popper from '@material-ui/core/Popper';
import styled from "styled-components";
import Grid from '@material-ui/core/Grid';



const StyledPopper = styled(Popper)`&&{
  
  z-index: 1;
  &[x-placement*="bottom"] .arrow{

    width: 0; 
    height: 0; 
    border-left: 1em solid transparent;
    border-right: 1em solid transparent;
    border-bottom: 1em solid #ff1;
    margin-top: -0.9em;
    
    &:before {
      border-width: '0 1em 1em 1em';
      border-color: 'transparent transparent white transparent';
    }
  }

  &[x-placement*="top"] .arrow{

    bottom: 0;
    width: 0; 
    height: 0; 
    border-left: 1em solid transparent;
    border-right: 1em solid transparent;
    border-top: 1em solid #ff1;
    margin-bottom: -0.9em;

    &:before {
      border-width: 1em 1em 0 1em;
      border-color: white transparent transparent transparent;
    }
  }

  &[x-placement*="right"] .arrow{

    left: 0;
    width: 0; 
    height: 0; 
    border-top: 1em solid transparent;
    border-bottom: 1em solid transparent;
    border-right: 1em solid #ff1;
    margin-left: -0.9em;

    &:before {
      border-width: 1em 1em 1em 0;
      border-color: transparent white transparent transparent;
    }
  }

  &[x-placement*="left"] .arrow{
    
    right: 0;
    width: 0; 
    height: 0; 
    border-top: 1em solid transparent;
    border-bottom: 1em solid transparent;
    border-left: 1em solid #ff1;
    margin-right: -0.9em;

    &:before {
      border-width: 1em 0 1em 1em;
      border-color: transparent transparent transparent white;
    }
  }

  .arrow {
    position: absolute;
    font-size: 7px;
    width: 3em;
    height: 3em;

    &:before {
      content: '""',
      margin: auto;
      display: block;
      width: 0;
      height: 0;
      border-style: solid;
    }
  }

  .popper-content {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ff1;
    color: red;
    height: 90px;
    width: 160px;
  }

}`;


export default class Temp2 extends Component {

  state = {
    anchorElement: null,
    arrowRef: null,
    open: false,
  }

  handleAnchor = event => {
    this.setState({
      anchorElement: event.currentTarget
    })
    this.setState({open: !this.state.open});
    console.log("123");
  }
  handleClickButton = () => {
    this.setState({open: !this.state.open});
  };

  handleArrowRef = node => {
    this.setState({
      arrowRef: node,
    });
  };

  render() {
    return (
      <div>
        <div className="inner-window">
          <Grid
            className="scroll"
            container
            alignItems="center"
            justify="center"
          >
            <div>

              {
                this.state.anchorElement &&
                <StyledPopper
                  placement="bottom"
                  open={this.state.open}
                  anchorEl={this.state.anchorElement}
                  modifiers={{
                    flip: {
                      enabled: true,
                    },
                    arrow: {
                      enabled: true,
                      element: this.state.arrowRef,
                    },
                    preventOverflow: {
                      enabled: "true",
                      boundariesElement: 'scrollParent'
                    },
                  }}
                >
                  {
                    true &&
                    <span className="arrow" ref={this.handleArrowRef} />
                  }
                  <div className={"popper-content"}>
                    <span>Popper time</span>
                  </div>
                </StyledPopper>
              }

              <div className={"first-row"}>
                <button onClick={this.handleClickButton}>Anchor here</button>
                <button onClick={this.handleAnchor}>Anchor here</button>
                <button onClick={this.handleAnchor}>Anchor here</button>
                <button onClick={this.handleAnchor}>Anchor here</button>
                <button onClick={this.handleAnchor}>Anchor here</button>
                <button onClick={this.handleAnchor}>Anchor here</button>
                <button onClick={this.handleAnchor}>Anchor here</button>
              </div>

              <div className={"second-row"}>
                <button onClick={this.handleAnchor}>Anchor here</button>
                <button onClick={this.handleAnchor}>Anchor here</button>
              </div>

              <div className={"third-row"}>
                <button onClick={this.handleAnchor}>Anchor here</button>
                <button onClick={this.handleAnchor}>Anchor here</button>
              </div>

              <div className={"fourth-row"}>
                <button onClick={this.handleAnchor}>Anchor here</button>
                <button onClick={this.handleAnchor}>Anchor here</button>
              </div>

              <div className={"fifth-row"}>
                <button onClick={this.handleAnchor}>Anchor here</button>
              </div>

            </div>
          </Grid>
        </div>
      </div>
    );
  }
}

