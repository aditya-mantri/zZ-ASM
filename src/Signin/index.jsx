import React, { Component } from 'react';
import {SignUpLINK, FormWrap, Icon, FormContent, Form, FormInput, FormH1, FormLabel, FormButton, Text, HeroBg, VideoBg, HeroContent, HeroContainer} from './SigninElements'
import { signInWithGoogle , auth  } from '../firebase/utils';
import {Link } from 'react-router-dom';
import Video from '.././videos/video2.mp4'
import PacmanLoader from 'react-spinners/PacmanLoader';

const initialState = {
  email: '',
  password: '',
  loading: false
};

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
       this.setState({
          loading: true
       })
       setTimeout(() => {
        this.setState({
          loading: false
       })
       }, 600);
  };

  handleChange(e) {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });
  }

  handleFormSubmit = async event => {
    event.preventDefault();
    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email,password)
      this.setState({
        ...initialState
      });

    } catch(err) {
      // console.log(err);
    }
  }

  render() {
    const { email, password , loading} = this.state;

    return (
      <HeroContainer>
        <HeroBg>  
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
        </HeroBg>
      {  loading ? (
            <PacmanLoader
            color={'#BFDAD1'} loading={loading} size={30} speedMultiplier={3} />
            ) :  (
        <HeroContent >
        <FormWrap >
          <Icon to='/'>zZ_ASM.</Icon>
          <br/>
          <FormContent onSubmit={this.handleFormSubmit}  >
            <Form >
              <FormH1>Sign in to your account</FormH1>
              <FormLabel >Email</FormLabel>
                <FormInput  type="email"
                name="email"
                value={email}
                placeholder="Email"
                onChange={this.handleChange}
              />

              <FormLabel >Password</FormLabel>
                <FormInput type="password"
                name="password"
                value={password}
                placeholder="Password"
               onChange={this.handleChange}
              />


              <FormButton  type='submit'> SIGN IN </FormButton>
              <Text>"OR"</Text>
              <br/>
              <FormButton  onClick={signInWithGoogle}>SIGN IN WITH GOOGLE</FormButton>
              <br/>
              <br/>
              <Text>Dont have an account? Create one.</Text>

              <br/>
              
               <SignUpLINK to='/signup'> SIGN UP </SignUpLINK>
            

              <br/>
              <Link to='/recovery'>
                <Text>Forgot Password ?</Text>
              </Link>
    
            </Form>
          </FormContent>
        </FormWrap>

        </HeroContent>
    )}
      </HeroContainer>
  );

}
}

export default SignIn;
