import React from "react";
import { Box, Typography } from '@mui/material';
import { withStyles } from "@mui/styles";
import AlertIcon from 'mdi-material-ui/Alert';

const styles = () => ({
  container: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  alertIcon: {
    color: '#ef5350',
    fontSize: 75,
  }
});

type Props = {
  children: React.ReactNode;
  classes: any;
};

type State = {
  error: Error | null;
};

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  componentDidCatch(error: Error) {
    // TODO: track error
    this.setState({ error });
  }

  reload = () => {
    this.setState({ error: null });
  };

  render() {
    const { children, classes } = this.props;
    const { error } = this.state;

    if (error) {
      console.error('error main b', error);

      return (
        <div className={classes.container}>
          <div className={classes.innerContainer}>
            <Box display='flex' justifyContent='center'>
              <AlertIcon className={classes.alertIcon} />
            </Box>
            <Box mt={2}>
              <Typography align="center" variant="h2">
                Error
              </Typography>
            </Box>
            <Box mt={4}>
              <Typography align="center" variant="h6">
                Something went wrong, we are working on fixing the issue. If the
                problem persists, please contact us.
              </Typography>
            </Box>
          </div>
        </div>
      );
    }

    return children;
  }
}

export default withStyles(styles)(ErrorBoundary);
