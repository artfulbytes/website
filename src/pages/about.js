import React from "react"
import styled from "styled-components"
import {
  Layout,
} from "../components"


const About = () => {
  return (
    <Layout>
      <AboutWrapper>
        <AboutContent>
          <AboutTitle>Hi and welcome.</AboutTitle>
          <p>
I'm Niklas. I've been intrigued by programming ever since the 80s when I laid my first lines of BASIC on a Commodore 64. Wait..., not another one of those sentimental stories. I'm not that old.
Actually, I began programming at the end of college on a modern PC in 2013 and only got into embedded systems a few years later during my MSc in computer engineering. And for the last two years, I've been writing code for medium format cameras as an embedded systems engineer at Hasselblad in Sweden.
</p>
<p>
On this blog, I write about <a href="https://en.wikipedia.org/wiki/Embedded_system">embedded systems</a> based on my own projects. Why writing? Because writing helps me think - there is no better tool for organizing a long line of thought. It's also healthy and useful to share those thoughts with others. Why embedded systems? Because I get more satisfaction from controlling a piece of hardware than building an app. The internet is riddled with content about the latter, but not so much about the former.

          </p>
        </AboutContent>
      <ContactWrapper>
      <AboutTitle>Contact me</AboutTitle>
          <ContactForm name="contact" method="POST" netlify-honeypot="bot-field" data-netlify="true">
            <label style={{display: "none"}}> <input name="bot-field" /></label>
            <input type="hidden" name="form-name" value="contact" />
            <DivRow>
              <LabelInput>Name: <Input required type="text" name="name" /></LabelInput>
            </DivRow>
            <DivRow>
              <LabelInput>Email: <Input required
                                        type="email"
                                        name="email"
                                        pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
                                 />
              </LabelInput>
            </DivRow>
            <DivRow>
              <LabelInput>Message:
                <Textarea
                          required
                          name="message">
                </Textarea>
              </LabelInput>
            </DivRow>
            <DivRow>
              <Button type="submit">Submit</Button>
            </DivRow>
          </ContactForm>
          </ContactWrapper>
      </AboutWrapper>
    </Layout>
  )
}
export default About

const AboutWrapper = styled.div`
  grid-column: 1 / span 2;
  margin: 0 0 12.5rem 0;
  @media ${props => props.theme.breakpoints.tablet} {
    height: 100%;
    margin: 0.75rem 0.75rem 12.5rem 0.75rem;
  }
  @media (max-width: 750px) {
    padding: 0;
  }
`

const AboutTitle = styled.h2`
  margin-top: 0;
`

const AboutContent = styled.div`
  max-width: 750px;
  padding: 3rem 3rem 1rem 3rem;
  margin: 0 auto 0 auto;
  @media ${props => props.theme.breakpoints.sitewidth} {
    margin: 0 auto 0.75rem auto;
  }

  @media (max-width: 500px) {
    padding: 1.5rem;
  }
`

const ContactWrapper = styled.div`
  max-width: 750px;
  padding: 0 5rem;
  width: 100%;
  margin: 0 auto 1.5rem auto;
  background: #fff;
  @media (max-width: 500px) {
    padding: 1.5rem;
  }
`

const LabelInput = styled.label`
  display: block;
  margin-top: 0;
  font-size: 0.875em;;
  width: 100%;
`
const Input = styled.input`
  display: block;
  box-sizing: border-box;
  width: 100%;
  margin: 0;
  padding: 0.75em 0.5em;
  vertical-align: top;
  overflow: visible;
  color: #08090a;
  font-size: 16px;
  background: #fff;
  border: 1px solid ${props => props.theme.colors.border};
  -webkit-appearance: none;
`
const Textarea = styled.textarea`
  display: block;
  box-sizing: border-box;
  width: 100%;
  min-height: 150px;
  margin: 0;
  padding: 0.75em 0.5em;
  vertical-align: top;
  overflow: auto;
  color: #08090a;
  font-size: 16px;
  background: #fff;
  border: 1px solid ${props => props.theme.colors.border};
  -webkit-appearance: none;
  resize: vertical;
`
const DivRow = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 0.5rem;
`

const ContactForm = styled.form`
  width: 100%;
`

const Button = styled.button`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  font-size: 0.875rem;
  font-weight: 700;
  text-align: center;
  text-decoration: none;
  color: #fff;
  background-color: #000;
  border: 0;
  cursor: pointer;
  transition: 0.3s;

  :hover {
    background-color: #fff;
    color: #000;
    text-decoration: none;
    box-shadow: 0 0 0 1px #000000;
  }

  :not(:disabled) {
    cursor: pointer;

    :active {
      transform: scale(0.95);
    }
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
`
