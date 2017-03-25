import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Col, ControlLabel, FieldGroup, FormControl, FormGroup, Grid, Nav, NavItem, Row } from 'react-bootstrap';


class Form extends Component {
  render() {
    return (
        <div className="App">
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>Welcome to Form-Builder</h2>
            </div>
            <NavBar />
            <Grid>
            <FormInput />
            </Grid>
        </div>
    );
  }
}

class NavBar extends Component {
    handleSelect(eventKey) {
        event.preventDefault();
        alert(`selected ${eventKey}`);
      }

    render() {
        return (
            <Nav bsStyle="tabs" activeKey={1} onSelect={this.handleSelect}>
                <NavItem eventKey={1} href="/">Create</NavItem>
                <NavItem eventKey={2} href="/preview" title="Item">Preview</NavItem>
                <NavItem eventKey={3} href="/export" title="Export">Export</NavItem>
            </Nav>
        );
    }
}

class FormInput extends Component {
  render() {
    return (
        <div>
            <FormGroup>
                <Question />
                <Type />
                <Condition />
                <AddSubInputButton />
                <DeleteButton />
            </FormGroup>
            <AddInputButton />
            <ExportTextArea />
        </div>
    );
  }
}

class Condition extends Component {
  render() {
    return (
      <Row className="row condition">
          <Col xs={6} md={4}>
            <ControlLabel>Condition</ControlLabel>
          </Col>
          <Col xs={12} md={8}>
            <FormControl componentClass="select" placeholder="select">
                <option value="yes">Yes</option>
                <option value="no">No</option>
            </FormControl>
          </Col>
      </Row>
    );
  }
}

class Question extends Component {
  render() {
    return (
        <Row className="row question">
            <Col xs={6} md={4}>
                <ControlLabel>Question</ControlLabel>
            </Col>
            <Col xs={12} md={8}>
                <FormControl
                    type="text"
                    value=""
                    placeholder="Question"
                  />
            </Col>
        </Row>
    );
  }
}

class Type extends Component {
    render() {
        return (
            <Row className="type">
                <Col xs={6} md={4}>
                    <ControlLabel>Type</ControlLabel>
                </Col>
                <Col xs={12} md={8}>
                    <FormControl componentClass="select" placeholder="select">
                        <option value="select">Text</option>
                        <option value="other">Number</option>
                        <option value="other">Yes / No (radio)</option>
                    </FormControl>
                </Col>
            </Row>
        );
    }
}

class AddInputButton extends Component {
  render() {
    return (
      <Button bsStyle="success" className="button">Add Input</Button>
    );
  }
}

class AddSubInputButton extends Component {
  render() {
    return (
      <Button bsStyle="success" className="button">Add Sub Input</Button>
    );
  }
}

class DeleteButton extends Component {
    render() {
        return (
            <Button bsStyle="danger" className="button">Delete</Button>
        );
    }
}

class ExportTextArea extends Component {
    render() {
        return (
            <FormGroup controlId="formControlsTextarea">
              <FormControl componentClass="textarea" placeholder="Form JSON " />
            </FormGroup>
        );
    }
}

export default Form;
