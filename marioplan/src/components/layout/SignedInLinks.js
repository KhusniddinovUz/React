import React from 'react';
import { NavLink } from 'react-router-dom';
import { signOut } from '../../store/actions/authActions';
import { connect } from 'react-redux';

const SignedInLinks = (props) => {
  const { profile } = props;
  return (
    <div>
      <ul className='right'>
        <li>
          <NavLink to='/create'>New Project</NavLink>
        </li>
        <li onClick={props.signOut}>
          <NavLink to='/'>Log Out</NavLink>
        </li>
        <li>
          <NavLink to='/' className='btn btn-floating pink lighten-1'>
            {profile.initials}
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(null, mapDispatchToProps)(SignedInLinks);
