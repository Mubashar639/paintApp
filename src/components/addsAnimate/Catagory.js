import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import AllWork from "./allCatogory/renderadds";
import allobject from "../../shared";
import NavBar from "../navbar/navbar";

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 0,margin:"0px" }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

const styles = theme => ({
  root: {
    backgroundColor: " rgba(255,255, 255, 0.0)",
    // marginLeft:"1%"
    // width: 11,
  },
});

class FullWidthTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
     <div className="tabcontainer" >
       <NavBar handleChange={this.handleChange} />
       </div>
  
         {this.state.value===0 &&<TabContainer dir={theme.direction}><AllWork allType={allobject.allType} /></TabContainer>}
         {this.state.value===1 && <TabContainer dir={theme.direction}><AllWork allType={allobject.electrical} /></TabContainer>}
         {this.state.value===2 && <TabContainer dir={theme.direction}><AllWork allType={allobject.interior} /></TabContainer>}
         {this.state.value===3 && <TabContainer dir={theme.direction}><AllWork allType={allobject.painting} /></TabContainer>}
         {this.state.value===4 && <TabContainer dir={theme.direction}><AllWork allType={allobject.plember} /></TabContainer>}
         {this.state.value===5 && <TabContainer dir={theme.direction}><AllWork allType={allobject.repair} /></TabContainer>}

    
      </div>
    );
  }
}

FullWidthTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(FullWidthTabs)