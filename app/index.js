
import React, { Component } from "react";
//import { render } from "react-dom";
import { createRoot } from 'react-dom/client';
import TaskMain from './FrontMain';
const root = createRoot(document.getElementById('app'));
root.render(<TaskMain/>, );


