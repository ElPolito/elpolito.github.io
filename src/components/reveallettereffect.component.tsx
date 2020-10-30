import React from "react";
import BaseComponent from "./base.component";

interface IProps {
    text: string;
}

export default class RevealLetterEffectComponent extends BaseComponent<IProps> {
    public render = () => {
        const letters: JSX.Element[] = [];
        for (let i = 0; i < this.props.text.length; ++i) {
            if (this.props.text[i] === ' ') {
                letters.push(<span key={i} className="space"> </span>);
            } else {
                letters.push(<span style={{ animationDelay: (i * 0.1) + "s" }} className="anim" key={i}>{this.props.text[i]}</span>);
            }
        }
        return (
            <div className="reveal-letter-effect">
                {letters}
            </div>
        )
    }
}