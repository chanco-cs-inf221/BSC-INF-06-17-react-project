import React from "react";
import { Route, Switch } from "react-router-dom";
import NewsPage from "./pages/NewsPage";
import FormsNavPage from "./pages/FormsNavPage";
import EventPage from "./pages/EventPage";
import ModalsNavPage from "./pages/ModalsNavPage";
import MatrialsNavPage from "./pages/MatrialsNavPage";
import ProgrammesNavPage from "./pages/ProgrammesNavPage";
import com from "./pages/com";
import StuffPage from "./pages/StuffPage";
import HomePage from "./pages/HomePage";
import InfSciencePage from "./pages/InfSciencePage";
import PeopleNavPage from "./pages/PeopleNavPage";
import ProgramsPage from "./pages/ProgramsPage";
import ActivitiesPage from "./pages/ActivitiesPage";
import ComSciencePage from "./pages/ComSciencePage";
import NationalNewsPage from "./pages/NationalNewsPage";
import EventsPage from "./pages/EventsPage";
import ModalPage from "./pages/ModalPage";
import NetSciencePage from "./pages/NetSciencePage";
import OthersPage from "./pages/OthersPage";
import WorldNewsPage from "./pages/WorldNewsPage";
import NetPage from "./pages/NetPage";
import RegStudentsPage from "./pages/RegStudentsPage";
import FormsPage from "./pages/FormsPage";
import ToolsPage from "./pages/ToolsPage";
import CollageNewsPage from "./pages/CollageNewsPage";
import InfPage from "./pages/InfPage";
import Books from "./pages/Books";
class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/matrials" component={MatrialsNavPage} />
        <Route exact path="/programmes" component={ProgrammesNavPage} />
        <Route exact path="/People" component={PeopleNavPage} />
        <Route exact path="/forms" component={FormsNavPage} />
        <Route exact path="/modals" component={ModalsNavPage} />
        <Route exact path="/news" component={NewsPage} />
        <Route exact path="/event" component={EventPage} />
        <Route path="/matrials/others" component={OthersPage} />
        <Route path="/matrials/tools" component={ToolsPage} />
        <Route path="/matrials/Books" component={Books} />
        <Route path="/people/stuff" component={StuffPage} />
        <Route path="/people/com" component={com}/>
        <Route path="/people/inf" component={InfPage} />
        <Route path="/people/net" component={NetPage} />
        <Route path="/people/regStudents" component={RegStudentsPage} />
        <Route path="/programmes/comscience" component={ComSciencePage} />
        <Route path="/programmes/netscience" component={NetSciencePage} />
        <Route path="/programmes/infscience" component={InfSciencePage} />
        <Route path="/forms/forms" component={FormsPage} />
        <Route path="/modals/modal" component={ModalPage} />
        <Route path="/news/collagenews" component={CollageNewsPage} />
        <Route path="/news/nationalnews" component={NationalNewsPage} />
        <Route path="/news/worldnews" component={WorldNewsPage} />
        <Route path="/event/programs" component={ProgramsPage} />
        <Route path="/event/activities" component={ActivitiesPage} />
        <Route path="/event/events" component={EventsPage} />
        <Route
          render={function () {
            return <h1>Not Found</h1>;
          }}
        />
      </Switch>
    );
  }
}


export default Routes;
