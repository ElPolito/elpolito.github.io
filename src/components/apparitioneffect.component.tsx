import BaseComponent from "./base.component";
import React from 'react';
import App from "../app";

const options = {
    threshold: 0.1,
    root: null,
    rootMargin: '0px',
};

interface IState {
    ref: React.RefObject<any>;
    revealed: boolean;
}

interface IProps {
    effect: string[];
    className?: string;
}

export default class ApparitionEffectComponent extends React.Component<IProps, IState> {

    private observer: IntersectionObserver;

    constructor(props: IProps) {
        super(props);
        this.observer = new IntersectionObserver(this.handleIntersect, options)
        this.state = {
            ref: React.createRef(),
            revealed: false,
        };
    }

    public render = () => {
        const effects = [...this.props.effect];
        const effect = effects[0];
        effects.shift();
        return (
            <div ref={this.state.ref} className={`comp-apparition-effect reveal-effect ${effect} ${this.state.revealed ? 'revealed' : ''} ${this.props.className}`}>
                {this.props.effect.length === 1 ? this.props.children : <ApparitionEffectComponent effect={effects}>{this.props.children}</ApparitionEffectComponent>}
            </div>
        )
    }

    public componentDidMount = () => {
        if (this.state.ref.current) {
            this.observer.observe(this.state.ref.current);
        }
    }

    public componentWillUnmount = () => {
        this.observer.unobserve(this.state.ref.current);
        this.observer.disconnect();
    }

    private handleIntersect: IntersectionObserverCallback = (entries, observer) => {
        if (entries.length) {
            if (entries[0].intersectionRatio > 0.1) {
                this.setState(state => ({ ...state, revealed: true }));
                this.observer.unobserve(this.state.ref.current);
                this.observer.disconnect();
            }
        }
    };
}