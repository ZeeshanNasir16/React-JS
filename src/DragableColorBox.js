import React from 'react';
import { withStyles } from '@material-ui/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import { SortableElement } from 'react-sortable-hoc';
import styles from './styles/DraggableColorBoxStyles';

const DragableColorBox = SortableElement((props) => {
   const { classes, color, name, handleDelete } = props;

   return (
      <div className={classes.root} style={{ backgroundColor: color }}>
         <div className={classes.boxContent}>
            <span>{name}</span>
            <span>
               <DeleteIcon
                  className={classes.deleteIcon}
                  onClick={handleDelete}
               />
            </span>
         </div>
      </div>
   );
});

export default withStyles(styles)(DragableColorBox);
