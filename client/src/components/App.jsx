import './App.scss';
import './custom.scss';
import Map from './Map';
import { useState, useHooks, useEffect } from 'react';

// import {Container, Navbar, Button,  ButtonGroup, DropdownButton, MenuItem } from 'react-bootstrap';
import { Container, Navbar, Button, Nav, Row, Col, Modal, } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import SideBar from './Sidebar';
import Form from './AddForm';
import Scoreboard from './Scoreboard';
import Analytics from './Analytics/Analytics';
import useAppData from './useAppData.js';

import Login from './Login/Login';
import Register from './Register/Register';

import classNames from 'classnames';
import EditSite from './Edit/EditSite.jsx';

export default function App() {
  //custom hook separate state logic from app rendering
  const {
    state,
    setState,
    loading,
    apiLogin,
    apiLogout,
    apiRegister,
    fnSetDay,
    bookInterview,
    deleteInterview,
    resetdB,
    fetchDays,
    fetchAppts,
  } = useAppData();

  //add condiontal styling
  const navbarClass = classNames('customNav');

<<<<<<< HEAD
   

  const [nav, setNav] = useState({})
  let toggleMap 
  let toggleEditMap

  const showMap = () => {
    console.log('------------------------[showMap]---------------', nav)
    setNav(prev => ({...{}, showMap: true}))
    toggleMap = 'map'
    toggleEditMap = 'hide'
  }
  const editMap = () => {
    console.log('------------------------[editMap]---------------', nav)
    setNav(prev => ({...{}, editMap: true}))
    toggleMap = 'hide'
    toggleEditMap = 'map'
  }
  const analytics= () => {
    console.log('------------------------[analytics]---------------', nav)
    setNav(prev => ({...{}, analytics: true}))
  }
  const addSite  = () => {
    console.log('------------------------[addSite]---------------', nav)
    setNav(prev => ({...{}, addSite: true}))
  }
  const leaderBoard = () => {
    console.log('------------------------[leaderBoard]---------------', nav)
    setNav(prev => ({...{}, leaderBoard: true}))
  }

   //add condiontal styling
   //quick hack to resolve  more than one map issue
   const showMapclass = (classNames('',
    { 'map': nav.showMap },
     { 'hide': nav.editMap }))

     const editMapClass = (classNames('',
     { 'hide': nav.showMap },
     { 'map': nav.editMap }))

=======
  // const user = state.user;

  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow((prev) => (prev = false));
  // const handleShow = () => {
  //   setShow((prev) => (prev = true));
  //   console.log('sign the fuk in', show);
  // };
  // useEffect(() => {

  // })

  // <link
  // rel='stylesheet'
  // href='http://leaflet.github.io/Leaflet.label/leaflet.label.css'
  // />
>>>>>>> 6712263 (adjusts classnames for styling in Analytics)

  return (
    <Router>
      <>
<<<<<<< HEAD
       

         <> 
       
=======
        <head>
          <link
            rel='stylesheet'
            href='https://unpkg.com/leaflet@1.7.1/dist/leaflet.css'
            integrity='sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=='
<<<<<<< HEAD
            crossorigin=''/>
          <link rel='stylesheet'href='http://cdn.leafletjs.com/leaflet-0.7.2/leaflet.css'/>
          <link rel='stylesheet' href='http://leaflet.github.io/Leaflet.label/leaflet.label.css' />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.1.3/js/bootstrap.min.js" integrity="sha512-UR25UO94eTnCVwjbXozyeVd6ZqpaAE9naiEUBK/A+QDbfSTQFhPGj5lOR6d8tsgbBk84Ggb5A3EkjsOgPRPcKA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
=======
            crossorigin=''
          />
          <link
            rel='stylesheet'
            href='http://cdn.leafletjs.com/leaflet-0.7.2/leaflet.css'
          />

>>>>>>> d3572f9 (adjusts classnames for styling in Analytics)
        </head>

        <>
>>>>>>> 6712263 (adjusts classnames for styling in Analytics)
          <Navbar bg='dark' variant='dark' className={navbarClass}>
            <Container>
              <Navbar.Brand href='#'>solarFlares</Navbar.Brand>

              <Navbar.Toggle />

              <Navbar.Collapse className='justify-content-end'></Navbar.Collapse>
            
             {!state.user && <Register onClick={(user) => apiRegister(user)} state={state} setState={setState}/>}
              <Login onClick={(user) => apiLogin(user)} apiLogout={apiLogout} state={state} setState={setState}/>
              
            </Container>
          </Navbar>
<<<<<<< HEAD
       
        </>
     
      <main className='layout'>

      {state.user && 
          <section className='sidebar '>
             <img className="logo--centered" src='./logo2.png' alt= 'logo' width='128'/>
            
            <ButtonGroup vertical>
              <Button variant="outline-secondary" onClick={() => showMap()} >Solar Map</Button>
              
              <DropdownButton variant="outline-secondary" as={ButtonGroup} title="mySolar" id="bg-vertical-dropdown-1">
              <Dropdown.Item variant="outline-secondary" eventKey="2" onClick={() => editMap()}> 
              <img src='./editMap.png' alt= 'logo' width='32' />my Sites</Dropdown.Item>
              <Dropdown.Item variant="outline-secondary" eventKey="2" onClick={() => addSite()}>
              <img src='./add.png' alt= 'logo' width='32' />add Sites</Dropdown.Item>
              <Dropdown.Item variant="outline-secondary" eventKey="2" onClick={() => analytics()}>
              <img src='./analytics.png' alt= 'logo' width='32' />Analytics</Dropdown.Item>
              </DropdownButton>

               <Button variant="outline-secondary" onClick={() => leaderBoard()}>Leader Board</Button>
             </ButtonGroup>

          </section> 
        }

          {/* {(!state.user )&&
            <section className="map">   
              
              <Map state={state} setState={setState}/>
              
            </section>
            }
              
         
          */}
            <section className={`cols ${showMapclass}`} >
           
                {nav.showMap    && <Map  state={state} setState={setState} />  }  
            
            </section>
               
          <section >
              {nav.analytics &&  <Analytics state={state} setState={setState} />}
              {nav.leaderBoard &&  <Scoreboard/>}
            </section>

          {(nav.addSite) &&
               <section className={`cols map`}>
               <div className="container"> 
                <h1> My Sites</h1>
                   <EditSite state={state} setState={setState}/>
               </div>
               <Map state={state} setState={setState}/>          
             </section>
              }

            {(nav.editMap )&&
            <section className={`cols map`}>
              <div className="container"> 
               <h1> My Sites</h1>
                  <EditSite state={state} setState={setState}/>
              </div>
                  <Map state={state} setState={setState}/>          
=======
        </>
        <main className='layout'>
          <section className='sidebar'>
            <SideBar />
          </section>

          <section>
            <Route path='/scoreboard' component={Scoreboard} />
            <Route path='/add_site' component={Form} />
          </section>

          {true  && (state.model[10]) && (
            <section className='analytics'>
              <Analytics sites={state.sites[0]} provinceModel={state.model[10]["BC"]}/>
            </section>
            )
          }

          <section>
            <EditSite/>
          </section>

          {true && (
            <section className='map'>
              <Map sites={state.sites}/>
>>>>>>> 6712263 (adjusts classnames for styling in Analytics)
            </section>
           )
          }
        </main>
      </>
    </Router>
  );
}
