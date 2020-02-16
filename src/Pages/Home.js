import React, {Component} from 'react';
import axios from 'axios'; 

export default class Home extends Component {
    
    constructor(props) {
        super(props);
        this.state = { works:[] };
    }

    componentDidMount() {
        axios.get('https://remoteok.io/api').then(res => {
            const works = res.data;    
            works.shift();

            const devJobs = works.filter( work => {
                return  work.tags.includes('dev');
            });

            this.setState({ works: devJobs });
            console.log(this.state.works);
        });
    }

    render() {
        const {works} = this.state;
        const list = works.map(
            (work) => {
            return <li key={work.id} className="list-group-item" >{work.position}</li>
            }
        )
    
        return <ul className="list-group">{list}</ul>;
    }
}

