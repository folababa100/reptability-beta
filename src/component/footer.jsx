import React,{Component} from  "react"
import {Button, Grid,Icon, Image, Divider, FormInput} from 'semantic-ui-react'
import {Link} from "react-router-dom"
import $ from "jquery"

export default class Footer extends Component {
    render() {
        return (
            <div className="footer-customise">
                <Grid className="grid-change" container centered>
                    <Grid.Row>
                        <Grid.Column className="no-xspadding" computer="5" tablet="5"  mobile="16">
                            <p className="bolder">STAY UPDATED</p>
                            <p>info@reptability.com</p>
                            <div>
                                <Icon className="big-font" name="facebook"/>
                                <Icon className="big-font" name="instagram"/>
                                <Icon className="big-font" name="twitter"/>
                                <Icon className="big-font" name="linkedin"/>
                            </div>
                        </Grid.Column>
                        <Grid.Column className="no-xspadding" computer="5" tablet="5"  mobile="16">
                            <p className="bolder">SIGN UP FOR MAILING LIST</p>
                            <FormInput style={{ marginBottom: '1rem' }}>
                                <input placeholder="Email" className="footer-form"/>
                            </FormInput>
                            <Button className="btn-blue" color='blue'>Subscribe</Button>
                        </Grid.Column>
                        <Grid.Column className="no-xspadding footer-adjust" computer="6" tablet="6"  mobile="16">
                            <Image style={{ width: '5rem', height: '5rem', marginTop: '2rem' }} src="/images/Reptability123.png"/>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <Divider style={{ marginBottom: "1.5rem" }}/>
                            <Grid>
                                <Grid.Row>
                                    <Grid.Column computer="8" tablet="8" mobile="8">
                                        <p className="bolder">Reptability Inc</p>
                                    </Grid.Column>
                                    <Grid.Column computer="8" tablet="8" mobile="8">
                                        <p style={{ textAlign: 'right' }}>Terms and Conditions</p>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                            <Divider style={{ marginTop: "1.5rem" }}/>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
}
