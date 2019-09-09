import React from "react";
import {connect} from "react-redux";
import WizardTittle from "./wizardTittle";
import WizardBody from './wizardBody';
import {useEffect, useState } from 'react';
import axios from 'axios';
import HorizontalLabelPositionBelowStepper from './styles';


const setWizzard = (wizards, data) => {

}

const Wizard = ({wizardStep,pasarSiguiente,pasarAtras,wizard}) => {

    //const [wizard,setWizard] = useState(wizard);
    let data = [];
 
    useEffect( ()=>{
        axios.get("https://cors-anywhere.herokuapp.com/http://jbloem.bucares.net/api/wizard.json")
        .then(data =  response =>(
            data =  response.data
        ))
        .catch(console.log)

      },[])
      wizard = useState(data);

    return (
    /*<div className = "wizardView">
        {
    
            (
                <div>
                <WizardTittle title = {wizardStep.tittle}/>
                <WizardBody body = {{'subtittle': wizardStep.subtittle, 'img': wizardStep.image, 'content': wizardStep.content}}/>
                <button onClick = {() => pasarAtras()}> Back </button>  
         <button onClick = {() => pasarSiguiente()}> Next </button>
                </div>
            )
        }
    </div>*/
        <HorizontalLabelPositionBelowStepper wizard = {wizard} pasarAtras = {pasarAtras} pasarSiguiente={pasarSiguiente}
        step = {wizardStep}/>
    )

}

const mapStateToProps = state => ({
    wizard: state.data,
    step: state.step,
    wizardStep: state.data[state.step]
})

const mapDispatchToProps = dispatch => ({
    pasarSiguiente(){
        dispatch({
            type: "PASAR_SIGUIENTE"
        })
    },
    pasarAtras(){
        dispatch({
            type: "PASAR_ATRAS"
        })
    },
    handleReset(){
        dispatch({
            type: "RESET"
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Wizard)