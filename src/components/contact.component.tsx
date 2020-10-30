import React from "react";
import ApparitionEffectComponent from "./apparitioneffect.component";
import BaseComponent from "./base.component";


export default class ContactComponent extends BaseComponent {
    public render = () => {
        return (
            <>
                <ApparitionEffectComponent effect={['fade']}>
                    <h2 className="section-title">Contact</h2>
                </ApparitionEffectComponent>
                <ApparitionEffectComponent effect={['fade']}>
                    <div className="comp-contact">
                        {this.renderContact("paul.moine@insa-lyon.fr", "email")}
                    </div>
                </ApparitionEffectComponent>
            </>
        )
    }

    private renderContact = (label: string, icon: string) => {
        return (
            <div className="contact">
                <i className="material-icons">{icon}</i>
                <span>{label}</span>
            </div>
        )
    }
}