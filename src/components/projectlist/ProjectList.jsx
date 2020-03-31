import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Link from "@material-ui/core/Link";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles({
  table: {
    minWidth: 650
  },
  root: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  addIconTr: {
    minHeight: "200px",
    float: "right",
    display: "flex",
    flexFlow: "column-reverse",
    paddingBottom: "15px"
  },
  addIcon: {
    left: "0%",
    right: "0%",
    top: "12.5%",
    bottom: "12.5%",
    cursor: "pointer",
    color: "#00529C"

  },
  rowCell: {
    height: "20px",
    left: "16px",
    top: "calc(50% - 20px/2)",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "14px",
    lineHeight: "20px",
    letterSpacing: "0.25px",
    color: "#1A1A1A"
  },
  rowCellLink: {
    width: "230px",
    height: "20px",
    left: "16px",
    top: "calc(50% - 20px/2)",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "14px",
    lineHeight: "20px",
    letterSpacing: "0.25px",
    color: "#006DCF"
  }
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Project1", "Orange", "Mar-20-2019", 24, "In progress"),
  createData("Project2", "Orange", "Jan-12-2019", 37, "In progress"),
  createData("Project3", "Orange", "Jun-02-2019", 24, "In progress"),
  createData("Project4", "Green", "Apr-11-2019", 67, "In progress"),
  createData("Project5", "Black", "Aug-08-2019", 49, "In progress")
];

export default function ProjectList() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <div>
          <div>
            {" "}
            <TableContainer component={Paper} >
              <Table
                className={classes.table}
                size="small"
                aria-label="a dense table"
              >
                <TableHead>
                  <TableRow>
                    <TableCell>Projects</TableCell>
                    <TableCell align="left">Program</TableCell>
                    <TableCell align="left">Created</TableCell>
                    <TableCell align="left">Last Modified</TableCell>
                    <TableCell align="left">Status</TableCell>
                    <TableCell align="left">Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map(row => (
                    <TableRow key={row.name}>
                      <TableCell component="th" scope="row">
                        <Link className={classes.rowCellLink}>{row.name}</Link>
                      </TableCell>
                      <TableCell align="left" className={classes.rowCell}>{row.calories}</TableCell>
                      <TableCell align="left" className={classes.rowCell}>{row.fat}</TableCell>
                      <TableCell align="left" className={classes.rowCell}>{row.carbs}</TableCell>
                      <TableCell align="left" className={classes.rowCell}>{row.protein}</TableCell>
                      <TableCell align="left" >
                        {" "}
                        <Link className={classes.rowCellLink}>Share</Link> &nbsp; | &nbsp;<Link className={classes.rowCellLink}>Edit</Link>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
          <div className={classes.addIconTr}>
            {" "}
            <Fab aria-label="add">
              <AddIcon />
            </Fab>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
