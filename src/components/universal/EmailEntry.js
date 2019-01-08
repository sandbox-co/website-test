import React, { Component } from 'react';
import styled, { css } from 'styled-components'

const colors = {
  primary: "#000AFD",
  secondary: "#B517F5",
  black: "#232323",
  nearWhite: "rgba(255, 255, 255, 0.8)",
  halfWhite: "rgba(255, 255, 255, 0.5)",
  white: "#FFFFFF",
  nearBlack: "#000232",
}

const Wrapper = styled.div`
  display: flex;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.3);
  width: 300px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  ${props => props.primary && css`
    background-color: ${colors.secondary};
  `}
`

const Input = styled.input`
  background: none;
  outline: none;
  border: none;
  font-size: 20px;
  font-weight: 600;
  width: 240px;
  color: ${colors.nearWhite};
  ::placeholder {
    color: ${colors.halfWhite};
  }
  padding: 8px 0px 8px 15px;
  ${props => props.primary && css`
    color: ${colors.white};
    ::placeholder {
      color: ${colors.nearWhite};
    }
  `}
`

const Arrow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding: 10px 15px 10px 15px;
  opacity: 0.5;
  transition: all 150ms cubic-bezier(0.21, 0.94, 0.64, 0.99);
  :hover {
    opacity: 1;
    transform: scale(1.08);
  }
  ${props => props.primary && css`
    opacity: 0.8;
  `}
`

const ArrowImage = styled.img`
  height: 16px;
  width: 27px;
`

class EmailEntry extends Component {
  render() {
    return (
      <Wrapper primary={this.props.primary}>
        <Input primary={this.props.primary} placeholder={"your email"}/>
        <Arrow primary={this.props.primary}>
          <ArrowImage src={require("../../assets/emailEntryArrow.png")}/>
        </Arrow>
      </Wrapper>
    );
  }
}

export default EmailEntry;