import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import * as ReactGridLayout from 'react-grid-layout';



interface ReactGridLayoutItem {
    i: string;
    x: number;
    y: number;
    w: number;
    h: number;
    minW?: number;
    maxW?: number;
    static?: boolean;
}

interface ReactGridLayoutState {
    layout: Array<ReactGridLayoutItem>;
    loading: boolean;
}

export class ReactGridLayoutComponent extends React.Component<RouteComponentProps<{}>, ReactGridLayoutState> {
    constructor() {
        super();

        var layout: ReactGridLayoutItem[] = [
            { i: 'a', x: 0, y: 0, w: 1, h: 2, static: true },
            { i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
            { i: 'c', x: 4, y: 0, w: 1, h: 2 }
        ];

        this.state = { layout: layout, loading: true };
    }

    public render() {
        return <div>

            <ReactGridLayout className="layout" layout={this.state.layout}
                cols={12} rowHeight={30} width={1200}>
                <div key="a">a</div>
                <div key="b">b</div>
                <div key="c">c</div>
            </ReactGridLayout>

        </div>;
    }

}

