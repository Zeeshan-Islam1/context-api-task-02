
import React from 'react'
import { Button } from 'react-bootstrap'

import './404.css'
function NotFound() {
    return (
        <div className="display">
          <div className="display__content">
            <h2 className="display__content--info">This page is not available yet </h2>
            <p className="display__content--text">
            "Oops! We can't find the page you're looking for. It might have been moved or never existed."
            </p>
            <Button className="btn btn-warning " href="/">Back to <i>Homepage</i></Button>
          </div>
        </div>
      );
}

export default NotFound
