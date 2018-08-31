import React from "react";
import PaypalExpressBtn from "react-paypal-express-checkout";



export default class PaypalButton extends React.Component {
    render() {
        const client = {
            sandbox:    'demo_sandbox_client_id',
            production: 'demo_production_client_id',
        }
        return (
            <PaypalExpressBtn client={client} currency={'USD'} total={1.00} />
        );
    }
}