import React, {Component} from 'react';
import {  FormWrap, Icon, FormContent, Form, FormInput, FormH1, FormLabel, FormButton, Text,  HeroBg, VideoBg, HeroContent, HeroContainer} from './RecoveryElements'
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { auth } from '../firebase/utils';
import Video from '.././videos/video1.mp4'

const initialState = {
    email: '',
    errors: []
  };
  
class Recovery extends Component {
    constructor(props) {
        super(props);
        this.state = {
          ...initialState
        };
    
        this.handleChange = this.handleChange.bind(this);
      }
    
      handleChange(e) {
        const { name, value } = e.target;
        this.setState({
          [name]: value
        });
      }
    
      handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const { email } = this.state;
    
          const config = {
            url: 'http://localhost:3000/signin'
          };
    
          await auth.sendPasswordResetEmail(email, config)
            .then(() => {
              this.props.history.push('/signin');
            })
            .catch(() => {
              const err = ['Email not found. Please try again.'];
              this.setState({
                errors: err
              });
            });
    
        } catch(err) {
          // console.log(err);
        }
    
      }
    
      render() {
        const { email, errors } = this.state;
    
    return(
        <HeroContainer>
           <HeroBg>
        <VideoBg autoPlay muted src={Video} type='video/mp4' />
        </HeroBg>
        <HeroContent>
        <FormWrap >
          <Icon to='/'>zZ_ASM.</Icon>
          <br/>
          <FormContent onSubmit={this.handleSubmit}>
            <Form >
              <FormH1>Enter your Email </FormH1>
              {errors.length > 0 && (
            <ul>
              {errors.map((e, index) => {
                return (
                  <li key={index}>
                    {e}
                  </li>
                );
              })}
            </ul>
          )}
              <FormLabel >Email</FormLabel>
                <FormInput  type="email"
                name="email"
                value={email}
                placeholder="Email"
                onChange={this.handleChange}
              />


              <FormButton type='submit'>Reset Password</FormButton>
              <br/>
              <br/>
              <Text>Remembered?</Text>
              <br/>
              <FormButton >
              <Link to="/">
                Return Home
                </Link>
               </FormButton>
    
            </Form>
          </FormContent>
        </FormWrap>
        </HeroContent>
      </HeroContainer>
  )
}
}

export default withRouter(Recovery);