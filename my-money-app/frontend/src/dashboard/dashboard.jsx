import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ValueBox from '../common/widget/valueBox';
import Row from "../common/layout/row"
import ContentHeader from '../common/template/contentHeader';
import Content from '../common/template/content';
import { getSummary } from './dashboardActions';

class Dashboard extends Component {

    componentWillUnmount(){
     this.props.getSummary();   
    }

    render() {
        const { credit, debt } = this.props.summary;

        return (
            <div>
                <ContentHeader title='Dashboard' small='Versão 1.0' />
                <Content>
                    <Row>
                        <ValueBox
                            cols='12 4'
                            color='green'
                            icon='bank'
                            value={`R$ ${credit}`}
                            text='Total de Créditos'
                        />
                        <ValueBox
                            cols='12 4'
                            color='red'
                            icon='credit-card'
                            value={`R$ ${debt}`}
                            text='Total de Débitos'
                        />
                        <ValueBox
                            cols='12 4'
                            color='blue'
                            icon='money'
                            value={`R$ ${credit - debt}`}
                            text='Valor Consolidado'
                        />
                    </Row>
                </Content>
            </div>
        );
    }

}

const mapStateToProps = state => ( { summary: state.dashboard.summary } );
const mapDispatchToProps = dispatch => bindActionCreators( {getSummary}, dispatch)

//Aqui se decora o Componente com o Redux criado para mapear e utilizar os estados criados e recebidos. 
export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);