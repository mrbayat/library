import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { connect } from 'react-redux';
import ThemeProvider from './components/theme/ThemeProvider';
import AxiosInterceptors from './axios_interceptors';
import Layouts from './components/layouts';
import withClearCache from './ClearCache';
import RTL from './components/theme/Rtl';

const ClearCacheComponent = withClearCache(LibraryWebApp)

function App(props) {
  return <ClearCacheComponent {...props} />
}

function LibraryWebApp(props) {

  return (
    <div dir="rtl">
      <AxiosInterceptors />
      <ThemeProvider>
        <RTL>
          <CssBaseline />
          <BrowserRouter basename={"/"}>
            <Layouts />
          </BrowserRouter>
        </RTL>
      </ThemeProvider>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)