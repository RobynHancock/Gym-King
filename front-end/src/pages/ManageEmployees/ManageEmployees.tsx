import {IonContent, IonPage, IonHeader, IonText, IonButton, IonLoading, useIonViewDidEnter, IonItem, IonList, IonLabel, IonAccordion, IonAccordionGroup} from '@ionic/react';
import React, {useState} from 'react';
import {ToolBar} from '../../components/toolbar/Toolbar';
import './ManageEmployees.css';
import { useHistory } from 'react-router-dom';
import EmployeeList from '../../components/EmployeeList/EmployeeList';


const ManageEmployees: React.FC = () =>{
    // eslint-disable-next-line
    const [employeeList, setEmployeeList] = useState(new Array())
    // eslint-disable-next-line
    const [gymList, setGymList] = useState(new Array())
    const [loading, setLoading] = useState<boolean>(false);
    let history=useHistory()
    let email = localStorage.getItem('email')

    
    useIonViewDidEnter(()=>
    {
        var owner=localStorage.getItem('email')
        setLoading(true)

        fetch(`https://gym-king.herokuapp.com/owners/employees/${owner}`, {
            "method":"GET"
        })
        .then(response =>response.json())
        .then(response =>{
            console.log(response)
            setEmployeeList(response)

            setLoading(false)
        })
        .catch(err => {
            console.log(err)
            setLoading(false)
         })

         //get the owner's gyms
         fetch(`https://gym-king.herokuapp.com/gyms/owned/${email}`,{
                "method":"GET"
            })
            .then(response =>response.json())
            .then(response =>{
                console.log(response)
                setGymList(response)
            })
            .catch(err => {
                console.log(err)
                setLoading(false)
            })
    },[])

    const getEmployeesByGym = (gid:string)=>{
        // eslint-disable-next-line
        return employeeList.filter( (e:any)=>{
            if(e.g_id === gid)
                return e;
        }) 
    }
    return(
        <IonPage>
            <IonHeader>
                <ToolBar menu={false}></ToolBar>
            </IonHeader>
            <br></br>
            <IonContent fullscreen className='Content'>
                <IonText className='PageTitle center'>My Employees</IonText>
                <IonButton routerLink='/AddEmployee' routerDirection="forward" color="warning">Add Employee</IonButton>
                <br></br><br></br>
                <IonAccordionGroup>
                {
                    gymList.map((el:any)=>
                        <IonAccordion key={el.g_id} value={el.g_id}>
                            <IonItem slot="header">
                                <IonLabel>{el.gym_brandname}</IonLabel>
                             </IonItem>
                             <IonList slot="content">
                                <EmployeeList list={(getEmployeesByGym(el.g_id))} history={history}></EmployeeList>
                            </IonList>
                        </IonAccordion>
                )}
                </IonAccordionGroup>    
                
                <IonLoading 
                        isOpen={loading}
                        message={"Loading"}
                        spinner={"circles"}
                        onDidDismiss={() => setLoading(false)}
                        cssClass={"spinner"}
                        
                    />
            </IonContent>
        </IonPage>
    )
}

export default ManageEmployees;
