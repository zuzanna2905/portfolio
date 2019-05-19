import React, {Component} from "react";
import Project from "./Project/Project";
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

const TabContainer = props => {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
        );
}

const styles = theme => ({
    root: {
        marginTop: '10px',
        flexGrow: 1,
        width: '100%',
        backgroundColor: 'transparent',
    },
    app: {
        backgroundColor: 'transparent'
    },
    tabs: {
        color: 'white'
    }
});

class Projects extends Component {
    state = {
        projects: [
            {
                name: 'Farmer',
                description: 'An application to manage a farm business. ' +
                'Data tables with informations about farm fields, employees, machines. ' +
                'Possibility to manipulate on this data (adding, edit, delete). ' +
                'There is a lot possibilities on how to extend the application, for example charts. ' +
                'To use the application logging in is needed. ',
                front: 'React, JavaScript, CSS3, HTML5, Bootstrap',
                back: ' JavaScript, NodeJS, ExpressJS',
                data: 'PostgreSQL',
                test: 'to do',
                frontLink: 'https://github.com/zuzanna2905/Farmer',
                backLink: 'https://github.com/zuzanna2905/FarmerAPI',
                appLink: '',
                imgLink: '',
                imgAlt: ''
            },
            {
                name: 'Spendings',
                description: 'A simple application to manage your daily spendings. ' +
                'Data tables with informations about your spendings. ' +
                'Possibility to manipulate on data (add, edit, delete). ' +
                'Spendings charts in chosen dates. ' +
                'To use the application logging in is needed.',
                front: 'React/Redux, JavaScript, CSS3, HTML5',
                back: 'JavaScript, NodeJS, ExpressJS',
                data: 'PostgreSQL',
                test: 'to do',
                frontLink: 'https://github.com/zuzanna2905/Spendings',
                backLink: 'https://github.com/zuzanna2905/SpendingsAPI',
                appLink: '',
                imgLink: '',
                imgAlt: ''
            },       
            {
                name: 'Burger',
                description: 'An application to compose and order burgers. ' +
                'Possibility to manipulate on burger (add, delete ingredients). ' +
                'Profile page with previous orders. ' +
                'To use the application logging in is needed. ' +
                'Project based on Udemy Course. ',
                front: 'React/Redux, JavaScript, CSS3 (CSS Modules), HTML5, Saga, Hooks, Router',
                back: ' JavaScript, Firebase',
                data: 'Firebase',
                test: 'Jest/Enzyme',
                frontLink: 'https://github.com/zuzanna2905/Burger',
                backLink: '',
                appLink: '',
                imgLink: '',
                imgAlt: ''
            },            
            {
                name: 'Cafes',
                description: 'Four-page side about my best way to relax. ' +
                'Information cards about coffee. ' +
                'Table with best cafes. ' +
                'Coffee gallery. ' +
                'Contact form. ',
                front: 'HTML5 & SCSS/CSS3',
                back: '----',
                data: '----',
                test: '----',
                frontLink: 'https://github.com/zuzanna2905/TricityCoffeehouses',
                backLink: '',
                appLink: '',
                imgLink: '',
                imgAlt: ''
            },
            {
                name: 'Coffee',
                description: 'Single simple page about coffee. ' +
                'Some information about coffee. ' +
                'Contact form',
                front: 'HTML5 & CSS3',
                back: '----',
                data: '----',
                test: '----',
                frontLink: 'https://github.com/zuzanna2905/Coffee',
                backLink: '',
                appLink: '',
                imgLink: '',
                imgAlt: ''
            },
            {
                name: 'Task Manager',
                description: 'A simple application to manage your daily tasks. ' +
                'Possibility to adding new tasks and marking tasks as completed. ' +
                'To use the application logging in is needed. ',
                front: 'React, JavaScript, CSS3, HTML5',
                back: 'JavaScript, NodeJS, ExpressJS',
                data: 'PostgreSQL',
                test: 'Jest / Mocha+Chai',
                frontLink: 'https://github.com/zuzanna2905/TaskManager/tree/simple',
                backLink: 'https://github.com/zuzanna2905/taskManagerAPI',
                appLink: '',
                imgLink: '',
                imgAlt: ''
            },
            {
                name: 'Travels',
                description: 'A simple responsive page with travel photos. ',
                front: 'HTML5 & CSS3(css-grid & flexbox)',
                back: '----',
                data: '----',
                test: '----',
                frontLink: 'https://github.com/zuzanna2905/travel',
                backLink: '',
                appLink: '',
                imgLink: '',
                imgAlt: ''
            },
            {
                name: 'Blog',
                description: 'A server side rendering site with some blog posts. ' +
                'Contact form, About page. ',
                front: 'HTML5 & CSS3 (styled-components library)',
                back: 'NextJS, JavaScript',
                data: '----',
                test: '----',
                frontLink: 'https://github.com/zuzanna2905/blog',
                backLink: '',
                appLink: '',
                imgLink: '',
                imgAlt: ''
            },
            {
                name: 'Smart Brain',
                description: 'Dockerized React App. ' +
                'Use clarifai API to recignize faces on images. ' +
                'To use app you have to register and sign in to your account/ ' + 
                'This is a part of Udemy Web Development course. ',
                front: 'React, JavaScript, CSS3, HTML5, Tachyons',
                back: 'JavaScript, NodeJS, ExpressJS',
                data: 'PostgreSQL',
                test: 'Mocha/Chai',
                frontLink: 'https://github.com/zuzanna2905/facerecognition',
                backLink: 'https://github.com/zuzanna2905/facerecognitionAPI',
                appLink: 'https://sleepy-mesa-24434.herokuapp.com/',
                imgLink: '',
                imgAlt: ''
            },
            {
                name: 'Robo Friends App',
                description: 'A simple app with some Robots and Search box to filter them. ' +
                'This is a part of Udemy Web Development course. ',
                front: 'React/Redux, HTML5, CSS3 (tachyons), JavaScript',
                back: '----',
                data: '----',
                test: 'Jest/Enzyme',
                frontLink: '',
                backLink: '',
                appLink: 'https://robotsfriends.herokuapp.com/',
                imgLink: '',
                imgAlt: ''
            }
        ],
        value: 0
    }

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render () {
        const { classes } = this.props;
        const { value } = this.state;
        let projectsList = this.state.projects.map(project => 
                <TabContainer>
                    <Project key={project.name} data={project}/>
                </TabContainer>
        )
        let tabs = this.state.projects.map(project => <Tab key={project.name} label={project.name} />)
        return (
            <div className={classes.root}>
                <AppBar position="static" className={classes.app}>
                    <Tabs
                    value={value}
                    onChange={this.handleChange}
                    className={classes.tabs}
                    variant="scrollable"
                    scrollButtons="auto"
                    >
                    {tabs}
                    </Tabs>
                </AppBar>    
                {value === 0 && projectsList[0]}
                {value === 1 && projectsList[1]}
                {value === 2 && projectsList[2]}
                {value === 3 && projectsList[3]}
                {value === 4 && projectsList[4]}
                {value === 5 && projectsList[5]}
                {value === 6 && projectsList[6]}
                {value === 7 && projectsList[7]}
                {value === 8 && projectsList[8]}
                {value === 9 && projectsList[9]}
            </div>
        )
    }
}

  export default withStyles(styles)(Projects);