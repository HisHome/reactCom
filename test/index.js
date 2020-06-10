

import React ,{Component} from 'react';
import ReactDom from 'react-dom';
import { Link, Button } from '../lib/';

export default class Input extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <Button />
                hahahahah
                <Link title="挑战" />
            </div>
        )
    }
}

ReactDom.render( <Input /> , document.querySelector("#root"))



