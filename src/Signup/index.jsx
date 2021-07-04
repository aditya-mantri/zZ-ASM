import React, { Component } from 'react';
import { SignInLINK, FormWrap, Icon, FormContent, Form, FormInput, FormH1, FormLabel, FormButton, Text, HeroBg, VideoBg, HeroContent, HeroContainer} from './SignupElements';
import Video from '.././videos/video3.mp4'
import { auth, handleUserProfile } from '../firebase/utils';
import PacmanLoader from 'react-spinners/PacmanLoader';

const initialState = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
  errors: [],
  loading: false
};

class Signup extends Component {
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
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      const err = ['Password Don\'t match'];
      this.setState({
        errors: err
      });
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
                 await handleUserProfile(user, { displayName });
                 
               
    } catch(err) {
      // console.log(err);
    }

  }

  render() {
    const { displayName, email, password, confirmPassword, errors , loading } = this.state;

  return (
      <HeroContainer>
         <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
        </HeroBg>
        {  loading ? (
            <PacmanLoader
            color={'#BFDAD1'} loading={loading} size={30} speedMultiplier={3} />
            ) :  (
        <HeroContent>
        <FormWrap>
          <Icon to='/'>zZ_ASM.</Icon>
          <br/>
          <FormContent onSubmit={this.handleFormSubmit}>
            <Form>
              <FormH1>Sign up to new World</FormH1>
              
        {errors.length > 0 && (
          <ul>
            {errors.map((err, index) => {
              return (
                <li key={index}>
                  {err}
                </li>
              );
            })}
          </ul>
        )}

        <FormLabel>Name</FormLabel>
          <FormInput  type="text"
                name="displayName"
                value={displayName}
                placeholder="Full name"
                onChange={this.handleChange}
              />

          <FormLabel>Email</FormLabel>
          <FormInput type="email"
                name="email"
                value={email}
                placeholder="Email"
                onChange={this.handleChange}
              />

          <FormLabel >Password</FormLabel>
          <FormInput  type="password"
                name="password"
                value={password}
                placeholder="Password"
                onChange={this.handleChange}
              />


            <FormLabel >Confirm Password</FormLabel>
            <FormInput  type="password"
                name="confirmPassword"
                value={confirmPassword}
                placeholder="Confirm Password"
                onChange={this.handleChange}
              />

            <br/>
              <FormButton type='submit'>SIGN UP</FormButton>
              <br/>
              <Text>Already have an account.</Text>

              
           
              <SignInLINK to="/signin">
                SIGN IN
               </SignInLINK>
               
            </Form>
          </FormContent>
        </FormWrap>
        </HeroContent>
            )}
      </HeroContainer>
  )
}
}
export default Signup;
