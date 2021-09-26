import React from 'react'
import styled from "styled-components"
import addToMailchimp from 'gatsby-plugin-mailchimp'

export class NewsLetterSignup extends React.Component {
  state = {
    email: "",
    messageResult: "",
    success: false
  }

  handleChange = event => {
    this.setState({ email: event.target.value })
  }

  handleSubmit = async event => {
    event.preventDefault()

    const result = await addToMailchimp(this.state.email)
    console.log(result)
    if (result.result !== "error") {
      this.setState({ messageResult: "Thanks for signing up!" })
      this.setState({ success: true })
    }
    else {
      this.setState({ messageResult: result.msg })
    }
  }

  render() {
    return (
      <FormWrapper>
        <BackgroundDiv>
          <Form onSubmit={this.handleSubmit}>
            <NewsletterHeader>Newsletter</NewsletterHeader>
            <NewsletterText successSubmit={this.state.success}>
            </NewsletterText>
            <InputAndSubmitWrapper successSubmit={this.state.success} >
              <input
                name="email"
                type="text"
                placeholder="Email address"
                pattern="[^ @]*@[^ @]*"
                required="required"
                onChange={this.handleChange}
              />
              <ButtonLink successSubmit={this.state.success} type="submit">Subscribe</ButtonLink>
            </InputAndSubmitWrapper>
            <ParagraphResult messageResult={this.state.messageResult}>{this.state.messageResult}</ParagraphResult>
          </Form>
        </BackgroundDiv>
      </FormWrapper>
    )
  }
}

const NewsletterHeader = styled.h2`
  margin: 0;
  padding: 0;
  font-size: 1.2rem;
`

const NewsletterText = styled.p`
  display: ${props => props.successSubmit ? "none" : "block"};
  line-height: 1.25rem;
  font-size: 0.80rem;
  margin-bottom: 0;
`

const FormWrapper = styled.div`
  grid-column: 1 / span 2;
  grid-row: 5 / span 1;
  display: block;
  background: #fff;
  border-radius: 0;
`

const BackgroundDiv = styled.div`
  background-color: #f9fafa;
  padding: 2rem 1.5rem;
  max-width: 630px;
  margin: 4rem auto;
`

const Form = styled.form`
  display: block;
  text-align: left;
  margin: 0 auto;
  max-width: 400px;
`

const ParagraphResult = styled.p`
  display: ${props => props.messageResult ? "block" : "none"};
  margin:0;
`

const ButtonLink = styled.button`
  display: ${props => props.successSubmit ? "none" : "inline-block"};
  width: 100%;
  margin-left: 0.75rem;
  font-size: 1rem;
  font-weight: 700;
  text-align: center;
  text-decoration: none;
  color: #fff;
  background-color: #000;
  border: 0;
  cursor: pointer;
  transition: 0.1s;

  :hover {
    background-color: #fff;
    color: #000;
    text-decoration: none;
    box-shadow: 0 0 0 1px #000000;
  }

  :not(:disabled) {
    cursor: pointer;

  }

  :disabled {
    background-color: #fff;
    color: #000;
    text-decoration: none;
    box-shadow: 0 0 0 1px #000000;
    cursor: initial;
  }

  :visited {
    color: #fff;
  }

  @media ${props => props.theme.breakpoints.mobile} {
    margin-left: 0rem;
    margin-top: 0.5rem;
    padding: 0.75rem 0.5rem;
  }

`

const InputAndSubmitWrapper = styled.div`
  display: ${props => props.successSubmit ? "none" : "flex"};
  margin-top: 0.5rem;
  width: 100%;
  @media ${props => props.theme.breakpoints.mobile} {
    display: ${props => props.successSubmit ? "none" : "block"};
  }
  input {
    display: block;
    box-sizing: border-box;
    width: 100%;
    margin: 0;
    padding: 0.5rem 0.5rem;
    vertical-align: top;
    overflow: visible;
    color: #08090a;
    font-size: 16px;
    background: #fff;
    border: 1px solid ${props => props.theme.colors.border};
    -webkit-appearance: none;
  }
`
