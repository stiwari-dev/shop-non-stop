import React from 'react';
import { connect } from 'react-redux';

import './SignInSignUpPage.scss';
import SignIn from '../../containers/SignIn/SignIn';
import SignUp from '../../containers/SignUp/SignUp';
import Spinner from '../../components/UI/Spinner/Spinner';

class SignInSignUpPage extends React.Component {
    render() {
        let pageTemplate = <Spinner />;

        if (!this.props.loading) {
            pageTemplate = (
                <React.Fragment>
                    <SignIn />
                    <SignUp />
                </React.Fragment>
            );
        }

        return (
            <div className="sign-in-sign-up-page">
                {pageTemplate}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        loading: state.auth.loading
    };
}

export default connect(mapStateToProps, null)(SignInSignUpPage);
