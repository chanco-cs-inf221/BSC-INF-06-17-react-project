import React , { Component } from 'react';
import { url } from 'inspector';


//importing image
class Icons extends React.Component{
  
    render(){
      return(
        <img className='profile-image' alt='image' src={url}/>
    );
    }
}
export default Icons;