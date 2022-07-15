import {IonContent, IonText, IonPage, IonHeader} from '@ionic/react';
import React, {useState} from 'react'
import { useEffect } from 'react';
import ApprovalButton from '../../components/approvalButton/approvalButton';
import { ToolBar } from '../../components/toolbar/Toolbar';
import './PendingApprovalsPage.css';


export type UploadActivityStates = {act?:any}

const PendingApprovalsPage: React.FC = () =>{

    //STATES AND VARIABLES 
    let gymId= 'wSek';  //temp value for testing 
    // eslint-disable-next-line
    const [claims, setClaims] = useState(new Array());

    //GET REQUEST:
    useEffect(()=>{
        fetch(`https://gym-king.herokuapp.com/claims/gym/${gymId}`,{
            "method":"GET"
        })
        .then(response =>response.json())
        .then(response =>{
            //console.log(response);
            setClaims(response)
            
        })
        .catch(err => {console.log(err)})
    },[gymId])

        return(
            <IonPage color='#220FE' >
                <IonHeader>
                    <ToolBar></ToolBar>
                </IonHeader>
                <br></br>
                <IonContent fullscreen className='Content'>
                    <IonText className='PageTitle center'>Pending Approvals</IonText>
                    
                    {
                        claims?.map(el =>{
                            return ( <ApprovalButton userID={el.email} username={el.username} badgeId={el.b_id} key={el.email + el.b_id}></ApprovalButton>)
                        })
                    }
                </IonContent>
            </IonPage>
        )
        

}

export default PendingApprovalsPage;
