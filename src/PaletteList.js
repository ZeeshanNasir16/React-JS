import React, { Component } from 'react';
import MiniPalette from './MiniPalette';
import { withStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';
import styles from './styles/PaletteListStyles';
class PaletteList extends Component {
   gotoPalette(id) {
      this.props.history.push(`/palette/${id}`);
   }
   render() {
      const { paletteList, classes } = this.props;
      return (
         <div className={classes.root}>
            <div className={classes.container}>
               <nav className={classes.nav}>
                  <h2>React Color</h2>
                  <Link to='/palette/new'>Create Palette</Link>
               </nav>
               <div className={classes.palettes}>
                  {paletteList.map((palette) => (
                     <MiniPalette {...palette} key={palette.id} handleClick={() => this.gotoPalette(palette.id)} />
                  ))}
               </div>
            </div>
         </div>
      );
   }
}

export default withStyles(styles)(PaletteList);
