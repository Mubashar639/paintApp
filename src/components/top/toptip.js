import React from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


const styles = theme => ({
    root: {
        backgroundColor: "#222222",
    },
   

});

class CenteredGrid extends React.Component {
   

    state = {
        anchorEl: null,
      };
    
      handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
      };
    
      handleClose = () => {
          setTimeout(() => {
              this.setState({ anchorEl: null });
          }, 1000);
      };
render(){
    const { classes } = this.props;
    const { anchorEl } = this.state;
    return (
        <div className={classes.root}>
            <Grid container >
                <Grid item xs={6} >
                    <p className="para" >Your Trusted 24 Hours HandyMan Service Provider!</p>
                </Grid>
                <Grid item xs={1.3} >
                    <p style={{color:"#222222",position:"relative",top:"-10px"}} >Your Trusted 24 Hours</p>
                </Grid>
             
                <Grid style={{borderLeft:".5px solid rgba(255,255,255,.6)",textAlign: "center"}} item xs={1} >
                <Button  >
                       <span class="btntop">Information</span> 
                  </Button>
                </Grid >
                <Grid style={{borderLeft:".5px solid rgba(255,255,255,.6)", textAlign: "center"}} item xs={1} spacing={0}>
                    <Button 
                        aria-owns={anchorEl ? 'simple-menu' : undefined}
                        aria-haspopup="true"
                        onMouseOver={this.handleClick}
                        onMouseLeave={this.handleClose}

                    >
                       <span class="btntop"> Extra</span> 
                      
                  </Button>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={this.handleClose}
                    >
                        <MenuItem onClick={this.handleClose}>FAQ</MenuItem>
                        <MenuItem onClick={this.handleClose}>Site Maitenance</MenuItem>
                        <MenuItem onClick={this.handleClose}>404</MenuItem>
                    </Menu>

                </Grid  >
                <Grid style={{borderLeft:".5px solid rgba(255,255,255,.6)", textAlign: "center"}} item xs={1.5} >
                <Button   >
                <span class="btntop"> Alternative Pages</span> 
                       
                  </Button>
                </Grid >

            </Grid>
        </div>
    );
}
}
CenteredGrid.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);