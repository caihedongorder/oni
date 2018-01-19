import * as React from "react"
import * as types from "vscode-languageserver-types"

import { Icon } from "./../Icon"

import { getColorFromSeverity } from "./../../Services/Errors"

export interface IErrorInfoProps {
    style: React.CSSProperties
    errors: types.Diagnostic[]
}

/**
 * Helper component to render errors in the QuickInfo bubble
 */
export class ErrorInfo extends React.PureComponent<IErrorInfoProps, {}> {

    public render(): null | JSX.Element {
        if (!this.props.errors) {
            return null
        }

        const errs = this.props.errors.map((e) => <div className="diagnostic">
            <div className="icon-container" style={{ color: getColorFromSeverity(e.severity) }}>
                <Icon name={"exclamation-circle"} />
            </div>
            <span>{e.message}</span>
        </div>)

        const style = this.props.style || {}

        return <div className="diagnostic-container" style={style}>
            {errs}
        </div>
    }
}
