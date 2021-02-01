import React from "react";

export const setPropsAsInitial = WrappedComponent => (
    class extends React.Component {
        render() {
            return <WrappedComponent {...this.props} initialValues={this.props} enableReinitialize />
        }
    }
)